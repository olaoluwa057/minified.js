/^u/.test(typeof define)&&function(a){var b=this.require=function(b){return a[b]};this.define=function(c,d){a[c]=a[c]||d(b)}}({}),define("minified",function(){function a(a){return a!=z?""+a:""}function b(a){return"string"==typeof a}function c(a){return a&&a.nodeType}function d(a){return a}function e(a){a()}function f(a,b){for(var c in a)a.hasOwnProperty(c)&&b(c,a[c])}function g(a,b){var c=[];return j(a,function(d,e){b.call(a,d,e)&&c.push(d)}),c}function h(a,b,c){var d=[];return a(b,function(a,e){j(c.call(b,a,e),function(a){d.push(a)})}),d}function i(b,c,d){return a(b).replace(c,d||"")}function j(a,b){if(l(a))for(var c=0;c<a.length;c++)b.call(a,a[c],c);else a!=z&&b(a,0);return a}function k(a){return"function"==typeof a&&!a.item}function l(a){return a&&a.length!=z&&!b(a)&&!c(a)&&!k(a)&&a!==C}function m(a,b){var c=RegExp("(^|\\s)"+a+"(?=$|\\s)","i");return function(d){return a?c.test(d[b]):A}}function n(a){return a.Mid=a.Mid||++E}function o(a,b){var d,e=[],f={};return j(a,function(a){j(b(a),function(a){c(a)&&!f[d=n(a)]&&(e.push(a),f[d]=A)})}),e}function p(a,b){var c={$position:"absolute",$visibility:"hidden",$display:"block",$height:z},d=a.get(c),c=a.set(c).get("clientHeight");return a.set(d),c*b+"px"}function q(a){F?F.push(a):setTimeout(a,0)}function r(a){return h(j,a,function(a){return b(a)?a:l(a)?r(a):c(a)?(a=a.cloneNode(A),a.removeAttribute("id"),a):z})}function s(a,b,c){return k(a)?q(a):new x(t(a,b,c))}function t(a,c,d){function e(a){return l(a)?h(j,a,e):a}function f(a){return g(h(j,a,e),function(a){for(;a=a.parentNode;)if(a==c[0]||d)return a==c[0]})}return c?1!=(c=t(c)).length?o(c,function(b){return t(a,b,d)}):b(a)?d?f(c[0].querySelectorAll(a)):c[0].querySelectorAll(a):f(a):b(a)?D.querySelectorAll(a):h(j,a,e)}function u(a,d){var e,f,g={},h=g;return k(a)?a:"number"==typeof a?function(b,c){return c==a}:!a||"*"==a||b(a)&&(h=/^([\w-]*)\.?([\w-]*)$/.exec(a))?(e=m(h[1],"nodeName"),f=m(h[2],"className"),function(a){return 1==c(a)&&e(a)&&f(a)}):d?function(b){return s(a,d).find(b)!=z}:(s(a).each(function(a){g[n(a)]=A}),function(a){return g[n(a)]})}function v(a){var b=u(a);return function(a){return b(a)?z:A}}function w(){function a(a,f){b==z&&(b=a,c=f,setTimeout(function(){j(d,e)},0))}var b,c=[],d=[],f=a.then=function(a,e){function f(){var d,f;try{d=b?a:e,k(d)?(f=d.apply(y,c),f&&k(f.then)?f.then(function(a){g(A,[a])},function(a){g(B,[a])}):g(A,[f])):g(b,c)}catch(h){g(B,[h])}}var g=w();return b!=z?setTimeout(f,0):d.push(f),g};return a.error=function(a){return f(0,a)},a}function x(a){for(var b=this.length=a.length,c=0;b>c;c++)this[c]=a[c]}var y,z=null,A=!0,B=!1,C=this,D=document,E=1,F=/^[ic]/.test(D.readyState)?z:[],G={},H=0;return f({each:function(a){return j(this,a)},filter:function(a){return new x(g(this,a))},collect:function(a){return new x(h(j,this,a))},sub:function(a,b){var c=0>a?this.length+a:a,d=b>=0?b:this.length+(b||0);return new x(g(this,function(a,b){return b>=c&&d>b}))},find:function(a,b){for(var c,d=k(a)?a:function(b,c){return a===b?c:void 0},e=b||0;e<this.length;e++)if((c=d.call(this,this[e],e))!=z)return c},remove:function(){j(this,function(a){a.parentNode.removeChild(a)})},text:function(){return h(j,this,function(a){return a.textContent}).join("")},trav:function(a,b,c){var d="number"==typeof b,e=u(d?z:b),f=d?b:c;return new x(o(this,function(b){for(var c=[];(b=b[a])&&c.length!=f;)e(b)&&c.push(b);return c}))},up:function(a){return this.trav("parentNode",a,1)},next:function(a,b){return this.trav("nextSibling",a,b||1)},select:function(a,b){return s(a,this,b)},is:function(a){return!this.find(v(a))},only:function(a){return new x(g(this,u(a)))},not:function(a){return new x(g(this,v(a)))},get:function(a,c){var d,e,g=this,h=g[0];return h?b(a)?(d=/^([$@]*)(.*)/.exec(i(i(a,/^\$float$/,"cssFloat"),/^%/,"@data-")),h="$"==a?h.className:"$$"==a?h.getAttribute("style"):"$$fade"==a||"$$show"==a?"hidden"==g.get("$visibility")||"none"==g.get("$display")?0:"$$fade"==a?isNaN(g.get("$opacity",A))?1:g.get("$opacity",A):1:"$$slide"==a?g.get("$height"):"$"==d[1]?C.getComputedStyle(h,z).getPropertyValue(i(d[2],/[A-Z]/g,function(a){return"-"+a.toLowerCase()})):"@"==d[1]?h.getAttribute(d[2]):h[d[2]],c?parseFloat(i(h,/^[^\d-]+/)):h):(e={},(l(a)?j:f)(a,function(a){e[a]=g.get(a,c)}),e):void 0},set:function(a,c){var d,e=this;return c!==y?(d=/^([$@]*)(.*)/.exec(i(i(a,/^\$float$/,"cssFloat"),/^%/,"@data-")),"$$fade"==a?this.set({$visibility:c?"visible":"hidden",$opacity:c}):"$$slide"==a?this.set({$visibility:c?"visible":"hidden",$height:/px/.test(c)?c:function(a,b,d){return p(s(d),c)},$overflow:"hidden"}):"$$show"==a?c?this.set({$visibility:c?"visible":"hidden",$display:""}).set({$display:function(a){return"none"==a?"block":a}}):this.set({$display:"none"}):"$$"==a?this.set("@style",c):j(e,function(b,e){var f=k(c)?c(s(b).get(a),e,b):c;"$"==a?j(f&&f.split(/\s+/),function(a){var c=i(a,/^[+-]/),d=b.className||"",e=i(d,RegExp("(^|\\s)"+c+"(?=$|\\s)"));(/^\+/.test(a)||c==a&&d==e)&&(e+=" "+c),b.className=i(e,/^\s+|\s+(?=\s|$)/g)}):"$$scrollX"==a?b.scroll(f,b.scrollY):"$$scrollY"==a?b.scroll(b.scrollX,f):"@"==d[1]?f!=z?b.setAttribute(d[2],f):b.removeAttribute(d[2]):"$"==d[1]?b.style[d[2]]=f:b[d[2]]=f})):b(a)||k(a)?this.set("$",a):f(a,function(a,b){e.set(a,b)}),e},show:function(){return this.set("$$show",1)},hide:function(){return this.set("$$show",0)},add:function(a,b){return this.each(function(d,e){var f;!function g(a){l(a)?j(a,g):k(a)?g(a(d,e)):a!=z&&(a=c(a)?a:D.createTextNode(a),f?f.parentNode.insertBefore(a,f.nextSibling):b?b(a,d,d.parentNode):d.appendChild(a),f=a)}(e&&!k(a)?r(a):a)})},fill:function(a){return this.each(function(a){s(a.childNodes).remove()}).add(a)},addBefore:function(a){return this.add(a,function(a,b,c){c.insertBefore(a,b)})},addAfter:function(a){return this.add(a,function(a,b,c){c.insertBefore(a,b.nextSibling)})},addFront:function(a){return this.add(a,function(a,b){b.insertBefore(a,b.firstChild)})},replace:function(a){return this.add(a,function(a,b,c){c.replaceChild(a,b)})},clone:function(){return new x(r(this))},animate:function(a,b,c){var d,e=w(),g=this,i=h(j,this,function(b,d){var e,g=s(b),h={};return f(e=g.get(a),function(c,e){var f=a[c];h[c]=k(f)?f(e,d,b):"$$slide"==c?p(g,f):f}),g.dial(e,h,c)}),l=b||500;return e.stop=function(){return e(B),d()},d=s.loop(function(a){(a>=l||0>a)&&(a=l,d(),e(A,[g])),j(i,function(b){b(a/l)})}),e},dial:function(b,c,d){function e(a,b){return/^#/.test(a)?parseInt(6<a.length?a.substr(1+2*b,2):(a=a.charAt(1+b))+a,16):parseInt(i(a,/[^\d,]+/g).split(",")[b])}var g=this,h=d||0,j=k(h)?h:function(a,b,c){return a+c*(b-a)*(h+(1-h)*c*(3-2*c))};return function(d){f(b,function(b,f){var h=c[b],k=0;g.set(b,0>=d?f:d>=1?h:/^#|rgb\(/.test(h)?"rgb("+Math.round(j(e(f,k),e(h,k++),d))+","+Math.round(j(e(f,k),e(h,k++),d))+","+Math.round(j(e(f,k),e(h,k++),d))+")":i(h,/-?[\d.]+/,a(j(parseFloat(i(f,/^[^\d-]+/)),parseFloat(i(h,/^[^\d-]+/)),d))))})}},toggle:function(a,b,c,d){var e,f,g=this,h=B;return b?(g.set(a),function(i){i!==h&&(f=(h=i===A||i===B?i:!h)?b:a,c?(e=g.animate(f,e?e.stop():c,d)).then(function(){e=z}):g.set(f))}):g.toggle(i(a,/\b(?=\w)/g,"-"),i(a,/\b(?=\w)/g,"+"))},values:function(b){var c=b||{};return this.each(function(b){var e=b.name,f=a(b.value);if(/form/i.test(b.tagName))for(e=0;e<b.elements.length;e++)s(b.elements[e]).values(c);else!e||/kbox|dio/i.test(b.type)&&!b.checked||(c[e]=c[e]==z?f:h(j,[c[e],f],d))}),c},offset:function(){for(var a=this[0],b={x:0,y:0};a;)b.x+=a.offsetLeft,b.y+=a.offsetTop,a=a.offsetParent;return b},on:function(c,e,f,g,l){return k(e)?this.on(z,c,e,f,g):b(g)?this.on(c,e,f,z,g):this.each(function(b,k){j(c?t(c,b):b,function(b){j(a(e).split(/\s/),function(a){function c(a,c){var d,e,h=!l,i=l?c||a.target:b;if(l)for(e=u(l,b);i&&i!=b&&!(h=e(i));)i=i.parentNode;return h&&(d=(!f.apply(s(i),g||[a,k])||""==m)&&"|"!=m)&&!c&&(a.preventDefault(),a.stopPropagation()),!d}var e=i(a,/[?|]/),m=i(a,/[^?|]/g),n=E++;b.M=b.M||{},b.M[n]=function(a,b,d){return e==a&&!c(b,d)},f.M=h(j,[f.M,function(){b.removeEventListener(e,c,B),delete b.M[n]}],d),b.addEventListener(e,c,B)})})})},onOver:function(a,b){var c=this,d=[];return b?this.on(a,"|mouseover |mouseout",function(a,e){var f="mouseout"!=a.type,g=a.relatedTarget||a.toElement;d[e]===f||!f&&g&&(g==c[e]||s(g).up(c[e]).length)||(d[e]=f,b.call(this,f,a))}):this.onOver(z,a)},onFocus:function(a,b){return b?this.on(a,"|focus",b,[A]).on(a,"|blur",b,[B]):this.onFocus(z,a)},onChange:function(a,b){return b?this.each(function(c,d){function e(e,f){s(c).on(a,e,function(){b.call(this,c[f],d)})}/kbox|dio/i.test(c.type)?e("|click","checked"):e("|input","value")}):this.onChange(z,a)},onClick:function(a,b,c){return k(a)?this.on("click",a,b):this.on(a,"click",b,c)},trigger:function(a,b){return this.each(function(c){for(var d,e=c;e&&!d;)f(e.M,function(e,f){d=d||f(a,b,c)}),e=e.parentNode})}},function(a,b){x.prototype[a]=b}),f({request:function(b,c,d,e){e=e||{};var g,i=0,k=w(),l=d&&d.constructor==e.constructor;try{k.xhr=g=new XMLHttpRequest,k.stop=function(){g.abort()},l&&(d=h(f,d,function(a,b){return h(j,b,function(b){return encodeURIComponent(a)+(b!=z?"="+encodeURIComponent(b):"")})}).join("&")),d==z||/post/i.test(b)||(c+="?"+d,d=z),g.open(b,c,A,e.user,e.pass),l&&/post/i.test(b)&&g.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),f(e.headers,function(a,b){g.setRequestHeader(a,b)}),f(e.xhr,function(a,b){g[a]=b}),g.onreadystatechange=function(){4!=g.readyState||i++||(200==g.status?k(A,[g.responseText,g]):k(B,[g.status,g.responseText,g]))},g.send(d)}catch(m){i||k(B,[0,z,a(m)])}return k},toJSON:JSON.stringify,parseJSON:JSON.parse,ready:q,loop:function(a){function b(a){f(G,function(b,c){c(a)}),H&&h(b)}function c(){return G[g]&&(delete G[g],H--),e}var d,e=0,g=E++,h=C.requestAnimationFrame||function(a){setTimeout(function(){a(+new Date)},33)};return G[g]=function(b){a(e=b-(d=d||b),c)},H++||h(b),c},off:function(a){j(a.M,e),a.M=z}},function(a,b){s[a]=b}),D.addEventListener("DOMContentLoaded",function(){j(F,e),F=z},B),{$:s,$$:function(a){return t(a)[0]},EE:function(a,b,c){return a=s(D.createElement(a)),l(b)||"object"!=typeof b?a.add(b):a.set(b).add(c)},M:x}});