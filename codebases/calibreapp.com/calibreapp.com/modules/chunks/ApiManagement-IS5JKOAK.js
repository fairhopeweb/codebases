import{c as de,g as ue}from"./chunk-ONWBFXGN.js";import{a as ce}from"./chunk-HVWSZP6M.js";import{b as xe,c as be}from"./chunk-IHNDKV3B.js";import{a as fe}from"./chunk-SJXFQYTK.js";import{a as le}from"./chunk-KCN7NYIH.js";import"./chunk-YG5VU5UW.js";import{e as ke}from"./chunk-DQSCGVX4.js";import"./chunk-CWNFCDZO.js";import{a as ye}from"./chunk-ECNFHRET.js";import{a as Te}from"./chunk-2LV7R6US.js";import{a as $,b as he}from"./chunk-JLSB3ZPE.js";import{a as ge}from"./chunk-TQDX6ACF.js";import{f as ne}from"./chunk-DGXX4BQF.js";import{a as E}from"./chunk-IHTWZOQH.js";import"./chunk-OFY5O3WH.js";import"./chunk-WEIYGZZI.js";import{c as ie}from"./chunk-H7BUDTAB.js";import{a as pe}from"./chunk-INK6RNBJ.js";import{b as se}from"./chunk-5AD3ZUGZ.js";import"./chunk-2OWL4LTV.js";import{a as re}from"./chunk-WDJIMBUZ.js";import"./chunk-ZK4YBVUK.js";import"./chunk-URMVBSCF.js";import{a as _}from"./chunk-RZQ4QVPP.js";import"./chunk-M3VXQ3H4.js";import{a as me}from"./chunk-UJ4RDOBF.js";import{d as R}from"./chunk-EWS3NXQH.js";import{j as X}from"./chunk-AQDAG4C2.js";import{a as ee,b as N,c as x,d as O,e as oe,f as te}from"./chunk-TT3E6PQD.js";import{a as Y,i as Z}from"./chunk-WNVFIGRJ.js";import"./chunk-BYK2LYTJ.js";import"./chunk-SOUDSSPT.js";import"./chunk-YN3ICWDL.js";import{c as W,e as I,f as w}from"./chunk-JXNVBN57.js";import"./chunk-4JRWSVEX.js";import{b as B,c as T}from"./chunk-FJD4SS3V.js";import"./chunk-TKNWVBCA.js";import{a as De}from"./chunk-V454E5QD.js";import"./chunk-4DDSFSZM.js";import{a as ae}from"./chunk-I2CW5RII.js";import"./chunk-EHER635N.js";import"./chunk-D3V43LVN.js";import{a as z}from"./chunk-M5TAP4VX.js";import"./chunk-X4YGTLGV.js";import"./chunk-BBW4QHNN.js";import{b as J,d as r}from"./chunk-CL7MNENB.js";import"./chunk-5ZVMZG6E.js";import"./chunk-33HWVBTX.js";import{a as k,b as F,f as D,i as P}from"./chunk-ORNWO27Z.js";var e=D(P());var t=D(P());var o=D(P());var Be=D(De());var Ne=Be.default.div`
  max-width: 700px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Pe=s=>{if(!s)return"Never";let f=ke(s);return`${ne(f,"MMM do y")}`},Ie=({attributes:s,uuid:f,displayTeam:b,displayName:l,creator:u,isExpired:M,expiresAt:n,displayType:S,orgId:d,onRevoke:A})=>{var a;let[g,C]=Te({triggerOnce:!1,rootMargin:"50% 0% 50%"}),m=M;return o.default.createElement(N,{key:`apiKey-${f}`,ref:g},C?o.default.createElement(o.default.Fragment,null,o.default.createElement(x,{py:"15px"},o.default.createElement(re,{label:l},o.default.createElement(Ne,null,l))),s.includes("displayTeam")?o.default.createElement(x,{disabled:m},b):null,s.includes("displayType")?o.default.createElement(x,{disabled:m},S):null,o.default.createElement(x,{disabled:m},u?o.default.createElement(B,{as:"span",alignItems:"center"},o.default.createElement(B,{as:"span",mr:"8px"},o.default.createElement(ie,{size:"small",name:u.name,url:u.avatar,variant:(a=u.membership)==null?void 0:a.role})),u.displayName):o.default.createElement(r,{id:"apiToken.defaultUser"})),o.default.createElement(x,{disabled:m},m?o.default.createElement(r,{id:"apiToken.expired"}):Pe(n)),o.default.createElement(x,{textAlign:"right",alignItems:"center"},o.default.createElement(xe,{label:"Edit",to:`/organisations/${d}/api/${f}/edit`,mr:"15px"}),o.default.createElement(r,{id:"apiToken.revokePrompt",values:{confirmText:l}},h=>o.default.createElement(be,{p:"0px",label:"Revoke",onClick:()=>{prompt(h)===l&&A(f)}})))):o.default.createElement(x,{colSpan:"4",py:"27px"}))},j=Ie;var Oe=({attributes:s,apiTokens:f,loading:b,pageInfo:l,nextPage:u,orgId:M,handleRevoke:n,currentUserUuid:S})=>{let[d,A]=(0,t.useState)("displayName"),[g,C]=(0,t.useState)("asc"),m=f.slice().sort((a,h)=>{var v,c;switch(d){case"expiresAt":return he(a[d]||Date(),h[d]||Date(),g);case"creator":return $((v=a.creator)==null?void 0:v.displayName,(c=h.creator)==null?void 0:c.displayName,g);default:return $(a[d],h[d],g)}});return t.default.createElement(T,{pb:"60px"},t.default.createElement(te,{bleed:0},t.default.createElement(ee,null,t.default.createElement(N,null,s.map(a=>t.default.createElement(O,{key:a,py:"15px",width:`${(100-10)/s.length}%`},t.default.createElement(Y,{attribute:a,onUpdateSortBy:A,onUpdateSortDirection:C,sortBy:d,sortDirection:g},t.default.createElement(r,{id:`apiToken.attributes.${a}`})))),t.default.createElement(O,{width:"10%",textAlign:"right"},"actions"))),t.default.createElement(oe,null,m.map(a=>t.default.createElement(j,k({key:a.uuid,orgId:M,onRevoke:n,currentUserUuid:S,attributes:s},a))))),!b&&l.hasNextPage&&t.default.createElement(B,null,t.default.createElement(T,{mx:"auto",mt:4},t.default.createElement(ye,{pageInfo:l,onNext:u}))))};j.defaultProps={attributes:["displayName","creator","expiresAt"]};var Ce=Oe;var Ee=({match:{params:{orgId:s}}})=>{let{currentUser:f}=ae(),b=J(),{feedback:l,setFeedback:u,clearFeedback:M}=fe(),[n,S]=(0,e.useState)(null),[d,A]=(0,e.useState)(!1),[g,C]=(0,e.useState)([]),[m,a]=(0,e.useState)({totalOrganisationCount:0,totalUserCount:0}),[h,v]=(0,e.useState)(!1),{loading:c,data:q,fetchMore:Me}=z(de,{variables:{orgId:s},fetchPolicy:"cache-and-network",onError:i=>{u({type:"error",message:E(i),location:"apiKeyList"})},onCompleted:()=>{A(!0)}}),{organisation:Se}=q||{},{organisationKeysList:{totalCount:G},userKeysList:{totalCount:Q},apiKeys:{edges:Ae,pageInfo:K}}=Se||{organisationKeysList:{},userKeysList:{},apiKeys:{}},{uuid:ve}=f||{};(0,e.useEffect)(()=>{if(!c){let i=(Ae||[]).map(({node:p})=>{var L;let y=F(k({},p),{displayName:p.description,displayTeam:((L=p.team)==null?void 0:L.name)||b.formatMessage({id:"apiToken.noTeam"}),displayType:b.formatMessage({id:`apiToken.${p.tag}Token`})});return y.creator&&(y.creator=F(k({},y.creator),{displayName:y.creator.uuid===ve?b.formatMessage({id:"currentUser.displayName"}):y.creator.name})),y});C(i),a({totalOrganisationCount:G,totalUserCount:Q}),v(n==null?void 0:n.length)}},[c,n]);let Le=()=>{Me({variables:{cursor:K==null?void 0:K.endCursor},updateQuery:(i,{fetchMoreResult:p})=>Object.assign({},i,{organisation:F(k({},i.organisation),{bustCache:1,apiKeys:F(k({},i.organisation.apiKeys),{edges:[...i.organisation.apiKeys.edges,...p.organisation.apiKeys.edges],pageInfo:p.organisation.apiKeys.pageInfo})})})})},[Fe]=_(ue,{onCompleted:({deleteApiKey:i})=>{let{uuid:p,description:y}=i||{},L=G,V=Q,Ue=g.filter(H=>H.uuid===p?(H.type==="organisation"?L-=1:V-=1,!1):!0);a({totalOrganisationCount:L,totalUserCount:V}),C(Ue),u({type:"success",location:"apiKeyList",message:e.default.createElement(r,{id:"apiToken.revokeMessage",values:{token:e.default.createElement(w,{color:"green400"},y)}})})},onError:i=>{u({type:"error",message:E(i),location:"apiKeyList"})}}),we=i=>{Fe({variables:{organisation:s,uuid:i}})},Ke=["displayName","displayTeam","displayType","creator","expiresAt"],U=(n==null?void 0:n.length)?pe(g,n,{keys:["displayName","creator.displayName","displayTeam","displayType"]}):g;return e.default.createElement(T,{pb:4},!c&&e.default.createElement(me,{id:"apiManagement.title",breadcrumbs:[q.organisation.name]}),e.default.createElement(X,{variant:"button"},e.default.createElement(T,{flex:1,mb:[4,0]},e.default.createElement(ce,null,e.default.createElement(r,{id:"apiManagement.heading"}))),e.default.createElement(Z,{to:`/organisations/${s}/api/new`},e.default.createElement(r,{id:"apiManagement.actions.new"}))),l&&l.location==="apiKeyList"&&e.default.createElement(le,k({"data-qa":"apiManagementFeedback",p:null,pt:4,px:4,pb:0,duration:0,onDismiss:()=>M()},l)),d?e.default.createElement(e.default.Fragment,null,e.default.createElement(B,{alignItems:"center",justifyContent:"space-between",mx:4,mt:3},e.default.createElement(W,{as:"h2",level:"sm",color:"grey400"},h?e.default.createElement(r,{id:"apiManagement.summary.filtered",values:{filterCount:e.default.createElement(w,null,U.length," ",U.length===1?"token":"tokens")}}):e.default.createElement(r,{id:"apiManagement.summary.tokens",values:{organisationTokens:e.default.createElement(w,null,m.totalOrganisationCount," API"," ",m.totalOrganisationCount===1?"token":"tokens"),userTokens:m.totalUserCount?e.default.createElement(e.default.Fragment,null,"and"," ",e.default.createElement(w,null,m.totalUserCount," Personal Access"," ",m.totalUserCount===1?"Token":"Tokens")):null}})),e.default.createElement(T,{ml:"auto"},e.default.createElement(r,{id:"apiManagement.actions.search"},i=>e.default.createElement(se,{type:"search",onChange:p=>S((p==null?void 0:p.length)?p:null),placeholder:i,loading:d?n&&c:!1}))))):e.default.createElement(R,null),d?(n==null?void 0:n.length)||U.length?e.default.createElement(T,{mx:4,mt:l.message?3:"50px"},e.default.createElement(Ce,{attributes:Ke,apiTokens:U,loading:c,pageInfo:K,nextPage:Le,orgId:s,handleRevoke:we,feedback:!!l.message})):e.default.createElement(ge,{id:"apiManagement",offset:190,offsets:[317,190]},e.default.createElement(r,{id:"apiManagement.blankSlate.description",values:{automateLink:e.default.createElement(I,{href:"https://calibreapp.com/docs/automation/cli#export-data-with-the-cli-or-nodejs-api",target:"_blank"},e.default.createElement(r,{id:"apiManagement.blankSlate.automateLink"})),exportDataLink:e.default.createElement(I,{href:"https://calibreapp.com/docs/account-and-billing/export-data#export-data-with-the-cli-or-nodejs-api",target:"_blank"},e.default.createElement(r,{id:"apiManagement.blankSlate.exportDataLink"}))}})):null)},ho=Ee;export{ho as default};
//# sourceMappingURL=ApiManagement-IS5JKOAK.js.map
