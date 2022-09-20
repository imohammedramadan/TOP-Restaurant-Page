(()=>{"use strict";var n={498:(n,e,r)=>{r.d(e,{Z:()=>c});var t=r(81),a=r.n(t),i=r(645),o=r.n(i)()(a());o.push([n.id,".contact-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n\r\n  place-items: center;\r\n  padding-top: 40px;\r\n  gap: 40px;\r\n  text-align: center;\r\n}\r\n.call-container,\r\n.address-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n}\r\n.contact-container h2 {\r\n  font-size: 50px;\r\n}\r\n\r\n.contact-container p {\r\n  font-size: 30px;\r\n}\r\n",""]);const c=o},6:(n,e,r)=>{r.d(e,{Z:()=>c});var t=r(81),a=r.n(t),i=r(645),o=r.n(i)()(a());o.push([n.id,".nav-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  place-items: center;\r\n  background-color: var(--blue-300);\r\n  gap: 10px;\r\n  padding-top: 10px;\r\n  color: var(--font-color);\r\n}\r\n\r\n.nav-list {\r\n  display: flex;\r\n  gap: 100px;\r\n  place-content: center;\r\n}\r\n\r\n.nav-btn {\r\n  font-size: 26px;\r\n  background-color: transparent;\r\n  color: var(--font-color);\r\n  border: 2px solid var(--blue-200);\r\n  border-bottom: none;\r\n  padding: 10px 20px;\r\n  cursor: pointer;\r\n  border-radius: 16px 16px 0 0;\r\n}\r\n\r\n.active-tab {\r\n  background-color: var(--dark);\r\n  border: 2px solid var(--dark);\r\n  border-bottom: none;\r\n}\r\n",""]);const c=o},511:(n,e,r)=>{r.d(e,{Z:()=>c});var t=r(81),a=r.n(t),i=r(645),o=r.n(i)()(a());o.push([n.id,".hero-container {\r\n  padding: 40px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  place-items: center;\r\n  gap: 20px;\r\n}\r\n",""]);const c=o},363:(n,e,r)=>{r.d(e,{Z:()=>c});var t=r(81),a=r.n(t),i=r(645),o=r.n(i)()(a());o.push([n.id,".menu-container {\r\n  padding: 40px;\r\n  display: flex;\r\n  place-content: center;\r\n  place-items: center;\r\n}\r\n\r\n.menu-list {\r\n  display: grid;\r\n  grid-template-columns: repeat(2, 1fr);\r\n  gap: 100px;\r\n}\r\n\r\n.menu-item {\r\n  border: 1px solid var(--blue-200);\r\n  border-radius: 14px;\r\n  padding: 10px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  place-items: center;\r\n  place-content: center;\r\n  gap: 10px;\r\n}\r\n.item-title h2 {\r\n  font-size: 40px;\r\n}\r\n\r\n.item-price p {\r\n  font-size: 24px;\r\n}\r\n\r\n.item-img img {\r\n  height: 200px;\r\n  width: auto;\r\n}\r\n",""]);const c=o},426:(n,e,r)=>{r.d(e,{Z:()=>c});var t=r(81),a=r.n(t),i=r(645),o=r.n(i)()(a());o.push([n.id,":root {\r\n  --dark: #121212;\r\n  --blue-300: #053742;\r\n  --blue-200: #39a2db;\r\n  --blue-100: #a2dbfa;\r\n  --font-color: #ffffff;\r\n}\r\n\r\nhtml {\r\n  box-sizing: border-box;\r\n  font-size: 16px;\r\n}\r\n\r\n*,\r\n*:before,\r\n*:after {\r\n  box-sizing: inherit;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  color: var(--font-color);\r\n}\r\n\r\nbody,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6,\r\np,\r\nol,\r\nul {\r\n  margin: 0;\r\n  padding: 0;\r\n  font-weight: normal;\r\n}\r\n\r\nol,\r\nul {\r\n  list-style: none;\r\n}\r\n\r\nimg {\r\n  max-width: 100%;\r\n  height: auto;\r\n}\r\n\r\nbody {\r\n  background-color: var(--dark);\r\n}\r\n",""]);const c=o},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r="",t=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),t&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=n(e),t&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(n,r,t,a,i){"string"==typeof n&&(n=[[null,n,void 0]]);var o={};if(t)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(o[s]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);t&&o[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),r&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=r):d[2]=r),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),e.push(d))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function r(n){for(var r=-1,t=0;t<e.length;t++)if(e[t].identifier===n){r=t;break}return r}function t(n,t){for(var i={},o=[],c=0;c<n.length;c++){var s=n[c],l=t.base?s[0]+t.base:s[0],d=i[l]||0,p="".concat(l," ").concat(d);i[l]=d+1;var u=r(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var v=a(m,t);t.byIndex=c,e.splice(c,0,{identifier:p,updater:v,references:1})}o.push(p)}return o}function a(n,e){var r=e.domAPI(e);return r.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;r.update(n=e)}else r.remove()}}n.exports=function(n,a){var i=t(n=n||[],a=a||{});return function(n){n=n||[];for(var o=0;o<i.length;o++){var c=r(i[o]);e[c].references--}for(var s=t(n,a),l=0;l<i.length;l++){var d=r(i[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}i=s}}},569:n=>{var e={};n.exports=function(n,r){var t=function(n){if(void 0===e[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,r)=>{n.exports=function(n){var e=r.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(r){!function(n,e,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var a=void 0!==r.layer;a&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,a&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var i=r.sourceMap;i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(t,n,e.options)}(e,n,r)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function r(t){var a=e[t];if(void 0!==a)return a.exports;var i=e[t]={id:t,exports:{}};return n[t](i,i.exports,r),i.exports}r.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return r.d(e,{a:e}),e},r.d=(n,e)=>{for(var t in e)r.o(e,t)&&!r.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),r.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;r.g.importScripts&&(n=r.g.location+"");var e=r.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var t=e.getElementsByTagName("script");t.length&&(n=t[t.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=n})(),r.nc=void 0,(()=>{var n=r(379),e=r.n(n),t=r(795),a=r.n(t),i=r(569),o=r.n(i),c=r(565),s=r.n(c),l=r(216),d=r.n(l),p=r(589),u=r.n(p),m=r(426),v={};v.styleTagTransform=u(),v.setAttributes=s(),v.insert=o().bind(null,"head"),v.domAPI=a(),v.insertStyleElement=d(),e()(m.Z,v),m.Z&&m.Z.locals&&m.Z.locals;var f=r(6),h={};h.styleTagTransform=u(),h.setAttributes=s(),h.insert=o().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=d(),e()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;var b=r(511),g={};function x(n){const e=document.createElement("div");e.classList.add("hero-container"),e.innerHTML='<div class="headline">\n  <h1>Welcome to Bebo\'s</h1>\n</div>\n<div class="self-adv">\n  <p>We\'re a cool restaurant, please Checkout our menu and visit us!</p>\n</div>\n',n.appendChild(e)}g.styleTagTransform=u(),g.setAttributes=s(),g.insert=o().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=d(),e()(b.Z,g),b.Z&&b.Z.locals&&b.Z.locals;var y=r(363),T={};T.styleTagTransform=u(),T.setAttributes=s(),T.insert=o().bind(null,"head"),T.domAPI=a(),T.insertStyleElement=d(),e()(y.Z,T),y.Z&&y.Z.locals&&y.Z.locals;const Z=r.p+"4560962f93474ce5b61f.jpg",L=r.p+"3465420826def7e78e4b.jpg",E=r.p+"13db88f66f4b5f347d2f.jpg";var w=r(498),S={};S.styleTagTransform=u(),S.setAttributes=s(),S.insert=o().bind(null,"head"),S.domAPI=a(),S.insertStyleElement=d(),e()(w.Z,S),w.Z&&w.Z.locals&&w.Z.locals,document.body.appendChild(document.createElement("header"));const C=document.querySelector("header");document.body.appendChild(document.createElement("div")).setAttribute("id","content");const M=document.getElementById("content");window.addEventListener("DOMContentLoaded",(()=>{!function(n){const e=document.createElement("div");e.classList.add("nav-container"),e.innerHTML='\n  <div class="logo">\n      <h1>Bebo\'s</h1>\n    </div>\n    <nav>\n      <ul class="nav-list">\n        <li class="nav-item nav-home">\n          <button type="button" class="nav-btn home-btn active-tab">Home</button>\n        </li>\n        <li class="nav-item nav-menu">\n          <button type="button" class="nav-btn menu-btn ">Menu</button>\n        </li>\n        <li class="nav-item nav-contact">\n          <button type="button" class="nav-btn contact-btn">Contact</button>\n        </li>\n      </ul>\n    </nav>',n.appendChild(e)}(C),x(M),document.querySelector(".nav-list").addEventListener("click",(n=>{n.target.classList.contains("menu-btn")?(M.innerHTML="",function(n){const e=document.createElement("div");e.classList.add("menu-container"),e.innerHTML=`<ul class="menu-list">\n  <li class="menu-item">\n    <div class="item-title">\n      <h2>Pizza</h2>\n    </div>\n    <div class="item-img">\n      <img src="${L}" height="200px">\n    </div>\n    <div class="item-price">\n      <p>3.99$</p>\n    </div>\n  </li>\n  <li class="menu-item">\n    <div class="item-title">\n      <h2>Burger</h2>\n    </div>\n    <div class="item-img">\n      <img src="${E}" height="200px">\n    </div>\n    <div class="item-price">\n      <p>5.99$</p>\n    </div>\n  </li>\n  <li class="menu-item">\n    <div class="item-title">\n      <h2>Steak</h2>\n    </div>\n    <div class="item-img">\n      <img src="${Z}" height="200px">\n    </div>\n    <div class="item-price">\n      <p>10.99$</p>\n    </div>\n  </li>\n</ul>`,n.appendChild(e)}(M)):n.target.classList.contains("contact-btn")?(M.innerHTML="",function(n){const e=document.createElement("div");e.classList.add("contact-container"),e.innerHTML='<div class="call-container">\n  <h2>Call us here!</h2>\n  <p>+01234567890</p>\n</div>\n<div class="address-container">\n  <h2>Visit us here!</h2>\n  <p>221B Baker Street</p>\n</div>',n.appendChild(e)}(M)):n.target.classList.contains("home-btn")&&(M.innerHTML="",x(M)),function(n){const e=document.querySelector(".active-tab");e&&e.classList.remove("active-tab"),n.add("active-tab")}(n.target.classList)}))}))})()})();