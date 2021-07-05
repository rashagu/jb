import{l as e,e as t,a,s as o,M as l}from"./md5.486c76b9.js";import{d as s,p as n,o as r,j as i,k as d,z as c,aa as u,Q as m,O as g,a4 as p,al as h,g as f,W as v,i as w,f as y,V as b,a as M,D as V,s as k,t as S,r as C,l as _,y as x,Y as T,Z as E}from"./vendor.825aec79.js";import{b as I}from"./index.cb39fede.js";var P=s({props:{},components:{},setup(){const e=n([]),t=n("");function a(e){let t=document.getElementById("canvas"),a=t.getContext("2d"),l=120;console.log(l,l),t.width=l,t.height=36;let s="A,B,C,D,E,F,G,H,J,K,L,M,N,P,Q,R,S,T,U,V,W,X,Y,Z,1,2,3,4,5,6,7,8,9,0".split(","),n=s.length;for(let r=0;r<=3;r++){let t=Math.floor(Math.random()*n),l=15*Math.random()*Math.PI/180,i=s[t];e[r]=i;let d=6+30*r,c=20+8*Math.random();a.font="bold 23px 微软雅黑",a.translate(d,c),a.rotate(l),a.fillStyle=o(),a.fillText(i,0,0),a.rotate(-l),a.translate(-d,-c)}for(let r=0;r<=5;r++)a.strokeStyle=o(),a.beginPath(),a.moveTo(Math.random()*l,36*Math.random()),a.lineTo(Math.random()*l,36*Math.random()),a.stroke();for(let r=0;r<=30;r++){a.strokeStyle=o(),a.beginPath();let e=Math.random()*l,t=36*Math.random();a.moveTo(e,t),a.lineTo(e+1,t+1),a.stroke()}}function o(){return"rgb("+Math.floor(256*Math.random())+","+Math.floor(256*Math.random())+","+Math.floor(256*Math.random())+")"}return r((()=>{a(e.value),t.value=e.value.join().replace(/,/g,"")})),{num:e,number:t,showNum:function(){a(e.value),t.value=e.value.join().replace(/,/g,"")}}}});const j=c()(((e,t,a,o,l,s)=>(i(),d("canvas",{id:"canvas",onClick:t[1]||(t[1]=(...t)=>e.showNum&&e.showNum(...t)),width:"100",height:"36"}))));P.render=j,P.__scopeId="data-v-0744a6d2";var z=s({props:{},components:{Field:u,CellGroup:m,Button:g,Form:p,Verification:P,Dialog:h},setup(){n("");const s=n(""),i=n(null),d=f(),c=v({username:"",password:"",code:""}),u=w();y();const{t:m,locale:g}=y(),p=n(window.localStorage.getItem("language"));r((()=>{}));return{state:c,logo:e,essential:t,lock:a,shield:o,onSubmit:e=>{let t=i.value.number.toLowerCase();s.value=t,console.log(e.code,t),e.code===t?I("/gymm/loginapi/checklogin"+m("lang"),{data:{account:e.username,password:l.hashStr(e.password)}},!1).then((e=>{e&&(M({type:"success",message:m("loginSuccessful")}),window.localStorage.setItem("userId",e[0].f_id),setTimeout((()=>{d.push("/home")}),300))})):M({type:"warning",message:m("VerificationCodeError")})},goto:e=>{d.push(e)},setLangCondition:async()=>{p.value="zh"===p.value?"en":"zh",await b(),g.value=p.value,window.localStorage.setItem("language",g.value),function(){let e=window;console.log(m(u.meta.title+"")),u.meta.title&&("notInDingTalk"!==V.env.platform?V.ready((()=>{V.biz.navigation.setTitle({title:m(u.meta.title+"")})})):e.document.title=m(u.meta.title))}()},t:m,verification_code:i}}});const F=c();k("data-v-9f9872c6");const A={style:{"padding-bottom":"4rem"}},B={class:"d-flex align-items-center justify-content-center",style:{"text-align":"center"}},D={class:"py-2",style:{}},G={class:"py-4"},L={style:{"font-weight":"900","font-size":"calc(1.2rem + .6vw)"}},N={style:{"font-weight":"900"}},U={class:" login_f"},q={class:"code_box"},O={style:{margin:"16px"}},Q={class:"px-4 d-flex justify-content-between links"};S();const W=F(((e,t,a,o,l,s)=>{const n=C("Field"),r=C("Verification"),c=C("Button"),u=C("Form");return i(),d(E,null,[_("div",A,[_("div",B,[_("div",null,[_("div",D,[_("img",{style:{width:"3rem",margin:"0 auto"},src:e.logo,alt:""},null,8,["src"])]),_("div",G,[_("h3",L,x(e.t("GuiyangInternationalForumOnEcologicalCivilization")),1),_("div",N,x(e.t("GuestAffairsSystem")),1)])])]),_("div",U,[_(u,{onSubmit:e.onSubmit},{default:F((()=>[_(n,{modelValue:e.state.username,"onUpdate:modelValue":t[1]||(t[1]=t=>e.state.username=t),name:"username",label:"","left-icon":e.essential,placeholder:e.t("PleaseEnterAccount"),rules:[{required:!0,message:e.t("PleaseEnterAccount")}]},null,8,["modelValue","left-icon","placeholder","rules"]),_(n,{modelValue:e.state.password,"onUpdate:modelValue":t[2]||(t[2]=t=>e.state.password=t),name:"password",clearable:"",label:"",type:"password","left-icon":e.lock,placeholder:e.t("PleaseEnterThePassword"),rules:[{required:!0,message:e.t("PleaseEnterThePassword")}]},null,8,["modelValue","left-icon","placeholder","rules"]),_(n,{modelValue:e.state.code,"onUpdate:modelValue":t[3]||(t[3]=t=>e.state.code=t),center:"",clearable:"",name:"code",label:"","left-icon":e.shield,placeholder:e.t("pleaseEnterVerificationCode"),rules:[{required:!0,message:e.t("pleaseEnterVerificationCode")}]},{button:F((()=>[_("div",q,[_(r,{ref:"verification_code"},null,512)])])),_:1},8,["modelValue","left-icon","placeholder","rules"]),_("div",O,[_(c,{block:"",type:"primary","native-type":"submit"},{default:F((()=>[T(x(e.t("login")),1)])),_:1})])])),_:1},8,["onSubmit"])]),_("div",Q,[_("div",{onClick:t[4]||(t[4]=()=>e.goto("/register"))},x(e.t("register")),1)])]),_("div",{class:"text_last",onClick:t[5]||(t[5]=t=>e.setLangCondition())}," 切换语言 | language ")],64)}));z.render=W,z.__scopeId="data-v-9f9872c6";export default z;
