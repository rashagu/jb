import{l as e,e as a,a as s,s as t,M as l}from"./md5.486c76b9.js";import{b as o}from"./index.cb39fede.js";import{d as n,aa as r,Q as d,O as i,a4 as u,a as c,f as m,W as p,g,s as b,t as h,r as v,j as y,k as f,l as w,y as x,Y as V,z as P}from"./vendor.825aec79.js";var C=n({props:{},components:{Field:r,CellGroup:d,Button:i,Form:u,Notify:c},setup(){const{t:n}=m(),r=p({username:"",password:"",phone:"",email:"",code:""}),d=g();return{state:r,logo:e,essential:a,lock:s,shield:t,goto:()=>{d.push("/login")},onSubmit:e=>{o("/gymm/loginapi/guestregister"+n("lang"),{data:{invitationcode:e.code,account:e.username,password:l.hashStr(e.password)}}).then((e=>{e&&d.push("/login")}))},t:n}}});const E=P();b("data-v-4d9f2dca");const j={class:"d-flex align-items-center justify-content-center",style:{"text-align":"center"}},_={class:"py-2",style:{}},k={class:"py-4"},F={class:"px-2 login_f"},I={class:"d-flex justify-content-between align-items-center",style:{margin:"16px"}},S={class:"mx-2 w-24 text-center"};h();const T=E(((e,a,s,t,l,o)=>{const n=v("Field"),r=v("Button"),d=v("Form");return y(),f("div",null,[w("div",j,[w("div",null,[w("div",_,[w("img",{style:{width:"3rem",margin:"0 auto"},src:e.logo,alt:""},null,8,["src"])]),w("div",k,[w("h3",null,x(e.t("GuiyangInternationalForumOnEcologicalCivilization")),1)])])]),w("div",F,[w(d,{onSubmit:e.onSubmit},{default:E((()=>[w(n,{modelValue:e.state.username,"onUpdate:modelValue":a[1]||(a[1]=a=>e.state.username=a),name:"username",label:e.t("Account"),placeholder:e.t("PleaseEnterAccount"),rules:[{required:!0,message:e.t("PleaseEnterAccount")}]},null,8,["modelValue","label","placeholder","rules"]),w(n,{modelValue:e.state.password,"onUpdate:modelValue":a[2]||(a[2]=a=>e.state.password=a),name:"password",clearable:"",label:e.t("password"),type:"password",placeholder:e.t("PleaseEnterThePassword"),rules:[{required:!0,message:e.t("PleaseEnterThePassword")}]},null,8,["modelValue","label","placeholder","rules"]),w(n,{modelValue:e.state.code,"onUpdate:modelValue":a[3]||(a[3]=a=>e.state.code=a),name:"code",clearable:"",label:e.t("InvitationCode"),placeholder:e.t("PleaseEnterTheInvitationCode"),rules:[{required:!0,message:e.t("PleaseEnterTheInvitationCode")}]},null,8,["modelValue","label","placeholder","rules"]),w("div",I,[w(r,{block:"",type:"primary","native-type":"submit"},{default:E((()=>[V(x(e.t("submit")),1)])),_:1}),w("div",S,[w(r,{size:"small",plain:"",type:"primary",onClick:e.goto},{default:E((()=>[V(x(e.t("login")),1)])),_:1},8,["onClick"])])])])),_:1},8,["onSubmit"])])])}));C.render=T,C.__scopeId="data-v-4d9f2dca";export default C;
