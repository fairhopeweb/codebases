import{a as S}from"./chunk-KCN7NYIH.js";import{k as q}from"./chunk-ZNS7TFW4.js";import{a as C}from"./chunk-IHTWZOQH.js";import{c,e as f,f as F}from"./chunk-ECKCXZDJ.js";import{a as B}from"./chunk-RZQ4QVPP.js";import{h as L}from"./chunk-AQDAG4C2.js";import{d as k,e as A}from"./chunk-WNVFIGRJ.js";import{b as v,c as g}from"./chunk-FJD4SS3V.js";import{a as i,f as I,i as V}from"./chunk-ORNWO27Z.js";var e=I(V());var $=({orgId:b,id:d,onUpdate:h,onRemove:n,onAdd:a,onValidating:l,loading:u,name:r,url:o})=>{let[m,y]=(0,e.useState)({name:r,url:o}),[p,s]=(0,e.useState)();(0,e.useEffect)(()=>{y({name:r,url:o})},[u,r,o]);let[G]=B(q,{onCompleted:({validatePage:{warningMessage:t}})=>{l(!1),s(t?{type:"warning",message:e.default.createElement(e.default.Fragment,null,t," ",e.default.createElement("a",{href:"/docs/features/agent#recognising-the-calibre-agent",target:"_blank"},"See Agent documentation"))}:{type:"success",message:"Valid URL"})},onError:t=>{l(!1),t&&s({type:"error",message:C(t)})}}),{name:U,url:E}=m,x=t=>{let P=i(i({},m),t);y(P),h({[d]:P})},_=t=>{x({url:t}),/^(http|https):\/\/[^ "]+$/.test(t)?(l(!0),G({variables:{orgId:b,attributes:{name:"New Page",url:t}}})):t&&t.length&&s({type:"error",message:`'${t}' is not a valid URL`})},w=t=>{t.preventDefault(),n(d)},D=t=>{t.preventDefault(),a()};return e.default.createElement(g,{pb:[4,4,0],"data-testid":"page-fields"},e.default.createElement(c,{mb:0},e.default.createElement(f,{label:"Page name"},e.default.createElement(F,{name:"page_name",defaultValue:U,required:!0,maxLength:120,onBlur:t=>x({name:t}),placeholder:"Page name",loading:u})),e.default.createElement(f,{label:"URL",help:"The fully qualified URL to your page, without any redirects."},e.default.createElement(F,{name:"page_url",type:"url",defaultValue:E,required:!0,maxLength:2400,onBlur:t=>_(t),onChange:()=>s(),onFocus:()=>{l(!0),s()},placeholder:"Page URL",inputStyle:p&&p.type||"base",loading:u})),a||n?e.default.createElement(f,{mt:[0,0,34]},e.default.createElement(v,null,!n||e.default.createElement(g,null,e.default.createElement(A,{onClick:w,title:"Remove this page"})),!a||e.default.createElement(g,{ml:2},e.default.createElement(k,{onClick:D,title:"Add another page"})))):null),!p||p.type==="success"||e.default.createElement(c,{mb:0},e.default.createElement(L,{span:2},e.default.createElement(S,i({p:0,duration:0},p)))))},j=({orgId:b,onAdd:d,onUpdate:h,onRemove:n,pages:a,loading:l,onValidating:u})=>{let r=Object.keys(a);return r.map(o=>{let m=a[o];return e.default.createElement($,i({key:o,orgId:b,id:o,onRemove:o==="0"?null:n,onAdd:o===r[r.length-1]?d:null,onUpdate:h,onValidating:u,loading:l},m))})},W=j;export{$ as a,W as b};
//# sourceMappingURL=chunk-5AV6UUBC.js.map
