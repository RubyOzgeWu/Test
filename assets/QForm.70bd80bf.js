import{i as Ee,r as N,o as ne,w as Z,a as y,a0 as _e,g as X,j as Be,e as ue,a1 as Se,a2 as $e,a3 as Me,A as de,f as W,X as Re,a4 as Fe,h as R,v as G,U as Ie,a5 as Pe,q as Oe,c as qe,x as me,C as Te}from"./index.be909082.js";import{f as ge,h as je,b as De}from"./QBtn.d21a24f0.js";import{a as ze,u as Ne}from"./use-dark.c0de732f.js";import{h as ee}from"./render.b5d51bce.js";let ie,oe=0;const z=new Array(256);for(let e=0;e<256;e++)z[e]=(e+256).toString(16).substring(1);const Ke=(()=>{const e=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(e!==void 0){if(e.randomBytes!==void 0)return e.randomBytes;if(e.getRandomValues!==void 0)return t=>{const r=new Uint8Array(t);return e.getRandomValues(r),r}}return t=>{const r=[];for(let u=t;u>0;u--)r.push(Math.floor(Math.random()*256));return r}})(),he=4096;function fe(){(ie===void 0||oe+16>he)&&(oe=0,ie=Ke(he));const e=Array.prototype.slice.call(ie,oe,oe+=16);return e[6]=e[6]&15|64,e[8]=e[8]&63|128,z[e[0]]+z[e[1]]+z[e[2]]+z[e[3]]+"-"+z[e[4]]+z[e[5]]+"-"+z[e[6]]+z[e[7]]+"-"+z[e[8]]+z[e[9]]+"-"+z[e[10]]+z[e[11]]+z[e[12]]+z[e[13]]+z[e[14]]+z[e[15]]}function Le(e){return e==null?null:e}function be(e,t){return e==null?t===!0?`f_${fe()}`:null:e}function Ze({getValue:e,required:t=!0}={}){if(Ee.value===!0){const r=e!==void 0?N(Le(e())):N(null);return t===!0&&r.value===null&&ne(()=>{r.value=`f_${fe()}`}),e!==void 0&&Z(e,u=>{r.value=be(u,t)}),r}return e!==void 0?y(()=>be(e(),t)):N(`f_${fe()}`)}const pe=/^on[A-Z]/;function Ue(){const{attrs:e,vnode:t}=X(),r={listeners:N({}),attributes:N({})};function u(){const f={},d={};for(const c in e)c!=="class"&&c!=="style"&&pe.test(c)===!1&&(f[c]=e[c]);for(const c in t.props)pe.test(c)===!0&&(d[c]=t.props[c]);r.attributes.value=f,r.listeners.value=d}return _e(u),u(),r}function He({validate:e,resetValidation:t,requiresQForm:r}){const u=Be(Se,!1);if(u!==!1){const{props:f,proxy:d}=X();Object.assign(d,{validate:e,resetValidation:t}),Z(()=>f.disable,c=>{c===!0?(typeof t=="function"&&t(),u.unbindComponent(d)):u.bindComponent(d)}),ne(()=>{f.disable!==!0&&u.bindComponent(d)}),ue(()=>{f.disable!==!0&&u.unbindComponent(d)})}else r===!0&&console.error("Parent QForm not found on useFormChild()!")}const ye=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,ke=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,xe=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,le=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,ae=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,se={date:e=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),time:e=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),fulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),timeOrFulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),email:e=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),hexColor:e=>ye.test(e),hexaColor:e=>ke.test(e),hexOrHexaColor:e=>xe.test(e),rgbColor:e=>le.test(e),rgbaColor:e=>ae.test(e),rgbOrRgbaColor:e=>le.test(e)||ae.test(e),hexOrRgbColor:e=>ye.test(e)||le.test(e),hexaOrRgbaColor:e=>ke.test(e)||ae.test(e),anyColor:e=>xe.test(e)||le.test(e)||ae.test(e)},Qe=[!0,!1,"ondemand"],We={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],default:!1,validator:e=>Qe.includes(e)}};function Ye(e,t){const{props:r,proxy:u}=X(),f=N(!1),d=N(null),c=N(!1);He({validate:T,resetValidation:A});let x=0,I;const F=y(()=>r.rules!==void 0&&r.rules!==null&&r.rules.length!==0),C=y(()=>r.disable!==!0&&F.value===!0&&t.value===!1),m=y(()=>r.error===!0||f.value===!0),H=y(()=>typeof r.errorMessage=="string"&&r.errorMessage.length!==0?r.errorMessage:d.value);Z(()=>r.modelValue,()=>{c.value=!0,C.value===!0&&r.lazyRules===!1&&j()});function v(){r.lazyRules!=="ondemand"&&C.value===!0&&c.value===!0&&j()}Z(()=>r.reactiveRules,K=>{K===!0?I===void 0&&(I=Z(()=>r.rules,v,{immediate:!0,deep:!0})):I!==void 0&&(I(),I=void 0)},{immediate:!0}),Z(()=>r.lazyRules,v),Z(e,K=>{K===!0?c.value=!0:C.value===!0&&r.lazyRules!=="ondemand"&&j()});function A(){x++,t.value=!1,c.value=!1,f.value=!1,d.value=null,j.cancel()}function T(K=r.modelValue){if(r.disable===!0||F.value===!1)return!0;const P=++x,q=t.value!==!0?()=>{c.value=!0}:()=>{},V=(S,w)=>{S===!0&&q(),f.value=S,d.value=w||null,t.value=!1},E=[];for(let S=0;S<r.rules.length;S++){const w=r.rules[S];let D;if(typeof w=="function"?D=w(K,se):typeof w=="string"&&se[w]!==void 0&&(D=se[w](K)),D===!1||typeof D=="string")return V(!0,D),!1;D!==!0&&D!==void 0&&E.push(D)}return E.length===0?(V(!1),!0):(t.value=!0,Promise.all(E).then(S=>{if(S===void 0||Array.isArray(S)===!1||S.length===0)return P===x&&V(!1),!0;const w=S.find(D=>D===!1||typeof D=="string");return P===x&&V(w!==void 0,w),w===void 0},S=>(P===x&&(console.error(S),V(!0)),!1)))}const j=$e(T,0);return ue(()=>{I!==void 0&&I(),j.cancel()}),Object.assign(u,{resetValidation:A,validate:T}),Me(u,"hasError",()=>m.value),{isDirtyModel:c,hasRules:F,hasError:m,errorMessage:H,validate:T,resetValidation:A}}let Y=[],te=[];function Ve(e){te=te.filter(t=>t!==e)}function pt(e){Ve(e),te.push(e)}function yt(e){Ve(e),te.length===0&&Y.length!==0&&(Y[Y.length-1](),Y=[])}function ve(e){te.length===0?e():Y.push(e)}function Xe(e){Y=Y.filter(t=>t!==e)}function ce(e){return e!=null&&(""+e).length!==0}const Je={...Ne,...We,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String},Ge={...Je,maxlength:[Number,String]},et=["update:modelValue","clear","focus","blur"];function tt({requiredForAttr:e=!0,tagProp:t,changeEvent:r=!1}={}){const{props:u,proxy:f}=X(),d=ze(u,f.$q),c=Ze({required:e,getValue:()=>u.for});return{requiredForAttr:e,changeEvent:r,tag:t===!0?y(()=>u.tag):{value:"label"},isDark:d,editable:y(()=>u.disable!==!0&&u.readonly!==!0),innerLoading:N(!1),focused:N(!1),hasPopupOpen:!1,splitAttrs:Ue(),targetUid:c,rootRef:N(null),targetRef:N(null),controlRef:N(null)}}function nt(e){const{props:t,emit:r,slots:u,attrs:f,proxy:d}=X(),{$q:c}=d;let x=null;e.hasValue===void 0&&(e.hasValue=y(()=>ce(t.modelValue))),e.emitValue===void 0&&(e.emitValue=i=>{r("update:modelValue",i)}),e.controlEvents===void 0&&(e.controlEvents={onFocusin:l,onFocusout:o}),Object.assign(e,{clearValue:s,onControlFocusin:l,onControlFocusout:o,focus:w}),e.computedCounter===void 0&&(e.computedCounter=y(()=>{if(t.counter!==!1){const i=typeof t.modelValue=="string"||typeof t.modelValue=="number"?(""+t.modelValue).length:Array.isArray(t.modelValue)===!0?t.modelValue.length:0,g=t.maxlength!==void 0?t.maxlength:t.maxValues;return i+(g!==void 0?" / "+g:"")}}));const{isDirtyModel:I,hasRules:F,hasError:C,errorMessage:m,resetValidation:H}=Ye(e.focused,e.innerLoading),v=e.floatingLabel!==void 0?y(()=>t.stackLabel===!0||e.focused.value===!0||e.floatingLabel.value===!0):y(()=>t.stackLabel===!0||e.focused.value===!0||e.hasValue.value===!0),A=y(()=>t.bottomSlots===!0||t.hint!==void 0||F.value===!0||t.counter===!0||t.error!==null),T=y(()=>t.filled===!0?"filled":t.outlined===!0?"outlined":t.borderless===!0?"borderless":t.standout?"standout":"standard"),j=y(()=>`q-field row no-wrap items-start q-field--${T.value}`+(e.fieldClass!==void 0?` ${e.fieldClass.value}`:"")+(t.rounded===!0?" q-field--rounded":"")+(t.square===!0?" q-field--square":"")+(v.value===!0?" q-field--float":"")+(P.value===!0?" q-field--labeled":"")+(t.dense===!0?" q-field--dense":"")+(t.itemAligned===!0?" q-field--item-aligned q-item-type":"")+(e.isDark.value===!0?" q-field--dark":"")+(e.getControl===void 0?" q-field--auto-height":"")+(e.focused.value===!0?" q-field--focused":"")+(C.value===!0?" q-field--error":"")+(C.value===!0||e.focused.value===!0?" q-field--highlighted":"")+(t.hideBottomSpace!==!0&&A.value===!0?" q-field--with-bottom":"")+(t.disable===!0?" q-field--disabled":t.readonly===!0?" q-field--readonly":"")),K=y(()=>"q-field__control relative-position row no-wrap"+(t.bgColor!==void 0?` bg-${t.bgColor}`:"")+(C.value===!0?" text-negative":typeof t.standout=="string"&&t.standout.length!==0&&e.focused.value===!0?` ${t.standout}`:t.color!==void 0?` text-${t.color}`:"")),P=y(()=>t.labelSlot===!0||t.label!==void 0),q=y(()=>"q-field__label no-pointer-events absolute ellipsis"+(t.labelColor!==void 0&&C.value!==!0?` text-${t.labelColor}`:"")),V=y(()=>({id:e.targetUid.value,editable:e.editable.value,focused:e.focused.value,floatingLabel:v.value,modelValue:t.modelValue,emitValue:e.emitValue})),E=y(()=>{const i={};return e.targetUid.value&&(i.for=e.targetUid.value),t.disable===!0&&(i["aria-disabled"]="true"),i});function S(){const i=document.activeElement;let g=e.targetRef!==void 0&&e.targetRef.value;g&&(i===null||i.id!==e.targetUid.value)&&(g.hasAttribute("tabindex")===!0||(g=g.querySelector("[tabindex]")),g&&g!==i&&g.focus({preventScroll:!0}))}function w(){ve(S)}function D(){Xe(S);const i=document.activeElement;i!==null&&e.rootRef.value.contains(i)&&i.blur()}function l(i){x!==null&&(clearTimeout(x),x=null),e.editable.value===!0&&e.focused.value===!1&&(e.focused.value=!0,r("focus",i))}function o(i,g){x!==null&&clearTimeout(x),x=setTimeout(()=>{x=null,!(document.hasFocus()===!0&&(e.hasPopupOpen===!0||e.controlRef===void 0||e.controlRef.value===null||e.controlRef.value.contains(document.activeElement)!==!1))&&(e.focused.value===!0&&(e.focused.value=!1,r("blur",i)),g!==void 0&&g())})}function s(i){de(i),c.platform.is.mobile!==!0?(e.targetRef!==void 0&&e.targetRef.value||e.rootRef.value).focus():e.rootRef.value.contains(document.activeElement)===!0&&document.activeElement.blur(),t.type==="file"&&(e.inputRef.value.value=null),r("update:modelValue",null),e.changeEvent===!0&&r("change",null),r("clear",t.modelValue),W(()=>{const g=I.value;H(),I.value=g})}function a(i){[13,32].includes(i.keyCode)&&s(i)}function p(){const i=[];return u.prepend!==void 0&&i.push(R("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:G},u.prepend())),i.push(R("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},h())),C.value===!0&&t.noErrorIcon===!1&&i.push(b("error",[R(ge,{name:c.iconSet.field.error,color:"negative"})])),t.loading===!0||e.innerLoading.value===!0?i.push(b("inner-loading-append",u.loading!==void 0?u.loading():[R(je,{color:t.color})])):t.clearable===!0&&e.hasValue.value===!0&&e.editable.value===!0&&i.push(b("inner-clearable-append",[R(ge,{class:"q-field__focusable-action",name:t.clearIcon||c.iconSet.field.clear,tabindex:0,role:"button","aria-label":c.lang.label.clear,onKeyup:a,onClick:s})])),u.append!==void 0&&i.push(R("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:G},u.append())),e.getInnerAppend!==void 0&&i.push(b("inner-append",e.getInnerAppend())),e.getControlChild!==void 0&&i.push(e.getControlChild()),i}function h(){const i=[];return t.prefix!==void 0&&t.prefix!==null&&i.push(R("div",{class:"q-field__prefix no-pointer-events row items-center"},t.prefix)),e.getShadowControl!==void 0&&e.hasShadow.value===!0&&i.push(e.getShadowControl()),e.getControl!==void 0?i.push(e.getControl()):u.rawControl!==void 0?i.push(u.rawControl()):u.control!==void 0&&i.push(R("div",{ref:e.targetRef,class:"q-field__native row",tabindex:-1,...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0},u.control(V.value))),P.value===!0&&i.push(R("div",{class:q.value},ee(u.label,t.label))),t.suffix!==void 0&&t.suffix!==null&&i.push(R("div",{class:"q-field__suffix no-pointer-events row items-center"},t.suffix)),i.concat(ee(u.default))}function _(){let i,g;C.value===!0?m.value!==null?(i=[R("div",{role:"alert"},m.value)],g=`q--slot-error-${m.value}`):(i=ee(u.error),g="q--slot-error"):(t.hideHint!==!0||e.focused.value===!0)&&(t.hint!==void 0?(i=[R("div",t.hint)],g=`q--slot-hint-${t.hint}`):(i=ee(u.hint),g="q--slot-hint"));const M=t.counter===!0||u.counter!==void 0;if(t.hideBottomSpace===!0&&M===!1&&i===void 0)return;const B=R("div",{key:g,class:"q-field__messages col"},i);return R("div",{class:"q-field__bottom row items-start q-field__bottom--"+(t.hideBottomSpace!==!0?"animated":"stale"),onClick:G},[t.hideBottomSpace===!0?B:R(Ie,{name:"q-transition--field-message"},()=>B),M===!0?R("div",{class:"q-field__counter"},u.counter!==void 0?u.counter():e.computedCounter.value):null])}function b(i,g){return g===null?null:R("div",{key:i,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},g)}let k=!1;return Re(()=>{k=!0}),Fe(()=>{k===!0&&t.autofocus===!0&&d.focus()}),t.autofocus===!0&&ne(()=>{d.focus()}),ue(()=>{x!==null&&clearTimeout(x)}),Object.assign(d,{focus:w,blur:D}),function(){const g=e.getControl===void 0&&u.control===void 0?{...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0,...E.value}:E.value;return R(e.tag.value,{ref:e.rootRef,class:[j.value,f.class],style:f.style,...g},[u.before!==void 0?R("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:G},u.before()):null,R("div",{class:"q-field__inner relative-position col self-stretch"},[R("div",{ref:e.controlRef,class:K.value,tabindex:-1,...e.controlEvents},p()),A.value===!0?_():null]),u.after!==void 0?R("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:G},u.after()):null])}}const Ce={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},re={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleLowerCase()}},Ae=Object.keys(re);Ae.forEach(e=>{re[e].regex=new RegExp(re[e].pattern)});const ot=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+Ae.join("")+"])|(.)","g"),we=/[.*+?^${}()|[\]\\]/g,O=String.fromCharCode(1),lt={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function at(e,t,r,u){let f,d,c,x,I,F;const C=N(null),m=N(v());function H(){return e.autogrow===!0||["textarea","text","search","url","tel","password"].includes(e.type)}Z(()=>e.type+e.autogrow,T),Z(()=>e.mask,l=>{if(l!==void 0)j(m.value,!0);else{const o=w(m.value);T(),e.modelValue!==o&&t("update:modelValue",o)}}),Z(()=>e.fillMask+e.reverseFillMask,()=>{C.value===!0&&j(m.value,!0)}),Z(()=>e.unmaskedValue,()=>{C.value===!0&&j(m.value)});function v(){if(T(),C.value===!0){const l=E(w(e.modelValue));return e.fillMask!==!1?D(l):l}return e.modelValue}function A(l){if(l<f.length)return f.slice(-l);let o="",s=f;const a=s.indexOf(O);if(a!==-1){for(let p=l-s.length;p>0;p--)o+=O;s=s.slice(0,a)+o+s.slice(a)}return s}function T(){if(C.value=e.mask!==void 0&&e.mask.length!==0&&H(),C.value===!1){x=void 0,f="",d="";return}const l=Ce[e.mask]===void 0?e.mask:Ce[e.mask],o=typeof e.fillMask=="string"&&e.fillMask.length!==0?e.fillMask.slice(0,1):"_",s=o.replace(we,"\\$&"),a=[],p=[],h=[];let _=e.reverseFillMask===!0,b="",k="";l.replace(ot,(B,n,$,Q,U)=>{if(Q!==void 0){const L=re[Q];h.push(L),k=L.negate,_===!0&&(p.push("(?:"+k+"+)?("+L.pattern+"+)?(?:"+k+"+)?("+L.pattern+"+)?"),_=!1),p.push("(?:"+k+"+)?("+L.pattern+")?")}else if($!==void 0)b="\\"+($==="\\"?"":$),h.push($),a.push("([^"+b+"]+)?"+b+"?");else{const L=n!==void 0?n:U;b=L==="\\"?"\\\\\\\\":L.replace(we,"\\\\$&"),h.push(L),a.push("([^"+b+"]+)?"+b+"?")}});const i=new RegExp("^"+a.join("")+"("+(b===""?".":"[^"+b+"]")+"+)?"+(b===""?"":"["+b+"]*")+"$"),g=p.length-1,M=p.map((B,n)=>n===0&&e.reverseFillMask===!0?new RegExp("^"+s+"*"+B):n===g?new RegExp("^"+B+"("+(k===""?".":k)+"+)?"+(e.reverseFillMask===!0?"$":s+"*")):new RegExp("^"+B));c=h,x=B=>{const n=i.exec(e.reverseFillMask===!0?B:B.slice(0,h.length+1));n!==null&&(B=n.slice(1).join(""));const $=[],Q=M.length;for(let U=0,L=B;U<Q;U++){const J=M[U].exec(L);if(J===null)break;L=L.slice(J.shift().length),$.push(...J)}return $.length!==0?$.join(""):B},f=h.map(B=>typeof B=="string"?B:O).join(""),d=f.split(O).join(o)}function j(l,o,s){const a=u.value,p=a.selectionEnd,h=a.value.length-p,_=w(l);o===!0&&T();const b=E(_),k=e.fillMask!==!1?D(b):b,i=m.value!==k;a.value!==k&&(a.value=k),i===!0&&(m.value=k),document.activeElement===a&&W(()=>{if(k===d){const M=e.reverseFillMask===!0?d.length:0;a.setSelectionRange(M,M,"forward");return}if(s==="insertFromPaste"&&e.reverseFillMask!==!0){const M=a.selectionEnd;let B=p-1;for(let n=I;n<=B&&n<M;n++)f[n]!==O&&B++;P.right(a,B);return}if(["deleteContentBackward","deleteContentForward"].indexOf(s)!==-1){const M=e.reverseFillMask===!0?p===0?k.length>b.length?1:0:Math.max(0,k.length-(k===d?0:Math.min(b.length,h)+1))+1:p;a.setSelectionRange(M,M,"forward");return}if(e.reverseFillMask===!0)if(i===!0){const M=Math.max(0,k.length-(k===d?0:Math.min(b.length,h+1)));M===1&&p===1?a.setSelectionRange(M,M,"forward"):P.rightReverse(a,M)}else{const M=k.length-h;a.setSelectionRange(M,M,"backward")}else if(i===!0){const M=Math.max(0,f.indexOf(O),Math.min(b.length,p)-1);P.right(a,M)}else{const M=p-1;P.right(a,M)}});const g=e.unmaskedValue===!0?w(k):k;String(e.modelValue)!==g&&(e.modelValue!==null||g!=="")&&r(g,!0)}function K(l,o,s){const a=E(w(l.value));o=Math.max(0,f.indexOf(O),Math.min(a.length,o)),I=o,l.setSelectionRange(o,s,"forward")}const P={left(l,o){const s=f.slice(o-1).indexOf(O)===-1;let a=Math.max(0,o-1);for(;a>=0;a--)if(f[a]===O){o=a,s===!0&&o++;break}if(a<0&&f[o]!==void 0&&f[o]!==O)return P.right(l,0);o>=0&&l.setSelectionRange(o,o,"backward")},right(l,o){const s=l.value.length;let a=Math.min(s,o+1);for(;a<=s;a++)if(f[a]===O){o=a;break}else f[a-1]===O&&(o=a);if(a>s&&f[o-1]!==void 0&&f[o-1]!==O)return P.left(l,s);l.setSelectionRange(o,o,"forward")},leftReverse(l,o){const s=A(l.value.length);let a=Math.max(0,o-1);for(;a>=0;a--)if(s[a-1]===O){o=a;break}else if(s[a]===O&&(o=a,a===0))break;if(a<0&&s[o]!==void 0&&s[o]!==O)return P.rightReverse(l,0);o>=0&&l.setSelectionRange(o,o,"backward")},rightReverse(l,o){const s=l.value.length,a=A(s),p=a.slice(0,o+1).indexOf(O)===-1;let h=Math.min(s,o+1);for(;h<=s;h++)if(a[h-1]===O){o=h,o>0&&p===!0&&o--;break}if(h>s&&a[o-1]!==void 0&&a[o-1]!==O)return P.leftReverse(l,s);l.setSelectionRange(o,o,"forward")}};function q(l){t("click",l),F=void 0}function V(l){if(t("keydown",l),Pe(l)===!0||l.altKey===!0)return;const o=u.value,s=o.selectionStart,a=o.selectionEnd;if(l.shiftKey||(F=void 0),l.keyCode===37||l.keyCode===39){l.shiftKey&&F===void 0&&(F=o.selectionDirection==="forward"?s:a);const p=P[(l.keyCode===39?"right":"left")+(e.reverseFillMask===!0?"Reverse":"")];if(l.preventDefault(),p(o,F===s?a:s),l.shiftKey){const h=o.selectionStart;o.setSelectionRange(Math.min(F,h),Math.max(F,h),"forward")}}else l.keyCode===8&&e.reverseFillMask!==!0&&s===a?(P.left(o,s),o.setSelectionRange(o.selectionStart,a,"backward")):l.keyCode===46&&e.reverseFillMask===!0&&s===a&&(P.rightReverse(o,a),o.setSelectionRange(s,o.selectionEnd,"forward"))}function E(l){if(l==null||l==="")return"";if(e.reverseFillMask===!0)return S(l);const o=c;let s=0,a="";for(let p=0;p<o.length;p++){const h=l[s],_=o[p];if(typeof _=="string")a+=_,h===_&&s++;else if(h!==void 0&&_.regex.test(h))a+=_.transform!==void 0?_.transform(h):h,s++;else return a}return a}function S(l){const o=c,s=f.indexOf(O);let a=l.length-1,p="";for(let h=o.length-1;h>=0&&a!==-1;h--){const _=o[h];let b=l[a];if(typeof _=="string")p=_+p,b===_&&a--;else if(b!==void 0&&_.regex.test(b))do p=(_.transform!==void 0?_.transform(b):b)+p,a--,b=l[a];while(s===h&&b!==void 0&&_.regex.test(b));else return p}return p}function w(l){return typeof l!="string"||x===void 0?typeof l=="number"?x(""+l):l:x(l)}function D(l){return d.length-l.length<=0?l:e.reverseFillMask===!0&&l.length!==0?d.slice(0,-l.length)+l:l+d.slice(l.length)}return{innerValue:m,hasMask:C,moveCursorForPaste:K,updateMaskValue:j,onMaskedKeydown:V,onMaskedClick:q}}const rt={name:String};function kt(e){return y(()=>({type:"hidden",name:e.name,value:e.modelValue}))}function xt(e={}){return(t,r,u)=>{t[r](R("input",{class:"hidden"+(u||""),...e.value}))}}function ut(e){return y(()=>e.name||e.for)}function it(e,t){function r(){const u=e.modelValue;try{const f="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(u)===u&&("length"in u?Array.from(u):[u]).forEach(d=>{f.items.add(d)}),{files:f.files}}catch{return{files:void 0}}}return t===!0?y(()=>{if(e.type==="file")return r()}):y(r)}const st=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,dt=/[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,ft=/[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,ct=/[a-z0-9_ -]$/i;function vt(e){return function(r){if(r.type==="compositionend"||r.type==="change"){if(r.target.qComposing!==!0)return;r.target.qComposing=!1,e(r)}else r.type==="compositionupdate"&&r.target.qComposing!==!0&&typeof r.data=="string"&&(Oe.is.firefox===!0?ct.test(r.data)===!1:st.test(r.data)===!0||dt.test(r.data)===!0||ft.test(r.data)===!0)===!0&&(r.target.qComposing=!0)}}var Ct=qe({name:"QInput",inheritAttrs:!1,props:{...Ge,...lt,...rt,modelValue:[String,Number,FileList],shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...et,"paste","change","keydown","click","animationend"],setup(e,{emit:t,attrs:r}){const{proxy:u}=X(),{$q:f}=u,d={};let c=NaN,x,I,F=null,C;const m=N(null),H=ut(e),{innerValue:v,hasMask:A,moveCursorForPaste:T,updateMaskValue:j,onMaskedKeydown:K,onMaskedClick:P}=at(e,t,b,m),q=it(e,!0),V=y(()=>ce(v.value)),E=vt(h),S=tt({changeEvent:!0}),w=y(()=>e.type==="textarea"||e.autogrow===!0),D=y(()=>w.value===!0||["text","search","url","tel","password"].includes(e.type)),l=y(()=>{const n={...S.splitAttrs.listeners.value,onInput:h,onPaste:p,onChange:i,onBlur:g,onFocus:me};return n.onCompositionstart=n.onCompositionupdate=n.onCompositionend=E,A.value===!0&&(n.onKeydown=K,n.onClick=P),e.autogrow===!0&&(n.onAnimationend=_),n}),o=y(()=>{const n={tabindex:0,"data-autofocus":e.autofocus===!0||void 0,rows:e.type==="textarea"?6:void 0,"aria-label":e.label,name:H.value,...S.splitAttrs.attributes.value,id:S.targetUid.value,maxlength:e.maxlength,disabled:e.disable===!0,readonly:e.readonly===!0};return w.value===!1&&(n.type=e.type),e.autogrow===!0&&(n.rows=1),n});Z(()=>e.type,()=>{m.value&&(m.value.value=e.modelValue)}),Z(()=>e.modelValue,n=>{if(A.value===!0){if(I===!0&&(I=!1,String(n)===c))return;j(n)}else v.value!==n&&(v.value=n,e.type==="number"&&d.hasOwnProperty("value")===!0&&(x===!0?x=!1:delete d.value));e.autogrow===!0&&W(k)}),Z(()=>e.autogrow,n=>{n===!0?W(k):m.value!==null&&r.rows>0&&(m.value.style.height="auto")}),Z(()=>e.dense,()=>{e.autogrow===!0&&W(k)});function s(){ve(()=>{const n=document.activeElement;m.value!==null&&m.value!==n&&(n===null||n.id!==S.targetUid.value)&&m.value.focus({preventScroll:!0})})}function a(){m.value!==null&&m.value.select()}function p(n){if(A.value===!0&&e.reverseFillMask!==!0){const $=n.target;T($,$.selectionStart,$.selectionEnd)}t("paste",n)}function h(n){if(!n||!n.target)return;if(e.type==="file"){t("update:modelValue",n.target.files);return}const $=n.target.value;if(n.target.qComposing===!0){d.value=$;return}if(A.value===!0)j($,!1,n.inputType);else if(b($),D.value===!0&&n.target===document.activeElement){const{selectionStart:Q,selectionEnd:U}=n.target;Q!==void 0&&U!==void 0&&W(()=>{n.target===document.activeElement&&$.indexOf(n.target.value)===0&&n.target.setSelectionRange(Q,U)})}e.autogrow===!0&&k()}function _(n){t("animationend",n),k()}function b(n,$){C=()=>{F=null,e.type!=="number"&&d.hasOwnProperty("value")===!0&&delete d.value,e.modelValue!==n&&c!==n&&(c=n,$===!0&&(I=!0),t("update:modelValue",n),W(()=>{c===n&&(c=NaN)})),C=void 0},e.type==="number"&&(x=!0,d.value=n),e.debounce!==void 0?(F!==null&&clearTimeout(F),d.value=n,F=setTimeout(C,e.debounce)):C()}function k(){requestAnimationFrame(()=>{const n=m.value;if(n!==null){const $=n.parentNode.style,{scrollTop:Q}=n,{overflowY:U,maxHeight:L}=f.platform.is.firefox===!0?{}:window.getComputedStyle(n),J=U!==void 0&&U!=="scroll";J===!0&&(n.style.overflowY="hidden"),$.marginBottom=n.scrollHeight-1+"px",n.style.height="1px",n.style.height=n.scrollHeight+"px",J===!0&&(n.style.overflowY=parseInt(L,10)<n.scrollHeight?"auto":"hidden"),$.marginBottom="",n.scrollTop=Q}})}function i(n){E(n),F!==null&&(clearTimeout(F),F=null),C!==void 0&&C(),t("change",n.target.value)}function g(n){n!==void 0&&me(n),F!==null&&(clearTimeout(F),F=null),C!==void 0&&C(),x=!1,I=!1,delete d.value,e.type!=="file"&&setTimeout(()=>{m.value!==null&&(m.value.value=v.value!==void 0?v.value:"")})}function M(){return d.hasOwnProperty("value")===!0?d.value:v.value!==void 0?v.value:""}ue(()=>{g()}),ne(()=>{e.autogrow===!0&&k()}),Object.assign(S,{innerValue:v,fieldClass:y(()=>`q-${w.value===!0?"textarea":"input"}`+(e.autogrow===!0?" q-textarea--autogrow":"")),hasShadow:y(()=>e.type!=="file"&&typeof e.shadowText=="string"&&e.shadowText.length!==0),inputRef:m,emitValue:b,hasValue:V,floatingLabel:y(()=>V.value===!0&&(e.type!=="number"||isNaN(v.value)===!1)||ce(e.displayValue)),getControl:()=>R(w.value===!0?"textarea":"input",{ref:m,class:["q-field__native q-placeholder",e.inputClass],style:e.inputStyle,...o.value,...l.value,...e.type!=="file"?{value:M()}:q.value}),getShadowControl:()=>R("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(w.value===!0?"":" text-no-wrap")},[R("span",{class:"invisible"},M()),R("span",e.shadowText)])});const B=nt(S);return Object.assign(u,{focus:s,select:a,getNativeElement:()=>m.value}),Me(u,"nativeEl",()=>m.value),B}}),wt=qe({name:"QForm",props:{autofocus:Boolean,noErrorFocus:Boolean,noResetFocus:Boolean,greedy:Boolean,onSubmit:Function},emits:["reset","validationSuccess","validationError"],setup(e,{slots:t,emit:r}){const u=X(),f=N(null);let d=0;const c=[];function x(v){const A=typeof v=="boolean"?v:e.noErrorFocus!==!0,T=++d,j=(q,V)=>{r(`validation${q===!0?"Success":"Error"}`,V)},K=q=>{const V=q.validate();return typeof V.then=="function"?V.then(E=>({valid:E,comp:q}),E=>({valid:!1,comp:q,err:E})):Promise.resolve({valid:V,comp:q})};return(e.greedy===!0?Promise.all(c.map(K)).then(q=>q.filter(V=>V.valid!==!0)):c.reduce((q,V)=>q.then(()=>K(V).then(E=>{if(E.valid===!1)return Promise.reject(E)})),Promise.resolve()).catch(q=>[q])).then(q=>{if(q===void 0||q.length===0)return T===d&&j(!0),!0;if(T===d){const{comp:V,err:E}=q[0];if(E!==void 0&&console.error(E),j(!1,V),A===!0){const S=q.find(({comp:w})=>typeof w.focus=="function"&&De(w.$)===!1);S!==void 0&&S.comp.focus()}}return!1})}function I(){d++,c.forEach(v=>{typeof v.resetValidation=="function"&&v.resetValidation()})}function F(v){v!==void 0&&de(v);const A=d+1;x().then(T=>{A===d&&T===!0&&(e.onSubmit!==void 0?r("submit",v):v!==void 0&&v.target!==void 0&&typeof v.target.submit=="function"&&v.target.submit())})}function C(v){v!==void 0&&de(v),r("reset"),W(()=>{I(),e.autofocus===!0&&e.noResetFocus!==!0&&m()})}function m(){ve(()=>{if(f.value===null)return;const v=f.value.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||f.value.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||f.value.querySelector("[autofocus], [data-autofocus]")||Array.prototype.find.call(f.value.querySelectorAll("[tabindex]"),A=>A.tabIndex!==-1);v!=null&&v.focus({preventScroll:!0})})}Te(Se,{bindComponent(v){c.push(v)},unbindComponent(v){const A=c.indexOf(v);A!==-1&&c.splice(A,1)}});let H=!1;return Re(()=>{H=!0}),Fe(()=>{H===!0&&e.autofocus===!0&&m()}),ne(()=>{e.autofocus===!0&&m()}),Object.assign(u.proxy,{validate:x,resetValidation:I,submit:F,reset:C,focus:m,getValidationComponents:()=>c}),()=>R("form",{class:"q-form",ref:f,onSubmit:F,onReset:C},ee(t.default))}});export{wt as Q,xt as a,Ct as b,kt as c,Ge as d,et as e,nt as f,tt as g,pt as h,ve as i,ut as j,ce as k,vt as l,yt as r,rt as u};
