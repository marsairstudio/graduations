import{c as H,P as M,r as Q,B as V,o as p,d as w,Q as O,n as S,h as W,g as P,l as g,w as T}from"./index.1af2eae9.js";import{g as q,f as x,c as R}from"./dom.fa746100.js";const B={dark:{type:Boolean,default:null}};function I(e,n){return H(()=>e.dark===null?n.dark.isActive:e.dark)}function U(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),M.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}const F=[null,document,document.body,document.scrollingElement,document.documentElement];function N(e,n){let t=q(n);if(t===void 0){if(e==null)return window;t=e.closest(".scroll,.scroll-y,.overflow-auto")}return F.includes(t)?window:t}function L(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function k(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}function C(e,n,t=0){const o=arguments[3]===void 0?performance.now():arguments[3],i=L(e);if(t<=0){i!==n&&h(e,n);return}requestAnimationFrame(c=>{const r=c-o,a=i+(n-i)/Math.max(r,t)*r;h(e,a),a!==n&&C(e,n,t-r,c)})}function A(e,n,t=0){const o=arguments[3]===void 0?performance.now():arguments[3],i=k(e);if(t<=0){i!==n&&b(e,n);return}requestAnimationFrame(c=>{const r=c-o,a=i+(n-i)/Math.max(r,t)*r;b(e,a),a!==n&&A(e,n,t-r,c)})}function h(e,n){if(e===window){window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,n);return}e.scrollTop=n}function b(e,n){if(e===window){window.scrollTo(n,window.pageYOffset||window.scrollY||document.body.scrollTop||0);return}e.scrollLeft=n}function G(e,n,t){if(t){C(e,n,t);return}h(e,n)}function J(e,n,t){if(t){A(e,n,t);return}b(e,n)}let v;function K(){if(v!==void 0)return v;const e=document.createElement("p"),n=document.createElement("div");x(e,{width:"100%",height:"200px"}),x(n,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),n.appendChild(e),document.body.appendChild(n);const t=e.offsetWidth;n.style.overflow="scroll";let o=e.offsetWidth;return t===o&&(o=n.clientWidth),n.remove(),v=t-o,v}function X(){const e=Q(!V.value);return e.value===!1&&p(()=>{e.value=!0}),e}const D=typeof ResizeObserver!="undefined",z=D===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var Z=R({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:n}){let t=null,o,i={width:-1,height:-1};function c(s){s===!0||e.debounce===0||e.debounce==="0"?r():t===null&&(t=setTimeout(r,e.debounce))}function r(){if(t!==null&&(clearTimeout(t),t=null),o){const{offsetWidth:s,offsetHeight:l}=o;(s!==i.width||l!==i.height)&&(i={width:s,height:l},n("resize",i))}}const{proxy:a}=P();if(D===!0){let s;const l=d=>{o=a.$el.parentNode,o?(s=new ResizeObserver(c),s.observe(o),r()):d!==!0&&S(()=>{l(!0)})};return p(()=>{l()}),w(()=>{t!==null&&clearTimeout(t),s!==void 0&&(s.disconnect!==void 0?s.disconnect():o&&s.unobserve(o))}),O}else{let d=function(){t!==null&&(clearTimeout(t),t=null),l!==void 0&&(l.removeEventListener!==void 0&&l.removeEventListener("resize",c,g.passive),l=void 0)},f=function(){d(),o&&o.contentDocument&&(l=o.contentDocument.defaultView,l.addEventListener("resize",c,g.passive),r())};const s=X();let l;return p(()=>{S(()=>{o=a.$el,o&&f()})}),w(d),a.trigger=c,()=>{if(s.value===!0)return W("object",{style:z.style,tabindex:-1,type:"text/html",data:z.url,"aria-hidden":"true",onLoad:f})}}}});const{passive:E}=g,Y=["both","horizontal","vertical"];var _=R({name:"QScrollObserver",props:{axis:{type:String,validator:e=>Y.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:n}){const t={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let o=null,i,c;T(()=>e.scrollTarget,()=>{s(),a()});function r(){o!==null&&o();const f=Math.max(0,L(i)),m=k(i),u={top:f-t.position.top,left:m-t.position.left};if(e.axis==="vertical"&&u.top===0||e.axis==="horizontal"&&u.left===0)return;const y=Math.abs(u.top)>=Math.abs(u.left)?u.top<0?"up":"down":u.left<0?"left":"right";t.position={top:f,left:m},t.directionChanged=t.direction!==y,t.delta=u,t.directionChanged===!0&&(t.direction=y,t.inflectionPoint=t.position),n("scroll",{...t})}function a(){i=N(c,e.scrollTarget),i.addEventListener("scroll",l,E),l(!0)}function s(){i!==void 0&&(i.removeEventListener("scroll",l,E),i=void 0)}function l(f){if(f===!0||e.debounce===0||e.debounce==="0")r();else if(o===null){const[m,u]=e.debounce?[setTimeout(r,e.debounce),clearTimeout]:[requestAnimationFrame(r),cancelAnimationFrame];o=()=>{u(m),o=null}}}const{proxy:d}=P();return T(()=>d.$q.lang.rtl,r),p(()=>{c=d.$el.parentNode,a()}),w(()=>{o!==null&&o(),s()}),Object.assign(d,{trigger:l,getPosition:()=>t}),O}});export{Z as Q,I as a,N as b,U as c,_ as d,J as e,K as g,G as s,B as u};
