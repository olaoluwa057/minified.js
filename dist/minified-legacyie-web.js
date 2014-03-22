/^u/.test(typeof define)&&function(a){this.define=function(b,c){a[b]=a[b]||c()},this.require=function(b){return a[b]}}({}),define("minified",function(){function w(a){return a!=g?""+a:""}function r(a){return"string"==typeof a}function x(a){return a&&a.nodeType}function $(a){return a}function U(a){a()}function y(a,b){for(var c in a)a.hasOwnProperty(c)&&b(c,a[c])}function L(a,b){var c=[];return h(a,function(d,e){b.call(a,d,e)&&c.push(d)}),c}function u(a,b,c){var d=[];return a(b,function(a,e){h(c.call(b,a,e),function(a){d.push(a)})}),d}function m(a,b,c){return w(a).replace(b,c||"")}function h(a,b){if(D(a))for(var c=0;c<a.length;c++)b.call(a,a[c],c);else a!=g&&b(a,0);return a}function V(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)}function s(a){return"function"==typeof a&&!a.item}function D(a){return a&&a.length!=g&&!r(a)&&!x(a)&&!s(a)&&a!==t}function M(a,b){var c=RegExp("(^|\\s)"+a+"(?=$|\\s)","i");return function(d){return a?c.test(d[b]):n}}function N(a,b){for(var c=0;a&&c<a.length;c++)a[c]===b&&a.splice(c--,1)}function G(a,b){setTimeout(a,b||0)}function H(a){return a.Mid=a.Mid||++aa}function O(a,b){var c,d=[],e={};return h(a,function(a){h(b(a),function(a){x(a)&&!e[c=H(a)]&&(d.push(a),e[c]=n)})}),d}function W(a,b){var c={$position:"absolute",$visibility:"hidden",$display:"block",$height:g},d=a.get(c),c=a.set(c).get("$height",n);return a.set(d),c*b+"px"}function ba(a,b,c,d,e,f){return function(g,h){var i,j=g||t.event,k=!f,l=h||j.target;if(f)for(;l&&l!=b&&!(k=f(l));)l=l.parentNode;return k&&(i=(!a.apply(q(f?l:b),c||[j,d])||""==e)&&"|"!=e)&&!h&&(j.stopPropagation&&(j.preventDefault(),j.stopPropagation()),j.cancelBubble=n),!i}}function P(a,b){h(b,function(a){a.e.detachEvent("on"+a.n,a.h)})}function Q(){h(J,U),J=g}function X(a){J?J.push(a):G(a)}function R(a){return u(h,a,function(a){return r(a)?a:D(a)?R(a):x(a)?(a=a.cloneNode(n),a.removeAttribute("id"),a):g})}function q(a,b,c){return s(a)?X(a):new E(B(a,b,c))}function B(a,b,c){function d(a){return a=u(h,a,function b(a){return D(a)?u(h,a,b):a}),e?L(a,function(a){for(;a=a.parentNode;)if(a==e||c)return a==e}):a}var e,f,g,i;return b&&1!=(b=B(b)).length?O(b,function(b){return B(a,b,c)}):(e=b&&b[0],r(a)?1<(b=a.split(/\s*,\s*/)).length?O(b,function(a){return B(a,e,c)}):(b=/(\S+)\s+(.+)$/.exec(a))?B(b[2],B(b[1],e),c):a!=(b=m(a,/^#/))?d(p.getElementById(b)):(f=(b=/([\w-]*)\.?([\w-]*)/.exec(a))[1],i=b[2],b=(g=p.getElementsByClassName&&i)?(e||p).getElementsByClassName(i):(e||p).getElementsByTagName(f||"*"),(f=g?f:i)&&(b=L(b,M(f,g?"nodeName":"className"))),c?d(b):b):d(a))}function K(a,b){var c,d,e={},f=e;return s(a)?a:"number"==typeof a?function(b,c){return c==a}:!a||"*"==a||r(a)&&(f=/^([\w-]*)\.?([\w-]*)$/.exec(a))?(c=M(f[1],"nodeName"),d=M(f[2],"className"),function(a){return 1==x(a)&&c(a)&&d(a)}):b?function(c){return q(a,b).find(c)!=g}:(q(a).each(function(a){e[H(a)]=n}),function(a){return e[H(a)]})}function Y(a){var b=K(a);return function(a){return b(a)?g:n}}function S(){function a(a,e){b==g&&(b=a,c=e,G(function(){h(d,U)}))}var b,c=[],d=[],e=a.then=function(a,e){function f(){var d,f;try{d=b?a:e,s(d)?(f=d.apply(Z,c),f&&s(f.then)?f.then(function(a){h(n,[a])},function(a){h(v,[a])}):h(n,[f])):h(b,c)}catch(g){h(v,[g])}}var h=S();return b!=g?G(f):d.push(f),h};return a.error=function(a){return e(0,a)},a}function E(a){for(var b=this.length=a.length,c=0;b>c;c++)this[c]=a[c]}var g=null,n=!0,v=!1,Z,t=this,p=document,aa=1,C={},J=/^[ic]/.test(p.readyState)?g:[],T=[],ca=t.requestAnimationFrame||function(a){G(a,33)},z=!!p.all&&!p.addEventListener;return y({each:function(a){return h(this,a)},filter:function(a){return new E(L(this,a))},collect:function(a){return new E(u(h,this,a))},sub:function(a,b){var c=0>a?this.length+a:a,d=b>=0?b:this.length+(b||0);return this.filter(function(a,b){return b>=c&&d>b})},find:function(a,b){for(var c,d=s(a)?a:function(b,c){return a===b?c:void 0},e=b||0;e<this.length;e++)if((c=d.call(this,this[e],e))!=g)return c},remove:function(){h(this,function(a){z&&1==x(a)&&(h(B("*",a),function(a){P(0,C[a.Mid]),delete C[a.Mid]}),P(0,C[a.Mid]),delete C[a.Mid]),a.parentNode.removeChild(a)})},text:function(){function a(b){var c=x(b);return 1==c?u(h,b.childNodes,a):5>c?b.data:g}return u(h,this,a).join("")},trav:function(a,b,c){var d="number"==typeof b,e=K(d?g:b),f=d?b:c;return new E(O(this,function(b){for(var c=[];(b=b[a])&&c.length!=f;)e(b)&&c.push(b);return c}))},up:function(a){return this.trav("parentNode",a,1)},next:function(a,b){return this.trav("nextSibling",a,b||1)},select:function(a,b){return q(a,this,b)},is:function(a){return!this.find(Y(a))},only:function(a){return this.filter(K(a))},not:function(a){return this.filter(Y(a))},get:function(a,b){var c,d,e=this,f=e[0];return f?r(a)?(c=/^([$@]*)(.*)/.exec(m(m(a,/^\$float$/,"cssFloat"),/^%/,"@data-")),f="$"==a?f.className:"$$"==a?z?f.style.cssText:f.getAttribute("style"):"$$fade"==a||"$$show"==a?"hidden"==e.get("$visibility")||"none"==e.get("$display")?0:"$$fade"==a?z?isNaN(e.get("$filter",n))?1:e.get("$filter",n):isNaN(e.get("$opacity",n))?1:e.get("$opacity",n):1:"$$slide"==a?e.get("$height"):"$$scrollX"==a?t.pageXOffset!=g?t.pageXOffset:(p.documentElement||p.body.parentNode||p.body).scrollLeft:"$$scrollY"==a?t.pageXOffset!=g?t.pageYOffset:(p.documentElement||p.body.parentNode||p.body).scrollTop:"$"==c[1]?t.getComputedStyle?t.getComputedStyle(f,g).getPropertyValue(m(c[2],/[A-Z]/g,function(a){return"-"+a.toLowerCase()})):(f.currentStyle||f.style)[m(c[2],/^float$/,"cssFloat")]:"@"==c[1]?f.getAttribute(c[2]):f[c[2]],b?parseFloat(m(f,/^[^\d-]+/)):f):(d={},(D(a)?h:y)(a,function(a){d[a]=e.get(a,b)}),d):void 0},set:function(a,b){var c,d=this;return b!==Z?(c=/^([$@]*)(.*)/.exec(m(m(a,/^\$float$/,"cssFloat"),/^%/,"@data-")),"$$fade"==a?this.set({$visibility:b?"visible":"hidden"}).set(z?1>b?{$filter:"alpha(opacity = "+100*b+")",$zoom:1}:{$filter:""}:{$opacity:b}):"$$slide"==a?this.set({$visibility:b?"visible":"hidden",$height:/px/.test(b)?b:function(a,c,d){return W(q(d),b)},$overflow:"hidden"}):"$$show"==a?b?this.set({$visibility:b?"visible":"hidden",$display:""}).set({$display:function(a){return"none"==a?"block":a}}):this.set({$display:"none"}):"$$"==a?z?this.set("$cssText",b):this.set("@style",b):h(d,function(d,e){var f=s(b)?b(q(d).get(a),e,d):b;"$"==a?h(f&&f.split(/\s+/),function(a){var b=m(a,/^[+-]/),c=d.className||"",e=m(c,RegExp("(^|\\s)"+b+"(?=$|\\s)"));(/^\+/.test(a)||b==a&&c==e)&&(e+=" "+b),d.className=m(e,/^\s+|\s+(?=\s|$)/g)}):"$$scrollX"==a?d.scroll(f,q(d).get("$$scrollY")):"$$scrollY"==a?d.scroll(q(d).get("$$scrollX"),f):"@"==c[1]?f!=g?d.setAttribute(c[2],f):d.removeAttribute(c[2]):"$"==c[1]?d.style[c[2]]=f:d[c[2]]=f})):r(a)||s(a)?this.set("$",a):y(a,function(a,b){d.set(a,b)}),d},show:function(){return this.set("$$show",1)},hide:function(){return this.set("$$show",0)},add:function(a,b){return this.each(function(c,d){var e;!function f(a){D(a)?h(a,f):s(a)?f(a(c,d)):a!=g&&(a=x(a)?a:p.createTextNode(a),e?e.parentNode.insertBefore(a,e.nextSibling):b?b(a,c,c.parentNode):c.appendChild(a),e=a)}(d&&!s(a)?R(a):a)})},fill:function(a){return this.each(function(a){q(a.childNodes).remove()}).add(a)},addBefore:function(a){return this.add(a,function(a,b,c){c.insertBefore(a,b)})},addAfter:function(a){return this.add(a,function(a,b,c){c.insertBefore(a,b.nextSibling)})},addFront:function(a){return this.add(a,function(a,b){b.insertBefore(a,b.firstChild)})},replace:function(a){return this.add(a,function(a,b,c){c.replaceChild(a,b)})},clone:function(){return new E(R(this))},animate:function(a,b,c){var d,e=S(),f=this,g=u(h,this,function(b,d){var e,f=q(b),g={};return y(e=f.get(a),function(c,e){var h=a[c];g[c]=s(h)?h(e,d,b):"$$slide"==c?W(f,h):h}),f.dial(e,g,c)}),i=b||500;return e.stop0=function(){return e(v),d()},d=q.loop(function(a){(a>=i||0>a)&&(a=i,d(),e(n,[f])),h(g,function(b){b(a/i)})}),e},dial:function(a,b,c){function d(a,b){return/^#/.test(a)?parseInt(6<a.length?a.substr(1+2*b,2):(a=a.charAt(1+b))+a,16):parseInt(m(a,/[^\d,]+/g).split(",")[b])}var e=this,f=c||0,g=s(f)?f:function(a,b,c){return a+c*(b-a)*(f+(1-f)*c*(3-2*c))};return function(c){y(a,function(a,f){var h=b[a],i=0;e.set(a,0>=c?f:c>=1?h:/^#|rgb\(/.test(h)?"rgb("+Math.round(g(d(f,i),d(h,i++),c))+","+Math.round(g(d(f,i),d(h,i++),c))+","+Math.round(g(d(f,i),d(h,i++),c))+")":m(h,/-?[\d.]+/,w(g(parseFloat(m(f,/^[^\d-]+/)),parseFloat(m(h,/^[^\d-]+/)),c))))})}},toggle:function(a,b,c,d){var e,f,h=this,i=v;return b?h.set(a)&&function(j){j!==i&&(f=(i=j===n||j===v?j:!i)?b:a,c?(e=h.animate(f,e?e.stop():c,d)).then(function(){e=g}):h.set(f))}:h.toggle(m(a,/\b(?=\w)/g,"-"),m(a,/\b(?=\w)/g,"+"))},values:function(a){var b=a||{};return this.each(function(a){var c=a.name,d=w(a.value);if(/form/i.test(a.tagName))for(c=0;c<a.elements.length;c++)q(a.elements[c]).values(b);else!c||/kbox|dio/i.test(a.type)&&!a.checked||(b[c]=b[c]==g?d:u(h,[b[c],d],$))}),b},offset:function(){for(var a=this[0],b={x:0,y:0};a;)b.x+=a.offsetLeft,b.y+=a.offsetTop,a=a.offsetParent;return b},on:function(a,b,c,d,e){return s(b)?this.on(g,a,b,c,e):r(d)?this.on(a,b,c,g,d):this.each(function(f,g){h(a?B(a,f):f,function(a){h(w(b).split(/\s/),function(b){var f=m(b,/[?|]/),h=ba(c,a,d,g,m(b,/[^?|]/g),e&&K(e,a));b={e:a,h:h,n:f},(c.M=c.M||[]).push(b),z?(a.attachEvent("on"+f,h),f=H(a),(C[f]=C[f]||[]).push(b)):(a.addEventListener(f,h,v),(a.M=a.M||[]).push(b))})})})},onOver:function(a,b){var c=this,d=[];return b?this.on(a,"|mouseover |mouseout",function(a,e){var f="mouseout"!=a.type,g=a.relatedTarget||a.toElement;d[e]===f||!f&&g&&(g==c[e]||q(g).up(c[e]).length)||(d[e]=f,b.call(this,f,a))}):this.onOver(g,a)},onFocus:function(a,b){return b?this.on(a,"|focus",b,[n]).on(a,"|blur",b,[v]):this.onFocus(g,a)},onChange:function(a,b){var c=[];return b?this.each(function(d,e){function f(f,g){c[e]=d[g],q(d).on(a,f,function(){var a=d[g];a!=c[e]&&(b.call(this,a,e),c[e]=a)})}/kbox|dio/i.test(d.type)?f("|click","checked"):f(z?"|propertychange":"|input |change |keyup","value")}):this.onChange(g,a)},onClick:function(a,b,c){return s(a)?this.on("click",a,b):this.on(a,"click",b,c)},trigger:function(a,b){return this.each(function(c){for(var d,e=c;e&&!d;)h(z?C[e.Mid]:e.M,function(e){e.n==a&&(d=d||!e.h(b,c))}),e=e.parentNode})}},function(a,b){E.prototype[a]=b}),y({request:function(a,b,c,d){d=d||{};var e,f=0,i=S(),j=c!=g&&!x(c)&&!r(c);try{e=t.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Msxml2.XMLHTTP.3.0"),j&&(c=u(y,c,function(a,b){return u(h,b,function(b){return encodeURIComponent(a)+(b!=g?"="+encodeURIComponent(b):"")})}).join("&")),c==g||/post/i.test(a)||(b+="?"+c,c=g),e.open(a,b,n,d.user,d.pass),j&&/post/i.test(a)&&e.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),y(d.headers,function(a,b){e.setRequestHeader(a,b)}),y(d.xhr,function(a,b){e[a]=b}),e.onreadystatechange=function(){4!=e.readyState||f++||(200==e.status?i(n,[e.responseText,e.responseXML]):i(v,[e.status,e.statusText,e.responseText]))},e.send(c)}catch(k){f||i(v,[0,g,w(k)])}return i},toJSON:function a(b){return b==g?""+b:r(b=b.valueOf())?'"'+m(b,/[\\\"\x00-\x1f\x22\x5c\u2028\u2029]/g,V)+'"':D(b)?"["+u(h,b,a).join()+"]":"object"==typeof b?"{"+u(y,b,function(b,c){return a(b)+":"+a(c)}).join()+"}":w(b)},parseJSON:t.JSON?t.JSON.parse:function(b){return b=m(b,/[\x00\xad\u0600-\uffff]/g,V),/^[[\],:{}\s]*$/.test(m(m(b,/\\["\\\/bfnrtu]/g),/"[^"\\\n\r]*"|true|false|null|[\d.eE+-]+/g))?eval("("+b+")"):void 0},ready:X,loop:function(a){var b={c:a,b:+new Date,a:function(){return N(T,b),+new Date-b.b}};return 2>T.push(b)&&function c(){h(T,function(a){a.c(Math.max(0,+new Date-a.b),a.a)})[0]&&ca(c)}(),b.a},off:function(a){h(a.M,function(a){z?(a.e.detachEvent("on"+a.n,a.h),N(C[a.e.Mid],a)):(a.e.removeEventListener(a.n,a.h,v),N(a.e.M,a))}),a.M=g}},function(a,b){q[a]=b}),z?(p.attachEvent("onreadystatechange",function(){/^[ic]/.test(p.readyState)&&Q()}),t.attachEvent("onload",Q)):p.addEventListener("DOMContentLoaded",Q,v),t.d=function(){h(C,P)},{$:q,$$:function(a){return B(a)[0]},EE:function(a,b,c){return a=q(p.createElement(a)),D(b)||"object"!=typeof b?a.add(b):a.set(b).add(c)},M:E}});