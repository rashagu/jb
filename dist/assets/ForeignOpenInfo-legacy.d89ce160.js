var __vite_style__=document.createElement("style");__vite_style__.innerHTML="#checkbox_from_div[data-v-0677f2db] .van-checkbox__label{width:100%}#checkbox_from_div[data-v-6468f244] .van-checkbox__label{width:100%}.b[data-v-6468f244]{background-color:#fa6e35;color:#fff;border:0;border-radius:.15rem;width:44%;margin:0 .1rem}",document.head.appendChild(__vite_style__),System.register(["./vendor-legacy.ed6b9846.js"],(function(e){"use strict";var t,l,r,a,d,n,o,u,c,s,i,m,b,p,y,h,x,k,f,_,v,q,C;return{setters:[function(e){t=e.d,l=e.G,r=e.O,a=e.a4,d=e.a5,n=e.J,o=e.j,u=e.p,c=e.l,s=e.r,i=e.o,m=e.c,b=e.a,p=e.F,y=e.B,h=e.m,x=e.E,k=e.a2,f=e.a3,_=e.M,v=e.a1,q=e.R,C=e.U}],execute:function(){var g=t({props:{},components:{Cell:l,CellGroup:r,Checkbox:a,CheckboxGroup:d,Button:n},setup(){const e=o([{name:"zhName",label:"中文姓名",type:"text",rules:[{required:!0,message:"请填写中文姓名"}]},{name:"enName",label:"英文姓名",type:"text",rules:[{required:!0,message:"请填写英文姓名"}]},{name:"country",label:"国家",type:"text",rules:[{required:!1}]},{name:"sex",label:"性别",type:"sexSelect",rules:[{required:!1}]},{name:"birth",label:"出生日期",type:"calendar",rules:[{required:!1}]},{name:"f",label:"第一职务",type:"text",rules:[{required:!1}]},{name:"s",label:"第二职务",type:"text",rules:[{required:!1}]},{name:"l",label:"级别",type:"text",rules:[{required:!1}]},{name:"jobTitle",label:"职称",type:"text",rules:[{required:!1}]},{name:"category",label:"类别",type:"text",rules:[{required:!1}]},{name:"certificate",label:"证件类型",type:"text",rules:[{required:!1}]},{name:"docking",label:"对接单位",type:"text",rules:[{required:!1}]}]);return{checked1:o(["a"]),field:e}}});const w=h();u("data-v-0677f2db");const F={id:"checkbox_from_div",style:{"background-color":"white"}},G={style:{padding:"0.6rem 0.5rem"}},A={style:{margin:"16px"}},I=x(" 修改信息 ");c();const T=w(((e,t,l,r,a,d)=>{const n=s("Cell"),o=s("Checkbox"),u=s("CheckboxGroup"),c=s("Button");return i(),m(p,null,[b("div",F,[b("div",G,[b(u,{modelValue:e.checked1,"onUpdate:modelValue":t[1]||(t[1]=t=>e.checked1=t)},{default:w((()=>[(i(!0),m(p,null,y(e.field,((e,t)=>(i(),m(o,{key:t,name:e.name,style:{width:"100%"}},{default:w((()=>[b(n,{style:{width:"100%"},title:e.label,value:"内容"},null,8,["title"])])),_:2},1032,["name"])))),128))])),_:1},8,["modelValue"])])]),b("div",A,[b(c,{round:"",block:"",type:"primary","native-type":"submit",style:{"background-color":"#FA6E35",color:"white",border:"0","border-radius":"0.15rem"}},{default:w((()=>[I])),_:1})])],64)}));g.render=T,g.__scopeId="data-v-0677f2db";var V=t({props:{},components:{Cell:l,CellGroup:r,Checkbox:a,CheckboxGroup:d,Button:n,Collapse:k,CollapseItem:f,Field:_},setup(){const e=o({}),t=o(["1"]),l=o([{name:"collapse",label:"个人简历",type:"collapse",rules:[{required:!1}]},{name:"industry",label:"行业",type:"text",rules:[{required:!1}]},{name:"研究领域",label:"研究领域",type:"text",rules:[{required:!1}]},{name:"研究成果",label:"研究成果",type:"text",rules:[{required:!1}]},{name:"机构名称",label:"机构名称",type:"text",rules:[{required:!1}]},{name:"机构英文名称",label:"机构英文名称",type:"text",rules:[{required:!1}]},{name:"单位简介",label:"单位简介",type:"text",rules:[{required:!1}]},{name:"机构编码",label:"机构编码",type:"text",rules:[{required:!1}]},{name:"成立时间",label:"成立时间",type:"calendar",rules:[{required:!1}]},{name:"研究方向",label:"研究方向",type:"text",rules:[{required:!1}]},{name:"单位性质",label:"单位性质",type:"text",rules:[{required:!1}]},{name:"主要领导",label:"主要领导",type:"text",rules:[{required:!1}]},{name:"官方网站",label:"官方网站",type:"text",rules:[{required:!1}]},{name:"总部地址",label:"总部地址",type:"text",rules:[{required:!1}]},{name:"电话",label:"电话",type:"text",rules:[{required:!1}]},{name:"传真",label:"传真",type:"text",rules:[{required:!1}]},{name:"电子邮箱",label:"电子邮箱",type:"text",rules:[{required:!1}]}]),r=o(["a"]),a=o(!0);return{checked1:r,field:l,coll:t,checkboxGroup:t=>{e.value=t},checkAll:()=>{e.value.toggleAll(!0)},checkAllStatus:o(!0),indeterminate:a,onCheckAllChange:()=>{}}}});const B=h();u("data-v-6468f244");const S={id:"checkbox_from_div",style:{"background-color":"white"}},j=x(" Check all "),U={style:{padding:"0.6rem 0.5rem"}},E={key:0,class:"px-3",style:{color:"#969799","font-size":"0.875rem"}},z={style:{margin:"16px"},class:"d-flex justify-content-between"},D=x(" 修改 "),M=x(" 取消 ");c();const N=B(((e,t,l,r,a,d)=>{const n=s("a-checkbox"),o=s("Cell"),u=s("Checkbox"),c=s("CheckboxGroup"),h=s("Button");return i(),m(p,null,[b("div",S,[b(n,{checked:e.checkAllStatus,"onUpdate:checked":t[1]||(t[1]=t=>e.checkAllStatus=t),indeterminate:e.indeterminate,onChange:e.onCheckAllChange},{default:B((()=>[j])),_:1},8,["checked","indeterminate","onChange"]),b("div",U,[b(c,{modelValue:e.checked1,"onUpdate:modelValue":t[2]||(t[2]=t=>e.checked1=t),ref:e.checkboxGroup},{default:B((()=>[(i(!0),m(p,null,y(e.field,((e,t)=>(i(),m("div",{key:t},[b(u,{name:e.name,style:{width:"100%"}},{default:B((()=>[b(o,{style:{width:"100%"},title:e.label,value:"内容"},null,8,["title"])])),_:2},1032,["name"]),"collapse"===e.type?(i(),m("div",E," 2003年1月，博鳌亚洲论坛理事会在东京选举龙永图先生为博鳌亚洲论坛秘书长。2010年7月起担任博鳌亚洲论坛国际咨询委员会成员。龙永图先生1965年毕业于贵州大学英文系，1973年至1974年在伦敦经济学院研究生院学习，主修国际经济学。龙永图先生1997年被任命为副部长。1995年1月至2001年9月期间，他作为首席谈判代表，在第一线领导并最终成功结束了长达十五年的中国加入世贸组织的谈判。龙永图先生长期从事对外贸易和国际经济合作工作，经常作为嘉宾应邀出席世界著名研究、学术机构和知名大学组织的研讨会，并曾担任复旦大学国际关系与公共事务学院院长、国际问题研究院院长。 ")):v("",!0)])))),128))])),_:1},8,["modelValue"])])]),b("div",z,[b(h,{class:"b",round:"",type:"primary","native-type":"submit",style:{}},{default:B((()=>[D])),_:1}),b(h,{class:"b",round:"",type:"primary","native-type":"submit",style:{}},{default:B((()=>[M])),_:1})])],64)}));V.render=N,V.__scopeId="data-v-6468f244";var H=e("default",t({props:{},components:{Tab:q,Tabs:C,InfoFormCheckboxForm:g,FormDetailedCheckboxForm:V},setup:()=>({})}));const J=h();u("data-v-d51cfa64");const L=b("div",{style:{"background-color":"white",height:"0.6rem"}},null,-1),O={style:{position:"relative"}};c();const R=J(((e,t,l,r,a,d)=>{const n=s("InfoFormCheckboxForm"),o=s("Tab"),u=s("FormDetailedCheckboxForm"),c=s("Tabs");return i(),m(p,null,[L,b("div",O,[b(c,{type:"card"},{default:J((()=>[b(o,{title:"个人基础信息"},{default:J((()=>[b(n)])),_:1}),b(o,{title:"个人详细详细"},{default:J((()=>[b(u)])),_:1})])),_:1})])],64)}));H.render=R,H.__scopeId="data-v-d51cfa64"}}}));
