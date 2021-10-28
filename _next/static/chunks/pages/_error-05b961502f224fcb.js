(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[820,651],{3646:function(e,t,r){var n=r(7228);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.default=e.exports,e.exports.__esModule=!0},6860:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},319:function(e,t,r){var n=r(3646),o=r(6860),a=r(379),i=r(8206);e.exports=function(e){return n(e)||o(e)||a(e)||i()},e.exports.default=e.exports,e.exports.__esModule=!0},9651:function(e,t,r){"use strict";var n=r(4575),o=r(3913),a=r(2205),i=r(8585),u=r(9754);function c(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=u(e);if(t){var o=u(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return i(this,r)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=f(r(7294)),l=f(r(2717));function f(e){return e&&e.__esModule?e:{default:e}}var p={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function d(e){var t=e.res,r=e.err;return{statusCode:t&&t.statusCode?t.statusCode:r?r.statusCode:404}}var h=function(e){a(r,e);var t=c(r);function r(){return n(this,r),t.apply(this,arguments)}return o(r,[{key:"render",value:function(){var e=this.props.statusCode,t=this.props.title||p[e]||"An unexpected error has occurred";return s.default.createElement("div",{style:v.error},s.default.createElement(l.default,null,s.default.createElement("title",null,e?"".concat(e,": ").concat(t):"Application error: a client-side exception has occurred")),s.default.createElement("div",null,s.default.createElement("style",{dangerouslySetInnerHTML:{__html:"body { margin: 0 }"}}),e?s.default.createElement("h1",{style:v.h1},e):null,s.default.createElement("div",{style:v.desc},s.default.createElement("h2",{style:v.h2},this.props.title||e?t:s.default.createElement(s.default.Fragment,null,"Application error: a client-side exception has occurred (see the browser console for more information)"),"."))))}}]),r}(s.default.Component);h.displayName="ErrorPage",h.getInitialProps=d,h.origGetInitialProps=d,t.default=h;var v={error:{color:"#000",background:"#fff",fontFamily:'-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{display:"inline-block",textAlign:"left",lineHeight:"49px",height:"49px",verticalAlign:"middle"},h1:{display:"inline-block",borderRight:"1px solid rgba(0, 0, 0,.3)",margin:0,marginRight:"20px",padding:"10px 23px 10px 0",fontSize:"24px",fontWeight:500,verticalAlign:"top"},h2:{fontSize:"14px",fontWeight:"normal",lineHeight:"inherit",margin:0,padding:0}}},8e3:function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.AmpStateContext=void 0;var o=((n=r(7294))&&n.__esModule?n:{default:n}).default.createContext({});t.AmpStateContext=o},5646:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var n,o=(n=r(7294))&&n.__esModule?n:{default:n},a=r(8e3);function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,r=void 0!==t&&t,n=e.hybrid,o=void 0!==n&&n,a=e.hasQuery,i=void 0!==a&&a;return r||o&&i}},2717:function(e,t,r){"use strict";var n=r(9713);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}Object.defineProperty(t,"__esModule",{value:!0}),t.defaultHead=f,t.default=void 0;var a,i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(7294)),u=(a=r(1585))&&a.__esModule?a:{default:a},c=r(8e3),s=r(5850),l=r(5646);function f(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function h(e,t){return e.reduce((function(e,t){var r=i.default.Children.toArray(t.props.children);return e.concat(r)}),[]).reduce(p,[]).reverse().concat(f(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,r=new Set,n={};return function(o){var a=!0,i=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){i=!0;var u=o.key.slice(o.key.indexOf("$")+1);e.has(u)?a=!1:e.add(u)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var c=0,s=d.length;c<s;c++){var l=d[c];if(o.props.hasOwnProperty(l))if("charSet"===l)r.has(l)?a=!1:r.add(l);else{var f=o.props[l],p=n[l]||new Set;"name"===l&&i||!p.has(f)?(p.add(f),n[l]=p):a=!1}}}return a}}()).reverse().map((function(e,r){var a=e.key||r;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var u=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e.props||{});return u["data-href"]=u.href,u.href=void 0,u["data-optimized-fonts"]=!0,i.default.cloneElement(e,u)}return i.default.cloneElement(e,{key:a})}))}var v=function(e){var t=e.children,r=i.useContext(c.AmpStateContext),n=i.useContext(s.HeadManagerContext);return i.default.createElement(u.default,{reduceComponentsToState:h,headManager:n,inAmpMode:l.isInAmpMode(r)},t)};t.default=v},1585:function(e,t,r){"use strict";var n=r(319),o=r(4575),a=r(3913),i=(r(1506),r(2205)),u=r(8585),c=r(9754);function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=c(e);if(t){var o=c(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return u(this,r)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(7294));var f=function(e){i(r,e);var t=s(r);function r(e){var a;return o(this,r),(a=t.call(this,e)).emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(n(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(r,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),r}(l.Component);t.default=f},1598:function(e,t,r){"use strict";function n(e,t,r,n,o,a,u){try{var c=e[a](u),s=c.value}catch(i){return void r(i)}c.done?t(s):Promise.resolve(s).then(n,o)}r.r(t),r.d(t,{default:function(){return l}});var o=r(7757),a=r.n(o),i=r(2918),u=r(9374),c=r(5893),s=function(e){var t=e.statusCode,r=e.hasGetInitialPropsRun,n=e.err;return!r&&n&&u.Tb(n),(0,c.jsx)(i.default,{statusCode:t})};s.getInitialProps=function(){var e,t=(e=a().mark((function e(t){var r,n,o,c;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.res,n=t.err,o=t.asPath,e.next=3,i.default.getInitialProps({res:r,err:n});case 3:if((c=e.sent).hasGetInitialPropsRun=!0,!n){e.next=10;break}return u.Tb(n),e.next=9,u.yl(2e3);case 9:return e.abrupt("return",c);case 10:return u.Tb(new Error("_error.js getInitialProps missing data at path: ".concat(o))),e.next=13,u.yl(2e3);case 13:return e.abrupt("return",c);case 14:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(o,a){var i=e.apply(t,r);function u(e){n(i,o,a,u,c,"next",e)}function c(e){n(i,o,a,u,c,"throw",e)}u(void 0)}))});return function(e){return t.apply(this,arguments)}}();var l=s},938:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_error",function(){return r(1598)}])},2918:function(e,t,r){e.exports=r(9651)}},function(e){e.O(0,[774,888,179],(function(){return t=938,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
//# sourceMappingURL=_error-05b961502f224fcb.js.map