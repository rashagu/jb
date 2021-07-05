import{u as e,R as t,a}from"./index.cb39fede.js";import{d as l,P as n,Q as o,aj as s,ak as i,O as r,a4 as m,aa as c,al as u,f as d,U as p,p as h,q as y,W as g,o as F,am as b,a as f,s as _,t as C,r as v,j as k,k as x,l as A,Z as S,_ as w,y as G,Y as I,z as N,v as D,an as O,ah as P,ai as R,g as T,$ as j,a0 as E,x as V,A as B}from"./vendor.825aec79.js";var U=l({props:{fieldData:{type:Object,default:[]}},components:{Cell:n,CellGroup:o,Checkbox:s,CheckboxGroup:i,Button:r,Form:m,Field:c,Dialog:u},setup(l,{emit:n}){const{t:o}=d(),s=e(),i=p((()=>s.state.myStoreModule1.userData)),r=h([]),m=h({}),c=h({}),_=[],C=h([]),v=h([]),k=h([]),x=h([]);y(r,(e=>{let t=l.fieldData.filter((e=>i.value.F_IsForeignGuest==e.isForeign||3==e.isForeign));n("setCheckAllStatus",!!e.length&&e.length<t.length,e.length===t.length),A.indeterminate=!!e.length&&e.length<t.length,A.checkAll=e.length===t.length}));const A=g({zhName:"",enName:"",value:"",showArea:!1,value2:"",showCalendar:!1});let S=window.localStorage.getItem("userId");F((()=>{t("/gymm/BaseInfoApi/GuestType"+o("lang"),{params:{IsForeign:0}},!1).then((e=>{console.log(e),k.value=e})),t("/gymm/BaseInfoApi/GuestType"+o("lang"),{params:{IsForeign:1}},!1).then((e=>{console.log(e),x.value=e})),t("/gymm/GuestOpenApi/GetGuestOpenKey"+o("lang"),{params:{userId:S}},!1).then((e=>{console.error("boolean"==typeof e),"boolean"==typeof e?r.value=[]:(l.fieldData.forEach((t=>{e.F_OpenKey.indexOf(t.name)<0&&_.push(t.name)})),r.value=e.F_OpenKey.split(",").filter((e=>e)),C.value=e.F_OpenType.split(",").filter((e=>e)))})).catch((e=>{console.log(e)})),t("/gymm/guestmanageapi/GetPageTable"+o("lang"),{params:{page:1,rows:1,queryJson:'{"keyValue":"'+S+'"}'}},!1).then((e=>{let t=e.rows[0];m.value=t;for(let a in t)if(t.hasOwnProperty(a)){let e=a.toLowerCase();A[e]="f_sex"===e?1==t[a]?o("men"):o("women"):"f_birthday"===e?t[a].substr(0,10):t[a]}A.area=t.f_city+t.f_country+t.f_county})).then((e=>{})).catch((()=>{}))}));return b((()=>{v.value=[]})),{checked1:r,onSubmit:function(e){let t=Array.from(e.checkboxGroup);t.indexOf("F_EnglishName")<0&&t.unshift("F_EnglishName"),t.indexOf("F_ChineseName")<0&&t.unshift("F_ChineseName"),t=t.filter((e=>e)),a("/gymm/GuestOpenApi/SaveForm"+o("lang"),{data:{F_GuestId:S,F_OpenKey:t.join(","),F_OpenType:e.opens.join(",")}},!1).then((e=>{"保存成功！"===e&&f({type:"primary",message:o("SubmittedSuccessfully")})}))},state:A,yD:m,onCheckAllChange:()=>{let e=l.fieldData.filter((e=>i.value.F_IsForeignGuest==e.isForeign||3==e.isForeign));r.value.length!==e.length?c.value.toggleAll(!0):c.value.toggleAll()},checkboxGroupRef:c,setUserData:i,checkboxGroupChange:function(e){},t:o,checked:C,checkboxRefs:v,list1:k,list2:x,toggle:e=>{v.value[e].toggle()},onFailed:function(e){console.log(e.errors.map((e=>e.message)).join(".")),u.alert({title:o("Tips"),message:e.errors.map((e=>e.message)).join(".")}).then((()=>{}))}}}});const z=N();_("data-v-375ef664");const K={id:"checkbox_from_div",style:{}},L={style:{padding:"0 0.5rem","background-color":"white"}},q={style:{width:"100%"}},M={key:1,class:"px-3",style:{color:"#969799","font-size":"0.875rem"}},W={class:"my_open_range"},J={class:"py-3",style:{"font-weight":"bold","text-align":"center"}},H={style:{height:"15rem",overflow:"auto"}},Q={style:{margin:"16px"}};C();const Y=z(((e,t,a,l,n,o)=>{const s=v("Cell"),i=v("Checkbox"),r=v("CheckboxGroup"),m=v("Field"),c=v("CellGroup"),u=v("Button"),d=v("Form");return k(),x(d,{onSubmit:e.onSubmit,onFailed:e.onFailed,style:{position:"relative"}},{default:z((()=>[A("div",K,[A("div",L,[A(m,{name:"checkboxGroup"},{input:z((()=>[A("div",q,[A(r,{modelValue:e.checked1,"onUpdate:modelValue":t[1]||(t[1]=t=>e.checked1=t),onChange:e.checkboxGroupChange,ref:t=>e.checkboxGroupRef=t,style:{width:"100%"}},{default:z((()=>[A(i,{disabled:!0,checked:"",style:{width:"100%"}},{default:z((()=>[A(s,{style:{width:"100%"},title:e.t("ChineseName"),value:e.state.f_chinesename},null,8,["title","value"])])),_:1}),A(i,{disabled:!0,checked:"",style:{width:"100%"}},{default:z((()=>[A(s,{style:{width:"100%"},title:e.t("EnglishName"),value:e.state.f_englishname},null,8,["title","value"])])),_:1}),(k(!0),x(S,null,w(e.fieldData,((t,a)=>(k(),x("div",{key:a},[(e.setUserData.F_IsForeignGuest==t.isForeign||3==t.isForeign)&&["F_ChineseName","F_EnglishName"].indexOf(t.name)<0?(k(),x(i,{key:0,name:t.name,style:{width:"100%"}},{default:z((()=>[A(s,{style:{width:"100%"},title:t.label,value:"collapse"===t.type?"":(e.state[(t.name2||t.name).toLowerCase()]||"")+("f_nativeplacename"===t.name?(e.yD.f_cityname||"")+(e.yD.f_countyname||""):"")||"-"},null,8,["title","value"])])),_:2},1032,["name"])):D("",!0),"collapse"===t.type?(k(),x("div",M,G(e.state[t.name2]||"-"),1)):D("",!0)])))),128))])),_:1},8,["modelValue","onChange"])])])),_:1})])]),A("div",W,[A("div",J,G(e.t("PleaseSelectVisibility")),1),A("div",H,[A(m,{name:"opens",rules:[{required:!0,message:e.t("PleaseSelectVisibility")}]},{input:z((()=>[A(r,{modelValue:e.checked,"onUpdate:modelValue":t[3]||(t[3]=t=>e.checked=t)},{default:z((()=>[A(c,null,{default:z((()=>[(k(!0),x(S,null,w([...e.list1,...e.list2],((a,l)=>(k(),x(s,{border:!1,clickable:"",key:a.F_Id,title:a.F_Name,onClick:t=>e.toggle(l),style:{width:"100%"}},{value:z((()=>[A(i,{name:a.F_Id,ref:t=>e.checkboxRefs[l]=t,onClick:t[2]||(t[2]=O((()=>{}),["stop"]))},null,8,["name"])])),_:2},1032,["title","onClick"])))),128))])),_:1})])),_:1},8,["modelValue"])])),_:1},8,["rules"])])]),A("div",Q,[A(u,{round:"",block:"",type:"primary","native-type":"submit",style:{"background-color":"#FA6E35",color:"white",border:"0","border-radius":"0.15rem"}},{default:z((()=>[I(G(e.t("confirmPublic")),1)])),_:1})])])),_:1},8,["onSubmit","onFailed"])}));U.render=Y,U.__scopeId="data-v-375ef664";var Z=l({props:{fieldData:{type:Object,default:[]}},components:{Cell:n,CellGroup:o,Checkbox:s,CheckboxGroup:i,Button:r,Collapse:P,CollapseItem:R,Field:c,Form:m},setup(l,{emit:n}){const{t:o}=d(),s=e(),i=p((()=>s.state.myStoreModule1.userData)),r=h({}),m=g({}),c=h(["1"]),u=h([]);y(u,(e=>{let t=l.fieldData;n("setCheckAllStatus",!!e.length&&e.length<t.length,e.length===t.length),m.indeterminate=!!e.length&&e.length<t.length,m.checkAll=e.length===t.length}));const b=T();let _=window.localStorage.getItem("userId");return F((()=>{t("/gymm/GuestOpenApi/GetGuestOpenKey"+o("lang"),{userid:_},!1).then((e=>{console.log(e,e.split(",")),u.value=e.split(",")})).catch((()=>{})),t("/gymm/guestmanageapi/GetPageTable"+o("lang"),{params:{page:1,rows:1,queryJson:'{"keyValue":"'+_+'"}'}},!1).then((e=>{let t=e.rows[0];for(let a in t)t.hasOwnProperty(a)&&(m[a]="f_companyincorporationtime"===a?t[a].substr(0,10):t[a])})).catch((()=>{}))})),{checked1:u,coll:c,onCheckAllChange:()=>{l.fieldData.filter((e=>i.value.F_IsForeignGuest==e.isForeign||3==e.isForeign)),console.log(u.value.length,l.fieldData.length),u.value.length!==l.fieldData.length?r.value.toggleAll(!0):r.value.toggleAll()},checkboxGroupRef:r,onSubmit:function(e){a("/gymm/GuestOpenApi/SaveForm"+o("lang"),{data:{F_GuestId:_,F_OpenKey:e.checkboxGroup.join(",")}},!1).then((e=>{"保存成功！"===e&&f({type:"primary",message:o("SubmittedSuccessfully")})}))},back:function(){b.go(-1)},state:m,t:o}}});const $=N();_("data-v-4bdde92e");const X={class:"tab_detail",id:"checkbox_from_div",style:{"background-color":"white",position:"relative"}},ee={style:{padding:"0 0.5rem"}},te={key:0,class:"px-3",style:{color:"#969799","font-size":"0.875rem"}},ae={style:{margin:"16px"},class:"d-flex justify-content-between"};C();const le=$(((e,t,a,l,n,o)=>{const s=v("Cell"),i=v("Checkbox"),r=v("CheckboxGroup"),m=v("Field"),c=v("Button"),u=v("Form");return k(),x(u,{onSubmit:e.onSubmit,style:{position:"relative"}},{default:$((()=>[A("div",X,[A("div",ee,[A(m,{name:"checkboxGroup"},{input:$((()=>[A(r,{modelValue:e.checked1,"onUpdate:modelValue":t[1]||(t[1]=t=>e.checked1=t),ref:t=>e.checkboxGroupRef=t,style:{width:"100%"}},{default:$((()=>[(k(!0),x(S,null,w(e.fieldData,((t,a)=>(k(),x("div",{key:a},[A(i,{name:t.name,style:{width:"100%"}},{default:$((()=>[A(s,{style:{width:"100%"},title:t.label,value:"collapse"===t.type?"":e.state[t.name]||"-"},null,8,["title","value"])])),_:2},1032,["name"]),"collapse"===t.type?(k(),x("div",te,G(e.state[t.name]||"-"),1)):D("",!0)])))),128))])),_:1},8,["modelValue"])])),_:1})])]),A("div",ae,[A(c,{class:"b",round:"",type:"primary","native-type":"submit",style:{}},{default:$((()=>[I(G(e.t("confirmPublic")),1)])),_:1}),A(c,{onClick:e.back,type:"primary","native-type":"submit",style:{width:"30%"}},{default:$((()=>[I(G(e.t("cancel")),1)])),_:1},8,["onClick"])])])),_:1},8,["onSubmit"])}));Z.render=le,Z.__scopeId="data-v-4bdde92e";var ne=l({props:{},components:{Tab:j,Tabs:E,Button:r,InfoFormCheckboxForm:U,FormDetailedCheckboxForm:Z},setup(){const{t:e}=d(),t=h("1"),a=h({}),l=h({}),n=h(!0),o=h(!1);const s=h(!0),i=h(!0);return{field:h([{name:"F_ChineseName",isForeign:3,label:e("ChineseName"),type:"text"},{name:"F_EnglishName",isForeign:3,label:e("EnglishName"),type:"text"},{name:"F_Sex",isForeign:3,label:e("gender"),type:"sexSelect"},{name:"F_Country",isForeign:1,label:e("country"),type:"F_Country"},{name:"F_Nationality",name2:"F_NationalityName",isForeign:1,label:e("Continent"),type:"F_Country"},{name:"F_NativePlace",name2:"F_NativePlaceName",isForeign:0,label:e("province"),type:"areaSelect"},{name:"F_City",name2:"F_Cityname",isForeign:0,label:e("city"),type:"areaSelect"},{name:"F_County",name2:"F_Countyname",isForeign:0,label:e("Area"),type:"areaSelect"},{name:"F_Birthday",isForeign:3,label:e("dateOfBirth"),type:"calendar"},{name:"F_FirstPost",isForeign:3,label:e("FirstPost"),type:"text"},{name:"F_SecondPost",isForeign:3,label:e("SecondPost"),type:"text"},{name:"F_GuestLevel",name2:"F_GuestLevelname",isForeign:3,label:e("level"),type:"text"},{name:"F_ProfessionalTitle",isForeign:3,label:e("jobTitle"),type:"text"},{name:"F_GuestType",name2:"f_typename",isForeign:3,label:e("category"),type:"text"},{name:"F_CredentialType",name2:"f_credentialtypename",isForeign:3,label:e("typeOfCertificate"),type:"text"},{name:"F_ChineseResume",name2:"f_chineseresume",isForeign:3,label:e("ChineseResume"),type:"collapse"},{name:"F_EnglishResume",name2:"f_englishresume",isForeign:3,label:e("EnglishCV"),type:"collapse"},{name:"F_Industry",name2:"f_industryname",isForeign:3,label:e("industry"),type:"text"},{name:"F_ResearchArea",name2:"f_researcharea",isForeign:3,label:e("ResearchAreas"),type:"text"},{name:"F_ResearchResult",name2:"f_researchresult",isForeign:3,label:e("ResearchResults"),type:"text"},{name:"F_CompanyChineseName",name2:"f_companychinesename",isForeign:3,label:e("institutionName"),type:"text"},{name:"F_CompanyEnglishName",name2:"f_companyenglishname",isForeign:3,label:e("InstitutionEnglishName"),type:"text"},{name:"F_CompanyIntroduction",isForeign:3,label:e("Introduction"),type:"text"},{name:"F_CompanyCode",isForeign:3,label:e("InstitutionCode"),type:"text"},{name:"F_CompanyIncorporationTime",isForeign:3,label:e("Established"),type:"calendar"},{name:"F_CompanyResearchDirection",isForeign:3,label:e("researchDirection"),type:"text"},{name:"F_CompanyType",isForeign:3,label:e("UnitNature"),type:"text"},{name:"F_CompanyLeader",isForeign:3,label:e("MainLeader"),type:"text"},{name:"F_CompanyWebSite",isForeign:3,label:e("OfficialWebsite"),type:"text"},{name:"F_CompanyAddress",isForeign:3,label:e("HeadquartersAddress"),type:"text"},{name:"F_CompanyPhoneNumber",isForeign:3,label:e("phone"),type:"text"},{name:"F_CompanyFax",isForeign:3,label:e("fax"),type:"text"},{name:"F_CompanyEMail",isForeign:3,label:e("mail"),type:"text"}]),indeterminate:n,onCheckAllChange:e=>{a.value&&(n.value=!1,a.value.onCheckAllChange())},checkAllStatus:o,setCheckAllStatus:function(e,t){n.value=e,o.value=t},indeterminate2:s,onCheckAllChange2:e=>{l.value&&(s.value=!1,l.value.onCheckAllChange())},checkAllStatus2:i,setCheckAllStatus2:function(e,t){s.value=e,i.value=t},infoFormCheckboxForm:a,formDetailedCheckboxForm:l,tabsActive:t,t:e}}});const oe=N();_("data-v-3be4b331");const se=A("div",{style:{"background-color":"white",height:"1.2rem"}},null,-1),ie={class:"bg-white"},re={class:" d-flex justify-content-between",style:{position:"relative",border:"0","box-shadow":"none",padding:"0 0.6rem 0.5rem 0.6rem",margin:"0 0.8rem","border-bottom":"0.05rem solid #eee"}},me={style:{width:"6.5rem"},class:""},ce={style:{flex:"1"}},ue={style:{"font-size":"1rem"}};C();const de=oe(((e,t,a,l,n,o)=>{const s=v("a-checkbox"),i=v("Button"),r=v("InfoFormCheckboxForm");return k(),x(S,null,[se,A("div",ie,[A("div",re,[A("div",me,[V(A(s,{style:{position:"absolute",top:"50%",transform:"translate(0, -50%)"},checked:e.checkAllStatus,"onUpdate:checked":t[1]||(t[1]=t=>e.checkAllStatus=t),indeterminate:e.indeterminate,onChange:e.onCheckAllChange},{default:oe((()=>[I(G(e.t("selectAll")),1)])),_:1},8,["checked","indeterminate","onChange"]),[[B,"1"===e.tabsActive]])]),A("div",ce,[A(i,{size:"small",type:"primary",block:""},{default:oe((()=>[A("span",ue,G(e.t("PersonalInformation")),1)])),_:1})])])]),A(r,{onSetCheckAllStatus:e.setCheckAllStatus,ref:t=>e.infoFormCheckboxForm=t,fieldData:e.field},null,8,["onSetCheckAllStatus","fieldData"])],64)}));ne.render=de,ne.__scopeId="data-v-3be4b331";export default ne;
