import{useCallback as r,useRef as t}from"react";function e(){return(e=Object.assign||function(r){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n])}return r}).apply(this,arguments)}function n(r,t){if(null==r)return{};var e,n,o=function(r,t){if(null==r)return{};var e,n,o={},c=Object.keys(r);for(n=0;n<c.length;n++)e=c[n],t.indexOf(e)>=0||(o[e]=r[e]);return o}(r,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(r);for(n=0;n<c.length;n++)e=c[n],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(r,e)&&(o[e]=r[e])}return o}function o(t,e){return r((function(r){e(t.current.contains(r.relatedTarget))}),[t,e])}function c(r){var c=r.onFocusExit,u=r.elem,i=void 0===u?"div":u,l=n(r,["onFocusExit","elem"]),a=t(),f=o(a,c);return React.createElement(i,e({},l,{onBlur:f,ref:a}))}export{c as FocusExit,o as useFocusExit};
