!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("spritejs")):"function"==typeof define&&define.amd?define(["spritejs"],e):"object"==typeof exports?exports.BMFont=e(require("spritejs")):(t.spritejs=t.spritejs||{},t.spritejs.BMFont=e(t.spritejs))}(window,function(t){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/js/",n(n.s=100)}([function(t,e){var n=t.exports={version:"2.5.7"};"number"==typeof __e&&(__e=n)},function(t,e,n){var r=n(23)("wks"),o=n(13),i=n(2).Symbol,u="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=u&&i[t]||(u?i:o)("Symbol."+t))}).store=r},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){t.exports=!n(11)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(8),o=n(44),i=n(28),u=Object.defineProperty;e.f=n(4)?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return u(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(93),o=n(29);t.exports=function(t){return r(o(t))}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){var r=n(7);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e,n){var r=n(5),o=n(14);t.exports=n(4)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(2),o=n(0),i=n(45),u=n(9),f=n(3),c=function(t,e,n){var a,s,l,p=t&c.F,y=t&c.G,d=t&c.S,v=t&c.P,h=t&c.B,b=t&c.W,g=y?o:o[e]||(o[e]={}),_=g.prototype,x=y?r:d?r[e]:(r[e]||{}).prototype;for(a in y&&(n=e),n)(s=!p&&x&&void 0!==x[a])&&f(g,a)||(l=s?x[a]:n[a],g[a]=y&&"function"!=typeof x[a]?n[a]:h&&s?i(l,r):b&&x[a]==l?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(l):v&&"function"==typeof l?i(Function.call,l):l,v&&((g.virtual||(g.virtual={}))[a]=l,t&c.R&&_&&!_[a]&&u(_,a,l)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){t.exports={}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){t.exports=!0},function(t,e,n){var r=n(2),o=n(0),i=n(15),u=n(17),f=n(5).f;t.exports=function(t){var e=o.Symbol||(o.Symbol=i?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||f(e,t,{value:u.f(t)})}},function(t,e,n){e.f=n(1)},function(t,e){e.f={}.propertyIsEnumerable},function(t,e,n){var r=n(18),o=n(14),i=n(6),u=n(28),f=n(3),c=n(44),a=Object.getOwnPropertyDescriptor;e.f=n(4)?a:function(t,e){if(t=i(t),e=u(e,!0),c)try{return a(t,e)}catch(t){}if(f(t,e))return o(!r.f.call(t,e),t[e])}},function(t,e,n){"use strict";var r=n(85)(!0);n(46)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},function(t,e,n){var r=n(5).f,o=n(3),i=n(1)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){var r=n(0),o=n(2),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:n(15)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},function(t,e,n){var r=n(23)("keys"),o=n(13);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){var r=n(41),o=n(22);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e,n){var r=n(8),o=n(90),i=n(22),u=n(24)("IE_PROTO"),f=function(){},c=function(){var t,e=n(43)("iframe"),r=i.length;for(e.style.display="none",n(86).appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),c=t.F;r--;)delete c.prototype[i[r]];return c()};t.exports=Object.create||function(t,e){var n;return null!==t?(f.prototype=r(t),n=new f,f.prototype=null,n[u]=t):n=c(),void 0===e?n:o(n,e)}},function(t,e,n){var r=n(7);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){n(96);for(var r=n(2),o=n(9),i=n(12),u=n(1)("toStringTag"),f="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),c=0;c<f.length;c++){var a=f[c],s=r[a],l=s&&s.prototype;l&&!l[u]&&o(l,u,a),i[a]=i.Array}},function(t,e,n){var r=n(41),o=n(22).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){"use strict";e.__esModule=!0;var r=u(n(68)),o=u(n(66)),i="function"==typeof o.default&&"symbol"==typeof r.default?function(t){return typeof t}:function(t){return t&&"function"==typeof o.default&&t.constructor===o.default&&t!==o.default.prototype?"symbol":typeof t};function u(t){return t&&t.__esModule?t:{default:t}}e.default="function"==typeof o.default&&"symbol"===i(r.default)?function(t){return void 0===t?"undefined":i(t)}:function(t){return t&&"function"==typeof o.default&&t.constructor===o.default&&t!==o.default.prototype?"symbol":void 0===t?"undefined":i(t)}},function(t,e,n){t.exports={default:n(76),__esModule:!0}},function(t,e,n){var r=n(10),o=n(0),i=n(11);t.exports=function(t,e){var n=(o.Object||{})[t]||Object[t],u={};u[t]=e(n),r(r.S+r.F*i(function(){n(1)}),"Object",u)}},function(t,e,n){t.exports={default:n(78),__esModule:!0}},function(t,e,n){var r=n(30),o=n(1)("toStringTag"),i="Arguments"==r(function(){return arguments}());t.exports=function(t){var e,n,u;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),o))?n:i?r(e):"Object"==(u=r(e))&&"function"==typeof e.callee?"Arguments":u}},function(t,e,n){var r=n(29);t.exports=function(t){return Object(r(t))}},function(t,e,n){var r=n(3),o=n(39),i=n(24)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,e,n){var r=n(3),o=n(6),i=n(89)(!1),u=n(24)("IE_PROTO");t.exports=function(t,e){var n,f=o(t),c=0,a=[];for(n in f)n!=u&&r(f,n)&&a.push(n);for(;e.length>c;)r(f,n=e[c++])&&(~i(a,n)||a.push(n));return a}},function(t,e,n){t.exports=n(9)},function(t,e,n){var r=n(7),o=n(2).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,e,n){t.exports=!n(4)&&!n(11)(function(){return 7!=Object.defineProperty(n(43)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(92);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){"use strict";var r=n(15),o=n(10),i=n(42),u=n(9),f=n(12),c=n(91),a=n(21),s=n(40),l=n(1)("iterator"),p=!([].keys&&"next"in[].keys()),y=function(){return this};t.exports=function(t,e,n,d,v,h,b){c(n,e,d);var g,_,x,m=function(t){if(!p&&t in w)return w[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},O=e+" Iterator",S="values"==v,j=!1,w=t.prototype,M=w[l]||w["@@iterator"]||v&&w[v],P=M||m(v),E=v?S?m("entries"):P:void 0,T="Array"==e&&w.entries||M;if(T&&(x=s(T.call(new t)))!==Object.prototype&&x.next&&(a(x,O,!0),r||"function"==typeof x[l]||u(x,l,y)),S&&M&&"values"!==M.name&&(j=!0,P=function(){return M.call(this)}),r&&!b||!p&&!j&&w[l]||u(w,l,P),f[e]=P,f[O]=y,v)if(g={values:S?P:m("values"),keys:h?P:m("keys"),entries:E},b)for(_ in g)_ in w||i(w,_,g[_]);else o(o.P+o.F*(p||j),e,g);return g}},function(t,e){t.exports=function(t,e,n,r,o){var i={};return Object.keys(r).forEach(function(t){i[t]=r[t]}),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=n.slice().reverse().reduce(function(n,r){return r(t,e,n)||n},i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(t,e,i),i=null),i}},function(e,n){e.exports=t},function(t,e,n){var r=n(10);r(r.S,"Object",{create:n(27)})},function(t,e,n){n(49);var r=n(0).Object;t.exports=function(t,e){return r.create(t,e)}},function(t,e,n){t.exports={default:n(50),__esModule:!0}},function(t,e,n){var r=n(7),o=n(8),i=function(t,e){if(o(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{(r=n(45)(Function.call,n(19).f(Object.prototype,"__proto__").set,2))(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,n){return i(t,n),e?t.__proto__=n:r(t,n),t}}({},!1):void 0),check:i}},function(t,e,n){var r=n(10);r(r.S,"Object",{setPrototypeOf:n(52).set})},function(t,e,n){n(53),t.exports=n(0).Object.setPrototypeOf},function(t,e,n){t.exports={default:n(54),__esModule:!0}},function(t,e,n){"use strict";e.__esModule=!0;var r=u(n(55)),o=u(n(51)),i=u(n(34));function u(t){return t&&t.__esModule?t:{default:t}}e.default=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+(void 0===e?"undefined":(0,i.default)(e)));t.prototype=(0,o.default)(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(r.default?(0,r.default)(t,e):t.__proto__=e)}},function(t,e,n){n(16)("observable")},function(t,e,n){n(16)("asyncIterator")},function(t,e){},function(t,e,n){var r=n(6),o=n(32).f,i={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return u&&"[object Window]"==i.call(t)?function(t){try{return o(t)}catch(t){return u.slice()}}(t):o(r(t))}},function(t,e,n){var r=n(30);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){var r=n(26),o=n(33),i=n(18);t.exports=function(t){var e=r(t),n=o.f;if(n)for(var u,f=n(t),c=i.f,a=0;f.length>a;)c.call(t,u=f[a++])&&e.push(u);return e}},function(t,e,n){var r=n(13)("meta"),o=n(7),i=n(3),u=n(5).f,f=0,c=Object.isExtensible||function(){return!0},a=!n(11)(function(){return c(Object.preventExtensions({}))}),s=function(t){u(t,r,{value:{i:"O"+ ++f,w:{}}})},l=t.exports={KEY:r,NEED:!1,fastKey:function(t,e){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,r)){if(!c(t))return"F";if(!e)return"E";s(t)}return t[r].i},getWeak:function(t,e){if(!i(t,r)){if(!c(t))return!0;if(!e)return!1;s(t)}return t[r].w},onFreeze:function(t){return a&&l.NEED&&c(t)&&!i(t,r)&&s(t),t}}},function(t,e,n){"use strict";var r=n(2),o=n(3),i=n(4),u=n(10),f=n(42),c=n(63).KEY,a=n(11),s=n(23),l=n(21),p=n(13),y=n(1),d=n(17),v=n(16),h=n(62),b=n(61),g=n(8),_=n(7),x=n(6),m=n(28),O=n(14),S=n(27),j=n(60),w=n(19),M=n(5),P=n(26),E=w.f,T=M.f,k=j.f,A=r.Symbol,L=r.JSON,F=L&&L.stringify,C=y("_hidden"),I=y("toPrimitive"),N={}.propertyIsEnumerable,R=s("symbol-registry"),D=s("symbols"),H=s("op-symbols"),z=Object.prototype,G="function"==typeof A,V=r.QObject,W=!V||!V.prototype||!V.prototype.findChild,B=i&&a(function(){return 7!=S(T({},"a",{get:function(){return T(this,"a",{value:7}).a}})).a})?function(t,e,n){var r=E(z,e);r&&delete z[e],T(t,e,n),r&&t!==z&&T(z,e,r)}:T,J=function(t){var e=D[t]=S(A.prototype);return e._k=t,e},q=G&&"symbol"==typeof A.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof A},K=function(t,e,n){return t===z&&K(H,e,n),g(t),e=m(e,!0),g(n),o(D,e)?(n.enumerable?(o(t,C)&&t[C][e]&&(t[C][e]=!1),n=S(n,{enumerable:O(0,!1)})):(o(t,C)||T(t,C,O(1,{})),t[C][e]=!0),B(t,e,n)):T(t,e,n)},U=function(t,e){g(t);for(var n,r=h(e=x(e)),o=0,i=r.length;i>o;)K(t,n=r[o++],e[n]);return t},Y=function(t){var e=N.call(this,t=m(t,!0));return!(this===z&&o(D,t)&&!o(H,t))&&(!(e||!o(this,t)||!o(D,t)||o(this,C)&&this[C][t])||e)},Q=function(t,e){if(t=x(t),e=m(e,!0),t!==z||!o(D,e)||o(H,e)){var n=E(t,e);return!n||!o(D,e)||o(t,C)&&t[C][e]||(n.enumerable=!0),n}},X=function(t){for(var e,n=k(x(t)),r=[],i=0;n.length>i;)o(D,e=n[i++])||e==C||e==c||r.push(e);return r},Z=function(t){for(var e,n=t===z,r=k(n?H:x(t)),i=[],u=0;r.length>u;)!o(D,e=r[u++])||n&&!o(z,e)||i.push(D[e]);return i};G||(f((A=function(){if(this instanceof A)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),e=function(n){this===z&&e.call(H,n),o(this,C)&&o(this[C],t)&&(this[C][t]=!1),B(this,t,O(1,n))};return i&&W&&B(z,t,{configurable:!0,set:e}),J(t)}).prototype,"toString",function(){return this._k}),w.f=Q,M.f=K,n(32).f=j.f=X,n(18).f=Y,n(33).f=Z,i&&!n(15)&&f(z,"propertyIsEnumerable",Y,!0),d.f=function(t){return J(y(t))}),u(u.G+u.W+u.F*!G,{Symbol:A});for(var $="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),tt=0;$.length>tt;)y($[tt++]);for(var et=P(y.store),nt=0;et.length>nt;)v(et[nt++]);u(u.S+u.F*!G,"Symbol",{for:function(t){return o(R,t+="")?R[t]:R[t]=A(t)},keyFor:function(t){if(!q(t))throw TypeError(t+" is not a symbol!");for(var e in R)if(R[e]===t)return e},useSetter:function(){W=!0},useSimple:function(){W=!1}}),u(u.S+u.F*!G,"Object",{create:function(t,e){return void 0===e?S(t):U(S(t),e)},defineProperty:K,defineProperties:U,getOwnPropertyDescriptor:Q,getOwnPropertyNames:X,getOwnPropertySymbols:Z}),L&&u(u.S+u.F*(!G||a(function(){var t=A();return"[null]"!=F([t])||"{}"!=F({a:t})||"{}"!=F(Object(t))})),"JSON",{stringify:function(t){for(var e,n,r=[t],o=1;arguments.length>o;)r.push(arguments[o++]);if(n=e=r[1],(_(e)||void 0!==t)&&!q(t))return b(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!q(e))return e}),r[1]=e,F.apply(L,r)}}),A.prototype[I]||n(9)(A.prototype,I,A.prototype.valueOf),l(A,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},function(t,e,n){n(64),n(59),n(58),n(57),t.exports=n(0).Symbol},function(t,e,n){t.exports={default:n(65),__esModule:!0}},function(t,e,n){n(20),n(31),t.exports=n(17).f("iterator")},function(t,e,n){t.exports={default:n(67),__esModule:!0}},function(t,e,n){"use strict";e.__esModule=!0;var r=function(t){return t&&t.__esModule?t:{default:t}}(n(34));e.default=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==(void 0===e?"undefined":(0,r.default)(e))&&"function"!=typeof e?t:e}},function(t,e,n){var r=n(10);r(r.S+r.F*!n(4),"Object",{defineProperty:n(5).f})},function(t,e,n){n(70);var r=n(0).Object;t.exports=function(t,e,n){return r.defineProperty(t,e,n)}},function(t,e,n){t.exports={default:n(71),__esModule:!0}},function(t,e,n){"use strict";e.__esModule=!0;var r=function(t){return t&&t.__esModule?t:{default:t}}(n(72));e.default=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),(0,r.default)(t,o.key,o)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}()},function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e,n){var r=n(6),o=n(19).f;n(36)("getOwnPropertyDescriptor",function(){return function(t,e){return o(r(t),e)}})},function(t,e,n){n(75);var r=n(0).Object;t.exports=function(t,e){return r.getOwnPropertyDescriptor(t,e)}},function(t,e,n){var r=n(39),o=n(40);n(36)("getPrototypeOf",function(){return function(t){return o(r(t))}})},function(t,e,n){n(77),t.exports=n(0).Object.getPrototypeOf},function(t,e,n){"use strict";e.__esModule=!0;var r=i(n(37)),o=i(n(35));function i(t){return t&&t.__esModule?t:{default:t}}e.default=function t(e,n,i){null===e&&(e=Function.prototype);var u=(0,o.default)(e,n);if(void 0===u){var f=(0,r.default)(e);return null===f?void 0:t(f,n,i)}if("value"in u)return u.value;var c=u.get;return void 0!==c?c.call(i):void 0}},function(t,e,n){var r=n(38),o=n(1)("iterator"),i=n(12);t.exports=n(0).getIteratorMethod=function(t){if(void 0!=t)return t[o]||t["@@iterator"]||i[r(t)]}},function(t,e,n){var r=n(8),o=n(80);t.exports=n(0).getIterator=function(t){var e=o(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return r(e.call(t))}},function(t,e,n){n(31),n(20),t.exports=n(81)},function(t,e,n){t.exports={default:n(82),__esModule:!0}},function(t,e,n){var r=n(38),o=n(1)("iterator"),i=n(12);t.exports=n(0).isIterable=function(t){var e=Object(t);return void 0!==e[o]||"@@iterator"in e||i.hasOwnProperty(r(e))}},function(t,e,n){var r=n(25),o=n(29);t.exports=function(t){return function(e,n){var i,u,f=String(o(e)),c=r(n),a=f.length;return c<0||c>=a?t?"":void 0:(i=f.charCodeAt(c))<55296||i>56319||c+1===a||(u=f.charCodeAt(c+1))<56320||u>57343?t?f.charAt(c):i:t?f.slice(c,c+2):u-56320+(i-55296<<10)+65536}}},function(t,e,n){var r=n(2).document;t.exports=r&&r.documentElement},function(t,e,n){var r=n(25),o=Math.max,i=Math.min;t.exports=function(t,e){return(t=r(t))<0?o(t+e,0):i(t,e)}},function(t,e,n){var r=n(25),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e,n){var r=n(6),o=n(88),i=n(87);t.exports=function(t){return function(e,n,u){var f,c=r(e),a=o(c.length),s=i(u,a);if(t&&n!=n){for(;a>s;)if((f=c[s++])!=f)return!0}else for(;a>s;s++)if((t||s in c)&&c[s]===n)return t||s||0;return!t&&-1}}},function(t,e,n){var r=n(5),o=n(8),i=n(26);t.exports=n(4)?Object.defineProperties:function(t,e){o(t);for(var n,u=i(e),f=u.length,c=0;f>c;)r.f(t,n=u[c++],e[n]);return t}},function(t,e,n){"use strict";var r=n(27),o=n(14),i=n(21),u={};n(9)(u,n(1)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(u,{next:o(1,n)}),i(t,e+" Iterator")}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){var r=n(30);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e){t.exports=function(){}},function(t,e,n){"use strict";var r=n(95),o=n(94),i=n(12),u=n(6);t.exports=n(46)(Array,"Array",function(t,e){this._t=u(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,o(1)):o(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(t,e,n){n(31),n(20),t.exports=n(84)},function(t,e,n){t.exports={default:n(97),__esModule:!0}},function(t,e,n){"use strict";e.__esModule=!0;var r=i(n(98)),o=i(n(83));function i(t){return t&&t.__esModule?t:{default:t}}e.default=function(){return function(t,e){if(Array.isArray(t))return t;if((0,r.default)(Object(t)))return function(t,e){var n=[],r=!0,i=!1,u=void 0;try{for(var f,c=(0,o.default)(t);!(r=(f=c.next()).done)&&(n.push(f.value),!e||n.length!==e);r=!0);}catch(t){i=!0,u=t}finally{try{!r&&c.return&&c.return()}finally{if(i)throw u}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()},function(t,e,n){"use strict";var r,o,i,u=v(n(99)),f=v(n(79)),c=v(n(35)),a=v(n(37)),s=v(n(74)),l=v(n(73)),p=v(n(69)),y=v(n(56)),d=n(48);function v(t){return t&&t.__esModule?t:{default:t}}var h=n(47),b=d.utils.attr;function g(t){var e=t.attr("text"),n=t.attr("fontFace");if(!e||!n)return t.textures=[],void(t.images=null);var r=e.split("\n"),o=n.chars,i=n.kernings,u=n.pages,f=n.lineHeight,c=t.attr("lineHeight");null!=c&&(f=c);var a=(f-n.lineHeight)/2,s=a,l=0,p=[],y=[],d=t.attr("letterSpacing");r.forEach(function(t){for(var e="",n=0,r=0;r<t.length;r++){var c=t.charCodeAt(r),a=o[c],v=i[e+","+c]||0,h=[n+a.xoffset,s+a.yoffset,a.width,a.height],b=[a.x,a.y,a.width,a.height],g=u[a.page];if(g.src)y.push({src:g.src,rect:h,srcRect:b});else if(g.id)y.push({id:g.id,rect:h,srcRect:b});else{var _=g.img;if(!_||!_.src){var x="data:image/png;base64,"+g.dataURI;(_=new Image).src=x,g.img=_}y.push({image:_,rect:h,srcRect:b})}n+=a.xadvance+v,r<t.length-1&&(n+=d),e=c}p.push(n),l=Math.max(n,l),s+=f});var v=t.attr("textAlign");if("left"!==v){var h=0;p.forEach(function(t,e){var n=r[e],o=l-t;"center"===v&&(o/=2);for(var i=0;i<n.length;i++){y[h+i].rect[0]+=o}h+=n.length})}t.textures=y,t.textHeight=s-a}var _=(h((r=function(t){function e(t){(0,s.default)(this,e);var n=(0,p.default)(this,(e.__proto__||(0,a.default)(e)).call(this,t));return n.setDefault({letterSpacing:0,textAlign:"left"}),n}return(0,y.default)(e,t),(0,l.default)(e,[{key:"fontFace",set:function(t){this.clearCache();var e=x.fonts[t];this.set("fontFace",e),g(this.subject)}},{key:"text",set:function(t){this.clearCache(),this.set("text",t),g(this.subject)}},{key:"lineHeight",set:function(t){this.clearCache(),this.set("lineHeight",t),g(this.subject)}},{key:"letterSpacing",set:function(t){this.clearCache(),this.set("letterSpacing",t),g(this.subject)}},{key:"textAlign",set:function(t){this.clearCache(),this.set("textAlign",t),g(this.subject)}}]),e}(d.Sprite.Attr)).prototype,"fontFace",[b],(0,c.default)(r.prototype,"fontFace"),r.prototype),h(r.prototype,"text",[b],(0,c.default)(r.prototype,"text"),r.prototype),h(r.prototype,"lineHeight",[b],(0,c.default)(r.prototype,"lineHeight"),r.prototype),h(r.prototype,"letterSpacing",[b],(0,c.default)(r.prototype,"letterSpacing"),r.prototype),h(r.prototype,"textAlign",[b],(0,c.default)(r.prototype,"textAlign"),r.prototype),r),x=(i=o=function(t){function e(){return(0,s.default)(this,e),(0,p.default)(this,(e.__proto__||(0,a.default)(e)).apply(this,arguments))}return(0,y.default)(e,t),(0,l.default)(e,[{key:"contentSize",get:function(){var t=(0,f.default)(e.prototype.__proto__||(0,a.default)(e.prototype),"contentSize",this),n=(0,u.default)(t,2),r=n[0],o=n[1];return""===this.attr("height")?[r,this.textHeight]:[r,o]}}]),e}(d.Sprite),o.Attr=_,i);x.fonts={},t.exports=x}])});