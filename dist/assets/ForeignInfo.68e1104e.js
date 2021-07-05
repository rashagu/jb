var e=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,m=(a,l,t)=>l in a?e(a,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[l]=t;import{R as s,u,a as i}from"./index.cb39fede.js";import{d,aa as c,O as y,a5 as p,ab as f,ac as b,ad as h,p as C,W as v,o as F,X as g,r as _,j as V,k as P,l as k,Z as w,z as x,a4 as I,ae as S,a6 as N,f as O,q as U,af as A,ag as L,a as q,U as E,h as T,V as M,s as j,t as D,_ as R,Y as B,y as G,v as Y,x as z,A as W,P as H,ah as X,ai as Z,$,a0 as J}from"./vendor.825aec79.js";var K=d({props:{rules:{type:Object,default:[]},myValue:String,myName:String,myLabel:String,areaCode:String},components:{Field:c,Button:y,Popup:p,Area:f,Calendar:b,Cascader:h},emits:["onConfirmArea"],setup(e,{emit:u}){const i=C(!0),d=C(!1);C(""),C("");const c=v({show:!1,fieldValue:"",cascaderValue:"",options:[{text:"浙江省",value:"330000",children:[]}]}),y=v({areaList:{province_list:{},city_list:{}}});return F((()=>{i.value=!0,s("/gymm/BaseInfoApi/ChildAddress"+t("lang"),{params:{parentid:"f3eb781d22034660b950515c67f268d5"}},!1).then((e=>{c.options=e.map((e=>({text:e.F_Name,value:e.F_Id,children:[]})))})).then((()=>{i.value=!1})).catch((()=>{i.value=!1}))})),p=((e,a)=>{for(var l in a||(a={}))o.call(a,l)&&m(e,l,a[l]);if(n)for(var l of n(a))r.call(a,l)&&m(e,l,a[l]);return e})({onConfirmArea:(e,a)=>{u("onConfirmArea",e),d.value=!1}},g(y)),a(p,l({showArea:d,state:c,onChange0:(e,a)=>{var l;e.tabIndex>0||(l=e.value,i.value=!0,s("/gymm/BaseInfoApi/ChildAddress"+t("lang"),{params:{parentid:l}},!1).then((e=>{let a=e.map((e=>({text:e.F_Name,value:e.F_Id})));Array.from(c.options).forEach(((e,t)=>{l===e.value&&(c.options[t].children=a.length>0?a:[{text:e.text,value:e.value}])}))})).then((()=>{i.value=!1})).catch((()=>{i.value=!1})))},onFinish:e=>{const{selectedOptions:a}=e;c.show=!1,u("onConfirmArea",a)},loading:i}));var p}});const Q=x(),ee=Q(((e,a,l,t,n,o)=>{const r=_("Field"),m=_("Cascader"),s=_("Popup");return V(),P(w,null,[k(r,{modelValue:e.myValue,"onUpdate:modelValue":a[1]||(a[1]=a=>e.myValue=a),"is-link":"",readonly:"",name:e.myName,label:e.myLabel,placeholder:"请选择所在地区",onClick:a[2]||(a[2]=a=>e.state.show=!0),rules:e.rules},null,8,["modelValue","name","label","rules"]),k(s,{show:e.state.show,"onUpdate:show":a[5]||(a[5]=a=>e.state.show=a),round:"",position:"bottom"},{default:Q((()=>[k(m,{loading:e.loading,modelValue:e.state.cascaderValue,"onUpdate:modelValue":a[3]||(a[3]=a=>e.state.cascaderValue=a),title:"请选择所在地区",options:e.state.options,onClose:a[4]||(a[4]=a=>e.state.show=!1),onChange:e.onChange0,onFinish:e.onFinish},null,8,["loading","modelValue","options","onChange","onFinish"])])),_:1},8,["show"])],64)}));K.render=ee,K.__scopeId="data-v-555dba5c";var ae=d({props:{myValue:String,myName:String,myLabel:String},components:{Field:c,Popup:p,Calendar:b},emits:["onConfirmCalendar"],setup(e,{emit:a}){const l=C(!1);return{showCalendar:l,onConfirmCalendar:e=>{a("onConfirmCalendar",e),l.value=!1}}}});const le=x()(((e,a,l,t,n,o)=>{const r=_("Field"),m=_("Calendar");return V(),P(w,null,[k(r,{modelValue:e.myValue,"onUpdate:modelValue":a[1]||(a[1]=a=>e.myValue=a),readonly:"",clickable:"",name:e.myName,label:e.myLabel,placeholder:"点击选择日期",onClick:a[2]||(a[2]=a=>e.showCalendar=!0)},null,8,["modelValue","name","label"]),k(m,{show:e.showCalendar,"onUpdate:show":a[3]||(a[3]=a=>e.showCalendar=a),onConfirm:e.onConfirmCalendar},null,8,["show","onConfirm"])],64)}));ae.render=le,ae.__scopeId="data-v-28dcf6a2";var te=d({props:{myValue:String,myName:String,myLabel:String},components:{Form:I,Field:c,Button:y,Popup:p,Area:f,DatetimePicker:S,Picker:N},emits:["onConfirm"],setup(e,{emit:a}){const l=v({value:"",showPicker:!1});return{state:l,columns:["男","女"],onConfirm:e=>{a("onConfirm",e),l.showPicker=!1}}}});const ne=x(),oe=ne(((e,a,l,t,n,o)=>{const r=_("Field"),m=_("Picker"),s=_("Popup");return V(),P(w,null,[k(r,{modelValue:e.myValue,"onUpdate:modelValue":a[1]||(a[1]=a=>e.myValue=a),readonly:"",clickable:"",name:e.myName,label:e.myLabel,placeholder:"点击选择城市",onClick:a[2]||(a[2]=a=>e.state.showPicker=!0)},null,8,["modelValue","name","label"]),k(s,{show:e.state.showPicker,"onUpdate:show":a[4]||(a[4]=a=>e.state.showPicker=a),position:"bottom"},{default:ne((()=>[k(m,{columns:e.columns,onConfirm:e.onConfirm,onCancel:a[3]||(a[3]=a=>e.state.showPicker=!1)},null,8,["columns","onConfirm"])])),_:1},8,["show"])],64)}));te.render=oe,te.__scopeId="data-v-201853b8";var re=d({props:{rules:{type:Object,default:[]},myState:{type:Object,default:{}},testValue:{type:String,default:""},myValue:{type:String,default:""},myName:{type:String,default:""},myLabel:{type:String,default:""}},components:{Popup:p,Picker:N,Field:c},emits:["onConfirm"],setup(e,{emit:a}){const{t:l}=O(),t=C({}),n=C([]),o=C(!1),r=C({}),m=C("");return U((()=>e.myState[e.myName]),(e=>{e&&(m.value=r.value[e])})),U(t,(a=>{a.setIndexes&&n.value.forEach(((l,t)=>{l.F_Id===e.myValue&&a.setIndexes([t])}))})),F((()=>{s("/gymm/BaseInfoApi/GuestLevel"+l("lang"),{},!1).then((a=>{let l={};a.forEach((e=>{l[e.F_Id]=e.F_Name})),r.value=l,e&&(m.value=l[e.myValue]),n.value=a})).catch((()=>{}))})),{show:o,customFieldName:{text:"F_Name"},onConfirmPicker:l=>{a("onConfirm",l,e.myName),o.value=!1},onCancel:e=>{o.value=!1},columnsPicker:n,value:m,vanPicker:t,t:l}}});const me=x(),se=me(((e,a,l,t,n,o)=>{const r=_("Field"),m=_("Picker"),s=_("Popup");return V(),P(w,null,[k(r,{modelValue:e.value,"onUpdate:modelValue":a[1]||(a[1]=a=>e.value=a),"is-link":"",readonly:"",label:e.myLabel,placeholder:"请选择"+e.myLabel,onClick:a[2]||(a[2]=a=>e.show=!0),rules:e.rules},null,8,["modelValue","label","placeholder","rules"]),k(s,{show:e.show,"onUpdate:show":a[3]||(a[3]=a=>e.show=a),position:"bottom"},{default:me((()=>[k(m,{ref:"vanPicker","confirm-button-text":e.t("confirm"),"cancel-button-text":e.t("cancel"),"default-index":e.myValue,title:e.myLabel,columns:e.columnsPicker,onCancel:e.onCancel,"columns-field-names":e.customFieldName,onConfirm:e.onConfirmPicker},null,8,["confirm-button-text","cancel-button-text","default-index","title","columns","onCancel","columns-field-names","onConfirm"])])),_:1},8,["show"])],64)}));re.render=se,re.__scopeId="data-v-39d9ebd8";var ue=d({props:{rules:{type:Object,default:[]},myState:{type:Object,default:{}},testValue:{type:String,default:""},myValue:{type:String,default:""},myName:{type:String,default:""},myLabel:{type:String,default:""}},components:{Popup:p,Picker:N,Field:c},emits:["onConfirm"],setup(e,{emit:a}){const{t:l}=O(),t=C({}),n=C([]),o=C(!1),r=C({}),m=C("");return U((()=>e.myValue),(e=>{e&&(m.value=r.value[e])})),U(t,(a=>{a.setIndexes&&n.value.forEach(((l,t)=>{l.F_Id===e.myValue&&a.setIndexes([t])}))})),F((()=>{var a;a=0,s("/gymm/BaseInfoApi/GuestType"+l("lang"),{params:{IsForeign:a}},!1).then((a=>{let l={};a.forEach((e=>{l[e.F_Id]=e.F_Name})),r.value=l,e&&(m.value=l[e.myValue]),n.value=a}))})),{show2:o,value:m,onConfirmPicker2:l=>{a("onConfirm",l,e.myName),o.value=!1},onCancel2:e=>{o.value=!1},customFieldName:{text:"F_Name"},columnsPicker2:n,t:l}}});const ie=x(),de=ie(((e,a,l,t,n,o)=>{const r=_("Field"),m=_("Picker"),s=_("Popup");return V(),P(w,null,[k(r,{modelValue:e.value,"onUpdate:modelValue":a[1]||(a[1]=a=>e.value=a),"is-link":"",readonly:"",label:e.myLabel,placeholder:"请选择"+e.myLabel,onClick:a[2]||(a[2]=a=>e.show2=!0),rules:e.rules},null,8,["modelValue","label","placeholder","rules"]),k(s,{show:e.show2,"onUpdate:show":a[3]||(a[3]=a=>e.show2=a),position:"bottom"},{default:ie((()=>[k(m,{"confirm-button-text":e.t("confirm"),"cancel-button-text":e.t("cancel"),"default-index":e.myValue,title:e.myLabel,columns:e.columnsPicker2,onCancel:e.onCancel2,"columns-field-names":e.customFieldName,onConfirm:e.onConfirmPicker2},null,8,["confirm-button-text","cancel-button-text","default-index","title","columns","onCancel","columns-field-names","onConfirm"])])),_:1},8,["show"])],64)}));ue.render=de,ue.__scopeId="data-v-4de22f7f";var ce=d({props:{rules:{type:Object,default:[]},myState:{type:Object,default:{}},testValue:{type:String,default:""},myValue:{type:String,default:""},myName:{type:String,default:""},myLabel:{type:String,default:""}},components:{Popup:p,Picker:N,Field:c},emits:["onConfirm"],setup(e,{emit:a}){const{t:l}=O(),t=C(null),n=C([]),o=C(!1),r=C({}),m=C("");return U((()=>e.myValue),(e=>{e&&(m.value=r.value[e],t.value)})),U(t,(a=>{a.setIndexes&&n.value.forEach(((l,t)=>{l.F_Id===e.myValue&&a.setIndexes([t])}))})),F((()=>{s("/gymm/BaseInfoApi/CredentialType"+l("lang"),{},!1).then((a=>{let l={};a.forEach((e=>{l[e.F_Id]=e.F_Name})),r.value=l,e&&(m.value=l[e.myValue],t.value),n.value=a}))})),{show2:o,value:m,onConfirmPicker2:l=>{a("onConfirm",l,e.myName),o.value=!1},onCancel2:e=>{o.value=!1},customFieldName:{text:"F_Name"},columnsPicker2:n,vanPicker:t,t:l}}});const ye=x(),pe=ye(((e,a,l,t,n,o)=>{const r=_("Field"),m=_("Picker"),s=_("Popup");return V(),P(w,null,[k(r,{modelValue:e.value,"onUpdate:modelValue":a[1]||(a[1]=a=>e.value=a),"is-link":"",readonly:"",label:e.myLabel,placeholder:"请选择"+e.myLabel,onClick:a[2]||(a[2]=a=>e.show2=!0),rules:e.rules},null,8,["modelValue","label","placeholder","rules"]),k(s,{show:e.show2,"onUpdate:show":a[3]||(a[3]=a=>e.show2=a),position:"bottom"},{default:ye((()=>[k(m,{ref:"vanPicker","confirm-button-text":e.t("confirm"),"cancel-button-text":e.t("cancel"),"default-index":e.myValue,title:e.myLabel,columns:e.columnsPicker2,onCancel:e.onCancel2,"columns-field-names":e.customFieldName,onConfirm:e.onConfirmPicker2},null,8,["confirm-button-text","cancel-button-text","default-index","title","columns","onCancel","columns-field-names","onConfirm"])])),_:1},8,["show"])],64)}));ce.render=pe,ce.__scopeId="data-v-4ea7ffb8";var fe=d({props:{rules:{type:Object,default:[]},myState:{type:Object,default:{}},testValue:{type:String,default:""},myValue:{type:String,default:""},myName:{type:String,default:""},myLabel:{type:String,default:""},parentId:{type:String,default:"f3eb781d22034660b950515c67f268d5"}},components:{Popup:p,Picker:N,Field:c,Overlay:A,Loading:L},emits:["onConfirm"],setup(e,{emit:a}){const{t:l}=O(),t=C(!1),n=C({}),o=C([]),r=C(!1),m=C({}),u=C("");function i(){if(!e.parentId)return o.value=[],void(u.value="");"F_NativePlace"===e.myName||(t.value=!0),s("/gymm/BaseInfoApi/ChildAddress"+l("lang"),{parentid:e.parentId},!1).then((a=>{let l={};a.forEach((e=>{l[e.F_Id]=e.F_Name})),m.value=l,e&&(u.value=l[e.myValue]),o.value=a})).then((()=>{t.value=!1})).catch((()=>{t.value=!1}))}return U((()=>e.myState),(e=>{})),U((()=>e.myState[e.myName]),(e=>{e&&(u.value=m.value[e])})),U(n,(a=>{a.setIndexes&&o.value.forEach(((l,t)=>{l.F_Id===e.myValue&&a.setIndexes([t])}))})),U((()=>e.parentId),(e=>{i()})),F((()=>{i()})),{show:r,customFieldName:{text:"F_Name"},onConfirmPicker:l=>{r.value=!1,a("onConfirm",l,e.myName)},onCancel:e=>{r.value=!1},columnsPicker:o,value:u,loadingStatus:t,vanPicker:n,t:l}}});const be=x(),he=be(((e,a,l,t,n,o)=>{const r=_("Overlay"),m=_("Field"),s=_("Picker"),u=_("Popup");return V(),P(w,null,[k(r,{show:e.loadingStatus},null,8,["show"]),k(m,{border:!1,modelValue:e.value,"onUpdate:modelValue":a[1]||(a[1]=a=>e.value=a),"is-link":"",readonly:"",label:e.myLabel,placeholder:"请选择"+e.myLabel,onClick:a[2]||(a[2]=a=>e.show=!0),rules:e.rules},null,8,["modelValue","label","placeholder","rules"]),k(u,{show:e.show,"onUpdate:show":a[3]||(a[3]=a=>e.show=a),position:"bottom"},{default:be((()=>[k(s,{ref:"vanPicker","confirm-button-text":e.t("confirm"),"cancel-button-text":e.t("cancel"),"default-index":e.myValue,title:e.myLabel,columns:e.columnsPicker,onCancel:e.onCancel,"columns-field-names":e.customFieldName,onConfirm:e.onConfirmPicker},null,8,["confirm-button-text","cancel-button-text","default-index","title","columns","onCancel","columns-field-names","onConfirm"])])),_:1},8,["show"])],64)}));fe.render=he,fe.__scopeId="data-v-787167fa";var Ce=d({props:{field:Object},components:{Form:I,Field:c,Button:y,Popup:p,Area:f,DatetimePicker:S,Calendar:b,Notify:q,Picker:N,MyArea:K,MyCalendar:ae,MySexSelect:te,MyType:ue,MyLevel:re,MyCredentialType:ce,MyRegion:fe},setup(e){const{t:a}=O(),l=u(),t=E((()=>l.state.myStoreModule1.userData));let n=window.localStorage.getItem("userId");const o=v({zhName:"",enName:"",value:"",showArea:!1,value2:"",showCalendar:!1}),r=v({zhName:"",enName:"",value:"",showArea:!1,value2:"",showCalendar:!1}),m=C(""),d=C(""),c=C([]);F((()=>{s("/gymm/guestmanageapi/GetFormData"+a("lang"),{params:{keyValue:n}},!1).then((a=>{let l=a;console.log(l),e.field&&(c.value=e.field,e.field.forEach((e=>{r[e.name]=l[e.name]||""})))})).then((e=>{})).catch((()=>{}))})),U(r,(e=>{}));return U((()=>r.F_NativePlace),(e=>{m.value=e})),U((()=>r.F_City),(e=>{d.value=e})),{state:r,state2:o,onSubmit:e=>{console.log("submit",e);let l={};for(let a in e)"undefined"!==a&&(l[a]=e[a]);l.F_Id=n,console.log("submit data",l),i("/gymm/guestmanageapi/SaveForm"+a("lang"),{data:l},!1).then((e=>{"保存成功！"===e&&q({type:"primary",message:a("SubmittedSuccessfully")})}))},onConfirm:()=>{},onConfirmCalendar:(e,a)=>{r[a]=T(e).format("YYYY-MM-DD")},onConfirmArea:e=>{r.F_NativePlace=e[0].value,r.F_City=e[1].value,r.F_County=e[2].value},onConfirmSex:(e,a)=>{r[a]=e},field:c,cityParent:m,countyParent:d,onConfirmPicker:async(e,a)=>{"F_NativePlace"===a&&(r.F_County="",await M(),r.F_City="",await M(),m.value=e.F_Id),"F_City"===a&&(await M(),r.F_County="",await M(),d.value=e.F_Id),e&&e.F_Id&&(await M(),r[a]=e.F_Id)},setUserData:t,t:a}}});const ve=x();j("data-v-61a29726");const Fe={style:{margin:"16px"}};D();const ge=ve(((e,a,l,t,n,o)=>{const r=_("Field"),m=_("MyLevel"),s=_("MyCredentialType"),u=_("MyRegion"),i=_("MyCalendar"),d=_("MyArea"),c=_("MySexSelect"),y=_("Button"),p=_("Form");return V(),P(p,{onSubmit:e.onSubmit},{default:ve((()=>[k("div",null,[(V(!0),P(w,null,R(e.field,((l,t)=>(V(),P("div",{key:t},[["sexSelect","calendar","areaSelect","F_GuestLevel","F_CredentialType","F_NativePlace","F_County","F_City"].indexOf(l.type)<0&&(e.setUserData.F_IsForeignGuest==l.isForeign||3==l.isForeign)?(V(),P(r,{key:0,border:!1,style:l.hidden?{height:0,padding:0}:{},modelValue:e.state[l.name],"onUpdate:modelValue":a=>e.state[l.name]=a,name:l.name,label:l.label,placeholder:e.t("pleaseEnter")+l.label,rules:l.rules},null,8,["style","modelValue","onUpdate:modelValue","name","label","placeholder","rules"])):Y("",!0),"F_GuestLevel"===l.type?z((V(),P(r,{key:1,style:l.hidden?{height:0,padding:0}:{},modelValue:e.state[l.name],"onUpdate:modelValue":a=>e.state[l.name]=a,name:l.name},null,8,["style","modelValue","onUpdate:modelValue","name"])),[[W,!1]]):Y("",!0),"F_GuestLevel"===l.type?z((V(),P(r,{key:2,style:l.hidden?{height:0,padding:0}:{},modelValue:e.state[l.name],"onUpdate:modelValue":a=>e.state[l.name]=a,name:l.name,rules:l.rules},null,8,["style","modelValue","onUpdate:modelValue","name","rules"])),[[W,!1]]):Y("",!0),"F_GuestLevel"===l.type?(V(),P(m,{key:3,rules:l.rules,"my-name":l.name,"my-label":l.label,"my-value":e.state[l.name],"my-state":e.state,onOnConfirm:a=>e.onConfirmPicker(a,l.name)},null,8,["rules","my-name","my-label","my-value","my-state","onOnConfirm"])):Y("",!0),"F_CredentialType"===l.type?z((V(),P(r,{key:4,style:l.hidden?{height:0,padding:0}:{},modelValue:e.state[l.name],"onUpdate:modelValue":a=>e.state[l.name]=a,name:l.name,rules:l.rules},null,8,["style","modelValue","onUpdate:modelValue","name","rules"])),[[W,!1]]):Y("",!0),"F_CredentialType"===l.type?(V(),P(s,{key:5,rules:l.rules,"my-name":l.name,"my-label":l.label,"my-value":e.state[l.name],"my-state":e.state,onOnConfirm:a=>e.onConfirmPicker(a,l.name)},null,8,["rules","my-name","my-label","my-value","my-state","onOnConfirm"])):Y("",!0),"F_NativePlace"===l.type?z((V(),P(r,{key:6,style:l.hidden?{height:0,padding:0}:{},modelValue:e.state[l.name],"onUpdate:modelValue":a=>e.state[l.name]=a,name:l.name,rules:l.rules},null,8,["style","modelValue","onUpdate:modelValue","name","rules"])),[[W,!1]]):Y("",!0),"F_NativePlace"===l.type?(V(),P(u,{rules:l.rules,key:t.name,"my-name":l.name,"my-label":l.label,"my-value":e.state[l.name],"my-state":e.state,"parent-id":"f3eb781d22034660b950515c67f268d5",onOnConfirm:a=>e.onConfirmPicker(a,l.name)},null,8,["rules","my-name","my-label","my-value","my-state","onOnConfirm"])):Y("",!0),"F_City"===l.type?z((V(),P(r,{key:8,style:l.hidden?{height:0,padding:0}:{},modelValue:e.state[l.name],"onUpdate:modelValue":a=>e.state[l.name]=a,name:l.name,rules:l.rules},null,8,["style","modelValue","onUpdate:modelValue","name","rules"])),[[W,!1]]):Y("",!0),"F_City"===l.type?(V(),P(u,{rules:l.rules,key:t.name,"my-name":l.name,"my-label":l.label,"my-value":e.state[l.name],"my-state":e.state,"parent-id":e.cityParent,onOnConfirm:a=>e.onConfirmPicker(a,l.name)},null,8,["rules","my-name","my-label","my-value","my-state","parent-id","onOnConfirm"])):Y("",!0),"F_County"===l.type?z((V(),P(r,{key:10,style:l.hidden?{height:0,padding:0}:{},modelValue:e.state[l.name],"onUpdate:modelValue":a=>e.state[l.name]=a,name:l.name,rules:l.rules},null,8,["style","modelValue","onUpdate:modelValue","name","rules"])),[[W,!1]]):Y("",!0),"F_County"===l.type?(V(),P(u,{rules:l.rules,key:t.name,"my-name":l.name,"my-label":l.label,"my-value":e.state[l.name],"my-state":e.state,"parent-id":e.countyParent,onOnConfirm:a=>e.onConfirmPicker(a,l.name)},null,8,["rules","my-name","my-label","my-value","my-state","parent-id","onOnConfirm"])):Y("",!0),"calendar"===l.type?(V(),P(i,{key:12,rules:l.rules,"my-name":l.name,"my-label":l.label,"my-value":e.state[l.name],onOnConfirmCalendar:a=>e.onConfirmCalendar(a,l.name)},null,8,["rules","my-name","my-label","my-value","onOnConfirmCalendar"])):Y("",!0),"areaSelect"===l.type?(V(),P(d,{key:13,rules:l.rules,"my-name":l.name,"my-label":l.label,"my-value":e.state[l.name],onOnConfirmArea:a[1]||(a[1]=a=>e.onConfirmArea(a))},null,8,["rules","my-name","my-label","my-value"])):Y("",!0),"sexSelect"===l.type?(V(),P(c,{key:14,rules:l.rules,"my-name":l.name,"my-label":l.label,"my-value":e.state[l.name],onOnConfirm:a=>e.onConfirmSex(a,l.name)},null,8,["rules","my-name","my-label","my-value","onOnConfirm"])):Y("",!0)])))),128))]),k("div",Fe,[k(y,{round:"",block:"",type:"primary","native-type":"submit",style:{"background-color":"#FA6E35",color:"white",border:"0","border-radius":"0.15rem"}},{default:ve((()=>[B(G(e.t("submit")),1)])),_:1})])])),_:1},8,["onSubmit"])}));Ce.render=ge,Ce.__scopeId="data-v-61a29726";var _e=d({props:{rules:{type:Object,default:[]},myState:{type:Object,default:{}},testValue:{type:String,default:""},myValue:{type:String,default:""},myName:{type:String,default:""},myLabel:{type:String,default:""}},components:{Popup:p,Picker:N,Field:c},emits:["onConfirm"],setup(e,{emit:a}){const{t:l}=O(),t=C(null),n=C([]),o=C(!1),r=C({}),m=C("");return U((()=>e.myValue),(e=>{e&&(m.value=r.value[e],t.value)})),U(t,(a=>{a.setIndexes&&n.value.forEach(((l,t)=>{l.F_Id===e.myValue&&a.setIndexes([t])}))})),F((()=>{s("/gymm/BaseInfoApi/Industry"+l("lang"),{},!1).then((a=>{let l={};a.forEach((e=>{l[e.F_Id]=e.F_Name})),r.value=l,e&&(m.value=l[e.myValue],t.value),n.value=a}))})),{show2:o,value:m,onConfirmPicker2:l=>{a("onConfirm",l,e.myName),o.value=!1},onCancel2:e=>{o.value=!1},customFieldName:{text:"F_Name"},columnsPicker2:n,vanPicker:t,t:l}}});const Ve=x(),Pe=Ve(((e,a,l,t,n,o)=>{const r=_("Field"),m=_("Picker"),s=_("Popup");return V(),P(w,null,[k(r,{modelValue:e.value,"onUpdate:modelValue":a[1]||(a[1]=a=>e.value=a),"is-link":"",readonly:"",label:e.myLabel,placeholder:"请选择"+e.myLabel,onClick:a[2]||(a[2]=a=>e.show2=!0),rules:e.rules},null,8,["modelValue","label","placeholder","rules"]),k(s,{show:e.show2,"onUpdate:show":a[3]||(a[3]=a=>e.show2=a),position:"bottom"},{default:Ve((()=>[k(m,{ref:"vanPicker","confirm-button-text":e.t("confirm"),"cancel-button-text":e.t("cancel"),"default-index":e.myValue,title:e.myLabel,columns:e.columnsPicker2,onCancel:e.onCancel2,"columns-field-names":e.customFieldName,onConfirm:e.onConfirmPicker2},null,8,["confirm-button-text","cancel-button-text","default-index","title","columns","onCancel","columns-field-names","onConfirm"])])),_:1},8,["show"])],64)}));_e.render=Pe,_e.__scopeId="data-v-4a240dde";var ke=d({props:{},components:{Form:I,Field:c,Button:y,Popup:p,Area:f,DatetimePicker:S,Calendar:b,Cell:H,Collapse:X,CollapseItem:Z,MyArea:K,MyCalendar:ae,MyIndustry:_e},setup(){const{t:e}=O(),a=v({F_ChineseResume:["1"],F_EnglishResume:["1"]}),l=C(""),t=v({zhName:"",enName:"",value:"",showArea:!1,value2:"",showCalendar:!1}),n=v({zhName:"",enName:"",value:"",showArea:!1,value2:"",showCalendar:!1}),o=C([{name:"F_ChineseResume",label:e("ChineseResume"),type:"collapse",rules:[{required:!1}]},{name:"F_EnglishResume",label:e("EnglishCV"),type:"collapse",rules:[{required:!1}]},{name:"F_Industry",label:e("industry"),type:"F_Industry",rules:[{required:!1}]},{name:"F_ResearchArea",label:e("ResearchAreas"),type:"text",rules:[{required:!1}]},{name:"F_ResearchResult",label:e("ResearchResults"),type:"text",rules:[{required:!1}]},{name:"F_CompanyChineseName",label:e("institutionName"),type:"text",rules:[{required:!1}]},{name:"F_CompanyEnglishName",label:e("InstitutionEnglishName"),type:"text",rules:[{required:!1}]},{name:"F_CompanyIntroduction",label:e("Introduction"),type:"text",rules:[{required:!1}]},{name:"F_CompanyCode",label:e("InstitutionCode"),type:"text",rules:[{required:!1}]},{name:"F_CompanyIncorporationTime",label:e("Established"),type:"calendar",rules:[{required:!1}]},{name:"F_CompanyResearchDirection",label:e("researchDirection"),type:"text",rules:[{required:!1}]},{name:"F_CompanyType",label:e("UnitNature"),type:"text",rules:[{required:!1}]},{name:"F_CompanyLeader",label:e("MainLeader"),type:"text",rules:[{required:!1}]},{name:"F_CompanyWebSite",label:e("OfficialWebsite"),type:"text",rules:[{required:!1}]},{name:"F_CompanyAddress",label:e("HeadquartersAddress"),type:"text",rules:[{required:!1}]},{name:"F_CompanyPhoneNumber",label:e("telephoneNumber"),type:"text",rules:[{required:!1}]},{name:"F_CompanyFax",label:e("fax"),type:"text",rules:[{required:!1}]},{name:"F_CompanyEMail",label:e("mail"),type:"text",rules:[{required:!1}]}]);let r=window.localStorage.getItem("userId");const m=C("");return F((()=>{s("/gymm/guestmanageapi/GetFormData"+e("lang"),{params:{keyValue:r}},!1).then((e=>{let a=e;m.value=a.f_id,o.value&&o.value.forEach((e=>{"F_CompanyIncorporationTime"===e.name?n[e.name]=a[e.name].substr(0,10)||"":n[e.name]=a[e.name]||""}))})).then((e=>{})).catch((()=>{}))})),F((()=>{o.value.forEach((e=>{n[e.name]=""}))})),{state:n,state2:t,onSubmit:a=>{console.log("submit",a);let l={};for(let e in a)"undefined"!==e&&(l[e]=a[e]);l.F_Id=r,console.log(l),i("/gymm/guestmanageapi/SaveForm"+e("lang"),{data:l},!1).then((a=>{"保存成功！"===a&&q({type:"primary",message:e("SubmittedSuccessfully")})}))},onConfirm:()=>{},onConfirmCalendar:(e,a)=>{n[a]=T(e).format("YYYY-MM-DD")},onConfirmArea:(e,a)=>{n[a]=e.filter((e=>!!e)).map((e=>e.name)).join("/")},field:o,colls:a,resume:l,onConfirmPicker:async(e,a)=>{n[a]=e.F_Id},t:e}}});const we=x();j("data-v-7fed7b39");const xe={class:"tab_detail",style:{padding:"0.6rem 0","background-color":"white"}},Ie={style:{margin:"16px"}};D();const Se=we(((e,a,l,t,n,o)=>{const r=_("Field"),m=_("MyIndustry"),s=_("CollapseItem"),u=_("Collapse"),i=_("Button"),d=_("Form");return V(),P(d,{onSubmit:e.onSubmit},{default:we((()=>[k("div",xe,[(V(!0),P(w,null,R(e.field,((a,l)=>(V(),P("div",{key:l},[["F_Industry","collapse"].indexOf(a.type)<0?(V(),P(r,{key:0,modelValue:e.state[a.name],"onUpdate:modelValue":l=>e.state[a.name]=l,name:a.name,label:a.label,placeholder:e.t("pleaseEnter")+a.label,rules:a.rules},null,8,["modelValue","onUpdate:modelValue","name","label","placeholder","rules"])):Y("",!0),"F_Industry"===a.type?z((V(),P(r,{key:1,style:a.hidden?{height:0,padding:0}:{},modelValue:e.state[a.name],"onUpdate:modelValue":l=>e.state[a.name]=l,name:a.name},null,8,["style","modelValue","onUpdate:modelValue","name"])),[[W,!1]]):Y("",!0),"F_CredentialType"===a.type?z((V(),P(r,{key:2,style:a.hidden?{height:0,padding:0}:{},modelValue:e.state[a.name],"onUpdate:modelValue":l=>e.state[a.name]=l,name:a.name,rules:a.rules},null,8,["style","modelValue","onUpdate:modelValue","name","rules"])),[[W,!1]]):Y("",!0),"F_Industry"===a.type?(V(),P(m,{key:3,rules:a.rules,"my-name":a.name,"my-label":a.label,"my-value":e.state[a.name],"my-state":e.state,onOnConfirm:l=>e.onConfirmPicker(l,a.name)},null,8,["rules","my-name","my-label","my-value","my-state","onOnConfirm"])):Y("",!0),"collapse"===a.type?(V(),P(u,{key:4,modelValue:e.colls[a.name],"onUpdate:modelValue":l=>e.colls[a.name]=l},{default:we((()=>[k(s,{title:a.label,name:"1"},{default:we((()=>[k(r,{modelValue:e.state[a.name],"onUpdate:modelValue":l=>e.state[a.name]=l,rows:"5",autosize:"",type:"textarea",name:a.name,placeholder:e.t("pleaseEnter")+a.label},null,8,["modelValue","onUpdate:modelValue","name","placeholder"])])),_:2},1032,["title"])])),_:2},1032,["modelValue","onUpdate:modelValue"])):Y("",!0)])))),128))]),k("div",Ie,[k(i,{round:"",block:"",type:"primary","native-type":"submit",style:{"background-color":"#FA6E35",color:"white",border:"0","border-radius":"0.15rem"}},{default:we((()=>[B(G(e.t("submit")),1)])),_:1})])])),_:1},8,["onSubmit"])}));ke.render=Se,ke.__scopeId="data-v-7fed7b39";var Ne=d({props:{},components:{Tab:$,Tabs:J,Form1:Ce,FormDetailed:ke},setup(){const{t:e}=O();return{field:C([{name:"F_SecondPost",isForeign:3,label:e("SecondPost"),type:"text",rules:[{required:!1}]},{name:"F_GuestLevel",isForeign:3,label:e("level"),type:"F_GuestLevel",rules:[{required:!0,message:e("PleaseFillInTheLevel")}]},{name:"F_ProfessionalTitle",isForeign:3,label:e("jobTitle"),type:"F_ProfessionalTitle",rules:[{required:!0,message:e("PleaseFillInTheTitle")}]},{name:"F_CredentialType",isForeign:3,label:e("typeOfCertificate"),type:"F_CredentialType",rules:[{required:!0,message:e("PleaseFillInTheCertificateType")}]},{name:"F_CredentialNum",isForeign:3,label:e("IDNumber"),type:"text",rules:[{required:!0,message:e("PleaseFillInTheIDNumber")}]},{name:"F_Country",isForeign:1,label:e("country"),type:"F_Country",rules:[{required:!0,message:e("PleaseSelectACountry")}]},{name:"F_NativePlace",isForeign:0,label:e("province"),type:"F_NativePlace",rules:[{required:!0,message:e("PleaseSelectAProvince")}]},{name:"F_City",isForeign:0,label:e("city"),type:"F_City",rules:[{required:!0,message:e("PleaseSelectACity")}]},{name:"F_County",isForeign:0,label:e("Area"),type:"F_County",rules:[{required:!0,message:e("PleaseSelectADistrict")}]}]),t:e}}});const Oe=x();j("data-v-c0de05ee");const Ue={style:{}},Ae=k("div",{style:{"background-color":"white",height:"1.2rem"}},null,-1),Le=k("div",{style:{height:"0.6rem","background-color":"white"}},null,-1);D();const qe=Oe(((e,a,l,t,n,o)=>{const r=_("Form1"),m=_("Tab"),s=_("FormDetailed"),u=_("Tabs");return V(),P("div",Ue,[Ae,Le,k(u,{type:"card"},{default:Oe((()=>[k(m,{title:e.t("BasicPersonalInformation")},{default:Oe((()=>[k(r,{field:e.field},null,8,["field"])])),_:1},8,["title"]),k(m,{title:e.t("PersonalDetails")},{default:Oe((()=>[k(s)])),_:1},8,["title"])])),_:1})])}));Ne.render=qe,Ne.__scopeId="data-v-c0de05ee";export default Ne;
