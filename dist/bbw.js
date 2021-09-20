!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e),n.d(e,"BoundingBoxes",(function(){return p}));var r=document.createElement("template");function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e,n,r,o,i,u){try{var c=t[i](u),s=c.value}catch(t){return void n(t)}c.done?e(s):Promise.resolve(s).then(r,o)}function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function c(t,e){if(e&&("object"===o(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function s(t){var e="function"==typeof Map?new Map:void 0;return(s=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return a(t,arguments,h(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),f(r,t)})(t)}function a(t,e,n){return(a=l()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&f(o,n.prototype),o}).apply(null,arguments)}function l(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function h(t){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}r.innerHTML='<img id="img" style="display:none"><canvas id=\'c\'></canvas>';var p=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(b,t);var e,n,o,s,a,p,y,d=(e=b,n=l(),function(){var t,r=h(e);if(n){var o=h(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return c(this,t)});function b(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,b),(t=d.call(this)).attachShadow({mode:"open"}).appendChild(r.content.cloneNode(!0)),t.audioContext=null,t.meter=null,t.canvasContext=null,t.rafID=null,t}return o=b,s=[{key:"imgUrl",get:function(){return this.getAttribute("imgUrl")},set:function(t){this.setAttribute("imgUrl",t)}},{key:"bboxes",get:function(){return this.getAttribute("bboxes")},set:function(t){this.setAttribute("bboxes",t)}},{key:"color",get:function(){return this.getAttribute("color")},set:function(t){this.setAttribute("color",t)}},{key:"width",get:function(){return parseInt(this.getAttribute("width"))},set:function(t){this.shadowRoot.querySelector("canvas")&&(this.shadowRoot.querySelector("canvas").width=this.width),this.setAttribute("width",parseInt(t))}},{key:"height",get:function(){return parseInt(this.getAttribute("height"))},set:function(t){this.shadowRoot.querySelector("canvas")&&(this.shadowRoot.querySelector("canvas").height=this.height),this.setAttribute("height",parseInt(t))}},{key:"connectedCallback",value:(p=regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.color="green",this.init();case 2:case"end":return t.stop()}}),t,this)})),y=function(){var t=this,e=arguments;return new Promise((function(n,r){var o=p.apply(t,e);function u(t){i(o,n,r,u,c,"next",t)}function c(t){i(o,n,r,u,c,"throw",t)}u(void 0)}))},function(){return y.apply(this,arguments)})},{key:"init",value:function(){var t=this.shadowRoot.querySelector("canvas");t.width=this.width,t.height=this.height,this.img=this.shadowRoot.querySelector("img"),this.img.src=this.imgUrl,this.canvasContext=this.shadowRoot.querySelector("canvas").getContext("2d"),this.render()}},{key:"render",value:function(t){var e=[];if(this.canvasContext.clearRect(0,0,this.width,this.height),this.canvasContext.drawImage(this.img,0,0,this.img.width,this.img.height),this.bboxes){"string"==typeof this.bboxes&&(e=JSON.parse(this.bboxes));for(var n=0;n<e.length;n++)this.canvasContext.strokeStyle=e[n].color||"green",e[n].label&&(this.canvasContext.font="20px Arial",this.canvasContext.fillStyle=e[n].color||"green",this.canvasContext.fillText(e[n].label,e[n].x,e[n].y)),this.canvasContext.strokeRect(e[n].x,e[n].y,e[n].width,e[n].height)}this.rafID=window.requestAnimationFrame(this.render.bind(this))}}],a=[{key:"observedAttributes",get:function(){return[imgUrl,width,height,bboxes,color]}}],s&&u(o.prototype,s),a&&u(o,a),b}(s(HTMLElement));customElements.define("bounding-boxes",p)}]);
//# sourceMappingURL=bbw.js.map