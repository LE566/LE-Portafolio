import{G as oe,r as g,R as ne,C as se,V as j,P as ie,M as le,T as ce,j as t,u as ue,b as de,a as fe,g as M,S as me}from"./index-DkpaRGVn.js";import{F as pe,a as he}from"./index-uGxrMu_Y.js";import"./iconBase-AER4lTx-.js";class ge extends oe{constructor(e,{attributes:r={}}={}){Object.assign(r,{position:{size:2,data:new Float32Array([-1,-1,3,-1,-1,3])},uv:{size:2,data:new Float32Array([0,0,2,0,0,2])}}),super(e,r)}}function q(o){const e=o.replace("#",""),r=parseInt(e.substring(0,2),16)/255,d=parseInt(e.substring(2,4),16)/255,i=parseInt(e.substring(4,6),16)/255;return[r,d,i]}function B(o){return o-Math.floor(o)}function xe(o){let e=[o*.1031,o*.103,o*.0973].map(B);const r=[e[1],e[2],e[0]],d=e[0]*(r[0]+33.33)+e[1]*(r[1]+33.33)+e[2]*(r[2]+33.33);for(let i=0;i<3;i++)e[i]=B(e[i]+d);return e}function ve(o){let e=[o[0]*.1031,o[1]*.103,o[2]*.0973].map(B);const r=[e[1],e[0],e[2]],d=e[0]*(r[0]+33.33)+e[1]*(r[1]+33.33)+e[2]*(r[2]+33.33);for(let n=0;n<3;n++)e[n]=B(e[n]+d);const i=[e[0],e[0],e[1]],v=[e[1],e[0],e[0]],p=[e[2],e[1],e[0]],h=[];for(let n=0;n<3;n++)h[n]=B((i[n]+v[n])*p[n]);return h}const ye=`#version 300 es
precision highp float;
layout(location = 0) in vec2 position;
void main() {
    gl_Position = vec4(position, 0.0, 1.0);
}
`,be=`#version 300 es
precision highp float;
uniform vec3 iResolution;
uniform float iTime;
uniform vec3 iMouse;
uniform vec3 iColor;
uniform vec3 iCursorColor;
uniform float iAnimationSize;
uniform int iBallCount;
uniform float iCursorBallSize;
uniform vec3 iMetaBalls[50];
uniform float iClumpFactor;
uniform bool enableTransparency;
out vec4 outColor;
const float PI = 3.14159265359;
 
float getMetaBallValue(vec2 c, float r, vec2 p) {
    vec2 d = p - c;
    float dist2 = dot(d, d);
    return (r * r) / dist2;
}
 
void main() {
    vec2 fc = gl_FragCoord.xy;
    float scale = iAnimationSize / iResolution.y;
    vec2 coord = (fc - iResolution.xy * 0.5) * scale;
    vec2 mouseW = (iMouse.xy - iResolution.xy * 0.5) * scale;
    float m1 = 0.0;
    for (int i = 0; i < 50; i++) {
        if (i >= iBallCount) break;
        m1 += getMetaBallValue(iMetaBalls[i].xy, iMetaBalls[i].z, coord);
    }
    float m2 = getMetaBallValue(mouseW, iCursorBallSize, coord);
    float total = m1 + m2;
    float f = smoothstep(-1.0, 1.0, (total - 1.3) / min(1.0, fwidth(total)));
    vec3 cFinal = vec3(0.0);
    if (total > 0.0) {
        float alpha1 = m1 / total;
        float alpha2 = m2 / total;
        cFinal = iColor * alpha1 + iCursorColor * alpha2;
    }
    outColor = vec4(cFinal * f, enableTransparency ? f : 1.0);
}
`,we=({color:o="#ffffff",speed:e=.3,enableMouseInteraction:r=!0,hoverSmoothness:d=.05,animationSize:i=30,ballCount:v=15,clumpFactor:p=1,cursorBallSize:h=3,cursorBallColor:n="#ffffff",enableTransparency:a=!1})=>{const L=g.useRef(null);return g.useEffect(()=>{const l=L.current;if(!l)return;const E=1,R=new ne({dpr:E,alpha:!0,premultipliedAlpha:!1}),s=R.gl;s.clearColor(0,0,0,a?0:1),l.appendChild(s.canvas);const A=new se(s,{left:-1,right:1,top:1,bottom:-1,near:.1,far:10});A.position.z=1;const O=new ge(s),[$,D,U]=q(o),[J,K,Q]=q(n),S=[];for(let c=0;c<50;c++)S.push(new j(0,0,0));const N=new ie(s,{vertex:ye,fragment:be,uniforms:{iTime:{value:0},iResolution:{value:new j(0,0,0)},iMouse:{value:new j(0,0,0)},iColor:{value:new j($,D,U)},iCursorColor:{value:new j(J,K,Q)},iAnimationSize:{value:i},iBallCount:{value:v},iCursorBallSize:{value:h},iMetaBalls:{value:S},iClumpFactor:{value:p},enableTransparency:{value:a}}}),Z=new le(s,{geometry:O,program:N}),_=new ce;Z.setParent(_);const I=Math.min(v,50),V=[];for(let c=0;c<I;c++){const u=c+1,f=xe(u),y=f[0]*(2*Math.PI),x=.1*Math.PI+f[1]*(.4*Math.PI-.1*Math.PI),m=5+f[1]*5,b=ve(f),C=Math.floor(b[0]*2),F=.5+b[2]*(2-.5);V.push({st:y,dtFactor:x,baseScale:m,toggle:C,radius:F})}const w={x:0,y:0};let z=!1,k=0,G=0;function P(){if(!l)return;const c=l.clientWidth,u=l.clientHeight;R.setSize(c*E,u*E),s.canvas.style.width=`${c}px`,s.canvas.style.height=`${u}px`,N.uniforms.iResolution.value.set(s.canvas.width,s.canvas.height,0)}window.addEventListener("resize",P),P();function W(c){if(!r||!l)return;const u=l.getBoundingClientRect(),f=c.clientX-u.left,y=c.clientY-u.top;k=f/u.width*s.canvas.width,G=(1-y/u.height)*s.canvas.height}function H(){r&&(z=!0)}function X(){r&&(z=!1)}l.addEventListener("pointermove",W),l.addEventListener("pointerenter",H),l.addEventListener("pointerleave",X);const ee=performance.now();let T;function Y(c){T=requestAnimationFrame(Y);const u=(c-ee)*.001;N.uniforms.iTime.value=u;for(let x=0;x<I;x++){const m=V[x],b=u*e*m.dtFactor,C=m.st+b,F=Math.cos(C),te=Math.sin(C+b*m.toggle),re=F*m.baseScale*p,ae=te*m.baseScale*p;S[x].set(re,ae,m.radius)}let f,y;if(z)f=k,y=G;else{const x=s.canvas.width*.5,m=s.canvas.height*.5,b=s.canvas.width*.15,C=s.canvas.height*.15;f=x+Math.cos(u*e)*b,y=m+Math.sin(u*e)*C}w.x+=(f-w.x)*d,w.y+=(y-w.y)*d,N.uniforms.iMouse.value.set(w.x,w.y,0),R.render({scene:_,camera:A})}return T=requestAnimationFrame(Y),()=>{cancelAnimationFrame(T),window.removeEventListener("resize",P),l.removeEventListener("pointermove",W),l.removeEventListener("pointerenter",H),l.removeEventListener("pointerleave",X),l.removeChild(s.canvas),s.getExtension("WEBGL_lose_context")?.loseContext()}},[o,n,e,r,d,i,v,p,h,a]),t.jsx("div",{ref:L,className:"w-full h-full relative"})};M.registerPlugin(me);const Ce=()=>{const[o,e]=g.useState([]),[r,d]=g.useState(!0),[i,v]=g.useState(null),p=g.useRef(null),h=g.useRef(null),n=ue();return g.useEffect(()=>{fetch("https://api.github.com/users/LE566/repos").then(a=>{if(!a.ok)throw new Error("Error fetching repos");return a.json()}).then(a=>{e(a),d(!1)}).catch(a=>{v(a.message),d(!1)})},[]),de(()=>{if(r||n)return;M.fromTo(h.current,{opacity:0,x:-120},{opacity:1,x:0,duration:1.4,delay:.15,ease:"easeOut",scrollTrigger:{trigger:h.current,start:"top 85%"}}),M.fromTo(".metaballs-container",{opacity:0},{opacity:1,duration:1.2,delay:.4,ease:"easeOut",scrollTrigger:{trigger:".metaballs-container",start:"top 85%"}});const a=M.utils.toArray(".repo-card");M.fromTo(a,{opacity:0,y:35},{opacity:1,y:0,duration:.5,stagger:.1,ease:"power2.out",scrollTrigger:{trigger:".cards-container",start:"top 80%"}})},{scope:p,dependencies:[r,n]}),r?t.jsx("p",{className:"text-center my-10 text-cyan-300",children:"Cargando proyectos..."}):i?t.jsx("p",{className:"text-center my-10 text-red-400",children:i}):t.jsxs("section",{ref:p,id:"proyectos",className:"relative max-w-7xl mx-auto px-6 mb-40 grid grid-cols-1 lg:grid-cols-2 gap-12",children:[t.jsxs("div",{className:"lg:sticky lg:top-20 lg:h-[80vh] flex flex-col justify-center relative mt-20",children:[t.jsxs("div",{ref:h,children:[t.jsx("h2",{className:"text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-white",children:"Mis Proyectos"}),t.jsxs("p",{className:"text-xl text-gray-300 mb-8 leading-relaxed",children:[t.jsx(fe,{text:"Aquí encontrarás una selección de mis trabajos más recientes.",disabled:!1,speed:5,className:"text-xl text-gray-300"}),t.jsx("span",{className:"block mt-2 text-cyan-300/80",children:"Cada proyecto representa un desafío único."})]}),t.jsx("div",{className:"w-20 h-1 bg-gradient-to-r from-cyan-400 to-transparent mb-6"})]}),!n&&t.jsx("div",{className:"w-full h-80 metaballs-container opacity-0",children:t.jsx(we,{color:"#22d3ee",cursorBallColor:"#22d3ee",cursorBallSize:3,ballCount:18,animationSize:30,enableMouseInteraction:!0,enableTransparency:!0,hoverSmoothness:.05,clumpFactor:1,speed:.3})})]}),t.jsx("div",{className:"space-y-8 mt-10 lg:mt-40 cards-container",children:o.map(a=>t.jsxs("div",{className:"repo-card group relative bg-gray-900/80 backdrop-blur-sm rounded-xl p-8 shadow-2xl border border-gray-700 hover:border-cyan-400/30 transition-all duration-300",children:[t.jsx("div",{className:"absolute inset-0 rounded-xl border-2 border-cyan-400/0 group-hover:border-cyan-400/30 pointer-events-none transition-all duration-500"}),t.jsx("h3",{className:"text-2xl font-bold text-cyan-300 mb-3",children:a.name.replace(/-/g," ")}),t.jsx("p",{className:"text-gray-300 mb-6",children:a.description||"Descripción no disponible"}),t.jsxs("div",{className:"flex space-x-4",children:[t.jsxs("a",{href:a.html_url,target:"_blank",rel:"noreferrer",className:"flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-700 text-cyan-300 rounded-lg transition border border-gray-700 hover:border-cyan-400/50",children:[t.jsx(pe,{className:"mr-2"})," Ver código"]}),a.homepage&&t.jsxs("a",{href:a.homepage,target:"_blank",rel:"noreferrer",className:"flex items-center px-4 py-2 bg-cyan-400/10 hover:bg-cyan-400/20 text-cyan-300 rounded-lg transition border border-cyan-400/20 hover:border-cyan-400/40",children:[t.jsx(he,{className:"mr-2"})," Demo"]})]})]},a.id))})]})},Ee=g.memo(Ce);export{Ee as default};
