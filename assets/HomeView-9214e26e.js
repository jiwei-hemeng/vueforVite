import{r as l}from"./index-f9f928bf.js";const i="https://www.bilibili.com";function p({method:u="GET",url:t,data:r,headers:a=new Headers({"Content-Type":"application/json;charset=utf-8"}),responseType:c="json"}){return new Promise((s,n)=>{try{t=i+t;let o=null;u!=="GET"&&(o=JSON.stringify(r)),fetch(t,{method:u,headers:a,body:o}).then(e=>{if(e.ok)return c==="json"?e.json():e.blob();n(e)}).then(e=>{e.code==="401"?(l.push("/about"),n(e.message)):s(e)}).catch(e=>n(e))}catch(o){n(o)}})}const _=["onClick"],m={__name:"menuList",props:{list:{type:Array,required:!0}},emits:["changePage"],setup(u,{emit:t}){const r=u;function a(c){t("changePage",c.path)}return(c,s)=>(Vue.openBlock(),Vue.createElementBlock("div",null,[(Vue.openBlock(!0),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(r.list,(n,o)=>(Vue.openBlock(),Vue.createElementBlock("div",{key:o,onClick:e=>a(n)},Vue.toDisplayString(n.name),9,_))),128))]))}},h=Vue.createElementVNode("div",null,"编程式导航",-1),d={__name:"HomeView",async setup(u){let t,r;const a=([t,r]=Vue.withAsyncContext(()=>p({url:"/index/recommend.json"})),t=await t,r(),t);console.log("相应结果",a);const c=VueRouter.useRouter();function s(n){c.push(n)}return(n,o)=>(Vue.openBlock(),Vue.createElementBlock("div",null,[h,Vue.createVNode(m,{list:[{name:"About",path:"/about"}],onChangePage:s})]))}};export{d as default};
