!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("react")):"function"==typeof define&&define.amd?define(["exports","react"],t):t((e=e||self).ReactUseFocusExit={},e.React)}(this,(function(e,t){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function n(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function o(e,r){return t.useCallback((function(t){r(e.current.contains(t.relatedTarget))}),[e,r])}e.FocusExit=function(e){var u=e.onFocusExit,c=e.elem,i=void 0===c?"div":c,f=n(e,["onFocusExit","elem"]),a=t.useRef(),l=o(a,u);return React.createElement(i,r({},f,{onBlur:l,ref:a}))},e.useFocusExit=o,Object.defineProperty(e,"__esModule",{value:!0})}));