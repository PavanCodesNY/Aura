var yp=Object.defineProperty;var vp=(e,t,n)=>t in e?yp(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var C=(e,t,n)=>(vp(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function wp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Fc={exports:{}},ao={},Bc={exports:{}},V={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jr=Symbol.for("react.element"),bp=Symbol.for("react.portal"),xp=Symbol.for("react.fragment"),kp=Symbol.for("react.strict_mode"),_p=Symbol.for("react.profiler"),Sp=Symbol.for("react.provider"),Cp=Symbol.for("react.context"),Ap=Symbol.for("react.forward_ref"),Ep=Symbol.for("react.suspense"),Ip=Symbol.for("react.memo"),Tp=Symbol.for("react.lazy"),ul=Symbol.iterator;function Rp(e){return e===null||typeof e!="object"?null:(e=ul&&e[ul]||e["@@iterator"],typeof e=="function"?e:null)}var Vc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},zc=Object.assign,qc={};function nr(e,t,n){this.props=e,this.context=t,this.refs=qc,this.updater=n||Vc}nr.prototype.isReactComponent={};nr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};nr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Hc(){}Hc.prototype=nr.prototype;function ts(e,t,n){this.props=e,this.context=t,this.refs=qc,this.updater=n||Vc}var ns=ts.prototype=new Hc;ns.constructor=ts;zc(ns,nr.prototype);ns.isPureReactComponent=!0;var dl=Array.isArray,Wc=Object.prototype.hasOwnProperty,rs={current:null},Kc={key:!0,ref:!0,__self:!0,__source:!0};function Xc(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)Wc.call(t,r)&&!Kc.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var l=Array(s),c=0;c<s;c++)l[c]=arguments[c+2];i.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:Jr,type:e,key:o,ref:a,props:i,_owner:rs.current}}function Pp(e,t){return{$$typeof:Jr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function is(e){return typeof e=="object"&&e!==null&&e.$$typeof===Jr}function Np(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var pl=/\/+/g;function To(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Np(""+e.key):t.toString(36)}function ki(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Jr:case bp:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+To(a,0):r,dl(i)?(n="",e!=null&&(n=e.replace(pl,"$&/")+"/"),ki(i,t,n,"",function(c){return c})):i!=null&&(is(i)&&(i=Pp(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(pl,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",dl(e))for(var s=0;s<e.length;s++){o=e[s];var l=r+To(o,s);a+=ki(o,t,n,l,i)}else if(l=Rp(e),typeof l=="function")for(e=l.call(e),s=0;!(o=e.next()).done;)o=o.value,l=r+To(o,s++),a+=ki(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function oi(e,t,n){if(e==null)return e;var r=[],i=0;return ki(e,r,"","",function(o){return t.call(n,o,i++)}),r}function $p(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var je={current:null},_i={transition:null},jp={ReactCurrentDispatcher:je,ReactCurrentBatchConfig:_i,ReactCurrentOwner:rs};function Qc(){throw Error("act(...) is not supported in production builds of React.")}V.Children={map:oi,forEach:function(e,t,n){oi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return oi(e,function(){t++}),t},toArray:function(e){return oi(e,function(t){return t})||[]},only:function(e){if(!is(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};V.Component=nr;V.Fragment=xp;V.Profiler=_p;V.PureComponent=ts;V.StrictMode=kp;V.Suspense=Ep;V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jp;V.act=Qc;V.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=zc({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=rs.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)Wc.call(t,l)&&!Kc.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){s=Array(l);for(var c=0;c<l;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:Jr,type:e.type,key:i,ref:o,props:r,_owner:a}};V.createContext=function(e){return e={$$typeof:Cp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Sp,_context:e},e.Consumer=e};V.createElement=Xc;V.createFactory=function(e){var t=Xc.bind(null,e);return t.type=e,t};V.createRef=function(){return{current:null}};V.forwardRef=function(e){return{$$typeof:Ap,render:e}};V.isValidElement=is;V.lazy=function(e){return{$$typeof:Tp,_payload:{_status:-1,_result:e},_init:$p}};V.memo=function(e,t){return{$$typeof:Ip,type:e,compare:t===void 0?null:t}};V.startTransition=function(e){var t=_i.transition;_i.transition={};try{e()}finally{_i.transition=t}};V.unstable_act=Qc;V.useCallback=function(e,t){return je.current.useCallback(e,t)};V.useContext=function(e){return je.current.useContext(e)};V.useDebugValue=function(){};V.useDeferredValue=function(e){return je.current.useDeferredValue(e)};V.useEffect=function(e,t){return je.current.useEffect(e,t)};V.useId=function(){return je.current.useId()};V.useImperativeHandle=function(e,t,n){return je.current.useImperativeHandle(e,t,n)};V.useInsertionEffect=function(e,t){return je.current.useInsertionEffect(e,t)};V.useLayoutEffect=function(e,t){return je.current.useLayoutEffect(e,t)};V.useMemo=function(e,t){return je.current.useMemo(e,t)};V.useReducer=function(e,t,n){return je.current.useReducer(e,t,n)};V.useRef=function(e){return je.current.useRef(e)};V.useState=function(e){return je.current.useState(e)};V.useSyncExternalStore=function(e,t,n){return je.current.useSyncExternalStore(e,t,n)};V.useTransition=function(){return je.current.useTransition()};V.version="18.3.1";Bc.exports=V;var B=Bc.exports;const Mp=wp(B);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lp=B,Dp=Symbol.for("react.element"),Up=Symbol.for("react.fragment"),Op=Object.prototype.hasOwnProperty,Fp=Lp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Bp={key:!0,ref:!0,__self:!0,__source:!0};function Yc(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)Op.call(t,r)&&!Bp.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Dp,type:e,key:o,ref:a,props:i,_owner:Fp.current}}ao.Fragment=Up;ao.jsx=Yc;ao.jsxs=Yc;Fc.exports=ao;var h=Fc.exports,aa={},Jc={exports:{}},Je={},Zc={exports:{}},Gc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(y,v){var _=y.length;y.push(v);e:for(;0<_;){var E=_-1>>>1,L=y[E];if(0<i(L,v))y[E]=v,y[_]=L,_=E;else break e}}function n(y){return y.length===0?null:y[0]}function r(y){if(y.length===0)return null;var v=y[0],_=y.pop();if(_!==v){y[0]=_;e:for(var E=0,L=y.length,Ue=L>>>1;E<Ue;){var ye=2*(E+1)-1,sn=y[ye],re=ye+1,ln=y[re];if(0>i(sn,_))re<L&&0>i(ln,sn)?(y[E]=ln,y[re]=_,E=re):(y[E]=sn,y[ye]=_,E=ye);else if(re<L&&0>i(ln,_))y[E]=ln,y[re]=_,E=re;else break e}}return v}function i(y,v){var _=y.sortIndex-v.sortIndex;return _!==0?_:y.id-v.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var l=[],c=[],m=1,u=null,p=3,w=!1,S=!1,x=!1,M=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(y){for(var v=n(c);v!==null;){if(v.callback===null)r(c);else if(v.startTime<=y)r(c),v.sortIndex=v.expirationTime,t(l,v);else break;v=n(c)}}function k(y){if(x=!1,g(y),!S)if(n(l)!==null)S=!0,Mt(I);else{var v=n(c);v!==null&&De(k,v.startTime-y)}}function I(y,v){S=!1,x&&(x=!1,f(R),R=-1),w=!0;var _=p;try{for(g(v),u=n(l);u!==null&&(!(u.expirationTime>v)||y&&!Ae());){var E=u.callback;if(typeof E=="function"){u.callback=null,p=u.priorityLevel;var L=E(u.expirationTime<=v);v=e.unstable_now(),typeof L=="function"?u.callback=L:u===n(l)&&r(l),g(v)}else r(l);u=n(l)}if(u!==null)var Ue=!0;else{var ye=n(c);ye!==null&&De(k,ye.startTime-v),Ue=!1}return Ue}finally{u=null,p=_,w=!1}}var T=!1,N=null,R=-1,Y=5,O=-1;function Ae(){return!(e.unstable_now()-O<Y)}function Le(){if(N!==null){var y=e.unstable_now();O=y;var v=!0;try{v=N(!0,y)}finally{v?yt():(T=!1,N=null)}}else T=!1}var yt;if(typeof d=="function")yt=function(){d(Le)};else if(typeof MessageChannel<"u"){var an=new MessageChannel,En=an.port2;an.port1.onmessage=Le,yt=function(){En.postMessage(null)}}else yt=function(){M(Le,0)};function Mt(y){N=y,T||(T=!0,yt())}function De(y,v){R=M(function(){y(e.unstable_now())},v)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(y){y.callback=null},e.unstable_continueExecution=function(){S||w||(S=!0,Mt(I))},e.unstable_forceFrameRate=function(y){0>y||125<y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Y=0<y?Math.floor(1e3/y):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(y){switch(p){case 1:case 2:case 3:var v=3;break;default:v=p}var _=p;p=v;try{return y()}finally{p=_}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(y,v){switch(y){case 1:case 2:case 3:case 4:case 5:break;default:y=3}var _=p;p=y;try{return v()}finally{p=_}},e.unstable_scheduleCallback=function(y,v,_){var E=e.unstable_now();switch(typeof _=="object"&&_!==null?(_=_.delay,_=typeof _=="number"&&0<_?E+_:E):_=E,y){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=_+L,y={id:m++,callback:v,priorityLevel:y,startTime:_,expirationTime:L,sortIndex:-1},_>E?(y.sortIndex=_,t(c,y),n(l)===null&&y===n(c)&&(x?(f(R),R=-1):x=!0,De(k,_-E))):(y.sortIndex=L,t(l,y),S||w||(S=!0,Mt(I))),y},e.unstable_shouldYield=Ae,e.unstable_wrapCallback=function(y){var v=p;return function(){var _=p;p=v;try{return y.apply(this,arguments)}finally{p=_}}}})(Gc);Zc.exports=Gc;var Vp=Zc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zp=B,Ye=Vp;function A(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var eu=new Set,jr={};function kn(e,t){Qn(e,t),Qn(e+"Capture",t)}function Qn(e,t){for(jr[e]=t,e=0;e<t.length;e++)eu.add(t[e])}var Rt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),sa=Object.prototype.hasOwnProperty,qp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ml={},fl={};function Hp(e){return sa.call(fl,e)?!0:sa.call(ml,e)?!1:qp.test(e)?fl[e]=!0:(ml[e]=!0,!1)}function Wp(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Kp(e,t,n,r){if(t===null||typeof t>"u"||Wp(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Me(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var Ce={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ce[e]=new Me(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ce[t]=new Me(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ce[e]=new Me(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ce[e]=new Me(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ce[e]=new Me(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ce[e]=new Me(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ce[e]=new Me(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ce[e]=new Me(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ce[e]=new Me(e,5,!1,e.toLowerCase(),null,!1,!1)});var os=/[\-:]([a-z])/g;function as(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(os,as);Ce[t]=new Me(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(os,as);Ce[t]=new Me(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(os,as);Ce[t]=new Me(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ce[e]=new Me(e,1,!1,e.toLowerCase(),null,!1,!1)});Ce.xlinkHref=new Me("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ce[e]=new Me(e,1,!1,e.toLowerCase(),null,!0,!0)});function ss(e,t,n,r){var i=Ce.hasOwnProperty(t)?Ce[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Kp(t,n,i,r)&&(n=null),r||i===null?Hp(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var jt=zp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ai=Symbol.for("react.element"),Pn=Symbol.for("react.portal"),Nn=Symbol.for("react.fragment"),ls=Symbol.for("react.strict_mode"),la=Symbol.for("react.profiler"),tu=Symbol.for("react.provider"),nu=Symbol.for("react.context"),cs=Symbol.for("react.forward_ref"),ca=Symbol.for("react.suspense"),ua=Symbol.for("react.suspense_list"),us=Symbol.for("react.memo"),Ot=Symbol.for("react.lazy"),ru=Symbol.for("react.offscreen"),hl=Symbol.iterator;function lr(e){return e===null||typeof e!="object"?null:(e=hl&&e[hl]||e["@@iterator"],typeof e=="function"?e:null)}var se=Object.assign,Ro;function wr(e){if(Ro===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ro=t&&t[1]||""}return`
`+Ro+e}var Po=!1;function No(e,t){if(!e||Po)return"";Po=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,s=o.length-1;1<=a&&0<=s&&i[a]!==o[s];)s--;for(;1<=a&&0<=s;a--,s--)if(i[a]!==o[s]){if(a!==1||s!==1)do if(a--,s--,0>s||i[a]!==o[s]){var l=`
`+i[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=a&&0<=s);break}}}finally{Po=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?wr(e):""}function Xp(e){switch(e.tag){case 5:return wr(e.type);case 16:return wr("Lazy");case 13:return wr("Suspense");case 19:return wr("SuspenseList");case 0:case 2:case 15:return e=No(e.type,!1),e;case 11:return e=No(e.type.render,!1),e;case 1:return e=No(e.type,!0),e;default:return""}}function da(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Nn:return"Fragment";case Pn:return"Portal";case la:return"Profiler";case ls:return"StrictMode";case ca:return"Suspense";case ua:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case nu:return(e.displayName||"Context")+".Consumer";case tu:return(e._context.displayName||"Context")+".Provider";case cs:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case us:return t=e.displayName||null,t!==null?t:da(e.type)||"Memo";case Ot:t=e._payload,e=e._init;try{return da(e(t))}catch{}}return null}function Qp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return da(t);case 8:return t===ls?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Gt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function iu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Yp(e){var t=iu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function si(e){e._valueTracker||(e._valueTracker=Yp(e))}function ou(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=iu(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Mi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function pa(e,t){var n=t.checked;return se({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function gl(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Gt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function au(e,t){t=t.checked,t!=null&&ss(e,"checked",t,!1)}function ma(e,t){au(e,t);var n=Gt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?fa(e,t.type,n):t.hasOwnProperty("defaultValue")&&fa(e,t.type,Gt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function yl(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function fa(e,t,n){(t!=="number"||Mi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var br=Array.isArray;function zn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Gt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function ha(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(A(91));return se({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function vl(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(A(92));if(br(n)){if(1<n.length)throw Error(A(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Gt(n)}}function su(e,t){var n=Gt(t.value),r=Gt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function wl(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function lu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ga(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?lu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var li,cu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(li=li||document.createElement("div"),li.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=li.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Mr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Sr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Jp=["Webkit","ms","Moz","O"];Object.keys(Sr).forEach(function(e){Jp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Sr[t]=Sr[e]})});function uu(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Sr.hasOwnProperty(e)&&Sr[e]?(""+t).trim():t+"px"}function du(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=uu(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Zp=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ya(e,t){if(t){if(Zp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(A(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(A(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(A(61))}if(t.style!=null&&typeof t.style!="object")throw Error(A(62))}}function va(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wa=null;function ds(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ba=null,qn=null,Hn=null;function bl(e){if(e=ei(e)){if(typeof ba!="function")throw Error(A(280));var t=e.stateNode;t&&(t=po(t),ba(e.stateNode,e.type,t))}}function pu(e){qn?Hn?Hn.push(e):Hn=[e]:qn=e}function mu(){if(qn){var e=qn,t=Hn;if(Hn=qn=null,bl(e),t)for(e=0;e<t.length;e++)bl(t[e])}}function fu(e,t){return e(t)}function hu(){}var $o=!1;function gu(e,t,n){if($o)return e(t,n);$o=!0;try{return fu(e,t,n)}finally{$o=!1,(qn!==null||Hn!==null)&&(hu(),mu())}}function Lr(e,t){var n=e.stateNode;if(n===null)return null;var r=po(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(A(231,t,typeof n));return n}var xa=!1;if(Rt)try{var cr={};Object.defineProperty(cr,"passive",{get:function(){xa=!0}}),window.addEventListener("test",cr,cr),window.removeEventListener("test",cr,cr)}catch{xa=!1}function Gp(e,t,n,r,i,o,a,s,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(m){this.onError(m)}}var Cr=!1,Li=null,Di=!1,ka=null,em={onError:function(e){Cr=!0,Li=e}};function tm(e,t,n,r,i,o,a,s,l){Cr=!1,Li=null,Gp.apply(em,arguments)}function nm(e,t,n,r,i,o,a,s,l){if(tm.apply(this,arguments),Cr){if(Cr){var c=Li;Cr=!1,Li=null}else throw Error(A(198));Di||(Di=!0,ka=c)}}function _n(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function yu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function xl(e){if(_n(e)!==e)throw Error(A(188))}function rm(e){var t=e.alternate;if(!t){if(t=_n(e),t===null)throw Error(A(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return xl(i),e;if(o===r)return xl(i),t;o=o.sibling}throw Error(A(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,s=i.child;s;){if(s===n){a=!0,n=i,r=o;break}if(s===r){a=!0,r=i,n=o;break}s=s.sibling}if(!a){for(s=o.child;s;){if(s===n){a=!0,n=o,r=i;break}if(s===r){a=!0,r=o,n=i;break}s=s.sibling}if(!a)throw Error(A(189))}}if(n.alternate!==r)throw Error(A(190))}if(n.tag!==3)throw Error(A(188));return n.stateNode.current===n?e:t}function vu(e){return e=rm(e),e!==null?wu(e):null}function wu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=wu(e);if(t!==null)return t;e=e.sibling}return null}var bu=Ye.unstable_scheduleCallback,kl=Ye.unstable_cancelCallback,im=Ye.unstable_shouldYield,om=Ye.unstable_requestPaint,de=Ye.unstable_now,am=Ye.unstable_getCurrentPriorityLevel,ps=Ye.unstable_ImmediatePriority,xu=Ye.unstable_UserBlockingPriority,Ui=Ye.unstable_NormalPriority,sm=Ye.unstable_LowPriority,ku=Ye.unstable_IdlePriority,so=null,kt=null;function lm(e){if(kt&&typeof kt.onCommitFiberRoot=="function")try{kt.onCommitFiberRoot(so,e,void 0,(e.current.flags&128)===128)}catch{}}var pt=Math.clz32?Math.clz32:dm,cm=Math.log,um=Math.LN2;function dm(e){return e>>>=0,e===0?32:31-(cm(e)/um|0)|0}var ci=64,ui=4194304;function xr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Oi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var s=a&~i;s!==0?r=xr(s):(o&=a,o!==0&&(r=xr(o)))}else a=n&~i,a!==0?r=xr(a):o!==0&&(r=xr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-pt(t),i=1<<n,r|=e[n],t&=~i;return r}function pm(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function mm(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-pt(o),s=1<<a,l=i[a];l===-1?(!(s&n)||s&r)&&(i[a]=pm(s,t)):l<=t&&(e.expiredLanes|=s),o&=~s}}function _a(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function _u(){var e=ci;return ci<<=1,!(ci&4194240)&&(ci=64),e}function jo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Zr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-pt(t),e[t]=n}function fm(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-pt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function ms(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-pt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var J=0;function Su(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Cu,fs,Au,Eu,Iu,Sa=!1,di=[],Ht=null,Wt=null,Kt=null,Dr=new Map,Ur=new Map,Bt=[],hm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function _l(e,t){switch(e){case"focusin":case"focusout":Ht=null;break;case"dragenter":case"dragleave":Wt=null;break;case"mouseover":case"mouseout":Kt=null;break;case"pointerover":case"pointerout":Dr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ur.delete(t.pointerId)}}function ur(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=ei(t),t!==null&&fs(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function gm(e,t,n,r,i){switch(t){case"focusin":return Ht=ur(Ht,e,t,n,r,i),!0;case"dragenter":return Wt=ur(Wt,e,t,n,r,i),!0;case"mouseover":return Kt=ur(Kt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Dr.set(o,ur(Dr.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Ur.set(o,ur(Ur.get(o)||null,e,t,n,r,i)),!0}return!1}function Tu(e){var t=pn(e.target);if(t!==null){var n=_n(t);if(n!==null){if(t=n.tag,t===13){if(t=yu(n),t!==null){e.blockedOn=t,Iu(e.priority,function(){Au(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Si(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ca(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);wa=r,n.target.dispatchEvent(r),wa=null}else return t=ei(n),t!==null&&fs(t),e.blockedOn=n,!1;t.shift()}return!0}function Sl(e,t,n){Si(e)&&n.delete(t)}function ym(){Sa=!1,Ht!==null&&Si(Ht)&&(Ht=null),Wt!==null&&Si(Wt)&&(Wt=null),Kt!==null&&Si(Kt)&&(Kt=null),Dr.forEach(Sl),Ur.forEach(Sl)}function dr(e,t){e.blockedOn===t&&(e.blockedOn=null,Sa||(Sa=!0,Ye.unstable_scheduleCallback(Ye.unstable_NormalPriority,ym)))}function Or(e){function t(i){return dr(i,e)}if(0<di.length){dr(di[0],e);for(var n=1;n<di.length;n++){var r=di[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Ht!==null&&dr(Ht,e),Wt!==null&&dr(Wt,e),Kt!==null&&dr(Kt,e),Dr.forEach(t),Ur.forEach(t),n=0;n<Bt.length;n++)r=Bt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Bt.length&&(n=Bt[0],n.blockedOn===null);)Tu(n),n.blockedOn===null&&Bt.shift()}var Wn=jt.ReactCurrentBatchConfig,Fi=!0;function vm(e,t,n,r){var i=J,o=Wn.transition;Wn.transition=null;try{J=1,hs(e,t,n,r)}finally{J=i,Wn.transition=o}}function wm(e,t,n,r){var i=J,o=Wn.transition;Wn.transition=null;try{J=4,hs(e,t,n,r)}finally{J=i,Wn.transition=o}}function hs(e,t,n,r){if(Fi){var i=Ca(e,t,n,r);if(i===null)qo(e,t,r,Bi,n),_l(e,r);else if(gm(i,e,t,n,r))r.stopPropagation();else if(_l(e,r),t&4&&-1<hm.indexOf(e)){for(;i!==null;){var o=ei(i);if(o!==null&&Cu(o),o=Ca(e,t,n,r),o===null&&qo(e,t,r,Bi,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else qo(e,t,r,null,n)}}var Bi=null;function Ca(e,t,n,r){if(Bi=null,e=ds(r),e=pn(e),e!==null)if(t=_n(e),t===null)e=null;else if(n=t.tag,n===13){if(e=yu(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Bi=e,null}function Ru(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(am()){case ps:return 1;case xu:return 4;case Ui:case sm:return 16;case ku:return 536870912;default:return 16}default:return 16}}var zt=null,gs=null,Ci=null;function Pu(){if(Ci)return Ci;var e,t=gs,n=t.length,r,i="value"in zt?zt.value:zt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return Ci=i.slice(e,1<r?1-r:void 0)}function Ai(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function pi(){return!0}function Cl(){return!1}function Ze(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?pi:Cl,this.isPropagationStopped=Cl,this}return se(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=pi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=pi)},persist:function(){},isPersistent:pi}),t}var rr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ys=Ze(rr),Gr=se({},rr,{view:0,detail:0}),bm=Ze(Gr),Mo,Lo,pr,lo=se({},Gr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:vs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==pr&&(pr&&e.type==="mousemove"?(Mo=e.screenX-pr.screenX,Lo=e.screenY-pr.screenY):Lo=Mo=0,pr=e),Mo)},movementY:function(e){return"movementY"in e?e.movementY:Lo}}),Al=Ze(lo),xm=se({},lo,{dataTransfer:0}),km=Ze(xm),_m=se({},Gr,{relatedTarget:0}),Do=Ze(_m),Sm=se({},rr,{animationName:0,elapsedTime:0,pseudoElement:0}),Cm=Ze(Sm),Am=se({},rr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Em=Ze(Am),Im=se({},rr,{data:0}),El=Ze(Im),Tm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Rm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Pm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Nm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Pm[e])?!!t[e]:!1}function vs(){return Nm}var $m=se({},Gr,{key:function(e){if(e.key){var t=Tm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ai(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Rm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:vs,charCode:function(e){return e.type==="keypress"?Ai(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ai(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),jm=Ze($m),Mm=se({},lo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Il=Ze(Mm),Lm=se({},Gr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:vs}),Dm=Ze(Lm),Um=se({},rr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Om=Ze(Um),Fm=se({},lo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Bm=Ze(Fm),Vm=[9,13,27,32],ws=Rt&&"CompositionEvent"in window,Ar=null;Rt&&"documentMode"in document&&(Ar=document.documentMode);var zm=Rt&&"TextEvent"in window&&!Ar,Nu=Rt&&(!ws||Ar&&8<Ar&&11>=Ar),Tl=String.fromCharCode(32),Rl=!1;function $u(e,t){switch(e){case"keyup":return Vm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ju(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var $n=!1;function qm(e,t){switch(e){case"compositionend":return ju(t);case"keypress":return t.which!==32?null:(Rl=!0,Tl);case"textInput":return e=t.data,e===Tl&&Rl?null:e;default:return null}}function Hm(e,t){if($n)return e==="compositionend"||!ws&&$u(e,t)?(e=Pu(),Ci=gs=zt=null,$n=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Nu&&t.locale!=="ko"?null:t.data;default:return null}}var Wm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Wm[e.type]:t==="textarea"}function Mu(e,t,n,r){pu(r),t=Vi(t,"onChange"),0<t.length&&(n=new ys("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Er=null,Fr=null;function Km(e){Wu(e,0)}function co(e){var t=Ln(e);if(ou(t))return e}function Xm(e,t){if(e==="change")return t}var Lu=!1;if(Rt){var Uo;if(Rt){var Oo="oninput"in document;if(!Oo){var Nl=document.createElement("div");Nl.setAttribute("oninput","return;"),Oo=typeof Nl.oninput=="function"}Uo=Oo}else Uo=!1;Lu=Uo&&(!document.documentMode||9<document.documentMode)}function $l(){Er&&(Er.detachEvent("onpropertychange",Du),Fr=Er=null)}function Du(e){if(e.propertyName==="value"&&co(Fr)){var t=[];Mu(t,Fr,e,ds(e)),gu(Km,t)}}function Qm(e,t,n){e==="focusin"?($l(),Er=t,Fr=n,Er.attachEvent("onpropertychange",Du)):e==="focusout"&&$l()}function Ym(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return co(Fr)}function Jm(e,t){if(e==="click")return co(t)}function Zm(e,t){if(e==="input"||e==="change")return co(t)}function Gm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ht=typeof Object.is=="function"?Object.is:Gm;function Br(e,t){if(ht(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!sa.call(t,i)||!ht(e[i],t[i]))return!1}return!0}function jl(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ml(e,t){var n=jl(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=jl(n)}}function Uu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Uu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ou(){for(var e=window,t=Mi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Mi(e.document)}return t}function bs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function ef(e){var t=Ou(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Uu(n.ownerDocument.documentElement,n)){if(r!==null&&bs(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Ml(n,o);var a=Ml(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var tf=Rt&&"documentMode"in document&&11>=document.documentMode,jn=null,Aa=null,Ir=null,Ea=!1;function Ll(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ea||jn==null||jn!==Mi(r)||(r=jn,"selectionStart"in r&&bs(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ir&&Br(Ir,r)||(Ir=r,r=Vi(Aa,"onSelect"),0<r.length&&(t=new ys("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=jn)))}function mi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Mn={animationend:mi("Animation","AnimationEnd"),animationiteration:mi("Animation","AnimationIteration"),animationstart:mi("Animation","AnimationStart"),transitionend:mi("Transition","TransitionEnd")},Fo={},Fu={};Rt&&(Fu=document.createElement("div").style,"AnimationEvent"in window||(delete Mn.animationend.animation,delete Mn.animationiteration.animation,delete Mn.animationstart.animation),"TransitionEvent"in window||delete Mn.transitionend.transition);function uo(e){if(Fo[e])return Fo[e];if(!Mn[e])return e;var t=Mn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Fu)return Fo[e]=t[n];return e}var Bu=uo("animationend"),Vu=uo("animationiteration"),zu=uo("animationstart"),qu=uo("transitionend"),Hu=new Map,Dl="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function tn(e,t){Hu.set(e,t),kn(t,[e])}for(var Bo=0;Bo<Dl.length;Bo++){var Vo=Dl[Bo],nf=Vo.toLowerCase(),rf=Vo[0].toUpperCase()+Vo.slice(1);tn(nf,"on"+rf)}tn(Bu,"onAnimationEnd");tn(Vu,"onAnimationIteration");tn(zu,"onAnimationStart");tn("dblclick","onDoubleClick");tn("focusin","onFocus");tn("focusout","onBlur");tn(qu,"onTransitionEnd");Qn("onMouseEnter",["mouseout","mouseover"]);Qn("onMouseLeave",["mouseout","mouseover"]);Qn("onPointerEnter",["pointerout","pointerover"]);Qn("onPointerLeave",["pointerout","pointerover"]);kn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));kn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));kn("onBeforeInput",["compositionend","keypress","textInput","paste"]);kn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));kn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));kn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var kr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),of=new Set("cancel close invalid load scroll toggle".split(" ").concat(kr));function Ul(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,nm(r,t,void 0,e),e.currentTarget=null}function Wu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],l=s.instance,c=s.currentTarget;if(s=s.listener,l!==o&&i.isPropagationStopped())break e;Ul(i,s,c),o=l}else for(a=0;a<r.length;a++){if(s=r[a],l=s.instance,c=s.currentTarget,s=s.listener,l!==o&&i.isPropagationStopped())break e;Ul(i,s,c),o=l}}}if(Di)throw e=ka,Di=!1,ka=null,e}function te(e,t){var n=t[Na];n===void 0&&(n=t[Na]=new Set);var r=e+"__bubble";n.has(r)||(Ku(t,e,2,!1),n.add(r))}function zo(e,t,n){var r=0;t&&(r|=4),Ku(n,e,r,t)}var fi="_reactListening"+Math.random().toString(36).slice(2);function Vr(e){if(!e[fi]){e[fi]=!0,eu.forEach(function(n){n!=="selectionchange"&&(of.has(n)||zo(n,!1,e),zo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[fi]||(t[fi]=!0,zo("selectionchange",!1,t))}}function Ku(e,t,n,r){switch(Ru(t)){case 1:var i=vm;break;case 4:i=wm;break;default:i=hs}n=i.bind(null,t,n,e),i=void 0,!xa||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function qo(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;a=a.return}for(;s!==null;){if(a=pn(s),a===null)return;if(l=a.tag,l===5||l===6){r=o=a;continue e}s=s.parentNode}}r=r.return}gu(function(){var c=o,m=ds(n),u=[];e:{var p=Hu.get(e);if(p!==void 0){var w=ys,S=e;switch(e){case"keypress":if(Ai(n)===0)break e;case"keydown":case"keyup":w=jm;break;case"focusin":S="focus",w=Do;break;case"focusout":S="blur",w=Do;break;case"beforeblur":case"afterblur":w=Do;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=Al;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=km;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=Dm;break;case Bu:case Vu:case zu:w=Cm;break;case qu:w=Om;break;case"scroll":w=bm;break;case"wheel":w=Bm;break;case"copy":case"cut":case"paste":w=Em;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=Il}var x=(t&4)!==0,M=!x&&e==="scroll",f=x?p!==null?p+"Capture":null:p;x=[];for(var d=c,g;d!==null;){g=d;var k=g.stateNode;if(g.tag===5&&k!==null&&(g=k,f!==null&&(k=Lr(d,f),k!=null&&x.push(zr(d,k,g)))),M)break;d=d.return}0<x.length&&(p=new w(p,S,null,n,m),u.push({event:p,listeners:x}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",p&&n!==wa&&(S=n.relatedTarget||n.fromElement)&&(pn(S)||S[Pt]))break e;if((w||p)&&(p=m.window===m?m:(p=m.ownerDocument)?p.defaultView||p.parentWindow:window,w?(S=n.relatedTarget||n.toElement,w=c,S=S?pn(S):null,S!==null&&(M=_n(S),S!==M||S.tag!==5&&S.tag!==6)&&(S=null)):(w=null,S=c),w!==S)){if(x=Al,k="onMouseLeave",f="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(x=Il,k="onPointerLeave",f="onPointerEnter",d="pointer"),M=w==null?p:Ln(w),g=S==null?p:Ln(S),p=new x(k,d+"leave",w,n,m),p.target=M,p.relatedTarget=g,k=null,pn(m)===c&&(x=new x(f,d+"enter",S,n,m),x.target=g,x.relatedTarget=M,k=x),M=k,w&&S)t:{for(x=w,f=S,d=0,g=x;g;g=In(g))d++;for(g=0,k=f;k;k=In(k))g++;for(;0<d-g;)x=In(x),d--;for(;0<g-d;)f=In(f),g--;for(;d--;){if(x===f||f!==null&&x===f.alternate)break t;x=In(x),f=In(f)}x=null}else x=null;w!==null&&Ol(u,p,w,x,!1),S!==null&&M!==null&&Ol(u,M,S,x,!0)}}e:{if(p=c?Ln(c):window,w=p.nodeName&&p.nodeName.toLowerCase(),w==="select"||w==="input"&&p.type==="file")var I=Xm;else if(Pl(p))if(Lu)I=Zm;else{I=Ym;var T=Qm}else(w=p.nodeName)&&w.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(I=Jm);if(I&&(I=I(e,c))){Mu(u,I,n,m);break e}T&&T(e,p,c),e==="focusout"&&(T=p._wrapperState)&&T.controlled&&p.type==="number"&&fa(p,"number",p.value)}switch(T=c?Ln(c):window,e){case"focusin":(Pl(T)||T.contentEditable==="true")&&(jn=T,Aa=c,Ir=null);break;case"focusout":Ir=Aa=jn=null;break;case"mousedown":Ea=!0;break;case"contextmenu":case"mouseup":case"dragend":Ea=!1,Ll(u,n,m);break;case"selectionchange":if(tf)break;case"keydown":case"keyup":Ll(u,n,m)}var N;if(ws)e:{switch(e){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else $n?$u(e,n)&&(R="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(Nu&&n.locale!=="ko"&&($n||R!=="onCompositionStart"?R==="onCompositionEnd"&&$n&&(N=Pu()):(zt=m,gs="value"in zt?zt.value:zt.textContent,$n=!0)),T=Vi(c,R),0<T.length&&(R=new El(R,e,null,n,m),u.push({event:R,listeners:T}),N?R.data=N:(N=ju(n),N!==null&&(R.data=N)))),(N=zm?qm(e,n):Hm(e,n))&&(c=Vi(c,"onBeforeInput"),0<c.length&&(m=new El("onBeforeInput","beforeinput",null,n,m),u.push({event:m,listeners:c}),m.data=N))}Wu(u,t)})}function zr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Vi(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Lr(e,n),o!=null&&r.unshift(zr(e,o,i)),o=Lr(e,t),o!=null&&r.push(zr(e,o,i))),e=e.return}return r}function In(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ol(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var s=n,l=s.alternate,c=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&c!==null&&(s=c,i?(l=Lr(n,o),l!=null&&a.unshift(zr(n,l,s))):i||(l=Lr(n,o),l!=null&&a.push(zr(n,l,s)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var af=/\r\n?/g,sf=/\u0000|\uFFFD/g;function Fl(e){return(typeof e=="string"?e:""+e).replace(af,`
`).replace(sf,"")}function hi(e,t,n){if(t=Fl(t),Fl(e)!==t&&n)throw Error(A(425))}function zi(){}var Ia=null,Ta=null;function Ra(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Pa=typeof setTimeout=="function"?setTimeout:void 0,lf=typeof clearTimeout=="function"?clearTimeout:void 0,Bl=typeof Promise=="function"?Promise:void 0,cf=typeof queueMicrotask=="function"?queueMicrotask:typeof Bl<"u"?function(e){return Bl.resolve(null).then(e).catch(uf)}:Pa;function uf(e){setTimeout(function(){throw e})}function Ho(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Or(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Or(t)}function Xt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Vl(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var ir=Math.random().toString(36).slice(2),bt="__reactFiber$"+ir,qr="__reactProps$"+ir,Pt="__reactContainer$"+ir,Na="__reactEvents$"+ir,df="__reactListeners$"+ir,pf="__reactHandles$"+ir;function pn(e){var t=e[bt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Pt]||n[bt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Vl(e);e!==null;){if(n=e[bt])return n;e=Vl(e)}return t}e=n,n=e.parentNode}return null}function ei(e){return e=e[bt]||e[Pt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ln(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(A(33))}function po(e){return e[qr]||null}var $a=[],Dn=-1;function nn(e){return{current:e}}function ne(e){0>Dn||(e.current=$a[Dn],$a[Dn]=null,Dn--)}function ee(e,t){Dn++,$a[Dn]=e.current,e.current=t}var en={},Re=nn(en),Ve=nn(!1),yn=en;function Yn(e,t){var n=e.type.contextTypes;if(!n)return en;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ze(e){return e=e.childContextTypes,e!=null}function qi(){ne(Ve),ne(Re)}function zl(e,t,n){if(Re.current!==en)throw Error(A(168));ee(Re,t),ee(Ve,n)}function Xu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(A(108,Qp(e)||"Unknown",i));return se({},n,r)}function Hi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||en,yn=Re.current,ee(Re,e),ee(Ve,Ve.current),!0}function ql(e,t,n){var r=e.stateNode;if(!r)throw Error(A(169));n?(e=Xu(e,t,yn),r.__reactInternalMemoizedMergedChildContext=e,ne(Ve),ne(Re),ee(Re,e)):ne(Ve),ee(Ve,n)}var At=null,mo=!1,Wo=!1;function Qu(e){At===null?At=[e]:At.push(e)}function mf(e){mo=!0,Qu(e)}function rn(){if(!Wo&&At!==null){Wo=!0;var e=0,t=J;try{var n=At;for(J=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}At=null,mo=!1}catch(i){throw At!==null&&(At=At.slice(e+1)),bu(ps,rn),i}finally{J=t,Wo=!1}}return null}var Un=[],On=0,Wi=null,Ki=0,et=[],tt=0,vn=null,Et=1,It="";function cn(e,t){Un[On++]=Ki,Un[On++]=Wi,Wi=e,Ki=t}function Yu(e,t,n){et[tt++]=Et,et[tt++]=It,et[tt++]=vn,vn=e;var r=Et;e=It;var i=32-pt(r)-1;r&=~(1<<i),n+=1;var o=32-pt(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Et=1<<32-pt(t)+i|n<<i|r,It=o+e}else Et=1<<o|n<<i|r,It=e}function xs(e){e.return!==null&&(cn(e,1),Yu(e,1,0))}function ks(e){for(;e===Wi;)Wi=Un[--On],Un[On]=null,Ki=Un[--On],Un[On]=null;for(;e===vn;)vn=et[--tt],et[tt]=null,It=et[--tt],et[tt]=null,Et=et[--tt],et[tt]=null}var Qe=null,Xe=null,ie=!1,dt=null;function Ju(e,t){var n=nt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Hl(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Qe=e,Xe=Xt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Qe=e,Xe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=vn!==null?{id:Et,overflow:It}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=nt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Qe=e,Xe=null,!0):!1;default:return!1}}function ja(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ma(e){if(ie){var t=Xe;if(t){var n=t;if(!Hl(e,t)){if(ja(e))throw Error(A(418));t=Xt(n.nextSibling);var r=Qe;t&&Hl(e,t)?Ju(r,n):(e.flags=e.flags&-4097|2,ie=!1,Qe=e)}}else{if(ja(e))throw Error(A(418));e.flags=e.flags&-4097|2,ie=!1,Qe=e}}}function Wl(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Qe=e}function gi(e){if(e!==Qe)return!1;if(!ie)return Wl(e),ie=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ra(e.type,e.memoizedProps)),t&&(t=Xe)){if(ja(e))throw Zu(),Error(A(418));for(;t;)Ju(e,t),t=Xt(t.nextSibling)}if(Wl(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(A(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Xe=Xt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Xe=null}}else Xe=Qe?Xt(e.stateNode.nextSibling):null;return!0}function Zu(){for(var e=Xe;e;)e=Xt(e.nextSibling)}function Jn(){Xe=Qe=null,ie=!1}function _s(e){dt===null?dt=[e]:dt.push(e)}var ff=jt.ReactCurrentBatchConfig;function mr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(A(309));var r=n.stateNode}if(!r)throw Error(A(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var s=i.refs;a===null?delete s[o]:s[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(A(284));if(!n._owner)throw Error(A(290,e))}return e}function yi(e,t){throw e=Object.prototype.toString.call(t),Error(A(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Kl(e){var t=e._init;return t(e._payload)}function Gu(e){function t(f,d){if(e){var g=f.deletions;g===null?(f.deletions=[d],f.flags|=16):g.push(d)}}function n(f,d){if(!e)return null;for(;d!==null;)t(f,d),d=d.sibling;return null}function r(f,d){for(f=new Map;d!==null;)d.key!==null?f.set(d.key,d):f.set(d.index,d),d=d.sibling;return f}function i(f,d){return f=Zt(f,d),f.index=0,f.sibling=null,f}function o(f,d,g){return f.index=g,e?(g=f.alternate,g!==null?(g=g.index,g<d?(f.flags|=2,d):g):(f.flags|=2,d)):(f.flags|=1048576,d)}function a(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,d,g,k){return d===null||d.tag!==6?(d=Go(g,f.mode,k),d.return=f,d):(d=i(d,g),d.return=f,d)}function l(f,d,g,k){var I=g.type;return I===Nn?m(f,d,g.props.children,k,g.key):d!==null&&(d.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===Ot&&Kl(I)===d.type)?(k=i(d,g.props),k.ref=mr(f,d,g),k.return=f,k):(k=$i(g.type,g.key,g.props,null,f.mode,k),k.ref=mr(f,d,g),k.return=f,k)}function c(f,d,g,k){return d===null||d.tag!==4||d.stateNode.containerInfo!==g.containerInfo||d.stateNode.implementation!==g.implementation?(d=ea(g,f.mode,k),d.return=f,d):(d=i(d,g.children||[]),d.return=f,d)}function m(f,d,g,k,I){return d===null||d.tag!==7?(d=gn(g,f.mode,k,I),d.return=f,d):(d=i(d,g),d.return=f,d)}function u(f,d,g){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Go(""+d,f.mode,g),d.return=f,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case ai:return g=$i(d.type,d.key,d.props,null,f.mode,g),g.ref=mr(f,null,d),g.return=f,g;case Pn:return d=ea(d,f.mode,g),d.return=f,d;case Ot:var k=d._init;return u(f,k(d._payload),g)}if(br(d)||lr(d))return d=gn(d,f.mode,g,null),d.return=f,d;yi(f,d)}return null}function p(f,d,g,k){var I=d!==null?d.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return I!==null?null:s(f,d,""+g,k);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ai:return g.key===I?l(f,d,g,k):null;case Pn:return g.key===I?c(f,d,g,k):null;case Ot:return I=g._init,p(f,d,I(g._payload),k)}if(br(g)||lr(g))return I!==null?null:m(f,d,g,k,null);yi(f,g)}return null}function w(f,d,g,k,I){if(typeof k=="string"&&k!==""||typeof k=="number")return f=f.get(g)||null,s(d,f,""+k,I);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case ai:return f=f.get(k.key===null?g:k.key)||null,l(d,f,k,I);case Pn:return f=f.get(k.key===null?g:k.key)||null,c(d,f,k,I);case Ot:var T=k._init;return w(f,d,g,T(k._payload),I)}if(br(k)||lr(k))return f=f.get(g)||null,m(d,f,k,I,null);yi(d,k)}return null}function S(f,d,g,k){for(var I=null,T=null,N=d,R=d=0,Y=null;N!==null&&R<g.length;R++){N.index>R?(Y=N,N=null):Y=N.sibling;var O=p(f,N,g[R],k);if(O===null){N===null&&(N=Y);break}e&&N&&O.alternate===null&&t(f,N),d=o(O,d,R),T===null?I=O:T.sibling=O,T=O,N=Y}if(R===g.length)return n(f,N),ie&&cn(f,R),I;if(N===null){for(;R<g.length;R++)N=u(f,g[R],k),N!==null&&(d=o(N,d,R),T===null?I=N:T.sibling=N,T=N);return ie&&cn(f,R),I}for(N=r(f,N);R<g.length;R++)Y=w(N,f,R,g[R],k),Y!==null&&(e&&Y.alternate!==null&&N.delete(Y.key===null?R:Y.key),d=o(Y,d,R),T===null?I=Y:T.sibling=Y,T=Y);return e&&N.forEach(function(Ae){return t(f,Ae)}),ie&&cn(f,R),I}function x(f,d,g,k){var I=lr(g);if(typeof I!="function")throw Error(A(150));if(g=I.call(g),g==null)throw Error(A(151));for(var T=I=null,N=d,R=d=0,Y=null,O=g.next();N!==null&&!O.done;R++,O=g.next()){N.index>R?(Y=N,N=null):Y=N.sibling;var Ae=p(f,N,O.value,k);if(Ae===null){N===null&&(N=Y);break}e&&N&&Ae.alternate===null&&t(f,N),d=o(Ae,d,R),T===null?I=Ae:T.sibling=Ae,T=Ae,N=Y}if(O.done)return n(f,N),ie&&cn(f,R),I;if(N===null){for(;!O.done;R++,O=g.next())O=u(f,O.value,k),O!==null&&(d=o(O,d,R),T===null?I=O:T.sibling=O,T=O);return ie&&cn(f,R),I}for(N=r(f,N);!O.done;R++,O=g.next())O=w(N,f,R,O.value,k),O!==null&&(e&&O.alternate!==null&&N.delete(O.key===null?R:O.key),d=o(O,d,R),T===null?I=O:T.sibling=O,T=O);return e&&N.forEach(function(Le){return t(f,Le)}),ie&&cn(f,R),I}function M(f,d,g,k){if(typeof g=="object"&&g!==null&&g.type===Nn&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case ai:e:{for(var I=g.key,T=d;T!==null;){if(T.key===I){if(I=g.type,I===Nn){if(T.tag===7){n(f,T.sibling),d=i(T,g.props.children),d.return=f,f=d;break e}}else if(T.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===Ot&&Kl(I)===T.type){n(f,T.sibling),d=i(T,g.props),d.ref=mr(f,T,g),d.return=f,f=d;break e}n(f,T);break}else t(f,T);T=T.sibling}g.type===Nn?(d=gn(g.props.children,f.mode,k,g.key),d.return=f,f=d):(k=$i(g.type,g.key,g.props,null,f.mode,k),k.ref=mr(f,d,g),k.return=f,f=k)}return a(f);case Pn:e:{for(T=g.key;d!==null;){if(d.key===T)if(d.tag===4&&d.stateNode.containerInfo===g.containerInfo&&d.stateNode.implementation===g.implementation){n(f,d.sibling),d=i(d,g.children||[]),d.return=f,f=d;break e}else{n(f,d);break}else t(f,d);d=d.sibling}d=ea(g,f.mode,k),d.return=f,f=d}return a(f);case Ot:return T=g._init,M(f,d,T(g._payload),k)}if(br(g))return S(f,d,g,k);if(lr(g))return x(f,d,g,k);yi(f,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,d!==null&&d.tag===6?(n(f,d.sibling),d=i(d,g),d.return=f,f=d):(n(f,d),d=Go(g,f.mode,k),d.return=f,f=d),a(f)):n(f,d)}return M}var Zn=Gu(!0),ed=Gu(!1),Xi=nn(null),Qi=null,Fn=null,Ss=null;function Cs(){Ss=Fn=Qi=null}function As(e){var t=Xi.current;ne(Xi),e._currentValue=t}function La(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Kn(e,t){Qi=e,Ss=Fn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Be=!0),e.firstContext=null)}function it(e){var t=e._currentValue;if(Ss!==e)if(e={context:e,memoizedValue:t,next:null},Fn===null){if(Qi===null)throw Error(A(308));Fn=e,Qi.dependencies={lanes:0,firstContext:e}}else Fn=Fn.next=e;return t}var mn=null;function Es(e){mn===null?mn=[e]:mn.push(e)}function td(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Es(t)):(n.next=i.next,i.next=n),t.interleaved=n,Nt(e,r)}function Nt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ft=!1;function Is(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function nd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Tt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Qt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,H&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Nt(e,n)}return i=r.interleaved,i===null?(t.next=t,Es(r)):(t.next=i.next,i.next=t),r.interleaved=t,Nt(e,n)}function Ei(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ms(e,n)}}function Xl(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Yi(e,t,n,r){var i=e.updateQueue;Ft=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var l=s,c=l.next;l.next=null,a===null?o=c:a.next=c,a=l;var m=e.alternate;m!==null&&(m=m.updateQueue,s=m.lastBaseUpdate,s!==a&&(s===null?m.firstBaseUpdate=c:s.next=c,m.lastBaseUpdate=l))}if(o!==null){var u=i.baseState;a=0,m=c=l=null,s=o;do{var p=s.lane,w=s.eventTime;if((r&p)===p){m!==null&&(m=m.next={eventTime:w,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var S=e,x=s;switch(p=t,w=n,x.tag){case 1:if(S=x.payload,typeof S=="function"){u=S.call(w,u,p);break e}u=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=x.payload,p=typeof S=="function"?S.call(w,u,p):S,p==null)break e;u=se({},u,p);break e;case 2:Ft=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[s]:p.push(s))}else w={eventTime:w,lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},m===null?(c=m=w,l=u):m=m.next=w,a|=p;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);if(m===null&&(l=u),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=m,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);bn|=a,e.lanes=a,e.memoizedState=u}}function Ql(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(A(191,i));i.call(r)}}}var ti={},_t=nn(ti),Hr=nn(ti),Wr=nn(ti);function fn(e){if(e===ti)throw Error(A(174));return e}function Ts(e,t){switch(ee(Wr,t),ee(Hr,e),ee(_t,ti),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ga(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ga(t,e)}ne(_t),ee(_t,t)}function Gn(){ne(_t),ne(Hr),ne(Wr)}function rd(e){fn(Wr.current);var t=fn(_t.current),n=ga(t,e.type);t!==n&&(ee(Hr,e),ee(_t,n))}function Rs(e){Hr.current===e&&(ne(_t),ne(Hr))}var oe=nn(0);function Ji(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ko=[];function Ps(){for(var e=0;e<Ko.length;e++)Ko[e]._workInProgressVersionPrimary=null;Ko.length=0}var Ii=jt.ReactCurrentDispatcher,Xo=jt.ReactCurrentBatchConfig,wn=0,ae=null,fe=null,ve=null,Zi=!1,Tr=!1,Kr=0,hf=0;function Ee(){throw Error(A(321))}function Ns(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ht(e[n],t[n]))return!1;return!0}function $s(e,t,n,r,i,o){if(wn=o,ae=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ii.current=e===null||e.memoizedState===null?wf:bf,e=n(r,i),Tr){o=0;do{if(Tr=!1,Kr=0,25<=o)throw Error(A(301));o+=1,ve=fe=null,t.updateQueue=null,Ii.current=xf,e=n(r,i)}while(Tr)}if(Ii.current=Gi,t=fe!==null&&fe.next!==null,wn=0,ve=fe=ae=null,Zi=!1,t)throw Error(A(300));return e}function js(){var e=Kr!==0;return Kr=0,e}function wt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ve===null?ae.memoizedState=ve=e:ve=ve.next=e,ve}function ot(){if(fe===null){var e=ae.alternate;e=e!==null?e.memoizedState:null}else e=fe.next;var t=ve===null?ae.memoizedState:ve.next;if(t!==null)ve=t,fe=e;else{if(e===null)throw Error(A(310));fe=e,e={memoizedState:fe.memoizedState,baseState:fe.baseState,baseQueue:fe.baseQueue,queue:fe.queue,next:null},ve===null?ae.memoizedState=ve=e:ve=ve.next=e}return ve}function Xr(e,t){return typeof t=="function"?t(e):t}function Qo(e){var t=ot(),n=t.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=e;var r=fe,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var s=a=null,l=null,c=o;do{var m=c.lane;if((wn&m)===m)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var u={lane:m,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(s=l=u,a=r):l=l.next=u,ae.lanes|=m,bn|=m}c=c.next}while(c!==null&&c!==o);l===null?a=r:l.next=s,ht(r,t.memoizedState)||(Be=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,ae.lanes|=o,bn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Yo(e){var t=ot(),n=t.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);ht(o,t.memoizedState)||(Be=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function id(){}function od(e,t){var n=ae,r=ot(),i=t(),o=!ht(r.memoizedState,i);if(o&&(r.memoizedState=i,Be=!0),r=r.queue,Ms(ld.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ve!==null&&ve.memoizedState.tag&1){if(n.flags|=2048,Qr(9,sd.bind(null,n,r,i,t),void 0,null),we===null)throw Error(A(349));wn&30||ad(n,t,i)}return i}function ad(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ae.updateQueue,t===null?(t={lastEffect:null,stores:null},ae.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function sd(e,t,n,r){t.value=n,t.getSnapshot=r,cd(t)&&ud(e)}function ld(e,t,n){return n(function(){cd(t)&&ud(e)})}function cd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ht(e,n)}catch{return!0}}function ud(e){var t=Nt(e,1);t!==null&&mt(t,e,1,-1)}function Yl(e){var t=wt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Xr,lastRenderedState:e},t.queue=e,e=e.dispatch=vf.bind(null,ae,e),[t.memoizedState,e]}function Qr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ae.updateQueue,t===null?(t={lastEffect:null,stores:null},ae.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function dd(){return ot().memoizedState}function Ti(e,t,n,r){var i=wt();ae.flags|=e,i.memoizedState=Qr(1|t,n,void 0,r===void 0?null:r)}function fo(e,t,n,r){var i=ot();r=r===void 0?null:r;var o=void 0;if(fe!==null){var a=fe.memoizedState;if(o=a.destroy,r!==null&&Ns(r,a.deps)){i.memoizedState=Qr(t,n,o,r);return}}ae.flags|=e,i.memoizedState=Qr(1|t,n,o,r)}function Jl(e,t){return Ti(8390656,8,e,t)}function Ms(e,t){return fo(2048,8,e,t)}function pd(e,t){return fo(4,2,e,t)}function md(e,t){return fo(4,4,e,t)}function fd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function hd(e,t,n){return n=n!=null?n.concat([e]):null,fo(4,4,fd.bind(null,t,e),n)}function Ls(){}function gd(e,t){var n=ot();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ns(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function yd(e,t){var n=ot();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ns(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function vd(e,t,n){return wn&21?(ht(n,t)||(n=_u(),ae.lanes|=n,bn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Be=!0),e.memoizedState=n)}function gf(e,t){var n=J;J=n!==0&&4>n?n:4,e(!0);var r=Xo.transition;Xo.transition={};try{e(!1),t()}finally{J=n,Xo.transition=r}}function wd(){return ot().memoizedState}function yf(e,t,n){var r=Jt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},bd(e))xd(t,n);else if(n=td(e,t,n,r),n!==null){var i=$e();mt(n,e,r,i),kd(n,t,r)}}function vf(e,t,n){var r=Jt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(bd(e))xd(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,s=o(a,n);if(i.hasEagerState=!0,i.eagerState=s,ht(s,a)){var l=t.interleaved;l===null?(i.next=i,Es(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=td(e,t,i,r),n!==null&&(i=$e(),mt(n,e,r,i),kd(n,t,r))}}function bd(e){var t=e.alternate;return e===ae||t!==null&&t===ae}function xd(e,t){Tr=Zi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function kd(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ms(e,n)}}var Gi={readContext:it,useCallback:Ee,useContext:Ee,useEffect:Ee,useImperativeHandle:Ee,useInsertionEffect:Ee,useLayoutEffect:Ee,useMemo:Ee,useReducer:Ee,useRef:Ee,useState:Ee,useDebugValue:Ee,useDeferredValue:Ee,useTransition:Ee,useMutableSource:Ee,useSyncExternalStore:Ee,useId:Ee,unstable_isNewReconciler:!1},wf={readContext:it,useCallback:function(e,t){return wt().memoizedState=[e,t===void 0?null:t],e},useContext:it,useEffect:Jl,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ti(4194308,4,fd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ti(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ti(4,2,e,t)},useMemo:function(e,t){var n=wt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=wt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=yf.bind(null,ae,e),[r.memoizedState,e]},useRef:function(e){var t=wt();return e={current:e},t.memoizedState=e},useState:Yl,useDebugValue:Ls,useDeferredValue:function(e){return wt().memoizedState=e},useTransition:function(){var e=Yl(!1),t=e[0];return e=gf.bind(null,e[1]),wt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ae,i=wt();if(ie){if(n===void 0)throw Error(A(407));n=n()}else{if(n=t(),we===null)throw Error(A(349));wn&30||ad(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Jl(ld.bind(null,r,o,e),[e]),r.flags|=2048,Qr(9,sd.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=wt(),t=we.identifierPrefix;if(ie){var n=It,r=Et;n=(r&~(1<<32-pt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Kr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=hf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},bf={readContext:it,useCallback:gd,useContext:it,useEffect:Ms,useImperativeHandle:hd,useInsertionEffect:pd,useLayoutEffect:md,useMemo:yd,useReducer:Qo,useRef:dd,useState:function(){return Qo(Xr)},useDebugValue:Ls,useDeferredValue:function(e){var t=ot();return vd(t,fe.memoizedState,e)},useTransition:function(){var e=Qo(Xr)[0],t=ot().memoizedState;return[e,t]},useMutableSource:id,useSyncExternalStore:od,useId:wd,unstable_isNewReconciler:!1},xf={readContext:it,useCallback:gd,useContext:it,useEffect:Ms,useImperativeHandle:hd,useInsertionEffect:pd,useLayoutEffect:md,useMemo:yd,useReducer:Yo,useRef:dd,useState:function(){return Yo(Xr)},useDebugValue:Ls,useDeferredValue:function(e){var t=ot();return fe===null?t.memoizedState=e:vd(t,fe.memoizedState,e)},useTransition:function(){var e=Yo(Xr)[0],t=ot().memoizedState;return[e,t]},useMutableSource:id,useSyncExternalStore:od,useId:wd,unstable_isNewReconciler:!1};function lt(e,t){if(e&&e.defaultProps){t=se({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Da(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:se({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ho={isMounted:function(e){return(e=e._reactInternals)?_n(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=$e(),i=Jt(e),o=Tt(r,i);o.payload=t,n!=null&&(o.callback=n),t=Qt(e,o,i),t!==null&&(mt(t,e,i,r),Ei(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=$e(),i=Jt(e),o=Tt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Qt(e,o,i),t!==null&&(mt(t,e,i,r),Ei(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=$e(),r=Jt(e),i=Tt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Qt(e,i,r),t!==null&&(mt(t,e,r,n),Ei(t,e,r))}};function Zl(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!Br(n,r)||!Br(i,o):!0}function _d(e,t,n){var r=!1,i=en,o=t.contextType;return typeof o=="object"&&o!==null?o=it(o):(i=ze(t)?yn:Re.current,r=t.contextTypes,o=(r=r!=null)?Yn(e,i):en),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ho,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Gl(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ho.enqueueReplaceState(t,t.state,null)}function Ua(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Is(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=it(o):(o=ze(t)?yn:Re.current,i.context=Yn(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Da(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ho.enqueueReplaceState(i,i.state,null),Yi(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function er(e,t){try{var n="",r=t;do n+=Xp(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Jo(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Oa(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var kf=typeof WeakMap=="function"?WeakMap:Map;function Sd(e,t,n){n=Tt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){to||(to=!0,Qa=r),Oa(e,t)},n}function Cd(e,t,n){n=Tt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Oa(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Oa(e,t),typeof r!="function"&&(Yt===null?Yt=new Set([this]):Yt.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function ec(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new kf;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Lf.bind(null,e,t,n),t.then(e,e))}function tc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function nc(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Tt(-1,1),t.tag=2,Qt(n,t,1))),n.lanes|=1),e)}var _f=jt.ReactCurrentOwner,Be=!1;function Pe(e,t,n,r){t.child=e===null?ed(t,null,n,r):Zn(t,e.child,n,r)}function rc(e,t,n,r,i){n=n.render;var o=t.ref;return Kn(t,i),r=$s(e,t,n,r,o,i),n=js(),e!==null&&!Be?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,$t(e,t,i)):(ie&&n&&xs(t),t.flags|=1,Pe(e,t,r,i),t.child)}function ic(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!qs(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Ad(e,t,o,r,i)):(e=$i(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:Br,n(a,r)&&e.ref===t.ref)return $t(e,t,i)}return t.flags|=1,e=Zt(o,r),e.ref=t.ref,e.return=t,t.child=e}function Ad(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Br(o,r)&&e.ref===t.ref)if(Be=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Be=!0);else return t.lanes=e.lanes,$t(e,t,i)}return Fa(e,t,n,r,i)}function Ed(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ee(Vn,Ke),Ke|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ee(Vn,Ke),Ke|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,ee(Vn,Ke),Ke|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,ee(Vn,Ke),Ke|=r;return Pe(e,t,i,n),t.child}function Id(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Fa(e,t,n,r,i){var o=ze(n)?yn:Re.current;return o=Yn(t,o),Kn(t,i),n=$s(e,t,n,r,o,i),r=js(),e!==null&&!Be?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,$t(e,t,i)):(ie&&r&&xs(t),t.flags|=1,Pe(e,t,n,i),t.child)}function oc(e,t,n,r,i){if(ze(n)){var o=!0;Hi(t)}else o=!1;if(Kn(t,i),t.stateNode===null)Ri(e,t),_d(t,n,r),Ua(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=it(c):(c=ze(n)?yn:Re.current,c=Yn(t,c));var m=n.getDerivedStateFromProps,u=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function";u||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||l!==c)&&Gl(t,a,r,c),Ft=!1;var p=t.memoizedState;a.state=p,Yi(t,r,a,i),l=t.memoizedState,s!==r||p!==l||Ve.current||Ft?(typeof m=="function"&&(Da(t,n,m,r),l=t.memoizedState),(s=Ft||Zl(t,n,s,r,p,l,c))?(u||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=c,r=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,nd(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:lt(t.type,s),a.props=c,u=t.pendingProps,p=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=it(l):(l=ze(n)?yn:Re.current,l=Yn(t,l));var w=n.getDerivedStateFromProps;(m=typeof w=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==u||p!==l)&&Gl(t,a,r,l),Ft=!1,p=t.memoizedState,a.state=p,Yi(t,r,a,i);var S=t.memoizedState;s!==u||p!==S||Ve.current||Ft?(typeof w=="function"&&(Da(t,n,w,r),S=t.memoizedState),(c=Ft||Zl(t,n,c,r,p,S,l)||!1)?(m||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,S,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,S,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=S),a.props=r,a.state=S,a.context=l,r=c):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return Ba(e,t,n,r,o,i)}function Ba(e,t,n,r,i,o){Id(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&ql(t,n,!1),$t(e,t,o);r=t.stateNode,_f.current=t;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Zn(t,e.child,null,o),t.child=Zn(t,null,s,o)):Pe(e,t,s,o),t.memoizedState=r.state,i&&ql(t,n,!0),t.child}function Td(e){var t=e.stateNode;t.pendingContext?zl(e,t.pendingContext,t.pendingContext!==t.context):t.context&&zl(e,t.context,!1),Ts(e,t.containerInfo)}function ac(e,t,n,r,i){return Jn(),_s(i),t.flags|=256,Pe(e,t,n,r),t.child}var Va={dehydrated:null,treeContext:null,retryLane:0};function za(e){return{baseLanes:e,cachePool:null,transitions:null}}function Rd(e,t,n){var r=t.pendingProps,i=oe.current,o=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ee(oe,i&1),e===null)return Ma(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=vo(a,r,0,null),e=gn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=za(n),t.memoizedState=Va,e):Ds(t,a));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return Sf(e,t,a,r,s,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,s=i.sibling;var l={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Zt(i,l),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=Zt(s,o):(o=gn(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?za(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=Va,r}return o=e.child,e=o.sibling,r=Zt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ds(e,t){return t=vo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function vi(e,t,n,r){return r!==null&&_s(r),Zn(t,e.child,null,n),e=Ds(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Sf(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=Jo(Error(A(422))),vi(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=vo({mode:"visible",children:r.children},i,0,null),o=gn(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Zn(t,e.child,null,a),t.child.memoizedState=za(a),t.memoizedState=Va,o);if(!(t.mode&1))return vi(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(A(419)),r=Jo(o,r,void 0),vi(e,t,a,r)}if(s=(a&e.childLanes)!==0,Be||s){if(r=we,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Nt(e,i),mt(r,e,i,-1))}return zs(),r=Jo(Error(A(421))),vi(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Df.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Xe=Xt(i.nextSibling),Qe=t,ie=!0,dt=null,e!==null&&(et[tt++]=Et,et[tt++]=It,et[tt++]=vn,Et=e.id,It=e.overflow,vn=t),t=Ds(t,r.children),t.flags|=4096,t)}function sc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),La(e.return,t,n)}function Zo(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Pd(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Pe(e,t,r.children,n),r=oe.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&sc(e,n,t);else if(e.tag===19)sc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ee(oe,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Ji(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Zo(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Ji(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Zo(t,!0,n,null,o);break;case"together":Zo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ri(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function $t(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),bn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(A(153));if(t.child!==null){for(e=t.child,n=Zt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Zt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Cf(e,t,n){switch(t.tag){case 3:Td(t),Jn();break;case 5:rd(t);break;case 1:ze(t.type)&&Hi(t);break;case 4:Ts(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ee(Xi,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ee(oe,oe.current&1),t.flags|=128,null):n&t.child.childLanes?Rd(e,t,n):(ee(oe,oe.current&1),e=$t(e,t,n),e!==null?e.sibling:null);ee(oe,oe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Pd(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ee(oe,oe.current),r)break;return null;case 22:case 23:return t.lanes=0,Ed(e,t,n)}return $t(e,t,n)}var Nd,qa,$d,jd;Nd=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};qa=function(){};$d=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,fn(_t.current);var o=null;switch(n){case"input":i=pa(e,i),r=pa(e,r),o=[];break;case"select":i=se({},i,{value:void 0}),r=se({},r,{value:void 0}),o=[];break;case"textarea":i=ha(e,i),r=ha(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=zi)}ya(n,r);var a;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var s=i[c];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(jr.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var l=r[c];if(s=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==s&&(l!=null||s!=null))if(c==="style")if(s){for(a in s)!s.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&s[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(o||(o=[]),o.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(o=o||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(jr.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&te("scroll",e),o||s===l||(o=[])):(o=o||[]).push(c,l))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};jd=function(e,t,n,r){n!==r&&(t.flags|=4)};function fr(e,t){if(!ie)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ie(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Af(e,t,n){var r=t.pendingProps;switch(ks(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ie(t),null;case 1:return ze(t.type)&&qi(),Ie(t),null;case 3:return r=t.stateNode,Gn(),ne(Ve),ne(Re),Ps(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(gi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,dt!==null&&(Za(dt),dt=null))),qa(e,t),Ie(t),null;case 5:Rs(t);var i=fn(Wr.current);if(n=t.type,e!==null&&t.stateNode!=null)$d(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(A(166));return Ie(t),null}if(e=fn(_t.current),gi(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[bt]=t,r[qr]=o,e=(t.mode&1)!==0,n){case"dialog":te("cancel",r),te("close",r);break;case"iframe":case"object":case"embed":te("load",r);break;case"video":case"audio":for(i=0;i<kr.length;i++)te(kr[i],r);break;case"source":te("error",r);break;case"img":case"image":case"link":te("error",r),te("load",r);break;case"details":te("toggle",r);break;case"input":gl(r,o),te("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},te("invalid",r);break;case"textarea":vl(r,o),te("invalid",r)}ya(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var s=o[a];a==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&hi(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&hi(r.textContent,s,e),i=["children",""+s]):jr.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&te("scroll",r)}switch(n){case"input":si(r),yl(r,o,!0);break;case"textarea":si(r),wl(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=zi)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=lu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[bt]=t,e[qr]=r,Nd(e,t,!1,!1),t.stateNode=e;e:{switch(a=va(n,r),n){case"dialog":te("cancel",e),te("close",e),i=r;break;case"iframe":case"object":case"embed":te("load",e),i=r;break;case"video":case"audio":for(i=0;i<kr.length;i++)te(kr[i],e);i=r;break;case"source":te("error",e),i=r;break;case"img":case"image":case"link":te("error",e),te("load",e),i=r;break;case"details":te("toggle",e),i=r;break;case"input":gl(e,r),i=pa(e,r),te("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=se({},r,{value:void 0}),te("invalid",e);break;case"textarea":vl(e,r),i=ha(e,r),te("invalid",e);break;default:i=r}ya(n,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="style"?du(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&cu(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Mr(e,l):typeof l=="number"&&Mr(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(jr.hasOwnProperty(o)?l!=null&&o==="onScroll"&&te("scroll",e):l!=null&&ss(e,o,l,a))}switch(n){case"input":si(e),yl(e,r,!1);break;case"textarea":si(e),wl(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Gt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?zn(e,!!r.multiple,o,!1):r.defaultValue!=null&&zn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=zi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ie(t),null;case 6:if(e&&t.stateNode!=null)jd(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(A(166));if(n=fn(Wr.current),fn(_t.current),gi(t)){if(r=t.stateNode,n=t.memoizedProps,r[bt]=t,(o=r.nodeValue!==n)&&(e=Qe,e!==null))switch(e.tag){case 3:hi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&hi(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[bt]=t,t.stateNode=r}return Ie(t),null;case 13:if(ne(oe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ie&&Xe!==null&&t.mode&1&&!(t.flags&128))Zu(),Jn(),t.flags|=98560,o=!1;else if(o=gi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(A(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(A(317));o[bt]=t}else Jn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ie(t),o=!1}else dt!==null&&(Za(dt),dt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||oe.current&1?ge===0&&(ge=3):zs())),t.updateQueue!==null&&(t.flags|=4),Ie(t),null);case 4:return Gn(),qa(e,t),e===null&&Vr(t.stateNode.containerInfo),Ie(t),null;case 10:return As(t.type._context),Ie(t),null;case 17:return ze(t.type)&&qi(),Ie(t),null;case 19:if(ne(oe),o=t.memoizedState,o===null)return Ie(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)fr(o,!1);else{if(ge!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Ji(e),a!==null){for(t.flags|=128,fr(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ee(oe,oe.current&1|2),t.child}e=e.sibling}o.tail!==null&&de()>tr&&(t.flags|=128,r=!0,fr(o,!1),t.lanes=4194304)}else{if(!r)if(e=Ji(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),fr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!ie)return Ie(t),null}else 2*de()-o.renderingStartTime>tr&&n!==1073741824&&(t.flags|=128,r=!0,fr(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=de(),t.sibling=null,n=oe.current,ee(oe,r?n&1|2:n&1),t):(Ie(t),null);case 22:case 23:return Vs(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ke&1073741824&&(Ie(t),t.subtreeFlags&6&&(t.flags|=8192)):Ie(t),null;case 24:return null;case 25:return null}throw Error(A(156,t.tag))}function Ef(e,t){switch(ks(t),t.tag){case 1:return ze(t.type)&&qi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Gn(),ne(Ve),ne(Re),Ps(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Rs(t),null;case 13:if(ne(oe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(A(340));Jn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ne(oe),null;case 4:return Gn(),null;case 10:return As(t.type._context),null;case 22:case 23:return Vs(),null;case 24:return null;default:return null}}var wi=!1,Te=!1,If=typeof WeakSet=="function"?WeakSet:Set,P=null;function Bn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ce(e,t,r)}else n.current=null}function Ha(e,t,n){try{n()}catch(r){ce(e,t,r)}}var lc=!1;function Tf(e,t){if(Ia=Fi,e=Ou(),bs(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,s=-1,l=-1,c=0,m=0,u=e,p=null;t:for(;;){for(var w;u!==n||i!==0&&u.nodeType!==3||(s=a+i),u!==o||r!==0&&u.nodeType!==3||(l=a+r),u.nodeType===3&&(a+=u.nodeValue.length),(w=u.firstChild)!==null;)p=u,u=w;for(;;){if(u===e)break t;if(p===n&&++c===i&&(s=a),p===o&&++m===r&&(l=a),(w=u.nextSibling)!==null)break;u=p,p=u.parentNode}u=w}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ta={focusedElem:e,selectionRange:n},Fi=!1,P=t;P!==null;)if(t=P,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,P=e;else for(;P!==null;){t=P;try{var S=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var x=S.memoizedProps,M=S.memoizedState,f=t.stateNode,d=f.getSnapshotBeforeUpdate(t.elementType===t.type?x:lt(t.type,x),M);f.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(A(163))}}catch(k){ce(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,P=e;break}P=t.return}return S=lc,lc=!1,S}function Rr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Ha(t,n,o)}i=i.next}while(i!==r)}}function go(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Wa(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Md(e){var t=e.alternate;t!==null&&(e.alternate=null,Md(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[bt],delete t[qr],delete t[Na],delete t[df],delete t[pf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ld(e){return e.tag===5||e.tag===3||e.tag===4}function cc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ld(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ka(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=zi));else if(r!==4&&(e=e.child,e!==null))for(Ka(e,t,n),e=e.sibling;e!==null;)Ka(e,t,n),e=e.sibling}function Xa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Xa(e,t,n),e=e.sibling;e!==null;)Xa(e,t,n),e=e.sibling}var xe=null,ct=!1;function Dt(e,t,n){for(n=n.child;n!==null;)Dd(e,t,n),n=n.sibling}function Dd(e,t,n){if(kt&&typeof kt.onCommitFiberUnmount=="function")try{kt.onCommitFiberUnmount(so,n)}catch{}switch(n.tag){case 5:Te||Bn(n,t);case 6:var r=xe,i=ct;xe=null,Dt(e,t,n),xe=r,ct=i,xe!==null&&(ct?(e=xe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):xe.removeChild(n.stateNode));break;case 18:xe!==null&&(ct?(e=xe,n=n.stateNode,e.nodeType===8?Ho(e.parentNode,n):e.nodeType===1&&Ho(e,n),Or(e)):Ho(xe,n.stateNode));break;case 4:r=xe,i=ct,xe=n.stateNode.containerInfo,ct=!0,Dt(e,t,n),xe=r,ct=i;break;case 0:case 11:case 14:case 15:if(!Te&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&Ha(n,t,a),i=i.next}while(i!==r)}Dt(e,t,n);break;case 1:if(!Te&&(Bn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){ce(n,t,s)}Dt(e,t,n);break;case 21:Dt(e,t,n);break;case 22:n.mode&1?(Te=(r=Te)||n.memoizedState!==null,Dt(e,t,n),Te=r):Dt(e,t,n);break;default:Dt(e,t,n)}}function uc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new If),t.forEach(function(r){var i=Uf.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function st(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:xe=s.stateNode,ct=!1;break e;case 3:xe=s.stateNode.containerInfo,ct=!0;break e;case 4:xe=s.stateNode.containerInfo,ct=!0;break e}s=s.return}if(xe===null)throw Error(A(160));Dd(o,a,i),xe=null,ct=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){ce(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Ud(t,e),t=t.sibling}function Ud(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(st(t,e),vt(e),r&4){try{Rr(3,e,e.return),go(3,e)}catch(x){ce(e,e.return,x)}try{Rr(5,e,e.return)}catch(x){ce(e,e.return,x)}}break;case 1:st(t,e),vt(e),r&512&&n!==null&&Bn(n,n.return);break;case 5:if(st(t,e),vt(e),r&512&&n!==null&&Bn(n,n.return),e.flags&32){var i=e.stateNode;try{Mr(i,"")}catch(x){ce(e,e.return,x)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&au(i,o),va(s,a);var c=va(s,o);for(a=0;a<l.length;a+=2){var m=l[a],u=l[a+1];m==="style"?du(i,u):m==="dangerouslySetInnerHTML"?cu(i,u):m==="children"?Mr(i,u):ss(i,m,u,c)}switch(s){case"input":ma(i,o);break;case"textarea":su(i,o);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var w=o.value;w!=null?zn(i,!!o.multiple,w,!1):p!==!!o.multiple&&(o.defaultValue!=null?zn(i,!!o.multiple,o.defaultValue,!0):zn(i,!!o.multiple,o.multiple?[]:"",!1))}i[qr]=o}catch(x){ce(e,e.return,x)}}break;case 6:if(st(t,e),vt(e),r&4){if(e.stateNode===null)throw Error(A(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(x){ce(e,e.return,x)}}break;case 3:if(st(t,e),vt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Or(t.containerInfo)}catch(x){ce(e,e.return,x)}break;case 4:st(t,e),vt(e);break;case 13:st(t,e),vt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Fs=de())),r&4&&uc(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(Te=(c=Te)||m,st(t,e),Te=c):st(t,e),vt(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!m&&e.mode&1)for(P=e,m=e.child;m!==null;){for(u=P=m;P!==null;){switch(p=P,w=p.child,p.tag){case 0:case 11:case 14:case 15:Rr(4,p,p.return);break;case 1:Bn(p,p.return);var S=p.stateNode;if(typeof S.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,S.props=t.memoizedProps,S.state=t.memoizedState,S.componentWillUnmount()}catch(x){ce(r,n,x)}}break;case 5:Bn(p,p.return);break;case 22:if(p.memoizedState!==null){pc(u);continue}}w!==null?(w.return=p,P=w):pc(u)}m=m.sibling}e:for(m=null,u=e;;){if(u.tag===5){if(m===null){m=u;try{i=u.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=u.stateNode,l=u.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=uu("display",a))}catch(x){ce(e,e.return,x)}}}else if(u.tag===6){if(m===null)try{u.stateNode.nodeValue=c?"":u.memoizedProps}catch(x){ce(e,e.return,x)}}else if((u.tag!==22&&u.tag!==23||u.memoizedState===null||u===e)&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===e)break e;for(;u.sibling===null;){if(u.return===null||u.return===e)break e;m===u&&(m=null),u=u.return}m===u&&(m=null),u.sibling.return=u.return,u=u.sibling}}break;case 19:st(t,e),vt(e),r&4&&uc(e);break;case 21:break;default:st(t,e),vt(e)}}function vt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Ld(n)){var r=n;break e}n=n.return}throw Error(A(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Mr(i,""),r.flags&=-33);var o=cc(e);Xa(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,s=cc(e);Ka(e,s,a);break;default:throw Error(A(161))}}catch(l){ce(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Rf(e,t,n){P=e,Od(e)}function Od(e,t,n){for(var r=(e.mode&1)!==0;P!==null;){var i=P,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||wi;if(!a){var s=i.alternate,l=s!==null&&s.memoizedState!==null||Te;s=wi;var c=Te;if(wi=a,(Te=l)&&!c)for(P=i;P!==null;)a=P,l=a.child,a.tag===22&&a.memoizedState!==null?mc(i):l!==null?(l.return=a,P=l):mc(i);for(;o!==null;)P=o,Od(o),o=o.sibling;P=i,wi=s,Te=c}dc(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,P=o):dc(e)}}function dc(e){for(;P!==null;){var t=P;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Te||go(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Te)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:lt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Ql(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ql(t,a,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var m=c.memoizedState;if(m!==null){var u=m.dehydrated;u!==null&&Or(u)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(A(163))}Te||t.flags&512&&Wa(t)}catch(p){ce(t,t.return,p)}}if(t===e){P=null;break}if(n=t.sibling,n!==null){n.return=t.return,P=n;break}P=t.return}}function pc(e){for(;P!==null;){var t=P;if(t===e){P=null;break}var n=t.sibling;if(n!==null){n.return=t.return,P=n;break}P=t.return}}function mc(e){for(;P!==null;){var t=P;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{go(4,t)}catch(l){ce(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){ce(t,i,l)}}var o=t.return;try{Wa(t)}catch(l){ce(t,o,l)}break;case 5:var a=t.return;try{Wa(t)}catch(l){ce(t,a,l)}}}catch(l){ce(t,t.return,l)}if(t===e){P=null;break}var s=t.sibling;if(s!==null){s.return=t.return,P=s;break}P=t.return}}var Pf=Math.ceil,eo=jt.ReactCurrentDispatcher,Us=jt.ReactCurrentOwner,rt=jt.ReactCurrentBatchConfig,H=0,we=null,pe=null,Se=0,Ke=0,Vn=nn(0),ge=0,Yr=null,bn=0,yo=0,Os=0,Pr=null,Fe=null,Fs=0,tr=1/0,Ct=null,to=!1,Qa=null,Yt=null,bi=!1,qt=null,no=0,Nr=0,Ya=null,Pi=-1,Ni=0;function $e(){return H&6?de():Pi!==-1?Pi:Pi=de()}function Jt(e){return e.mode&1?H&2&&Se!==0?Se&-Se:ff.transition!==null?(Ni===0&&(Ni=_u()),Ni):(e=J,e!==0||(e=window.event,e=e===void 0?16:Ru(e.type)),e):1}function mt(e,t,n,r){if(50<Nr)throw Nr=0,Ya=null,Error(A(185));Zr(e,n,r),(!(H&2)||e!==we)&&(e===we&&(!(H&2)&&(yo|=n),ge===4&&Vt(e,Se)),qe(e,r),n===1&&H===0&&!(t.mode&1)&&(tr=de()+500,mo&&rn()))}function qe(e,t){var n=e.callbackNode;mm(e,t);var r=Oi(e,e===we?Se:0);if(r===0)n!==null&&kl(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&kl(n),t===1)e.tag===0?mf(fc.bind(null,e)):Qu(fc.bind(null,e)),cf(function(){!(H&6)&&rn()}),n=null;else{switch(Su(r)){case 1:n=ps;break;case 4:n=xu;break;case 16:n=Ui;break;case 536870912:n=ku;break;default:n=Ui}n=Kd(n,Fd.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Fd(e,t){if(Pi=-1,Ni=0,H&6)throw Error(A(327));var n=e.callbackNode;if(Xn()&&e.callbackNode!==n)return null;var r=Oi(e,e===we?Se:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ro(e,r);else{t=r;var i=H;H|=2;var o=Vd();(we!==e||Se!==t)&&(Ct=null,tr=de()+500,hn(e,t));do try{jf();break}catch(s){Bd(e,s)}while(1);Cs(),eo.current=o,H=i,pe!==null?t=0:(we=null,Se=0,t=ge)}if(t!==0){if(t===2&&(i=_a(e),i!==0&&(r=i,t=Ja(e,i))),t===1)throw n=Yr,hn(e,0),Vt(e,r),qe(e,de()),n;if(t===6)Vt(e,r);else{if(i=e.current.alternate,!(r&30)&&!Nf(i)&&(t=ro(e,r),t===2&&(o=_a(e),o!==0&&(r=o,t=Ja(e,o))),t===1))throw n=Yr,hn(e,0),Vt(e,r),qe(e,de()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(A(345));case 2:un(e,Fe,Ct);break;case 3:if(Vt(e,r),(r&130023424)===r&&(t=Fs+500-de(),10<t)){if(Oi(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){$e(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Pa(un.bind(null,e,Fe,Ct),t);break}un(e,Fe,Ct);break;case 4:if(Vt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-pt(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=de()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Pf(r/1960))-r,10<r){e.timeoutHandle=Pa(un.bind(null,e,Fe,Ct),r);break}un(e,Fe,Ct);break;case 5:un(e,Fe,Ct);break;default:throw Error(A(329))}}}return qe(e,de()),e.callbackNode===n?Fd.bind(null,e):null}function Ja(e,t){var n=Pr;return e.current.memoizedState.isDehydrated&&(hn(e,t).flags|=256),e=ro(e,t),e!==2&&(t=Fe,Fe=n,t!==null&&Za(t)),e}function Za(e){Fe===null?Fe=e:Fe.push.apply(Fe,e)}function Nf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!ht(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Vt(e,t){for(t&=~Os,t&=~yo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-pt(t),r=1<<n;e[n]=-1,t&=~r}}function fc(e){if(H&6)throw Error(A(327));Xn();var t=Oi(e,0);if(!(t&1))return qe(e,de()),null;var n=ro(e,t);if(e.tag!==0&&n===2){var r=_a(e);r!==0&&(t=r,n=Ja(e,r))}if(n===1)throw n=Yr,hn(e,0),Vt(e,t),qe(e,de()),n;if(n===6)throw Error(A(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,un(e,Fe,Ct),qe(e,de()),null}function Bs(e,t){var n=H;H|=1;try{return e(t)}finally{H=n,H===0&&(tr=de()+500,mo&&rn())}}function xn(e){qt!==null&&qt.tag===0&&!(H&6)&&Xn();var t=H;H|=1;var n=rt.transition,r=J;try{if(rt.transition=null,J=1,e)return e()}finally{J=r,rt.transition=n,H=t,!(H&6)&&rn()}}function Vs(){Ke=Vn.current,ne(Vn)}function hn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,lf(n)),pe!==null)for(n=pe.return;n!==null;){var r=n;switch(ks(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&qi();break;case 3:Gn(),ne(Ve),ne(Re),Ps();break;case 5:Rs(r);break;case 4:Gn();break;case 13:ne(oe);break;case 19:ne(oe);break;case 10:As(r.type._context);break;case 22:case 23:Vs()}n=n.return}if(we=e,pe=e=Zt(e.current,null),Se=Ke=t,ge=0,Yr=null,Os=yo=bn=0,Fe=Pr=null,mn!==null){for(t=0;t<mn.length;t++)if(n=mn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}mn=null}return e}function Bd(e,t){do{var n=pe;try{if(Cs(),Ii.current=Gi,Zi){for(var r=ae.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Zi=!1}if(wn=0,ve=fe=ae=null,Tr=!1,Kr=0,Us.current=null,n===null||n.return===null){ge=1,Yr=t,pe=null;break}e:{var o=e,a=n.return,s=n,l=t;if(t=Se,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,m=s,u=m.tag;if(!(m.mode&1)&&(u===0||u===11||u===15)){var p=m.alternate;p?(m.updateQueue=p.updateQueue,m.memoizedState=p.memoizedState,m.lanes=p.lanes):(m.updateQueue=null,m.memoizedState=null)}var w=tc(a);if(w!==null){w.flags&=-257,nc(w,a,s,o,t),w.mode&1&&ec(o,c,t),t=w,l=c;var S=t.updateQueue;if(S===null){var x=new Set;x.add(l),t.updateQueue=x}else S.add(l);break e}else{if(!(t&1)){ec(o,c,t),zs();break e}l=Error(A(426))}}else if(ie&&s.mode&1){var M=tc(a);if(M!==null){!(M.flags&65536)&&(M.flags|=256),nc(M,a,s,o,t),_s(er(l,s));break e}}o=l=er(l,s),ge!==4&&(ge=2),Pr===null?Pr=[o]:Pr.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var f=Sd(o,l,t);Xl(o,f);break e;case 1:s=l;var d=o.type,g=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Yt===null||!Yt.has(g)))){o.flags|=65536,t&=-t,o.lanes|=t;var k=Cd(o,s,t);Xl(o,k);break e}}o=o.return}while(o!==null)}qd(n)}catch(I){t=I,pe===n&&n!==null&&(pe=n=n.return);continue}break}while(1)}function Vd(){var e=eo.current;return eo.current=Gi,e===null?Gi:e}function zs(){(ge===0||ge===3||ge===2)&&(ge=4),we===null||!(bn&268435455)&&!(yo&268435455)||Vt(we,Se)}function ro(e,t){var n=H;H|=2;var r=Vd();(we!==e||Se!==t)&&(Ct=null,hn(e,t));do try{$f();break}catch(i){Bd(e,i)}while(1);if(Cs(),H=n,eo.current=r,pe!==null)throw Error(A(261));return we=null,Se=0,ge}function $f(){for(;pe!==null;)zd(pe)}function jf(){for(;pe!==null&&!im();)zd(pe)}function zd(e){var t=Wd(e.alternate,e,Ke);e.memoizedProps=e.pendingProps,t===null?qd(e):pe=t,Us.current=null}function qd(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Ef(n,t),n!==null){n.flags&=32767,pe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ge=6,pe=null;return}}else if(n=Af(n,t,Ke),n!==null){pe=n;return}if(t=t.sibling,t!==null){pe=t;return}pe=t=e}while(t!==null);ge===0&&(ge=5)}function un(e,t,n){var r=J,i=rt.transition;try{rt.transition=null,J=1,Mf(e,t,n,r)}finally{rt.transition=i,J=r}return null}function Mf(e,t,n,r){do Xn();while(qt!==null);if(H&6)throw Error(A(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(A(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(fm(e,o),e===we&&(pe=we=null,Se=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||bi||(bi=!0,Kd(Ui,function(){return Xn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=rt.transition,rt.transition=null;var a=J;J=1;var s=H;H|=4,Us.current=null,Tf(e,n),Ud(n,e),ef(Ta),Fi=!!Ia,Ta=Ia=null,e.current=n,Rf(n),om(),H=s,J=a,rt.transition=o}else e.current=n;if(bi&&(bi=!1,qt=e,no=i),o=e.pendingLanes,o===0&&(Yt=null),lm(n.stateNode),qe(e,de()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(to)throw to=!1,e=Qa,Qa=null,e;return no&1&&e.tag!==0&&Xn(),o=e.pendingLanes,o&1?e===Ya?Nr++:(Nr=0,Ya=e):Nr=0,rn(),null}function Xn(){if(qt!==null){var e=Su(no),t=rt.transition,n=J;try{if(rt.transition=null,J=16>e?16:e,qt===null)var r=!1;else{if(e=qt,qt=null,no=0,H&6)throw Error(A(331));var i=H;for(H|=4,P=e.current;P!==null;){var o=P,a=o.child;if(P.flags&16){var s=o.deletions;if(s!==null){for(var l=0;l<s.length;l++){var c=s[l];for(P=c;P!==null;){var m=P;switch(m.tag){case 0:case 11:case 15:Rr(8,m,o)}var u=m.child;if(u!==null)u.return=m,P=u;else for(;P!==null;){m=P;var p=m.sibling,w=m.return;if(Md(m),m===c){P=null;break}if(p!==null){p.return=w,P=p;break}P=w}}}var S=o.alternate;if(S!==null){var x=S.child;if(x!==null){S.child=null;do{var M=x.sibling;x.sibling=null,x=M}while(x!==null)}}P=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,P=a;else e:for(;P!==null;){if(o=P,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Rr(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,P=f;break e}P=o.return}}var d=e.current;for(P=d;P!==null;){a=P;var g=a.child;if(a.subtreeFlags&2064&&g!==null)g.return=a,P=g;else e:for(a=d;P!==null;){if(s=P,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:go(9,s)}}catch(I){ce(s,s.return,I)}if(s===a){P=null;break e}var k=s.sibling;if(k!==null){k.return=s.return,P=k;break e}P=s.return}}if(H=i,rn(),kt&&typeof kt.onPostCommitFiberRoot=="function")try{kt.onPostCommitFiberRoot(so,e)}catch{}r=!0}return r}finally{J=n,rt.transition=t}}return!1}function hc(e,t,n){t=er(n,t),t=Sd(e,t,1),e=Qt(e,t,1),t=$e(),e!==null&&(Zr(e,1,t),qe(e,t))}function ce(e,t,n){if(e.tag===3)hc(e,e,n);else for(;t!==null;){if(t.tag===3){hc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Yt===null||!Yt.has(r))){e=er(n,e),e=Cd(t,e,1),t=Qt(t,e,1),e=$e(),t!==null&&(Zr(t,1,e),qe(t,e));break}}t=t.return}}function Lf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=$e(),e.pingedLanes|=e.suspendedLanes&n,we===e&&(Se&n)===n&&(ge===4||ge===3&&(Se&130023424)===Se&&500>de()-Fs?hn(e,0):Os|=n),qe(e,t)}function Hd(e,t){t===0&&(e.mode&1?(t=ui,ui<<=1,!(ui&130023424)&&(ui=4194304)):t=1);var n=$e();e=Nt(e,t),e!==null&&(Zr(e,t,n),qe(e,n))}function Df(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Hd(e,n)}function Uf(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(A(314))}r!==null&&r.delete(t),Hd(e,n)}var Wd;Wd=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ve.current)Be=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Be=!1,Cf(e,t,n);Be=!!(e.flags&131072)}else Be=!1,ie&&t.flags&1048576&&Yu(t,Ki,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ri(e,t),e=t.pendingProps;var i=Yn(t,Re.current);Kn(t,n),i=$s(null,t,r,e,i,n);var o=js();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ze(r)?(o=!0,Hi(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Is(t),i.updater=ho,t.stateNode=i,i._reactInternals=t,Ua(t,r,e,n),t=Ba(null,t,r,!0,o,n)):(t.tag=0,ie&&o&&xs(t),Pe(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ri(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Ff(r),e=lt(r,e),i){case 0:t=Fa(null,t,r,e,n);break e;case 1:t=oc(null,t,r,e,n);break e;case 11:t=rc(null,t,r,e,n);break e;case 14:t=ic(null,t,r,lt(r.type,e),n);break e}throw Error(A(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:lt(r,i),Fa(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:lt(r,i),oc(e,t,r,i,n);case 3:e:{if(Td(t),e===null)throw Error(A(387));r=t.pendingProps,o=t.memoizedState,i=o.element,nd(e,t),Yi(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=er(Error(A(423)),t),t=ac(e,t,r,n,i);break e}else if(r!==i){i=er(Error(A(424)),t),t=ac(e,t,r,n,i);break e}else for(Xe=Xt(t.stateNode.containerInfo.firstChild),Qe=t,ie=!0,dt=null,n=ed(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Jn(),r===i){t=$t(e,t,n);break e}Pe(e,t,r,n)}t=t.child}return t;case 5:return rd(t),e===null&&Ma(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,Ra(r,i)?a=null:o!==null&&Ra(r,o)&&(t.flags|=32),Id(e,t),Pe(e,t,a,n),t.child;case 6:return e===null&&Ma(t),null;case 13:return Rd(e,t,n);case 4:return Ts(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Zn(t,null,r,n):Pe(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:lt(r,i),rc(e,t,r,i,n);case 7:return Pe(e,t,t.pendingProps,n),t.child;case 8:return Pe(e,t,t.pendingProps.children,n),t.child;case 12:return Pe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,ee(Xi,r._currentValue),r._currentValue=a,o!==null)if(ht(o.value,a)){if(o.children===i.children&&!Ve.current){t=$t(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){a=o.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=Tt(-1,n&-n),l.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var m=c.pending;m===null?l.next=l:(l.next=m.next,m.next=l),c.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),La(o.return,n,t),s.lanes|=n;break}l=l.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(A(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),La(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}Pe(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Kn(t,n),i=it(i),r=r(i),t.flags|=1,Pe(e,t,r,n),t.child;case 14:return r=t.type,i=lt(r,t.pendingProps),i=lt(r.type,i),ic(e,t,r,i,n);case 15:return Ad(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:lt(r,i),Ri(e,t),t.tag=1,ze(r)?(e=!0,Hi(t)):e=!1,Kn(t,n),_d(t,r,i),Ua(t,r,i,n),Ba(null,t,r,!0,e,n);case 19:return Pd(e,t,n);case 22:return Ed(e,t,n)}throw Error(A(156,t.tag))};function Kd(e,t){return bu(e,t)}function Of(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function nt(e,t,n,r){return new Of(e,t,n,r)}function qs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ff(e){if(typeof e=="function")return qs(e)?1:0;if(e!=null){if(e=e.$$typeof,e===cs)return 11;if(e===us)return 14}return 2}function Zt(e,t){var n=e.alternate;return n===null?(n=nt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function $i(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")qs(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Nn:return gn(n.children,i,o,t);case ls:a=8,i|=8;break;case la:return e=nt(12,n,t,i|2),e.elementType=la,e.lanes=o,e;case ca:return e=nt(13,n,t,i),e.elementType=ca,e.lanes=o,e;case ua:return e=nt(19,n,t,i),e.elementType=ua,e.lanes=o,e;case ru:return vo(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case tu:a=10;break e;case nu:a=9;break e;case cs:a=11;break e;case us:a=14;break e;case Ot:a=16,r=null;break e}throw Error(A(130,e==null?e:typeof e,""))}return t=nt(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function gn(e,t,n,r){return e=nt(7,e,r,t),e.lanes=n,e}function vo(e,t,n,r){return e=nt(22,e,r,t),e.elementType=ru,e.lanes=n,e.stateNode={isHidden:!1},e}function Go(e,t,n){return e=nt(6,e,null,t),e.lanes=n,e}function ea(e,t,n){return t=nt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Bf(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=jo(0),this.expirationTimes=jo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=jo(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Hs(e,t,n,r,i,o,a,s,l){return e=new Bf(e,t,n,s,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=nt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Is(o),e}function Vf(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Pn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Xd(e){if(!e)return en;e=e._reactInternals;e:{if(_n(e)!==e||e.tag!==1)throw Error(A(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ze(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(A(171))}if(e.tag===1){var n=e.type;if(ze(n))return Xu(e,n,t)}return t}function Qd(e,t,n,r,i,o,a,s,l){return e=Hs(n,r,!0,e,i,o,a,s,l),e.context=Xd(null),n=e.current,r=$e(),i=Jt(n),o=Tt(r,i),o.callback=t??null,Qt(n,o,i),e.current.lanes=i,Zr(e,i,r),qe(e,r),e}function wo(e,t,n,r){var i=t.current,o=$e(),a=Jt(i);return n=Xd(n),t.context===null?t.context=n:t.pendingContext=n,t=Tt(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Qt(i,t,a),e!==null&&(mt(e,i,a,o),Ei(e,i,a)),a}function io(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function gc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ws(e,t){gc(e,t),(e=e.alternate)&&gc(e,t)}function zf(){return null}var Yd=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ks(e){this._internalRoot=e}bo.prototype.render=Ks.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(A(409));wo(e,t,null,null)};bo.prototype.unmount=Ks.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;xn(function(){wo(null,e,null,null)}),t[Pt]=null}};function bo(e){this._internalRoot=e}bo.prototype.unstable_scheduleHydration=function(e){if(e){var t=Eu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Bt.length&&t!==0&&t<Bt[n].priority;n++);Bt.splice(n,0,e),n===0&&Tu(e)}};function Xs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function xo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function yc(){}function qf(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=io(a);o.call(c)}}var a=Qd(t,r,e,0,null,!1,!1,"",yc);return e._reactRootContainer=a,e[Pt]=a.current,Vr(e.nodeType===8?e.parentNode:e),xn(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var c=io(l);s.call(c)}}var l=Hs(e,0,!1,null,null,!1,!1,"",yc);return e._reactRootContainer=l,e[Pt]=l.current,Vr(e.nodeType===8?e.parentNode:e),xn(function(){wo(t,l,n,r)}),l}function ko(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var s=i;i=function(){var l=io(a);s.call(l)}}wo(t,a,e,i)}else a=qf(n,t,e,i,r);return io(a)}Cu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=xr(t.pendingLanes);n!==0&&(ms(t,n|1),qe(t,de()),!(H&6)&&(tr=de()+500,rn()))}break;case 13:xn(function(){var r=Nt(e,1);if(r!==null){var i=$e();mt(r,e,1,i)}}),Ws(e,1)}};fs=function(e){if(e.tag===13){var t=Nt(e,134217728);if(t!==null){var n=$e();mt(t,e,134217728,n)}Ws(e,134217728)}};Au=function(e){if(e.tag===13){var t=Jt(e),n=Nt(e,t);if(n!==null){var r=$e();mt(n,e,t,r)}Ws(e,t)}};Eu=function(){return J};Iu=function(e,t){var n=J;try{return J=e,t()}finally{J=n}};ba=function(e,t,n){switch(t){case"input":if(ma(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=po(r);if(!i)throw Error(A(90));ou(r),ma(r,i)}}}break;case"textarea":su(e,n);break;case"select":t=n.value,t!=null&&zn(e,!!n.multiple,t,!1)}};fu=Bs;hu=xn;var Hf={usingClientEntryPoint:!1,Events:[ei,Ln,po,pu,mu,Bs]},hr={findFiberByHostInstance:pn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Wf={bundleType:hr.bundleType,version:hr.version,rendererPackageName:hr.rendererPackageName,rendererConfig:hr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:jt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=vu(e),e===null?null:e.stateNode},findFiberByHostInstance:hr.findFiberByHostInstance||zf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xi.isDisabled&&xi.supportsFiber)try{so=xi.inject(Wf),kt=xi}catch{}}Je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Hf;Je.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xs(t))throw Error(A(200));return Vf(e,t,null,n)};Je.createRoot=function(e,t){if(!Xs(e))throw Error(A(299));var n=!1,r="",i=Yd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Hs(e,1,!1,null,null,n,!1,r,i),e[Pt]=t.current,Vr(e.nodeType===8?e.parentNode:e),new Ks(t)};Je.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(A(188)):(e=Object.keys(e).join(","),Error(A(268,e)));return e=vu(t),e=e===null?null:e.stateNode,e};Je.flushSync=function(e){return xn(e)};Je.hydrate=function(e,t,n){if(!xo(t))throw Error(A(200));return ko(null,e,t,!0,n)};Je.hydrateRoot=function(e,t,n){if(!Xs(e))throw Error(A(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=Yd;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Qd(t,null,e,1,n??null,i,!1,o,a),e[Pt]=t.current,Vr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new bo(t)};Je.render=function(e,t,n){if(!xo(t))throw Error(A(200));return ko(null,e,t,!1,n)};Je.unmountComponentAtNode=function(e){if(!xo(e))throw Error(A(40));return e._reactRootContainer?(xn(function(){ko(null,null,e,!1,function(){e._reactRootContainer=null,e[Pt]=null})}),!0):!1};Je.unstable_batchedUpdates=Bs;Je.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!xo(n))throw Error(A(200));if(e==null||e._reactInternals===void 0)throw Error(A(38));return ko(e,t,n,!1,r)};Je.version="18.3.1-next-f1338f8080-20240426";function Jd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Jd)}catch(e){console.error(e)}}Jd(),Jc.exports=Je;var Kf=Jc.exports,vc=Kf;aa.createRoot=vc.createRoot,aa.hydrateRoot=vc.hydrateRoot;var Xf={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const Qf=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Yf=(e,t)=>{const n=B.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:o=2,absoluteStrokeWidth:a,children:s,...l},c)=>B.createElement("svg",{ref:c,...Xf,width:i,height:i,stroke:r,strokeWidth:a?Number(o)*24/Number(i):o,className:`lucide lucide-${Qf(e)}`,...l},[...t.map(([m,u])=>B.createElement(m,u)),...(Array.isArray(s)?s:[s])||[]]));return n.displayName=`${e}`,n};var or=Yf;const Jf=or("Check",[["polyline",{points:"20 6 9 17 4 12",key:"10jjfj"}]]),Zf=or("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]),Zd=or("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]),Gf=or("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]),eh=or("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),wc=or("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]),th=()=>h.jsx("div",{className:"flex items-center justify-center h-full",children:h.jsxs("div",{className:"text-center space-y-6",children:[h.jsxs("div",{className:"relative w-12 h-12 mx-auto",children:[h.jsx("div",{className:"absolute inset-0 border border-gray-200 rounded-2xl"}),h.jsx("div",{className:"absolute inset-0 border border-black border-t-transparent rounded-2xl animate-spin"}),h.jsx("div",{className:"absolute inset-4 bg-black rounded-lg animate-pulse opacity-60"})]}),h.jsxs("div",{className:"space-y-3",children:[h.jsx("p",{className:"text-sm font-medium text-black tracking-tight",children:"Crafting Component"}),h.jsxs("div",{className:"flex items-center justify-center space-x-2",children:[h.jsx("div",{className:"w-1.5 h-1.5 bg-black rounded-full animate-bounce"}),h.jsx("div",{className:"w-1.5 h-1.5 bg-black rounded-full animate-bounce [animation-delay:0.15s]"}),h.jsx("div",{className:"w-1.5 h-1.5 bg-black rounded-full animate-bounce [animation-delay:0.3s]"})]})]})]})}),nh=({isResizing:e,onResizeStart:t,resizeRef:n})=>h.jsxs("div",{ref:n,className:`w-px bg-gray-200 hover:bg-black cursor-col-resize transition-all duration-300 relative group ${e?"bg-black w-0.5 shadow-sm":""}`,onMouseDown:t,title:"Drag to resize panels",children:[h.jsxs("div",{className:"absolute inset-y-0 left-1/2 transform -translate-x-1/2 flex flex-col justify-center space-y-1 opacity-0 group-hover:opacity-60 transition-all duration-300",children:[h.jsx("div",{className:"w-0.5 h-3 bg-black rounded-full"}),h.jsx("div",{className:"w-0.5 h-3 bg-black rounded-full"}),h.jsx("div",{className:"w-0.5 h-3 bg-black rounded-full"})]}),h.jsx("div",{className:"absolute inset-y-0 -left-2 -right-2"})]}),rh=({apiKey:e,setApiKey:t,model:n,setModel:r,showApiSettings:i})=>i?h.jsx("div",{className:"px-8 py-6 border-b border-gray-100/50 bg-white/70 backdrop-blur-xl rounded-b-2xl",children:h.jsxs("div",{className:"space-y-4",children:[h.jsxs("div",{className:"flex items-center space-x-2",children:[h.jsx("div",{className:"w-1 h-4 bg-black rounded-full"}),h.jsx("h3",{className:"text-sm font-medium text-black tracking-tight",children:"API Configuration"})]}),h.jsxs("div",{className:"space-y-3",children:[h.jsxs("div",{children:[h.jsx("label",{className:"block text-xs font-medium text-gray-700 mb-2 tracking-wide uppercase",children:"OpenRouter Key"}),h.jsx("input",{type:"password",value:e,onChange:o=>t(o.target.value),placeholder:"sk-or-...",className:"w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-all duration-200 bg-white shadow-sm placeholder:text-gray-400"})]}),h.jsxs("div",{children:[h.jsx("label",{className:"block text-xs font-medium text-gray-700 mb-2 tracking-wide uppercase",children:"Model"}),h.jsx("input",{type:"text",value:n,onChange:o=>r(o.target.value),placeholder:"qwen/qwen3-coder:free",className:"w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-all duration-200 bg-white shadow-sm placeholder:text-gray-400"})]}),h.jsxs("div",{className:"text-xs text-gray-500 leading-relaxed",children:[h.jsxs("p",{className:"mb-2",children:["Get your API key from"," ",h.jsx("a",{href:"https://openrouter.ai",target:"_blank",rel:"noopener noreferrer",className:"text-black hover:underline font-medium",children:"OpenRouter"})]}),h.jsx("p",{children:"Default model is qwen/qwen3-coder:free. You can override it here."})]})]})]})}):null,ih=({currentFramework:e,frameworks:t,onFrameworkChange:n,disabled:r=!1,showIcons:i=!0,compact:o=!1,className:a=""})=>{const[s,l]=B.useState(!1),c=B.useRef(null);B.useEffect(()=>{const p=w=>{c.current&&!c.current.contains(w.target)&&l(!1)};return document.addEventListener("mousedown",p),()=>document.removeEventListener("mousedown",p)},[]),B.useEffect(()=>{const p=w=>{w.key==="Escape"&&l(!1)};return document.addEventListener("keydown",p),()=>document.removeEventListener("keydown",p)},[]);const m=p=>{n(p),l(!1)},u=()=>{r||l(!s)};return h.jsxs("div",{className:`relative ${a}`,ref:c,children:[h.jsxs("button",{type:"button",onClick:u,disabled:r,className:`
          flex items-center justify-between w-full px-3 py-2 text-left bg-white border border-gray-300 rounded-lg shadow-sm
          hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black focus:border-black
          disabled:opacity-50 disabled:cursor-not-allowed
          transition-all duration-200
          ${o?"text-sm":"text-base"}
          ${s?"ring-2 ring-black border-black":""}
        `,"aria-haspopup":"listbox","aria-expanded":s,"aria-label":"Select framework",children:[h.jsxs("div",{className:"flex items-center space-x-2",children:[i&&h.jsx("div",{className:`${o?"w-4 h-4":"w-5 h-5"} flex-shrink-0`,style:{color:e.color},dangerouslySetInnerHTML:{__html:e.icon}}),h.jsx("span",{className:"font-medium truncate",children:o?e.name:e.displayName})]}),h.jsx("svg",{className:`w-4 h-4 transition-transform duration-200 ${s?"rotate-180":""}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:h.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})]}),s&&h.jsx("div",{className:"absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg",children:h.jsx("div",{className:"py-1",role:"listbox",children:t.map(p=>h.jsxs("button",{type:"button",onClick:()=>m(p),className:`
                  w-full px-3 py-2 text-left flex items-center space-x-2
                  hover:bg-gray-100 focus:bg-gray-100 focus:outline-none
                  transition-colors duration-150
                  ${o?"text-sm":"text-base"}
                  ${e.id===p.id?"bg-gray-50 font-medium":""}
                `,role:"option","aria-selected":e.id===p.id,children:[i&&h.jsx("div",{className:`${o?"w-4 h-4":"w-5 h-5"} flex-shrink-0`,style:{color:p.color},dangerouslySetInnerHTML:{__html:p.icon}}),h.jsxs("div",{className:"flex-1 min-w-0",children:[h.jsx("div",{className:"font-medium truncate",children:o?p.name:p.displayName}),!o&&p.description&&h.jsx("div",{className:"text-xs text-gray-500 truncate",children:p.description})]}),e.id===p.id&&h.jsx("svg",{className:"w-4 h-4 text-black",fill:"currentColor",viewBox:"0 0 20 20",children:h.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})})]},p.id))})})]})},Gd=({framework:e,size:t="md",showName:n=!1,className:r=""})=>{const i={sm:"w-4 h-4",md:"w-6 h-6",lg:"w-8 h-8"},o={sm:"text-xs",md:"text-sm",lg:"text-base"};return h.jsxs("div",{className:`flex items-center ${n?"space-x-2":""} ${r}`,children:[h.jsx("div",{className:`${i[t]} flex-shrink-0`,style:{color:e.color},dangerouslySetInnerHTML:{__html:e.icon},title:e.displayName}),n&&h.jsx("span",{className:`font-medium ${o[t]} truncate`,children:e.name})]})},oh=({isOpen:e,code:t,componentName:n,framework:r,frameworks:i,onFrameworkChange:o,showFrameworkSelector:a=!0,readonly:s=!1})=>{const[l,c]=B.useState(!1),[m,u]=B.useState(!1),[p,w]=B.useState(11),S=async()=>{try{await navigator.clipboard.writeText(t),c(!0),setTimeout(()=>c(!1),2e3)}catch(d){console.error("Failed to copy code:",d)}},x=d=>M(d),M=d=>{let g=d.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");return g=g.replace(/(\/\/.*?)$/gm,'<span style="color: #6b7280; font-style: italic;">$1</span>').replace(/(\/\*[\s\S]*?\*\/)/g,'<span style="color: #6b7280; font-style: italic;">$1</span>').replace(/("(?:[^"\\]|\\.)*?")/g,'<span style="color: #34d399;">$1</span>').replace(/('(?:[^'\\]|\\.)*?')/g,'<span style="color: #34d399;">$1</span>').replace(/(`(?:[^`\\]|\\.)*?`)/g,'<span style="color: #34d399;">$1</span>').replace(/\b(import|export|const|let|var|function|return|if|else|for|while|interface|type|class|extends|implements|from|as|default)\b/g,'<span style="color: #60a5fa;">$1</span>').replace(/\b(\d+\.?\d*)\b/g,'<span style="color: #fb923c;">$1</span>'),g},f=d=>d.split(`
`).map((k,I)=>h.jsx("div",{className:"text-gray-500 text-center select-none text-xs leading-relaxed",children:I+1},I+1));return h.jsxs("div",{className:`absolute top-0 right-0 h-full bg-[#0b0b0c] border-l border-black/10 shadow-2xl flex flex-col transition-all duration-300 ease-in-out z-40 backdrop-blur-xl ${e?"w-[540px] translate-x-0":"w-0 translate-x-full"}`,style:{backgroundImage:"radial-gradient(1200px 50% at 100% 0%, rgba(255,255,255,0.04), transparent 40%), radial-gradient(1200px 50% at 0% 100%, rgba(255,255,255,0.04), transparent 40%)"},children:[h.jsxs("div",{className:"flex items-center justify-between px-4 py-2.5 border-b border-white/10 bg-white/[0.02]",children:[h.jsxs("div",{className:"flex items-center space-x-3",children:[h.jsx("div",{className:"w-1.5 h-1.5 bg-red-500/80 rounded-full"}),h.jsx("div",{className:"w-1.5 h-1.5 bg-yellow-400/80 rounded-full"}),h.jsx("div",{className:"w-1.5 h-1.5 bg-green-500/80 rounded-full"}),h.jsxs("div",{className:"ml-3 text-xs font-medium text-gray-200 truncate",children:[n.charAt(0).toUpperCase()+n.slice(1).replace(/\s+/g,""),".",r.extension]})]}),h.jsxs("div",{className:"flex items-center space-x-2",children:[a&&!s&&h.jsx("div",{className:"w-32",children:h.jsx(ih,{currentFramework:r,frameworks:i,onFrameworkChange:o,compact:!0,className:"text-xs"})}),h.jsx("button",{type:"button",onClick:S,className:"flex items-center space-x-1.5 px-2 py-1 text-xs font-medium text-gray-400 hover:text-white hover:bg-white/5 rounded-md transition-all duration-200 shrink-0",title:"Copy code",children:l?h.jsxs(h.Fragment,{children:[h.jsx(Jf,{size:10,className:"text-green-400"}),h.jsx("span",{className:"text-green-400",children:"Copied!"})]}):h.jsxs(h.Fragment,{children:[h.jsx(Zd,{size:10}),h.jsx("span",{children:"Copy"})]})}),h.jsxs("div",{className:"hidden sm:flex items-center space-x-2 text-[10px] text-gray-400",children:[h.jsx("button",{type:"button",onClick:()=>u(!m),className:`px-1.5 py-0.5 rounded-md hover:bg-white/5 ${m?"text-white":""}`,title:"Toggle line wrap",children:"Wrap"}),h.jsxs("div",{className:"flex items-center space-x-1",children:[h.jsx("button",{type:"button",onClick:()=>w(d=>Math.max(10,d-1)),className:"px-1.5 py-0.5 rounded-md hover:bg-white/5",title:"Smaller font",children:"A-"}),h.jsx("button",{type:"button",onClick:()=>w(d=>Math.min(16,d+1)),className:"px-1.5 py-0.5 rounded-md hover:bg-white/5",title:"Larger font",children:"A+"})]})]})]})]}),h.jsx("div",{className:"flex-1 overflow-hidden bg-transparent",children:h.jsxs("div",{className:"h-full flex",children:[h.jsx("div",{className:"bg-white/[0.03] border-r border-white/10 w-10 flex-shrink-0 overflow-hidden",children:h.jsx("div",{className:"py-4 px-2",children:f(t)})}),h.jsx("div",{className:"flex-1 min-w-0 overflow-auto",children:h.jsx("pre",{className:`p-4 leading-relaxed font-mono text-gray-100 ${m?"whitespace-pre-wrap break-words":"whitespace-pre"}`,style:{fontSize:p},children:h.jsx("code",{dangerouslySetInnerHTML:{__html:x(t)}})})})]})}),h.jsx("div",{className:"px-4 py-2 border-t border-white/10 bg-white/[0.02]",children:h.jsxs("div",{className:"flex items-center justify-between text-xs text-gray-400",children:[h.jsxs("div",{className:"flex items-center space-x-3",children:[h.jsx("span",{className:"text-blue-400 capitalize",children:r.language}),h.jsx("span",{children:"•"}),h.jsxs("span",{children:[t.split(`
`).length," lines"]}),h.jsx("span",{children:"•"}),h.jsxs("span",{children:[(t.length/1e3).toFixed(1),"K chars"]})]}),h.jsxs("div",{className:"flex items-center space-x-2",children:[h.jsx(Gd,{framework:r,size:"sm"}),h.jsx("span",{className:"text-gray-300",children:r.displayName})]})]})})]})},ah=({onClick:e,disabled:t=!1,isActive:n=!1,framework:r,showFrameworkIndicator:i=!0})=>h.jsxs("button",{type:"button",onClick:e,disabled:t,className:`
        group relative px-2.5 py-1.5 text-xs font-mono font-medium rounded-lg border transition-all duration-200
        ${t?"text-gray-300 border-gray-200 cursor-not-allowed":n?"text-black border-black bg-gray-50":"text-gray-600 border-gray-200 hover:text-black hover:border-black hover:bg-gray-50 active:scale-95"}
      `,title:t?"No component to show":n?`Hide ${(r==null?void 0:r.displayName)||"component"} code`:`View ${(r==null?void 0:r.displayName)||"component"} code`,children:[h.jsxs("span",{className:"relative z-10 flex items-center space-x-1.5",children:[i&&r&&h.jsx(Gd,{framework:r,size:"sm"}),h.jsxs("span",{className:"flex items-center space-x-0.5",children:[h.jsx("span",{children:"<"}),h.jsx("span",{children:"/"}),h.jsx("span",{children:">"})]})]}),!t&&h.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-transparent via-gray-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"})]});class sh{constructor(t){C(this,"max");C(this,"current",0);C(this,"queue",[]);this.max=Math.max(1,t)}async acquire(){return this.current<this.max?(this.current+=1,()=>this.release()):new Promise(t=>{this.queue.push(()=>{this.current+=1,t(()=>this.release())})})}release(){this.current=Math.max(0,this.current-1);const t=this.queue.shift();t&&t()}}const lh=new sh(3),ta=e=>new Promise(t=>setTimeout(t,e));function ch(e,t){if(t<=0)return e;const n=new AbortController;return e&&(e.aborted?n.abort():e.addEventListener("abort",()=>n.abort(),{once:!0})),setTimeout(()=>n.abort(),t),n.signal}class uh{static async chatCompletion(t){const n=await lh.acquire();try{const{apiKey:r,model:i,messages:o,temperature:a=.7,maxTokens:s=1e3,timeoutMs:l=6e4,signal:c}=t;if(!r)throw new Error("Missing OpenRouter API key");if(!i)throw new Error("Missing OpenRouter model");if(!Array.isArray(o)||o.length===0)throw new Error("Messages array must be non-empty");const m={model:i,messages:o,temperature:a,max_tokens:s},u="https://openrouter.ai/api/v1/chat/completions",p=3;let w=0,S;for(;w<p;){w+=1;try{const x=await fetch(u,{method:"POST",headers:{Authorization:`Bearer ${r}`,"Content-Type":"application/json","HTTP-Referer":window.location.origin,"X-Title":"Aura"},body:JSON.stringify(m),signal:ch(c,l)});if(!x.ok){if(x.status===429||x.status>=500&&x.status<600){const d=Math.min(1500*w+Math.random()*500,3e3);await ta(d);continue}const f=await x.text();throw new Error(`OpenRouter ${x.status}: ${f}`)}const M=await x.json();if(M!=null&&M.error){const f=M.error.code??"";if(f===429||f==="rate_limit"){const d=Math.min(1500*w+Math.random()*500,3e3);await ta(d);continue}throw new Error(M.error.message||"Unknown OpenRouter error")}if(!M.choices||!M.choices[0]||!M.choices[0].message)throw new Error("Invalid response: missing choices[0].message");return M}catch(x){if(S=x,(x==null?void 0:x.name)==="AbortError")break;const M=Math.min(1500*w+Math.random()*500,3e3);await ta(M)}}throw S||new Error("OpenRouter request failed")}finally{n()}}}const dh=()=>(B.useState(!1),B.useState(""),null),ph={greetings:["Hello! I'm excited to help you create something amazing. What UI component are you envisioning?","Hey there! Ready to build some beautiful components? Tell me what you have in mind.","Hi! I love creating UI magic. What interactive element would you like me to design?"],componentResponses:{button:["Great choice! I'll create a magnetic button that smoothly follows your cursor. It'll have that satisfying interactive feel.","Perfect! Let me craft a button with some delightful hover physics. Users will love the responsive feedback.","Nice! I'm designing a button that feels alive - it'll subtly track your mouse movement for maximum engagement."],card:["Excellent! I'll build a card with a mesmerizing glow effect that tracks your cursor. Very modern and sleek.","Love it! Creating a card with subtle lighting that follows your mouse - it'll feel premium and interactive.","Perfect choice! This card will have a beautiful radial glow that responds to mouse movement. Very elegant!"],input:["Smart thinking! I'll create a clean, minimal input with smooth focus animations. Form fields should be delightful.","Great idea! Designing an input with elegant label animations and clean styling. Users will appreciate the polish.","Wonderful! This input will have buttery-smooth animations and perfect typography. Form design at its finest."],toggle:["Excellent choice! A satisfying toggle switch with smooth transitions. These micro-interactions make all the difference.","Perfect! Creating a toggle that feels premium to use - smooth animations and perfect tactile feedback.","Love toggles! This one will have that perfect 'click' feeling with beautiful state transitions."],loading:["Brilliant! Loading animations are crucial for good UX. I'll create something mesmerizing yet subtle.","Great thinking! A beautiful loading animation keeps users engaged. Let me craft something elegant.","Perfect! Loading states are often overlooked but so important. This will be both functional and beautiful."]},clarifications:["Could you tell me more about the style you're looking for? Modern, minimal, or something else?","What's the primary use case for this component? That'll help me optimize the interaction design.","Any specific colors or themes in mind? I can adapt the design to match your vision.","Should this component have any special accessibility features or animations?"],encouragement:["This is going to look fantastic! I'm excited to show you what I've created.","I think you'll love how this turned out. The interactions feel really premium.","This component has that perfect balance of functionality and delight. Great choice!","The attention to detail in this one is going to make your users smile."]},Qs="https://huggingface.co",ep="https://router.huggingface.co",mh="X-HF-Bill-To",bc={"black-forest-labs":{},cerebras:{},cohere:{},"fal-ai":{},"featherless-ai":{},"fireworks-ai":{},groq:{},"hf-inference":{},hyperbolic:{},nebius:{},novita:{},nscale:{},openai:{},ovhcloud:{},replicate:{},sambanova:{},scaleway:{},together:{}};class Ys extends Error{constructor(t){super(t),this.name="InferenceClientError"}}class me extends Ys{constructor(t){super(t),this.name="InputError"}}class tp extends Ys{constructor(n,r,i){super(n);C(this,"httpRequest");C(this,"httpResponse");this.httpRequest={...r,...r.headers?{headers:{...r.headers,..."Authorization"in r.headers?{Authorization:"Bearer [redacted]"}:void 0}}:void 0},this.httpResponse=i}}class ke extends tp{constructor(t,n,r){super(t,n,r),this.name="ProviderApiError"}}class _r extends tp{constructor(t,n,r){super(t,n,r),this.name="HubApiError"}}class $ extends Ys{constructor(t){super(t),this.name="ProviderOutputError"}}function np(e){return Array.isArray(e)?e:[e]}class He{constructor(t,n,r=!1){C(this,"provider");C(this,"baseUrl");C(this,"clientSideRoutingOnly");this.provider=t,this.baseUrl=n,this.clientSideRoutingOnly=r}makeBaseUrl(t){return t.authMethod!=="provider-key"?`${ep}/${this.provider}`:this.baseUrl}makeBody(t){return"data"in t.args&&t.args.data?t.args.data:JSON.stringify(this.preparePayload(t))}makeUrl(t){const n=this.makeBaseUrl(t),r=this.makeRoute(t).replace(/^\/+/,"");return`${n}/${r}`}prepareHeaders(t,n){const r={};return t.authMethod!=="none"&&(r.Authorization=`Bearer ${t.accessToken}`),n||(r["Content-Type"]="application/json"),r}}class We extends He{constructor(t,n,r=!1){super(t,n,r)}makeRoute(){return"v1/chat/completions"}preparePayload(t){return{...t.args,model:t.model}}async getResponse(t){if(typeof t=="object"&&Array.isArray(t==null?void 0:t.choices)&&typeof(t==null?void 0:t.created)=="number"&&typeof(t==null?void 0:t.id)=="string"&&typeof(t==null?void 0:t.model)=="string"&&(t.system_fingerprint===void 0||t.system_fingerprint===null||typeof t.system_fingerprint=="string")&&typeof(t==null?void 0:t.usage)=="object")return t;throw new $("Expected ChatCompletionOutput")}}class on extends He{constructor(t,n,r=!1){super(t,n,r)}preparePayload(t){return{...t.args,model:t.model}}makeRoute(){return"v1/completions"}async getResponse(t){const n=np(t);if(Array.isArray(n)&&n.length>0&&n.every(r=>typeof r=="object"&&!!r&&"generated_text"in r&&typeof r.generated_text=="string"))return n[0];throw new $("Expected Array<{generated_text: string}>")}}function at(e){if(globalThis.Buffer)return globalThis.Buffer.from(e).toString("base64");{const t=[];return e.forEach(n=>{t.push(String.fromCharCode(n))}),globalThis.btoa(t.join(""))}}function fh(e,t){return Object.assign({},...t.map(n=>{if(e[n]!==void 0)return{[n]:e[n]}}))}function Ga(e,t){return e.includes(t)}function Z(e,t){const n=Array.isArray(t)?t:[t],r=Object.keys(e).filter(i=>!Ga(n,i));return fh(e,r)}const xc=["feature-extraction","sentence-similarity"];class G extends He{constructor(){super("hf-inference",`${ep}/hf-inference`)}preparePayload(t){return t.args}makeUrl(t){return t.model.startsWith("http://")||t.model.startsWith("https://")?t.model:super.makeUrl(t)}makeRoute(t){return t.task&&["feature-extraction","sentence-similarity"].includes(t.task)?`models/${t.model}/pipeline/${t.task}`:`models/${t.model}`}async getResponse(t){return t}}class hh extends G{async getResponse(t,n,r,i){if(!t)throw new $("Received malformed response from HF-Inference text-to-image API: response is undefined");if(typeof t=="object"){if(i==="json")return{...t};if("data"in t&&Array.isArray(t.data)&&t.data[0].b64_json){const o=t.data[0].b64_json;return i==="url"?`data:image/jpeg;base64,${o}`:await(await fetch(`data:image/jpeg;base64,${o}`)).blob()}if("output"in t&&Array.isArray(t.output))return i==="url"?t.output[0]:await(await fetch(t.output[0])).blob()}if(t instanceof Blob){if(i==="url"||i==="json"){const o=await t.arrayBuffer().then(a=>Buffer.from(a).toString("base64"));return i==="url"?`data:image/jpeg;base64,${o}`:{output:`data:image/jpeg;base64,${o}`}}return t}throw new $("Received malformed response from HF-Inference text-to-image API: expected a Blob")}}class gh extends G{makeUrl(t){let n;return t.model.startsWith("http://")||t.model.startsWith("https://")?n=t.model.trim():n=`${this.makeBaseUrl(t)}/models/${t.model}`,n=n.replace(/\/+$/,""),n.endsWith("/v1")?n+="/chat/completions":n.endsWith("/chat/completions")||(n+="/v1/chat/completions"),n}preparePayload(t){return{...t.args,model:t.model}}async getResponse(t){return t}}class yh extends G{async getResponse(t){const n=np(t);if(Array.isArray(n)&&n.every(r=>"generated_text"in r&&typeof(r==null?void 0:r.generated_text)=="string"))return n==null?void 0:n[0];throw new $("Received malformed response from HF-Inference text generation API: expected Array<{generated_text: string}>")}}class vh extends G{async getResponse(t){if(Array.isArray(t)&&t.every(n=>typeof n=="object"&&n!==null&&typeof n.label=="string"&&typeof n.score=="number"))return t;throw new $("Received malformed response from HF-Inference audio-classification API: expected Array<{label: string, score: number}> but received different format")}}class wh extends G{async getResponse(t){return t}async preparePayloadAsync(t){return"data"in t?t:{...Z(t,"inputs"),data:t.inputs}}}class bh extends G{async getResponse(t){if(!Array.isArray(t))throw new $("Received malformed response from HF-Inference audio-to-audio API: expected Array");if(!t.every(n=>typeof n=="object"&&n&&"label"in n&&typeof n.label=="string"&&"content-type"in n&&typeof n["content-type"]=="string"&&"blob"in n&&typeof n.blob=="string"))throw new $("Received malformed response from HF-Inference audio-to-audio API: expected Array<{label: string, audio: Blob}>");return t}}class xh extends G{async getResponse(t){if(Array.isArray(t)&&t.every(n=>typeof n=="object"&&!!n&&typeof(n==null?void 0:n.answer)=="string"&&(typeof n.end=="number"||typeof n.end>"u")&&(typeof n.score=="number"||typeof n.score>"u")&&(typeof n.start=="number"||typeof n.start>"u")))return t[0];throw new $("Received malformed response from HF-Inference document-question-answering API: expected Array<{answer: string, end: number, score: number, start: number}>")}}class kh extends G{async getResponse(t){const n=(r,i,o=0)=>o>i?!1:r.every(a=>Array.isArray(a))?r.every(a=>n(a,i,o+1)):r.every(a=>typeof a=="number");if(Array.isArray(t)&&n(t,3,0))return t;throw new $("Received malformed response from HF-Inference feature-extraction API: expected Array<number[][][] | number[][] | number[] | number>")}}class _h extends G{async getResponse(t){if(Array.isArray(t)&&t.every(n=>typeof n.label=="string"&&typeof n.score=="number"))return t;throw new $("Received malformed response from HF-Inference image-classification API: expected Array<{label: string, score: number}>")}}class Sh extends G{async getResponse(t){if(Array.isArray(t)&&t.every(n=>typeof n.label=="string"&&typeof n.mask=="string"&&(n.score===void 0||typeof n.score=="number")))return t;throw new $("Received malformed response from HF-Inference image-segmentation API: expected Array<{label: string, mask: string, score: number}>")}async preparePayloadAsync(t){return{...t,inputs:at(new Uint8Array(t.inputs instanceof ArrayBuffer?t.inputs:await t.inputs.arrayBuffer()))}}}class Ch extends G{async getResponse(t){if(typeof(t==null?void 0:t.generated_text)!="string")throw new $("Received malformed response from HF-Inference image-to-text API: expected {generated_text: string}");return t}}class Ah extends G{async preparePayloadAsync(t){return t.parameters?{...t,inputs:at(new Uint8Array(t.inputs instanceof ArrayBuffer?t.inputs:await t.inputs.arrayBuffer()))}:{...t,model:t.model,data:t.inputs}}async getResponse(t){if(t instanceof Blob)return t;throw new $("Received malformed response from HF-Inference image-to-image API: expected Blob")}}class Eh extends G{async getResponse(t){if(Array.isArray(t)&&t.every(n=>typeof n.label=="string"&&typeof n.score=="number"&&typeof n.box.xmin=="number"&&typeof n.box.ymin=="number"&&typeof n.box.xmax=="number"&&typeof n.box.ymax=="number"))return t;throw new $("Received malformed response from HF-Inference object-detection API: expected Array<{label: string, score: number, box: {xmin: number, ymin: number, xmax: number, ymax: number}}>")}}class Ih extends G{async getResponse(t){if(Array.isArray(t)&&t.every(n=>typeof n.label=="string"&&typeof n.score=="number"))return t;throw new $("Received malformed response from HF-Inference zero-shot-image-classification API: expected Array<{label: string, score: number}>")}}class Th extends G{async getResponse(t){const n=t==null?void 0:t[0];if(Array.isArray(n)&&n.every(r=>typeof(r==null?void 0:r.label)=="string"&&typeof r.score=="number"))return n;throw new $("Received malformed response from HF-Inference text-classification API: expected Array<{label: string, score: number}>")}}class Rh extends G{async getResponse(t){if(Array.isArray(t)?t.every(n=>typeof n=="object"&&!!n&&typeof n.answer=="string"&&typeof n.end=="number"&&typeof n.score=="number"&&typeof n.start=="number"):typeof t=="object"&&t&&typeof t.answer=="string"&&typeof t.end=="number"&&typeof t.score=="number"&&typeof t.start=="number")return Array.isArray(t)?t[0]:t;throw new $("Received malformed response from HF-Inference question-answering API: expected Array<{answer: string, end: number, score: number, start: number}>")}}class Ph extends G{async getResponse(t){if(Array.isArray(t)&&t.every(n=>typeof n.score=="number"&&typeof n.sequence=="string"&&typeof n.token=="number"&&typeof n.token_str=="string"))return t;throw new $("Received malformed response from HF-Inference fill-mask API: expected Array<{score: number, sequence: string, token: number, token_str: string}>")}}class Js extends G{async getResponse(t){if(typeof t=="object"&&t!==null&&"labels"in t&&"scores"in t&&Array.isArray(t.labels)&&Array.isArray(t.scores)&&t.labels.length===t.scores.length&&t.labels.every(n=>typeof n=="string")&&t.scores.every(n=>typeof n=="number")){const n=t.scores;return t.labels.map((r,i)=>({label:r,score:n[i]}))}if(Array.isArray(t)&&t.every(Js.validateOutputElement))return t;throw new $("Received malformed response from HF-Inference zero-shot-classification API: expected Array<{label: string, score: number}>")}static validateOutputElement(t){return typeof t=="object"&&!!t&&"label"in t&&"score"in t&&typeof t.label=="string"&&typeof t.score=="number"}}class Nh extends G{async getResponse(t){if(Array.isArray(t)&&t.every(n=>typeof n=="number"))return t;throw new $("Received malformed response from HF-Inference sentence-similarity API: expected Array<number>")}}class oo extends G{static validate(t){return typeof t=="object"&&!!t&&"aggregator"in t&&typeof t.aggregator=="string"&&"answer"in t&&typeof t.answer=="string"&&"cells"in t&&Array.isArray(t.cells)&&t.cells.every(n=>typeof n=="string")&&"coordinates"in t&&Array.isArray(t.coordinates)&&t.coordinates.every(n=>Array.isArray(n)&&n.every(r=>typeof r=="number"))}async getResponse(t){if(Array.isArray(t)&&Array.isArray(t)?t.every(n=>oo.validate(n)):oo.validate(t))return Array.isArray(t)?t[0]:t;throw new $("Received malformed response from HF-Inference table-question-answering API: expected {aggregator: string, answer: string, cells: string[], coordinates: number[][]}")}}class $h extends G{async getResponse(t){if(Array.isArray(t)&&t.every(n=>typeof n.end=="number"&&typeof n.entity_group=="string"&&typeof n.score=="number"&&typeof n.start=="number"&&typeof n.word=="string"))return t;throw new $("Received malformed response from HF-Inference token-classification API: expected Array<{end: number, entity_group: string, score: number, start: number, word: string}>")}}class jh extends G{async getResponse(t){if(Array.isArray(t)&&t.every(n=>typeof(n==null?void 0:n.translation_text)=="string"))return(t==null?void 0:t.length)===1?t==null?void 0:t[0]:t;throw new $("Received malformed response from HF-Inference translation API: expected Array<{translation_text: string}>")}}class Mh extends G{async getResponse(t){if(Array.isArray(t)&&t.every(n=>typeof(n==null?void 0:n.summary_text)=="string"))return t==null?void 0:t[0];throw new $("Received malformed response from HF-Inference summarization API: expected Array<{summary_text: string}>")}}class Lh extends G{async getResponse(t){return t}}class Dh extends G{async getResponse(t){if(Array.isArray(t)&&t.every(n=>typeof n=="number"))return t;throw new $("Received malformed response from HF-Inference tabular-classification API: expected Array<number>")}}class Uh extends G{async getResponse(t){if(Array.isArray(t)&&t.every(n=>typeof n=="object"&&!!n&&typeof(n==null?void 0:n.answer)=="string"&&typeof n.score=="number"))return t[0];throw new $("Received malformed response from HF-Inference visual-question-answering API: expected Array<{answer: string, score: number}>")}}class Oh extends G{async getResponse(t){if(Array.isArray(t)&&t.every(n=>typeof n=="number"))return t;throw new $("Received malformed response from HF-Inference tabular-regression API: expected Array<number>")}}class Fh extends G{async getResponse(t){return t}}let Bh=console;function ni(){return Bh}const na=new Map;function Vh(e,t){return t?Array.isArray(t)?t:Object.entries(t).map(([n,r])=>({provider:n,hfModelId:e,providerId:r.providerId,status:r.status,task:r.task,adapter:r.adapter,adapterWeightsPath:r.adapterWeightsPath})):[]}async function rp(e,t,n){var i;let r;if(na.has(e))r=na.get(e);else{const o=`${Qs}/api/models/${e}?expand[]=inferenceProviderMapping`,a=await((n==null?void 0:n.fetch)??fetch)(o,{headers:t!=null&&t.startsWith("hf_")?{Authorization:`Bearer ${t}`}:{}});if(!a.ok)if((i=a.headers.get("Content-Type"))!=null&&i.startsWith("application/json")){const l=await a.json();if("error"in l&&typeof l.error=="string")throw new _r(`Failed to fetch inference provider mapping for model ${e}: ${l.error}`,{url:o,method:"GET"},{requestId:a.headers.get("x-request-id")??"",status:a.status,body:l})}else throw new _r(`Failed to fetch inference provider mapping for model ${e}`,{url:o,method:"GET"},{requestId:a.headers.get("x-request-id")??"",status:a.status,body:await a.text()});let s=null;try{s=await a.json()}catch{throw new _r(`Failed to fetch inference provider mapping for model ${e}: malformed API response, invalid JSON`,{url:o,method:"GET"},{requestId:a.headers.get("x-request-id")??"",status:a.status,body:await a.text()})}if(!(s!=null&&s.inferenceProviderMapping))throw new _r(`We have not been able to find inference provider information for model ${e}.`,{url:o,method:"GET"},{requestId:a.headers.get("x-request-id")??"",status:a.status,body:await a.text()});r=Vh(e,s.inferenceProviderMapping),na.set(e,r)}return r}async function zh(e,t){const n=ni();if(bc[e.provider][e.modelId])return bc[e.provider][e.modelId];const i=(await rp(e.modelId,e.accessToken,t)).find(o=>o.provider===e.provider);if(i){const o=e.provider==="hf-inference"&&Ga(xc,e.task)?xc:[e.task];if(!Ga(o,i.task))throw new me(`Model ${e.modelId} is not supported for task ${e.task} and provider ${e.provider}. Supported task: ${i.task}.`);return i.status==="staging"&&n.warn(`Model ${e.modelId} is in staging mode for provider ${e.provider}. Meant for test purposes only.`),i}return null}async function W(e,t,n){var i;const r=ni();if(n){if(e)throw new me("Specifying both endpointUrl and provider is not supported.");return"hf-inference"}if(e||(r.log("Defaulting to 'auto' which will select the first provider available for the model, sorted by the user's order in https://hf.co/settings/inference-providers."),e="auto"),e==="auto"){if(!t)throw new me("Specifying a model is required when provider is 'auto'");e=(i=(await rp(t))[0])==null?void 0:i.provider,r.log("Auto selected provider:",e)}if(!e)throw new me(`No Inference Provider available for model ${t}.`);return e}function Zs(e){return new Promise(t=>{setTimeout(()=>t(),e)})}const qh="https://api.us1.bfl.ai";class Hh extends He{constructor(){super("black-forest-labs",qh)}preparePayload(t){return{...Z(t.args,["inputs","parameters"]),...t.args.parameters,prompt:t.args.inputs}}prepareHeaders(t,n){const r={Authorization:t.authMethod!=="provider-key"?`Bearer ${t.accessToken}`:`X-Key ${t.accessToken}`};return n||(r["Content-Type"]="application/json"),r}makeRoute(t){if(!t)throw new me("Params are required");return`/v1/${t.model}`}async getResponse(t,n,r,i){const o=ni(),a=new URL(t.polling_url);for(let s=0;s<5;s++){await Zs(1e3),o.debug(`Polling Black Forest Labs API for the result... ${s+1}/5`),a.searchParams.set("attempt",s.toString(10));const l=await fetch(a,{headers:{"Content-Type":"application/json"}});if(!l.ok)throw new ke("Failed to fetch result from black forest labs API",{url:a.toString(),method:"GET",headers:{"Content-Type":"application/json"}},{requestId:l.headers.get("x-request-id")??"",status:l.status,body:await l.text()});const c=await l.json();if(typeof c=="object"&&c&&"status"in c&&typeof c.status=="string"&&c.status==="Ready"&&"result"in c&&typeof c.result=="object"&&c.result&&"sample"in c.result&&typeof c.result.sample=="string")return i==="json"?c.result:i==="url"?c.result.sample:await(await fetch(c.result.sample)).blob()}throw new $("Timed out while waiting for the result from black forest labs API - aborting after 5 attempts")}}class Wh extends We{constructor(){super("cerebras","https://api.cerebras.ai")}}class Kh extends We{constructor(){super("cohere","https://api.cohere.com")}makeRoute(){return"/compatibility/v1/chat/completions"}}function Sn(e){return/^http(s?):/.test(e)||e.startsWith("/")}const kc=["audio/mpeg","audio/mp4","audio/wav","audio/x-wav"];class _o extends He{constructor(t){super("fal-ai",t||"https://fal.run")}preparePayload(t){return t.args}makeRoute(t){return`/${t.model}`}prepareHeaders(t,n){const r={Authorization:t.authMethod!=="provider-key"?`Bearer ${t.accessToken}`:`Key ${t.accessToken}`};return n||(r["Content-Type"]="application/json"),r}}class So extends _o{async getResponseFromQueueApi(t,n,r){if(!n||!r)throw new me(`URL and headers are required for ${this.task} task`);if(!t.request_id)throw new $(`Received malformed response from Fal.ai ${this.task} API: no request ID found in the response`);let o=t.status;const a=new URL(n),s=`${a.protocol}//${a.host}${a.host==="router.huggingface.co"?"/fal-ai":""}`,l=new URL(t.response_url).pathname,c=a.search,m=`${s}${l}/status${c}`,u=`${s}${l}${c}`;for(;o!=="COMPLETED";){await Zs(500);const S=await fetch(m,{headers:r});if(!S.ok)throw new ke("Failed to fetch response status from fal-ai API",{url:m,method:"GET"},{requestId:S.headers.get("x-request-id")??"",status:S.status,body:await S.text()});try{o=(await S.json()).status}catch{throw new $("Failed to parse status response from fal-ai API: received malformed response")}}const p=await fetch(u,{headers:r});let w;try{w=await p.json()}catch{throw new $("Failed to parse result response from fal-ai API: received malformed response")}return w}}function ip(e,t){return`${Qs}/${e}/resolve/main/${t}`}class Xh extends _o{preparePayload(t){var r;const n={...Z(t.args,["inputs","parameters"]),...t.args.parameters,sync_mode:!0,prompt:t.args.inputs};return((r=t.mapping)==null?void 0:r.adapter)==="lora"&&t.mapping.adapterWeightsPath&&(n.loras=[{path:ip(t.mapping.hfModelId,t.mapping.adapterWeightsPath),scale:1}],t.mapping.providerId==="fal-ai/lora"&&(n.model_name="stabilityai/stable-diffusion-xl-base-1.0")),n}async getResponse(t,n,r,i){if(typeof t=="object"&&"images"in t&&Array.isArray(t.images)&&t.images.length>0&&"url"in t.images[0]&&typeof t.images[0].url=="string")return i==="json"?{...t}:i==="url"?t.images[0].url:await(await fetch(t.images[0].url)).blob();throw new $("Received malformed response from Fal.ai text-to-image API")}}class Qh extends So{constructor(){super("https://queue.fal.run");C(this,"task");this.task="image-to-image"}makeRoute(n){return n.authMethod!=="provider-key"?`/${n.model}?_subdomain=queue`:`/${n.model}`}preparePayload(n){var i;const r=n.args;return((i=n.mapping)==null?void 0:i.adapter)==="lora"&&n.mapping.adapterWeightsPath&&(r.loras=[{path:ip(n.mapping.hfModelId,n.mapping.adapterWeightsPath),scale:1}]),r}async preparePayloadAsync(n){const r=n.inputs instanceof Blob?n.inputs.type:"image/png";return{...Z(n,["inputs","parameters"]),image_url:`data:${r};base64,${at(new Uint8Array(n.inputs instanceof ArrayBuffer?n.inputs:await n.inputs.arrayBuffer()))}`,...n.parameters,...n}}async getResponse(n,r,i){const o=await this.getResponseFromQueueApi(n,r,i);if(typeof o=="object"&&o&&"images"in o&&Array.isArray(o.images)&&o.images.length>0&&typeof o.images[0]=="object"&&o.images[0]&&"url"in o.images[0]&&typeof o.images[0].url=="string"&&Sn(o.images[0].url))return await(await fetch(o.images[0].url)).blob();throw new $(`Received malformed response from Fal.ai image-to-image API: expected { images: Array<{ url: string }> } result format, got instead: ${JSON.stringify(o)}`)}}class Yh extends So{constructor(){super("https://queue.fal.run");C(this,"task");this.task="text-to-video"}makeRoute(n){return n.authMethod!=="provider-key"?`/${n.model}?_subdomain=queue`:`/${n.model}`}preparePayload(n){return{...Z(n.args,["inputs","parameters"]),...n.args.parameters,prompt:n.args.inputs}}async getResponse(n,r,i){const o=await this.getResponseFromQueueApi(n,r,i);if(typeof o=="object"&&o&&"video"in o&&typeof o.video=="object"&&o.video&&"url"in o.video&&typeof o.video.url=="string"&&Sn(o.video.url))return await(await fetch(o.video.url)).blob();throw new $(`Received malformed response from Fal.ai text-to-video API: expected { video: { url: string } } result format, got instead: ${JSON.stringify(o)}`)}}class Jh extends So{constructor(){super("https://queue.fal.run");C(this,"task");this.task="image-to-video"}makeRoute(n){return n.authMethod!=="provider-key"?`/${n.model}?_subdomain=queue`:`/${n.model}`}preparePayload(n){return{...Z(n.args,["inputs","parameters"]),...n.args.parameters,image_url:n.args.image_url}}async preparePayloadAsync(n){const r=n.inputs instanceof Blob?n.inputs.type:"image/png";return{...Z(n,["inputs","parameters"]),image_url:`data:${r};base64,${at(new Uint8Array(n.inputs instanceof ArrayBuffer?n.inputs:await n.inputs.arrayBuffer()))}`,...n.parameters,...n}}async getResponse(n,r,i){const o=await this.getResponseFromQueueApi(n,r,i);if(typeof o=="object"&&o!==null&&"video"in o&&typeof o.video=="object"&&o.video!==null&&"url"in o.video&&typeof o.video.url=="string"&&"url"in o.video&&Sn(o.video.url))return await(await fetch(o.video.url)).blob();throw new $(`Received malformed response from Fal.ai image‑to‑video API: expected { video: { url: string } }, got: ${JSON.stringify(o)}`)}}class Zh extends _o{prepareHeaders(t,n){const r=super.prepareHeaders(t,n);return r["Content-Type"]="application/json",r}async getResponse(t){const n=t;if(typeof(n==null?void 0:n.text)!="string")throw new $(`Received malformed response from Fal.ai Automatic Speech Recognition API: expected { text: string } format, got instead: ${JSON.stringify(t)}`);return{text:n.text}}async preparePayloadAsync(t){const n="data"in t&&t.data instanceof Blob?t.data:"inputs"in t?t.inputs:void 0,r=n==null?void 0:n.type;if(!r)throw new me("Unable to determine the input's content-type. Make sure your are passing a Blob when using provider fal-ai.");if(!kc.includes(r))throw new me(`Provider fal-ai does not support blob type ${r} - supported content types are: ${kc.join(", ")}`);const i=at(new Uint8Array(await n.arrayBuffer()));return{..."data"in t?Z(t,"data"):Z(t,"inputs"),audio_url:`data:${r};base64,${i}`}}}class Gh extends _o{preparePayload(t){return{...Z(t.args,["inputs","parameters"]),...t.args.parameters,text:t.args.inputs}}async getResponse(t){var i;const n=t;if(typeof((i=n==null?void 0:n.audio)==null?void 0:i.url)!="string")throw new $(`Received malformed response from Fal.ai Text-to-Speech API: expected { audio: { url: string } } format, got instead: ${JSON.stringify(t)}`);const r=await fetch(n.audio.url);if(!r.ok)throw new ke(`Failed to fetch audio from ${n.audio.url}: ${r.statusText}`,{url:n.audio.url,method:"GET",headers:{"Content-Type":"application/json"}},{requestId:r.headers.get("x-request-id")??"",status:r.status,body:await r.text()});try{return await r.blob()}catch(o){throw new ke(`Failed to fetch audio from ${n.audio.url}: ${o instanceof Error?o.message:String(o)}`,{url:n.audio.url,method:"GET",headers:{"Content-Type":"application/json"}},{requestId:r.headers.get("x-request-id")??"",status:r.status,body:await r.text()})}}}class eg extends So{constructor(){super("https://queue.fal.run");C(this,"task");this.task="image-segmentation"}makeRoute(n){return n.authMethod!=="provider-key"?`/${n.model}?_subdomain=queue`:`/${n.model}`}preparePayload(n){return{...Z(n.args,["inputs","parameters"]),...n.args.parameters,sync_mode:!0}}async preparePayloadAsync(n){const r="data"in n&&n.data instanceof Blob?n.data:"inputs"in n?n.inputs:void 0,i=r instanceof Blob?r.type:"image/png",o=at(new Uint8Array(r instanceof ArrayBuffer?r:await r.arrayBuffer()));return{...Z(n,["inputs","parameters","data"]),...n.parameters,...n,image_url:`data:${i};base64,${o}`,sync_mode:!0}}async getResponse(n,r,i){const o=await this.getResponseFromQueueApi(n,r,i);if(typeof o=="object"&&o!==null&&"image"in o&&typeof o.image=="object"&&o.image!==null&&"url"in o.image&&typeof o.image.url=="string"){const a=await fetch(o.image.url);if(!a.ok)throw new ke(`Failed to fetch segmentation mask from ${o.image.url}`,{url:o.image.url,method:"GET"},{requestId:a.headers.get("x-request-id")??"",status:a.status,body:await a.text()});const l=await(await a.blob()).arrayBuffer();return[{label:"mask",score:1,mask:at(new Uint8Array(l))}]}throw new $(`Received malformed response from Fal.ai image-segmentation API: expected { image: { url: string } } format, got instead: ${JSON.stringify(n)}`)}}const op="https://api.featherless.ai";class tg extends We{constructor(){super("featherless-ai",op)}}class ng extends on{constructor(){super("featherless-ai",op)}preparePayload(t){return{model:t.model,...Z(t.args,["inputs","parameters"]),...t.args.parameters?{max_tokens:t.args.parameters.max_new_tokens,...Z(t.args.parameters,"max_new_tokens")}:void 0,prompt:t.args.inputs}}async getResponse(t){if(typeof t=="object"&&"choices"in t&&Array.isArray(t==null?void 0:t.choices)&&typeof(t==null?void 0:t.model)=="string")return{generated_text:t.choices[0].text};throw new $("Received malformed response from Featherless AI text generation API")}}class rg extends We{constructor(){super("fireworks-ai","https://api.fireworks.ai")}makeRoute(){return"/inference/v1/chat/completions"}}const ap="https://api.groq.com";class ig extends on{constructor(){super("groq",ap)}makeRoute(){return"/openai/v1/chat/completions"}}class og extends We{constructor(){super("groq",ap)}makeRoute(){return"/openai/v1/chat/completions"}}const Gs="https://api.hyperbolic.xyz";class ag extends We{constructor(){super("hyperbolic",Gs)}}class sg extends on{constructor(){super("hyperbolic",Gs)}makeRoute(){return"v1/chat/completions"}preparePayload(t){return{messages:[{content:t.args.inputs,role:"user"}],...t.args.parameters?{max_tokens:t.args.parameters.max_new_tokens,...Z(t.args.parameters,"max_new_tokens")}:void 0,...Z(t.args,["inputs","parameters"]),model:t.model}}async getResponse(t){if(typeof t=="object"&&"choices"in t&&Array.isArray(t==null?void 0:t.choices)&&typeof(t==null?void 0:t.model)=="string")return{generated_text:t.choices[0].message.content};throw new $("Received malformed response from Hyperbolic text generation API")}}class lg extends He{constructor(){super("hyperbolic",Gs)}makeRoute(t){return"/v1/images/generations"}preparePayload(t){return{...Z(t.args,["inputs","parameters"]),...t.args.parameters,prompt:t.args.inputs,model_name:t.model}}async getResponse(t,n,r,i){if(typeof t=="object"&&"images"in t&&Array.isArray(t.images)&&t.images[0]&&typeof t.images[0].image=="string")return i==="json"?{...t}:i==="url"?`data:image/jpeg;base64,${t.images[0].image}`:fetch(`data:image/jpeg;base64,${t.images[0].image}`).then(o=>o.blob());throw new $("Received malformed response from Hyperbolic text-to-image API")}}const Co="https://api.studio.nebius.ai";class cg extends We{constructor(){super("nebius",Co)}preparePayload(t){var i;const n=super.preparePayload(t),r=t.args.response_format;return(r==null?void 0:r.type)==="json_schema"&&((i=r.json_schema)!=null&&i.schema)&&(n.guided_json=r.json_schema.schema),n}}class ug extends on{constructor(){super("nebius",Co)}preparePayload(t){return{...t.args,model:t.model,prompt:t.args.inputs}}async getResponse(t){var n;if(typeof t=="object"&&"choices"in t&&Array.isArray(t==null?void 0:t.choices)&&t.choices.length>0&&typeof((n=t.choices[0])==null?void 0:n.text)=="string")return{generated_text:t.choices[0].text};throw new $("Received malformed response from Nebius text generation API")}}class dg extends He{constructor(){super("nebius",Co)}preparePayload(t){return{...Z(t.args,["inputs","parameters"]),...t.args.parameters,response_format:"b64_json",prompt:t.args.inputs,model:t.model}}makeRoute(){return"v1/images/generations"}async getResponse(t,n,r,i){if(typeof t=="object"&&"data"in t&&Array.isArray(t.data)&&t.data.length>0&&"b64_json"in t.data[0]&&typeof t.data[0].b64_json=="string"){if(i==="json")return{...t};const o=t.data[0].b64_json;return i==="url"?`data:image/jpeg;base64,${o}`:fetch(`data:image/jpeg;base64,${o}`).then(a=>a.blob())}throw new $("Received malformed response from Nebius text-to-image API")}}class pg extends He{constructor(){super("nebius",Co)}preparePayload(t){return{input:t.args.inputs,model:t.model}}makeRoute(){return"v1/embeddings"}async getResponse(t){return t.data.map(n=>n.embedding)}}const el="https://api.novita.ai";class mg extends on{constructor(){super("novita",el)}makeRoute(){return"/v3/openai/chat/completions"}}class fg extends We{constructor(){super("novita",el)}makeRoute(){return"/v3/openai/chat/completions"}}class hg extends He{constructor(){super("novita",el)}makeRoute(t){return`/v3/async/${t.model}`}preparePayload(t){const{num_inference_steps:n,...r}=t.args.parameters??{};return{...Z(t.args,["inputs","parameters"]),...r,steps:n,prompt:t.args.inputs}}async getResponse(t,n,r){if(!n||!r)throw new me("URL and headers are required for text-to-video task");const i=t.task_id;if(!i)throw new $("Received malformed response from Novita text-to-video API: no task ID found in the response");const o=new URL(n),s=`${`${o.protocol}//${o.host}${o.host==="router.huggingface.co"?"/novita":""}`}/v3/async/task-result?task_id=${i}`;let l="",c;for(;l!=="TASK_STATUS_SUCCEED"&&l!=="TASK_STATUS_FAILED";){await Zs(500);const m=await fetch(s,{headers:r});if(!m.ok)throw new ke("Failed to fetch task result",{url:s,method:"GET",headers:r},{requestId:m.headers.get("x-request-id")??"",status:m.status,body:await m.text()});try{if(c=await m.json(),c&&typeof c=="object"&&"task"in c&&c.task&&typeof c.task=="object"&&"status"in c.task&&typeof c.task.status=="string")l=c.task.status;else throw new $("Received malformed response from Novita text-to-video API: failed to get task status")}catch{throw new $("Received malformed response from Novita text-to-video API: failed to parse task result")}}if(l==="TASK_STATUS_FAILED")throw new $("Novita text-to-video task failed");if(typeof c=="object"&&c&&"videos"in c&&typeof c.videos=="object"&&c.videos&&Array.isArray(c.videos)&&c.videos.length>0&&"video_url"in c.videos[0]&&typeof c.videos[0].video_url=="string"&&Sn(c.videos[0].video_url))return await(await fetch(c.videos[0].video_url)).blob();throw new $(`Received malformed response from Novita text-to-video API: expected { videos: [{ video_url: string }] } format, got instead: ${JSON.stringify(c)}`)}}const sp="https://inference.api.nscale.com";class gg extends We{constructor(){super("nscale",sp)}}class yg extends He{constructor(){super("nscale",sp)}preparePayload(t){return{...Z(t.args,["inputs","parameters"]),...t.args.parameters,response_format:"b64_json",prompt:t.args.inputs,model:t.model}}makeRoute(){return"v1/images/generations"}async getResponse(t,n,r,i){if(typeof t=="object"&&"data"in t&&Array.isArray(t.data)&&t.data.length>0&&"b64_json"in t.data[0]&&typeof t.data[0].b64_json=="string"){if(i==="json")return{...t};const o=t.data[0].b64_json;return i==="url"?`data:image/jpeg;base64,${o}`:fetch(`data:image/jpeg;base64,${o}`).then(a=>a.blob())}throw new $("Received malformed response from Nscale text-to-image API")}}const vg="https://api.openai.com";class wg extends We{constructor(){super("openai",vg,!0)}}const lp="https://oai.endpoints.kepler.ai.cloud.ovh.net";class bg extends We{constructor(){super("ovhcloud",lp)}}class xg extends on{constructor(){super("ovhcloud",lp)}preparePayload(t){return{model:t.model,...Z(t.args,["inputs","parameters"]),...t.args.parameters?{max_tokens:t.args.parameters.max_new_tokens,...Z(t.args.parameters,"max_new_tokens")}:void 0,prompt:t.args.inputs}}async getResponse(t){if(typeof t=="object"&&"choices"in t&&Array.isArray(t==null?void 0:t.choices)&&typeof(t==null?void 0:t.model)=="string")return{generated_text:t.choices[0].text};throw new $("Received malformed response from OVHcloud text generation API")}}class Ao extends He{constructor(t){super("replicate",t||"https://api.replicate.com")}makeRoute(t){return t.model.includes(":")?"v1/predictions":`v1/models/${t.model}/predictions`}preparePayload(t){return{input:{...Z(t.args,["inputs","parameters"]),...t.args.parameters,prompt:t.args.inputs},version:t.model.includes(":")?t.model.split(":")[1]:void 0}}prepareHeaders(t,n){const r={Authorization:`Bearer ${t.accessToken}`,Prefer:"wait"};return n||(r["Content-Type"]="application/json"),r}makeUrl(t){const n=this.makeBaseUrl(t);return t.model.includes(":")?`${n}/v1/predictions`:`${n}/v1/models/${t.model}/predictions`}}class kg extends Ao{preparePayload(t){var n;return{input:{...Z(t.args,["inputs","parameters"]),...t.args.parameters,prompt:t.args.inputs,lora_weights:((n=t.mapping)==null?void 0:n.adapter)==="lora"&&t.mapping.adapterWeightsPath?`https://huggingface.co/${t.mapping.hfModelId}`:void 0},version:t.model.includes(":")?t.model.split(":")[1]:void 0}}async getResponse(t,n,r,i){if(typeof t=="object"&&"output"in t&&Array.isArray(t.output)&&t.output.length>0&&typeof t.output[0]=="string")return i==="json"?{...t}:i==="url"?t.output[0]:await(await fetch(t.output[0])).blob();throw new $("Received malformed response from Replicate text-to-image API")}}class _g extends Ao{preparePayload(t){const n=super.preparePayload(t),r=n.input;if(typeof r=="object"&&r!==null&&"prompt"in r){const i=r;i.text=i.prompt,delete i.prompt}return n}async getResponse(t){if(t instanceof Blob)return t;if(t&&typeof t=="object"&&"output"in t){if(typeof t.output=="string")return await(await fetch(t.output)).blob();if(Array.isArray(t.output))return await(await fetch(t.output[0])).blob()}throw new $("Received malformed response from Replicate text-to-speech API")}}class Sg extends Ao{async getResponse(t){if(typeof t=="object"&&t&&"output"in t&&typeof t.output=="string"&&Sn(t.output))return await(await fetch(t.output)).blob();throw new $("Received malformed response from Replicate text-to-video API")}}class Cg extends Ao{preparePayload(t){var n;return{input:{...Z(t.args,["inputs","parameters"]),...t.args.parameters,input_image:t.args.inputs,lora_weights:((n=t.mapping)==null?void 0:n.adapter)==="lora"&&t.mapping.adapterWeightsPath?`https://huggingface.co/${t.mapping.hfModelId}`:void 0},version:t.model.includes(":")?t.model.split(":")[1]:void 0}}async preparePayloadAsync(t){const{inputs:n,...r}=t,i=new Uint8Array(await n.arrayBuffer()),o=at(i),a=`data:${n.type||"image/jpeg"};base64,${o}`;return{...r,inputs:a}}async getResponse(t){if(typeof t=="object"&&t&&"output"in t&&Array.isArray(t.output)&&t.output.length>0&&typeof t.output[0]=="string")return await(await fetch(t.output[0])).blob();if(typeof t=="object"&&t&&"output"in t&&typeof t.output=="string"&&Sn(t.output))return await(await fetch(t.output)).blob();throw new $("Received malformed response from Replicate image-to-image API")}}class Ag extends We{constructor(){super("sambanova","https://api.sambanova.ai")}preparePayload(t){const n=t.args.response_format;return(n==null?void 0:n.type)==="json_schema"&&n.json_schema&&(n.json_schema.strict??!0)&&(n.json_schema.strict=!1),super.preparePayload(t)}}class Eg extends He{constructor(){super("sambanova","https://api.sambanova.ai")}makeRoute(){return"/v1/embeddings"}async getResponse(t){if(typeof t=="object"&&"data"in t&&Array.isArray(t.data))return t.data.map(n=>n.embedding);throw new $("Received malformed response from Sambanova feature-extraction (embeddings) API")}preparePayload(t){return{model:t.model,input:t.args.inputs,...t.args}}}const tl="https://api.scaleway.ai";class Ig extends We{constructor(){super("scaleway",tl)}}class Tg extends on{constructor(){super("scaleway",tl)}preparePayload(t){return{model:t.model,...t.args,prompt:t.args.inputs}}async getResponse(t){if(typeof t=="object"&&t!==null&&"choices"in t&&Array.isArray(t.choices)&&t.choices.length>0){const n=t.choices[0];if(typeof n=="object"&&n&&"text"in n&&n.text&&typeof n.text=="string")return{generated_text:n.text}}throw new $("Received malformed response from Scaleway text generation API")}}class Rg extends He{constructor(){super("scaleway",tl)}preparePayload(t){return{input:t.args.inputs,model:t.model}}makeRoute(){return"v1/embeddings"}async getResponse(t){return t.data.map(n=>n.embedding)}}const nl="https://api.together.xyz";class Pg extends We{constructor(){super("together",nl)}preparePayload(t){var i;const n=super.preparePayload(t),r=n.response_format;return(r==null?void 0:r.type)==="json_schema"&&((i=r==null?void 0:r.json_schema)!=null&&i.schema)&&(n.response_format={type:"json_schema",schema:r.json_schema.schema}),n}}class Ng extends on{constructor(){super("together",nl)}preparePayload(t){return{model:t.model,...t.args,prompt:t.args.inputs}}async getResponse(t){if(typeof t=="object"&&"choices"in t&&Array.isArray(t==null?void 0:t.choices)&&typeof(t==null?void 0:t.model)=="string")return{generated_text:t.choices[0].text};throw new $("Received malformed response from Together text generation API")}}class $g extends He{constructor(){super("together",nl)}makeRoute(){return"v1/images/generations"}preparePayload(t){return{...Z(t.args,["inputs","parameters"]),...t.args.parameters,prompt:t.args.inputs,response_format:"base64",model:t.model}}async getResponse(t,n,r,i){if(typeof t=="object"&&"data"in t&&Array.isArray(t.data)&&t.data.length>0&&"b64_json"in t.data[0]&&typeof t.data[0].b64_json=="string"){if(i==="json")return{...t};const o=t.data[0].b64_json;return i==="url"?`data:image/jpeg;base64,${o}`:fetch(`data:image/jpeg;base64,${o}`).then(a=>a.blob())}throw new $("Received malformed response from Together text-to-image API")}}const ra={"black-forest-labs":{"text-to-image":new Hh},cerebras:{conversational:new Wh},cohere:{conversational:new Kh},"fal-ai":{"text-to-image":new Xh,"text-to-speech":new Gh,"text-to-video":new Yh,"image-to-image":new Qh,"automatic-speech-recognition":new Zh,"image-segmentation":new eg,"image-to-video":new Jh},"featherless-ai":{conversational:new tg,"text-generation":new ng},"hf-inference":{"text-to-image":new hh,conversational:new gh,"text-generation":new yh,"text-classification":new Th,"question-answering":new Rh,"audio-classification":new vh,"automatic-speech-recognition":new wh,"fill-mask":new Ph,"feature-extraction":new kh,"image-classification":new _h,"image-segmentation":new Sh,"document-question-answering":new xh,"image-to-text":new Ch,"object-detection":new Eh,"audio-to-audio":new bh,"zero-shot-image-classification":new Ih,"zero-shot-classification":new Js,"image-to-image":new Ah,"sentence-similarity":new Nh,"table-question-answering":new oo,"tabular-classification":new Dh,"text-to-speech":new Lh,"token-classification":new $h,translation:new jh,summarization:new Mh,"visual-question-answering":new Uh,"tabular-regression":new Oh,"text-to-audio":new Fh},"fireworks-ai":{conversational:new rg},groq:{conversational:new og,"text-generation":new ig},hyperbolic:{"text-to-image":new lg,conversational:new ag,"text-generation":new sg},nebius:{"text-to-image":new dg,conversational:new cg,"text-generation":new ug,"feature-extraction":new pg},novita:{conversational:new fg,"text-generation":new mg,"text-to-video":new hg},nscale:{"text-to-image":new yg,conversational:new gg},openai:{conversational:new wg},ovhcloud:{conversational:new bg,"text-generation":new xg},replicate:{"text-to-image":new kg,"text-to-speech":new _g,"text-to-video":new Sg,"image-to-image":new Cg},sambanova:{conversational:new Ag,"feature-extraction":new Eg},scaleway:{conversational:new Ig,"text-generation":new Tg,"feature-extraction":new Rg},together:{"text-to-image":new $g,conversational:new Pg,"text-generation":new Ng}};function K(e,t){if(e==="hf-inference"&&!t||e==="auto")return new G;if(!t)throw new me("you need to provide a task name when using an external provider, e.g. 'text-to-image'");if(!(e in ra))throw new me(`Provider '${e}' not supported. Available providers: ${Object.keys(ra)}`);const n=ra[e];if(!n||!(t in n))throw new me(`Task '${t}' not supported for provider '${e}'. Available tasks: ${Object.keys(n??{})}`);return n[t]}const jg="4.7.1",Mg="@huggingface/inference";let ia=null;async function Cn(e,t,n){const{model:r}=e,i=t.provider,{task:o}=n??{};if(e.endpointUrl&&i!=="hf-inference")throw new me("Cannot use endpointUrl with a third-party provider.");if(r&&Sn(r))throw new me("Model URLs are no longer supported. Use endpointUrl instead.");if(e.endpointUrl)return _c(r??e.endpointUrl,t,e,void 0,n);if(!r&&!o)throw new me("No model provided, and no task has been specified.");const a=r??await Lg(o);if(t.clientSideRoutingOnly&&!r)throw new me(`Provider ${i} requires a model ID to be passed directly.`);const s=t.clientSideRoutingOnly?{provider:i,providerId:Ug(r,i),hfModelId:r,status:"live",task:o}:await zh({modelId:a,task:o,provider:i,accessToken:e.accessToken},{fetch:n==null?void 0:n.fetch});if(!s)throw new me(`We have not been able to find inference provider information for model ${a}.`);return _c(s.providerId,t,e,s,n)}function _c(e,t,n,r,i){const{accessToken:o,endpointUrl:a,provider:s,model:l,...c}=n,m=t.provider,{includeCredentials:u,task:p,signal:w,billTo:S}=i??{},x=(()=>{if(t.clientSideRoutingOnly&&o&&o.startsWith("hf_"))throw new me(`Provider ${m} is closed-source and does not support HF tokens.`);return o?o.startsWith("hf_")?"hf-token":"provider-key":u==="include"?"credentials-include":"none"})(),M=a??e,f=t.makeUrl({authMethod:x,model:M,task:p}),d=t.prepareHeaders({accessToken:o,authMethod:x},"data"in n&&!!n.data);S&&(d[mh]=S);const k=[`${Mg}/${jg}`,typeof navigator<"u"?navigator.userAgent:void 0].filter(R=>R!==void 0).join(" ");d["User-Agent"]=k;const I=t.makeBody({args:c,model:e,task:p,mapping:r});let T;typeof u=="string"?T=u:u===!0&&(T="include");const N={headers:d,method:"POST",body:I,...T?{credentials:T}:void 0,signal:w};return{url:f,info:N}}async function Lg(e){ia||(ia=await Dg());const t=ia[e];if(((t==null?void 0:t.models.length)??0)<=0)throw new me(`No default model defined for task ${e}, please define the model explicitly.`);return t.models[0].id}async function Dg(){const e=`${Qs}/api/tasks`,t=await fetch(e);if(!t.ok)throw new _r("Failed to load tasks definitions from Hugging Face Hub.",{url:e,method:"GET"},{requestId:t.headers.get("x-request-id")??"",status:t.status,body:await t.text()});return await t.json()}function Ug(e,t){if(!e.startsWith(`${t}/`))throw new me(`Models from ${t} must be prefixed by "${t}/". Got "${e}".`);return e.slice(t.length+1)}function Og(e){let t,n,r,i=!1;return function(a){t===void 0?(t=a,n=0,r=-1):t=Bg(t,a);const s=t.length;let l=0;for(;n<s;){i&&(t[n]===10&&(l=++n),i=!1);let c=-1;for(;n<s&&c===-1;++n)switch(t[n]){case 58:r===-1&&(r=n-l);break;case 13:i=!0;case 10:c=n;break}if(c===-1)break;e(t.subarray(l,c),r),l=n,r=-1}l===s?t=void 0:l!==0&&(t=t.subarray(l),n-=l)}}function Fg(e,t,n){let r=Sc();const i=new TextDecoder;return function(a,s){if(a.length===0)n==null||n(r),r=Sc();else if(s>0){const l=i.decode(a.subarray(0,s)),c=s+(a[s+1]===32?2:1),m=i.decode(a.subarray(c));switch(l){case"data":r.data=r.data?r.data+`
`+m:m;break;case"event":r.event=m;break;case"id":e(r.id=m);break;case"retry":{const u=parseInt(m,10);isNaN(u)||t(r.retry=u);break}}}}}function Bg(e,t){const n=new Uint8Array(e.length+t.length);return n.set(e),n.set(t,e.length),n}function Sc(){return{data:"",event:"",id:"",retry:void 0}}function ut(e){let t=null;if(e instanceof Blob||e instanceof ArrayBuffer)t="[Blob or ArrayBuffer]";else if(typeof e=="string")try{t=JSON.parse(e)}catch{t=e}return t.accessToken&&(t.accessToken="[REDACTED]"),t}async function Q(e,t,n){var l;const{url:r,info:i}=await Cn(e,t,n),o=await((n==null?void 0:n.fetch)??fetch)(r,i),a={url:r,info:i};if((n==null?void 0:n.retry_on_error)!==!1&&o.status===503)return Q(e,t,n);if(!o.ok){const c=o.headers.get("Content-Type");if(["application/json","application/problem+json"].some(u=>c==null?void 0:c.startsWith(u))){const u=await o.json();throw[400,422,404,500].includes(o.status)&&(n!=null&&n.chatCompletion)?new ke(`Provider ${e.provider} does not seem to support chat completion for model ${e.model} . Error: ${JSON.stringify(u.error)}`,{url:r,method:i.method??"GET",headers:i.headers,body:ut(i.body)},{requestId:o.headers.get("x-request-id")??"",status:o.status,body:u}):typeof u.error=="string"||typeof u.detail=="string"||typeof u.message=="string"?new ke(`Failed to perform inference: ${u.error??u.detail??u.message}`,{url:r,method:i.method??"GET",headers:i.headers,body:ut(i.body)},{requestId:o.headers.get("x-request-id")??"",status:o.status,body:u}):new ke("Failed to perform inference: an HTTP error occurred when requesting the provider.",{url:r,method:i.method??"GET",headers:i.headers,body:ut(i.body)},{requestId:o.headers.get("x-request-id")??"",status:o.status,body:u})}const m=c!=null&&c.startsWith("text/plain;")?await o.text():void 0;throw new ke(`Failed to perform inference: ${m??"an HTTP error occurred when requesting the provider"}`,{url:r,method:i.method??"GET",headers:i.headers,body:ut(i.body)},{requestId:o.headers.get("x-request-id")??"",status:o.status,body:m??""})}return(l=o.headers.get("Content-Type"))!=null&&l.startsWith("application/json")?{data:await o.json(),requestContext:a}:{data:await o.blob(),requestContext:a}}async function*Eo(e,t,n){var m,u;const{url:r,info:i}=await Cn({...e,stream:!0},t,n),o=await((n==null?void 0:n.fetch)??fetch)(r,i);if((n==null?void 0:n.retry_on_error)!==!1&&o.status===503)return yield*Eo(e,t,n);if(!o.ok){if((m=o.headers.get("Content-Type"))!=null&&m.startsWith("application/json")){const p=await o.json();if([400,422,404,500].includes(o.status)&&(n!=null&&n.chatCompletion))throw new ke(`Provider ${e.provider} does not seem to support chat completion for model ${e.model} . Error: ${JSON.stringify(p.error)}`,{url:r,method:i.method??"GET",headers:i.headers,body:ut(i.body)},{requestId:o.headers.get("x-request-id")??"",status:o.status,body:p});if(typeof p.error=="string")throw new ke(`Failed to perform inference: ${p.error}`,{url:r,method:i.method??"GET",headers:i.headers,body:ut(i.body)},{requestId:o.headers.get("x-request-id")??"",status:o.status,body:p});if(p.error&&"message"in p.error&&typeof p.error.message=="string")throw new ke(`Failed to perform inference: ${p.error.message}`,{url:r,method:i.method??"GET",headers:i.headers,body:ut(i.body)},{requestId:o.headers.get("x-request-id")??"",status:o.status,body:p});if(typeof p.message=="string")throw new ke(`Failed to perform inference: ${p.message}`,{url:r,method:i.method??"GET",headers:i.headers,body:ut(i.body)},{requestId:o.headers.get("x-request-id")??"",status:o.status,body:p})}throw new ke("Failed to perform inference: an HTTP error occurred when requesting the provider.",{url:r,method:i.method??"GET",headers:i.headers,body:ut(i.body)},{requestId:o.headers.get("x-request-id")??"",status:o.status,body:""})}if(!((u=o.headers.get("content-type"))!=null&&u.startsWith("text/event-stream")))throw new ke("Failed to perform inference: server does not support event stream content type, it returned "+o.headers.get("content-type"),{url:r,method:i.method??"GET",headers:i.headers,body:ut(i.body)},{requestId:o.headers.get("x-request-id")??"",status:o.status,body:""});if(!o.body)return;const a=o.body.getReader();let s=[];const c=Og(Fg(()=>{},()=>{},p=>{s.push(p)}));try{for(;;){const{done:p,value:w}=await a.read();if(p)return;c(w);for(const S of s)if(S.data.length>0){if(S.data==="[DONE]")return;const x=JSON.parse(S.data);if(typeof x=="object"&&x!==null&&"error"in x){const M=typeof x.error=="string"?x.error:typeof x.error=="object"&&x.error&&"message"in x.error&&typeof x.error.message=="string"?x.error.message:JSON.stringify(x.error);throw new ke(`Failed to perform inference: an occurred while streaming the response: ${M}`,{url:r,method:i.method??"GET",headers:i.headers,body:ut(i.body)},{requestId:o.headers.get("x-request-id")??"",status:o.status,body:x})}yield x}s=[]}}finally{a.releaseLock()}}async function Vg(e,t){ni().warn("The request method is deprecated and will be removed in a future version of huggingface.js. Use specific task functions instead.");const r=await W(e.provider,e.model,e.endpointUrl),i=K(r,t==null?void 0:t.task);return(await Q(e,i,t)).data}async function*zg(e,t){ni().warn("The streamingRequest method is deprecated and will be removed in a future version of huggingface.js. Use specific task functions instead.");const r=await W(e.provider,e.model,e.endpointUrl),i=K(r,t==null?void 0:t.task);yield*Eo(e,i,t)}function cp(e){return"data"in e?e:{...Z(e,"inputs"),data:e.inputs}}async function qg(e,t){const n=await W(e.provider,e.model,e.endpointUrl),r=K(n,"audio-classification"),i=cp(e),{data:o}=await Q(i,r,{...t,task:"audio-classification"});return r.getResponse(o)}async function Hg(e,t){const n="inputs"in e?e.model:void 0,r=await W(e.provider,n),i=K(r,"audio-to-audio"),o=cp(e),{data:a}=await Q(o,i,{...t,task:"audio-to-audio"});return i.getResponse(a)}async function Wg(e,t){const n=await W(e.provider,e.model,e.endpointUrl),r=K(n,"automatic-speech-recognition"),i=await r.preparePayloadAsync(e),{data:o}=await Q(i,r,{...t,task:"automatic-speech-recognition"});if(!(typeof(o==null?void 0:o.text)=="string"))throw new $("Received malformed response from automatic-speech-recognition API");return r.getResponse(o)}async function Kg(e,t){const n=await W(e.provider,e.model,e.endpointUrl),r=K(n,"text-to-speech"),{data:i}=await Q(e,r,{...t,task:"text-to-speech"});return r.getResponse(i)}function rl(e){return"data"in e?e:{...Z(e,"inputs"),data:e.inputs}}async function Xg(e,t){const n=await W(e.provider,e.model,e.endpointUrl),r=K(n,"image-classification"),i=rl(e),{data:o}=await Q(i,r,{...t,task:"image-classification"});return r.getResponse(o)}async function Qg(e,t){const n=await W(e.provider,e.model,e.endpointUrl),r=K(n,"image-segmentation"),i=await r.preparePayloadAsync(e),{data:o}=await Q(i,r,{...t,task:"image-segmentation"}),{url:a,info:s}=await Cn(e,r,{...t,task:"image-segmentation"});return r.getResponse(o,a,s.headers)}async function Yg(e,t){const n=await W(e.provider,e.model,e.endpointUrl),r=K(n,"image-to-image"),i=await r.preparePayloadAsync(e),{data:o}=await Q(i,r,{...t,task:"image-to-image"}),{url:a,info:s}=await Cn(e,r,{...t,task:"image-to-image"});return r.getResponse(o,a,s.headers)}async function Jg(e,t){const n=await W(e.provider,e.model,e.endpointUrl),r=K(n,"image-to-text"),i=rl(e),{data:o}=await Q(i,r,{...t,task:"image-to-text"});return r.getResponse(o[0])}async function Zg(e,t){const n=await W(e.provider,e.model,e.endpointUrl),r=K(n,"image-to-video"),i=await r.preparePayloadAsync(e),{data:o}=await Q(i,r,{...t,task:"image-to-video"}),{url:a,info:s}=await Cn(e,r,{...t,task:"image-to-video"});return r.getResponse(o,a,s.headers)}async function Gg(e,t){const n=await W(e.provider,e.model,e.endpointUrl),r=K(n,"object-detection"),i=rl(e),{data:o}=await Q(i,r,{...t,task:"object-detection"});return r.getResponse(o)}async function ey(e,t){const n=await W(e.provider,e.model,e.endpointUrl),r=K(n,"text-to-image"),{data:i}=await Q(e,r,{...t,task:"text-to-image"}),{url:o,info:a}=await Cn(e,r,{...t,task:"text-to-image"});return r.getResponse(i,o,a.headers,t==null?void 0:t.outputType)}async function ty(e,t){const n=await W(e.provider,e.model,e.endpointUrl),r=K(n,"text-to-video"),{data:i}=await Q(e,r,{...t,task:"text-to-video"}),{url:o,info:a}=await Cn(e,r,{...t,task:"text-to-video"});return r.getResponse(i,o,a.headers)}async function ny(e){return e.inputs instanceof Blob?{...e,inputs:{image:at(new Uint8Array(await e.inputs.arrayBuffer()))}}:{...e,inputs:{image:at(new Uint8Array(e.inputs.image instanceof ArrayBuffer?e.inputs.image:await e.inputs.image.arrayBuffer()))}}}async function ry(e,t){const n=await W(e.provider,e.model,e.endpointUrl),r=K(n,"zero-shot-image-classification"),i=await ny(e),{data:o}=await Q(i,r,{...t,task:"zero-shot-image-classification"});return r.getResponse(o)}async function iy(e,t){const n=await W(e.provider,e.model,e.endpointUrl),r=K(n,"conversational"),{data:i}=await Q(e,r,{...t,task:"conversational"});return r.getResponse(i)}async function*oy(e,t){const n=await W(e.provider,e.model,e.endpointUrl),r=K(n,"conversational");yield*Eo(e,r,{...t,task:"conversational"})}async function ay(e,t){const n=await W(e.provider,e.model,e.endpointUrl),r=K(n,"feature-extraction"),{data:i}=await Q(e,r,{...t,task:"feature-extraction"});return r.getResponse(i)}async function sy(e,t){const n=await W(e.provider,e.model,e.endpointUrl),r=K(n,"fill-mask"),{data:i}=await Q(e,r,{...t,task:"fill-mask"});return r.getResponse(i)}async function ly(e,t){const n=await W(e.provider,e.model,e.endpointUrl),r=K(n,"question-answering"),{data:i}=await Q(e,r,{...t,task:"question-answering"});return r.getResponse(i)}async function cy(e,t){const n=await W(e.provider,e.model,e.endpointUrl),r=K(n,"sentence-similarity"),{data:i}=await Q(e,r,{...t,task:"sentence-similarity"});return r.getResponse(i)}async function uy(e,t){const n=await W(e.provider,e.model,e.endpointUrl),r=K(n,"summarization"),{data:i}=await Q(e,r,{...t,task:"summarization"});return r.getResponse(i)}async function dy(e,t){const n=await W(e.provider,e.model,e.endpointUrl),r=K(n,"table-question-answering"),{data:i}=await Q(e,r,{...t,task:"table-question-answering"});return r.getResponse(i)}async function py(e,t){const n=await W(e.provider,e.model,e.endpointUrl),r=K(n,"text-classification"),{data:i}=await Q(e,r,{...t,task:"text-classification"});return r.getResponse(i)}async function my(e,t){const n=await W(e.provider,e.model,e.endpointUrl),r=K(n,"text-generation"),{data:i}=await Q(e,r,{...t,task:"text-generation"});return r.getResponse(i)}async function*fy(e,t){const n=await W(e.provider,e.model,e.endpointUrl),r=K(n,"text-generation");yield*Eo(e,r,{...t,task:"text-generation"})}async function hy(e,t){const n=await W(e.provider,e.model,e.endpointUrl),r=K(n,"token-classification"),{data:i}=await Q(e,r,{...t,task:"token-classification"});return r.getResponse(i)}async function gy(e,t){const n=await W(e.provider,e.model,e.endpointUrl),r=K(n,"translation"),{data:i}=await Q(e,r,{...t,task:"translation"});return r.getResponse(i)}async function yy(e,t){const n=await W(e.provider,e.model,e.endpointUrl),r=K(n,"zero-shot-classification"),{data:i}=await Q(e,r,{...t,task:"zero-shot-classification"});return r.getResponse(i)}async function vy(e,t){const n=await W(e.provider,e.model,e.endpointUrl),r=K(n,"document-question-answering"),i={...e,inputs:{question:e.inputs.question,image:at(new Uint8Array(await e.inputs.image.arrayBuffer()))}},{data:o}=await Q(i,r,{...t,task:"document-question-answering"});return r.getResponse(o)}async function wy(e,t){const n=await W(e.provider,e.model,e.endpointUrl),r=K(n,"visual-question-answering"),i={...e,inputs:{question:e.inputs.question,image:at(new Uint8Array(await e.inputs.image.arrayBuffer()))}},{data:o}=await Q(i,r,{...t,task:"visual-question-answering"});return r.getResponse(o)}async function by(e,t){const n=await W(e.provider,e.model,e.endpointUrl),r=K(n,"tabular-classification"),{data:i}=await Q(e,r,{...t,task:"tabular-classification"});return r.getResponse(i)}async function xy(e,t){const n=await W(e.provider,e.model,e.endpointUrl),r=K(n,"tabular-regression"),{data:i}=await Q(e,r,{...t,task:"tabular-regression"});return r.getResponse(i)}const ky=Object.freeze(Object.defineProperty({__proto__:null,audioClassification:qg,audioToAudio:Hg,automaticSpeechRecognition:Wg,chatCompletion:iy,chatCompletionStream:oy,documentQuestionAnswering:vy,featureExtraction:ay,fillMask:sy,imageClassification:Xg,imageSegmentation:Qg,imageToImage:Yg,imageToText:Jg,imageToVideo:Zg,objectDetection:Gg,questionAnswering:ly,request:Vg,sentenceSimilarity:cy,streamingRequest:zg,summarization:uy,tableQuestionAnswering:dy,tabularClassification:by,tabularRegression:xy,textClassification:py,textGeneration:my,textGenerationStream:fy,textToImage:ey,textToSpeech:Kg,textToVideo:ty,tokenClassification:hy,translation:gy,visualQuestionAnswering:wy,zeroShotClassification:yy,zeroShotImageClassification:ry},Symbol.toStringTag,{value:"Module"}));function _y(e){return Object.entries(e)}class il{constructor(t="",n={}){C(this,"accessToken");C(this,"defaultOptions");this.accessToken=t,this.defaultOptions=n;for(const[r,i]of _y(ky))Object.defineProperty(this,r,{enumerable:!1,value:(o,a)=>i({endpointUrl:n.endpointUrl,accessToken:t,...o},{...Z(n,["endpointUrl"]),...a})})}endpoint(t){return new il(this.accessToken,{...this.defaultOptions,endpointUrl:t})}}class Sy extends il{}var b=Object.freeze({Text:"Text",NumericLiteral:"NumericLiteral",StringLiteral:"StringLiteral",Identifier:"Identifier",Equals:"Equals",OpenParen:"OpenParen",CloseParen:"CloseParen",OpenStatement:"OpenStatement",CloseStatement:"CloseStatement",OpenExpression:"OpenExpression",CloseExpression:"CloseExpression",OpenSquareBracket:"OpenSquareBracket",CloseSquareBracket:"CloseSquareBracket",OpenCurlyBracket:"OpenCurlyBracket",CloseCurlyBracket:"CloseCurlyBracket",Comma:"Comma",Dot:"Dot",Colon:"Colon",Pipe:"Pipe",CallOperator:"CallOperator",AdditiveBinaryOperator:"AdditiveBinaryOperator",MultiplicativeBinaryOperator:"MultiplicativeBinaryOperator",ComparisonBinaryOperator:"ComparisonBinaryOperator",UnaryOperator:"UnaryOperator",Comment:"Comment"}),Ut=class{constructor(e,t){this.value=e,this.type=t}};function Cc(e){return/\w/.test(e)}function gr(e){return/[0-9]/.test(e)}var Cy=[["{%",b.OpenStatement],["%}",b.CloseStatement],["{{",b.OpenExpression],["}}",b.CloseExpression],["(",b.OpenParen],[")",b.CloseParen],["{",b.OpenCurlyBracket],["}",b.CloseCurlyBracket],["[",b.OpenSquareBracket],["]",b.CloseSquareBracket],[",",b.Comma],[".",b.Dot],[":",b.Colon],["|",b.Pipe],["<=",b.ComparisonBinaryOperator],[">=",b.ComparisonBinaryOperator],["==",b.ComparisonBinaryOperator],["!=",b.ComparisonBinaryOperator],["<",b.ComparisonBinaryOperator],[">",b.ComparisonBinaryOperator],["+",b.AdditiveBinaryOperator],["-",b.AdditiveBinaryOperator],["~",b.AdditiveBinaryOperator],["*",b.MultiplicativeBinaryOperator],["/",b.MultiplicativeBinaryOperator],["%",b.MultiplicativeBinaryOperator],["=",b.Equals]],Ay=new Map([["n",`
`],["t","	"],["r","\r"],["b","\b"],["f","\f"],["v","\v"],["'","'"],['"','"'],["\\","\\"]]);function Ey(e,t={}){return e.endsWith(`
`)&&(e=e.slice(0,-1)),t.lstrip_blocks&&(e=e.replace(/^[ \t]*({[#%-])/gm,"$1")),t.trim_blocks&&(e=e.replace(/([#%-]})\n/g,"$1")),e.replace(/-%}\s*/g,"%}").replace(/\s*{%-/g,"{%").replace(/-}}\s*/g,"}}").replace(/\s*{{-/g,"{{").replace(/-#}\s*/g,"#}").replace(/\s*{#-/g,"{#").replace(/{%\s*(end)?generation\s*%}/gs,"")}function Iy(e,t={}){var s,l;const n=[],r=Ey(e,t);let i=0,o=0;const a=c=>{let m="";for(;c(r[i]);){if(r[i]==="\\"){if(++i,i>=r.length)throw new SyntaxError("Unexpected end of input");const u=r[i++],p=Ay.get(u);if(p===void 0)throw new SyntaxError(`Unexpected escaped character: ${u}`);m+=p;continue}if(m+=r[i++],i>=r.length)throw new SyntaxError("Unexpected end of input")}return m};e:for(;i<r.length;){const c=(s=n.at(-1))==null?void 0:s.type;if(c===void 0||c===b.CloseStatement||c===b.CloseExpression||c===b.Comment){let u="";for(;i<r.length&&!(r[i]==="{"&&(r[i+1]==="%"||r[i+1]==="{"||r[i+1]==="#"));)u+=r[i++];if(u.length>0){n.push(new Ut(u,b.Text));continue}}if(r[i]==="{"&&r[i+1]==="#"){i+=2;let u="";for(;r[i]!=="#"||r[i+1]!=="}";){if(i+2>=r.length)throw new SyntaxError("Missing end of comment tag");u+=r[i++]}n.push(new Ut(u,b.Comment)),i+=2;continue}a(u=>/\s/.test(u));const m=r[i];if(m==="-"||m==="+"){const u=(l=n.at(-1))==null?void 0:l.type;if(u===b.Text||u===void 0)throw new SyntaxError(`Unexpected character: ${m}`);switch(u){case b.Identifier:case b.NumericLiteral:case b.StringLiteral:case b.CloseParen:case b.CloseSquareBracket:break;default:{++i;const p=a(gr);n.push(new Ut(`${m}${p}`,p.length>0?b.NumericLiteral:b.UnaryOperator));continue}}}for(const[u,p]of Cy){if(u==="}}"&&o>0)continue;if(r.slice(i,i+u.length)===u){n.push(new Ut(u,p)),p===b.OpenExpression?o=0:p===b.OpenCurlyBracket?++o:p===b.CloseCurlyBracket&&--o,i+=u.length;continue e}}if(m==="'"||m==='"'){++i;const u=a(p=>p!==m);n.push(new Ut(u,b.StringLiteral)),++i;continue}if(gr(m)){let u=a(gr);if(r[i]==="."&&gr(r[i+1])){++i;const p=a(gr);u=`${u}.${p}`}n.push(new Ut(u,b.NumericLiteral));continue}if(Cc(m)){const u=a(Cc);n.push(new Ut(u,b.Identifier));continue}throw new SyntaxError(`Unexpected character: ${m}`)}return n}var gt=class{constructor(){C(this,"type","Statement")}},Ty=class extends gt{constructor(t){super();C(this,"type","Program");this.body=t}},Ry=class extends gt{constructor(t,n,r){super();C(this,"type","If");this.test=t,this.body=n,this.alternate=r}},Py=class extends gt{constructor(t,n,r,i){super();C(this,"type","For");this.loopvar=t,this.iterable=n,this.body=r,this.defaultBlock=i}},Ny=class extends gt{constructor(){super(...arguments);C(this,"type","Break")}},$y=class extends gt{constructor(){super(...arguments);C(this,"type","Continue")}},jy=class extends gt{constructor(t,n,r){super();C(this,"type","Set");this.assignee=t,this.value=n,this.body=r}},My=class extends gt{constructor(t,n,r){super();C(this,"type","Macro");this.name=t,this.args=n,this.body=r}},Ly=class extends gt{constructor(t){super();C(this,"type","Comment");this.value=t}},Ge=class extends gt{constructor(){super(...arguments);C(this,"type","Expression")}},Dy=class extends Ge{constructor(t,n,r){super();C(this,"type","MemberExpression");this.object=t,this.property=n,this.computed=r}},Ac=class extends Ge{constructor(t,n){super();C(this,"type","CallExpression");this.callee=t,this.args=n}},Tn=class extends Ge{constructor(t){super();C(this,"type","Identifier");this.value=t}},ar=class extends Ge{constructor(t){super();C(this,"type","Literal");this.value=t}},Uy=class extends ar{constructor(){super(...arguments);C(this,"type","IntegerLiteral")}},Oy=class extends ar{constructor(){super(...arguments);C(this,"type","FloatLiteral")}},Ec=class extends ar{constructor(){super(...arguments);C(this,"type","StringLiteral")}},Fy=class extends ar{constructor(){super(...arguments);C(this,"type","ArrayLiteral")}},Ic=class extends ar{constructor(){super(...arguments);C(this,"type","TupleLiteral")}},By=class extends ar{constructor(){super(...arguments);C(this,"type","ObjectLiteral")}},yr=class extends Ge{constructor(t,n,r){super();C(this,"type","BinaryExpression");this.operator=t,this.left=n,this.right=r}},Vy=class extends Ge{constructor(t,n){super();C(this,"type","FilterExpression");this.operand=t,this.filter=n}},zy=class extends gt{constructor(t,n){super();C(this,"type","FilterStatement");this.filter=t,this.body=n}},qy=class extends Ge{constructor(t,n){super();C(this,"type","SelectExpression");this.lhs=t,this.test=n}},Hy=class extends Ge{constructor(t,n,r){super();C(this,"type","TestExpression");this.operand=t,this.negate=n,this.test=r}},Wy=class extends Ge{constructor(t,n){super();C(this,"type","UnaryExpression");this.operator=t,this.argument=n}},Ky=class extends Ge{constructor(t=void 0,n=void 0,r=void 0){super();C(this,"type","SliceExpression");this.start=t,this.stop=n,this.step=r}},Xy=class extends Ge{constructor(t,n){super();C(this,"type","KeywordArgumentExpression");this.key=t,this.value=n}},Qy=class extends Ge{constructor(t){super();C(this,"type","SpreadExpression");this.argument=t}},Yy=class extends gt{constructor(t,n,r){super();C(this,"type","CallStatement");this.call=t,this.callerArgs=n,this.body=r}},Jy=class extends Ge{constructor(t,n,r){super();C(this,"type","Ternary");this.condition=t,this.trueExpr=n,this.falseExpr=r}};function Zy(e){const t=new Ty([]);let n=0;function r(y,v){const _=e[n++];if(!_||_.type!==y)throw new Error(`Parser Error: ${v}. ${_.type} !== ${y}.`);return _}function i(y){if(!l(y))throw new SyntaxError(`Expected ${y}`);++n}function o(){switch(e[n].type){case b.Comment:return new Ly(e[n++].value);case b.Text:return c();case b.OpenStatement:return m();case b.OpenExpression:return u();default:throw new SyntaxError(`Unexpected token type: ${e[n].type}`)}}function a(...y){return n+y.length<=e.length&&y.every((v,_)=>v===e[n+_].type)}function s(...y){var v,_,E;return((v=e[n])==null?void 0:v.type)===b.OpenStatement&&((_=e[n+1])==null?void 0:_.type)===b.Identifier&&y.includes((E=e[n+1])==null?void 0:E.value)}function l(...y){return n+y.length<=e.length&&y.every((v,_)=>e[n+_].type==="Identifier"&&v===e[n+_].value)}function c(){return new Ec(r(b.Text,"Expected text token").value)}function m(){if(r(b.OpenStatement,"Expected opening statement token"),e[n].type!==b.Identifier)throw new SyntaxError(`Unknown statement, got ${e[n].type}`);const y=e[n].value;let v;switch(y){case"set":++n,v=p();break;case"if":++n,v=w(),r(b.OpenStatement,"Expected {% token"),i("endif"),r(b.CloseStatement,"Expected %} token");break;case"macro":++n,v=S(),r(b.OpenStatement,"Expected {% token"),i("endmacro"),r(b.CloseStatement,"Expected %} token");break;case"for":++n,v=M(),r(b.OpenStatement,"Expected {% token"),i("endfor"),r(b.CloseStatement,"Expected %} token");break;case"call":{++n;let _=null;a(b.OpenParen)&&(_=O());const E=De();if(E.type!=="Identifier")throw new SyntaxError("Expected identifier following call statement");const L=O();r(b.CloseStatement,"Expected closing statement token");const Ue=[];for(;!s("endcall");)Ue.push(o());r(b.OpenStatement,"Expected '{%'"),i("endcall"),r(b.CloseStatement,"Expected closing statement token");const ye=new Ac(E,L);v=new Yy(ye,_,Ue);break}case"break":++n,r(b.CloseStatement,"Expected closing statement token"),v=new Ny;break;case"continue":++n,r(b.CloseStatement,"Expected closing statement token"),v=new $y;break;case"filter":{++n;let _=De();_ instanceof Tn&&a(b.OpenParen)&&(_=Y(_)),r(b.CloseStatement,"Expected closing statement token");const E=[];for(;!s("endfilter");)E.push(o());r(b.OpenStatement,"Expected '{%'"),i("endfilter"),r(b.CloseStatement,"Expected '%}'"),v=new zy(_,E);break}default:throw new SyntaxError(`Unknown statement type: ${y}`)}return v}function u(){r(b.OpenExpression,"Expected opening expression token");const y=f();return r(b.CloseExpression,"Expected closing expression token"),y}function p(){const y=x();let v=null;const _=[];if(a(b.Equals))++n,v=x();else{for(r(b.CloseStatement,"Expected %} token");!s("endset");)_.push(o());r(b.OpenStatement,"Expected {% token"),i("endset")}return r(b.CloseStatement,"Expected closing statement token"),new jy(y,v,_)}function w(){const y=f();r(b.CloseStatement,"Expected closing statement token");const v=[],_=[];for(;!s("elif","else","endif");)v.push(o());if(s("elif")){++n,++n;const E=w();_.push(E)}else if(s("else"))for(++n,++n,r(b.CloseStatement,"Expected closing statement token");!s("endif");)_.push(o());return new Ry(y,v,_)}function S(){const y=De();if(y.type!=="Identifier")throw new SyntaxError("Expected identifier following macro statement");const v=O();r(b.CloseStatement,"Expected closing statement token");const _=[];for(;!s("endmacro");)_.push(o());return new My(y,v,_)}function x(y=!1){const v=y?De:f,_=[v()],E=a(b.Comma);for(;E&&(++n,_.push(v()),!!a(b.Comma)););return E?new Ic(_):_[0]}function M(){const y=x(!0);if(!(y instanceof Tn||y instanceof Ic))throw new SyntaxError(`Expected identifier/tuple for the loop variable, got ${y.type} instead`);if(!l("in"))throw new SyntaxError("Expected `in` keyword following loop variable");++n;const v=f();r(b.CloseStatement,"Expected closing statement token");const _=[];for(;!s("endfor","else");)_.push(o());const E=[];if(s("else"))for(++n,++n,r(b.CloseStatement,"Expected closing statement token");!s("endfor");)E.push(o());return new Py(y,v,_,E)}function f(){return d()}function d(){const y=g();if(l("if")){++n;const v=g();if(l("else")){++n;const _=d();return new Jy(v,y,_)}else return new qy(y,v)}return y}function g(){let y=k();for(;l("or");){const v=e[n];++n;const _=k();y=new yr(v,y,_)}return y}function k(){let y=I();for(;l("and");){const v=e[n];++n;const _=I();y=new yr(v,y,_)}return y}function I(){let y;for(;l("not");){const v=e[n];++n;const _=I();y=new Wy(v,_)}return y??T()}function T(){let y=N();for(;;){let v;if(l("not","in"))v=new Ut("not in",b.Identifier),n+=2;else if(l("in"))v=e[n++];else if(a(b.ComparisonBinaryOperator))v=e[n++];else break;const _=N();y=new yr(v,y,_)}return y}function N(){let y=an();for(;a(b.AdditiveBinaryOperator);){const v=e[n];++n;const _=an();y=new yr(v,y,_)}return y}function R(){const y=yt(De());return a(b.OpenParen)?Y(y):y}function Y(y){let v=new Ac(y,O());return v=yt(v),a(b.OpenParen)&&(v=Y(v)),v}function O(){r(b.OpenParen,"Expected opening parenthesis for arguments list");const y=Ae();return r(b.CloseParen,"Expected closing parenthesis for arguments list"),y}function Ae(){const y=[];for(;!a(b.CloseParen);){let v;if(e[n].type===b.MultiplicativeBinaryOperator&&e[n].value==="*"){++n;const _=f();v=new Qy(_)}else if(v=f(),a(b.Equals)){if(++n,!(v instanceof Tn))throw new SyntaxError("Expected identifier for keyword argument");const _=f();v=new Xy(v,_)}y.push(v),a(b.Comma)&&++n}return y}function Le(){const y=[];let v=!1;for(;!a(b.CloseSquareBracket);)a(b.Colon)?(y.push(void 0),++n,v=!0):(y.push(f()),a(b.Colon)&&(++n,v=!0));if(y.length===0)throw new SyntaxError("Expected at least one argument for member/slice expression");if(v){if(y.length>3)throw new SyntaxError("Expected 0-3 arguments for slice expression");return new Ky(...y)}return y[0]}function yt(y){for(;a(b.Dot)||a(b.OpenSquareBracket);){const v=e[n];++n;let _;const E=v.type===b.OpenSquareBracket;if(E)_=Le(),r(b.CloseSquareBracket,"Expected closing square bracket");else if(_=De(),_.type!=="Identifier")throw new SyntaxError("Expected identifier following dot operator");y=new Dy(y,_,E)}return y}function an(){let y=En();for(;a(b.MultiplicativeBinaryOperator);){const v=e[n++],_=En();y=new yr(v,y,_)}return y}function En(){let y=Mt();for(;l("is");){++n;const v=l("not");v&&++n;const _=De();if(!(_ instanceof Tn))throw new SyntaxError("Expected identifier for the test");y=new Hy(y,v,_)}return y}function Mt(){let y=R();for(;a(b.Pipe);){++n;let v=De();if(!(v instanceof Tn))throw new SyntaxError("Expected identifier for the filter");a(b.OpenParen)&&(v=Y(v)),y=new Vy(y,v)}return y}function De(){const y=e[n++];switch(y.type){case b.NumericLiteral:{const v=y.value;return v.includes(".")?new Oy(Number(v)):new Uy(Number(v))}case b.StringLiteral:{let v=y.value;for(;a(b.StringLiteral);)v+=e[n++].value;return new Ec(v)}case b.Identifier:return new Tn(y.value);case b.OpenParen:{const v=x();return r(b.CloseParen,"Expected closing parenthesis, got ${tokens[current].type} instead."),v}case b.OpenSquareBracket:{const v=[];for(;!a(b.CloseSquareBracket);)v.push(f()),a(b.Comma)&&++n;return++n,new Fy(v)}case b.OpenCurlyBracket:{const v=new Map;for(;!a(b.CloseCurlyBracket);){const _=f();r(b.Colon,"Expected colon between key and value in object literal");const E=f();v.set(_,E),a(b.Comma)&&++n}return++n,new By(v)}default:throw new SyntaxError(`Unexpected token: ${y.type}`)}}for(;n<e.length;)t.body.push(o());return t}function Gy(e,t,n=1){t===void 0&&(t=e,e=0);const r=[];for(let i=e;i<t;i+=n)r.push(i);return r}function Tc(e,t,n,r=1){const i=Math.sign(r);i>=0?(t=(t??(t=0))<0?Math.max(e.length+t,0):Math.min(t,e.length),n=(n??(n=e.length))<0?Math.max(e.length+n,0):Math.min(n,e.length)):(t=(t??(t=e.length-1))<0?Math.max(e.length+t,-1):Math.min(t,e.length-1),n=(n??(n=-1))<-1?Math.max(e.length+n,-1):Math.min(n,e.length-1));const o=[];for(let a=t;i*a<i*n;a+=r)o.push(e[a]);return o}function ev(e){return e.replace(/\b\w/g,t=>t.toUpperCase())}function tv(e){return nv(new Date,e)}function nv(e,t){const n=new Intl.DateTimeFormat(void 0,{month:"long"}),r=new Intl.DateTimeFormat(void 0,{month:"short"}),i=o=>o<10?"0"+o:o.toString();return t.replace(/%[YmdbBHM%]/g,o=>{switch(o){case"%Y":return e.getFullYear().toString();case"%m":return i(e.getMonth()+1);case"%d":return i(e.getDate());case"%b":return r.format(e);case"%B":return n.format(e);case"%H":return i(e.getHours());case"%M":return i(e.getMinutes());case"%%":return"%";default:return o}})}function rv(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function iv(e,t,n,r){if(r===0)return e;let i=r==null||r<0?1/0:r;const o=t.length===0?new RegExp("(?=)","gu"):new RegExp(rv(t),"gu");return e.replaceAll(o,a=>i>0?(--i,n):a)}var Rc=class extends Error{},Pc=class extends Error{},St=class{constructor(e=void 0){C(this,"type","RuntimeValue");C(this,"value");C(this,"builtins",new Map);this.value=e}__bool__(){return new q(!!this.value)}toString(){return String(this.value)}},F=class extends St{constructor(){super(...arguments);C(this,"type","IntegerValue")}},ue=class extends St{constructor(){super(...arguments);C(this,"type","FloatValue")}toString(){return this.value%1===0?this.value.toFixed(1):this.value.toString()}},j=class extends St{constructor(){super(...arguments);C(this,"type","StringValue");C(this,"builtins",new Map([["upper",new le(()=>new j(this.value.toUpperCase()))],["lower",new le(()=>new j(this.value.toLowerCase()))],["strip",new le(()=>new j(this.value.trim()))],["title",new le(()=>new j(ev(this.value)))],["capitalize",new le(()=>new j(this.value.charAt(0).toUpperCase()+this.value.slice(1)))],["length",new F(this.value.length)],["rstrip",new le(()=>new j(this.value.trimEnd()))],["lstrip",new le(()=>new j(this.value.trimStart()))],["startswith",new le(t=>{if(t.length===0)throw new Error("startswith() requires at least one argument");const n=t[0];if(n instanceof j)return new q(this.value.startsWith(n.value));if(n instanceof X){for(const r of n.value){if(!(r instanceof j))throw new Error("startswith() tuple elements must be strings");if(this.value.startsWith(r.value))return new q(!0)}return new q(!1)}throw new Error("startswith() argument must be a string or tuple of strings")})],["endswith",new le(t=>{if(t.length===0)throw new Error("endswith() requires at least one argument");const n=t[0];if(n instanceof j)return new q(this.value.endsWith(n.value));if(n instanceof X){for(const r of n.value){if(!(r instanceof j))throw new Error("endswith() tuple elements must be strings");if(this.value.endsWith(r.value))return new q(!0)}return new q(!1)}throw new Error("endswith() argument must be a string or tuple of strings")})],["split",new le(t=>{const n=t[0]??new Ne;if(!(n instanceof j||n instanceof Ne))throw new Error("sep argument must be a string or null");const r=t[1]??new F(-1);if(!(r instanceof F))throw new Error("maxsplit argument must be a number");let i=[];if(n instanceof Ne){const o=this.value.trimStart();for(const{0:a,index:s}of o.matchAll(/\S+/g)){if(r.value!==-1&&i.length>=r.value&&s!==void 0){i.push(a+o.slice(s+a.length));break}i.push(a)}}else{if(n.value==="")throw new Error("empty separator");i=this.value.split(n.value),r.value!==-1&&i.length>r.value&&i.push(i.splice(r.value).join(n.value))}return new X(i.map(o=>new j(o)))})],["replace",new le(t=>{if(t.length<2)throw new Error("replace() requires at least two arguments");const n=t[0],r=t[1];if(!(n instanceof j&&r instanceof j))throw new Error("replace() arguments must be strings");let i;if(t.length>2?t[2].type==="KeywordArgumentsValue"?i=t[2].value.get("count")??new Ne:i=t[2]:i=new Ne,!(i instanceof F||i instanceof Ne))throw new Error("replace() count argument must be a number or null");return new j(iv(this.value,n.value,r.value,i.value))})]]))}},q=class extends St{constructor(){super(...arguments);C(this,"type","BooleanValue")}},Oe=class extends St{constructor(){super(...arguments);C(this,"type","ObjectValue");C(this,"builtins",new Map([["get",new le(([t,n])=>{if(!(t instanceof j))throw new Error(`Object key must be a string: got ${t.type}`);return this.value.get(t.value)??n??new Ne})],["items",new le(()=>this.items())],["keys",new le(()=>this.keys())],["values",new le(()=>this.values())]]))}__bool__(){return new q(this.value.size>0)}items(){return new X(Array.from(this.value.entries()).map(([t,n])=>new X([new j(t),n])))}keys(){return new X(Array.from(this.value.keys()).map(t=>new j(t)))}values(){return new X(Array.from(this.value.values()))}},oa=class extends Oe{constructor(){super(...arguments);C(this,"type","KeywordArgumentsValue")}},X=class extends St{constructor(){super(...arguments);C(this,"type","ArrayValue");C(this,"builtins",new Map([["length",new F(this.value.length)]]))}__bool__(){return new q(this.value.length>0)}},ov=class extends X{constructor(){super(...arguments);C(this,"type","TupleValue")}},le=class extends St{constructor(){super(...arguments);C(this,"type","FunctionValue")}},Ne=class extends St{constructor(){super(...arguments);C(this,"type","NullValue")}},be=class extends St{constructor(){super(...arguments);C(this,"type","UndefinedValue")}},dn=class{constructor(e){C(this,"variables",new Map([["namespace",new le(e=>{if(e.length===0)return new Oe(new Map);if(e.length!==1||!(e[0]instanceof Oe))throw new Error("`namespace` expects either zero arguments or a single object argument");return e[0]})]]));C(this,"tests",new Map([["boolean",e=>e.type==="BooleanValue"],["callable",e=>e instanceof le],["odd",e=>{if(!(e instanceof F))throw new Error(`cannot odd on ${e.type}`);return e.value%2!==0}],["even",e=>{if(!(e instanceof F))throw new Error(`cannot even on ${e.type}`);return e.value%2===0}],["false",e=>e.type==="BooleanValue"&&!e.value],["true",e=>e.type==="BooleanValue"&&e.value],["none",e=>e.type==="NullValue"],["string",e=>e.type==="StringValue"],["number",e=>e instanceof F||e instanceof ue],["integer",e=>e instanceof F],["iterable",e=>e.type==="ArrayValue"||e.type==="StringValue"],["mapping",e=>e.type==="ObjectValue"],["lower",e=>{const t=e.value;return e.type==="StringValue"&&t===t.toLowerCase()}],["upper",e=>{const t=e.value;return e.type==="StringValue"&&t===t.toUpperCase()}],["none",e=>e.type==="NullValue"],["defined",e=>e.type!=="UndefinedValue"],["undefined",e=>e.type==="UndefinedValue"],["equalto",(e,t)=>e.value===t.value],["eq",(e,t)=>e.value===t.value]]));this.parent=e}set(e,t){return this.declareVariable(e,ji(t))}declareVariable(e,t){if(this.variables.has(e))throw new SyntaxError(`Variable already declared: ${e}`);return this.variables.set(e,t),t}setVariable(e,t){return this.variables.set(e,t),t}resolve(e){if(this.variables.has(e))return this;if(this.parent)return this.parent.resolve(e);throw new Error(`Unknown variable: ${e}`)}lookupVariable(e){try{return this.resolve(e).variables.get(e)??new be}catch{return new be}}};function av(e){e.set("false",!1),e.set("true",!0),e.set("none",null),e.set("raise_exception",t=>{throw new Error(t)}),e.set("range",Gy),e.set("strftime_now",tv),e.set("True",!0),e.set("False",!1),e.set("None",null)}var sv=class{constructor(e){C(this,"global");this.global=e??new dn}run(e){return this.evaluate(e,this.global)}evaluateBinaryExpression(e,t){const n=this.evaluate(e.left,t);switch(e.operator.value){case"and":return n.__bool__().value?this.evaluate(e.right,t):n;case"or":return n.__bool__().value?n:this.evaluate(e.right,t)}const r=this.evaluate(e.right,t);switch(e.operator.value){case"==":return new q(n.value==r.value);case"!=":return new q(n.value!=r.value)}if(n instanceof be||r instanceof be){if(r instanceof be&&["in","not in"].includes(e.operator.value))return new q(e.operator.value==="not in");throw new Error(`Cannot perform operation ${e.operator.value} on undefined values`)}else{if(n instanceof Ne||r instanceof Ne)throw new Error("Cannot perform operation on null values");if(e.operator.value==="~")return new j(n.value.toString()+r.value.toString());if((n instanceof F||n instanceof ue)&&(r instanceof F||r instanceof ue)){const i=n.value,o=r.value;switch(e.operator.value){case"+":case"-":case"*":{const a=e.operator.value==="+"?i+o:e.operator.value==="-"?i-o:i*o;return n instanceof ue||r instanceof ue?new ue(a):new F(a)}case"/":return new ue(i/o);case"%":{const a=i%o;return n instanceof ue||r instanceof ue?new ue(a):new F(a)}case"<":return new q(i<o);case">":return new q(i>o);case">=":return new q(i>=o);case"<=":return new q(i<=o)}}else if(n instanceof X&&r instanceof X)switch(e.operator.value){case"+":return new X(n.value.concat(r.value))}else if(r instanceof X){const i=r.value.find(o=>o.value===n.value)!==void 0;switch(e.operator.value){case"in":return new q(i);case"not in":return new q(!i)}}}if(n instanceof j||r instanceof j)switch(e.operator.value){case"+":return new j(n.value.toString()+r.value.toString())}if(n instanceof j&&r instanceof j)switch(e.operator.value){case"in":return new q(r.value.includes(n.value));case"not in":return new q(!r.value.includes(n.value))}if(n instanceof j&&r instanceof Oe)switch(e.operator.value){case"in":return new q(r.value.has(n.value));case"not in":return new q(!r.value.has(n.value))}throw new SyntaxError(`Unknown operator "${e.operator.value}" between ${n.type} and ${r.type}`)}evaluateArguments(e,t){const n=[],r=new Map;for(const i of e)if(i.type==="SpreadExpression"){const o=i,a=this.evaluate(o.argument,t);if(!(a instanceof X))throw new Error(`Cannot unpack non-iterable type: ${a.type}`);for(const s of a.value)n.push(s)}else if(i.type==="KeywordArgumentExpression"){const o=i;r.set(o.key.value,this.evaluate(o.value,t))}else{if(r.size>0)throw new Error("Positional arguments must come before keyword arguments");n.push(this.evaluate(i,t))}return[n,r]}applyFilter(e,t,n){if(t.type==="Identifier"){const r=t;if(r.value==="tojson")return new j($r(e));if(e instanceof X)switch(r.value){case"list":return e;case"first":return e.value[0];case"last":return e.value[e.value.length-1];case"length":return new F(e.value.length);case"reverse":return new X(e.value.reverse());case"sort":return new X(e.value.sort((i,o)=>{if(i.type!==o.type)throw new Error(`Cannot compare different types: ${i.type} and ${o.type}`);switch(i.type){case"IntegerValue":case"FloatValue":return i.value-o.value;case"StringValue":return i.value.localeCompare(o.value);default:throw new Error(`Cannot compare type: ${i.type}`)}}));case"join":return new j(e.value.map(i=>i.value).join(""));case"string":return new j($r(e));case"unique":{const i=new Set,o=[];for(const a of e.value)i.has(a.value)||(i.add(a.value),o.push(a));return new X(o)}default:throw new Error(`Unknown ArrayValue filter: ${r.value}`)}else if(e instanceof j)switch(r.value){case"length":case"upper":case"lower":case"title":case"capitalize":{const i=e.builtins.get(r.value);if(i instanceof le)return i.value([],n);if(i instanceof F)return i;throw new Error(`Unknown StringValue filter: ${r.value}`)}case"trim":return new j(e.value.trim());case"indent":return new j(e.value.split(`
`).map((i,o)=>o===0||i.length===0?i:"    "+i).join(`
`));case"join":case"string":return e;case"int":{const i=parseInt(e.value,10);return new F(isNaN(i)?0:i)}case"float":{const i=parseFloat(e.value);return new ue(isNaN(i)?0:i)}default:throw new Error(`Unknown StringValue filter: ${r.value}`)}else if(e instanceof F||e instanceof ue)switch(r.value){case"abs":return e instanceof F?new F(Math.abs(e.value)):new ue(Math.abs(e.value));case"int":return new F(Math.floor(e.value));case"float":return new ue(e.value);default:throw new Error(`Unknown NumericValue filter: ${r.value}`)}else if(e instanceof Oe)switch(r.value){case"items":return new X(Array.from(e.value.entries()).map(([i,o])=>new X([new j(i),o])));case"length":return new F(e.value.size);default:throw new Error(`Unknown ObjectValue filter: ${r.value}`)}else if(e instanceof q)switch(r.value){case"bool":return new q(e.value);case"int":return new F(e.value?1:0);case"float":return new ue(e.value?1:0);case"string":return new j(e.value?"true":"false");default:throw new Error(`Unknown BooleanValue filter: ${r.value}`)}throw new Error(`Cannot apply filter "${r.value}" to type: ${e.type}`)}else if(t.type==="CallExpression"){const r=t;if(r.callee.type!=="Identifier")throw new Error(`Unknown filter: ${r.callee.type}`);const i=r.callee.value;if(i==="tojson"){const[,o]=this.evaluateArguments(r.args,n),a=o.get("indent")??new Ne;if(!(a instanceof F||a instanceof Ne))throw new Error("If set, indent must be a number");return new j($r(e,a.value))}else if(i==="join"){let o;if(e instanceof j)o=Array.from(e.value);else if(e instanceof X)o=e.value.map(c=>c.value);else throw new Error(`Cannot apply filter "${i}" to type: ${e.type}`);const[a,s]=this.evaluateArguments(r.args,n),l=a.at(0)??s.get("separator")??new j("");if(!(l instanceof j))throw new Error("separator must be a string");return new j(o.join(l.value))}else if(i==="int"||i==="float"){const[o,a]=this.evaluateArguments(r.args,n),s=o.at(0)??a.get("default")??(i==="int"?new F(0):new ue(0));if(e instanceof j){const l=i==="int"?parseInt(e.value,10):parseFloat(e.value);return isNaN(l)?s:i==="int"?new F(l):new ue(l)}else{if(e instanceof F||e instanceof ue)return e;if(e instanceof q)return i==="int"?new F(e.value?1:0):new ue(e.value?1:0);throw new Error(`Cannot apply filter "${i}" to type: ${e.type}`)}}else if(i==="default"){const[o,a]=this.evaluateArguments(r.args,n),s=o[0]??new j(""),l=o[1]??a.get("boolean")??new q(!1);if(!(l instanceof q))throw new Error("`default` filter flag must be a boolean");return e instanceof be||l.value&&!e.__bool__().value?s:e}if(e instanceof X){switch(i){case"selectattr":case"rejectattr":{const o=i==="selectattr";if(e.value.some(u=>!(u instanceof Oe)))throw new Error(`\`${i}\` can only be applied to array of objects`);if(r.args.some(u=>u.type!=="StringLiteral"))throw new Error(`arguments of \`${i}\` must be strings`);const[a,s,l]=r.args.map(u=>this.evaluate(u,n));let c;if(s){const u=n.tests.get(s.value);if(!u)throw new Error(`Unknown test: ${s.value}`);c=u}else c=(...u)=>u[0].__bool__().value;const m=e.value.filter(u=>{const p=u.value.get(a.value),w=p?c(p,l):!1;return o?w:!w});return new X(m)}case"map":{const[,o]=this.evaluateArguments(r.args,n);if(o.has("attribute")){const a=o.get("attribute");if(!(a instanceof j))throw new Error("attribute must be a string");const s=o.get("default"),l=e.value.map(c=>{if(!(c instanceof Oe))throw new Error("items in map must be an object");return c.value.get(a.value)??s??new be});return new X(l)}else throw new Error("`map` expressions without `attribute` set are not currently supported.")}}throw new Error(`Unknown ArrayValue filter: ${i}`)}else if(e instanceof j){switch(i){case"indent":{const[o,a]=this.evaluateArguments(r.args,n),s=o.at(0)??a.get("width")??new F(4);if(!(s instanceof F))throw new Error("width must be a number");const l=o.at(1)??a.get("first")??new q(!1),c=o.at(2)??a.get("blank")??new q(!1),m=e.value.split(`
`),u=" ".repeat(s.value),p=m.map((w,S)=>!l.value&&S===0||!c.value&&w.length===0?w:u+w);return new j(p.join(`
`))}case"replace":{const o=e.builtins.get("replace");if(!(o instanceof le))throw new Error("replace filter not available");const[a,s]=this.evaluateArguments(r.args,n);return o.value([...a,new oa(s)],n)}}throw new Error(`Unknown StringValue filter: ${i}`)}else throw new Error(`Cannot apply filter "${i}" to type: ${e.type}`)}throw new Error(`Unknown filter: ${t.type}`)}evaluateFilterExpression(e,t){const n=this.evaluate(e.operand,t);return this.applyFilter(n,e.filter,t)}evaluateTestExpression(e,t){const n=this.evaluate(e.operand,t),r=t.tests.get(e.test.value);if(!r)throw new Error(`Unknown test: ${e.test.value}`);const i=r(n);return new q(e.negate?!i:i)}evaluateSelectExpression(e,t){return this.evaluate(e.test,t).__bool__().value?this.evaluate(e.lhs,t):new be}evaluateUnaryExpression(e,t){const n=this.evaluate(e.argument,t);switch(e.operator.value){case"not":return new q(!n.value);default:throw new SyntaxError(`Unknown operator: ${e.operator.value}`)}}evaluateTernaryExpression(e,t){return this.evaluate(e.condition,t).__bool__().value?this.evaluate(e.trueExpr,t):this.evaluate(e.falseExpr,t)}evalProgram(e,t){return this.evaluateBlock(e.body,t)}evaluateBlock(e,t){let n="";for(const r of e){const i=this.evaluate(r,t);i.type!=="NullValue"&&i.type!=="UndefinedValue"&&(n+=i.toString())}return new j(n)}evaluateIdentifier(e,t){return t.lookupVariable(e.value)}evaluateCallExpression(e,t){const[n,r]=this.evaluateArguments(e.args,t);r.size>0&&n.push(new oa(r));const i=this.evaluate(e.callee,t);if(i.type!=="FunctionValue")throw new Error(`Cannot call something that is not a function: got ${i.type}`);return i.value(n,t)}evaluateSliceExpression(e,t,n){if(!(e instanceof X||e instanceof j))throw new Error("Slice object must be an array or string");const r=this.evaluate(t.start,n),i=this.evaluate(t.stop,n),o=this.evaluate(t.step,n);if(!(r instanceof F||r instanceof be))throw new Error("Slice start must be numeric or undefined");if(!(i instanceof F||i instanceof be))throw new Error("Slice stop must be numeric or undefined");if(!(o instanceof F||o instanceof be))throw new Error("Slice step must be numeric or undefined");return e instanceof X?new X(Tc(e.value,r.value,i.value,o.value)):new j(Tc(Array.from(e.value),r.value,i.value,o.value).join(""))}evaluateMemberExpression(e,t){const n=this.evaluate(e.object,t);let r;if(e.computed){if(e.property.type==="SliceExpression")return this.evaluateSliceExpression(n,e.property,t);r=this.evaluate(e.property,t)}else r=new j(e.property.value);let i;if(n instanceof Oe){if(!(r instanceof j))throw new Error(`Cannot access property with non-string: got ${r.type}`);i=n.value.get(r.value)??n.builtins.get(r.value)}else if(n instanceof X||n instanceof j)if(r instanceof F)i=n.value.at(r.value),n instanceof j&&(i=new j(n.value.at(r.value)));else if(r instanceof j)i=n.builtins.get(r.value);else throw new Error(`Cannot access property with non-string/non-number: got ${r.type}`);else{if(!(r instanceof j))throw new Error(`Cannot access property with non-string: got ${r.type}`);i=n.builtins.get(r.value)}return i instanceof St?i:new be}evaluateSet(e,t){const n=e.value?this.evaluate(e.value,t):this.evaluateBlock(e.body,t);if(e.assignee.type==="Identifier"){const r=e.assignee.value;t.setVariable(r,n)}else if(e.assignee.type==="TupleLiteral"){const r=e.assignee;if(!(n instanceof X))throw new Error(`Cannot unpack non-iterable type in set: ${n.type}`);const i=n.value;if(i.length!==r.value.length)throw new Error(`Too ${r.value.length>i.length?"few":"many"} items to unpack in set`);for(let o=0;o<r.value.length;++o){const a=r.value[o];if(a.type!=="Identifier")throw new Error(`Cannot unpack to non-identifier in set: ${a.type}`);t.setVariable(a.value,i[o])}}else if(e.assignee.type==="MemberExpression"){const r=e.assignee,i=this.evaluate(r.object,t);if(!(i instanceof Oe))throw new Error("Cannot assign to member of non-object");if(r.property.type!=="Identifier")throw new Error("Cannot assign to member with non-identifier property");i.value.set(r.property.value,n)}else throw new Error(`Invalid LHS inside assignment expression: ${JSON.stringify(e.assignee)}`);return new Ne}evaluateIf(e,t){const n=this.evaluate(e.test,t);return this.evaluateBlock(n.__bool__().value?e.body:e.alternate,t)}evaluateFor(e,t){const n=new dn(t);let r,i;if(e.iterable.type==="SelectExpression"){const c=e.iterable;i=this.evaluate(c.lhs,n),r=c.test}else i=this.evaluate(e.iterable,n);if(!(i instanceof X||i instanceof Oe))throw new Error(`Expected iterable or object type in for loop: got ${i.type}`);i instanceof Oe&&(i=i.keys());const o=[],a=[];for(let c=0;c<i.value.length;++c){const m=new dn(n),u=i.value[c];let p;if(e.loopvar.type==="Identifier")p=w=>w.setVariable(e.loopvar.value,u);else if(e.loopvar.type==="TupleLiteral"){const w=e.loopvar;if(u.type!=="ArrayValue")throw new Error(`Cannot unpack non-iterable type: ${u.type}`);const S=u;if(w.value.length!==S.value.length)throw new Error(`Too ${w.value.length>S.value.length?"few":"many"} items to unpack`);p=x=>{for(let M=0;M<w.value.length;++M){if(w.value[M].type!=="Identifier")throw new Error(`Cannot unpack non-identifier type: ${w.value[M].type}`);x.setVariable(w.value[M].value,S.value[M])}}}else throw new Error(`Invalid loop variable(s): ${e.loopvar.type}`);r&&(p(m),!this.evaluate(r,m).__bool__().value)||(o.push(u),a.push(p))}let s="",l=!0;for(let c=0;c<o.length;++c){const m=new Map([["index",new F(c+1)],["index0",new F(c)],["revindex",new F(o.length-c)],["revindex0",new F(o.length-c-1)],["first",new q(c===0)],["last",new q(c===o.length-1)],["length",new F(o.length)],["previtem",c>0?o[c-1]:new be],["nextitem",c<o.length-1?o[c+1]:new be]]);n.setVariable("loop",new Oe(m)),a[c](n);try{const u=this.evaluateBlock(e.body,n);s+=u.value}catch(u){if(u instanceof Pc)continue;if(u instanceof Rc)break;throw u}l=!1}if(l){const c=this.evaluateBlock(e.defaultBlock,n);s+=c.value}return new j(s)}evaluateMacro(e,t){return t.setVariable(e.name.value,new le((n,r)=>{var a;const i=new dn(r);n=n.slice();let o;((a=n.at(-1))==null?void 0:a.type)==="KeywordArgumentsValue"&&(o=n.pop());for(let s=0;s<e.args.length;++s){const l=e.args[s],c=n[s];if(l.type==="Identifier"){const m=l;if(!c)throw new Error(`Missing positional argument: ${m.value}`);i.setVariable(m.value,c)}else if(l.type==="KeywordArgumentExpression"){const m=l,u=c??(o==null?void 0:o.value.get(m.key.value))??this.evaluate(m.value,i);i.setVariable(m.key.value,u)}else throw new Error(`Unknown argument type: ${l.type}`)}return this.evaluateBlock(e.body,i)})),new Ne}evaluateCallStatement(e,t){const n=new le((s,l)=>{const c=new dn(l);if(e.callerArgs)for(let m=0;m<e.callerArgs.length;++m){const u=e.callerArgs[m];if(u.type!=="Identifier")throw new Error(`Caller parameter must be an identifier, got ${u.type}`);c.setVariable(u.value,s[m]??new be)}return this.evaluateBlock(e.body,c)}),[r,i]=this.evaluateArguments(e.call.args,t);r.push(new oa(i));const o=this.evaluate(e.call.callee,t);if(o.type!=="FunctionValue")throw new Error(`Cannot call something that is not a function: got ${o.type}`);const a=new dn(t);return a.setVariable("caller",n),o.value(r,a)}evaluateFilterStatement(e,t){const n=this.evaluateBlock(e.body,t);return this.applyFilter(n,e.filter,t)}evaluate(e,t){if(!e)return new be;switch(e.type){case"Program":return this.evalProgram(e,t);case"Set":return this.evaluateSet(e,t);case"If":return this.evaluateIf(e,t);case"For":return this.evaluateFor(e,t);case"Macro":return this.evaluateMacro(e,t);case"CallStatement":return this.evaluateCallStatement(e,t);case"Break":throw new Rc;case"Continue":throw new Pc;case"IntegerLiteral":return new F(e.value);case"FloatLiteral":return new ue(e.value);case"StringLiteral":return new j(e.value);case"ArrayLiteral":return new X(e.value.map(n=>this.evaluate(n,t)));case"TupleLiteral":return new ov(e.value.map(n=>this.evaluate(n,t)));case"ObjectLiteral":{const n=new Map;for(const[r,i]of e.value){const o=this.evaluate(r,t);if(!(o instanceof j))throw new Error(`Object keys must be strings: got ${o.type}`);n.set(o.value,this.evaluate(i,t))}return new Oe(n)}case"Identifier":return this.evaluateIdentifier(e,t);case"CallExpression":return this.evaluateCallExpression(e,t);case"MemberExpression":return this.evaluateMemberExpression(e,t);case"UnaryExpression":return this.evaluateUnaryExpression(e,t);case"BinaryExpression":return this.evaluateBinaryExpression(e,t);case"FilterExpression":return this.evaluateFilterExpression(e,t);case"FilterStatement":return this.evaluateFilterStatement(e,t);case"TestExpression":return this.evaluateTestExpression(e,t);case"SelectExpression":return this.evaluateSelectExpression(e,t);case"Ternary":return this.evaluateTernaryExpression(e,t);case"Comment":return new Ne;default:throw new SyntaxError(`Unknown node type: ${e.type}`)}}};function ji(e){switch(typeof e){case"number":return Number.isInteger(e)?new F(e):new ue(e);case"string":return new j(e);case"boolean":return new q(e);case"undefined":return new be;case"object":return e===null?new Ne:Array.isArray(e)?new X(e.map(ji)):new Oe(new Map(Object.entries(e).map(([t,n])=>[t,ji(n)])));case"function":return new le((t,n)=>{const r=e(...t.map(i=>i.value))??null;return ji(r)});default:throw new Error(`Cannot convert to runtime value: ${e}`)}}function $r(e,t,n){const r=n??0;switch(e.type){case"NullValue":case"UndefinedValue":return"null";case"IntegerValue":case"FloatValue":case"StringValue":case"BooleanValue":return JSON.stringify(e.value);case"ArrayValue":case"ObjectValue":{const i=t?" ".repeat(t):"",o=`
`+i.repeat(r),a=o+i;if(e.type==="ArrayValue"){const s=e.value.map(l=>$r(l,t,r+1));return t?`[${a}${s.join(`,${a}`)}${o}]`:`[${s.join(", ")}]`}else{const s=Array.from(e.value.entries()).map(([l,c])=>{const m=`"${l}": ${$r(c,t,r+1)}`;return t?`${a}${m}`:m});return t?`{${s.join(",")}${o}}`:`{${s.join(", ")}}`}}default:throw new Error(`Cannot convert to JSON: ${e.type}`)}}var he=`
`,lv="{%- ",cv=" -%}";function uv(e){switch(e.operator.type){case"MultiplicativeBinaryOperator":return 4;case"AdditiveBinaryOperator":return 3;case"ComparisonBinaryOperator":return 2;case"Identifier":return e.operator.value==="and"?1:e.operator.value==="in"||e.operator.value==="not in"?2:0}return 0}function dv(e,t="	"){const n=typeof t=="number"?" ".repeat(t):t;return ft(e.body,0,n).replace(/\n$/,"")}function _e(...e){return lv+e.join(" ")+cv}function ft(e,t,n){return e.map(r=>pv(r,t,n)).join(he)}function pv(e,t,n){const r=n.repeat(t);switch(e.type){case"Program":return ft(e.body,t,n);case"If":return mv(e,t,n);case"For":return fv(e,t,n);case"Set":return hv(e,t,n);case"Macro":return gv(e,t,n);case"Break":return r+_e("break");case"Continue":return r+_e("continue");case"CallStatement":return yv(e,t,n);case"FilterStatement":return vv(e,t,n);case"Comment":return r+"{# "+e.value+" #}";default:return r+"{{- "+z(e)+" -}}"}}function mv(e,t,n){const r=n.repeat(t),i=[];let o=e;for(;o&&(i.push({test:o.test,body:o.body}),o.alternate.length===1&&o.alternate[0].type==="If");)o=o.alternate[0];let a=r+_e("if",z(i[0].test))+he+ft(i[0].body,t+1,n);for(let s=1;s<i.length;++s)a+=he+r+_e("elif",z(i[s].test))+he+ft(i[s].body,t+1,n);return o&&o.alternate.length>0&&(a+=he+r+_e("else")+he+ft(o.alternate,t+1,n)),a+=he+r+_e("endif"),a}function fv(e,t,n){const r=n.repeat(t);let i="";if(e.iterable.type==="SelectExpression"){const a=e.iterable;i=`${z(a.lhs)} if ${z(a.test)}`}else i=z(e.iterable);let o=r+_e("for",z(e.loopvar),"in",i)+he+ft(e.body,t+1,n);return e.defaultBlock.length>0&&(o+=he+r+_e("else")+he+ft(e.defaultBlock,t+1,n)),o+=he+r+_e("endfor"),o}function hv(e,t,n){const r=n.repeat(t),i=z(e.assignee),o=e.value?z(e.value):"",a=r+_e("set",`${i}${e.value?" = "+o:""}`);return e.body.length===0?a:a+he+ft(e.body,t+1,n)+he+r+_e("endset")}function gv(e,t,n){const r=n.repeat(t),i=e.args.map(z).join(", ");return r+_e("macro",`${e.name.value}(${i})`)+he+ft(e.body,t+1,n)+he+r+_e("endmacro")}function yv(e,t,n){const r=n.repeat(t),i=e.callerArgs&&e.callerArgs.length>0?`(${e.callerArgs.map(z).join(", ")})`:"",o=z(e.call);let a=r+_e(`call${i}`,o)+he;return a+=ft(e.body,t+1,n)+he,a+=r+_e("endcall"),a}function vv(e,t,n){const r=n.repeat(t),i=e.filter.type==="Identifier"?e.filter.value:z(e.filter);let o=r+_e("filter",i)+he;return o+=ft(e.body,t+1,n)+he,o+=r+_e("endfilter"),o}function z(e,t=-1){switch(e.type){case"SpreadExpression":return`*${z(e.argument)}`;case"Identifier":return e.value;case"IntegerLiteral":return`${e.value}`;case"FloatLiteral":return`${e.value}`;case"StringLiteral":return JSON.stringify(e.value);case"BinaryExpression":{const n=e,r=uv(n),i=z(n.left,r),o=z(n.right,r+1),a=`${i} ${n.operator.value} ${o}`;return r<t?`(${a})`:a}case"UnaryExpression":{const n=e;return n.operator.value+(n.operator.value==="not"?" ":"")+z(n.argument,1/0)}case"CallExpression":{const n=e,r=n.args.map(z).join(", ");return`${z(n.callee)}(${r})`}case"MemberExpression":{const n=e;let r=z(n.object);["Identifier","MemberExpression","CallExpression","StringLiteral","IntegerLiteral","FloatLiteral","ArrayLiteral","TupleLiteral","ObjectLiteral"].includes(n.object.type)||(r=`(${r})`);let i=z(n.property);return!n.computed&&n.property.type!=="Identifier"&&(i=`(${i})`),n.computed?`${r}[${i}]`:`${r}.${i}`}case"FilterExpression":{const n=e,r=z(n.operand,1/0);return n.filter.type==="CallExpression"?`${r} | ${z(n.filter)}`:`${r} | ${n.filter.value}`}case"SelectExpression":{const n=e;return`${z(n.lhs)} if ${z(n.test)}`}case"TestExpression":{const n=e;return`${z(n.operand)} is${n.negate?" not":""} ${n.test.value}`}case"ArrayLiteral":case"TupleLiteral":{const n=e.value.map(z),r=e.type==="ArrayLiteral"?"[]":"()";return`${r[0]}${n.join(", ")}${r[1]}`}case"ObjectLiteral":return`{${Array.from(e.value.entries()).map(([r,i])=>`${z(r)}: ${z(i)}`).join(", ")}}`;case"SliceExpression":{const n=e,r=n.start?z(n.start):"",i=n.stop?z(n.stop):"",o=n.step?`:${z(n.step)}`:"";return`${r}:${i}${o}`}case"KeywordArgumentExpression":{const n=e;return`${n.key.value}=${z(n.value)}`}case"Ternary":{const n=e,r=`${z(n.trueExpr)} if ${z(n.condition,0)} else ${z(n.falseExpr)}`;return t>-1?`(${r})`:r}default:throw new Error(`Unknown expression type: ${e.type}`)}}var wv=class{constructor(e){C(this,"parsed");const t=Iy(e,{lstrip_blocks:!0,trim_blocks:!0});this.parsed=Zy(t)}render(e){const t=new dn;if(av(t),e)for(const[i,o]of Object.entries(e))t.set(i,o);return new sv(t).run(this.parsed).value}format(e){return dv(this.parsed,(e==null?void 0:e.indent)||"	")}};const bv={"adapter-transformers":["question-answering","text-classification","token-classification"],allennlp:["question-answering"],asteroid:["audio-to-audio"],bertopic:["text-classification"],diffusers:["image-to-image","text-to-image"],doctr:["object-detection"],espnet:["text-to-speech","automatic-speech-recognition"],fairseq:["text-to-speech","audio-to-audio"],fastai:["image-classification"],fasttext:["feature-extraction","text-classification"],flair:["token-classification"],k2:["automatic-speech-recognition"],keras:["image-classification"],nemo:["automatic-speech-recognition"],open_clip:["zero-shot-classification","zero-shot-image-classification"],paddlenlp:["fill-mask","summarization","zero-shot-classification"],peft:["text-generation"],"pyannote-audio":["automatic-speech-recognition"],"sentence-transformers":["feature-extraction","sentence-similarity"],setfit:["text-classification"],sklearn:["tabular-classification","tabular-regression","text-classification"],spacy:["token-classification","text-classification","sentence-similarity"],"span-marker":["token-classification"],speechbrain:["audio-classification","audio-to-audio","automatic-speech-recognition","text-to-speech"],stanza:["token-classification"],timm:["image-classification","image-feature-extraction"],transformers:["audio-classification","automatic-speech-recognition","depth-estimation","document-question-answering","feature-extraction","fill-mask","image-classification","image-feature-extraction","image-segmentation","image-to-image","image-to-text","image-text-to-text","mask-generation","object-detection","question-answering","summarization","table-question-answering","text-classification","text-generation","text-to-audio","text-to-speech","token-classification","translation","video-classification","visual-question-answering","zero-shot-classification","zero-shot-image-classification","zero-shot-object-detection"],mindspore:["image-classification"]},ol={"text-classification":{name:"Text Classification",subtasks:[{type:"acceptability-classification",name:"Acceptability Classification"},{type:"entity-linking-classification",name:"Entity Linking Classification"},{type:"fact-checking",name:"Fact Checking"},{type:"intent-classification",name:"Intent Classification"},{type:"language-identification",name:"Language Identification"},{type:"multi-class-classification",name:"Multi Class Classification"},{type:"multi-label-classification",name:"Multi Label Classification"},{type:"multi-input-text-classification",name:"Multi-input Text Classification"},{type:"natural-language-inference",name:"Natural Language Inference"},{type:"semantic-similarity-classification",name:"Semantic Similarity Classification"},{type:"sentiment-classification",name:"Sentiment Classification"},{type:"topic-classification",name:"Topic Classification"},{type:"semantic-similarity-scoring",name:"Semantic Similarity Scoring"},{type:"sentiment-scoring",name:"Sentiment Scoring"},{type:"sentiment-analysis",name:"Sentiment Analysis"},{type:"hate-speech-detection",name:"Hate Speech Detection"},{type:"text-scoring",name:"Text Scoring"}],modality:"nlp"},"token-classification":{name:"Token Classification",subtasks:[{type:"named-entity-recognition",name:"Named Entity Recognition"},{type:"part-of-speech",name:"Part of Speech"},{type:"parsing",name:"Parsing"},{type:"lemmatization",name:"Lemmatization"},{type:"word-sense-disambiguation",name:"Word Sense Disambiguation"},{type:"coreference-resolution",name:"Coreference-resolution"}],modality:"nlp"},"table-question-answering":{name:"Table Question Answering",modality:"nlp"},"question-answering":{name:"Question Answering",subtasks:[{type:"extractive-qa",name:"Extractive QA"},{type:"open-domain-qa",name:"Open Domain QA"},{type:"closed-domain-qa",name:"Closed Domain QA"}],modality:"nlp"},"zero-shot-classification":{name:"Zero-Shot Classification",modality:"nlp"},translation:{name:"Translation",modality:"nlp"},summarization:{name:"Summarization",subtasks:[{type:"news-articles-summarization",name:"News Articles Summarization"},{type:"news-articles-headline-generation",name:"News Articles Headline Generation"}],modality:"nlp"},"feature-extraction":{name:"Feature Extraction",modality:"nlp"},"text-generation":{name:"Text Generation",subtasks:[{type:"dialogue-modeling",name:"Dialogue Modeling"},{type:"dialogue-generation",name:"Dialogue Generation"},{type:"conversational",name:"Conversational"},{type:"language-modeling",name:"Language Modeling"},{type:"text-simplification",name:"Text simplification"},{type:"explanation-generation",name:"Explanation Generation"},{type:"abstractive-qa",name:"Abstractive QA"},{type:"open-domain-abstractive-qa",name:"Open Domain Abstractive QA"},{type:"closed-domain-qa",name:"Closed Domain QA"},{type:"open-book-qa",name:"Open Book QA"},{type:"closed-book-qa",name:"Closed Book QA"},{type:"text2text-generation",name:"Text2Text Generation"}],modality:"nlp"},"fill-mask":{name:"Fill-Mask",subtasks:[{type:"slot-filling",name:"Slot Filling"},{type:"masked-language-modeling",name:"Masked Language Modeling"}],modality:"nlp"},"sentence-similarity":{name:"Sentence Similarity",modality:"nlp"},"text-to-speech":{name:"Text-to-Speech",modality:"audio"},"text-to-audio":{name:"Text-to-Audio",modality:"audio"},"automatic-speech-recognition":{name:"Automatic Speech Recognition",modality:"audio"},"audio-to-audio":{name:"Audio-to-Audio",modality:"audio"},"audio-classification":{name:"Audio Classification",subtasks:[{type:"keyword-spotting",name:"Keyword Spotting"},{type:"speaker-identification",name:"Speaker Identification"},{type:"audio-intent-classification",name:"Audio Intent Classification"},{type:"audio-emotion-recognition",name:"Audio Emotion Recognition"},{type:"audio-language-identification",name:"Audio Language Identification"}],modality:"audio"},"audio-text-to-text":{name:"Audio-Text-to-Text",modality:"multimodal",hideInDatasets:!0},"voice-activity-detection":{name:"Voice Activity Detection",modality:"audio"},"depth-estimation":{name:"Depth Estimation",modality:"cv"},"image-classification":{name:"Image Classification",subtasks:[{type:"multi-label-image-classification",name:"Multi Label Image Classification"},{type:"multi-class-image-classification",name:"Multi Class Image Classification"}],modality:"cv"},"object-detection":{name:"Object Detection",subtasks:[{type:"face-detection",name:"Face Detection"},{type:"vehicle-detection",name:"Vehicle Detection"}],modality:"cv"},"image-segmentation":{name:"Image Segmentation",subtasks:[{type:"instance-segmentation",name:"Instance Segmentation"},{type:"semantic-segmentation",name:"Semantic Segmentation"},{type:"panoptic-segmentation",name:"Panoptic Segmentation"}],modality:"cv"},"text-to-image":{name:"Text-to-Image",modality:"cv"},"image-to-text":{name:"Image-to-Text",subtasks:[{type:"image-captioning",name:"Image Captioning"}],modality:"cv"},"image-to-image":{name:"Image-to-Image",subtasks:[{type:"image-inpainting",name:"Image Inpainting"},{type:"image-colorization",name:"Image Colorization"},{type:"super-resolution",name:"Super Resolution"}],modality:"cv"},"image-to-video":{name:"Image-to-Video",modality:"cv"},"unconditional-image-generation":{name:"Unconditional Image Generation",modality:"cv"},"video-classification":{name:"Video Classification",modality:"cv"},"reinforcement-learning":{name:"Reinforcement Learning",modality:"rl"},robotics:{name:"Robotics",modality:"rl",subtasks:[{type:"grasping",name:"Grasping"},{type:"task-planning",name:"Task Planning"}]},"tabular-classification":{name:"Tabular Classification",modality:"tabular",subtasks:[{type:"tabular-multi-class-classification",name:"Tabular Multi Class Classification"},{type:"tabular-multi-label-classification",name:"Tabular Multi Label Classification"}]},"tabular-regression":{name:"Tabular Regression",modality:"tabular",subtasks:[{type:"tabular-single-column-regression",name:"Tabular Single Column Regression"}]},"tabular-to-text":{name:"Tabular to Text",modality:"tabular",subtasks:[{type:"rdf-to-text",name:"RDF to text"}],hideInModels:!0},"table-to-text":{name:"Table to Text",modality:"nlp",hideInModels:!0},"multiple-choice":{name:"Multiple Choice",subtasks:[{type:"multiple-choice-qa",name:"Multiple Choice QA"},{type:"multiple-choice-coreference-resolution",name:"Multiple Choice Coreference Resolution"}],modality:"nlp",hideInModels:!0},"text-ranking":{name:"Text Ranking",modality:"nlp"},"text-retrieval":{name:"Text Retrieval",subtasks:[{type:"document-retrieval",name:"Document Retrieval"},{type:"utterance-retrieval",name:"Utterance Retrieval"},{type:"entity-linking-retrieval",name:"Entity Linking Retrieval"},{type:"fact-checking-retrieval",name:"Fact Checking Retrieval"}],modality:"nlp",hideInModels:!0},"time-series-forecasting":{name:"Time Series Forecasting",modality:"tabular",subtasks:[{type:"univariate-time-series-forecasting",name:"Univariate Time Series Forecasting"},{type:"multivariate-time-series-forecasting",name:"Multivariate Time Series Forecasting"}]},"text-to-video":{name:"Text-to-Video",modality:"cv"},"image-text-to-text":{name:"Image-Text-to-Text",modality:"multimodal"},"visual-question-answering":{name:"Visual Question Answering",subtasks:[{type:"visual-question-answering",name:"Visual Question Answering"}],modality:"multimodal"},"document-question-answering":{name:"Document Question Answering",subtasks:[{type:"document-question-answering",name:"Document Question Answering"}],modality:"multimodal",hideInDatasets:!0},"zero-shot-image-classification":{name:"Zero-Shot Image Classification",modality:"cv"},"graph-ml":{name:"Graph Machine Learning",modality:"other"},"mask-generation":{name:"Mask Generation",modality:"cv"},"zero-shot-object-detection":{name:"Zero-Shot Object Detection",modality:"cv"},"text-to-3d":{name:"Text-to-3D",modality:"cv"},"image-to-3d":{name:"Image-to-3D",modality:"cv"},"image-feature-extraction":{name:"Image Feature Extraction",modality:"cv"},"video-text-to-text":{name:"Video-Text-to-Text",modality:"multimodal",hideInDatasets:!1},"keypoint-detection":{name:"Keypoint Detection",subtasks:[{type:"pose-estimation",name:"Pose Estimation"}],modality:"cv",hideInDatasets:!0},"visual-document-retrieval":{name:"Visual Document Retrieval",modality:"multimodal"},"any-to-any":{name:"Any-to-Any",modality:"multimodal"},"video-to-video":{name:"Video-to-Video",modality:"cv",hideInDatasets:!0},other:{name:"Other",modality:"other",hideInModels:!0,hideInDatasets:!0}},xv=Object.keys(ol);Object.values(ol).flatMap(e=>"subtasks"in e?e.subtasks:[]).map(e=>e.type);new Set(xv);const kv={datasets:[{description:"A dataset with multiple modality input and output pairs.",id:"PKU-Alignment/align-anything"}],demo:{inputs:[{filename:"any-to-any-input.jpg",type:"img"},{label:"Text Prompt",content:"What is the significance of this place?",type:"text"}],outputs:[{label:"Generated Text",content:"The place in the picture is Osaka Castle, located in Osaka, Japan. Osaka Castle is a historic castle that was originally built in the 16th century by Toyotomi Hideyoshi, a powerful warlord of the time. It is one of the most famous landmarks in Osaka and is known for its distinctive white walls and black roof tiles. The castle has been rebuilt several times over the centuries and is now a popular tourist attraction, offering visitors a glimpse into Japan's rich history and culture.",type:"text"},{filename:"any-to-any-output.wav",type:"audio"}]},metrics:[],models:[{description:"Strong model that can take in video, audio, image, text and output text and natural speech.",id:"Qwen/Qwen2.5-Omni-7B"},{description:"Robust model that can take in image and text and generate image and text.",id:"OmniGen2/OmniGen2"},{description:"Any-to-any model with speech, video, audio, image and text understanding capabilities.",id:"openbmb/MiniCPM-o-2_6"},{description:"A model that can understand image and text and generate image and text.",id:"ByteDance-Seed/BAGEL-7B-MoT"}],spaces:[{description:"An application to chat with an any-to-any (image & text) model.",id:"OmniGen2/OmniGen2"}],summary:"Any-to-any models can understand two or more modalities and output two or more modalities.",widgetModels:[],youtubeId:""},_v={datasets:[{description:"A benchmark of 10 different audio tasks.",id:"s3prl/superb"},{description:"A dataset of YouTube clips and their sound categories.",id:"agkphysics/AudioSet"}],demo:{inputs:[{filename:"audio.wav",type:"audio"}],outputs:[{data:[{label:"Up",score:.2},{label:"Down",score:.8}],type:"chart"}]},metrics:[{description:"",id:"accuracy"},{description:"",id:"recall"},{description:"",id:"precision"},{description:"",id:"f1"}],models:[{description:"An easy-to-use model for command recognition.",id:"speechbrain/google_speech_command_xvector"},{description:"An emotion recognition model.",id:"ehcalabres/wav2vec2-lg-xlsr-en-speech-emotion-recognition"},{description:"A language identification model.",id:"facebook/mms-lid-126"}],spaces:[{description:"An application that can classify music into different genre.",id:"kurianbenoy/audioclassification"}],summary:"Audio classification is the task of assigning a label or class to a given audio. It can be used for recognizing which command a user is giving or the emotion of a statement, as well as identifying a speaker.",widgetModels:["MIT/ast-finetuned-audioset-10-10-0.4593"],youtubeId:"KWwzcmG98Ds"},Sv={datasets:[{description:"512-element X-vector embeddings of speakers from CMU ARCTIC dataset.",id:"Matthijs/cmu-arctic-xvectors"}],demo:{inputs:[{filename:"input.wav",type:"audio"}],outputs:[{filename:"label-0.wav",type:"audio"},{filename:"label-1.wav",type:"audio"}]},metrics:[{description:"The Signal-to-Noise ratio is the relationship between the target signal level and the background noise level. It is calculated as the logarithm of the target signal divided by the background noise, in decibels.",id:"snri"},{description:"The Signal-to-Distortion ratio is the relationship between the target signal and the sum of noise, interference, and artifact errors",id:"sdri"}],models:[{description:"A speech enhancement model.",id:"ResembleAI/resemble-enhance"},{description:"A model that can change the voice in a speech recording.",id:"microsoft/speecht5_vc"}],spaces:[{description:"An application for speech separation.",id:"younver/speechbrain-speech-separation"},{description:"An application for audio style transfer.",id:"nakas/audio-diffusion_style_transfer"}],summary:"Audio-to-Audio is a family of tasks in which the input is an audio and the output is one or multiple generated audios. Some example tasks are speech enhancement and source separation.",widgetModels:["speechbrain/sepformer-wham"],youtubeId:"iohj7nCCYoM"},Cv={datasets:[{description:"31,175 hours of multilingual audio-text dataset in 108 languages.",id:"mozilla-foundation/common_voice_17_0"},{description:"Multilingual and diverse audio dataset with 101k hours of audio.",id:"amphion/Emilia-Dataset"},{description:"A dataset with 44.6k hours of English speaker data and 6k hours of other language speakers.",id:"parler-tts/mls_eng"},{description:"A multilingual audio dataset with 370K hours of audio.",id:"espnet/yodas"}],demo:{inputs:[{filename:"input.flac",type:"audio"}],outputs:[{label:"Transcript",content:"Going along slushy country roads and speaking to damp audiences in...",type:"text"}]},metrics:[{description:"",id:"wer"},{description:"",id:"cer"}],models:[{description:"A powerful ASR model by OpenAI.",id:"openai/whisper-large-v3"},{description:"A good generic speech model by MetaAI for fine-tuning.",id:"facebook/w2v-bert-2.0"},{description:"An end-to-end model that performs ASR and Speech Translation by MetaAI.",id:"facebook/seamless-m4t-v2-large"},{description:"A powerful multilingual ASR and Speech Translation model by Nvidia.",id:"nvidia/canary-1b"},{description:"Powerful speaker diarization model.",id:"pyannote/speaker-diarization-3.1"}],spaces:[{description:"A powerful general-purpose speech recognition application.",id:"hf-audio/whisper-large-v3"},{description:"Latest ASR model from Useful Sensors.",id:"mrfakename/Moonshinex"},{description:"A high quality speech and text translation model by Meta.",id:"facebook/seamless_m4t"},{description:"A powerful multilingual ASR and Speech Translation model by Nvidia",id:"nvidia/canary-1b"}],summary:"Automatic Speech Recognition (ASR), also known as Speech to Text (STT), is the task of transcribing a given audio to text. It has many applications, such as voice user interfaces.",widgetModels:["openai/whisper-large-v3"],youtubeId:"TksaY_FDgnk"},Av={datasets:[{description:"Largest document understanding dataset.",id:"HuggingFaceM4/Docmatix"},{description:"Dataset from the 2020 DocVQA challenge. The documents are taken from the UCSF Industry Documents Library.",id:"eliolio/docvqa"}],demo:{inputs:[{label:"Question",content:"What is the idea behind the consumer relations efficiency team?",type:"text"},{filename:"document-question-answering-input.png",type:"img"}],outputs:[{label:"Answer",content:"Balance cost efficiency with quality customer service",type:"text"}]},metrics:[{description:"The evaluation metric for the DocVQA challenge is the Average Normalized Levenshtein Similarity (ANLS). This metric is flexible to character regognition errors and compares the predicted answer with the ground truth answer.",id:"anls"},{description:"Exact Match is a metric based on the strict character match of the predicted answer and the right answer. For answers predicted correctly, the Exact Match will be 1. Even if only one character is different, Exact Match will be 0",id:"exact-match"}],models:[{description:"A robust document question answering model.",id:"impira/layoutlm-document-qa"},{description:"A document question answering model specialized in invoices.",id:"impira/layoutlm-invoices"},{description:"A special model for OCR-free document question answering.",id:"microsoft/udop-large"},{description:"A powerful model for document question answering.",id:"google/pix2struct-docvqa-large"}],spaces:[{description:"A robust document question answering application.",id:"impira/docquery"},{description:"An application that can answer questions from invoices.",id:"impira/invoices"},{description:"An application to compare different document question answering models.",id:"merve/compare_docvqa_models"}],summary:"Document Question Answering (also known as Document Visual Question Answering) is the task of answering questions on document images. Document question answering models take a (document, question) pair as input and return an answer in natural language. Models usually rely on multi-modal features, combining text, position of words (bounding-boxes) and image.",widgetModels:["impira/layoutlm-invoices"],youtubeId:""},Ev={datasets:[{description:"Wikipedia dataset containing cleaned articles of all languages. Can be used to train `feature-extraction` models.",id:"wikipedia"}],demo:{inputs:[{label:"Input",content:"India, officially the Republic of India, is a country in South Asia.",type:"text"}],outputs:[{table:[["Dimension 1","Dimension 2","Dimension 3"],["2.583383083343506","2.757075071334839","0.9023529887199402"],["8.29393482208252","1.1071064472198486","2.03399395942688"],["-0.7754912972450256","-1.647324562072754","-0.6113331913948059"],["0.07087723910808563","1.5942802429199219","1.4610432386398315"]],type:"tabular"}]},metrics:[],models:[{description:"A powerful feature extraction model for natural language processing tasks.",id:"thenlper/gte-large"},{description:"A strong feature extraction model for retrieval.",id:"Alibaba-NLP/gte-Qwen1.5-7B-instruct"}],spaces:[{description:"A leaderboard to rank text feature extraction models based on a benchmark.",id:"mteb/leaderboard"},{description:"A leaderboard to rank best feature extraction models based on human feedback.",id:"mteb/arena"}],summary:"Feature extraction is the task of extracting features learnt in a model.",widgetModels:["facebook/bart-base"]},Iv={datasets:[{description:"A common dataset that is used to train models for many languages.",id:"wikipedia"},{description:"A large English dataset with text crawled from the web.",id:"c4"}],demo:{inputs:[{label:"Input",content:"The <mask> barked at me",type:"text"}],outputs:[{type:"chart",data:[{label:"wolf",score:.487},{label:"dog",score:.061},{label:"cat",score:.058},{label:"fox",score:.047},{label:"squirrel",score:.025}]}]},metrics:[{description:"Cross Entropy is a metric that calculates the difference between two probability distributions. Each probability distribution is the distribution of predicted words",id:"cross_entropy"},{description:"Perplexity is the exponential of the cross-entropy loss. It evaluates the probabilities assigned to the next word by the model. Lower perplexity indicates better performance",id:"perplexity"}],models:[{description:"State-of-the-art masked language model.",id:"answerdotai/ModernBERT-large"},{description:"A multilingual model trained on 100 languages.",id:"FacebookAI/xlm-roberta-base"}],spaces:[],summary:"Masked language modeling is the task of masking some of the words in a sentence and predicting which words should replace those masks. These models are useful when we want to get a statistical understanding of the language in which the model is trained in.",widgetModels:["distilroberta-base"],youtubeId:"mqElG5QJWUg"},Tv={datasets:[{description:"Benchmark dataset used for image classification with images that belong to 100 classes.",id:"cifar100"},{description:"Dataset consisting of images of garments.",id:"fashion_mnist"}],demo:{inputs:[{filename:"image-classification-input.jpeg",type:"img"}],outputs:[{type:"chart",data:[{label:"Egyptian cat",score:.514},{label:"Tabby cat",score:.193},{label:"Tiger cat",score:.068}]}]},metrics:[{description:"",id:"accuracy"},{description:"",id:"recall"},{description:"",id:"precision"},{description:"",id:"f1"}],models:[{description:"A strong image classification model.",id:"google/vit-base-patch16-224"},{description:"A robust image classification model.",id:"facebook/deit-base-distilled-patch16-224"},{description:"A strong image classification model.",id:"facebook/convnext-large-224"}],spaces:[{description:"A leaderboard to evaluate different image classification models.",id:"timm/leaderboard"}],summary:"Image classification is the task of assigning a label or class to an entire image. Images are expected to have only one class for each image. Image classification models take an image as input and return a prediction about which class the image belongs to.",widgetModels:["google/vit-base-patch16-224"],youtubeId:"tjAIM7BOYhw"},Rv={datasets:[{description:"ImageNet-1K is a image classification dataset in which images are used to train image-feature-extraction models.",id:"imagenet-1k"}],demo:{inputs:[{filename:"mask-generation-input.png",type:"img"}],outputs:[{table:[["Dimension 1","Dimension 2","Dimension 3"],["0.21236686408519745","1.0919708013534546","0.8512550592422485"],["0.809657871723175","-0.18544459342956543","-0.7851548194885254"],["1.3103108406066895","-0.2479034662246704","-0.9107287526130676"],["1.8536205291748047","-0.36419737339019775","0.09717650711536407"]],type:"tabular"}]},metrics:[],models:[{description:"A powerful image feature extraction model.",id:"timm/vit_large_patch14_dinov2.lvd142m"},{description:"A strong image feature extraction model.",id:"nvidia/MambaVision-T-1K"},{description:"A robust image feature extraction model.",id:"facebook/dino-vitb16"},{description:"Cutting-edge image feature extraction model.",id:"apple/aimv2-large-patch14-336-distilled"},{description:"Strong image feature extraction model that can be used on images and documents.",id:"OpenGVLab/InternViT-6B-448px-V1-2"}],spaces:[{description:"A leaderboard to evaluate different image-feature-extraction models on classification performances",id:"timm/leaderboard"}],summary:"Image feature extraction is the task of extracting features learnt in a computer vision model.",widgetModels:[]},Pv={datasets:[{description:"Synthetic dataset, for image relighting",id:"VIDIT"},{description:"Multiple images of celebrities, used for facial expression translation",id:"huggan/CelebA-faces"},{description:"12M image-caption pairs.",id:"Spawning/PD12M"}],demo:{inputs:[{filename:"image-to-image-input.jpeg",type:"img"}],outputs:[{filename:"image-to-image-output.png",type:"img"}]},isPlaceholder:!1,metrics:[{description:"Peak Signal to Noise Ratio (PSNR) is an approximation of the human perception, considering the ratio of the absolute intensity with respect to the variations. Measured in dB, a high value indicates a high fidelity.",id:"PSNR"},{description:"Structural Similarity Index (SSIM) is a perceptual metric which compares the luminance, contrast and structure of two images. The values of SSIM range between -1 and 1, and higher values indicate closer resemblance to the original image.",id:"SSIM"},{description:"Inception Score (IS) is an analysis of the labels predicted by an image classification model when presented with a sample of the generated images.",id:"IS"}],models:[{description:"An image-to-image model to improve image resolution.",id:"fal/AuraSR-v2"},{description:"Powerful image editing model.",id:"black-forest-labs/FLUX.1-Kontext-dev"},{description:"Virtual try-on model.",id:"yisol/IDM-VTON"},{description:"Image re-lighting model.",id:"kontext-community/relighting-kontext-dev-lora-v3"},{description:"Strong model for inpainting and outpainting.",id:"black-forest-labs/FLUX.1-Fill-dev"},{description:"Strong model for image editing using depth maps.",id:"black-forest-labs/FLUX.1-Depth-dev-lora"}],spaces:[{description:"Image editing application.",id:"black-forest-labs/FLUX.1-Kontext-Dev"},{description:"Image relighting application.",id:"lllyasviel/iclight-v2-vary"},{description:"An application for image upscaling.",id:"jasperai/Flux.1-dev-Controlnet-Upscaler"}],summary:"Image-to-image is the task of transforming an input image through a variety of possible manipulations and enhancements, such as super-resolution, image inpainting, colorization, and more.",widgetModels:["Qwen/Qwen-Image"],youtubeId:""},Nv={datasets:[{description:"Dataset from 12M image-text of Reddit",id:"red_caps"},{description:"Dataset from 3.3M images of Google",id:"datasets/conceptual_captions"}],demo:{inputs:[{filename:"savanna.jpg",type:"img"}],outputs:[{label:"Detailed description",content:"a herd of giraffes and zebras grazing in a field",type:"text"}]},metrics:[],models:[{description:"Strong OCR model.",id:"allenai/olmOCR-7B-0725"},{description:"Powerful image captioning model.",id:"fancyfeast/llama-joycaption-beta-one-hf-llava"}],spaces:[{description:"SVG generator app from images.",id:"multimodalart/OmniSVG-3B"},{description:"An application that converts documents to markdown.",id:"numind/NuMarkdown-8B-Thinking"},{description:"An application that can caption images.",id:"fancyfeast/joy-caption-beta-one"}],summary:"Image to text models output a text from a given image. Image captioning or optical character recognition can be considered as the most common applications of image to text.",widgetModels:["Salesforce/blip-image-captioning-large"],youtubeId:""},$v={datasets:[{description:"Instructions composed of image and text.",id:"liuhaotian/LLaVA-Instruct-150K"},{description:"Collection of image-text pairs on scientific topics.",id:"DAMO-NLP-SG/multimodal_textbook"},{description:"A collection of datasets made for model fine-tuning.",id:"HuggingFaceM4/the_cauldron"},{description:"Screenshots of websites with their HTML/CSS codes.",id:"HuggingFaceM4/WebSight"}],demo:{inputs:[{filename:"image-text-to-text-input.png",type:"img"},{label:"Text Prompt",content:"Describe the position of the bee in detail.",type:"text"}],outputs:[{label:"Answer",content:"The bee is sitting on a pink flower, surrounded by other flowers. The bee is positioned in the center of the flower, with its head and front legs sticking out.",type:"text"}]},metrics:[],models:[{description:"Small and efficient yet powerful vision language model.",id:"HuggingFaceTB/SmolVLM-Instruct"},{description:"Cutting-edge reasoning vision language model.",id:"zai-org/GLM-4.5V"},{description:"Cutting-edge small vision language model to convert documents to text.",id:"rednote-hilab/dots.ocr"},{description:"Small yet powerful model.",id:"Qwen/Qwen2.5-VL-3B-Instruct"},{description:"Image-text-to-text model with agentic capabilities.",id:"microsoft/Magma-8B"}],spaces:[{description:"Leaderboard to evaluate vision language models.",id:"opencompass/open_vlm_leaderboard"},{description:"An application that compares object detection capabilities of different vision language models.",id:"sergiopaniego/vlm_object_understanding"},{description:"An application to compare different OCR models.",id:"prithivMLmods/Multimodal-OCR"}],summary:"Image-text-to-text models take in an image and text prompt and output text. These models are also called vision-language models, or VLMs. The difference from image-to-text models is that these models take an additional text input, not restricting the model to certain use cases like image captioning, and may also be trained to accept a conversation as input.",widgetModels:["zai-org/GLM-4.5V"],youtubeId:"IoGaGfU1CIg"},jv={datasets:[{description:"Scene segmentation dataset.",id:"scene_parse_150"}],demo:{inputs:[{filename:"image-segmentation-input.jpeg",type:"img"}],outputs:[{filename:"image-segmentation-output.png",type:"img"}]},metrics:[{description:"Average Precision (AP) is the Area Under the PR Curve (AUC-PR). It is calculated for each semantic class separately",id:"Average Precision"},{description:"Mean Average Precision (mAP) is the overall average of the AP values",id:"Mean Average Precision"},{description:"Intersection over Union (IoU) is the overlap of segmentation masks. Mean IoU is the average of the IoU of all semantic classes",id:"Mean Intersection over Union"},{description:"APα is the Average Precision at the IoU threshold of a α value, for example, AP50 and AP75",id:"APα"}],models:[{description:"Solid panoptic segmentation model trained on COCO.",id:"tue-mps/coco_panoptic_eomt_large_640"},{description:"Background removal model.",id:"briaai/RMBG-1.4"},{description:"A multipurpose image segmentation model for high resolution images.",id:"ZhengPeng7/BiRefNet"},{description:"Powerful human-centric image segmentation model.",id:"facebook/sapiens-seg-1b"},{description:"Panoptic segmentation model trained on the COCO (common objects) dataset.",id:"facebook/mask2former-swin-large-coco-panoptic"}],spaces:[{description:"A semantic segmentation application that can predict unseen instances out of the box.",id:"facebook/ov-seg"},{description:"One of the strongest segmentation applications.",id:"jbrinkma/segment-anything"},{description:"A human-centric segmentation model.",id:"facebook/sapiens-pose"},{description:"An instance segmentation application to predict neuronal cell types from microscopy images.",id:"rashmi/sartorius-cell-instance-segmentation"},{description:"An application that segments videos.",id:"ArtGAN/Segment-Anything-Video"},{description:"An panoptic segmentation application built for outdoor environments.",id:"segments/panoptic-segment-anything"}],summary:"Image Segmentation divides an image into segments where each pixel in the image is mapped to an object. This task has multiple variants such as instance segmentation, panoptic segmentation and semantic segmentation.",widgetModels:["nvidia/segformer-b0-finetuned-ade-512-512"],youtubeId:"dKE8SIt9C-w"},Mv={datasets:[{description:"A benchmark dataset for reference image controlled video generation.",id:"ali-vilab/VACE-Benchmark"},{description:"A dataset of video generation style preferences.",id:"Rapidata/sora-video-generation-style-likert-scoring"},{description:"A dataset with videos and captions throughout the videos.",id:"BestWishYsh/ChronoMagic"}],demo:{inputs:[{filename:"image-to-video-input.jpg",type:"img"},{label:"Optional Text Prompt",content:"This penguin is dancing",type:"text"}],outputs:[{filename:"image-to-video-output.gif",type:"img"}]},metrics:[{description:"Fréchet Video Distance (FVD) measures the perceptual similarity between the distributions of generated videos and a set of real videos, assessing overall visual quality and temporal coherence of the video generated from an input image.",id:"fvd"},{description:"CLIP Score measures the semantic similarity between a textual prompt (if provided alongside the input image) and the generated video frames. It evaluates how well the video's generated content and motion align with the textual description, conditioned on the initial image.",id:"clip_score"},{description:"First Frame Fidelity, often measured using LPIPS (Learned Perceptual Image Patch Similarity), PSNR, or SSIM, quantifies how closely the first frame of the generated video matches the input conditioning image.",id:"lpips"},{description:"Identity Preservation Score measures the consistency of identity (e.g., a person's face or a specific object's characteristics) between the input image and throughout the generated video frames, often calculated using features from specialized models like face recognition (e.g., ArcFace) or re-identification models.",id:"identity_preservation"},{description:"Motion Score evaluates the quality, realism, and temporal consistency of motion in the video generated from a static image. This can be based on optical flow analysis (e.g., smoothness, magnitude), consistency of object trajectories, or specific motion plausibility assessments.",id:"motion_score"}],models:[{description:"LTX-Video, a 13B parameter model for high quality video generation",id:"Lightricks/LTX-Video-0.9.7-dev"},{description:"A 14B parameter model for reference image controlled video generation",id:"Wan-AI/Wan2.1-VACE-14B"},{description:"An image-to-video generation model using FramePack F1 methodology with Hunyuan-DiT architecture",id:"lllyasviel/FramePack_F1_I2V_HY_20250503"},{description:"A distilled version of the LTX-Video-0.9.7-dev model for faster inference",id:"Lightricks/LTX-Video-0.9.7-distilled"},{description:"An image-to-video generation model by Skywork AI, 14B parameters, producing 720p videos.",id:"Skywork/SkyReels-V2-I2V-14B-720P"},{description:"Image-to-video variant of Tencent's HunyuanVideo.",id:"tencent/HunyuanVideo-I2V"},{description:"A 14B parameter model for 720p image-to-video generation by Wan-AI.",id:"Wan-AI/Wan2.1-I2V-14B-720P"},{description:"A Diffusers version of the Wan2.1-I2V-14B-720P model for 720p image-to-video generation.",id:"Wan-AI/Wan2.1-I2V-14B-720P-Diffusers"}],spaces:[{description:"An application to generate videos fast.",id:"Lightricks/ltx-video-distilled"},{description:"Generate videos with the FramePack-F1",id:"linoyts/FramePack-F1"},{description:"Generate videos with the FramePack",id:"lisonallen/framepack-i2v"},{description:"Wan2.1 with CausVid LoRA",id:"multimodalart/wan2-1-fast"},{description:"A demo for Stable Video Diffusion",id:"multimodalart/stable-video-diffusion"}],summary:"Image-to-video models take a still image as input and generate a video. These models can be guided by text prompts to influence the content and style of the output video.",widgetModels:[],youtubeId:void 0},Lv={datasets:[{description:"Widely used benchmark dataset for multiple Vision tasks.",id:"merve/coco2017"},{description:"Medical Imaging dataset of the Human Brain for segmentation and mask generating tasks",id:"rocky93/BraTS_segmentation"}],demo:{inputs:[{filename:"mask-generation-input.png",type:"img"}],outputs:[{filename:"mask-generation-output.png",type:"img"}]},metrics:[{description:"IoU is used to measure the overlap between predicted mask and the ground truth mask.",id:"Intersection over Union (IoU)"}],models:[{description:"Small yet powerful mask generation model.",id:"Zigeng/SlimSAM-uniform-50"},{description:"Very strong mask generation model.",id:"facebook/sam2-hiera-large"}],spaces:[{description:"An application that combines a mask generation model with a zero-shot object detection model for text-guided image segmentation.",id:"merve/OWLSAM2"},{description:"An application that compares the performance of a large and a small mask generation model.",id:"merve/slimsam"},{description:"An application based on an improved mask generation model.",id:"SkalskiP/segment-anything-model-2"},{description:"An application to remove objects from videos using mask generation models.",id:"SkalskiP/SAM_and_ProPainter"}],summary:"Mask generation is the task of generating masks that identify a specific object or region of interest in a given image. Masks are often used in segmentation tasks, where they provide a precise way to isolate the object of interest for further processing or analysis.",widgetModels:[],youtubeId:""},Dv={datasets:[{description:"Widely used benchmark dataset for multiple vision tasks.",id:"merve/coco2017"},{description:"Multi-task computer vision benchmark.",id:"merve/pascal-voc"}],demo:{inputs:[{filename:"object-detection-input.jpg",type:"img"}],outputs:[{filename:"object-detection-output.jpg",type:"img"}]},metrics:[{description:"The Average Precision (AP) metric is the Area Under the PR Curve (AUC-PR). It is calculated for each class separately",id:"Average Precision"},{description:"The Mean Average Precision (mAP) metric is the overall average of the AP values",id:"Mean Average Precision"},{description:"The APα metric is the Average Precision at the IoU threshold of a α value, for example, AP50 and AP75",id:"APα"}],models:[{description:"Solid object detection model pre-trained on the COCO 2017 dataset.",id:"facebook/detr-resnet-50"},{description:"Accurate object detection model.",id:"IDEA-Research/dab-detr-resnet-50"},{description:"Fast and accurate object detection model.",id:"PekingU/rtdetr_v2_r50vd"},{description:"Object detection model for low-lying objects.",id:"StephanST/WALDO30"}],spaces:[{description:"Real-time object detection demo.",id:"Roboflow/RF-DETR"},{description:"An application that contains various object detection models to try from.",id:"Gradio-Blocks/Object-Detection-With-DETR-and-YOLOS"},{description:"A cutting-edge object detection application.",id:"sunsmarterjieleaf/yolov12"},{description:"An object tracking, segmentation and inpainting application.",id:"VIPLab/Track-Anything"},{description:"Very fast object tracking application based on object detection.",id:"merve/RT-DETR-tracking-coco"}],summary:"Object Detection models allow users to identify objects of certain defined classes. Object detection models receive an image as input and output the images with bounding boxes and labels on detected objects.",widgetModels:["facebook/detr-resnet-50"],youtubeId:"WdAeKSOpxhw"},Uv={datasets:[{description:"NYU Depth V2 Dataset: Video dataset containing both RGB and depth sensor data.",id:"sayakpaul/nyu_depth_v2"},{description:"Monocular depth estimation benchmark based without noise and errors.",id:"depth-anything/DA-2K"}],demo:{inputs:[{filename:"depth-estimation-input.jpg",type:"img"}],outputs:[{filename:"depth-estimation-output.png",type:"img"}]},metrics:[],models:[{description:"Cutting-edge depth estimation model.",id:"depth-anything/Depth-Anything-V2-Large"},{description:"A strong monocular depth estimation model.",id:"jingheya/lotus-depth-g-v1-0"},{description:"A depth estimation model that predicts depth in videos.",id:"tencent/DepthCrafter"},{description:"A robust depth estimation model.",id:"apple/DepthPro-hf"}],spaces:[{description:"An application that predicts the depth of an image and then reconstruct the 3D model as voxels.",id:"radames/dpt-depth-estimation-3d-voxels"},{description:"An application for bleeding-edge depth estimation.",id:"akhaliq/depth-pro"},{description:"An application on cutting-edge depth estimation in videos.",id:"tencent/DepthCrafter"},{description:"A human-centric depth estimation application.",id:"facebook/sapiens-depth"}],summary:"Depth estimation is the task of predicting depth of the objects present in an image.",widgetModels:[""],youtubeId:""},es={datasets:[],demo:{inputs:[],outputs:[]},isPlaceholder:!0,metrics:[],models:[],spaces:[],summary:"",widgetModels:[],youtubeId:void 0,canonicalId:void 0},Ov={datasets:[{description:"A curation of widely used datasets for Data Driven Deep Reinforcement Learning (D4RL)",id:"edbeeching/decision_transformer_gym_replay"}],demo:{inputs:[{label:"State",content:"Red traffic light, pedestrians are about to pass.",type:"text"}],outputs:[{label:"Action",content:"Stop the car.",type:"text"},{label:"Next State",content:"Yellow light, pedestrians have crossed.",type:"text"}]},metrics:[{description:"Accumulated reward across all time steps discounted by a factor that ranges between 0 and 1 and determines how much the agent optimizes for future relative to immediate rewards. Measures how good is the policy ultimately found by a given algorithm considering uncertainty over the future.",id:"Discounted Total Reward"},{description:"Average return obtained after running the policy for a certain number of evaluation episodes. As opposed to total reward, mean reward considers how much reward a given algorithm receives while learning.",id:"Mean Reward"},{description:"Measures how good a given algorithm is after a predefined time. Some algorithms may be guaranteed to converge to optimal behavior across many time steps. However, an agent that reaches an acceptable level of optimality after a given time horizon may be preferable to one that ultimately reaches optimality but takes a long time.",id:"Level of Performance After Some Time"}],models:[{description:"A Reinforcement Learning model trained on expert data from the Gym Hopper environment",id:"edbeeching/decision-transformer-gym-hopper-expert"},{description:"A PPO agent playing seals/CartPole-v0 using the stable-baselines3 library and the RL Zoo.",id:"HumanCompatibleAI/ppo-seals-CartPole-v0"}],spaces:[{description:"An application for a cute puppy agent learning to catch a stick.",id:"ThomasSimonini/Huggy"},{description:"An application to play Snowball Fight with a reinforcement learning agent.",id:"ThomasSimonini/SnowballFight"}],summary:"Reinforcement learning is the computational approach of learning from action by interacting with an environment through trial and error and receiving rewards (negative or positive) as feedback",widgetModels:[],youtubeId:"q0BiUn5LiBc"},Fv={datasets:[{description:"A famous question answering dataset based on English articles from Wikipedia.",id:"squad_v2"},{description:"A dataset of aggregated anonymized actual queries issued to the Google search engine.",id:"natural_questions"}],demo:{inputs:[{label:"Question",content:"Which name is also used to describe the Amazon rainforest in English?",type:"text"},{label:"Context",content:"The Amazon rainforest, also known in English as Amazonia or the Amazon Jungle",type:"text"}],outputs:[{label:"Answer",content:"Amazonia",type:"text"}]},metrics:[{description:"Exact Match is a metric based on the strict character match of the predicted answer and the right answer. For answers predicted correctly, the Exact Match will be 1. Even if only one character is different, Exact Match will be 0",id:"exact-match"},{description:" The F1-Score metric is useful if we value both false positives and false negatives equally. The F1-Score is calculated on each word in the predicted sequence against the correct answer",id:"f1"}],models:[{description:"A robust baseline model for most question answering domains.",id:"deepset/roberta-base-squad2"},{description:"Small yet robust model that can answer questions.",id:"distilbert/distilbert-base-cased-distilled-squad"},{description:"A special model that can answer questions from tables.",id:"google/tapas-base-finetuned-wtq"}],spaces:[{description:"An application that can answer a long question from Wikipedia.",id:"deepset/wikipedia-assistant"}],summary:"Question Answering models can retrieve the answer to a question from a given text, which is useful for searching for an answer in a document. Some question answering models can generate answers without context!",widgetModels:["deepset/roberta-base-squad2"],youtubeId:"ajPx5LwJD-I"},Bv={datasets:[{description:"Bing queries with relevant passages from various web sources.",id:"microsoft/ms_marco"}],demo:{inputs:[{label:"Source sentence",content:"Machine learning is so easy.",type:"text"},{label:"Sentences to compare to",content:"Deep learning is so straightforward.",type:"text"},{label:"",content:"This is so difficult, like rocket science.",type:"text"},{label:"",content:"I can't believe how much I struggled with this.",type:"text"}],outputs:[{type:"chart",data:[{label:"Deep learning is so straightforward.",score:.623},{label:"This is so difficult, like rocket science.",score:.413},{label:"I can't believe how much I struggled with this.",score:.256}]}]},metrics:[{description:"Reciprocal Rank is a measure used to rank the relevancy of documents given a set of documents. Reciprocal Rank is the reciprocal of the rank of the document retrieved, meaning, if the rank is 3, the Reciprocal Rank is 0.33. If the rank is 1, the Reciprocal Rank is 1",id:"Mean Reciprocal Rank"},{description:"The similarity of the embeddings is evaluated mainly on cosine similarity. It is calculated as the cosine of the angle between two vectors. It is particularly useful when your texts are not the same length",id:"Cosine Similarity"}],models:[{description:"This model works well for sentences and paragraphs and can be used for clustering/grouping and semantic searches.",id:"sentence-transformers/all-mpnet-base-v2"},{description:"A multilingual robust sentence similarity model.",id:"BAAI/bge-m3"},{description:"A robust sentence similarity model.",id:"HIT-TMG/KaLM-embedding-multilingual-mini-instruct-v1.5"}],spaces:[{description:"An application that leverages sentence similarity to answer questions from YouTube videos.",id:"Gradio-Blocks/Ask_Questions_To_YouTube_Videos"},{description:"An application that retrieves relevant PubMed abstracts for a given online article which can be used as further references.",id:"Gradio-Blocks/pubmed-abstract-retriever"},{description:"An application that leverages sentence similarity to summarize text.",id:"nickmuchi/article-text-summarizer"},{description:"A guide that explains how Sentence Transformers can be used for semantic search.",id:"sentence-transformers/Sentence_Transformers_for_semantic_search"}],summary:"Sentence Similarity is the task of determining how similar two texts are. Sentence similarity models convert input texts into vectors (embeddings) that capture semantic information and calculate how close (similar) they are between them. This task is particularly useful for information retrieval and clustering/grouping.",widgetModels:["BAAI/bge-small-en-v1.5"],youtubeId:"VCZq5AkbNEU"},Vv={canonicalId:"text-generation",datasets:[{description:"News articles in five different languages along with their summaries. Widely used for benchmarking multilingual summarization models.",id:"mlsum"},{description:"English conversations and their summaries. Useful for benchmarking conversational agents.",id:"samsum"}],demo:{inputs:[{label:"Input",content:"The tower is 324 metres (1,063 ft) tall, about the same height as an 81-storey building, and the tallest structure in Paris. Its base is square, measuring 125 metres (410 ft) on each side. It was the first structure to reach a height of 300 metres. Excluding transmitters, the Eiffel Tower is the second tallest free-standing structure in France after the Millau Viaduct.",type:"text"}],outputs:[{label:"Output",content:"The tower is 324 metres (1,063 ft) tall, about the same height as an 81-storey building. It was the first structure to reach a height of 300 metres.",type:"text"}]},metrics:[{description:"The generated sequence is compared against its summary, and the overlap of tokens are counted. ROUGE-N refers to overlap of N subsequent tokens, ROUGE-1 refers to overlap of single tokens and ROUGE-2 is the overlap of two subsequent tokens.",id:"rouge"}],models:[{description:"A strong summarization model trained on English news articles. Excels at generating factual summaries.",id:"facebook/bart-large-cnn"},{description:"A summarization model trained on medical articles.",id:"Falconsai/medical_summarization"}],spaces:[{description:"An application that can summarize long paragraphs.",id:"pszemraj/summarize-long-text"},{description:"A much needed summarization application for terms and conditions.",id:"ml6team/distilbart-tos-summarizer-tosdr"},{description:"An application that summarizes long documents.",id:"pszemraj/document-summarization"},{description:"An application that can detect errors in abstractive summarization.",id:"ml6team/post-processing-summarization"}],summary:"Summarization is the task of producing a shorter version of a document while preserving its important information. Some models can extract text from the original input, while other models can generate entirely new text.",widgetModels:["facebook/bart-large-cnn"],youtubeId:"yHnr5Dk2zCI"},zv={datasets:[{description:"The WikiTableQuestions dataset is a large-scale dataset for the task of question answering on semi-structured tables.",id:"wikitablequestions"},{description:"WikiSQL is a dataset of 80654 hand-annotated examples of questions and SQL queries distributed across 24241 tables from Wikipedia.",id:"wikisql"}],demo:{inputs:[{table:[["Rank","Name","No.of reigns","Combined days"],["1","lou Thesz","3","3749"],["2","Ric Flair","8","3103"],["3","Harley Race","7","1799"]],type:"tabular"},{label:"Question",content:"What is the number of reigns for Harley Race?",type:"text"}],outputs:[{label:"Result",content:"7",type:"text"}]},metrics:[{description:"Checks whether the predicted answer(s) is the same as the ground-truth answer(s).",id:"Denotation Accuracy"}],models:[{description:"A table question answering model that is capable of neural SQL execution, i.e., employ TAPEX to execute a SQL query on a given table.",id:"microsoft/tapex-base"},{description:"A robust table question answering model.",id:"google/tapas-base-finetuned-wtq"}],spaces:[{description:"An application that answers questions based on table CSV files.",id:"katanaml/table-query"}],summary:"Table Question Answering (Table QA) is the answering a question about an information on a given table.",widgetModels:["google/tapas-base-finetuned-wtq"]},qv={datasets:[{description:"A comprehensive curation of datasets covering all benchmarks.",id:"inria-soda/tabular-benchmark"}],demo:{inputs:[{table:[["Glucose","Blood Pressure ","Skin Thickness","Insulin","BMI"],["148","72","35","0","33.6"],["150","50","30","0","35.1"],["141","60","29","1","39.2"]],type:"tabular"}],outputs:[{table:[["Diabetes"],["1"],["1"],["0"]],type:"tabular"}]},metrics:[{description:"",id:"accuracy"},{description:"",id:"recall"},{description:"",id:"precision"},{description:"",id:"f1"}],models:[{description:"Breast cancer prediction model based on decision trees.",id:"scikit-learn/cancer-prediction-trees"}],spaces:[{description:"An application that can predict defective products on a production line.",id:"scikit-learn/tabular-playground"},{description:"An application that compares various tabular classification techniques on different datasets.",id:"scikit-learn/classification"}],summary:"Tabular classification is the task of classifying a target category (a group) based on set of attributes.",widgetModels:["scikit-learn/tabular-playground"],youtubeId:""},Hv={datasets:[{description:"A comprehensive curation of datasets covering all benchmarks.",id:"inria-soda/tabular-benchmark"}],demo:{inputs:[{table:[["Car Name","Horsepower","Weight"],["ford torino","140","3,449"],["amc hornet","97","2,774"],["toyota corolla","65","1,773"]],type:"tabular"}],outputs:[{table:[["MPG (miles per gallon)"],["17"],["18"],["31"]],type:"tabular"}]},metrics:[{description:"",id:"mse"},{description:"Coefficient of determination (or R-squared) is a measure of how well the model fits the data. Higher R-squared is considered a better fit.",id:"r-squared"}],models:[{description:"Fish weight prediction based on length measurements and species.",id:"scikit-learn/Fish-Weight"}],spaces:[{description:"An application that can predict weight of a fish based on set of attributes.",id:"scikit-learn/fish-weight-prediction"}],summary:"Tabular regression is the task of predicting a numerical value given a set of attributes.",widgetModels:["scikit-learn/Fish-Weight"],youtubeId:""},Wv={datasets:[{description:"RedCaps is a large-scale dataset of 12M image-text pairs collected from Reddit.",id:"red_caps"},{description:"Conceptual Captions is a dataset consisting of ~3.3M images annotated with captions.",id:"conceptual_captions"},{description:"12M image-caption pairs.",id:"Spawning/PD12M"}],demo:{inputs:[{label:"Input",content:"A city above clouds, pastel colors, Victorian style",type:"text"}],outputs:[{filename:"image.jpeg",type:"img"}]},metrics:[{description:"The Inception Score (IS) measure assesses diversity and meaningfulness. It uses a generated image sample to predict its label. A higher score signifies more diverse and meaningful images.",id:"IS"},{description:"The Fréchet Inception Distance (FID) calculates the distance between distributions between synthetic and real samples. A lower FID score indicates better similarity between the distributions of real and generated images.",id:"FID"},{description:"R-precision assesses how the generated image aligns with the provided text description. It uses the generated images as queries to retrieve relevant text descriptions. The top 'r' relevant descriptions are selected and used to calculate R-precision as r/R, where 'R' is the number of ground truth descriptions associated with the generated images. A higher R-precision value indicates a better model.",id:"R-Precision"}],models:[{description:"One of the most powerful image generation models that can generate realistic outputs.",id:"black-forest-labs/FLUX.1-Krea-dev"},{description:"A powerful image generation model.",id:"Qwen/Qwen-Image"},{description:"Powerful and fast image generation model.",id:"ByteDance/SDXL-Lightning"},{description:"A powerful text-to-image model.",id:"ByteDance/Hyper-SD"}],spaces:[{description:"A powerful text-to-image application.",id:"stabilityai/stable-diffusion-3-medium"},{description:"A text-to-image application to generate comics.",id:"jbilcke-hf/ai-comic-factory"},{description:"An application to match multiple custom image generation models.",id:"multimodalart/flux-lora-lab"},{description:"A powerful yet very fast image generation application.",id:"latent-consistency/lcm-lora-for-sdxl"},{description:"A gallery to explore various text-to-image models.",id:"multimodalart/LoraTheExplorer"},{description:"An application for `text-to-image`, `image-to-image` and image inpainting.",id:"ArtGAN/Stable-Diffusion-ControlNet-WebUI"},{description:"An application to generate realistic images given photos of a person and a prompt.",id:"InstantX/InstantID"}],summary:"Text-to-image is the task of generating images from input text. These pipelines can also be used to modify and edit images based on text prompts.",widgetModels:["black-forest-labs/FLUX.1-dev"],youtubeId:""},Kv={canonicalId:"text-to-audio",datasets:[{description:"10K hours of multi-speaker English dataset.",id:"parler-tts/mls_eng_10k"},{description:"Multi-speaker English dataset.",id:"mythicinfinity/libritts_r"},{description:"Multi-lingual dataset.",id:"facebook/multilingual_librispeech"}],demo:{inputs:[{label:"Input",content:"I love audio models on the Hub!",type:"text"}],outputs:[{filename:"audio.wav",type:"audio"}]},metrics:[{description:"The Mel Cepstral Distortion (MCD) metric is used to calculate the quality of generated speech.",id:"mel cepstral distortion"}],models:[{description:"Small yet powerful TTS model.",id:"KittenML/kitten-tts-nano-0.1"},{description:"Bleeding edge TTS model.",id:"ResembleAI/chatterbox"},{description:"A massively multi-lingual TTS model.",id:"fishaudio/fish-speech-1.5"},{description:"A text-to-dialogue model.",id:"nari-labs/Dia-1.6B-0626"}],spaces:[{description:"An application for generate high quality speech in different languages.",id:"hexgrad/Kokoro-TTS"},{description:"A multilingual text-to-speech application.",id:"fishaudio/fish-speech-1"},{description:"Performant TTS application.",id:"ResembleAI/Chatterbox"},{description:"An application to compare different TTS models.",id:"TTS-AGI/TTS-Arena-V2"},{description:"An application that generates podcast episodes.",id:"ngxson/kokoro-podcast-generator"}],summary:"Text-to-Speech (TTS) is the task of generating natural sounding speech given text input. TTS models can be extended to have a single model that generates speech for multiple speakers and multiple languages.",widgetModels:["suno/bark"],youtubeId:"NW62DpzJ274"},Xv={datasets:[{description:"A widely used dataset useful to benchmark named entity recognition models.",id:"eriktks/conll2003"},{description:"A multilingual dataset of Wikipedia articles annotated for named entity recognition in over 150 different languages.",id:"unimelb-nlp/wikiann"}],demo:{inputs:[{label:"Input",content:"My name is Omar and I live in Zürich.",type:"text"}],outputs:[{text:"My name is Omar and I live in Zürich.",tokens:[{type:"PERSON",start:11,end:15},{type:"GPE",start:30,end:36}],type:"text-with-tokens"}]},metrics:[{description:"",id:"accuracy"},{description:"",id:"recall"},{description:"",id:"precision"},{description:"",id:"f1"}],models:[{description:"A robust performance model to identify people, locations, organizations and names of miscellaneous entities.",id:"dslim/bert-base-NER"},{description:"A strong model to identify people, locations, organizations and names in multiple languages.",id:"FacebookAI/xlm-roberta-large-finetuned-conll03-english"},{description:"A token classification model specialized on medical entity recognition.",id:"blaze999/Medical-NER"},{description:"Flair models are typically the state of the art in named entity recognition tasks.",id:"flair/ner-english"}],spaces:[{description:"An application that can recognizes entities, extracts noun chunks and recognizes various linguistic features of each token.",id:"spacy/gradio_pipeline_visualizer"}],summary:"Token classification is a natural language understanding task in which a label is assigned to some tokens in a text. Some popular token classification subtasks are Named Entity Recognition (NER) and Part-of-Speech (PoS) tagging. NER models could be trained to identify specific entities in a text, such as dates, individuals and places; and PoS tagging would identify, for example, which words in a text are verbs, nouns, and punctuation marks.",widgetModels:["FacebookAI/xlm-roberta-large-finetuned-conll03-english"],youtubeId:"wVHdVlPScxA"},Qv={canonicalId:"text-generation",datasets:[{description:"A dataset of copyright-free books translated into 16 different languages.",id:"Helsinki-NLP/opus_books"},{description:"An example of translation between programming languages. This dataset consists of functions in Java and C#.",id:"google/code_x_glue_cc_code_to_code_trans"}],demo:{inputs:[{label:"Input",content:"My name is Omar and I live in Zürich.",type:"text"}],outputs:[{label:"Output",content:"Mein Name ist Omar und ich wohne in Zürich.",type:"text"}]},metrics:[{description:"BLEU score is calculated by counting the number of shared single or subsequent tokens between the generated sequence and the reference. Subsequent n tokens are called “n-grams”. Unigram refers to a single token while bi-gram refers to token pairs and n-grams refer to n subsequent tokens. The score ranges from 0 to 1, where 1 means the translation perfectly matched and 0 did not match at all",id:"bleu"},{description:"",id:"sacrebleu"}],models:[{description:"Very powerful model that can translate many languages between each other, especially low-resource languages.",id:"facebook/nllb-200-1.3B"},{description:"A general-purpose Transformer that can be used to translate from English to German, French, or Romanian.",id:"google-t5/t5-base"}],spaces:[{description:"An application that can translate between 100 languages.",id:"Iker/Translate-100-languages"},{description:"An application that can translate between many languages.",id:"Geonmo/nllb-translation-demo"}],summary:"Translation is the task of converting text from one language to another.",widgetModels:["facebook/mbart-large-50-many-to-many-mmt"],youtubeId:"1JvfrvZgi6c"},Yv={datasets:[{description:"A widely used dataset used to benchmark multiple variants of text classification.",id:"nyu-mll/glue"},{description:"A text classification dataset used to benchmark natural language inference models",id:"stanfordnlp/snli"}],demo:{inputs:[{label:"Input",content:"I love Hugging Face!",type:"text"}],outputs:[{type:"chart",data:[{label:"POSITIVE",score:.9},{label:"NEUTRAL",score:.1},{label:"NEGATIVE",score:0}]}]},metrics:[{description:"",id:"accuracy"},{description:"",id:"recall"},{description:"",id:"precision"},{description:"The F1 metric is the harmonic mean of the precision and recall. It can be calculated as: F1 = 2 * (precision * recall) / (precision + recall)",id:"f1"}],models:[{description:"A robust model trained for sentiment analysis.",id:"distilbert/distilbert-base-uncased-finetuned-sst-2-english"},{description:"A sentiment analysis model specialized in financial sentiment.",id:"ProsusAI/finbert"},{description:"A sentiment analysis model specialized in analyzing tweets.",id:"cardiffnlp/twitter-roberta-base-sentiment-latest"},{description:"A model that can classify languages.",id:"papluca/xlm-roberta-base-language-detection"},{description:"A model that can classify text generation attacks.",id:"meta-llama/Prompt-Guard-86M"}],spaces:[{description:"An application that can classify financial sentiment.",id:"IoannisTr/Tech_Stocks_Trading_Assistant"},{description:"A dashboard that contains various text classification tasks.",id:"miesnerjacob/Multi-task-NLP"},{description:"An application that analyzes user reviews in healthcare.",id:"spacy/healthsea-demo"}],summary:"Text Classification is the task of assigning a label or class to a given text. Some use cases are sentiment analysis, natural language inference, and assessing grammatical correctness.",widgetModels:["distilbert/distilbert-base-uncased-finetuned-sst-2-english"],youtubeId:"leNG9fN9FQU"},Jv={datasets:[{description:"Multilingual dataset used to evaluate text generation models.",id:"CohereForAI/Global-MMLU"},{description:"High quality multilingual data used to train text-generation models.",id:"HuggingFaceFW/fineweb-2"},{description:"Truly open-source, curated and cleaned dialogue dataset.",id:"HuggingFaceH4/ultrachat_200k"},{description:"A reasoning dataset.",id:"open-r1/OpenThoughts-114k-math"},{description:"A multilingual instruction dataset with preference ratings on responses.",id:"allenai/tulu-3-sft-mixture"},{description:"A large synthetic dataset for alignment of text generation models.",id:"HuggingFaceTB/smoltalk"},{description:"A dataset made for training text generation models solving math questions.",id:"HuggingFaceTB/finemath"}],demo:{inputs:[{label:"Input",content:"Once upon a time,",type:"text"}],outputs:[{label:"Output",content:"Once upon a time, we knew that our ancestors were on the verge of extinction. The great explorers and poets of the Old World, from Alexander the Great to Chaucer, are dead and gone. A good many of our ancient explorers and poets have",type:"text"}]},metrics:[{description:"Cross Entropy is a metric that calculates the difference between two probability distributions. Each probability distribution is the distribution of predicted words",id:"Cross Entropy"},{description:"The Perplexity metric is the exponential of the cross-entropy loss. It evaluates the probabilities assigned to the next word by the model. Lower perplexity indicates better performance",id:"Perplexity"}],models:[{description:"A text-generation model trained to follow instructions.",id:"google/gemma-2-2b-it"},{description:"Powerful text generation model for coding.",id:"Qwen/Qwen3-Coder-480B-A35B-Instruct"},{description:"Great text generation model with top-notch tool calling capabilities.",id:"openai/gpt-oss-120b"},{description:"Powerful text generation model.",id:"zai-org/GLM-4.5"},{description:"A powerful small model with reasoning capabilities.",id:"Qwen/Qwen3-4B-Thinking-2507"},{description:"Strong conversational model that supports very long instructions.",id:"Qwen/Qwen2.5-7B-Instruct-1M"},{description:"Text generation model used to write code.",id:"Qwen/Qwen2.5-Coder-32B-Instruct"},{description:"Powerful reasoning based open large language model.",id:"deepseek-ai/DeepSeek-R1"}],spaces:[{description:"An application that writes and executes code from text instructions and supports many models.",id:"akhaliq/anycoder"},{description:"An application that builds websites from natural language prompts.",id:"enzostvs/deepsite"},{description:"A leaderboard for comparing chain-of-thought performance of models.",id:"logikon/open_cot_leaderboard"},{description:"An text generation based application based on a very powerful LLaMA2 model.",id:"ysharma/Explore_llamav2_with_TGI"},{description:"An text generation based application to converse with Zephyr model.",id:"HuggingFaceH4/zephyr-chat"},{description:"A leaderboard that ranks text generation models based on blind votes from people.",id:"lmsys/chatbot-arena-leaderboard"},{description:"An chatbot to converse with a very powerful text generation model.",id:"mlabonne/phixtral-chat"}],summary:"Generating text is the task of generating new text given another text. These models can, for example, fill in incomplete text or paraphrase.",widgetModels:["mistralai/Mistral-Nemo-Instruct-2407"],youtubeId:"e9gNEAlsOvU"},Zv={datasets:[{description:"Bing queries with relevant passages from various web sources.",id:"microsoft/ms_marco"}],demo:{inputs:[{label:"Source sentence",content:"Machine learning is so easy.",type:"text"},{label:"Sentences to compare to",content:"Deep learning is so straightforward.",type:"text"},{label:"",content:"This is so difficult, like rocket science.",type:"text"},{label:"",content:"I can't believe how much I struggled with this.",type:"text"}],outputs:[{type:"chart",data:[{label:"Deep learning is so straightforward.",score:2.2006407},{label:"This is so difficult, like rocket science.",score:-6.2634873},{label:"I can't believe how much I struggled with this.",score:-10.251488}]}]},metrics:[{description:"Discounted Cumulative Gain (DCG) measures the gain, or usefulness, of search results discounted by their position. The normalization is done by dividing the DCG by the ideal DCG, which is the DCG of the perfect ranking.",id:"Normalized Discounted Cumulative Gain"},{description:"Reciprocal Rank is a measure used to rank the relevancy of documents given a set of documents. Reciprocal Rank is the reciprocal of the rank of the document retrieved, meaning, if the rank is 3, the Reciprocal Rank is 0.33. If the rank is 1, the Reciprocal Rank is 1",id:"Mean Reciprocal Rank"},{description:"Mean Average Precision (mAP) is the overall average of the Average Precision (AP) values, where AP is the Area Under the PR Curve (AUC-PR)",id:"Mean Average Precision"}],models:[{description:"An extremely efficient text ranking model trained on a web search dataset.",id:"cross-encoder/ms-marco-MiniLM-L6-v2"},{description:"A strong multilingual text reranker model.",id:"Alibaba-NLP/gte-multilingual-reranker-base"},{description:"An efficient text ranking model that punches above its weight.",id:"Alibaba-NLP/gte-reranker-modernbert-base"}],spaces:[],summary:"Text Ranking is the task of ranking a set of texts based on their relevance to a query. Text ranking models are trained on large datasets of queries and relevant documents to learn how to rank documents based on their relevance to the query. This task is particularly useful for search engines and information retrieval systems.",widgetModels:["cross-encoder/ms-marco-MiniLM-L6-v2"],youtubeId:""},Gv={datasets:[{description:"Microsoft Research Video to Text is a large-scale dataset for open domain video captioning",id:"iejMac/CLIP-MSR-VTT"},{description:"UCF101 Human Actions dataset consists of 13,320 video clips from YouTube, with 101 classes.",id:"quchenyuan/UCF101-ZIP"},{description:"A high-quality dataset for human action recognition in YouTube videos.",id:"nateraw/kinetics"},{description:"A dataset of video clips of humans performing pre-defined basic actions with everyday objects.",id:"HuggingFaceM4/something_something_v2"},{description:"This dataset consists of text-video pairs and contains noisy samples with irrelevant video descriptions",id:"HuggingFaceM4/webvid"},{description:"A dataset of short Flickr videos for the temporal localization of events with descriptions.",id:"iejMac/CLIP-DiDeMo"}],demo:{inputs:[{label:"Input",content:"Darth Vader is surfing on the waves.",type:"text"}],outputs:[{filename:"text-to-video-output.gif",type:"img"}]},metrics:[{description:"Inception Score uses an image classification model that predicts class labels and evaluates how distinct and diverse the images are. A higher score indicates better video generation.",id:"is"},{description:"Frechet Inception Distance uses an image classification model to obtain image embeddings. The metric compares mean and standard deviation of the embeddings of real and generated images. A smaller score indicates better video generation.",id:"fid"},{description:"Frechet Video Distance uses a model that captures coherence for changes in frames and the quality of each frame. A smaller score indicates better video generation.",id:"fvd"},{description:"CLIPSIM measures similarity between video frames and text using an image-text similarity model. A higher score indicates better video generation.",id:"clipsim"}],models:[{description:"A strong model for consistent video generation.",id:"tencent/HunyuanVideo"},{description:"A text-to-video model with high fidelity motion and strong prompt adherence.",id:"Lightricks/LTX-Video"},{description:"A text-to-video model focusing on physics-aware applications like robotics.",id:"nvidia/Cosmos-1.0-Diffusion-7B-Text2World"},{description:"Very fast model for video generation.",id:"Lightricks/LTX-Video-0.9.8-13B-distilled"}],spaces:[{description:"An application that generates video from text.",id:"VideoCrafter/VideoCrafter"},{description:"Consistent video generation application.",id:"Wan-AI/Wan2.1"},{description:"A cutting edge video generation application.",id:"Pyramid-Flow/pyramid-flow"}],summary:"Text-to-video models can be used in any application that requires generating consistent sequence of images from text. ",widgetModels:["Wan-AI/Wan2.2-TI2V-5B"],youtubeId:void 0},ew={datasets:[{description:"The CIFAR-100 dataset consists of 60000 32x32 colour images in 100 classes, with 600 images per class.",id:"cifar100"},{description:"Multiple images of celebrities, used for facial expression translation.",id:"CelebA"}],demo:{inputs:[{label:"Seed",content:"42",type:"text"},{label:"Number of images to generate:",content:"4",type:"text"}],outputs:[{filename:"unconditional-image-generation-output.jpeg",type:"img"}]},metrics:[{description:"The inception score (IS) evaluates the quality of generated images. It measures the diversity of the generated images (the model predictions are evenly distributed across all possible labels) and their 'distinction' or 'sharpness' (the model confidently predicts a single label for each image).",id:"Inception score (IS)"},{description:"The Fréchet Inception Distance (FID) evaluates the quality of images created by a generative model by calculating the distance between feature vectors for real and generated images.",id:"Frećhet Inception Distance (FID)"}],models:[{description:"High-quality image generation model trained on the CIFAR-10 dataset. It synthesizes images of the ten classes presented in the dataset using diffusion probabilistic models, a class of latent variable models inspired by considerations from nonequilibrium thermodynamics.",id:"google/ddpm-cifar10-32"},{description:"High-quality image generation model trained on the 256x256 CelebA-HQ dataset. It synthesizes images of faces using diffusion probabilistic models, a class of latent variable models inspired by considerations from nonequilibrium thermodynamics.",id:"google/ddpm-celebahq-256"}],spaces:[{description:"An application that can generate realistic faces.",id:"CompVis/celeba-latent-diffusion"}],summary:"Unconditional image generation is the task of generating images with no condition in any context (like a prompt text or another image). Once trained, the model will create images that resemble its training data distribution.",widgetModels:[""],youtubeId:""},tw={datasets:[{description:"Benchmark dataset used for video classification with videos that belong to 400 classes.",id:"kinetics400"}],demo:{inputs:[{filename:"video-classification-input.gif",type:"img"}],outputs:[{type:"chart",data:[{label:"Playing Guitar",score:.514},{label:"Playing Tennis",score:.193},{label:"Cooking",score:.068}]}]},metrics:[{description:"",id:"accuracy"},{description:"",id:"recall"},{description:"",id:"precision"},{description:"",id:"f1"}],models:[{description:"Strong Video Classification model trained on the Kinetics 400 dataset.",id:"google/vivit-b-16x2-kinetics400"},{description:"Strong Video Classification model trained on the Kinetics 400 dataset.",id:"microsoft/xclip-base-patch32"}],spaces:[{description:"An application that classifies video at different timestamps.",id:"nateraw/lavila"},{description:"An application that classifies video.",id:"fcakyon/video-classification"}],summary:"Video classification is the task of assigning a label or class to an entire video. Videos are expected to have only one class for each video. Video classification models take a video as input and return a prediction about which class the video belongs to.",widgetModels:[],youtubeId:""},nw={datasets:[{description:"A large dataset used to train visual document retrieval models.",id:"vidore/colpali_train_set"}],demo:{inputs:[{filename:"input.png",type:"img"},{label:"Question",content:"Is the model in this paper the fastest for inference?",type:"text"}],outputs:[{type:"chart",data:[{label:"Page 10",score:.7},{label:"Page 11",score:.06},{label:"Page 9",score:.003}]}]},isPlaceholder:!1,metrics:[{description:"NDCG@k scores ranked recommendation lists for top-k results. 0 is the worst, 1 is the best.",id:"Normalized Discounted Cumulative Gain at K"}],models:[{description:"Very accurate visual document retrieval model for multilingual queries and documents.",id:"vidore/colqwen2-v1.0"},{description:"Very fast and efficient visual document retrieval model that can also take in other modalities like audio.",id:"Tevatron/OmniEmbed-v0.1"}],spaces:[{description:"A leaderboard of visual document retrieval models.",id:"vidore/vidore-leaderboard"},{description:"Visual retrieval augmented generation demo based on ColQwen2 model.",id:"vidore/visual-rag-tool"}],summary:"Visual document retrieval is the task of searching for relevant image-based documents, such as PDFs. These models take a text query and multiple documents as input and return the top-most relevant documents and relevancy scores as output.",widgetModels:[""],youtubeId:""},rw={datasets:[{description:"A widely used dataset containing questions (with answers) about images.",id:"Graphcore/vqa"},{description:"A dataset to benchmark visual reasoning based on text in images.",id:"facebook/textvqa"}],demo:{inputs:[{filename:"elephant.jpeg",type:"img"},{label:"Question",content:"What is in this image?",type:"text"}],outputs:[{type:"chart",data:[{label:"elephant",score:.97},{label:"elephants",score:.06},{label:"animal",score:.003}]}]},isPlaceholder:!1,metrics:[{description:"",id:"accuracy"},{description:"Measures how much a predicted answer differs from the ground truth based on the difference in their semantic meaning.",id:"wu-palmer similarity"}],models:[{description:"A visual question answering model trained to convert charts and plots to text.",id:"google/deplot"},{description:"A visual question answering model trained for mathematical reasoning and chart derendering from images.",id:"google/matcha-base"},{description:"A strong visual question answering that answers questions from book covers.",id:"google/pix2struct-ocrvqa-large"}],spaces:[{description:"An application that compares visual question answering models across different tasks.",id:"merve/pix2struct"},{description:"An application that can answer questions based on images.",id:"nielsr/vilt-vqa"},{description:"An application that can caption images and answer questions about a given image. ",id:"Salesforce/BLIP"},{description:"An application that can caption images and answer questions about a given image. ",id:"vumichien/Img2Prompt"}],summary:"Visual Question Answering is the task of answering open-ended questions based on an image. They output natural language responses to natural language questions.",widgetModels:["dandelin/vilt-b32-finetuned-vqa"],youtubeId:""},iw={datasets:[{description:"A widely used dataset used to benchmark multiple variants of text classification.",id:"nyu-mll/glue"},{description:"The Multi-Genre Natural Language Inference (MultiNLI) corpus is a crowd-sourced collection of 433k sentence pairs annotated with textual entailment information.",id:"nyu-mll/multi_nli"},{description:"FEVER is a publicly available dataset for fact extraction and verification against textual sources.",id:"fever/fever"}],demo:{inputs:[{label:"Text Input",content:"Dune is the best movie ever.",type:"text"},{label:"Candidate Labels",content:"CINEMA, ART, MUSIC",type:"text"}],outputs:[{type:"chart",data:[{label:"CINEMA",score:.9},{label:"ART",score:.1},{label:"MUSIC",score:0}]}]},metrics:[],models:[{description:"Powerful zero-shot text classification model.",id:"facebook/bart-large-mnli"},{description:"Cutting-edge zero-shot multilingual text classification model.",id:"MoritzLaurer/ModernBERT-large-zeroshot-v2.0"},{description:"Zero-shot text classification model that can be used for topic and sentiment classification.",id:"knowledgator/gliclass-modern-base-v2.0-init"}],spaces:[],summary:"Zero-shot text classification is a task in natural language processing where a model is trained on a set of labeled examples but is then able to classify new examples from previously unseen classes.",widgetModels:["facebook/bart-large-mnli"]},ow={datasets:[{description:"",id:""}],demo:{inputs:[{filename:"image-classification-input.jpeg",type:"img"},{label:"Classes",content:"cat, dog, bird",type:"text"}],outputs:[{type:"chart",data:[{label:"Cat",score:.664},{label:"Dog",score:.329},{label:"Bird",score:.008}]}]},metrics:[{description:"Computes the number of times the correct label appears in top K labels predicted",id:"top-K accuracy"}],models:[{description:"Multilingual image classification model for 80 languages.",id:"visheratin/mexma-siglip"},{description:"Strong zero-shot image classification model.",id:"google/siglip2-base-patch16-224"},{description:"Robust zero-shot image classification model.",id:"intfloat/mmE5-mllama-11b-instruct"},{description:"Powerful zero-shot image classification model supporting 94 languages.",id:"jinaai/jina-clip-v2"},{description:"Strong image classification model for biomedical domain.",id:"microsoft/BiomedCLIP-PubMedBERT_256-vit_base_patch16_224"}],spaces:[{description:"An application that leverages zero-shot image classification to find best captions to generate an image. ",id:"pharma/CLIP-Interrogator"},{description:"An application to compare different zero-shot image classification models. ",id:"merve/compare_clip_siglip"}],summary:"Zero-shot image classification is the task of classifying previously unseen classes during training of a model.",widgetModels:["google/siglip-so400m-patch14-224"],youtubeId:""},aw={datasets:[],demo:{inputs:[{filename:"zero-shot-object-detection-input.jpg",type:"img"},{label:"Classes",content:"cat, dog, bird",type:"text"}],outputs:[{filename:"zero-shot-object-detection-output.jpg",type:"img"}]},metrics:[{description:"The Average Precision (AP) metric is the Area Under the PR Curve (AUC-PR). It is calculated for each class separately",id:"Average Precision"},{description:"The Mean Average Precision (mAP) metric is the overall average of the AP values",id:"Mean Average Precision"},{description:"The APα metric is the Average Precision at the IoU threshold of a α value, for example, AP50 and AP75",id:"APα"}],models:[{description:"Solid zero-shot object detection model.",id:"openmmlab-community/mm_grounding_dino_large_all"},{description:"Cutting-edge zero-shot object detection model.",id:"fushh7/LLMDet"}],spaces:[{description:"A demo to compare different zero-shot object detection models per output and latency.",id:"ariG23498/zero-shot-od"},{description:"A demo that combines a zero-shot object detection and mask generation model for zero-shot segmentation.",id:"merve/OWLSAM"}],summary:"Zero-shot object detection is a computer vision task to detect objects and their classes in images, without any prior training or knowledge of the classes. Zero-shot object detection models receive an image as input, as well as a list of candidate classes, and output the bounding boxes and labels where the objects have been detected.",widgetModels:[],youtubeId:""},sw={datasets:[{description:"A large dataset of over 10 million 3D objects.",id:"allenai/objaverse-xl"},{description:"A dataset of isolated object images for evaluating image-to-3D models.",id:"dylanebert/iso3d"}],demo:{inputs:[{filename:"image-to-3d-image-input.png",type:"img"}],outputs:[{label:"Result",content:"image-to-3d-3d-output-filename.glb",type:"text"}]},metrics:[],models:[{description:"Fast image-to-3D mesh model by Tencent.",id:"TencentARC/InstantMesh"},{description:"3D world generation model.",id:"tencent/HunyuanWorld-1"},{description:"A scaled up image-to-3D mesh model derived from TripoSR.",id:"hwjiang/Real3D"},{description:"Consistent image-to-3d generation model.",id:"stabilityai/stable-point-aware-3d"}],spaces:[{description:"Leaderboard to evaluate image-to-3D models.",id:"dylanebert/3d-arena"},{description:"Image-to-3D demo with mesh outputs.",id:"TencentARC/InstantMesh"},{description:"Image-to-3D demo.",id:"stabilityai/stable-point-aware-3d"},{description:"Image-to-3D demo with mesh outputs.",id:"hwjiang/Real3D"},{description:"Image-to-3D demo with splat outputs.",id:"dylanebert/LGM-mini"}],summary:"Image-to-3D models take in image input and produce 3D output.",widgetModels:[],youtubeId:""},lw={datasets:[{description:"A large dataset of over 10 million 3D objects.",id:"allenai/objaverse-xl"},{description:"Descriptive captions for 3D objects in Objaverse.",id:"tiange/Cap3D"}],demo:{inputs:[{label:"Prompt",content:"a cat statue",type:"text"}],outputs:[{label:"Result",content:"text-to-3d-3d-output-filename.glb",type:"text"}]},metrics:[],models:[{description:"Text-to-3D mesh model by OpenAI",id:"openai/shap-e"},{description:"Generative 3D gaussian splatting model.",id:"ashawkey/LGM"}],spaces:[{description:"Text-to-3D demo with mesh outputs.",id:"hysts/Shap-E"},{description:"Text/image-to-3D demo with splat outputs.",id:"ashawkey/LGM"}],summary:"Text-to-3D models take in text input and produce 3D output.",widgetModels:[],youtubeId:""},cw={datasets:[{description:"A dataset of hand keypoints of over 500k examples.",id:"Vincent-luo/hagrid-mediapipe-hands"}],demo:{inputs:[{filename:"keypoint-detection-input.png",type:"img"}],outputs:[{filename:"keypoint-detection-output.png",type:"img"}]},metrics:[],models:[{description:"A robust keypoint detection model.",id:"magic-leap-community/superpoint"},{description:"A robust keypoint matching model.",id:"magic-leap-community/superglue_outdoor"},{description:"Strong keypoint detection model used to detect human pose.",id:"qualcomm/RTMPose-Body2d"},{description:"Powerful keypoint matching model.",id:"ETH-CVG/lightglue_disk"}],spaces:[{description:"An application that detects hand keypoints in real-time.",id:"datasciencedojo/Hand-Keypoint-Detection-Realtime"},{description:"An application for keypoint detection and matching.",id:"ETH-CVG/LightGlue"}],summary:"Keypoint detection is the task of identifying meaningful distinctive points or features in an image.",widgetModels:[],youtubeId:""},uw={datasets:[{description:"Multiple-choice questions and answers about videos.",id:"lmms-lab/Video-MME"},{description:"A dataset of instructions and question-answer pairs about videos.",id:"lmms-lab/VideoChatGPT"},{description:"Large video understanding dataset.",id:"HuggingFaceFV/finevideo"}],demo:{inputs:[{filename:"video-text-to-text-input.gif",type:"img"},{label:"Text Prompt",content:"What is happening in this video?",type:"text"}],outputs:[{label:"Answer",content:"The video shows a series of images showing a fountain with water jets and a variety of colorful flowers and butterflies in the background.",type:"text"}]},metrics:[],models:[{description:"A robust video-text-to-text model.",id:"Vision-CAIR/LongVU_Qwen2_7B"},{description:"Strong video-text-to-text model with reasoning capabilities.",id:"GoodiesHere/Apollo-LMMs-Apollo-7B-t32"},{description:"Strong video-text-to-text model.",id:"HuggingFaceTB/SmolVLM2-2.2B-Instruct"}],spaces:[{description:"An application to chat with a video-text-to-text model.",id:"llava-hf/video-llava"},{description:"A leaderboard for various video-text-to-text models.",id:"opencompass/openvlm_video_leaderboard"},{description:"An application to generate highlights from a video.",id:"HuggingFaceTB/SmolVLM2-HighlightGenerator"}],summary:"Video-text-to-text models take in a video and a text prompt and output text. These models are also called video-language models.",widgetModels:[""],youtubeId:""},dw={"audio-classification":["speechbrain","transformers","transformers.js"],"audio-to-audio":["asteroid","fairseq","speechbrain"],"automatic-speech-recognition":["espnet","nemo","speechbrain","transformers","transformers.js"],"audio-text-to-text":[],"depth-estimation":["transformers","transformers.js"],"document-question-answering":["transformers","transformers.js"],"feature-extraction":["sentence-transformers","transformers","transformers.js"],"fill-mask":["transformers","transformers.js"],"graph-ml":["transformers"],"image-classification":["keras","timm","transformers","transformers.js"],"image-feature-extraction":["timm","transformers"],"image-segmentation":["transformers","transformers.js"],"image-text-to-text":["transformers"],"image-to-image":["diffusers","transformers","transformers.js"],"image-to-text":["transformers","transformers.js"],"image-to-video":["diffusers"],"keypoint-detection":["transformers"],"video-classification":["transformers"],"mask-generation":["transformers"],"multiple-choice":["transformers"],"object-detection":["transformers","transformers.js","ultralytics"],other:[],"question-answering":["adapter-transformers","allennlp","transformers","transformers.js"],robotics:[],"reinforcement-learning":["transformers","stable-baselines3","ml-agents","sample-factory"],"sentence-similarity":["sentence-transformers","spacy","transformers.js"],summarization:["transformers","transformers.js"],"table-question-answering":["transformers"],"table-to-text":["transformers"],"tabular-classification":["sklearn"],"tabular-regression":["sklearn"],"tabular-to-text":["transformers"],"text-classification":["adapter-transformers","setfit","spacy","transformers","transformers.js"],"text-generation":["transformers","transformers.js"],"text-ranking":["sentence-transformers","transformers"],"text-retrieval":[],"text-to-image":["diffusers"],"text-to-speech":["espnet","tensorflowtts","transformers","transformers.js"],"text-to-audio":["transformers","transformers.js"],"text-to-video":["diffusers"],"time-series-forecasting":[],"token-classification":["adapter-transformers","flair","spacy","span-marker","stanza","transformers","transformers.js"],translation:["transformers","transformers.js"],"unconditional-image-generation":["diffusers"],"video-text-to-text":["transformers"],"visual-question-answering":["transformers","transformers.js"],"voice-activity-detection":[],"zero-shot-classification":["transformers","transformers.js"],"zero-shot-image-classification":["transformers","transformers.js"],"zero-shot-object-detection":["transformers","transformers.js"],"text-to-3d":["diffusers"],"image-to-3d":["diffusers"],"any-to-any":["transformers"],"visual-document-retrieval":["transformers"],"video-to-video":["diffusers"]};function U(e,t=es){return{...t,id:e,label:ol[e].name,libraries:dw[e]}}U("any-to-any",kv),U("audio-classification",_v),U("audio-to-audio",Sv),U("audio-text-to-text",es),U("automatic-speech-recognition",Cv),U("depth-estimation",Uv),U("document-question-answering",Av),U("visual-document-retrieval",nw),U("feature-extraction",Ev),U("fill-mask",Iv),U("image-classification",Tv),U("image-feature-extraction",Rv),U("image-segmentation",jv),U("image-to-image",Pv),U("image-text-to-text",$v),U("image-to-text",Nv),U("image-to-video",Mv),U("keypoint-detection",cw),U("mask-generation",Lv),U("object-detection",Dv),U("video-classification",tw),U("question-answering",Fv),U("reinforcement-learning",Ov),U("sentence-similarity",Bv),U("summarization",Vv),U("table-question-answering",zv),U("tabular-classification",qv),U("tabular-regression",Hv),U("text-classification",Yv),U("text-generation",Jv),U("text-ranking",Zv),U("text-to-image",Wv),U("text-to-speech",Kv),U("text-to-video",Gv),U("token-classification",Xv),U("translation",Qv),U("unconditional-image-generation",ew),U("video-text-to-text",uw),U("video-to-video",es),U("visual-question-answering",rw),U("zero-shot-classification",iw),U("zero-shot-image-classification",ow),U("zero-shot-object-detection",aw),U("text-to-3d",lw),U("image-to-3d",sw);const pw=()=>'"Hi, I recently bought a device from your company but it is not working as advertised and I would like to get reimbursed!"',mw=()=>'"Меня зовут Вольфганг и я живу в Берлине"',fw=()=>'"The tower is 324 metres (1,063 ft) tall, about the same height as an 81-storey building, and the tallest structure in Paris. Its base is square, measuring 125 metres (410 ft) on each side. During its construction, the Eiffel Tower surpassed the Washington Monument to become the tallest man-made structure in the world, a title it held for 41 years until the Chrysler Building in New York City was finished in 1930. It was the first structure to reach a height of 300 metres. Due to the addition of a broadcasting aerial at the top of the tower in 1957, it is now taller than the Chrysler Building by 5.2 metres (17 ft). Excluding transmitters, the Eiffel Tower is the second tallest free-standing structure in France after the Millau Viaduct."',hw=()=>`{
    "query": "How many stars does the transformers repository have?",
    "table": {
        "Repository": ["Transformers", "Datasets", "Tokenizers"],
        "Stars": ["36542", "4512", "3934"],
        "Contributors": ["651", "77", "34"],
        "Programming language": [
            "Python",
            "Python",
            "Rust, Python and NodeJS"
        ]
    }
}`,gw=()=>`{
        "image": "cat.png",
        "question": "What is in this image?"
    }`,yw=()=>`{
    "question": "What is my name?",
    "context": "My name is Clara and I live in Berkeley."
}`,vw=()=>'"I like you. I love you"',ww=()=>'"My name is Sarah Jessica Parker but you can call me Jessica"',Nc=e=>e.tags.includes("conversational")?e.pipeline_tag==="text-generation"?[{role:"user",content:"What is the capital of France?"}]:[{role:"user",content:[{type:"text",text:"Describe this image in one sentence."},{type:"image_url",image_url:{url:"https://cdn.britannica.com/61/93061-050-99147DCE/Statue-of-Liberty-Island-New-York-Bay.jpg"}}]}]:'"Can you please let us know more details about your "',bw=e=>`"The answer to the universe is ${e.mask_token}."`,xw=()=>`{
    "source_sentence": "That is a happy person",
    "sentences": [
        "That is a happy dog",
        "That is a very happy person",
        "Today is a sunny day"
    ]
}`,kw=()=>'"Today is a sunny day and I will get some ice cream."',_w=()=>'"cats.jpg"',Sw=()=>'"cats.jpg"',Cw=()=>`{
    "image": "cat.png",
    "prompt": "Turn the cat into a tiger."
}`,Aw=()=>`{
    "image": "cat.png",
    "prompt": "The cat starts to dance"
}`,Ew=()=>'"cats.jpg"',Iw=()=>'"cats.jpg"',Tw=()=>'"sample1.flac"',Rw=()=>'"sample1.flac"',Pw=()=>'"Astronaut riding a horse"',Nw=()=>'"A young man walking on the street"',$w=()=>'"The answer to the universe is 42"',jw=()=>'"liquid drum and bass, atmospheric synths, airy sounds"',Mw=()=>'"sample1.flac"',$c=()=>`'{"Height":[11.52,12.48],"Length1":[23.2,24.0],"Length2":[25.4,26.3],"Species": ["Bream","Bream"]}'`,Lw=()=>'"cats.jpg"',Dw={"audio-to-audio":Tw,"audio-classification":Rw,"automatic-speech-recognition":Mw,"document-question-answering":gw,"feature-extraction":kw,"fill-mask":bw,"image-classification":_w,"image-to-text":Sw,"image-to-image":Cw,"image-to-video":Aw,"image-segmentation":Ew,"object-detection":Iw,"question-answering":yw,"sentence-similarity":xw,summarization:fw,"table-question-answering":hw,"tabular-regression":$c,"tabular-classification":$c,"text-classification":vw,"text-generation":Nc,"image-text-to-text":Nc,"text-to-image":Pw,"text-to-video":Nw,"text-to-speech":$w,"text-to-audio":jw,"token-classification":ww,translation:mw,"zero-shot-classification":pw,"zero-shot-image-classification":Lw};function Uw(e,t=!1,n=!1){if(e.pipeline_tag){const r=Dw[e.pipeline_tag];if(r){let i=r(e);if(typeof i=="string"&&(t&&(i=i.replace(/(?:(?:\r?\n|\r)\t*)|\t+/g," ")),n)){const o=/^"(.+)"$/s,a=i.match(o);i=a?a[1]:i}return i}}return"No input example has been defined for this model task."}function Ow(e,t){let n=JSON.stringify(e,null,"	");return t!=null&&t.indent&&(n=n.replaceAll(`
`,`
${t.indent}`)),t!=null&&t.attributeKeyQuotes||(n=n.replace(/"([^"]+)":/g,"$1:")),t!=null&&t.customContentEscaper&&(n=t.customContentEscaper(n)),n}const up="custom_code";function xt(e){const t=e.split("/");return t.length===1?t[0]:t[1]}const Fw=e=>JSON.stringify(e).slice(1,-1),Bw=e=>{var t,n;return[`from adapters import AutoAdapterModel

model = AutoAdapterModel.from_pretrained("${(n=(t=e.config)==null?void 0:t.adapter_transformers)==null?void 0:n.model_name}")
model.load_adapter("${e.id}", set_active=True)`]},Vw=e=>[`import allennlp_models
from allennlp.predictors.predictor import Predictor

predictor = Predictor.from_path("hf://${e.id}")`],zw=e=>[`import allennlp_models
from allennlp.predictors.predictor import Predictor

predictor = Predictor.from_path("hf://${e.id}")
predictor_input = {"passage": "My name is Wolfgang and I live in Berlin", "question": "Where do I live?"}
predictions = predictor.predict_json(predictor_input)`],qw=e=>e.tags.includes("question-answering")?zw(e):Vw(e),Hw=e=>[`from araclip import AraClip

model = AraClip.from_pretrained("${e.id}")`],Ww=e=>[`from asteroid.models import BaseModel

model = BaseModel.from_pretrained("${e.id}")`],Kw=e=>{const t=`# Watermark Generator
from audioseal import AudioSeal

model = AudioSeal.load_generator("${e.id}")
# pass a tensor (tensor_wav) of shape (batch, channels, samples) and a sample rate
wav, sr = tensor_wav, 16000
	
watermark = model.get_watermark(wav, sr)
watermarked_audio = wav + watermark`,n=`# Watermark Detector
from audioseal import AudioSeal

detector = AudioSeal.load_detector("${e.id}")
	
result, message = detector.detect_watermark(watermarked_audio, sr)`;return[t,n]};function sr(e){var t,n;return((n=(t=e.cardData)==null?void 0:t.base_model)==null?void 0:n.toString())??"fill-in-base-model"}function An(e){var n,r,i;const t=((r=(n=e.widgetData)==null?void 0:n[0])==null?void 0:r.text)??((i=e.cardData)==null?void 0:i.instance_prompt);if(t)return Fw(t)}const Xw=e=>[`import requests
from PIL import Image
from ben2 import AutoModel

url = "https://huggingface.co/datasets/mishig/sample_images/resolve/main/teapot.jpg"
image = Image.open(requests.get(url, stream=True).raw)

model = AutoModel.from_pretrained("${e.id}")
model.to("cuda").eval()
foreground = model.inference(image)
`],Qw=e=>[`from bertopic import BERTopic

model = BERTopic.load("${e.id}")`],Yw=e=>[`from bm25s.hf import BM25HF

retriever = BM25HF.load_from_hub("${e.id}")`],Jw=()=>[`# pip install chatterbox-tts
import torchaudio as ta
from chatterbox.tts import ChatterboxTTS

model = ChatterboxTTS.from_pretrained(device="cuda")

text = "Ezreal and Jinx teamed up with Ahri, Yasuo, and Teemo to take down the enemy's Nexus in an epic late-game pentakill."
wav = model.generate(text)
ta.save("test-1.wav", wav, model.sr)

# If you want to synthesize with a different voice, specify the audio prompt
AUDIO_PROMPT_PATH="YOUR_FILE.wav"
wav = model.generate(text, audio_prompt_path=AUDIO_PROMPT_PATH)
ta.save("test-2.wav", wav, model.sr)`],Zw=()=>["pip install git+https://github.com/SAP-samples/contexttab",`# Run a classification task
from sklearn.datasets import load_breast_cancer
from sklearn.metrics import accuracy_score
from sklearn.model_selection import train_test_split

from contexttab import ConTextTabClassifier

# Load sample data
X, y = load_breast_cancer(return_X_y=True)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.5, random_state=42)

# Initialize a classifier
# You can omit checkpoint and checkpoint_revision to use the default model
clf = ConTextTabClassifier(checkpoint="l2/base.pt", checkpoint_revision="v1.0.0", bagging=1, max_context_size=2048)

clf.fit(X_train, y_train)

# Predict probabilities
prediction_probabilities = clf.predict_proba(X_test)
# Predict labels
predictions = clf.predict(X_test)
print("Accuracy", accuracy_score(y_test, predictions))`,`# Run a regression task
from sklearn.datasets import fetch_openml
from sklearn.metrics import r2_score
from sklearn.model_selection import train_test_split

from contexttab import ConTextTabRegressor


# Load sample data
df = fetch_openml(data_id=531, as_frame=True)
X = df.data
y = df.target.astype(float)

# Train-test split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.5, random_state=42)

# Initialize the regressor
# You can omit checkpoint and checkpoint_revision to use the default model
regressor = ConTextTabRegressor(checkpoint="l2/base.pt", checkpoint_revision="v1.0.0", bagging=1, max_context_size=2048)

regressor.fit(X_train, y_train)

# Predict on the test set
predictions = regressor.predict(X_test)

r2 = r2_score(y_test, predictions)
print("R² Score:", r2)`],Gw=()=>[`# pip install git+https://github.com/Google-Health/cxr-foundation.git#subdirectory=python

# Load image as grayscale (Stillwaterising, CC0, via Wikimedia Commons)
import requests
from PIL import Image
from io import BytesIO
image_url = "https://upload.wikimedia.org/wikipedia/commons/c/c8/Chest_Xray_PA_3-8-2010.png"
img = Image.open(requests.get(image_url, headers={'User-Agent': 'Demo'}, stream=True).raw).convert('L')

# Run inference
from clientside.clients import make_hugging_face_client
cxr_client = make_hugging_face_client('cxr_model')
print(cxr_client.get_image_embeddings_from_images([img]))`],eb=e=>{let t,n,r;return t="<ENCODER>",n="<NUMBER_OF_FEATURES>",r="<OUT_CHANNELS>",e.id==="depth-anything/Depth-Anything-V2-Small"?(t="vits",n="64",r="[48, 96, 192, 384]"):e.id==="depth-anything/Depth-Anything-V2-Base"?(t="vitb",n="128",r="[96, 192, 384, 768]"):e.id==="depth-anything/Depth-Anything-V2-Large"&&(t="vitl",n="256",r="[256, 512, 1024, 1024"),[`
# Install from https://github.com/DepthAnything/Depth-Anything-V2

# Load the model and infer depth from an image
import cv2
import torch

from depth_anything_v2.dpt import DepthAnythingV2

# instantiate the model
model = DepthAnythingV2(encoder="${t}", features=${n}, out_channels=${r})

# load the weights
filepath = hf_hub_download(repo_id="${e.id}", filename="depth_anything_v2_${t}.pth", repo_type="model")
state_dict = torch.load(filepath, map_location="cpu")
model.load_state_dict(state_dict).eval()

raw_img = cv2.imread("your/image/path")
depth = model.infer_image(raw_img) # HxW raw depth map in numpy
    `]},tb=e=>[`# Download checkpoint
pip install huggingface-hub
huggingface-cli download --local-dir checkpoints ${e.id}`,`import depth_pro

# Load model and preprocessing transform
model, transform = depth_pro.create_model_and_transforms()
model.eval()

# Load and preprocess an image.
image, _, f_px = depth_pro.load_rgb("example.png")
image = transform(image)

# Run inference.
prediction = model.infer(image, f_px=f_px)

# Results: 1. Depth in meters
depth = prediction["depth"]
# Results: 2. Focal length in pixels
focallength_px = prediction["focallength_px"]`],nb=()=>[`from huggingface_hub import from_pretrained_keras
import tensorflow as tf, requests

# Load and format input
IMAGE_URL = "https://storage.googleapis.com/dx-scin-public-data/dataset/images/3445096909671059178.png"
input_tensor = tf.train.Example(
    features=tf.train.Features(
        feature={
            "image/encoded": tf.train.Feature(
                bytes_list=tf.train.BytesList(value=[requests.get(IMAGE_URL, stream=True).content])
            )
        }
    )
).SerializeToString()

# Load model and run inference
loaded_model = from_pretrained_keras("google/derm-foundation")
infer = loaded_model.signatures["serving_default"]
print(infer(inputs=tf.constant([input_tensor])))`],rb=e=>[`import soundfile as sf
from dia.model import Dia

model = Dia.from_pretrained("${e.id}")
text = "[S1] Dia is an open weights text to dialogue model. [S2] You get full control over scripts and voices. [S1] Wow. Amazing. (laughs) [S2] Try it now on Git hub or Hugging Face."
output = model.generate(text)

sf.write("simple.mp3", output, 44100)`],ib=e=>[`# pip install git+https://github.com/NVlabs/describe-anything
from huggingface_hub import snapshot_download
from dam import DescribeAnythingModel

snapshot_download(${e.id}, local_dir="checkpoints")

dam = DescribeAnythingModel(
	model_path="checkpoints",
	conv_mode="v1",
	prompt_mode="focal_prompt",
)`],dp="Astronaut in a jungle, cold color palette, muted colors, detailed, 8k",pp="Turn this cat into a dog",al="A man with short gray hair plays a red electric guitar.",ob=e=>[`from diffusers import DiffusionPipeline

pipe = DiffusionPipeline.from_pretrained("${e.id}")

prompt = "${An(e)??dp}"
image = pipe(prompt).images[0]`],ab=e=>[`from diffusers import DiffusionPipeline
from diffusers.utils import load_image

pipe = DiffusionPipeline.from_pretrained("${e.id}")

prompt = "${An(e)??pp}"
input_image = load_image("https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/diffusers/cat.png")

image = pipe(image=input_image, prompt=prompt).images[0]`],sb=e=>[`import torch
from diffusers import DiffusionPipeline
from diffusers.utils import load_image, export_to_video

pipe = DiffusionPipeline.from_pretrained("${e.id}", torch_dtype=torch.float16)
pipe.to("cuda")

prompt = "${An(e)??al}"
image = load_image(
    "https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/diffusers/guitar-man.png"
)

output = pipe(image=image, prompt=prompt).frames[0]
export_to_video(output, "output.mp4")`],lb=e=>[`from diffusers import ControlNetModel, StableDiffusionControlNetPipeline

controlnet = ControlNetModel.from_pretrained("${e.id}")
pipe = StableDiffusionControlNetPipeline.from_pretrained(
	"${sr(e)}", controlnet=controlnet
)`],cb=e=>[`from diffusers import DiffusionPipeline

pipe = DiffusionPipeline.from_pretrained("${sr(e)}")
pipe.load_lora_weights("${e.id}")

prompt = "${An(e)??dp}"
image = pipe(prompt).images[0]`],ub=e=>[`from diffusers import DiffusionPipeline
from diffusers.utils import load_image

pipe = DiffusionPipeline.from_pretrained("${sr(e)}")
pipe.load_lora_weights("${e.id}")

prompt = "${An(e)??pp}"
input_image = load_image("https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/diffusers/cat.png")

image = pipe(image=input_image, prompt=prompt).images[0]`],db=e=>[`from diffusers import DiffusionPipeline
from diffusers.utils import export_to_video

pipe = DiffusionPipeline.from_pretrained("${sr(e)}")
pipe.load_lora_weights("${e.id}")

prompt = "${An(e)??al}"

output = pipe(prompt=prompt).frames[0]
export_to_video(output, "output.mp4")`],pb=e=>[`from diffusers import DiffusionPipeline
from diffusers.utils import load_image, export_to_video

pipe = DiffusionPipeline.from_pretrained("${sr(e)}")
pipe.load_lora_weights("${e.id}")

prompt = "${An(e)??al}"
input_image = load_image("https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/diffusers/guitar-man.png")

image = pipe(image=input_image, prompt=prompt).frames[0]
export_to_video(output, "output.mp4")`],mb=e=>[`from diffusers import DiffusionPipeline

pipe = DiffusionPipeline.from_pretrained("${sr(e)}")
pipe.load_textual_inversion("${e.id}")`],fb=e=>[`import torch
from diffusers import FluxFillPipeline
from diffusers.utils import load_image

image = load_image("https://huggingface.co/datasets/diffusers/diffusers-images-docs/resolve/main/cup.png")
mask = load_image("https://huggingface.co/datasets/diffusers/diffusers-images-docs/resolve/main/cup_mask.png")

pipe = FluxFillPipeline.from_pretrained("${e.id}", torch_dtype=torch.bfloat16).to("cuda")
image = pipe(
    prompt="a white paper cup",
    image=image,
    mask_image=mask,
    height=1632,
    width=1232,
    guidance_scale=30,
    num_inference_steps=50,
    max_sequence_length=512,
    generator=torch.Generator("cpu").manual_seed(0)
).images[0]
image.save(f"flux-fill-dev.png")`],hb=e=>[`import torch
from diffusers import AutoPipelineForInpainting
from diffusers.utils import load_image

pipe = AutoPipelineForInpainting.from_pretrained("${e.id}", torch_dtype=torch.float16, variant="fp16").to("cuda")

img_url = "https://raw.githubusercontent.com/CompVis/latent-diffusion/main/data/inpainting_examples/overture-creations-5sI6fQgYIuo.png"
mask_url = "https://raw.githubusercontent.com/CompVis/latent-diffusion/main/data/inpainting_examples/overture-creations-5sI6fQgYIuo_mask.png"

image = load_image(img_url).resize((1024, 1024))
mask_image = load_image(mask_url).resize((1024, 1024))

prompt = "a tiger sitting on a park bench"
generator = torch.Generator(device="cuda").manual_seed(0)

image = pipe(
  prompt=prompt,
  image=image,
  mask_image=mask_image,
  guidance_scale=8.0,
  num_inference_steps=20,  # steps between 15 and 30 work well for us
  strength=0.99,  # make sure to use \`strength\` below 1.0
  generator=generator,
).images[0]`],gb=e=>e.tags.includes("StableDiffusionInpaintPipeline")||e.tags.includes("StableDiffusionXLInpaintPipeline")?hb(e):e.tags.includes("controlnet")?lb(e):e.tags.includes("lora")?e.pipeline_tag==="image-to-image"?ub(e):e.pipeline_tag==="image-to-video"?pb(e):e.pipeline_tag==="text-to-video"?db(e):cb(e):e.tags.includes("textual_inversion")?mb(e):e.tags.includes("FluxFillPipeline")?fb(e):e.pipeline_tag==="image-to-video"?sb(e):e.pipeline_tag==="image-to-image"?ab(e):ob(e),yb=e=>{const t=`# Pipeline for Stable Diffusion 3
from diffusionkit.mlx import DiffusionPipeline

pipeline = DiffusionPipeline(
	shift=3.0,
	use_t5=False,
	model_version=${e.id},
	low_memory_mode=True,
	a16=True,
	w16=True,
)`,n=`# Pipeline for Flux
from diffusionkit.mlx import FluxPipeline

pipeline = FluxPipeline(
  shift=1.0,
  model_version=${e.id},
  low_memory_mode=True,
  a16=True,
  w16=True,
)`,r=`# Image Generation
HEIGHT = 512
WIDTH = 512
NUM_STEPS = ${e.tags.includes("flux")?4:50}
CFG_WEIGHT = ${e.tags.includes("flux")?0:5}

image, _ = pipeline.generate_image(
  "a photo of a cat",
  cfg_weight=CFG_WEIGHT,
  num_steps=NUM_STEPS,
  latent_size=(HEIGHT // 8, WIDTH // 8),
)`;return[e.tags.includes("flux")?n:t,r]},vb=e=>[`# pip install --no-binary :all: cartesia-pytorch
from cartesia_pytorch import ReneLMHeadModel
from transformers import AutoTokenizer

model = ReneLMHeadModel.from_pretrained("${e.id}")
tokenizer = AutoTokenizer.from_pretrained("allenai/OLMo-1B-hf")

in_message = ["Rene Descartes was"]
inputs = tokenizer(in_message, return_tensors="pt")

outputs = model.generate(inputs.input_ids, max_length=50, top_k=100, top_p=0.99)
out_message = tokenizer.batch_decode(outputs, skip_special_tokens=True)[0]

print(out_message)
)`],wb=e=>[`import mlx.core as mx
import cartesia_mlx as cmx

model = cmx.from_pretrained("${e.id}")
model.set_dtype(mx.float32)   

prompt = "Rene Descartes was"

for text in model.generate(
    prompt,
    max_tokens=500,
    eval_every_n=5,
    verbose=True,
    top_p=0.99,
    temperature=0.85,
):
    print(text, end="", flush=True)
`],bb=e=>{const t=xt(e.id).replaceAll("-","_");return[`# Load it from the Hub directly
import edsnlp
nlp = edsnlp.load("${e.id}")
`,`# Or install it as a package
!pip install git+https://huggingface.co/${e.id}

# and import it as a module
import ${t}

nlp = ${t}.load()  # or edsnlp.load("${t}")
`]},xb=e=>[`from espnet2.bin.tts_inference import Text2Speech

model = Text2Speech.from_pretrained("${e.id}")

speech, *_ = model("text to generate speech from")`],kb=e=>[`from espnet2.bin.asr_inference import Speech2Text

model = Speech2Text.from_pretrained(
  "${e.id}"
)

speech, rate = soundfile.read("speech.wav")
text, *_ = model(speech)[0]`],_b=()=>["unknown model type (must be text-to-speech or automatic-speech-recognition)"],Sb=e=>e.tags.includes("text-to-speech")?xb(e):e.tags.includes("automatic-speech-recognition")?kb(e):_b(),Cb=e=>[`from fairseq.checkpoint_utils import load_model_ensemble_and_task_from_hf_hub

models, cfg, task = load_model_ensemble_and_task_from_hf_hub(
    "${e.id}"
)`],Ab=e=>[`from flair.models import SequenceTagger

tagger = SequenceTagger.load("${e.id}")`],Eb=e=>[`from gliner import GLiNER

model = GLiNER.from_pretrained("${e.id}")`],Ib=e=>[`# Download model
from huggingface_hub import snapshot_download

snapshot_download(${e.id}, local_dir="checkpoints")

from indextts.infer import IndexTTS

# Ensure config.yaml is present in the checkpoints directory
tts = IndexTTS(model_dir="checkpoints", cfg_path="checkpoints/config.yaml")

voice = "path/to/your/reference_voice.wav"  # Path to the voice reference audio file
text = "Hello, how are you?"
output_path = "output_index.wav"

tts.infer(voice, text, output_path)`],Tb=e=>[`# CLI usage
# see docs: https://ai-riksarkivet.github.io/htrflow/latest/getting_started/quick_start.html
htrflow pipeline <path/to/pipeline.yaml> <path/to/image>`,`# Python usage
from htrflow.pipeline.pipeline import Pipeline
from htrflow.pipeline.steps import Task
from htrflow.models.framework.model import ModelClass

pipeline = Pipeline(
    [
        Task(
            ModelClass, {"model": "${e.id}"}, {}
        ),
    ])`],Rb=e=>[`# Available backend options are: "jax", "torch", "tensorflow".
import os
os.environ["KERAS_BACKEND"] = "jax"
	
import keras

model = keras.saving.load_model("hf://${e.id}")
`],Pb=e=>`
import keras_hub

# Load CausalLM model (optional: use half precision for inference)
causal_lm = keras_hub.models.CausalLM.from_preset("hf://${e}", dtype="bfloat16")
causal_lm.compile(sampler="greedy")  # (optional) specify a sampler

# Generate text
causal_lm.generate("Keras: deep learning for", max_length=64)
`,Nb=e=>`
import keras_hub

# Load TextToImage model (optional: use half precision for inference)
text_to_image = keras_hub.models.TextToImage.from_preset("hf://${e}", dtype="bfloat16")

# Generate images with a TextToImage model.
text_to_image.generate("Astronaut in a jungle")
`,$b=e=>`
import keras_hub

# Load TextClassifier model
text_classifier = keras_hub.models.TextClassifier.from_preset(
    "hf://${e}",
    num_classes=2,
)
# Fine-tune
text_classifier.fit(x=["Thilling adventure!", "Total snoozefest."], y=[1, 0])
# Classify text
text_classifier.predict(["Not my cup of tea."])
`,jb=e=>`
import keras_hub
import keras

# Load ImageClassifier model
image_classifier = keras_hub.models.ImageClassifier.from_preset(
    "hf://${e}",
    num_classes=2,
)
# Fine-tune
image_classifier.fit(
    x=keras.random.randint((32, 64, 64, 3), 0, 256),
    y=keras.random.randint((32, 1), 0, 2),
)
# Classify image
image_classifier.predict(keras.random.randint((1, 64, 64, 3), 0, 256))
`,jc={CausalLM:Pb,TextToImage:Nb,TextClassifier:$b,ImageClassifier:jb},Mb=(e,t)=>`
import keras_hub

# Create a ${e} model
task = keras_hub.models.${e}.from_preset("hf://${t}")
`,Lb=e=>`
import keras_hub

# Create a Backbone model unspecialized for any task
backbone = keras_hub.models.Backbone.from_preset("hf://${e}")
`,Db=e=>{var i,o;const t=e.id,n=((o=(i=e.config)==null?void 0:i.keras_hub)==null?void 0:o.tasks)??[],r=[];for(const[a,s]of Object.entries(jc))n.includes(a)&&r.push(s(t));for(const a of n)Object.keys(jc).includes(a)||r.push(Mb(a,t));return r.push(Lb(t)),r},Ub=e=>[`# Example usage for KimiAudio
# pip install git+https://github.com/MoonshotAI/Kimi-Audio.git

from kimia_infer.api.kimia import KimiAudio

model = KimiAudio(model_path="${e.id}", load_detokenizer=True)

sampling_params = {
    "audio_temperature": 0.8,
    "audio_top_k": 10,
    "text_temperature": 0.0,
    "text_top_k": 5,
}

# For ASR
asr_audio = "asr_example.wav"
messages_asr = [
    {"role": "user", "message_type": "text", "content": "Please transcribe the following audio:"},
    {"role": "user", "message_type": "audio", "content": asr_audio}
]
_, text = model.generate(messages_asr, **sampling_params, output_type="text")
print(text)

# For Q&A
qa_audio = "qa_example.wav"
messages_conv = [{"role": "user", "message_type": "audio", "content": qa_audio}]
wav, text = model.generate(messages_conv, **sampling_params, output_type="both")
sf.write("output_audio.wav", wav.cpu().view(-1).numpy(), 24000)
print(text)
`],Ob=e=>e.tags.includes("bi-encoder")?[`#install from https://github.com/webis-de/lightning-ir

from lightning_ir import BiEncoderModule
model = BiEncoderModule("${e.id}")

model.score("query", ["doc1", "doc2", "doc3"])`]:e.tags.includes("cross-encoder")?[`#install from https://github.com/webis-de/lightning-ir

from lightning_ir import CrossEncoderModule
model = CrossEncoderModule("${e.id}")

model.score("query", ["doc1", "doc2", "doc3"])`]:[`#install from https://github.com/webis-de/lightning-ir

from lightning_ir import BiEncoderModule, CrossEncoderModule

# depending on the model type, use either BiEncoderModule or CrossEncoderModule
model = BiEncoderModule("${e.id}") 
# model = CrossEncoderModule("${e.id}")

model.score("query", ["doc1", "doc2", "doc3"])`],Fb=e=>{const t=[`# !pip install llama-cpp-python

from llama_cpp import Llama

llm = Llama.from_pretrained(
	repo_id="${e.id}",
	filename="{{GGUF_FILE}}",
)
`];if(e.tags.includes("conversational")){const n=Uw(e);t.push(`llm.create_chat_completion(
	messages = ${Ow(n,{attributeKeyQuotes:!0,indent:"	"})}
)`)}else t.push(`output = llm(
	"Once upon a time,",
	max_tokens=512,
	echo=True
)
print(output)`);return t},Bb=e=>{if(e.tags.includes("smolvla")){const t=[`# See https://github.com/huggingface/lerobot?tab=readme-ov-file#installation for more details
git clone https://github.com/huggingface/lerobot.git
cd lerobot
pip install -e .[smolvla]`,`# Launch finetuning on your dataset
python lerobot/scripts/train.py \\
--policy.path=${e.id} \\
--dataset.repo_id=lerobot/svla_so101_pickplace \\ 
--batch_size=64 \\
--steps=20000 \\
--output_dir=outputs/train/my_smolvla \\
--job_name=my_smolvla_training \\
--policy.device=cuda \\
--wandb.enable=true`];return e.id!=="lerobot/smolvla_base"&&t.push(`# Run the policy using the record function	
python -m lerobot.record \\
  --robot.type=so101_follower \\
  --robot.port=/dev/ttyACM0 \\ # <- Use your port
  --robot.id=my_blue_follower_arm \\ # <- Use your robot id
  --robot.cameras="{ front: {type: opencv, index_or_path: 8, width: 640, height: 480, fps: 30}}" \\ # <- Use your cameras
  --dataset.single_task="Grasp a lego block and put it in the bin." \\ # <- Use the same task description you used in your dataset recording
  --dataset.repo_id=HF_USER/dataset_name \\  # <- This will be the dataset name on HF Hub
  --dataset.episode_time_s=50 \\
  --dataset.num_episodes=10 \\
  --policy.path=${e.id}`),t}return[]},Vb=e=>[`# Note: 'keras<3.x' or 'tf_keras' must be installed (legacy)
# See https://github.com/keras-team/tf-keras for more details.
from huggingface_hub import from_pretrained_keras

model = from_pretrained_keras("${e.id}")
`],zb=e=>[`from mamba_ssm import MambaLMHeadModel

model = MambaLMHeadModel.from_pretrained("${e.id}")`],qb=e=>[`# Install from https://github.com/Camb-ai/MARS5-TTS

from inference import Mars5TTS
mars5 = Mars5TTS.from_pretrained("${e.id}")`],Hb=e=>[`# Install from https://github.com/pq-yang/MatAnyone.git

from matanyone.model.matanyone import MatAnyone
model = MatAnyone.from_pretrained("${e.id}")`,`
from matanyone import InferenceCore
processor = InferenceCore("${e.id}")`],Wb=()=>[`# Install from https://github.com/buaacyw/MeshAnything.git

from MeshAnything.models.meshanything import MeshAnything

# refer to https://github.com/buaacyw/MeshAnything/blob/main/main.py#L91 on how to define args
# and https://github.com/buaacyw/MeshAnything/blob/main/app.py regarding usage
model = MeshAnything(args)`],Kb=e=>[`import open_clip

model, preprocess_train, preprocess_val = open_clip.create_model_and_transforms('hf-hub:${e.id}')
tokenizer = open_clip.get_tokenizer('hf-hub:${e.id}')`],Xb=e=>{var t,n;if((n=(t=e.config)==null?void 0:t.architectures)!=null&&n[0]){const r=e.config.architectures[0];return[[`from paddlenlp.transformers import AutoTokenizer, ${r}`,"",`tokenizer = AutoTokenizer.from_pretrained("${e.id}", from_hf_hub=True)`,`model = ${r}.from_pretrained("${e.id}", from_hf_hub=True)`].join(`
`)]}else return[["# ⚠️ Type of model unknown","from paddlenlp.transformers import AutoTokenizer, AutoModel","",`tokenizer = AutoTokenizer.from_pretrained("${e.id}", from_hf_hub=True)`,`model = AutoModel.from_pretrained("${e.id}", from_hf_hub=True)`].join(`
`)]},Qb=e=>{const t={textline_detection:{className:"TextDetection"},textline_recognition:{className:"TextRecognition"},seal_text_detection:{className:"SealTextDetection"},doc_img_unwarping:{className:"TextImageUnwarping"},doc_img_orientation_classification:{className:"DocImgOrientationClassification"},textline_orientation_classification:{className:"TextLineOrientationClassification"},chart_parsing:{className:"ChartParsing"},formula_recognition:{className:"FormulaRecognition"},layout_detection:{className:"LayoutDetection"},table_cells_detection:{className:"TableCellsDetection"},wired_table_classification:{className:"TableClassification"},table_structure_recognition:{className:"TableStructureRecognition"}};if(e.tags.includes("doc_vlm"))return[`# pip install paddleocr
from paddleocr import DocVLM
model = DocVLM(model_name="${xt(e.id)}")
output = model.predict(
    input={"image": "path/to/image.png", "query": "Parsing this image and output the content in Markdown format."},
    batch_size=1
)
for res in output:
    res.print()
    res.save_to_img(save_path="./output/")
    res.save_to_json(save_path="./output/res.json")`];for(const n of e.tags)if(n in t){const{className:r}=t[n];return[`# pip install paddleocr
from paddleocr import ${r}
model = ${r}(model_name="${xt(e.id)}")
output = model.predict(input="path/to/image.png", batch_size=1)
for res in output:
    res.print()
    res.save_to_img(save_path="./output/")
    res.save_to_json(save_path="./output/res.json")`]}return[`# Please refer to the document for information on how to use the model. 
# https://paddlepaddle.github.io/PaddleOCR/latest/en/version3.x/module_usage/module_overview.html`]},Yb=e=>{const t=`# Use PE-Core models as CLIP models
import core.vision_encoder.pe as pe

model = pe.CLIP.from_config("${e.id}", pretrained=True)`,n=`# Use any PE model as a vision encoder
import core.vision_encoder.pe as pe

model = pe.VisionTransformer.from_config("${e.id}", pretrained=True)`;return e.id.includes("Core")?[t,n]:[n]},Jb=e=>[`from huggingface_hub import snapshot_download
from phantom_wan import WANI2V, configs

checkpoint_dir = snapshot_download("${e.id}")
wan_i2v = WanI2V(
            config=configs.WAN_CONFIGS['i2v-14B'],
            checkpoint_dir=checkpoint_dir,
        )
 video = wan_i2v.generate(text_prompt, image_prompt)`],Zb=e=>[`from pyannote.audio import Pipeline
  
pipeline = Pipeline.from_pretrained("${e.id}")

# inference on the whole file
pipeline("file.wav")

# inference on an excerpt
from pyannote.core import Segment
excerpt = Segment(start=2.0, end=5.0)

from pyannote.audio import Audio
waveform, sample_rate = Audio().crop("file.wav", excerpt)
pipeline({"waveform": waveform, "sample_rate": sample_rate})`],Gb=e=>[`from pyannote.audio import Model, Inference

model = Model.from_pretrained("${e.id}")
inference = Inference(model)

# inference on the whole file
inference("file.wav")

# inference on an excerpt
from pyannote.core import Segment
excerpt = Segment(start=2.0, end=5.0)
inference.crop("file.wav", excerpt)`],e0=e=>e.tags.includes("pyannote-audio-pipeline")?Zb(e):Gb(e),t0=e=>[`from relik import Relik
 
relik = Relik.from_pretrained("${e.id}")`],n0=e=>[`# Install from https://github.com/microsoft/renderformer

from renderformer import RenderFormerRenderingPipeline
pipeline = RenderFormerRenderingPipeline.from_pretrained("${e.id}")`],r0=e=>[`from tensorflow_tts.inference import AutoProcessor, TFAutoModel

processor = AutoProcessor.from_pretrained("${e.id}")
model = TFAutoModel.from_pretrained("${e.id}")
`],i0=e=>[`from tensorflow_tts.inference import TFAutoModel

model = TFAutoModel.from_pretrained("${e.id}")
audios = model.inference(mels)
`],o0=e=>[`from tensorflow_tts.inference import TFAutoModel

model = TFAutoModel.from_pretrained("${e.id}")
`],a0=e=>e.tags.includes("text-to-mel")?r0(e):e.tags.includes("mel-to-wav")?i0(e):o0(e),s0=e=>[`import timm

model = timm.create_model("hf_hub:${e.id}", pretrained=True)`],l0=()=>[`# pip install sae-lens
from sae_lens import SAE

sae, cfg_dict, sparsity = SAE.from_pretrained(
    release = "RELEASE_ID", # e.g., "gpt2-small-res-jb". See other options in https://github.com/jbloomAus/SAELens/blob/main/sae_lens/pretrained_saes.yaml
    sae_id = "SAE_ID", # e.g., "blocks.8.hook_resid_pre". Won't always be a hook point
)`],c0=()=>[`# seed_story_cfg_path refers to 'https://github.com/TencentARC/SEED-Story/blob/master/configs/clm_models/agent_7b_sft.yaml'
# llm_cfg_path refers to 'https://github.com/TencentARC/SEED-Story/blob/master/configs/clm_models/llama2chat7b_lora.yaml'
from omegaconf import OmegaConf
import hydra

# load Llama2
llm_cfg = OmegaConf.load(llm_cfg_path)
llm = hydra.utils.instantiate(llm_cfg, torch_dtype="fp16")

# initialize seed_story
seed_story_cfg = OmegaConf.load(seed_story_cfg_path)
seed_story = hydra.utils.instantiate(seed_story_cfg, llm=llm) `],u0=(e,t)=>[`import joblib
from skops.hub_utils import download
download("${e.id}", "path_to_folder")
model = joblib.load(
	"${t}"
)
# only load pickle files from sources you trust
# read more about it here https://skops.readthedocs.io/en/stable/persistence.html`],d0=(e,t)=>[`from skops.hub_utils import download
from skops.io import load
download("${e.id}", "path_to_folder")
# make sure model file is in skops format
# if model is a pickle file, make sure it's from a source you trust
model = load("path_to_folder/${t}")`],p0=e=>[`from huggingface_hub import hf_hub_download
import joblib
model = joblib.load(
	hf_hub_download("${e.id}", "sklearn_model.joblib")
)
# only load pickle files from sources you trust
# read more about it here https://skops.readthedocs.io/en/stable/persistence.html`],m0=e=>{var t,n,r,i,o;if(e.tags.includes("skops")){const a=(r=(n=(t=e.config)==null?void 0:t.sklearn)==null?void 0:n.model)==null?void 0:r.file,s=(o=(i=e.config)==null?void 0:i.sklearn)==null?void 0:o.model_format;return a?s==="pickle"?u0(e,a):d0(e,a):["# ⚠️ Model filename not specified in config.json"]}else return p0(e)},f0=e=>[`import torch
import torchaudio
from einops import rearrange
from stable_audio_tools import get_pretrained_model
from stable_audio_tools.inference.generation import generate_diffusion_cond

device = "cuda" if torch.cuda.is_available() else "cpu"

# Download model
model, model_config = get_pretrained_model("${e.id}")
sample_rate = model_config["sample_rate"]
sample_size = model_config["sample_size"]

model = model.to(device)

# Set up text and timing conditioning
conditioning = [{
	"prompt": "128 BPM tech house drum loop",
}]

# Generate stereo audio
output = generate_diffusion_cond(
	model,
	conditioning=conditioning,
	sample_size=sample_size,
	device=device
)

# Rearrange audio batch to a single sequence
output = rearrange(output, "b d n -> d (b n)")

# Peak normalize, clip, convert to int16, and save to file
output = output.to(torch.float32).div(torch.max(torch.abs(output))).clamp(-1, 1).mul(32767).to(torch.int16).cpu()
torchaudio.save("output.wav", output, sample_rate)`],h0=e=>[`from huggingface_hub import from_pretrained_fastai

learn = from_pretrained_fastai("${e.id}")`],g0=e=>{const t=`# Use SAM2 with images
import torch
from sam2.sam2_image_predictor import SAM2ImagePredictor

predictor = SAM2ImagePredictor.from_pretrained(${e.id})

with torch.inference_mode(), torch.autocast("cuda", dtype=torch.bfloat16):
    predictor.set_image(<your_image>)
    masks, _, _ = predictor.predict(<input_prompts>)`,n=`# Use SAM2 with videos
import torch
from sam2.sam2_video_predictor import SAM2VideoPredictor
	
predictor = SAM2VideoPredictor.from_pretrained(${e.id})

with torch.inference_mode(), torch.autocast("cuda", dtype=torch.bfloat16):
    state = predictor.init_state(<your_video>)

    # add new prompts and instantly get the output on the same frame
    frame_idx, object_ids, masks = predictor.add_new_points(state, <your_prompts>):

    # propagate the prompts to get masklets throughout the video
    for frame_idx, object_ids, masks in predictor.propagate_in_video(state):
        ...`;return[t,n]},y0=e=>[`python -m sample_factory.huggingface.load_from_hub -r ${e.id} -d ./train_dir`];function v0(e){var n,r;const t=(n=e.widgetData)==null?void 0:n[0];if(t!=null&&t.source_sentence&&((r=t==null?void 0:t.sentences)!=null&&r.length))return[t.source_sentence,...t.sentences]}const w0=e=>{const t=e.tags.includes(up)?", trust_remote_code=True":"";if(e.tags.includes("cross-encoder")||e.pipeline_tag=="text-ranking")return[`from sentence_transformers import CrossEncoder

model = CrossEncoder("${e.id}"${t})

query = "Which planet is known as the Red Planet?"
passages = [
	"Venus is often called Earth's twin because of its similar size and proximity.",
	"Mars, known for its reddish appearance, is often referred to as the Red Planet.",
	"Jupiter, the largest planet in our solar system, has a prominent red spot.",
	"Saturn, famous for its rings, is sometimes mistaken for the Red Planet."
]

scores = model.predict([(query, passage) for passage in passages])
print(scores)`];const n=v0(e)??["The weather is lovely today.","It's so sunny outside!","He drove to the stadium."];return[`from sentence_transformers import SentenceTransformer

model = SentenceTransformer("${e.id}"${t})

sentences = ${JSON.stringify(n,null,4)}
embeddings = model.encode(sentences)

similarities = model.similarity(embeddings, embeddings)
print(similarities.shape)
# [${n.length}, ${n.length}]`]},b0=e=>[`from setfit import SetFitModel

model = SetFitModel.from_pretrained("${e.id}")`],x0=e=>[`!pip install https://huggingface.co/${e.id}/resolve/main/${xt(e.id)}-any-py3-none-any.whl

# Using spacy.load().
import spacy
nlp = spacy.load("${xt(e.id)}")

# Importing as module.
import ${xt(e.id)}
nlp = ${xt(e.id)}.load()`],k0=e=>[`from span_marker import SpanMarkerModel

model = SpanMarkerModel.from_pretrained("${e.id}")`],_0=e=>[`import stanza

stanza.download("${xt(e.id).replace("stanza-","")}")
nlp = stanza.Pipeline("${xt(e.id).replace("stanza-","")}")`],S0=e=>{switch(e){case"EncoderClassifier":return"classify_file";case"EncoderDecoderASR":case"EncoderASR":return"transcribe_file";case"SpectralMaskEnhancement":return"enhance_file";case"SepformerSeparation":return"separate_file";default:return}},C0=e=>{var r,i;const t=(i=(r=e.config)==null?void 0:r.speechbrain)==null?void 0:i.speechbrain_interface;if(t===void 0)return["# interface not specified in config.json"];const n=S0(t);return n===void 0?["# interface in config.json invalid"]:[`from speechbrain.pretrained import ${t}
model = ${t}.from_hparams(
  "${e.id}"
)
model.${n}("file.wav")`]},A0=e=>[`from terratorch.registry import BACKBONE_REGISTRY

model = BACKBONE_REGISTRY.build("${e.id}")`],E0=e=>{var i;const t=e.transformersInfo;if(!t)return["# ⚠️ Type of model unknown"];const n=e.tags.includes(up)?", trust_remote_code=True":"",r=[];if(t.processor){const o=t.processor==="AutoTokenizer"?"tokenizer":t.processor==="AutoFeatureExtractor"?"extractor":"processor";r.push("# Load model directly",`from transformers import ${t.processor}, ${t.auto_model}`,"",`${o} = ${t.processor}.from_pretrained("${e.id}"`+n+")",`model = ${t.auto_model}.from_pretrained("${e.id}"`+n+")"),e.tags.includes("conversational")&&(e.tags.includes("image-text-to-text")?r.push("messages = [",["    {",'        "role": "user",','        "content": [','            {"type": "image", "url": "https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/p-blog/candy.JPG"},','            {"type": "text", "text": "What animal is on the candy?"}',"        ]","    },"].join(`
`),"]"):r.push("messages = [",'    {"role": "user", "content": "Who are you?"},',"]"),r.push(`inputs = ${o}.apply_chat_template(`,"	messages,","	add_generation_prompt=True,","	tokenize=True,","	return_dict=True,",'	return_tensors="pt",',").to(model.device)","","outputs = model.generate(**inputs, max_new_tokens=40)",`print(${o}.decode(outputs[0][inputs["input_ids"].shape[-1]:]))`))}else r.push("# Load model directly",`from transformers import ${t.auto_model}`,`model = ${t.auto_model}.from_pretrained("${e.id}"`+n+', torch_dtype="auto")');if(e.pipeline_tag&&((i=bv.transformers)!=null&&i.includes(e.pipeline_tag))){const o=["# Use a pipeline as a high-level helper","from transformers import pipeline","",`pipe = pipeline("${e.pipeline_tag}", model="${e.id}"`+n+")"];return e.tags.includes("conversational")?e.tags.includes("image-text-to-text")?(o.push("messages = [",["    {",'        "role": "user",','        "content": [','            {"type": "image", "url": "https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/p-blog/candy.JPG"},','            {"type": "text", "text": "What animal is on the candy?"}',"        ]","    },"].join(`
`),"]"),o.push("pipe(text=messages)")):(o.push("messages = [",'    {"role": "user", "content": "Who are you?"},',"]"),o.push("pipe(messages)")):e.pipeline_tag==="zero-shot-image-classification"?o.push("pipe(",'    "https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/hub/parrots.png",','    candidate_labels=["animals", "humans", "landscape"],',")"):e.pipeline_tag==="image-classification"&&o.push('pipe("https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/hub/parrots.png")'),[o.join(`
`),r.join(`
`)]}return[r.join(`
`)]},I0=e=>{if(!e.pipeline_tag)return["// ⚠️ Unknown pipeline tag"];const t="@huggingface/transformers";return[`// npm i ${t}
import { pipeline } from '${t}';

// Allocate pipeline
const pipe = await pipeline('${e.pipeline_tag}', '${e.id}');`]},T0=e=>{switch(e){case"CAUSAL_LM":return"CausalLM";case"SEQ_2_SEQ_LM":return"Seq2SeqLM";case"TOKEN_CLS":return"TokenClassification";case"SEQ_CLS":return"SequenceClassification";default:return}},R0=e=>{var i;const{base_model_name_or_path:t,task_type:n}=((i=e.config)==null?void 0:i.peft)??{},r=T0(n);return r?t?[`from peft import PeftModel
from transformers import AutoModelFor${r}

base_model = AutoModelFor${r}.from_pretrained("${t}")
model = PeftModel.from_pretrained(base_model, "${e.id}")`]:["Base model is not found."]:["Task type is invalid."]},P0=e=>[`from huggingface_hub import hf_hub_download
import fasttext

model = fasttext.load_model(hf_hub_download("${e.id}", "model.bin"))`],N0=e=>[`from huggingface_sb3 import load_from_hub
checkpoint = load_from_hub(
	repo_id="${e.id}",
	filename="{MODEL FILENAME}.zip",
)`],$0=(e,t)=>{switch(e){case"ASR":return[`import nemo.collections.asr as nemo_asr
asr_model = nemo_asr.models.ASRModel.from_pretrained("${t.id}")

transcriptions = asr_model.transcribe(["file.wav"])`];default:return}},j0=e=>[`mlagents-load-from-hf --repo-id="${e.id}" --local-dir="./download: string[]s"`],M0=()=>[`string modelName = "[Your model name here].sentis";
Model model = ModelLoader.Load(Application.streamingAssetsPath + "/" + modelName);
IWorker engine = WorkerFactory.CreateWorker(BackendType.GPUCompute, model);
// Please see provided C# file for more details
`],L0=e=>[`
# Load the model and infer image from text
import torch
from app.sana_pipeline import SanaPipeline
from torchvision.utils import save_image

sana = SanaPipeline("configs/sana_config/1024ms/Sana_1600M_img1024.yaml")
sana.from_pretrained("hf://${e.id}")

image = sana(
    prompt='a cyberpunk cat with a neon sign that says "Sana"',
    height=1024,
    width=1024,
    guidance_scale=5.0,
    pag_guidance_scale=2.0,
    num_inference_steps=18,
) `],D0=e=>[`# Install from https://github.com/google-deepmind/videoprism
import jax
from videoprism import models as vp

flax_model = vp.get_model("${e.id}")
loaded_state = vp.load_pretrained_weights("${e.id}")

@jax.jit
def forward_fn(inputs, train=False):
  return flax_model.apply(loaded_state, inputs, train=train)`],U0=e=>[`from Trainer_finetune import Model

model = Model.from_pretrained("${e.id}")`],O0=e=>[`from huggingface_hub import hf_hub_download
	 from inference_onnx import LVFaceONNXInferencer

model_path = hf_hub_download("${e.id}", "LVFace-L_Glint360K/LVFace-L_Glint360K.onnx")
inferencer = LVFaceONNXInferencer(model_path, use_gpu=True, timeout=300)
img_path = 'path/to/image1.jpg'
embedding = inferencer.infer_from_image(img_path)`],F0=e=>[`from voicecraft import VoiceCraft

model = VoiceCraft.from_pretrained("${e.id}")`],B0=()=>[`# !pip install git+https://github.com/fluxions-ai/vui

import torchaudio

from vui.inference import render
from vui.model import Vui,

model = Vui.from_pretrained().cuda()
waveform = render(
    model,
    "Hey, here is some random stuff, usually something quite long as the shorter the text the less likely the model can cope!",
)
print(waveform.shape)
torchaudio.save("out.opus", waveform[0], 22050)
`],V0=()=>[`import ChatTTS
import torchaudio

chat = ChatTTS.Chat()
chat.load_models(compile=False) # Set to True for better performance

texts = ["PUT YOUR TEXT HERE",]

wavs = chat.infer(texts, )

torchaudio.save("output1.wav", torch.from_numpy(wavs[0]), 24000)`],Mc=e=>{const t=e.tags.find(i=>i.match(/^yolov\d+$/)),n=t?`YOLOv${t.slice(4)}`:"YOLOvXX";return[(t?"":`# Couldn't find a valid YOLO version tag.
# Replace XX with the correct version.
`)+`from ultralytics import ${n}

model = ${n}.from_pretrained("${e.id}")
source = 'http://images.cocodataset.org/val2017/000000039769.jpg'
model.predict(source=source, save=True)`]},z0=e=>[`# Option 1: use with transformers

from transformers import AutoModelForImageSegmentation
birefnet = AutoModelForImageSegmentation.from_pretrained("${e.id}", trust_remote_code=True)
`,`# Option 2: use with BiRefNet

# Install from https://github.com/ZhengPeng7/BiRefNet

from models.birefnet import BiRefNet
model = BiRefNet.from_pretrained("${e.id}")`],q0=e=>[`from swarmformer import SwarmFormerModel

model = SwarmFormerModel.from_pretrained("${e.id}")
`],H0=e=>[`# Follow installation instructions at https://github.com/PKU-YuanGroup/UniWorld-V1

from univa.models.qwen2p5vl.modeling_univa_qwen2p5vl import UnivaQwen2p5VLForConditionalGeneration
	model = UnivaQwen2p5VLForConditionalGeneration.from_pretrained(
        "${e.id}",
        torch_dtype=torch.bfloat16,
        attn_implementation="flash_attention_2",
    ).to("cuda")
	processor = AutoProcessor.from_pretrained("${e.id}")
`],W0=e=>[`# Download the model from the Hub
pip install huggingface_hub[hf_xet]

huggingface-cli download --local-dir ${xt(e.id)} ${e.id}`],K0=e=>[`# Make sure mlx-lm is installed
# pip install --upgrade mlx-lm
# if on a CUDA device, also pip install mlx[cuda]

# Generate text with mlx-lm
from mlx_lm import load, generate

model, tokenizer = load("${e.id}")

prompt = "Once upon a time in"
text = generate(model, tokenizer, prompt=prompt, verbose=True)`],X0=e=>[`# Make sure mlx-lm is installed
# pip install --upgrade mlx-lm

# Generate text with mlx-lm
from mlx_lm import load, generate

model, tokenizer = load("${e.id}")

prompt = "Write a story about Einstein"
messages = [{"role": "user", "content": prompt}]
prompt = tokenizer.apply_chat_template(
    messages, add_generation_prompt=True
)

text = generate(model, tokenizer, prompt=prompt, verbose=True)`],Q0=e=>[`# Make sure mlx-vlm is installed
# pip install --upgrade mlx-vlm

from mlx_vlm import load, generate
from mlx_vlm.prompt_utils import apply_chat_template
from mlx_vlm.utils import load_config

# Load the model
model, processor = load("${e.id}")
config = load_config("${e.id}")

# Prepare input
image = ["http://images.cocodataset.org/val2017/000000039769.jpg"]
prompt = "Describe this image."

# Apply chat template
formatted_prompt = apply_chat_template(
    processor, config, prompt, num_images=1
)

# Generate output
output = generate(model, processor, formatted_prompt, image)
print(output)`],Y0=e=>[`from mlxim.model import create_model

model = create_model(${e.id})`],J0=e=>e.pipeline_tag==="image-text-to-text"?Q0(e):e.pipeline_tag==="text-generation"?e.tags.includes("conversational")?X0(e):K0(e):W0(e),Z0=e=>[`from model2vec import StaticModel

model = StaticModel.from_pretrained("${e.id}")`],G0=e=>{let t;return e.tags.includes("automatic-speech-recognition")&&(t=$0("ASR",e)),t??["# tag did not correspond to a valid NeMo domain."]},ex=e=>{const t=e.tags??[];return t.includes("gguf")||t.includes("onnx")?[]:[`
  import outetts
  
  enum = outetts.Models("${e.id}".split("/", 1)[1])       # VERSION_1_0_SIZE_1B
  cfg  = outetts.ModelConfig.auto_config(enum, outetts.Backend.HF)
  tts  = outetts.Interface(cfg)
  
  speaker = tts.load_default_speaker("EN-FEMALE-1-NEUTRAL")
  tts.generate(
	  outetts.GenerationConfig(
		  text="Hello there, how are you doing?",
		  speaker=speaker,
	  )
  ).save("output.wav")
  `]},tx=e=>[`from pxia import AutoModel

model = AutoModel.from_pretrained("${e.id}")`],nx=e=>[`from pythae.models import AutoModel

model = AutoModel.load_from_hf_hub("${e.id}")`],rx=e=>[`from audiocraft.models import MusicGen

model = MusicGen.get_pretrained("${e.id}")

descriptions = ['happy rock', 'energetic EDM', 'sad jazz']
wav = model.generate(descriptions)  # generates 3 samples.`],ix=e=>[`from audiocraft.models import MAGNeT
	
model = MAGNeT.get_pretrained("${e.id}")

descriptions = ['disco beat', 'energetic EDM', 'funky groove']
wav = model.generate(descriptions)  # generates 3 samples.`],ox=e=>[`from audiocraft.models import AudioGen
	
model = AudioGen.get_pretrained("${e.id}")
model.set_generation_params(duration=5)  # generate 5 seconds.
descriptions = ['dog barking', 'sirene of an emergency vehicle', 'footsteps in a corridor']
wav = model.generate(descriptions)  # generates 3 samples.`],ax=e=>[`from anemoi.inference.runners.default import DefaultRunner
from anemoi.inference.config.run import RunConfiguration
# Create Configuration
config = RunConfiguration(checkpoint = {"huggingface":"${e.id}"})
# Load Runner
runner = DefaultRunner(config)`],sx=e=>e.tags.includes("musicgen")?rx(e):e.tags.includes("audiogen")?ox(e):e.tags.includes("magnet")?ix(e):["# Type of model unknown."],lx=()=>[`# Install CLI with Homebrew on macOS device
brew install whisperkit-cli

# View all available inference options
whisperkit-cli transcribe --help
	
# Download and run inference using whisper base model
whisperkit-cli transcribe --audio-path /path/to/audio.mp3

# Or use your preferred model variant
whisperkit-cli transcribe --model "large-v3" --model-prefix "distil" --audio-path /path/to/audio.mp3 --verbose`],cx=e=>[`from threedtopia_xl.models import threedtopia_xl

model = threedtopia_xl.from_pretrained("${e.id}")
model.generate(cond="path/to/image.png")`],ux=e=>[`# pip install git+https://github.com/Zyphra/Zonos.git
import torchaudio
from zonos.model import Zonos
from zonos.conditioning import make_cond_dict

model = Zonos.from_pretrained("${e.id}", device="cuda")

wav, sr = torchaudio.load("speaker.wav")           # 5-10s reference clip
speaker = model.make_speaker_embedding(wav, sr)

cond  = make_cond_dict(text="Hello, world!", speaker=speaker, language="en-us")
codes = model.generate(model.prepare_conditioning(cond))

audio = model.autoencoder.decode(codes)[0].cpu()
torchaudio.save("sample.wav", audio, model.autoencoder.sampling_rate)
`],dx={acestep:{prettyLabel:"ACE-Step",repoName:"ACE-Step",repoUrl:"https://github.com/ace-step/ACE-Step",filter:!1,countDownloads:'path:"ace_step_transformer/config.json"'},"adapter-transformers":{prettyLabel:"Adapters",repoName:"adapters",repoUrl:"https://github.com/Adapter-Hub/adapters",docsUrl:"https://huggingface.co/docs/hub/adapters",snippets:Bw,filter:!0,countDownloads:'path:"adapter_config.json"'},allennlp:{prettyLabel:"AllenNLP",repoName:"AllenNLP",repoUrl:"https://github.com/allenai/allennlp",docsUrl:"https://huggingface.co/docs/hub/allennlp",snippets:qw,filter:!0},anemoi:{prettyLabel:"AnemoI",repoName:"AnemoI",repoUrl:"https://github.com/ecmwf/anemoi-inference",docsUrl:"https://anemoi.readthedocs.io/en/latest/",filter:!1,countDownloads:'path_extension:"ckpt"',snippets:ax},araclip:{prettyLabel:"AraClip",repoName:"AraClip",repoUrl:"https://huggingface.co/Arabic-Clip/araclip",filter:!1,snippets:Hw},asteroid:{prettyLabel:"Asteroid",repoName:"Asteroid",repoUrl:"https://github.com/asteroid-team/asteroid",docsUrl:"https://huggingface.co/docs/hub/asteroid",snippets:Ww,filter:!0,countDownloads:'path:"pytorch_model.bin"'},audiocraft:{prettyLabel:"Audiocraft",repoName:"audiocraft",repoUrl:"https://github.com/facebookresearch/audiocraft",snippets:sx,filter:!1,countDownloads:'path:"state_dict.bin"'},audioseal:{prettyLabel:"AudioSeal",repoName:"audioseal",repoUrl:"https://github.com/facebookresearch/audioseal",filter:!1,countDownloads:'path_extension:"pth"',snippets:Kw},"bagel-mot":{prettyLabel:"Bagel",repoName:"Bagel",repoUrl:"https://github.com/ByteDance-Seed/Bagel/",filter:!1,countDownloads:'path:"llm_config.json"'},bboxmaskpose:{prettyLabel:"BBoxMaskPose",repoName:"BBoxMaskPose",repoUrl:"https://github.com/MiraPurkrabek/BBoxMaskPose",filter:!1,countDownloads:'path_extension:"pth"'},ben2:{prettyLabel:"BEN2",repoName:"BEN2",repoUrl:"https://github.com/PramaLLC/BEN2",snippets:Xw,filter:!1},bertopic:{prettyLabel:"BERTopic",repoName:"BERTopic",repoUrl:"https://github.com/MaartenGr/BERTopic",snippets:Qw,filter:!0},big_vision:{prettyLabel:"Big Vision",repoName:"big_vision",repoUrl:"https://github.com/google-research/big_vision",filter:!1,countDownloads:'path_extension:"npz"'},birder:{prettyLabel:"Birder",repoName:"Birder",repoUrl:"https://gitlab.com/birder/birder",filter:!1,countDownloads:'path_extension:"pt"'},birefnet:{prettyLabel:"BiRefNet",repoName:"BiRefNet",repoUrl:"https://github.com/ZhengPeng7/BiRefNet",snippets:z0,filter:!1},bm25s:{prettyLabel:"BM25S",repoName:"bm25s",repoUrl:"https://github.com/xhluca/bm25s",snippets:Yw,filter:!1,countDownloads:'path:"params.index.json"'},champ:{prettyLabel:"Champ",repoName:"Champ",repoUrl:"https://github.com/fudan-generative-vision/champ",countDownloads:'path:"champ/motion_module.pth"'},chatterbox:{prettyLabel:"Chatterbox",repoName:"Chatterbox",repoUrl:"https://github.com/resemble-ai/chatterbox",snippets:Jw,countDownloads:'path:"tokenizer.json"',filter:!1},chat_tts:{prettyLabel:"ChatTTS",repoName:"ChatTTS",repoUrl:"https://github.com/2noise/ChatTTS.git",snippets:V0,filter:!1,countDownloads:'path:"asset/GPT.pt"'},colpali:{prettyLabel:"ColPali",repoName:"ColPali",repoUrl:"https://github.com/ManuelFay/colpali",filter:!1,countDownloads:'path:"adapter_config.json"'},comet:{prettyLabel:"COMET",repoName:"COMET",repoUrl:"https://github.com/Unbabel/COMET/",countDownloads:'path:"hparams.yaml"'},contexttab:{prettyLabel:"ConTextTab",repoName:"ConTextTab",repoUrl:"https://github.com/SAP-samples/contexttab",countDownloads:'path_extension:"pt"',snippets:Zw},cosmos:{prettyLabel:"Cosmos",repoName:"Cosmos",repoUrl:"https://github.com/NVIDIA/Cosmos",countDownloads:'path:"config.json" OR path_extension:"pt"'},"cxr-foundation":{prettyLabel:"CXR Foundation",repoName:"cxr-foundation",repoUrl:"https://github.com/google-health/cxr-foundation",snippets:Gw,filter:!1,countDownloads:'path:"precomputed_embeddings/embeddings.npz" OR path:"pax-elixr-b-text/saved_model.pb"'},deepforest:{prettyLabel:"DeepForest",repoName:"deepforest",docsUrl:"https://deepforest.readthedocs.io/en/latest/",repoUrl:"https://github.com/weecology/DeepForest"},"depth-anything-v2":{prettyLabel:"DepthAnythingV2",repoName:"Depth Anything V2",repoUrl:"https://github.com/DepthAnything/Depth-Anything-V2",snippets:eb,filter:!1,countDownloads:'path_extension:"pth"'},"depth-pro":{prettyLabel:"Depth Pro",repoName:"Depth Pro",repoUrl:"https://github.com/apple/ml-depth-pro",countDownloads:'path_extension:"pt"',snippets:tb,filter:!1},"derm-foundation":{prettyLabel:"Derm Foundation",repoName:"derm-foundation",repoUrl:"https://github.com/google-health/derm-foundation",snippets:nb,filter:!1,countDownloads:'path:"scin_dataset_precomputed_embeddings.npz" OR path:"saved_model.pb"'},"describe-anything":{prettyLabel:"Describe Anything",repoName:"Describe Anything",repoUrl:"https://github.com/NVlabs/describe-anything",snippets:ib,filter:!1},"dia-tts":{prettyLabel:"Dia",repoName:"Dia",repoUrl:"https://github.com/nari-labs/dia",snippets:rb,filter:!1},diffree:{prettyLabel:"Diffree",repoName:"Diffree",repoUrl:"https://github.com/OpenGVLab/Diffree",filter:!1,countDownloads:'path:"diffree-step=000010999.ckpt"'},diffusers:{prettyLabel:"Diffusers",repoName:"🤗/diffusers",repoUrl:"https://github.com/huggingface/diffusers",docsUrl:"https://huggingface.co/docs/hub/diffusers",snippets:gb,filter:!0},diffusionkit:{prettyLabel:"DiffusionKit",repoName:"DiffusionKit",repoUrl:"https://github.com/argmaxinc/DiffusionKit",snippets:yb},doctr:{prettyLabel:"docTR",repoName:"doctr",repoUrl:"https://github.com/mindee/doctr"},cartesia_pytorch:{prettyLabel:"Cartesia Pytorch",repoName:"Cartesia Pytorch",repoUrl:"https://github.com/cartesia-ai/cartesia_pytorch",snippets:vb},cartesia_mlx:{prettyLabel:"Cartesia MLX",repoName:"Cartesia MLX",repoUrl:"https://github.com/cartesia-ai/cartesia_mlx",snippets:wb},clipscope:{prettyLabel:"clipscope",repoName:"clipscope",repoUrl:"https://github.com/Lewington-pitsos/clipscope",filter:!1,countDownloads:'path_extension:"pt"'},cosyvoice:{prettyLabel:"CosyVoice",repoName:"CosyVoice",repoUrl:"https://github.com/FunAudioLLM/CosyVoice",filter:!1,countDownloads:'path_extension:"onnx" OR path_extension:"pt"'},cotracker:{prettyLabel:"CoTracker",repoName:"CoTracker",repoUrl:"https://github.com/facebookresearch/co-tracker",filter:!1,countDownloads:'path_extension:"pth"'},edsnlp:{prettyLabel:"EDS-NLP",repoName:"edsnlp",repoUrl:"https://github.com/aphp/edsnlp",docsUrl:"https://aphp.github.io/edsnlp/latest/",filter:!1,snippets:bb,countDownloads:'path_filename:"config" AND path_extension:"cfg"'},elm:{prettyLabel:"ELM",repoName:"elm",repoUrl:"https://github.com/slicex-ai/elm",filter:!1,countDownloads:'path_filename:"slicex_elm_config" AND path_extension:"json"'},espnet:{prettyLabel:"ESPnet",repoName:"ESPnet",repoUrl:"https://github.com/espnet/espnet",docsUrl:"https://huggingface.co/docs/hub/espnet",snippets:Sb,filter:!0},fairseq:{prettyLabel:"Fairseq",repoName:"fairseq",repoUrl:"https://github.com/pytorch/fairseq",snippets:Cb,filter:!0},fastai:{prettyLabel:"fastai",repoName:"fastai",repoUrl:"https://github.com/fastai/fastai",docsUrl:"https://huggingface.co/docs/hub/fastai",snippets:h0,filter:!0},fasttext:{prettyLabel:"fastText",repoName:"fastText",repoUrl:"https://fasttext.cc/",snippets:P0,filter:!0,countDownloads:'path_extension:"bin"'},flair:{prettyLabel:"Flair",repoName:"Flair",repoUrl:"https://github.com/flairNLP/flair",docsUrl:"https://huggingface.co/docs/hub/flair",snippets:Ab,filter:!0,countDownloads:'path:"pytorch_model.bin"'},fme:{prettyLabel:"Full Model Emulation",repoName:"Full Model Emulation",repoUrl:"https://github.com/ai2cm/ace",docsUrl:"https://ai2-climate-emulator.readthedocs.io/en/latest/",filter:!1,countDownloads:'path_extension:"tar"'},"gemma.cpp":{prettyLabel:"gemma.cpp",repoName:"gemma.cpp",repoUrl:"https://github.com/google/gemma.cpp",filter:!1,countDownloads:'path_extension:"sbs"'},"geometry-crafter":{prettyLabel:"GeometryCrafter",repoName:"GeometryCrafter",repoUrl:"https://github.com/TencentARC/GeometryCrafter",countDownloads:'path:"point_map_vae/diffusion_pytorch_model.safetensors"'},gliner:{prettyLabel:"GLiNER",repoName:"GLiNER",repoUrl:"https://github.com/urchade/GLiNER",snippets:Eb,filter:!1,countDownloads:'path:"gliner_config.json"'},"glyph-byt5":{prettyLabel:"Glyph-ByT5",repoName:"Glyph-ByT5",repoUrl:"https://github.com/AIGText/Glyph-ByT5",filter:!1,countDownloads:'path:"checkpoints/byt5_model.pt"'},grok:{prettyLabel:"Grok",repoName:"Grok",repoUrl:"https://github.com/xai-org/grok-1",filter:!1,countDownloads:'path:"ckpt/tensor00000_000" OR path:"ckpt-0/tensor00000_000"'},hallo:{prettyLabel:"Hallo",repoName:"Hallo",repoUrl:"https://github.com/fudan-generative-vision/hallo",countDownloads:'path:"hallo/net.pth"'},hermes:{prettyLabel:"HERMES",repoName:"HERMES",repoUrl:"https://github.com/LMD0311/HERMES",filter:!1,countDownloads:'path:"ckpt/hermes_final.pth"'},hezar:{prettyLabel:"Hezar",repoName:"Hezar",repoUrl:"https://github.com/hezarai/hezar",docsUrl:"https://hezarai.github.io/hezar",countDownloads:'path:"model_config.yaml" OR path:"embedding/embedding_config.yaml"'},htrflow:{prettyLabel:"HTRflow",repoName:"HTRflow",repoUrl:"https://github.com/AI-Riksarkivet/htrflow",docsUrl:"https://ai-riksarkivet.github.io/htrflow",snippets:Tb},"hunyuan-dit":{prettyLabel:"HunyuanDiT",repoName:"HunyuanDiT",repoUrl:"https://github.com/Tencent/HunyuanDiT",countDownloads:'path:"pytorch_model_ema.pt" OR path:"pytorch_model_distill.pt"'},"hunyuan3d-2":{prettyLabel:"Hunyuan3D-2",repoName:"Hunyuan3D-2",repoUrl:"https://github.com/Tencent/Hunyuan3D-2",countDownloads:'path_filename:"model_index" OR path_filename:"config"'},imstoucan:{prettyLabel:"IMS Toucan",repoName:"IMS-Toucan",repoUrl:"https://github.com/DigitalPhonetics/IMS-Toucan",countDownloads:'path:"embedding_gan.pt" OR path:"Vocoder.pt" OR path:"ToucanTTS.pt"'},"index-tts":{prettyLabel:"IndexTTS",repoName:"IndexTTS",repoUrl:"https://github.com/index-tts/index-tts",snippets:Ib,filter:!1},"infinite-you":{prettyLabel:"InfiniteYou",repoName:"InfiniteYou",repoUrl:"https://github.com/bytedance/InfiniteYou",filter:!1,countDownloads:'path:"infu_flux_v1.0/sim_stage1/image_proj_model.bin" OR path:"infu_flux_v1.0/aes_stage2/image_proj_model.bin"'},keras:{prettyLabel:"Keras",repoName:"Keras",repoUrl:"https://github.com/keras-team/keras",docsUrl:"https://huggingface.co/docs/hub/keras",snippets:Rb,filter:!0,countDownloads:'path:"config.json" OR path_extension:"keras"'},"tf-keras":{prettyLabel:"TF-Keras",repoName:"TF-Keras",repoUrl:"https://github.com/keras-team/tf-keras",docsUrl:"https://huggingface.co/docs/hub/tf-keras",snippets:Vb,countDownloads:'path:"saved_model.pb"'},"keras-hub":{prettyLabel:"KerasHub",repoName:"KerasHub",repoUrl:"https://github.com/keras-team/keras-hub",docsUrl:"https://keras.io/keras_hub/",snippets:Db,filter:!0},"kimi-audio":{prettyLabel:"KimiAudio",repoName:"KimiAudio",repoUrl:"https://github.com/MoonshotAI/Kimi-Audio",snippets:Ub,filter:!1},kronos:{prettyLabel:"KRONOS",repoName:"KRONOS",repoUrl:"https://github.com/mahmoodlab/KRONOS",filter:!1,countDownloads:'path_extension:"pt"'},k2:{prettyLabel:"K2",repoName:"k2",repoUrl:"https://github.com/k2-fsa/k2"},"lightning-ir":{prettyLabel:"Lightning IR",repoName:"Lightning IR",repoUrl:"https://github.com/webis-de/lightning-ir",snippets:Ob},"litert-lm":{prettyLabel:"LiteRT-LM",repoName:"LiteRT-LM",repoUrl:"https://github.com/google-ai-edge/LiteRT-LM",filter:!1,countDownloads:'path_extension:"litertlm"'},lerobot:{prettyLabel:"LeRobot",repoName:"LeRobot",repoUrl:"https://github.com/huggingface/lerobot",docsUrl:"https://huggingface.co/docs/lerobot",filter:!1,snippets:Bb},liveportrait:{prettyLabel:"LivePortrait",repoName:"LivePortrait",repoUrl:"https://github.com/KwaiVGI/LivePortrait",filter:!1,countDownloads:'path:"liveportrait/landmark.onnx"'},"llama-cpp-python":{prettyLabel:"llama-cpp-python",repoName:"llama-cpp-python",repoUrl:"https://github.com/abetlen/llama-cpp-python",snippets:Fb},"mini-omni2":{prettyLabel:"Mini-Omni2",repoName:"Mini-Omni2",repoUrl:"https://github.com/gpt-omni/mini-omni2",countDownloads:'path:"model_config.yaml"'},mindspore:{prettyLabel:"MindSpore",repoName:"mindspore",repoUrl:"https://github.com/mindspore-ai/mindspore"},"magi-1":{prettyLabel:"MAGI-1",repoName:"MAGI-1",repoUrl:"https://github.com/SandAI-org/MAGI-1",countDownloads:'path:"ckpt/vae/config.json"'},"magenta-realtime":{prettyLabel:"Magenta RT",repoName:"Magenta RT",repoUrl:"https://github.com/magenta/magenta-realtime",countDownloads:'path:"checkpoints/llm_base_x4286_c1860k.tar" OR path:"checkpoints/llm_large_x3047_c1860k.tar" OR path:"checkpoints/llm_large_x3047_c1860k/checkpoint"'},"mamba-ssm":{prettyLabel:"MambaSSM",repoName:"MambaSSM",repoUrl:"https://github.com/state-spaces/mamba",filter:!1,snippets:zb},"mars5-tts":{prettyLabel:"MARS5-TTS",repoName:"MARS5-TTS",repoUrl:"https://github.com/Camb-ai/MARS5-TTS",filter:!1,countDownloads:'path:"mars5_ar.safetensors"',snippets:qb},matanyone:{prettyLabel:"MatAnyone",repoName:"MatAnyone",repoUrl:"https://github.com/pq-yang/MatAnyone",snippets:Hb,filter:!1},"mesh-anything":{prettyLabel:"MeshAnything",repoName:"MeshAnything",repoUrl:"https://github.com/buaacyw/MeshAnything",filter:!1,countDownloads:'path:"MeshAnything_350m.pth"',snippets:Wb},merlin:{prettyLabel:"Merlin",repoName:"Merlin",repoUrl:"https://github.com/StanfordMIMI/Merlin",filter:!1,countDownloads:'path_extension:"pt"'},medvae:{prettyLabel:"MedVAE",repoName:"MedVAE",repoUrl:"https://github.com/StanfordMIMI/MedVAE",filter:!1,countDownloads:'path_extension:"ckpt"'},mitie:{prettyLabel:"MITIE",repoName:"MITIE",repoUrl:"https://github.com/mit-nlp/MITIE",countDownloads:'path_filename:"total_word_feature_extractor"'},"ml-agents":{prettyLabel:"ml-agents",repoName:"ml-agents",repoUrl:"https://github.com/Unity-Technologies/ml-agents",docsUrl:"https://huggingface.co/docs/hub/ml-agents",snippets:j0,filter:!0,countDownloads:'path_extension:"onnx"'},mlx:{prettyLabel:"MLX",repoName:"MLX",repoUrl:"https://github.com/ml-explore/mlx-examples/tree/main",snippets:J0,filter:!0},"mlx-image":{prettyLabel:"mlx-image",repoName:"mlx-image",repoUrl:"https://github.com/riccardomusmeci/mlx-image",docsUrl:"https://huggingface.co/docs/hub/mlx-image",snippets:Y0,filter:!1,countDownloads:'path:"model.safetensors"'},"mlc-llm":{prettyLabel:"MLC-LLM",repoName:"MLC-LLM",repoUrl:"https://github.com/mlc-ai/mlc-llm",docsUrl:"https://llm.mlc.ai/docs/",filter:!1,countDownloads:'path:"mlc-chat-config.json"'},model2vec:{prettyLabel:"Model2Vec",repoName:"model2vec",repoUrl:"https://github.com/MinishLab/model2vec",snippets:Z0,filter:!1},moshi:{prettyLabel:"Moshi",repoName:"Moshi",repoUrl:"https://github.com/kyutai-labs/moshi",filter:!1,countDownloads:'path:"tokenizer-e351c8d8-checkpoint125.safetensors"'},mtvcraft:{prettyLabel:"MTVCraft",repoName:"MTVCraft",repoUrl:"https://github.com/baaivision/MTVCraft",filter:!1,countDownloads:'path:"vae/3d-vae.pt"'},nemo:{prettyLabel:"NeMo",repoName:"NeMo",repoUrl:"https://github.com/NVIDIA/NeMo",snippets:G0,filter:!0,countDownloads:'path_extension:"nemo" OR path:"model_config.yaml" OR path_extension:"json"'},"open-oasis":{prettyLabel:"open-oasis",repoName:"open-oasis",repoUrl:"https://github.com/etched-ai/open-oasis",countDownloads:'path:"oasis500m.safetensors"'},open_clip:{prettyLabel:"OpenCLIP",repoName:"OpenCLIP",repoUrl:"https://github.com/mlfoundations/open_clip",snippets:Kb,filter:!0,countDownloads:`path:"open_clip_model.safetensors"
			OR path:"model.safetensors"
			OR path:"open_clip_pytorch_model.bin"
			OR path:"pytorch_model.bin"`},"open-sora":{prettyLabel:"Open-Sora",repoName:"Open-Sora",repoUrl:"https://github.com/hpcaitech/Open-Sora",filter:!1,countDownloads:'path:"Open_Sora_v2.safetensors"'},outetts:{prettyLabel:"OuteTTS",repoName:"OuteTTS",repoUrl:"https://github.com/edwko/OuteTTS",snippets:ex,filter:!1},paddlenlp:{prettyLabel:"paddlenlp",repoName:"PaddleNLP",repoUrl:"https://github.com/PaddlePaddle/PaddleNLP",docsUrl:"https://huggingface.co/docs/hub/paddlenlp",snippets:Xb,filter:!0,countDownloads:'path:"model_config.json"'},PaddleOCR:{prettyLabel:"PaddleOCR",repoName:"PaddleOCR",repoUrl:"https://github.com/PaddlePaddle/PaddleOCR",snippets:Qb,filter:!0},peft:{prettyLabel:"PEFT",repoName:"PEFT",repoUrl:"https://github.com/huggingface/peft",snippets:R0,filter:!0,countDownloads:'path:"adapter_config.json"'},"perception-encoder":{prettyLabel:"PerceptionEncoder",repoName:"PerceptionModels",repoUrl:"https://github.com/facebookresearch/perception_models",filter:!1,snippets:Yb,countDownloads:'path_extension:"pt"'},"phantom-wan":{prettyLabel:"Phantom",repoName:"Phantom",repoUrl:"https://github.com/Phantom-video/Phantom",snippets:Jb,filter:!1,countDownloads:'path_extension:"pth"'},pxia:{prettyLabel:"pxia",repoName:"pxia",repoUrl:"https://github.com/not-lain/pxia",snippets:tx,filter:!1},"pyannote-audio":{prettyLabel:"pyannote.audio",repoName:"pyannote-audio",repoUrl:"https://github.com/pyannote/pyannote-audio",snippets:e0,filter:!0},"py-feat":{prettyLabel:"Py-Feat",repoName:"Py-Feat",repoUrl:"https://github.com/cosanlab/py-feat",docsUrl:"https://py-feat.org/",filter:!1},pythae:{prettyLabel:"pythae",repoName:"pythae",repoUrl:"https://github.com/clementchadebec/benchmark_VAE",snippets:nx,filter:!1},recurrentgemma:{prettyLabel:"RecurrentGemma",repoName:"recurrentgemma",repoUrl:"https://github.com/google-deepmind/recurrentgemma",filter:!1,countDownloads:'path:"tokenizer.model"'},relik:{prettyLabel:"Relik",repoName:"Relik",repoUrl:"https://github.com/SapienzaNLP/relik",snippets:t0,filter:!1},refiners:{prettyLabel:"Refiners",repoName:"Refiners",repoUrl:"https://github.com/finegrain-ai/refiners",docsUrl:"https://refine.rs/",filter:!1,countDownloads:'path:"model.safetensors"'},renderformer:{prettyLabel:"RenderFormer",repoName:"RenderFormer",repoUrl:"https://github.com/microsoft/renderformer",snippets:n0,filter:!1},reverb:{prettyLabel:"Reverb",repoName:"Reverb",repoUrl:"https://github.com/revdotcom/reverb",filter:!1},saelens:{prettyLabel:"SAELens",repoName:"SAELens",repoUrl:"https://github.com/jbloomAus/SAELens",snippets:l0,filter:!1},sam2:{prettyLabel:"sam2",repoName:"sam2",repoUrl:"https://github.com/facebookresearch/segment-anything-2",filter:!1,snippets:g0,countDownloads:'path_extension:"pt"'},"sample-factory":{prettyLabel:"sample-factory",repoName:"sample-factory",repoUrl:"https://github.com/alex-petrenko/sample-factory",docsUrl:"https://huggingface.co/docs/hub/sample-factory",snippets:y0,filter:!0,countDownloads:'path:"cfg.json"'},sapiens:{prettyLabel:"sapiens",repoName:"sapiens",repoUrl:"https://github.com/facebookresearch/sapiens",filter:!1,countDownloads:'path_extension:"pt2" OR path_extension:"pth" OR path_extension:"onnx"'},seedvr:{prettyLabel:"SeedVR",repoName:"SeedVR",repoUrl:"https://github.com/ByteDance-Seed/SeedVR",filter:!1,countDownloads:'path_extension:"pth"'},"sentence-transformers":{prettyLabel:"sentence-transformers",repoName:"sentence-transformers",repoUrl:"https://github.com/UKPLab/sentence-transformers",docsUrl:"https://huggingface.co/docs/hub/sentence-transformers",snippets:w0,filter:!0},setfit:{prettyLabel:"setfit",repoName:"setfit",repoUrl:"https://github.com/huggingface/setfit",docsUrl:"https://huggingface.co/docs/hub/setfit",snippets:b0,filter:!0},sklearn:{prettyLabel:"Scikit-learn",repoName:"Scikit-learn",repoUrl:"https://github.com/scikit-learn/scikit-learn",snippets:m0,filter:!0,countDownloads:'path:"sklearn_model.joblib"'},spacy:{prettyLabel:"spaCy",repoName:"spaCy",repoUrl:"https://github.com/explosion/spaCy",docsUrl:"https://huggingface.co/docs/hub/spacy",snippets:x0,filter:!0,countDownloads:'path_extension:"whl"'},"span-marker":{prettyLabel:"SpanMarker",repoName:"SpanMarkerNER",repoUrl:"https://github.com/tomaarsen/SpanMarkerNER",docsUrl:"https://huggingface.co/docs/hub/span_marker",snippets:k0,filter:!0},speechbrain:{prettyLabel:"speechbrain",repoName:"speechbrain",repoUrl:"https://github.com/speechbrain/speechbrain",docsUrl:"https://huggingface.co/docs/hub/speechbrain",snippets:C0,filter:!0,countDownloads:'path:"hyperparams.yaml"'},"ssr-speech":{prettyLabel:"SSR-Speech",repoName:"SSR-Speech",repoUrl:"https://github.com/WangHelin1997/SSR-Speech",filter:!1,countDownloads:'path_extension:".pth"'},"stable-audio-tools":{prettyLabel:"Stable Audio Tools",repoName:"stable-audio-tools",repoUrl:"https://github.com/Stability-AI/stable-audio-tools.git",filter:!1,countDownloads:'path:"model.safetensors"',snippets:f0},monkeyocr:{prettyLabel:"MonkeyOCR",repoName:"monkeyocr",repoUrl:"https://github.com/Yuliang-Liu/MonkeyOCR",filter:!1,countDownloads:'path:"Recognition/config.json"'},"diffusion-single-file":{prettyLabel:"Diffusion Single File",repoName:"diffusion-single-file",repoUrl:"https://github.com/comfyanonymous/ComfyUI",filter:!1,countDownloads:'path_extension:"safetensors"'},"seed-story":{prettyLabel:"SEED-Story",repoName:"SEED-Story",repoUrl:"https://github.com/TencentARC/SEED-Story",filter:!1,countDownloads:'path:"cvlm_llama2_tokenizer/tokenizer.model"',snippets:c0},soloaudio:{prettyLabel:"SoloAudio",repoName:"SoloAudio",repoUrl:"https://github.com/WangHelin1997/SoloAudio",filter:!1,countDownloads:'path:"soloaudio_v2.pt"'},songbloom:{prettyLabel:"SongBloom",repoName:"SongBloom",repoUrl:"https://github.com/Cypress-Yang/SongBloom",filter:!1,countDownloads:'path_extension:"pt"'},"stable-baselines3":{prettyLabel:"stable-baselines3",repoName:"stable-baselines3",repoUrl:"https://github.com/huggingface/huggingface_sb3",docsUrl:"https://huggingface.co/docs/hub/stable-baselines3",snippets:N0,filter:!0,countDownloads:'path_extension:"zip"'},stanza:{prettyLabel:"Stanza",repoName:"stanza",repoUrl:"https://github.com/stanfordnlp/stanza",docsUrl:"https://huggingface.co/docs/hub/stanza",snippets:_0,filter:!0,countDownloads:'path:"models/default.zip"'},swarmformer:{prettyLabel:"SwarmFormer",repoName:"SwarmFormer",repoUrl:"https://github.com/takara-ai/SwarmFormer",snippets:q0,filter:!1},"f5-tts":{prettyLabel:"F5-TTS",repoName:"F5-TTS",repoUrl:"https://github.com/SWivid/F5-TTS",filter:!1,countDownloads:'path_extension:"safetensors" OR path_extension:"pt"'},genmo:{prettyLabel:"Genmo",repoName:"Genmo",repoUrl:"https://github.com/genmoai/models",filter:!1,countDownloads:'path:"vae_stats.json"'},"tencent-song-generation":{prettyLabel:"SongGeneration",repoName:"SongGeneration",repoUrl:"https://github.com/tencent-ailab/songgeneration",filter:!1,countDownloads:'path:"ckpt/songgeneration_base/model.pt"'},tensorflowtts:{prettyLabel:"TensorFlowTTS",repoName:"TensorFlowTTS",repoUrl:"https://github.com/TensorSpeech/TensorFlowTTS",snippets:a0},tabpfn:{prettyLabel:"TabPFN",repoName:"TabPFN",repoUrl:"https://github.com/PriorLabs/TabPFN"},terratorch:{prettyLabel:"TerraTorch",repoName:"TerraTorch",repoUrl:"https://github.com/IBM/terratorch",docsUrl:"https://ibm.github.io/terratorch/",filter:!1,countDownloads:'path_extension:"pt"',snippets:A0},"tic-clip":{prettyLabel:"TiC-CLIP",repoName:"TiC-CLIP",repoUrl:"https://github.com/apple/ml-tic-clip",filter:!1,countDownloads:'path_extension:"pt" AND path_prefix:"checkpoints/"'},timesfm:{prettyLabel:"TimesFM",repoName:"timesfm",repoUrl:"https://github.com/google-research/timesfm",filter:!1,countDownloads:'path:"checkpoints/checkpoint_1100000/state/checkpoint" OR path:"checkpoints/checkpoint_2150000/state/checkpoint" OR path_extension:"ckpt"'},timm:{prettyLabel:"timm",repoName:"pytorch-image-models",repoUrl:"https://github.com/rwightman/pytorch-image-models",docsUrl:"https://huggingface.co/docs/hub/timm",snippets:s0,filter:!0,countDownloads:'path:"pytorch_model.bin" OR path:"model.safetensors"'},tirex:{prettyLabel:"TiRex",repoName:"TiRex",repoUrl:"https://github.com/NX-AI/tirex",countDownloads:'path_extension:"ckpt"'},torchgeo:{prettyLabel:"TorchGeo",repoName:"TorchGeo",repoUrl:"https://github.com/microsoft/torchgeo",docsUrl:"https://torchgeo.readthedocs.io/",filter:!1,countDownloads:'path_extension:"pt" OR path_extension:"pth"'},transformers:{prettyLabel:"Transformers",repoName:"🤗/transformers",repoUrl:"https://github.com/huggingface/transformers",docsUrl:"https://huggingface.co/docs/hub/transformers",snippets:E0,filter:!0},"transformers.js":{prettyLabel:"Transformers.js",repoName:"transformers.js",repoUrl:"https://github.com/huggingface/transformers.js",docsUrl:"https://huggingface.co/docs/hub/transformers-js",snippets:I0,filter:!0},trellis:{prettyLabel:"Trellis",repoName:"Trellis",repoUrl:"https://github.com/microsoft/TRELLIS",countDownloads:'path_extension:"safetensors"'},ultralytics:{prettyLabel:"ultralytics",repoName:"ultralytics",repoUrl:"https://github.com/ultralytics/ultralytics",docsUrl:"https://github.com/ultralytics/ultralytics",filter:!1,countDownloads:'path_extension:"pt"',snippets:Mc},univa:{prettyLabel:"univa",repoName:"univa",repoUrl:"https://github.com/PKU-YuanGroup/UniWorld-V1",snippets:H0,filter:!0,countDownloads:'path:"config.json"'},"uni-3dar":{prettyLabel:"Uni-3DAR",repoName:"Uni-3DAR",repoUrl:"https://github.com/dptech-corp/Uni-3DAR",docsUrl:"https://github.com/dptech-corp/Uni-3DAR",countDownloads:'path_extension:"pt"'},"unity-sentis":{prettyLabel:"unity-sentis",repoName:"unity-sentis",repoUrl:"https://github.com/Unity-Technologies/sentis-samples",snippets:M0,filter:!0,countDownloads:'path_extension:"sentis"'},sana:{prettyLabel:"Sana",repoName:"Sana",repoUrl:"https://github.com/NVlabs/Sana",countDownloads:'path_extension:"pth"',snippets:L0},videoprism:{prettyLabel:"VideoPrism",repoName:"VideoPrism",repoUrl:"https://github.com/google-deepmind/videoprism",countDownloads:'path_extension:"npz"',snippets:D0},"vfi-mamba":{prettyLabel:"VFIMamba",repoName:"VFIMamba",repoUrl:"https://github.com/MCG-NJU/VFIMamba",countDownloads:'path_extension:"pkl"',snippets:U0},lvface:{prettyLabel:"LVFace",repoName:"LVFace",repoUrl:"https://github.com/bytedance/LVFace",countDownloads:'path_extension:"pt" OR path_extension:"onnx"',snippets:O0},voicecraft:{prettyLabel:"VoiceCraft",repoName:"VoiceCraft",repoUrl:"https://github.com/jasonppy/VoiceCraft",docsUrl:"https://github.com/jasonppy/VoiceCraft",snippets:F0},vui:{prettyLabel:"Vui",repoName:"Vui",repoUrl:"https://github.com/vui-ai/vui",countDownloads:'path_extension:"pt"',snippets:B0},"wan2.2":{prettyLabel:"Wan2.2",repoName:"Wan2.2",repoUrl:"https://github.com/Wan-Video/Wan2.2",countDownloads:'path_filename:"config" AND path_extension:"json"'},wham:{prettyLabel:"WHAM",repoName:"wham",repoUrl:"https://huggingface.co/microsoft/wham",docsUrl:"https://huggingface.co/microsoft/wham/blob/main/README.md",countDownloads:'path_extension:"ckpt"'},whisperkit:{prettyLabel:"WhisperKit",repoName:"WhisperKit",repoUrl:"https://github.com/argmaxinc/WhisperKit",docsUrl:"https://github.com/argmaxinc/WhisperKit?tab=readme-ov-file#homebrew",snippets:lx,countDownloads:'path_filename:"model" AND path_extension:"mil" AND _exists_:"path_prefix"'},yolov10:{prettyLabel:"YOLOv10",repoName:"YOLOv10",repoUrl:"https://github.com/THU-MIG/yolov10",docsUrl:"https://github.com/THU-MIG/yolov10",countDownloads:'path_extension:"pt" OR path_extension:"safetensors"',snippets:Mc},zonos:{prettyLabel:"Zonos",repoName:"Zonos",repoUrl:"https://github.com/Zyphra/Zonos",docsUrl:"https://github.com/Zyphra/Zonos",snippets:ux,filter:!1},"3dtopia-xl":{prettyLabel:"3DTopia-XL",repoName:"3DTopia-XL",repoUrl:"https://github.com/3DTopia/3DTopia-XL",filter:!1,countDownloads:'path:"model_vae_fp16.pt"',snippets:cx}};Object.entries(dx).filter(([e,t])=>t.filter).map(([e])=>e);var D;(function(e){e[e.F32=0]="F32",e[e.F16=1]="F16",e[e.Q4_0=2]="Q4_0",e[e.Q4_1=3]="Q4_1",e[e.Q4_1_SOME_F16=4]="Q4_1_SOME_F16",e[e.Q4_2=5]="Q4_2",e[e.Q4_3=6]="Q4_3",e[e.Q8_0=7]="Q8_0",e[e.Q5_0=8]="Q5_0",e[e.Q5_1=9]="Q5_1",e[e.Q2_K=10]="Q2_K",e[e.Q3_K_S=11]="Q3_K_S",e[e.Q3_K_M=12]="Q3_K_M",e[e.Q3_K_L=13]="Q3_K_L",e[e.Q4_K_S=14]="Q4_K_S",e[e.Q4_K_M=15]="Q4_K_M",e[e.Q5_K_S=16]="Q5_K_S",e[e.Q5_K_M=17]="Q5_K_M",e[e.Q6_K=18]="Q6_K",e[e.IQ2_XXS=19]="IQ2_XXS",e[e.IQ2_XS=20]="IQ2_XS",e[e.Q2_K_S=21]="Q2_K_S",e[e.IQ3_XS=22]="IQ3_XS",e[e.IQ3_XXS=23]="IQ3_XXS",e[e.IQ1_S=24]="IQ1_S",e[e.IQ4_NL=25]="IQ4_NL",e[e.IQ3_S=26]="IQ3_S",e[e.IQ3_M=27]="IQ3_M",e[e.IQ2_S=28]="IQ2_S",e[e.IQ2_M=29]="IQ2_M",e[e.IQ4_XS=30]="IQ4_XS",e[e.IQ1_M=31]="IQ1_M",e[e.BF16=32]="BF16",e[e.Q4_0_4_4=33]="Q4_0_4_4",e[e.Q4_0_4_8=34]="Q4_0_4_8",e[e.Q4_0_8_8=35]="Q4_0_8_8",e[e.TQ1_0=36]="TQ1_0",e[e.TQ2_0=37]="TQ2_0",e[e.MXFP4_MOE=38]="MXFP4_MOE",e[e.Q2_K_XL=1e3]="Q2_K_XL",e[e.Q3_K_XL=1001]="Q3_K_XL",e[e.Q4_K_XL=1002]="Q4_K_XL",e[e.Q5_K_XL=1003]="Q5_K_XL",e[e.Q6_K_XL=1004]="Q6_K_XL",e[e.Q8_K_XL=1005]="Q8_K_XL"})(D||(D={}));const px=Object.values(D).filter(e=>typeof e=="string");new RegExp(`(?<quant>${px.join("|")})(_(?<sizeVariation>[A-Z]+))?`);D.F32,D.BF16,D.F16,D.Q8_K_XL,D.Q8_0,D.Q6_K_XL,D.Q6_K,D.Q5_K_XL,D.Q5_K_M,D.Q5_K_S,D.Q5_0,D.Q5_1,D.Q4_K_XL,D.Q4_K_M,D.Q4_K_S,D.IQ4_NL,D.IQ4_XS,D.Q4_0_4_4,D.Q4_0_4_8,D.Q4_0_8_8,D.Q4_1_SOME_F16,D.Q4_0,D.Q4_1,D.Q4_2,D.Q4_3,D.MXFP4_MOE,D.Q3_K_XL,D.Q3_K_L,D.Q3_K_M,D.Q3_K_S,D.IQ3_M,D.IQ3_S,D.IQ3_XS,D.IQ3_XXS,D.Q2_K_XL,D.Q2_K,D.Q2_K_S,D.IQ2_M,D.IQ2_S,D.IQ2_XS,D.IQ2_XXS,D.IQ1_S,D.IQ1_M,D.TQ1_0,D.TQ2_0;var Lc;(function(e){e[e.F32=0]="F32",e[e.F16=1]="F16",e[e.Q4_0=2]="Q4_0",e[e.Q4_1=3]="Q4_1",e[e.Q5_0=6]="Q5_0",e[e.Q5_1=7]="Q5_1",e[e.Q8_0=8]="Q8_0",e[e.Q8_1=9]="Q8_1",e[e.Q2_K=10]="Q2_K",e[e.Q3_K=11]="Q3_K",e[e.Q4_K=12]="Q4_K",e[e.Q5_K=13]="Q5_K",e[e.Q6_K=14]="Q6_K",e[e.Q8_K=15]="Q8_K",e[e.IQ2_XXS=16]="IQ2_XXS",e[e.IQ2_XS=17]="IQ2_XS",e[e.IQ3_XXS=18]="IQ3_XXS",e[e.IQ1_S=19]="IQ1_S",e[e.IQ4_NL=20]="IQ4_NL",e[e.IQ3_S=21]="IQ3_S",e[e.IQ2_S=22]="IQ2_S",e[e.IQ4_XS=23]="IQ4_XS",e[e.I8=24]="I8",e[e.I16=25]="I16",e[e.I32=26]="I32",e[e.I64=27]="I64",e[e.F64=28]="F64",e[e.IQ1_M=29]="IQ1_M",e[e.BF16=30]="BF16",e[e.TQ1_0=34]="TQ1_0",e[e.TQ2_0=35]="TQ2_0",e[e.MXFP4=39]="MXFP4"})(Lc||(Lc={}));const mx={js:{fetch:{basic:`async function query(data) {
	const response = await fetch(
		"{{ fullUrl }}",
		{
			headers: {
				Authorization: "{{ authorizationHeader }}",
				"Content-Type": "application/json",
{% if billTo %}
				"X-HF-Bill-To": "{{ billTo }}",
{% endif %}			},
			method: "POST",
			body: JSON.stringify(data),
		}
	);
	const result = await response.json();
	return result;
}

query({ inputs: {{ providerInputs.asObj.inputs }} }).then((response) => {
    console.log(JSON.stringify(response));
});`,basicAudio:`async function query(data) {
	const response = await fetch(
		"{{ fullUrl }}",
		{
			headers: {
				Authorization: "{{ authorizationHeader }}",
				"Content-Type": "audio/flac",
{% if billTo %}
				"X-HF-Bill-To": "{{ billTo }}",
{% endif %}			},
			method: "POST",
			body: JSON.stringify(data),
		}
	);
	const result = await response.json();
	return result;
}

query({ inputs: {{ providerInputs.asObj.inputs }} }).then((response) => {
    console.log(JSON.stringify(response));
});`,basicImage:`async function query(data) {
	const response = await fetch(
		"{{ fullUrl }}",
		{
			headers: {
				Authorization: "{{ authorizationHeader }}",
				"Content-Type": "image/jpeg",
{% if billTo %}
				"X-HF-Bill-To": "{{ billTo }}",
{% endif %}			},
			method: "POST",
			body: JSON.stringify(data),
		}
	);
	const result = await response.json();
	return result;
}

query({ inputs: {{ providerInputs.asObj.inputs }} }).then((response) => {
    console.log(JSON.stringify(response));
});`,conversational:`async function query(data) {
	const response = await fetch(
		"{{ fullUrl }}",
		{
			headers: {
				Authorization: "{{ authorizationHeader }}",
				"Content-Type": "application/json",
{% if billTo %}
				"X-HF-Bill-To": "{{ billTo }}",
{% endif %}			},
			method: "POST",
			body: JSON.stringify(data),
		}
	);
	const result = await response.json();
	return result;
}

query({ 
{{ autoInputs.asTsString }}
}).then((response) => {
    console.log(JSON.stringify(response));
});`,imageToImage:`const image = fs.readFileSync("{{inputs.asObj.inputs}}");

async function query(data) {
	const response = await fetch(
		"{{ fullUrl }}",
		{
			headers: {
				Authorization: "{{ authorizationHeader }}",
				"Content-Type": "image/jpeg",
{% if billTo %}
				"X-HF-Bill-To": "{{ billTo }}",
{% endif %}			},
			method: "POST",
			body: {
				"inputs": \`data:image/png;base64,\${data.inputs.encode("base64")}\`,
				"parameters": data.parameters,
			}
		}
	);
	const result = await response.json();
	return result;
}

query({ 
	inputs: image,
	parameters: {
		prompt: "{{ inputs.asObj.parameters.prompt }}",
	}
}).then((response) => {
    console.log(JSON.stringify(response));
});`,imageToVideo:`const image = fs.readFileSync("{{inputs.asObj.inputs}}");

async function query(data) {
	const response = await fetch(
		"{{ fullUrl }}",
		{
			headers: {
				Authorization: "{{ authorizationHeader }}",
				"Content-Type": "image/jpeg",
{% if billTo %}
				"X-HF-Bill-To": "{{ billTo }}",
{% endif %}			},
			method: "POST",
			body: {
				"image_url": \`data:image/png;base64,\${data.image.encode("base64")}\`,
				"prompt": data.prompt,
			}
		}
	);
	const result = await response.json();
	return result;
}

query({
	"image": image,
	"prompt": "{{inputs.asObj.parameters.prompt}}",
}).then((response) => {
    // Use video
});`,textToAudio:`{% if model.library_name == "transformers" %}
async function query(data) {
	const response = await fetch(
		"{{ fullUrl }}",
		{
			headers: {
				Authorization: "{{ authorizationHeader }}",
				"Content-Type": "application/json",
{% if billTo %}
				"X-HF-Bill-To": "{{ billTo }}",
{% endif %}			},
			method: "POST",
			body: JSON.stringify(data),
		}
	);
	const result = await response.blob();
    return result;
}

query({ inputs: {{ providerInputs.asObj.inputs }} }).then((response) => {
    // Returns a byte object of the Audio wavform. Use it directly!
});
{% else %}
async function query(data) {
	const response = await fetch(
		"{{ fullUrl }}",
		{
			headers: {
				Authorization: "{{ authorizationHeader }}",
				"Content-Type": "application/json",
			},
			method: "POST",
			body: JSON.stringify(data),
		}
	);
    const result = await response.json();
    return result;
}

query({ inputs: {{ providerInputs.asObj.inputs }} }).then((response) => {
    console.log(JSON.stringify(response));
});
{% endif %} `,textToImage:`async function query(data) {
	const response = await fetch(
		"{{ fullUrl }}",
		{
			headers: {
				Authorization: "{{ authorizationHeader }}",
				"Content-Type": "application/json",
{% if billTo %}
				"X-HF-Bill-To": "{{ billTo }}",
{% endif %}			},
			method: "POST",
			body: JSON.stringify(data),
		}
	);
	const result = await response.blob();
	return result;
}


query({ {{ providerInputs.asTsString }} }).then((response) => {
    // Use image
});`,textToSpeech:`{% if model.library_name == "transformers" %}
async function query(data) {
	const response = await fetch(
		"{{ fullUrl }}",
		{
			headers: {
				Authorization: "{{ authorizationHeader }}",
				"Content-Type": "application/json",
{% if billTo %}
				"X-HF-Bill-To": "{{ billTo }}",
{% endif %}			},
			method: "POST",
			body: JSON.stringify(data),
		}
	);
	const result = await response.blob();
    return result;
}

query({ text: {{ inputs.asObj.inputs }} }).then((response) => {
    // Returns a byte object of the Audio wavform. Use it directly!
});
{% else %}
async function query(data) {
	const response = await fetch(
		"{{ fullUrl }}",
		{
			headers: {
				Authorization: "{{ authorizationHeader }}",
				"Content-Type": "application/json",
			},
			method: "POST",
			body: JSON.stringify(data),
		}
	);
    const result = await response.json();
    return result;
}

query({ text: {{ inputs.asObj.inputs }} }).then((response) => {
    console.log(JSON.stringify(response));
});
{% endif %} `,zeroShotClassification:`async function query(data) {
    const response = await fetch(
		"{{ fullUrl }}",
        {
            headers: {
				Authorization: "{{ authorizationHeader }}",
                "Content-Type": "application/json",
{% if billTo %}
                "X-HF-Bill-To": "{{ billTo }}",
{% endif %}         },
            method: "POST",
            body: JSON.stringify(data),
        }
    );
    const result = await response.json();
    return result;
}

query({
    inputs: {{ providerInputs.asObj.inputs }},
    parameters: { candidate_labels: ["refund", "legal", "faq"] }
}).then((response) => {
    console.log(JSON.stringify(response));
});`},"huggingface.js":{basic:`import { InferenceClient } from "@huggingface/inference";

const client = new InferenceClient("{{ accessToken }}");

const output = await client.{{ methodName }}({
{% if endpointUrl %}
    endpointUrl: "{{ endpointUrl }}",
{% endif %}
	model: "{{ model.id }}",
	inputs: {{ inputs.asObj.inputs }},
	provider: "{{ provider }}",
}{% if billTo %}, {
	billTo: "{{ billTo }}",
}{% endif %});

console.log(output);`,basicAudio:`import { InferenceClient } from "@huggingface/inference";

const client = new InferenceClient("{{ accessToken }}");

const data = fs.readFileSync({{inputs.asObj.inputs}});

const output = await client.{{ methodName }}({
{% if endpointUrl %}
    endpointUrl: "{{ endpointUrl }}",
{% endif %}
	data,
	model: "{{ model.id }}",
	provider: "{{ provider }}",
}{% if billTo %}, {
	billTo: "{{ billTo }}",
}{% endif %});

console.log(output);`,basicImage:`import { InferenceClient } from "@huggingface/inference";

const client = new InferenceClient("{{ accessToken }}");

const data = fs.readFileSync({{inputs.asObj.inputs}});

const output = await client.{{ methodName }}({
{% if endpointUrl %}
    endpointUrl: "{{ endpointUrl }}",
{% endif %}
	data,
	model: "{{ model.id }}",
	provider: "{{ provider }}",
}{% if billTo %}, {
	billTo: "{{ billTo }}",
}{% endif %});

console.log(output);`,conversational:`import { InferenceClient } from "@huggingface/inference";

const client = new InferenceClient("{{ accessToken }}");

const chatCompletion = await client.chatCompletion({
{% if endpointUrl %}
    endpointUrl: "{{ endpointUrl }}",
{% endif %}
    provider: "{{ provider }}",
    model: "{{ model.id }}",
{{ inputs.asTsString }}
}{% if billTo %}, {
    billTo: "{{ billTo }}",
}{% endif %});

console.log(chatCompletion.choices[0].message);`,conversationalStream:`import { InferenceClient } from "@huggingface/inference";

const client = new InferenceClient("{{ accessToken }}");

let out = "";

const stream = client.chatCompletionStream({
{% if endpointUrl %}
    endpointUrl: "{{ endpointUrl }}",
{% endif %}
    provider: "{{ provider }}",
    model: "{{ model.id }}",
{{ inputs.asTsString }}
}{% if billTo %}, {
    billTo: "{{ billTo }}",
}{% endif %});

for await (const chunk of stream) {
	if (chunk.choices && chunk.choices.length > 0) {
		const newContent = chunk.choices[0].delta.content;
		out += newContent;
		console.log(newContent);
	}
}`,imageToImage:`import { InferenceClient } from "@huggingface/inference";

const client = new InferenceClient("{{ accessToken }}");

const data = fs.readFileSync("{{inputs.asObj.inputs}}");

const image = await client.imageToImage({
{% if endpointUrl %}
	endpointUrl: "{{ endpointUrl }}",
{% endif %}
	provider: "{{provider}}",
	model: "{{model.id}}",
	inputs: data,
	parameters: { prompt: "{{inputs.asObj.parameters.prompt}}", },
}{% if billTo %}, {
	billTo: "{{ billTo }}",
}{% endif %});
/// Use the generated image (it's a Blob)
// For example, you can save it to a file or display it in an image element
`,imageToVideo:`import { InferenceClient } from "@huggingface/inference";

const client = new InferenceClient("{{ accessToken }}");

const data = fs.readFileSync("{{inputs.asObj.inputs}}");

const video = await client.imageToVideo({
{% if endpointUrl %}
	endpointUrl: "{{ endpointUrl }}",
{% endif %}
	provider: "{{provider}}",
	model: "{{model.id}}",
	inputs: data,
	parameters: { prompt: "{{inputs.asObj.parameters.prompt}}", },
}{% if billTo %}, {
	billTo: "{{ billTo }}",
}{% endif %});

/// Use the generated video (it's a Blob)
// For example, you can save it to a file or display it in a video element
`,textToImage:`import { InferenceClient } from "@huggingface/inference";

const client = new InferenceClient("{{ accessToken }}");

const image = await client.textToImage({
{% if endpointUrl %}
    endpointUrl: "{{ endpointUrl }}",
{% endif %}
    provider: "{{ provider }}",
    model: "{{ model.id }}",
	inputs: {{ inputs.asObj.inputs }},
	parameters: { num_inference_steps: 5 },
}{% if billTo %}, {
    billTo: "{{ billTo }}",
}{% endif %});
/// Use the generated image (it's a Blob)`,textToSpeech:`import { InferenceClient } from "@huggingface/inference";

const client = new InferenceClient("{{ accessToken }}");

const audio = await client.textToSpeech({
{% if endpointUrl %}
    endpointUrl: "{{ endpointUrl }}",
{% endif %}
    provider: "{{ provider }}",
    model: "{{ model.id }}",
	inputs: {{ inputs.asObj.inputs }},
}{% if billTo %}, {
    billTo: "{{ billTo }}",
}{% endif %});
// Use the generated audio (it's a Blob)`,textToVideo:`import { InferenceClient } from "@huggingface/inference";

const client = new InferenceClient("{{ accessToken }}");

const video = await client.textToVideo({
{% if endpointUrl %}
    endpointUrl: "{{ endpointUrl }}",
{% endif %}
    provider: "{{ provider }}",
    model: "{{ model.id }}",
	inputs: {{ inputs.asObj.inputs }},
}{% if billTo %}, {
    billTo: "{{ billTo }}",
}{% endif %});
// Use the generated video (it's a Blob)`},openai:{conversational:`import { OpenAI } from "openai";

const client = new OpenAI({
	baseURL: "{{ baseUrl }}",
	apiKey: "{{ accessToken }}",
{% if billTo %}
	defaultHeaders: {
		"X-HF-Bill-To": "{{ billTo }}" 
	}
{% endif %}
});

const chatCompletion = await client.chat.completions.create({
	model: "{{ providerModelId }}",
{{ inputs.asTsString }}
});

console.log(chatCompletion.choices[0].message);`,conversationalStream:`import { OpenAI } from "openai";

const client = new OpenAI({
	baseURL: "{{ baseUrl }}",
	apiKey: "{{ accessToken }}",
{% if billTo %}
    defaultHeaders: {
		"X-HF-Bill-To": "{{ billTo }}" 
	}
{% endif %}
});

const stream = await client.chat.completions.create({
    model: "{{ providerModelId }}",
{{ inputs.asTsString }}
    stream: true,
});

for await (const chunk of stream) {
    process.stdout.write(chunk.choices[0]?.delta?.content || "");
}`}},python:{fal_client:{imageToImage:`{%if provider == "fal-ai" %}
import fal_client
import base64

def on_queue_update(update):
    if isinstance(update, fal_client.InProgress):
        for log in update.logs:
           print(log["message"])

with open("{{inputs.asObj.inputs}}", "rb") as image_file:
    image_base_64 = base64.b64encode(image_file.read()).decode('utf-8')

result = fal_client.subscribe(
    "fal-ai/flux-kontext/dev",
    arguments={
        "prompt": f"data:image/png;base64,{image_base_64}",
        "image_url": "{{ providerInputs.asObj.inputs }}",
    },
    with_logs=True,
    on_queue_update=on_queue_update,
)
print(result)
{%endif%}
`,imageToVideo:`{%if provider == "fal-ai" %}
import fal_client
import base64

def on_queue_update(update):
    if isinstance(update, fal_client.InProgress):
        for log in update.logs:
           print(log["message"])

with open("{{inputs.asObj.inputs}}", "rb") as image_file:
    image_base_64 = base64.b64encode(image_file.read()).decode('utf-8')

result = fal_client.subscribe(
    "{{model.id}}",
    arguments={
        "image_url": f"data:image/png;base64,{image_base_64}",
        "prompt": "{{inputs.asObj.parameters.prompt}}",
    },
    with_logs=True,
    on_queue_update=on_queue_update,
)
print(result)
{%endif%}
`,textToImage:`{% if provider == "fal-ai" %}
import fal_client

{% if providerInputs.asObj.loras is defined and providerInputs.asObj.loras != none %}
result = fal_client.subscribe(
    "{{ providerModelId }}",
    arguments={
        "prompt": {{ inputs.asObj.inputs }},
        "loras":{{ providerInputs.asObj.loras | tojson }},
    },
)
{% else %}
result = fal_client.subscribe(
    "{{ providerModelId }}",
    arguments={
        "prompt": {{ inputs.asObj.inputs }},
    },
)
{% endif %} 
print(result)
{% endif %} `},huggingface_hub:{basic:`result = client.{{ methodName }}(
    {{ inputs.asObj.inputs }},
    model="{{ model.id }}",
)`,basicAudio:'output = client.{{ methodName }}({{ inputs.asObj.inputs }}, model="{{ model.id }}")',basicImage:'output = client.{{ methodName }}({{ inputs.asObj.inputs }}, model="{{ model.id }}")',conversational:`completion = client.chat.completions.create(
    model="{{ model.id }}",
{{ inputs.asPythonString }}
)

print(completion.choices[0].message) `,conversationalStream:`stream = client.chat.completions.create(
    model="{{ model.id }}",
{{ inputs.asPythonString }}
    stream=True,
)

for chunk in stream:
    print(chunk.choices[0].delta.content, end="") `,documentQuestionAnswering:`output = client.document_question_answering(
    "{{ inputs.asObj.image }}",
    question="{{ inputs.asObj.question }}",
    model="{{ model.id }}",
) `,imageToImage:`with open("{{ inputs.asObj.inputs }}", "rb") as image_file:
   input_image = image_file.read()

# output is a PIL.Image object
image = client.image_to_image(
    input_image,
    prompt="{{ inputs.asObj.parameters.prompt }}",
    model="{{ model.id }}",
)
`,imageToVideo:`with open("{{ inputs.asObj.inputs }}", "rb") as image_file:
   input_image = image_file.read()

video = client.image_to_video(
    input_image,
    prompt="{{ inputs.asObj.parameters.prompt }}",
    model="{{ model.id }}",
) 
`,importInferenceClient:`from huggingface_hub import InferenceClient

client = InferenceClient(
{% if endpointUrl %}
    base_url="{{ baseUrl }}",
{% endif %}
    provider="{{ provider }}",
    api_key="{{ accessToken }}",
{% if billTo %}
    bill_to="{{ billTo }}",
{% endif %}
)`,questionAnswering:`answer = client.question_answering(
    question="{{ inputs.asObj.question }}",
    context="{{ inputs.asObj.context }}",
    model="{{ model.id }}",
) `,tableQuestionAnswering:`answer = client.table_question_answering(
    query="{{ inputs.asObj.query }}",
    table={{ inputs.asObj.table }},
    model="{{ model.id }}",
) `,textToImage:`# output is a PIL.Image object
image = client.text_to_image(
    {{ inputs.asObj.inputs }},
    model="{{ model.id }}",
) `,textToSpeech:`# audio is returned as bytes
audio = client.text_to_speech(
    {{ inputs.asObj.inputs }},
    model="{{ model.id }}",
) 
`,textToVideo:`video = client.text_to_video(
    {{ inputs.asObj.inputs }},
    model="{{ model.id }}",
) `},openai:{conversational:`from openai import OpenAI

client = OpenAI(
    base_url="{{ baseUrl }}",
    api_key="{{ accessToken }}",
{% if billTo %}
    default_headers={
        "X-HF-Bill-To": "{{ billTo }}"
    }
{% endif %}
)

completion = client.chat.completions.create(
    model="{{ providerModelId }}",
{{ inputs.asPythonString }}
)

print(completion.choices[0].message) `,conversationalStream:`from openai import OpenAI

client = OpenAI(
    base_url="{{ baseUrl }}",
    api_key="{{ accessToken }}",
{% if billTo %}
    default_headers={
        "X-HF-Bill-To": "{{ billTo }}"
    }
{% endif %}
)

stream = client.chat.completions.create(
    model="{{ providerModelId }}",
{{ inputs.asPythonString }}
    stream=True,
)

for chunk in stream:
    print(chunk.choices[0].delta.content, end="")`},requests:{basic:`def query(payload):
    response = requests.post(API_URL, headers=headers, json=payload)
    return response.json()

output = query({
    "inputs": {{ providerInputs.asObj.inputs }},
}) `,basicAudio:`def query(filename):
    with open(filename, "rb") as f:
        data = f.read()
    response = requests.post(API_URL, headers={"Content-Type": "audio/flac", **headers}, data=data)
    return response.json()

output = query({{ providerInputs.asObj.inputs }})`,basicImage:`def query(filename):
    with open(filename, "rb") as f:
        data = f.read()
    response = requests.post(API_URL, headers={"Content-Type": "image/jpeg", **headers}, data=data)
    return response.json()

output = query({{ providerInputs.asObj.inputs }})`,conversational:`def query(payload):
    response = requests.post(API_URL, headers=headers, json=payload)
    return response.json()

response = query({
{{ autoInputs.asJsonString }}
})

print(response["choices"][0]["message"])`,conversationalStream:`def query(payload):
    response = requests.post(API_URL, headers=headers, json=payload, stream=True)
    for line in response.iter_lines():
        if not line.startswith(b"data:"):
            continue
        if line.strip() == b"data: [DONE]":
            return
        yield json.loads(line.decode("utf-8").lstrip("data:").rstrip("/n"))

chunks = query({
{{ autoInputs.asJsonString }},
    "stream": True,
})

for chunk in chunks:
    print(chunk["choices"][0]["delta"]["content"], end="")`,documentQuestionAnswering:`def query(payload):
    with open(payload["image"], "rb") as f:
        img = f.read()
        payload["image"] = base64.b64encode(img).decode("utf-8")
    response = requests.post(API_URL, headers=headers, json=payload)
    return response.json()

output = query({
    "inputs": {
        "image": "{{ inputs.asObj.image }}",
        "question": "{{ inputs.asObj.question }}",
    },
}) `,imageToImage:`
def query(payload):
    with open(payload["inputs"], "rb") as f:
        img = f.read()
        payload["inputs"] = base64.b64encode(img).decode("utf-8")
    response = requests.post(API_URL, headers=headers, json=payload)
    return response.content

image_bytes = query({
{{ providerInputs.asJsonString }}
})

# You can access the image with PIL.Image for example
import io
from PIL import Image
image = Image.open(io.BytesIO(image_bytes)) `,imageToVideo:`
def query(payload):
    with open(payload["inputs"], "rb") as f:
        img = f.read()
        payload["inputs"] = base64.b64encode(img).decode("utf-8")
    response = requests.post(API_URL, headers=headers, json=payload)
    return response.content

video_bytes = query({
{{ inputs.asJsonString }}
})
`,importRequests:`{% if importBase64 %}
import base64
{% endif %}
{% if importJson %}
import json
{% endif %}
import requests

API_URL = "{{ fullUrl }}"
headers = {
    "Authorization": "{{ authorizationHeader }}",
{% if billTo %}
    "X-HF-Bill-To": "{{ billTo }}"
{% endif %}
}`,tabular:`def query(payload):
    response = requests.post(API_URL, headers=headers, json=payload)
    return response.content

response = query({
    "inputs": {
        "data": {{ providerInputs.asObj.inputs }}
    },
}) `,textToAudio:`{% if model.library_name == "transformers" %}
def query(payload):
    response = requests.post(API_URL, headers=headers, json=payload)
    return response.content

audio_bytes = query({
    "inputs": {{ inputs.asObj.inputs }},
})
# You can access the audio with IPython.display for example
from IPython.display import Audio
Audio(audio_bytes)
{% else %}
def query(payload):
    response = requests.post(API_URL, headers=headers, json=payload)
    return response.json()

audio, sampling_rate = query({
    "inputs": {{ inputs.asObj.inputs }},
})
# You can access the audio with IPython.display for example
from IPython.display import Audio
Audio(audio, rate=sampling_rate)
{% endif %} `,textToImage:`{% if provider == "hf-inference" %}
def query(payload):
    response = requests.post(API_URL, headers=headers, json=payload)
    return response.content

image_bytes = query({
    "inputs": {{ providerInputs.asObj.inputs }},
})

# You can access the image with PIL.Image for example
import io
from PIL import Image
image = Image.open(io.BytesIO(image_bytes))
{% endif %}`,textToSpeech:`{% if model.library_name == "transformers" %}
def query(payload):
    response = requests.post(API_URL, headers=headers, json=payload)
    return response.content

audio_bytes = query({
    "text": {{ inputs.asObj.inputs }},
})
# You can access the audio with IPython.display for example
from IPython.display import Audio
Audio(audio_bytes)
{% else %}
def query(payload):
    response = requests.post(API_URL, headers=headers, json=payload)
    return response.json()

audio, sampling_rate = query({
    "text": {{ inputs.asObj.inputs }},
})
# You can access the audio with IPython.display for example
from IPython.display import Audio
Audio(audio, rate=sampling_rate)
{% endif %} `,zeroShotClassification:`def query(payload):
    response = requests.post(API_URL, headers=headers, json=payload)
    return response.json()

output = query({
    "inputs": {{ providerInputs.asObj.inputs }},
    "parameters": {"candidate_labels": ["refund", "legal", "faq"]},
}) `,zeroShotImageClassification:`def query(data):
    with open(data["image_path"], "rb") as f:
        img = f.read()
    payload={
        "parameters": data["parameters"],
        "inputs": base64.b64encode(img).decode("utf-8")
    }
    response = requests.post(API_URL, headers=headers, json=payload)
    return response.json()

output = query({
    "image_path": {{ providerInputs.asObj.inputs }},
    "parameters": {"candidate_labels": ["cat", "dog", "llama"]},
}) `}},sh:{curl:{basic:`curl {{ fullUrl }} \\
    -X POST \\
    -H 'Authorization: {{ authorizationHeader }}' \\
    -H 'Content-Type: application/json' \\
{% if billTo %}
    -H 'X-HF-Bill-To: {{ billTo }}' \\
{% endif %}
    -d '{
{{ providerInputs.asCurlString }}
    }'`,basicAudio:`curl {{ fullUrl }} \\
    -X POST \\
    -H 'Authorization: {{ authorizationHeader }}' \\
    -H 'Content-Type: audio/flac' \\
{% if billTo %}
    -H 'X-HF-Bill-To: {{ billTo }}' \\
{% endif %}
    --data-binary @{{ providerInputs.asObj.inputs }}`,basicImage:`curl {{ fullUrl }} \\
    -X POST \\
    -H 'Authorization: {{ authorizationHeader }}' \\
    -H 'Content-Type: image/jpeg' \\
{% if billTo %}
    -H 'X-HF-Bill-To: {{ billTo }}' \\
{% endif %}
    --data-binary @{{ providerInputs.asObj.inputs }}`,conversational:`curl {{ fullUrl }} \\
    -H 'Authorization: {{ authorizationHeader }}' \\
    -H 'Content-Type: application/json' \\
{% if billTo %}
    -H 'X-HF-Bill-To: {{ billTo }}' \\
{% endif %}
    -d '{
{{ autoInputs.asCurlString }},
        "stream": false
    }'`,conversationalStream:`curl {{ fullUrl }} \\
    -H 'Authorization: {{ authorizationHeader }}' \\
    -H 'Content-Type: application/json' \\
{% if billTo %}
    -H 'X-HF-Bill-To: {{ billTo }}' \\
{% endif %}
    -d '{
{{ autoInputs.asCurlString }},
        "stream": true
    }'`,zeroShotClassification:`curl {{ fullUrl }} \\
    -X POST \\
    -d '{"inputs": {{ providerInputs.asObj.inputs }}, "parameters": {"candidate_labels": ["refund", "legal", "faq"]}}' \\
    -H 'Content-Type: application/json' \\
    -H 'Authorization: {{ authorizationHeader }}'
{% if billTo %} \\
    -H 'X-HF-Bill-To: {{ billTo }}'
{% endif %}`}}},mp=(e,t,n)=>{var i,o;const r=(o=(i=mx[e])==null?void 0:i[t])==null?void 0:o[n];if(!r)throw new Error(`Template not found: ${e}/${t}/${n}`);return a=>new wv(r).render({...a})};mp("python","huggingface_hub","importInferenceClient");mp("python","requests","importRequests");class fx{constructor(){C(this,"hf",null);C(this,"documents",[]);C(this,"initialized",!1);C(this,"model","sentence-transformers/all-MiniLM-L6-v2");const t={VITE_OPENROUTER_API_KEY:"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",VITE_OPENROUTER_MODEL:"meta-llama/llama-3.2-3b-instruct:free",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1}.VITE_HUGGINGFACE_TOKEN||{VITE_OPENROUTER_API_KEY:"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",VITE_OPENROUTER_MODEL:"meta-llama/llama-3.2-3b-instruct:free",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1}.REACT_APP_HUGGINGFACE_TOKEN;t?this.hf=new Sy(t):console.warn("HuggingFace token not found. RAG will use fallback similarity.")}async initialize(){if(!this.initialized){if(this.loadComponentDocuments(),this.loadFrameworkPatterns(),this.loadTailwindPatterns(),this.hf)try{await this.generateEmbeddings(),console.log("✅ RAG Service initialized with HuggingFace embeddings")}catch(t){console.warn("⚠️ HuggingFace embeddings failed, using fallback similarity:",t)}else console.log("📝 RAG Service initialized with fallback similarity");this.initialized=!0}}async search(t,n,r=5){this.initialized||await this.initialize();const i=await this.getEmbedding(t),o=[];for(const a of this.documents){if(a.framework&&a.framework!==n)continue;let s=0;i&&a.embedding?s=this.cosineSimilarity(i,a.embedding):s=this.keywordSimilarity(t,a.content,a.tags),s>.1&&o.push({document:a,similarity:s})}return o.sort((a,s)=>s.similarity-a.similarity).slice(0,r)}async getContext(t,n){const r=await this.search(t,n),i={relevantExamples:[],frameworkPatterns:[],tailwindPatterns:[],usedRAG:r.length>0};for(const o of r){const{document:a}=o;switch(a.category){case"component":i.relevantExamples.push(a.content);break;case"framework":i.frameworkPatterns.push(a.content);break;case"tailwind":i.tailwindPatterns.push(a.content);break;case"pattern":a.framework===n?i.frameworkPatterns.push(a.content):i.relevantExamples.push(a.content);break}}return i}loadComponentDocuments(){const t=[{id:"button-magnetic",content:`Magnetic Button: Interactive button that follows cursor movement
        - Uses useRef and useEffect for DOM manipulation
        - Calculates mouse position relative to button center
        - Applies transform with deltaX/deltaY for smooth following
        - Resets position on mouse leave
        - Uses transition-all duration-300 for smooth animations`,category:"component",tags:["button","interactive","magnetic","cursor","hover"]},{id:"card-glowing",content:`Glowing Card: Card with mouse-tracking glow effect
        - Uses CSS custom properties (--mouse-x, --mouse-y)
        - Radial gradient that follows mouse position
        - Layered background effects with opacity transitions
        - Relative positioning with z-index for proper layering`,category:"component",tags:["card","glow","hover","mouse","gradient"]},{id:"input-minimal",content:`Minimal Input: Clean input field with focus animations
        - Controlled component with useState
        - Border-bottom styling instead of full border
        - Animated underline that expands on focus
        - Placeholder text with proper contrast`,category:"component",tags:["input","form","minimal","animation","focus"]},{id:"modal-overlay",content:`Modal Component: Accessible modal dialog
        - Portal rendering outside main DOM tree
        - Backdrop click to close functionality
        - Focus trap for accessibility
        - Escape key handling
        - Body scroll lock when open
        - Animation transitions for smooth appearance`,category:"component",tags:["modal","dialog","overlay","accessibility","portal"]},{id:"navbar-responsive",content:`Navigation Bar: Responsive navigation component
        - Mobile hamburger menu with smooth transitions
        - Logo and brand positioning
        - Active link highlighting
        - Dropdown menu support
        - Sticky/fixed positioning options`,category:"component",tags:["navigation","navbar","responsive","menu","mobile"]},{id:"header-hero",content:`Header/Hero Section: Landing page header
        - Large typography with gradient text
        - Call-to-action buttons
        - Background images or gradients
        - Responsive text sizing
        - Animation on scroll/load`,category:"component",tags:["header","hero","landing","typography","cta"]}];this.documents.push(...t)}loadFrameworkPatterns(){const t=[{id:"react-hooks",content:`React Hooks Patterns:
        - useState for component state: const [state, setState] = useState(initialValue)
        - useEffect for side effects: useEffect(() => { /* effect */ }, [dependencies])
        - useRef for DOM references: const ref = useRef<HTMLElement>(null)
        - Custom hooks for reusable logic
        - Cleanup functions in useEffect return
        - Dependency arrays for optimization`,category:"framework",framework:"react",tags:["hooks","state","effects","refs"]},{id:"vue-composition",content:`Vue 3 Composition API Patterns:
        - ref() for reactive state: const count = ref(0)
        - onMounted() for lifecycle: onMounted(() => { /* setup */ })
        - computed() for derived state: const doubled = computed(() => count.value * 2)
        - Template refs: const el = ref()
        - Event handling: @click="handler"
        - v-model for two-way binding`,category:"framework",framework:"vue",tags:["composition-api","reactivity","lifecycle","templates"]},{id:"svelte-syntax",content:`Svelte Patterns:
        - Reactive declarations: $: doubled = count * 2
        - Event handling: on:click={handler}
        - Binding: bind:value={name}
        - onMount for lifecycle: onMount(() => { /* setup */ })
        - Stores for global state: writable(), readable()
        - Transitions: transition:fade`,category:"framework",framework:"svelte",tags:["reactivity","binding","lifecycle","stores"]},{id:"angular-component",content:`Angular Component Patterns:
        - @Component decorator with template and styles
        - Property binding: [property]="value"
        - Event binding: (click)="handler($event)"
        - ngOnInit for initialization
        - Dependency injection in constructor
        - Template reference variables: #ref`,category:"framework",framework:"angular",tags:["components","decorators","binding","lifecycle"]},{id:"vanilla-js",content:`Vanilla JavaScript Patterns:
        - Class-based components: class Component { constructor() {} }
        - Event listeners: element.addEventListener('event', handler)
        - DOM manipulation: document.createElement, appendChild
        - Modern ES6+ features: arrow functions, destructuring
        - Template literals for HTML strings
        - Module pattern for organization`,category:"framework",framework:"vanilla",tags:["classes","dom","events","es6","modules"]}];this.documents.push(...t)}loadTailwindPatterns(){const t=[{id:"responsive-design",content:`Tailwind Responsive Design:
        - Mobile first: base styles, then sm:, md:, lg:, xl: breakpoints
        - Grid layouts: grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
        - Flexbox: flex flex-col md:flex-row items-center justify-between
        - Typography: text-sm md:text-base lg:text-lg
        - Spacing: p-4 md:p-6 lg:p-8`,category:"tailwind",tags:["responsive","breakpoints","grid","flex","spacing"]},{id:"colors-gradients",content:`Tailwind Colors and Gradients:
        - Solid colors: bg-blue-500, text-gray-900
        - Gradients: bg-gradient-to-r from-blue-500 to-purple-600
        - Opacity: bg-black/20, text-white/80
        - Hover states: hover:bg-blue-600, hover:text-white
        - Dark mode: dark:bg-gray-900, dark:text-white`,category:"tailwind",tags:["colors","gradients","opacity","hover","dark-mode"]},{id:"animations-transitions",content:`Tailwind Animations and Transitions:
        - Transitions: transition-all duration-300 ease-in-out
        - Transforms: transform hover:scale-105, rotate-45
        - Animations: animate-spin, animate-bounce, animate-pulse
        - Custom animations: animate-[wiggle_1s_ease-in-out_infinite]
        - Motion: motion-safe:animate-bounce for accessibility`,category:"tailwind",tags:["animations","transitions","transforms","motion"]},{id:"layout-positioning",content:`Tailwind Layout and Positioning:
        - Flexbox: flex items-center justify-center, flex-col
        - Grid: grid grid-cols-12, col-span-4
        - Positioning: relative, absolute, fixed, sticky
        - Z-index: z-10, z-50 for layering
        - Overflow: overflow-hidden, overflow-y-auto`,category:"tailwind",tags:["layout","flex","grid","positioning","z-index"]}];this.documents.push(...t)}async generateEmbeddings(){if(this.hf)for(const t of this.documents)try{t.embedding=await this.getEmbedding(t.content),await new Promise(n=>setTimeout(n,100))}catch(n){console.warn(`Failed to generate embedding for document ${t.id}:`,n)}}async getEmbedding(t){if(!this.hf)return console.log("📝 HuggingFace not available, using keyword similarity"),null;try{const n=await this.hf.featureExtraction({model:this.model,inputs:t});return Array.isArray(n)?n:null}catch(n){return console.warn("⚠️ Embedding generation failed, falling back to keyword similarity:",n.message||n),this.hf=null,null}}cosineSimilarity(t,n){if(t.length!==n.length)return 0;let r=0,i=0,o=0;for(let s=0;s<t.length;s++)r+=t[s]*n[s],i+=t[s]*t[s],o+=n[s]*n[s];const a=Math.sqrt(i)*Math.sqrt(o);return a===0?0:r/a}keywordSimilarity(t,n,r){const i=t.toLowerCase().split(/\s+/).filter(u=>u.length>2),a=[...n.toLowerCase().split(/\s+/),...r.map(u=>u.toLowerCase())];let s=0,l=0;for(const u of i){let p=0;for(const w of a)w===u?p=Math.max(p,1):w.includes(u)||u.includes(w)?p=Math.max(p,.7):this.isComponentKeyword(u)&&this.isComponentKeyword(w)&&(p=Math.max(p,.5));p>0&&(s+=p,l++)}const c=l/Math.max(i.length,1),m=s/Math.max(l,1);return c*m}isComponentKeyword(t){return["button","card","input","form","modal","dialog","menu","navbar","navigation","header","footer","sidebar","toggle","switch","spinner","loading","dropdown","tab","accordion","carousel","slider","tooltip","popover","badge","alert","hover","click","animation","responsive","mobile","desktop"].includes(t.toLowerCase())}}const sl=new fx,ll="meta-llama/llama-3.2-3b-instruct:free",hx=["meta-llama/llama-3.2-3b-instruct:free","microsoft/phi-3-mini-128k-instruct:free","google/gemma-2-9b-it:free","qwen/qwen-2-7b-instruct:free"],cl=async(e,t,n,r=.7,i=1e3,o=6e4,a)=>{const s=[n,...hx.filter(l=>l!==n)];for(let l=0;l<s.length;l++){const c=s[l];console.log(`🔄 Trying model ${l+1}/${s.length}: ${c}`);try{const m=await uh.chatCompletion({apiKey:t,model:c,messages:e,temperature:r,maxTokens:i,timeoutMs:o,signal:a});return console.log(`✅ Success with model: ${c}`),m}catch(m){if(console.warn(`❌ Model ${c} failed:`,m.message||m),l===s.length-1)throw new Error(`All models failed. Last error: ${m.message||m}`);continue}}},gx=async(e,t,n,r,i="react")=>{if(console.log("🚀 callOpenRouterAPI called with:"),console.log("  User Input:",e),console.log("  Framework:",i),console.log("  Model:",r),console.log("🔑 API Key Debug - Present:",!!n),console.log("🔑 API Key Debug - Length:",(n==null?void 0:n.length)||0),console.log("🔑 API Key Debug - First 10 chars:",(n==null?void 0:n.substring(0,10))+"..."),!n)return{response:`🔑 **API Key Required**

To use Aura's AI component generator, please:

1. Click the ⚙️ settings icon in the top-right
2. Enter your OpenRouter API key (starts with 'sk-or-')
3. Get a free key at: https://openrouter.ai

Without an API key, I cannot generate components for you.`,componentType:null,usedRAG:!1};try{const o=await sl.getContext(e,i);console.log("🔍 RAG Context:",o.usedRAG?"Enabled":"Disabled");const a=r||ll;let s=`You are an expert ${i} developer who creates beautiful, functional UI components with TypeScript and Tailwind CSS.`;o.usedRAG&&(s+=`

RELEVANT EXAMPLES AND PATTERNS:
${o.relevantExamples.length>0?`
Component Examples:
${o.relevantExamples.join(`

`)}`:""}
${o.frameworkPatterns.length>0?`

Framework Patterns for ${i}:
${o.frameworkPatterns.join(`

`)}`:""}
${o.tailwindPatterns.length>0?`

Tailwind CSS Patterns:
${o.tailwindPatterns.join(`

`)}`:""}

Use these examples as inspiration but adapt them to the specific request. Follow the same coding patterns and best practices shown above.`),s+=`

RESPONSE FORMAT (always use this structure):
**✨ Component Created**
[Brief 1-line description of what you're building]

**🎯 Implementation**
[2-3 bullet points about key features/functionality]

**🚀 Code Generated**
Your custom component is ready to use!

RULES:
- Always generate actual React TypeScript code for any component request
- Use Tailwind CSS for styling
- Include proper TypeScript interfaces
- Make components responsive and accessible
- Keep responses under 150 words total
- Always end with [COMPONENT:custom] to trigger code generation

For ANY component request (header, navbar, footer, modal, etc.), you should:
1. Provide the formatted response above
2. End with [COMPONENT:custom]
3. The system will then generate the actual React code

Examples:
- "Create a website header" → End with [COMPONENT:custom]
- "Make a modal dialog" → End with [COMPONENT:custom]
- "Build a navigation menu" → End with [COMPONENT:custom]

Generate components for ANY request - don't limit yourself to predefined types.`;const l=[{role:"system",content:s},...t.slice(-10).map(S=>({role:S.type==="user"?"user":"assistant",content:S.content})),{role:"user",content:e}],c=await cl(l,n,a,.7,500,6e4);if(console.log("📊 OpenRouter API Response:",c),!c.choices||!c.choices[0]||!c.choices[0].message)throw console.error("❌ Invalid API response structure:",c),new Error("Invalid API response structure");const m=c.choices[0].message.content,u=m.match(/\[COMPONENT:([^\]]+)\]/),p=u?u[1]:null;let w=m.replace(/\[COMPONENT:[^\]]+\]/,"").trim();return w=yx(w,p),{response:w,componentType:p,usedRAG:o.usedRAG}}catch(o){return console.error("OpenRouter API Error:",o),{response:"Sorry, I'm having trouble connecting to my AI brain right now. Please check your API key or try again later.",componentType:null,usedRAG:!1}}},yx=(e,t)=>e.includes("**✨ Component Identified**")||e.includes("**🎯 Design Approach**")?e:t?`**✨ Component Identified**
Creating a ${{"magnetic button":"magnetic button that follows your cursor","glowing card":"glowing card with mouse-tracking effects","minimal input":"minimal input field with focus animations","toggle switch":"toggle switch with smooth animations","loading spinner":"loading spinner with elegant animations"}[t]||t} for enhanced user interaction.

**🎯 Design Approach**
• Clean, modern styling with smooth animations
• Optimized for both desktop and mobile interactions
• Follows accessibility best practices

**🚀 Ready to Build**
Let's create this beautiful component that will elevate your interface!`:`**💡 Design Insight**
${e}

**🎯 Available Components**
I can create these specific components for you:
• Magnetic Button - cursor-following interactive button
• Glowing Card - mouse-tracking hover effects
• Minimal Input - clean form field with animations
• Toggle Switch - smooth on/off control
• Loading Spinner - elegant loading indicator

**🚀 Next Steps**
Choose one of the components above and I'll build it for you!`,vx=async(e,t,n,r,i="react")=>{if(console.log("🚀 Starting custom component generation for:",e),console.log("🔑 API Key present:",!!t),console.log("📊 Process: This will make 5 API calls total (1 React + 4 conversions)"),!t)return console.error("❌ No API key provided"),null;try{console.log("📝 Step 1: Generating React component...");const o=Date.now(),a=await wx(e,t,n,r,i);if(console.log(`✅ React generation completed in ${Date.now()-o}ms`),console.log("📄 React code length:",(a==null?void 0:a.length)||0),!a)return console.error("❌ React generation failed"),null;console.log("🔄 Step 2: Converting to other frameworks...");const s=Date.now(),l=await bx(a,e,t,n,r);return console.log(`✅ All conversions completed in ${Date.now()-s}ms`),console.log("🎯 Total generation time:",Date.now()-o,"ms"),{code:a,preview:kx(e),type:"custom",multiFramework:l}}catch(o){return console.error("Custom component generation failed:",o),null}},wx=async(e,t,n,r,i="react")=>{const o=await sl.getContext(e,i);let a=`Create a React TypeScript component based on this request: "${e}"

REQUIREMENTS:
- Use React with TypeScript
- Use Tailwind CSS for styling
- Make it responsive and accessible
- Include proper interfaces for props
- Export as default
- Make it production-ready`;o.usedRAG&&(a+=`

RELEVANT EXAMPLES AND PATTERNS:
${o.relevantExamples.length>0?`
Component Examples:
${o.relevantExamples.join(`

`)}`:""}
${o.frameworkPatterns.length>0?`

React Patterns:
${o.frameworkPatterns.join(`

`)}`:""}
${o.tailwindPatterns.length>0?`

Tailwind CSS Patterns:
${o.tailwindPatterns.join(`

`)}`:""}

Use these examples as inspiration and follow the same coding patterns and best practices.`),a+=`

Return ONLY the complete React component code, no explanations or markdown formatting.`;try{const l=await cl([{role:"user",content:a}],t,n||ll,.3,2e3,9e4,r);if(console.log("📊 React Generation API Response:",l),!l.choices||!l.choices[0]||!l.choices[0].message)throw console.error("❌ Invalid React generation API response:",l),new Error("Invalid API response structure");const c=l.choices[0].message.content.trim();return fp(c)}catch(s){return console.error("❌ React generation failed:",s),null}},bx=async(e,t,n,r,i)=>{const o=[{id:"vue",name:"Vue 3",extension:"vue"},{id:"svelte",name:"Svelte",extension:"svelte"},{id:"angular",name:"Angular",extension:"ts"},{id:"vanilla",name:"Vanilla JavaScript",extension:"js"}],a={react:{code:e,extension:"tsx",language:"typescript"}},s=o.map(async l=>{try{const c=await xx(e,l,t,n,r,i);c&&(a[l.id]={code:c,extension:l.extension,language:l.id==="vanilla"?"javascript":"typescript"})}catch(c){console.error(`Failed to convert to ${l.name}:`,c),a[l.id]={code:`// Conversion to ${l.name} failed.
// Error: ${(c==null?void 0:c.message)||c}
// You can try regenerating or manually adapt the React version.`,extension:l.extension,language:l.id==="vanilla"?"javascript":"typescript"}}});return await Promise.allSettled(s),a},xx=async(e,t,n,r,i,o)=>{const a={vue:`Convert this React component to Vue 3 with Composition API and TypeScript:

${e}

REQUIREMENTS:
- Use Vue 3 Composition API with <script setup lang="ts">
- Convert all React hooks to Vue equivalents (useState → ref, useEffect → onMounted, etc.)
- Use proper Vue template syntax
- Include <style scoped> if needed
- Make it functionally identical to the React version
- Use proper TypeScript interfaces

Return ONLY the complete Vue component code.`,svelte:`Convert this React component to Svelte with TypeScript:

${e}

REQUIREMENTS:
- Use <script lang="ts"> for TypeScript
- Convert React hooks to Svelte equivalents (useState → let variables, useEffect → onMount, etc.)
- Use Svelte's reactive syntax ($:) where appropriate
- Use proper Svelte event handling (on:click, etc.)
- Make it functionally identical to the React version
- Include proper TypeScript interfaces

Return ONLY the complete Svelte component code.`,angular:`Convert this React component to Angular with TypeScript:

${e}

REQUIREMENTS:
- Use Angular component with @Component decorator
- Convert React hooks to Angular equivalents (useState → properties, useEffect → ngOnInit/ngOnDestroy)
- Use Angular template syntax with proper event binding
- Include proper TypeScript interfaces
- Use Angular lifecycle hooks appropriately
- Make it functionally identical to the React version

Return ONLY the complete Angular component code.`,vanilla:`Convert this React component to Vanilla JavaScript:

${e}

REQUIREMENTS:
- Use modern ES6+ JavaScript (no frameworks)
- Create a class-based component or function-based approach
- Use DOM manipulation for all interactions
- Include proper event listeners and cleanup
- Make it functionally identical to the React version
- Use modern JavaScript features (classes, arrow functions, etc.)

Return ONLY the complete Vanilla JavaScript code.`};try{const s=i||ll,l=await cl([{role:"user",content:a[t.id]}],r,s,.2,2e3,9e4,o);if(console.log(`📊 ${t.name} Conversion API Response:`,l),!l.choices||!l.choices[0]||!l.choices[0].message)throw console.error(`❌ Invalid ${t.name} conversion API response:`,l),new Error("Invalid API response structure");const c=l.choices[0].message.content.trim();return fp(c)}catch(s){return console.error(`❌ Conversion to ${t.name} failed:`,s),null}},kx=e=>{const t=e.toLowerCase();return t.includes("button")?"button":t.includes("card")?"card":t.includes("input")||t.includes("form")?"form":t.includes("modal")||t.includes("dialog")?"modal":t.includes("header")?"header":t.includes("navbar")||t.includes("navigation")?"navbar":t.includes("footer")?"footer":t.includes("sidebar")?"sidebar":t.includes("menu")?"menu":t.includes("table")?"table":t.includes("carousel")||t.includes("slider")?"carousel":t.includes("tab")?"tabs":t.includes("accordion")?"accordion":t.includes("dropdown")?"dropdown":"component"};function fp(e){let t=e.trim();const n=t.match(/^```[a-zA-Z0-9]*\n([\s\S]*?)\n```\s*$/);return n&&(t=n[1]),t=t.replace(/^```+\s*/,"").replace(/\s*```+$/,""),t=t.replace(/\r\n/g,`
`),t.trim()}class vr extends Error{constructor(t,n,r){super(t),this.frameworkId=n,this.operation=r,this.name="FrameworkError"}}class ri{constructor(t="dark"){C(this,"theme","dark");this.theme=t}escapeHtml(t){const n=document.createElement("div");return n.textContent=t,n.innerHTML}wrapWithSpan(t,n){return`<span class="${n}">${t}</span>`}highlightKeywords(t,n){let r=t;return n.forEach(i=>{const o=new RegExp(`\\b${i}\\b`,"g");r=r.replace(o,this.wrapWithSpan(i,"keyword"))}),r}highlightStrings(t){return t.replace(/"([^"\\]|\\.)*"/g,n=>this.wrapWithSpan(n,"string")).replace(/'([^'\\]|\\.)*'/g,n=>this.wrapWithSpan(n,"string")).replace(/`([^`\\]|\\.)*`/g,n=>this.wrapWithSpan(n,"template-string"))}highlightComments(t){return t.replace(/\/\/.*$/gm,n=>this.wrapWithSpan(n,"comment")).replace(/\/\*[\s\S]*?\*\//g,n=>this.wrapWithSpan(n,"comment"))}highlightNumbers(t){return t.replace(/\b\d+(\.\d+)?\b/g,n=>this.wrapWithSpan(n,"number"))}}class _x extends ri{constructor(){super(...arguments);C(this,"supportedLanguages",["typescript","tsx","javascript","jsx"]);C(this,"reactKeywords",["useState","useEffect","useCallback","useMemo","useRef","useContext","useReducer","useLayoutEffect","useImperativeHandle","useDebugValue","React","Component","PureComponent","Fragment","StrictMode","Suspense","lazy","memo","forwardRef","createContext","createRef"]);C(this,"typescriptKeywords",["interface","type","enum","namespace","module","declare","abstract","implements","extends","public","private","protected","readonly","static","async","await","keyof","typeof","as"]);C(this,"jsKeywords",["const","let","var","function","return","if","else","for","while","do","switch","case","default","break","continue","try","catch","finally","throw","new","this","super","class","extends","import","export","from","default","null","undefined","true","false"])}highlight(n){let r=this.escapeHtml(n);return r=this.highlightJSXTags(r),r=this.highlightKeywords(r,this.reactKeywords),r=this.highlightKeywords(r,this.typescriptKeywords),r=this.highlightKeywords(r,this.jsKeywords),r=this.highlightStrings(r),r=this.highlightComments(r),r=this.highlightNumbers(r),r=this.highlightJSXProps(r),r}highlightJSXTags(n){return n.replace(/<\/?([A-Z][a-zA-Z0-9]*)/g,(r,i)=>`<${r.startsWith("</")?"/":""}${this.wrapWithSpan(i,"jsx-component")}`).replace(/<\/?([a-z][a-zA-Z0-9-]*)/g,(r,i)=>`<${r.startsWith("</")?"/":""}${this.wrapWithSpan(i,"jsx-element")}`)}highlightJSXProps(n){return n.replace(/\s([a-zA-Z-]+)=/g,(r,i)=>` ${this.wrapWithSpan(i,"jsx-prop")}=`)}}class Sx extends ri{constructor(){super(...arguments);C(this,"supportedLanguages",["vue","typescript","javascript"]);C(this,"vueKeywords",["ref","reactive","computed","watch","watchEffect","onMounted","onUnmounted","onUpdated","onBeforeMount","onBeforeUnmount","onBeforeUpdate","defineComponent","defineProps","defineEmits","defineExpose","withDefaults","toRef","toRefs","unref","isRef"]);C(this,"vueDirectives",["v-if","v-else","v-else-if","v-for","v-show","v-bind","v-on","v-model","v-slot","v-pre","v-once","v-memo","v-cloak","v-html","v-text"]);C(this,"typescriptKeywords",["interface","type","enum","namespace","module","declare","abstract","implements","extends","public","private","protected","readonly","static","async","await","keyof","typeof","as"]);C(this,"jsKeywords",["const","let","var","function","return","if","else","for","while","do","switch","case","default","break","continue","try","catch","finally","throw","new","this","super","class","extends","import","export","from","default","null","undefined","true","false"])}highlight(n){let r=this.escapeHtml(n);return this.isVueSFC(n)?r=this.highlightVueSFC(r):r=this.highlightVueScript(r),r}isVueSFC(n){return n.includes("<template>")||n.includes("<script>")||n.includes("<style>")}highlightVueSFC(n){let r=n;return r=r.replace(/<(template|script|style)([^>]*)>/g,(i,o,a)=>`<${this.wrapWithSpan(o,"vue-sfc-tag")}${a}>`).replace(/<\/(template|script|style)>/g,(i,o)=>`</${this.wrapWithSpan(o,"vue-sfc-tag")}>`),r=this.highlightVueDirectives(r),r=this.highlightKeywords(r,this.vueKeywords),r=this.highlightKeywords(r,this.typescriptKeywords),r=this.highlightKeywords(r,this.jsKeywords),r=this.highlightStrings(r),r=this.highlightComments(r),r=this.highlightNumbers(r),r}highlightVueScript(n){let r=n;return r=this.highlightKeywords(r,this.vueKeywords),r=this.highlightKeywords(r,this.typescriptKeywords),r=this.highlightKeywords(r,this.jsKeywords),r=this.highlightStrings(r),r=this.highlightComments(r),r=this.highlightNumbers(r),r}highlightVueDirectives(n){let r=n;return this.vueDirectives.forEach(i=>{const o=new RegExp(`\\b${i}\\b`,"g");r=r.replace(o,this.wrapWithSpan(i,"vue-directive"))}),r=r.replace(/:([a-zA-Z-]+)/g,(i,o)=>`:${this.wrapWithSpan(o,"vue-directive")}`).replace(/@([a-zA-Z-]+)/g,(i,o)=>`@${this.wrapWithSpan(o,"vue-directive")}`),r}}class Cx extends ri{constructor(){super(...arguments);C(this,"supportedLanguages",["svelte","typescript","javascript"]);C(this,"svelteKeywords",["onMount","onDestroy","beforeUpdate","afterUpdate","tick","createEventDispatcher","getContext","setContext","hasContext","getAllContexts","SvelteComponent","SvelteComponentTyped"]);C(this,"svelteDirectives",["bind:","on:","use:","transition:","in:","out:","animate:","class:","style:"]);C(this,"svelteBlocks",["#if","#each","#await","#key",":else",":then",":catch","/if","/each","/await","/key"]);C(this,"typescriptKeywords",["interface","type","enum","namespace","module","declare","abstract","implements","extends","public","private","protected","readonly","static","async","await","keyof","typeof","as"]);C(this,"jsKeywords",["const","let","var","function","return","if","else","for","while","do","switch","case","default","break","continue","try","catch","finally","throw","new","this","super","class","extends","import","export","from","default","null","undefined","true","false"])}highlight(n){let r=this.escapeHtml(n);return r=this.highlightReactiveStatements(r),r=this.highlightSvelteBlocks(r),r=this.highlightSvelteDirectives(r),r=this.highlightKeywords(r,this.svelteKeywords),r=this.highlightKeywords(r,this.typescriptKeywords),r=this.highlightKeywords(r,this.jsKeywords),r=this.highlightStrings(r),r=this.highlightComments(r),r=this.highlightNumbers(r),r=this.highlightScriptStyleTags(r),r}highlightReactiveStatements(n){return n.replace(/^\s*\$:/gm,r=>this.wrapWithSpan(r.trim(),"svelte-reactive"))}highlightSvelteBlocks(n){let r=n;return this.svelteBlocks.forEach(i=>{const o=new RegExp(`{${i}`,"g");r=r.replace(o,`{${this.wrapWithSpan(i,"svelte-block")}`)}),r}highlightSvelteDirectives(n){let r=n;return this.svelteDirectives.forEach(i=>{const o=new RegExp(`\\b${i}([a-zA-Z0-9_-]+)`,"g");r=r.replace(o,(a,s)=>`${this.wrapWithSpan(i,"svelte-directive")}${s}`)}),r=r.replace(/\\bslot\\b/g,this.wrapWithSpan("slot","svelte-directive")).replace(/\\blet:([a-zA-Z0-9_-]+)/g,(i,o)=>`${this.wrapWithSpan("let:","svelte-directive")}${o}`),r}highlightScriptStyleTags(n){return n.replace(/<(script|style)([^>]*)>/g,(r,i,o)=>`<${this.wrapWithSpan(i,"svelte-tag")}${o}>`).replace(/<\/(script|style)>/g,(r,i)=>`</${this.wrapWithSpan(i,"svelte-tag")}>`)}}class Ax extends ri{constructor(){super(...arguments);C(this,"supportedLanguages",["typescript","html"]);C(this,"angularKeywords",["Component","Injectable","Directive","Pipe","NgModule","Input","Output","ViewChild","ViewChildren","ContentChild","ContentChildren","HostBinding","HostListener","OnInit","OnDestroy","OnChanges","DoCheck","AfterContentInit","AfterContentChecked","AfterViewInit","AfterViewChecked","EventEmitter"]);C(this,"angularDirectives",["*ngFor","*ngIf","ngClass","ngStyle","ngModel","ngSubmit","ngClick","routerLink","routerOutlet","ngContainer","ngTemplate","ngContent"]);C(this,"decorators",["@Component","@Injectable","@Directive","@Pipe","@NgModule","@Input","@Output","@ViewChild","@ViewChildren","@ContentChild","@ContentChildren","@HostBinding","@HostListener","@Inject","@Optional","@Self","@SkipSelf"]);C(this,"typescriptKeywords",["interface","type","enum","namespace","module","declare","abstract","implements","extends","public","private","protected","readonly","static","async","await","keyof","typeof","as"]);C(this,"jsKeywords",["const","let","var","function","return","if","else","for","while","do","switch","case","default","break","continue","try","catch","finally","throw","new","this","super","class","extends","import","export","from","default","null","undefined","true","false"])}highlight(n){let r=this.escapeHtml(n);return r=this.highlightDecorators(r),r=this.highlightAngularDirectives(r),r=this.highlightKeywords(r,this.angularKeywords),r=this.highlightKeywords(r,this.typescriptKeywords),r=this.highlightKeywords(r,this.jsKeywords),r=this.highlightStrings(r),r=this.highlightComments(r),r=this.highlightNumbers(r),r=this.highlightTemplateSyntax(r),r}highlightDecorators(n){let r=n;return this.decorators.forEach(i=>{const o=new RegExp(`\\${i}\\b`,"g");r=r.replace(o,this.wrapWithSpan(i,"angular-decorator"))}),r}highlightAngularDirectives(n){let r=n;return this.angularDirectives.forEach(i=>{const o=new RegExp(`\\b${i}\\b`,"g");r=r.replace(o,this.wrapWithSpan(i,"angular-directive"))}),r}highlightTemplateSyntax(n){return n.replace(/{{([^}]+)}}/g,(r,i)=>`{{${this.wrapWithSpan(i,"angular-interpolation")}}}`).replace(/\[([a-zA-Z-]+)\]/g,(r,i)=>`[${this.wrapWithSpan(i,"angular-property-binding")}]`).replace(/\(([a-zA-Z-]+)\)/g,(r,i)=>`(${this.wrapWithSpan(i,"angular-event-binding")})`).replace(/\[\(([a-zA-Z-]+)\)\]/g,(r,i)=>`[(${this.wrapWithSpan(i,"angular-two-way-binding")})]`).replace(/#([a-zA-Z0-9_-]+)/g,(r,i)=>`#${this.wrapWithSpan(i,"angular-template-ref")}`)}}class Ex extends ri{constructor(){super(...arguments);C(this,"supportedLanguages",["javascript","js"]);C(this,"jsKeywords",["const","let","var","function","return","if","else","for","while","do","switch","case","default","break","continue","try","catch","finally","throw","new","this","super","class","extends","import","export","from","default","null","undefined","true","false","typeof","instanceof","in","of","delete","void","with","debugger"]);C(this,"es6Keywords",["async","await","yield","Symbol","Promise","Map","Set","WeakMap","WeakSet","Proxy","Reflect","ArrayBuffer","DataView","Int8Array","Uint8Array","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array","BigInt","BigInt64Array","BigUint64Array"]);C(this,"domMethods",["document","window","console","localStorage","sessionStorage","getElementById","getElementsByClassName","getElementsByTagName","querySelector","querySelectorAll","createElement","appendChild","removeChild","insertBefore","replaceChild","addEventListener","removeEventListener","dispatchEvent","preventDefault","stopPropagation","setTimeout","setInterval","clearTimeout","clearInterval","fetch","XMLHttpRequest","FormData","URLSearchParams","URL","Blob","File","FileReader","Worker","ServiceWorker","WebSocket","EventSource"]);C(this,"builtInObjects",["Array","Object","String","Number","Boolean","Date","RegExp","Error","TypeError","ReferenceError","SyntaxError","RangeError","EvalError","URIError","JSON","Math","parseInt","parseFloat","isNaN","isFinite","encodeURI","decodeURI","encodeURIComponent","decodeURIComponent","eval"])}highlight(n){let r=this.escapeHtml(n);return r=this.highlightKeywords(r,this.jsKeywords),r=this.highlightKeywords(r,this.es6Keywords),r=this.highlightKeywords(r,this.domMethods),r=this.highlightKeywords(r,this.builtInObjects),r=this.highlightStrings(r),r=this.highlightComments(r),r=this.highlightNumbers(r),r=this.highlightRegex(r),r=this.highlightArrowFunctions(r),r=this.highlightDestructuring(r),r}highlightRegex(n){return n.replace(/\/(?![*/])([^/\n\\]|\\.)+\/[gimuy]*/g,r=>this.wrapWithSpan(r,"regex"))}highlightArrowFunctions(n){return n.replace(/=>/g,r=>this.wrapWithSpan(r,"arrow-function"))}highlightDestructuring(n){return n.replace(/const\s*{([^}]+)}/g,(r,i)=>`const {${this.wrapWithSpan(i,"destructuring")}}`).replace(/const\s*\[([^\]]+)\]/g,(r,i)=>`const [${this.wrapWithSpan(i,"destructuring")}]`)}}class ii{extractImports(t){const n=[],r=/import\s+(?:{[^}]+}|\*\s+as\s+\w+|\w+)?\s*from\s+['"]([^'"]+)['"]/g;let i;for(;(i=r.exec(t))!==null;)n.push(i[1]);return n}extractExports(t){const n=[],r=/export\s+(?:default\s+)?(?:const|let|var|function|class)\s+(\w+)/g;let i;for(;(i=r.exec(t))!==null;)n.push(i[1]);return n}validateSyntax(t){try{const n={"(":0,"[":0,"{":0},r={")":"(","]":"[","}":"{"};for(const i of t)if(i in n)n[i]++;else if(i in r){const o=r[i];if(n[o]--,n[o]<0)return!1}return Object.values(n).every(i=>i===0)}catch{return!1}}processTemplate(t,n){let r=t;return Object.entries(n).forEach(([i,o])=>{const a=new RegExp(`{{\\s*${i}\\s*}}`,"g");r=r.replace(a,String(o))}),r}minifyCode(t){return t.replace(/\/\*[\s\S]*?\*\//g,"").replace(/\/\/.*$/gm,"").replace(/\s+/g," ").trim()}formatCode(t){let n=t,r=0;return n.split(`
`).map(a=>{const s=a.trim();if(!s)return"";s.includes("}")&&r--;const l="  ".repeat(Math.max(0,r))+s;return s.includes("{")&&r++,l}).join(`
`)}}class Ix extends ii{process(t,n){let r=t.code;return n&&(r=this.processTemplate(r,n),n.componentName&&(r=this.updateComponentName(r,n.componentName))),r}validate(t){if(!t.code||typeof t.code!="string")return!1;const n=t.code.includes("import")&&(t.code.includes("react")||t.code.includes("React")),r=t.code.includes("function")||t.code.includes("const")||t.code.includes("class"),i=t.code.includes("<")&&t.code.includes(">"),o=t.code.includes("export");return this.validateSyntax(t.code)&&(n||r)&&i&&o}getRequiredImports(t){const n=this.extractImports(t.code),r=["react"];return["useState","useEffect","useCallback","useMemo","useRef"].forEach(o=>{t.code.includes(o)&&!n.some(a=>a.includes(o))&&r.push(`react (${o})`)}),t.language==="typescript"&&t.code.includes("React.")&&r.push("@types/react"),Array.from(new Set([...n,...r]))}updateComponentName(t,n){return t=t.replace(/export\s+(?:default\s+)?function\s+\w+/g,`export default function ${n}`),t=t.replace(/export\s+(?:default\s+)?const\s+\w+\s*=/g,`export default const ${n} =`),t=t.replace(/export\s+(?:default\s+)?class\s+\w+/g,`export default class ${n}`),t}processProps(t,n){let r=t;if(t.includes("interface")&&Object.keys(n).length>0){const i=Object.entries(n).map(([o,a])=>`  ${o}: ${typeof a};`).join(`
`);r=r.replace(/interface\s+\w+Props\s*{[^}]*}/,`interface Props {
${i}
}`)}return r}addHooks(t,n){const r=/import\s+(?:{[^}]+}|\w+)\s+from\s+['"]react['"]/,i=t.match(r);if(i){const o=i[0],a=n.filter(s=>!o.includes(s));if(a.length>0){const s=o.replace(/import\s+{([^}]+)}/,`import { $1, ${a.join(", ")} }`);t=t.replace(o,s)}}return t}}class Tx extends ii{process(t,n){let r=t.code;return n&&(r=this.processTemplate(r,n),n.componentName&&(r=this.updateComponentName(r,n.componentName))),r}validate(t){if(!t.code||typeof t.code!="string")return!1;const n=t.code.includes("<template>"),r=t.code.includes("<script"),i=n&&r,o=t.code.includes("vue")||t.code.includes("defineComponent");return this.validateSyntax(t.code)&&(i||o)}getRequiredImports(t){const n=this.extractImports(t.code),r=["vue"];return["ref","reactive","computed","watch","watchEffect","onMounted","onUnmounted","onUpdated"].forEach(o=>{t.code.includes(o)&&!n.some(a=>a.includes(o))&&r.push(`vue (${o})`)}),Array.from(new Set([...n,...r]))}updateComponentName(t,n){return t=t.replace(/name:\s*['"][^'"]*['"]/g,`name: '${n}'`),t=t.replace(/export\s+default\s+defineComponent\(/g,"export default defineComponent("),t}processSFC(t){const n=t.match(/<template>([\s\S]*?)<\/template>/),r=t.match(/<script[^>]*>([\s\S]*?)<\/script>/),i=t.match(/<style[^>]*>([\s\S]*?)<\/style>/);return{template:n?n[1].trim():"",script:r?r[1].trim():"",style:i?i[1].trim():""}}addCompositionAPI(t,n){const r=/import\s+(?:{[^}]+}|\w+)\s+from\s+['"]vue['"]/,i=t.match(r);if(i){const o=i[0],a=n.filter(s=>!o.includes(s));if(a.length>0){const s=o.replace(/import\s+{([^}]+)}/,`import { $1, ${a.join(", ")} }`);t=t.replace(o,s)}}return t}processDirectives(t,n){let r=t;return Object.entries(n).forEach(([i,o])=>{const a=new RegExp(`v-${i}="[^"]*"`,"g");r=r.replace(a,`v-${i}="${o}"`)}),r}}class Rx extends ii{process(t,n){let r=t.code;return n&&(r=this.processTemplate(r,n),n.componentName&&(r=this.addComponentComment(r,n.componentName))),r}validate(t){if(!t.code||typeof t.code!="string")return!1;const n=t.code.includes("<script>")||t.code.includes('<script lang="ts">'),r=t.code.includes("$:")||t.code.includes("on:")||t.code.includes("bind:")||t.code.includes("{#")||t.code.includes("import")&&t.code.includes("svelte");return this.validateSyntax(t.code)&&(n||r)}getRequiredImports(t){const n=this.extractImports(t.code),r=[];return["onMount","onDestroy","beforeUpdate","afterUpdate","tick"].forEach(o=>{t.code.includes(o)&&!n.some(a=>a.includes(o))&&r.push(`svelte (${o})`)}),(t.code.includes("writable")||t.code.includes("readable")||t.code.includes("derived"))&&r.push("svelte/store"),t.code.includes("createEventDispatcher")&&r.push("svelte (createEventDispatcher)"),Array.from(new Set([...n,...r]))}addComponentComment(t,n){return`<!-- ${n} Component -->
${t}`}processReactiveStatements(t,n){let r=t;return n.forEach(i=>{if(!r.includes(`$: ${i}`)){const o=r.match(/(<script[^>]*>)([\s\S]*?)(<\/script>)/);if(o){const[,a,s,l]=o,c=`${s}
  $: ${i}`;r=r.replace(o[0],`${a}${c}${l}`)}}}),r}processStores(t,n){let r=t;return Object.entries(n).forEach(([i,o])=>{if(!r.includes(`${i} =`)){r.includes("svelte/store")||(r=`import { ${o} } from 'svelte/store';
${r}`);const a=r.match(/(<script[^>]*>)([\s\S]*?)(<\/script>)/);if(a){const[,s,l,c]=a,m=`${l}
  const ${i} = ${o}();`;r=r.replace(a[0],`${s}${m}${c}`)}}}),r}processBindings(t,n){let r=t;return Object.entries(n).forEach(([i,o])=>{const a=new RegExp(`<${i}([^>]*)>`,"g");r=r.replace(a,(s,l)=>l.includes("bind:")?s:`<${i}${l} bind:value={${o}}>`)}),r}processTransitions(t,n){let r=t;return Object.entries(n).forEach(([i,o])=>{const a=new RegExp(`<${i}([^>]*)>`,"g");r=r.replace(a,(s,l)=>l.includes("transition:")?s:`<${i}${l} transition:${o}>`)}),r}}class Px extends ii{process(t,n){let r=t.code;return n&&(r=this.processTemplate(r,n),n.componentName&&(r=this.updateComponentName(r,n.componentName))),r}validate(t){if(!t.code||typeof t.code!="string")return!1;const n=t.code.includes("@angular/core")||t.code.includes("@Component")||t.code.includes("@Injectable")||t.code.includes("@Directive"),r=t.code.includes("@Component")||t.code.includes("@Injectable")||t.code.includes("@Directive")||t.code.includes("@Pipe"),i=t.code.includes("class")&&t.code.includes("export");return this.validateSyntax(t.code)&&n&&r&&i}getRequiredImports(t){const n=this.extractImports(t.code),r=["@angular/core"];return["Component","Injectable","Directive","Pipe","Input","Output","ViewChild","ViewChildren","ContentChild","ContentChildren"].forEach(a=>{t.code.includes(`@${a}`)&&!n.some(s=>s.includes("@angular/core"))&&r.push(`@angular/core (${a})`)}),["OnInit","OnDestroy","OnChanges","DoCheck","AfterContentInit","AfterContentChecked","AfterViewInit","AfterViewChecked"].forEach(a=>{t.code.includes(a)&&r.push(`@angular/core (${a})`)}),(t.code.includes("FormBuilder")||t.code.includes("FormGroup"))&&r.push("@angular/forms"),t.code.includes("HttpClient")&&r.push("@angular/common/http"),(t.code.includes("Router")||t.code.includes("ActivatedRoute"))&&r.push("@angular/router"),Array.from(new Set([...n,...r]))}updateComponentName(t,n){return t=t.replace(/export\s+class\s+\w+Component/g,`export class ${n}Component`),t=t.replace(/selector:\s*['"][^'"]*['"]/g,`selector: 'app-${n.toLowerCase()}'`),t}processComponent(t,n){let r=t;const i=r.match(/@Component\({([^}]+)}\)/);if(i){let o=i[1];Object.entries(n).forEach(([a,s])=>{if(s!==void 0){const l=new RegExp(`${a}:\\s*[^,}]+`,"g"),c=Array.isArray(s)?`${a}: [${s.map(m=>`'${m}'`).join(", ")}]`:`${a}: '${s}'`;o.includes(`${a}:`)?o=o.replace(l,c):o+=`,
  ${c}`}}),r=r.replace(i[0],`@Component({${o}})`)}return r}addLifecycleHooks(t,n){let r=t;return n.forEach(i=>{if(!r.includes(`${i}(`)){if(!r.includes(i)){const s=r.match(/import\s+{([^}]+)}\s+from\s+['"]@angular\/core['"]/);if(s){const c=`${s[1]}, ${i}`;r=r.replace(s[0],`import { ${c} } from '@angular/core'`)}}const o=r.match(/export\s+class\s+(\w+)(?:\s+implements\s+([^{]+))?/);if(o){const[s,l,c]=o,m=c?`${c}, ${i}`:i;r=r.replace(s,`export class ${l} implements ${m}`)}const a=r.match(/(export\s+class\s+\w+[^{]*{)([\s\S]*)(}$)/);if(a){const[,s,l,c]=a,u=`

  ${i.replace(/^On/,"").toLowerCase()}(): void {
    // TODO: Implement ${i}
  }`;r=`${s}${l}${u}
${c}`}}}),r}processServices(t,n){let r=t;return n.forEach(i=>{if(!r.includes(i)){const o=r.match(/constructor\(([^)]*)\)/);if(o){const a=o[1].trim(),s=`private ${i.toLowerCase()}: ${i}`,l=a?`${a}, ${s}`:s;r=r.replace(o[0],`constructor(${l})`)}else{const a=r.match(/(export\s+class\s+\w+[^{]*{)([\s\S]*)(}$)/);if(a){const[,s,l,c]=a,m=`

  constructor(private ${i.toLowerCase()}: ${i}) {}`;r=`${s}${l}${m}
${c}`}}}}),r}}class Nx extends ii{process(t,n){let r=t.code;return n&&(r=this.processTemplate(r,n),n.componentName&&(r=this.updateComponentName(r,n.componentName))),r}validate(t){if(!t.code||typeof t.code!="string")return!1;const n=t.code.includes("function")||t.code.includes("=>")||t.code.includes("class"),r=t.code.includes("document")||t.code.includes("getElementById")||t.code.includes("querySelector")||t.code.includes("createElement");return this.validateSyntax(t.code)&&(n||r)}getRequiredImports(t){const n=this.extractImports(t.code),r=[];return t.code.includes("fetch(")&&r.push("fetch polyfill (if supporting older browsers)"),t.code.includes("Promise")&&r.push("Promise polyfill (if supporting older browsers)"),(t.code.includes("async")||t.code.includes("await"))&&r.push("async/await polyfill (if supporting older browsers)"),t.code.includes("WebSocket")&&r.push("WebSocket API"),t.code.includes("Worker")&&r.push("Web Workers API"),(t.code.includes("localStorage")||t.code.includes("sessionStorage"))&&r.push("Web Storage API"),Array.from(new Set([...n,...r]))}updateComponentName(t,n){return t=t.replace(/function\s+\w+/g,`function ${n}`),t=t.replace(/class\s+\w+/g,`class ${n}`),t=t.replace(/(const|let)\s+\w+\s*=/g,`$1 ${n} =`),t}processDOM(t,n){let r=t;return Object.entries(n).forEach(([i,o])=>{r=r.replace(new RegExp(`querySelector\\(['"]${i}['"]\\)`,"g"),`querySelector('${o}')`),r=r.replace(new RegExp(`getElementById\\(['"]${i}['"]\\)`,"g"),`getElementById('${o}')`)}),r}addEventListeners(t,n){let r=t;return Object.entries(n).forEach(([i,o])=>{if(!r.includes(`addEventListener('${o}'`)){const a=r.match(/(function\s+\w+[^{]*{)([\s\S]*)(}$)/);if(a){const[,s,l,c]=a,m=`
  ${i}.addEventListener('${o}', function(event) {
    // Handle ${o} event
  });`;r=`${s}${l}${m}
${c}`}}}),r}processCSS(t,n){let r=t;return Object.entries(n).forEach(([i,o])=>{const a=Object.entries(o).map(([s,l])=>`${s}: ${l}`).join("; ");r.includes(`style = "${a}"`)||(r=r.replace(new RegExp(`(${i}[^>]*)(>)`,"g"),`$1 style="${a}"$2`))}),r}addModulePattern(t,n){return`
(function(window) {
  'use strict';
  
  ${t}
  
  // Export module
  window.${n} = ${n};
  
})(window);
`.trim()}addES6Modules(t,n){let r=t;return n.forEach(i=>{!r.includes("export")&&r.includes(i)&&(r+=`

export { ${i} };`)}),r}optimizeForPerformance(t){let n=t;return n.includes("setInterval")&&n.includes("animation")&&(n=n.replace(/setInterval\(([^,]+),\s*\d+\)/g,"requestAnimationFrame($1)")),n.includes("addEventListener")&&n.includes("querySelectorAll")&&(n=`// Consider using event delegation for better performance
${n}`),n}}const Io={react:{id:"react",name:"React",displayName:"React + TypeScript",icon:`<svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89s-.84 1.89-1.87 1.89c-1.03 0-1.87-.84-1.87-1.89s.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9s-1.17 0-1.71.03c-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03s1.17 0 1.71-.03c.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68s-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.37 1.95-1.47-.84-1.63-3.05-1.01-5.63-2.54-.75-4.37-1.99-4.37-3.68s1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1.01-5.63 1.46-.84 3.45.12 5.37 1.95 1.92-1.83 3.91-2.79 5.37-1.95z"/>
    </svg>`,extension:"tsx",language:"typescript",version:"18.x",description:"A JavaScript library for building user interfaces with TypeScript support",color:"#61DAFB",highlighter:new _x,templateProcessor:new Ix},vue:{id:"vue",name:"Vue",displayName:"Vue 3 + TypeScript",icon:`<svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M2,3L12,22L22,3H18.5L12,14.5L5.5,3H2Z" />
    </svg>`,extension:"vue",language:"typescript",version:"3.x",description:"The Progressive JavaScript Framework with Composition API and TypeScript",color:"#4FC08D",highlighter:new Sx,templateProcessor:new Tx},svelte:{id:"svelte",name:"Svelte",displayName:"Svelte + TypeScript",icon:`<svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M10.354 21.125a2.847 2.847 0 0 0 4.539-.827 2.848 2.848 0 0 0-.981-3.896l-1.077-.781a.282.282 0 0 1-.095-.37.282.282 0 0 1 .37-.095l1.077.781a3.413 3.413 0 0 1 1.176 4.666 3.413 3.413 0 0 1-5.447.992 3.413 3.413 0 0 1-.992-5.447l3.237-4.462a.282.282 0 0 1 .465.325l-3.237 4.462a2.847 2.847 0 0 0 .827 4.539z"/>
      <path d="M13.646 2.875a2.847 2.847 0 0 0-4.539.827 2.848 2.848 0 0 0 .981 3.896l1.077.781a.282.282 0 0 1 .095.37.282.282 0 0 1-.37.095l-1.077-.781a3.413 3.413 0 0 1-1.176-4.666 3.413 3.413 0 0 1 5.447-.992 3.413 3.413 0 0 1 .992 5.447l-3.237 4.462a.282.282 0 0 1-.465-.325l3.237-4.462a2.847 2.847 0 0 0-.827-4.539z"/>
    </svg>`,extension:"svelte",language:"typescript",version:"4.x",description:"Cybernetically enhanced web apps with compile-time optimizations",color:"#FF3E00",highlighter:new Cx,templateProcessor:new Rx},angular:{id:"angular",name:"Angular",displayName:"Angular + TypeScript",icon:`<svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 9 5.16.74 9-3.45 9-9V7l-10-5z"/>
      <path d="M12 4.5L7.5 16h2.25L11 13h2l1.25 3H16.5L12 4.5z" fill="white"/>
      <path d="M10.5 10.5L12 7.5l1.5 3h-3z" fill="white"/>
    </svg>`,extension:"ts",language:"typescript",version:"17.x",description:"Platform for building mobile and desktop web applications",color:"#DD0031",highlighter:new Ax,templateProcessor:new Px},vanilla:{id:"vanilla",name:"Vanilla",displayName:"Vanilla JavaScript",icon:`<svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M3,3H21V21H3V3M7.73,18.04C8.13,18.89 8.92,19.59 10.27,19.59C11.77,19.59 12.8,18.79 12.8,17.04V11.26H11.1V17C11.1,17.86 10.75,18.08 10.2,18.08C9.62,18.08 9.38,17.68 9.11,17.21L7.73,18.04M13.71,17.86C14.21,18.84 15.22,19.59 16.8,19.59C18.4,19.59 19.6,18.76 19.6,17.23C19.6,15.82 18.79,15.19 17.35,14.57L16.93,14.39C16.2,14.08 15.89,13.87 15.89,13.37C15.89,12.96 16.2,12.64 16.7,12.64C17.18,12.64 17.5,12.85 17.79,13.37L19.1,12.5C18.55,11.54 17.77,11.17 16.7,11.17C15.19,11.17 14.22,12.13 14.22,13.4C14.22,14.78 15.03,15.43 16.25,15.95L16.67,16.13C17.45,16.47 17.91,16.68 17.91,17.26C17.91,17.74 17.46,18.09 16.76,18.09C15.93,18.09 15.45,17.66 15.09,17.06L13.71,17.86Z"/>
    </svg>`,extension:"js",language:"javascript",version:"ES2022",description:"Pure JavaScript with modern ES6+ features and DOM manipulation",color:"#F7DF1E",highlighter:new Ex,templateProcessor:new Nx}},Rn=Io.react;function Dc(e){const t=Io[e];if(!t)throw new Error(`Framework with id "${e}" not found`);return t}function hp(){return Object.values(Io)}function Uc(e){return e in Io}const $x={"magnetic-button":{id:"magnetic-button",name:"Magnetic Button",description:"Interactive button that follows your cursor with magnetic effect",preview:"magnetic button",type:"button",category:"button",frameworks:{react:{code:`import React, { useRef, useEffect } from 'react';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
}

const MagneticButton: React.FC<MagneticButtonProps> = ({ children, className = "" }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  
  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const deltaX = (e.clientX - centerX) * 0.15;
      const deltaY = (e.clientY - centerY) * 0.15;
      
      button.style.transform = \`translate(\${deltaX}px, \${deltaY}px)\`;
    };
    
    const handleMouseLeave = () => {
      button.style.transform = 'translate(0px, 0px)';
    };
    
    button.addEventListener('mousemove', handleMouseMove);
    button.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      button.removeEventListener('mousemove', handleMouseMove);
      button.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);
  
  return (
    <button
      type="button"
      ref={buttonRef}
      className={\`px-8 py-4 bg-black text-white font-medium rounded-lg transition-all duration-300 hover:bg-gray-800 hover:shadow-lg \${className}\`}
      title="Interactive magnetic button that follows your cursor"
    >
      {children}
    </button>
  );
};

export default MagneticButton;`,extension:"tsx",language:"typescript",dependencies:["react","@types/react"],imports:["react"],exports:["MagneticButton"]},vue:{code:`<template>
  <button
    ref="buttonRef"
    type="button"
    :class="buttonClasses"
    title="Interactive magnetic button that follows your cursor"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';

interface Props {
  className?: string;
}

const props = withDefaults(defineProps<Props>(), {
  className: ''
});

const buttonRef = ref<HTMLButtonElement>();

const buttonClasses = computed(() => 
  \`px-8 py-4 bg-black text-white font-medium rounded-lg transition-all duration-300 hover:bg-gray-800 hover:shadow-lg \${props.className}\`
);

const handleMouseMove = (e: MouseEvent) => {
  const button = buttonRef.value;
  if (!button) return;
  
  const rect = button.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  
  const deltaX = (e.clientX - centerX) * 0.15;
  const deltaY = (e.clientY - centerY) * 0.15;
  
  button.style.transform = \`translate(\${deltaX}px, \${deltaY}px)\`;
};

const handleMouseLeave = () => {
  const button = buttonRef.value;
  if (button) {
    button.style.transform = 'translate(0px, 0px)';
  }
};
<\/script>`,extension:"vue",language:"typescript",dependencies:["vue"],imports:["vue"],exports:["default"]},svelte:{code:`<script lang="ts">
  export let className: string = '';
  
  let buttonRef: HTMLButtonElement;
  
  const handleMouseMove = (e: MouseEvent) => {
    if (!buttonRef) return;
    
    const rect = buttonRef.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const deltaX = (e.clientX - centerX) * 0.15;
    const deltaY = (e.clientY - centerY) * 0.15;
    
    buttonRef.style.transform = \`translate(\${deltaX}px, \${deltaY}px)\`;
  };
  
  const handleMouseLeave = () => {
    if (buttonRef) {
      buttonRef.style.transform = 'translate(0px, 0px)';
    }
  };
<\/script>

<button
  bind:this={buttonRef}
  type="button"
  class="px-8 py-4 bg-black text-white font-medium rounded-lg transition-all duration-300 hover:bg-gray-800 hover:shadow-lg {className}"
  title="Interactive magnetic button that follows your cursor"
  on:mousemove={handleMouseMove}
  on:mouseleave={handleMouseLeave}
>
  <slot />
</button>`,extension:"svelte",language:"typescript",dependencies:["svelte"],imports:[],exports:["default"]},angular:{code:`import { Component, Input, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-magnetic-button',
  template: \`
    <button
      #buttonRef
      type="button"
      [class]="buttonClasses"
      title="Interactive magnetic button that follows your cursor"
      (mousemove)="handleMouseMove($event)"
      (mouseleave)="handleMouseLeave()"
    >
      <ng-content></ng-content>
    </button>
  \`,
  styles: []
})
export class MagneticButtonComponent implements AfterViewInit, OnDestroy {
  @Input() className: string = '';
  @ViewChild('buttonRef') buttonRef!: ElementRef<HTMLButtonElement>;

  get buttonClasses(): string {
    return \`px-8 py-4 bg-black text-white font-medium rounded-lg transition-all duration-300 hover:bg-gray-800 hover:shadow-lg \${this.className}\`;
  }

  ngAfterViewInit(): void {
    // Component is ready
  }

  ngOnDestroy(): void {
    // Cleanup if needed
  }

  handleMouseMove(e: MouseEvent): void {
    const button = this.buttonRef.nativeElement;
    if (!button) return;

    const rect = button.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = (e.clientX - centerX) * 0.15;
    const deltaY = (e.clientY - centerY) * 0.15;

    button.style.transform = \`translate(\${deltaX}px, \${deltaY}px)\`;
  }

  handleMouseLeave(): void {
    const button = this.buttonRef.nativeElement;
    if (button) {
      button.style.transform = 'translate(0px, 0px)';
    }
  }
}`,extension:"ts",language:"typescript",dependencies:["@angular/core"],imports:["@angular/core"],exports:["MagneticButtonComponent"]},vanilla:{code:`class MagneticButton {
  constructor(element, options = {}) {
    this.element = element;
    this.className = options.className || '';
    this.init();
  }

  init() {
    // Set up the button
    this.element.type = 'button';
    this.element.className = \`px-8 py-4 bg-black text-white font-medium rounded-lg transition-all duration-300 hover:bg-gray-800 hover:shadow-lg \${this.className}\`;
    this.element.title = 'Interactive magnetic button that follows your cursor';

    // Bind event listeners
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);

    this.element.addEventListener('mousemove', this.handleMouseMove);
    this.element.addEventListener('mouseleave', this.handleMouseLeave);
  }

  handleMouseMove(e) {
    const rect = this.element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = (e.clientX - centerX) * 0.15;
    const deltaY = (e.clientY - centerY) * 0.15;

    this.element.style.transform = \`translate(\${deltaX}px, \${deltaY}px)\`;
  }

  handleMouseLeave() {
    this.element.style.transform = 'translate(0px, 0px)';
  }

  destroy() {
    this.element.removeEventListener('mousemove', this.handleMouseMove);
    this.element.removeEventListener('mouseleave', this.handleMouseLeave);
  }
}

// Usage: new MagneticButton(document.getElementById('my-button'));
export { MagneticButton };`,extension:"js",language:"javascript",dependencies:[],imports:[],exports:["MagneticButton"]}},metadata:{difficulty:"intermediate",tags:["interactive","animation","mouse-tracking"],lastUpdated:"2024-01-15"}},"glowing-card":{id:"glowing-card",name:"Glowing Card",description:"Card component with mouse-tracking glow effect",preview:"glowing card",type:"card",category:"card",frameworks:{react:{code:`import React, { useRef, useEffect } from 'react';

interface GlowingCardProps {
  children: React.ReactNode;
  className?: string;
}

const GlowingCard: React.FC<GlowingCardProps> = ({ children, className = "" }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      card.style.setProperty('--mouse-x', x + 'px');
      card.style.setProperty('--mouse-y', y + 'px');
    };
    
    card.addEventListener('mousemove', handleMouseMove);
    return () => card.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  return (
    <div
      ref={cardRef}
      className={\`relative p-6 bg-white border border-gray-200 rounded-xl transition-all duration-500 hover:shadow-xl group cursor-pointer [background:radial-gradient(400px_circle_at_var(--mouse-x,50%)_var(--mouse-y,50%),rgba(0,0,0,0.04),transparent_40%)] \${className}\`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default GlowingCard;`,extension:"tsx",language:"typescript",dependencies:["react","@types/react"],imports:["react"],exports:["GlowingCard"]},vue:{code:`<template>
  <div
    ref="cardRef"
    :class="cardClasses"
    :style="cardStyle"
    @mousemove="handleMouseMove"
  >
    <div class="absolute inset-0 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
    <div class="relative z-10">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

interface Props {
  className?: string;
}

const props = withDefaults(defineProps<Props>(), {
  className: ''
});

const cardRef = ref<HTMLDivElement>();
const mouseX = ref(50);
const mouseY = ref(50);

const cardClasses = computed(() => 
  \`relative p-6 bg-white border border-gray-200 rounded-xl transition-all duration-500 hover:shadow-xl group cursor-pointer \${props.className}\`
);

const cardStyle = computed(() => ({
  background: \`radial-gradient(400px circle at \${mouseX.value}% \${mouseY.value}%, rgba(0,0,0,0.04), transparent 40%)\`
}));

const handleMouseMove = (e: MouseEvent) => {
  const card = cardRef.value;
  if (!card) return;
  
  const rect = card.getBoundingClientRect();
  const x = ((e.clientX - rect.left) / rect.width) * 100;
  const y = ((e.clientY - rect.top) / rect.height) * 100;
  
  mouseX.value = x;
  mouseY.value = y;
};
<\/script>`,extension:"vue",language:"typescript",dependencies:["vue"],imports:["vue"],exports:["default"]},svelte:{code:`<script lang="ts">
  export let className: string = '';
  
  let cardRef: HTMLDivElement;
  let mouseX = 50;
  let mouseY = 50;
  
  $: cardClasses = \`relative p-6 bg-white border border-gray-200 rounded-xl transition-all duration-500 hover:shadow-xl group cursor-pointer \${className}\`;
  $: cardStyle = \`background: radial-gradient(400px circle at \${mouseX}% \${mouseY}%, rgba(0,0,0,0.04), transparent 40%)\`;
  
  const handleMouseMove = (e: MouseEvent) => {
    if (!cardRef) return;
    
    const rect = cardRef.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    mouseX = x;
    mouseY = y;
  };
<\/script>

<div
  bind:this={cardRef}
  class={cardClasses}
  style={cardStyle}
  on:mousemove={handleMouseMove}
>
  <div class="absolute inset-0 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
  <div class="relative z-10">
    <slot />
  </div>
</div>`,extension:"svelte",language:"typescript",dependencies:["svelte"],imports:[],exports:["default"]},angular:{code:`import { Component, Input, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-glowing-card',
  template: \`
    <div
      #cardRef
      [class]="cardClasses"
      [style]="cardStyle"
      (mousemove)="handleMouseMove($event)"
    >
      <div class="absolute inset-0 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
      <div class="relative z-10">
        <ng-content></ng-content>
      </div>
    </div>
  \`,
  styles: []
})
export class GlowingCardComponent implements AfterViewInit {
  @Input() className: string = '';
  @ViewChild('cardRef') cardRef!: ElementRef<HTMLDivElement>;

  mouseX = 50;
  mouseY = 50;

  get cardClasses(): string {
    return \`relative p-6 bg-white border border-gray-200 rounded-xl transition-all duration-500 hover:shadow-xl group cursor-pointer \${this.className}\`;
  }

  get cardStyle(): { [key: string]: string } {
    return {
      background: \`radial-gradient(400px circle at \${this.mouseX}% \${this.mouseY}%, rgba(0,0,0,0.04), transparent 40%)\`
    };
  }

  ngAfterViewInit(): void {
    // Component is ready
  }

  handleMouseMove(e: MouseEvent): void {
    const card = this.cardRef.nativeElement;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    this.mouseX = x;
    this.mouseY = y;
  }
}`,extension:"ts",language:"typescript",dependencies:["@angular/core"],imports:["@angular/core"],exports:["GlowingCardComponent"]},vanilla:{code:`class GlowingCard {
  constructor(element, options = {}) {
    this.element = element;
    this.className = options.className || '';
    this.mouseX = 50;
    this.mouseY = 50;
    this.init();
  }

  init() {
    // Set up the card structure
    this.element.className = \`relative p-6 bg-white border border-gray-200 rounded-xl transition-all duration-500 hover:shadow-xl group cursor-pointer \${this.className}\`;
    
    // Create inner elements
    const overlay = document.createElement('div');
    overlay.className = 'absolute inset-0 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500';
    
    const content = document.createElement('div');
    content.className = 'relative z-10';
    
    // Move existing content to content wrapper
    while (this.element.firstChild) {
      content.appendChild(this.element.firstChild);
    }
    
    this.element.appendChild(overlay);
    this.element.appendChild(content);

    // Bind event listeners
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.element.addEventListener('mousemove', this.handleMouseMove);
    
    this.updateBackground();
  }

  handleMouseMove(e) {
    const rect = this.element.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    this.mouseX = x;
    this.mouseY = y;
    this.updateBackground();
  }

  updateBackground() {
    this.element.style.background = \`radial-gradient(400px circle at \${this.mouseX}% \${this.mouseY}%, rgba(0,0,0,0.04), transparent 40%)\`;
  }

  destroy() {
    this.element.removeEventListener('mousemove', this.handleMouseMove);
  }
}

// Usage: new GlowingCard(document.getElementById('my-card'));
export { GlowingCard };`,extension:"js",language:"javascript",dependencies:[],imports:[],exports:["GlowingCard"]}},metadata:{difficulty:"intermediate",tags:["interactive","animation","mouse-tracking","glow"],lastUpdated:"2024-01-15"}},"minimal-input":{id:"minimal-input",name:"Minimal Input",description:"Clean input field with focus animations",preview:"minimal input",type:"input",category:"input",frameworks:{react:{code:`import React, { useState } from 'react';

interface MinimalInputProps {
  placeholder?: string;
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
}

const MinimalInput: React.FC<MinimalInputProps> = ({ 
  placeholder = "Enter text...", 
  className = "",
  value: controlledValue,
  onChange
}) => {
  const [internalValue, setInternalValue] = useState<string>('');
  const [focused, setFocused] = useState<boolean>(false);
  
  const value = controlledValue !== undefined ? controlledValue : internalValue;
  const handleChange = (newValue: string) => {
    if (onChange) {
      onChange(newValue);
    } else {
      setInternalValue(newValue);
    }
  };
  
  return (
    <div className={\`relative \${className}\`}>
      <input
        type="text"
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-gray-200 text-black placeholder-gray-400 focus:border-black focus:outline-none transition-all duration-300 text-lg"
        placeholder={placeholder}
      />
      <div className={\`absolute bottom-0 left-0 h-0.5 bg-black transition-all duration-300 \${focused || value ? 'w-full' : 'w-0'}\`} />
    </div>
  );
};

export default MinimalInput;`,extension:"tsx",language:"typescript",dependencies:["react","@types/react"],imports:["react"],exports:["MinimalInput"]},vue:{code:`<template>
  <div :class="containerClasses">
    <input
      v-model="inputValue"
      type="text"
      :placeholder="placeholder"
      class="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-gray-200 text-black placeholder-gray-400 focus:border-black focus:outline-none transition-all duration-300 text-lg"
      @focus="focused = true"
      @blur="focused = false"
    />
    <div :class="underlineClasses" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

interface Props {
  placeholder?: string;
  className?: string;
  modelValue?: string;
}

const props = withDefaults(defineProps<Props>(), {
  placeholder: 'Enter text...',
  className: '',
  modelValue: ''
});

const emit = defineEmits<{
  'update:modelValue': [value: string];
}>();

const focused = ref(false);
const inputValue = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
});

const containerClasses = computed(() => 
  \`relative \${props.className}\`
);

const underlineClasses = computed(() => 
  \`absolute bottom-0 left-0 h-0.5 bg-black transition-all duration-300 \${focused.value || inputValue.value ? 'w-full' : 'w-0'}\`
);
<\/script>`,extension:"vue",language:"typescript",dependencies:["vue"],imports:["vue"],exports:["default"]},svelte:{code:`<script lang="ts">
  export let placeholder: string = 'Enter text...';
  export let className: string = '';
  export let value: string = '';
  
  let focused = false;
  
  $: containerClasses = \`relative \${className}\`;
  $: underlineClasses = \`absolute bottom-0 left-0 h-0.5 bg-black transition-all duration-300 \${focused || value ? 'w-full' : 'w-0'}\`;
<\/script>

<div class={containerClasses}>
  <input
    bind:value
    type="text"
    {placeholder}
    class="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-gray-200 text-black placeholder-gray-400 focus:border-black focus:outline-none transition-all duration-300 text-lg"
    on:focus={() => focused = true}
    on:blur={() => focused = false}
  />
  <div class={underlineClasses} />
</div>`,extension:"svelte",language:"typescript",dependencies:["svelte"],imports:[],exports:["default"]},angular:{code:`import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-minimal-input',
  template: \`
    <div [class]="containerClasses">
      <input
        type="text"
        [value]="value"
        [placeholder]="placeholder"
        class="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-gray-200 text-black placeholder-gray-400 focus:border-black focus:outline-none transition-all duration-300 text-lg"
        (input)="onInput($event)"
        (focus)="onFocus()"
        (blur)="onBlur()"
      />
      <div [class]="underlineClasses"></div>
    </div>
  \`,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MinimalInputComponent),
      multi: true
    }
  ]
})
export class MinimalInputComponent implements ControlValueAccessor {
  @Input() placeholder: string = 'Enter text...';
  @Input() className: string = '';
  @Output() valueChange = new EventEmitter<string>();

  value: string = '';
  focused: boolean = false;

  private onChange = (value: string) => {};
  private onTouched = () => {};

  get containerClasses(): string {
    return \`relative \${this.className}\`;
  }

  get underlineClasses(): string {
    return \`absolute bottom-0 left-0 h-0.5 bg-black transition-all duration-300 \${this.focused || this.value ? 'w-full' : 'w-0'}\`;
  }

  onInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.value = target.value;
    this.onChange(this.value);
    this.valueChange.emit(this.value);
  }

  onFocus(): void {
    this.focused = true;
  }

  onBlur(): void {
    this.focused = false;
    this.onTouched();
  }

  // ControlValueAccessor implementation
  writeValue(value: string): void {
    this.value = value || '';
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
}`,extension:"ts",language:"typescript",dependencies:["@angular/core","@angular/forms"],imports:["@angular/core","@angular/forms"],exports:["MinimalInputComponent"]},vanilla:{code:`class MinimalInput {
  constructor(element, options = {}) {
    this.element = element;
    this.placeholder = options.placeholder || 'Enter text...';
    this.className = options.className || '';
    this.value = '';
    this.focused = false;
    this.onChange = options.onChange || (() => {});
    this.init();
  }

  init() {
    // Create container
    const container = document.createElement('div');
    container.className = \`relative \${this.className}\`;
    
    // Create input
    this.input = document.createElement('input');
    this.input.type = 'text';
    this.input.placeholder = this.placeholder;
    this.input.className = 'w-full px-0 py-4 bg-transparent border-0 border-b-2 border-gray-200 text-black placeholder-gray-400 focus:border-black focus:outline-none transition-all duration-300 text-lg';
    
    // Create underline
    this.underline = document.createElement('div');
    this.updateUnderlineClasses();
    
    // Add event listeners
    this.input.addEventListener('input', this.handleInput.bind(this));
    this.input.addEventListener('focus', this.handleFocus.bind(this));
    this.input.addEventListener('blur', this.handleBlur.bind(this));
    
    // Assemble structure
    container.appendChild(this.input);
    container.appendChild(this.underline);
    
    // Replace original element
    this.element.parentNode.replaceChild(container, this.element);
    this.element = container;
  }

  handleInput(e) {
    this.value = e.target.value;
    this.updateUnderlineClasses();
    this.onChange(this.value);
  }

  handleFocus() {
    this.focused = true;
    this.updateUnderlineClasses();
  }

  handleBlur() {
    this.focused = false;
    this.updateUnderlineClasses();
  }

  updateUnderlineClasses() {
    const hasContent = this.focused || this.value;
    this.underline.className = \`absolute bottom-0 left-0 h-0.5 bg-black transition-all duration-300 \${hasContent ? 'w-full' : 'w-0'}\`;
  }

  setValue(newValue) {
    this.value = newValue;
    this.input.value = newValue;
    this.updateUnderlineClasses();
  }

  getValue() {
    return this.value;
  }

  destroy() {
    this.input.removeEventListener('input', this.handleInput);
    this.input.removeEventListener('focus', this.handleFocus);
    this.input.removeEventListener('blur', this.handleBlur);
  }
}

// Usage: new MinimalInput(document.getElementById('my-input'));
export { MinimalInput };`,extension:"js",language:"javascript",dependencies:[],imports:[],exports:["MinimalInput"]}},metadata:{difficulty:"beginner",tags:["input","form","animation","focus"],lastUpdated:"2024-01-15"}},"toggle-switch":{id:"toggle-switch",name:"Toggle Switch",description:"Smooth toggle switch with state management",preview:"toggle switch",type:"toggle",category:"toggle",frameworks:{react:{code:`import React, { useState } from 'react';

interface ToggleSwitchProps {
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
  checked?: boolean;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ 
  defaultChecked = false, 
  onChange, 
  className = "",
  checked: controlledChecked
}) => {
  const [internalChecked, setInternalChecked] = useState<boolean>(defaultChecked);
  
  const checked = controlledChecked !== undefined ? controlledChecked : internalChecked;
  
  const handleToggle = () => {
    const newChecked = !checked;
    if (controlledChecked === undefined) {
      setInternalChecked(newChecked);
    }
    onChange?.(newChecked);
  };
  
  return (
    <button
      type="button"
      onClick={handleToggle}
      className={\`relative w-14 h-7 rounded-full transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-gray-200 \${checked ? 'bg-black' : 'bg-gray-300'} \${className}\`}
      aria-label={\`Toggle switch, currently \${checked ? 'on' : 'off'}\`}
      title={\`Toggle switch, currently \${checked ? 'on' : 'off'}\`}
    >
      <div
        className={\`absolute top-0.5 w-6 h-6 bg-white rounded-full transition-all duration-300 shadow-md \${checked ? 'translate-x-7' : 'translate-x-0.5'}\`}
      />
    </button>
  );
};

export default ToggleSwitch;`,extension:"tsx",language:"typescript",dependencies:["react","@types/react"],imports:["react"],exports:["ToggleSwitch"]},vue:{code:`<template>
  <button
    type="button"
    :class="buttonClasses"
    :aria-label="ariaLabel"
    :title="ariaLabel"
    @click="handleToggle"
  >
    <div :class="knobClasses" />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  defaultChecked?: boolean;
  className?: string;
  modelValue?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  defaultChecked: false,
  className: '',
  modelValue: undefined
});

const emit = defineEmits<{
  'update:modelValue': [checked: boolean];
  change: [checked: boolean];
}>();

const checked = computed(() => 
  props.modelValue !== undefined ? props.modelValue : props.defaultChecked
);

const buttonClasses = computed(() => 
  \`relative w-14 h-7 rounded-full transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-gray-200 \${checked.value ? 'bg-black' : 'bg-gray-300'} \${props.className}\`
);

const knobClasses = computed(() => 
  \`absolute top-0.5 w-6 h-6 bg-white rounded-full transition-all duration-300 shadow-md \${checked.value ? 'translate-x-7' : 'translate-x-0.5'}\`
);

const ariaLabel = computed(() => 
  \`Toggle switch, currently \${checked.value ? 'on' : 'off'}\`
);

const handleToggle = () => {
  const newChecked = !checked.value;
  emit('update:modelValue', newChecked);
  emit('change', newChecked);
};
<\/script>`,extension:"vue",language:"typescript",dependencies:["vue"],imports:["vue"],exports:["default"]},svelte:{code:`<script lang="ts">
  export let defaultChecked: boolean = false;
  export let className: string = '';
  export let checked: boolean = defaultChecked;
  export let onChange: ((checked: boolean) => void) | undefined = undefined;
  
  $: buttonClasses = \`relative w-14 h-7 rounded-full transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-gray-200 \${checked ? 'bg-black' : 'bg-gray-300'} \${className}\`;
  $: knobClasses = \`absolute top-0.5 w-6 h-6 bg-white rounded-full transition-all duration-300 shadow-md \${checked ? 'translate-x-7' : 'translate-x-0.5'}\`;
  $: ariaLabel = \`Toggle switch, currently \${checked ? 'on' : 'off'}\`;
  
  const handleToggle = () => {
    checked = !checked;
    onChange?.(checked);
  };
<\/script>

<button
  type="button"
  class={buttonClasses}
  aria-label={ariaLabel}
  title={ariaLabel}
  on:click={handleToggle}
>
  <div class={knobClasses} />
</button>`,extension:"svelte",language:"typescript",dependencies:["svelte"],imports:[],exports:["default"]},angular:{code:`import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-toggle-switch',
  template: \`
    <button
      type="button"
      [class]="buttonClasses"
      [attr.aria-label]="ariaLabel"
      [title]="ariaLabel"
      (click)="handleToggle()"
    >
      <div [class]="knobClasses"></div>
    </button>
  \`,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ToggleSwitchComponent),
      multi: true
    }
  ]
})
export class ToggleSwitchComponent implements ControlValueAccessor {
  @Input() defaultChecked: boolean = false;
  @Input() className: string = '';
  @Output() change = new EventEmitter<boolean>();

  checked: boolean = false;

  private onChange = (checked: boolean) => {};
  private onTouched = () => {};

  get buttonClasses(): string {
    return \`relative w-14 h-7 rounded-full transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-gray-200 \${this.checked ? 'bg-black' : 'bg-gray-300'} \${this.className}\`;
  }

  get knobClasses(): string {
    return \`absolute top-0.5 w-6 h-6 bg-white rounded-full transition-all duration-300 shadow-md \${this.checked ? 'translate-x-7' : 'translate-x-0.5'}\`;
  }

  get ariaLabel(): string {
    return \`Toggle switch, currently \${this.checked ? 'on' : 'off'}\`;
  }

  ngOnInit(): void {
    this.checked = this.defaultChecked;
  }

  handleToggle(): void {
    this.checked = !this.checked;
    this.onChange(this.checked);
    this.change.emit(this.checked);
    this.onTouched();
  }

  // ControlValueAccessor implementation
  writeValue(checked: boolean): void {
    this.checked = checked || false;
  }

  registerOnChange(fn: (checked: boolean) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
}`,extension:"ts",language:"typescript",dependencies:["@angular/core","@angular/forms"],imports:["@angular/core","@angular/forms"],exports:["ToggleSwitchComponent"]},vanilla:{code:`class ToggleSwitch {
  constructor(element, options = {}) {
    this.element = element;
    this.defaultChecked = options.defaultChecked || false;
    this.className = options.className || '';
    this.checked = this.defaultChecked;
    this.onChange = options.onChange || (() => {});
    this.init();
  }

  init() {
    // Create button
    this.button = document.createElement('button');
    this.button.type = 'button';
    this.updateButtonClasses();
    this.updateAriaLabel();
    
    // Create knob
    this.knob = document.createElement('div');
    this.updateKnobClasses();
    
    // Add event listener
    this.button.addEventListener('click', this.handleToggle.bind(this));
    
    // Assemble structure
    this.button.appendChild(this.knob);
    
    // Replace original element
    this.element.parentNode.replaceChild(this.button, this.element);
    this.element = this.button;
  }

  handleToggle() {
    this.checked = !this.checked;
    this.updateButtonClasses();
    this.updateKnobClasses();
    this.updateAriaLabel();
    this.onChange(this.checked);
  }

  updateButtonClasses() {
    this.button.className = \`relative w-14 h-7 rounded-full transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-gray-200 \${this.checked ? 'bg-black' : 'bg-gray-300'} \${this.className}\`;
  }

  updateKnobClasses() {
    this.knob.className = \`absolute top-0.5 w-6 h-6 bg-white rounded-full transition-all duration-300 shadow-md \${this.checked ? 'translate-x-7' : 'translate-x-0.5'}\`;
  }

  updateAriaLabel() {
    const label = \`Toggle switch, currently \${this.checked ? 'on' : 'off'}\`;
    this.button.setAttribute('aria-label', label);
    this.button.setAttribute('title', label);
  }

  setChecked(newChecked) {
    this.checked = newChecked;
    this.updateButtonClasses();
    this.updateKnobClasses();
    this.updateAriaLabel();
  }

  isChecked() {
    return this.checked;
  }

  destroy() {
    this.button.removeEventListener('click', this.handleToggle);
  }
}

// Usage: new ToggleSwitch(document.getElementById('my-toggle'));
export { ToggleSwitch };`,extension:"js",language:"javascript",dependencies:[],imports:[],exports:["ToggleSwitch"]}},metadata:{difficulty:"beginner",tags:["toggle","switch","state","interactive"],lastUpdated:"2024-01-15"}},"loading-spinner":{id:"loading-spinner",name:"Loading Spinner",description:"Animated loading spinner with size variants",preview:"loading spinner",type:"loading",category:"loading",frameworks:{react:{code:`import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ size = "md", className = "" }) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8", 
    lg: "w-12 h-12"
  };
  
  return (
    <div className={\`flex items-center justify-center \${className}\`}>
      <div className={\`\${sizeClasses[size]} relative\`}>
        <div className="absolute inset-0 border-2 border-gray-200 rounded-full"></div>
        <div className="absolute inset-0 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;`,extension:"tsx",language:"typescript",dependencies:["react","@types/react"],imports:["react"],exports:["LoadingSpinner"]},vue:{code:`<template>
  <div :class="containerClasses">
    <div :class="spinnerClasses">
      <div class="absolute inset-0 border-2 border-gray-200 rounded-full"></div>
      <div class="absolute inset-0 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  className: ''
});

const sizeClasses = {
  sm: 'w-4 h-4',
  md: 'w-8 h-8',
  lg: 'w-12 h-12'
};

const containerClasses = computed(() => 
  \`flex items-center justify-center \${props.className}\`
);

const spinnerClasses = computed(() => 
  \`\${sizeClasses[props.size]} relative\`
);
<\/script>`,extension:"vue",language:"typescript",dependencies:["vue"],imports:["vue"],exports:["default"]},svelte:{code:`<script lang="ts">
  export let size: 'sm' | 'md' | 'lg' = 'md';
  export let className: string = '';
  
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };
  
  $: containerClasses = \`flex items-center justify-center \${className}\`;
  $: spinnerClasses = \`\${sizeClasses[size]} relative\`;
<\/script>

<div class={containerClasses}>
  <div class={spinnerClasses}>
    <div class="absolute inset-0 border-2 border-gray-200 rounded-full"></div>
    <div class="absolute inset-0 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
  </div>
</div>`,extension:"svelte",language:"typescript",dependencies:["svelte"],imports:[],exports:["default"]},angular:{code:`import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loading-spinner',
  template: \`
    <div [class]="containerClasses">
      <div [class]="spinnerClasses">
        <div class="absolute inset-0 border-2 border-gray-200 rounded-full"></div>
        <div class="absolute inset-0 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
      </div>
    </div>
  \`,
  styles: []
})
export class LoadingSpinnerComponent {
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() className: string = '';

  private sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  get containerClasses(): string {
    return \`flex items-center justify-center \${this.className}\`;
  }

  get spinnerClasses(): string {
    return \`\${this.sizeClasses[this.size]} relative\`;
  }
}`,extension:"ts",language:"typescript",dependencies:["@angular/core"],imports:["@angular/core"],exports:["LoadingSpinnerComponent"]},vanilla:{code:`class LoadingSpinner {
  constructor(element, options = {}) {
    this.element = element;
    this.size = options.size || 'md';
    this.className = options.className || '';
    this.init();
  }

  init() {
    const sizeClasses = {
      sm: 'w-4 h-4',
      md: 'w-8 h-8',
      lg: 'w-12 h-12'
    };

    // Create container
    const container = document.createElement('div');
    container.className = \`flex items-center justify-center \${this.className}\`;
    
    // Create spinner wrapper
    const spinnerWrapper = document.createElement('div');
    spinnerWrapper.className = \`\${sizeClasses[this.size]} relative\`;
    
    // Create background circle
    const backgroundCircle = document.createElement('div');
    backgroundCircle.className = 'absolute inset-0 border-2 border-gray-200 rounded-full';
    
    // Create spinning circle
    const spinningCircle = document.createElement('div');
    spinningCircle.className = 'absolute inset-0 border-2 border-black border-t-transparent rounded-full animate-spin';
    
    // Assemble structure
    spinnerWrapper.appendChild(backgroundCircle);
    spinnerWrapper.appendChild(spinningCircle);
    container.appendChild(spinnerWrapper);
    
    // Replace original element
    this.element.parentNode.replaceChild(container, this.element);
    this.element = container;
  }

  setSize(newSize) {
    this.size = newSize;
    // Re-initialize with new size
    this.init();
  }

  destroy() {
    // No event listeners to clean up for this component
  }
}

// Usage: new LoadingSpinner(document.getElementById('my-spinner'));
export { LoadingSpinner };`,extension:"js",language:"javascript",dependencies:[],imports:[],exports:["LoadingSpinner"]}},metadata:{difficulty:"beginner",tags:["loading","spinner","animation"],lastUpdated:"2024-01-15"}}};class jx{constructor(){C(this,"state");C(this,"listeners",new Set);C(this,"STORAGE_KEY","aura-selected-framework");this.state={currentFramework:this.loadPersistedFramework(),availableFrameworks:hp(),isLoading:!1,error:void 0}}getCurrentFramework(){return this.state.currentFramework}setFramework(t){try{if(this.setState({isLoading:!0,error:void 0}),!Uc(t))throw new vr(`Invalid framework ID: ${t}`,t,"setFramework");const n=Dc(t);if(!this.state.availableFrameworks.find(r=>r.id===t))throw new vr(`Framework ${t} is not available`,t,"setFramework");this.setState({currentFramework:n,isLoading:!1,error:void 0}),this.persistFramework(t)}catch(n){const r=n instanceof Error?n.message:"Unknown error occurred";this.setState({isLoading:!1,error:r}),console.error("FrameworkManager: Failed to set framework",n),this.state.currentFramework.id!==Rn.id&&(console.warn("FrameworkManager: Falling back to default framework"),this.setFramework(Rn.id))}}getAvailableFrameworks(){return this.state.availableFrameworks}getTemplate(t,n){try{const r=$x[t];if(!r)return console.warn(`Component template not found: ${t}`),null;const i=r.frameworks[n];return i||(console.warn(`Framework template not found: ${t} for ${n}`),null)}catch(r){return console.error(`Error getting template for ${t}:${n}:`,r),null}}getState(){return{...this.state}}subscribe(t){return this.listeners.add(t),()=>{this.listeners.delete(t)}}registerFramework(t){try{if(!t.id||!t.name||!t.extension)throw new vr("Invalid framework configuration",t.id,"registerFramework");if(this.state.availableFrameworks.find(n=>n.id===t.id))throw new vr(`Framework ${t.id} already registered`,t.id,"registerFramework");this.setState({availableFrameworks:[...this.state.availableFrameworks,t]})}catch(n){throw console.error("FrameworkManager: Failed to register framework",n),n}}unregisterFramework(t){try{const n=this.state.availableFrameworks.filter(i=>i.id!==t);if(n.length===this.state.availableFrameworks.length)throw new vr(`Framework ${t} not found`,t,"unregisterFramework");let r=this.state.currentFramework;this.state.currentFramework.id===t&&(r=Rn,this.persistFramework(Rn.id)),this.setState({availableFrameworks:n,currentFramework:r})}catch(n){throw console.error("FrameworkManager: Failed to unregister framework",n),n}}reset(){this.setFramework(Rn.id),this.clearPersistedFramework()}setState(t){this.state={...this.state,...t},this.notifyListeners()}notifyListeners(){this.listeners.forEach(t=>{try{t(this.getState())}catch(n){console.error("FrameworkManager: Error in state listener",n)}})}loadPersistedFramework(){try{const t=localStorage.getItem(this.STORAGE_KEY);if(t&&Uc(t))return Dc(t)}catch(t){console.warn("FrameworkManager: Failed to load persisted framework",t)}return Rn}persistFramework(t){try{localStorage.setItem(this.STORAGE_KEY,t)}catch(n){console.warn("FrameworkManager: Failed to persist framework selection",n)}}clearPersistedFramework(){try{localStorage.removeItem(this.STORAGE_KEY)}catch(t){console.warn("FrameworkManager: Failed to clear persisted framework",t)}}}const Oc=new jx,Mx=()=>{const[e,t]=B.useState([{id:1,type:"assistant",content:"Hi! I'm your AI component designer. I can create beautiful, interactive UI components from your descriptions. What would you like to build today?",timestamp:new Date}]),[n,r]=B.useState(""),[i,o]=B.useState(null),[a,s]=B.useState(!1),[l,c]=B.useState(!1),[m,u]=B.useState(localStorage.getItem("aura_openrouter_key")||"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"),[p,w]=B.useState(localStorage.getItem("aura_openrouter_model")||"meta-llama/llama-3.2-3b-instruct:free"),[S,x]=B.useState(!1),[M,f]=B.useState(20),[d,g]=B.useState(!1),[k,I]=B.useState(!1),[T,N]=B.useState(Oc.getCurrentFramework()),[R]=B.useState(hp()),Y=B.useRef(null),O=B.useRef(null),Ae=B.useRef(!0),Le=async E=>{try{await Oc.setFramework(E.id),N(E),i&&yt(E)}catch(L){console.error("Failed to change framework:",L)}},yt=E=>{if(!i)return;const L=window.currentMultiFrameworkComponent;if(L&&L[E.id]){o({code:L[E.id].code,preview:i.preview,type:i.type});return}const Ue=Object.keys(multiFrameworkTemplates).find(ye=>multiFrameworkTemplates[ye].preview===i.preview);if(Ue){const ye=templateEngine.getTemplate(Ue,E.id);ye&&o({code:ye.code,preview:i.preview,type:i.type})}};B.useEffect(()=>{const E="dynamic-sidebar-styles";let L=document.getElementById(E);L||(L=document.createElement("style"),L.id=E,document.head.appendChild(L)),L.textContent=`
      .sidebar-width { width: ${M}% !important; }
      .preview-width { width: ${100-M}% !important; }
      
      /* Prevent unwanted scrolling on load */
      html, body {
        overflow-x: hidden;
        scroll-behavior: smooth;
      }
      
      /* Ensure animations don't cause layout shifts */
      * {
        animation-fill-mode: both;
      }
    `},[M]);const an=()=>{var E;(E=Y.current)==null||E.scrollIntoView({behavior:"smooth"})};B.useEffect(()=>{if(Ae.current){Ae.current=!1;return}e.length>1&&setTimeout(()=>{an()},100)},[e]),B.useEffect(()=>{const E=Ue=>{if(!d)return;const ye=window.innerWidth,sn=Ue.clientX/ye*100,re=Math.min(Math.max(sn,20),80);f(re)},L=()=>{g(!1)};return d&&(document.addEventListener("mousemove",E),document.addEventListener("mouseup",L),document.body.style.cursor="col-resize",document.body.style.userSelect="none"),()=>{document.removeEventListener("mousemove",E),document.removeEventListener("mouseup",L),document.body.style.cursor="",document.body.style.userSelect=""}},[d]);const En=()=>{g(!0)};B.useEffect(()=>{m&&localStorage.setItem("aura_openrouter_key",m)},[m]),B.useEffect(()=>{p&&localStorage.setItem("aura_openrouter_model",p)},[p]),B.useEffect(()=>{const E=L=>{if(L.ctrlKey||L.metaKey)switch(L.key){case"1":L.preventDefault(),R[0]&&Le(R[0]);break;case"2":L.preventDefault(),R[1]&&Le(R[1]);break;case"3":L.preventDefault(),R[2]&&Le(R[2]);break;case"4":L.preventDefault(),R[3]&&Le(R[3]);break;case"5":L.preventDefault(),R[4]&&Le(R[4]);break;case"!":L.preventDefault(),f(30);break;case"@":L.preventDefault(),f(50);break;case"#":L.preventDefault(),f(70);break;case"k":L.preventDefault(),i&&I(!k);break}};return document.addEventListener("keydown",E),()=>document.removeEventListener("keydown",E)},[i,k,R]);const Mt=async()=>{if(!n.trim())return;const E={id:Date.now(),type:"user",content:n,timestamp:new Date};t(re=>[...re,E]);const L=n;r(""),s(!0),await new Promise(re=>setTimeout(re,800+Math.random()*1200));const{response:Ue,componentType:ye}=await gx(L,e,m,p,T.id),sn={id:Date.now()+1,type:"assistant",content:Ue,timestamp:new Date};if(t(re=>[...re,sn]),s(!1),ye){c(!0),await new Promise(Lt=>setTimeout(Lt,1500));const re=await vx(L,m,p,void 0,T.id);if(re&&re.multiFramework){const Lt=re.multiFramework[T.id];Lt&&(o({code:Lt.code,preview:re.preview,type:re.type}),window.currentMultiFrameworkComponent=re.multiFramework)}else re&&o(re);c(!1);const ln=ph.encouragement,gp={id:Date.now()+2,type:"assistant",content:ln[Math.floor(Math.random()*ln.length)],timestamp:new Date};await new Promise(Lt=>setTimeout(Lt,500)),t(Lt=>[...Lt,gp])}},De=E=>{E.key==="Enter"&&!E.shiftKey&&(E.preventDefault(),Mt())},y=()=>{i&&navigator.clipboard.writeText(i.code)},v=()=>l?h.jsx(th,{}):i?h.jsx("div",{className:"flex items-center justify-center h-full",children:h.jsxs("div",{className:"text-center space-y-6",children:[h.jsx("div",{className:"w-16 h-16 mx-auto bg-gradient-to-br from-black to-gray-600 rounded-2xl flex items-center justify-center",children:h.jsx(wc,{className:"w-8 h-8 text-white"})}),h.jsxs("div",{className:"space-y-2",children:[h.jsx("p",{className:"text-lg font-medium text-gray-800 capitalize",children:i.preview}),h.jsx("p",{className:"text-sm text-gray-600",children:"AI-generated component ready!"}),h.jsxs("p",{className:"text-xs text-gray-400 max-w-sm mx-auto leading-relaxed",children:["Your custom component has been generated with ",i.code.split(`
`).length," lines of code. Use ⌘K to view the full code."]})]})]})}):h.jsx("div",{className:"flex items-center justify-center h-full",children:h.jsxs("div",{className:"text-center space-y-6",children:[h.jsx("div",{className:"w-12 h-12 mx-auto border border-dashed border-gray-300 rounded-2xl flex items-center justify-center bg-gray-50/50",children:h.jsx(Zf,{className:"w-5 h-5 text-gray-400"})}),h.jsxs("div",{className:"space-y-2",children:[h.jsx("p",{className:"text-sm font-medium text-gray-600",children:"AI-Powered Component Generator"}),h.jsx("p",{className:"text-xs text-gray-400 max-w-xs mx-auto leading-relaxed",children:"Describe any component and our AI will generate custom code for you"})]})]})}),_=[{label:"Button",full:"interactive button with hover effects"},{label:"Card",full:"modern card component with shadows"},{label:"Input",full:"styled input field with validation"},{label:"Modal",full:"responsive modal dialog"},{label:"Nav",full:"navigation menu component"}];return h.jsxs("div",{className:"h-screen bg-white flex overflow-hidden relative",children:[h.jsxs("div",{className:`flex flex-1 transition-all duration-300 overflow-hidden ${k?"mr-[480px]":""}`,children:[h.jsxs("div",{className:"bg-white flex flex-col border-r border-gray-100 sidebar-width",children:[h.jsxs("div",{className:"flex items-center justify-between px-8 py-6 border-b border-gray-100/50 backdrop-blur-xl bg-white/70",children:[h.jsxs("div",{className:"flex items-center space-x-4",children:[h.jsxs("div",{className:"relative",children:[h.jsx("div",{className:"w-8 h-8 bg-black rounded-xl flex items-center justify-center shadow-sm transition-all duration-300 hover:shadow-md hover:scale-105",children:h.jsx(wc,{className:"w-4 h-4 text-white"})}),h.jsx("div",{className:"absolute -inset-1 bg-gradient-to-r from-black to-gray-800 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10"})]}),h.jsxs("div",{className:"space-y-0.5",children:[h.jsx("h1",{className:"text-xl font-medium text-black tracking-tight",children:"Aura"}),h.jsx("p",{className:"text-xs text-gray-500 font-medium tracking-wide uppercase",children:m?"AI Connected":"Local Mode"})]})]}),h.jsxs("div",{className:"flex items-center space-x-4",children:[h.jsxs("div",{className:"flex items-center space-x-2",children:[h.jsx("div",{className:`w-1.5 h-1.5 rounded-full transition-all duration-500 ${m?"bg-black animate-pulse shadow-sm":"bg-gray-300"}`}),h.jsx("span",{className:"text-xs text-gray-600 font-medium",children:m?"Connected":"Offline"})]}),h.jsx("button",{type:"button",onClick:()=>x(!S),className:"p-2.5 text-gray-400 hover:text-black hover:bg-gray-50 rounded-xl transition-all duration-200 hover:scale-105 active:scale-95","aria-label":"Toggle API settings",title:"Toggle API settings",children:h.jsx(eh,{size:15})})]})]}),h.jsx(rh,{apiKey:m,setApiKey:u,model:p,setModel:w,showApiSettings:S}),h.jsxs("div",{className:"flex-1 overflow-y-auto px-8 py-6 space-y-6",children:[e.map(E=>h.jsx("div",{className:`flex ${E.type==="user"?"justify-end":"justify-start"}`,children:h.jsx("div",{className:`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${E.type==="user"?"bg-black text-white ml-4 shadow-sm":"bg-white/70 backdrop-blur-sm text-gray-800 mr-4 border border-gray-100"}`,children:E.content})},E.id)),a&&h.jsx("div",{className:"flex justify-start",children:h.jsx("div",{className:"bg-white/70 backdrop-blur-sm text-gray-800 mr-4 border border-gray-100 px-4 py-3 rounded-2xl text-sm shadow-sm",children:h.jsxs("div",{className:"flex items-center space-x-2",children:[h.jsxs("div",{className:"flex space-x-1",children:[h.jsx("div",{className:"w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"}),h.jsx("div",{className:"w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0.15s]"}),h.jsx("div",{className:"w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0.3s]"})]}),h.jsx("span",{className:"text-gray-500 text-xs",children:"Thinking..."})]})})}),h.jsx("div",{ref:Y})]}),h.jsxs("div",{className:"px-8 py-6 border-t border-gray-100/50 bg-white/80 backdrop-blur-xl",children:[!n&&h.jsx("div",{className:"flex flex-wrap gap-2 mb-4",children:_.map(E=>h.jsx("button",{type:"button",onClick:()=>r(`Create a ${E.full}`),className:"px-2 py-0.5 text-xs bg-white hover:bg-black hover:text-white text-gray-700 rounded-lg transition-all duration-200 border border-gray-200 hover:border-black font-medium shrink-0 shadow-sm",children:E.label},E.label))}),h.jsxs("div",{className:"relative",children:[h.jsx("textarea",{value:n,onChange:E=>r(E.target.value),onKeyDown:De,placeholder:"Describe your component...",className:"w-full pl-4 pr-16 py-3 border border-gray-200 rounded-2xl text-sm resize-none focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-all duration-200 bg-white/70 backdrop-blur-sm shadow-sm placeholder:text-gray-400 hover:shadow-md focus:shadow-md",rows:3,maxLength:500}),h.jsxs("div",{className:`absolute bottom-3 left-3 text-xs font-medium transition-colors duration-200 ${n.length>450?"text-red-500":n.length>400?"text-yellow-600":"text-gray-400"}`,children:[n.length,"/500"]}),h.jsxs("button",{type:"button",onClick:Mt,disabled:!n.trim()||a,className:"absolute bottom-3 right-2 p-2 bg-black text-white rounded-xl hover:bg-gray-800 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 hover:scale-105 active:scale-95 shadow-sm hover:shadow-md group overflow-hidden","aria-label":"Send message",title:"Send message",children:[h.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"}),h.jsx(Gf,{size:14,className:"relative z-10"})]})]}),h.jsxs("div",{className:"space-y-2 mt-3",children:[h.jsxs("div",{className:"flex justify-between items-center",children:[h.jsxs("div",{className:"text-[10px] text-gray-500 font-medium flex items-center space-x-2 flex-wrap",children:[h.jsx("span",{className:"whitespace-nowrap",children:"⏎ Send"}),h.jsx("span",{className:"whitespace-nowrap",children:"⇧⏎ Line"}),h.jsx("span",{className:"whitespace-nowrap",children:"⌘1-5 Framework"}),h.jsx("span",{className:i?"opacity-100":"opacity-50",children:"⌘K Code"})]}),i&&h.jsxs("button",{type:"button",onClick:y,className:"text-[10px] text-gray-600 hover:text-black transition-all duration-200 flex items-center space-x-1.5 px-2 py-1 rounded-lg hover:bg-gray-50 font-medium group shrink-0",children:[h.jsx(Zd,{size:10,className:"group-hover:scale-110 transition-transform duration-200"}),h.jsx("span",{children:"Copy"})]})]}),i&&h.jsxs("div",{className:"text-[10px] text-gray-400 font-medium",children:[i.code.split(`
`).length," lines generated"]})]})]})]}),h.jsx(nh,{isResizing:d,onResizeStart:En,resizeRef:O}),h.jsxs("div",{className:"bg-gray-50 flex flex-col preview-width overflow-hidden",children:[h.jsxs("div",{className:`flex items-center justify-between px-8 py-6 border-b border-gray-200/50 bg-white/80 backdrop-blur-sm transition-all duration-300 ${k?"pr-4":""}`,children:[h.jsxs("div",{className:"flex items-center space-x-4",children:[h.jsxs("div",{className:"flex items-center space-x-2",children:[h.jsx("div",{className:"w-1 h-4 bg-black rounded-full"}),h.jsx("h3",{className:"font-medium text-black tracking-tight",children:"Preview"})]}),h.jsxs("div",{className:"text-xs text-gray-500 bg-gray-50 px-2.5 py-1 rounded-lg font-medium border border-gray-100",children:[Math.round(M),"% • ",Math.round(100-M),"%"]})]}),h.jsxs("div",{className:`flex items-center transition-all duration-300 ${k?"space-x-2":"space-x-4"}`,children:[i&&!k&&h.jsxs("div",{className:"flex items-center space-x-2",children:[h.jsx("div",{className:"w-1.5 h-1.5 bg-black rounded-full"}),h.jsx("span",{className:"text-xs text-gray-600 capitalize font-medium",children:i.preview})]}),h.jsxs("div",{className:"flex items-center space-x-3",children:[h.jsx(ah,{onClick:()=>I(!k),disabled:!i,isActive:k,framework:T}),!k&&h.jsx("div",{className:"text-xs text-gray-400 font-medium whitespace-nowrap",children:"⌘1-5"})]})]})]}),h.jsx("div",{className:"flex-1 p-8",children:v()})]})]}),h.jsx(oh,{isOpen:k,code:(i==null?void 0:i.code)||"",componentName:(i==null?void 0:i.preview.replace(/\s+/g,""))||"Component",framework:T,frameworks:R,onFrameworkChange:Le}),h.jsx(dh,{})]})};function Lx(){return h.jsx(Mx,{})}sl.initialize().then(()=>{console.log("🤖 RAG Service initialized successfully")}).catch(e=>{console.warn("⚠️ RAG Service initialization failed:",e)});aa.createRoot(document.getElementById("root")).render(h.jsx(Mp.StrictMode,{children:h.jsx(Lx,{})}));
