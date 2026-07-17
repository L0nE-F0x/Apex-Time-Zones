/**
 * Hero Earth — same day/night shader + textures as the desktop app.
 * Three.js CDN; static day-map fallback if WebGL fails.
 */
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const canvas = document.getElementById('heroGlobe');
const fallback = document.getElementById('globeFallback');
if (!canvas) {
  /* no canvas */
} else {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const R = 1;
  let renderer;
  let scene;
  let camera;
  let controls;
  let earthGroup;
  let earthMat;
  let clouds;
  let markers = [];
  let disposed = false;
  let sunDir = new THREE.Vector3(1, 0.22, 0.35).normalize();

  function showFallback() {
    if (fallback) fallback.hidden = false;
    canvas.style.display = 'none';
  }

  try {
    renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
  } catch {
    showFallback();
  }

  if (renderer) {
    const parent = canvas.parentElement;

    function size() {
      const w = Math.min(parent.clientWidth || 420, 480);
      const h = w;
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.setSize(w, h, false);
      camera.aspect = 1;
      camera.updateProjectionMatrix();
    }

    renderer.setClearColor(0x000000, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.08;

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(36, 1, 0.1, 120);
    camera.position.set(0.28, 0.18, 2.75);

    // Soft fill so the night side still reads (shader does the hard lighting)
    scene.add(new THREE.AmbientLight(0x0c1628, 0.35));
    const sun = new THREE.DirectionalLight(0xfff4e0, 1.15);
    sun.position.copy(sunDir).multiplyScalar(8);
    scene.add(sun);
    const rim = new THREE.DirectionalLight(0x4dc9ff, 0.28);
    rim.position.set(-4, -0.8, -2.5);
    scene.add(rim);

    controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true;
    controls.dampingFactor = 0.055;
    controls.enablePan = false;
    controls.minDistance = 2.05;
    controls.maxDistance = 4.0;
    controls.autoRotate = !reduce;
    controls.autoRotateSpeed = 0.42;
    controls.rotateSpeed = 0.48;
    controls.target.set(0, 0, 0);

    const loader = new THREE.TextureLoader();
    const loadTex = (url) =>
      new Promise((resolve, reject) => {
        loader.load(url, resolve, undefined, reject);
      });

    function latLngToVec(lat, lng, radius) {
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lng + 180) * (Math.PI / 180);
      return new THREE.Vector3(
        -radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.cos(phi),
        radius * Math.sin(phi) * Math.sin(theta)
      );
    }

    function addAtmosphere() {
      const mat = new THREE.ShaderMaterial({
        transparent: true,
        depthWrite: false,
        side: THREE.BackSide,
        blending: THREE.AdditiveBlending,
        vertexShader: `
          varying vec3 vN;
          void main() {
            vN = normalize(normalMatrix * normal);
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          varying vec3 vN;
          void main() {
            float i = pow(0.65 - dot(vN, vec3(0.0, 0.0, 1.0)), 2.2);
            gl_FragColor = vec4(0.25, 0.7, 1.0, 1.0) * i * 0.95;
          }
        `,
      });
      scene.add(new THREE.Mesh(new THREE.SphereGeometry(R * 1.08, 64, 64), mat));
    }

    function addStarfield() {
      const count = 1600;
      const positions = new Float32Array(count * 3);
      const colors = new Float32Array(count * 3);
      for (let i = 0; i < count; i++) {
        const r = 35 + Math.random() * 50;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
        positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
        positions[i * 3 + 2] = r * Math.cos(phi);
        const c = 0.65 + Math.random() * 0.35;
        colors[i * 3] = c;
        colors[i * 3 + 1] = c * 0.97;
        colors[i * 3 + 2] = c;
      }
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
      scene.add(
        new THREE.Points(
          geo,
          new THREE.PointsMaterial({
            size: 0.07,
            vertexColors: true,
            transparent: true,
            opacity: 0.85,
            sizeAttenuation: true,
            depthWrite: false,
          })
        )
      );
    }

    function addMarker(lat, lng, color) {
      const pos = latLngToVec(lat, lng, R * 1.018);
      const core = new THREE.Mesh(
        new THREE.SphereGeometry(0.014, 14, 14),
        new THREE.MeshBasicMaterial({ color })
      );
      const glow = new THREE.Mesh(
        new THREE.SphereGeometry(0.03, 14, 14),
        new THREE.MeshBasicMaterial({
          color,
          transparent: true,
          opacity: 0.32,
          depthWrite: false,
        })
      );
      const stem = new THREE.Mesh(
        new THREE.CylinderGeometry(0.0035, 0.0035, 0.045, 8),
        new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.55 })
      );
      stem.position.y = -0.022;

      const pin = new THREE.Group();
      pin.add(glow, core, stem);
      pin.position.copy(pos);
      pin.lookAt(0, 0, 0);
      pin.rotateX(Math.PI / 2);
      earthGroup.add(pin);
      markers.push({ glow });
    }

    function addSubtleGrid() {
      const group = new THREE.Group();
      const mat = new THREE.LineBasicMaterial({
        color: 0x4dc9ff,
        transparent: true,
        opacity: 0.055,
      });
      for (let lat = -60; lat <= 60; lat += 30) {
        const pts = [];
        for (let lng = 0; lng <= 360; lng += 4) {
          pts.push(latLngToVec(lat, lng - 180, R * 1.004));
        }
        group.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), mat));
      }
      for (let lng = -180; lng < 180; lng += 30) {
        const pts = [];
        for (let lat = -90; lat <= 90; lat += 4) {
          pts.push(latLngToVec(lat, lng, R * 1.004));
        }
        group.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), mat));
      }
      const eqMat = new THREE.LineBasicMaterial({
        color: 0x7af0ff,
        transparent: true,
        opacity: 0.16,
      });
      const eq = [];
      for (let lng = 0; lng <= 360; lng += 2) {
        eq.push(latLngToVec(0, lng - 180, R * 1.006));
      }
      group.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(eq), eqMat));
      earthGroup.add(group);
    }

    async function buildEarth() {
      let dayMap;
      let nightMap;
      let cloudMap;
      try {
        [dayMap, nightMap, cloudMap] = await Promise.all([
          loadTex('assets/earth_day.jpg'),
          loadTex('assets/earth_night.jpg'),
          loadTex('assets/earth_clouds.jpg'),
        ]);
      } catch {
        try {
          dayMap = await loadTex('assets/earth_day.jpg');
        } catch {
          showFallback();
          return;
        }
      }

      const aniso = renderer.capabilities.getMaxAnisotropy();
      for (const t of [dayMap, nightMap, cloudMap]) {
        if (!t) continue;
        t.colorSpace = THREE.SRGBColorSpace;
        t.anisotropy = aniso;
      }

      earthGroup = new THREE.Group();
      // Face Europe/Atlantic for a strong first impression
      earthGroup.rotation.y = -0.55;
      scene.add(earthGroup);

      if (nightMap) {
        earthMat = new THREE.ShaderMaterial({
          uniforms: {
            dayTexture: { value: dayMap },
            nightTexture: { value: nightMap },
            sunDirection: { value: sunDir.clone() },
          },
          vertexShader: `
            varying vec2 vUv;
            varying vec3 vNormalW;
            void main() {
              vUv = uv;
              vec4 worldPos = modelMatrix * vec4(position, 1.0);
              vNormalW = normalize(mat3(modelMatrix) * normal);
              gl_Position = projectionMatrix * viewMatrix * worldPos;
            }
          `,
          fragmentShader: `
            uniform sampler2D dayTexture;
            uniform sampler2D nightTexture;
            uniform vec3 sunDirection;
            varying vec2 vUv;
            varying vec3 vNormalW;
            void main() {
              vec3 day = texture2D(dayTexture, vUv).rgb;
              vec3 night = texture2D(nightTexture, vUv).rgb;
              float ndotl = dot(normalize(vNormalW), normalize(sunDirection));
              float dayAmount = smoothstep(-0.12, 0.22, ndotl);
              vec3 nightLit = night * 1.35 + vec3(0.02, 0.04, 0.08);
              vec3 color = mix(nightLit, day, dayAmount);
              float spec = pow(max(ndotl, 0.0), 28.0) * 0.18;
              color += vec3(0.6, 0.75, 1.0) * spec * dayAmount;
              gl_FragColor = vec4(color, 1.0);
            }
          `,
        });
      } else {
        earthMat = new THREE.MeshStandardMaterial({
          map: dayMap,
          roughness: 0.82,
          metalness: 0.04,
        });
      }

      earthGroup.add(new THREE.Mesh(new THREE.SphereGeometry(R, 96, 96), earthMat));

      if (cloudMap) {
        clouds = new THREE.Mesh(
          new THREE.SphereGeometry(R * 1.012, 64, 64),
          new THREE.MeshPhongMaterial({
            map: cloudMap,
            transparent: true,
            opacity: 0.26,
            depthWrite: false,
            side: THREE.DoubleSide,
          })
        );
        earthGroup.add(clouds);
      }

      addSubtleGrid();
      // Sample venues (F1 / WC / Asia)
      addMarker(50.44, 5.97, 0xffd166); // Spa
      addMarker(52.08, -1.02, 0xffd166); // Silverstone
      addMarker(47.58, 19.25, 0xffd166); // Hungaroring
      addMarker(40.81, -74.07, 0x4dc9ff); // MetLife
      addMarker(25.76, -80.19, 0x4dc9ff); // Miami
      addMarker(34.84, 136.54, 0x5ef2c2); // Suzuka
      addMarker(-8.67, 115.21, 0xff6bcb); // Denpasar

      addAtmosphere();
      addStarfield();
      size();
      animate();
    }

    function animate() {
      if (disposed) return;
      requestAnimationFrame(animate);
      controls.update();
      if (clouds && !reduce) clouds.rotation.y += 0.00032;
      // Keep sun fixed in world space for day/night terminator
      if (earthMat?.uniforms?.sunDirection) {
        earthMat.uniforms.sunDirection.value.copy(sunDir);
      }
      const pulse = 1 + Math.sin(performance.now() * 0.0028) * 0.14;
      for (const { glow } of markers) glow.scale.setScalar(pulse);
      renderer.render(scene, camera);
    }

    canvas.addEventListener('pointerdown', () => {
      controls.autoRotate = false;
    });
    canvas.addEventListener('pointerup', () => {
      if (!reduce) {
        clearTimeout(canvas._ar);
        canvas._ar = setTimeout(() => {
          controls.autoRotate = true;
        }, 4000);
      }
    });

    window.addEventListener('resize', size);
    buildEarth().catch(showFallback);
  }
}
