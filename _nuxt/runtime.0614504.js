!function(e){function n(data){for(var n,t,c=data[0],f=data[1],d=data[2],i=0,v=[];i<c.length;i++)t=c[i],Object.prototype.hasOwnProperty.call(o,t)&&o[t]&&v.push(o[t][0]),o[t]=0;for(n in f)Object.prototype.hasOwnProperty.call(f,n)&&(e[n]=f[n]);for(h&&h(data);v.length;)v.shift()();return l.push.apply(l,d||[]),r()}function r(){for(var e,i=0;i<l.length;i++){for(var n=l[i],r=!0,t=1;t<n.length;t++){var f=n[t];0!==o[f]&&(r=!1)}r&&(l.splice(i--,1),e=c(c.s=n[0]))}return e}var t={},o={10:0},l=[];function c(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(e){var n=[],r=o[e];if(0!==r)if(r)n.push(r[2]);else{var t=new Promise((function(n,t){r=o[e]=[n,t]}));n.push(r[2]=t);var l,script=document.createElement("script");script.charset="utf-8",script.timeout=120,c.nc&&script.setAttribute("nonce",c.nc),script.src=function(e){return c.p+""+({0:"lang-lang_en",1:"lang-lang_zh_TW",3:"article",4:"i18n-article-article_en-json",5:"i18n-article-article_zh_TW-json",6:"i18n-source-lang_en-json",7:"i18n-source-lang_zh_TW-json",8:"pages/article/index",9:"pages/index"}[e]||e)+"."+{0:"818163d",1:"da0255c",3:"31d2511",4:"337a1f3",5:"e75a5e6",6:"d6f93c0",7:"040751e",8:"63f41d8",9:"4505311"}[e]+".js"}(e);var f=new Error;l=function(n){script.onerror=script.onload=null,clearTimeout(d);var r=o[e];if(0!==r){if(r){var t=n&&("load"===n.type?"missing":n.type),l=n&&n.target&&n.target.src;f.message="Loading chunk "+e+" failed.\n("+t+": "+l+")",f.name="ChunkLoadError",f.type=t,f.request=l,r[1](f)}o[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:script})}),12e4);script.onerror=script.onload=l,document.head.appendChild(script)}return Promise.all(n)},c.m=e,c.c=t,c.d=function(e,n,r){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)c.d(r,t,function(n){return e[n]}.bind(null,t));return r},c.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(n,"a",n),n},c.o=function(object,e){return Object.prototype.hasOwnProperty.call(object,e)},c.p="/nuxt-i18n-demo/_nuxt/",c.oe=function(e){throw console.error(e),e};var f=window.webpackJsonp=window.webpackJsonp||[],d=f.push.bind(f);f.push=n,f=f.slice();for(var i=0;i<f.length;i++)n(f[i]);var h=d;r()}([]);