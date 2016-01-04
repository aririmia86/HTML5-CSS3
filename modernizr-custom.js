/*! modernizr 3.2.0 (Custom Build) | MIT *
 * http://modernizr.com/download/?-contextmenu-flexbox-ie8compat-webpanimation-setclasses !*/
!function(e,n,t){function o(e,n){return typeof e===n}function i(){var e,n,t,i,r,s,a;for(var l in w)if(w.hasOwnProperty(l)){if(e=[],n=w[l],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(i=o(n.fn,"function")?n.fn():n.fn,r=0;r<e.length;r++)s=e[r],a=s.split("."),1===a.length?Modernizr[a[0]]=i:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=i),y.push((i?"":"no-")+a.join("-"))}}function r(e){var n=C.className,t=Modernizr._config.classPrefix||"";if(b&&(n=n.baseVal),Modernizr._config.enableJSClass){var o=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(o,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),b?C.className.baseVal=n:C.className=n)}function s(e,n){if("object"==typeof e)for(var t in e)x(e,t)&&s(t,e[t]);else{e=e.toLowerCase();var o=e.split("."),i=Modernizr[o[0]];if(2==o.length&&(i=i[o[1]]),"undefined"!=typeof i)return Modernizr;n="function"==typeof n?n():n,1==o.length?Modernizr[o[0]]=n:(!Modernizr[o[0]]||Modernizr[o[0]]instanceof Boolean||(Modernizr[o[0]]=new Boolean(Modernizr[o[0]])),Modernizr[o[0]][o[1]]=n),r([(n&&0!=n?"":"no-")+o.join("-")]),Modernizr._trigger(e,n)}return Modernizr}function a(e,n){return!!~(""+e).indexOf(n)}function l(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):b?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function f(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function u(e,n){return function(){return e.apply(n,arguments)}}function d(e,n,t){var i;for(var r in e)if(e[r]in n)return t===!1?e[r]:(i=n[e[r]],o(i,"function")?u(i,t||n):i);return!1}function c(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function p(){var e=n.body;return e||(e=l(b?"svg":"body"),e.fake=!0),e}function A(e,t,o,i){var r,s,a,f,u="modernizr",d=l("div"),c=p();if(parseInt(o,10))for(;o--;)a=l("div"),a.id=i?i[o]:u+(o+1),d.appendChild(a);return r=l("style"),r.type="text/css",r.id="s"+u,(c.fake?c:d).appendChild(r),c.appendChild(d),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(n.createTextNode(e)),d.id=u,c.fake&&(c.style.background="",c.style.overflow="hidden",f=C.style.overflow,C.style.overflow="hidden",C.appendChild(c)),s=t(d,e),c.fake?(c.parentNode.removeChild(c),C.style.overflow=f,C.offsetHeight):d.parentNode.removeChild(d),!!s}function m(n,o){var i=n.length;if("CSS"in e&&"supports"in e.CSS){for(;i--;)if(e.CSS.supports(c(n[i]),o))return!0;return!1}if("CSSSupportsRule"in e){for(var r=[];i--;)r.push("("+c(n[i])+":"+o+")");return r=r.join(" or "),A("@supports ("+r+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return t}function h(e,n,i,r){function s(){d&&(delete B.style,delete B.modElem)}if(r=o(r,"undefined")?!1:r,!o(i,"undefined")){var u=m(e,i);if(!o(u,"undefined"))return u}for(var d,c,p,A,h,g=["modernizr","tspan"];!B.style;)d=!0,B.modElem=l(g.shift()),B.style=B.modElem.style;for(p=e.length,c=0;p>c;c++)if(A=e[c],h=B.style[A],a(A,"-")&&(A=f(A)),B.style[A]!==t){if(r||o(i,"undefined"))return s(),"pfx"==n?A:!0;try{B.style[A]=i}catch(v){}if(B.style[A]!=h)return s(),"pfx"==n?A:!0}return s(),!1}function g(e,n,t,i,r){var s=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+T.join(s+" ")+s).split(" ");return o(n,"string")||o(n,"undefined")?h(a,n,i,r):(a=(e+" "+E.join(s+" ")+s).split(" "),d(a,n,t))}function v(e,n,o){return g(e,t,t,n,o)}var y=[],w=[],_={_version:"3.2.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){w.push({name:e,fn:n,options:t})},addAsyncTest:function(e){w.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=_,Modernizr=new Modernizr,Modernizr.addTest("ie8compat",!e.addEventListener&&!!n.documentMode&&7===n.documentMode);var C=n.documentElement;Modernizr.addTest("contextmenu","contextMenu"in C&&"HTMLMenuItemElement"in e);var x,b="svg"===C.nodeName.toLowerCase();!function(){var e={}.hasOwnProperty;x=o(e,"undefined")||o(e.call,"undefined")?function(e,n){return n in e&&o(e.constructor.prototype[n],"undefined")}:function(n,t){return e.call(n,t)}}(),_._l={},_.on=function(e,n){this._l[e]||(this._l[e]=[]),this._l[e].push(n),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},_._trigger=function(e,n){if(this._l[e]){var t=this._l[e];setTimeout(function(){var e,o;for(e=0;e<t.length;e++)(o=t[e])(n)},0),delete this._l[e]}},Modernizr._q.push(function(){_.addTest=s}),Modernizr.addAsyncTest(function(){var e=new Image;e.onerror=function(){s("webpanimation",!1,{aliases:["webp-animation"]})},e.onload=function(){s("webpanimation",1==e.width,{aliases:["webp-animation"]})},e.src="data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"});var S="Moz O ms Webkit",T=_._config.usePrefixes?S.split(" "):[];_._cssomPrefixes=T;var E=_._config.usePrefixes?S.toLowerCase().split(" "):[];_._domPrefixes=E;var P={elem:l("modernizr")};Modernizr._q.push(function(){delete P.elem});var B={style:P.elem.style};Modernizr._q.unshift(function(){delete B.style}),_.testAllProps=g,_.testAllProps=v,Modernizr.addTest("flexbox",v("flexBasis","1px",!0)),i(),r(y),delete _.addTest,delete _.addAsyncTest;for(var j=0;j<Modernizr._q.length;j++)Modernizr._q[j]();e.Modernizr=Modernizr}(window,document);