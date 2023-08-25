"use strict";var e=require("react");function t(e){var t=Object.create(null);return e&&Object.keys(e).forEach((function(r){if("default"!==r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})}})),t.default=e,Object.freeze(t)}var r=t(e);function n(){return n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},n.apply(this,arguments)}function o(e){var t=Object.create(null);return function(r){return void 0===t[r]&&(t[r]=e(r)),t[r]}}var a=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,i=o((function(e){return a.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91}));var s=function(){function e(e){var t=this;this._insertTag=function(e){var r;r=0===t.tags.length?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(e,r),t.tags.push(e)},this.isSpeedy=void 0===e.speedy?"production"===process.env.NODE_ENV:e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(function(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),void 0!==e.nonce&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}(this));var t=this.tags[this.tags.length-1];if("production"!==process.env.NODE_ENV){var r=64===e.charCodeAt(0)&&105===e.charCodeAt(1);r&&this._alreadyInsertedOrderInsensitiveRule&&console.error("You're attempting to insert the following rule:\n"+e+"\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules."),this._alreadyInsertedOrderInsensitiveRule=this._alreadyInsertedOrderInsensitiveRule||!r}if(this.isSpeedy){var n=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(t);try{n.insertRule(e,n.cssRules.length)}catch(t){"production"===process.env.NODE_ENV||/:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear|-ms-expand|-ms-reveal){/.test(e)||console.error('There was a problem inserting the following rule: "'+e+'"',t)}}else t.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach((function(e){return e.parentNode&&e.parentNode.removeChild(e)})),this.tags=[],this.ctr=0,"production"!==process.env.NODE_ENV&&(this._alreadyInsertedOrderInsensitiveRule=!1)},e}(),c="-ms-",l="-moz-",u="-webkit-",d="comm",p="rule",f="decl",h="@keyframes",m=Math.abs,g=String.fromCharCode,v=Object.assign;function y(e){return e.trim()}function b(e,t,r){return e.replace(t,r)}function k(e,t){return e.indexOf(t)}function w(e,t){return 0|e.charCodeAt(t)}function E(e,t,r){return e.slice(t,r)}function x(e){return e.length}function C(e){return e.length}function _(e,t){return t.push(e),e}var N=1,O=1,S=0,A=0,$=0,P="";function F(e,t,r,n,o,a,i){return{value:e,root:t,parent:r,type:n,props:o,children:a,line:N,column:O,length:i,return:""}}function T(e,t){return v(F("",null,null,"",null,null,0),e,{length:-e.length},t)}function D(){return $=A>0?w(P,--A):0,O--,10===$&&(O=1,N--),$}function M(){return $=A<S?w(P,A++):0,O++,10===$&&(O=1,N++),$}function V(){return w(P,A)}function j(){return A}function z(e,t){return E(P,e,t)}function R(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function I(e){return N=O=1,S=x(P=e),A=0,[]}function L(e){return P="",e}function B(e){return y(z(A-1,U(91===e?e+2:40===e?e+1:e)))}function q(e){for(;($=V())&&$<33;)M();return R(e)>2||R($)>3?"":" "}function H(e,t){for(;--t&&M()&&!($<48||$>102||$>57&&$<65||$>70&&$<97););return z(e,j()+(t<6&&32==V()&&32==M()))}function U(e){for(;M();)switch($){case e:return A;case 34:case 39:34!==e&&39!==e&&U($);break;case 40:41===e&&U(e);break;case 92:M()}return A}function Y(e,t){for(;M()&&e+$!==57&&(e+$!==84||47!==V()););return"/*"+z(t,A-1)+"*"+g(47===e?e:M())}function Z(e){for(;!R(V());)M();return z(e,A)}function W(e){return L(G("",null,null,null,[""],e=I(e),0,[0],e))}function G(e,t,r,n,o,a,i,s,c){for(var l=0,u=0,d=i,p=0,f=0,h=0,m=1,v=1,y=1,E=0,C="",N=o,O=a,S=n,A=C;v;)switch(h=E,E=M()){case 40:if(108!=h&&58==w(A,d-1)){-1!=k(A+=b(B(E),"&","&\f"),"&\f")&&(y=-1);break}case 34:case 39:case 91:A+=B(E);break;case 9:case 10:case 13:case 32:A+=q(h);break;case 92:A+=H(j()-1,7);continue;case 47:switch(V()){case 42:case 47:_(J(Y(M(),j()),t,r),c);break;default:A+="/"}break;case 123*m:s[l++]=x(A)*y;case 125*m:case 59:case 0:switch(E){case 0:case 125:v=0;case 59+u:-1==y&&(A=b(A,/\f/g,"")),f>0&&x(A)-d&&_(f>32?K(A+";",n,r,d-1):K(b(A," ","")+";",n,r,d-2),c);break;case 59:A+=";";default:if(_(S=X(A,t,r,l,u,o,s,C,N=[],O=[],d),a),123===E)if(0===u)G(A,t,S,S,N,a,d,s,O);else switch(99===p&&110===w(A,3)?100:p){case 100:case 108:case 109:case 115:G(e,S,S,n&&_(X(e,S,S,0,0,o,s,C,o,N=[],d),O),o,O,d,s,n?N:O);break;default:G(A,S,S,S,[""],O,0,s,O)}}l=u=f=0,m=y=1,C=A="",d=i;break;case 58:d=1+x(A),f=h;default:if(m<1)if(123==E)--m;else if(125==E&&0==m++&&125==D())continue;switch(A+=g(E),E*m){case 38:y=u>0?1:(A+="\f",-1);break;case 44:s[l++]=(x(A)-1)*y,y=1;break;case 64:45===V()&&(A+=B(M())),p=V(),u=d=x(C=A+=Z(j())),E++;break;case 45:45===h&&2==x(A)&&(m=0)}}return a}function X(e,t,r,n,o,a,i,s,c,l,u){for(var d=o-1,f=0===o?a:[""],h=C(f),g=0,v=0,k=0;g<n;++g)for(var w=0,x=E(e,d+1,d=m(v=i[g])),_=e;w<h;++w)(_=y(v>0?f[w]+" "+x:b(x,/&\f/g,f[w])))&&(c[k++]=_);return F(e,t,r,0===o?p:s,c,l,u)}function J(e,t,r){return F(e,t,r,d,g($),E(e,2,-2),0)}function K(e,t,r,n){return F(e,t,r,f,E(e,0,n),E(e,n+1,-1),n)}function Q(e,t){for(var r="",n=C(e),o=0;o<n;o++)r+=t(e[o],o,e,t)||"";return r}function ee(e,t,r,n){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case f:return e.return=e.return||e.value;case d:return"";case h:return e.return=e.value+"{"+Q(e.children,n)+"}";case p:e.value=e.props.join(",")}return x(r=Q(e.children,n))?e.return=e.value+"{"+r+"}":""}function te(e){var t=C(e);return function(r,n,o,a){for(var i="",s=0;s<t;s++)i+=e[s](r,n,o,a)||"";return i}}var re=function(e,t,r){for(var n=0,o=0;n=o,o=V(),38===n&&12===o&&(t[r]=1),!R(o);)M();return z(e,A)},ne=function(e,t){return L(function(e,t){var r=-1,n=44;do{switch(R(n)){case 0:38===n&&12===V()&&(t[r]=1),e[r]+=re(A-1,t,r);break;case 2:e[r]+=B(n);break;case 4:if(44===n){e[++r]=58===V()?"&\f":"",t[r]=e[r].length;break}default:e[r]+=g(n)}}while(n=M());return e}(I(e),t))},oe=new WeakMap,ae=function(e){if("rule"===e.type&&e.parent&&!(e.length<1)){for(var t=e.value,r=e.parent,n=e.column===r.column&&e.line===r.line;"rule"!==r.type;)if(!(r=r.parent))return;if((1!==e.props.length||58===t.charCodeAt(0)||oe.get(r))&&!n){oe.set(e,!0);for(var o=[],a=ne(t,o),i=r.props,s=0,c=0;s<a.length;s++)for(var l=0;l<i.length;l++,c++)e.props[c]=o[s]?a[s].replace(/&\f/g,i[l]):i[l]+" "+a[s]}}},ie=function(e){if("decl"===e.type){var t=e.value;108===t.charCodeAt(0)&&98===t.charCodeAt(2)&&(e.return="",e.value="")}},se=function(e){return"comm"===e.type&&e.children.indexOf("emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason")>-1},ce=function(e){return 105===e.type.charCodeAt(1)&&64===e.type.charCodeAt(0)},le=function(e){e.type="",e.value="",e.return="",e.children="",e.props=""},ue=function(e,t,r){ce(e)&&(e.parent?(console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles."),le(e)):function(e,t){for(var r=e-1;r>=0;r--)if(!ce(t[r]))return!0;return!1}(t,r)&&(console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules."),le(e)))};function de(e,t){switch(function(e,t){return 45^w(e,0)?(((t<<2^w(e,0))<<2^w(e,1))<<2^w(e,2))<<2^w(e,3):0}(e,t)){case 5103:return u+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return u+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return u+e+l+e+c+e+e;case 6828:case 4268:return u+e+c+e+e;case 6165:return u+e+c+"flex-"+e+e;case 5187:return u+e+b(e,/(\w+).+(:[^]+)/,u+"box-$1$2"+c+"flex-$1$2")+e;case 5443:return u+e+c+"flex-item-"+b(e,/flex-|-self/,"")+e;case 4675:return u+e+c+"flex-line-pack"+b(e,/align-content|flex-|-self/,"")+e;case 5548:return u+e+c+b(e,"shrink","negative")+e;case 5292:return u+e+c+b(e,"basis","preferred-size")+e;case 6060:return u+"box-"+b(e,"-grow","")+u+e+c+b(e,"grow","positive")+e;case 4554:return u+b(e,/([^-])(transform)/g,"$1"+u+"$2")+e;case 6187:return b(b(b(e,/(zoom-|grab)/,u+"$1"),/(image-set)/,u+"$1"),e,"")+e;case 5495:case 3959:return b(e,/(image-set\([^]*)/,u+"$1$`$1");case 4968:return b(b(e,/(.+:)(flex-)?(.*)/,u+"box-pack:$3"+c+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+u+e+e;case 4095:case 3583:case 4068:case 2532:return b(e,/(.+)-inline(.+)/,u+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(x(e)-1-t>6)switch(w(e,t+1)){case 109:if(45!==w(e,t+4))break;case 102:return b(e,/(.+:)(.+)-([^]+)/,"$1"+u+"$2-$3$1"+l+(108==w(e,t+3)?"$3":"$2-$3"))+e;case 115:return~k(e,"stretch")?de(b(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(115!==w(e,t+1))break;case 6444:switch(w(e,x(e)-3-(~k(e,"!important")&&10))){case 107:return b(e,":",":"+u)+e;case 101:return b(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+u+(45===w(e,14)?"inline-":"")+"box$3$1"+u+"$2$3$1"+c+"$2box$3")+e}break;case 5936:switch(w(e,t+11)){case 114:return u+e+c+b(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return u+e+c+b(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return u+e+c+b(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return u+e+c+e+e}return e}var pe,fe,he="undefined"!=typeof document,me=he?void 0:(pe=function(){return o((function(){var e={};return function(t){return e[t]}}))},fe=new WeakMap,function(e){if(fe.has(e))return fe.get(e);var t=pe(e);return fe.set(e,t),t}),ge=[function(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case f:e.return=de(e.value,e.length);break;case h:return Q([T(e,{value:b(e.value,"@","@"+u)})],n);case p:if(e.length)return function(e,t){return e.map(t).join("")}(e.props,(function(t){switch(function(e,t){return(e=t.exec(e))?e[0]:e}(t,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Q([T(e,{props:[b(t,/:(read-\w+)/,":-moz-$1")]})],n);case"::placeholder":return Q([T(e,{props:[b(t,/:(plac\w+)/,":"+u+"input-$1")]}),T(e,{props:[b(t,/:(plac\w+)/,":-moz-$1")]}),T(e,{props:[b(t,/:(plac\w+)/,c+"input-$1")]})],n)}return""}))}}],ve=function(e){var t=e.key;if("production"!==process.env.NODE_ENV&&!t)throw new Error("You have to configure `key` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.\nIf multiple caches share the same key they might \"fight\" for each other's style elements.");if(he&&"css"===t){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,(function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))}))}var n=e.stylisPlugins||ge;if("production"!==process.env.NODE_ENV&&/[^a-z-]/.test(t))throw new Error('Emotion key must only contain lower case alphabetical characters and - but "'+t+'" was passed');var o,a,i={},c=[];he&&(o=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),(function(e){for(var t=e.getAttribute("data-emotion").split(" "),r=1;r<t.length;r++)i[t[r]]=!0;c.push(e)})));var l,u=[ae,ie];if("production"!==process.env.NODE_ENV&&u.push(function(e){return function(t,r,n){if("rule"===t.type&&!e.compat){var o=t.value.match(/(:first|:nth|:nth-last)-child/g);if(o){for(var a=t.parent?t.parent.children:n,i=a.length-1;i>=0;i--){var s=a[i];if(s.line<t.line)break;if(s.column<t.column){if(se(s))return;break}}o.forEach((function(e){console.error('The pseudo class "'+e+'" is potentially unsafe when doing server-side rendering. Try changing it to "'+e.split("-child")[0]+'-of-type".')}))}}}}({get compat(){return b.compat}}),ue),he){var p,f=[ee,"production"!==process.env.NODE_ENV?function(e){e.root||(e.return?p.insert(e.return):e.value&&e.type!==d&&p.insert(e.value+"{}"))}:(l=function(e){p.insert(e)},function(e){e.root||(e=e.return)&&l(e)})],h=te(u.concat(n,f));a=function(e,t,r,n){p=r,"production"!==process.env.NODE_ENV&&void 0!==t.map&&(p={insert:function(e){r.insert(e+t.map)}}),Q(W(e?e+"{"+t.styles+"}":t.styles),h),n&&(b.inserted[t.name]=!0)}}else{var m=[ee],g=te(u.concat(n,m)),v=me(n)(t),y=function(e,t){var r=t.name;return void 0===v[r]&&(v[r]=Q(W(e?e+"{"+t.styles+"}":t.styles),g)),v[r]};a=function(e,t,r,n){var o=t.name,a=y(e,t);return void 0===b.compat?(n&&(b.inserted[o]=!0),"development"===process.env.NODE_ENV&&void 0!==t.map?a+t.map:a):n?void(b.inserted[o]=a):a}}var b={key:t,sheet:new s({key:t,container:o,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:i,registered:{},insert:a};return b.sheet.hydrate(c),b},ye="undefined"!=typeof document;function be(e,t,r){var n="";return r.split(" ").forEach((function(r){void 0!==e[r]?t.push(e[r]+";"):n+=r+" "})),n}var ke=function(e,t,r){var n=e.key+"-"+t.name;(!1===r||!1===ye&&void 0!==e.compat)&&void 0===e.registered[n]&&(e.registered[n]=t.styles)},we=function(e,t,r){ke(e,t,r);var n=e.key+"-"+t.name;if(void 0===e.inserted[t.name]){var o="",a=t;do{var i=e.insert(t===a?"."+n:"",a,e.sheet,!0);ye||void 0===i||(o+=i),a=a.next}while(void 0!==a);if(!ye&&0!==o.length)return o}};var Ee={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},xe="You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences",Ce="You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).",_e=/[A-Z]|^ms/g,Ne=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Oe=function(e){return 45===e.charCodeAt(1)},Se=function(e){return null!=e&&"boolean"!=typeof e},Ae=o((function(e){return Oe(e)?e:e.replace(_e,"-$&").toLowerCase()})),$e=function(e,t){switch(e){case"animation":case"animationName":if("string"==typeof t)return t.replace(Ne,(function(e,t,r){return Ie={name:t,styles:r,next:Ie},t}))}return 1===Ee[e]||Oe(e)||"number"!=typeof t||0===t?t:t+"px"};if("production"!==process.env.NODE_ENV){var Pe=/(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/,Fe=["normal","none","initial","inherit","unset"],Te=$e,De=/^-ms-/,Me=/-(.)/g,Ve={};$e=function(e,t){if("content"===e&&("string"!=typeof t||-1===Fe.indexOf(t)&&!Pe.test(t)&&(t.charAt(0)!==t.charAt(t.length-1)||'"'!==t.charAt(0)&&"'"!==t.charAt(0))))throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\""+t+"\"'`");var r=Te(e,t);return""===r||Oe(e)||-1===e.indexOf("-")||void 0!==Ve[e]||(Ve[e]=!0,console.error("Using kebab-case for css properties in objects is not supported. Did you mean "+e.replace(De,"ms-").replace(Me,(function(e,t){return t.toUpperCase()}))+"?")),r}}var je="Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";function ze(e,t,r){if(null==r)return"";if(void 0!==r.__emotion_styles){if("production"!==process.env.NODE_ENV&&"NO_COMPONENT_SELECTOR"===r.toString())throw new Error(je);return r}switch(typeof r){case"boolean":return"";case"object":if(1===r.anim)return Ie={name:r.name,styles:r.styles,next:Ie},r.name;if(void 0!==r.styles){var n=r.next;if(void 0!==n)for(;void 0!==n;)Ie={name:n.name,styles:n.styles,next:Ie},n=n.next;var o=r.styles+";";return"production"!==process.env.NODE_ENV&&void 0!==r.map&&(o+=r.map),o}return function(e,t,r){var n="";if(Array.isArray(r))for(var o=0;o<r.length;o++)n+=ze(e,t,r[o])+";";else for(var a in r){var i=r[a];if("object"!=typeof i)null!=t&&void 0!==t[i]?n+=a+"{"+t[i]+"}":Se(i)&&(n+=Ae(a)+":"+$e(a,i)+";");else{if("NO_COMPONENT_SELECTOR"===a&&"production"!==process.env.NODE_ENV)throw new Error(je);if(!Array.isArray(i)||"string"!=typeof i[0]||null!=t&&void 0!==t[i[0]]){var s=ze(e,t,i);switch(a){case"animation":case"animationName":n+=Ae(a)+":"+s+";";break;default:"production"!==process.env.NODE_ENV&&"undefined"===a&&console.error(Ce),n+=a+"{"+s+"}"}}else for(var c=0;c<i.length;c++)Se(i[c])&&(n+=Ae(a)+":"+$e(a,i[c])+";")}}return n}(e,t,r);case"function":if(void 0!==e){var a=Ie,i=r(e);return Ie=a,ze(e,t,i)}"production"!==process.env.NODE_ENV&&console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");break;case"string":if("production"!==process.env.NODE_ENV){var s=[],c=r.replace(Ne,(function(e,t,r){var n="animation"+s.length;return s.push("const "+n+" = keyframes`"+r.replace(/^@keyframes animation-\w+/,"")+"`"),"${"+n+"}"}));s.length&&console.error("`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n"+[].concat(s,["`"+c+"`"]).join("\n")+"\n\nYou should wrap it with `css` like this:\n\ncss`"+c+"`")}}if(null==t)return r;var l=t[r];return void 0!==l?l:r}var Re,Ie,Le=/label:\s*([^\s;\n{]+)\s*(;|$)/g;"production"!==process.env.NODE_ENV&&(Re=/\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g);var Be=function(e,t,r){if(1===e.length&&"object"==typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var n=!0,o="";Ie=void 0;var a,i=e[0];null==i||void 0===i.raw?(n=!1,o+=ze(r,t,i)):("production"!==process.env.NODE_ENV&&void 0===i[0]&&console.error(xe),o+=i[0]);for(var s=1;s<e.length;s++)o+=ze(r,t,e[s]),n&&("production"!==process.env.NODE_ENV&&void 0===i[s]&&console.error(xe),o+=i[s]);"production"!==process.env.NODE_ENV&&(o=o.replace(Re,(function(e){return a=e,""}))),Le.lastIndex=0;for(var c,l="";null!==(c=Le.exec(o));)l+="-"+c[1];var u=function(e){for(var t,r=0,n=0,o=e.length;o>=4;++n,o-=4)t=1540483477*(65535&(t=255&e.charCodeAt(n)|(255&e.charCodeAt(++n))<<8|(255&e.charCodeAt(++n))<<16|(255&e.charCodeAt(++n))<<24))+(59797*(t>>>16)<<16),r=1540483477*(65535&(t^=t>>>24))+(59797*(t>>>16)<<16)^1540483477*(65535&r)+(59797*(r>>>16)<<16);switch(o){case 3:r^=(255&e.charCodeAt(n+2))<<16;case 2:r^=(255&e.charCodeAt(n+1))<<8;case 1:r=1540483477*(65535&(r^=255&e.charCodeAt(n)))+(59797*(r>>>16)<<16)}return(((r=1540483477*(65535&(r^=r>>>13))+(59797*(r>>>16)<<16))^r>>>15)>>>0).toString(36)}(o)+l;return"production"!==process.env.NODE_ENV?{name:u,styles:o,map:a,next:Ie,toString:function(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."}}:{name:u,styles:o,next:Ie}},qe="undefined"!=typeof document,He=function(e){return e()},Ue=!!r.useInsertionEffect&&r.useInsertionEffect,Ye=qe&&Ue||He,Ze="undefined"!=typeof document,We={}.hasOwnProperty,Ge=r.createContext("undefined"!=typeof HTMLElement?ve({key:"css"}):null);"production"!==process.env.NODE_ENV&&(Ge.displayName="EmotionCacheContext"),Ge.Provider;var Xe=function(t){return e.forwardRef((function(r,n){var o=e.useContext(Ge);return t(r,o,n)}))};Ze||(Xe=function(t){return function(n){var o=e.useContext(Ge);return null===o?(o=ve({key:"css"}),r.createElement(Ge.Provider,{value:o},t(n,o))):t(n,o)}});var Je=r.createContext({});"production"!==process.env.NODE_ENV&&(Je.displayName="EmotionThemeContext");var Ke="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",Qe="__EMOTION_LABEL_PLEASE_DO_NOT_USE__",et=function(e){var t=e.cache,n=e.serialized,o=e.isStringTag;ke(t,n,o);var a=Ye((function(){return we(t,n,o)}));if(!Ze&&void 0!==a){for(var i,s=n.name,c=n.next;void 0!==c;)s+=" "+c.name,c=c.next;return r.createElement("style",((i={})["data-emotion"]=t.key+" "+s,i.dangerouslySetInnerHTML={__html:a},i.nonce=t.sheet.nonce,i))}return null},tt=Xe((function(e,t,n){var o=e.css;"string"==typeof o&&void 0!==t.registered[o]&&(o=t.registered[o]);var a=e[Ke],i=[o],s="";"string"==typeof e.className?s=be(t.registered,i,e.className):null!=e.className&&(s=e.className+" ");var c=Be(i,void 0,r.useContext(Je));if("production"!==process.env.NODE_ENV&&-1===c.name.indexOf("-")){var l=e[Qe];l&&(c=Be([c,"label:"+l+";"]))}s+=t.key+"-"+c.name;var u={};for(var d in e)!We.call(e,d)||"css"===d||d===Ke||"production"!==process.env.NODE_ENV&&d===Qe||(u[d]=e[d]);return u.ref=n,u.className=s,r.createElement(r.Fragment,null,r.createElement(et,{cache:t,serialized:c,isStringTag:"string"==typeof a}),r.createElement(a,u))}));"production"!==process.env.NODE_ENV&&(tt.displayName="EmotionCssPropInternal");var rt=i,nt=function(e){return"theme"!==e},ot=function(e){return"string"==typeof e&&e.charCodeAt(0)>96?rt:nt},at=function(e,t,r){var n;if(t){var o=t.shouldForwardProp;n=e.__emotion_forwardProp&&o?function(t){return e.__emotion_forwardProp(t)&&o(t)}:o}return"function"!=typeof n&&r&&(n=e.__emotion_forwardProp),n},it="You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences",st="undefined"!=typeof document,ct=function(e){var t=e.cache,n=e.serialized,o=e.isStringTag;ke(t,n,o);var a=Ye((function(){return we(t,n,o)}));if(!st&&void 0!==a){for(var i,s=n.name,c=n.next;void 0!==c;)s+=" "+c.name,c=c.next;return r.createElement("style",((i={})["data-emotion"]=t.key+" "+s,i.dangerouslySetInnerHTML={__html:a},i.nonce=t.sheet.nonce,i))}return null},lt=function e(t,o){if("production"!==process.env.NODE_ENV&&void 0===t)throw new Error("You are trying to create a styled element with an undefined component.\nYou may have forgotten to import it.");var a,i,s=t.__emotion_real===t,c=s&&t.__emotion_base||t;void 0!==o&&(a=o.label,i=o.target);var l=at(t,o,s),u=l||ot(c),d=!u("as");return function(){var p=arguments,f=s&&void 0!==t.__emotion_styles?t.__emotion_styles.slice(0):[];if(void 0!==a&&f.push("label:"+a+";"),null==p[0]||void 0===p[0].raw)f.push.apply(f,p);else{"production"!==process.env.NODE_ENV&&void 0===p[0][0]&&console.error(it),f.push(p[0][0]);for(var h=p.length,m=1;m<h;m++)"production"!==process.env.NODE_ENV&&void 0===p[0][m]&&console.error(it),f.push(p[m],p[0][m])}var g=Xe((function(e,t,n){var o=d&&e.as||c,a="",s=[],p=e;if(null==e.theme){for(var h in p={},e)p[h]=e[h];p.theme=r.useContext(Je)}"string"==typeof e.className?a=be(t.registered,s,e.className):null!=e.className&&(a=e.className+" ");var m=Be(f.concat(s),t.registered,p);a+=t.key+"-"+m.name,void 0!==i&&(a+=" "+i);var g=d&&void 0===l?ot(o):u,v={};for(var y in e)d&&"as"===y||g(y)&&(v[y]=e[y]);return v.className=a,v.ref=n,r.createElement(r.Fragment,null,r.createElement(ct,{cache:t,serialized:m,isStringTag:"string"==typeof o}),r.createElement(o,v))}));return g.displayName=void 0!==a?a:"Styled("+("string"==typeof c?c:c.displayName||c.name||"Component")+")",g.defaultProps=t.defaultProps,g.__emotion_real=g,g.__emotion_base=c,g.__emotion_styles=f,g.__emotion_forwardProp=l,Object.defineProperty(g,"toString",{value:function(){return void 0===i&&"production"!==process.env.NODE_ENV?"NO_COMPONENT_SELECTOR":"."+i}}),g.withComponent=function(t,r){return e(t,n({},o,r,{shouldForwardProp:at(g,r,!0)})).apply(void 0,f)},g}}.bind();["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"].forEach((function(e){lt[e]=lt(e)}));const ut={red:{backgroundColor:"#FF0000",textColor:"#F5F5F5"},pink:{backgroundColor:"#FFC0CB",textColor:"#3D000A"},orange:{backgroundColor:"#F87315",textColor:"#F5F5F5"},yellow:{backgroundColor:"#FFFF00",textColor:"#292900"},green:{backgroundColor:"#00E000",textColor:"#002900"},teal:{backgroundColor:"#0CA9A9",textColor:"#F5F5F5"},blue:{backgroundColor:"#0000FF",textColor:"#F5F5F5"},cyan:{backgroundColor:"#01FFFF",textColor:"#002929"},indigo:{backgroundColor:"#5035FF",textColor:"#F5F5F5"},purple:{backgroundColor:"#800080",textColor:"#F5F5F5"},gray:{backgroundColor:"#6A7280",textColor:"#F5F5F5"}},dt={settings:()=>e.createElement("svg",{fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},e.createElement("g",{stroke:"currentcolor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},e.createElement("path",{d:"m20.35 8.923-.366-.204a2 2 0 0 1-.784-.724c-.017-.027-.033-.056-.065-.112a2.002 2.002 0 0 1-.3-1.157l.006-.425c.012-.68.018-1.022-.078-1.328a1.998 1.998 0 0 0-.417-.736c-.214-.24-.511-.412-1.106-.754l-.494-.285c-.592-.341-.889-.512-1.204-.577a1.999 1.999 0 0 0-.843.007c-.313.07-.606.246-1.191.596l-.003.002-.354.211c-.056.034-.085.05-.113.066-.278.155-.588.24-.907.25-.032.002-.065.002-.13.002l-.13-.001a1.997 1.997 0 0 1-.91-.252c-.028-.015-.055-.032-.111-.066l-.357-.214c-.589-.354-.884-.53-1.199-.601a1.998 1.998 0 0 0-.846-.006c-.316.066-.612.238-1.205.582l-.003.001-.488.283-.005.004c-.588.34-.883.512-1.095.751a2 2 0 0 0-.415.734c-.095.307-.09.649-.078 1.333l.007.424c0 .065.003.097.002.128a2.002 2.002 0 0 1-.301 1.027c-.033.056-.048.084-.065.11a2 2 0 0 1-.675.664l-.112.063-.361.2c-.602.333-.903.5-1.121.738a2 2 0 0 0-.43.73c-.1.307-.1.65-.099 1.338l.002.563c.001.683.003 1.024.104 1.329a2 2 0 0 0 .427.726c.218.236.516.402 1.113.734l.358.199c.061.034.092.05.121.068a2 2 0 0 1 .74.781l.067.12a2 2 0 0 1 .23 1.038l-.007.407c-.012.686-.017 1.03.079 1.337.085.272.227.523.417.736.214.24.512.411 1.106.754l.494.285c.593.341.889.512 1.204.577a2 2 0 0 0 .843-.007c.314-.07.607-.246 1.194-.598l.354-.212a1.997 1.997 0 0 1 1.02-.317h.26c.318.01.63.097.91.252l.092.055.376.226c.59.354.884.53 1.199.6a2 2 0 0 0 .846.008c.315-.066.613-.239 1.206-.583l.495-.287c.588-.342.883-.513 1.095-.752.19-.213.33-.463.415-.734.095-.305.09-.644.078-1.318l-.008-.44a2 2 0 0 1 .3-1.155l.065-.11a2 2 0 0 1 .675-.664l.11-.061.002-.001.361-.2c.602-.334.903-.5 1.122-.738.194-.21.34-.46.429-.73.1-.305.1-.647.098-1.327l-.002-.574c-.001-.683-.002-1.025-.103-1.33a2.002 2.002 0 0 0-.428-.725c-.217-.236-.515-.402-1.111-.733l-.002-.001Z"}),e.createElement("path",{d:"M8 12a4 4 0 1 0 8 0 4 4 0 0 0-8 0Z"}))),info:()=>e.createElement("svg",{fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},e.createElement("path",{d:"M12 11v5m0 5a9 9 0 1 1 0-18 9 9 0 0 1 0 18Zm.05-13v.1h-.1V8h.1Z",stroke:"currentcolor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})),search:()=>e.createElement("svg",{fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},e.createElement("path",{d:"m15 15 6 6m-11-4a7 7 0 1 1 0-14 7 7 0 0 1 0 14Z",stroke:"currentcolor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})),home:()=>e.createElement("svg",{fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},e.createElement("path",{d:"M4 11.452V16.8c0 1.12 0 1.68.218 2.109.192.376.497.682.874.873.427.218.987.218 2.105.218h9.606c1.118 0 1.677 0 2.104-.218a2 2 0 0 0 .875-.873c.218-.428.218-.987.218-2.105v-5.352c0-.534 0-.801-.065-1.05a1.998 1.998 0 0 0-.28-.617c-.145-.213-.345-.39-.748-.741l-4.8-4.2c-.746-.653-1.12-.98-1.54-1.104-.37-.11-.764-.11-1.135 0-.42.124-.792.45-1.538 1.102L5.093 9.044c-.402.352-.603.528-.747.74a2 2 0 0 0-.281.618C4 10.65 4 10.918 4 11.452Z",stroke:"currentcolor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})),send:()=>e.createElement("svg",{fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},e.createElement("path",{d:"m10.308 13.692 4.846-4.846M20.11 5.89l-4.09 13.294c-.367 1.192-.55 1.788-.867 1.985a.999.999 0 0 1-.912.076c-.345-.143-.624-.7-1.182-1.816l-2.59-5.182a2.104 2.104 0 0 0-.193-.342 1.002 1.002 0 0 0-.18-.181 2.036 2.036 0 0 0-.331-.186L4.572 10.94c-1.115-.558-1.673-.837-1.816-1.181a1 1 0 0 1 .076-.913c.197-.316.793-.5 1.985-.867l13.295-4.09c.937-.289 1.405-.433 1.722-.316a1 1 0 0 1 .594.594c.116.316-.028.784-.316 1.72v.002Z",stroke:"currentcolor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})),copy:()=>e.createElement("svg",{fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},e.createElement("path",{d:"M9 9V6.2c0-1.12 0-1.68.218-2.108.192-.377.497-.682.874-.874C10.52 3 11.08 3 12.2 3h5.6c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C21 4.52 21 5.08 21 6.2v5.6c0 1.12 0 1.68-.218 2.108a2.002 2.002 0 0 1-.874.874C19.48 15 18.92 15 17.803 15H15M9 9H6.2c-1.12 0-1.68 0-2.108.218a1.999 1.999 0 0 0-.874.874C3 10.52 3 11.08 3 12.2v5.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218h5.607c1.117 0 1.676 0 2.104-.218.376-.192.683-.498.874-.874.218-.428.218-.987.218-2.105V15M9 9h2.8c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874c.218.427.218.987.218 2.105V15",stroke:"currentcolor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})),expandDown:()=>e.createElement("svg",{fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},e.createElement("path",{d:"m19 9-7 7-7-7",stroke:"currentcolor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})),expandUp:()=>e.createElement("svg",{fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},e.createElement("path",{d:"m5 16 7-7 7 7",stroke:"currentcolor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})),burger:()=>e.createElement("svg",{fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},e.createElement("path",{d:"M3 17h18M3 12h18M3 7h18",stroke:"currentcolor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})),kebab:()=>e.createElement("svg",{fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},e.createElement("g",{stroke:"currentcolor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},e.createElement("path",{d:"M17 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0ZM11 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0ZM5 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z"}))),kebabVert:()=>e.createElement("svg",{fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},e.createElement("g",{stroke:"currentcolor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},e.createElement("path",{d:"M11 18a1 1 0 1 0 2 0 1 1 0 0 0-2 0ZM11 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0ZM11 6a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z"}))),close:()=>e.createElement("svg",{fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},e.createElement("path",{d:"m18 18-6-6m0 0L6 6m6 6 6-6m-6 6-6 6",stroke:"currentcolor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}))},pt=lt.button`
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-family: Arial, Helvetica, sans-serif;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: ${e=>"small"===e.buttonSize?"1rem":"medium"===e.buttonSize?"1.2rem":"large"===e.buttonSize?"1.32rem":"1rem"};
  ${e=>{const t=(r=e.buttonColor,ut[r]);var r;const n="small"===e.buttonSize?"8px 16px":"10px 18px",o=e.oval?"100px":"5px",a=e.disabled?"\n        opacity: 0.5;\n        cursor: default;\n        pointer-events: none;\n      ":"";return"outline"===e.buttonStyle?`\n        background-color: transparent;\n        border: 1.5px solid ${t.backgroundColor};\n        color: ${t.backgroundColor};\n        padding: ${n};\n        border-radius: ${o};\n        ${a}\n      `:"ghostHover"===e.buttonStyle?`\n        background-color: rgba(${t.backgroundColor}, 0);\n        color: ${t.backgroundColor};\n        &:hover {\n          background-color: rgba(${t.backgroundColor}, 0.4);\n        }\n        padding: ${n};\n        border-radius: ${o};\n        ${a}\n      `:"link"===e.buttonStyle?`\n        background-color: transparent;\n        color: ${t.backgroundColor};\n        text-decoration: none;\n        &:hover {\n          text-decoration: underline;\n        }\n        padding: ${n};\n        border-radius: ${o};\n        ${a}\n      `:`\n      background-color: ${t.backgroundColor};\n      color: ${t.textColor};\n      padding: ${n};\n      border-radius: ${o};\n      ${a}\n    `}}
`;exports.Button=({buttonColor:t="indigo",buttonSize:r="medium",buttonStyle:n="solid",icon:o=!1,iconStyle:a="search",iconPosition:i="left",oval:s=!1,disabled:c=!1,label:l,onClick:u})=>{const d=o&&a&&dt[a],p="small"===r?"20px":"medium"===r?"24px":"28px";return e.createElement(pt,{buttonColor:t,buttonStyle:n,buttonSize:r,oval:s,disabled:c,onClick:u},"left"===i&&d&&e.createElement("span",{style:{width:p,height:p,marginRight:"0.5rem"}},e.createElement(d,null)),l,"right"===i&&d&&e.createElement("span",{style:{width:p,height:p,marginLeft:"0.5rem"}},e.createElement(d,null)))};