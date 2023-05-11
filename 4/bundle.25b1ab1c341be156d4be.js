(()=>{var t={484:function(t){t.exports=function(){"use strict";var t=6e4,e=36e5,i="millisecond",n="second",s="minute",r="hour",a="day",o="week",l="month",c="quarter",d="year",u="date",f="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,h=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,v={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],i=t%100;return"["+t+(e[(i-20)%10]||e[i]||e[0])+"]"}},m=function(t,e,i){var n=String(t);return!n||n.length>=e?t:""+Array(e+1-n.length).join(i)+t},_={s:m,z:function(t){var e=-t.utcOffset(),i=Math.abs(e),n=Math.floor(i/60),s=i%60;return(e<=0?"+":"-")+m(n,2,"0")+":"+m(s,2,"0")},m:function t(e,i){if(e.date()<i.date())return-t(i,e);var n=12*(i.year()-e.year())+(i.month()-e.month()),s=e.clone().add(n,l),r=i-s<0,a=e.clone().add(n+(r?-1:1),l);return+(-(n+(i-s)/(r?s-a:a-s))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:l,y:d,w:o,d:a,D:u,h:r,m:s,s:n,ms:i,Q:c}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},$="en",y={};y[$]=v;var g=function(t){return t instanceof T},b=function t(e,i,n){var s;if(!e)return $;if("string"==typeof e){var r=e.toLowerCase();y[r]&&(s=r),i&&(y[r]=i,s=r);var a=e.split("-");if(!s&&a.length>1)return t(a[0])}else{var o=e.name;y[o]=e,s=o}return!n&&s&&($=s),s||!n&&$},M=function(t,e){if(g(t))return t.clone();var i="object"==typeof e?e:{};return i.date=t,i.args=arguments,new T(i)},D=_;D.l=b,D.i=g,D.w=function(t,e){return M(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var T=function(){function v(t){this.$L=b(t.locale,null,!0),this.parse(t)}var m=v.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,i=t.utc;if(null===e)return new Date(NaN);if(D.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var n=e.match(p);if(n){var s=n[2]-1||0,r=(n[7]||"0").substring(0,3);return i?new Date(Date.UTC(n[1],s,n[3]||1,n[4]||0,n[5]||0,n[6]||0,r)):new Date(n[1],s,n[3]||1,n[4]||0,n[5]||0,n[6]||0,r)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return D},m.isValid=function(){return!(this.$d.toString()===f)},m.isSame=function(t,e){var i=M(t);return this.startOf(e)<=i&&i<=this.endOf(e)},m.isAfter=function(t,e){return M(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<M(t)},m.$g=function(t,e,i){return D.u(t)?this[e]:this.set(i,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var i=this,c=!!D.u(e)||e,f=D.p(t),p=function(t,e){var n=D.w(i.$u?Date.UTC(i.$y,e,t):new Date(i.$y,e,t),i);return c?n:n.endOf(a)},h=function(t,e){return D.w(i.toDate()[t].apply(i.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(e)),i)},v=this.$W,m=this.$M,_=this.$D,$="set"+(this.$u?"UTC":"");switch(f){case d:return c?p(1,0):p(31,11);case l:return c?p(1,m):p(0,m+1);case o:var y=this.$locale().weekStart||0,g=(v<y?v+7:v)-y;return p(c?_-g:_+(6-g),m);case a:case u:return h($+"Hours",0);case r:return h($+"Minutes",1);case s:return h($+"Seconds",2);case n:return h($+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var o,c=D.p(t),f="set"+(this.$u?"UTC":""),p=(o={},o[a]=f+"Date",o[u]=f+"Date",o[l]=f+"Month",o[d]=f+"FullYear",o[r]=f+"Hours",o[s]=f+"Minutes",o[n]=f+"Seconds",o[i]=f+"Milliseconds",o)[c],h=c===a?this.$D+(e-this.$W):e;if(c===l||c===d){var v=this.clone().set(u,1);v.$d[p](h),v.init(),this.$d=v.set(u,Math.min(this.$D,v.daysInMonth())).$d}else p&&this.$d[p](h);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[D.p(t)]()},m.add=function(i,c){var u,f=this;i=Number(i);var p=D.p(c),h=function(t){var e=M(f);return D.w(e.date(e.date()+Math.round(t*i)),f)};if(p===l)return this.set(l,this.$M+i);if(p===d)return this.set(d,this.$y+i);if(p===a)return h(1);if(p===o)return h(7);var v=(u={},u[s]=t,u[r]=e,u[n]=1e3,u)[p]||1,m=this.$d.getTime()+i*v;return D.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,i=this.$locale();if(!this.isValid())return i.invalidDate||f;var n=t||"YYYY-MM-DDTHH:mm:ssZ",s=D.z(this),r=this.$H,a=this.$m,o=this.$M,l=i.weekdays,c=i.months,d=function(t,i,s,r){return t&&(t[i]||t(e,n))||s[i].slice(0,r)},u=function(t){return D.s(r%12||12,t,"0")},p=i.meridiem||function(t,e,i){var n=t<12?"AM":"PM";return i?n.toLowerCase():n},v={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:D.s(o+1,2,"0"),MMM:d(i.monthsShort,o,c,3),MMMM:d(c,o),D:this.$D,DD:D.s(this.$D,2,"0"),d:String(this.$W),dd:d(i.weekdaysMin,this.$W,l,2),ddd:d(i.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(r),HH:D.s(r,2,"0"),h:u(1),hh:u(2),a:p(r,a,!0),A:p(r,a,!1),m:String(a),mm:D.s(a,2,"0"),s:String(this.$s),ss:D.s(this.$s,2,"0"),SSS:D.s(this.$ms,3,"0"),Z:s};return n.replace(h,(function(t,e){return e||v[t]||s.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(i,u,f){var p,h=D.p(u),v=M(i),m=(v.utcOffset()-this.utcOffset())*t,_=this-v,$=D.m(this,v);return $=(p={},p[d]=$/12,p[l]=$,p[c]=$/3,p[o]=(_-m)/6048e5,p[a]=(_-m)/864e5,p[r]=_/e,p[s]=_/t,p[n]=_/1e3,p)[h]||_,f?$:D.a($)},m.daysInMonth=function(){return this.endOf(l).$D},m.$locale=function(){return y[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var i=this.clone(),n=b(t,e,!0);return n&&(i.$L=n),i},m.clone=function(){return D.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},v}(),S=T.prototype;return M.prototype=S,[["$ms",i],["$s",n],["$m",s],["$H",r],["$W",a],["$M",l],["$y",d],["$D",u]].forEach((function(t){S[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),M.extend=function(t,e){return t.$i||(t(e,T,M),t.$i=!0),M},M.locale=b,M.isDayjs=g,M.unix=function(t){return M(1e3*t)},M.en=y[$],M.Ls=y,M.p={},M}()},646:function(t){t.exports=function(){"use strict";var t,e,i=1e3,n=6e4,s=36e5,r=864e5,a=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,o=31536e6,l=2592e6,c=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,d={years:o,months:l,days:r,hours:s,minutes:n,seconds:i,milliseconds:1,weeks:6048e5},u=function(t){return t instanceof $},f=function(t,e,i){return new $(t,i,e.$l)},p=function(t){return e.p(t)+"s"},h=function(t){return t<0},v=function(t){return h(t)?Math.ceil(t):Math.floor(t)},m=function(t){return Math.abs(t)},_=function(t,e){return t?h(t)?{negative:!0,format:""+m(t)+e}:{negative:!1,format:""+t+e}:{negative:!1,format:""}},$=function(){function h(t,e,i){var n=this;if(this.$d={},this.$l=i,void 0===t&&(this.$ms=0,this.parseFromMilliseconds()),e)return f(t*d[p(e)],this);if("number"==typeof t)return this.$ms=t,this.parseFromMilliseconds(),this;if("object"==typeof t)return Object.keys(t).forEach((function(e){n.$d[p(e)]=t[e]})),this.calMilliseconds(),this;if("string"==typeof t){var s=t.match(c);if(s){var r=s.slice(2).map((function(t){return null!=t?Number(t):0}));return this.$d.years=r[0],this.$d.months=r[1],this.$d.weeks=r[2],this.$d.days=r[3],this.$d.hours=r[4],this.$d.minutes=r[5],this.$d.seconds=r[6],this.calMilliseconds(),this}}return this}var m=h.prototype;return m.calMilliseconds=function(){var t=this;this.$ms=Object.keys(this.$d).reduce((function(e,i){return e+(t.$d[i]||0)*d[i]}),0)},m.parseFromMilliseconds=function(){var t=this.$ms;this.$d.years=v(t/o),t%=o,this.$d.months=v(t/l),t%=l,this.$d.days=v(t/r),t%=r,this.$d.hours=v(t/s),t%=s,this.$d.minutes=v(t/n),t%=n,this.$d.seconds=v(t/i),t%=i,this.$d.milliseconds=t},m.toISOString=function(){var t=_(this.$d.years,"Y"),e=_(this.$d.months,"M"),i=+this.$d.days||0;this.$d.weeks&&(i+=7*this.$d.weeks);var n=_(i,"D"),s=_(this.$d.hours,"H"),r=_(this.$d.minutes,"M"),a=this.$d.seconds||0;this.$d.milliseconds&&(a+=this.$d.milliseconds/1e3);var o=_(a,"S"),l=t.negative||e.negative||n.negative||s.negative||r.negative||o.negative,c=s.format||r.format||o.format?"T":"",d=(l?"-":"")+"P"+t.format+e.format+n.format+c+s.format+r.format+o.format;return"P"===d||"-P"===d?"P0D":d},m.toJSON=function(){return this.toISOString()},m.format=function(t){var i=t||"YYYY-MM-DDTHH:mm:ss",n={Y:this.$d.years,YY:e.s(this.$d.years,2,"0"),YYYY:e.s(this.$d.years,4,"0"),M:this.$d.months,MM:e.s(this.$d.months,2,"0"),D:this.$d.days,DD:e.s(this.$d.days,2,"0"),H:this.$d.hours,HH:e.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:e.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:e.s(this.$d.seconds,2,"0"),SSS:e.s(this.$d.milliseconds,3,"0")};return i.replace(a,(function(t,e){return e||String(n[t])}))},m.as=function(t){return this.$ms/d[p(t)]},m.get=function(t){var e=this.$ms,i=p(t);return"milliseconds"===i?e%=1e3:e="weeks"===i?v(e/d[i]):this.$d[i],0===e?0:e},m.add=function(t,e,i){var n;return n=e?t*d[p(e)]:u(t)?t.$ms:f(t,this).$ms,f(this.$ms+n*(i?-1:1),this)},m.subtract=function(t,e){return this.add(t,e,!0)},m.locale=function(t){var e=this.clone();return e.$l=t,e},m.clone=function(){return f(this.$ms,this)},m.humanize=function(e){return t().add(this.$ms,"ms").locale(this.$l).fromNow(!e)},m.milliseconds=function(){return this.get("milliseconds")},m.asMilliseconds=function(){return this.as("milliseconds")},m.seconds=function(){return this.get("seconds")},m.asSeconds=function(){return this.as("seconds")},m.minutes=function(){return this.get("minutes")},m.asMinutes=function(){return this.as("minutes")},m.hours=function(){return this.get("hours")},m.asHours=function(){return this.as("hours")},m.days=function(){return this.get("days")},m.asDays=function(){return this.as("days")},m.weeks=function(){return this.get("weeks")},m.asWeeks=function(){return this.as("weeks")},m.months=function(){return this.get("months")},m.asMonths=function(){return this.as("months")},m.years=function(){return this.get("years")},m.asYears=function(){return this.as("years")},h}();return function(i,n,s){t=s,e=s().$utils(),s.duration=function(t,e){var i=s.locale();return f(t,{$l:i},e)},s.isDuration=u;var r=n.prototype.add,a=n.prototype.subtract;n.prototype.add=function(t,e){return u(t)&&(t=t.asMilliseconds()),r.bind(this)(t,e)},n.prototype.subtract=function(t,e){return u(t)&&(t=t.asMilliseconds()),a.bind(this)(t,e)}}}()}},e={};function i(n){var s=e[n];if(void 0!==s)return s.exports;var r=e[n]={exports:{}};return t[n].call(r.exports,r,r.exports,i),r.exports}i.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return i.d(e,{a:e}),e},i.d=(t,e)=>{for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";const t={BEFOREBEGIN:"beforebegin",AFTERBEGIN:"afterbegin",BEFOREEND:"beforeend",AFTEREND:"afterend"};function e(e,i){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t.BEFOREEND;i.insertAdjacentElement(n,e.getElement())}class n{getTemplate(){return"<></>"}getElement(){return this.element||(this.element=function(t){const e=document.createElement("div");return e.innerHTML=t,e.firstElementChild}(this.getTemplate())),this.element}removeElement(){this.element=null}}class s extends n{getTemplate(){return'<ul class="trip-events__list"></ul>'}}class r extends n{getTemplate(){return'\n  <form class="trip-events__trip-sort trip-sort" action="#" method="get">\n    <div class="trip-sort__item  trip-sort__item--day">\n      <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-day" checked="">\n      <label class="trip-sort__btn" for="sort-day">Day</label>\n    </div>\n\n    <div class="trip-sort__item  trip-sort__item--event">\n      <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" disabled="">\n      <label class="trip-sort__btn" for="sort-event">Event</label>\n    </div>\n\n    <div class="trip-sort__item  trip-sort__item--time">\n      <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time">\n      <label class="trip-sort__btn" for="sort-time">Time</label>\n    </div>\n\n    <div class="trip-sort__item  trip-sort__item--price">\n      <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price">\n      <label class="trip-sort__btn" for="sort-price">Price</label>\n    </div>\n\n    <div class="trip-sort__item  trip-sort__item--offer">\n      <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-offer" disabled="">\n      <label class="trip-sort__btn" for="sort-offer">Offers</label>\n    </div>\n  </form>'}}var a=i(484),o=i.n(a),l=i(646),c=i.n(l);o().extend(c());const d={DATE:"MMM DD",TIME:"HH:mm",HTML_ATTR:"YYYY-MM-DD",MONTH:"MMM",DAY:"D",EDIT_DATE:"DD/MM/YY"};function u(t){return t[Math.floor(Math.random()*t.length)]}function f(){return Math.floor(100*Math.random())}function p(t,e){return e?o()(e).format(t):""}function h(t){return p(d.TIME,t)}function v(t){return p(d.HTML_ATTR,t)}function m(t){return p(d.EDIT_DATE,t)}function _(t,e){return t?e.find((e=>e.type===t)).offers:e}function $(t,e){return t?e.find((e=>{let{id:i}=e;return i===t})):""}const y={basePrice:"",dateFrom:"",dateTo:"",destination:"",offers:[],type:""};class g extends n{constructor(t){let{point:e=y,allOffers:i,allDestinations:n}=t;super(),this.point=e,this.allOffers=i,this.allDestinations=n}getTemplate(){return function(t,e,i){const{basePrice:n,dateFrom:s,dateTo:r,destination:a,offers:o,type:l}=t,c=(d=e)?d.map(((t,e)=>{let{type:i}=t;return`\n        <div class="event__type-item">\n          <input id="event-type-${i}-${e}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${i}">\n          <label class="event__type-label  event__type-label--${i}" for="event-type-${i}-${e}">${n=i,n[0].toUpperCase()+n.slice(1)}</label>\n        </div>\n     `;var n})).join(""):"";var d;const u=function(t){if(t){const e=function(t){return t.map((t=>{let{name:e}=t;return e}))}(t);return e.map((t=>`\n        <option value="${t}"></option>\n      `)).join("")}return""}(i),f=function(t,e,i){const n=_(t,e);let s="";return n.reduce(((t,e)=>{const n=i.includes(e.id);s+=`\n      <div class="event__offer-selector">\n        <input class="event__offer-checkbox  visually-hidden" id="event-offer-${e.id}-1" type="checkbox" name="event-offer-${e.id}" ${n?"checked":""}>\n        <label class="event__offer-label" for="event-offer-${e.id}-1">\n          <span class="event__offer-title">${e.title}</span>\n          +€&nbsp;\n          <span class="event__offer-price">${e.price}</span>\n        </label>\n      </div>\n    `}),0),s}(l,e,o),p=$(a,i),v=function(t){return null!==t.description&&void 0!==t.description?`\n      <section class="event__section  event__section--destination">\n        <h3 class="event__section-title  event__section-title--destination">Destination</h3>\n        <p class="event__destination-description">\n          ${t.description}\n        </p>\n\n          ${t.pictures.length>0?`\n      <div class="event__photos-container">\n        <div class="event__photos-tape">\n          ${t.pictures.map((t=>{let{src:e,description:i}=t;return`\n            <img class="event__photo" src="${e}" alt="${i}">\n          `}))}\n        </div>\n      </div>\n      `:""}\n      </section>\n    `:""}(p);return`\n  <li class="trip-events__item">\n  <form class="event event--edit" action="#" method="post">\n    <header class="event__header">\n      <div class="event__type-wrapper">\n        <label class="event__type  event__type-btn" for="event-type-toggle-1">\n          <span class="visually-hidden">Choose event type</span>\n          <img class="event__type-icon" src="img/icons/${l}.png" alt="Event type icon" width="17" height="17">\n        </label>\n        <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">\n\n        <div class="event__type-list">\n          <fieldset class="event__type-group">\n            <legend class="visually-hidden">Event type</legend>\n              ${c}\n          </fieldset>\n        </div>\n      </div>\n\n      <div class="event__field-group  event__field-group--destination">\n        <label class="event__label  event__type-output" for="event-destination-1">\n          ${l}\n        </label>\n        <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${p.name}" list="destination-list-1">\n        <datalist id="destination-list-1">\n          ${u}\n        </datalist>\n      </div>\n\n      <div class="event__field-group  event__field-group--time">\n        <label class="visually-hidden" for="event-start-time-1">From</label>\n        <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${m(s)} ${h(s)}">\n        —\n        <label class="visually-hidden" for="event-end-time-1">To</label>\n        <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${m(r)} ${h(r)}">\n      </div>\n\n      <div class="event__field-group  event__field-group--price">\n        <label class="event__label" for="event-price-1">\n          <span class="visually-hidden">Price</span>\n          €\n        </label>\n        <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${n}">\n      </div>\n\n      <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n      <button class="event__reset-btn" type="reset">Cancel</button>\n    </header>\n    <section class="event__details">\n      <section class="event__section  event__section--offers">\n        <h3 class="event__section-title  event__section-title--offers">Offers</h3>\n\n        <div class="event__available-offers">\n          ${f}\n        </div>\n      </section>\n\n      ${v}\n    </section>\n  </form>\n</li>\n  `}(this.point,this.allOffers,this.allDestinations)}}function b(t,e,i){const{basePrice:n,dateFrom:s,dateTo:r,destination:a,isFavorite:l,offers:c,type:u}=t,f=function(t,e,i){if(e){const n=function(t,e,i){return _(t,i).filter((t=>e.includes(t.id)))}(t,e,i);return n.map((t=>`<li class="event__offer">\n        <span class="event__offer-title">${t.title}</span>\n          &plus;&euro;&nbsp;\n        <span class="event__offer-price">${t.price}</span>\n      </li>`)).join("")}return""}(u,c,e);return`<li class="trip-events__item">\n  <div class="event">\n    <time class="event__date" datetime="${v(s)}">\n      ${m=s,p(d.DATE,m)}\n    </time>\n    <div class="event__type">\n      <img class="event__type-icon" width="42" height="42" src="img/icons/${u}.png" alt="Event type icon">\n    </div>\n    <h3 class="event__title">${u} ${$(a,i).name}</h3>\n    <div class="event__schedule">\n      <p class="event__time">\n        <time\n          class="event__start-time"\n          datetime="${v(s)}T${h(s)}">\n            ${h(s)}\n        </time>\n        &mdash;\n        <time class="event__end-time" datetime="${v(r)}T${h(r)}">\n          ${h(r)}\n        </time>\n      </p>\n      <p class="event__duration">${function(t,e){const i=o()(t),n=o()(e),s=o().duration(n.diff(i)).$d;return(s.days?`${s.days}D `:"")+(s.hours?`${s.hours}H `:"")+(s.minutes?`${s.minutes}M`:"")}(s,r)}</p>\n    </div>\n    <p class="event__price">\n      &euro;&nbsp;<span class="event__price-value">${n}</span>\n    </p>\n    <h4 class="visually-hidden">Offers:</h4>\n    <ul class="event__selected-offers">\n      ${f}\n    </ul>\n    <button class="event__favorite-btn event__favorite-btn--${l?"active":""}" type="button">\n      <span class="visually-hidden">Add to favorite</span>\n      <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">\n        <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>\n      </svg>\n    </button>\n    <button class="event__rollup-btn" type="button">\n      <span class="visually-hidden">Open event</span>\n    </button>\n  </div>\n</li>`;var m}class M extends n{constructor(t){let{point:e,allOffers:i,allDestinations:n}=t;super(),this.point=e,this.allOffers=i,this.allDestinations=n}getTemplate(){return b(this.point,this.allOffers,this.allDestinations)}}const D=[{id:1,description:"Amsterdam, is a beautiful city, a true asian pearl, with crowded streets.",name:"Amsterdam",pictures:[{src:"https://loremflickr.com/248/152?random=1",description:"Amsterdam 01"},{src:"https://loremflickr.com/248/152?random=2",description:"Amsterdam 02"},{src:"https://loremflickr.com/248/152?random=3",description:"Amsterdam 03"}]},{id:2,description:"Chamonix, Lorem ipsum dolor sit amet, consectetur adipiscing elit.",name:"Chamonix",pictures:[{src:"https://loremflickr.com/248/152?random=4",description:"Chamonix 01"},{src:"https://loremflickr.com/248/152?random=5",description:"Chamonix 02"},{src:"https://loremflickr.com/248/152?random=6",description:"Chamonix 03"}]},{id:3,description:"Geneva, Cras aliquet varius magna, non porta ligula feugiat eget.",name:"Geneva",pictures:[{src:"https://loremflickr.com/248/152?random=7",description:"Geneva 01"},{src:"https://loremflickr.com/248/152?random=8",description:"Geneva 02"},{src:"https://loremflickr.com/248/152?random=9",description:"Geneva 03"}]}],T=[{id:"01",basePrice:f(),dateFrom:"2019-07-10T22:55:56.845Z",dateTo:"2019-07-11T11:22:13.375Z",destination:u(D).id,isFavorite:!1,offers:[1,2],type:"taxi"},{id:"02",basePrice:f(),dateFrom:"2020-05-10T22:55:56.845Z",dateTo:"2020-06-11T11:22:13.375Z",destination:u(D).id,isFavorite:!0,offers:[2,4],type:"bus"},{id:"03",basePrice:f(),dateFrom:"2020-03-01T10:00:00.845Z",dateTo:"2026-03-01T11:30:13.375Z",destination:u(D).id,isFavorite:!0,offers:[2,4],type:"bus"},{id:"04",basePrice:f(),dateFrom:"2020-04-10T10:00:00.845Z",dateTo:"2020-04-11T10:00:13.375Z",destination:u(D).id,isFavorite:!1,offers:[3,4],type:"train"},{id:"05",basePrice:f(),dateFrom:"2021-01-11T10:00:00.845Z",dateTo:"2021-01-13T10:00:13.375Z",destination:u(D).id,isFavorite:!1,offers:[3],type:"ship"},{id:"06",basePrice:f(),dateFrom:"2026-01-11T10:00:00.845Z",dateTo:"2026-01-13T10:00:13.375Z",destination:u(D).id,isFavorite:!0,offers:[3,4,5],type:"drive"},{id:"07",basePrice:f(),dateFrom:"2023-05-11T12:00:00.845Z",dateTo:"2023-05-11T12:30:13.375Z",destination:u(D).id,isFavorite:!0,offers:[1,4],type:"flight"},{id:"08",basePrice:f(),dateFrom:"2023-06-11T12:00:00.845Z",dateTo:"2023-06-13T12:30:13.375Z",destination:u(D).id,isFavorite:!1,offers:[2],type:"check-in"},{id:"09",basePrice:f(),dateFrom:"2022-09-11T12:00:00.845Z",dateTo:"2022-09-11T12:30:13.375Z",destination:u(D).id,isFavorite:!1,offers:[2,4],type:"sightseeing"},{id:"10",basePrice:f(),dateFrom:"2022-07-05T12:00:00.845Z",dateTo:"2022-07-10T12:30:13.375Z",destination:u(D).id,isFavorite:!1,offers:[1,2],type:"restaurant"}];function S(){return u(T)}const w=[{type:"taxi",offers:[{id:1,title:"Upgrade to a business class",price:120},{id:2,title:"taxi 2",price:50},{id:3,title:"taxi 3",price:100}]},{type:"bus",offers:[{id:1,title:"Bus 1",price:120},{id:2,title:"Bus 2",price:50},{id:3,title:"Bus 3",price:100},{id:4,title:"Bus 4",price:200}]},{type:"train",offers:[{id:1,title:"Train 1",price:120},{id:2,title:"Train 2",price:50},{id:3,title:"Train 3",price:100},{id:4,title:"Train 4",price:200}]},{type:"ship",offers:[{id:1,title:"Ship 1",price:120},{id:2,title:"Ship 2",price:50},{id:3,title:"Ship 3",price:100}]},{type:"drive",offers:[{id:1,title:"Drive 1",price:120},{id:2,title:"Drive 2",price:50},{id:3,title:"Drive 3",price:100},{id:4,title:"Drive 4",price:200},{id:5,title:"Drive 5",price:300}]},{type:"flight",offers:[{id:1,title:"Flight 1",price:120},{id:2,title:"Flight 2",price:50},{id:3,title:"Flight 3",price:100},{id:4,title:"Flight 4",price:200}]},{type:"check-in",offers:[{id:1,title:"Check-in 1",price:120},{id:2,title:"Check-in 2",price:50},{id:3,title:"Check-in 3",price:100}]},{type:"sightseeing",offers:[{id:1,title:"Sightseeing 1",price:120},{id:2,title:"Sightseeing 2",price:50},{id:3,title:"Sightseeing 3",price:100},{id:4,title:"Sightseeing 4",price:200}]},{type:"restaurant",offers:[{id:1,title:"Restaurant 1",price:120},{id:2,title:"Restaurant 2",price:50},{id:3,title:"Restaurant 3",price:100},{id:4,title:"Restaurant 4",price:200}]}],O=document.querySelector(".page-body"),F=O.querySelector(".trip-main"),x=O.querySelector(".trip-controls__filters"),E=O.querySelector(".trip-events");e(new class extends n{getTemplate(){return'\n  <section class="trip-main__trip-info  trip-info">\n    <div class="trip-info__main">\n      <h1 class="trip-info__title">Amsterdam &mdash; Chamonix &mdash; Geneva</h1>\n      <p class="trip-info__dates">Mar 18&nbsp;&mdash;&nbsp;20</p>\n    </div>\n    <p class="trip-info__cost">\n      Total: &euro;&nbsp;<span class="trip-info__cost-value">1230</span>\n    </p>\n  </section>'}},F,t.AFTERBEGIN),e(new class extends n{getTemplate(){return'\n    <form class="trip-filters" action="#" method="get">\n      <div class="trip-filters__filter">\n        <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything">\n        <label class="trip-filters__filter-label" for="filter-everything">Everything</label>\n      </div>\n\n      <div class="trip-filters__filter">\n        <input id="filter-future" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="future">\n        <label class="trip-filters__filter-label" for="filter-future">Future</label>\n      </div>\n\n      <div class="trip-filters__filter">\n        <input id="filter-present" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="present">\n        <label class="trip-filters__filter-label" for="filter-present">Present</label>\n      </div>\n\n      <div class="trip-filters__filter">\n        <input id="filter-past" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="past" checked="">\n        <label class="trip-filters__filter-label" for="filter-past">Past</label>\n      </div>\n\n      <button class="visually-hidden" type="submit">Accept filter</button>\n    </form>\n'}},x);const k=new class{points=Array.from({length:10},S);getPoints(){return this.points}getOffers(){return w}getDestination(){return D}},Y=new class{listComponent=new s;constructor(t){let{listContainer:e,pointsModel:i}=t;this.listContainer=e,this.pointsModel=i}init(){this.listPoints=[...this.pointsModel.getPoints()],this.listOffers=this.pointsModel.getOffers(),this.listDestination=this.pointsModel.getDestination(),e(new r,this.listContainer),e(this.listComponent,this.listContainer),e(new g({point:this.listPoints[0],allOffers:this.listOffers,allDestinations:this.listDestination}),this.listComponent.getElement());for(let t=1;t<this.listPoints.length;t++)e(new M({point:this.listPoints[t],allOffers:this.listOffers,allDestinations:this.listDestination}),this.listComponent.getElement())}}({listContainer:E,pointsModel:k});Y.init()})()})();
//# sourceMappingURL=bundle.25b1ab1c341be156d4be.js.map