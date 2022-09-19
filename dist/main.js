(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>c});var r=t(81),i=t.n(r),a=t(645),o=t.n(a)()(i());o.push([n.id,"html {\r\n  box-sizing: border-box;\r\n  font-size: 16px;\r\n}\r\n\r\n*,\r\n*:before,\r\n*:after {\r\n  box-sizing: inherit;\r\n}\r\n\r\nbody,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6,\r\np,\r\nol,\r\nul {\r\n  margin: 0;\r\n  padding: 0;\r\n  font-weight: normal;\r\n}\r\n\r\nol,\r\nul {\r\n  list-style: none;\r\n}\r\n\r\nimg {\r\n  max-width: 100%;\r\n  height: auto;\r\n}\r\n\r\n.nav-list {\r\n  display: flex;\r\n  gap: 100px;\r\n  place-content: center;\r\n}\r\n\r\n.nav-list button {\r\n  font-size: 26px;\r\n  background-color: #1f1f1f;\r\n  color: white;\r\n  border: none;\r\n  padding: 20px 20px;\r\n}\r\n\r\n.hero-container {\r\n  background-color: aqua;\r\n  padding: 40px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  place-items: center;\r\n  gap: 20px;\r\n}\r\n\r\n.menu-container {\r\n  padding: 40px;\r\n  display: flex;\r\n  place-content: center;\r\n  place-items: center;\r\n}\r\n.menu-list {\r\n  display: grid;\r\n  grid-template-columns: repeat(2, 1fr);\r\n  gap: 100px;\r\n}\r\n.menu-item {\r\n  border: 1px solid #1f1f1f;\r\n  border-radius: 14px;\r\n  padding: 10px;\r\n  background-color: bisque;\r\n}\r\n",""]);const c=o},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,i,a){"string"==typeof n&&(n=[[null,n,void 0]]);var o={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(o[s]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);r&&o[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),i&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=i):d[4]="".concat(i)),e.push(d))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},o=[],c=0;c<n.length;c++){var s=n[c],l=r.base?s[0]+r.base:s[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var p=t(u),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(m);else{var v=i(m,r);r.byIndex=c,e.splice(c,0,{identifier:u,updater:v,references:1})}o.push(u)}return o}function i(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,i){var a=r(n=n||[],i=i||{});return function(n){n=n||[];for(var o=0;o<a.length;o++){var c=t(a[o]);e[c].references--}for(var s=r(n,i),l=0;l<a.length;l++){var d=t(a[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,i&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var i=e[r];if(void 0!==i)return i.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");r.length&&(n=r[r.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),r=t(795),i=t.n(r),a=t(569),o=t.n(a),c=t(565),s=t.n(c),l=t(216),d=t.n(l),u=t(589),p=t.n(u),m=t(426),v={};v.styleTagTransform=p(),v.setAttributes=s(),v.insert=o().bind(null,"head"),v.domAPI=i(),v.insertStyleElement=d(),e()(m.Z,v),m.Z&&m.Z.locals&&m.Z.locals;const f=t.p+"e0a9f63abdc74ede775b.png";function h(n){const e=document.createElement("div");e.classList.add("hero-container"),e.innerHTML=`<div class="headline">\n  <h1>Welcome to UnknownSquad Restaurant</h1>\n</div>\n<div class="self-adv">\n  <p>Hi! this is a cool restaurant, please visit!</p>\n</div>\n<div class="adv-img">\n  <img src="${f}" alt="" />\n</div>`,n.appendChild(e)}document.body.appendChild(document.createElement("header"));const b=document.querySelector("header");document.body.appendChild(document.createElement("div")).setAttribute("id","content");const g=document.getElementById("content");!function(n){const e=document.createElement("div");e.classList.add("nav-container"),e.innerHTML='<nav>\n  <ul class="nav-list">\n    <li class="nav-item nav-home">\n      <button type="button" class="home-btn">Home</button>\n    </li>\n    <li class="nav-item nav-menu">\n      <button type="button" class="menu-btn">Menu</button>\n    </li>\n    <li class="nav-item nav-contact">\n      <button type="button" class="contact-btn">Contact</button>\n    </li>\n  </ul>\n</nav>',n.appendChild(e)}(b),h(g),document.querySelector(".nav-list").addEventListener("click",(n=>{"menu-btn"===n.target.classList.value?(g.innerHTML="",function(n){const e=document.createElement("div");e.classList.add("menu-container"),e.innerHTML='<ul class="menu-list">\n  <li class="menu-item">\n    <div class="item-title">\n      <h2>Pizza</h2>\n    </div>\n    <div class="item-price">\n      <p>3.99$</p>\n    </div>\n  </li>\n  <li class="menu-item">\n    <div class="item-title">\n      <h2>Cake</h2>\n    </div>\n    <div class="item-price">\n      <p>5.99$</p>\n    </div>\n  </li>\n  <li class="menu-item">\n    <div class="item-title">\n      <h2>Steak</h2>\n    </div>\n    <div class="item-price">\n      <p>10.99$</p>\n    </div>\n  </li>\n  <li class="menu-item">\n    <div class="item-title">\n      <h2>A whole Cow!</h2>\n    </div>\n    <div class="item-price">\n      <p>199.99$</p>\n    </div>\n  </li>\n</ul>',n.appendChild(e)}(g)):"contact-btn"===n.target.classList.value?contactComponent(g):"home-btn"===n.target.classList.value&&(g.innerHTML="",h(g)),console.log(n.target.parentNode.parentNode)}))})()})();