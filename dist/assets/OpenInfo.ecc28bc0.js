import{d as e,Y as a,af as n,W as i,a0 as s,Z as l,aq as t,f as o,g as r,p as m,i as c,o as f,s as p,t as u,r as g,j as d,k as y,x as b,l as _,Q as F,R as h,U as v,y as C,z as k,A as x}from"./vendor.f737c1cc.js";import{R as I}from"./index.7496c43c.js";var j=e({props:{},components:{VanImage:a,Field:n,Cell:i,CellGroup:s,Button:l,Dialog:t},setup(){const{t:e}=o(),a=r(),n=m([{name:"f_chinesename",isForeign:3,label:e("ChineseName")},{name:"f_englishname",isForeign:3,label:e("EnglishName")},{name:"f_sex",isForeign:3,label:e("gender")},{name:"F_Country",isForeign:1,label:e("country")},{name:"f_nativeplacename",isForeign:0,label:e("area")},{name:"f_birthday",isForeign:3,label:e("dateOfBirth")},{name:"f_firstpost",isForeign:3,label:e("FirstPost")},{name:"f_secondpost",isForeign:3,label:e("SecondPost")},{name:"f_levelname",isForeign:3,label:e("level")},{name:"f_professionaltitle",isForeign:3,label:e("jobTitle")},{name:"f_typename",isForeign:3,label:e("category")},{name:"f_credentialtypename",isForeign:3,label:e("typeOfCertificate")},{name:"f_chineseresume",isForeign:3,label:e("resume")},{name:"f_industryname",isForeign:3,label:e("industry")},{name:"f_researcharea",isForeign:3,label:e("ResearchAreas")},{name:"f_researchresult",isForeign:3,label:e("ResearchResults")},{name:"f_companychinesename",isForeign:3,label:e("institutionName")},{name:"f_companyenglishname",isForeign:3,label:e("InstitutionEnglishName")},{name:"f_companyintroduction",isForeign:3,label:e("Introduction")},{name:"f_companycode",isForeign:3,label:e("InstitutionCode")},{name:"f_companyincorporationtime",isForeign:3,label:e("Established")},{name:"f_companyresearchdirection",isForeign:3,label:e("researchDirection")},{name:"f_companytype",isForeign:3,label:e("UnitNature")},{name:"f_companyleader",isForeign:3,label:e("MainLeader")},{name:"f_companywebsite",isForeign:3,label:e("OfficialWebsite")},{name:"f_companyaddress",isForeign:3,label:e("HeadquartersAddress")},{name:"f_companyphonenumber",isForeign:3,label:e("phone")},{name:"f_companyfax",isForeign:3,label:e("fax")},{name:"f_companyemail",isForeign:3,label:e("mail")}]),i=m([]),s=c();let l=s.params.f_id,t=s.params.type,p=s.params.list_f_id;return f((()=>{I("/gymm/GuestOpenApi/GetOpenGuestDetail?userid="+l,{},!1).then((e=>{console.log(e),i.value=e}))})),{field:n,data:i,onSubmit:function(){"yq"===t?a.push("/confirm_invitation/"+l):a.push("/look_invitation/"+p)},userPhoto:"http://103.81.5.60:8001",type:t,t:e}}});const R=k();p("data-v-a3a96566");const A={class:"py-3 px-2"};u();const G=R(((e,a,n,i,s,l)=>{const t=g("VanImage"),o=g("Cell"),r=g("CellGroup"),m=g("Button");return d(),y(F,null,[b(_("div",{class:"d-flex justify-content-center align-items-center",style:{height:"11.25rem",backgroundColor:"#fff",margin:"0.6rem 0.8rem",borderRadius:"0.375rem"}},[_(t,{round:"",width:"8.5rem",height:"8.5rem",fit:"cover",src:"https://img.yzcdn.cn/vant/cat.jpeg"},null,8,["src"])],4),[[x,!1]]),_("div",null,[_(r,null,{default:R((()=>[(d(!0),y(F,null,h(e.data,((e,a)=>(d(),y(o,{key:a,title:e.Key,value:e.Value},null,8,["title","value"])))),128))])),_:1})]),_("div",A,["yq"===e.type?(d(),y(m,{key:0,onClick:e.onSubmit,color:"#FA6E35",type:"primary",size:"large"},{default:R((()=>[v(C(e.t("InviteToMeet")),1)])),_:1},8,["onClick"])):(d(),y(m,{key:1,onClick:e.onSubmit,color:"var(--van-button-primary-background-color)",type:"primary",size:"large"},{default:R((()=>[v(C(e.t("ViewInvitationMessage")),1)])),_:1},8,["onClick"]))])],64)}));j.render=G,j.__scopeId="data-v-a3a96566";export default j;
