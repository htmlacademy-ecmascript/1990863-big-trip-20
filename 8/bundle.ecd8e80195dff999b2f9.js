(()=>{var t={10:(t,e,n)=>{"use strict";n.d(e,{Z:()=>a});var i=n(537),s=n.n(i),r=n(645),o=n.n(r)()(s());o.push([t.id,".shake {\n  animation: shake 0.6s;\n  position: relative;\n  z-index: 10;\n}\n\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-5px);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(5px);\n  }\n}\n","",{version:3,sources:["webpack://./src/framework/view/abstract-view.css"],names:[],mappings:"AAAA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE;;IAEE,wBAAwB;EAC1B;;EAEA;;;;;IAKE,2BAA2B;EAC7B;;EAEA;;;;IAIE,0BAA0B;EAC5B;AACF",sourcesContent:[".shake {\n  animation: shake 0.6s;\n  position: relative;\n  z-index: 10;\n}\n\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-5px);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(5px);\n  }\n}\n"],sourceRoot:""}]);const a=o},645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",i=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),i&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),i&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,i,s,r){"string"==typeof t&&(t=[[null,t,void 0]]);var o={};if(i)for(var a=0;a<this.length;a++){var l=this[a][0];null!=l&&(o[l]=!0)}for(var c=0;c<t.length;c++){var d=[].concat(t[c]);i&&o[d[0]]||(void 0!==r&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=r),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),s&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=s):d[4]="".concat(s)),e.push(d))}},e}},537:t=>{"use strict";t.exports=function(t){var e=t[1],n=t[3];if(!n)return e;if("function"==typeof btoa){var i=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),r="/*# ".concat(s," */");return[e].concat([r]).join("\n")}return[e].join("\n")}},484:function(t){t.exports=function(){"use strict";var t=6e4,e=36e5,n="millisecond",i="second",s="minute",r="hour",o="day",a="week",l="month",c="quarter",d="year",u="date",p="Invalid Date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,f=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},v=function(t,e,n){var i=String(t);return!i||i.length>=e?t:""+Array(e+1-i.length).join(n)+t},_={s:v,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),i=Math.floor(n/60),s=n%60;return(e<=0?"+":"-")+v(i,2,"0")+":"+v(s,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var i=12*(n.year()-e.year())+(n.month()-e.month()),s=e.clone().add(i,l),r=n-s<0,o=e.clone().add(i+(r?-1:1),l);return+(-(i+(n-s)/(r?s-o:o-s))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:l,y:d,w:a,d:o,D:u,h:r,m:s,s:i,ms:n,Q:c}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},y="en",$={};$[y]=m;var g=function(t){return t instanceof T},b=function t(e,n,i){var s;if(!e)return y;if("string"==typeof e){var r=e.toLowerCase();$[r]&&(s=r),n&&($[r]=n,s=r);var o=e.split("-");if(!s&&o.length>1)return t(o[0])}else{var a=e.name;$[a]=e,s=a}return!i&&s&&(y=s),s||!i&&y},C=function(t,e){if(g(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new T(n)},M=_;M.l=b,M.i=g,M.w=function(t,e){return C(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var T=function(){function m(t){this.$L=b(t.locale,null,!0),this.parse(t)}var v=m.prototype;return v.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(M.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var i=e.match(h);if(i){var s=i[2]-1||0,r=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)):new Date(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},v.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},v.$utils=function(){return M},v.isValid=function(){return!(this.$d.toString()===p)},v.isSame=function(t,e){var n=C(t);return this.startOf(e)<=n&&n<=this.endOf(e)},v.isAfter=function(t,e){return C(t)<this.startOf(e)},v.isBefore=function(t,e){return this.endOf(e)<C(t)},v.$g=function(t,e,n){return M.u(t)?this[e]:this.set(n,t)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(t,e){var n=this,c=!!M.u(e)||e,p=M.p(t),h=function(t,e){var i=M.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return c?i:i.endOf(o)},f=function(t,e){return M.w(n.toDate()[t].apply(n.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},m=this.$W,v=this.$M,_=this.$D,y="set"+(this.$u?"UTC":"");switch(p){case d:return c?h(1,0):h(31,11);case l:return c?h(1,v):h(0,v+1);case a:var $=this.$locale().weekStart||0,g=(m<$?m+7:m)-$;return h(c?_-g:_+(6-g),v);case o:case u:return f(y+"Hours",0);case r:return f(y+"Minutes",1);case s:return f(y+"Seconds",2);case i:return f(y+"Milliseconds",3);default:return this.clone()}},v.endOf=function(t){return this.startOf(t,!1)},v.$set=function(t,e){var a,c=M.p(t),p="set"+(this.$u?"UTC":""),h=(a={},a[o]=p+"Date",a[u]=p+"Date",a[l]=p+"Month",a[d]=p+"FullYear",a[r]=p+"Hours",a[s]=p+"Minutes",a[i]=p+"Seconds",a[n]=p+"Milliseconds",a)[c],f=c===o?this.$D+(e-this.$W):e;if(c===l||c===d){var m=this.clone().set(u,1);m.$d[h](f),m.init(),this.$d=m.set(u,Math.min(this.$D,m.daysInMonth())).$d}else h&&this.$d[h](f);return this.init(),this},v.set=function(t,e){return this.clone().$set(t,e)},v.get=function(t){return this[M.p(t)]()},v.add=function(n,c){var u,p=this;n=Number(n);var h=M.p(c),f=function(t){var e=C(p);return M.w(e.date(e.date()+Math.round(t*n)),p)};if(h===l)return this.set(l,this.$M+n);if(h===d)return this.set(d,this.$y+n);if(h===o)return f(1);if(h===a)return f(7);var m=(u={},u[s]=t,u[r]=e,u[i]=1e3,u)[h]||1,v=this.$d.getTime()+n*m;return M.w(v,this)},v.subtract=function(t,e){return this.add(-1*t,e)},v.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||p;var i=t||"YYYY-MM-DDTHH:mm:ssZ",s=M.z(this),r=this.$H,o=this.$m,a=this.$M,l=n.weekdays,c=n.months,d=function(t,n,s,r){return t&&(t[n]||t(e,i))||s[n].slice(0,r)},u=function(t){return M.s(r%12||12,t,"0")},h=n.meridiem||function(t,e,n){var i=t<12?"AM":"PM";return n?i.toLowerCase():i},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:M.s(a+1,2,"0"),MMM:d(n.monthsShort,a,c,3),MMMM:d(c,a),D:this.$D,DD:M.s(this.$D,2,"0"),d:String(this.$W),dd:d(n.weekdaysMin,this.$W,l,2),ddd:d(n.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(r),HH:M.s(r,2,"0"),h:u(1),hh:u(2),a:h(r,o,!0),A:h(r,o,!1),m:String(o),mm:M.s(o,2,"0"),s:String(this.$s),ss:M.s(this.$s,2,"0"),SSS:M.s(this.$ms,3,"0"),Z:s};return i.replace(f,(function(t,e){return e||m[t]||s.replace(":","")}))},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(n,u,p){var h,f=M.p(u),m=C(n),v=(m.utcOffset()-this.utcOffset())*t,_=this-m,y=M.m(this,m);return y=(h={},h[d]=y/12,h[l]=y,h[c]=y/3,h[a]=(_-v)/6048e5,h[o]=(_-v)/864e5,h[r]=_/e,h[s]=_/t,h[i]=_/1e3,h)[f]||_,p?y:M.a(y)},v.daysInMonth=function(){return this.endOf(l).$D},v.$locale=function(){return $[this.$L]},v.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),i=b(t,e,!0);return i&&(n.$L=i),n},v.clone=function(){return M.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},m}(),D=T.prototype;return C.prototype=D,[["$ms",n],["$s",i],["$m",s],["$H",r],["$W",o],["$M",l],["$y",d],["$D",u]].forEach((function(t){D[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),C.extend=function(t,e){return t.$i||(t(e,T,C),t.$i=!0),C},C.locale=b,C.isDayjs=g,C.unix=function(t){return C(1e3*t)},C.en=$[y],C.Ls=$,C.p={},C}()},646:function(t){t.exports=function(){"use strict";var t,e,n=1e3,i=6e4,s=36e5,r=864e5,o=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,a=31536e6,l=2592e6,c=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,d={years:a,months:l,days:r,hours:s,minutes:i,seconds:n,milliseconds:1,weeks:6048e5},u=function(t){return t instanceof y},p=function(t,e,n){return new y(t,n,e.$l)},h=function(t){return e.p(t)+"s"},f=function(t){return t<0},m=function(t){return f(t)?Math.ceil(t):Math.floor(t)},v=function(t){return Math.abs(t)},_=function(t,e){return t?f(t)?{negative:!0,format:""+v(t)+e}:{negative:!1,format:""+t+e}:{negative:!1,format:""}},y=function(){function f(t,e,n){var i=this;if(this.$d={},this.$l=n,void 0===t&&(this.$ms=0,this.parseFromMilliseconds()),e)return p(t*d[h(e)],this);if("number"==typeof t)return this.$ms=t,this.parseFromMilliseconds(),this;if("object"==typeof t)return Object.keys(t).forEach((function(e){i.$d[h(e)]=t[e]})),this.calMilliseconds(),this;if("string"==typeof t){var s=t.match(c);if(s){var r=s.slice(2).map((function(t){return null!=t?Number(t):0}));return this.$d.years=r[0],this.$d.months=r[1],this.$d.weeks=r[2],this.$d.days=r[3],this.$d.hours=r[4],this.$d.minutes=r[5],this.$d.seconds=r[6],this.calMilliseconds(),this}}return this}var v=f.prototype;return v.calMilliseconds=function(){var t=this;this.$ms=Object.keys(this.$d).reduce((function(e,n){return e+(t.$d[n]||0)*d[n]}),0)},v.parseFromMilliseconds=function(){var t=this.$ms;this.$d.years=m(t/a),t%=a,this.$d.months=m(t/l),t%=l,this.$d.days=m(t/r),t%=r,this.$d.hours=m(t/s),t%=s,this.$d.minutes=m(t/i),t%=i,this.$d.seconds=m(t/n),t%=n,this.$d.milliseconds=t},v.toISOString=function(){var t=_(this.$d.years,"Y"),e=_(this.$d.months,"M"),n=+this.$d.days||0;this.$d.weeks&&(n+=7*this.$d.weeks);var i=_(n,"D"),s=_(this.$d.hours,"H"),r=_(this.$d.minutes,"M"),o=this.$d.seconds||0;this.$d.milliseconds&&(o+=this.$d.milliseconds/1e3);var a=_(o,"S"),l=t.negative||e.negative||i.negative||s.negative||r.negative||a.negative,c=s.format||r.format||a.format?"T":"",d=(l?"-":"")+"P"+t.format+e.format+i.format+c+s.format+r.format+a.format;return"P"===d||"-P"===d?"P0D":d},v.toJSON=function(){return this.toISOString()},v.format=function(t){var n=t||"YYYY-MM-DDTHH:mm:ss",i={Y:this.$d.years,YY:e.s(this.$d.years,2,"0"),YYYY:e.s(this.$d.years,4,"0"),M:this.$d.months,MM:e.s(this.$d.months,2,"0"),D:this.$d.days,DD:e.s(this.$d.days,2,"0"),H:this.$d.hours,HH:e.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:e.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:e.s(this.$d.seconds,2,"0"),SSS:e.s(this.$d.milliseconds,3,"0")};return n.replace(o,(function(t,e){return e||String(i[t])}))},v.as=function(t){return this.$ms/d[h(t)]},v.get=function(t){var e=this.$ms,n=h(t);return"milliseconds"===n?e%=1e3:e="weeks"===n?m(e/d[n]):this.$d[n],0===e?0:e},v.add=function(t,e,n){var i;return i=e?t*d[h(e)]:u(t)?t.$ms:p(t,this).$ms,p(this.$ms+i*(n?-1:1),this)},v.subtract=function(t,e){return this.add(t,e,!0)},v.locale=function(t){var e=this.clone();return e.$l=t,e},v.clone=function(){return p(this.$ms,this)},v.humanize=function(e){return t().add(this.$ms,"ms").locale(this.$l).fromNow(!e)},v.milliseconds=function(){return this.get("milliseconds")},v.asMilliseconds=function(){return this.as("milliseconds")},v.seconds=function(){return this.get("seconds")},v.asSeconds=function(){return this.as("seconds")},v.minutes=function(){return this.get("minutes")},v.asMinutes=function(){return this.as("minutes")},v.hours=function(){return this.get("hours")},v.asHours=function(){return this.as("hours")},v.days=function(){return this.get("days")},v.asDays=function(){return this.as("days")},v.weeks=function(){return this.get("weeks")},v.asWeeks=function(){return this.as("weeks")},v.months=function(){return this.get("months")},v.asMonths=function(){return this.as("months")},v.years=function(){return this.get("years")},v.asYears=function(){return this.as("years")},f}();return function(n,i,s){t=s,e=s().$utils(),s.duration=function(t,e){var n=s.locale();return p(t,{$l:n},e)},s.isDuration=u;var r=i.prototype.add,o=i.prototype.subtract;i.prototype.add=function(t,e){return u(t)&&(t=t.asMilliseconds()),r.bind(this)(t,e)},i.prototype.subtract=function(t,e){return u(t)&&(t=t.asMilliseconds()),o.bind(this)(t,e)}}}()},212:function(t){t.exports=function(){"use strict";return function(t,e){e.prototype.isSameOrAfter=function(t,e){return this.isSame(t,e)||this.isAfter(t,e)}}}()},412:function(t){t.exports=function(){"use strict";return function(t,e){e.prototype.isSameOrBefore=function(t,e){return this.isSame(t,e)||this.isBefore(t,e)}}}()},379:t=>{"use strict";var e=[];function n(t){for(var n=-1,i=0;i<e.length;i++)if(e[i].identifier===t){n=i;break}return n}function i(t,i){for(var r={},o=[],a=0;a<t.length;a++){var l=t[a],c=i.base?l[0]+i.base:l[0],d=r[c]||0,u="".concat(c," ").concat(d);r[c]=d+1;var p=n(u),h={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)e[p].references++,e[p].updater(h);else{var f=s(h,i);i.byIndex=a,e.splice(a,0,{identifier:u,updater:f,references:1})}o.push(u)}return o}function s(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,s){var r=i(t=t||[],s=s||{});return function(t){t=t||[];for(var o=0;o<r.length;o++){var a=n(r[o]);e[a].references--}for(var l=i(t,s),c=0;c<r.length;c++){var d=n(r[c]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}r=l}}},569:t=>{"use strict";var e={};t.exports=function(t,n){var i=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}},216:t=>{"use strict";t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{"use strict";t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{"use strict";t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var i="";n.supports&&(i+="@supports (".concat(n.supports,") {")),n.media&&(i+="@media ".concat(n.media," {"));var s=void 0!==n.layer;s&&(i+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),i+=n.css,s&&(i+="}"),n.media&&(i+="}"),n.supports&&(i+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(i,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{"use strict";t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(i){var s=e[i];if(void 0!==s)return s.exports;var r=e[i]={id:i,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,(()=>{"use strict";let t=(t=21)=>crypto.getRandomValues(new Uint8Array(t)).reduce(((t,e)=>t+((e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e>62?"-":"_")),"");function e(t){return t[Math.floor(Math.random()*t.length)]}function i(){return Math.floor(100*Math.random())}const s=[{id:1,description:"Amsterdam, is a beautiful city, a true asian pearl, with crowded streets.",name:"Amsterdam",pictures:[{src:"https://loremflickr.com/248/152?random=1",description:"Amsterdam 01"},{src:"https://loremflickr.com/248/152?random=2",description:"Amsterdam 02"},{src:"https://loremflickr.com/248/152?random=3",description:"Amsterdam 03"}]},{id:2,description:"Chamonix, Lorem ipsum dolor sit amet, consectetur adipiscing elit.",name:"Chamonix",pictures:[{src:"https://loremflickr.com/248/152?random=4",description:"Chamonix 01"},{src:"https://loremflickr.com/248/152?random=5",description:"Chamonix 02"},{src:"https://loremflickr.com/248/152?random=6",description:"Chamonix 03"}]},{id:3,description:"Geneva, Cras aliquet varius magna, non porta ligula feugiat eget.",name:"Geneva",pictures:[{src:"https://loremflickr.com/248/152?random=7",description:"Geneva 01"},{src:"https://loremflickr.com/248/152?random=8",description:"Geneva 02"},{src:"https://loremflickr.com/248/152?random=9",description:"Geneva 03"}]},{id:4,description:"qqqq.",name:"qqqqqq",pictures:[{src:"https://loremflickr.com/248/152?random=4",description:"qqq 01"},{src:"https://loremflickr.com/248/152?random=5",description:"qqq 02"},{src:"https://loremflickr.com/248/152?random=6",description:"qqq 03"}]}],r=[{basePrice:i(),dateFrom:"2019-07-10T22:55:56.845Z",dateTo:"2019-07-11T11:22:13.375Z",destination:e(s).id,isFavorite:!1,offers:[1,2],type:"taxi"},{basePrice:i(),dateFrom:"2020-05-10T22:55:56.845Z",dateTo:"2020-06-11T11:22:13.375Z",destination:e(s).id,isFavorite:!0,offers:[2,4],type:"bus"},{basePrice:i(),dateFrom:"2020-03-01T10:00:00.845Z",dateTo:"2026-03-01T11:30:13.375Z",destination:e(s).id,isFavorite:!0,offers:[2,4],type:"bus"},{basePrice:i(),dateFrom:"2020-04-10T10:00:00.845Z",dateTo:"2020-04-11T10:00:13.375Z",destination:e(s).id,isFavorite:!1,offers:[3,4],type:"train"},{basePrice:i(),dateFrom:"2021-01-11T10:00:00.845Z",dateTo:"2021-01-13T10:00:13.375Z",destination:e(s).id,isFavorite:!1,offers:[3],type:"ship"},{basePrice:i(),dateFrom:"2026-01-11T10:00:00.845Z",dateTo:"2026-01-13T10:00:13.375Z",destination:e(s).id,isFavorite:!0,offers:[3,4,5],type:"drive"},{basePrice:i(),dateFrom:"2023-05-11T12:00:00.845Z",dateTo:"2023-05-11T12:30:13.375Z",destination:e(s).id,isFavorite:!0,offers:[1,4],type:"flight"},{basePrice:i(),dateFrom:"2023-06-11T12:00:00.845Z",dateTo:"2023-06-13T12:30:13.375Z",destination:e(s).id,isFavorite:!1,offers:[2],type:"check-in"},{basePrice:i(),dateFrom:"2022-09-11T12:00:00.845Z",dateTo:"2022-09-11T12:30:13.375Z",destination:e(s).id,isFavorite:!1,offers:[2,4],type:"sightseeing"},{basePrice:i(),dateFrom:"2022-07-05T12:00:00.845Z",dateTo:"2022-07-10T12:30:13.375Z",destination:e(s).id,isFavorite:!1,offers:[1,2],type:"restaurant"}];function o(){return{id:t(),...e(r)}}const a=[{type:"taxi",offers:[{id:1,title:"Upgrade to a business class",price:120},{id:2,title:"taxi 2",price:50},{id:3,title:"taxi 3",price:100}]},{type:"bus",offers:[{id:1,title:"Bus 1",price:120},{id:2,title:"Bus 2",price:50},{id:3,title:"Bus 3",price:100},{id:4,title:"Bus 4",price:200}]},{type:"train",offers:[{id:1,title:"Train 1",price:120},{id:2,title:"Train 2",price:50},{id:3,title:"Train 3",price:100},{id:4,title:"Train 4",price:200}]},{type:"ship",offers:[{id:1,title:"Ship 1",price:120},{id:2,title:"Ship 2",price:50},{id:3,title:"Ship 3",price:100}]},{type:"drive",offers:[{id:1,title:"Drive 1",price:120},{id:2,title:"Drive 2",price:50},{id:3,title:"Drive 3",price:100},{id:4,title:"Drive 4",price:200},{id:5,title:"Drive 5",price:300}]},{type:"flight",offers:[{id:1,title:"Flight 1",price:120},{id:2,title:"Flight 2",price:50},{id:3,title:"Flight 3",price:100},{id:4,title:"Flight 4",price:200}]},{type:"check-in",offers:[{id:1,title:"Check-in 1",price:120},{id:2,title:"Check-in 2",price:50},{id:3,title:"Check-in 3",price:100}]},{type:"sightseeing",offers:[{id:1,title:"Sightseeing 1",price:120},{id:2,title:"Sightseeing 2",price:50},{id:3,title:"Sightseeing 3",price:100},{id:4,title:"Sightseeing 4",price:200}]},{type:"restaurant",offers:[{id:1,title:"Restaurant 1",price:120},{id:2,title:"Restaurant 2",price:50},{id:3,title:"Restaurant 3",price:100},{id:4,title:"Restaurant 4",price:200}]}],l={BEFOREBEGIN:"beforebegin",AFTERBEGIN:"afterbegin",BEFOREEND:"beforeend",AFTEREND:"afterend"};function c(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:l.BEFOREEND;if(!(t instanceof w))throw new Error("Can render only components");if(null===e)throw new Error("Container element doesn't exist");e.insertAdjacentElement(n,t.element)}function d(t,e){if(!(t instanceof w&&e instanceof w))throw new Error("Can replace only components");const n=t.element,i=e.element,s=i.parentElement;if(null===s)throw new Error("Parent element doesn't exist");s.replaceChild(n,i)}function u(t){if(null!==t){if(!(t instanceof w))throw new Error("Can remove only components");t.element.remove(),t.removeElement()}}var p=n(379),h=n.n(p),f=n(795),m=n.n(f),v=n(569),_=n.n(v),y=n(565),$=n.n(y),g=n(216),b=n.n(g),C=n(589),M=n.n(C),T=n(10),D={};D.styleTagTransform=M(),D.setAttributes=$(),D.insert=_().bind(null,"head"),D.domAPI=m(),D.insertStyleElement=b(),h()(T.Z,D),T.Z&&T.Z.locals&&T.Z.locals;const E="shake";class w{#t=null;constructor(){if(new.target===w)throw new Error("Can't instantiate AbstractView, only concrete one.")}get element(){return this.#t||(this.#t=function(t){const e=document.createElement("div");return e.innerHTML=t,e.firstElementChild}(this.template)),this.#t}get template(){throw new Error("Abstract method not implemented: get template")}removeElement(){this.#t=null}shake(t){this.element.classList.add(E),setTimeout((()=>{this.element.classList.remove(E),t?.()}),600)}}class S extends w{get template(){return'<ul class="trip-events__list"></ul>'}}class k extends w{get template(){return'\n  <form class="trip-events__trip-sort trip-sort" action="#" method="get">\n    <div class="trip-sort__item  trip-sort__item--day">\n      <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-day" checked="">\n      <label class="trip-sort__btn" for="sort-day">Day</label>\n    </div>\n\n    <div class="trip-sort__item  trip-sort__item--event">\n      <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" disabled="">\n      <label class="trip-sort__btn" for="sort-event">Event</label>\n    </div>\n\n    <div class="trip-sort__item  trip-sort__item--time">\n      <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time">\n      <label class="trip-sort__btn" for="sort-time">Time</label>\n    </div>\n\n    <div class="trip-sort__item  trip-sort__item--price">\n      <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price">\n      <label class="trip-sort__btn" for="sort-price">Price</label>\n    </div>\n\n    <div class="trip-sort__item  trip-sort__item--offer">\n      <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-offer" disabled="">\n      <label class="trip-sort__btn" for="sort-offer">Offers</label>\n    </div>\n  </form>'}}class A extends w{get template(){return"\n  <p class=\"trip-events__msg\">Click New Event to create your first point</p>\n  \x3c!--\n    Значение отображаемого текста зависит от выбранного фильтра:\n    * Everthing – 'Click New Event to create your first point'\n    * Past — 'There are no past events now';\n    * Present — 'There are no present events now';\n    * Future — 'There are no future events now'.\n  --\x3e\n  "}}var F=n(484),O=n.n(F),x=n(646),P=n.n(x),H=n(412),L=n.n(H),Y=n(212),B=n.n(Y);O().extend(P()),O().extend(L()),O().extend(B());const I={DATE:"MMM DD",TIME:"HH:mm",HTML_ATTR:"YYYY-MM-DD",MONTH:"MMM",DAY:"D",EDIT_DATE:"DD/MM/YY"};function q(t,e){return e?O()(e).format(t):""}function Z(t){return q(I.TIME,t)}function N(t){return q(I.HTML_ATTR,t)}function R(t){return q(I.EDIT_DATE,t)}function j(t,e){return t?e.find((e=>e.type===t)).offers:e}function U(t,e){return t?e.find((e=>{let{id:n}=e;return n===t})):""}function W(t){return t.reduce(((t,e)=>t+e.basePrice),0)}function G(t,e){const n=new Set;return t.map((t=>{let{destination:i}=t;return n.add(U(i,e).name)})),Array.from(n.keys())}const z={basePrice:"",dateFrom:"",dateTo:"",destination:"",offers:[],type:""};class J extends w{#e=null;#n=null;#i=null;#s=null;#r=null;#o=null;constructor(t){let{point:e=z,allOffers:n,destinationsList:i,destination:s,onFormSubmit:r,onCancelClick:o}=t;super(),this.#e=e,this.#n=n,this.#i=i,this.#o=s,this.#s=r,this.#r=o,this.element.querySelector("form").addEventListener("submit",this.#a),this.element.querySelector(".event__rollup-btn").addEventListener("click",this.#l)}get template(){return function(t,e,n,i){const{basePrice:s,dateFrom:r,dateTo:o,offers:a,type:l}=t,{name:c,description:d,pictures:u}=i,p=(h=e)?h.map(((t,e)=>{let{type:n}=t;return`\n        <div class="event__type-item">\n          <input id="event-type-${n}-${e}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${n}">\n          <label class="event__type-label  event__type-label--${n}" for="event-type-${n}-${e}">${i=n,i[0].toUpperCase()+i.slice(1)}</label>\n        </div>\n     `;var i})).join(""):"";var h;const f=function(t){return t?t.map((t=>`\n        <option value="${t}"></option>\n      `)).join(""):""}(n),m=function(t,e,n){const i=j(t,e);let s="";return i.reduce(((t,e)=>{const i=n.includes(e.id);s+=`\n      <div class="event__offer-selector">\n        <input class="event__offer-checkbox  visually-hidden" id="event-offer-${e.id}-1" type="checkbox" name="event-offer-${e.id}" ${i?"checked":""}>\n        <label class="event__offer-label" for="event-offer-${e.id}-1">\n          <span class="event__offer-title">${e.title}</span>\n          +€&nbsp;\n          <span class="event__offer-price">${e.price}</span>\n        </label>\n      </div>\n    `}),0),s}(l,e,a),v=function(t,e){return null!=t?`\n      <section class="event__section  event__section--destination">\n        <h3 class="event__section-title  event__section-title--destination">Destination</h3>\n        <p class="event__destination-description">\n          ${t}\n        </p>\n\n          ${e.length>0?`\n      <div class="event__photos-container">\n        <div class="event__photos-tape">\n          ${e.map((t=>{let{src:e,description:n}=t;return`\n            <img class="event__photo" src="${e}" alt="${n}">\n          `}))}\n        </div>\n      </div>\n      `:""}\n      </section>\n    `:""}(d,u);return`\n  <li class="trip-events__item">\n  <form class="event event--edit" action="#" method="post">\n    <header class="event__header">\n      <div class="event__type-wrapper">\n        <label class="event__type  event__type-btn" for="event-type-toggle-1">\n          <span class="visually-hidden">Choose event type</span>\n          <img class="event__type-icon" src="img/icons/${l}.png" alt="Event type icon" width="17" height="17">\n        </label>\n        <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">\n\n        <div class="event__type-list">\n          <fieldset class="event__type-group">\n            <legend class="visually-hidden">Event type</legend>\n              ${p}\n          </fieldset>\n        </div>\n      </div>\n\n      <div class="event__field-group  event__field-group--destination">\n        <label class="event__label  event__type-output" for="event-destination-1">\n          ${l}\n        </label>\n        <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${c}" list="destination-list-1">\n        <datalist id="destination-list-1">\n          ${f}\n        </datalist>\n      </div>\n\n      <div class="event__field-group  event__field-group--time">\n        <label class="visually-hidden" for="event-start-time-1">From</label>\n        <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${R(r)} ${Z(r)}">\n        —\n        <label class="visually-hidden" for="event-end-time-1">To</label>\n        <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${R(o)} ${Z(o)}">\n      </div>\n\n      <div class="event__field-group  event__field-group--price">\n        <label class="event__label" for="event-price-1">\n          <span class="visually-hidden">Price</span>\n          €\n        </label>\n        <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${s}">\n      </div>\n\n      <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n      <button class="event__reset-btn" type="reset">Delete</button>\n      <button class="event__rollup-btn" type="button">\n        <span class="visually-hidden">Open event</span>\n      </button>\n    </header>\n    <section class="event__details">\n      <section class="event__section  event__section--offers">\n        <h3 class="event__section-title  event__section-title--offers">Offers</h3>\n\n        <div class="event__available-offers">\n          ${m}\n        </div>\n      </section>\n\n      ${v}\n    </section>\n  </form>\n</li>\n  `}(this.#e,this.#n,this.#i,this.#o)}#a=t=>{t.preventDefault(),this.#s(this.#e)};#l=t=>{t.preventDefault(),this.#r()}}class V extends w{#e=null;#c=null;#o=null;#d=null;#u=null;constructor(t){let{point:e,currentOffers:n,destination:i,onEditClick:s,onFavoriteClick:r}=t;super(),this.#e=e,this.#c=n,this.#o=i,this.#d=s,this.#u=r,this.element.querySelector(".event__rollup-btn").addEventListener("click",this.#p),this.element.querySelector(".event__favorite-btn").addEventListener("click",this.#h)}get template(){return function(t,e,n){const{basePrice:i,dateFrom:s,dateTo:r,isFavorite:o,type:a}=t,l=(c=e)?c.map((t=>`<li class="event__offer">\n        <span class="event__offer-title">${t.title}</span>\n          &plus;&euro;&nbsp;\n        <span class="event__offer-price">${t.price}</span>\n      </li>`)).join(""):"";var c,d;return`<li class="trip-events__item">\n  <div class="event">\n    <time class="event__date" datetime="${N(s)}">\n      ${d=s,q(I.DATE,d)}\n    </time>\n    <div class="event__type">\n      <img class="event__type-icon" width="42" height="42" src="img/icons/${a}.png" alt="Event type icon">\n    </div>\n    <h3 class="event__title">${a} ${n.name}</h3>\n    <div class="event__schedule">\n      <p class="event__time">\n        <time\n          class="event__start-time"\n          datetime="${N(s)}T${Z(s)}">\n            ${Z(s)}\n        </time>\n        &mdash;\n        <time class="event__end-time" datetime="${N(r)}T${Z(r)}">\n          ${Z(r)}\n        </time>\n      </p>\n      <p class="event__duration">${function(t,e){const n=O()(t),i=O()(e),s=O().duration(i.diff(n)).$d;return(s.days?`${s.days}D `:"")+(s.hours?`${s.hours}H `:"00H")+(s.minutes?`${s.minutes}M`:"00M")}(s,r)}</p>\n    </div>\n    <p class="event__price">\n      &euro;&nbsp;<span class="event__price-value">${i}</span>\n    </p>\n    <h4 class="visually-hidden">Offers:</h4>\n    <ul class="event__selected-offers">\n      ${l}\n    </ul>\n    <button class="event__favorite-btn event__favorite-btn--${o?"active":""}" type="button">\n      <span class="visually-hidden">Add to favorite</span>\n      <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">\n        <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>\n      </svg>\n    </button>\n    <button class="event__rollup-btn" type="button">\n      <span class="visually-hidden">Open event</span>\n    </button>\n  </div>\n</li>`}(this.#e,this.#c,this.#o)}#p=t=>{t.preventDefault(),this.#d()};#h=t=>{t.preventDefault(),this.#u()}}const X="DEFAULT",K="EDITING";class Q{#f=null;#m=null;#v=null;#_=null;#n=null;#y=null;#$=null;#e=null;#g=X;constructor(t){let{pointListContainer:e,allDestinations:n,allOffers:i,onDataChange:s,onModeChange:r}=t;this.#f=e,this.#_=n,this.#n=i,this.#y=s,this.#$=r}init(t){this.#e=t;const e=function(t){return t.map((t=>{let{name:e}=t;return e}))}(this.#_),n=U(this.#e.destination,this.#_),i=function(t,e,n){return j(t,n).filter((t=>e.includes(t.id)))}(this.#e.type,this.#e.offers,this.#n),s=this.#m,r=this.#v;this.#m=new V({point:this.#e,currentOffers:i,destination:n,onEditClick:this.#d,onFavoriteClick:this.#u}),this.#v=new J({point:this.#e,allOffers:this.#n,destinationsList:e,destination:n,onFormSubmit:this.#s,onCancelClick:this.#r}),null!==s&&null!==r?(this.#g===X&&d(this.#m,s),this.#g===K&&d(this.#v,r),u(s),u(r)):c(this.#m,this.#f)}destroy(){u(this.#m),u(this.#v)}resetView(){this.#g!==X&&this.#b()}#C(){d(this.#v,this.#m),document.addEventListener("keydown",this.#M),this.#$(),this.#g=K}#b(){d(this.#m,this.#v),document.removeEventListener("keydown",this.#M),this.#g=X}#M=t=>{"Escape"===t.key&&(t.preventDefault(),this.#b(),document.removeEventListener("keydown",this.#M))};#d=()=>{this.#C()};#s=t=>{this.#y(t),this.#b()};#r=()=>{this.#b()};#u=()=>{this.#y({...this.#e,isFavorite:!this.#e.isFavorite})}}class tt extends w{#T=null;constructor(t){let{filters:e}=t;super(),this.#T=e}get template(){return function(t){const e=t.map(((t,e)=>function(t,e){const{type:n,count:i}=t;return`\n    <div class="trip-filters__filter">\n      <input\n        id="filter-${n}"\n        class="trip-filters__filter-input  visually-hidden"\n        type="radio"\n        name="trip-filter"\n        value="${n}"\n        ${0===i?"disabled":""}\n        ${e?"checked":""}\n      >\n      <label class="trip-filters__filter-label" for="filter-${n}">${n}</label>\n    </div>\n  `}(t,0===e))).join("");return`\n    <form class="trip-filters" action="#" method="get">\n      ${e}\n\n      <button class="visually-hidden" type="submit">Accept filter</button>\n    </form>\n`}(this.#T)}}class et extends w{#D=[];#E=null;constructor(t){let{points:e,tripInfo:n}=t;super(),this.#D=e,this.#E=n}get template(){return function(t,e){const{price:n,destinations:i}=e,s=function(t){return t.length<=3?t.map(((t,e)=>0===e?t:` &mdash; ${t}`)).join(""):`${t[0]} &mdash; &#8230; &mdash; ${t[t.length-1]}`}(i),r=function(t){const{monthStart:e,dayStart:n,monthEnd:i,dayEnd:s}=t;return e===i?`${e} ${n}&nbsp;&mdash;&nbsp;${s}`:`${n} ${e}&nbsp;&mdash;&nbsp;${s} ${i}`}(e);return`\n  <section class="trip-main__trip-info  trip-info">\n    <div class="trip-info__main">\n      <h1 class="trip-info__title">${s}</h1>\n      <p class="trip-info__dates">${r}</p>\n    </div>\n    <p class="trip-info__cost">\n      Total: &euro;&nbsp;<span class="trip-info__cost-value">${n}</span>\n    </p>\n  </section>`}(this.#D,this.#E)}}const nt={everything:t=>t.filter((t=>t)),future:t=>t.filter((t=>{return e=t.dateFrom,O()(e).isAfter(O()());var e})),present:t=>t.filter((t=>function(t,e){const n=O()(t).isSameOrBefore(O()()),i=O()(e).isSameOrAfter(O()());return n&&!0===i}(t.dateFrom,t.dateTo))),past:t=>t.filter((t=>{return e=t.dateTo,O()(e).isBefore(O()());var e}))},it=document.querySelector(".page-body"),st=it.querySelector(".trip-main"),rt=it.querySelector(".trip-controls__filters"),ot=it.querySelector(".trip-events"),at=new class{#D=Array.from({length:10},o);#w=a;#S=s;get points(){return this.#D}get offers(){return this.#w}get destinations(){return this.#S}},lt=new class{#k=null;#A=null;#D=[];#F=[];constructor(t){let{tripContainer:e,pointsModel:n}=t;this.#k=e,this.#A=n}init(){this.#D=[...this.#A.points],this.#F=[...this.#A.destinations],this.#O()}#O(){if(0===this.#D.length)return;const t=this.#D,e={price:W(t),destinations:G(t,this.#F),monthStart:q(I.MONTH,t[0].dateFrom),dayStart:q(I.DAY,t[0].dateFrom),monthEnd:q(I.MONTH,t[t.length-1].dateTo),dayEnd:q(I.DAY,t[t.length-1].dateTo)};c(new et({points:t,tripInfo:e}),this.#k,l.AFTERBEGIN)}}({tripContainer:st,pointsModel:at}),ct=function(t){return Object.entries(nt).map((e=>{let[n,i]=e;return{type:n,count:i(t).length}}))}(at.points),dt=new class{#x=null;#T=null;constructor(t){let{filterContainer:e,filters:n}=t;this.#x=e,this.#T=n}init(){c(new tt({filters:this.#T}),this.#x)}}({filterContainer:rt,filters:ct}),ut=new class{#P=null;#A=null;#H=new S;#L=new A;#Y=new k;#B=[];#I=null;#F=null;#q=new Map;constructor(t){let{listContainer:e,pointsModel:n}=t;this.#P=e,this.#A=n}init(){this.#B=[...this.#A.points],this.#I=[...this.#A.offers],this.#F=[...this.#A.destinations],this.#Z()}#N=t=>{var e,n;this.#B=(e=this.#B,n=t,e.map((t=>t.id===n.id?n:t))),this.#q.get(t.id).init(t)};#$=()=>{this.#q.forEach((t=>t.resetView()))};#R(t){const e=new Q({pointListContainer:this.#H.element,allDestinations:this.#F,allOffers:this.#I,onDataChange:this.#N,onModeChange:this.#$});e.init(t),this.#q.set(t.id,e)}#j(){c(this.#L,this.#P,l.AFTERBEGIN)}#U(){c(this.#Y,this.#P,l.AFTERBEGIN)}#W(t){t.forEach((t=>this.#R(t)))}#G(){this.#q.forEach((t=>t.destroy())),this.#q.clear()}#z(){c(this.#H,this.#P,l.BEFOREEND)}#Z(){this.#B.length?(this.#U(),this.#z(),this.#W(this.#B)):this.#j()}}({listContainer:ot,pointsModel:at});lt.init(),dt.init(),ut.init()})()})();
//# sourceMappingURL=bundle.ecd8e80195dff999b2f9.js.map