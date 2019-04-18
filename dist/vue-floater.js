!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueFloater=t():e.VueFloater=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=2)}([function(e,t,n){n(7);var r=n(5)(n(1),n(6),null,null);e.exports=r.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"floater",props:{on:{type:Boolean,default:!0},fixed:{type:Boolean,default:!1},label:{type:String,default:""},dispatch:{type:Boolean,default:!0},for:{type:String,default:null},activeOnFocus:{type:Boolean,default:!1}},data:function(){return{formEl:void 0,labelEl:void 0,isActive:!1,isFocused:!1}},mounted:function(){this.formEl=this.$el.querySelector("input, textarea, select"),this.formEl.addEventListener("input",this.updateIsActive),this.formEl.addEventListener("input",this.updateIsFocused),this.formEl.addEventListener("blur",this.updateIsFocused),this.formEl.addEventListener("focus",this.updateIsFocused),this.for||(this.labelEl=this.$el.querySelector("label"),this.labelEl.addEventListener("click",this.focusFormEl)),this.dispatchInput()},beforeDestroy:function(){this.formEl.removeEventListener("input",this.updateIsActive),this.formEl.removeEventListener("input",this.updateIsFocused),this.formEl.removeEventListener("blur",this.updateIsFocused),this.formEl.removeEventListener("focus",this.updateIsFocused)},methods:{dispatchInput:function(){if(this.dispatch){var e=document.createEvent("HTMLEvents");e.initEvent("input",!0,!1),this.formEl.dispatchEvent(e)}},focusFormEl:function(){this.formEl.focus()},updateIsActive:function(e){this.isActive=e.target.value.length>0},updateIsFocused:function(e){this.isFocused=e.target===document.activeElement&&(this.activeOnFocus||this.isActive)}},computed:{inputId:function(){return this.for},classObject:function(){return{"vfl-label-on-input":this.on&&(this.isActive||this.fixed),"vfl-label-on-focus":this.isFocused,"vfl-label-active":this.activeOnFocus&&this.isFocused}},wrapperClassObject:function(){return{"vfl-active":this.activeOnFocus&&this.isFocused}},formElType:function(){return this.formEl?this.formEl.tagName.toLowerCase():""},floater:function(){if(this.label)return this.label;switch(this.formElType){case"input":case"textarea":return this.formEl.placeholder;case"select":return this.formEl.querySelector("option[disabled][selected]").innerHTML;default:return""}}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=function(e){return e&&e.__esModule?e:{default:e}}(r),i={install:function(e,t){e.component(o.default.name,o.default)}};"undefined"!=typeof window&&window.Vue&&window.Vue.use(i),t.default=i},function(e,t,n){t=e.exports=n(4)(),t.push([e.i,".vfl-has-label{position:relative}.vfl-label{position:absolute;top:0;right:0;left:.1em;overflow:hidden;font-family:sans-serif;font-size:.8em;color:#aaa;text-overflow:ellipsis;white-space:nowrap;pointer-events:none;opacity:0;transition:all .2s ease-out}.vfl-label-active,.vfl-label-on-input{top:-1.3em;pointer-events:all;opacity:1}.vfl-active input::-webkit-input-placeholder,.vfl-active textarea::-webkit-input-placeholder{color:transparent}.vfl-active input:-moz-placeholder,.vfl-active input::-moz-placeholder,.vfl-active textarea:-moz-placeholder,.vfl-active textarea::-moz-placeholder{color:transparent}.vfl-active input:-ms-input-placeholder,.vfl-active textarea:-ms-input-placeholder{color:transparent}.vfl-label-on-focus{color:#0074d9}.vfl-has-label input:focus,.vfl-has-label select:focus,.vfl-has-label textarea:focus{outline:0}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var s=t[o];"number"==typeof s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},function(e,t){e.exports=function(e,t,n,r){var o,i=e=e||{},s=typeof e.default;"object"!==s&&"function"!==s||(o=e,i=e.default);var a="function"==typeof i?i.options:i;if(t&&(a.render=t.render,a.staticRenderFns=t.staticRenderFns),n&&(a._scopeId=n),r){var l=Object.create(a.computed||null);Object.keys(r).forEach(function(e){var t=r[e];l[e]=function(){return t}}),a.computed=l}return{esModule:o,exports:i,options:a}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vfl-has-label",class:e.wrapperClassObject},[n("label",{staticClass:"vfl-label",class:e.classObject,attrs:{for:e.inputId}},[e._v("\n    "+e._s(e.floater)+"\n  ")]),e._v(" "),e._t("default")],2)},staticRenderFns:[]}},function(e,t,n){var r=n(3);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(8)("d0849e94",r,!0)},function(e,t,n){function r(e){for(var t=0;t<e.length;t++){var n=e[t],r=c[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(i(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var s=[],o=0;o<n.parts.length;o++)s.push(i(n.parts[o]));c[n.id]={id:n.id,refs:1,parts:s}}}}function o(){var e=document.createElement("style");return e.type="text/css",f.appendChild(e),e}function i(e){var t,n,r=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(r){if(v)return h;r.parentNode.removeChild(r)}if(m){var i=p++;r=d||(d=o()),t=s.bind(null,r,i,!1),n=s.bind(null,r,i,!0)}else r=o(),t=a.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}function s(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=b(t,o);else{var i=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}function a(e,t){var n=t.css,r=t.media,o=t.sourceMap;if(r&&e.setAttribute("media",r),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var l="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!l)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var u=n(9),c={},f=l&&(document.head||document.getElementsByTagName("head")[0]),d=null,p=0,v=!1,h=function(){},m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n){v=n;var o=u(e,t);return r(o),function(t){for(var n=[],i=0;i<o.length;i++){var s=o[i],a=c[s.id];a.refs--,n.push(a)}t?(o=u(e,t),r(o)):o=[];for(var i=0;i<n.length;i++){var a=n[i];if(0===a.refs){for(var l=0;l<a.parts.length;l++)a.parts[l]();delete c[a.id]}}}};var b=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],s=i[0],a=i[1],l=i[2],u=i[3],c={id:e+":"+o,css:a,media:l,sourceMap:u};r[s]?r[s].parts.push(c):n.push(r[s]={id:s,parts:[c]})}return n}}])});