(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{361:function(e,t,n){"use strict";n.d(t,"d",(function(){return r})),n.d(t,"a",(function(){return s})),n.d(t,"i",(function(){return a})),n.d(t,"f",(function(){return u})),n.d(t,"g",(function(){return c})),n.d(t,"h",(function(){return l})),n.d(t,"b",(function(){return h})),n.d(t,"e",(function(){return f})),n.d(t,"k",(function(){return p})),n.d(t,"l",(function(){return g})),n.d(t,"c",(function(){return v})),n.d(t,"j",(function(){return m}));n(27),n(89),n(363),n(121),n(366),n(208),n(88),n(43),n(6),n(44),n(37),n(124),n(200);var r=/#.*$/,i=/\.(md|html)$/,s=/\/$/,a=/^[a-z]+:/i;function o(e){return decodeURI(e).replace(r,"").replace(i,"")}function u(e){return a.test(e)}function c(e){return/^mailto:/.test(e)}function l(e){return/^tel:/.test(e)}function h(e){if(u(e))return e;var t=e.match(r),n=t?t[0]:"",i=o(e);return s.test(i)?e:i+".html"+n}function f(e,t){var n=decodeURIComponent(e.hash),i=function(e){var t=e.match(r);if(t)return t[0]}(t);return(!i||n===i)&&o(e.path)===o(t)}function p(e,t,n){if(u(t))return{type:"external",path:t};n&&(t=function(e,t,n){var r=e.charAt(0);if("/"===r)return e;if("?"===r||"#"===r)return t+e;var i=t.split("/");n&&i[i.length-1]||i.pop();for(var s=e.replace(/^\//,"").split("/"),a=0;a<s.length;a++){var o=s[a];".."===o?i.pop():"."!==o&&i.push(o)}""!==i[0]&&i.unshift("");return i.join("/")}(t,n));for(var r=o(t),i=0;i<e.length;i++)if(o(e[i].regularPath)===r)return Object.assign({},e[i],{type:"page",path:h(e[i].path)});return console.error('[vuepress] No matching page found for sidebar item "'.concat(t,'"')),{}}function g(e,t,n,r){var i=n.pages,s=n.themeConfig,a=r&&s.locales&&s.locales[r]||s;if("auto"===(e.frontmatter.sidebar||a.sidebar||s.sidebar))return d(e);var o=a.sidebar||s.sidebar;if(o){var u=function(e,t){if(Array.isArray(t))return{base:"/",config:t};for(var n in t)if(0===(r=e,/(\.html|\/)$/.test(r)?r:r+"/").indexOf(encodeURI(n)))return{base:n,config:t[n]};var r;return{}}(t,o),c=u.base,l=u.config;return"auto"===l?d(e):l?l.map((function(e){return function e(t,n,r){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;if("string"==typeof t)return p(n,t,r);if(Array.isArray(t))return Object.assign(p(n,t[0],r),{title:t[1]});var s=t.children||[];return 0===s.length&&t.path?Object.assign(p(n,t.path,r),{title:t.title}):{type:"group",path:t.path,title:t.title,sidebarDepth:t.sidebarDepth,initialOpenGroupIndex:t.initialOpenGroupIndex,children:s.map((function(t){return e(t,n,r,i+1)})),collapsable:!1!==t.collapsable}}(e,i,c)})):[]}return[]}function d(e){var t=v(e.headers||[]);return[{type:"group",collapsable:!1,title:e.title,path:null,children:t.map((function(t){return{type:"auto",title:t.title,basePath:e.path,path:e.path+"#"+t.slug,children:t.children||[]}}))}]}function v(e){var t;return(e=e.map((function(e){return Object.assign({},e)}))).forEach((function(e){2===e.level?t=e:t&&(t.children||(t.children=[])).push(e)})),e.filter((function(e){return 2===e.level}))}function m(e){return Object.assign(e,{type:e.items&&e.items.length?"links":"link"})}},362:function(e,t,n){"use strict";n(399),n(122),n(6),n(92);var r=n(361),i={name:"NavLink",props:{item:{required:!0}},computed:{link:function(){return Object(r.b)(this.item.link)},exact:function(){var e=this;return this.$site.locales?Object.keys(this.$site.locales).some((function(t){return t===e.link})):"/"===this.link},isNonHttpURI:function(){return Object(r.g)(this.link)||Object(r.h)(this.link)},isBlankTarget:function(){return"_blank"===this.target},isInternal:function(){return!Object(r.f)(this.link)&&!this.isBlankTarget},target:function(){return this.isNonHttpURI?null:this.item.target?this.item.target:Object(r.f)(this.link)?"_blank":""},rel:function(){return this.isNonHttpURI||!1===this.item.rel?null:this.item.rel?this.item.rel:this.isBlankTarget?"noopener noreferrer":null}},methods:{focusoutAction:function(){this.$emit("focusout")}}},s=n(35),a=Object(s.a)(i,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.isInternal?n("RouterLink",{staticClass:"nav-link",attrs:{to:e.link,exact:e.exact},nativeOn:{focusout:function(t){return e.focusoutAction.apply(null,arguments)}}},[e._v("\n  "+e._s(e.item.text)+"\n")]):n("a",{staticClass:"nav-link external",attrs:{href:e.link,target:e.target,rel:e.rel},on:{focusout:e.focusoutAction}},[e._v("\n  "+e._s(e.item.text)+"\n  "),e.isBlankTarget?n("OutboundLink"):e._e()],1)}),[],!1,null,null,null);t.a=a.exports},363:function(e,t,n){"use strict";var r=n(11),i=n(205),s=n(9),a=n(90),o=n(14),u=n(28),c=n(62),l=n(206),h=n(207);i("match",(function(e,t,n){return[function(t){var n=u(this),i=null==t?void 0:c(t,e);return i?r(i,t,n):new RegExp(t)[e](o(n))},function(e){var r=s(this),i=o(e),u=n(t,r,i);if(u.done)return u.value;if(!r.global)return h(r,i);var c=r.unicode;r.lastIndex=0;for(var f,p=[],g=0;null!==(f=h(r,i));){var d=o(f[0]);p[g]=d,""===d&&(r.lastIndex=l(i,a(r.lastIndex),c)),g++}return 0===g?null:p}]}))},366:function(e,t,n){"use strict";var r=n(30),i=n(11),s=n(2),a=n(205),o=n(202),u=n(9),c=n(28),l=n(129),h=n(206),f=n(90),p=n(14),g=n(62),d=n(198),v=n(207),m=n(95),y=n(199),b=n(3),w=y.UNSUPPORTED_Y,k=Math.min,x=[].push,R=s(/./.exec),S=s(x),P=s("".slice);a("split",(function(e,t,n){var s;return s="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,n){var s=p(c(this)),a=void 0===n?4294967295:n>>>0;if(0===a)return[];if(void 0===e)return[s];if(!o(e))return i(t,s,e,a);for(var u,l,h,f=[],g=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),v=0,y=new RegExp(e.source,g+"g");(u=i(m,y,s))&&!((l=y.lastIndex)>v&&(S(f,P(s,v,u.index)),u.length>1&&u.index<s.length&&r(x,f,d(u,1)),h=u[0].length,v=l,f.length>=a));)y.lastIndex===u.index&&y.lastIndex++;return v===s.length?!h&&R(y,"")||S(f,""):S(f,P(s,v)),f.length>a?d(f,0,a):f}:"0".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:i(t,this,e,n)}:t,[function(t,n){var r=c(this),a=null==t?void 0:g(t,e);return a?i(a,t,r,n):i(s,p(r),t,n)},function(e,r){var i=u(this),a=p(e),o=n(s,i,a,r,s!==t);if(o.done)return o.value;var c=l(i,RegExp),g=i.unicode,d=(i.ignoreCase?"i":"")+(i.multiline?"m":"")+(i.unicode?"u":"")+(w?"g":"y"),m=new c(w?"^(?:"+i.source+")":i,d),y=void 0===r?4294967295:r>>>0;if(0===y)return[];if(0===a.length)return null===v(m,a)?[a]:[];for(var b=0,x=0,R=[];x<a.length;){m.lastIndex=w?0:x;var U,I=v(m,w?P(a,x):a);if(null===I||(U=k(f(m.lastIndex+(w?x:0)),a.length))===b)x=h(a,x,g);else{if(S(R,P(a,b,x)),R.length===y)return R;for(var L=1;L<=I.length-1;L++)if(S(R,I[L]),R.length===y)return R;x=b=U}}return S(R,P(a,b)),R}]}),!!b((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]})),w)},368:function(e,t,n){var r=n(3),i=n(5),s=n(18),a=i("iterator");e.exports=!r((function(){var e=new URL("b?a=1&b=2&c=3","http://a"),t=e.searchParams,n="";return e.pathname="c%20d",t.forEach((function(e,r){t.delete("b"),n+=r+e})),s&&!e.toJSON||!t.sort||"http://a/c%20d?a=1&c=3"!==e.href||"3"!==t.get("c")||"a=1"!==String(new URLSearchParams("?a=1"))||!t[a]||"a"!==new URL("https://a@b").username||"b"!==new URLSearchParams(new URLSearchParams("a=b")).get("a")||"xn--e1aybc"!==new URL("http://тест").host||"#%D0%B1"!==new URL("http://a#б").hash||"a1c3"!==n||"x"!==new URL("http://x",void 0).host}))},369:function(e,t,n){"use strict";n(125);var r=n(1),i=n(0),s=n(13),a=n(11),o=n(2),u=n(368),c=n(17),l=n(211),h=n(41),f=n(210),p=n(36),g=n(201),d=n(4),v=n(10),m=n(42),y=n(64),b=n(9),w=n(7),k=n(14),x=n(24),R=n(39),S=n(128),P=n(94),U=n(405),I=n(5),L=n(406),O=I("iterator"),E=p.set,q=p.getterFor("URLSearchParams"),C=p.getterFor("URLSearchParamsIterator"),A=s("fetch"),j=s("Request"),H=s("Headers"),$=j&&j.prototype,B=H&&H.prototype,_=i.RegExp,T=i.TypeError,z=i.decodeURIComponent,D=i.encodeURIComponent,F=o("".charAt),M=o([].join),N=o([].push),W=o("".replace),J=o([].shift),Y=o([].splice),Q=o("".split),G=o("".slice),K=/\+/g,V=Array(4),X=function(e){return V[e-1]||(V[e-1]=_("((?:%[\\da-f]{2}){"+e+"})","gi"))},Z=function(e){try{return z(e)}catch(t){return e}},ee=function(e){var t=W(e,K," "),n=4;try{return z(t)}catch(e){for(;n;)t=W(t,X(n--),Z);return t}},te=/[!'()~]|%20/g,ne={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"},re=function(e){return ne[e]},ie=function(e){return W(D(e),te,re)},se=f((function(e,t){E(this,{type:"URLSearchParamsIterator",iterator:S(q(e).entries),kind:t})}),"Iterator",(function(){var e=C(this),t=e.kind,n=e.iterator.next(),r=n.value;return n.done||(n.value="keys"===t?r.key:"values"===t?r.value:[r.key,r.value]),n}),!0),ae=function(e){this.entries=[],this.url=null,void 0!==e&&(w(e)?this.parseObject(e):this.parseQuery("string"==typeof e?"?"===F(e,0)?G(e,1):e:k(e)))};ae.prototype={type:"URLSearchParams",bindURL:function(e){this.url=e,this.update()},parseObject:function(e){var t,n,r,i,s,o,u,c=P(e);if(c)for(n=(t=S(e,c)).next;!(r=a(n,t)).done;){if(s=(i=S(b(r.value))).next,(o=a(s,i)).done||(u=a(s,i)).done||!a(s,i).done)throw T("Expected sequence with length 2");N(this.entries,{key:k(o.value),value:k(u.value)})}else for(var l in e)v(e,l)&&N(this.entries,{key:l,value:k(e[l])})},parseQuery:function(e){if(e)for(var t,n,r=Q(e,"&"),i=0;i<r.length;)(t=r[i++]).length&&(n=Q(t,"="),N(this.entries,{key:ee(J(n)),value:ee(M(n,"="))}))},serialize:function(){for(var e,t=this.entries,n=[],r=0;r<t.length;)e=t[r++],N(n,ie(e.key)+"="+ie(e.value));return M(n,"&")},update:function(){this.entries.length=0,this.parseQuery(this.url.query)},updateURL:function(){this.url&&this.url.update()}};var oe=function(){g(this,ue);var e=arguments.length>0?arguments[0]:void 0;E(this,new ae(e))},ue=oe.prototype;if(l(ue,{append:function(e,t){U(arguments.length,2);var n=q(this);N(n.entries,{key:k(e),value:k(t)}),n.updateURL()},delete:function(e){U(arguments.length,1);for(var t=q(this),n=t.entries,r=k(e),i=0;i<n.length;)n[i].key===r?Y(n,i,1):i++;t.updateURL()},get:function(e){U(arguments.length,1);for(var t=q(this).entries,n=k(e),r=0;r<t.length;r++)if(t[r].key===n)return t[r].value;return null},getAll:function(e){U(arguments.length,1);for(var t=q(this).entries,n=k(e),r=[],i=0;i<t.length;i++)t[i].key===n&&N(r,t[i].value);return r},has:function(e){U(arguments.length,1);for(var t=q(this).entries,n=k(e),r=0;r<t.length;)if(t[r++].key===n)return!0;return!1},set:function(e,t){U(arguments.length,1);for(var n,r=q(this),i=r.entries,s=!1,a=k(e),o=k(t),u=0;u<i.length;u++)(n=i[u]).key===a&&(s?Y(i,u--,1):(s=!0,n.value=o));s||N(i,{key:a,value:o}),r.updateURL()},sort:function(){var e=q(this);L(e.entries,(function(e,t){return e.key>t.key?1:-1})),e.updateURL()},forEach:function(e){for(var t,n=q(this).entries,r=m(e,arguments.length>1?arguments[1]:void 0),i=0;i<n.length;)r((t=n[i++]).value,t.key,this)},keys:function(){return new se(this,"keys")},values:function(){return new se(this,"values")},entries:function(){return new se(this,"entries")}},{enumerable:!0}),c(ue,O,ue.entries,{name:"entries"}),c(ue,"toString",(function(){return q(this).serialize()}),{enumerable:!0}),h(oe,"URLSearchParams"),r({global:!0,forced:!u},{URLSearchParams:oe}),!u&&d(H)){var ce=o(B.has),le=o(B.set),he=function(e){if(w(e)){var t,n=e.body;if("URLSearchParams"===y(n))return t=e.headers?new H(e.headers):new H,ce(t,"content-type")||le(t,"content-type","application/x-www-form-urlencoded;charset=UTF-8"),x(e,{body:R(0,k(n)),headers:R(0,t)})}return e};if(d(A)&&r({global:!0,enumerable:!0,forced:!0},{fetch:function(e){return A(e,arguments.length>1?he(arguments[1]):{})}}),d(j)){var fe=function(e){return g(this,$),new j(e,arguments.length>1?he(arguments[1]):{})};$.constructor=fe,fe.prototype=$,r({global:!0,forced:!0},{Request:fe})}}e.exports={URLSearchParams:oe,getState:q}},370:function(e,t,n){},371:function(e,t,n){"use strict";var r=n(1),i=n(220).trim;r({target:"String",proto:!0,forced:n(408)("trim")},{trim:function(){return i(this)}})},372:function(e,t,n){var r=n(8),i=n(0),s=n(2),a=n(127),o=n(216),u=n(20),c=n(12).f,l=n(63).f,h=n(38),f=n(202),p=n(14),g=n(203),d=n(199),v=n(17),m=n(3),y=n(10),b=n(36).enforce,w=n(212),k=n(5),x=n(204),R=n(215),S=k("match"),P=i.RegExp,U=P.prototype,I=i.SyntaxError,L=s(g),O=s(U.exec),E=s("".charAt),q=s("".replace),C=s("".indexOf),A=s("".slice),j=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,H=/a/g,$=/a/g,B=new P(H)!==H,_=d.MISSED_STICKY,T=d.UNSUPPORTED_Y,z=r&&(!B||_||x||R||m((function(){return $[S]=!1,P(H)!=H||P($)==$||"/a/i"!=P(H,"i")})));if(a("RegExp",z)){for(var D=function(e,t){var n,r,i,s,a,c,l=h(U,this),g=f(e),d=void 0===t,v=[],m=e;if(!l&&g&&d&&e.constructor===D)return e;if((g||h(U,e))&&(e=e.source,d&&(t="flags"in m?m.flags:L(m))),e=void 0===e?"":p(e),t=void 0===t?"":p(t),m=e,x&&"dotAll"in H&&(r=!!t&&C(t,"s")>-1)&&(t=q(t,/s/g,"")),n=t,_&&"sticky"in H&&(i=!!t&&C(t,"y")>-1)&&T&&(t=q(t,/y/g,"")),R&&(e=(s=function(e){for(var t,n=e.length,r=0,i="",s=[],a={},o=!1,u=!1,c=0,l="";r<=n;r++){if("\\"===(t=E(e,r)))t+=E(e,++r);else if("]"===t)o=!1;else if(!o)switch(!0){case"["===t:o=!0;break;case"("===t:O(j,A(e,r+1))&&(r+=2,u=!0),i+=t,c++;continue;case">"===t&&u:if(""===l||y(a,l))throw new I("Invalid capture group name");a[l]=!0,s[s.length]=[l,c],u=!1,l="";continue}u?l+=t:i+=t}return[i,s]}(e))[0],v=s[1]),a=o(P(e,t),l?this:U,D),(r||i||v.length)&&(c=b(a),r&&(c.dotAll=!0,c.raw=D(function(e){for(var t,n=e.length,r=0,i="",s=!1;r<=n;r++)"\\"!==(t=E(e,r))?s||"."!==t?("["===t?s=!0:"]"===t&&(s=!1),i+=t):i+="[\\s\\S]":i+=t+E(e,++r);return i}(e),n)),i&&(c.sticky=!0),v.length&&(c.groups=v)),e!==m)try{u(a,"source",""===m?"(?:)":m)}catch(e){}return a},F=function(e){e in D||c(D,e,{configurable:!0,get:function(){return P[e]},set:function(t){P[e]=t}})},M=l(P),N=0;M.length>N;)F(M[N++]);U.constructor=D,D.prototype=U,v(i,"RegExp",D)}w("RegExp")},373:function(e,t,n){var r=n(0),i=n(8),s=n(204),a=n(23),o=n(12).f,u=n(36).get,c=RegExp.prototype,l=r.TypeError;i&&s&&o(c,"dotAll",{configurable:!0,get:function(){if(this!==c){if("RegExp"===a(this))return!!u(this).dotAll;throw l("Incompatible receiver, RegExp required")}}})},374:function(e,t,n){var r=n(0),i=n(8),s=n(199).MISSED_STICKY,a=n(23),o=n(12).f,u=n(36).get,c=RegExp.prototype,l=r.TypeError;i&&s&&o(c,"sticky",{configurable:!0,get:function(){if(this!==c){if("RegExp"===a(this))return!!u(this).sticky;throw l("Incompatible receiver, RegExp required")}}})},375:function(e,t,n){"use strict";var r=n(2),i=n(91).PROPER,s=n(17),a=n(9),o=n(38),u=n(14),c=n(3),l=n(203),h=RegExp.prototype,f=h.toString,p=r(l),g=c((function(){return"/a/b"!=f.call({source:"a",flags:"b"})})),d=i&&"toString"!=f.name;(g||d)&&s(RegExp.prototype,"toString",(function(){var e=a(this),t=u(e.source),n=e.flags;return"/"+t+"/"+u(void 0===n&&o(h,e)&&!("flags"in h)?p(e):n)}),{unsafe:!0})},376:function(e,t,n){},395:function(e,t,n){"use strict";n(371),n(200),n(124),n(37),n(6),n(27),n(363),n(96),n(133),n(208),n(89),n(372),n(373),n(374),n(375),n(88),n(366),n(121),n(409),n(122);var r=n(217),i=n.n(r),s=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=i()(t,"title","");return i()(t,"frontmatter.tags")&&(r+=" ".concat(t.frontmatter.tags.join(" "))),n&&(r+=" ".concat(n)),a(e,r)},a=function(e,t){var n=function(e){return e.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&")},r=new RegExp("[^\0-]"),i=e.split(/\s+/g).map((function(e){return e.trim()})).filter((function(e){return!!e}));if(r.test(e))return i.some((function(e){return t.toLowerCase().indexOf(e)>-1}));var s=e.endsWith(" ");return new RegExp(i.map((function(e,t){return i.length!==t+1||s?"(?=.*\\b".concat(n(e),"\\b)"):"(?=.*\\b".concat(n(e),")")})).join("")+".+","gi").test(t)},o={name:"SearchBox",data:function(){return{query:"",focused:!1,focusIndex:0,placeholder:void 0}},computed:{showSuggestions:function(){return this.focused&&this.suggestions&&this.suggestions.length},suggestions:function(){var e=this.query.trim().toLowerCase();if(e){for(var t=this.$site.pages,n=this.$site.themeConfig.searchMaxSuggestions||5,r=this.$localePath,i=[],a=0;a<t.length&&!(i.length>=n);a++){var o=t[a];if(this.getPageLocalePath(o)===r&&this.isSearchable(o))if(s(e,o))i.push(o);else if(o.headers)for(var u=0;u<o.headers.length&&!(i.length>=n);u++){var c=o.headers[u];c.title&&s(e,o,c.title)&&i.push(Object.assign({},o,{path:o.path+"#"+c.slug,header:c}))}}return i}},alignRight:function(){return(this.$site.themeConfig.nav||[]).length+(this.$site.repo?1:0)<=2}},mounted:function(){this.placeholder=this.$site.themeConfig.searchPlaceholder||"",document.addEventListener("keydown",this.onHotkey)},beforeDestroy:function(){document.removeEventListener("keydown",this.onHotkey)},methods:{getPageLocalePath:function(e){for(var t in this.$site.locales||{})if("/"!==t&&0===e.path.indexOf(t))return t;return"/"},isSearchable:function(e){var t=null;return null===t||(t=Array.isArray(t)?t:new Array(t)).filter((function(t){return e.path.match(t)})).length>0},onHotkey:function(e){e.srcElement===document.body&&["s","/"].includes(e.key)&&(this.$refs.input.focus(),e.preventDefault())},onUp:function(){this.showSuggestions&&(this.focusIndex>0?this.focusIndex--:this.focusIndex=this.suggestions.length-1)},onDown:function(){this.showSuggestions&&(this.focusIndex<this.suggestions.length-1?this.focusIndex++:this.focusIndex=0)},go:function(e){this.showSuggestions&&(this.$router.push(this.suggestions[e].path),this.query="",this.focusIndex=0)},focus:function(e){this.focusIndex=e},unfocus:function(){this.focusIndex=-1}}},u=(n(410),n(35)),c=Object(u.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"search-box"},[n("input",{ref:"input",class:{focused:e.focused},attrs:{"aria-label":"Search",placeholder:e.placeholder,autocomplete:"off",spellcheck:"false"},domProps:{value:e.query},on:{input:function(t){e.query=t.target.value},focus:function(t){e.focused=!0},blur:function(t){e.focused=!1},keyup:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.go(e.focusIndex)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"])?null:e.onUp.apply(null,arguments)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"])?null:e.onDown.apply(null,arguments)}]}}),e._v(" "),e.showSuggestions?n("ul",{staticClass:"suggestions",class:{"align-right":e.alignRight},on:{mouseleave:e.unfocus}},e._l(e.suggestions,(function(t,r){return n("li",{key:r,staticClass:"suggestion",class:{focused:r===e.focusIndex},on:{mousedown:function(t){return e.go(r)},mouseenter:function(t){return e.focus(r)}}},[n("a",{attrs:{href:t.path},on:{click:function(e){e.preventDefault()}}},[n("span",{staticClass:"page-title"},[e._v(e._s(t.title||t.path))]),e._v(" "),t.header?n("span",{staticClass:"header"},[e._v("> "+e._s(t.header.title))]):e._e()])])})),0):e._e()])}),[],!1,null,null,null);t.a=c.exports},396:function(e,t,n){"use strict";var r=n(194),i=n(120),s=(n(6),n(19),n(25),n(123),n(403),n(369),n(27),n(89),{name:"AlgoliaSearchBox",props:["options"],data:function(){return{placeholder:void 0}},watch:{$lang:function(e){this.update(this.options,e)},options:function(e){this.update(e,this.$lang)}},mounted:function(){this.initialize(this.options,this.$lang),this.placeholder=this.$site.themeConfig.searchPlaceholder||""},methods:{initialize:function(e,t){var s=this;Promise.all([Promise.all([n.e(0),n.e(3)]).then(n.t.bind(null,672,7)),Promise.all([n.e(0),n.e(3)]).then(n.t.bind(null,673,7))]).then((function(n){var a=Object(i.a)(n,1)[0];a=a.default;var o=e.algoliaOptions,u=void 0===o?{}:o;a(Object.assign({},e,{inputSelector:"#algolia-search-input",algoliaOptions:Object(r.a)(Object(r.a)({},u),{},{facetFilters:["lang:".concat(t)].concat(u.facetFilters||[])}),handleSelected:function(e,t,n){var r=new URL(n.url),i=r.pathname,a=r.hash,o=i.replace(s.$site.base,"/"),u=decodeURIComponent(a);s.$router.push("".concat(o).concat(u))}}))}))},update:function(e,t){this.$el.innerHTML='<input id="algolia-search-input" class="search-query">',this.initialize(e,t)}}}),a=(n(407),n(35)),o=Object(a.a)(s,(function(){var e=this.$createElement,t=this._self._c||e;return t("form",{staticClass:"algolia-search-wrapper search-box",attrs:{id:"search-form",role:"search"}},[t("input",{staticClass:"search-query",attrs:{id:"algolia-search-input",placeholder:this.placeholder}})])}),[],!1,null,null,null);t.a=o.exports},399:function(e,t,n){"use strict";var r=n(1),i=n(400);r({target:"String",proto:!0,forced:n(401)("link")},{link:function(e){return i(this,"a","href",e)}})},400:function(e,t,n){var r=n(2),i=n(28),s=n(14),a=/"/g,o=r("".replace);e.exports=function(e,t,n,r){var u=s(i(e)),c="<"+t;return""!==n&&(c+=" "+n+'="'+o(s(r),a,"&quot;")+'"'),c+">"+u+"</"+t+">"}},401:function(e,t,n){var r=n(3);e.exports=function(e){return r((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}))}},403:function(e,t,n){"use strict";n(19);var r,i=n(1),s=n(8),a=n(368),o=n(0),u=n(42),c=n(2),l=n(93).f,h=n(17),f=n(201),p=n(10),g=n(213),d=n(214),v=n(198),m=n(130).codeAt,y=n(404),b=n(14),w=n(41),k=n(369),x=n(36),R=x.set,S=x.getterFor("URL"),P=k.URLSearchParams,U=k.getState,I=o.URL,L=o.TypeError,O=o.parseInt,E=Math.floor,q=Math.pow,C=c("".charAt),A=c(/./.exec),j=c([].join),H=c(1..toString),$=c([].pop),B=c([].push),_=c("".replace),T=c([].shift),z=c("".split),D=c("".slice),F=c("".toLowerCase),M=c([].unshift),N=/[a-z]/i,W=/[\d+-.a-z]/i,J=/\d/,Y=/^0x/i,Q=/^[0-7]+$/,G=/^\d+$/,K=/^[\da-f]+$/i,V=/[\0\t\n\r #%/:<>?@[\\\]^|]/,X=/[\0\t\n\r #/:<>?@[\\\]^|]/,Z=/^[\u0000-\u0020]+|[\u0000-\u0020]+$/g,ee=/[\t\n\r]/g,te=function(e){var t,n,r,i;if("number"==typeof e){for(t=[],n=0;n<4;n++)M(t,e%256),e=E(e/256);return j(t,".")}if("object"==typeof e){for(t="",r=function(e){for(var t=null,n=1,r=null,i=0,s=0;s<8;s++)0!==e[s]?(i>n&&(t=r,n=i),r=null,i=0):(null===r&&(r=s),++i);return i>n&&(t=r,n=i),t}(e),n=0;n<8;n++)i&&0===e[n]||(i&&(i=!1),r===n?(t+=n?":":"::",i=!0):(t+=H(e[n],16),n<7&&(t+=":")));return"["+t+"]"}return e},ne={},re=g({},ne,{" ":1,'"':1,"<":1,">":1,"`":1}),ie=g({},re,{"#":1,"?":1,"{":1,"}":1}),se=g({},ie,{"/":1,":":1,";":1,"=":1,"@":1,"[":1,"\\":1,"]":1,"^":1,"|":1}),ae=function(e,t){var n=m(e,0);return n>32&&n<127&&!p(t,e)?e:encodeURIComponent(e)},oe={ftp:21,file:null,http:80,https:443,ws:80,wss:443},ue=function(e,t){var n;return 2==e.length&&A(N,C(e,0))&&(":"==(n=C(e,1))||!t&&"|"==n)},ce=function(e){var t;return e.length>1&&ue(D(e,0,2))&&(2==e.length||"/"===(t=C(e,2))||"\\"===t||"?"===t||"#"===t)},le=function(e){return"."===e||"%2e"===F(e)},he={},fe={},pe={},ge={},de={},ve={},me={},ye={},be={},we={},ke={},xe={},Re={},Se={},Pe={},Ue={},Ie={},Le={},Oe={},Ee={},qe={},Ce=function(e,t,n){var r,i,s,a=b(e);if(t){if(i=this.parse(a))throw L(i);this.searchParams=null}else{if(void 0!==n&&(r=new Ce(n,!0)),i=this.parse(a,null,r))throw L(i);(s=U(new P)).bindURL(this),this.searchParams=s}};Ce.prototype={type:"URL",parse:function(e,t,n){var i,s,a,o,u,c=this,l=t||he,h=0,f="",g=!1,m=!1,y=!1;for(e=b(e),t||(c.scheme="",c.username="",c.password="",c.host=null,c.port=null,c.path=[],c.query=null,c.fragment=null,c.cannotBeABaseURL=!1,e=_(e,Z,"")),e=_(e,ee,""),i=d(e);h<=i.length;){switch(s=i[h],l){case he:if(!s||!A(N,s)){if(t)return"Invalid scheme";l=pe;continue}f+=F(s),l=fe;break;case fe:if(s&&(A(W,s)||"+"==s||"-"==s||"."==s))f+=F(s);else{if(":"!=s){if(t)return"Invalid scheme";f="",l=pe,h=0;continue}if(t&&(c.isSpecial()!=p(oe,f)||"file"==f&&(c.includesCredentials()||null!==c.port)||"file"==c.scheme&&!c.host))return;if(c.scheme=f,t)return void(c.isSpecial()&&oe[c.scheme]==c.port&&(c.port=null));f="","file"==c.scheme?l=Se:c.isSpecial()&&n&&n.scheme==c.scheme?l=ge:c.isSpecial()?l=ye:"/"==i[h+1]?(l=de,h++):(c.cannotBeABaseURL=!0,B(c.path,""),l=Oe)}break;case pe:if(!n||n.cannotBeABaseURL&&"#"!=s)return"Invalid scheme";if(n.cannotBeABaseURL&&"#"==s){c.scheme=n.scheme,c.path=v(n.path),c.query=n.query,c.fragment="",c.cannotBeABaseURL=!0,l=qe;break}l="file"==n.scheme?Se:ve;continue;case ge:if("/"!=s||"/"!=i[h+1]){l=ve;continue}l=be,h++;break;case de:if("/"==s){l=we;break}l=Le;continue;case ve:if(c.scheme=n.scheme,s==r)c.username=n.username,c.password=n.password,c.host=n.host,c.port=n.port,c.path=v(n.path),c.query=n.query;else if("/"==s||"\\"==s&&c.isSpecial())l=me;else if("?"==s)c.username=n.username,c.password=n.password,c.host=n.host,c.port=n.port,c.path=v(n.path),c.query="",l=Ee;else{if("#"!=s){c.username=n.username,c.password=n.password,c.host=n.host,c.port=n.port,c.path=v(n.path),c.path.length--,l=Le;continue}c.username=n.username,c.password=n.password,c.host=n.host,c.port=n.port,c.path=v(n.path),c.query=n.query,c.fragment="",l=qe}break;case me:if(!c.isSpecial()||"/"!=s&&"\\"!=s){if("/"!=s){c.username=n.username,c.password=n.password,c.host=n.host,c.port=n.port,l=Le;continue}l=we}else l=be;break;case ye:if(l=be,"/"!=s||"/"!=C(f,h+1))continue;h++;break;case be:if("/"!=s&&"\\"!=s){l=we;continue}break;case we:if("@"==s){g&&(f="%40"+f),g=!0,a=d(f);for(var w=0;w<a.length;w++){var k=a[w];if(":"!=k||y){var x=ae(k,se);y?c.password+=x:c.username+=x}else y=!0}f=""}else if(s==r||"/"==s||"?"==s||"#"==s||"\\"==s&&c.isSpecial()){if(g&&""==f)return"Invalid authority";h-=d(f).length+1,f="",l=ke}else f+=s;break;case ke:case xe:if(t&&"file"==c.scheme){l=Ue;continue}if(":"!=s||m){if(s==r||"/"==s||"?"==s||"#"==s||"\\"==s&&c.isSpecial()){if(c.isSpecial()&&""==f)return"Invalid host";if(t&&""==f&&(c.includesCredentials()||null!==c.port))return;if(o=c.parseHost(f))return o;if(f="",l=Ie,t)return;continue}"["==s?m=!0:"]"==s&&(m=!1),f+=s}else{if(""==f)return"Invalid host";if(o=c.parseHost(f))return o;if(f="",l=Re,t==xe)return}break;case Re:if(!A(J,s)){if(s==r||"/"==s||"?"==s||"#"==s||"\\"==s&&c.isSpecial()||t){if(""!=f){var R=O(f,10);if(R>65535)return"Invalid port";c.port=c.isSpecial()&&R===oe[c.scheme]?null:R,f=""}if(t)return;l=Ie;continue}return"Invalid port"}f+=s;break;case Se:if(c.scheme="file","/"==s||"\\"==s)l=Pe;else{if(!n||"file"!=n.scheme){l=Le;continue}if(s==r)c.host=n.host,c.path=v(n.path),c.query=n.query;else if("?"==s)c.host=n.host,c.path=v(n.path),c.query="",l=Ee;else{if("#"!=s){ce(j(v(i,h),""))||(c.host=n.host,c.path=v(n.path),c.shortenPath()),l=Le;continue}c.host=n.host,c.path=v(n.path),c.query=n.query,c.fragment="",l=qe}}break;case Pe:if("/"==s||"\\"==s){l=Ue;break}n&&"file"==n.scheme&&!ce(j(v(i,h),""))&&(ue(n.path[0],!0)?B(c.path,n.path[0]):c.host=n.host),l=Le;continue;case Ue:if(s==r||"/"==s||"\\"==s||"?"==s||"#"==s){if(!t&&ue(f))l=Le;else if(""==f){if(c.host="",t)return;l=Ie}else{if(o=c.parseHost(f))return o;if("localhost"==c.host&&(c.host=""),t)return;f="",l=Ie}continue}f+=s;break;case Ie:if(c.isSpecial()){if(l=Le,"/"!=s&&"\\"!=s)continue}else if(t||"?"!=s)if(t||"#"!=s){if(s!=r&&(l=Le,"/"!=s))continue}else c.fragment="",l=qe;else c.query="",l=Ee;break;case Le:if(s==r||"/"==s||"\\"==s&&c.isSpecial()||!t&&("?"==s||"#"==s)){if(".."===(u=F(u=f))||"%2e."===u||".%2e"===u||"%2e%2e"===u?(c.shortenPath(),"/"==s||"\\"==s&&c.isSpecial()||B(c.path,"")):le(f)?"/"==s||"\\"==s&&c.isSpecial()||B(c.path,""):("file"==c.scheme&&!c.path.length&&ue(f)&&(c.host&&(c.host=""),f=C(f,0)+":"),B(c.path,f)),f="","file"==c.scheme&&(s==r||"?"==s||"#"==s))for(;c.path.length>1&&""===c.path[0];)T(c.path);"?"==s?(c.query="",l=Ee):"#"==s&&(c.fragment="",l=qe)}else f+=ae(s,ie);break;case Oe:"?"==s?(c.query="",l=Ee):"#"==s?(c.fragment="",l=qe):s!=r&&(c.path[0]+=ae(s,ne));break;case Ee:t||"#"!=s?s!=r&&("'"==s&&c.isSpecial()?c.query+="%27":c.query+="#"==s?"%23":ae(s,ne)):(c.fragment="",l=qe);break;case qe:s!=r&&(c.fragment+=ae(s,re))}h++}},parseHost:function(e){var t,n,r;if("["==C(e,0)){if("]"!=C(e,e.length-1))return"Invalid host";if(!(t=function(e){var t,n,r,i,s,a,o,u=[0,0,0,0,0,0,0,0],c=0,l=null,h=0,f=function(){return C(e,h)};if(":"==f()){if(":"!=C(e,1))return;h+=2,l=++c}for(;f();){if(8==c)return;if(":"!=f()){for(t=n=0;n<4&&A(K,f());)t=16*t+O(f(),16),h++,n++;if("."==f()){if(0==n)return;if(h-=n,c>6)return;for(r=0;f();){if(i=null,r>0){if(!("."==f()&&r<4))return;h++}if(!A(J,f()))return;for(;A(J,f());){if(s=O(f(),10),null===i)i=s;else{if(0==i)return;i=10*i+s}if(i>255)return;h++}u[c]=256*u[c]+i,2!=++r&&4!=r||c++}if(4!=r)return;break}if(":"==f()){if(h++,!f())return}else if(f())return;u[c++]=t}else{if(null!==l)return;h++,l=++c}}if(null!==l)for(a=c-l,c=7;0!=c&&a>0;)o=u[c],u[c--]=u[l+a-1],u[l+--a]=o;else if(8!=c)return;return u}(D(e,1,-1))))return"Invalid host";this.host=t}else if(this.isSpecial()){if(e=y(e),A(V,e))return"Invalid host";if(null===(t=function(e){var t,n,r,i,s,a,o,u=z(e,".");if(u.length&&""==u[u.length-1]&&u.length--,(t=u.length)>4)return e;for(n=[],r=0;r<t;r++){if(""==(i=u[r]))return e;if(s=10,i.length>1&&"0"==C(i,0)&&(s=A(Y,i)?16:8,i=D(i,8==s?1:2)),""===i)a=0;else{if(!A(10==s?G:8==s?Q:K,i))return e;a=O(i,s)}B(n,a)}for(r=0;r<t;r++)if(a=n[r],r==t-1){if(a>=q(256,5-t))return null}else if(a>255)return null;for(o=$(n),r=0;r<n.length;r++)o+=n[r]*q(256,3-r);return o}(e)))return"Invalid host";this.host=t}else{if(A(X,e))return"Invalid host";for(t="",n=d(e),r=0;r<n.length;r++)t+=ae(n[r],ne);this.host=t}},cannotHaveUsernamePasswordPort:function(){return!this.host||this.cannotBeABaseURL||"file"==this.scheme},includesCredentials:function(){return""!=this.username||""!=this.password},isSpecial:function(){return p(oe,this.scheme)},shortenPath:function(){var e=this.path,t=e.length;!t||"file"==this.scheme&&1==t&&ue(e[0],!0)||e.length--},serialize:function(){var e=this,t=e.scheme,n=e.username,r=e.password,i=e.host,s=e.port,a=e.path,o=e.query,u=e.fragment,c=t+":";return null!==i?(c+="//",e.includesCredentials()&&(c+=n+(r?":"+r:"")+"@"),c+=te(i),null!==s&&(c+=":"+s)):"file"==t&&(c+="//"),c+=e.cannotBeABaseURL?a[0]:a.length?"/"+j(a,"/"):"",null!==o&&(c+="?"+o),null!==u&&(c+="#"+u),c},setHref:function(e){var t=this.parse(e);if(t)throw L(t);this.searchParams.update()},getOrigin:function(){var e=this.scheme,t=this.port;if("blob"==e)try{return new Ae(e.path[0]).origin}catch(e){return"null"}return"file"!=e&&this.isSpecial()?e+"://"+te(this.host)+(null!==t?":"+t:""):"null"},getProtocol:function(){return this.scheme+":"},setProtocol:function(e){this.parse(b(e)+":",he)},getUsername:function(){return this.username},setUsername:function(e){var t=d(b(e));if(!this.cannotHaveUsernamePasswordPort()){this.username="";for(var n=0;n<t.length;n++)this.username+=ae(t[n],se)}},getPassword:function(){return this.password},setPassword:function(e){var t=d(b(e));if(!this.cannotHaveUsernamePasswordPort()){this.password="";for(var n=0;n<t.length;n++)this.password+=ae(t[n],se)}},getHost:function(){var e=this.host,t=this.port;return null===e?"":null===t?te(e):te(e)+":"+t},setHost:function(e){this.cannotBeABaseURL||this.parse(e,ke)},getHostname:function(){var e=this.host;return null===e?"":te(e)},setHostname:function(e){this.cannotBeABaseURL||this.parse(e,xe)},getPort:function(){var e=this.port;return null===e?"":b(e)},setPort:function(e){this.cannotHaveUsernamePasswordPort()||(""==(e=b(e))?this.port=null:this.parse(e,Re))},getPathname:function(){var e=this.path;return this.cannotBeABaseURL?e[0]:e.length?"/"+j(e,"/"):""},setPathname:function(e){this.cannotBeABaseURL||(this.path=[],this.parse(e,Ie))},getSearch:function(){var e=this.query;return e?"?"+e:""},setSearch:function(e){""==(e=b(e))?this.query=null:("?"==C(e,0)&&(e=D(e,1)),this.query="",this.parse(e,Ee)),this.searchParams.update()},getSearchParams:function(){return this.searchParams.facade},getHash:function(){var e=this.fragment;return e?"#"+e:""},setHash:function(e){""!=(e=b(e))?("#"==C(e,0)&&(e=D(e,1)),this.fragment="",this.parse(e,qe)):this.fragment=null},update:function(){this.query=this.searchParams.serialize()||null}};var Ae=function(e){var t=f(this,je),n=arguments.length>1?arguments[1]:void 0,r=R(t,new Ce(e,!1,n));s||(t.href=r.serialize(),t.origin=r.getOrigin(),t.protocol=r.getProtocol(),t.username=r.getUsername(),t.password=r.getPassword(),t.host=r.getHost(),t.hostname=r.getHostname(),t.port=r.getPort(),t.pathname=r.getPathname(),t.search=r.getSearch(),t.searchParams=r.getSearchParams(),t.hash=r.getHash())},je=Ae.prototype,He=function(e,t){return{get:function(){return S(this)[e]()},set:t&&function(e){return S(this)[t](e)},configurable:!0,enumerable:!0}};if(s&&l(je,{href:He("serialize","setHref"),origin:He("getOrigin"),protocol:He("getProtocol","setProtocol"),username:He("getUsername","setUsername"),password:He("getPassword","setPassword"),host:He("getHost","setHost"),hostname:He("getHostname","setHostname"),port:He("getPort","setPort"),pathname:He("getPathname","setPathname"),search:He("getSearch","setSearch"),searchParams:He("getSearchParams"),hash:He("getHash","setHash")}),h(je,"toJSON",(function(){return S(this).serialize()}),{enumerable:!0}),h(je,"toString",(function(){return S(this).serialize()}),{enumerable:!0}),I){var $e=I.createObjectURL,Be=I.revokeObjectURL;$e&&h(Ae,"createObjectURL",u($e,I)),Be&&h(Ae,"revokeObjectURL",u(Be,I))}w(Ae,"URL"),i({global:!0,forced:!a,sham:!s},{URL:Ae})},404:function(e,t,n){"use strict";var r=n(0),i=n(2),s=/[^\0-\u007E]/,a=/[.\u3002\uFF0E\uFF61]/g,o="Overflow: input needs wider integers to process",u=r.RangeError,c=i(a.exec),l=Math.floor,h=String.fromCharCode,f=i("".charCodeAt),p=i([].join),g=i([].push),d=i("".replace),v=i("".split),m=i("".toLowerCase),y=function(e){return e+22+75*(e<26)},b=function(e,t,n){var r=0;for(e=n?l(e/700):e>>1,e+=l(e/t);e>455;)e=l(e/35),r+=36;return l(r+36*e/(e+38))},w=function(e){var t,n,r=[],i=(e=function(e){for(var t=[],n=0,r=e.length;n<r;){var i=f(e,n++);if(i>=55296&&i<=56319&&n<r){var s=f(e,n++);56320==(64512&s)?g(t,((1023&i)<<10)+(1023&s)+65536):(g(t,i),n--)}else g(t,i)}return t}(e)).length,s=128,a=0,c=72;for(t=0;t<e.length;t++)(n=e[t])<128&&g(r,h(n));var d=r.length,v=d;for(d&&g(r,"-");v<i;){var m=2147483647;for(t=0;t<e.length;t++)(n=e[t])>=s&&n<m&&(m=n);var w=v+1;if(m-s>l((2147483647-a)/w))throw u(o);for(a+=(m-s)*w,s=m,t=0;t<e.length;t++){if((n=e[t])<s&&++a>2147483647)throw u(o);if(n==s){for(var k=a,x=36;;){var R=x<=c?1:x>=c+26?26:x-c;if(k<R)break;var S=k-R,P=36-R;g(r,h(y(R+S%P))),k=l(S/P),x+=36}g(r,h(y(k))),c=b(a,w,v==d),a=0,v++}}a++,s++}return p(r,"")};e.exports=function(e){var t,n,r=[],i=v(d(m(e),a,"."),".");for(t=0;t<i.length;t++)n=i[t],g(r,c(s,n)?"xn--"+w(n):n);return p(r,".")}},405:function(e,t,n){var r=n(0).TypeError;e.exports=function(e,t){if(e<t)throw r("Not enough arguments");return e}},406:function(e,t,n){var r=n(198),i=Math.floor,s=function(e,t){var n=e.length,u=i(n/2);return n<8?a(e,t):o(e,s(r(e,0,u),t),s(r(e,u),t),t)},a=function(e,t){for(var n,r,i=e.length,s=1;s<i;){for(r=s,n=e[s];r&&t(e[r-1],n)>0;)e[r]=e[--r];r!==s++&&(e[r]=n)}return e},o=function(e,t,n,r){for(var i=t.length,s=n.length,a=0,o=0;a<i||o<s;)e[a+o]=a<i&&o<s?r(t[a],n[o])<=0?t[a++]:n[o++]:a<i?t[a++]:n[o++];return e};e.exports=s},407:function(e,t,n){"use strict";n(370)},408:function(e,t,n){var r=n(91).PROPER,i=n(3),s=n(134);e.exports=function(e){return i((function(){return!!s[e]()||"​᠎"!=="​᠎"[e]()||r&&s[e].name!==e}))}},409:function(e,t,n){"use strict";var r,i=n(1),s=n(2),a=n(29).f,o=n(90),u=n(14),c=n(131),l=n(28),h=n(132),f=n(18),p=s("".endsWith),g=s("".slice),d=Math.min,v=h("endsWith");i({target:"String",proto:!0,forced:!!(f||v||(r=a(String.prototype,"endsWith"),!r||r.writable))&&!v},{endsWith:function(e){var t=u(l(this));c(e);var n=arguments.length>1?arguments[1]:void 0,r=t.length,i=void 0===n?r:d(o(n),r),s=u(e);return p?p(t,s,i):g(t,i-s.length,i)===s}})},410:function(e,t,n){"use strict";n(376)}}]);