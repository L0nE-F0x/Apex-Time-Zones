(()=>{var li={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ci={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},eh=0,sl=1,th=2;var rl=1,nh=2,En=3,mn=0,At=1,on=2,Bn=0,Si=1,hs=2,al=3,ol=4,ih=5,Qn=100,sh=101,rh=102,ah=103,oh=104,lh=200,ch=201,hh=202,uh=203,Wr=204,Xr=205,dh=206,fh=207,ph=208,mh=209,gh=210,yh=211,_h=212,vh=213,xh=214,ma=0,ga=1,ya=2,Mi=3,_a=4,va=5,xa=6,Sa=7,Ma=0,Sh=1,Mh=2,zn=0,bh=1,Eh=2,wh=3,ba=4,Th=5,Ah=6,Ch=7;var ll=300,Ai=301,Ci=302,Ea=303,wa=304,tr=306,qr=1e3,jn=1001,Yr=1002,sn=1003,Rh=1004;var nr=1005;var Zt=1006,Ta=1007;var wn=1008;var Tn=1009,cl=1010,hl=1011,us=1012,Aa=1013,hi=1014,An=1015,ds=1016,Ca=1017,Ra=1018,Ri=1020,ul=35902,dl=1021,fl=1022,ln=1023,pl=1024,ml=1025,xi=1026,bi=1027,gl=1028,Pa=1029,yl=1030,Ia=1031;var La=1033,ir=33776,sr=33777,rr=33778,ar=33779,Da=35840,Ua=35841,Na=35842,Fa=35843,Oa=36196,Ba=37492,za=37496,ka=37808,Ha=37809,Ga=37810,Va=37811,Wa=37812,Xa=37813,qa=37814,Ya=37815,$a=37816,Za=37817,Ka=37818,Ja=37819,ja=37820,Qa=37821,or=36492,eo=36494,to=36495,_l=36283,no=36284,io=36285,so=36286;var Ls=2300,$r=2301,Vr=2302,Yo=2400,$o=2401,Zo=2402;var Ph=3200,Ih=3201;var vl=0,Lh=1,kn="",Tt="srgb",Ei="srgb-linear",Ds="linear",Je="srgb";var vi=7680;var Ko=519,Dh=512,Uh=513,Nh=514,xl=515,Fh=516,Oh=517,Bh=518,zh=519,Jo=35044;var Sl="300 es",xn=2e3,Us=2001,Sn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Pt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Cc=1234567,Ps=Math.PI/180,es=180/Math.PI;function fs(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Pt[i&255]+Pt[i>>8&255]+Pt[i>>16&255]+Pt[i>>24&255]+"-"+Pt[e&255]+Pt[e>>8&255]+"-"+Pt[e>>16&15|64]+Pt[e>>24&255]+"-"+Pt[t&63|128]+Pt[t>>8&255]+"-"+Pt[t>>16&255]+Pt[t>>24&255]+Pt[n&255]+Pt[n>>8&255]+Pt[n>>16&255]+Pt[n>>24&255]).toLowerCase()}function Ne(i,e,t){return Math.max(e,Math.min(t,i))}function Ml(i,e){return(i%e+e)%e}function td(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function nd(i,e,t){return i!==e?(t-i)/(e-i):0}function Is(i,e,t){return(1-t)*i+t*e}function id(i,e,t,n){return Is(i,e,1-Math.exp(-t*n))}function sd(i,e=1){return e-Math.abs(Ml(i,e*2)-e)}function rd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function ad(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function od(i,e){return i+Math.floor(Math.random()*(e-i+1))}function ld(i,e){return i+Math.random()*(e-i)}function cd(i){return i*(.5-Math.random())}function hd(i){i!==void 0&&(Cc=i);let e=Cc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ud(i){return i*Ps}function dd(i){return i*es}function fd(i){return(i&i-1)===0&&i!==0}function pd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function md(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function gd(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),f=a((e-n)/2),p=r((n-e)/2),y=a((n-e)/2);switch(s){case"XYX":i.set(o*h,l*u,l*f,o*c);break;case"YZY":i.set(l*f,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*f,o*h,o*c);break;case"XZX":i.set(o*h,l*y,l*p,o*c);break;case"YXY":i.set(l*p,o*h,l*y,o*c);break;case"ZYZ":i.set(l*y,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ji(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Bt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var bl={DEG2RAD:Ps,RAD2DEG:es,generateUUID:fs,clamp:Ne,euclideanModulo:Ml,mapLinear:td,inverseLerp:nd,lerp:Is,damp:id,pingpong:sd,smoothstep:rd,smootherstep:ad,randInt:od,randFloat:ld,randFloatSpread:cd,seededRandom:hd,degToRad:ud,radToDeg:dd,isPowerOfTwo:fd,ceilPowerOfTwo:pd,floorPowerOfTwo:md,setQuaternionFromProperEuler:gd,normalize:Bt,denormalize:ji},we=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ne(this.x,e.x,t.x),this.y=Ne(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ne(this.x,e,t),this.y=Ne(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ne(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ne(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ie=class i{constructor(e,t,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],p=n[5],y=n[8],v=s[0],m=s[3],d=s[6],w=s[1],E=s[4],S=s[7],R=s[2],A=s[5],C=s[8];return r[0]=a*v+o*w+l*R,r[3]=a*m+o*E+l*A,r[6]=a*d+o*S+l*C,r[1]=c*v+h*w+u*R,r[4]=c*m+h*E+u*A,r[7]=c*d+h*S+u*C,r[2]=f*v+p*w+y*R,r[5]=f*m+p*E+y*A,r[8]=f*d+p*S+y*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,f=o*l-h*r,p=c*r-a*l,y=t*u+n*f+s*p;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/y;return e[0]=u*v,e[1]=(s*c-h*n)*v,e[2]=(o*n-s*a)*v,e[3]=f*v,e[4]=(h*t-s*l)*v,e[5]=(s*r-o*t)*v,e[6]=p*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(wo.makeScale(e,t)),this}rotate(e){return this.premultiply(wo.makeRotation(-e)),this}translate(e,t){return this.premultiply(wo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},wo=new Ie;function El(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ts(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function kh(){let i=ts("canvas");return i.style.display="block",i}var Rc={};function Pi(i){i in Rc||(Rc[i]=!0,console.warn(i))}function Hh(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Gh(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Vh(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var Pc=new Ie().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ic=new Ie().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function yd(){let i={enabled:!0,workingColorSpace:Ei,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Je&&(s.r=Fn(s.r),s.g=Fn(s.g),s.b=Fn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Je&&(s.r=Qi(s.r),s.g=Qi(s.g),s.b=Qi(s.b))),s},fromWorkingColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},toWorkingColorSpace:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===kn?Ds:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ei]:{primaries:e,whitePoint:n,transfer:Ds,toXYZ:Pc,fromXYZ:Ic,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Tt},outputColorSpaceConfig:{drawingBufferColorSpace:Tt}},[Tt]:{primaries:e,whitePoint:n,transfer:Je,toXYZ:Pc,fromXYZ:Ic,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Tt}}}),i}var qe=yd();function Fn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Qi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ki,Zr=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ki===void 0&&(ki=ts("canvas")),ki.width=e.width,ki.height=e.height;let n=ki.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ki}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ts("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Fn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Fn(t[n]/255)*255):t[n]=Fn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},_d=0,Ns=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_d++}),this.uuid=fs(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(To(s[a].image)):r.push(To(s[a]))}else r=To(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function To(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Zr.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var vd=0,zt=class i extends Sn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=jn,s=jn,r=Zt,a=wn,o=ln,l=Tn,c=i.DEFAULT_ANISOTROPY,h=kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vd++}),this.uuid=fs(),this.name="",this.source=new Ns(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new we(0,0),this.repeat=new we(1,1),this.center=new we(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ll)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qr:e.x=e.x-Math.floor(e.x);break;case jn:e.x=e.x<0?0:1;break;case Yr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qr:e.y=e.y-Math.floor(e.y);break;case jn:e.y=e.y<0?0:1;break;case Yr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};zt.DEFAULT_IMAGE=null;zt.DEFAULT_MAPPING=ll;zt.DEFAULT_ANISOTROPY=1;var ht=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],p=l[5],y=l[9],v=l[2],m=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-v)<.01&&Math.abs(y-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+v)<.1&&Math.abs(y+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let E=(c+1)/2,S=(p+1)/2,R=(d+1)/2,A=(h+f)/4,C=(u+v)/4,L=(y+m)/4;return E>S&&E>R?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=A/n,r=C/n):S>R?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=A/s,r=L/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=C/r,s=L/r),this.set(n,s,r,t),this}let w=Math.sqrt((m-y)*(m-y)+(u-v)*(u-v)+(f-h)*(f-h));return Math.abs(w)<.001&&(w=1),this.x=(m-y)/w,this.y=(u-v)/w,this.z=(f-h)/w,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ne(this.x,e.x,t.x),this.y=Ne(this.y,e.y,t.y),this.z=Ne(this.z,e.z,t.z),this.w=Ne(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ne(this.x,e,t),this.y=Ne(this.y,e,t),this.z=Ne(this.z,e,t),this.w=Ne(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ne(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Kr=class extends Sn{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ht(0,0,e,t),this.scissorTest=!1,this.viewport=new ht(0,0,e,t);let s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new zt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Ns(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Mn=class extends Kr{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Fs=class extends zt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Jr=class extends zt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var rn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],f=r[a+0],p=r[a+1],y=r[a+2],v=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=f,e[t+1]=p,e[t+2]=y,e[t+3]=v;return}if(u!==v||l!==f||c!==p||h!==y){let m=1-o,d=l*f+c*p+h*y+u*v,w=d>=0?1:-1,E=1-d*d;if(E>Number.EPSILON){let R=Math.sqrt(E),A=Math.atan2(R,d*w);m=Math.sin(m*A)/R,o=Math.sin(o*A)/R}let S=o*w;if(l=l*m+f*S,c=c*m+p*S,h=h*m+y*S,u=u*m+v*S,m===1-o){let R=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=R,c*=R,h*=R,u*=R}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],f=r[a+1],p=r[a+2],y=r[a+3];return e[t]=o*y+h*u+l*p-c*f,e[t+1]=l*y+h*f+c*u-o*p,e[t+2]=c*y+h*p+o*f-l*u,e[t+3]=h*y-o*u-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),f=l(n/2),p=l(s/2),y=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*p*y,this._y=c*p*u-f*h*y,this._z=c*h*y+f*p*u,this._w=c*h*u-f*p*y;break;case"YXZ":this._x=f*h*u+c*p*y,this._y=c*p*u-f*h*y,this._z=c*h*y-f*p*u,this._w=c*h*u+f*p*y;break;case"ZXY":this._x=f*h*u-c*p*y,this._y=c*p*u+f*h*y,this._z=c*h*y+f*p*u,this._w=c*h*u-f*p*y;break;case"ZYX":this._x=f*h*u-c*p*y,this._y=c*p*u+f*h*y,this._z=c*h*y-f*p*u,this._w=c*h*u+f*p*y;break;case"YZX":this._x=f*h*u+c*p*y,this._y=c*p*u+f*h*y,this._z=c*h*y-f*p*u,this._w=c*h*u-f*p*y;break;case"XZY":this._x=f*h*u-c*p*y,this._y=c*p*u-f*h*y,this._z=c*h*y+f*p*u,this._w=c*h*u+f*p*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+o+u;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>u){let p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>u){let p=2*Math.sqrt(1+o-n-u);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ne(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},N=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Lc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Lc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ne(this.x,e.x,t.x),this.y=Ne(this.y,e.y,t.y),this.z=Ne(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ne(this.x,e,t),this.y=Ne(this.y,e,t),this.z=Ne(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ne(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ao.copy(this).projectOnVector(e),this.sub(Ao)}reflect(e){return this.sub(Ao.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ne(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ao=new N,Lc=new rn,ei=class{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(dn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(dn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=dn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,dn):dn.fromBufferAttribute(r,a),dn.applyMatrix4(e.matrixWorld),this.expandByPoint(dn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Sr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Sr.copy(n.boundingBox)),Sr.applyMatrix4(e.matrixWorld),this.union(Sr)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,dn),dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ws),Mr.subVectors(this.max,ws),Hi.subVectors(e.a,ws),Gi.subVectors(e.b,ws),Vi.subVectors(e.c,ws),Xn.subVectors(Gi,Hi),qn.subVectors(Vi,Gi),mi.subVectors(Hi,Vi);let t=[0,-Xn.z,Xn.y,0,-qn.z,qn.y,0,-mi.z,mi.y,Xn.z,0,-Xn.x,qn.z,0,-qn.x,mi.z,0,-mi.x,-Xn.y,Xn.x,0,-qn.y,qn.x,0,-mi.y,mi.x,0];return!Co(t,Hi,Gi,Vi,Mr)||(t=[1,0,0,0,1,0,0,0,1],!Co(t,Hi,Gi,Vi,Mr))?!1:(br.crossVectors(Xn,qn),t=[br.x,br.y,br.z],Co(t,Hi,Gi,Vi,Mr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(In[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),In[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),In[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),In[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),In[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),In[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),In[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),In[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(In),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},In=[new N,new N,new N,new N,new N,new N,new N,new N],dn=new N,Sr=new ei,Hi=new N,Gi=new N,Vi=new N,Xn=new N,qn=new N,mi=new N,ws=new N,Mr=new N,br=new N,gi=new N;function Co(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){gi.fromArray(i,r);let o=s.x*Math.abs(gi.x)+s.y*Math.abs(gi.y)+s.z*Math.abs(gi.z),l=e.dot(gi),c=t.dot(gi),h=n.dot(gi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var xd=new ei,Ts=new N,Ro=new N,ti=class{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):xd.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ts.subVectors(e,this.center);let t=Ts.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ts,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ro.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ts.copy(e.center).add(Ro)),this.expandByPoint(Ts.copy(e.center).sub(Ro))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Ln=new N,Po=new N,Er=new N,Yn=new N,Io=new N,wr=new N,Lo=new N,On=class{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ln)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ln.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ln.copy(this.origin).addScaledVector(this.direction,t),Ln.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Po.copy(e).add(t).multiplyScalar(.5),Er.copy(t).sub(e).normalize(),Yn.copy(this.origin).sub(Po);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Er),o=Yn.dot(this.direction),l=-Yn.dot(Er),c=Yn.lengthSq(),h=Math.abs(1-a*a),u,f,p,y;if(h>0)if(u=a*l-o,f=a*o-l,y=r*h,u>=0)if(f>=-y)if(f<=y){let v=1/h;u*=v,f*=v,p=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;else f<=-y?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c):f<=y?(u=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Po).addScaledVector(Er,f),p}intersectSphere(e,t){Ln.subVectors(e.center,this.origin);let n=Ln.dot(this.direction),s=Ln.dot(Ln)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Ln)!==null}intersectTriangle(e,t,n,s,r){Io.subVectors(t,e),wr.subVectors(n,e),Lo.crossVectors(Io,wr);let a=this.direction.dot(Lo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Yn.subVectors(this.origin,e);let l=o*this.direction.dot(wr.crossVectors(Yn,wr));if(l<0)return null;let c=o*this.direction.dot(Io.cross(Yn));if(c<0||l+c>a)return null;let h=-o*Yn.dot(Lo);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},st=class i{constructor(e,t,n,s,r,a,o,l,c,h,u,f,p,y,v,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,u,f,p,y,v,m)}set(e,t,n,s,r,a,o,l,c,h,u,f,p,y,v,m){let d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=y,d[11]=v,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Wi.setFromMatrixColumn(e,0).length(),r=1/Wi.setFromMatrixColumn(e,1).length(),a=1/Wi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=a*h,p=a*u,y=o*h,v=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+y*c,t[5]=f-v*c,t[9]=-o*l,t[2]=v-f*c,t[6]=y+p*c,t[10]=a*l}else if(e.order==="YXZ"){let f=l*h,p=l*u,y=c*h,v=c*u;t[0]=f+v*o,t[4]=y*o-p,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-y,t[6]=v+f*o,t[10]=a*l}else if(e.order==="ZXY"){let f=l*h,p=l*u,y=c*h,v=c*u;t[0]=f-v*o,t[4]=-a*u,t[8]=y+p*o,t[1]=p+y*o,t[5]=a*h,t[9]=v-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let f=a*h,p=a*u,y=o*h,v=o*u;t[0]=l*h,t[4]=y*c-p,t[8]=f*c+v,t[1]=l*u,t[5]=v*c+f,t[9]=p*c-y,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let f=a*l,p=a*c,y=o*l,v=o*c;t[0]=l*h,t[4]=v-f*u,t[8]=y*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*u+y,t[10]=f-v*u}else if(e.order==="XZY"){let f=a*l,p=a*c,y=o*l,v=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+v,t[5]=a*h,t[9]=p*u-y,t[2]=y*u-p,t[6]=o*h,t[10]=v*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Sd,e,Md)}lookAt(e,t,n){let s=this.elements;return Yt.subVectors(e,t),Yt.lengthSq()===0&&(Yt.z=1),Yt.normalize(),$n.crossVectors(n,Yt),$n.lengthSq()===0&&(Math.abs(n.z)===1?Yt.x+=1e-4:Yt.z+=1e-4,Yt.normalize(),$n.crossVectors(n,Yt)),$n.normalize(),Tr.crossVectors(Yt,$n),s[0]=$n.x,s[4]=Tr.x,s[8]=Yt.x,s[1]=$n.y,s[5]=Tr.y,s[9]=Yt.y,s[2]=$n.z,s[6]=Tr.z,s[10]=Yt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],p=n[13],y=n[2],v=n[6],m=n[10],d=n[14],w=n[3],E=n[7],S=n[11],R=n[15],A=s[0],C=s[4],L=s[8],M=s[12],g=s[1],b=s[5],P=s[9],D=s[13],k=s[2],O=s[6],z=s[10],Q=s[14],X=s[3],J=s[7],se=s[11],ve=s[15];return r[0]=a*A+o*g+l*k+c*X,r[4]=a*C+o*b+l*O+c*J,r[8]=a*L+o*P+l*z+c*se,r[12]=a*M+o*D+l*Q+c*ve,r[1]=h*A+u*g+f*k+p*X,r[5]=h*C+u*b+f*O+p*J,r[9]=h*L+u*P+f*z+p*se,r[13]=h*M+u*D+f*Q+p*ve,r[2]=y*A+v*g+m*k+d*X,r[6]=y*C+v*b+m*O+d*J,r[10]=y*L+v*P+m*z+d*se,r[14]=y*M+v*D+m*Q+d*ve,r[3]=w*A+E*g+S*k+R*X,r[7]=w*C+E*b+S*O+R*J,r[11]=w*L+E*P+S*z+R*se,r[15]=w*M+E*D+S*Q+R*ve,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],p=e[14],y=e[3],v=e[7],m=e[11],d=e[15];return y*(+r*l*u-s*c*u-r*o*f+n*c*f+s*o*p-n*l*p)+v*(+t*l*p-t*c*f+r*a*f-s*a*p+s*c*h-r*l*h)+m*(+t*c*u-t*o*p-r*a*u+n*a*p+r*o*h-n*c*h)+d*(-s*o*h-t*l*u+t*o*f+s*a*u-n*a*f+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],p=e[11],y=e[12],v=e[13],m=e[14],d=e[15],w=u*m*c-v*f*c+v*l*p-o*m*p-u*l*d+o*f*d,E=y*f*c-h*m*c-y*l*p+a*m*p+h*l*d-a*f*d,S=h*v*c-y*u*c+y*o*p-a*v*p-h*o*d+a*u*d,R=y*u*l-h*v*l-y*o*f+a*v*f+h*o*m-a*u*m,A=t*w+n*E+s*S+r*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/A;return e[0]=w*C,e[1]=(v*f*r-u*m*r-v*s*p+n*m*p+u*s*d-n*f*d)*C,e[2]=(o*m*r-v*l*r+v*s*c-n*m*c-o*s*d+n*l*d)*C,e[3]=(u*l*r-o*f*r-u*s*c+n*f*c+o*s*p-n*l*p)*C,e[4]=E*C,e[5]=(h*m*r-y*f*r+y*s*p-t*m*p-h*s*d+t*f*d)*C,e[6]=(y*l*r-a*m*r-y*s*c+t*m*c+a*s*d-t*l*d)*C,e[7]=(a*f*r-h*l*r+h*s*c-t*f*c-a*s*p+t*l*p)*C,e[8]=S*C,e[9]=(y*u*r-h*v*r-y*n*p+t*v*p+h*n*d-t*u*d)*C,e[10]=(a*v*r-y*o*r+y*n*c-t*v*c-a*n*d+t*o*d)*C,e[11]=(h*o*r-a*u*r-h*n*c+t*u*c+a*n*p-t*o*p)*C,e[12]=R*C,e[13]=(h*v*s-y*u*s+y*n*f-t*v*f-h*n*m+t*u*m)*C,e[14]=(y*o*s-a*v*s-y*n*l+t*v*l+a*n*m-t*o*m)*C,e[15]=(a*u*s-h*o*s+h*n*l-t*u*l-a*n*f+t*o*f)*C,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,f=r*c,p=r*h,y=r*u,v=a*h,m=a*u,d=o*u,w=l*c,E=l*h,S=l*u,R=n.x,A=n.y,C=n.z;return s[0]=(1-(v+d))*R,s[1]=(p+S)*R,s[2]=(y-E)*R,s[3]=0,s[4]=(p-S)*A,s[5]=(1-(f+d))*A,s[6]=(m+w)*A,s[7]=0,s[8]=(y+E)*C,s[9]=(m-w)*C,s[10]=(1-(f+v))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Wi.set(s[0],s[1],s[2]).length(),a=Wi.set(s[4],s[5],s[6]).length(),o=Wi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],fn.copy(this);let c=1/r,h=1/a,u=1/o;return fn.elements[0]*=c,fn.elements[1]*=c,fn.elements[2]*=c,fn.elements[4]*=h,fn.elements[5]*=h,fn.elements[6]*=h,fn.elements[8]*=u,fn.elements[9]*=u,fn.elements[10]*=u,t.setFromRotationMatrix(fn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=xn){let l=this.elements,c=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),f=(n+s)/(n-s),p,y;if(o===xn)p=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===Us)p=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=xn){let l=this.elements,c=1/(t-e),h=1/(n-s),u=1/(a-r),f=(t+e)*c,p=(n+s)*h,y,v;if(o===xn)y=(a+r)*u,v=-2*u;else if(o===Us)y=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Wi=new N,fn=new st,Sd=new N(0,0,0),Md=new N(1,1,1),$n=new N,Tr=new N,Yt=new N,Dc=new st,Uc=new rn,gn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Ne(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ne(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ne(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ne(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ne(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ne(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Dc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Dc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Uc.setFromEuler(this),this.setFromQuaternion(Uc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};gn.DEFAULT_ORDER="XYZ";var ns=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},bd=0,Nc=new N,Xi=new rn,Dn=new st,Ar=new N,As=new N,Ed=new N,wd=new rn,Fc=new N(1,0,0),Oc=new N(0,1,0),Bc=new N(0,0,1),zc={type:"added"},Td={type:"removed"},qi={type:"childadded",child:null},Do={type:"childremoved",child:null},bt=class i extends Sn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bd++}),this.uuid=fs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new N,t=new gn,n=new rn,s=new N(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new st},normalMatrix:{value:new Ie}}),this.matrix=new st,this.matrixWorld=new st,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ns,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Xi.setFromAxisAngle(e,t),this.quaternion.multiply(Xi),this}rotateOnWorldAxis(e,t){return Xi.setFromAxisAngle(e,t),this.quaternion.premultiply(Xi),this}rotateX(e){return this.rotateOnAxis(Fc,e)}rotateY(e){return this.rotateOnAxis(Oc,e)}rotateZ(e){return this.rotateOnAxis(Bc,e)}translateOnAxis(e,t){return Nc.copy(e).applyQuaternion(this.quaternion),this.position.add(Nc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Fc,e)}translateY(e){return this.translateOnAxis(Oc,e)}translateZ(e){return this.translateOnAxis(Bc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Dn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ar.copy(e):Ar.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),As.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Dn.lookAt(As,Ar,this.up):Dn.lookAt(Ar,As,this.up),this.quaternion.setFromRotationMatrix(Dn),s&&(Dn.extractRotation(s.matrixWorld),Xi.setFromRotationMatrix(Dn),this.quaternion.premultiply(Xi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(zc),qi.child=e,this.dispatchEvent(qi),qi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Td),Do.child=e,this.dispatchEvent(Do),Do.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Dn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Dn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Dn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(zc),qi.child=e,this.dispatchEvent(qi),qi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(As,e,Ed),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(As,wd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),f=a(e.skeletons),p=a(e.animations),y=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),y.length>0&&(n.nodes=y)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};bt.DEFAULT_UP=new N(0,1,0);bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var pn=new N,Un=new N,Uo=new N,Nn=new N,Yi=new N,$i=new N,kc=new N,No=new N,Fo=new N,Oo=new N,Bo=new ht,zo=new ht,ko=new ht,Jn=class i{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),pn.subVectors(e,t),s.cross(pn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){pn.subVectors(s,t),Un.subVectors(n,t),Uo.subVectors(e,t);let a=pn.dot(pn),o=pn.dot(Un),l=pn.dot(Uo),c=Un.dot(Un),h=Un.dot(Uo),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let f=1/u,p=(c*l-o*h)*f,y=(a*h-o*l)*f;return r.set(1-p-y,y,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Nn)===null?!1:Nn.x>=0&&Nn.y>=0&&Nn.x+Nn.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Nn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Nn.x),l.addScaledVector(a,Nn.y),l.addScaledVector(o,Nn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Bo.setScalar(0),zo.setScalar(0),ko.setScalar(0),Bo.fromBufferAttribute(e,t),zo.fromBufferAttribute(e,n),ko.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Bo,r.x),a.addScaledVector(zo,r.y),a.addScaledVector(ko,r.z),a}static isFrontFacing(e,t,n,s){return pn.subVectors(n,t),Un.subVectors(e,t),pn.cross(Un).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pn.subVectors(this.c,this.b),Un.subVectors(this.a,this.b),pn.cross(Un).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Yi.subVectors(s,n),$i.subVectors(r,n),No.subVectors(e,n);let l=Yi.dot(No),c=$i.dot(No);if(l<=0&&c<=0)return t.copy(n);Fo.subVectors(e,s);let h=Yi.dot(Fo),u=$i.dot(Fo);if(h>=0&&u<=h)return t.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Yi,a);Oo.subVectors(e,r);let p=Yi.dot(Oo),y=$i.dot(Oo);if(y>=0&&p<=y)return t.copy(r);let v=p*c-l*y;if(v<=0&&c>=0&&y<=0)return o=c/(c-y),t.copy(n).addScaledVector($i,o);let m=h*y-p*u;if(m<=0&&u-h>=0&&p-y>=0)return kc.subVectors(r,s),o=(u-h)/(u-h+(p-y)),t.copy(s).addScaledVector(kc,o);let d=1/(m+v+f);return a=v*d,o=f*d,t.copy(n).addScaledVector(Yi,a).addScaledVector($i,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Wh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zn={h:0,s:0,l:0},Cr={h:0,s:0,l:0};function Ho(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Fe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Tt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qe.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,qe.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=qe.workingColorSpace){if(e=Ml(e,1),t=Ne(t,0,1),n=Ne(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Ho(a,r,e+1/3),this.g=Ho(a,r,e),this.b=Ho(a,r,e-1/3)}return qe.toWorkingColorSpace(this,s),this}setStyle(e,t=Tt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Tt){let n=Wh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Fn(e.r),this.g=Fn(e.g),this.b=Fn(e.b),this}copyLinearToSRGB(e){return this.r=Qi(e.r),this.g=Qi(e.g),this.b=Qi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tt){return qe.fromWorkingColorSpace(It.copy(this),e),Math.round(Ne(It.r*255,0,255))*65536+Math.round(Ne(It.g*255,0,255))*256+Math.round(Ne(It.b*255,0,255))}getHexString(e=Tt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qe.workingColorSpace){qe.fromWorkingColorSpace(It.copy(this),t);let n=It.r,s=It.g,r=It.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=qe.workingColorSpace){return qe.fromWorkingColorSpace(It.copy(this),t),e.r=It.r,e.g=It.g,e.b=It.b,e}getStyle(e=Tt){qe.fromWorkingColorSpace(It.copy(this),e);let t=It.r,n=It.g,s=It.b;return e!==Tt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Zn),this.setHSL(Zn.h+e,Zn.s+t,Zn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Zn),e.getHSL(Cr);let n=Is(Zn.h,Cr.h,t),s=Is(Zn.s,Cr.s,t),r=Is(Zn.l,Cr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},It=new Fe;Fe.NAMES=Wh;var Ad=0,bn=class extends Sn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ad++}),this.uuid=fs(),this.name="",this.type="Material",this.blending=Si,this.side=mn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wr,this.blendDst=Xr,this.blendEquation=Qn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Fe(0,0,0),this.blendAlpha=0,this.depthFunc=Mi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ko,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vi,this.stencilZFail=vi,this.stencilZPass=vi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Si&&(n.blending=this.blending),this.side!==mn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Wr&&(n.blendSrc=this.blendSrc),this.blendDst!==Xr&&(n.blendDst=this.blendDst),this.blendEquation!==Qn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Mi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ko&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==vi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==vi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Kt=class extends bn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.combine=Ma,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var gt=new N,Rr=new we,Dt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Jo,this.updateRanges=[],this.gpuType=An,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Rr.fromBufferAttribute(this,t),Rr.applyMatrix3(e),this.setXY(t,Rr.x,Rr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix3(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix4(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyNormalMatrix(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.transformDirection(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ji(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Bt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ji(t,this.array)),t}setX(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ji(t,this.array)),t}setY(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ji(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ji(t,this.array)),t}setW(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array),s=Bt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array),s=Bt(s,this.array),r=Bt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Jo&&(e.usage=this.usage),e}};var Os=class extends Dt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Bs=class extends Dt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var ct=class extends Dt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Cd=0,tn=new st,Go=new bt,Zi=new N,$t=new ei,Cs=new ei,Mt=new N,yt=class i extends Sn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cd++}),this.uuid=fs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(El(e)?Bs:Os)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ie().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return tn.makeRotationFromQuaternion(e),this.applyMatrix4(tn),this}rotateX(e){return tn.makeRotationX(e),this.applyMatrix4(tn),this}rotateY(e){return tn.makeRotationY(e),this.applyMatrix4(tn),this}rotateZ(e){return tn.makeRotationZ(e),this.applyMatrix4(tn),this}translate(e,t,n){return tn.makeTranslation(e,t,n),this.applyMatrix4(tn),this}scale(e,t,n){return tn.makeScale(e,t,n),this.applyMatrix4(tn),this}lookAt(e){return Go.lookAt(e),Go.updateMatrix(),this.applyMatrix4(Go.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zi).negate(),this.translate(Zi.x,Zi.y,Zi.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ct(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ei);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];$t.setFromBufferAttribute(r),this.morphTargetsRelative?(Mt.addVectors(this.boundingBox.min,$t.min),this.boundingBox.expandByPoint(Mt),Mt.addVectors(this.boundingBox.max,$t.max),this.boundingBox.expandByPoint(Mt)):(this.boundingBox.expandByPoint($t.min),this.boundingBox.expandByPoint($t.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ti);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){let n=this.boundingSphere.center;if($t.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Cs.setFromBufferAttribute(o),this.morphTargetsRelative?(Mt.addVectors($t.min,Cs.min),$t.expandByPoint(Mt),Mt.addVectors($t.max,Cs.max),$t.expandByPoint(Mt)):($t.expandByPoint(Cs.min),$t.expandByPoint(Cs.max))}$t.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Mt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Mt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Mt.fromBufferAttribute(o,c),l&&(Zi.fromBufferAttribute(e,c),Mt.add(Zi)),s=Math.max(s,n.distanceToSquared(Mt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Dt(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let L=0;L<n.count;L++)o[L]=new N,l[L]=new N;let c=new N,h=new N,u=new N,f=new we,p=new we,y=new we,v=new N,m=new N;function d(L,M,g){c.fromBufferAttribute(n,L),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,g),f.fromBufferAttribute(r,L),p.fromBufferAttribute(r,M),y.fromBufferAttribute(r,g),h.sub(c),u.sub(c),p.sub(f),y.sub(f);let b=1/(p.x*y.y-y.x*p.y);isFinite(b)&&(v.copy(h).multiplyScalar(y.y).addScaledVector(u,-p.y).multiplyScalar(b),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-y.x).multiplyScalar(b),o[L].add(v),o[M].add(v),o[g].add(v),l[L].add(m),l[M].add(m),l[g].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let L=0,M=w.length;L<M;++L){let g=w[L],b=g.start,P=g.count;for(let D=b,k=b+P;D<k;D+=3)d(e.getX(D+0),e.getX(D+1),e.getX(D+2))}let E=new N,S=new N,R=new N,A=new N;function C(L){R.fromBufferAttribute(s,L),A.copy(R);let M=o[L];E.copy(M),E.sub(R.multiplyScalar(R.dot(M))).normalize(),S.crossVectors(A,M);let b=S.dot(l[L])<0?-1:1;a.setXYZW(L,E.x,E.y,E.z,b)}for(let L=0,M=w.length;L<M;++L){let g=w[L],b=g.start,P=g.count;for(let D=b,k=b+P;D<k;D+=3)C(e.getX(D+0)),C(e.getX(D+1)),C(e.getX(D+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Dt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let s=new N,r=new N,a=new N,o=new N,l=new N,c=new N,h=new N,u=new N;if(e)for(let f=0,p=e.count;f<p;f+=3){let y=e.getX(f+0),v=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,y),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,y),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(y,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Mt.fromBufferAttribute(e,t),Mt.normalize(),e.setXYZ(t,Mt.x,Mt.y,Mt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h),p=0,y=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?p=l[v]*o.data.stride+o.offset:p=l[v]*h;for(let d=0;d<h;d++)f[y++]=c[p++]}return new Dt(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let f=c[h],p=e(f,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Hc=new st,yi=new On,Pr=new ti,Gc=new N,Ir=new N,Lr=new N,Dr=new N,Vo=new N,Ur=new N,Vc=new N,Nr=new N,at=class extends bt{constructor(e=new yt,t=new Kt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Ur.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(Vo.fromBufferAttribute(u,e),a?Ur.addScaledVector(Vo,h):Ur.addScaledVector(Vo.sub(t),h))}t.add(Ur)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Pr.copy(n.boundingSphere),Pr.applyMatrix4(r),yi.copy(e.ray).recast(e.near),!(Pr.containsPoint(yi.origin)===!1&&(yi.intersectSphere(Pr,Gc)===null||yi.origin.distanceToSquared(Gc)>(e.far-e.near)**2))&&(Hc.copy(r).invert(),yi.copy(e.ray).applyMatrix4(Hc),!(n.boundingBox!==null&&yi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,yi)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let y=0,v=f.length;y<v;y++){let m=f[y],d=a[m.materialIndex],w=Math.max(m.start,p.start),E=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let S=w,R=E;S<R;S+=3){let A=o.getX(S),C=o.getX(S+1),L=o.getX(S+2);s=Fr(this,d,e,n,c,h,u,A,C,L),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let y=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let m=y,d=v;m<d;m+=3){let w=o.getX(m),E=o.getX(m+1),S=o.getX(m+2);s=Fr(this,a,e,n,c,h,u,w,E,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let y=0,v=f.length;y<v;y++){let m=f[y],d=a[m.materialIndex],w=Math.max(m.start,p.start),E=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=w,R=E;S<R;S+=3){let A=S,C=S+1,L=S+2;s=Fr(this,d,e,n,c,h,u,A,C,L),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let y=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=y,d=v;m<d;m+=3){let w=m,E=m+1,S=m+2;s=Fr(this,a,e,n,c,h,u,w,E,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Rd(i,e,t,n,s,r,a,o){let l;if(e.side===At?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===mn,o),l===null)return null;Nr.copy(o),Nr.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Nr);return c<t.near||c>t.far?null:{distance:c,point:Nr.clone(),object:i}}function Fr(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Ir),i.getVertexPosition(l,Lr),i.getVertexPosition(c,Dr);let h=Rd(i,e,t,n,Ir,Lr,Dr,Vc);if(h){let u=new N;Jn.getBarycoord(Vc,Ir,Lr,Dr,u),s&&(h.uv=Jn.getInterpolatedAttribute(s,o,l,c,u,new we)),r&&(h.uv1=Jn.getInterpolatedAttribute(r,o,l,c,u,new we)),a&&(h.normal=Jn.getInterpolatedAttribute(a,o,l,c,u,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new N,materialIndex:0};Jn.getNormal(Ir,Lr,Dr,f.normal),h.face=f,h.barycoord=u}return h}var ni=class i extends yt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],f=0,p=0;y("z","y","x",-1,-1,n,t,e,a,r,0),y("z","y","x",1,-1,n,t,-e,a,r,1),y("x","z","y",1,1,e,n,t,s,a,2),y("x","z","y",1,-1,e,n,-t,s,a,3),y("x","y","z",1,-1,e,t,n,s,r,4),y("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ct(c,3)),this.setAttribute("normal",new ct(h,3)),this.setAttribute("uv",new ct(u,2));function y(v,m,d,w,E,S,R,A,C,L,M){let g=S/C,b=R/L,P=S/2,D=R/2,k=A/2,O=C+1,z=L+1,Q=0,X=0,J=new N;for(let se=0;se<z;se++){let ve=se*b-D;for(let Oe=0;Oe<O;Oe++){let Qe=Oe*g-P;J[v]=Qe*w,J[m]=ve*E,J[d]=k,c.push(J.x,J.y,J.z),J[v]=0,J[m]=0,J[d]=A>0?1:-1,h.push(J.x,J.y,J.z),u.push(Oe/C),u.push(1-se/L),Q+=1}}for(let se=0;se<L;se++)for(let ve=0;ve<C;ve++){let Oe=f+ve+O*se,Qe=f+ve+O*(se+1),$=f+(ve+1)+O*(se+1),ne=f+(ve+1)+O*se;l.push(Oe,Qe,ne),l.push(Qe,$,ne),X+=6}o.addGroup(p,X,M),p+=X,f+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Ii(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Nt(i){let e={};for(let t=0;t<i.length;t++){let n=Ii(i[t]);for(let s in n)e[s]=n[s]}return e}function Pd(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function wl(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:qe.workingColorSpace}var Xh={clone:Ii,merge:Nt},Id=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ld=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,kt=class extends bn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Id,this.fragmentShader=Ld,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ii(e.uniforms),this.uniformsGroups=Pd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},zs=class extends bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new st,this.projectionMatrix=new st,this.projectionMatrixInverse=new st,this.coordinateSystem=xn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Kn=new N,Wc=new we,Xc=new we,Lt=class extends zs{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=es*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ps*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return es*2*Math.atan(Math.tan(Ps*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Kn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Kn.x,Kn.y).multiplyScalar(-e/Kn.z),Kn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Kn.x,Kn.y).multiplyScalar(-e/Kn.z)}getViewSize(e,t){return this.getViewBounds(e,Wc,Xc),t.subVectors(Xc,Wc)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ps*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ki=-90,Ji=1,jr=class extends bt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Lt(Ki,Ji,e,t);s.layers=this.layers,this.add(s);let r=new Lt(Ki,Ji,e,t);r.layers=this.layers,this.add(r);let a=new Lt(Ki,Ji,e,t);a.layers=this.layers,this.add(a);let o=new Lt(Ki,Ji,e,t);o.layers=this.layers,this.add(o);let l=new Lt(Ki,Ji,e,t);l.layers=this.layers,this.add(l);let c=new Lt(Ki,Ji,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===xn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Us)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,f,p),e.xr.enabled=y,n.texture.needsPMREMUpdate=!0}},ks=class extends zt{constructor(e,t,n,s,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Ai,super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Qr=class extends Mn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new ks(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Zt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ni(5,5,5),r=new kt({name:"CubemapFromEquirect",uniforms:Ii(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:At,blending:Bn});r.uniforms.tEquirect.value=t;let a=new at(s,r),o=t.minFilter;return t.minFilter===wn&&(t.minFilter=Zt),new jr(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}};var Hs=class extends bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gn,this.environmentIntensity=1,this.environmentRotation=new gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var Wo=new N,Dd=new N,Ud=new Ie,nn=class{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Wo.subVectors(n,t).cross(Dd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Wo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Ud.getNormalMatrix(e),s=this.coplanarPoint(Wo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},_i=new ti,Or=new N,is=class{constructor(e=new nn,t=new nn,n=new nn,s=new nn,r=new nn,a=new nn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=xn){let n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],p=s[8],y=s[9],v=s[10],m=s[11],d=s[12],w=s[13],E=s[14],S=s[15];if(n[0].setComponents(l-r,f-c,m-p,S-d).normalize(),n[1].setComponents(l+r,f+c,m+p,S+d).normalize(),n[2].setComponents(l+a,f+h,m+y,S+w).normalize(),n[3].setComponents(l-a,f-h,m-y,S-w).normalize(),n[4].setComponents(l-o,f-u,m-v,S-E).normalize(),t===xn)n[5].setComponents(l+o,f+u,m+v,S+E).normalize();else if(t===Us)n[5].setComponents(o,u,v,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_i.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),_i.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_i)}intersectsSprite(e){return _i.center.set(0,0,0),_i.radius=.7071067811865476,_i.applyMatrix4(e.matrixWorld),this.intersectsSphere(_i)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Or.x=s.normal.x>0?e.max.x:e.min.x,Or.y=s.normal.y>0?e.max.y:e.min.y,Or.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Or)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ii=class extends bn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ea=new N,ta=new N,qc=new st,Rs=new On,Br=new ti,Xo=new N,Yc=new N,si=class extends bt{constructor(e=new yt,t=new ii){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)ea.fromBufferAttribute(t,s-1),ta.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=ea.distanceTo(ta);e.setAttribute("lineDistance",new ct(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Br.copy(n.boundingSphere),Br.applyMatrix4(s),Br.radius+=r,e.ray.intersectsSphere(Br)===!1)return;qc.copy(s).invert(),Rs.copy(e.ray).applyMatrix4(qc);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let p=Math.max(0,a.start),y=Math.min(h.count,a.start+a.count);for(let v=p,m=y-1;v<m;v+=c){let d=h.getX(v),w=h.getX(v+1),E=zr(this,e,Rs,l,d,w);E&&t.push(E)}if(this.isLineLoop){let v=h.getX(y-1),m=h.getX(p),d=zr(this,e,Rs,l,v,m);d&&t.push(d)}}else{let p=Math.max(0,a.start),y=Math.min(f.count,a.start+a.count);for(let v=p,m=y-1;v<m;v+=c){let d=zr(this,e,Rs,l,v,v+1);d&&t.push(d)}if(this.isLineLoop){let v=zr(this,e,Rs,l,y-1,p);v&&t.push(v)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function zr(i,e,t,n,s,r){let a=i.geometry.attributes.position;if(ea.fromBufferAttribute(a,s),ta.fromBufferAttribute(a,r),t.distanceSqToSegment(ea,ta,Xo,Yc)>n)return;Xo.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Xo);if(!(l<e.near||l>e.far))return{distance:l,point:Yc.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var ss=class extends bn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},$c=new st,jo=new On,kr=new ti,Hr=new N,Gs=class extends bt{constructor(e=new yt,t=new ss){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),kr.copy(n.boundingSphere),kr.applyMatrix4(s),kr.radius+=r,e.ray.intersectsSphere(kr)===!1)return;$c.copy(s).invert(),jo.copy(e.ray).applyMatrix4($c);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let y=f,v=p;y<v;y++){let m=c.getX(y);Hr.fromBufferAttribute(u,m),Zc(Hr,m,l,s,e,t,this)}}else{let f=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let y=f,v=p;y<v;y++)Hr.fromBufferAttribute(u,y),Zc(Hr,y,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Zc(i,e,t,n,s,r,a){let o=jo.distanceSqToPoint(i);if(o<t){let l=new N;jo.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Ht=class extends bt{constructor(){super(),this.isGroup=!0,this.type="Group"}};var Vs=class extends zt{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ws=class extends zt{constructor(e,t,n,s,r,a,o,l,c,h=xi){if(h!==xi&&h!==bi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===xi&&(n=hi),n===void 0&&h===bi&&(n=Ri),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:sn,this.minFilter=l!==void 0?l:sn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}};var wi=class i extends yt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],p=[],y=0,v=[],m=n/2,d=0;w(),a===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new ct(u,3)),this.setAttribute("normal",new ct(f,3)),this.setAttribute("uv",new ct(p,2));function w(){let S=new N,R=new N,A=0,C=(t-e)/n;for(let L=0;L<=r;L++){let M=[],g=L/r,b=g*(t-e)+e;for(let P=0;P<=s;P++){let D=P/s,k=D*l+o,O=Math.sin(k),z=Math.cos(k);R.x=b*O,R.y=-g*n+m,R.z=b*z,u.push(R.x,R.y,R.z),S.set(O,C,z).normalize(),f.push(S.x,S.y,S.z),p.push(D,1-g),M.push(y++)}v.push(M)}for(let L=0;L<s;L++)for(let M=0;M<r;M++){let g=v[M][L],b=v[M+1][L],P=v[M+1][L+1],D=v[M][L+1];(e>0||M!==0)&&(h.push(g,b,D),A+=3),(t>0||M!==r-1)&&(h.push(b,P,D),A+=3)}c.addGroup(d,A,0),d+=A}function E(S){let R=y,A=new we,C=new N,L=0,M=S===!0?e:t,g=S===!0?1:-1;for(let P=1;P<=s;P++)u.push(0,m*g,0),f.push(0,g,0),p.push(.5,.5),y++;let b=y;for(let P=0;P<=s;P++){let k=P/s*l+o,O=Math.cos(k),z=Math.sin(k);C.x=M*z,C.y=m*g,C.z=M*O,u.push(C.x,C.y,C.z),f.push(0,g,0),A.x=O*.5+.5,A.y=z*.5*g+.5,p.push(A.x,A.y),y++}for(let P=0;P<s;P++){let D=R+P,k=b+P;S===!0?h.push(k,k+1,D):h.push(k+1,k,D),L+=3}c.addGroup(d,L,S===!0?1:2),d+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},rs=class i extends wi{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},na=class i extends yt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new ct(r,3)),this.setAttribute("normal",new ct(r.slice(),3)),this.setAttribute("uv",new ct(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(w){let E=new N,S=new N,R=new N;for(let A=0;A<t.length;A+=3)p(t[A+0],E),p(t[A+1],S),p(t[A+2],R),l(E,S,R,w)}function l(w,E,S,R){let A=R+1,C=[];for(let L=0;L<=A;L++){C[L]=[];let M=w.clone().lerp(S,L/A),g=E.clone().lerp(S,L/A),b=A-L;for(let P=0;P<=b;P++)P===0&&L===A?C[L][P]=M:C[L][P]=M.clone().lerp(g,P/b)}for(let L=0;L<A;L++)for(let M=0;M<2*(A-L)-1;M++){let g=Math.floor(M/2);M%2===0?(f(C[L][g+1]),f(C[L+1][g]),f(C[L][g])):(f(C[L][g+1]),f(C[L+1][g+1]),f(C[L+1][g]))}}function c(w){let E=new N;for(let S=0;S<r.length;S+=3)E.x=r[S+0],E.y=r[S+1],E.z=r[S+2],E.normalize().multiplyScalar(w),r[S+0]=E.x,r[S+1]=E.y,r[S+2]=E.z}function h(){let w=new N;for(let E=0;E<r.length;E+=3){w.x=r[E+0],w.y=r[E+1],w.z=r[E+2];let S=m(w)/2/Math.PI+.5,R=d(w)/Math.PI+.5;a.push(S,1-R)}y(),u()}function u(){for(let w=0;w<a.length;w+=6){let E=a[w+0],S=a[w+2],R=a[w+4],A=Math.max(E,S,R),C=Math.min(E,S,R);A>.9&&C<.1&&(E<.2&&(a[w+0]+=1),S<.2&&(a[w+2]+=1),R<.2&&(a[w+4]+=1))}}function f(w){r.push(w.x,w.y,w.z)}function p(w,E){let S=w*3;E.x=e[S+0],E.y=e[S+1],E.z=e[S+2]}function y(){let w=new N,E=new N,S=new N,R=new N,A=new we,C=new we,L=new we;for(let M=0,g=0;M<r.length;M+=9,g+=6){w.set(r[M+0],r[M+1],r[M+2]),E.set(r[M+3],r[M+4],r[M+5]),S.set(r[M+6],r[M+7],r[M+8]),A.set(a[g+0],a[g+1]),C.set(a[g+2],a[g+3]),L.set(a[g+4],a[g+5]),R.copy(w).add(E).add(S).divideScalar(3);let b=m(R);v(A,g+0,w,b),v(C,g+2,E,b),v(L,g+4,S,b)}}function v(w,E,S,R){R<0&&w.x===1&&(a[E]=w.x-1),S.x===0&&S.z===0&&(a[E]=R/2/Math.PI+.5)}function m(w){return Math.atan2(w.z,-w.x)}function d(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}};var Xs=class i extends na{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},qs=class i extends yt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=e/o,f=t/l,p=[],y=[],v=[],m=[];for(let d=0;d<h;d++){let w=d*f-a;for(let E=0;E<c;E++){let S=E*u-r;y.push(S,-w,0),v.push(0,0,1),m.push(E/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let w=0;w<o;w++){let E=w+c*d,S=w+c*(d+1),R=w+1+c*(d+1),A=w+1+c*d;p.push(E,S,A),p.push(S,R,A)}this.setIndex(p),this.setAttribute("position",new ct(y,3)),this.setAttribute("normal",new ct(v,3)),this.setAttribute("uv",new ct(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Ut=class i extends yt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new N,f=new N,p=[],y=[],v=[],m=[];for(let d=0;d<=n;d++){let w=[],E=d/n,S=0;d===0&&a===0?S=.5/t:d===n&&l===Math.PI&&(S=-.5/t);for(let R=0;R<=t;R++){let A=R/t;u.x=-e*Math.cos(s+A*r)*Math.sin(a+E*o),u.y=e*Math.cos(a+E*o),u.z=e*Math.sin(s+A*r)*Math.sin(a+E*o),y.push(u.x,u.y,u.z),f.copy(u).normalize(),v.push(f.x,f.y,f.z),m.push(A+S,1-E),w.push(c++)}h.push(w)}for(let d=0;d<n;d++)for(let w=0;w<t;w++){let E=h[d][w+1],S=h[d][w],R=h[d+1][w],A=h[d+1][w+1];(d!==0||a>0)&&p.push(E,S,A),(d!==n-1||l<Math.PI)&&p.push(S,R,A)}this.setIndex(p),this.setAttribute("position",new ct(y,3)),this.setAttribute("normal",new ct(v,3)),this.setAttribute("uv",new ct(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var ri=class i extends yt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],l=[],c=[],h=new N,u=new N,f=new N;for(let p=0;p<=n;p++)for(let y=0;y<=s;y++){let v=y/s*r,m=p/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(v),u.y=(e+t*Math.cos(m))*Math.sin(v),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(y/s),c.push(p/n)}for(let p=1;p<=n;p++)for(let y=1;y<=s;y++){let v=(s+1)*p+y-1,m=(s+1)*(p-1)+y-1,d=(s+1)*(p-1)+y,w=(s+1)*p+y;a.push(v,m,w),a.push(m,d,w)}this.setIndex(a),this.setAttribute("position",new ct(o,3)),this.setAttribute("normal",new ct(l,3)),this.setAttribute("uv",new ct(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Ys=class extends bn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Fe(16777215),this.specular=new Fe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vl,this.normalScale=new we(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.combine=Ma,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var ia=class extends bn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ph,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},sa=class extends bn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Gr(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Nd(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Ti=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ra=class extends Ti{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Yo,endingEnd:Yo}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case $o:r=e,o=2*t-n;break;case Zo:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case $o:a=e,l=2*n-t;break;case Zo:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,p=this._weightNext,y=(n-t)/(s-t),v=y*y,m=v*y,d=-f*m+2*f*v-f*y,w=(1+f)*m+(-1.5-2*f)*v+(-.5+f)*y+1,E=(-1-p)*m+(1.5+p)*v+.5*y,S=p*m-p*v;for(let R=0;R!==o;++R)r[R]=d*a[h+R]+w*a[c+R]+E*a[l+R]+S*a[u+R];return r}},aa=class extends Ti{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),u=1-h;for(let f=0;f!==o;++f)r[f]=a[c+f]*u+a[l+f]*h;return r}},oa=class extends Ti{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},an=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Gr(t,this.TimeBufferType),this.values=Gr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Gr(e.times,Array),values:Gr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new oa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new aa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ra(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ls:t=this.InterpolantFactoryMethodDiscrete;break;case $r:t=this.InterpolantFactoryMethodLinear;break;case Vr:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ls;case this.InterpolantFactoryMethodLinear:return $r;case this.InterpolantFactoryMethodSmooth:return Vr}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&Nd(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Vr,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let u=o*n,f=u-n,p=u+n;for(let y=0;y!==n;++y){let v=t[u+y];if(v!==t[f+y]||v!==t[p+y]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*n,f=a*n;for(let p=0;p!==n;++p)t[f+p]=t[u+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};an.prototype.TimeBufferType=Float32Array;an.prototype.ValueBufferType=Float32Array;an.prototype.DefaultInterpolation=$r;var ai=class extends an{constructor(e,t,n){super(e,t,n)}};ai.prototype.ValueTypeName="bool";ai.prototype.ValueBufferType=Array;ai.prototype.DefaultInterpolation=Ls;ai.prototype.InterpolantFactoryMethodLinear=void 0;ai.prototype.InterpolantFactoryMethodSmooth=void 0;var la=class extends an{};la.prototype.ValueTypeName="color";var ca=class extends an{};ca.prototype.ValueTypeName="number";var ha=class extends Ti{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)rn.slerpFlat(r,0,a,c-o,a,c,l);return r}},$s=class extends an{InterpolantFactoryMethodLinear(e){return new ha(this.times,this.values,this.getValueSize(),e)}};$s.prototype.ValueTypeName="quaternion";$s.prototype.InterpolantFactoryMethodSmooth=void 0;var oi=class extends an{constructor(e,t,n){super(e,t,n)}};oi.prototype.ValueTypeName="string";oi.prototype.ValueBufferType=Array;oi.prototype.DefaultInterpolation=Ls;oi.prototype.InterpolantFactoryMethodLinear=void 0;oi.prototype.InterpolantFactoryMethodSmooth=void 0;var ua=class extends an{};ua.prototype.ValueTypeName="vector";var Qo={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},da=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let p=c[u],y=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return y}return null}}},qh=new da,as=class{constructor(e){this.manager=e!==void 0?e:qh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};as.DEFAULT_MATERIAL_NAME="__DEFAULT";var fa=class extends as{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Qo.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;let o=ts("img");function l(){h(),Qo.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}};var Zs=class extends as{constructor(e){super(e)}load(e,t,n,s){let r=new zt,a=new fa(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},os=class extends bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Fe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Ks=class extends os{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Fe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},qo=new st,Kc=new N,Jc=new N,el=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new we(512,512),this.map=null,this.mapPass=null,this.matrix=new st,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new is,this._frameExtents=new we(1,1),this._viewportCount=1,this._viewports=[new ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Kc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Kc),Jc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Jc),t.updateMatrixWorld(),qo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(qo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Js=class extends zs{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},tl=class extends el{constructor(){super(new Js(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ls=class extends os{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.shadow=new tl}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},js=class extends os{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var pa=class extends Lt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}};var Tl="\\[\\]\\.:\\/",Fd=new RegExp("["+Tl+"]","g"),Al="[^"+Tl+"]",Od="[^"+Tl.replace("\\.","")+"]",Bd=/((?:WC+[\/:])*)/.source.replace("WC",Al),zd=/(WCOD+)?/.source.replace("WCOD",Od),kd=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Al),Hd=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Al),Gd=new RegExp("^"+Bd+zd+kd+Hd+"$"),Vd=["material","materials","bones","map"],nl=class{constructor(e,t,n){let s=n||it.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},it=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Fd,"")}static parseTrackName(e){let t=Gd.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Vd.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};it.Composite=nl;it.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};it.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};it.prototype.GetterByBindingType=[it.prototype._getValue_direct,it.prototype._getValue_array,it.prototype._getValue_arrayElement,it.prototype._getValue_toArray];it.prototype.SetterByBindingTypeAndVersioning=[[it.prototype._setValue_direct,it.prototype._setValue_direct_setNeedsUpdate,it.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[it.prototype._setValue_array,it.prototype._setValue_array_setNeedsUpdate,it.prototype._setValue_array_setMatrixWorldNeedsUpdate],[it.prototype._setValue_arrayElement,it.prototype._setValue_arrayElement_setNeedsUpdate,it.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[it.prototype._setValue_fromArray,it.prototype._setValue_fromArray_setNeedsUpdate,it.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var sy=new Float32Array(1);var jc=new st,Qs=class{constructor(e,t,n=0,s=1/0){this.ray=new On(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new ns,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return jc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(jc),this}intersectObject(e,t=!0,n=[]){return il(e,this,n,t),n.sort(Qc),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)il(e[s],this,n,t);return n.sort(Qc),n}};function Qc(i,e){return i.distance-e.distance}function il(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)il(r[a],e,t,!0)}}var cs=class{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ne(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Ne(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var er=class extends Sn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};function Cl(i,e,t,n){let s=Wd(n);switch(t){case dl:return i*e;case pl:return i*e;case ml:return i*e*2;case gl:return i*e/s.components*s.byteLength;case Pa:return i*e/s.components*s.byteLength;case yl:return i*e*2/s.components*s.byteLength;case Ia:return i*e*2/s.components*s.byteLength;case fl:return i*e*3/s.components*s.byteLength;case ln:return i*e*4/s.components*s.byteLength;case La:return i*e*4/s.components*s.byteLength;case ir:case sr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case rr:case ar:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ua:case Fa:return Math.max(i,16)*Math.max(e,8)/4;case Da:case Na:return Math.max(i,8)*Math.max(e,8)/2;case Oa:case Ba:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case za:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ka:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ha:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ga:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Va:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Wa:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Xa:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case qa:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ya:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case $a:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Za:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ka:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ja:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ja:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Qa:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case or:case eo:case to:return Math.ceil(i/4)*Math.ceil(e/4)*16;case _l:case no:return Math.ceil(i/4)*Math.ceil(e/4)*8;case io:case so:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Wd(i){switch(i){case Tn:case cl:return{byteLength:1,components:1};case us:case hl:case ds:return{byteLength:2,components:1};case Ca:case Ra:return{byteLength:2,components:4};case hi:case Aa:case An:return{byteLength:4,components:1};case ul:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"171"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="171");function gu(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function qd(i){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((p,y)=>p.start-y.start);let f=0;for(let p=1;p<u.length;p++){let y=u[f],v=u[p];v.start<=y.start+y.count+1?y.count=Math.max(y.count,v.start+v.count-y.start):(++f,u[f]=v)}u.length=f+1;for(let p=0,y=u.length;p<y;p++){let v=u[p];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Yd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$d=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Zd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Kd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ef=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,nf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,sf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,af=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,of=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,lf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,cf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,hf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,uf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,df=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ff=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,pf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,mf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,gf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,yf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,_f=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,vf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,xf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Mf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ef="gl_FragColor = linearToOutputTexel( gl_FragColor );",wf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Tf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Af=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Cf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Rf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Pf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,If=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Lf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Df=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Uf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Nf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ff=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Of=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Bf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,kf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Hf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Gf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Vf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Wf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,qf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Yf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,$f=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Zf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Kf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Jf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ep=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,tp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,np=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ip=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ap=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,op=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,hp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,up=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,dp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,fp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,yp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_p=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Sp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Mp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,bp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ep=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Tp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ap=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Cp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Rp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Pp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ip=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Lp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Dp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Up=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Np=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Op=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Bp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Hp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Gp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Vp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Wp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Xp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,qp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Yp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$p=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,em=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,tm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,nm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,im=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,am=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,om=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,lm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,um=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,dm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,pm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,mm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ym=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,_m=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Mm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Em=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,wm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Tm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ue={alphahash_fragment:Yd,alphahash_pars_fragment:$d,alphamap_fragment:Zd,alphamap_pars_fragment:Kd,alphatest_fragment:Jd,alphatest_pars_fragment:jd,aomap_fragment:Qd,aomap_pars_fragment:ef,batching_pars_vertex:tf,batching_vertex:nf,begin_vertex:sf,beginnormal_vertex:rf,bsdfs:af,iridescence_fragment:of,bumpmap_pars_fragment:lf,clipping_planes_fragment:cf,clipping_planes_pars_fragment:hf,clipping_planes_pars_vertex:uf,clipping_planes_vertex:df,color_fragment:ff,color_pars_fragment:pf,color_pars_vertex:mf,color_vertex:gf,common:yf,cube_uv_reflection_fragment:_f,defaultnormal_vertex:vf,displacementmap_pars_vertex:xf,displacementmap_vertex:Sf,emissivemap_fragment:Mf,emissivemap_pars_fragment:bf,colorspace_fragment:Ef,colorspace_pars_fragment:wf,envmap_fragment:Tf,envmap_common_pars_fragment:Af,envmap_pars_fragment:Cf,envmap_pars_vertex:Rf,envmap_physical_pars_fragment:kf,envmap_vertex:Pf,fog_vertex:If,fog_pars_vertex:Lf,fog_fragment:Df,fog_pars_fragment:Uf,gradientmap_pars_fragment:Nf,lightmap_pars_fragment:Ff,lights_lambert_fragment:Of,lights_lambert_pars_fragment:Bf,lights_pars_begin:zf,lights_toon_fragment:Hf,lights_toon_pars_fragment:Gf,lights_phong_fragment:Vf,lights_phong_pars_fragment:Wf,lights_physical_fragment:Xf,lights_physical_pars_fragment:qf,lights_fragment_begin:Yf,lights_fragment_maps:$f,lights_fragment_end:Zf,logdepthbuf_fragment:Kf,logdepthbuf_pars_fragment:Jf,logdepthbuf_pars_vertex:jf,logdepthbuf_vertex:Qf,map_fragment:ep,map_pars_fragment:tp,map_particle_fragment:np,map_particle_pars_fragment:ip,metalnessmap_fragment:sp,metalnessmap_pars_fragment:rp,morphinstance_vertex:ap,morphcolor_vertex:op,morphnormal_vertex:lp,morphtarget_pars_vertex:cp,morphtarget_vertex:hp,normal_fragment_begin:up,normal_fragment_maps:dp,normal_pars_fragment:fp,normal_pars_vertex:pp,normal_vertex:mp,normalmap_pars_fragment:gp,clearcoat_normal_fragment_begin:yp,clearcoat_normal_fragment_maps:_p,clearcoat_pars_fragment:vp,iridescence_pars_fragment:xp,opaque_fragment:Sp,packing:Mp,premultiplied_alpha_fragment:bp,project_vertex:Ep,dithering_fragment:wp,dithering_pars_fragment:Tp,roughnessmap_fragment:Ap,roughnessmap_pars_fragment:Cp,shadowmap_pars_fragment:Rp,shadowmap_pars_vertex:Pp,shadowmap_vertex:Ip,shadowmask_pars_fragment:Lp,skinbase_vertex:Dp,skinning_pars_vertex:Up,skinning_vertex:Np,skinnormal_vertex:Fp,specularmap_fragment:Op,specularmap_pars_fragment:Bp,tonemapping_fragment:zp,tonemapping_pars_fragment:kp,transmission_fragment:Hp,transmission_pars_fragment:Gp,uv_pars_fragment:Vp,uv_pars_vertex:Wp,uv_vertex:Xp,worldpos_vertex:qp,background_vert:Yp,background_frag:$p,backgroundCube_vert:Zp,backgroundCube_frag:Kp,cube_vert:Jp,cube_frag:jp,depth_vert:Qp,depth_frag:em,distanceRGBA_vert:tm,distanceRGBA_frag:nm,equirect_vert:im,equirect_frag:sm,linedashed_vert:rm,linedashed_frag:am,meshbasic_vert:om,meshbasic_frag:lm,meshlambert_vert:cm,meshlambert_frag:hm,meshmatcap_vert:um,meshmatcap_frag:dm,meshnormal_vert:fm,meshnormal_frag:pm,meshphong_vert:mm,meshphong_frag:gm,meshphysical_vert:ym,meshphysical_frag:_m,meshtoon_vert:vm,meshtoon_frag:xm,points_vert:Sm,points_frag:Mm,shadow_vert:bm,shadow_frag:Em,sprite_vert:wm,sprite_frag:Tm},ie={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ie}},envmap:{envMap:{value:null},envMapRotation:{value:new Ie},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ie},normalScale:{value:new we(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0},uvTransform:{value:new Ie}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new we(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}}},Cn={basic:{uniforms:Nt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:Nt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new Fe(0)}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:Nt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:Nt([ie.common,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.roughnessmap,ie.metalnessmap,ie.fog,ie.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:Nt([ie.common,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.gradientmap,ie.fog,ie.lights,{emissive:{value:new Fe(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:Nt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:Nt([ie.points,ie.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:Nt([ie.common,ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:Nt([ie.common,ie.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:Nt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:Nt([ie.sprite,ie.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new Ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ie}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distanceRGBA:{uniforms:Nt([ie.common,ie.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distanceRGBA_vert,fragmentShader:Ue.distanceRGBA_frag},shadow:{uniforms:Nt([ie.lights,ie.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};Cn.physical={uniforms:Nt([Cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ie},clearcoatNormalScale:{value:new we(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ie},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ie},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ie},transmissionSamplerSize:{value:new we},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ie},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ie},anisotropyVector:{value:new we},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ie}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};var ro={r:0,b:0,g:0},Li=new gn,Am=new st;function Cm(i,e,t,n,s,r,a){let o=new Fe(0),l=r===!0?0:1,c,h,u=null,f=0,p=null;function y(E){let S=E.isScene===!0?E.background:null;return S&&S.isTexture&&(S=(E.backgroundBlurriness>0?t:e).get(S)),S}function v(E){let S=!1,R=y(E);R===null?d(o,l):R&&R.isColor&&(d(R,1),S=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(E,S){let R=y(S);R&&(R.isCubeTexture||R.mapping===tr)?(h===void 0&&(h=new at(new ni(1,1,1),new kt({name:"BackgroundCubeMaterial",uniforms:Ii(Cn.backgroundCube.uniforms),vertexShader:Cn.backgroundCube.vertexShader,fragmentShader:Cn.backgroundCube.fragmentShader,side:At,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,C,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Li.copy(S.backgroundRotation),Li.x*=-1,Li.y*=-1,Li.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Li.y*=-1,Li.z*=-1),h.material.uniforms.envMap.value=R,h.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Am.makeRotationFromEuler(Li)),h.material.toneMapped=qe.getTransfer(R.colorSpace)!==Je,(u!==R||f!==R.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=R,f=R.version,p=i.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):R&&R.isTexture&&(c===void 0&&(c=new at(new qs(2,2),new kt({name:"BackgroundMaterial",uniforms:Ii(Cn.background.uniforms),vertexShader:Cn.background.vertexShader,fragmentShader:Cn.background.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=R,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=qe.getTransfer(R.colorSpace)!==Je,R.matrixAutoUpdate===!0&&R.updateMatrix(),c.material.uniforms.uvTransform.value.copy(R.matrix),(u!==R||f!==R.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=R,f=R.version,p=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function d(E,S){E.getRGB(ro,wl(i)),n.buffers.color.setClear(ro.r,ro.g,ro.b,S,a)}function w(){h!==void 0&&(h.geometry.dispose(),h.material.dispose()),c!==void 0&&(c.geometry.dispose(),c.material.dispose())}return{getClearColor:function(){return o},setClearColor:function(E,S=1){o.set(E),l=S,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,d(o,l)},render:v,addToRenderList:m,dispose:w}}function Rm(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,a=!1;function o(g,b,P,D,k){let O=!1,z=u(D,P,b);r!==z&&(r=z,c(r.object)),O=p(g,D,P,k),O&&y(g,D,P,k),k!==null&&e.update(k,i.ELEMENT_ARRAY_BUFFER),(O||a)&&(a=!1,S(g,b,P,D),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return i.createVertexArray()}function c(g){return i.bindVertexArray(g)}function h(g){return i.deleteVertexArray(g)}function u(g,b,P){let D=P.wireframe===!0,k=n[g.id];k===void 0&&(k={},n[g.id]=k);let O=k[b.id];O===void 0&&(O={},k[b.id]=O);let z=O[D];return z===void 0&&(z=f(l()),O[D]=z),z}function f(g){let b=[],P=[],D=[];for(let k=0;k<t;k++)b[k]=0,P[k]=0,D[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:P,attributeDivisors:D,object:g,attributes:{},index:null}}function p(g,b,P,D){let k=r.attributes,O=b.attributes,z=0,Q=P.getAttributes();for(let X in Q)if(Q[X].location>=0){let se=k[X],ve=O[X];if(ve===void 0&&(X==="instanceMatrix"&&g.instanceMatrix&&(ve=g.instanceMatrix),X==="instanceColor"&&g.instanceColor&&(ve=g.instanceColor)),se===void 0||se.attribute!==ve||ve&&se.data!==ve.data)return!0;z++}return r.attributesNum!==z||r.index!==D}function y(g,b,P,D){let k={},O=b.attributes,z=0,Q=P.getAttributes();for(let X in Q)if(Q[X].location>=0){let se=O[X];se===void 0&&(X==="instanceMatrix"&&g.instanceMatrix&&(se=g.instanceMatrix),X==="instanceColor"&&g.instanceColor&&(se=g.instanceColor));let ve={};ve.attribute=se,se&&se.data&&(ve.data=se.data),k[X]=ve,z++}r.attributes=k,r.attributesNum=z,r.index=D}function v(){let g=r.newAttributes;for(let b=0,P=g.length;b<P;b++)g[b]=0}function m(g){d(g,0)}function d(g,b){let P=r.newAttributes,D=r.enabledAttributes,k=r.attributeDivisors;P[g]=1,D[g]===0&&(i.enableVertexAttribArray(g),D[g]=1),k[g]!==b&&(i.vertexAttribDivisor(g,b),k[g]=b)}function w(){let g=r.newAttributes,b=r.enabledAttributes;for(let P=0,D=b.length;P<D;P++)b[P]!==g[P]&&(i.disableVertexAttribArray(P),b[P]=0)}function E(g,b,P,D,k,O,z){z===!0?i.vertexAttribIPointer(g,b,P,k,O):i.vertexAttribPointer(g,b,P,D,k,O)}function S(g,b,P,D){v();let k=D.attributes,O=P.getAttributes(),z=b.defaultAttributeValues;for(let Q in O){let X=O[Q];if(X.location>=0){let J=k[Q];if(J===void 0&&(Q==="instanceMatrix"&&g.instanceMatrix&&(J=g.instanceMatrix),Q==="instanceColor"&&g.instanceColor&&(J=g.instanceColor)),J!==void 0){let se=J.normalized,ve=J.itemSize,Oe=e.get(J);if(Oe===void 0)continue;let Qe=Oe.buffer,$=Oe.type,ne=Oe.bytesPerElement,ye=$===i.INT||$===i.UNSIGNED_INT||J.gpuType===Aa;if(J.isInterleavedBufferAttribute){let oe=J.data,Te=oe.stride,Pe=J.offset;if(oe.isInstancedInterleavedBuffer){for(let Be=0;Be<X.locationSize;Be++)d(X.location+Be,oe.meshPerAttribute);g.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Be=0;Be<X.locationSize;Be++)m(X.location+Be);i.bindBuffer(i.ARRAY_BUFFER,Qe);for(let Be=0;Be<X.locationSize;Be++)E(X.location+Be,ve/X.locationSize,$,se,Te*ne,(Pe+ve/X.locationSize*Be)*ne,ye)}else{if(J.isInstancedBufferAttribute){for(let oe=0;oe<X.locationSize;oe++)d(X.location+oe,J.meshPerAttribute);g.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let oe=0;oe<X.locationSize;oe++)m(X.location+oe);i.bindBuffer(i.ARRAY_BUFFER,Qe);for(let oe=0;oe<X.locationSize;oe++)E(X.location+oe,ve/X.locationSize,$,se,ve*ne,ve/X.locationSize*oe*ne,ye)}}else if(z!==void 0){let se=z[Q];if(se!==void 0)switch(se.length){case 2:i.vertexAttrib2fv(X.location,se);break;case 3:i.vertexAttrib3fv(X.location,se);break;case 4:i.vertexAttrib4fv(X.location,se);break;default:i.vertexAttrib1fv(X.location,se)}}}}w()}function R(){L();for(let g in n){let b=n[g];for(let P in b){let D=b[P];for(let k in D)h(D[k].object),delete D[k];delete b[P]}delete n[g]}}function A(g){if(n[g.id]===void 0)return;let b=n[g.id];for(let P in b){let D=b[P];for(let k in D)h(D[k].object),delete D[k];delete b[P]}delete n[g.id]}function C(g){for(let b in n){let P=n[b];if(P[g.id]===void 0)continue;let D=P[g.id];for(let k in D)h(D[k].object),delete D[k];delete P[g.id]}}function L(){M(),a=!0,r!==s&&(r=s,c(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:L,resetDefaultState:M,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:m,disableUnusedAttributes:w}}function Pm(i,e,t){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let y=0;y<u;y++)p+=h[y];t.update(p,n,1)}function l(c,h,u,f){if(u===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let y=0;y<c.length;y++)a(c[y],h[y],f[y]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let y=0;for(let v=0;v<u;v++)y+=h[v]*f[v];t.update(y,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Im(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==ln&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){let L=C===ds&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Tn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==An&&!L)}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=y>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:y,maxTextureSize:v,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:w,maxVaryings:E,maxFragmentUniforms:S,vertexTextures:R,maxSamples:A}}function Lm(i){let e=this,t=null,n=0,s=!1,r=!1,a=new nn,o=new Ie,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let p=u.length!==0||f||n!==0||s;return s=f,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,p){let y=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,d=i.get(u);if(!s||y===null||y.length===0||r&&!m)r?h(null):c();else{let w=r?0:n,E=w*4,S=d.clippingState||null;l.value=S,S=h(y,f,E,p);for(let R=0;R!==E;++R)S[R]=t[R];d.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,p,y){let v=u!==null?u.length:0,m=null;if(v!==0){if(m=l.value,y!==!0||m===null){let d=p+v*4,w=f.matrixWorldInverse;o.getNormalMatrix(w),(m===null||m.length<d)&&(m=new Float32Array(d));for(let E=0,S=p;E!==v;++E,S+=4)a.copy(u[E]).applyMatrix4(w,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function Dm(i){let e=new WeakMap;function t(a,o){return o===Ea?a.mapping=Ai:o===wa&&(a.mapping=Ci),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Ea||o===wa)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Qr(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var ms=4,Yh=[.125,.215,.35,.446,.526,.582],Ni=20,Rl=new Js,$h=new Fe,Pl=null,Il=0,Ll=0,Dl=!1,Ui=(1+Math.sqrt(5))/2,ps=1/Ui,Zh=[new N(-Ui,ps,0),new N(Ui,ps,0),new N(-ps,0,Ui),new N(ps,0,Ui),new N(0,Ui,-ps),new N(0,Ui,ps),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)],lo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Pl=this._renderer.getRenderTarget(),Il=this._renderer.getActiveCubeFace(),Ll=this._renderer.getActiveMipmapLevel(),Dl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Pl,Il,Ll),this._renderer.xr.enabled=Dl,e.scissorTest=!1,ao(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ai||e.mapping===Ci?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Pl=this._renderer.getRenderTarget(),Il=this._renderer.getActiveCubeFace(),Ll=this._renderer.getActiveMipmapLevel(),Dl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Zt,minFilter:Zt,generateMipmaps:!1,type:ds,format:ln,colorSpace:Ei,depthBuffer:!1},s=Kh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kh(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Um(r)),this._blurMaterial=Nm(r,e,t)}return s}_compileMaterial(e){let t=new at(this._lodPlanes[0],e);this._renderer.compile(t,Rl)}_sceneToCubeUV(e,t,n,s){let o=new Lt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor($h),h.toneMapping=zn,h.autoClear=!1;let p=new Kt({name:"PMREM.Background",side:At,depthWrite:!1,depthTest:!1}),y=new at(new ni,p),v=!1,m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,v=!0):(p.color.copy($h),v=!0);for(let d=0;d<6;d++){let w=d%3;w===0?(o.up.set(0,l[d],0),o.lookAt(c[d],0,0)):w===1?(o.up.set(0,0,l[d]),o.lookAt(0,c[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,c[d]));let E=this._cubeSize;ao(s,w*E,d>2?E:0,E,E),h.setRenderTarget(s),v&&h.render(y,o),h.render(e,o)}y.geometry.dispose(),y.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Ai||e.mapping===Ci;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=jh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jh());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new at(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;ao(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Rl)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Zh[(s-r-1)%Zh.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new at(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[n]-1,y=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Ni-1),v=r/y,m=isFinite(r)?1+Math.floor(h*v):Ni;m>Ni&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ni}`);let d=[],w=0;for(let C=0;C<Ni;++C){let L=C/v,M=Math.exp(-L*L/2);d.push(M),C===0?w+=M:C<m&&(w+=2*M)}for(let C=0;C<d.length;C++)d[C]=d[C]/w;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:E}=this;f.dTheta.value=y,f.mipInt.value=E-n;let S=this._sizeLods[s],R=3*S*(s>E-ms?s-E+ms:0),A=4*(this._cubeSize-S);ao(t,R,A,3*S,2*S),l.setRenderTarget(t),l.render(u,Rl)}};function Um(i){let e=[],t=[],n=[],s=i,r=i-ms+1+Yh.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>i-ms?l=Yh[a-i+ms-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,y=6,v=3,m=2,d=1,w=new Float32Array(v*y*p),E=new Float32Array(m*y*p),S=new Float32Array(d*y*p);for(let A=0;A<p;A++){let C=A%3*2/3-1,L=A>2?0:-1,M=[C,L,0,C+2/3,L,0,C+2/3,L+1,0,C,L,0,C+2/3,L+1,0,C,L+1,0];w.set(M,v*y*A),E.set(f,m*y*A);let g=[A,A,A,A,A,A];S.set(g,d*y*A)}let R=new yt;R.setAttribute("position",new Dt(w,v)),R.setAttribute("uv",new Dt(E,m)),R.setAttribute("faceIndex",new Dt(S,d)),e.push(R),s>ms&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Kh(i,e,t){let n=new Mn(i,e,t);return n.texture.mapping=tr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ao(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Nm(i,e,t){let n=new Float32Array(Ni),s=new N(0,1,0);return new kt({name:"SphericalGaussianBlur",defines:{n:Ni,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Vl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function Jh(){return new kt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function jh(){return new kt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function Vl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Fm(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===Ea||l===wa,h=l===Ai||l===Ci;if(c||h){let u=e.get(o),f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new lo(i)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{let p=o.image;return c&&p&&p.height>0||h&&p&&s(p)?(t===null&&(t=new lo(i)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Om(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Pi("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Bm(i,e,t,n){let s={},r=new WeakMap;function a(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let y in f.attributes)e.remove(f.attributes[y]);f.removeEventListener("dispose",a),delete s[f.id];let p=r.get(f);p&&(e.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function l(u){let f=u.attributes;for(let p in f)e.update(f[p],i.ARRAY_BUFFER)}function c(u){let f=[],p=u.index,y=u.attributes.position,v=0;if(p!==null){let w=p.array;v=p.version;for(let E=0,S=w.length;E<S;E+=3){let R=w[E+0],A=w[E+1],C=w[E+2];f.push(R,A,A,C,C,R)}}else if(y!==void 0){let w=y.array;v=y.version;for(let E=0,S=w.length/3-1;E<S;E+=3){let R=E+0,A=E+1,C=E+2;f.push(R,A,A,C,C,R)}}else return;let m=new(El(f)?Bs:Os)(f,1);m.version=v;let d=r.get(u);d&&e.remove(d),r.set(u,m)}function h(u){let f=r.get(u);if(f){let p=u.index;p!==null&&f.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function zm(i,e,t){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,p){i.drawElements(n,p,r,f*a),t.update(p,n,1)}function c(f,p,y){y!==0&&(i.drawElementsInstanced(n,p,r,f*a,y),t.update(p,n,y))}function h(f,p,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,y);let m=0;for(let d=0;d<y;d++)m+=p[d];t.update(m,n,1)}function u(f,p,y,v){if(y===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)c(f[d]/a,p[d],v[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,v,0,y);let d=0;for(let w=0;w<y;w++)d+=p[w]*v[w];t.update(d,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function km(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Hm(i,e,t){let n=new WeakMap,s=new ht;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(o);if(f===void 0||f.count!==u){let M=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",M)};f!==void 0&&f.texture.dispose();let p=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],w=o.morphAttributes.color||[],E=0;p===!0&&(E=1),y===!0&&(E=2),v===!0&&(E=3);let S=o.attributes.position.count*E,R=1;S>e.maxTextureSize&&(R=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);let A=new Float32Array(S*R*4*u),C=new Fs(A,S,R,u);C.type=An,C.needsUpdate=!0;let L=E*4;for(let g=0;g<u;g++){let b=m[g],P=d[g],D=w[g],k=S*R*4*g;for(let O=0;O<b.count;O++){let z=O*L;p===!0&&(s.fromBufferAttribute(b,O),A[k+z+0]=s.x,A[k+z+1]=s.y,A[k+z+2]=s.z,A[k+z+3]=0),y===!0&&(s.fromBufferAttribute(P,O),A[k+z+4]=s.x,A[k+z+5]=s.y,A[k+z+6]=s.z,A[k+z+7]=0),v===!0&&(s.fromBufferAttribute(D,O),A[k+z+8]=s.x,A[k+z+9]=s.y,A[k+z+10]=s.z,A[k+z+11]=D.itemSize===4?s.w:1)}}f={count:u,texture:C,size:new we(S,R)},n.set(o,f),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let p=0;for(let v=0;v<c.length;v++)p+=c[v];let y=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",y),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Gm(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var yu=new zt,Qh=new Ws(1,1),_u=new Fs,vu=new Jr,xu=new ks,eu=[],tu=[],nu=new Float32Array(16),iu=new Float32Array(9),su=new Float32Array(4);function ys(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=eu[s];if(r===void 0&&(r=new Float32Array(s),eu[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function vt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function xt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ho(i,e){let t=tu[e];t===void 0&&(t=new Int32Array(e),tu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Vm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Wm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;i.uniform2fv(this.addr,e),xt(t,e)}}function Xm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(vt(t,e))return;i.uniform3fv(this.addr,e),xt(t,e)}}function qm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;i.uniform4fv(this.addr,e),xt(t,e)}}function Ym(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(vt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),xt(t,e)}else{if(vt(t,n))return;su.set(n),i.uniformMatrix2fv(this.addr,!1,su),xt(t,n)}}function $m(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(vt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),xt(t,e)}else{if(vt(t,n))return;iu.set(n),i.uniformMatrix3fv(this.addr,!1,iu),xt(t,n)}}function Zm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(vt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),xt(t,e)}else{if(vt(t,n))return;nu.set(n),i.uniformMatrix4fv(this.addr,!1,nu),xt(t,n)}}function Km(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Jm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;i.uniform2iv(this.addr,e),xt(t,e)}}function jm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vt(t,e))return;i.uniform3iv(this.addr,e),xt(t,e)}}function Qm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;i.uniform4iv(this.addr,e),xt(t,e)}}function eg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function tg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;i.uniform2uiv(this.addr,e),xt(t,e)}}function ng(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vt(t,e))return;i.uniform3uiv(this.addr,e),xt(t,e)}}function ig(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;i.uniform4uiv(this.addr,e),xt(t,e)}}function sg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Qh.compareFunction=xl,r=Qh):r=yu,t.setTexture2D(e||r,s)}function rg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||vu,s)}function ag(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||xu,s)}function og(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||_u,s)}function lg(i){switch(i){case 5126:return Vm;case 35664:return Wm;case 35665:return Xm;case 35666:return qm;case 35674:return Ym;case 35675:return $m;case 35676:return Zm;case 5124:case 35670:return Km;case 35667:case 35671:return Jm;case 35668:case 35672:return jm;case 35669:case 35673:return Qm;case 5125:return eg;case 36294:return tg;case 36295:return ng;case 36296:return ig;case 35678:case 36198:case 36298:case 36306:case 35682:return sg;case 35679:case 36299:case 36307:return rg;case 35680:case 36300:case 36308:case 36293:return ag;case 36289:case 36303:case 36311:case 36292:return og}}function cg(i,e){i.uniform1fv(this.addr,e)}function hg(i,e){let t=ys(e,this.size,2);i.uniform2fv(this.addr,t)}function ug(i,e){let t=ys(e,this.size,3);i.uniform3fv(this.addr,t)}function dg(i,e){let t=ys(e,this.size,4);i.uniform4fv(this.addr,t)}function fg(i,e){let t=ys(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function pg(i,e){let t=ys(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function mg(i,e){let t=ys(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function gg(i,e){i.uniform1iv(this.addr,e)}function yg(i,e){i.uniform2iv(this.addr,e)}function _g(i,e){i.uniform3iv(this.addr,e)}function vg(i,e){i.uniform4iv(this.addr,e)}function xg(i,e){i.uniform1uiv(this.addr,e)}function Sg(i,e){i.uniform2uiv(this.addr,e)}function Mg(i,e){i.uniform3uiv(this.addr,e)}function bg(i,e){i.uniform4uiv(this.addr,e)}function Eg(i,e,t){let n=this.cache,s=e.length,r=ho(t,s);vt(n,r)||(i.uniform1iv(this.addr,r),xt(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||yu,r[a])}function wg(i,e,t){let n=this.cache,s=e.length,r=ho(t,s);vt(n,r)||(i.uniform1iv(this.addr,r),xt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||vu,r[a])}function Tg(i,e,t){let n=this.cache,s=e.length,r=ho(t,s);vt(n,r)||(i.uniform1iv(this.addr,r),xt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||xu,r[a])}function Ag(i,e,t){let n=this.cache,s=e.length,r=ho(t,s);vt(n,r)||(i.uniform1iv(this.addr,r),xt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||_u,r[a])}function Cg(i){switch(i){case 5126:return cg;case 35664:return hg;case 35665:return ug;case 35666:return dg;case 35674:return fg;case 35675:return pg;case 35676:return mg;case 5124:case 35670:return gg;case 35667:case 35671:return yg;case 35668:case 35672:return _g;case 35669:case 35673:return vg;case 5125:return xg;case 36294:return Sg;case 36295:return Mg;case 36296:return bg;case 35678:case 36198:case 36298:case 36306:case 35682:return Eg;case 35679:case 36299:case 36307:return wg;case 35680:case 36300:case 36308:case 36293:return Tg;case 36289:case 36303:case 36311:case 36292:return Ag}}var Nl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=lg(t.type)}},Fl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Cg(t.type)}},Ol=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Ul=/(\w+)(\])?(\[|\.)?/g;function ru(i,e){i.seq.push(e),i.map[e.id]=e}function Rg(i,e,t){let n=i.name,s=n.length;for(Ul.lastIndex=0;;){let r=Ul.exec(n),a=Ul.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){ru(t,c===void 0?new Nl(o,i,e):new Fl(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new Ol(o),ru(t,u)),t=u}}}var gs=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);Rg(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function au(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Pg=37297,Ig=0;function Lg(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var ou=new Ie;function Dg(i){qe._getMatrix(ou,qe.workingColorSpace,i);let e=`mat3( ${ou.elements.map(t=>t.toFixed(4))} )`;switch(qe.getTransfer(i)){case Ds:return[e,"LinearTransferOETF"];case Je:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function lu(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Lg(i.getShaderSource(e),a)}else return s}function Ug(i,e){let t=Dg(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Ng(i,e){let t;switch(e){case bh:t="Linear";break;case Eh:t="Reinhard";break;case wh:t="Cineon";break;case ba:t="ACESFilmic";break;case Ah:t="AgX";break;case Ch:t="Neutral";break;case Th:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var oo=new N;function Fg(){qe.getLuminanceCoefficients(oo);let i=oo.x.toFixed(4),e=oo.y.toFixed(4),t=oo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Og(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(lr).join(`
`)}function Bg(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function zg(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function lr(i){return i!==""}function cu(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function hu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var kg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bl(i){return i.replace(kg,Gg)}var Hg=new Map;function Gg(i,e){let t=Ue[e];if(t===void 0){let n=Hg.get(e);if(n!==void 0)t=Ue[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Bl(t)}var Vg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function uu(i){return i.replace(Vg,Wg)}function Wg(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function du(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Xg(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===rl?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===nh?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===En&&(e="SHADOWMAP_TYPE_VSM"),e}function qg(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ai:case Ci:e="ENVMAP_TYPE_CUBE";break;case tr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Yg(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Ci&&(e="ENVMAP_MODE_REFRACTION"),e}function $g(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ma:e="ENVMAP_BLENDING_MULTIPLY";break;case Sh:e="ENVMAP_BLENDING_MIX";break;case Mh:e="ENVMAP_BLENDING_ADD";break}return e}function Zg(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Kg(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=Xg(t),c=qg(t),h=Yg(t),u=$g(t),f=Zg(t),p=Og(t),y=Bg(r),v=s.createProgram(),m,d,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(lr).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(lr).join(`
`),d.length>0&&(d+=`
`)):(m=[du(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(lr).join(`
`),d=[du(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==zn?"#define TONE_MAPPING":"",t.toneMapping!==zn?Ue.tonemapping_pars_fragment:"",t.toneMapping!==zn?Ng("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ue.colorspace_pars_fragment,Ug("linearToOutputTexel",t.outputColorSpace),Fg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(lr).join(`
`)),a=Bl(a),a=cu(a,t),a=hu(a,t),o=Bl(o),o=cu(o,t),o=hu(o,t),a=uu(a),o=uu(o),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===Sl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Sl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let E=w+m+a,S=w+d+o,R=au(s,s.VERTEX_SHADER,E),A=au(s,s.FRAGMENT_SHADER,S);s.attachShader(v,R),s.attachShader(v,A),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function C(b){if(i.debug.checkShaderErrors){let P=s.getProgramInfoLog(v).trim(),D=s.getShaderInfoLog(R).trim(),k=s.getShaderInfoLog(A).trim(),O=!0,z=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(O=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,R,A);else{let Q=lu(s,R,"vertex"),X=lu(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+P+`
`+Q+`
`+X)}else P!==""?console.warn("THREE.WebGLProgram: Program Info Log:",P):(D===""||k==="")&&(z=!1);z&&(b.diagnostics={runnable:O,programLog:P,vertexShader:{log:D,prefix:m},fragmentShader:{log:k,prefix:d}})}s.deleteShader(R),s.deleteShader(A),L=new gs(s,v),M=zg(s,v)}let L;this.getUniforms=function(){return L===void 0&&C(this),L};let M;this.getAttributes=function(){return M===void 0&&C(this),M};let g=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return g===!1&&(g=s.getProgramParameter(v,Pg)),g},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ig++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=R,this.fragmentShader=A,this}var Jg=0,zl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new kl(e),t.set(e,n)),n}},kl=class{constructor(e){this.id=Jg++,this.code=e,this.usedTimes=0}};function jg(i,e,t,n,s,r,a){let o=new ns,l=new zl,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,g,b,P,D){let k=P.fog,O=D.geometry,z=M.isMeshStandardMaterial?P.environment:null,Q=(M.isMeshStandardMaterial?t:e).get(M.envMap||z),X=Q&&Q.mapping===tr?Q.image.height:null,J=y[M.type];M.precision!==null&&(p=s.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));let se=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,ve=se!==void 0?se.length:0,Oe=0;O.morphAttributes.position!==void 0&&(Oe=1),O.morphAttributes.normal!==void 0&&(Oe=2),O.morphAttributes.color!==void 0&&(Oe=3);let Qe,$,ne,ye;if(J){let Ke=Cn[J];Qe=Ke.vertexShader,$=Ke.fragmentShader}else Qe=M.vertexShader,$=M.fragmentShader,l.update(M),ne=l.getVertexShaderID(M),ye=l.getFragmentShaderID(M);let oe=i.getRenderTarget(),Te=i.state.buffers.depth.getReversed(),Pe=D.isInstancedMesh===!0,Be=D.isBatchedMesh===!0,lt=!!M.map,Ve=!!M.matcap,pt=!!Q,I=!!M.aoMap,jt=!!M.lightMap,ke=!!M.bumpMap,He=!!M.normalMap,xe=!!M.displacementMap,nt=!!M.emissiveMap,Se=!!M.metalnessMap,T=!!M.roughnessMap,_=M.anisotropy>0,H=M.clearcoat>0,Z=M.dispersion>0,j=M.iridescence>0,Y=M.sheen>0,_e=M.transmission>0,le=_&&!!M.anisotropyMap,fe=H&&!!M.clearcoatMap,We=H&&!!M.clearcoatNormalMap,te=H&&!!M.clearcoatRoughnessMap,pe=j&&!!M.iridescenceMap,Ee=j&&!!M.iridescenceThicknessMap,Ae=Y&&!!M.sheenColorMap,me=Y&&!!M.sheenRoughnessMap,Ge=!!M.specularMap,De=!!M.specularColorMap,tt=!!M.specularIntensityMap,U=_e&&!!M.transmissionMap,re=_e&&!!M.thicknessMap,q=!!M.gradientMap,K=!!M.alphaMap,he=M.alphaTest>0,ce=!!M.alphaHash,Le=!!M.extensions,ut=zn;M.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(ut=i.toneMapping);let Rt={shaderID:J,shaderType:M.type,shaderName:M.name,vertexShader:Qe,fragmentShader:$,defines:M.defines,customVertexShaderID:ne,customFragmentShaderID:ye,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Be,batchingColor:Be&&D._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&D.instanceColor!==null,instancingMorph:Pe&&D.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:oe===null?i.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:Ei,alphaToCoverage:!!M.alphaToCoverage,map:lt,matcap:Ve,envMap:pt,envMapMode:pt&&Q.mapping,envMapCubeUVHeight:X,aoMap:I,lightMap:jt,bumpMap:ke,normalMap:He,displacementMap:f&&xe,emissiveMap:nt,normalMapObjectSpace:He&&M.normalMapType===Lh,normalMapTangentSpace:He&&M.normalMapType===vl,metalnessMap:Se,roughnessMap:T,anisotropy:_,anisotropyMap:le,clearcoat:H,clearcoatMap:fe,clearcoatNormalMap:We,clearcoatRoughnessMap:te,dispersion:Z,iridescence:j,iridescenceMap:pe,iridescenceThicknessMap:Ee,sheen:Y,sheenColorMap:Ae,sheenRoughnessMap:me,specularMap:Ge,specularColorMap:De,specularIntensityMap:tt,transmission:_e,transmissionMap:U,thicknessMap:re,gradientMap:q,opaque:M.transparent===!1&&M.blending===Si&&M.alphaToCoverage===!1,alphaMap:K,alphaTest:he,alphaHash:ce,combine:M.combine,mapUv:lt&&v(M.map.channel),aoMapUv:I&&v(M.aoMap.channel),lightMapUv:jt&&v(M.lightMap.channel),bumpMapUv:ke&&v(M.bumpMap.channel),normalMapUv:He&&v(M.normalMap.channel),displacementMapUv:xe&&v(M.displacementMap.channel),emissiveMapUv:nt&&v(M.emissiveMap.channel),metalnessMapUv:Se&&v(M.metalnessMap.channel),roughnessMapUv:T&&v(M.roughnessMap.channel),anisotropyMapUv:le&&v(M.anisotropyMap.channel),clearcoatMapUv:fe&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:We&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:me&&v(M.sheenRoughnessMap.channel),specularMapUv:Ge&&v(M.specularMap.channel),specularColorMapUv:De&&v(M.specularColorMap.channel),specularIntensityMapUv:tt&&v(M.specularIntensityMap.channel),transmissionMapUv:U&&v(M.transmissionMap.channel),thicknessMapUv:re&&v(M.thicknessMap.channel),alphaMapUv:K&&v(M.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(He||_),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!O.attributes.uv&&(lt||K),fog:!!k,useFog:M.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Te,skinning:D.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:ve,morphTextureStride:Oe,numDirLights:g.directional.length,numPointLights:g.point.length,numSpotLights:g.spot.length,numSpotLightMaps:g.spotLightMap.length,numRectAreaLights:g.rectArea.length,numHemiLights:g.hemi.length,numDirLightShadows:g.directionalShadowMap.length,numPointLightShadows:g.pointShadowMap.length,numSpotLightShadows:g.spotShadowMap.length,numSpotLightShadowsWithMaps:g.numSpotLightShadowsWithMaps,numLightProbes:g.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&b.length>0,shadowMapType:i.shadowMap.type,toneMapping:ut,decodeVideoTexture:lt&&M.map.isVideoTexture===!0&&qe.getTransfer(M.map.colorSpace)===Je,decodeVideoTextureEmissive:nt&&M.emissiveMap.isVideoTexture===!0&&qe.getTransfer(M.emissiveMap.colorSpace)===Je,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===on,flipSided:M.side===At,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Le&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Le&&M.extensions.multiDraw===!0||Be)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Rt.vertexUv1s=c.has(1),Rt.vertexUv2s=c.has(2),Rt.vertexUv3s=c.has(3),c.clear(),Rt}function d(M){let g=[];if(M.shaderID?g.push(M.shaderID):(g.push(M.customVertexShaderID),g.push(M.customFragmentShaderID)),M.defines!==void 0)for(let b in M.defines)g.push(b),g.push(M.defines[b]);return M.isRawShaderMaterial===!1&&(w(g,M),E(g,M),g.push(i.outputColorSpace)),g.push(M.customProgramCacheKey),g.join()}function w(M,g){M.push(g.precision),M.push(g.outputColorSpace),M.push(g.envMapMode),M.push(g.envMapCubeUVHeight),M.push(g.mapUv),M.push(g.alphaMapUv),M.push(g.lightMapUv),M.push(g.aoMapUv),M.push(g.bumpMapUv),M.push(g.normalMapUv),M.push(g.displacementMapUv),M.push(g.emissiveMapUv),M.push(g.metalnessMapUv),M.push(g.roughnessMapUv),M.push(g.anisotropyMapUv),M.push(g.clearcoatMapUv),M.push(g.clearcoatNormalMapUv),M.push(g.clearcoatRoughnessMapUv),M.push(g.iridescenceMapUv),M.push(g.iridescenceThicknessMapUv),M.push(g.sheenColorMapUv),M.push(g.sheenRoughnessMapUv),M.push(g.specularMapUv),M.push(g.specularColorMapUv),M.push(g.specularIntensityMapUv),M.push(g.transmissionMapUv),M.push(g.thicknessMapUv),M.push(g.combine),M.push(g.fogExp2),M.push(g.sizeAttenuation),M.push(g.morphTargetsCount),M.push(g.morphAttributeCount),M.push(g.numDirLights),M.push(g.numPointLights),M.push(g.numSpotLights),M.push(g.numSpotLightMaps),M.push(g.numHemiLights),M.push(g.numRectAreaLights),M.push(g.numDirLightShadows),M.push(g.numPointLightShadows),M.push(g.numSpotLightShadows),M.push(g.numSpotLightShadowsWithMaps),M.push(g.numLightProbes),M.push(g.shadowMapType),M.push(g.toneMapping),M.push(g.numClippingPlanes),M.push(g.numClipIntersection),M.push(g.depthPacking)}function E(M,g){o.disableAll(),g.supportsVertexTextures&&o.enable(0),g.instancing&&o.enable(1),g.instancingColor&&o.enable(2),g.instancingMorph&&o.enable(3),g.matcap&&o.enable(4),g.envMap&&o.enable(5),g.normalMapObjectSpace&&o.enable(6),g.normalMapTangentSpace&&o.enable(7),g.clearcoat&&o.enable(8),g.iridescence&&o.enable(9),g.alphaTest&&o.enable(10),g.vertexColors&&o.enable(11),g.vertexAlphas&&o.enable(12),g.vertexUv1s&&o.enable(13),g.vertexUv2s&&o.enable(14),g.vertexUv3s&&o.enable(15),g.vertexTangents&&o.enable(16),g.anisotropy&&o.enable(17),g.alphaHash&&o.enable(18),g.batching&&o.enable(19),g.dispersion&&o.enable(20),g.batchingColor&&o.enable(21),M.push(o.mask),o.disableAll(),g.fog&&o.enable(0),g.useFog&&o.enable(1),g.flatShading&&o.enable(2),g.logarithmicDepthBuffer&&o.enable(3),g.reverseDepthBuffer&&o.enable(4),g.skinning&&o.enable(5),g.morphTargets&&o.enable(6),g.morphNormals&&o.enable(7),g.morphColors&&o.enable(8),g.premultipliedAlpha&&o.enable(9),g.shadowMapEnabled&&o.enable(10),g.doubleSided&&o.enable(11),g.flipSided&&o.enable(12),g.useDepthPacking&&o.enable(13),g.dithering&&o.enable(14),g.transmission&&o.enable(15),g.sheen&&o.enable(16),g.opaque&&o.enable(17),g.pointsUvs&&o.enable(18),g.decodeVideoTexture&&o.enable(19),g.decodeVideoTextureEmissive&&o.enable(20),g.alphaToCoverage&&o.enable(21),M.push(o.mask)}function S(M){let g=y[M.type],b;if(g){let P=Cn[g];b=Xh.clone(P.uniforms)}else b=M.uniforms;return b}function R(M,g){let b;for(let P=0,D=h.length;P<D;P++){let k=h[P];if(k.cacheKey===g){b=k,++b.usedTimes;break}}return b===void 0&&(b=new Kg(i,g,M,r),h.push(b)),b}function A(M){if(--M.usedTimes===0){let g=h.indexOf(M);h[g]=h[h.length-1],h.pop(),M.destroy()}}function C(M){l.remove(M)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:S,acquireProgram:R,releaseProgram:A,releaseShaderCache:C,programs:h,dispose:L}}function Qg(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function e0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function fu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function pu(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u,f,p,y,v,m){let d=i[e];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:y,renderOrder:u.renderOrder,z:v,group:m},i[e]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=y,d.renderOrder=u.renderOrder,d.z=v,d.group=m),e++,d}function o(u,f,p,y,v,m){let d=a(u,f,p,y,v,m);p.transmission>0?n.push(d):p.transparent===!0?s.push(d):t.push(d)}function l(u,f,p,y,v,m){let d=a(u,f,p,y,v,m);p.transmission>0?n.unshift(d):p.transparent===!0?s.unshift(d):t.unshift(d)}function c(u,f){t.length>1&&t.sort(u||e0),n.length>1&&n.sort(f||fu),s.length>1&&s.sort(f||fu)}function h(){for(let u=e,f=i.length;u<f;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function t0(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new pu,i.set(n,[a])):s>=r.length?(a=new pu,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function n0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new Fe};break;case"SpotLight":t={position:new N,direction:new N,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":t={color:new Fe,position:new N,halfWidth:new N,halfHeight:new N};break}return i[e.id]=t,t}}}function i0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var s0=0;function r0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function a0(i){let e=new n0,t=i0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new N);let s=new N,r=new st,a=new st;function o(c){let h=0,u=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let p=0,y=0,v=0,m=0,d=0,w=0,E=0,S=0,R=0,A=0,C=0;c.sort(r0);for(let M=0,g=c.length;M<g;M++){let b=c[M],P=b.color,D=b.intensity,k=b.distance,O=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)h+=P.r*D,u+=P.g*D,f+=P.b*D;else if(b.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(b.sh.coefficients[z],D);C++}else if(b.isDirectionalLight){let z=e.get(b);if(z.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){let Q=b.shadow,X=t.get(b);X.shadowIntensity=Q.intensity,X.shadowBias=Q.bias,X.shadowNormalBias=Q.normalBias,X.shadowRadius=Q.radius,X.shadowMapSize=Q.mapSize,n.directionalShadow[p]=X,n.directionalShadowMap[p]=O,n.directionalShadowMatrix[p]=b.shadow.matrix,w++}n.directional[p]=z,p++}else if(b.isSpotLight){let z=e.get(b);z.position.setFromMatrixPosition(b.matrixWorld),z.color.copy(P).multiplyScalar(D),z.distance=k,z.coneCos=Math.cos(b.angle),z.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),z.decay=b.decay,n.spot[v]=z;let Q=b.shadow;if(b.map&&(n.spotLightMap[R]=b.map,R++,Q.updateMatrices(b),b.castShadow&&A++),n.spotLightMatrix[v]=Q.matrix,b.castShadow){let X=t.get(b);X.shadowIntensity=Q.intensity,X.shadowBias=Q.bias,X.shadowNormalBias=Q.normalBias,X.shadowRadius=Q.radius,X.shadowMapSize=Q.mapSize,n.spotShadow[v]=X,n.spotShadowMap[v]=O,S++}v++}else if(b.isRectAreaLight){let z=e.get(b);z.color.copy(P).multiplyScalar(D),z.halfWidth.set(b.width*.5,0,0),z.halfHeight.set(0,b.height*.5,0),n.rectArea[m]=z,m++}else if(b.isPointLight){let z=e.get(b);if(z.color.copy(b.color).multiplyScalar(b.intensity),z.distance=b.distance,z.decay=b.decay,b.castShadow){let Q=b.shadow,X=t.get(b);X.shadowIntensity=Q.intensity,X.shadowBias=Q.bias,X.shadowNormalBias=Q.normalBias,X.shadowRadius=Q.radius,X.shadowMapSize=Q.mapSize,X.shadowCameraNear=Q.camera.near,X.shadowCameraFar=Q.camera.far,n.pointShadow[y]=X,n.pointShadowMap[y]=O,n.pointShadowMatrix[y]=b.shadow.matrix,E++}n.point[y]=z,y++}else if(b.isHemisphereLight){let z=e.get(b);z.skyColor.copy(b.color).multiplyScalar(D),z.groundColor.copy(b.groundColor).multiplyScalar(D),n.hemi[d]=z,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ie.LTC_FLOAT_1,n.rectAreaLTC2=ie.LTC_FLOAT_2):(n.rectAreaLTC1=ie.LTC_HALF_1,n.rectAreaLTC2=ie.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let L=n.hash;(L.directionalLength!==p||L.pointLength!==y||L.spotLength!==v||L.rectAreaLength!==m||L.hemiLength!==d||L.numDirectionalShadows!==w||L.numPointShadows!==E||L.numSpotShadows!==S||L.numSpotMaps!==R||L.numLightProbes!==C)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=m,n.point.length=y,n.hemi.length=d,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=S+R-A,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=C,L.directionalLength=p,L.pointLength=y,L.spotLength=v,L.rectAreaLength=m,L.hemiLength=d,L.numDirectionalShadows=w,L.numPointShadows=E,L.numSpotShadows=S,L.numSpotMaps=R,L.numLightProbes=C,n.version=s0++)}function l(c,h){let u=0,f=0,p=0,y=0,v=0,m=h.matrixWorldInverse;for(let d=0,w=c.length;d<w;d++){let E=c[d];if(E.isDirectionalLight){let S=n.directional[u];S.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),u++}else if(E.isSpotLight){let S=n.spot[p];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),p++}else if(E.isRectAreaLight){let S=n.rectArea[y];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(m),a.identity(),r.copy(E.matrixWorld),r.premultiply(m),a.extractRotation(r),S.halfWidth.set(E.width*.5,0,0),S.halfHeight.set(0,E.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),y++}else if(E.isPointLight){let S=n.point[f];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(m),f++}else if(E.isHemisphereLight){let S=n.hemi[v];S.direction.setFromMatrixPosition(E.matrixWorld),S.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:n}}function mu(i){let e=new a0(i),t=[],n=[];function s(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function o0(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new mu(i),e.set(s,[o])):r>=a.length?(o=new mu(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var l0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,c0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function h0(i,e,t){let n=new is,s=new we,r=new we,a=new ht,o=new ia({depthPacking:Ih}),l=new sa,c={},h=t.maxTextureSize,u={[mn]:At,[At]:mn,[on]:on},f=new kt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new we},radius:{value:4}},vertexShader:l0,fragmentShader:c0}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let y=new yt;y.setAttribute("position",new Dt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new at(y,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rl;let d=this.type;this.render=function(A,C,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;let M=i.getRenderTarget(),g=i.getActiveCubeFace(),b=i.getActiveMipmapLevel(),P=i.state;P.setBlending(Bn),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);let D=d!==En&&this.type===En,k=d===En&&this.type!==En;for(let O=0,z=A.length;O<z;O++){let Q=A[O],X=Q.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let J=X.getFrameExtents();if(s.multiply(J),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/J.x),s.x=r.x*J.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/J.y),s.y=r.y*J.y,X.mapSize.y=r.y)),X.map===null||D===!0||k===!0){let ve=this.type!==En?{minFilter:sn,magFilter:sn}:{};X.map!==null&&X.map.dispose(),X.map=new Mn(s.x,s.y,ve),X.map.texture.name=Q.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();let se=X.getViewportCount();for(let ve=0;ve<se;ve++){let Oe=X.getViewport(ve);a.set(r.x*Oe.x,r.y*Oe.y,r.x*Oe.z,r.y*Oe.w),P.viewport(a),X.updateMatrices(Q,ve),n=X.getFrustum(),S(C,L,X.camera,Q,this.type)}X.isPointLightShadow!==!0&&this.type===En&&w(X,L),X.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(M,g,b)};function w(A,C){let L=e.update(v);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Mn(s.x,s.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(C,null,L,f,v,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(C,null,L,p,v,null)}function E(A,C,L,M){let g=null,b=L.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(b!==void 0)g=b;else if(g=L.isPointLight===!0?l:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){let P=g.uuid,D=C.uuid,k=c[P];k===void 0&&(k={},c[P]=k);let O=k[D];O===void 0&&(O=g.clone(),k[D]=O,C.addEventListener("dispose",R)),g=O}if(g.visible=C.visible,g.wireframe=C.wireframe,M===En?g.side=C.shadowSide!==null?C.shadowSide:C.side:g.side=C.shadowSide!==null?C.shadowSide:u[C.side],g.alphaMap=C.alphaMap,g.alphaTest=C.alphaTest,g.map=C.map,g.clipShadows=C.clipShadows,g.clippingPlanes=C.clippingPlanes,g.clipIntersection=C.clipIntersection,g.displacementMap=C.displacementMap,g.displacementScale=C.displacementScale,g.displacementBias=C.displacementBias,g.wireframeLinewidth=C.wireframeLinewidth,g.linewidth=C.linewidth,L.isPointLight===!0&&g.isMeshDistanceMaterial===!0){let P=i.properties.get(g);P.light=L}return g}function S(A,C,L,M,g){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&g===En)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,A.matrixWorld);let D=e.update(A),k=A.material;if(Array.isArray(k)){let O=D.groups;for(let z=0,Q=O.length;z<Q;z++){let X=O[z],J=k[X.materialIndex];if(J&&J.visible){let se=E(A,J,M,g);A.onBeforeShadow(i,A,C,L,D,se,X),i.renderBufferDirect(L,null,D,se,A,X),A.onAfterShadow(i,A,C,L,D,se,X)}}}else if(k.visible){let O=E(A,k,M,g);A.onBeforeShadow(i,A,C,L,D,O,null),i.renderBufferDirect(L,null,D,O,A,null),A.onAfterShadow(i,A,C,L,D,O,null)}}let P=A.children;for(let D=0,k=P.length;D<k;D++)S(P[D],C,L,M,g)}function R(A){A.target.removeEventListener("dispose",R);for(let L in c){let M=c[L],g=A.target.uuid;g in M&&(M[g].dispose(),delete M[g])}}}var u0={[ma]:ga,[ya]:xa,[_a]:Sa,[Mi]:va,[ga]:ma,[xa]:ya,[Sa]:_a,[va]:Mi};function d0(i,e){function t(){let U=!1,re=new ht,q=null,K=new ht(0,0,0,0);return{setMask:function(he){q!==he&&!U&&(i.colorMask(he,he,he,he),q=he)},setLocked:function(he){U=he},setClear:function(he,ce,Le,ut,Rt){Rt===!0&&(he*=ut,ce*=ut,Le*=ut),re.set(he,ce,Le,ut),K.equals(re)===!1&&(i.clearColor(he,ce,Le,ut),K.copy(re))},reset:function(){U=!1,q=null,K.set(-1,0,0,0)}}}function n(){let U=!1,re=!1,q=null,K=null,he=null;return{setReversed:function(ce){if(re!==ce){let Le=e.get("EXT_clip_control");re?Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.ZERO_TO_ONE_EXT):Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.NEGATIVE_ONE_TO_ONE_EXT);let ut=he;he=null,this.setClear(ut)}re=ce},getReversed:function(){return re},setTest:function(ce){ce?oe(i.DEPTH_TEST):Te(i.DEPTH_TEST)},setMask:function(ce){q!==ce&&!U&&(i.depthMask(ce),q=ce)},setFunc:function(ce){if(re&&(ce=u0[ce]),K!==ce){switch(ce){case ma:i.depthFunc(i.NEVER);break;case ga:i.depthFunc(i.ALWAYS);break;case ya:i.depthFunc(i.LESS);break;case Mi:i.depthFunc(i.LEQUAL);break;case _a:i.depthFunc(i.EQUAL);break;case va:i.depthFunc(i.GEQUAL);break;case xa:i.depthFunc(i.GREATER);break;case Sa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}K=ce}},setLocked:function(ce){U=ce},setClear:function(ce){he!==ce&&(re&&(ce=1-ce),i.clearDepth(ce),he=ce)},reset:function(){U=!1,q=null,K=null,he=null,re=!1}}}function s(){let U=!1,re=null,q=null,K=null,he=null,ce=null,Le=null,ut=null,Rt=null;return{setTest:function(Ke){U||(Ke?oe(i.STENCIL_TEST):Te(i.STENCIL_TEST))},setMask:function(Ke){re!==Ke&&!U&&(i.stencilMask(Ke),re=Ke)},setFunc:function(Ke,hn,Pn){(q!==Ke||K!==hn||he!==Pn)&&(i.stencilFunc(Ke,hn,Pn),q=Ke,K=hn,he=Pn)},setOp:function(Ke,hn,Pn){(ce!==Ke||Le!==hn||ut!==Pn)&&(i.stencilOp(Ke,hn,Pn),ce=Ke,Le=hn,ut=Pn)},setLocked:function(Ke){U=Ke},setClear:function(Ke){Rt!==Ke&&(i.clearStencil(Ke),Rt=Ke)},reset:function(){U=!1,re=null,q=null,K=null,he=null,ce=null,Le=null,ut=null,Rt=null}}}let r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},u={},f=new WeakMap,p=[],y=null,v=!1,m=null,d=null,w=null,E=null,S=null,R=null,A=null,C=new Fe(0,0,0),L=0,M=!1,g=null,b=null,P=null,D=null,k=null,O=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,Q=0,X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(X)[1]),z=Q>=1):X.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),z=Q>=2);let J=null,se={},ve=i.getParameter(i.SCISSOR_BOX),Oe=i.getParameter(i.VIEWPORT),Qe=new ht().fromArray(ve),$=new ht().fromArray(Oe);function ne(U,re,q,K){let he=new Uint8Array(4),ce=i.createTexture();i.bindTexture(U,ce),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Le=0;Le<q;Le++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(re,0,i.RGBA,1,1,K,0,i.RGBA,i.UNSIGNED_BYTE,he):i.texImage2D(re+Le,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,he);return ce}let ye={};ye[i.TEXTURE_2D]=ne(i.TEXTURE_2D,i.TEXTURE_2D,1),ye[i.TEXTURE_CUBE_MAP]=ne(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ye[i.TEXTURE_2D_ARRAY]=ne(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ye[i.TEXTURE_3D]=ne(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),oe(i.DEPTH_TEST),a.setFunc(Mi),ke(!1),He(sl),oe(i.CULL_FACE),I(Bn);function oe(U){h[U]!==!0&&(i.enable(U),h[U]=!0)}function Te(U){h[U]!==!1&&(i.disable(U),h[U]=!1)}function Pe(U,re){return u[U]!==re?(i.bindFramebuffer(U,re),u[U]=re,U===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=re),U===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=re),!0):!1}function Be(U,re){let q=p,K=!1;if(U){q=f.get(re),q===void 0&&(q=[],f.set(re,q));let he=U.textures;if(q.length!==he.length||q[0]!==i.COLOR_ATTACHMENT0){for(let ce=0,Le=he.length;ce<Le;ce++)q[ce]=i.COLOR_ATTACHMENT0+ce;q.length=he.length,K=!0}}else q[0]!==i.BACK&&(q[0]=i.BACK,K=!0);K&&i.drawBuffers(q)}function lt(U){return y!==U?(i.useProgram(U),y=U,!0):!1}let Ve={[Qn]:i.FUNC_ADD,[sh]:i.FUNC_SUBTRACT,[rh]:i.FUNC_REVERSE_SUBTRACT};Ve[ah]=i.MIN,Ve[oh]=i.MAX;let pt={[lh]:i.ZERO,[ch]:i.ONE,[hh]:i.SRC_COLOR,[Wr]:i.SRC_ALPHA,[gh]:i.SRC_ALPHA_SATURATE,[ph]:i.DST_COLOR,[dh]:i.DST_ALPHA,[uh]:i.ONE_MINUS_SRC_COLOR,[Xr]:i.ONE_MINUS_SRC_ALPHA,[mh]:i.ONE_MINUS_DST_COLOR,[fh]:i.ONE_MINUS_DST_ALPHA,[yh]:i.CONSTANT_COLOR,[_h]:i.ONE_MINUS_CONSTANT_COLOR,[vh]:i.CONSTANT_ALPHA,[xh]:i.ONE_MINUS_CONSTANT_ALPHA};function I(U,re,q,K,he,ce,Le,ut,Rt,Ke){if(U===Bn){v===!0&&(Te(i.BLEND),v=!1);return}if(v===!1&&(oe(i.BLEND),v=!0),U!==ih){if(U!==m||Ke!==M){if((d!==Qn||S!==Qn)&&(i.blendEquation(i.FUNC_ADD),d=Qn,S=Qn),Ke)switch(U){case Si:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case hs:i.blendFunc(i.ONE,i.ONE);break;case al:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ol:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Si:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case hs:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case al:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ol:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}w=null,E=null,R=null,A=null,C.set(0,0,0),L=0,m=U,M=Ke}return}he=he||re,ce=ce||q,Le=Le||K,(re!==d||he!==S)&&(i.blendEquationSeparate(Ve[re],Ve[he]),d=re,S=he),(q!==w||K!==E||ce!==R||Le!==A)&&(i.blendFuncSeparate(pt[q],pt[K],pt[ce],pt[Le]),w=q,E=K,R=ce,A=Le),(ut.equals(C)===!1||Rt!==L)&&(i.blendColor(ut.r,ut.g,ut.b,Rt),C.copy(ut),L=Rt),m=U,M=!1}function jt(U,re){U.side===on?Te(i.CULL_FACE):oe(i.CULL_FACE);let q=U.side===At;re&&(q=!q),ke(q),U.blending===Si&&U.transparent===!1?I(Bn):I(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),r.setMask(U.colorWrite);let K=U.stencilWrite;o.setTest(K),K&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),nt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?oe(i.SAMPLE_ALPHA_TO_COVERAGE):Te(i.SAMPLE_ALPHA_TO_COVERAGE)}function ke(U){g!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),g=U)}function He(U){U!==eh?(oe(i.CULL_FACE),U!==b&&(U===sl?i.cullFace(i.BACK):U===th?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Te(i.CULL_FACE),b=U}function xe(U){U!==P&&(z&&i.lineWidth(U),P=U)}function nt(U,re,q){U?(oe(i.POLYGON_OFFSET_FILL),(D!==re||k!==q)&&(i.polygonOffset(re,q),D=re,k=q)):Te(i.POLYGON_OFFSET_FILL)}function Se(U){U?oe(i.SCISSOR_TEST):Te(i.SCISSOR_TEST)}function T(U){U===void 0&&(U=i.TEXTURE0+O-1),J!==U&&(i.activeTexture(U),J=U)}function _(U,re,q){q===void 0&&(J===null?q=i.TEXTURE0+O-1:q=J);let K=se[q];K===void 0&&(K={type:void 0,texture:void 0},se[q]=K),(K.type!==U||K.texture!==re)&&(J!==q&&(i.activeTexture(q),J=q),i.bindTexture(U,re||ye[U]),K.type=U,K.texture=re)}function H(){let U=se[J];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Z(){try{i.compressedTexImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function j(){try{i.compressedTexImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Y(){try{i.texSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function _e(){try{i.texSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function le(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function fe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function We(){try{i.texStorage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function te(){try{i.texStorage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function pe(){try{i.texImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ee(){try{i.texImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ae(U){Qe.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),Qe.copy(U))}function me(U){$.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),$.copy(U))}function Ge(U,re){let q=c.get(re);q===void 0&&(q=new WeakMap,c.set(re,q));let K=q.get(U);K===void 0&&(K=i.getUniformBlockIndex(re,U.name),q.set(U,K))}function De(U,re){let K=c.get(re).get(U);l.get(re)!==K&&(i.uniformBlockBinding(re,K,U.__bindingPointIndex),l.set(re,K))}function tt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},J=null,se={},u={},f=new WeakMap,p=[],y=null,v=!1,m=null,d=null,w=null,E=null,S=null,R=null,A=null,C=new Fe(0,0,0),L=0,M=!1,g=null,b=null,P=null,D=null,k=null,Qe.set(0,0,i.canvas.width,i.canvas.height),$.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:oe,disable:Te,bindFramebuffer:Pe,drawBuffers:Be,useProgram:lt,setBlending:I,setMaterial:jt,setFlipSided:ke,setCullFace:He,setLineWidth:xe,setPolygonOffset:nt,setScissorTest:Se,activeTexture:T,bindTexture:_,unbindTexture:H,compressedTexImage2D:Z,compressedTexImage3D:j,texImage2D:pe,texImage3D:Ee,updateUBOMapping:Ge,uniformBlockBinding:De,texStorage2D:We,texStorage3D:te,texSubImage2D:Y,texSubImage3D:_e,compressedTexSubImage2D:le,compressedTexSubImage3D:fe,scissor:Ae,viewport:me,reset:tt}}function f0(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new we,h=new WeakMap,u,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(T,_){return p?new OffscreenCanvas(T,_):ts("canvas")}function v(T,_,H){let Z=1,j=Se(T);if((j.width>H||j.height>H)&&(Z=H/Math.max(j.width,j.height)),Z<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let Y=Math.floor(Z*j.width),_e=Math.floor(Z*j.height);u===void 0&&(u=y(Y,_e));let le=_?y(Y,_e):u;return le.width=Y,le.height=_e,le.getContext("2d").drawImage(T,0,0,Y,_e),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+Y+"x"+_e+")."),le}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),T;return T}function m(T){return T.generateMipmaps}function d(T){i.generateMipmap(T)}function w(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(T,_,H,Z,j=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let Y=_;if(_===i.RED&&(H===i.FLOAT&&(Y=i.R32F),H===i.HALF_FLOAT&&(Y=i.R16F),H===i.UNSIGNED_BYTE&&(Y=i.R8)),_===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(Y=i.R8UI),H===i.UNSIGNED_SHORT&&(Y=i.R16UI),H===i.UNSIGNED_INT&&(Y=i.R32UI),H===i.BYTE&&(Y=i.R8I),H===i.SHORT&&(Y=i.R16I),H===i.INT&&(Y=i.R32I)),_===i.RG&&(H===i.FLOAT&&(Y=i.RG32F),H===i.HALF_FLOAT&&(Y=i.RG16F),H===i.UNSIGNED_BYTE&&(Y=i.RG8)),_===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(Y=i.RG8UI),H===i.UNSIGNED_SHORT&&(Y=i.RG16UI),H===i.UNSIGNED_INT&&(Y=i.RG32UI),H===i.BYTE&&(Y=i.RG8I),H===i.SHORT&&(Y=i.RG16I),H===i.INT&&(Y=i.RG32I)),_===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),H===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),H===i.UNSIGNED_INT&&(Y=i.RGB32UI),H===i.BYTE&&(Y=i.RGB8I),H===i.SHORT&&(Y=i.RGB16I),H===i.INT&&(Y=i.RGB32I)),_===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),H===i.UNSIGNED_INT&&(Y=i.RGBA32UI),H===i.BYTE&&(Y=i.RGBA8I),H===i.SHORT&&(Y=i.RGBA16I),H===i.INT&&(Y=i.RGBA32I)),_===i.RGB&&H===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),_===i.RGBA){let _e=j?Ds:qe.getTransfer(Z);H===i.FLOAT&&(Y=i.RGBA32F),H===i.HALF_FLOAT&&(Y=i.RGBA16F),H===i.UNSIGNED_BYTE&&(Y=_e===Je?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function S(T,_){let H;return T?_===null||_===hi||_===Ri?H=i.DEPTH24_STENCIL8:_===An?H=i.DEPTH32F_STENCIL8:_===us&&(H=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===hi||_===Ri?H=i.DEPTH_COMPONENT24:_===An?H=i.DEPTH_COMPONENT32F:_===us&&(H=i.DEPTH_COMPONENT16),H}function R(T,_){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==sn&&T.minFilter!==Zt?Math.log2(Math.max(_.width,_.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?_.mipmaps.length:1}function A(T){let _=T.target;_.removeEventListener("dispose",A),L(_),_.isVideoTexture&&h.delete(_)}function C(T){let _=T.target;_.removeEventListener("dispose",C),g(_)}function L(T){let _=n.get(T);if(_.__webglInit===void 0)return;let H=T.source,Z=f.get(H);if(Z){let j=Z[_.__cacheKey];j.usedTimes--,j.usedTimes===0&&M(T),Object.keys(Z).length===0&&f.delete(H)}n.remove(T)}function M(T){let _=n.get(T);i.deleteTexture(_.__webglTexture);let H=T.source,Z=f.get(H);delete Z[_.__cacheKey],a.memory.textures--}function g(T){let _=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(_.__webglFramebuffer[Z]))for(let j=0;j<_.__webglFramebuffer[Z].length;j++)i.deleteFramebuffer(_.__webglFramebuffer[Z][j]);else i.deleteFramebuffer(_.__webglFramebuffer[Z]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[Z])}else{if(Array.isArray(_.__webglFramebuffer))for(let Z=0;Z<_.__webglFramebuffer.length;Z++)i.deleteFramebuffer(_.__webglFramebuffer[Z]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let Z=0;Z<_.__webglColorRenderbuffer.length;Z++)_.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[Z]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let H=T.textures;for(let Z=0,j=H.length;Z<j;Z++){let Y=n.get(H[Z]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),a.memory.textures--),n.remove(H[Z])}n.remove(T)}let b=0;function P(){b=0}function D(){let T=b;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),b+=1,T}function k(T){let _=[];return _.push(T.wrapS),_.push(T.wrapT),_.push(T.wrapR||0),_.push(T.magFilter),_.push(T.minFilter),_.push(T.anisotropy),_.push(T.internalFormat),_.push(T.format),_.push(T.type),_.push(T.generateMipmaps),_.push(T.premultiplyAlpha),_.push(T.flipY),_.push(T.unpackAlignment),_.push(T.colorSpace),_.join()}function O(T,_){let H=n.get(T);if(T.isVideoTexture&&xe(T),T.isRenderTargetTexture===!1&&T.version>0&&H.__version!==T.version){let Z=T.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(H,T,_);return}}t.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+_)}function z(T,_){let H=n.get(T);if(T.version>0&&H.__version!==T.version){$(H,T,_);return}t.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+_)}function Q(T,_){let H=n.get(T);if(T.version>0&&H.__version!==T.version){$(H,T,_);return}t.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+_)}function X(T,_){let H=n.get(T);if(T.version>0&&H.__version!==T.version){ne(H,T,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+_)}let J={[qr]:i.REPEAT,[jn]:i.CLAMP_TO_EDGE,[Yr]:i.MIRRORED_REPEAT},se={[sn]:i.NEAREST,[Rh]:i.NEAREST_MIPMAP_NEAREST,[nr]:i.NEAREST_MIPMAP_LINEAR,[Zt]:i.LINEAR,[Ta]:i.LINEAR_MIPMAP_NEAREST,[wn]:i.LINEAR_MIPMAP_LINEAR},ve={[Dh]:i.NEVER,[zh]:i.ALWAYS,[Uh]:i.LESS,[xl]:i.LEQUAL,[Nh]:i.EQUAL,[Bh]:i.GEQUAL,[Fh]:i.GREATER,[Oh]:i.NOTEQUAL};function Oe(T,_){if(_.type===An&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Zt||_.magFilter===Ta||_.magFilter===nr||_.magFilter===wn||_.minFilter===Zt||_.minFilter===Ta||_.minFilter===nr||_.minFilter===wn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,J[_.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,J[_.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,J[_.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,se[_.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,se[_.minFilter]),_.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,ve[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===sn||_.minFilter!==nr&&_.minFilter!==wn||_.type===An&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let H=e.get("EXT_texture_filter_anisotropic");i.texParameterf(T,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Qe(T,_){let H=!1;T.__webglInit===void 0&&(T.__webglInit=!0,_.addEventListener("dispose",A));let Z=_.source,j=f.get(Z);j===void 0&&(j={},f.set(Z,j));let Y=k(_);if(Y!==T.__cacheKey){j[Y]===void 0&&(j[Y]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,H=!0),j[Y].usedTimes++;let _e=j[T.__cacheKey];_e!==void 0&&(j[T.__cacheKey].usedTimes--,_e.usedTimes===0&&M(_)),T.__cacheKey=Y,T.__webglTexture=j[Y].texture}return H}function $(T,_,H){let Z=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(Z=i.TEXTURE_3D);let j=Qe(T,_),Y=_.source;t.bindTexture(Z,T.__webglTexture,i.TEXTURE0+H);let _e=n.get(Y);if(Y.version!==_e.__version||j===!0){t.activeTexture(i.TEXTURE0+H);let le=qe.getPrimaries(qe.workingColorSpace),fe=_.colorSpace===kn?null:qe.getPrimaries(_.colorSpace),We=_.colorSpace===kn||le===fe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);let te=v(_.image,!1,s.maxTextureSize);te=nt(_,te);let pe=r.convert(_.format,_.colorSpace),Ee=r.convert(_.type),Ae=E(_.internalFormat,pe,Ee,_.colorSpace,_.isVideoTexture);Oe(Z,_);let me,Ge=_.mipmaps,De=_.isVideoTexture!==!0,tt=_e.__version===void 0||j===!0,U=Y.dataReady,re=R(_,te);if(_.isDepthTexture)Ae=S(_.format===bi,_.type),tt&&(De?t.texStorage2D(i.TEXTURE_2D,1,Ae,te.width,te.height):t.texImage2D(i.TEXTURE_2D,0,Ae,te.width,te.height,0,pe,Ee,null));else if(_.isDataTexture)if(Ge.length>0){De&&tt&&t.texStorage2D(i.TEXTURE_2D,re,Ae,Ge[0].width,Ge[0].height);for(let q=0,K=Ge.length;q<K;q++)me=Ge[q],De?U&&t.texSubImage2D(i.TEXTURE_2D,q,0,0,me.width,me.height,pe,Ee,me.data):t.texImage2D(i.TEXTURE_2D,q,Ae,me.width,me.height,0,pe,Ee,me.data);_.generateMipmaps=!1}else De?(tt&&t.texStorage2D(i.TEXTURE_2D,re,Ae,te.width,te.height),U&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,te.width,te.height,pe,Ee,te.data)):t.texImage2D(i.TEXTURE_2D,0,Ae,te.width,te.height,0,pe,Ee,te.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){De&&tt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,re,Ae,Ge[0].width,Ge[0].height,te.depth);for(let q=0,K=Ge.length;q<K;q++)if(me=Ge[q],_.format!==ln)if(pe!==null)if(De){if(U)if(_.layerUpdates.size>0){let he=Cl(me.width,me.height,_.format,_.type);for(let ce of _.layerUpdates){let Le=me.data.subarray(ce*he/me.data.BYTES_PER_ELEMENT,(ce+1)*he/me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,ce,me.width,me.height,1,pe,Le)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,me.width,me.height,te.depth,pe,me.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,q,Ae,me.width,me.height,te.depth,0,me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else De?U&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,me.width,me.height,te.depth,pe,Ee,me.data):t.texImage3D(i.TEXTURE_2D_ARRAY,q,Ae,me.width,me.height,te.depth,0,pe,Ee,me.data)}else{De&&tt&&t.texStorage2D(i.TEXTURE_2D,re,Ae,Ge[0].width,Ge[0].height);for(let q=0,K=Ge.length;q<K;q++)me=Ge[q],_.format!==ln?pe!==null?De?U&&t.compressedTexSubImage2D(i.TEXTURE_2D,q,0,0,me.width,me.height,pe,me.data):t.compressedTexImage2D(i.TEXTURE_2D,q,Ae,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?U&&t.texSubImage2D(i.TEXTURE_2D,q,0,0,me.width,me.height,pe,Ee,me.data):t.texImage2D(i.TEXTURE_2D,q,Ae,me.width,me.height,0,pe,Ee,me.data)}else if(_.isDataArrayTexture)if(De){if(tt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,re,Ae,te.width,te.height,te.depth),U)if(_.layerUpdates.size>0){let q=Cl(te.width,te.height,_.format,_.type);for(let K of _.layerUpdates){let he=te.data.subarray(K*q/te.data.BYTES_PER_ELEMENT,(K+1)*q/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,K,te.width,te.height,1,pe,Ee,he)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,pe,Ee,te.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ae,te.width,te.height,te.depth,0,pe,Ee,te.data);else if(_.isData3DTexture)De?(tt&&t.texStorage3D(i.TEXTURE_3D,re,Ae,te.width,te.height,te.depth),U&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,pe,Ee,te.data)):t.texImage3D(i.TEXTURE_3D,0,Ae,te.width,te.height,te.depth,0,pe,Ee,te.data);else if(_.isFramebufferTexture){if(tt)if(De)t.texStorage2D(i.TEXTURE_2D,re,Ae,te.width,te.height);else{let q=te.width,K=te.height;for(let he=0;he<re;he++)t.texImage2D(i.TEXTURE_2D,he,Ae,q,K,0,pe,Ee,null),q>>=1,K>>=1}}else if(Ge.length>0){if(De&&tt){let q=Se(Ge[0]);t.texStorage2D(i.TEXTURE_2D,re,Ae,q.width,q.height)}for(let q=0,K=Ge.length;q<K;q++)me=Ge[q],De?U&&t.texSubImage2D(i.TEXTURE_2D,q,0,0,pe,Ee,me):t.texImage2D(i.TEXTURE_2D,q,Ae,pe,Ee,me);_.generateMipmaps=!1}else if(De){if(tt){let q=Se(te);t.texStorage2D(i.TEXTURE_2D,re,Ae,q.width,q.height)}U&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,pe,Ee,te)}else t.texImage2D(i.TEXTURE_2D,0,Ae,pe,Ee,te);m(_)&&d(Z),_e.__version=Y.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function ne(T,_,H){if(_.image.length!==6)return;let Z=Qe(T,_),j=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+H);let Y=n.get(j);if(j.version!==Y.__version||Z===!0){t.activeTexture(i.TEXTURE0+H);let _e=qe.getPrimaries(qe.workingColorSpace),le=_.colorSpace===kn?null:qe.getPrimaries(_.colorSpace),fe=_.colorSpace===kn||_e===le?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);let We=_.isCompressedTexture||_.image[0].isCompressedTexture,te=_.image[0]&&_.image[0].isDataTexture,pe=[];for(let K=0;K<6;K++)!We&&!te?pe[K]=v(_.image[K],!0,s.maxCubemapSize):pe[K]=te?_.image[K].image:_.image[K],pe[K]=nt(_,pe[K]);let Ee=pe[0],Ae=r.convert(_.format,_.colorSpace),me=r.convert(_.type),Ge=E(_.internalFormat,Ae,me,_.colorSpace),De=_.isVideoTexture!==!0,tt=Y.__version===void 0||Z===!0,U=j.dataReady,re=R(_,Ee);Oe(i.TEXTURE_CUBE_MAP,_);let q;if(We){De&&tt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,re,Ge,Ee.width,Ee.height);for(let K=0;K<6;K++){q=pe[K].mipmaps;for(let he=0;he<q.length;he++){let ce=q[he];_.format!==ln?Ae!==null?De?U&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,he,0,0,ce.width,ce.height,Ae,ce.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,he,Ge,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):De?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,he,0,0,ce.width,ce.height,Ae,me,ce.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,he,Ge,ce.width,ce.height,0,Ae,me,ce.data)}}}else{if(q=_.mipmaps,De&&tt){q.length>0&&re++;let K=Se(pe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,re,Ge,K.width,K.height)}for(let K=0;K<6;K++)if(te){De?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,pe[K].width,pe[K].height,Ae,me,pe[K].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ge,pe[K].width,pe[K].height,0,Ae,me,pe[K].data);for(let he=0;he<q.length;he++){let Le=q[he].image[K].image;De?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,he+1,0,0,Le.width,Le.height,Ae,me,Le.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,he+1,Ge,Le.width,Le.height,0,Ae,me,Le.data)}}else{De?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Ae,me,pe[K]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ge,Ae,me,pe[K]);for(let he=0;he<q.length;he++){let ce=q[he];De?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,he+1,0,0,Ae,me,ce.image[K]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,he+1,Ge,Ae,me,ce.image[K])}}}m(_)&&d(i.TEXTURE_CUBE_MAP),Y.__version=j.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function ye(T,_,H,Z,j,Y){let _e=r.convert(H.format,H.colorSpace),le=r.convert(H.type),fe=E(H.internalFormat,_e,le,H.colorSpace),We=n.get(_),te=n.get(H);if(te.__renderTarget=_,!We.__hasExternalTextures){let pe=Math.max(1,_.width>>Y),Ee=Math.max(1,_.height>>Y);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?t.texImage3D(j,Y,fe,pe,Ee,_.depth,0,_e,le,null):t.texImage2D(j,Y,fe,pe,Ee,0,_e,le,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),He(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,j,te.__webglTexture,0,ke(_)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,j,te.__webglTexture,Y),t.bindFramebuffer(i.FRAMEBUFFER,null)}function oe(T,_,H){if(i.bindRenderbuffer(i.RENDERBUFFER,T),_.depthBuffer){let Z=_.depthTexture,j=Z&&Z.isDepthTexture?Z.type:null,Y=S(_.stencilBuffer,j),_e=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=ke(_);He(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,le,Y,_.width,_.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,le,Y,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,Y,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,_e,i.RENDERBUFFER,T)}else{let Z=_.textures;for(let j=0;j<Z.length;j++){let Y=Z[j],_e=r.convert(Y.format,Y.colorSpace),le=r.convert(Y.type),fe=E(Y.internalFormat,_e,le,Y.colorSpace),We=ke(_);H&&He(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,We,fe,_.width,_.height):He(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,We,fe,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,fe,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Te(T,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Z=n.get(_.depthTexture);Z.__renderTarget=_,(!Z.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),O(_.depthTexture,0);let j=Z.__webglTexture,Y=ke(_);if(_.depthTexture.format===xi)He(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0);else if(_.depthTexture.format===bi)He(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Pe(T){let _=n.get(T),H=T.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==T.depthTexture){let Z=T.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),Z){let j=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,Z.removeEventListener("dispose",j)};Z.addEventListener("dispose",j),_.__depthDisposeCallback=j}_.__boundDepthTexture=Z}if(T.depthTexture&&!_.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Te(_.__webglFramebuffer,T)}else if(H){_.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[Z]),_.__webglDepthbuffer[Z]===void 0)_.__webglDepthbuffer[Z]=i.createRenderbuffer(),oe(_.__webglDepthbuffer[Z],T,!1);else{let j=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=_.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,Y)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),oe(_.__webglDepthbuffer,T,!1);else{let Z=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,j)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Be(T,_,H){let Z=n.get(T);_!==void 0&&ye(Z.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&Pe(T)}function lt(T){let _=T.texture,H=n.get(T),Z=n.get(_);T.addEventListener("dispose",C);let j=T.textures,Y=T.isWebGLCubeRenderTarget===!0,_e=j.length>1;if(_e||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=_.version,a.memory.textures++),Y){H.__webglFramebuffer=[];for(let le=0;le<6;le++)if(_.mipmaps&&_.mipmaps.length>0){H.__webglFramebuffer[le]=[];for(let fe=0;fe<_.mipmaps.length;fe++)H.__webglFramebuffer[le][fe]=i.createFramebuffer()}else H.__webglFramebuffer[le]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){H.__webglFramebuffer=[];for(let le=0;le<_.mipmaps.length;le++)H.__webglFramebuffer[le]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(_e)for(let le=0,fe=j.length;le<fe;le++){let We=n.get(j[le]);We.__webglTexture===void 0&&(We.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&He(T)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let le=0;le<j.length;le++){let fe=j[le];H.__webglColorRenderbuffer[le]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[le]);let We=r.convert(fe.format,fe.colorSpace),te=r.convert(fe.type),pe=E(fe.internalFormat,We,te,fe.colorSpace,T.isXRRenderTarget===!0),Ee=ke(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ee,pe,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.RENDERBUFFER,H.__webglColorRenderbuffer[le])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),oe(H.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),Oe(i.TEXTURE_CUBE_MAP,_);for(let le=0;le<6;le++)if(_.mipmaps&&_.mipmaps.length>0)for(let fe=0;fe<_.mipmaps.length;fe++)ye(H.__webglFramebuffer[le][fe],T,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,fe);else ye(H.__webglFramebuffer[le],T,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);m(_)&&d(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(_e){for(let le=0,fe=j.length;le<fe;le++){let We=j[le],te=n.get(We);t.bindTexture(i.TEXTURE_2D,te.__webglTexture),Oe(i.TEXTURE_2D,We),ye(H.__webglFramebuffer,T,We,i.COLOR_ATTACHMENT0+le,i.TEXTURE_2D,0),m(We)&&d(i.TEXTURE_2D)}t.unbindTexture()}else{let le=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(le=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(le,Z.__webglTexture),Oe(le,_),_.mipmaps&&_.mipmaps.length>0)for(let fe=0;fe<_.mipmaps.length;fe++)ye(H.__webglFramebuffer[fe],T,_,i.COLOR_ATTACHMENT0,le,fe);else ye(H.__webglFramebuffer,T,_,i.COLOR_ATTACHMENT0,le,0);m(_)&&d(le),t.unbindTexture()}T.depthBuffer&&Pe(T)}function Ve(T){let _=T.textures;for(let H=0,Z=_.length;H<Z;H++){let j=_[H];if(m(j)){let Y=w(T),_e=n.get(j).__webglTexture;t.bindTexture(Y,_e),d(Y),t.unbindTexture()}}}let pt=[],I=[];function jt(T){if(T.samples>0){if(He(T)===!1){let _=T.textures,H=T.width,Z=T.height,j=i.COLOR_BUFFER_BIT,Y=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_e=n.get(T),le=_.length>1;if(le)for(let fe=0;fe<_.length;fe++)t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let fe=0;fe<_.length;fe++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),le){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,_e.__webglColorRenderbuffer[fe]);let We=n.get(_[fe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,We,0)}i.blitFramebuffer(0,0,H,Z,0,0,H,Z,j,i.NEAREST),l===!0&&(pt.length=0,I.length=0,pt.push(i.COLOR_ATTACHMENT0+fe),T.depthBuffer&&T.resolveDepthBuffer===!1&&(pt.push(Y),I.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,I)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,pt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),le)for(let fe=0;fe<_.length;fe++){t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,_e.__webglColorRenderbuffer[fe]);let We=n.get(_[fe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,We,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){let _=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function ke(T){return Math.min(s.maxSamples,T.samples)}function He(T){let _=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function xe(T){let _=a.render.frame;h.get(T)!==_&&(h.set(T,_),T.update())}function nt(T,_){let H=T.colorSpace,Z=T.format,j=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||H!==Ei&&H!==kn&&(qe.getTransfer(H)===Je?(Z!==ln||j!==Tn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),_}function Se(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=D,this.resetTextureUnits=P,this.setTexture2D=O,this.setTexture2DArray=z,this.setTexture3D=Q,this.setTextureCube=X,this.rebindTextures=Be,this.setupRenderTarget=lt,this.updateRenderTargetMipmap=Ve,this.updateMultisampleRenderTarget=jt,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=He}function p0(i,e){function t(n,s=kn){let r,a=qe.getTransfer(s);if(n===Tn)return i.UNSIGNED_BYTE;if(n===Ca)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ra)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ul)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===cl)return i.BYTE;if(n===hl)return i.SHORT;if(n===us)return i.UNSIGNED_SHORT;if(n===Aa)return i.INT;if(n===hi)return i.UNSIGNED_INT;if(n===An)return i.FLOAT;if(n===ds)return i.HALF_FLOAT;if(n===dl)return i.ALPHA;if(n===fl)return i.RGB;if(n===ln)return i.RGBA;if(n===pl)return i.LUMINANCE;if(n===ml)return i.LUMINANCE_ALPHA;if(n===xi)return i.DEPTH_COMPONENT;if(n===bi)return i.DEPTH_STENCIL;if(n===gl)return i.RED;if(n===Pa)return i.RED_INTEGER;if(n===yl)return i.RG;if(n===Ia)return i.RG_INTEGER;if(n===La)return i.RGBA_INTEGER;if(n===ir||n===sr||n===rr||n===ar)if(a===Je)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ir)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===sr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===rr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ir)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===sr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===rr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ar)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Da||n===Ua||n===Na||n===Fa)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Da)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ua)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Na)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Fa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Oa||n===Ba||n===za)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Oa||n===Ba)return a===Je?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===za)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ka||n===Ha||n===Ga||n===Va||n===Wa||n===Xa||n===qa||n===Ya||n===$a||n===Za||n===Ka||n===Ja||n===ja||n===Qa)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ka)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ha)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ga)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Va)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Wa)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Xa)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===qa)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ya)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===$a)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Za)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ka)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ja)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ja)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Qa)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===or||n===eo||n===to)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===or)return a===Je?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===eo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===to)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===_l||n===no||n===io||n===so)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===or)return r.COMPRESSED_RED_RGTC1_EXT;if(n===no)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===io)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===so)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ri?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var m0={type:"move"},cr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ht,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ht,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ht,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,n),d=this._getHandJoint(c,v);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,y=.005;c.inputState.pinching&&f>p+y?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-y&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(m0)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ht;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},g0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,y0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Hl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let s=new zt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new kt({vertexShader:g0,fragmentShader:y0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new at(new qs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Gl=class extends Sn{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,p=null,y=null,v=new Hl,m=t.getContextAttributes(),d=null,w=null,E=[],S=[],R=new we,A=null,C=new Lt;C.viewport=new ht;let L=new Lt;L.viewport=new ht;let M=[C,L],g=new pa,b=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ne=E[$];return ne===void 0&&(ne=new cr,E[$]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function($){let ne=E[$];return ne===void 0&&(ne=new cr,E[$]=ne),ne.getGripSpace()},this.getHand=function($){let ne=E[$];return ne===void 0&&(ne=new cr,E[$]=ne),ne.getHandSpace()};function D($){let ne=S.indexOf($.inputSource);if(ne===-1)return;let ye=E[ne];ye!==void 0&&(ye.update($.inputSource,$.frame,c||a),ye.dispatchEvent({type:$.type,data:$.inputSource}))}function k(){s.removeEventListener("select",D),s.removeEventListener("selectstart",D),s.removeEventListener("selectend",D),s.removeEventListener("squeeze",D),s.removeEventListener("squeezestart",D),s.removeEventListener("squeezeend",D),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",O);for(let $=0;$<E.length;$++){let ne=S[$];ne!==null&&(S[$]=null,E[$].disconnect(ne))}b=null,P=null,v.reset(),e.setRenderTarget(d),p=null,f=null,u=null,s=null,w=null,Qe.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return y},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(d=e.getRenderTarget(),s.addEventListener("select",D),s.addEventListener("selectstart",D),s.addEventListener("selectend",D),s.addEventListener("squeeze",D),s.addEventListener("squeezestart",D),s.addEventListener("squeezeend",D),s.addEventListener("end",k),s.addEventListener("inputsourceschange",O),m.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(R),s.renderState.layers===void 0){let ne={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,ne),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),w=new Mn(p.framebufferWidth,p.framebufferHeight,{format:ln,type:Tn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ne=null,ye=null,oe=null;m.depth&&(oe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=m.stencil?bi:xi,ye=m.stencil?Ri:hi);let Te={colorFormat:t.RGBA8,depthFormat:oe,scaleFactor:r};u=new XRWebGLBinding(s,t),f=u.createProjectionLayer(Te),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),w=new Mn(f.textureWidth,f.textureHeight,{format:ln,type:Tn,depthTexture:new Ws(f.textureWidth,f.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Qe.setContext(s),Qe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function O($){for(let ne=0;ne<$.removed.length;ne++){let ye=$.removed[ne],oe=S.indexOf(ye);oe>=0&&(S[oe]=null,E[oe].disconnect(ye))}for(let ne=0;ne<$.added.length;ne++){let ye=$.added[ne],oe=S.indexOf(ye);if(oe===-1){for(let Pe=0;Pe<E.length;Pe++)if(Pe>=S.length){S.push(ye),oe=Pe;break}else if(S[Pe]===null){S[Pe]=ye,oe=Pe;break}if(oe===-1)break}let Te=E[oe];Te&&Te.connect(ye)}}let z=new N,Q=new N;function X($,ne,ye){z.setFromMatrixPosition(ne.matrixWorld),Q.setFromMatrixPosition(ye.matrixWorld);let oe=z.distanceTo(Q),Te=ne.projectionMatrix.elements,Pe=ye.projectionMatrix.elements,Be=Te[14]/(Te[10]-1),lt=Te[14]/(Te[10]+1),Ve=(Te[9]+1)/Te[5],pt=(Te[9]-1)/Te[5],I=(Te[8]-1)/Te[0],jt=(Pe[8]+1)/Pe[0],ke=Be*I,He=Be*jt,xe=oe/(-I+jt),nt=xe*-I;if(ne.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(nt),$.translateZ(xe),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Te[10]===-1)$.projectionMatrix.copy(ne.projectionMatrix),$.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{let Se=Be+xe,T=lt+xe,_=ke-nt,H=He+(oe-nt),Z=Ve*lt/T*Se,j=pt*lt/T*Se;$.projectionMatrix.makePerspective(_,H,Z,j,Se,T),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function J($,ne){ne===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ne.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let ne=$.near,ye=$.far;v.texture!==null&&(v.depthNear>0&&(ne=v.depthNear),v.depthFar>0&&(ye=v.depthFar)),g.near=L.near=C.near=ne,g.far=L.far=C.far=ye,(b!==g.near||P!==g.far)&&(s.updateRenderState({depthNear:g.near,depthFar:g.far}),b=g.near,P=g.far),C.layers.mask=$.layers.mask|2,L.layers.mask=$.layers.mask|4,g.layers.mask=C.layers.mask|L.layers.mask;let oe=$.parent,Te=g.cameras;J(g,oe);for(let Pe=0;Pe<Te.length;Pe++)J(Te[Pe],oe);Te.length===2?X(g,C,L):g.projectionMatrix.copy(C.projectionMatrix),se($,g,oe)};function se($,ne,ye){ye===null?$.matrix.copy(ne.matrixWorld):($.matrix.copy(ye.matrixWorld),$.matrix.invert(),$.matrix.multiply(ne.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ne.projectionMatrix),$.projectionMatrixInverse.copy(ne.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=es*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return g},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function($){l=$,f!==null&&(f.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(g)};let ve=null;function Oe($,ne){if(h=ne.getViewerPose(c||a),y=ne,h!==null){let ye=h.views;p!==null&&(e.setRenderTargetFramebuffer(w,p.framebuffer),e.setRenderTarget(w));let oe=!1;ye.length!==g.cameras.length&&(g.cameras.length=0,oe=!0);for(let Pe=0;Pe<ye.length;Pe++){let Be=ye[Pe],lt=null;if(p!==null)lt=p.getViewport(Be);else{let pt=u.getViewSubImage(f,Be);lt=pt.viewport,Pe===0&&(e.setRenderTargetTextures(w,pt.colorTexture,f.ignoreDepthValues?void 0:pt.depthStencilTexture),e.setRenderTarget(w))}let Ve=M[Pe];Ve===void 0&&(Ve=new Lt,Ve.layers.enable(Pe),Ve.viewport=new ht,M[Pe]=Ve),Ve.matrix.fromArray(Be.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(Be.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(lt.x,lt.y,lt.width,lt.height),Pe===0&&(g.matrix.copy(Ve.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale)),oe===!0&&g.cameras.push(Ve)}let Te=s.enabledFeatures;if(Te&&Te.includes("depth-sensing")){let Pe=u.getDepthInformation(ye[0]);Pe&&Pe.isValid&&Pe.texture&&v.init(e,Pe,s.renderState)}}for(let ye=0;ye<E.length;ye++){let oe=S[ye],Te=E[ye];oe!==null&&Te!==void 0&&Te.update(oe,ne,c||a)}ve&&ve($,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),y=null}let Qe=new gu;Qe.setAnimationLoop(Oe),this.setAnimationLoop=function($){ve=$},this.dispose=function(){}}},Di=new gn,_0=new st;function v0(i,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,wl(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,w,E,S){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),u(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,S)):d.isMeshMatcapMaterial?(r(m,d),y(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),v(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,w,E):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===At&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===At&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let w=e.get(d),E=w.envMap,S=w.envMapRotation;E&&(m.envMap.value=E,Di.copy(S),Di.x*=-1,Di.y*=-1,Di.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Di.y*=-1,Di.z*=-1),m.envMapRotation.value.setFromMatrix4(_0.makeRotationFromEuler(Di)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,w,E){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*w,m.scale.value=E*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,w){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===At&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function y(m,d){d.matcap&&(m.matcap.value=d.matcap)}function v(m,d){let w=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function x0(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,E){let S=E.program;n.uniformBlockBinding(w,S)}function c(w,E){let S=s[w.id];S===void 0&&(y(w),S=h(w),s[w.id]=S,w.addEventListener("dispose",m));let R=E.program;n.updateUBOMapping(w,R);let A=e.render.frame;r[w.id]!==A&&(f(w),r[w.id]=A)}function h(w){let E=u();w.__bindingPointIndex=E;let S=i.createBuffer(),R=w.__size,A=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,R,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,S),S}function u(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){let E=s[w.id],S=w.uniforms,R=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let A=0,C=S.length;A<C;A++){let L=Array.isArray(S[A])?S[A]:[S[A]];for(let M=0,g=L.length;M<g;M++){let b=L[M];if(p(b,A,M,R)===!0){let P=b.__offset,D=Array.isArray(b.value)?b.value:[b.value],k=0;for(let O=0;O<D.length;O++){let z=D[O],Q=v(z);typeof z=="number"||typeof z=="boolean"?(b.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,P+k,b.__data)):z.isMatrix3?(b.__data[0]=z.elements[0],b.__data[1]=z.elements[1],b.__data[2]=z.elements[2],b.__data[3]=0,b.__data[4]=z.elements[3],b.__data[5]=z.elements[4],b.__data[6]=z.elements[5],b.__data[7]=0,b.__data[8]=z.elements[6],b.__data[9]=z.elements[7],b.__data[10]=z.elements[8],b.__data[11]=0):(z.toArray(b.__data,k),k+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,P,b.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(w,E,S,R){let A=w.value,C=E+"_"+S;if(R[C]===void 0)return typeof A=="number"||typeof A=="boolean"?R[C]=A:R[C]=A.clone(),!0;{let L=R[C];if(typeof A=="number"||typeof A=="boolean"){if(L!==A)return R[C]=A,!0}else if(L.equals(A)===!1)return L.copy(A),!0}return!1}function y(w){let E=w.uniforms,S=0,R=16;for(let C=0,L=E.length;C<L;C++){let M=Array.isArray(E[C])?E[C]:[E[C]];for(let g=0,b=M.length;g<b;g++){let P=M[g],D=Array.isArray(P.value)?P.value:[P.value];for(let k=0,O=D.length;k<O;k++){let z=D[k],Q=v(z),X=S%R,J=X%Q.boundary,se=X+J;S+=J,se!==0&&R-se<Q.storage&&(S+=R-se),P.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=S,S+=Q.storage}}}let A=S%R;return A>0&&(S+=R-A),w.__size=S,w.__cache={},this}function v(w){let E={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(E.boundary=4,E.storage=4):w.isVector2?(E.boundary=8,E.storage=8):w.isVector3||w.isColor?(E.boundary=16,E.storage=12):w.isVector4?(E.boundary=16,E.storage=16):w.isMatrix3?(E.boundary=48,E.storage=48):w.isMatrix4?(E.boundary=64,E.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),E}function m(w){let E=w.target;E.removeEventListener("dispose",m);let S=a.indexOf(E.__bindingPointIndex);a.splice(S,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function d(){for(let w in s)i.deleteBuffer(s[w]);a=[],s={},r={}}return{bind:l,update:c,dispose:d}}var co=class{constructor(e={}){let{canvas:t=kh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let y=new Uint32Array(4),v=new Int32Array(4),m=null,d=null,w=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Tt,this.toneMapping=zn,this.toneMappingExposure=1;let S=this,R=!1,A=0,C=0,L=null,M=-1,g=null,b=new ht,P=new ht,D=null,k=new Fe(0),O=0,z=t.width,Q=t.height,X=1,J=null,se=null,ve=new ht(0,0,z,Q),Oe=new ht(0,0,z,Q),Qe=!1,$=new is,ne=!1,ye=!1,oe=new st,Te=new st,Pe=new N,Be=new ht,lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ve=!1;function pt(){return L===null?X:1}let I=n;function jt(x,F){return t.getContext(x,F)}try{let x={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"171"}`),t.addEventListener("webglcontextlost",K,!1),t.addEventListener("webglcontextrestored",he,!1),t.addEventListener("webglcontextcreationerror",ce,!1),I===null){let F="webgl2";if(I=jt(F,x),I===null)throw jt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let ke,He,xe,nt,Se,T,_,H,Z,j,Y,_e,le,fe,We,te,pe,Ee,Ae,me,Ge,De,tt,U;function re(){ke=new Om(I),ke.init(),De=new p0(I,ke),He=new Im(I,ke,e,De),xe=new d0(I,ke),He.reverseDepthBuffer&&f&&xe.buffers.depth.setReversed(!0),nt=new km(I),Se=new Qg,T=new f0(I,ke,xe,Se,He,De,nt),_=new Dm(S),H=new Fm(S),Z=new qd(I),tt=new Rm(I,Z),j=new Bm(I,Z,nt,tt),Y=new Gm(I,j,Z,nt),Ae=new Hm(I,He,T),te=new Lm(Se),_e=new jg(S,_,H,ke,He,tt,te),le=new v0(S,Se),fe=new t0,We=new o0(ke),Ee=new Cm(S,_,H,xe,Y,p,l),pe=new h0(S,Y,He),U=new x0(I,nt,He,xe),me=new Pm(I,ke,nt),Ge=new zm(I,ke,nt),nt.programs=_e.programs,S.capabilities=He,S.extensions=ke,S.properties=Se,S.renderLists=fe,S.shadowMap=pe,S.state=xe,S.info=nt}re();let q=new Gl(S,I);this.xr=q,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let x=ke.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){let x=ke.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(x){x!==void 0&&(X=x,this.setSize(z,Q,!1))},this.getSize=function(x){return x.set(z,Q)},this.setSize=function(x,F,G=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=x,Q=F,t.width=Math.floor(x*X),t.height=Math.floor(F*X),G===!0&&(t.style.width=x+"px",t.style.height=F+"px"),this.setViewport(0,0,x,F)},this.getDrawingBufferSize=function(x){return x.set(z*X,Q*X).floor()},this.setDrawingBufferSize=function(x,F,G){z=x,Q=F,X=G,t.width=Math.floor(x*G),t.height=Math.floor(F*G),this.setViewport(0,0,x,F)},this.getCurrentViewport=function(x){return x.copy(b)},this.getViewport=function(x){return x.copy(ve)},this.setViewport=function(x,F,G,W){x.isVector4?ve.set(x.x,x.y,x.z,x.w):ve.set(x,F,G,W),xe.viewport(b.copy(ve).multiplyScalar(X).round())},this.getScissor=function(x){return x.copy(Oe)},this.setScissor=function(x,F,G,W){x.isVector4?Oe.set(x.x,x.y,x.z,x.w):Oe.set(x,F,G,W),xe.scissor(P.copy(Oe).multiplyScalar(X).round())},this.getScissorTest=function(){return Qe},this.setScissorTest=function(x){xe.setScissorTest(Qe=x)},this.setOpaqueSort=function(x){J=x},this.setTransparentSort=function(x){se=x},this.getClearColor=function(x){return x.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor.apply(Ee,arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha.apply(Ee,arguments)},this.clear=function(x=!0,F=!0,G=!0){let W=0;if(x){let B=!1;if(L!==null){let ee=L.texture.format;B=ee===La||ee===Ia||ee===Pa}if(B){let ee=L.texture.type,ae=ee===Tn||ee===hi||ee===us||ee===Ri||ee===Ca||ee===Ra,de=Ee.getClearColor(),ge=Ee.getClearAlpha(),Ce=de.r,Re=de.g,Me=de.b;ae?(y[0]=Ce,y[1]=Re,y[2]=Me,y[3]=ge,I.clearBufferuiv(I.COLOR,0,y)):(v[0]=Ce,v[1]=Re,v[2]=Me,v[3]=ge,I.clearBufferiv(I.COLOR,0,v))}else W|=I.COLOR_BUFFER_BIT}F&&(W|=I.DEPTH_BUFFER_BIT),G&&(W|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",K,!1),t.removeEventListener("webglcontextrestored",he,!1),t.removeEventListener("webglcontextcreationerror",ce,!1),Ee.dispose(),fe.dispose(),We.dispose(),Se.dispose(),_.dispose(),H.dispose(),Y.dispose(),tt.dispose(),U.dispose(),_e.dispose(),q.dispose(),q.removeEventListener("sessionstart",Sc),q.removeEventListener("sessionend",Mc),fi.stop()};function K(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function he(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;let x=nt.autoReset,F=pe.enabled,G=pe.autoUpdate,W=pe.needsUpdate,B=pe.type;re(),nt.autoReset=x,pe.enabled=F,pe.autoUpdate=G,pe.needsUpdate=W,pe.type=B}function ce(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function Le(x){let F=x.target;F.removeEventListener("dispose",Le),ut(F)}function ut(x){Rt(x),Se.remove(x)}function Rt(x){let F=Se.get(x).programs;F!==void 0&&(F.forEach(function(G){_e.releaseProgram(G)}),x.isShaderMaterial&&_e.releaseShaderCache(x))}this.renderBufferDirect=function(x,F,G,W,B,ee){F===null&&(F=lt);let ae=B.isMesh&&B.matrixWorld.determinant()<0,de=Ku(x,F,G,W,B);xe.setMaterial(W,ae);let ge=G.index,Ce=1;if(W.wireframe===!0){if(ge=j.getWireframeAttribute(G),ge===void 0)return;Ce=2}let Re=G.drawRange,Me=G.attributes.position,Xe=Re.start*Ce,$e=(Re.start+Re.count)*Ce;ee!==null&&(Xe=Math.max(Xe,ee.start*Ce),$e=Math.min($e,(ee.start+ee.count)*Ce)),ge!==null?(Xe=Math.max(Xe,0),$e=Math.min($e,ge.count)):Me!=null&&(Xe=Math.max(Xe,0),$e=Math.min($e,Me.count));let mt=$e-Xe;if(mt<0||mt===1/0)return;tt.setup(B,W,de,G,ge);let dt,Ye=me;if(ge!==null&&(dt=Z.get(ge),Ye=Ge,Ye.setIndex(dt)),B.isMesh)W.wireframe===!0?(xe.setLineWidth(W.wireframeLinewidth*pt()),Ye.setMode(I.LINES)):Ye.setMode(I.TRIANGLES);else if(B.isLine){let be=W.linewidth;be===void 0&&(be=1),xe.setLineWidth(be*pt()),B.isLineSegments?Ye.setMode(I.LINES):B.isLineLoop?Ye.setMode(I.LINE_LOOP):Ye.setMode(I.LINE_STRIP)}else B.isPoints?Ye.setMode(I.POINTS):B.isSprite&&Ye.setMode(I.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)Ye.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(ke.get("WEBGL_multi_draw"))Ye.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{let be=B._multiDrawStarts,wt=B._multiDrawCounts,Ze=B._multiDrawCount,un=ge?Z.get(ge).bytesPerElement:1,zi=Se.get(W).currentProgram.getUniforms();for(let qt=0;qt<Ze;qt++)zi.setValue(I,"_gl_DrawID",qt),Ye.render(be[qt]/un,wt[qt])}else if(B.isInstancedMesh)Ye.renderInstances(Xe,mt,B.count);else if(G.isInstancedBufferGeometry){let be=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,wt=Math.min(G.instanceCount,be);Ye.renderInstances(Xe,mt,wt)}else Ye.render(Xe,mt)};function Ke(x,F,G){x.transparent===!0&&x.side===on&&x.forceSinglePass===!1?(x.side=At,x.needsUpdate=!0,xr(x,F,G),x.side=mn,x.needsUpdate=!0,xr(x,F,G),x.side=on):xr(x,F,G)}this.compile=function(x,F,G=null){G===null&&(G=x),d=We.get(G),d.init(F),E.push(d),G.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(d.pushLight(B),B.castShadow&&d.pushShadow(B))}),x!==G&&x.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(d.pushLight(B),B.castShadow&&d.pushShadow(B))}),d.setupLights();let W=new Set;return x.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;let ee=B.material;if(ee)if(Array.isArray(ee))for(let ae=0;ae<ee.length;ae++){let de=ee[ae];Ke(de,G,B),W.add(de)}else Ke(ee,G,B),W.add(ee)}),E.pop(),d=null,W},this.compileAsync=function(x,F,G=null){let W=this.compile(x,F,G);return new Promise(B=>{function ee(){if(W.forEach(function(ae){Se.get(ae).currentProgram.isReady()&&W.delete(ae)}),W.size===0){B(x);return}setTimeout(ee,10)}ke.get("KHR_parallel_shader_compile")!==null?ee():setTimeout(ee,10)})};let hn=null;function Pn(x){hn&&hn(x)}function Sc(){fi.stop()}function Mc(){fi.start()}let fi=new gu;fi.setAnimationLoop(Pn),typeof self<"u"&&fi.setContext(self),this.setAnimationLoop=function(x){hn=x,q.setAnimationLoop(x),x===null?fi.stop():fi.start()},q.addEventListener("sessionstart",Sc),q.addEventListener("sessionend",Mc),this.render=function(x,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(F),F=q.getCamera()),x.isScene===!0&&x.onBeforeRender(S,x,F,L),d=We.get(x,E.length),d.init(F),E.push(d),Te.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),$.setFromProjectionMatrix(Te),ye=this.localClippingEnabled,ne=te.init(this.clippingPlanes,ye),m=fe.get(x,w.length),m.init(),w.push(m),q.enabled===!0&&q.isPresenting===!0){let ee=S.xr.getDepthSensingMesh();ee!==null&&bo(ee,F,-1/0,S.sortObjects)}bo(x,F,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(J,se),Ve=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,Ve&&Ee.addToRenderList(m,x),this.info.render.frame++,ne===!0&&te.beginShadows();let G=d.state.shadowsArray;pe.render(G,x,F),ne===!0&&te.endShadows(),this.info.autoReset===!0&&this.info.reset();let W=m.opaque,B=m.transmissive;if(d.setupLights(),F.isArrayCamera){let ee=F.cameras;if(B.length>0)for(let ae=0,de=ee.length;ae<de;ae++){let ge=ee[ae];Ec(W,B,x,ge)}Ve&&Ee.render(x);for(let ae=0,de=ee.length;ae<de;ae++){let ge=ee[ae];bc(m,x,ge,ge.viewport)}}else B.length>0&&Ec(W,B,x,F),Ve&&Ee.render(x),bc(m,x,F);L!==null&&(T.updateMultisampleRenderTarget(L),T.updateRenderTargetMipmap(L)),x.isScene===!0&&x.onAfterRender(S,x,F),tt.resetDefaultState(),M=-1,g=null,E.pop(),E.length>0?(d=E[E.length-1],ne===!0&&te.setGlobalState(S.clippingPlanes,d.state.camera)):d=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function bo(x,F,G,W){if(x.visible===!1)return;if(x.layers.test(F.layers)){if(x.isGroup)G=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(F);else if(x.isLight)d.pushLight(x),x.castShadow&&d.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||$.intersectsSprite(x)){W&&Be.setFromMatrixPosition(x.matrixWorld).applyMatrix4(Te);let ae=Y.update(x),de=x.material;de.visible&&m.push(x,ae,de,G,Be.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||$.intersectsObject(x))){let ae=Y.update(x),de=x.material;if(W&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Be.copy(x.boundingSphere.center)):(ae.boundingSphere===null&&ae.computeBoundingSphere(),Be.copy(ae.boundingSphere.center)),Be.applyMatrix4(x.matrixWorld).applyMatrix4(Te)),Array.isArray(de)){let ge=ae.groups;for(let Ce=0,Re=ge.length;Ce<Re;Ce++){let Me=ge[Ce],Xe=de[Me.materialIndex];Xe&&Xe.visible&&m.push(x,ae,Xe,G,Be.z,Me)}}else de.visible&&m.push(x,ae,de,G,Be.z,null)}}let ee=x.children;for(let ae=0,de=ee.length;ae<de;ae++)bo(ee[ae],F,G,W)}function bc(x,F,G,W){let B=x.opaque,ee=x.transmissive,ae=x.transparent;d.setupLightsView(G),ne===!0&&te.setGlobalState(S.clippingPlanes,G),W&&xe.viewport(b.copy(W)),B.length>0&&vr(B,F,G),ee.length>0&&vr(ee,F,G),ae.length>0&&vr(ae,F,G),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function Ec(x,F,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[W.id]===void 0&&(d.state.transmissionRenderTarget[W.id]=new Mn(1,1,{generateMipmaps:!0,type:ke.has("EXT_color_buffer_half_float")||ke.has("EXT_color_buffer_float")?ds:Tn,minFilter:wn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qe.workingColorSpace}));let ee=d.state.transmissionRenderTarget[W.id],ae=W.viewport||b;ee.setSize(ae.z,ae.w);let de=S.getRenderTarget();S.setRenderTarget(ee),S.getClearColor(k),O=S.getClearAlpha(),O<1&&S.setClearColor(16777215,.5),S.clear(),Ve&&Ee.render(G);let ge=S.toneMapping;S.toneMapping=zn;let Ce=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),d.setupLightsView(W),ne===!0&&te.setGlobalState(S.clippingPlanes,W),vr(x,G,W),T.updateMultisampleRenderTarget(ee),T.updateRenderTargetMipmap(ee),ke.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let Me=0,Xe=F.length;Me<Xe;Me++){let $e=F[Me],mt=$e.object,dt=$e.geometry,Ye=$e.material,be=$e.group;if(Ye.side===on&&mt.layers.test(W.layers)){let wt=Ye.side;Ye.side=At,Ye.needsUpdate=!0,wc(mt,G,W,dt,Ye,be),Ye.side=wt,Ye.needsUpdate=!0,Re=!0}}Re===!0&&(T.updateMultisampleRenderTarget(ee),T.updateRenderTargetMipmap(ee))}S.setRenderTarget(de),S.setClearColor(k,O),Ce!==void 0&&(W.viewport=Ce),S.toneMapping=ge}function vr(x,F,G){let W=F.isScene===!0?F.overrideMaterial:null;for(let B=0,ee=x.length;B<ee;B++){let ae=x[B],de=ae.object,ge=ae.geometry,Ce=W===null?ae.material:W,Re=ae.group;de.layers.test(G.layers)&&wc(de,F,G,ge,Ce,Re)}}function wc(x,F,G,W,B,ee){x.onBeforeRender(S,F,G,W,B,ee),x.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),B.onBeforeRender(S,F,G,W,x,ee),B.transparent===!0&&B.side===on&&B.forceSinglePass===!1?(B.side=At,B.needsUpdate=!0,S.renderBufferDirect(G,F,W,B,x,ee),B.side=mn,B.needsUpdate=!0,S.renderBufferDirect(G,F,W,B,x,ee),B.side=on):S.renderBufferDirect(G,F,W,B,x,ee),x.onAfterRender(S,F,G,W,B,ee)}function xr(x,F,G){F.isScene!==!0&&(F=lt);let W=Se.get(x),B=d.state.lights,ee=d.state.shadowsArray,ae=B.state.version,de=_e.getParameters(x,B.state,ee,F,G),ge=_e.getProgramCacheKey(de),Ce=W.programs;W.environment=x.isMeshStandardMaterial?F.environment:null,W.fog=F.fog,W.envMap=(x.isMeshStandardMaterial?H:_).get(x.envMap||W.environment),W.envMapRotation=W.environment!==null&&x.envMap===null?F.environmentRotation:x.envMapRotation,Ce===void 0&&(x.addEventListener("dispose",Le),Ce=new Map,W.programs=Ce);let Re=Ce.get(ge);if(Re!==void 0){if(W.currentProgram===Re&&W.lightsStateVersion===ae)return Ac(x,de),Re}else de.uniforms=_e.getUniforms(x),x.onBeforeCompile(de,S),Re=_e.acquireProgram(de,ge),Ce.set(ge,Re),W.uniforms=de.uniforms;let Me=W.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Me.clippingPlanes=te.uniform),Ac(x,de),W.needsLights=ju(x),W.lightsStateVersion=ae,W.needsLights&&(Me.ambientLightColor.value=B.state.ambient,Me.lightProbe.value=B.state.probe,Me.directionalLights.value=B.state.directional,Me.directionalLightShadows.value=B.state.directionalShadow,Me.spotLights.value=B.state.spot,Me.spotLightShadows.value=B.state.spotShadow,Me.rectAreaLights.value=B.state.rectArea,Me.ltc_1.value=B.state.rectAreaLTC1,Me.ltc_2.value=B.state.rectAreaLTC2,Me.pointLights.value=B.state.point,Me.pointLightShadows.value=B.state.pointShadow,Me.hemisphereLights.value=B.state.hemi,Me.directionalShadowMap.value=B.state.directionalShadowMap,Me.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Me.spotShadowMap.value=B.state.spotShadowMap,Me.spotLightMatrix.value=B.state.spotLightMatrix,Me.spotLightMap.value=B.state.spotLightMap,Me.pointShadowMap.value=B.state.pointShadowMap,Me.pointShadowMatrix.value=B.state.pointShadowMatrix),W.currentProgram=Re,W.uniformsList=null,Re}function Tc(x){if(x.uniformsList===null){let F=x.currentProgram.getUniforms();x.uniformsList=gs.seqWithValue(F.seq,x.uniforms)}return x.uniformsList}function Ac(x,F){let G=Se.get(x);G.outputColorSpace=F.outputColorSpace,G.batching=F.batching,G.batchingColor=F.batchingColor,G.instancing=F.instancing,G.instancingColor=F.instancingColor,G.instancingMorph=F.instancingMorph,G.skinning=F.skinning,G.morphTargets=F.morphTargets,G.morphNormals=F.morphNormals,G.morphColors=F.morphColors,G.morphTargetsCount=F.morphTargetsCount,G.numClippingPlanes=F.numClippingPlanes,G.numIntersection=F.numClipIntersection,G.vertexAlphas=F.vertexAlphas,G.vertexTangents=F.vertexTangents,G.toneMapping=F.toneMapping}function Ku(x,F,G,W,B){F.isScene!==!0&&(F=lt),T.resetTextureUnits();let ee=F.fog,ae=W.isMeshStandardMaterial?F.environment:null,de=L===null?S.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Ei,ge=(W.isMeshStandardMaterial?H:_).get(W.envMap||ae),Ce=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Re=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Me=!!G.morphAttributes.position,Xe=!!G.morphAttributes.normal,$e=!!G.morphAttributes.color,mt=zn;W.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(mt=S.toneMapping);let dt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Ye=dt!==void 0?dt.length:0,be=Se.get(W),wt=d.state.lights;if(ne===!0&&(ye===!0||x!==g)){let Ot=x===g&&W.id===M;te.setState(W,x,Ot)}let Ze=!1;W.version===be.__version?(be.needsLights&&be.lightsStateVersion!==wt.state.version||be.outputColorSpace!==de||B.isBatchedMesh&&be.batching===!1||!B.isBatchedMesh&&be.batching===!0||B.isBatchedMesh&&be.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&be.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&be.instancing===!1||!B.isInstancedMesh&&be.instancing===!0||B.isSkinnedMesh&&be.skinning===!1||!B.isSkinnedMesh&&be.skinning===!0||B.isInstancedMesh&&be.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&be.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&be.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&be.instancingMorph===!1&&B.morphTexture!==null||be.envMap!==ge||W.fog===!0&&be.fog!==ee||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==te.numPlanes||be.numIntersection!==te.numIntersection)||be.vertexAlphas!==Ce||be.vertexTangents!==Re||be.morphTargets!==Me||be.morphNormals!==Xe||be.morphColors!==$e||be.toneMapping!==mt||be.morphTargetsCount!==Ye)&&(Ze=!0):(Ze=!0,be.__version=W.version);let un=be.currentProgram;Ze===!0&&(un=xr(W,F,B));let zi=!1,qt=!1,Es=!1,rt=un.getUniforms(),Qt=be.uniforms;if(xe.useProgram(un.program)&&(zi=!0,qt=!0,Es=!0),W.id!==M&&(M=W.id,qt=!0),zi||g!==x){xe.buffers.depth.getReversed()?(oe.copy(x.projectionMatrix),Gh(oe),Vh(oe),rt.setValue(I,"projectionMatrix",oe)):rt.setValue(I,"projectionMatrix",x.projectionMatrix),rt.setValue(I,"viewMatrix",x.matrixWorldInverse);let Vt=rt.map.cameraPosition;Vt!==void 0&&Vt.setValue(I,Pe.setFromMatrixPosition(x.matrixWorld)),He.logarithmicDepthBuffer&&rt.setValue(I,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&rt.setValue(I,"isOrthographic",x.isOrthographicCamera===!0),g!==x&&(g=x,qt=!0,Es=!0)}if(B.isSkinnedMesh){rt.setOptional(I,B,"bindMatrix"),rt.setOptional(I,B,"bindMatrixInverse");let Ot=B.skeleton;Ot&&(Ot.boneTexture===null&&Ot.computeBoneTexture(),rt.setValue(I,"boneTexture",Ot.boneTexture,T))}B.isBatchedMesh&&(rt.setOptional(I,B,"batchingTexture"),rt.setValue(I,"batchingTexture",B._matricesTexture,T),rt.setOptional(I,B,"batchingIdTexture"),rt.setValue(I,"batchingIdTexture",B._indirectTexture,T),rt.setOptional(I,B,"batchingColorTexture"),B._colorsTexture!==null&&rt.setValue(I,"batchingColorTexture",B._colorsTexture,T));let en=G.morphAttributes;if((en.position!==void 0||en.normal!==void 0||en.color!==void 0)&&Ae.update(B,G,un),(qt||be.receiveShadow!==B.receiveShadow)&&(be.receiveShadow=B.receiveShadow,rt.setValue(I,"receiveShadow",B.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Qt.envMap.value=ge,Qt.flipEnvMap.value=ge.isCubeTexture&&ge.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&F.environment!==null&&(Qt.envMapIntensity.value=F.environmentIntensity),qt&&(rt.setValue(I,"toneMappingExposure",S.toneMappingExposure),be.needsLights&&Ju(Qt,Es),ee&&W.fog===!0&&le.refreshFogUniforms(Qt,ee),le.refreshMaterialUniforms(Qt,W,X,Q,d.state.transmissionRenderTarget[x.id]),gs.upload(I,Tc(be),Qt,T)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(gs.upload(I,Tc(be),Qt,T),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&rt.setValue(I,"center",B.center),rt.setValue(I,"modelViewMatrix",B.modelViewMatrix),rt.setValue(I,"normalMatrix",B.normalMatrix),rt.setValue(I,"modelMatrix",B.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){let Ot=W.uniformsGroups;for(let Vt=0,Eo=Ot.length;Vt<Eo;Vt++){let pi=Ot[Vt];U.update(pi,un),U.bind(pi,un)}}return un}function Ju(x,F){x.ambientLightColor.needsUpdate=F,x.lightProbe.needsUpdate=F,x.directionalLights.needsUpdate=F,x.directionalLightShadows.needsUpdate=F,x.pointLights.needsUpdate=F,x.pointLightShadows.needsUpdate=F,x.spotLights.needsUpdate=F,x.spotLightShadows.needsUpdate=F,x.rectAreaLights.needsUpdate=F,x.hemisphereLights.needsUpdate=F}function ju(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(x,F,G){Se.get(x.texture).__webglTexture=F,Se.get(x.depthTexture).__webglTexture=G;let W=Se.get(x);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=G===void 0,W.__autoAllocateDepthBuffer||ke.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(x,F){let G=Se.get(x);G.__webglFramebuffer=F,G.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(x,F=0,G=0){L=x,A=F,C=G;let W=!0,B=null,ee=!1,ae=!1;if(x){let ge=Se.get(x);if(ge.__useDefaultFramebuffer!==void 0)xe.bindFramebuffer(I.FRAMEBUFFER,null),W=!1;else if(ge.__webglFramebuffer===void 0)T.setupRenderTarget(x);else if(ge.__hasExternalTextures)T.rebindTextures(x,Se.get(x.texture).__webglTexture,Se.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){let Me=x.depthTexture;if(ge.__boundDepthTexture!==Me){if(Me!==null&&Se.has(Me)&&(x.width!==Me.image.width||x.height!==Me.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(x)}}let Ce=x.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(ae=!0);let Re=Se.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Re[F])?B=Re[F][G]:B=Re[F],ee=!0):x.samples>0&&T.useMultisampledRTT(x)===!1?B=Se.get(x).__webglMultisampledFramebuffer:Array.isArray(Re)?B=Re[G]:B=Re,b.copy(x.viewport),P.copy(x.scissor),D=x.scissorTest}else b.copy(ve).multiplyScalar(X).floor(),P.copy(Oe).multiplyScalar(X).floor(),D=Qe;if(xe.bindFramebuffer(I.FRAMEBUFFER,B)&&W&&xe.drawBuffers(x,B),xe.viewport(b),xe.scissor(P),xe.setScissorTest(D),ee){let ge=Se.get(x.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+F,ge.__webglTexture,G)}else if(ae){let ge=Se.get(x.texture),Ce=F||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,ge.__webglTexture,G||0,Ce)}M=-1},this.readRenderTargetPixels=function(x,F,G,W,B,ee,ae){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let de=Se.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ae!==void 0&&(de=de[ae]),de){xe.bindFramebuffer(I.FRAMEBUFFER,de);try{let ge=x.texture,Ce=ge.format,Re=ge.type;if(!He.textureFormatReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!He.textureTypeReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=x.width-W&&G>=0&&G<=x.height-B&&I.readPixels(F,G,W,B,De.convert(Ce),De.convert(Re),ee)}finally{let ge=L!==null?Se.get(L).__webglFramebuffer:null;xe.bindFramebuffer(I.FRAMEBUFFER,ge)}}},this.readRenderTargetPixelsAsync=async function(x,F,G,W,B,ee,ae){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let de=Se.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ae!==void 0&&(de=de[ae]),de){let ge=x.texture,Ce=ge.format,Re=ge.type;if(!He.textureFormatReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!He.textureTypeReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=x.width-W&&G>=0&&G<=x.height-B){xe.bindFramebuffer(I.FRAMEBUFFER,de);let Me=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Me),I.bufferData(I.PIXEL_PACK_BUFFER,ee.byteLength,I.STREAM_READ),I.readPixels(F,G,W,B,De.convert(Ce),De.convert(Re),0);let Xe=L!==null?Se.get(L).__webglFramebuffer:null;xe.bindFramebuffer(I.FRAMEBUFFER,Xe);let $e=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Hh(I,$e,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Me),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,ee),I.deleteBuffer(Me),I.deleteSync($e),ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(x,F=null,G=0){x.isTexture!==!0&&(Pi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,x=arguments[1]);let W=Math.pow(2,-G),B=Math.floor(x.image.width*W),ee=Math.floor(x.image.height*W),ae=F!==null?F.x:0,de=F!==null?F.y:0;T.setTexture2D(x,0),I.copyTexSubImage2D(I.TEXTURE_2D,G,0,0,ae,de,B,ee),xe.unbindTexture()};let Qu=I.createFramebuffer(),ed=I.createFramebuffer();this.copyTextureToTexture=function(x,F,G=null,W=null,B=0,ee=null){x.isTexture!==!0&&(Pi("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,x=arguments[1],F=arguments[2],ee=arguments[3]||0,G=null),ee===null&&(B!==0?(Pi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ee=B,B=0):ee=0);let ae,de,ge,Ce,Re,Me,Xe,$e,mt,dt=x.isCompressedTexture?x.mipmaps[ee]:x.image;if(G!==null)ae=G.max.x-G.min.x,de=G.max.y-G.min.y,ge=G.isBox3?G.max.z-G.min.z:1,Ce=G.min.x,Re=G.min.y,Me=G.isBox3?G.min.z:0;else{let en=Math.pow(2,-B);ae=Math.floor(dt.width*en),de=Math.floor(dt.height*en),x.isDataArrayTexture?ge=dt.depth:x.isData3DTexture?ge=Math.floor(dt.depth*en):ge=1,Ce=0,Re=0,Me=0}W!==null?(Xe=W.x,$e=W.y,mt=W.z):(Xe=0,$e=0,mt=0);let Ye=De.convert(F.format),be=De.convert(F.type),wt;F.isData3DTexture?(T.setTexture3D(F,0),wt=I.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(T.setTexture2DArray(F,0),wt=I.TEXTURE_2D_ARRAY):(T.setTexture2D(F,0),wt=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,F.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,F.unpackAlignment);let Ze=I.getParameter(I.UNPACK_ROW_LENGTH),un=I.getParameter(I.UNPACK_IMAGE_HEIGHT),zi=I.getParameter(I.UNPACK_SKIP_PIXELS),qt=I.getParameter(I.UNPACK_SKIP_ROWS),Es=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,dt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,dt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ce),I.pixelStorei(I.UNPACK_SKIP_ROWS,Re),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Me);let rt=x.isDataArrayTexture||x.isData3DTexture,Qt=F.isDataArrayTexture||F.isData3DTexture;if(x.isDepthTexture){let en=Se.get(x),Ot=Se.get(F),Vt=Se.get(en.__renderTarget),Eo=Se.get(Ot.__renderTarget);xe.bindFramebuffer(I.READ_FRAMEBUFFER,Vt.__webglFramebuffer),xe.bindFramebuffer(I.DRAW_FRAMEBUFFER,Eo.__webglFramebuffer);for(let pi=0;pi<ge;pi++)rt&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Se.get(x).__webglTexture,B,Me+pi),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Se.get(F).__webglTexture,ee,mt+pi)),I.blitFramebuffer(Ce,Re,ae,de,Xe,$e,ae,de,I.DEPTH_BUFFER_BIT,I.NEAREST);xe.bindFramebuffer(I.READ_FRAMEBUFFER,null),xe.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(B!==0||x.isRenderTargetTexture||Se.has(x)){let en=Se.get(x),Ot=Se.get(F);xe.bindFramebuffer(I.READ_FRAMEBUFFER,Qu),xe.bindFramebuffer(I.DRAW_FRAMEBUFFER,ed);for(let Vt=0;Vt<ge;Vt++)rt?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,en.__webglTexture,B,Me+Vt):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,en.__webglTexture,B),Qt?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ot.__webglTexture,ee,mt+Vt):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ot.__webglTexture,ee),B!==0?I.blitFramebuffer(Ce,Re,ae,de,Xe,$e,ae,de,I.COLOR_BUFFER_BIT,I.NEAREST):Qt?I.copyTexSubImage3D(wt,ee,Xe,$e,mt+Vt,Ce,Re,ae,de):I.copyTexSubImage2D(wt,ee,Xe,$e,Ce,Re,ae,de);xe.bindFramebuffer(I.READ_FRAMEBUFFER,null),xe.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Qt?x.isDataTexture||x.isData3DTexture?I.texSubImage3D(wt,ee,Xe,$e,mt,ae,de,ge,Ye,be,dt.data):F.isCompressedArrayTexture?I.compressedTexSubImage3D(wt,ee,Xe,$e,mt,ae,de,ge,Ye,dt.data):I.texSubImage3D(wt,ee,Xe,$e,mt,ae,de,ge,Ye,be,dt):x.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,ee,Xe,$e,ae,de,Ye,be,dt.data):x.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,ee,Xe,$e,dt.width,dt.height,Ye,dt.data):I.texSubImage2D(I.TEXTURE_2D,ee,Xe,$e,ae,de,Ye,be,dt);I.pixelStorei(I.UNPACK_ROW_LENGTH,Ze),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,un),I.pixelStorei(I.UNPACK_SKIP_PIXELS,zi),I.pixelStorei(I.UNPACK_SKIP_ROWS,qt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Es),ee===0&&F.generateMipmaps&&I.generateMipmap(wt),xe.unbindTexture()},this.copyTextureToTexture3D=function(x,F,G=null,W=null,B=0){return x.isTexture!==!0&&(Pi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,W=arguments[1]||null,x=arguments[2],F=arguments[3],B=arguments[4]||0),Pi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(x,F,G,W,B)},this.initRenderTarget=function(x){Se.get(x).__webglFramebuffer===void 0&&T.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?T.setTextureCube(x,0):x.isData3DTexture?T.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?T.setTexture2DArray(x,0):T.setTexture2D(x,0),xe.unbindTexture()},this.resetState=function(){A=0,C=0,L=null,xe.reset(),tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=qe._getUnpackColorSpace()}};var Su={type:"change"},Xl={type:"start"},bu={type:"end"},uo=new On,Mu=new nn,M0=Math.cos(70*bl.DEG2RAD),St=new N,Wt=2*Math.PI,je={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Wl=1e-6,fo=class extends er{constructor(e,t=null){super(e,t),this.state=je.NONE,this.enabled=!0,this.target=new N,this.cursor=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:li.ROTATE,MIDDLE:li.DOLLY,RIGHT:li.PAN},this.touches={ONE:ci.ROTATE,TWO:ci.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new N,this._lastQuaternion=new rn,this._lastTargetPosition=new N,this._quat=new rn().setFromUnitVectors(e.up,new N(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new cs,this._sphericalDelta=new cs,this._scale=1,this._panOffset=new N,this._rotateStart=new we,this._rotateEnd=new we,this._rotateDelta=new we,this._panStart=new we,this._panEnd=new we,this._panDelta=new we,this._dollyStart=new we,this._dollyEnd=new we,this._dollyDelta=new we,this._dollyDirection=new N,this._mouse=new we,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=E0.bind(this),this._onPointerDown=b0.bind(this),this._onPointerUp=w0.bind(this),this._onContextMenu=L0.bind(this),this._onMouseWheel=C0.bind(this),this._onKeyDown=R0.bind(this),this._onTouchStart=P0.bind(this),this._onTouchMove=I0.bind(this),this._onMouseDown=T0.bind(this),this._onMouseMove=A0.bind(this),this._interceptControlDown=D0.bind(this),this._interceptControlUp=U0.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Su),this.update(),this.state=je.NONE}update(e=null){let t=this.object.position;St.copy(t).sub(this.target),St.applyQuaternion(this._quat),this._spherical.setFromVector3(St),this.autoRotate&&this.state===je.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Wt:n>Math.PI&&(n-=Wt),s<-Math.PI?s+=Wt:s>Math.PI&&(s-=Wt),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(St.setFromSpherical(this._spherical),St.applyQuaternion(this._quatInverse),t.copy(this.target).add(St),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=St.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new N(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new N(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=St.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(uo.origin.copy(this.object.position),uo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(uo.direction))<M0?this.object.lookAt(this.target):(Mu.setFromNormalAndCoplanarPoint(this.object.up,this.target),uo.intersectPlane(Mu,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Wl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Wl||this._lastTargetPosition.distanceToSquared(this.target)>Wl?(this.dispatchEvent(Su),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Wt/60*this.autoRotateSpeed*e:Wt/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){St.setFromMatrixColumn(t,0),St.multiplyScalar(-e),this._panOffset.add(St)}_panUp(e,t){this.screenSpacePanning===!0?St.setFromMatrixColumn(t,1):(St.setFromMatrixColumn(t,0),St.crossVectors(this.object.up,St)),St.multiplyScalar(e),this._panOffset.add(St)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;St.copy(s).sub(this.target);let r=St.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Wt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Wt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Wt*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Wt*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Wt*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Wt*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Wt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Wt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new we,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function b0(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function E0(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function w0(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(bu),this.state=je.NONE;break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function T0(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case li.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=je.DOLLY;break;case li.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=je.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=je.ROTATE}break;case li.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=je.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=je.PAN}break;default:this.state=je.NONE}this.state!==je.NONE&&this.dispatchEvent(Xl)}function A0(i){switch(this.state){case je.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case je.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case je.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function C0(i){this.enabled===!1||this.enableZoom===!1||this.state!==je.NONE||(i.preventDefault(),this.dispatchEvent(Xl),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(bu))}function R0(i){this.enabled!==!1&&this._handleKeyDown(i)}function P0(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case ci.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=je.TOUCH_ROTATE;break;case ci.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=je.TOUCH_PAN;break;default:this.state=je.NONE}break;case 2:switch(this.touches.TWO){case ci.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=je.TOUCH_DOLLY_PAN;break;case ci.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=je.TOUCH_DOLLY_ROTATE;break;default:this.state=je.NONE}break;default:this.state=je.NONE}this.state!==je.NONE&&this.dispatchEvent(Xl)}function I0(i){switch(this._trackPointer(i),this.state){case je.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case je.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case je.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case je.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=je.NONE}}function L0(i){this.enabled!==!1&&i.preventDefault()}function D0(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function U0(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Gt=[{id:"nyc",name:"New York",region:"USA",lat:40.7128,lng:-74.006,tz:"America/New_York",tags:["est","edt","ny","nba","nfl","mlb"],groups:["Sports"]},{id:"la",name:"Los Angeles",region:"USA",lat:34.0522,lng:-118.2437,tz:"America/Los_Angeles",tags:["pst","pdt","la","hollywood","nba"],groups:["Sports"]},{id:"chi",name:"Chicago",region:"USA",lat:41.8781,lng:-87.6298,tz:"America/Chicago",tags:["cst","cdt"]},{id:"den",name:"Denver",region:"USA",lat:39.7392,lng:-104.9903,tz:"America/Denver",tags:["mst","mdt"]},{id:"mia",name:"Miami",region:"USA",lat:25.7617,lng:-80.1918,tz:"America/New_York",tags:[]},{id:"sea",name:"Seattle",region:"USA",lat:47.6062,lng:-122.3321,tz:"America/Los_Angeles",tags:[]},{id:"dal",name:"Dallas",region:"USA",lat:32.7767,lng:-96.797,tz:"America/Chicago",tags:[]},{id:"tor",name:"Toronto",region:"Canada",lat:43.6532,lng:-79.3832,tz:"America/Toronto",tags:["canada","nba"],groups:["Sports"]},{id:"van",name:"Vancouver",region:"Canada",lat:49.2827,lng:-123.1207,tz:"America/Vancouver",tags:[]},{id:"mex",name:"Mexico City",region:"Mexico",lat:19.4326,lng:-99.1332,tz:"America/Mexico_City",tags:[]},{id:"sao",name:"S\xE3o Paulo",region:"Brazil",lat:-23.5505,lng:-46.6333,tz:"America/Sao_Paulo",tags:["brazil","brt"]},{id:"rio",name:"Rio de Janeiro",region:"Brazil",lat:-22.9068,lng:-43.1729,tz:"America/Sao_Paulo",tags:["sports","football"],groups:["Sports"]},{id:"bue",name:"Buenos Aires",region:"Argentina",lat:-34.6037,lng:-58.3816,tz:"America/Argentina/Buenos_Aires",tags:["art"]},{id:"lim",name:"Lima",region:"Peru",lat:-12.0464,lng:-77.0428,tz:"America/Lima",tags:[]},{id:"bog",name:"Bogot\xE1",region:"Colombia",lat:4.711,lng:-74.0721,tz:"America/Bogota",tags:[]},{id:"scl",name:"Santiago",region:"Chile",lat:-33.4489,lng:-70.6693,tz:"America/Santiago",tags:[]},{id:"lon",name:"London",region:"UK",lat:51.5074,lng:-.1278,tz:"Europe/London",tags:["gmt","bst","uk","premier league","f1"],groups:["Sports"]},{id:"par",name:"Paris",region:"France",lat:48.8566,lng:2.3522,tz:"Europe/Paris",tags:["cet","cest","ligue1"],groups:["Sports"]},{id:"ber",name:"Berlin",region:"Germany",lat:52.52,lng:13.405,tz:"Europe/Berlin",tags:["cet","bundesliga"],groups:["Sports"]},{id:"fra",name:"Frankfurt",region:"Germany",lat:50.1109,lng:8.6821,tz:"Europe/Berlin",tags:[]},{id:"ams",name:"Amsterdam",region:"Netherlands",lat:52.3676,lng:4.9041,tz:"Europe/Amsterdam",tags:[]},{id:"mad",name:"Madrid",region:"Spain",lat:40.4168,lng:-3.7038,tz:"Europe/Madrid",tags:["laliga","sports"],groups:["Sports"]},{id:"bcn",name:"Barcelona",region:"Spain",lat:41.3874,lng:2.1686,tz:"Europe/Madrid",tags:["laliga","sports"],groups:["Sports"]},{id:"rom",name:"Rome",region:"Italy",lat:41.9028,lng:12.4964,tz:"Europe/Rome",tags:["seriea"],groups:["Sports"]},{id:"mil",name:"Milan",region:"Italy",lat:45.4642,lng:9.19,tz:"Europe/Rome",tags:["seriea"],groups:["Sports"]},{id:"zur",name:"Zurich",region:"Switzerland",lat:47.3769,lng:8.5417,tz:"Europe/Zurich",tags:[]},{id:"gen",name:"Geneva",region:"Switzerland",lat:46.2044,lng:6.1432,tz:"Europe/Zurich",tags:[]},{id:"sto",name:"Stockholm",region:"Sweden",lat:59.3293,lng:18.0686,tz:"Europe/Stockholm",tags:[]},{id:"mos",name:"Moscow",region:"Russia",lat:55.7558,lng:37.6173,tz:"Europe/Moscow",tags:["msk"]},{id:"ist",name:"Istanbul",region:"Turkey",lat:41.0082,lng:28.9784,tz:"Europe/Istanbul",tags:[]},{id:"ath",name:"Athens",region:"Greece",lat:37.9838,lng:23.7275,tz:"Europe/Athens",tags:[]},{id:"lis",name:"Lisbon",region:"Portugal",lat:38.7223,lng:-9.1393,tz:"Europe/Lisbon",tags:["wet"]},{id:"dub",name:"Dublin",region:"Ireland",lat:53.3498,lng:-6.2603,tz:"Europe/Dublin",tags:[]},{id:"waw",name:"Warsaw",region:"Poland",lat:52.2297,lng:21.0122,tz:"Europe/Warsaw",tags:[]},{id:"vie",name:"Vienna",region:"Austria",lat:48.2082,lng:16.3738,tz:"Europe/Vienna",tags:[]},{id:"prg",name:"Prague",region:"Czechia",lat:50.0755,lng:14.4378,tz:"Europe/Prague",tags:[]},{id:"dxb",name:"Dubai",region:"UAE",lat:25.2048,lng:55.2708,tz:"Asia/Dubai",tags:["gst","f1"],groups:["Sports"]},{id:"auh",name:"Abu Dhabi",region:"UAE",lat:24.4539,lng:54.3773,tz:"Asia/Dubai",tags:["f1"],groups:["Sports"]},{id:"riy",name:"Riyadh",region:"Saudi Arabia",lat:24.7136,lng:46.6753,tz:"Asia/Riyadh",tags:[]},{id:"tlv",name:"Tel Aviv",region:"Israel",lat:32.0853,lng:34.7818,tz:"Asia/Jerusalem",tags:[]},{id:"cai",name:"Cairo",region:"Egypt",lat:30.0444,lng:31.2357,tz:"Africa/Cairo",tags:[]},{id:"jnb",name:"Johannesburg",region:"South Africa",lat:-26.2041,lng:28.0473,tz:"Africa/Johannesburg",tags:["sast"]},{id:"lag",name:"Lagos",region:"Nigeria",lat:6.5244,lng:3.3792,tz:"Africa/Lagos",tags:[]},{id:"nbo",name:"Nairobi",region:"Kenya",lat:-1.2921,lng:36.8219,tz:"Africa/Nairobi",tags:[]},{id:"cas",name:"Casablanca",region:"Morocco",lat:33.5731,lng:-7.5898,tz:"Africa/Casablanca",tags:[]},{id:"tyo",name:"Tokyo",region:"Japan",lat:35.6762,lng:139.6503,tz:"Asia/Tokyo",tags:["jst","sports","mlb","f1"],groups:["Sports"]},{id:"osa",name:"Osaka",region:"Japan",lat:34.6937,lng:135.5023,tz:"Asia/Tokyo",tags:[]},{id:"seo",name:"Seoul",region:"South Korea",lat:37.5665,lng:126.978,tz:"Asia/Seoul",tags:["kst","kospi"]},{id:"sha",name:"Shanghai",region:"China",lat:31.2304,lng:121.4737,tz:"Asia/Shanghai",tags:["cst","china","sse"]},{id:"bj",name:"Beijing",region:"China",lat:39.9042,lng:116.4074,tz:"Asia/Shanghai",tags:[]},{id:"hkg",name:"Hong Kong",region:"China",lat:22.3193,lng:114.1694,tz:"Asia/Hong_Kong",tags:["hkt","hkex"]},{id:"sgp",name:"Singapore",region:"Singapore",lat:1.3521,lng:103.8198,tz:"Asia/Singapore",tags:["sgt","f1"],groups:["Sports"]},{id:"bkk",name:"Bangkok",region:"Thailand",lat:13.7563,lng:100.5018,tz:"Asia/Bangkok",tags:[]},{id:"jak",name:"Jakarta",region:"Indonesia",lat:-6.2088,lng:106.8456,tz:"Asia/Jakarta",tags:[]},{id:"mnl",name:"Manila",region:"Philippines",lat:14.5995,lng:120.9842,tz:"Asia/Manila",tags:[]},{id:"del",name:"New Delhi",region:"India",lat:28.6139,lng:77.209,tz:"Asia/Kolkata",tags:["ist","india"]},{id:"mum",name:"Mumbai",region:"India",lat:19.076,lng:72.8777,tz:"Asia/Kolkata",tags:["nse","bse","ipl"],groups:["Sports"]},{id:"kar",name:"Karachi",region:"Pakistan",lat:24.8607,lng:67.0011,tz:"Asia/Karachi",tags:[]},{id:"tpe",name:"Taipei",region:"Taiwan",lat:25.033,lng:121.5654,tz:"Asia/Taipei",tags:[]},{id:"han",name:"Hanoi",region:"Vietnam",lat:21.0278,lng:105.8342,tz:"Asia/Ho_Chi_Minh",tags:[]},{id:"sgn",name:"Ho Chi Minh City",region:"Vietnam",lat:10.8231,lng:106.6297,tz:"Asia/Ho_Chi_Minh",tags:[]},{id:"kul",name:"Kuala Lumpur",region:"Malaysia",lat:3.139,lng:101.6869,tz:"Asia/Kuala_Lumpur",tags:[]},{id:"syd",name:"Sydney",region:"Australia",lat:-33.8688,lng:151.2093,tz:"Australia/Sydney",tags:["aest","aedt","asx","cricket"],groups:["Sports"]},{id:"mel",name:"Melbourne",region:"Australia",lat:-37.8136,lng:144.9631,tz:"Australia/Melbourne",tags:["sports","afl","f1"],groups:["Sports"]},{id:"per",name:"Perth",region:"Australia",lat:-31.9505,lng:115.8605,tz:"Australia/Perth",tags:[]},{id:"akl",name:"Auckland",region:"New Zealand",lat:-36.8509,lng:174.7645,tz:"Pacific/Auckland",tags:["nzst","nzdt"]},{id:"hon",name:"Honolulu",region:"USA",lat:21.3069,lng:-157.8583,tz:"Pacific/Honolulu",tags:["hst"]},{id:"wlg",name:"Wellington",region:"New Zealand",lat:-41.2865,lng:174.7762,tz:"Pacific/Auckland",tags:[]},{id:"dps",name:"Denpasar",region:"Indonesia",lat:-8.6705,lng:115.2126,tz:"Asia/Makassar",tags:["bali","denpasar","wita","indonesia"],groups:["Sports"]},{id:"sub",name:"Surabaya",region:"Indonesia",lat:-7.2575,lng:112.7521,tz:"Asia/Jakarta",tags:[]},{id:"yia",name:"Yogyakarta",region:"Indonesia",lat:-7.7956,lng:110.3695,tz:"Asia/Jakarta",tags:[]},{id:"upg",name:"Makassar",region:"Indonesia",lat:-5.1477,lng:119.4327,tz:"Asia/Makassar",tags:["wita"]},{id:"djj",name:"Jayapura",region:"Indonesia",lat:-2.5916,lng:140.669,tz:"Asia/Jayapura",tags:["wit"]},{id:"bah",name:"Sakhir",region:"Bahrain",lat:26.0325,lng:50.5106,tz:"Asia/Bahrain",tags:["bahrain","f1","sakhir"],groups:["Sports"]},{id:"jed",name:"Jeddah",region:"Saudi Arabia",lat:21.6319,lng:39.1044,tz:"Asia/Riyadh",tags:["f1","saudi"],groups:["Sports"]},{id:"mio",name:"Miami Gardens",region:"USA",lat:25.9581,lng:-80.2389,tz:"America/New_York",tags:["f1","miami gp"],groups:["Sports"]},{id:"imo",name:"Imola",region:"Italy",lat:44.3439,lng:11.7167,tz:"Europe/Rome",tags:["f1","emilia romagna"],groups:["Sports"]},{id:"mon",name:"Monaco",region:"Monaco",lat:43.7347,lng:7.4206,tz:"Europe/Monaco",tags:["f1","monte carlo"],groups:["Sports"]},{id:"yul",name:"Montreal",region:"Canada",lat:45.5017,lng:-73.5673,tz:"America/Toronto",tags:["f1","canadian gp"],groups:["Sports"]},{id:"red",name:"Spielberg",region:"Austria",lat:47.2197,lng:14.7647,tz:"Europe/Vienna",tags:["f1","red bull ring"],groups:["Sports"]},{id:"sil",name:"Silverstone",region:"UK",lat:52.0786,lng:-1.0169,tz:"Europe/London",tags:["f1","british gp"],groups:["Sports"]},{id:"hun",name:"Mogyor\xF3d",region:"Hungary",lat:47.5789,lng:19.2486,tz:"Europe/Budapest",tags:["f1","hungaroring"],groups:["Sports"]},{id:"spa",name:"Stavelot",region:"Belgium",lat:50.4372,lng:5.9714,tz:"Europe/Brussels",tags:["f1","spa"],groups:["Sports"]},{id:"zan",name:"Zandvoort",region:"Netherlands",lat:52.3888,lng:4.5409,tz:"Europe/Amsterdam",tags:["f1","dutch gp"],groups:["Sports"]},{id:"mnz",name:"Monza",region:"Italy",lat:45.6156,lng:9.2811,tz:"Europe/Rome",tags:["f1","italian gp"],groups:["Sports"]},{id:"bak",name:"Baku",region:"Azerbaijan",lat:40.3725,lng:49.8533,tz:"Asia/Baku",tags:["f1"],groups:["Sports"]},{id:"suz",name:"Suzuka",region:"Japan",lat:34.8431,lng:136.5407,tz:"Asia/Tokyo",tags:["f1","japanese gp"],groups:["Sports"]},{id:"lus",name:"Lusail",region:"Qatar",lat:25.49,lng:51.4542,tz:"Asia/Qatar",tags:["f1","qatar"],groups:["Sports"]},{id:"aus_f1",name:"Austin",region:"USA",lat:30.1328,lng:-97.6411,tz:"America/Chicago",tags:["f1","cota"],groups:["Sports"]},{id:"lvg",name:"Las Vegas",region:"USA",lat:36.1147,lng:-115.1728,tz:"America/Los_Angeles",tags:["f1","las vegas"],groups:["Sports"]},{id:"yas",name:"Yas Island",region:"UAE",lat:24.4672,lng:54.6031,tz:"Asia/Dubai",tags:["f1","abu dhabi"],groups:["Sports"]},{id:"wim",name:"Wimbledon",region:"UK",lat:51.434,lng:-.214,tz:"Europe/London",tags:["tennis","wimbledon"],groups:["Sports"]},{id:"flush",name:"Flushing",region:"USA",lat:40.75,lng:-73.847,tz:"America/New_York",tags:["tennis","us open"],groups:["Sports"]},{id:"doh",name:"Doha",region:"Qatar",lat:25.2854,lng:51.531,tz:"Asia/Qatar",tags:["esports","sports"]},{id:"kat",name:"Katowice",region:"Poland",lat:50.2649,lng:19.0238,tz:"Europe/Warsaw",tags:["esports"],groups:["Sports"]},{id:"nyc_wc",name:"East Rutherford",region:"USA",lat:40.8135,lng:-74.0745,tz:"America/New_York",tags:["world cup","metlife"],groups:["Sports"]},{id:"atl",name:"Atlanta",region:"USA",lat:33.755,lng:-84.401,tz:"America/New_York",tags:["world cup","nfl"],groups:["Sports"]},{id:"hou",name:"Houston",region:"USA",lat:29.6847,lng:-95.4107,tz:"America/Chicago",tags:["world cup"],groups:["Sports"]},{id:"bos",name:"Boston",region:"USA",lat:42.3467,lng:-71.0972,tz:"America/New_York",tags:["sports"],groups:["Sports"]},{id:"kc",name:"Kansas City",region:"USA",lat:39.0489,lng:-94.4839,tz:"America/Chicago",tags:["world cup"],groups:["Sports"]},{id:"gua",name:"Guadalajara",region:"Mexico",lat:20.6818,lng:-103.462,tz:"America/Mexico_City",tags:["world cup"],groups:["Sports"]},{id:"mty",name:"Monterrey",region:"Mexico",lat:25.6693,lng:-100.2445,tz:"America/Monterrey",tags:["world cup"],groups:["Sports"]},{id:"cpt",name:"Cape Town",region:"South Africa",lat:-33.9249,lng:18.4241,tz:"Africa/Johannesburg",tags:[]},{id:"hel",name:"Helsinki",region:"Finland",lat:60.1699,lng:24.9384,tz:"Europe/Helsinki",tags:[]},{id:"osl",name:"Oslo",region:"Norway",lat:59.9139,lng:10.7522,tz:"Europe/Oslo",tags:[]},{id:"cph",name:"Copenhagen",region:"Denmark",lat:55.6761,lng:12.5683,tz:"Europe/Copenhagen",tags:[]},{id:"bru",name:"Brussels",region:"Belgium",lat:50.8503,lng:4.3517,tz:"Europe/Brussels",tags:[]},{id:"bud",name:"Budapest",region:"Hungary",lat:47.4979,lng:19.0402,tz:"Europe/Budapest",tags:[]},{id:"buc",name:"Bucharest",region:"Romania",lat:44.4268,lng:26.1025,tz:"Europe/Bucharest",tags:[]},{id:"zag",name:"Zagreb",region:"Croatia",lat:45.815,lng:15.9819,tz:"Europe/Zagreb",tags:[]},{id:"bej",name:"Belgrade",region:"Serbia",lat:44.7866,lng:20.4489,tz:"Europe/Belgrade",tags:[]},{id:"kiv",name:"Kyiv",region:"Ukraine",lat:50.4501,lng:30.5234,tz:"Europe/Kyiv",tags:[]},{id:"phx",name:"Phoenix",region:"USA",lat:33.4484,lng:-112.074,tz:"America/Phoenix",tags:["mst"]},{id:"anc",name:"Anchorage",region:"USA",lat:61.2181,lng:-149.9003,tz:"America/Anchorage",tags:[]},{id:"det",name:"Detroit",region:"USA",lat:42.3314,lng:-83.0458,tz:"America/Detroit",tags:[]},{id:"msp",name:"Minneapolis",region:"USA",lat:44.9778,lng:-93.265,tz:"America/Chicago",tags:[]},{id:"nola",name:"New Orleans",region:"USA",lat:29.9511,lng:-90.0715,tz:"America/Chicago",tags:[]},{id:"pdx",name:"Portland",region:"USA",lat:45.5152,lng:-122.6784,tz:"America/Los_Angeles",tags:[]},{id:"bne",name:"Brisbane",region:"Australia",lat:-27.4698,lng:153.0251,tz:"Australia/Brisbane",tags:[]},{id:"adl",name:"Adelaide",region:"Australia",lat:-34.9285,lng:138.6007,tz:"Australia/Adelaide",tags:[]},{id:"chc",name:"Christchurch",region:"New Zealand",lat:-43.5321,lng:172.6362,tz:"Pacific/Auckland",tags:[]},{id:"isb",name:"Islamabad",region:"Pakistan",lat:33.6844,lng:73.0479,tz:"Asia/Karachi",tags:[]},{id:"dac",name:"Dhaka",region:"Bangladesh",lat:23.8103,lng:90.4125,tz:"Asia/Dhaka",tags:[]},{id:"cmb",name:"Colombo",region:"Sri Lanka",lat:6.9271,lng:79.8612,tz:"Asia/Colombo",tags:[]}],Fi=["nyc","lon","tyo","syd","dxb","sgp","del","sao","ber","la"];function _t(i){return Gt.find(e=>e.id===i)}function po(i){if(!Array.isArray(i))return[...Fi];let e=i.filter(t=>_t(t));return e.length?e:[...Fi]}function Et(i,e,t={}){let{hour12:n=!1,withSeconds:s=!0,withDate:r=!1}=t;try{let a=new Intl.DateTimeFormat(void 0,{timeZone:e,hour:"2-digit",minute:"2-digit",second:s?"2-digit":void 0,hour12:n}).format(i);if(!r)return a;let o=new Intl.DateTimeFormat(void 0,{timeZone:e,weekday:"short",month:"short",day:"numeric"}).format(i);return{time:a,day:o}}catch{return r?{time:"\u2014",day:"\u2014"}:"\u2014"}}function mo(i,e){try{return new Intl.DateTimeFormat("en-US",{timeZone:e,timeZoneName:"shortOffset"}).formatToParts(i).find(n=>n.type==="timeZoneName")?.value||""}catch{return""}}function Hn(){return Intl.DateTimeFormat().resolvedOptions().timeZone}function Eu(i,e){try{let t=new Intl.DateTimeFormat("en-US",{timeZone:e,hour:"numeric",minute:"numeric",hour12:!1}).formatToParts(i),n=Number(t.find(r=>r.type==="hour")?.value||0),s=Number(t.find(r=>r.type==="minute")?.value||0);return n===24&&(n=0),n+s/60}catch{return 12}}function Yl(i,e){let t=Eu(i,e);return t>=6&&t<18.5}function hr(i,e,t){if(!t)return!0;let n=yn(i,e,1);return n.x*t.x+n.y*t.y+n.z*t.z>-.05}function ur(i=new Date){let t=180-(i.getUTCHours()+i.getUTCMinutes()/60+i.getUTCSeconds()/3600)*15,n=wu(i),s=yn(n,t,1),r=Math.hypot(s.x,s.y,s.z)||1;return{x:s.x/r,y:s.y/r,z:s.z/r}}function wu(i){let e=Date.UTC(i.getUTCFullYear(),0,0),t=(i.getTime()-e)/864e5;return-23.44*Math.cos(2*Math.PI/365*(t+10))}function yn(i,e,t){let n=(90-i)*(Math.PI/180),s=(e+180)*(Math.PI/180),r=-t*Math.sin(n)*Math.cos(s),a=t*Math.sin(n)*Math.sin(s),o=t*Math.cos(n);return{x:r,y:o,z:a}}function ql(i,e){try{let r=(new Intl.DateTimeFormat("en-US",{timeZone:e,timeZoneName:"longOffset"}).formatToParts(i).find(c=>c.type==="timeZoneName")?.value||"GMT").match(/([+-])(\d{1,2})(?::(\d{2}))?/);if(!r)return 0;let a=r[1]==="-"?-1:1,o=Number(r[2]),l=Number(r[3]||0);return a*(o*60+l)}catch{return 0}}function ui(i,e,t){let n=ql(i,e),s=ql(i,t),r=n-s,a=Math.abs(r),o=Math.floor(a/60),l=a%60,c;r===0?c="same as local":r>0?c=l?`${o}h ${l}m ahead`:`${o}h ahead`:c=l?`${o}h ${l}m behind`:`${o}h behind`;let h=new Intl.DateTimeFormat("en-CA",{timeZone:e,year:"numeric",month:"2-digit",day:"2-digit"}).format(i),u=new Intl.DateTimeFormat("en-CA",{timeZone:t,year:"numeric",month:"2-digit",day:"2-digit"}).format(i),f="";return h>u?f="next calendar day there":h<u&&(f="previous calendar day there"),{minutes:r,label:c,dayNote:f,dayTarget:h,dayLocal:u}}function go(i,e,t,n){if(!i||!e||!t||!n)return null;let[s,r]=e.split(":").map(Number),[a,o,l]=i.split("-").map(Number);if([s,r,a,o,l].some(p=>Number.isNaN(p)))return null;let c=vs(a,o,l,s,r,t);if(!c)return null;let h=Et(c,n,{withSeconds:!1,withDate:!0,hour12:!0}),u=Et(c,t,{withSeconds:!1,withDate:!0,hour12:!0}),f=Et(c,n,{withSeconds:!1,withDate:!0,hour12:!1});return{instant:c,local:h,source:u,local24:f}}function vs(i,e,t,n,s,r){let a=Date.UTC(i,e-1,t-1,0,0,0),o=Date.UTC(i,e-1,t+2,0,0,0),l=null,c=!1;for(let h=0;h<48;h++){let u=Math.floor((a+o)/2),f=new Date(u),p=_s(f,r);if(!p)break;let y=p.year*1e8+p.month*1e6+p.day*1e4+p.hour*100+p.minute,v=i*1e8+e*1e6+t*1e4+n*100+s;if(y===v){if(l=f,c=!0,o=u,a=u-60*1e3,h>10&&c)break;continue}y<v?a=u+1:o=u-1,l=f}if(l&&(l=new Date(Math.floor(l.getTime()/6e4)*6e4)),l){let h=_s(l,r);if(h&&h.year===i&&h.month===e&&h.day===t&&h.hour===n&&h.minute===s)return l;let u=Date.UTC(i,e-1,t-1,0,0,0);for(let f=u;f<u+3*864e5;f+=6e4){let p=new Date(f),y=_s(p,r);if(y&&y.year===i&&y.month===e&&y.day===t&&y.hour===n&&y.minute===s)return p}}return l}function _s(i,e){try{let t=new Intl.DateTimeFormat("en-US",{timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!1}).formatToParts(i),n=r=>Number(t.find(a=>a.type===r)?.value),s=n("hour");return s===24&&(s=0),{year:n("year"),month:n("month"),day:n("day"),hour:s,minute:n("minute")}}catch{return null}}function yo(i,e,t,n,s,r=!1){let a=go(i,e,t,s);if(!a)return null;let o=n.map(l=>{let c=Et(a.instant,l.tz,{withSeconds:!1,withDate:!0,hour12:r}),h=ui(a.instant,l.tz,s),u=mo(a.instant,l.tz);return{id:l.id,name:l.name,tz:l.tz,time:c.time,day:c.day,offset:u,deltaLabel:h.label,dayNote:h.dayNote,minutes:h.minutes}});return{instant:a.instant,local:a.local,source:a.source,rows:o}}function $l(i,e,t,n){return[i||"Event time conversion",e?`Source: ${e}`:"",n?`Your local: ${n.time} \xB7 ${n.day}`:"","",...t.map(r=>`${r.name}: ${r.time} (${r.day}) \xB7 ${r.deltaLabel}${r.dayNote?` \xB7 ${r.dayNote}`:""}`)].filter(Boolean).join(`
`)}function Zl(i=new Date,e=Hn()){let t=R=>String(R).padStart(2,"0"),n=_s(i,e),s=`${n.year}-${t(n.month)}-${t(n.day)}`,r=new Date(i.getTime()+2*36e5),a=_s(r,e),o=`${a.year}-${t(a.month)}-${t(a.day)}`,l=`${t(a.hour)}:${t(a.minute)}`,c="20:00",h=s,u=new Date(Date.UTC(n.year,n.month-1,n.day,12)),f=new Intl.DateTimeFormat("en-US",{timeZone:e,weekday:"short"}).format(i),v=(6-({Sun:0,Mon:1,Tue:2,Wed:3,Thu:4,Fri:5,Sat:6}[f]??0)+7)%7||7,m=new Date(i.getTime()+v*864e5),d=_s(m,e),w=`${d.year}-${t(d.month)}-${t(d.day)}`,E=new Intl.DateTimeFormat("en-CA",{timeZone:"America/New_York",year:"numeric",month:"2-digit",day:"2-digit"}).format(i),S=new Intl.DateTimeFormat("en-CA",{timeZone:"Europe/London",year:"numeric",month:"2-digit",day:"2-digit"}).format(i);return[{id:"in2h",label:"In 2 hours",dateStr:o,timeStr:l,fromTz:e},{id:"tonight",label:"Tonight 8pm",dateStr:h,timeStr:c,fromTz:e},{id:"satnoon",label:"Sat noon (you)",dateStr:w,timeStr:"12:00",fromTz:e},{id:"lonko",label:"London 3pm kickoff",dateStr:S,timeStr:"15:00",fromTz:"Europe/London"},{id:"nyprime",label:"NY 8pm primetime",dateStr:E,timeStr:"20:00",fromTz:"America/New_York"}]}function Kl(i,e){let t=e.trim().toLowerCase();if(!t)return[];let n=[];for(let s of i){let r=s.name.toLowerCase(),a=(s.region||"").toLowerCase(),o=s.tz.toLowerCase(),l=(s.tags||[]).map(u=>u.toLowerCase()),c=0;r===t?c=100:r.startsWith(t)?c=80:r.includes(t)&&(c=50),l.some(u=>u===t)?c=Math.max(c,70):l.some(u=>u.startsWith(t)||u.includes(t))&&(c=Math.max(c,40)),o.includes(t)&&(c=Math.max(c,45)),(a.startsWith(t)||a.includes(t))&&(c=Math.max(c,30));let h=t.split(/\s+/);h.length>1&&h.every(u=>(r+" "+a+" "+l.join(" ")).includes(u))&&(c=Math.max(c,55)),c>0&&n.push({city:s,score:c})}return n.sort((s,r)=>r.score-s.score||s.city.name.localeCompare(r.city.name)),n.slice(0,12).map(s=>s.city)}function Jl(i=Hn(),e=new Date){return new Intl.DateTimeFormat("en-CA",{timeZone:i,year:"numeric",month:"2-digit",day:"2-digit"}).format(e)}var Tu="apex-timezones-pins";function Au(i){return Kl(Gt,i)}function jl(i){if(Array.isArray(i)&&i.length)return po(i);try{let e=localStorage.getItem(Tu);if(e){let t=JSON.parse(e);if(Array.isArray(t)&&t.length)return po(t)}}catch{}return[...Fi]}function Cu(i){localStorage.setItem(Tu,JSON.stringify(i))}function Ql(i,e=new Date,t=!1,n=null){let{time:s,day:r}=Et(e,i.tz,{withSeconds:!0,withDate:!0,hour12:t}),a=mo(e,i.tz),o=n?hr(i.lat,i.lng,n):Yl(e,i.tz);return{time:s,day:r,offset:a,isDay:o}}var cn=1.6,Ru=cn*1.012,N0=6,_o=class{constructor(e,t={}){this.canvas=e,this.callbacks=t,this.pinnedIds=new Set,this.selectedId=null,this.localCityId=null,this.homeCityId=null,this.pins=new Map,this.labels=new Map,this.raycaster=new Qs,this.pointer=new we,this.ready=!1,this._hoverId=null,this._paused=!1,this._autoRotate=!0,this._showGrid=!0,this._showBands=!1,this._quality="high",this._sunDir=ur(new Date),this._ptrDown=null,this._labelLayer=null,this._initRenderer(),this._initScene(),this._initCamera(),this._initControls(),this._initLights(),this._bindEvents(),this._initLabelLayer()}async init(){await this._loadEarth(),this._createStars(),this._createAtmosphere(),this._createPins(),this._createTzBands(),this._estimateLocalPin(),this.ready=!0,this._animate(),this.callbacks.onReady?.()}setPaused(e){this._paused=!!e,!this._paused&&this.ready&&(cancelAnimationFrame(this._raf),this._animate())}setAutoRotate(e){this._autoRotate=!!e,this.controls.autoRotate=this._autoRotate}setShowGrid(e){this._showGrid=!!e,this.gridGroup&&(this.gridGroup.visible=this._showGrid)}setShowBands(e){this._showBands=!!e,this.bandGroup&&(this.bandGroup.visible=this._showBands)}setQuality(e){this._quality=e;let t=e==="low"?1:e==="medium"?Math.min(window.devicePixelRatio||1,1.5):Math.min(window.devicePixelRatio||1,2);this.renderer.setPixelRatio(t);let n=e==="low"?48:96;if(this.earth&&this._earthSegs!==n&&(this._earthSegs=n,this.earth.geometry.dispose(),this.earth.geometry=new Ut(cn,n,n),this.clouds)){let s=Math.min(n,64);this.clouds.geometry.dispose(),this.clouds.geometry=new Ut(cn*1.012,s,s)}}setPinned(e){this.pinnedIds=new Set(e),this._refreshPinStyles(),this._updateLabelsVisibility()}setHomeCity(e){this.homeCityId=e,this.localCityId=e||this.localCityId,this._refreshPinStyles()}_sportCoreGeometry(e){switch(e){case"octagon":return new wi(.02,.02,.01,8);case"wave":return new ri(.016,.006,6,12,Math.PI);case"flag":case"helmet":return new rs(.018,.036,5);case"ball":case"oval":return new Ut(.018,10,10);case"wheel":return new ri(.016,.005,6,14);case"tee":return new rs(.014,.032,6);case"bat":return new ni(.01,.034,.01);case"track":return new ri(.017,.004,6,16);case"racket":return new ri(.015,.005,6,12);default:return new Xs(.022,0)}}setEventMarkers(e=[]){if(!this.earthGroup)return;if(this.eventMarkers)for(let n of this.eventMarkers.keys()){let s=this.labels.get("ev:"+n);s&&(s.remove(),this.labels.delete("ev:"+n))}this.eventGroup&&(this.earthGroup.remove(this.eventGroup),this.eventGroup.traverse(n=>{n.geometry&&n.geometry.dispose(),n.material&&(Array.isArray(n.material)?n.material.forEach(s=>s.dispose()):n.material.dispose())})),this.eventMarkers=new Map,this.eventGroup=new Ht,this.earthGroup.add(this.eventGroup);let t=[];for(let n of e){if(typeof n.lat!="number"||typeof n.lng!="number")continue;let s=yn(n.lat,n.lng,Ru*1.02),r=n.highlight?16739275:typeof n.color=="number"?n.color:16765286,a=n.live||n.highlight?.048:.036,o=new at(new Ut(a,12,12),new Kt({color:r,transparent:!0,opacity:n.live?.55:.4,depthWrite:!1})),l=new at(this._sportCoreGeometry(n.glyph),new Kt({color:r})),c=new Ht;c.add(o,l),c.position.set(s.x,s.y,s.z),c.lookAt(0,0,0),c.userData={event:n,core:l,glow:o,live:!!n.live,pulse:!!n.live||!!n.highlight};let h=new at(new Ut(.065,8,8),new Kt({visible:!1}));if(c.add(h),c.userData.hit=h,this.eventGroup.add(c),this.eventMarkers.set(n.id,c),this._labelLayer){let u=document.createElement("div");u.className="globe-label event-label"+(n.highlight?" active":"")+(n.live?" live":""),u.textContent=n.shortName||n.name||"Event",u.style.display="none",this._labelLayer.appendChild(u),this.labels.set("ev:"+n.id,u),t.push({id:n.id,priority:(n.highlight?3:0)+(n.live?2:0)})}}this._eventLabelPriority=new Map(t.map(n=>[n.id,n.priority])),this._updateLabelsVisibility()}clearEventMarkers(){this.setEventMarkers([])}selectCity(e,t=!0){if(this.selectedId=e,this._refreshPinStyles(),this._updateLabelsVisibility(),t&&e){let n=Gt.find(s=>s.id===e);n&&this.flyTo(n.lat,n.lng)}this.callbacks.onSelect?.(e)}flyTo(e,t,n=1.1){this._reducedMotion&&(n=Math.min(n,.35));let s=yn(e,t,cn*2.85),r=this.camera.position.clone(),a=new N(s.x,s.y,s.z),o=this.camera.position.length();a.setLength(Math.max(2.4,Math.min(o,5.5))),this._flyToken=(this._flyToken||0)+1;let l=this._flyToken,c=performance.now(),h=u=>{if(this._paused||l!==this._flyToken)return;let f=Math.min(1,(u-c)/(n*1e3)),p=f<.5?4*f*f*f:1-Math.pow(-2*f+2,3)/2;this.camera.position.lerpVectors(r,a,p),this.controls.target.set(0,0,0),this.controls.update(),f<1&&requestAnimationFrame(h)};requestAnimationFrame(h)}setReducedMotion(e){this._reducedMotion=!!e,e&&(this.controls.autoRotate=!1,this._autoRotate=!1)}updateClocks(e=new Date){this._sunDir=ur(e);for(let t of this.pins.values()){let n=t.userData.city;t.userData.isDay=hr(n.lat,n.lng,this._sunDir)}this._refreshPinStyles(),this.clouds&&!this._paused&&(this.clouds.rotation.y+=15e-5),this._updateSun(e),this._updateLabelsVisibility()}getSunDir(){return this._sunDir}resize(){let e=this.canvas.parentElement;if(!e)return;let t=e.clientWidth,n=e.clientHeight;t<2||n<2||(this.renderer.setSize(t,n,!1),this.camera.aspect=t/n,this.camera.updateProjectionMatrix(),this._labelLayer&&(this._labelLayer.style.width=t+"px",this._labelLayer.style.height=n+"px"))}dispose(){cancelAnimationFrame(this._raf),window.removeEventListener("resize",this._onResize),this.canvas.removeEventListener("pointermove",this._onPointerMove),this.canvas.removeEventListener("pointerdown",this._onPointerDown),this.canvas.removeEventListener("pointerup",this._onPointerUp),this.canvas.removeEventListener("pointerleave",this._onPointerLeave),this.renderer.dispose(),this._labelLayer?.remove()}_initRenderer(){this.renderer=new co({canvas:this.canvas,antialias:!0,alpha:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.renderer.setClearColor(0,0),this.renderer.outputColorSpace=Tt,this.renderer.toneMapping=ba,this.renderer.toneMappingExposure=1.15}_initScene(){this.scene=new Hs,this.earthGroup=new Ht,this.scene.add(this.earthGroup)}_initCamera(){let e=this.canvas.parentElement,t=e?.clientWidth||800,n=e?.clientHeight||600;this.camera=new Lt(42,t/n,.1,200),this.camera.position.set(.8,.55,4.2),this.renderer.setSize(t,n,!1)}_initControls(){this.controls=new fo(this.camera,this.canvas),this.controls.enableDamping=!0,this.controls.dampingFactor=.06,this.controls.rotateSpeed=.55,this.controls.zoomSpeed=.85,this.controls.minDistance=2.15,this.controls.maxDistance=8.5,this.controls.enablePan=!1,this.controls.autoRotate=!0,this.controls.autoRotateSpeed=.35}_initLights(){this.scene.add(new js(1713988,.55)),this.sunLight=new ls(16774368,2.4),this.sunLight.position.set(5,1,2),this.scene.add(this.sunLight);let e=new ls(5097983,.35);e.position.set(-4,-1,-3),this.scene.add(e),this.scene.add(new Ks(662067,132106,.45))}_initLabelLayer(){let e=document.createElement("div");e.className="globe-labels",e.style.cssText="position:absolute;inset:0;pointer-events:none;overflow:hidden;z-index:4;",this.canvas.parentElement.appendChild(e),this._labelLayer=e}async _loadEarth(){let e=new Zs,t=u=>new Promise((f,p)=>{e.load(u,f,void 0,p)}),n=u=>new URL(`../public/textures/${u}`,window.location.href).href,s,r,a;try{[s,r,a]=await Promise.all([t(n("earth_day.jpg")),t(n("earth_night.jpg")),t(n("earth_clouds.jpg"))])}catch(u){console.warn("Texture load failed",u),s=this._makeFallbackTexture("#1a6b9a","#1f8f4e"),r=this._makeFallbackTexture("#050a18","#1a3050"),a=this._makeFallbackTexture("#ffffff","#cccccc",.3)}for(let u of[s,r,a])u.colorSpace=Tt,u.anisotropy=this.renderer.capabilities.getMaxAnisotropy(),u.generateMipmaps=!0,u.minFilter=wn,u.magFilter=Zt;this._textures={dayMap:s,nightMap:r,cloudMap:a};let o=this._quality==="low"?48:96;this._earthSegs=o;let l=new Ut(cn,o,o),c=new kt({uniforms:{dayTexture:{value:s},nightTexture:{value:r},sunDirection:{value:new N(1,.2,.3).normalize()}},vertexShader:`
        varying vec2 vUv; varying vec3 vNormalW;
        void main() {
          vUv = uv;
          vec4 worldPos = modelMatrix * vec4(position, 1.0);
          vNormalW = normalize(mat3(modelMatrix) * normal);
          gl_Position = projectionMatrix * viewMatrix * worldPos;
        }`,fragmentShader:`
        uniform sampler2D dayTexture; uniform sampler2D nightTexture; uniform vec3 sunDirection;
        varying vec2 vUv; varying vec3 vNormalW;
        void main() {
          vec3 day = texture2D(dayTexture, vUv).rgb;
          vec3 night = texture2D(nightTexture, vUv).rgb;
          vec3 n = normalize(vNormalW);
          vec3 l = normalize(sunDirection);
          float ndotl = dot(n, l);
          // Soft terminator \u2014 denser sampling feel without higher-res textures
          float dayAmount = smoothstep(-0.08, 0.28, ndotl);
          float term = 1.0 - smoothstep(0.0, 0.35, abs(ndotl - 0.05));
          vec3 nightLit = night * 1.45 + vec3(0.015, 0.035, 0.07);
          // City lights pop a touch more on the night side
          nightLit += night * night * vec3(0.15, 0.12, 0.05);
          vec3 color = mix(nightLit, day * 1.04, dayAmount);
          // Ocean-ish specular on the lit side
          float spec = pow(max(ndotl, 0.0), 32.0) * 0.22;
          color += vec3(0.55, 0.72, 1.0) * spec * dayAmount;
          // Warm\u2192cool terminator glow
          color += vec3(1.0, 0.55, 0.25) * term * 0.12;
          color += vec3(0.25, 0.55, 1.0) * term * 0.06;
          gl_FragColor = vec4(color, 1.0);
        }`});this.earth=new at(l,c),this.earthGroup.add(this.earth),this.earthMat=c;let h=new Ut(cn*1.012,64,64);this.clouds=new at(h,new Ys({map:a,transparent:!0,opacity:.32,depthWrite:!1,side:on})),this.earthGroup.add(this.clouds),this._createGridOverlay()}_createGridOverlay(){this.gridGroup=new Ht;let e=new ii({color:5097983,transparent:!0,opacity:.07});for(let s=-60;s<=60;s+=30){let r=[];for(let a=0;a<=360;a+=4){let o=yn(s,a-180,cn*1.004);r.push(new N(o.x,o.y,o.z))}this.gridGroup.add(new si(new yt().setFromPoints(r),e))}for(let s=-180;s<180;s+=30){let r=[];for(let a=-90;a<=90;a+=4){let o=yn(a,s,cn*1.004);r.push(new N(o.x,o.y,o.z))}this.gridGroup.add(new si(new yt().setFromPoints(r),e))}let t=new ii({color:8057087,transparent:!0,opacity:.22}),n=[];for(let s=0;s<=360;s+=2){let r=yn(0,s-180,cn*1.006);n.push(new N(r.x,r.y,r.z))}this.gridGroup.add(new si(new yt().setFromPoints(n),t)),this.earthGroup.add(this.gridGroup)}_createTzBands(){this.bandGroup=new Ht,this.bandGroup.visible=!1;let e=[5097983,6222530,16765286,16739275];for(let t=0;t<24;t++){let n=-180+t*15,s=n+15,r=[];for(let o=-85;o<=85;o+=5){let l=yn(o,n+7.5,cn*1.008);r.push(new N(l.x,l.y,l.z))}let a=new ii({color:e[t%e.length],transparent:!0,opacity:.12});this.bandGroup.add(new si(new yt().setFromPoints(r),a))}this.earthGroup.add(this.bandGroup)}_createAtmosphere(){let e=new Ut(cn*1.1,64,64),t=new kt({vertexShader:"varying vec3 vNormal; void main(){ vNormal=normalize(normalMatrix*normal); gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:`varying vec3 vNormal; void main(){
        float intensity = pow(0.62 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.4);
        gl_FragColor = vec4(0.28, 0.72, 1.0, 1.0) * intensity * 1.05;
      }`,blending:hs,side:At,transparent:!0,depthWrite:!1});this.atmosphere=new at(e,t),this.scene.add(this.atmosphere);let n=new Ut(cn*1.02,48,48),s=new kt({vertexShader:"varying vec3 vNormal; void main(){ vNormal=normalize(normalMatrix*normal); gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:`varying vec3 vNormal; void main(){
        float fresnel = pow(1.0 - abs(dot(vNormal, vec3(0.0, 0.0, 1.0))), 3.0);
        gl_FragColor = vec4(0.4, 0.75, 1.0, fresnel * 0.18);
      }`,blending:hs,side:mn,transparent:!0,depthWrite:!1});this.earthGroup.add(new at(n,s))}_createStars(){let t=new Float32Array(8400),n=new Float32Array(2800*3);for(let r=0;r<2800;r++){let a=40+Math.random()*60,o=Math.random()*Math.PI*2,l=Math.acos(2*Math.random()-1);t[r*3]=a*Math.sin(l)*Math.cos(o),t[r*3+1]=a*Math.sin(l)*Math.sin(o),t[r*3+2]=a*Math.cos(l);let c=.7+Math.random()*.3;n[r*3]=c,n[r*3+1]=c,n[r*3+2]=c}let s=new yt;s.setAttribute("position",new Dt(t,3)),s.setAttribute("color",new Dt(n,3)),this.stars=new Gs(s,new ss({size:.08,vertexColors:!0,transparent:!0,opacity:.9,sizeAttenuation:!0,depthWrite:!1})),this.scene.add(this.stars)}_createPins(){this.pinGroup=new Ht,this.earthGroup.add(this.pinGroup);for(let e of Gt){let t=yn(e.lat,e.lng,Ru),n=new at(new Ut(.028,12,12),new Kt({color:5097983,transparent:!0,opacity:.35,depthWrite:!1})),s=new at(new Ut(.014,12,12),new Kt({color:11071743})),r=new at(new wi(.003,.003,.04,6),new Kt({color:5097983,transparent:!0,opacity:.55}));r.position.y=-.02;let a=new Ht;a.add(n,s,r),a.position.set(t.x,t.y,t.z),a.lookAt(0,0,0),a.rotateX(Math.PI/2);let o=new at(new Ut(.055,8,8),new Kt({visible:!1}));a.add(o),a.userData={city:e,core:s,glow:n,stem:r,hit:o,isDay:!0,baseScale:1},this.pinGroup.add(a),this.pins.set(e.id,a);let l=document.createElement("div");l.className="globe-label",l.textContent=e.name,l.style.display="none",this._labelLayer.appendChild(l),this.labels.set(e.id,l)}}_estimateLocalPin(){if(this.homeCityId&&this.pins.has(this.homeCityId)){this.localCityId=this.homeCityId;return}let e=Hn(),t=Gt.find(n=>n.tz===e);if(!t){let n=e.split("/")[0];t=Gt.find(s=>s.tz.startsWith(n+"/"))}t&&(this.localCityId=t.id)}setPinDensity(e="auto"){this._pinDensity=e||"auto",this._refreshPinStyles(),this._updateLabelsVisibility()}_refreshPinStyles(){let e=this._pinDensity||"auto";for(let[t,n]of this.pins){let{core:s,glow:r,stem:a,isDay:o}=n.userData,l=t===this.selectedId,c=this.pinnedIds.has(t),h=t===this.localCityId||t===this.homeCityId,u=t===this._hoverId,f=!0;if(e==="pinned")f=l||c||h||u;else if(e==="auto"){let v=this.camera?.position.length()??4;!l&&!c&&!h&&!u&&v>3.8&&(f=!1)}if(n.visible=f,!f)continue;let p;l?p=16739275:h?p=16765286:c?p=6222530:o?p=8050687:p=5925588,s.material.color.setHex(p),r.material.color.setHex(p),a.material.color.setHex(p);let y=l?1.7:h?1.4:c?1.28:u?1.15:.92;n.userData.baseScale=y,(!l||this._paused)&&n.scale.setScalar(y),r.material.opacity=l?.6:h?.5:c?.42:.22,n.userData.pulse=c&&!o||h}}_updateLabelsVisibility(){if(!this.camera||!this._labelLayer)return;let t=this.camera.position.length()<3.4,n=new N;for(let[s,r]of this.pins){let a=this.labels.get(s);if(!a)continue;if(!(s===this.selectedId||s===this._hoverId||t&&(this.pinnedIds.has(s)||s===this.localCityId))){a.style.display="none";continue}n.copy(r.position).normalize();let l=this.camera.position.clone().normalize();if(n.dot(l)<.15){a.style.display="none";continue}n.copy(r.position).project(this.camera);let c=(n.x*.5+.5)*this._labelLayer.clientWidth,h=(-n.y*.5+.5)*this._labelLayer.clientHeight;a.style.display="block",a.style.transform=`translate(-50%, -120%) translate(${c}px, ${h}px)`,a.classList.toggle("active",s===this.selectedId)}if(this.eventMarkers){let s=[];for(let[l,c]of this.eventMarkers){let h=this.labels.get("ev:"+l);if(!h)continue;n.copy(c.position).normalize();let u=this.camera.position.clone().normalize(),f=n.dot(u);if(f<.12){h.style.display="none";continue}let p=this._hoverEventId===l||c.userData.event?.highlight||c.userData.live,y=(this._eventLabelPriority?.get(l)||0)+f+(p?5:0);if(!p&&!t){h.style.display="none";continue}n.copy(c.position).project(this.camera);let v=(n.x*.5+.5)*this._labelLayer.clientWidth,m=(-n.y*.5+.5)*this._labelLayer.clientHeight;s.push({el:h,x:v,y:m,pri:y,force:p})}s.sort((l,c)=>c.pri-l.pri);let r=[],a=36,o=0;for(let l of s){if(r.some(h=>Math.hypot(h.x-l.x,h.y-l.y)<a)&&!l.force){l.el.style.display="none";continue}if(o>=6&&!l.force){l.el.style.display="none";continue}l.el.style.display="block",l.el.style.transform=`translate(-50%, -130%) translate(${l.x}px, ${l.y}px)`,r.push(l),o++}}}_updateSun(e){let t=ur(e);this._sunDir=t,this.earthMat&&this.earthMat.uniforms.sunDirection.value.set(t.x,t.y,t.z),this.sunLight.position.set(t.x*10,t.y*10,t.z*10)}_makeFallbackTexture(e,t,n=1){let r=document.createElement("canvas");r.width=256,r.height=256;let a=r.getContext("2d"),o=a.createLinearGradient(0,0,256,256);o.addColorStop(0,e),o.addColorStop(1,t),a.fillStyle=o,a.globalAlpha=n,a.fillRect(0,0,256,256);let l=new Vs(r);return l.colorSpace=Tt,l}_bindEvents(){this._onResize=()=>this.resize(),window.addEventListener("resize",this._onResize),this._onPointerMove=e=>this._handlePointer(e,!1),this._onPointerDown=e=>{this._ptrDown={x:e.clientX,y:e.clientY,t:performance.now()},this._handlePointer(e,!1)},this._onPointerUp=e=>{if(!this._ptrDown)return;let t=e.clientX-this._ptrDown.x,n=e.clientY-this._ptrDown.y,r=Math.hypot(t,n)<N0;this._ptrDown=null,r&&this._handlePointer(e,!0)},this._onPointerLeave=()=>{this._ptrDown=null,this._hoverId=null,this.callbacks.onHover?.(null),this.canvas.style.cursor="grab",this._updateLabelsVisibility()},this.canvas.addEventListener("pointermove",this._onPointerMove),this.canvas.addEventListener("pointerdown",this._onPointerDown),this.canvas.addEventListener("pointerup",this._onPointerUp),this.canvas.addEventListener("pointerleave",this._onPointerLeave),this.controls.addEventListener("start",()=>{this.controls.autoRotate=!1}),this.controls.addEventListener("end",()=>{clearTimeout(this._autoRotateTimer),this._autoRotateTimer=setTimeout(()=>{this.controls.autoRotate=this._autoRotate},4e3)})}_handlePointer(e,t){let n=this.canvas.getBoundingClientRect();if(this.pointer.x=(e.clientX-n.left)/n.width*2-1,this.pointer.y=-((e.clientY-n.top)/n.height)*2+1,this.raycaster.setFromCamera(this.pointer,this.camera),this.eventMarkers&&this.eventMarkers.size){let r=[];for(let a of this.eventMarkers.values()){let o=this.raycaster.intersectObject(a.userData.hit,!1);o.length&&r.push({marker:a,dist:o[0].distance})}if(r.sort((a,o)=>a.dist-o.dist),r.length){let a=r[0].marker.userData.event;this.canvas.style.cursor="pointer",this._hoverEventId!==a.id&&(this._hoverEventId=a.id,this.callbacks.onEventHover?.(a)),t&&(this.flyTo(a.lat,a.lng),this.callbacks.onEventClick?.(a));return}this._hoverEventId=null}let s=[];for(let r of this.pins.values()){let a=this.raycaster.intersectObject(r.userData.hit,!1);if(a.length){let o=r.position.clone().normalize().dot(this.camera.position.clone().normalize());s.push({pin:r,dist:a[0].distance,facing:o})}}if(s.sort((r,a)=>r.facing>.2&&a.facing<=.2?-1:a.facing>.2&&r.facing<=.2?1:r.dist-a.dist),s.length){let r=s[0].pin.userData.city;this.canvas.style.cursor="pointer",this._hoverId!==r.id&&(this._hoverId=r.id,this.callbacks.onHover?.(r),this._updateLabelsVisibility()),t&&(this.selectCity(r.id,!0),this.callbacks.onPinClick?.(r))}else this.canvas.style.cursor="grab",this._hoverId&&(this._hoverId=null,this.callbacks.onHover?.(null),this._updateLabelsVisibility())}_animate(){if(this._paused){this._raf=null;return}this._raf=requestAnimationFrame(()=>this._animate()),this.controls.update(),this.stars&&(this.stars.rotation.y+=2e-5);let e=performance.now()*.004;if(!this._reducedMotion){for(let t of this.pins.values())if(t.visible){if(t.userData.city.id===this.selectedId)t.scale.setScalar(1.55+Math.sin(e)*.12);else if(t.userData.pulse){let n=t.userData.baseScale*(1+Math.sin(e*1.3)*.08);t.scale.setScalar(n),t.userData.glow.material.opacity=.28+(Math.sin(e*1.3)*.5+.5)*.25}}if(this.eventMarkers)for(let t of this.eventMarkers.values()){if(!t.userData.pulse)continue;let n=1+Math.sin(e*1.6)*.12;t.scale.setScalar(n),t.userData.glow&&(t.userData.glow.material.opacity=.35+(Math.sin(e*1.6)*.5+.5)*.3)}}this._updateLabelsVisibility(),this.renderer.render(this.scene,this.camera)}};var Pu="apex-settings-v1";var xs={Sports:["lon","mad","tyo","syd","nyc","rio","mel","dxb"],Americas:["nyc","mia","mex","sao","tor","chi"],"Asia & Pacific":["tyo","sgp","syd","hkg","dps","sel"]},ec={version:1,hour12:!1,alwaysOnTop:!1,autoRotate:!0,reducedMotion:!1,showGrid:!0,showTzBands:!1,quality:"high",pinDensity:"auto",homeCityId:null,pinnedIds:null,favoriteGroups:{...xs},activeGroup:null,bounds:null,hotkey:"CommandOrControl+Alt+T",startWithWindows:!1,widgetMode:!1,onboardingDone:!1,reminders:[],trayCityIds:null,followedSeriesIds:[]};function nc(){try{let i=localStorage.getItem(Pu);if(!i)return{...ec,favoriteGroups:{...xs}};let e=JSON.parse(i);return F0(e)}catch{return{...ec,favoriteGroups:{...xs}}}}function ic(i){let e={...i,version:1};return localStorage.setItem(Pu,JSON.stringify(e)),e}function Ct(i){let e=nc();return ic({...e,...i})}var tc=new Set(["finance","crypto"]);function F0(i){let e={...ec,favoriteGroups:{...xs},...i&&typeof i=="object"?i:{}},t=e.favoriteGroups&&typeof e.favoriteGroups=="object"?{...e.favoriteGroups}:{...xs};for(let n of Object.keys(t))tc.has(String(n).toLowerCase())&&delete t[n];return Object.keys(t).length||(t={...xs}),e.favoriteGroups=t,e.activeGroup&&tc.has(String(e.activeGroup).toLowerCase())&&(e.activeGroup=null),Array.isArray(e.reminders)||(e.reminders=[]),Array.isArray(e.followedSeriesIds)||(e.followedSeriesIds=[]),e.version=1,e}function Iu(i){return{type:"apex-timezones-export",version:1,exportedAt:new Date().toISOString(),homeCityId:i.homeCityId,pinnedIds:i.pinnedIds,favoriteGroups:i.favoriteGroups}}function Lu(i,e){let t=i;if(typeof i=="string"&&(t=JSON.parse(i)),!t||t.type!=="apex-timezones-export")throw new Error("That file is not an ApexTimeZones city backup.");let n=t.favoriteGroups&&typeof t.favoriteGroups=="object"?{...t.favoriteGroups}:e.favoriteGroups;for(let s of Object.keys(n||{}))tc.has(String(s).toLowerCase())&&delete n[s];return{...e,homeCityId:t.homeCityId??e.homeCityId,pinnedIds:Array.isArray(t.pinnedIds)?t.pinnedIds:e.pinnedIds,favoriteGroups:n&&Object.keys(n).length?n:e.favoriteGroups}}var vo={schemaVersion:2,generatedAt:"2026-07-18T06:44:44.738Z",source:"scripts/build-sports-data.mjs",series:[{id:"f1-2026",name:"Formula 1 World Championship",sport:"motorsport",category:"Motorsport",season:"2026",description:"2026 F1 season \u2014 22 rounds (Bahrain and Saudi Arabia cancelled). Sprint weekends: China, Miami, Canada, Britain, Netherlands, Singapore. Saturday races: Baku, Las Vegas.",tags:["formula 1","f1","grand prix","motorsport","racing","fia"],events:[{id:"f1-26-au",name:"Australian Grand Prix",round:1,lat:-37.8497,lng:144.968,tz:"Australia/Melbourne",city:"Melbourne",country:"Australia",sessions:[{id:"fp1",name:"Practice 1",type:"practice",date:"2026-03-06",time:"13:30"},{id:"fp2",name:"Practice 2",type:"practice",date:"2026-03-06",time:"17:00"},{id:"fp3",name:"Practice 3",type:"practice",date:"2026-03-07",time:"12:30"},{id:"quali",name:"Qualifying",type:"qualifying",date:"2026-03-07",time:"16:00"},{id:"race",name:"Race",type:"race",date:"2026-03-08",time:"15:00"}],tags:["albert park"]},{id:"f1-26-cn",name:"Chinese Grand Prix",round:2,lat:31.3389,lng:121.2197,tz:"Asia/Shanghai",city:"Shanghai",country:"China",sessions:[{id:"fp1",name:"Practice 1",type:"practice",date:"2026-03-13",time:"13:30"},{id:"sq",name:"Sprint Qualifying",type:"qualifying",date:"2026-03-13",time:"17:30"},{id:"sprint",name:"Sprint",type:"sprint",date:"2026-03-14",time:"12:00"},{id:"quali",name:"Qualifying",type:"qualifying",date:"2026-03-14",time:"16:00"},{id:"race",name:"Race",type:"race",date:"2026-03-15",time:"15:00"}],tags:["shanghai"]},{id:"f1-26-jp",name:"Japanese Grand Prix",round:3,lat:34.8431,lng:136.5407,tz:"Asia/Tokyo",city:"Suzuka",country:"Japan",sessions:[{id:"fp1",name:"Practice 1",type:"practice",date:"2026-03-27",time:"13:30"},{id:"fp2",name:"Practice 2",type:"practice",date:"2026-03-27",time:"17:00"},{id:"fp3",name:"Practice 3",type:"practice",date:"2026-03-28",time:"12:30"},{id:"quali",name:"Qualifying",type:"qualifying",date:"2026-03-28",time:"16:00"},{id:"race",name:"Race",type:"race",date:"2026-03-29",time:"14:00"}],tags:["suzuka"]},{id:"f1-26-mi",name:"Miami Grand Prix",round:4,lat:25.9581,lng:-80.2389,tz:"America/New_York",city:"Miami",country:"USA",sessions:[{id:"fp1",name:"Practice 1",type:"practice",date:"2026-05-01",time:"13:30"},{id:"sq",name:"Sprint Qualifying",type:"qualifying",date:"2026-05-01",time:"17:30"},{id:"sprint",name:"Sprint",type:"sprint",date:"2026-05-02",time:"12:00"},{id:"quali",name:"Qualifying",type:"qualifying",date:"2026-05-02",time:"16:00"},{id:"race",name:"Race",type:"race",date:"2026-05-03",time:"16:00"}],tags:["miami"]},{id:"f1-26-ca",name:"Canadian Grand Prix",round:5,lat:45.5006,lng:-73.5228,tz:"America/Toronto",city:"Montreal",country:"Canada",sessions:[{id:"fp1",name:"Practice 1",type:"practice",date:"2026-05-22",time:"13:30"},{id:"sq",name:"Sprint Qualifying",type:"qualifying",date:"2026-05-22",time:"17:30"},{id:"sprint",name:"Sprint",type:"sprint",date:"2026-05-23",time:"12:00"},{id:"quali",name:"Qualifying",type:"qualifying",date:"2026-05-23",time:"16:00"},{id:"race",name:"Race",type:"race",date:"2026-05-24",time:"14:00"}],tags:["gilles villeneuve"]},{id:"f1-26-mc",name:"Monaco Grand Prix",round:6,lat:43.7347,lng:7.4206,tz:"Europe/Monaco",city:"Monte Carlo",country:"Monaco",sessions:[{id:"fp1",name:"Practice 1",type:"practice",date:"2026-06-05",time:"13:30"},{id:"fp2",name:"Practice 2",type:"practice",date:"2026-06-05",time:"17:00"},{id:"fp3",name:"Practice 3",type:"practice",date:"2026-06-06",time:"12:30"},{id:"quali",name:"Qualifying",type:"qualifying",date:"2026-06-06",time:"16:00"},{id:"race",name:"Race",type:"race",date:"2026-06-07",time:"15:00"}],tags:["monaco"]},{id:"f1-26-es",name:"Barcelona-Catalunya Grand Prix",round:7,lat:41.57,lng:2.2611,tz:"Europe/Madrid",city:"Barcelona",country:"Spain",sessions:[{id:"fp1",name:"Practice 1",type:"practice",date:"2026-06-12",time:"13:30"},{id:"fp2",name:"Practice 2",type:"practice",date:"2026-06-12",time:"17:00"},{id:"fp3",name:"Practice 3",type:"practice",date:"2026-06-13",time:"12:30"},{id:"quali",name:"Qualifying",type:"qualifying",date:"2026-06-13",time:"16:00"},{id:"race",name:"Race",type:"race",date:"2026-06-14",time:"15:00"}],tags:["catalunya"]},{id:"f1-26-at",name:"Austrian Grand Prix",round:8,lat:47.2197,lng:14.7647,tz:"Europe/Vienna",city:"Spielberg",country:"Austria",sessions:[{id:"fp1",name:"Practice 1",type:"practice",date:"2026-06-26",time:"13:30"},{id:"fp2",name:"Practice 2",type:"practice",date:"2026-06-26",time:"17:00"},{id:"fp3",name:"Practice 3",type:"practice",date:"2026-06-27",time:"12:30"},{id:"quali",name:"Qualifying",type:"qualifying",date:"2026-06-27",time:"16:00"},{id:"race",name:"Race",type:"race",date:"2026-06-28",time:"15:00"}],tags:["red bull ring"]},{id:"f1-26-gb",name:"British Grand Prix",round:9,lat:52.0786,lng:-1.0169,tz:"Europe/London",city:"Silverstone",country:"UK",sessions:[{id:"fp1",name:"Practice 1",type:"practice",date:"2026-07-03",time:"13:30"},{id:"sq",name:"Sprint Qualifying",type:"qualifying",date:"2026-07-03",time:"17:30"},{id:"sprint",name:"Sprint",type:"sprint",date:"2026-07-04",time:"12:00"},{id:"quali",name:"Qualifying",type:"qualifying",date:"2026-07-04",time:"16:00"},{id:"race",name:"Race",type:"race",date:"2026-07-05",time:"15:00"}],tags:["silverstone"]},{id:"f1-26-be",name:"Belgian Grand Prix",round:10,lat:50.4372,lng:5.9714,tz:"Europe/Brussels",city:"Spa-Francorchamps",country:"Belgium",sessions:[{id:"fp1",name:"Practice 1",type:"practice",date:"2026-07-17",time:"13:30"},{id:"fp2",name:"Practice 2",type:"practice",date:"2026-07-17",time:"17:00"},{id:"fp3",name:"Practice 3",type:"practice",date:"2026-07-18",time:"12:30"},{id:"quali",name:"Qualifying",type:"qualifying",date:"2026-07-18",time:"16:00"},{id:"race",name:"Race",type:"race",date:"2026-07-19",time:"15:00"}],tags:["spa"]},{id:"f1-26-hu",name:"Hungarian Grand Prix",round:11,lat:47.5789,lng:19.2486,tz:"Europe/Budapest",city:"Budapest",country:"Hungary",sessions:[{id:"fp1",name:"Practice 1",type:"practice",date:"2026-07-24",time:"13:30"},{id:"fp2",name:"Practice 2",type:"practice",date:"2026-07-24",time:"17:00"},{id:"fp3",name:"Practice 3",type:"practice",date:"2026-07-25",time:"12:30"},{id:"quali",name:"Qualifying",type:"qualifying",date:"2026-07-25",time:"16:00"},{id:"race",name:"Race",type:"race",date:"2026-07-26",time:"15:00"}],tags:["hungaroring"]},{id:"f1-26-nl",name:"Dutch Grand Prix",round:12,lat:52.3888,lng:4.5409,tz:"Europe/Amsterdam",city:"Zandvoort",country:"Netherlands",sessions:[{id:"fp1",name:"Practice 1",type:"practice",date:"2026-08-21",time:"13:30"},{id:"sq",name:"Sprint Qualifying",type:"qualifying",date:"2026-08-21",time:"17:30"},{id:"sprint",name:"Sprint",type:"sprint",date:"2026-08-22",time:"12:00"},{id:"quali",name:"Qualifying",type:"qualifying",date:"2026-08-22",time:"16:00"},{id:"race",name:"Race",type:"race",date:"2026-08-23",time:"15:00"}],tags:["zandvoort"]},{id:"f1-26-it",name:"Italian Grand Prix",round:13,lat:45.6156,lng:9.2811,tz:"Europe/Rome",city:"Monza",country:"Italy",sessions:[{id:"fp1",name:"Practice 1",type:"practice",date:"2026-09-04",time:"13:30"},{id:"fp2",name:"Practice 2",type:"practice",date:"2026-09-04",time:"17:00"},{id:"fp3",name:"Practice 3",type:"practice",date:"2026-09-05",time:"12:30"},{id:"quali",name:"Qualifying",type:"qualifying",date:"2026-09-05",time:"16:00"},{id:"race",name:"Race",type:"race",date:"2026-09-06",time:"15:00"}],tags:["monza"]},{id:"f1-26-md",name:"Spanish Grand Prix (Madring)",round:14,lat:40.468,lng:-3.616,tz:"Europe/Madrid",city:"Madrid",country:"Spain",sessions:[{id:"fp1",name:"Practice 1",type:"practice",date:"2026-09-11",time:"13:30"},{id:"fp2",name:"Practice 2",type:"practice",date:"2026-09-11",time:"17:00"},{id:"fp3",name:"Practice 3",type:"practice",date:"2026-09-12",time:"12:30"},{id:"quali",name:"Qualifying",type:"qualifying",date:"2026-09-12",time:"16:00"},{id:"race",name:"Race",type:"race",date:"2026-09-13",time:"15:00"}],tags:["madrid","madring","new circuit"]},{id:"f1-26-az",name:"Azerbaijan Grand Prix",round:15,lat:40.3725,lng:49.8533,tz:"Asia/Baku",city:"Baku",country:"Azerbaijan",sessions:[{id:"fp1",name:"Practice 1",type:"practice",date:"2026-09-24",time:"13:30"},{id:"fp2",name:"Practice 2",type:"practice",date:"2026-09-24",time:"17:00"},{id:"fp3",name:"Practice 3",type:"practice",date:"2026-09-25",time:"12:30"},{id:"quali",name:"Qualifying",type:"qualifying",date:"2026-09-25",time:"16:00"},{id:"race",name:"Race",type:"race",date:"2026-09-26",time:"15:00"}],tags:["baku","saturday race"]},{id:"f1-26-sg",name:"Singapore Grand Prix",round:16,lat:1.2914,lng:103.864,tz:"Asia/Singapore",city:"Singapore",country:"Singapore",sessions:[{id:"fp1",name:"Practice 1",type:"practice",date:"2026-10-09",time:"13:30"},{id:"sq",name:"Sprint Qualifying",type:"qualifying",date:"2026-10-09",time:"17:30"},{id:"sprint",name:"Sprint",type:"sprint",date:"2026-10-10",time:"12:00"},{id:"quali",name:"Qualifying",type:"qualifying",date:"2026-10-10",time:"16:00"},{id:"race",name:"Race",type:"race",date:"2026-10-11",time:"20:00"}],tags:["marina bay","night"]},{id:"f1-26-us",name:"United States Grand Prix",round:17,lat:30.1328,lng:-97.6411,tz:"America/Chicago",city:"Austin",country:"USA",sessions:[{id:"fp1",name:"Practice 1",type:"practice",date:"2026-10-23",time:"13:30"},{id:"fp2",name:"Practice 2",type:"practice",date:"2026-10-23",time:"17:00"},{id:"fp3",name:"Practice 3",type:"practice",date:"2026-10-24",time:"12:30"},{id:"quali",name:"Qualifying",type:"qualifying",date:"2026-10-24",time:"16:00"},{id:"race",name:"Race",type:"race",date:"2026-10-25",time:"14:00"}],tags:["cota"]},{id:"f1-26-mx",name:"Mexico City Grand Prix",round:18,lat:19.4042,lng:-99.0907,tz:"America/Mexico_City",city:"Mexico City",country:"Mexico",sessions:[{id:"fp1",name:"Practice 1",type:"practice",date:"2026-10-30",time:"13:30"},{id:"fp2",name:"Practice 2",type:"practice",date:"2026-10-30",time:"17:00"},{id:"fp3",name:"Practice 3",type:"practice",date:"2026-10-31",time:"12:30"},{id:"quali",name:"Qualifying",type:"qualifying",date:"2026-10-31",time:"16:00"},{id:"race",name:"Race",type:"race",date:"2026-11-01",time:"14:00"}],tags:[]},{id:"f1-26-br",name:"S\xE3o Paulo Grand Prix",round:19,lat:-23.7036,lng:-46.6997,tz:"America/Sao_Paulo",city:"S\xE3o Paulo",country:"Brazil",sessions:[{id:"fp1",name:"Practice 1",type:"practice",date:"2026-11-06",time:"13:30"},{id:"fp2",name:"Practice 2",type:"practice",date:"2026-11-06",time:"17:00"},{id:"fp3",name:"Practice 3",type:"practice",date:"2026-11-07",time:"12:30"},{id:"quali",name:"Qualifying",type:"qualifying",date:"2026-11-07",time:"16:00"},{id:"race",name:"Race",type:"race",date:"2026-11-08",time:"14:00"}],tags:["interlagos"]},{id:"f1-26-lv",name:"Las Vegas Grand Prix",round:20,lat:36.1147,lng:-115.1728,tz:"America/Los_Angeles",city:"Las Vegas",country:"USA",sessions:[{id:"fp1",name:"Practice 1",type:"practice",date:"2026-11-19",time:"13:30"},{id:"fp2",name:"Practice 2",type:"practice",date:"2026-11-19",time:"17:00"},{id:"fp3",name:"Practice 3",type:"practice",date:"2026-11-20",time:"12:30"},{id:"quali",name:"Qualifying",type:"qualifying",date:"2026-11-20",time:"16:00"},{id:"race",name:"Race",type:"race",date:"2026-11-21",time:"20:00"}],tags:["night","strip","saturday race"]},{id:"f1-26-qa",name:"Qatar Grand Prix",round:21,lat:25.49,lng:51.4542,tz:"Asia/Qatar",city:"Lusail",country:"Qatar",sessions:[{id:"fp1",name:"Practice 1",type:"practice",date:"2026-11-27",time:"13:30"},{id:"fp2",name:"Practice 2",type:"practice",date:"2026-11-27",time:"17:00"},{id:"fp3",name:"Practice 3",type:"practice",date:"2026-11-28",time:"12:30"},{id:"quali",name:"Qualifying",type:"qualifying",date:"2026-11-28",time:"16:00"},{id:"race",name:"Race",type:"race",date:"2026-11-29",time:"19:00"}],tags:["night"]},{id:"f1-26-ae",name:"Abu Dhabi Grand Prix",round:22,lat:24.4672,lng:54.6031,tz:"Asia/Dubai",city:"Yas Island",country:"UAE",sessions:[{id:"fp1",name:"Practice 1",type:"practice",date:"2026-12-04",time:"13:30"},{id:"fp2",name:"Practice 2",type:"practice",date:"2026-12-04",time:"17:00"},{id:"fp3",name:"Practice 3",type:"practice",date:"2026-12-05",time:"12:30"},{id:"quali",name:"Qualifying",type:"qualifying",date:"2026-12-05",time:"16:00"},{id:"race",name:"Race",type:"race",date:"2026-12-06",time:"17:00"}],tags:["yas marina","finale"]}]},{id:"wc-2026",name:"FIFA World Cup 2026",sport:"football",category:"Football",season:"2026",description:"World Cup archive \u2014 USA/Canada/Mexico. Semis and third place marked final; Final Spain vs Argentina at MetLife. After the final, follow Club Football for the next window.",tags:["world cup","fifa","football","soccer","wc2026","spain","argentina"],events:[{id:"wc-sf1",name:"Semi-final \u2014 Spain 2\u20130 France",lat:32.7473,lng:-97.0945,tz:"America/Chicago",city:"Dallas",country:"USA",sessions:[{id:"ko",name:"Kickoff",type:"match",date:"2026-07-14",time:"15:00",status:"final"}],tags:["semi","att stadium"]},{id:"wc-sf2",name:"Semi-final \u2014 Argentina 2\u20131 England",lat:33.755,lng:-84.401,tz:"America/New_York",city:"Atlanta",country:"USA",sessions:[{id:"ko",name:"Kickoff",type:"match",date:"2026-07-15",time:"15:00",status:"final"}],tags:["semi","mercedes-benz stadium"]},{id:"wc-3rd",name:"Third place \u2014 France vs England",lat:25.958,lng:-80.2389,tz:"America/New_York",city:"Miami",country:"USA",sessions:[{id:"ko",name:"Kickoff",type:"match",date:"2026-07-18",time:"17:00",status:"final"}],tags:["third place","hard rock stadium"]},{id:"wc-final",name:"Final \u2014 Spain vs Argentina",lat:40.8135,lng:-74.0745,tz:"America/New_York",city:"New York / NJ",country:"USA",sessions:[{id:"ko",name:"Kickoff",type:"match",date:"2026-07-19",time:"15:00"}],tags:["final","metlife stadium"]}]},{id:"club-football-2026",name:"Club Football \u2014 post\u2013World Cup",sport:"football",category:"Football",season:"2026\u201327",description:"What comes after the World Cup final: UEFA Super Cup, Champions League league phase openers, and early Premier League marquees \u2014 so the football map never goes quiet.",tags:["champions league","ucl","premier league","uefa","football","soccer","club"],events:[{id:"uefa-sc-26",name:"UEFA Super Cup",lat:41.3809,lng:2.1228,tz:"Europe/Madrid",city:"Barcelona",country:"Spain",sessions:[{id:"ko",name:"Kickoff",type:"match",date:"2026-08-12",time:"21:00"}],tags:["super cup","camp nou"]},{id:"ucl-md1-a",name:"UCL Matchday 1 \u2014 London night",lat:51.6042,lng:-.0662,tz:"Europe/London",city:"London",country:"UK",sessions:[{id:"ko",name:"Kickoff",type:"match",date:"2026-09-16",time:"20:00"}],tags:["tottenham hotspur stadium","champions league"]},{id:"ucl-md1-b",name:"UCL Matchday 1 \u2014 Milan",lat:45.4781,lng:9.124,tz:"Europe/Rome",city:"Milan",country:"Italy",sessions:[{id:"ko",name:"Kickoff",type:"match",date:"2026-09-16",time:"21:00"}],tags:["san siro","champions league"]},{id:"ucl-md1-c",name:"UCL Matchday 1 \u2014 Madrid",lat:40.4531,lng:-3.6883,tz:"Europe/Madrid",city:"Madrid",country:"Spain",sessions:[{id:"ko",name:"Kickoff",type:"match",date:"2026-09-17",time:"21:00"}],tags:["bernabeu","champions league"]},{id:"ucl-md2-a",name:"UCL Matchday 2 \u2014 Munich",lat:48.2188,lng:11.6247,tz:"Europe/Berlin",city:"Munich",country:"Germany",sessions:[{id:"ko",name:"Kickoff",type:"match",date:"2026-09-30",time:"21:00"}],tags:["allianz arena"]},{id:"ucl-md2-b",name:"UCL Matchday 2 \u2014 Paris",lat:48.8414,lng:2.253,tz:"Europe/Paris",city:"Paris",country:"France",sessions:[{id:"ko",name:"Kickoff",type:"match",date:"2026-09-30",time:"21:00"}],tags:["parc des princes"]},{id:"epl-derby",name:"Premier League \u2014 North London derby window",lat:51.5549,lng:-.1084,tz:"Europe/London",city:"London",country:"UK",sessions:[{id:"ko",name:"Kickoff",type:"match",date:"2026-09-27",time:"16:30"}],tags:["arsenal","tottenham","emirates"]},{id:"epl-el-clasico-week",name:"La Liga \u2014 El Cl\xE1sico window",lat:41.3809,lng:2.1228,tz:"Europe/Madrid",city:"Barcelona",country:"Spain",sessions:[{id:"ko",name:"Kickoff",type:"match",date:"2026-10-25",time:"21:00"}],tags:["el clasico","camp nou"]},{id:"ucl-md6",name:"UCL Matchday 6 \u2014 decisive night",lat:53.4308,lng:-2.9608,tz:"Europe/London",city:"Liverpool",country:"UK",sessions:[{id:"ko",name:"Kickoff",type:"match",date:"2026-12-09",time:"20:00"}],tags:["anfield","league phase"]}]},{id:"tennis-2026",name:"Tennis \u2014 late season 2026",sport:"tennis",category:"Tennis",season:"2026",description:"US Open at Flushing Meadows, then the indoor swing: Shanghai Masters flavour events, WTA Finals, and ATP Finals in Turin.",tags:["tennis","grand slam","us open","atp","wta","finals","turin","flushing meadows"],events:[{id:"uso-26",name:"US Open",lat:40.75,lng:-73.847,tz:"America/New_York",city:"New York",country:"USA",sessions:[{id:"open-day",name:"Opening day session",type:"session",date:"2026-08-30",time:"11:00"},{id:"open-night",name:"Opening night session",type:"session",date:"2026-08-30",time:"19:00"},{id:"qf-day",name:"Women's quarter-finals (day)",type:"session",date:"2026-09-08",time:"12:00"},{id:"sf-w",name:"Women's semi-finals",type:"session",date:"2026-09-10",time:"19:00"},{id:"sf-m",name:"Men's semi-finals",type:"session",date:"2026-09-11",time:"13:00"},{id:"final-w",name:"Women's Final",type:"final",date:"2026-09-12",time:"16:00"},{id:"final-m",name:"Men's Final",type:"final",date:"2026-09-13",time:"14:00"}],tags:["flushing","hard court"]},{id:"wta-finals-26",name:"WTA Finals",lat:24.7136,lng:46.6753,tz:"Asia/Riyadh",city:"Riyadh",country:"Saudi Arabia",sessions:[{id:"open",name:"Opening session",type:"session",date:"2026-11-01",time:"16:00"},{id:"sf",name:"Semi-finals",type:"session",date:"2026-11-07",time:"17:00"},{id:"final",name:"Final",type:"final",date:"2026-11-08",time:"18:00"}],tags:["wta finals","year end"]},{id:"atp-finals-26",name:"ATP Finals \u2014 Turin",lat:45.0417,lng:7.6522,tz:"Europe/Rome",city:"Turin",country:"Italy",sessions:[{id:"open",name:"Opening session",type:"session",date:"2026-11-15",time:"14:00"},{id:"sf",name:"Semi-finals",type:"session",date:"2026-11-21",time:"14:00"},{id:"final",name:"Final",type:"final",date:"2026-11-22",time:"15:00"}],tags:["atp finals","inalpi arena","year end"]}]},{id:"ufc-2026",name:"UFC",sport:"mma",category:"Combat",season:"2026",description:"Announced UFC cards \u2014 numbered events and Fight Nights with prelim and main-card blocks in venue time.",tags:["ufc","mma","fight night","octagon","combat"],events:[{id:"ufc-fn-0718",name:"UFC Fight Night: du Plessis vs Usman",lat:35.4634,lng:-97.5151,tz:"America/Chicago",city:"Oklahoma City",country:"USA",sessions:[{id:"prelims",name:"Prelims",type:"prelims",date:"2026-07-18",time:"16:00"},{id:"main",name:"Main card",type:"main-card",date:"2026-07-18",time:"19:00"}],tags:["paycom center"]},{id:"ufc-fn-0725",name:"UFC Fight Night: Ankalaev vs Guskov",lat:24.4539,lng:54.6021,tz:"Asia/Dubai",city:"Abu Dhabi",country:"UAE",sessions:[{id:"prelims",name:"Prelims",type:"prelims",date:"2026-07-25",time:"18:00"},{id:"main",name:"Main card",type:"main-card",date:"2026-07-25",time:"21:00"}],tags:["etihad arena"]},{id:"ufc-fn-0801",name:"UFC Fight Night: Medi\u0107 vs Rodriguez",lat:44.8145,lng:20.4213,tz:"Europe/Belgrade",city:"Belgrade",country:"Serbia",sessions:[{id:"prelims",name:"Prelims",type:"prelims",date:"2026-08-01",time:"16:00"},{id:"main",name:"Main card",type:"main-card",date:"2026-08-01",time:"19:00"}],tags:["belgrade arena"]},{id:"ufc-fn-0808",name:"UFC Fight Night: Gamrot vs Salkilld",lat:36.0691,lng:-115.1809,tz:"America/Los_Angeles",city:"Las Vegas",country:"USA",sessions:[{id:"prelims",name:"Prelims",type:"prelims",date:"2026-08-08",time:"16:00"},{id:"main",name:"Main card",type:"main-card",date:"2026-08-08",time:"19:00"}],tags:["ufc apex"]},{id:"ufc-330",name:"UFC 330: Makhachev vs Machado Garry",lat:39.9012,lng:-75.172,tz:"America/New_York",city:"Philadelphia",country:"USA",sessions:[{id:"early",name:"Early prelims",type:"prelims",date:"2026-08-15",time:"18:00"},{id:"prelims",name:"Prelims",type:"prelims",date:"2026-08-15",time:"20:00"},{id:"main",name:"Main card",type:"main-card",date:"2026-08-15",time:"22:00"}],tags:["ppv","xfinity mobile arena"]},{id:"ufc-fn-0822",name:"UFC Fight Night: Hernandez vs Rodrigues",lat:38.5802,lng:-121.4997,tz:"America/Los_Angeles",city:"Sacramento",country:"USA",sessions:[{id:"prelims",name:"Prelims",type:"prelims",date:"2026-08-22",time:"16:00"},{id:"main",name:"Main card",type:"main-card",date:"2026-08-22",time:"19:00"}],tags:["golden 1 center"]},{id:"ufc-fn-0829",name:"UFC Fight Night: Nurmagomedov vs Song",lat:31.157,lng:121.478,tz:"Asia/Shanghai",city:"Shanghai",country:"China",sessions:[{id:"prelims",name:"Prelims",type:"prelims",date:"2026-08-29",time:"15:00"},{id:"main",name:"Main card",type:"main-card",date:"2026-08-29",time:"18:00"}],tags:["oriental sports center"]},{id:"ufc-fn-0905",name:"UFC Fight Night \u2014 Paris",lat:48.8387,lng:2.3786,tz:"Europe/Paris",city:"Paris",country:"France",sessions:[{id:"prelims",name:"Prelims",type:"prelims",date:"2026-09-05",time:"18:00"},{id:"main",name:"Main card",type:"main-card",date:"2026-09-05",time:"21:00"}],tags:["accor arena"]},{id:"ufc-fn-0912",name:"UFC Fight Night \u2014 Glendale",lat:33.532,lng:-112.2612,tz:"America/Phoenix",city:"Glendale, AZ",country:"USA",sessions:[{id:"prelims",name:"Prelims",type:"prelims",date:"2026-09-12",time:"16:00"},{id:"main",name:"Main card",type:"main-card",date:"2026-09-12",time:"19:00"}],tags:["desert diamond arena"]},{id:"ufc-331",name:"UFC 331",lat:34.043,lng:-118.2673,tz:"America/Los_Angeles",city:"Los Angeles",country:"USA",sessions:[{id:"early",name:"Early prelims",type:"prelims",date:"2026-09-19",time:"15:00"},{id:"prelims",name:"Prelims",type:"prelims",date:"2026-09-19",time:"17:00"},{id:"main",name:"Main card",type:"main-card",date:"2026-09-19",time:"19:00"}],tags:["ppv","crypto.com arena"]}]},{id:"wsl-2026",name:"WSL Championship Tour",sport:"surfing",category:"Surfing",season:"2026",description:"World Surf League Championship Tour \u2014 remaining stops run as waiting periods; heats run when the swell is on, starting from first call each morning.",tags:["wsl","surfing","surf","championship tour","waves","pipeline","teahupoo"],events:[{id:"wsl-teahupoo",name:"Tahiti Pro \u2014 Teahupo\u02BBo",lat:-17.8471,lng:-149.2672,tz:"Pacific/Tahiti",city:"Teahupo\u02BBo",country:"French Polynesia",sessions:[{id:"window",name:"Competition window",type:"window",startDate:"2026-08-08",endDate:"2026-08-18",firstCallTime:"07:00"}],tags:["reef","barrels"]},{id:"wsl-trestles",name:"Lower Trestles",lat:33.3853,lng:-117.5939,tz:"America/Los_Angeles",city:"San Clemente",country:"USA",sessions:[{id:"window",name:"Competition window",type:"window",startDate:"2026-09-11",endDate:"2026-09-20",firstCallTime:"07:30"}],tags:["california"]},{id:"wsl-portugal",name:"MEO Rip Curl Pro Portugal",lat:39.3436,lng:-9.3618,tz:"Europe/Lisbon",city:"Peniche",country:"Portugal",sessions:[{id:"window",name:"Competition window",type:"window",startDate:"2026-10-16",endDate:"2026-10-25",firstCallTime:"08:00"}],tags:["supertubos","postseason"]},{id:"wsl-cloud9",name:"Cloud 9 \u2014 Siargao",lat:9.8103,lng:126.1659,tz:"Asia/Manila",city:"Siargao",country:"Philippines",sessions:[{id:"window",name:"Competition window",type:"window",startDate:"2026-10-31",endDate:"2026-11-10",firstCallTime:"07:00"}],tags:["new stop"]},{id:"wsl-abudhabi",name:"Surf Abu Dhabi Pro",lat:24.462,lng:54.611,tz:"Asia/Dubai",city:"Abu Dhabi",country:"UAE",sessions:[{id:"window",name:"Competition window",type:"window",startDate:"2026-11-25",endDate:"2026-11-29",firstCallTime:"08:00"}],tags:["wave pool","postseason"]},{id:"wsl-pipeline",name:"Pipeline Masters \u2014 title decider",lat:21.665,lng:-158.053,tz:"Pacific/Honolulu",city:"Oahu",country:"USA",sessions:[{id:"window",name:"Competition window",type:"window",startDate:"2026-12-08",endDate:"2026-12-20",firstCallTime:"07:30"}],tags:["pipeline","world title"]}]},{id:"motogp-2026",name:"MotoGP World Championship",sport:"motorsport",category:"Motorsport",season:"2026",description:"MotoGP 2026 \u2014 remaining rounds with sprint Saturdays and Sunday Grands Prix.",tags:["motogp","moto gp","motorcycle","motorsport","racing"],events:[{id:"mgp-26-gb",name:"British Grand Prix",round:12,lat:52.0786,lng:-1.0169,tz:"Europe/London",city:"Silverstone",country:"UK",sessions:[{id:"quali",name:"Qualifying",type:"qualifying",date:"2026-08-08",time:"10:50"},{id:"sprint",name:"Sprint",type:"sprint",date:"2026-08-08",time:"15:00"},{id:"race",name:"Grand Prix Race",type:"race",date:"2026-08-09",time:"14:00"}],tags:["silverstone"]},{id:"mgp-26-ar",name:"Arag\xF3n Grand Prix",round:13,lat:41.077,lng:-.856,tz:"Europe/Madrid",city:"Alca\xF1iz",country:"Spain",sessions:[{id:"quali",name:"Qualifying",type:"qualifying",date:"2026-08-29",time:"10:50"},{id:"sprint",name:"Sprint",type:"sprint",date:"2026-08-29",time:"15:00"},{id:"race",name:"Grand Prix Race",type:"race",date:"2026-08-30",time:"14:00"}],tags:["motorland"]},{id:"mgp-26-sm",name:"San Marino Grand Prix",round:14,lat:43.9614,lng:12.6833,tz:"Europe/Rome",city:"Misano",country:"San Marino",sessions:[{id:"quali",name:"Qualifying",type:"qualifying",date:"2026-09-12",time:"10:50"},{id:"sprint",name:"Sprint",type:"sprint",date:"2026-09-12",time:"15:00"},{id:"race",name:"Grand Prix Race",type:"race",date:"2026-09-13",time:"14:00"}],tags:["misano"]},{id:"mgp-26-at",name:"Austrian Grand Prix",round:15,lat:47.2197,lng:14.7647,tz:"Europe/Vienna",city:"Spielberg",country:"Austria",sessions:[{id:"quali",name:"Qualifying",type:"qualifying",date:"2026-09-19",time:"10:50"},{id:"sprint",name:"Sprint",type:"sprint",date:"2026-09-19",time:"15:00"},{id:"race",name:"Grand Prix Race",type:"race",date:"2026-09-20",time:"14:00"}],tags:["red bull ring"]},{id:"mgp-26-jp",name:"Japanese Grand Prix",round:16,lat:36.533,lng:140.227,tz:"Asia/Tokyo",city:"Motegi",country:"Japan",sessions:[{id:"quali",name:"Qualifying",type:"qualifying",date:"2026-10-03",time:"10:50"},{id:"sprint",name:"Sprint",type:"sprint",date:"2026-10-03",time:"15:00"},{id:"race",name:"Grand Prix Race",type:"race",date:"2026-10-04",time:"14:00"}],tags:["motegi"]},{id:"mgp-26-id",name:"Indonesian Grand Prix",round:17,lat:-8.898,lng:116.305,tz:"Asia/Makassar",city:"Mandalika",country:"Indonesia",sessions:[{id:"quali",name:"Qualifying",type:"qualifying",date:"2026-10-10",time:"10:50"},{id:"sprint",name:"Sprint",type:"sprint",date:"2026-10-10",time:"15:00"},{id:"race",name:"Grand Prix Race",type:"race",date:"2026-10-11",time:"14:00"}],tags:["lombok"]},{id:"mgp-26-au",name:"Australian Grand Prix",round:18,lat:-38.5028,lng:145.2308,tz:"Australia/Melbourne",city:"Phillip Island",country:"Australia",sessions:[{id:"quali",name:"Qualifying",type:"qualifying",date:"2026-10-24",time:"10:50"},{id:"sprint",name:"Sprint",type:"sprint",date:"2026-10-24",time:"15:00"},{id:"race",name:"Grand Prix Race",type:"race",date:"2026-10-25",time:"14:00"}],tags:["phillip island"]},{id:"mgp-26-my",name:"Malaysian Grand Prix",round:19,lat:2.7608,lng:101.7382,tz:"Asia/Kuala_Lumpur",city:"Sepang",country:"Malaysia",sessions:[{id:"quali",name:"Qualifying",type:"qualifying",date:"2026-10-31",time:"10:50"},{id:"sprint",name:"Sprint",type:"sprint",date:"2026-10-31",time:"15:00"},{id:"race",name:"Grand Prix Race",type:"race",date:"2026-11-01",time:"14:00"}],tags:["sepang"]},{id:"mgp-26-qa",name:"Qatar Grand Prix",round:20,lat:25.49,lng:51.4542,tz:"Asia/Qatar",city:"Lusail",country:"Qatar",sessions:[{id:"quali",name:"Qualifying",type:"qualifying",date:"2026-11-07",time:"10:50"},{id:"sprint",name:"Sprint",type:"sprint",date:"2026-11-07",time:"15:00"},{id:"race",name:"Grand Prix Race",type:"race",date:"2026-11-08",time:"19:00"}],tags:["night"]},{id:"mgp-26-pt",name:"Portuguese Grand Prix",round:21,lat:37.227,lng:-8.6267,tz:"Europe/Lisbon",city:"Portim\xE3o",country:"Portugal",sessions:[{id:"quali",name:"Qualifying",type:"qualifying",date:"2026-11-21",time:"10:50"},{id:"sprint",name:"Sprint",type:"sprint",date:"2026-11-21",time:"15:00"},{id:"race",name:"Grand Prix Race",type:"race",date:"2026-11-22",time:"14:00"}],tags:["algarve"]},{id:"mgp-26-va",name:"Valencia Grand Prix",round:22,lat:39.4854,lng:-.6316,tz:"Europe/Madrid",city:"Valencia",country:"Spain",sessions:[{id:"quali",name:"Qualifying",type:"qualifying",date:"2026-11-28",time:"10:50"},{id:"sprint",name:"Sprint",type:"sprint",date:"2026-11-28",time:"15:00"},{id:"race",name:"Grand Prix Race",type:"race",date:"2026-11-29",time:"14:00"}],tags:["finale","ricardo tormo"]}]},{id:"nfl-2026",name:"NFL 2026 \u2014 Marquee",sport:"nfl",category:"American Football",season:"2026\u201327",description:"Season landmarks: Kickoff, international series, Thanksgiving, Christmas, and Super Bowl week. Full weekly slates stay feed-friendly.",tags:["nfl","american football","kickoff","thanksgiving","super bowl","christmas","london"],events:[{id:"nfl-kickoff",name:"NFL Kickoff \u2014 Patriots at Seahawks",lat:47.5952,lng:-122.3316,tz:"America/Los_Angeles",city:"Seattle",country:"USA",sessions:[{id:"ko",name:"Kickoff",type:"match",date:"2026-09-09",time:"17:20"}],tags:["lumen field","season opener"]},{id:"nfl-snf-w1",name:"Sunday Night Football \u2014 Week 1",lat:40.8135,lng:-74.0745,tz:"America/New_York",city:"East Rutherford",country:"USA",sessions:[{id:"ko",name:"Kickoff",type:"match",date:"2026-09-13",time:"20:20"}],tags:["metlife","snf"]},{id:"nfl-london-1",name:"NFL London Series",lat:51.556,lng:-.2796,tz:"Europe/London",city:"London",country:"UK",sessions:[{id:"ko",name:"Kickoff",type:"match",date:"2026-10-18",time:"14:30"}],tags:["wembley","international"]},{id:"nfl-mnf",name:"Monday Night Football \u2014 primetime",lat:34.0141,lng:-118.2879,tz:"America/Los_Angeles",city:"Los Angeles",country:"USA",sessions:[{id:"ko",name:"Kickoff",type:"match",date:"2026-10-26",time:"17:15"}],tags:["sofi stadium","mnf"]},{id:"nfl-tg-det",name:"Thanksgiving \u2014 Lions host",lat:42.34,lng:-83.0456,tz:"America/Detroit",city:"Detroit",country:"USA",sessions:[{id:"ko",name:"Kickoff",type:"match",date:"2026-11-26",time:"12:30"}],tags:["ford field","thanksgiving"]},{id:"nfl-tg-dal",name:"Thanksgiving \u2014 Cowboys host",lat:32.7473,lng:-97.0945,tz:"America/Chicago",city:"Arlington",country:"USA",sessions:[{id:"ko",name:"Kickoff",type:"match",date:"2026-11-26",time:"15:30"}],tags:["att stadium","thanksgiving"]},{id:"nfl-tg-night",name:"Thanksgiving night primetime",lat:37.403,lng:-121.97,tz:"America/Los_Angeles",city:"Santa Clara",country:"USA",sessions:[{id:"ko",name:"Kickoff",type:"match",date:"2026-11-26",time:"17:20"}],tags:["levi stadium","thanksgiving"]},{id:"nfl-xmas",name:"Christmas Day NFL",lat:39.7439,lng:-105.0201,tz:"America/Denver",city:"Denver",country:"USA",sessions:[{id:"ko",name:"Kickoff",type:"match",date:"2026-12-25",time:"14:30"}],tags:["empower field","christmas"]},{id:"nfl-sb-lxi",name:"Super Bowl LXI week",lat:33.5277,lng:-112.2626,tz:"America/Phoenix",city:"Glendale",country:"USA",sessions:[{id:"media",name:"Opening Night",type:"session",date:"2027-02-01",time:"18:00"},{id:"ko",name:"Kickoff",type:"match",date:"2027-02-07",time:"15:30"}],tags:["super bowl","state farm stadium"]}]},{id:"golf-2026",name:"Golf Majors & autumn 2026",sport:"golf",category:"Golf",season:"2026",description:"The Open at Royal Birkdale plus the late-season landmarks: FedExCup finale window, DP World Tour Championship, and Presidents Cup.",tags:["golf","the open","open championship","royal birkdale","major","presidents cup","dp world"],events:[{id:"open-2026",name:"The Open \u2014 Royal Birkdale",lat:53.6206,lng:-3.0325,tz:"Europe/London",city:"Southport",country:"UK",sessions:[{id:"r1",name:"Round 1 (first tee)",type:"round",date:"2026-07-16",time:"06:35",status:"final"},{id:"r2",name:"Round 2 (first tee)",type:"round",date:"2026-07-17",time:"06:35",status:"final"},{id:"r3",name:"Round 3 (first tee)",type:"round",date:"2026-07-18",time:"09:00"},{id:"r4",name:"Final round (first tee)",type:"final",date:"2026-07-19",time:"09:00"}],tags:["links","154th open"]},{id:"tour-champ-26",name:"Tour Championship \u2014 East Lake",lat:33.745,lng:-84.326,tz:"America/New_York",city:"Atlanta",country:"USA",sessions:[{id:"r3",name:"Round 3",type:"round",date:"2026-08-29",time:"12:00"},{id:"r4",name:"Final round",type:"final",date:"2026-08-30",time:"12:00"}],tags:["fedexcup","east lake"]},{id:"dpwtc-26",name:"DP World Tour Championship",lat:25.041,lng:55.218,tz:"Asia/Dubai",city:"Dubai",country:"UAE",sessions:[{id:"r3",name:"Round 3",type:"round",date:"2026-11-21",time:"08:00"},{id:"r4",name:"Final round",type:"final",date:"2026-11-22",time:"08:00"}],tags:["jumeirah","earth course"]},{id:"presidents-26",name:"Presidents Cup",lat:41.978,lng:-87.86,tz:"America/Chicago",city:"Medinah",country:"USA",sessions:[{id:"day1",name:"Day 1 foursomes",type:"session",date:"2026-09-22",time:"07:05"},{id:"day2",name:"Day 2 fourballs",type:"session",date:"2026-09-24",time:"07:05"},{id:"singles",name:"Singles",type:"final",date:"2026-09-27",time:"12:00"}],tags:["medinah","team golf"]}]},{id:"cycling-2026",name:"Cycling Grand Tours 2026",sport:"cycling",category:"Cycling",season:"2026",description:"Tour de France (Barcelona start \u2192 Champs-\xC9lys\xE9es), Vuelta a Espa\xF1a, and UCI Road World Championships.",tags:["cycling","tour de france","tdf","vuelta","worlds","grand tour","peloton"],events:[{id:"tdf-2026",name:"Tour de France",lat:48.8698,lng:2.3078,tz:"Europe/Paris",city:"Paris (finale)",country:"France",sessions:[{id:"window",name:"Race window (21 stages)",type:"window",startDate:"2026-07-04",endDate:"2026-07-26",firstCallTime:"12:00"},{id:"final",name:"Final stage \u2014 Champs-\xC9lys\xE9es",type:"final",date:"2026-07-26",time:"16:10"}],tags:["champs-elysees","yellow jersey"]},{id:"vuelta-2026",name:"Vuelta a Espa\xF1a",lat:40.4153,lng:-3.7074,tz:"Europe/Madrid",city:"Madrid (finale)",country:"Spain",sessions:[{id:"window",name:"Race window",type:"window",startDate:"2026-08-22",endDate:"2026-09-13",firstCallTime:"13:00"},{id:"final",name:"Final stage \u2014 Madrid",type:"final",date:"2026-09-13",time:"17:00"}],tags:["la vuelta","red jersey"]},{id:"uci-worlds-26",name:"UCI Road World Championships",lat:55.6761,lng:12.5683,tz:"Europe/Copenhagen",city:"Copenhagen",country:"Denmark",sessions:[{id:"elite-w",name:"Elite women road race",type:"race",date:"2026-09-26",time:"12:00"},{id:"elite-m",name:"Elite men road race",type:"race",date:"2026-09-27",time:"11:00"}],tags:["rainbow jersey","worlds"]}]},{id:"cricket-2026",name:"International Cricket",sport:"cricket",category:"Cricket",season:"2026",description:"England vs India white-ball window, Caribbean CPL flavour nights, and the autumn Australia home summer openers.",tags:["cricket","odi","t20","test","england","india","australia","lords"],events:[{id:"eng-ind-odi3",name:"England vs India \u2014 3rd ODI",lat:51.5294,lng:-.1727,tz:"Europe/London",city:"London",country:"UK",sessions:[{id:"start",name:"First ball",type:"match",date:"2026-07-19",time:"11:00"}],tags:["lords","series decider"]},{id:"eng-ind-t20-1",name:"England vs India \u2014 1st T20",lat:52.4558,lng:-1.9025,tz:"Europe/London",city:"Birmingham",country:"UK",sessions:[{id:"start",name:"First ball",type:"match",date:"2026-07-22",time:"18:30"}],tags:["edgbaston"]},{id:"eng-ind-t20-2",name:"England vs India \u2014 2nd T20",lat:53.4823,lng:-2.2002,tz:"Europe/London",city:"Manchester",country:"UK",sessions:[{id:"start",name:"First ball",type:"match",date:"2026-07-24",time:"18:30"}],tags:["old trafford"]},{id:"eng-ind-t20-3",name:"England vs India \u2014 3rd T20",lat:51.4837,lng:-.009,tz:"Europe/London",city:"London",country:"UK",sessions:[{id:"start",name:"First ball",type:"match",date:"2026-07-26",time:"14:30"}],tags:["the oval"]},{id:"aus-ind-test1",name:"Australia vs India \u2014 1st Test",lat:-37.8199,lng:144.9834,tz:"Australia/Melbourne",city:"Melbourne",country:"Australia",sessions:[{id:"d1",name:"Day 1 start",type:"match",date:"2026-12-26",time:"10:30"},{id:"d2",name:"Day 2 start",type:"match",date:"2026-12-27",time:"10:30"}],tags:["mcg","boxing day"]},{id:"aus-ind-test2",name:"Australia vs India \u2014 2nd Test",lat:-33.8915,lng:151.2247,tz:"Australia/Sydney",city:"Sydney",country:"Australia",sessions:[{id:"d1",name:"Day 1 start",type:"match",date:"2027-01-03",time:"10:30"}],tags:["scg","new years"]}]},{id:"rugby-2026",name:"Rugby Nations Championship \u2014 Autumn",sport:"rugby",category:"Rugby",season:"2026",description:"Autumn window of the first Nations Championship, Nov 1\u201329. Kickoff slots confirm nearer the window.",tags:["rugby","nations championship","autumn internationals","test rugby"],events:[{id:"rug-eng-aus",name:"England vs Australia",lat:51.4559,lng:-.3415,tz:"Europe/London",city:"London",country:"UK",sessions:[{id:"ko",name:"Kickoff",type:"match",date:"2026-11-01",time:"15:10"}],tags:["twickenham"]},{id:"rug-irl-nz",name:"Ireland vs New Zealand \u2014 Chicago",lat:41.8623,lng:-87.6167,tz:"America/Chicago",city:"Chicago",country:"USA",sessions:[{id:"ko",name:"Kickoff",type:"match",date:"2026-11-01",time:"14:00"}],tags:["soldier field"]},{id:"rug-fra-rsa",name:"France vs South Africa",lat:48.9245,lng:2.3601,tz:"Europe/Paris",city:"Paris",country:"France",sessions:[{id:"ko",name:"Kickoff",type:"match",date:"2026-11-08",time:"21:10"}],tags:["stade de france"]},{id:"rug-eng-nz",name:"England vs New Zealand",lat:51.4559,lng:-.3415,tz:"Europe/London",city:"London",country:"UK",sessions:[{id:"ko",name:"Kickoff",type:"match",date:"2026-11-15",time:"15:10"}],tags:["twickenham"]},{id:"rug-wal-rsa",name:"Wales vs South Africa",lat:51.4782,lng:-3.1826,tz:"Europe/London",city:"Cardiff",country:"UK",sessions:[{id:"ko",name:"Kickoff",type:"match",date:"2026-11-29",time:"15:10"}],tags:["principality stadium"]}]},{id:"marathons-2026",name:"Marathon Majors 2026",sport:"athletics",category:"Athletics",season:"2026",description:"The remaining World Marathon Majors of 2026 \u2014 Berlin, Chicago, New York.",tags:["marathon","running","athletics","berlin","chicago","new york"],events:[{id:"mar-berlin",name:"Berlin Marathon",lat:52.5163,lng:13.3777,tz:"Europe/Berlin",city:"Berlin",country:"Germany",sessions:[{id:"start",name:"Elite start",type:"race",date:"2026-09-27",time:"09:15"}],tags:["brandenburg gate","world record course"]},{id:"mar-chicago",name:"Chicago Marathon",lat:41.8763,lng:-87.6205,tz:"America/Chicago",city:"Chicago",country:"USA",sessions:[{id:"start",name:"Elite start",type:"race",date:"2026-10-11",time:"07:30"}],tags:["grant park"]},{id:"mar-nyc",name:"New York City Marathon",lat:40.6021,lng:-74.0601,tz:"America/New_York",city:"New York",country:"USA",sessions:[{id:"start",name:"Elite start",type:"race",date:"2026-11-01",time:"09:05"}],tags:["five boroughs","staten island"]}]}]};var B0=2,Ss={motorsport:{label:"Motorsport",color:16765286,glyph:"flag",short:"F1"},football:{label:"Football",color:6222530,glyph:"ball",short:"FB"},tennis:{label:"Tennis",color:11730777,glyph:"racket",short:"TN"},mma:{label:"MMA",color:16739179,glyph:"octagon",short:"UFC"},surfing:{label:"Surfing",color:5097983,glyph:"wave",short:"WSL"},nfl:{label:"American Football",color:13073919,glyph:"helmet",short:"NFL"},golf:{label:"Golf",color:8449433,glyph:"tee",short:"GLF"},cycling:{label:"Cycling",color:16769126,glyph:"wheel",short:"CYC"},cricket:{label:"Cricket",color:9494767,glyph:"bat",short:"CKT"},rugby:{label:"Rugby",color:16032353,glyph:"oval",short:"RUG"},athletics:{label:"Athletics",color:16752237,glyph:"track",short:"ATH"}};function z0(i=new Date){if(!dr?.generatedAt)return null;let e=Date.parse(dr.generatedAt);return Number.isNaN(e)?null:(i.getTime()-e)/36e5}function Du(i=new Date,e=48){let t=z0(i),n=dr?.origin||"bundled";return t==null?{state:"unknown",label:"Schedules \xB7 bundled",detail:"No generation timestamp",origin:n,ageHours:null}:t>e?{state:"stale",label:"Schedules may be stale",detail:`Last refresh ~${Math.round(t)}h ago (${n})`,origin:n,ageHours:t}:n==="bundled"?{state:"bundled",label:"Schedules \xB7 offline snapshot",detail:`Bundled data \xB7 ${Math.round(t)}h old`,origin:n,ageHours:t}:{state:"fresh",label:"Schedules up to date",detail:`Feed \xB7 updated ${Math.round(t)}h ago`,origin:n,ageHours:t}}var _n=vo.series,dr={schemaVersion:vo.schemaVersion,generatedAt:vo.generatedAt,origin:"bundled"},sc=new Set;function Uu(i){return sc.add(i),()=>sc.delete(i)}function rc(i,e="feed"){if(!i||i.schemaVersion!==B0||!Array.isArray(i.series)||!i.series.length)return!1;for(let t of i.series){if(!t.id||!t.name||!Array.isArray(t.events))return!1;for(let n of t.events)if(!n.id||typeof n.lat!="number"||typeof n.lng!="number"||!n.tz||!Array.isArray(n.sessions)||!n.sessions.length)return!1}_n=i.series,dr={schemaVersion:i.schemaVersion,generatedAt:i.generatedAt||null,origin:e};for(let t of sc)try{t(dr)}catch{}return!0}function di(i){return _n.find(e=>e.id===i)}function ac(i){let e=i.trim().toLowerCase();if(!e)return _n.slice();let t=[];for(let n of _n){let s=0;[n.name,n.sport,n.category,n.season,n.description,...n.tags||[]].join(" ").toLowerCase().includes(e)&&(s+=50),n.name.toLowerCase().includes(e)&&(s+=40),(n.tags||[]).some(a=>a===e||a.includes(e))&&(s+=30);for(let a of n.events)[a.name,a.city,a.country,...a.tags||[]].join(" ").toLowerCase().includes(e)&&(s+=15);s>0&&t.push({series:n,score:s})}return t.sort((n,s)=>s.score-n.score),t.map(n=>n.series)}function Nu(i,e=10){let t=i.trim().toLowerCase();if(!t)return[];let n=[];for(let s of _n)for(let r of s.events){let a=0,o=r.name.toLowerCase();o===t?a=100:o.includes(t)&&(a=70);let l=[r.city,r.country,...r.tags||[]].join(" ").toLowerCase();l.includes(t)&&(a=Math.max(a,45));let c=t.split(/\s+/);c.length>1&&c.every(h=>(o+" "+l).includes(h))&&(a=Math.max(a,60)),a>0&&n.push({series:s,event:r,score:a})}return n.sort((s,r)=>r.score-s.score),n.slice(0,e)}function Gn(i){return i?.type==="window"}var oc=new Map;function lc(i,e,t){let n=`${t}|${i}|${e}`;if(oc.has(n))return oc.get(n);let[s,r,a]=i.split("-").map(Number),[o,l]=e.split(":").map(Number),c=vs(s,r,a,o,l,t);return oc.set(n,c),c}function xo(i,e){return!i||!e?null:Gn(i)?i.startDate?lc(i.startDate,i.firstCallTime||"08:00",e):null:!i.date||!i.time?null:lc(i.date,i.time,e)}function So(i,e){return!Gn(i)||!i.endDate?null:lc(i.endDate,"23:59",e)}function k0(i){let e=t=>{let[n,s,r]=t.split("-").map(Number);return new Date(Date.UTC(n,s-1,r,12)).toLocaleDateString(void 0,{month:"short",day:"numeric",timeZone:"UTC"})};return`${e(i.startDate)} \u2013 ${e(i.endDate)}`}function Fu(i,{ms:e,isWindow:t,windowEnd:n,now:s}){let r=(i?.status||"").toLowerCase();return r==="final"?"finished":r==="live"?"live-or-recent":r==="delayed"?"delayed":t?n&&s.getTime()>n.getTime()?"finished":e<0?"live-or-recent":"upcoming":e<-3*36e5?"finished":e<0?"live-or-recent":"upcoming"}function fr(i){switch(i){case"finished":return"Final";case"live-or-recent":return"Live";case"delayed":return"Delayed";case"upcoming":return"Scheduled";default:return i||"\u2014"}}function Bi(i,e,t,n=!1,s=new Date){let r=xo(i,e);if(!r)return{...i,instant:null,venueTime:"\u2014",localTime:"\u2014",countdown:null,status:"unknown"};if(Gn(i)){let f=So(i,e),p=r.getTime()-s.getTime(),y=Fu(i,{ms:p,isWindow:!0,windowEnd:f,now:s}),v=Et(r,t,{withSeconds:!1,withDate:!0,hour12:n}),m=ui(r,e,t),d=Oi(p);return y==="live-or-recent"&&(d="window open"),y==="finished"&&(d="done"),y==="delayed"&&(d="delayed"),{...i,instant:r,windowEnd:f,isWindow:!0,venueTime:`${k0(i)} \xB7 first call ${i.firstCallTime||"\u2014"}`,venueDay:"waiting period",localTime:v.time,localDay:v.day,countdown:d,msUntil:p,status:y,statusLabel:fr(y),deltaLabel:m.label}}let a=Et(r,e,{withSeconds:!1,withDate:!0,hour12:n}),o=Et(r,t,{withSeconds:!1,withDate:!0,hour12:n}),l=r.getTime()-s.getTime(),c=Fu(i,{ms:l,isWindow:!1,windowEnd:null,now:s}),h=Oi(l);c==="finished"&&(h="final"),c==="delayed"&&(h="delayed"),c==="live-or-recent"&&l<0&&(h=Oi(l));let u=ui(r,e,t);return{...i,instant:r,venueTime:a.time,venueDay:a.day,localTime:o.time,localDay:o.day,countdown:h,msUntil:l,status:c,statusLabel:fr(c),deltaLabel:u.label}}function Oi(i){let e=i<0,t=Math.abs(i),n=Math.floor(t/6e4),s=Math.floor(n/1440),r=Math.floor(n%1440/60),a=n%60,o=Math.floor(t%6e4/1e3),l;return s>0?l=`${s}d ${r}h ${a}m`:r>0?l=`${r}h ${a}m ${o}s`:l=`${a}m ${o}s`,e?`${l} ago`:l}function H0(i,e=new Date,t=null){let n=t||Intl.DateTimeFormat().resolvedOptions().timeZone,s=(i.sessions||[]).map(a=>Bi(a,i.tz,n,!1,e));return s.filter(a=>!a.instant||a.status==="finished"?!1:a.isWindow?!a.windowEnd||e.getTime()<=a.windowEnd.getTime():a.msUntil>-36e5).sort((a,o)=>a.msUntil-o.msUntil)[0]||s[s.length-1]||null}function cc(i){let e=["race","final","finals","match","kickoff","main-card","window"];for(let t of e){let n=(i.sessions||[]).find(s=>(s.type||"").toLowerCase()===t||(s.name||"").toLowerCase().includes(t));if(n)return n}return(i.sessions||[])[(i.sessions||[]).length-1]||null}function Ms(i,e,t=!1,n=new Date){let s=cc(i);return s?Bi(s,i.tz,e,t,n):null}function Ou(i,e=new Date){let t=e.getTime(),n=i.map(s=>{let r=H0(s,e),a=r?.instant?.getTime()??Number.MAX_SAFE_INTEGER,o=r&&r.status!=="finished"&&a>=t-36e5;return{e:s,t:a,upcoming:o}});return n.sort((s,r)=>s.upcoming!==r.upcoming?s.upcoming?-1:1:s.upcoming?s.t-r.t:r.t-s.t),n.map(s=>s.e)}function Mo(i,e,t=!1,n=new Date,s=8){let r=n.getTime(),a=[];for(let o of i||[])for(let l of o.events||[])for(let c of l.sessions||[]){let h=xo(c,l.tz);if(h&&(c.status||"").toLowerCase()!=="final"){if(Gn(c)){let u=So(c,l.tz);if(u&&r>u.getTime())continue}else if(h.getTime()-r<-36e5)continue;a.push({series:o,event:l,raw:c,t:h.getTime()})}}return a.sort((o,l)=>o.t-l.t),a.slice(0,s).map(o=>({series:o.series,event:o.event,session:Bi(o.raw,o.event.tz,e,t,n)}))}function Bu(i,e,t=!1,n=new Date,s=8,r={}){let a=r.eveningStartHour??16,o=Mo(i,e,t,n,40),l=n.getFullYear(),c=n.getMonth(),h=n.getDate(),u=o.filter(p=>{if(!p.session?.instant||p.session.status==="finished")return!1;let y=Et(p.session.instant,e,{withSeconds:!1,withDate:!0,hour12:!1});try{let v=new Intl.DateTimeFormat("en-CA",{timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!1}).formatToParts(p.session.instant),m=A=>v.find(C=>C.type===A)?.value,d=`${m("year")}-${m("month")}-${m("day")}`,w=Number(m("hour")),E=new Intl.DateTimeFormat("en-CA",{timeZone:e,year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(n),S=A=>E.find(C=>C.type===A)?.value,R=`${S("year")}-${S("month")}-${S("day")}`;return d!==R?!1:p.session.status==="live-or-recent"?!0:w>=a||p.session.msUntil<6*36e5}catch{return p.session.msUntil>=0&&p.session.msUntil<12*36e5}});return(u.length?u:o).slice(0,s)}function pr(i){return String(i).padStart(2,"0")}function hc(i){return i.getUTCFullYear()+pr(i.getUTCMonth()+1)+pr(i.getUTCDate())+"T"+pr(i.getUTCHours())+pr(i.getUTCMinutes())+pr(i.getUTCSeconds())+"Z"}function uc(i){return String(i||"").replace(/\\/g,"\\\\").replace(/;/g,"\\;").replace(/,/g,"\\,").replace(/\r?\n/g,"\\n")}var zu=120;function G0(i,e,t=new Date){let n=[];for(let s of e.sessions||[]){let r=xo(s,e.tz);if(!r)continue;let a=Gn(s),o=a?So(s,e.tz)||new Date(r.getTime()+zu*6e4):new Date(r.getTime()+zu*6e4),l=a?`${e.name} \u2014 ${s.name} (waiting period)`:`${e.name} \u2014 ${s.name}`;n.push(["BEGIN:VEVENT",`UID:apex-${e.id}-${s.id}@apextimezones`,`DTSTAMP:${hc(t)}`,`DTSTART:${hc(r)}`,`DTEND:${hc(o)}`,`SUMMARY:${uc(l)}`,`LOCATION:${uc(`${e.city}, ${e.country}`)}`,`DESCRIPTION:${uc(`${i}. Venue timezone: ${e.tz}. Added from ApexTimeZones.`)}`,"END:VEVENT"].join(`\r
`))}return n}function ku(i,e,t=new Date){let n=[];for(let s of Array.isArray(e)?e:[e])n.push(...G0(i,s,t));return["BEGIN:VCALENDAR","VERSION:2.0","PRODID:-//ApexTimeZones//Sports//EN","CALSCALE:GREGORIAN","METHOD:PUBLISH",...n,"END:VCALENDAR",""].join(`\r
`)}function Hu(i){let e=Hn(),t=null,n=null,s=[],r="",a=0,o="all",l={search:document.getElementById("sportsSearch"),chips:document.getElementById("sportsChips"),seriesList:document.getElementById("sportsSeriesList"),detail:document.getElementById("sportsDetail"),detailTitle:document.getElementById("sportsDetailTitle"),detailDesc:document.getElementById("sportsDetailDesc"),eventsList:document.getElementById("sportsEventsList"),eventPanel:document.getElementById("sportsEventPanel"),eventTitle:document.getElementById("sportsEventTitle"),countdown:document.getElementById("sportsCountdown"),tuneIn:document.getElementById("sportsTuneIn"),schedule:document.getElementById("sportsSchedule"),clear:document.getElementById("btnClearSports"),toBridge:document.getElementById("btnSportsToBridge"),exportIcs:document.getElementById("btnSportsIcs"),upNext:document.getElementById("upNextRail"),browse:document.getElementById("sportsBrowse"),tabClocks:document.getElementById("tabClocks"),tabSports:document.getElementById("tabSports"),tabConvert:document.getElementById("tabConvert"),panelClocks:document.getElementById("panelClocks"),panelSports:document.getElementById("panelSports"),panelConvert:document.getElementById("panelConvert"),feedBadge:document.getElementById("feedStatusBadge"),remindAll:document.getElementById("btnRemindAllSessions")};function c(g){return String(g).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function h(g){return g.tz.split("/").pop().replace(/_/g," ").toLowerCase()===g.city.toLowerCase()}function u(){return i.getFollowed?.()||[]}function f(){let g=u();return g.length?_n.filter(b=>g.includes(b.id)):_n}function p(g){let b=[["clocks",l.tabClocks,l.panelClocks],["sports",l.tabSports,l.panelSports],["convert",l.tabConvert,l.panelConvert]];for(let[P,D,k]of b){let O=P===g;D?.classList.toggle("active",O),D?.setAttribute("aria-selected",O?"true":"false"),D?.setAttribute("tabindex",O?"0":"-1"),k&&(k.hidden=!O,k.setAttribute("role","tabpanel"))}}l.tabClocks?.addEventListener("click",()=>p("clocks")),l.tabSports?.addEventListener("click",()=>p("sports")),l.tabConvert?.addEventListener("click",()=>p("convert"));function y(){t=null,n=null,l.browse&&(l.browse.hidden=!1),l.detail&&(l.detail.hidden=!0),l.eventPanel&&(l.eventPanel.hidden=!0)}function v(){if(!l.chips)return;let g=[...new Set(_n.map(b=>b.category))];l.chips.innerHTML='<button type="button" class="chip-btn active" data-cat="">All</button>'+g.map(b=>`<button type="button" class="chip-btn" data-cat="${c(b)}">${c(b)}</button>`).join(""),l.chips.querySelectorAll(".chip-btn").forEach(b=>{b.addEventListener("click",()=>{l.chips.querySelectorAll(".chip-btn").forEach(P=>P.classList.remove("active")),b.classList.add("active"),m(l.search?.value||"",b.dataset.cat||"")})})}function m(g="",b=""){if(!l.seriesList)return;let P=g.trim()?ac(g):_n.slice();b&&(P=P.filter(z=>z.category===b));let D=new Set(u()),k=g.trim()?Nu(g,5):[],O=k.length?`<div class="event-hits">
          ${k.map(z=>`
            <button type="button" class="event-hit" data-series="${z.series.id}" data-event="${z.event.id}">
              <span class="eh-name">${c(z.event.name)}</span>
              <span class="eh-meta">${c(z.series.name)} \xB7 ${c(z.event.city)}</span>
            </button>`).join("")}
         </div>`:"";l.seriesList.innerHTML=O+P.map(z=>`
      <button type="button" class="sports-series-card ${t===z.id?"active":""}" data-id="${z.id}">
        <span class="ss-cat">${c(z.category)} \xB7 ${c(z.season)}</span>
        <span class="ss-name">${c(z.name)}</span>
        <span class="ss-meta">${z.events.length} events on the globe</span>
        <span class="ss-star ${D.has(z.id)?"on":""}" data-star="${z.id}" title="${D.has(z.id)?"Unfollow":"Follow \u2014 adds to Up Next and tray"}">${D.has(z.id)?"\u2605":"\u2606"}</span>
      </button>`).join(""),l.seriesList.querySelectorAll(".sports-series-card").forEach(z=>{z.addEventListener("click",Q=>{let X=Q.target.closest(".ss-star");if(X){Q.stopPropagation(),i.toggleFollowed?.(X.dataset.star),m(l.search?.value||"",b),A(!0);return}d(z.dataset.id)})}),l.seriesList.querySelectorAll(".event-hit").forEach(z=>{z.addEventListener("click",()=>{d(z.dataset.series),w(z.dataset.event)})})}function d(g){t=g,n=null;let b=di(g);if(!b)return;m(l.search?.value||"",l.chips?.querySelector(".chip-btn.active")?.dataset.cat||""),l.browse&&(l.browse.hidden=!0),l.detail&&(l.detail.hidden=!1),l.eventPanel&&(l.eventPanel.hidden=!0),l.detailTitle&&(l.detailTitle.textContent=b.name),l.detailDesc&&(l.detailDesc.textContent=b.description);let P=Ou(b.events);l.eventsList&&(l.eventsList.innerHTML=P.map(O=>{let z=Ms(O,e,i.hour12?.(),new Date),Q=z?.countdown||"\u2014",X=z?.status||"";return`
          <button type="button" class="sports-event-card" data-id="${O.id}">
            <div class="se-top">
              <span class="se-round">${O.round!=null?"R"+O.round:c(O.country)}</span>
              <span class="se-cd ${X}">${c(Q)}</span>
            </div>
            <div class="se-name">${c(O.name)}</div>
            <div class="se-venue">${c(h(O)?O.city:`${O.city} \xB7 ${O.tz.split("/").pop().replace(/_/g," ")}`)}</div>
            <div class="se-times">
              <span>Your time: <strong>${c(z?.localTime||"\u2014")}</strong></span>
              <span>Venue: <strong>${c(z?.venueTime||"\u2014")}</strong></span>
            </div>
          </button>`}).join(""),l.eventsList.querySelectorAll(".sports-event-card").forEach(O=>{O.addEventListener("click",()=>w(O.dataset.id))}));let D=i.getGlobe?.(),k=new Date;D?.setEventMarkers(b.events.map(O=>{let z=Ms(O,e,!1,k);return{id:O.id,lat:O.lat,lng:O.lng,name:O.name,shortName:O.city||O.name,sport:b.sport,color:Ss[b.sport]?.color,glyph:Ss[b.sport]?.glyph,highlight:!1,live:z?.status==="live-or-recent"||z?.status==="delayed"}}))}function w(g){let b=di(t),P=b?.events.find(O=>O.id===g);if(!P)return;n=g;let D=i.getGlobe?.(),k=new Date;D?.setEventMarkers(b.events.map(O=>{let z=Ms(O,e,!1,k),Q=z?.status==="live-or-recent"||z?.status==="delayed";return{id:O.id,lat:O.lat,lng:O.lng,name:O.name,shortName:O.city||O.name,sport:b.sport,color:Ss[b.sport]?.color,glyph:Ss[b.sport]?.glyph,highlight:O.id===g,live:Q}})),D?.flyTo(P.lat,P.lng,1),S(P)}function E(g,b){return Gn(b)?{title:`${g.name} \u2014 ${b.name}`,dateStr:b.startDate,timeStr:b.firstCallTime||"08:00",tz:g.tz}:{title:`${g.name} \u2014 ${b.name}`,dateStr:b.date,timeStr:b.time,tz:g.tz}}function S(g){l.eventPanel&&(l.eventPanel.hidden=!1),l.eventTitle&&(l.eventTitle.textContent=g.name);let b=new Date,P=Ms(g,e,i.hour12?.(),b);if(l.countdown){let D=P?.status,k=D==="finished"?"completed":D==="live-or-recent"?"in progress":D==="delayed"?"delayed":"to start";l.countdown.innerHTML=P?`<span class="cd-big">${c(P.countdown)}</span>
           <span class="cd-sub">${c(P.name)} \xB7 ${k}</span>
           <span class="status-pill status-${c(D||"upcoming")}">${c(P.statusLabel||fr(D))}</span>`:"\u2014"}if(l.tuneIn&&(l.tuneIn.innerHTML=P?`
        <div class="tune-grid">
          <div><span class="muted">At the venue (${c(g.city)})</span><strong>${c(P.venueTime)}</strong><span class="muted">${c(P.venueDay||"")}</span></div>
          <div><span class="muted">Tune in where you are</span><strong class="mint">${c(P.localTime)}</strong><span class="muted">${c(P.localDay||"")} \xB7 ${c(P.deltaLabel||"")}</span></div>
        </div>`:""),l.schedule){let D=(g.sessions||[]).map(O=>Bi(O,g.tz,e,i.hour12?.(),b));l.schedule.innerHTML=`
        <div class="sched-head">
          <span>Full schedule</span>
          <button type="button" class="ghost-btn tiny" id="btnRemindAllSessions" title="Remind me before every upcoming session">Remind all</button>
        </div>
        <table class="sched-table">
          <thead><tr><th>Session</th><th>Status</th><th>Venue</th><th>Your time</th><th></th><th></th></tr></thead>
          <tbody>
            ${D.map(O=>`<tr class="${O.status}" data-session="${O.id}">
                  <td>${c(O.name)}</td>
                  <td><span class="status-pill status-${c(O.status)}">${c(O.statusLabel||fr(O.status))}</span></td>
                  <td>${c(O.venueTime)}<div class="muted">${c(O.venueDay||"")}</div></td>
                  <td class="mint">${c(O.localTime)}<div class="muted">${c(O.localDay||"")}</div></td>
                  <td class="cd-cell" data-cd="${O.id}">${c(O.countdown||"")}</td>
                  <td>${O.status==="upcoming"||O.status==="delayed"?`<button type="button" class="bell-btn" data-remind="${O.id}" title="Remind me before this session" aria-label="Remind me">\u{1F514}</button>`:""}</td>
                </tr>`).join("")}
          </tbody>
        </table>`,l.schedule.querySelectorAll("[data-remind]").forEach(O=>{O.addEventListener("click",()=>{let z=(g.sessions||[]).find(Q=>Q.id===O.dataset.remind);z&&(i.addReminder?.(E(g,z)),O.textContent="\u2713",O.disabled=!0)})});let k=l.schedule.querySelector("#btnRemindAllSessions");k&&k.addEventListener("click",()=>{let O=0;for(let z of g.sessions||[]){let Q=Bi(z,g.tz,e,!1,b);Q.status!=="upcoming"&&Q.status!=="delayed"||(i.addReminder?.(E(g,z)),O++)}k.textContent=O?`Added ${O}`:"None left",k.disabled=!0,l.schedule.querySelectorAll("[data-remind]").forEach(z=>{z.textContent="\u2713",z.disabled=!0})})}}function R(){let g=di(t);if(!g)return;let b=n?g.events.find(O=>O.id===n):null,P=ku(g.name,b||g.events),D=new Blob([P],{type:"text/calendar"}),k=document.createElement("a");k.href=URL.createObjectURL(D),k.download=`${(b?b.name:g.name).replace(/[^\w-]+/g,"-").toLowerCase()}.ics`,k.click(),URL.revokeObjectURL(k.href)}function A(g=!1){if(!l.upNext)return;let b=Date.now();if(!g&&b-a<3e4&&l.upNext.dataset.mode===o){C();return}a=b;let P=f(),D=new Date;o==="tonight"?s=Bu(P,e,i.hour12?.(),D,5):o==="live"?s=Mo(P,e,i.hour12?.(),D,20).filter(J=>J.session?.status==="live-or-recent"||J.session?.status==="delayed").slice(0,5):s=Mo(P,e,i.hour12?.(),D,5);let k=o+"|"+s.map(J=>`${J.event.id}:${J.session.id}:${J.session.status}`).join("|");if(k===r&&!g){C();return}r=k,l.upNext.dataset.mode=o;let z='<div class="un-modes" role="toolbar" aria-label="Up Next filter">'+[["all","All"],["tonight","Tonight"],["live","Live"]].map(([J,se])=>`<button type="button" class="un-mode ${o===J?"active":""}" data-mode="${J}" aria-pressed="${o===J}">${se}</button>`).join("")+"</div>",Q=o==="tonight"?"Nothing in your evening window \u2014 showing next up soon.":o==="live"?"Nothing live right now among followed series.":"Star a series to fill Up Next.",X=s.length?s.map((J,se)=>`
        <button type="button" class="un-chip ${J.session.status==="live-or-recent"?"live":""} ${J.session.status==="delayed"?"delayed":""}" data-idx="${se}" title="${c(J.series.name)} \u2014 ${c(J.event.city||"")}">
          <span class="un-sport">${c(Ss[J.series.sport]?.label||J.series.category)}</span>
          <span class="un-name">${c(J.event.name)}</span>
          <span class="un-cd" data-uncd="${se}">${c(J.session.countdown||"")}</span>
          <span class="un-time">${c(J.session.localTime||"")}</span>
        </button>`).join(""):`<span class="un-empty">${Q}</span>`;l.upNext.innerHTML=`<span class="un-label">Up next</span>${z}${X}`,l.upNext.querySelectorAll(".un-mode").forEach(J=>{J.addEventListener("click",()=>{o=J.dataset.mode||"all",A(!0)})}),l.upNext.querySelectorAll(".un-chip").forEach(J=>{J.addEventListener("click",()=>{let se=s[Number(J.dataset.idx)];se&&(p("sports"),d(se.series.id),w(se.event.id))})})}function C(){if(!l.upNext)return;let g=Date.now();l.upNext.querySelectorAll("[data-uncd]").forEach(b=>{let P=s[Number(b.dataset.uncd)];if(!P?.session?.instant)return;let D=P.session.instant.getTime()-g;if(P.session.isWindow&&D<0){let k=P.session.windowEnd;b.textContent=k&&g>k.getTime()?"done":"window open"}else b.textContent=Oi(D)})}function L(){return s[0]||null}function M(){if(A(!1),C(),!n||!t)return;let b=di(t)?.events.find(D=>D.id===n);if(!b||!l.schedule)return;let P=new Date;for(let D of b.sessions||[]){let k=l.schedule.querySelector(`[data-cd="${D.id}"]`);if(!k)continue;let O=Bi(D,b.tz,e,i.hour12?.(),P);k.textContent=O.countdown||""}if(l.countdown){let D=Ms(b,e,i.hour12?.(),P),k=l.countdown.querySelector(".cd-big");k&&D&&(k.textContent=D.countdown)}}return l.search?.addEventListener("input",()=>{t&&y();let g=l.chips?.querySelector(".chip-btn.active")?.dataset.cat||"";m(l.search.value,g)}),l.clear?.addEventListener("click",()=>{y(),i.getGlobe?.()?.clearEventMarkers?.(),m(l.search?.value||"")}),l.toBridge?.addEventListener("click",()=>{if(!n||!t)return;let b=di(t)?.events.find(D=>D.id===n),P=cc(b);!b||!P||(Gn(P)?i.setBridge?.({dateStr:P.startDate,timeStr:P.firstCallTime||"08:00",fromTz:b.tz}):i.setBridge?.({dateStr:P.date,timeStr:P.time,fromTz:b.tz}),p("convert"))}),l.exportIcs?.addEventListener("click",R),i.registerGlobeHandlers?.({onEventClick:g=>{for(let b of _n)if(b.events.some(P=>P.id===g.id)){p("sports"),d(b.id),w(g.id);break}}}),Uu(()=>{function g(){if(!l.feedBadge)return;let P=Du(new Date,48);l.feedBadge.dataset.state=P.state,l.feedBadge.title=P.detail,l.feedBadge.textContent=P.state==="stale"?"Stale data":P.state==="fresh"?"Live feed":P.state==="bundled"?"Offline data":"Schedules",l.feedBadge.hidden=!1}g(),v();let b=l.chips?.querySelector(".chip-btn.active")?.dataset.cat||"";if(m(l.search?.value||"",b),A(!0),t&&di(t)){d(t);let P=di(t)?.events.find(D=>D.id===n);P?S(P):(n=null,l.eventPanel&&(l.eventPanel.hidden=!0))}else y()}),document.querySelector(".panel-tabs")?.addEventListener("keydown",g=>{let b=[l.tabClocks,l.tabSports,l.tabConvert].filter(Boolean),P=b.indexOf(document.activeElement);if(!(P<0)&&(g.key==="ArrowRight"||g.key==="ArrowLeft")){g.preventDefault();let D=g.key==="ArrowRight"?(P+1)%b.length:(P-1+b.length)%b.length;b[D].focus(),b[D].click()}}),v(),m(),A(!0),{tick:M,switchTab:p,selectSeries:d,nextFollowed:L,openSportsSearch(g){p("sports"),l.search&&(l.search.value=g,m(g));let b=ac(g);b[0]&&d(b[0].id)}}}var ft=window.apex,Xu=new URLSearchParams(location.search).get("widget")==="1",Xt=Hn(),ue=nc(),et=jl(ue.pinnedIds),Ft=null,dc=null,ze=null,Vn=-1,Wn=ue.widgetMode||Xu,mc=null,Gu=null,V={localTime:document.getElementById("localTime"),localZone:document.getElementById("localZone"),utcNow:document.getElementById("utcNow"),hoverCard:document.getElementById("hoverCard"),hoverCity:document.getElementById("hoverCity"),hoverTime:document.getElementById("hoverTime"),hoverMeta:document.getElementById("hoverMeta"),clockList:document.getElementById("clockList"),searchInput:document.getElementById("searchInput"),searchClear:document.getElementById("searchClear"),searchResults:document.getElementById("searchResults"),eventTime:document.getElementById("eventTime"),eventDate:document.getElementById("eventDate"),eventZone:document.getElementById("eventZone"),bridgeValue:document.getElementById("bridgeValue"),bridgeDelta:document.getElementById("bridgeDelta"),bridgeTable:document.getElementById("bridgeTable"),bridgeChips:document.getElementById("bridgeChips"),btnCopyBridge:document.getElementById("btnCopyBridge"),loadingOverlay:document.getElementById("loadingOverlay"),appVersion:document.getElementById("appVersion"),btnResetPins:document.getElementById("btnResetPins"),btnPinSelected:document.getElementById("btnPinSelected"),canvas:document.getElementById("globeCanvas"),btnMax:document.getElementById("btnMax"),settingsPanel:document.getElementById("settingsPanel"),onboarding:document.getElementById("onboarding"),app:document.getElementById("app"),groupsBar:document.getElementById("groupsBar"),homeSelect:document.getElementById("homeSelect"),reminderTitle:document.getElementById("reminderTitle"),reminderNotify:document.getElementById("reminderNotify"),btnSaveReminder:document.getElementById("btnSaveReminder"),reminderList:document.getElementById("reminderList")};function Rn(){return!!ue.hour12}function bs(){ue=Ct({pinnedIds:et}),Cu(et),ze?.setPinned(et),xc()}function V0(i){if(!V.loadingOverlay)return;V.loadingOverlay.style.display="flex",V.loadingOverlay.classList.remove("fade-out");let e=V.loadingOverlay.querySelector(".loader-text");e&&(e.textContent=i)}function W0(){let i=new Set([...V.clockList.querySelectorAll(".clock-card")].map(n=>n.dataset.id)),e=new Set(et);for(let n of i)e.has(n)||V.clockList.querySelector(`.clock-card[data-id="${n}"]`)?.remove();for(let n of et)if(!i.has(n)){let s=_t(n);if(!s)continue;let r=document.createElement("div");r.className="clock-card",r.dataset.id=n,r.innerHTML=`
        <div class="clock-city"></div>
        <div class="clock-time"></div>
        <div class="clock-region"></div>
        <div class="clock-offset">
          <span class="clock-dayoff"></span>
          <span class="clock-delta"></span>
        </div>
        <button class="clock-remove" title="Unpin" type="button">\u2715</button>
        <button class="clock-focus" title="Focus on globe" type="button">\u25CE</button>
      `,r.querySelector(".clock-city").textContent=s.name,r.querySelector(".clock-region").textContent=s.region,r.addEventListener("click",a=>{a.target.closest("button")||gr(n)}),r.querySelector(".clock-remove").addEventListener("click",a=>{a.stopPropagation(),qu(n)}),r.querySelector(".clock-focus").addEventListener("click",a=>{a.stopPropagation(),gr(n)}),V.clockList.appendChild(r)}for(let n of et){let s=V.clockList.querySelector(`.clock-card[data-id="${n}"]`);s&&V.clockList.appendChild(s)}let t=V.clockList.querySelector(".clocks-empty");et.length?t&&t.remove():t||(t=document.createElement("div"),t.className="clocks-empty empty-state",t.innerHTML="<strong>No cities pinned yet</strong><p>Search above to add clocks \u2014 they light up on the globe.</p>",V.clockList.appendChild(t))}function vn(i){W0();let e=ze?.getSunDir?.()||null;for(let t of et){let n=_t(t),s=V.clockList.querySelector(`.clock-card[data-id="${t}"]`);if(!n||!s)continue;let r=Ql(n,i,Rn(),e),a=ui(i,n.tz,Xt);s.classList.toggle("day",r.isDay),s.classList.toggle("night",!r.isDay),s.classList.toggle("selected",Ft===t),s.querySelector(".clock-time").textContent=r.time,s.querySelector(".clock-dayoff").textContent=`${r.day} \xB7 ${r.offset}`,s.querySelector(".clock-delta").textContent=a.label+(a.dayNote?` \xB7 ${a.dayNote}`:"")}}function gc(i){_t(i)&&(et.includes(i)||(et=[i,...et],bs()),gr(i),vn(new Date))}function qu(i){et=et.filter(e=>e!==i),bs(),vn(new Date),Jt()}function gr(i){Ft=i,ze?.selectCity(i,!Wn),vn(new Date);let e=_t(i);e&&(_r(e),V.eventZone&&(V.eventZone.value=e.tz),Jt()),mr()}function mr(){if(V.btnPinSelected){if(!Ft){V.btnPinSelected.disabled=!0,V.btnPinSelected.textContent="Pin selected";return}V.btnPinSelected.disabled=!1,V.btnPinSelected.textContent=et.includes(Ft)?"Unpin selected":"Pin selected"}}V.btnPinSelected?.addEventListener("click",()=>{Ft&&(et.includes(Ft)?qu(Ft):gc(Ft),mr())});V.btnResetPins?.addEventListener("click",()=>{confirm("Reset pinned clocks to defaults?")&&(et=[...Fi],bs(),vn(new Date),Jt())});function yr(i){let e=i.trim();if(V.searchClear.hidden=!e,Vn=-1,!e){V.searchResults.hidden=!0,V.searchResults.innerHTML="";return}let t=Au(e);if(!t.length){V.searchResults.hidden=!1,V.searchResults.innerHTML='<div class="search-item"><span class="search-item-meta">No matches</span></div>';return}V.searchResults.hidden=!1,V.searchResults.innerHTML=t.map((n,s)=>`
      <button type="button" class="search-item" data-id="${n.id}" data-idx="${s}">
        <span class="search-item-name">${ot(n.name)}</span>
        <span class="search-item-meta">${ot(n.region)} \xB7 ${ot(n.tz)}</span>
      </button>`).join(""),V.searchResults.querySelectorAll(".search-item").forEach(n=>{n.addEventListener("click",()=>{gr(n.dataset.id),gc(n.dataset.id),V.searchInput.value="",yr("")})})}function Vu(i){let e=[...V.searchResults.querySelectorAll(".search-item[data-id]")];e.forEach((t,n)=>t.classList.toggle("active",n===i)),e[i]&&e[i].scrollIntoView({block:"nearest"})}V.searchInput?.addEventListener("input",()=>yr(V.searchInput.value));V.searchClear?.addEventListener("click",()=>{V.searchInput.value="",yr(""),V.searchInput.focus()});V.searchInput?.addEventListener("keydown",i=>{let e=[...V.searchResults.querySelectorAll(".search-item[data-id]")];if(i.key==="Escape"){V.searchInput.value="",yr(""),i.preventDefault();return}if(e.length){if(i.key==="ArrowDown")Vn=Math.min(e.length-1,Vn+1),Vu(Vn),i.preventDefault();else if(i.key==="ArrowUp")Vn=Math.max(0,Vn-1),Vu(Vn),i.preventDefault();else if(i.key==="Enter"){let t=Vn>=0?Vn:0,n=e[t]?.dataset.id;n&&(gc(n),V.searchInput.value="",yr("")),i.preventDefault()}}});function _r(i,e=new Date){if(!i||!V.hoverCard)return;let t=Ql(i,e,Rn(),ze?.getSunDir?.()),n=ui(e,i.tz,Xt);V.hoverCity.textContent=`${i.name}, ${i.region}`,V.hoverTime.textContent=t.time,V.hoverMeta.textContent=`${t.day} \xB7 ${t.offset} \xB7 ${n.label}${n.dayNote?" \xB7 "+n.dayNote:""}`,V.hoverCard.hidden=!1}function X0(i){if(dc)_r(dc,i);else if(Ft){let e=_t(Ft);e&&_r(e,i)}}function Yu(i){if(V.localTime&&(V.localTime.textContent=Et(i,Xt,{withSeconds:!0,hour12:Rn()})),V.localZone){let e=ue.homeCityId?_t(ue.homeCityId):null;V.localZone.textContent=e&&e.tz===Xt?`${e.name} \xB7 ${Xt.replace(/_/g," ")}`:Xt.replace(/_/g," ")}if(V.utcNow){let e=Et(i,"UTC",{withSeconds:!0,hour12:Rn()});V.utcNow.textContent=`UTC ${e}`}}function q0(){if(!V.eventZone)return;let i=new Set,e=[];for(let n of Gt)i.has(n.tz)||(i.add(n.tz),e.push({tz:n.tz,label:`${n.name} (${n.region})`}));e.sort((n,s)=>n.label.localeCompare(s.label));let t=V.eventZone.value;if(V.eventZone.innerHTML=e.map(n=>`<option value="${n.tz}">${ot(n.label)}</option>`).join(""),t&&e.some(n=>n.tz===t))V.eventZone.value=t;else if(e.some(n=>n.tz==="Europe/London"))V.eventZone.value="Europe/London";else{let n=ue.homeCityId?_t(ue.homeCityId):null;n&&(V.eventZone.value=n.tz)}}function yc(){V.homeSelect&&(V.homeSelect.innerHTML=`<option value="">Auto (${ot(Xt)})</option>`+Gt.map(i=>`<option value="${i.id}" ${ue.homeCityId===i.id?"selected":""}>${ot(i.name)} \xB7 ${ot(i.tz)}</option>`).join(""))}function Jt(){if(!V.eventDate||!V.eventTime||!V.eventZone)return;let i=V.eventDate.value,e=V.eventTime.value,t=V.eventZone.value,n=go(i,e,t,Xt);if(!n){V.bridgeValue&&(V.bridgeValue.textContent="\u2014"),V.bridgeDelta&&(V.bridgeDelta.textContent=""),V.bridgeTable&&(V.bridgeTable.innerHTML="");return}let s=Et(n.instant,Xt,{withSeconds:!1,withDate:!0,hour12:Rn()});V.bridgeValue.textContent=`${s.time}  \xB7  ${s.day}`;let r=Gt.find(h=>h.tz===t),a=r?r.name:t,o=Et(n.instant,t,{withSeconds:!1,withDate:!0,hour12:Rn()});V.bridgeDelta.textContent=`When it's ${o.time} in ${a}.`;let l=et.map(h=>_t(h)).filter(Boolean).map(h=>({id:h.id,name:h.name,tz:h.tz})),c=yo(i,e,t,l,Xt,Rn());V.bridgeTable&&(l.length?c&&(V.bridgeTable.innerHTML=`
      <table class="bridge-table">
        <thead><tr><th>City</th><th>Their time</th><th>Vs you</th></tr></thead>
        <tbody>
          ${c.rows.map(h=>`<tr data-id="${h.id}">
                <td>${ot(h.name)}</td>
                <td>${ot(h.time)}<div class="muted">${ot(h.day)}</div></td>
                <td>${ot(h.deltaLabel)}${h.dayNote?`<div class="muted">${ot(h.dayNote)}</div>`:""}</td>
              </tr>`).join("")}
        </tbody>
      </table>`,V.bridgeTable.querySelectorAll("tr[data-id]").forEach(h=>{h.addEventListener("click",()=>gr(h.dataset.id))})):V.bridgeTable.innerHTML='<div class="bridge-table-empty">Pin a few cities on the Clocks tab to compare times side by side.</div>')}function Y0(){if(!V.bridgeChips)return;let i=Zl(new Date,Xt);V.bridgeChips.innerHTML=i.map(e=>`<button type="button" class="chip-btn" data-chip="${e.id}">${ot(e.label)}</button>`).join(""),V.bridgeChips.querySelectorAll(".chip-btn").forEach(e=>{e.addEventListener("click",()=>{let t=i.find(n=>n.id===e.dataset.chip);t&&(V.eventDate.value=t.dateStr,V.eventTime.value=t.timeStr,t.fromTz&&(V.eventZone.value=t.fromTz),Jt())})})}V.eventTime?.addEventListener("input",Jt);V.eventDate?.addEventListener("input",Jt);V.eventZone?.addEventListener("change",Jt);V.btnCopyBridge?.addEventListener("click",async()=>{let i=V.eventDate.value,e=V.eventTime.value,t=V.eventZone.value,n=et.map(o=>_t(o)).filter(Boolean).map(o=>({id:o.id,name:o.name,tz:o.tz})),s=yo(i,e,t,n,Xt,Rn());if(!s)return;let r=Gt.find(o=>o.tz===t),a=$l(`Event at ${e} on ${i}`,r?r.name:t,s.rows,{time:s.local.time,day:s.local.day});try{await navigator.clipboard.writeText(a),V.btnCopyBridge.textContent="Copied \u2014 ready to paste",setTimeout(()=>{V.btnCopyBridge.textContent="Copy to share"},1500)}catch{V.btnCopyBridge.textContent="Could not copy"}});function _c(){if(!V.groupsBar)return;let i=ue.favoriteGroups||{},e=Object.keys(i);V.groupsBar.innerHTML=`<button type="button" class="chip-btn ${ue.activeGroup?"":"active"}" data-group="" title="Show every city you pin">All my cities</button>`+e.map(t=>`<button type="button" class="chip-btn ${ue.activeGroup===t?"active":""}" data-group="${ot(t)}" title="Switch your clocks to the ${ot(t)} list">${ot(t)}</button>`).join(""),V.groupsBar.querySelectorAll(".chip-btn").forEach(t=>{t.addEventListener("click",()=>{let n=t.dataset.group||"";ue=Ct({activeGroup:n||null}),n&&i[n]&&(et=i[n].filter(s=>_t(s)),bs(),vn(new Date),Jt(),ze?.setPinned?.(et)),_c()})})}function $0(){document.getElementById("btnExportPins")?.addEventListener("click",()=>{let i=Iu({...ue,pinnedIds:et}),e=new Blob([JSON.stringify(i,null,2)],{type:"application/json"}),t=document.createElement("a");t.href=URL.createObjectURL(e),t.download="My ApexTimeZones cities.backup.json",t.click(),URL.revokeObjectURL(t.href)}),document.getElementById("btnImportPins")?.addEventListener("click",()=>{document.getElementById("importFile")?.click()}),document.getElementById("importFile")?.addEventListener("change",async i=>{let e=i.target.files?.[0];if(e){try{let t=await e.text(),n=Lu(t,{...ue,pinnedIds:et});ue=ic(n),et=jl(ue.pinnedIds),bs(),vn(new Date),yc(),_c(),alert("Cities restored.")}catch(t){alert("Could not restore that file. "+(t.message||"Try a backup you saved from this app."))}i.target.value=""}})}function vc(){let i=(ue.reminders||[]).map(e=>{if(e.fireAt)return e;try{let[t,n,s]=e.dateStr.split("-").map(Number),[r,a]=e.timeStr.split(":").map(Number),o=vs(t,n,s,r,a,e.tz||Xt);if(!o)return e;let l=Number(e.notifyMinutes||15),c=o.getTime()-l*6e4;return{...e,fireAt:c,body:`${e.title} in ~${l} min`}}catch{return e}});ue=Ct({reminders:i}),ft?.setMainSettings?.({reminders:i}),Z0()}function Z0(){if(!V.reminderList)return;let i=ue.reminders||[];V.reminderList.innerHTML=i.map(e=>`<div class="reminder-row">
          <span>${ot(e.title)} \xB7 ${ot(e.dateStr)} ${ot(e.timeStr)} (${ot(e.tz||"")})</span>
          <button type="button" data-del="${e.id}" class="ghost-btn">\u2715</button>
        </div>`).join("")||'<div class="muted">No saved events</div>',V.reminderList.querySelectorAll("[data-del]").forEach(e=>{e.addEventListener("click",()=>{let t=(ue.reminders||[]).filter(n=>n.id!==e.dataset.del);ue=Ct({reminders:t}),vc()})})}function $u({title:i,dateStr:e,timeStr:t,tz:n,notifyMinutes:s=15}){if(!e||!t)return;let r="r_"+Date.now()+"_"+Math.random().toString(36).slice(2,6),a=[...ue.reminders||[],{id:r,title:i||"Event",dateStr:e,timeStr:t,tz:n,notifyMinutes:s,fired:!1}];ue=Ct({reminders:a}),vc()}V.btnSaveReminder?.addEventListener("click",()=>{$u({title:V.reminderTitle?.value?.trim()||"Event",dateStr:V.eventDate.value,timeStr:V.eventTime.value,tz:V.eventZone.value,notifyMinutes:Number(V.reminderNotify?.value||15)}),V.reminderTitle&&(V.reminderTitle.value="")});function K0(){let i=document.getElementById("updateBanner"),e=document.getElementById("updateTitle"),t=document.getElementById("updateNotes"),n=document.getElementById("updateProgressWrap"),s=document.getElementById("updateProgressBar"),r=document.getElementById("updateProgressLabel"),a=document.getElementById("btnUpdateNow"),o=document.getElementById("btnUpdateLater"),l=c=>{i&&(e&&(e.textContent=`Update available \xB7 v${c.latestVersion||""}`),t&&(t.textContent=c.releaseNotes||`You have v${c.currentVersion}. A newer build is ready to install.`),i.hidden=!1)};ft?.onUpdateAvailable?.(c=>l(c)),ft?.onUpdateNotAvailable?.(c=>{i&&(i.hidden=!0),alert(`You're up to date (v${c?.currentVersion||""}).`)}),ft?.onUpdateProgress?.(c=>{n&&(n.hidden=!1),s&&(s.style.width=`${c.percent||0}%`),r&&(r.textContent=`${c.percent||0}% \xB7 ${c.status||""}`),a&&(a.disabled=!0,a.textContent=c.status==="installing"?"Restarting\u2026":"Downloading\u2026")}),ft?.onUpdateError?.(c=>{a&&(a.disabled=!1,a.textContent="Update now"),alert("Update failed: "+(c?.message||"unknown error"))}),o?.addEventListener("click",()=>{i&&(i.hidden=!0)}),a?.addEventListener("click",async()=>{a&&(a.disabled=!0,a.textContent="Downloading\u2026"),n&&(n.hidden=!1);try{await ft?.downloadUpdate?.()}catch(c){alert("Update failed: "+(c?.message||c)),a&&(a.disabled=!1,a.textContent="Update now")}}),document.getElementById("btnCheckUpdates")?.addEventListener("click",async()=>{try{let c=await ft?.checkForUpdates?.();c?.available?l(c):c?.ok?alert(`You're up to date (v${c.currentVersion}).`):alert("Could not check for updates"+(c?.reason?`: ${c.reason}`:"."))}catch(c){alert("Update check failed: "+(c?.message||c))}})}function J0(){document.getElementById("btnHelp")?.addEventListener("click",()=>Zu())}function j0(){let i=()=>{ft?.openApexForge?ft.openApexForge():ft?.openExternal?.("https://ame-apexforge.org/")};document.getElementById("btnApexForge")?.addEventListener("click",i),document.getElementById("btnApexForgeSettings")?.addEventListener("click",i)}function Q0(){let i=V.settingsPanel;if(!i)return;document.getElementById("btnSettings")?.addEventListener("click",()=>{i.hidden=!i.hidden,i.hidden||ey()}),document.getElementById("btnCloseSettings")?.addEventListener("click",()=>{i.hidden=!0});let e=(s,r,a)=>{let o=document.getElementById(s);o&&(o.checked=!!ue[r],o.addEventListener("change",()=>{ue=Ct({[r]:o.checked}),a?.(o.checked)}))};e("setHour12","hour12",()=>{pc(new Date),Jt()}),e("setAlwaysOnTop","alwaysOnTop",s=>ft?.setAlwaysOnTop?.(s)),e("setAutoRotate","autoRotate",s=>ze?.setAutoRotate(s)),e("setReducedMotion","reducedMotion",s=>{document.body.classList.toggle("reduced-motion",s),s&&ze?.setAutoRotate(!1)}),e("setShowGrid","showGrid",s=>ze?.setShowGrid(s)),e("setShowBands","showTzBands",s=>ze?.setShowBands(s)),e("setStartWindows","startWithWindows",s=>ft?.setStartWithWindows?.(s));let t=document.getElementById("setQuality");t&&(t.value=ue.quality||"high",t.addEventListener("change",()=>{ue=Ct({quality:t.value}),ze?.setQuality(t.value)}));let n=document.getElementById("setPinDensity");n&&(n.value=ue.pinDensity||"auto",n.addEventListener("change",()=>{ue=Ct({pinDensity:n.value}),ze?.setPinDensity?.(n.value)})),document.getElementById("setReducedMotion")?.addEventListener("change",s=>{document.body.classList.toggle("reduced-motion",s.target.checked),ze?.setReducedMotion?.(s.target.checked),s.target.checked&&ze?.setAutoRotate?.(!1)}),document.getElementById("btnToggleWidget")?.addEventListener("click",()=>{fc(!Wn)}),V.homeSelect?.addEventListener("change",()=>{let s=V.homeSelect.value||null;ue=Ct({homeCityId:s}),ze?.setHomeCity(s),Yu(new Date)}),ty(),document.getElementById("traySelect")?.addEventListener("change",s=>{let r=[...s.target.selectedOptions].map(a=>a.value).slice(0,5);ue=Ct({trayCityIds:r}),ft?.setMainSettings?.({trayCityIds:r}),xc()})}function ey(){let i=document.getElementById("traySelect");if(!i)return;let e=new Set(ue.trayCityIds||[]),t=[...new Set([...ue.trayCityIds||[],...et])];i.innerHTML=t.map(n=>_t(n)).filter(Boolean).map(n=>`<option value="${n.id}" ${e.has(n.id)?"selected":""}>${ot(n.name)} \xB7 ${ot(n.tz)}</option>`).join("")}function ty(){let i=document.getElementById("hotkeyInput");if(!i)return;i.value=ue.hotkey||"CommandOrControl+Alt+T";let e=async t=>{try{let n=await ft?.setHotkey?.(t);n?.ok?(ue=Ct({hotkey:n.hotkey}),i.value=n.hotkey):(i.value=(ue.hotkey||"")+"  (in use \u2014 try another)",setTimeout(()=>{i.value=ue.hotkey||""},1600))}catch{i.value=ue.hotkey||""}};i.addEventListener("focus",()=>{i.value="Press keys\u2026"}),i.addEventListener("blur",()=>{i.value=ue.hotkey||""}),i.addEventListener("keydown",t=>{t.preventDefault();let n=t.key;if(["Control","Alt","Shift","Meta"].includes(n))return;let s=[];if((t.ctrlKey||t.metaKey)&&s.push("CommandOrControl"),t.altKey&&s.push("Alt"),t.shiftKey&&s.push("Shift"),!s.length)return;let r=n.length===1?n.toUpperCase():n;r===" "&&(r="Space"),e([...s,r].join("+")),i.blur()}),document.getElementById("btnResetHotkey")?.addEventListener("click",()=>{e("CommandOrControl+Alt+T")})}function fc(i){Wn=!!i,ue=Ct({widgetMode:Wn}),document.body.classList.toggle("widget-mode",Wn),V.app?.classList.toggle("widget-mode",Wn),requestAnimationFrame(()=>{if(ze?.resize(),!i&&Ft){let e=_t(Ft);e&&ze?.flyTo(e.lat,e.lng,.8)}})}function Zu(){if(!V.onboarding)return;let i=!ue.onboardingDone,e=[...V.onboarding.querySelectorAll(".tour-step")],t=document.getElementById("tourDots"),n=document.getElementById("onboardNext"),s=document.getElementById("onboardBack"),r=document.getElementById("onboardSkip"),a=document.getElementById("onboardHome"),o=0;a&&!a.dataset.filled&&(a.innerHTML=Gt.map(h=>`<option value="${h.id}">${ot(h.name)} (${ot(h.region)})</option>`).join(""),a.dataset.filled="1"),a&&ue.homeCityId&&(a.value=ue.homeCityId);let l=()=>{e.forEach((h,u)=>h.hidden=u!==o),t&&(t.innerHTML=e.map((h,u)=>`<span class="dot ${u===o?"active":""}"></span>`).join("")),s&&(s.hidden=o===0),n&&(n.textContent=o===e.length-1?"Let's go":"Next")},c=h=>{if(h&&i){let u=a?.value||null,f=[...document.querySelectorAll("#onboardPins input:checked")].map(p=>p.value);u&&(ue=Ct({homeCityId:u})),f.length&&(et=f.filter(p=>_t(p)),bs()),ze?.setHomeCity(ue.homeCityId),yc(),vn(new Date)}ue=Ct({onboardingDone:!0}),V.onboarding.hidden=!0};n&&(n.onclick=()=>o<e.length-1?(o++,l()):c(!0)),s&&(s.onclick=()=>(o=Math.max(0,o-1),l())),r&&(r.onclick=()=>c(!1)),V.onboarding.hidden=!1,l()}function ny(){if(ue.onboardingDone||Xu){V.onboarding&&(V.onboarding.hidden=!0);return}Zu()}function xc(){let i=new Date,t=(ue.trayCityIds&&ue.trayCityIds.length?ue.trayCityIds:et).slice(0,5).map(s=>_t(s)).filter(Boolean).map(s=>({id:s.id,name:s.name,time:Et(i,s.tz,{withSeconds:!1,hour12:Rn()})})),n=mc?.nextFollowed?.();if(n?.session?.instant){let s=n.session.instant.getTime()-i.getTime(),r=n.session.isWindow&&s<0?"window open":Oi(s);t.unshift({id:"next-event",name:`\u25B8 ${n.event.name}`,time:r})}ft?.setTrayTimes?.(t)}function Wu(i){V.btnMax&&(V.btnMax.textContent=i?"\u2750":"\u25A1")}function pc(){let i=new Date;Yu(i),vn(i),X0(i),ze?.updateClocks(i),mc?.tick?.(),xc()}async function iy(){document.body.classList.toggle("reduced-motion",!!ue.reducedMotion),Wn&&fc(!0),V.eventDate&&(V.eventDate.value=Jl(Xt)),q0(),yc(),Y0(),_c(),$0(),Q0(),K0(),j0(),J0(),mc=Hu({hour12:Rn,getGlobe:()=>ze,setBridge:({dateStr:i,timeStr:e,fromTz:t})=>{V.eventDate&&i&&(V.eventDate.value=i),V.eventTime&&e&&(V.eventTime.value=e),V.eventZone&&t&&(V.eventZone.value=t),Jt()},registerGlobeHandlers:i=>{Gu=i},getFollowed:()=>ue.followedSeriesIds||[],toggleFollowed:i=>{let e=new Set(ue.followedSeriesIds||[]);return e.has(i)?e.delete(i):e.add(i),ue=Ct({followedSeriesIds:[...e]}),[...e]},addReminder:$u});try{let i=await ft?.getSportsCatalog?.();i&&rc(i,"feed-cache")}catch{}ft?.onSportsCatalog?.(i=>rc(i,"feed")),ny(),vc(),vn(new Date),Jt(),mr();try{let i=await ft?.getMainSettings?.();if(i){if(typeof i.alwaysOnTop=="boolean"){ue=Ct({alwaysOnTop:i.alwaysOnTop});let e=document.getElementById("setAlwaysOnTop");e&&(e.checked=i.alwaysOnTop)}if(typeof i.startWithWindows=="boolean"){let e=document.getElementById("setStartWindows");e&&(e.checked=i.startWithWindows)}}}catch{}if(ft?.onWindowState?.(i=>{i&&typeof i.maximized=="boolean"&&Wu(i.maximized)}),ft?.isMaximized?.().then(i=>Wu(!!i)),ft?.onVisibility?.(i=>{ze?.setPaused(!i)}),ft?.onToggleWidget?.(()=>fc(!Wn)),document.addEventListener("visibilitychange",()=>{ze?.setPaused(document.hidden)}),Wn)V.loadingOverlay&&(V.loadingOverlay.style.display="none");else if(ze=new _o(V.canvas,{onReady:()=>{V.loadingOverlay?.classList.add("fade-out"),setTimeout(()=>{V.loadingOverlay&&(V.loadingOverlay.style.display="none")},500),ze.setAutoRotate(ue.autoRotate&&!ue.reducedMotion),ze.setShowGrid(ue.showGrid!==!1),ze.setShowBands(!!ue.showTzBands),ze.setQuality(ue.quality||"high"),ze.setPinDensity?.(ue.pinDensity||"auto"),ze.setReducedMotion?.(!!ue.reducedMotion),ze.setHomeCity(ue.homeCityId)},onHover:i=>{dc=i,i?_r(i):Ft?_r(_t(Ft)):V.hoverCard&&(V.hoverCard.hidden=!0)},onPinClick:i=>{Ft=i.id,vn(new Date),mr(),V.eventZone&&(V.eventZone.value=i.tz),Jt()},onSelect:i=>{Ft=i,vn(new Date),mr()},onEventClick:i=>Gu?.onEventClick?.(i),onEventHover:i=>{!i||!V.hoverCard||(V.hoverCity.textContent=i.name,V.hoverTime.textContent="Sports event",V.hoverMeta.textContent=`${i.city||""} \xB7 click for schedule`,V.hoverCard.hidden=!1)}}),ze.setPinned(et),await ze.init(),ze.resize(),ue.homeCityId){let i=_t(ue.homeCityId);i&&ze.flyTo(i.lat,i.lng,1.4)}else if(ze.localCityId){let i=_t(ze.localCityId);i&&ze.flyTo(i.lat,i.lng,1.4)}pc(),setInterval(pc,1e3),setInterval(Jt,3e4)}function ot(i){return String(i).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}iy().catch(i=>{console.error(i),V0("Couldn't load the globe \u2014 "+(i?.message||"see logs"))});})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
