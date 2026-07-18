import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import {
  CITIES,
  latLngToVector3,
  isDaytimeSolar,
  approxSunDirection,
  getLocalTimeZone,
} from './timezones.js';

const EARTH_RADIUS = 1.6;
const PIN_RADIUS = EARTH_RADIUS * 1.012;
const CLICK_PX = 6;

export class ApexGlobe {
  constructor(canvas, callbacks = {}) {
    this.canvas = canvas;
    this.callbacks = callbacks;
    this.pinnedIds = new Set();
    this.selectedId = null;
    this.localCityId = null;
    this.homeCityId = null;
    this.pins = new Map();
    this.labels = new Map();
    this.raycaster = new THREE.Raycaster();
    this.pointer = new THREE.Vector2();
    this.ready = false;
    this._hoverId = null;
    this._paused = false;
    this._autoRotate = true;
    this._showGrid = true;
    this._showBands = false;
    this._quality = 'high';
    this._sunDir = approxSunDirection(new Date());
    this._ptrDown = null;
    this._labelLayer = null;

    this._initRenderer();
    this._initScene();
    this._initCamera();
    this._initControls();
    this._initLights();
    this._bindEvents();
    this._initLabelLayer();
  }

  async init() {
    await this._loadEarth();
    this._createStars();
    this._createAtmosphere();
    this._createPins();
    this._createTzBands();
    this._estimateLocalPin();
    this.ready = true;
    this._animate();
    this.callbacks.onReady?.();
  }

  setPaused(paused) {
    this._paused = !!paused;
    if (!this._paused && this.ready) {
      cancelAnimationFrame(this._raf);
      this._animate();
    }
  }

  setAutoRotate(on) {
    this._autoRotate = !!on;
    this.controls.autoRotate = this._autoRotate;
  }

  setShowGrid(on) {
    this._showGrid = !!on;
    if (this.gridGroup) this.gridGroup.visible = this._showGrid;
  }

  setShowBands(on) {
    this._showBands = !!on;
    if (this.bandGroup) this.bandGroup.visible = this._showBands;
  }

  setQuality(q) {
    this._quality = q;
    const pr = q === 'low' ? 1 : q === 'medium' ? Math.min(window.devicePixelRatio || 1, 1.5) : Math.min(window.devicePixelRatio || 1, 2);
    this.renderer.setPixelRatio(pr);
    // Rebuild sphere geometry so "low" actually reduces vertex load
    const segs = q === 'low' ? 48 : 96;
    if (this.earth && this._earthSegs !== segs) {
      this._earthSegs = segs;
      this.earth.geometry.dispose();
      this.earth.geometry = new THREE.SphereGeometry(EARTH_RADIUS, segs, segs);
      if (this.clouds) {
        const cs = Math.min(segs, 64);
        this.clouds.geometry.dispose();
        this.clouds.geometry = new THREE.SphereGeometry(EARTH_RADIUS * 1.012, cs, cs);
      }
    }
  }

  setPinned(ids) {
    this.pinnedIds = new Set(ids);
    this._refreshPinStyles();
    this._updateLabelsVisibility();
  }

  setHomeCity(id) {
    this.homeCityId = id;
    this.localCityId = id || this.localCityId;
    this._refreshPinStyles();
  }

  /**
   * Map sports events as diamond markers. events: [{ id, lat, lng, name, highlight? }]
   */
  /** Build a sport-specific core mesh (glyph language). */
  _sportCoreGeometry(glyph) {
    switch (glyph) {
      case 'octagon':
        return new THREE.CylinderGeometry(0.02, 0.02, 0.01, 8);
      case 'wave':
        return new THREE.TorusGeometry(0.016, 0.006, 6, 12, Math.PI);
      case 'flag':
      case 'helmet':
        return new THREE.ConeGeometry(0.018, 0.036, 5);
      case 'ball':
      case 'oval':
        return new THREE.SphereGeometry(0.018, 10, 10);
      case 'wheel':
        return new THREE.TorusGeometry(0.016, 0.005, 6, 14);
      case 'tee':
        return new THREE.ConeGeometry(0.014, 0.032, 6);
      case 'bat':
        return new THREE.BoxGeometry(0.01, 0.034, 0.01);
      case 'track':
        return new THREE.TorusGeometry(0.017, 0.004, 6, 16);
      case 'racket':
        return new THREE.TorusGeometry(0.015, 0.005, 6, 12);
      default:
        return new THREE.OctahedronGeometry(0.022, 0);
    }
  }

  /**
   * Map sports events as markers. events: [{ id, lat, lng, name, color?, glyph?, highlight?, live? }]
   */
  setEventMarkers(events = []) {
    if (!this.earthGroup) return;
    // Clear old event labels
    if (this.eventMarkers) {
      for (const eid of this.eventMarkers.keys()) {
        const el = this.labels.get('ev:' + eid);
        if (el) {
          el.remove();
          this.labels.delete('ev:' + eid);
        }
      }
    }
    if (this.eventGroup) {
      this.earthGroup.remove(this.eventGroup);
      this.eventGroup.traverse((o) => {
        if (o.geometry) o.geometry.dispose();
        if (o.material) {
          if (Array.isArray(o.material)) o.material.forEach((m) => m.dispose());
          else o.material.dispose();
        }
      });
    }
    this.eventMarkers = new Map();
    this.eventGroup = new THREE.Group();
    this.earthGroup.add(this.eventGroup);

    // Simple label collision: prefer highlighted/live, then stagger
    const labelBudget = [];
    for (const ev of events) {
      if (typeof ev.lat !== 'number' || typeof ev.lng !== 'number') continue;
      const pos = latLngToVector3(ev.lat, ev.lng, PIN_RADIUS * 1.02);
      const color = ev.highlight ? 0xff6bcb : (typeof ev.color === 'number' ? ev.color : 0xffd166);
      const glowSize = ev.live || ev.highlight ? 0.048 : 0.036;
      const glow = new THREE.Mesh(
        new THREE.SphereGeometry(glowSize, 12, 12),
        new THREE.MeshBasicMaterial({ color, transparent: true, opacity: ev.live ? 0.55 : 0.4, depthWrite: false })
      );
      const core = new THREE.Mesh(
        this._sportCoreGeometry(ev.glyph),
        new THREE.MeshBasicMaterial({ color })
      );
      const g = new THREE.Group();
      g.add(glow, core);
      g.position.set(pos.x, pos.y, pos.z);
      g.lookAt(0, 0, 0);
      g.userData = { event: ev, core, glow, live: !!ev.live, pulse: !!ev.live || !!ev.highlight };
      const hit = new THREE.Mesh(
        new THREE.SphereGeometry(0.065, 8, 8),
        new THREE.MeshBasicMaterial({ visible: false })
      );
      g.add(hit);
      g.userData.hit = hit;
      this.eventGroup.add(g);
      this.eventMarkers.set(ev.id, g);

      if (this._labelLayer) {
        const el = document.createElement('div');
        el.className = 'globe-label event-label' + (ev.highlight ? ' active' : '') + (ev.live ? ' live' : '');
        el.textContent = ev.shortName || ev.name || 'Event';
        el.style.display = 'none';
        this._labelLayer.appendChild(el);
        this.labels.set('ev:' + ev.id, el);
        labelBudget.push({ id: ev.id, priority: (ev.highlight ? 3 : 0) + (ev.live ? 2 : 0) });
      }
    }
    this._eventLabelPriority = new Map(labelBudget.map((x) => [x.id, x.priority]));
    this._updateLabelsVisibility();
  }

  clearEventMarkers() {
    this.setEventMarkers([]);
  }

  selectCity(id, fly = true) {
    this.selectedId = id;
    this._refreshPinStyles();
    this._updateLabelsVisibility();
    if (fly && id) {
      const city = CITIES.find((c) => c.id === id);
      if (city) this.flyTo(city.lat, city.lng);
    }
    this.callbacks.onSelect?.(id);
  }

  flyTo(lat, lng, duration = 1.1) {
    if (this._reducedMotion) duration = Math.min(duration, 0.35);
    const target = latLngToVector3(lat, lng, EARTH_RADIUS * 2.85);
    const start = this.camera.position.clone();
    const end = new THREE.Vector3(target.x, target.y, target.z);
    const dist = this.camera.position.length();
    end.setLength(Math.max(2.4, Math.min(dist, 5.5)));

    // Cancel any in-flight camera tween
    this._flyToken = (this._flyToken || 0) + 1;
    const token = this._flyToken;
    const startTime = performance.now();
    const animateFly = (now) => {
      if (this._paused || token !== this._flyToken) return;
      const t = Math.min(1, (now - startTime) / (duration * 1000));
      // Smoother ease-in-out cubic
      const ease = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      this.camera.position.lerpVectors(start, end, ease);
      this.controls.target.set(0, 0, 0);
      this.controls.update();
      if (t < 1) requestAnimationFrame(animateFly);
    };
    requestAnimationFrame(animateFly);
  }

  setReducedMotion(on) {
    this._reducedMotion = !!on;
    if (on) {
      this.controls.autoRotate = false;
      this._autoRotate = false;
    }
  }

  updateClocks(now = new Date()) {
    this._sunDir = approxSunDirection(now);
    for (const pin of this.pins.values()) {
      const city = pin.userData.city;
      pin.userData.isDay = isDaytimeSolar(city.lat, city.lng, this._sunDir);
    }
    this._refreshPinStyles();
    if (this.clouds && !this._paused) {
      this.clouds.rotation.y += 0.00015;
    }
    this._updateSun(now);
    this._updateLabelsVisibility();
  }

  getSunDir() {
    return this._sunDir;
  }

  resize() {
    const parent = this.canvas.parentElement;
    if (!parent) return;
    const w = parent.clientWidth;
    const h = parent.clientHeight;
    if (w < 2 || h < 2) return;
    this.renderer.setSize(w, h, false);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    if (this._labelLayer) {
      this._labelLayer.style.width = w + 'px';
      this._labelLayer.style.height = h + 'px';
    }
  }

  dispose() {
    cancelAnimationFrame(this._raf);
    window.removeEventListener('resize', this._onResize);
    this.canvas.removeEventListener('pointermove', this._onPointerMove);
    this.canvas.removeEventListener('pointerdown', this._onPointerDown);
    this.canvas.removeEventListener('pointerup', this._onPointerUp);
    this.canvas.removeEventListener('pointerleave', this._onPointerLeave);
    this.renderer.dispose();
    this._labelLayer?.remove();
  }

  _initRenderer() {
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    this.renderer.setClearColor(0x000000, 0);
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.15;
  }

  _initScene() {
    this.scene = new THREE.Scene();
    this.earthGroup = new THREE.Group();
    this.scene.add(this.earthGroup);
  }

  _initCamera() {
    const parent = this.canvas.parentElement;
    const w = parent?.clientWidth || 800;
    const h = parent?.clientHeight || 600;
    this.camera = new THREE.PerspectiveCamera(42, w / h, 0.1, 200);
    this.camera.position.set(0.8, 0.55, 4.2);
    this.renderer.setSize(w, h, false);
  }

  _initControls() {
    this.controls = new OrbitControls(this.camera, this.canvas);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.06;
    this.controls.rotateSpeed = 0.55;
    this.controls.zoomSpeed = 0.85;
    this.controls.minDistance = 2.15;
    this.controls.maxDistance = 8.5;
    this.controls.enablePan = false;
    this.controls.autoRotate = true;
    this.controls.autoRotateSpeed = 0.35;
  }

  _initLights() {
    this.scene.add(new THREE.AmbientLight(0x1a2744, 0.55));
    this.sunLight = new THREE.DirectionalLight(0xfff4e0, 2.4);
    this.sunLight.position.set(5, 1, 2);
    this.scene.add(this.sunLight);
    const rim = new THREE.DirectionalLight(0x4dc9ff, 0.35);
    rim.position.set(-4, -1, -3);
    this.scene.add(rim);
    this.scene.add(new THREE.HemisphereLight(0x0a1a33, 0x02040a, 0.45));
  }

  _initLabelLayer() {
    const layer = document.createElement('div');
    layer.className = 'globe-labels';
    layer.style.cssText =
      'position:absolute;inset:0;pointer-events:none;overflow:hidden;z-index:4;';
    this.canvas.parentElement.appendChild(layer);
    this._labelLayer = layer;
  }

  async _loadEarth() {
    const loader = new THREE.TextureLoader();
    const load = (url) =>
      new Promise((resolve, reject) => {
        loader.load(url, resolve, undefined, reject);
      });
    const tex = (name) => new URL(`../public/textures/${name}`, window.location.href).href;
    let dayMap, nightMap, cloudMap;
    try {
      [dayMap, nightMap, cloudMap] = await Promise.all([
        load(tex('earth_day.jpg')),
        load(tex('earth_night.jpg')),
        load(tex('earth_clouds.jpg')),
      ]);
    } catch (err) {
      console.warn('Texture load failed', err);
      dayMap = this._makeFallbackTexture('#1a6b9a', '#1f8f4e');
      nightMap = this._makeFallbackTexture('#050a18', '#1a3050');
      cloudMap = this._makeFallbackTexture('#ffffff', '#cccccc', 0.3);
    }
    for (const t of [dayMap, nightMap, cloudMap]) {
      t.colorSpace = THREE.SRGBColorSpace;
      t.anisotropy = this.renderer.capabilities.getMaxAnisotropy();
      t.generateMipmaps = true;
      t.minFilter = THREE.LinearMipmapLinearFilter;
      t.magFilter = THREE.LinearFilter;
    }
    this._textures = { dayMap, nightMap, cloudMap };

    const segs = this._quality === 'low' ? 48 : 96;
    this._earthSegs = segs;
    const earthGeo = new THREE.SphereGeometry(EARTH_RADIUS, segs, segs);
    const earthMat = new THREE.ShaderMaterial({
      uniforms: {
        dayTexture: { value: dayMap },
        nightTexture: { value: nightMap },
        sunDirection: { value: new THREE.Vector3(1, 0.2, 0.3).normalize() },
      },
      vertexShader: `
        varying vec2 vUv; varying vec3 vNormalW;
        void main() {
          vUv = uv;
          vec4 worldPos = modelMatrix * vec4(position, 1.0);
          vNormalW = normalize(mat3(modelMatrix) * normal);
          gl_Position = projectionMatrix * viewMatrix * worldPos;
        }`,
      fragmentShader: `
        uniform sampler2D dayTexture; uniform sampler2D nightTexture; uniform vec3 sunDirection;
        varying vec2 vUv; varying vec3 vNormalW;
        void main() {
          vec3 day = texture2D(dayTexture, vUv).rgb;
          vec3 night = texture2D(nightTexture, vUv).rgb;
          vec3 n = normalize(vNormalW);
          vec3 l = normalize(sunDirection);
          float ndotl = dot(n, l);
          // Soft terminator — denser sampling feel without higher-res textures
          float dayAmount = smoothstep(-0.08, 0.28, ndotl);
          float term = 1.0 - smoothstep(0.0, 0.35, abs(ndotl - 0.05));
          vec3 nightLit = night * 1.45 + vec3(0.015, 0.035, 0.07);
          // City lights pop a touch more on the night side
          nightLit += night * night * vec3(0.15, 0.12, 0.05);
          vec3 color = mix(nightLit, day * 1.04, dayAmount);
          // Ocean-ish specular on the lit side
          float spec = pow(max(ndotl, 0.0), 32.0) * 0.22;
          color += vec3(0.55, 0.72, 1.0) * spec * dayAmount;
          // Warm→cool terminator glow
          color += vec3(1.0, 0.55, 0.25) * term * 0.12;
          color += vec3(0.25, 0.55, 1.0) * term * 0.06;
          gl_FragColor = vec4(color, 1.0);
        }`,
    });
    this.earth = new THREE.Mesh(earthGeo, earthMat);
    this.earthGroup.add(this.earth);
    this.earthMat = earthMat;

    const cloudGeo = new THREE.SphereGeometry(EARTH_RADIUS * 1.012, 64, 64);
    this.clouds = new THREE.Mesh(
      cloudGeo,
      new THREE.MeshPhongMaterial({
        map: cloudMap,
        transparent: true,
        opacity: 0.32,
        depthWrite: false,
        side: THREE.DoubleSide,
      })
    );
    this.earthGroup.add(this.clouds);
    this._createGridOverlay();
  }

  _createGridOverlay() {
    this.gridGroup = new THREE.Group();
    const mat = new THREE.LineBasicMaterial({ color: 0x4dc9ff, transparent: true, opacity: 0.07 });
    for (let lat = -60; lat <= 60; lat += 30) {
      const pts = [];
      for (let lng = 0; lng <= 360; lng += 4) {
        const v = latLngToVector3(lat, lng - 180, EARTH_RADIUS * 1.004);
        pts.push(new THREE.Vector3(v.x, v.y, v.z));
      }
      this.gridGroup.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), mat));
    }
    for (let lng = -180; lng < 180; lng += 30) {
      const pts = [];
      for (let lat = -90; lat <= 90; lat += 4) {
        const v = latLngToVector3(lat, lng, EARTH_RADIUS * 1.004);
        pts.push(new THREE.Vector3(v.x, v.y, v.z));
      }
      this.gridGroup.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), mat));
    }
    const eqMat = new THREE.LineBasicMaterial({ color: 0x7af0ff, transparent: true, opacity: 0.22 });
    const eqPts = [];
    for (let lng = 0; lng <= 360; lng += 2) {
      const v = latLngToVector3(0, lng - 180, EARTH_RADIUS * 1.006);
      eqPts.push(new THREE.Vector3(v.x, v.y, v.z));
    }
    this.gridGroup.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(eqPts), eqMat));
    this.earthGroup.add(this.gridGroup);
  }

  _createTzBands() {
    // Visual approximate UTC offset bands (not legal TZ GIS)
    this.bandGroup = new THREE.Group();
    this.bandGroup.visible = false;
    const colors = [0x4dc9ff, 0x5ef2c2, 0xffd166, 0xff6bcb];
    for (let i = 0; i < 24; i++) {
      const lng0 = -180 + i * 15;
      const lng1 = lng0 + 15;
      const pts = [];
      for (let lat = -85; lat <= 85; lat += 5) {
        const v = latLngToVector3(lat, lng0 + 7.5, EARTH_RADIUS * 1.008);
        pts.push(new THREE.Vector3(v.x, v.y, v.z));
      }
      const mat = new THREE.LineBasicMaterial({
        color: colors[i % colors.length],
        transparent: true,
        opacity: 0.12,
      });
      this.bandGroup.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), mat));
    }
    this.earthGroup.add(this.bandGroup);
  }

  _createAtmosphere() {
    // Outer limb glow
    const outerGeo = new THREE.SphereGeometry(EARTH_RADIUS * 1.1, 64, 64);
    const outerMat = new THREE.ShaderMaterial({
      vertexShader: `varying vec3 vNormal; void main(){ vNormal=normalize(normalMatrix*normal); gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}`,
      fragmentShader: `varying vec3 vNormal; void main(){
        float intensity = pow(0.62 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.4);
        gl_FragColor = vec4(0.28, 0.72, 1.0, 1.0) * intensity * 1.05;
      }`,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
      transparent: true,
      depthWrite: false,
    });
    this.atmosphere = new THREE.Mesh(outerGeo, outerMat);
    this.scene.add(this.atmosphere);
    // Thin inner haze for depth
    const innerGeo = new THREE.SphereGeometry(EARTH_RADIUS * 1.02, 48, 48);
    const innerMat = new THREE.ShaderMaterial({
      vertexShader: `varying vec3 vNormal; void main(){ vNormal=normalize(normalMatrix*normal); gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}`,
      fragmentShader: `varying vec3 vNormal; void main(){
        float fresnel = pow(1.0 - abs(dot(vNormal, vec3(0.0, 0.0, 1.0))), 3.0);
        gl_FragColor = vec4(0.4, 0.75, 1.0, fresnel * 0.18);
      }`,
      blending: THREE.AdditiveBlending,
      side: THREE.FrontSide,
      transparent: true,
      depthWrite: false,
    });
    this.earthGroup.add(new THREE.Mesh(innerGeo, innerMat));
  }

  _createStars() {
    const count = 2800;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 40 + Math.random() * 60;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
      const c = 0.7 + Math.random() * 0.3;
      colors[i * 3] = c;
      colors[i * 3 + 1] = c;
      colors[i * 3 + 2] = c;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    this.stars = new THREE.Points(
      geo,
      new THREE.PointsMaterial({
        size: 0.08,
        vertexColors: true,
        transparent: true,
        opacity: 0.9,
        sizeAttenuation: true,
        depthWrite: false,
      })
    );
    this.scene.add(this.stars);
  }

  _createPins() {
    this.pinGroup = new THREE.Group();
    this.earthGroup.add(this.pinGroup);

    // Cluster-aware hit radius: denser regions get slightly larger exclusive hits via ray distance sort
    for (const city of CITIES) {
      const pos = latLngToVector3(city.lat, city.lng, PIN_RADIUS);
      const glow = new THREE.Mesh(
        new THREE.SphereGeometry(0.028, 12, 12),
        new THREE.MeshBasicMaterial({ color: 0x4dc9ff, transparent: true, opacity: 0.35, depthWrite: false })
      );
      const core = new THREE.Mesh(
        new THREE.SphereGeometry(0.014, 12, 12),
        new THREE.MeshBasicMaterial({ color: 0xa8f0ff })
      );
      const stem = new THREE.Mesh(
        new THREE.CylinderGeometry(0.003, 0.003, 0.04, 6),
        new THREE.MeshBasicMaterial({ color: 0x4dc9ff, transparent: true, opacity: 0.55 })
      );
      stem.position.y = -0.02;

      const pin = new THREE.Group();
      pin.add(glow, core, stem);
      pin.position.set(pos.x, pos.y, pos.z);
      pin.lookAt(0, 0, 0);
      pin.rotateX(Math.PI / 2);

      // Larger hit targets for usability in dense clusters
      const hit = new THREE.Mesh(
        new THREE.SphereGeometry(0.055, 8, 8),
        new THREE.MeshBasicMaterial({ visible: false })
      );
      pin.add(hit);
      pin.userData = { city, core, glow, stem, hit, isDay: true, baseScale: 1 };

      this.pinGroup.add(pin);
      this.pins.set(city.id, pin);

      // Label element
      const el = document.createElement('div');
      el.className = 'globe-label';
      el.textContent = city.name;
      el.style.display = 'none';
      this._labelLayer.appendChild(el);
      this.labels.set(city.id, el);
    }
  }

  _estimateLocalPin() {
    if (this.homeCityId && this.pins.has(this.homeCityId)) {
      this.localCityId = this.homeCityId;
      return;
    }
    const localTz = getLocalTimeZone();
    let best = CITIES.find((c) => c.tz === localTz);
    if (!best) {
      const region = localTz.split('/')[0];
      best = CITIES.find((c) => c.tz.startsWith(region + '/'));
    }
    if (best) this.localCityId = best.id;
  }

  setPinDensity(mode = 'auto') {
    // auto | pinned | all
    this._pinDensity = mode || 'auto';
    this._refreshPinStyles();
    this._updateLabelsVisibility();
  }

  _refreshPinStyles() {
    const density = this._pinDensity || 'auto';
    for (const [id, pin] of this.pins) {
      const { core, glow, stem, isDay } = pin.userData;
      const isSelected = id === this.selectedId;
      const isPinned = this.pinnedIds.has(id);
      const isLocal = id === this.localCityId || id === this.homeCityId;
      const isHover = id === this._hoverId;

      // Density: hide uninteresting pins when zoomed out or in pinned mode
      let visible = true;
      if (density === 'pinned') {
        visible = isSelected || isPinned || isLocal || isHover;
      } else if (density === 'auto') {
        // Always show important; ambient city pins only when closer
        const dist = this.camera?.position.length() ?? 4;
        if (!isSelected && !isPinned && !isLocal && !isHover && dist > 3.8) {
          visible = false;
        }
      }
      pin.visible = visible;
      if (!visible) continue;

      // Priority: selected > local/home > pinned > day/night
      let color;
      if (isSelected) color = 0xff6bcb;
      else if (isLocal) color = 0xffd166;
      else if (isPinned) color = 0x5ef2c2;
      else if (isDay) color = 0x7ad7ff;
      else color = 0x5a6ad4;

      core.material.color.setHex(color);
      glow.material.color.setHex(color);
      stem.material.color.setHex(color);

      const scale = isSelected ? 1.7 : isLocal ? 1.4 : isPinned ? 1.28 : isHover ? 1.15 : 0.92;
      pin.userData.baseScale = scale;
      if (!isSelected || this._paused) pin.scale.setScalar(scale);
      glow.material.opacity = isSelected ? 0.6 : isLocal ? 0.5 : isPinned ? 0.42 : 0.22;
      // Soft glow: home always warm; pinned night cities pulse
      pin.userData.pulse = (isPinned && !isDay) || isLocal;
    }
  }

  _updateLabelsVisibility() {
    if (!this.camera || !this._labelLayer) return;
    const dist = this.camera.position.length();
    const zoomed = dist < 3.4;
    const tmp = new THREE.Vector3();
    for (const [id, pin] of this.pins) {
      const el = this.labels.get(id);
      if (!el) continue;
      const show =
        id === this.selectedId ||
        id === this._hoverId ||
        (zoomed && (this.pinnedIds.has(id) || id === this.localCityId));
      if (!show) {
        el.style.display = 'none';
        continue;
      }
      tmp.copy(pin.position).normalize();
      const camDir = this.camera.position.clone().normalize();
      if (tmp.dot(camDir) < 0.15) {
        el.style.display = 'none';
        continue;
      }
      tmp.copy(pin.position).project(this.camera);
      const x = (tmp.x * 0.5 + 0.5) * this._labelLayer.clientWidth;
      const y = (-tmp.y * 0.5 + 0.5) * this._labelLayer.clientHeight;
      el.style.display = 'block';
      el.style.transform = `translate(-50%, -120%) translate(${x}px, ${y}px)`;
      el.classList.toggle('active', id === this.selectedId);
    }
    // Sports event labels — collision budget (~6 on screen)
    if (this.eventMarkers) {
      const candidates = [];
      for (const [eid, marker] of this.eventMarkers) {
        const el = this.labels.get('ev:' + eid);
        if (!el) continue;
        tmp.copy(marker.position).normalize();
        const camDir = this.camera.position.clone().normalize();
        const facing = tmp.dot(camDir);
        if (facing < 0.12) {
          el.style.display = 'none';
          continue;
        }
        const force =
          this._hoverEventId === eid ||
          marker.userData.event?.highlight ||
          marker.userData.live;
        const pri = (this._eventLabelPriority?.get(eid) || 0) + facing + (force ? 5 : 0);
        if (!force && !zoomed) {
          el.style.display = 'none';
          continue;
        }
        tmp.copy(marker.position).project(this.camera);
        const x = (tmp.x * 0.5 + 0.5) * this._labelLayer.clientWidth;
        const y = (-tmp.y * 0.5 + 0.5) * this._labelLayer.clientHeight;
        candidates.push({ el, x, y, pri, force });
      }
      candidates.sort((a, b) => b.pri - a.pri);
      const placed = [];
      const minDist = 36;
      let shown = 0;
      for (const c of candidates) {
        const collides = placed.some((p) => Math.hypot(p.x - c.x, p.y - c.y) < minDist);
        if (collides && !c.force) {
          c.el.style.display = 'none';
          continue;
        }
        if (shown >= 6 && !c.force) {
          c.el.style.display = 'none';
          continue;
        }
        c.el.style.display = 'block';
        c.el.style.transform = `translate(-50%, -130%) translate(${c.x}px, ${c.y}px)`;
        placed.push(c);
        shown++;
      }
    }
  }

  _updateSun(now) {
    const dir = approxSunDirection(now);
    this._sunDir = dir;
    if (this.earthMat) {
      this.earthMat.uniforms.sunDirection.value.set(dir.x, dir.y, dir.z);
    }
    this.sunLight.position.set(dir.x * 10, dir.y * 10, dir.z * 10);
  }

  _makeFallbackTexture(c1, c2, alpha = 1) {
    const size = 256;
    const c = document.createElement('canvas');
    c.width = size;
    c.height = size;
    const ctx = c.getContext('2d');
    const g = ctx.createLinearGradient(0, 0, size, size);
    g.addColorStop(0, c1);
    g.addColorStop(1, c2);
    ctx.fillStyle = g;
    ctx.globalAlpha = alpha;
    ctx.fillRect(0, 0, size, size);
    const tex = new THREE.CanvasTexture(c);
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  }

  _bindEvents() {
    this._onResize = () => this.resize();
    window.addEventListener('resize', this._onResize);

    this._onPointerMove = (e) => this._handlePointer(e, false);
    this._onPointerDown = (e) => {
      this._ptrDown = { x: e.clientX, y: e.clientY, t: performance.now() };
      this._handlePointer(e, false);
    };
    this._onPointerUp = (e) => {
      if (!this._ptrDown) return;
      const dx = e.clientX - this._ptrDown.x;
      const dy = e.clientY - this._ptrDown.y;
      const dist = Math.hypot(dx, dy);
      const isClick = dist < CLICK_PX;
      this._ptrDown = null;
      if (isClick) this._handlePointer(e, true);
    };
    this._onPointerLeave = () => {
      this._ptrDown = null;
      this._hoverId = null;
      this.callbacks.onHover?.(null);
      this.canvas.style.cursor = 'grab';
      this._updateLabelsVisibility();
    };

    this.canvas.addEventListener('pointermove', this._onPointerMove);
    this.canvas.addEventListener('pointerdown', this._onPointerDown);
    this.canvas.addEventListener('pointerup', this._onPointerUp);
    this.canvas.addEventListener('pointerleave', this._onPointerLeave);

    this.controls.addEventListener('start', () => {
      this.controls.autoRotate = false;
    });
    this.controls.addEventListener('end', () => {
      clearTimeout(this._autoRotateTimer);
      this._autoRotateTimer = setTimeout(() => {
        this.controls.autoRotate = this._autoRotate;
      }, 4000);
    });
  }

  _handlePointer(event, isClick) {
    const rect = this.canvas.getBoundingClientRect();
    this.pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    this.pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    this.raycaster.setFromCamera(this.pointer, this.camera);

    // Event markers first (sports mode)
    if (this.eventMarkers && this.eventMarkers.size) {
      const evHits = [];
      for (const marker of this.eventMarkers.values()) {
        const intersects = this.raycaster.intersectObject(marker.userData.hit, false);
        if (intersects.length) {
          evHits.push({ marker, dist: intersects[0].distance });
        }
      }
      evHits.sort((a, b) => a.dist - b.dist);
      if (evHits.length) {
        const ev = evHits[0].marker.userData.event;
        this.canvas.style.cursor = 'pointer';
        if (this._hoverEventId !== ev.id) {
          this._hoverEventId = ev.id;
          this.callbacks.onEventHover?.(ev);
        }
        if (isClick) {
          this.flyTo(ev.lat, ev.lng);
          this.callbacks.onEventClick?.(ev);
        }
        return;
      }
      this._hoverEventId = null;
    }

    const hits = [];
    for (const pin of this.pins.values()) {
      const intersects = this.raycaster.intersectObject(pin.userData.hit, false);
      if (intersects.length) {
        const facing = pin.position.clone().normalize().dot(this.camera.position.clone().normalize());
        hits.push({ pin, dist: intersects[0].distance, facing });
      }
    }
    hits.sort((a, b) => {
      if (a.facing > 0.2 && b.facing <= 0.2) return -1;
      if (b.facing > 0.2 && a.facing <= 0.2) return 1;
      return a.dist - b.dist;
    });

    if (hits.length) {
      const city = hits[0].pin.userData.city;
      this.canvas.style.cursor = 'pointer';
      if (this._hoverId !== city.id) {
        this._hoverId = city.id;
        this.callbacks.onHover?.(city);
        this._updateLabelsVisibility();
      }
      if (isClick) {
        this.selectCity(city.id, true);
        this.callbacks.onPinClick?.(city);
      }
    } else {
      this.canvas.style.cursor = 'grab';
      if (this._hoverId) {
        this._hoverId = null;
        this.callbacks.onHover?.(null);
        this._updateLabelsVisibility();
      }
    }
  }

  _animate() {
    if (this._paused) {
      this._raf = null;
      return;
    }
    this._raf = requestAnimationFrame(() => this._animate());
    this.controls.update();
    if (this.stars) this.stars.rotation.y += 0.00002;

    const t = performance.now() * 0.004;
    if (!this._reducedMotion) {
      for (const pin of this.pins.values()) {
        if (!pin.visible) continue;
        if (pin.userData.city.id === this.selectedId) {
          pin.scale.setScalar(1.55 + Math.sin(t) * 0.12);
        } else if (pin.userData.pulse) {
          const s = pin.userData.baseScale * (1 + Math.sin(t * 1.3) * 0.08);
          pin.scale.setScalar(s);
          pin.userData.glow.material.opacity = 0.28 + (Math.sin(t * 1.3) * 0.5 + 0.5) * 0.25;
        }
      }
      if (this.eventMarkers) {
        for (const marker of this.eventMarkers.values()) {
          if (!marker.userData.pulse) continue;
          const s = 1 + Math.sin(t * 1.6) * 0.12;
          marker.scale.setScalar(s);
          if (marker.userData.glow) {
            marker.userData.glow.material.opacity = 0.35 + (Math.sin(t * 1.6) * 0.5 + 0.5) * 0.3;
          }
        }
      }
    }
    this._updateLabelsVisibility();
    this.renderer.render(this.scene, this.camera);
  }
}

