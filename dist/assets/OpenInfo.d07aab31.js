import{d as e,R as a,aa as n,P as i,Q as l,O as s,al as o,f as t,g as r,p as m,i as c,o as p,s as f,t as u,r as d,j as g,k as b,l as y,Z as _,_ as F,Y as h,y as v,z as C}from"./vendor.825aec79.js";import{R as k}from"./index.cb39fede.js";var I=e({props:{},components:{VanImage:a,Field:n,Cell:i,CellGroup:l,Button:s,Dialog:o},setup(){const{t:e}=t(),a=r(),n=m([{name:"f_chinesename",isForeign:3,label:e("ChineseName")},{name:"f_englishname",isForeign:3,label:e("EnglishName")},{name:"f_sex",isForeign:3,label:e("gender")},{name:"F_Country",isForeign:1,label:e("country")},{name:"f_nativeplacename",isForeign:0,label:e("area")},{name:"f_birthday",isForeign:3,label:e("dateOfBirth")},{name:"f_firstpost",isForeign:3,label:e("FirstPost")},{name:"f_secondpost",isForeign:3,label:e("SecondPost")},{name:"f_levelname",isForeign:3,label:e("level")},{name:"f_professionaltitle",isForeign:3,label:e("jobTitle")},{name:"f_typename",isForeign:3,label:e("category")},{name:"f_credentialtypename",isForeign:3,label:e("typeOfCertificate")},{name:"f_chineseresume",isForeign:3,label:e("resume")},{name:"f_industryname",isForeign:3,label:e("industry")},{name:"f_researcharea",isForeign:3,label:e("ResearchAreas")},{name:"f_researchresult",isForeign:3,label:e("ResearchResults")},{name:"f_companychinesename",isForeign:3,label:e("institutionName")},{name:"f_companyenglishname",isForeign:3,label:e("InstitutionEnglishName")},{name:"f_companyintroduction",isForeign:3,label:e("Introduction")},{name:"f_companycode",isForeign:3,label:e("InstitutionCode")},{name:"f_companyincorporationtime",isForeign:3,label:e("Established")},{name:"f_companyresearchdirection",isForeign:3,label:e("researchDirection")},{name:"f_companytype",isForeign:3,label:e("UnitNature")},{name:"f_companyleader",isForeign:3,label:e("MainLeader")},{name:"f_companywebsite",isForeign:3,label:e("OfficialWebsite")},{name:"f_companyaddress",isForeign:3,label:e("HeadquartersAddress")},{name:"f_companyphonenumber",isForeign:3,label:e("phone")},{name:"f_companyfax",isForeign:3,label:e("fax")},{name:"f_companyemail",isForeign:3,label:e("mail")}]),i=m([]),l=c();let s=l.params.f_id,o=l.params.type,f=l.params.list_f_id;return p((()=>{k("/gymm/GuestOpenApi/GetOpenGuestDetail"+e("lang"),{params:{userid:s}},!1).then((e=>{console.log(e),i.value=e}))})),{field:n,data:i,onSubmit:function(){"yq"===o?a.push("/confirm_invitation/"+s):a.push("/look_invitation/"+f)},userPhoto:"http://103.81.5.60:8001",type:o,t:e}}});const x=C();f("data-v-589d5089");const O={class:"py-3 px-2"};u();const G=x(((e,a,n,i,l,s)=>{const o=d("Cell"),t=d("CellGroup"),r=d("Button");return g(),b(_,null,[y("div",null,[y(t,null,{default:x((()=>[(g(!0),b(_,null,F(e.data,((e,a)=>(g(),b(o,{key:a,title:e.Key,value:e.Value},null,8,["title","value"])))),128))])),_:1})]),y("div",O,["yq"===e.type?(g(),b(r,{key:0,onClick:e.onSubmit,color:"#FA6E35",type:"primary",size:"large"},{default:x((()=>[h(v(e.t("InviteToMeet")),1)])),_:1},8,["onClick"])):(g(),b(r,{key:1,onClick:e.onSubmit,color:"var(--van-button-primary-background-color)",type:"primary",size:"large"},{default:x((()=>[h(v(e.t("ViewInvitationMessage")),1)])),_:1},8,["onClick"]))])],64)}));I.render=G,I.__scopeId="data-v-589d5089";export default I;
