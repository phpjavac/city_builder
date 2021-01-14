(function(e){function n(n){for(var o,r,i=n[0],l=n[1],u=n[2],s=0,f=[];s<i.length;s++)r=i[s],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&f.push(c[r][0]),c[r]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);d&&d(n);while(f.length)f.shift()();return a.push.apply(a,u||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],o=!0,r=1;r<t.length;r++){var i=t[r];0!==c[i]&&(o=!1)}o&&(a.splice(n--,1),e=l(l.s=t[0]))}return e}var o={},r={app:0},c={app:0},a=[];function i(e){return l.p+"js/"+({}[e]||e)+"."+{"chunk-4748f5a5":"650729c3"}[e]+".js"}function l(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,l),t.l=!0,t.exports}l.e=function(e){var n=[],t={"chunk-4748f5a5":1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=new Promise((function(n,t){for(var o="css/"+({}[e]||e)+"."+{"chunk-4748f5a5":"a7c10401"}[e]+".css",c=l.p+o,a=document.getElementsByTagName("link"),i=0;i<a.length;i++){var u=a[i],s=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(s===o||s===c))return n()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){u=f[i],s=u.getAttribute("data-href");if(s===o||s===c)return n()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=n,d.onerror=function(n){var o=n&&n.target&&n.target.src||c,a=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=o,delete r[e],d.parentNode.removeChild(d),t(a)},d.href=c;var v=document.getElementsByTagName("head")[0];v.appendChild(d)})).then((function(){r[e]=0})));var o=c[e];if(0!==o)if(o)n.push(o[2]);else{var a=new Promise((function(n,t){o=c[e]=[n,t]}));n.push(o[2]=a);var u,s=document.createElement("script");s.charset="utf-8",s.timeout=120,l.nc&&s.setAttribute("nonce",l.nc),s.src=i(e);var f=new Error;u=function(n){s.onerror=s.onload=null,clearTimeout(d);var t=c[e];if(0!==t){if(t){var o=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;f.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",f.name="ChunkLoadError",f.type=o,f.request=r,t[1](f)}c[e]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:s})}),12e4);s.onerror=s.onload=u,document.head.appendChild(s)}return Promise.all(n)},l.m=e,l.c=o,l.d=function(e,n,t){l.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,n){if(1&n&&(e=l(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(l.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)l.d(t,o,function(n){return e[n]}.bind(null,o));return t},l.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(n,"a",n),n},l.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},l.p="/city_builder/",l.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=n,u=u.slice();for(var f=0;f<u.length;f++)n(u[f]);var d=s;a.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("cd49")},"6fdd":function(e,n,t){"use strict";t("7f0c")},"7f0c":function(e,n,t){},cd49:function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var o=t("7a23"),r={class:"city-builder"},c={class:"area"};function a(e,n,t,a,i,l){var u=Object(o["m"])("Tools");return Object(o["h"])(),Object(o["c"])("div",r,[Object(o["d"])(u,{onActiveTool:e.activeTool,onScale:e.scale},null,8,["onActiveTool","onScale"]),Object(o["d"])("div",c,[Object(o["d"])("canvas",{ref:"bgCanvas",style:"transform:scale(".concat(e.size,")")},null,4),Object(o["d"])("canvas",{ref:"fgCanvas",onMousemove:n[1]||(n[1]=function(){return e.mousemove&&e.mousemove.apply(e,arguments)}),onMouseup:n[2]||(n[2]=function(){return e.unclick&&e.unclick.apply(e,arguments)}),onMousedown:n[3]||(n[3]=function(){return e.click&&e.click.apply(e,arguments)}),onTouchend:n[4]||(n[4]=function(){return e.click&&e.click.apply(e,arguments)}),onPointerup:n[5]||(n[5]=function(){return e.click&&e.click.apply(e,arguments)}),style:"transform:scale(".concat(e.size,")")},null,36)])])}t("cb29"),t("d3b7");var i=Object(o["f"])({components:{Tools:Object(o["e"])((function(){return t.e("chunk-4748f5a5").then(t.bind(null,"10e2"))}))},props:{},setup:function(){var e,n,t,r=Object(o["k"])(1),c=Object(o["k"])(null),a=Object(o["k"])(null),i=[0,0],l=function(e){i=[e.i,e.j],console.log(i)},u=[[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]]],s=14,f=910,d=462,v=128,p=64,h=new Image;h.src="/city_builder/textures/01_130x66_130x230.png";var g=function(e,n,t,o,r){e.save(),e.translate((t-n)*v/2,(n+t)*p/2);var c=130*r,a=230*o;e.drawImage(h,c,a,130,230,-65,-130,130,230),e.restore()},b=function(){if(n){n.clearRect(-f,-d,2*f,2*d);for(var e=0;e<s;e++)for(var t=0;t<s;t++)g(n,e,t,u[e][t][0],u[e][t][1])}},m=function(){var e,o;n=null===(e=c.value)||void 0===e?void 0:e.getContext("2d"),t=null===(o=a.value)||void 0===o?void 0:o.getContext("2d"),n&&t&&(n.translate(910,0),t.translate(910,0),b(),console.log(n))},y=function(e){var n=e.offsetY/p,t=e.offsetX/v-s/2;return{x:Math.floor(n-t),y:Math.floor(t+n)}};Object(o["g"])((function(){c.value&&a.value&&(c.value.width=window.innerWidth,c.value.height=window.innerHeight,a.value.width=window.innerWidth,a.value.height=window.innerHeight,h.onload=function(){return m()})}));var w=function(e,n,t,o){e.save(),e.translate((t-n)*v/2,(n+t)*p/2),e.beginPath(),e.moveTo(0,0),e.lineTo(v/2,p/2),e.lineTo(0,p),e.lineTo(-v/2,p/2),e.closePath(),e.fillStyle=o,e.fill(),e.restore()},k=function(n){var o=y(n);o.x>=0&&o.x<s&&o.y>=0&&o.y<s&&(u[o.x][o.y][0]=3===n.which?0:i[0],u[o.x][o.y][1]=3===n.which?0:i[1],e=!0,b(),t&&t.clearRect(-f,-d,2*f,2*d))},j=function(n){var o=y(n);e&&k(n),t&&a.value&&(t.clearRect(-f,-d,2*a.value.width,2*a.value.height),o.x>=0&&o.x<s&&o.y>=0&&o.y<s&&w(t,o.x,o.y,"rgba(0,0,0,0.2)"))},O=function(){e&&(e=!1)},x=function(){r.value*=1.5};return{bgCanvas:c,fgCanvas:a,activeTool:l,mousemove:j,unclick:O,click:k,scale:x,size:r}}});t("6fdd");i.render=a;var l=i,u=t("9483");Object(u["a"])("".concat("/city_builder/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),Object(o["b"])(l).mount("#app")}});
//# sourceMappingURL=app.fb56ab2d.js.map