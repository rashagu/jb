import{R as e,a as t}from"./index.7496c43c.js";import{d as a,ab as l,ac as n,af as o,ak as i,al as s,f as m,p as r,q as u,o as d,r as c,j as _,k as F,l as p,Q as v,z as f,Z as y,aa as P,ah as h,aj as S,W as C,i as I,h as k,a3 as b,a2 as w,aq as g,s as V,t as x,x as T,y as D,U as M,A as N}from"./vendor.f737c1cc.js";var U=a({props:{rules:{type:Object,default:[]},myState:{type:Object,default:{}},testValue:{type:String,default:""},myValue:{type:String,default:""},myName:{type:String,default:""},myLabel:{type:String,default:""},parentId:{type:String,default:"f3eb781d22034660b950515c67f268d5"}},components:{Popup:l,Picker:n,Field:o,Overlay:i,Loading:s},emits:["onConfirm"],setup(t,{emit:a}){const{t:l}=m(),n=r(!1),o=r({}),i=r([]),s=r(!1),c=r({}),_=r("");function F(){if(!t.parentId)return i.value=[],void(_.value="");"F_NativePlace"===t.myName||(n.value=!0),e("/gymm/CooperationApi/ChildAddress?parentid="+t.parentId,{},!1).then((e=>{let a={};e.forEach((e=>{a[e.F_Id]=e.F_Name})),c.value=a,t&&(_.value=a[t.myValue]),i.value=e})).then((()=>{n.value=!1})).catch((()=>{n.value=!1}))}return u((()=>t.myState),(e=>{})),u((()=>t.myState[t.myName]),(e=>{e&&(_.value=c.value[e]),""===e&&(_.value="")})),u(o,(e=>{e.setIndexes&&i.value.forEach(((a,l)=>{a.F_Id===t.myValue&&e.setIndexes([l])}))})),u((()=>t.parentId),(e=>{F()})),d((()=>{F()})),{show:s,customFieldName:{text:"F_Name"},onConfirmPicker:e=>{s.value=!1,a("onConfirm",e,t.myName)},onCancel:e=>{s.value=!1},columnsPicker:i,value:_,loadingStatus:n,vanPicker:o,t:l}}});const A=f(),Y=A(((e,t,a,l,n,o)=>{const i=c("Overlay"),s=c("Field"),m=c("Picker"),r=c("Popup");return _(),F(v,null,[p(i,{show:e.loadingStatus},null,8,["show"]),p(s,{border:!1,modelValue:e.value,"onUpdate:modelValue":t[1]||(t[1]=t=>e.value=t),"is-link":"",readonly:"",label:e.myLabel,placeholder:"请选择"+e.myLabel,onClick:t[2]||(t[2]=t=>e.show=!0),rules:e.rules},null,8,["modelValue","label","placeholder","rules"]),p(r,{show:e.show,"onUpdate:show":t[3]||(t[3]=t=>e.show=t),position:"bottom"},{default:A((()=>[p(m,{ref:"vanPicker","confirm-button-text":e.t("confirm"),"cancel-button-text":e.t("cancel"),"default-index":e.myValue,title:e.myLabel,columns:e.columnsPicker,onCancel:e.onCancel,"columns-field-names":e.customFieldName,onConfirm:e.onConfirmPicker},null,8,["confirm-button-text","cancel-button-text","default-index","title","columns","onCancel","columns-field-names","onConfirm"])])),_:1},8,["show"])],64)}));U.render=Y,U.__scopeId="data-v-cb63e160";var q=a({props:{},components:{Button:y,Field:o,Form:P,Calendar:h,Popup:l,DatetimePicker:S,Cell:C,Picker:n,MyPlace:U},setup(){const{t:a}=m(),l=r([]),n=r([]),o=I();o.params.f_id;const i=r(k().format("H")),s=b({date:"",time1:"",showPickerDatetime:!1,time2:"",showPickerDatetime2:!1,showCalendar:!1,F_SituationText:"",F_GuestId:"",F_InvitedId:"",F_Starttime:"",F_Endtime:"",F_InvitationContent:"",F_State:"",F_InvitationPlace:"",F_level:"",F_Site:""}),u=r(""),c=r("");function _(){e("/gymm/ScheduleApi/OpenTime",{params:{keyValue:o.params.f_id}},!1).then((e=>{l.value=e.map((e=>({text:e.f_starttime.substr(0,16)+" ~ "+e.f_endtime.substr(11,5),value:e.f_starttime+","+e.f_endtime}))),console.log(e)})),e("/gymm/CooperationApi/Information",{params:{}},!1).then((e=>{console.log(e),n.value=e.map((e=>({text:e.F_Name,F_Id:e.F_Id})))}))}d((()=>{_()}));return{onSubmit:function(e){console.log(e);let l={};for(let t in e)"undefined"!==t&&(l[t]=e[t]);l.F_GuestId=window.localStorage.getItem("userId"),l.F_InvitedId=o.params.f_id,l.F_State="0",console.log(l),t("/gymm/ScheduleApi/DateForm",{data:l},!1).then((e=>{console.log(e),"保存成功！"===e&&g.confirm({className:"myDio",title:a("Tips"),confirmButtonColor:"#3388FF",message:a("TheInvitationHasBeenSentPleaseBePatient")}).then((()=>{console.log("reset"),s.F_GuestId="",s.F_InvitedId="",s.F_Starttime="",s.F_Endtime="",s.F_InvitationContent="",s.F_InvitationPlace="",s.F_level="",s.F_Site="",s.F_SituationText="",s.time1="",_()})).catch((()=>{_()}))}))},state:s,onConfirm:e=>{s.date=k(e).format("YYYY-MM-DD"),s.showCalendar=!1},onConfirmDatetime:e=>{console.log(e.value);let t=e.value.split(",");s.F_Starttime=k(t[0]).format("YYYY-MM-DDTHH:mm:ss"),s.F_Endtime=k(t[1]).format("YYYY-MM-DDTHH:mm:ss"),s.time1=e.text,s.showPickerDatetime=!1},minHour:i,onConfirmDatetime2:e=>{s.time2=e,s.showPickerDatetime2=!1},customFieldName:{text:"text"},timesPicker:l,LevelParent:u,siteParent:c,onConfirmPicker:async(e,t)=>{"F_InvitationPlace"===t&&(s.F_level="",await w(),s.F_Site="",await w(),u.value=e.F_Id),"F_level"===t&&(await w(),s.F_Site="",await w(),c.value=e.F_Id),e&&e.F_Id&&(await w(),s[t]=e.F_Id)},onConfirmSituation:function(e){s.F_InvitationContent=e.F_Id,s.F_SituationText=e.text,s.showPickerSituation=!1},situationArr:n,t:a}}});const E=f();V("data-v-70a53bfd");const O={style:{color:"var(--van-field-label-color)"}},H={style:{margin:"16px"}};x();const L=E(((e,t,a,l,n,o)=>{const i=c("Field"),s=c("Picker"),m=c("Popup"),r=c("MyPlace"),u=c("Cell"),d=c("Button"),v=c("Form");return _(),F("div",null,[p(v,{onSubmit:e.onSubmit},{default:E((()=>[p(i,{border:!1,modelValue:e.state.time1,"onUpdate:modelValue":t[1]||(t[1]=t=>e.state.time1=t),"is-link":"",readonly:"",label:e.t("MeetingTime"),placeholder:e.t("ClickToSelectMeetingTime"),rules:[{required:!0,message:e.t("ClickToSelectMeetingTime")}],onClick:t[2]||(t[2]=t=>e.state.showPickerDatetime=!0)},null,8,["modelValue","label","placeholder","rules"]),T(p(i,{modelValue:e.state.F_Starttime,"onUpdate:modelValue":t[3]||(t[3]=t=>e.state.F_Starttime=t),readonly:"",clickable:"",name:"F_Starttime"},null,8,["modelValue"]),[[N,!1]]),T(p(i,{modelValue:e.state.F_Endtime,"onUpdate:modelValue":t[4]||(t[4]=t=>e.state.F_Endtime=t),readonly:"",clickable:"",name:"F_Endtime"},null,8,["modelValue"]),[[N,!1]]),p(m,{show:e.state.showPickerDatetime,"onUpdate:show":t[6]||(t[6]=t=>e.state.showPickerDatetime=t),position:"bottom"},{default:E((()=>[p(s,{ref:"vanPicker",title:e.t("ChooseMeetingTime"),columns:e.timesPicker,"columns-field-names":e.customFieldName,onConfirm:e.onConfirmDatetime,onCancel:t[5]||(t[5]=t=>e.state.showPickerDatetime=!1)},null,8,["title","columns","columns-field-names","onConfirm"])])),_:1},8,["show"]),T(p(i,{modelValue:e.state.F_InvitationPlace,"onUpdate:modelValue":t[7]||(t[7]=t=>e.state.F_InvitationPlace=t),name:"F_InvitationPlace",rules:[{required:!0}]},null,8,["modelValue"]),[[N,!1]]),p(r,{rules:[{required:!0,message:e.t("PleaseChooseAMeetingPlace")}],"my-name":"F_InvitationPlace","my-label":e.t("MeetingPlace"),"my-value":e.state.F_InvitationPlace,"my-state":e.state,"parent-id":"0",onOnConfirm:t[8]||(t[8]=t=>e.onConfirmPicker(t,"F_InvitationPlace"))},null,8,["rules","my-label","my-value","my-state"]),T(p(i,{modelValue:e.state.F_level,"onUpdate:modelValue":t[9]||(t[9]=t=>e.state.F_level=t),name:"F_level",rules:[{required:!0}]},null,8,["modelValue"]),[[N,!1]]),p(r,{rules:[{required:!0,message:e.t("PleaseSelectMeetingFloor")}],"my-name":"F_level","my-label":e.t("MeetingFloor"),"my-value":e.state.F_level,"my-state":e.state,"parent-id":e.LevelParent,onOnConfirm:t[10]||(t[10]=t=>e.onConfirmPicker(t,"F_level"))},null,8,["rules","my-label","my-value","my-state","parent-id"]),T(p(i,{modelValue:e.state.F_Site,"onUpdate:modelValue":t[11]||(t[11]=t=>e.state.F_Site=t),name:"F_Site",rules:[{required:!0}]},null,8,["modelValue"]),[[N,!1]]),p(r,{rules:[{required:!0,message:e.t("PleaseSelectTheMeetingAddress")}],"my-name":"F_Site","my-label":e.t("MeetingAddress"),"my-value":e.state.F_Site,"my-state":e.state,"parent-id":e.siteParent,onOnConfirm:t[12]||(t[12]=t=>e.onConfirmPicker(t,"F_Site"))},null,8,["rules","my-label","my-value","my-state","parent-id"]),T(p(i,{modelValue:e.state.F_InvitationContent,"onUpdate:modelValue":t[13]||(t[13]=t=>e.state.F_InvitationContent=t),"is-link":"",readonly:"",name:"F_InvitationContent",label:e.t("InvitationText"),placeholder:e.t("ClickToSelectACity"),rules:[{required:!0}]},null,8,["modelValue","label","placeholder"]),[[N,!1]]),p(u,{onClick:t[14]||(t[14]=t=>e.state.showPickerSituation=!0)},{title:E((()=>[p("span",O,D(e.t("InvitationText")),1)])),_:1}),p(i,{onClick:t[15]||(t[15]=t=>e.state.showPickerSituation=!0),modelValue:e.state.F_SituationText,"onUpdate:modelValue":t[16]||(t[16]=t=>e.state.F_SituationText=t),readonly:"",rows:"12",autosize:"",type:"textarea",placeholder:e.t("PleaseSelectTheInvitationText"),rules:[{required:!0,message:e.t("PleaseSelectTheInvitationText")}]},null,8,["modelValue","placeholder","rules"]),p(m,{show:e.state.showPickerSituation,"onUpdate:show":t[18]||(t[18]=t=>e.state.showPickerSituation=t),position:"bottom"},{default:E((()=>[p(s,{columns:e.situationArr,onConfirm:e.onConfirmSituation,onCancel:t[17]||(t[17]=t=>e.state.showPickerSituation=!1)},null,8,["columns","onConfirm"])])),_:1},8,["show"]),p("div",H,[p(d,{block:"",type:"primary","native-type":"submit"},{default:E((()=>[M(D(e.t("submit")),1)])),_:1})])])),_:1},8,["onSubmit"])])}));q.render=L,q.__scopeId="data-v-70a53bfd";export default q;
