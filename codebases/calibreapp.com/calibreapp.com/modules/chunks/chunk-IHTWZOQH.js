import{a}from"./chunk-OFY5O3WH.js";var t=e=>e.match(/^Network error:/)?"There was an unexpected error. Please try again.":e.replace(/^GraphQL error:/,""),n=e=>{try{if(typeof e===String)return e;if(e.message)return t(e.message);let r=e.graphQLErrors[0];return r.message?t(r.message):r.extensions?t(r.extensions.problems[0].explanation):`${e}`}catch(r){return a.notify(r),"There was an error. Please try again."}},o=n;export{o as a};
//# sourceMappingURL=chunk-IHTWZOQH.js.map
