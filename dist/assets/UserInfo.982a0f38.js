import{d as e,G as l,M as t,a8 as a,a9 as r,J as s,j as u,p as n,l as d,r as i,o,c as p,a as c,F as b,E as m,m as y,a4 as x,a5 as q,W as v,a3 as h,O as f,Q as k}from"./vendor.a22fae42.js";var C=e({props:{},components:{Cell:l,CellGroup:t,Checkbox:a,CheckboxGroup:r,Button:s},setup(){const e=u([{name:"zhName",label:"中文姓名",type:"text",rules:[{required:!0,message:"请填写中文姓名"}]},{name:"enName",label:"英文姓名",type:"text",rules:[{required:!0,message:"请填写英文姓名"}]},{name:"country",label:"国家",type:"text",rules:[{required:!1}]},{name:"sex",label:"性别",type:"sexSelect",rules:[{required:!1}]},{name:"birth",label:"出生日期",type:"calendar",rules:[{required:!1}]},{name:"f",label:"第一职务",type:"text",rules:[{required:!1}]},{name:"s",label:"第二职务",type:"text",rules:[{required:!1}]},{name:"l",label:"级别",type:"text",rules:[{required:!1}]},{name:"jobTitle",label:"职称",type:"text",rules:[{required:!1}]},{name:"category",label:"类别",type:"text",rules:[{required:!1}]},{name:"certificate",label:"证件类型",type:"text",rules:[{required:!1}]},{name:"docking",label:"对接单位",type:"text",rules:[{required:!1}]}]);return{checked1:u(["a"]),field:e}}});const g=y();n("data-v-b777b6b6");const _={id:"checkbox_from_div",style:{"background-color":"white"}},I={style:{padding:"0.6rem 0.5rem"}};d();const w=g(((e,l,t,a,r,s)=>{const u=i("Cell");return o(),p("div",_,[c("div",I,[(o(!0),p(b,null,m(e.field,((e,l)=>(o(),p("div",{key:l,name:e.name,style:{width:"100%"}},[c(u,{style:{width:"100%"},title:e.label,value:"内容"},null,8,["title"])],8,["name"])))),128))])])}));C.render=w,C.__scopeId="data-v-b777b6b6";var G=e({props:{},components:{Cell:l,CellGroup:t,Checkbox:a,CheckboxGroup:r,Button:s,Collapse:x,CollapseItem:q,Field:v},setup(){const e=u({}),l=u(["1"]),t=u([{name:"collapse",label:"个人简历",type:"collapse",rules:[{required:!1}]},{name:"industry",label:"行业",type:"text",rules:[{required:!1}]},{name:"研究领域",label:"研究领域",type:"text",rules:[{required:!1}]},{name:"研究成果",label:"研究成果",type:"text",rules:[{required:!1}]},{name:"机构名称",label:"机构名称",type:"text",rules:[{required:!1}]},{name:"机构英文名称",label:"机构英文名称",type:"text",rules:[{required:!1}]},{name:"单位简介",label:"单位简介",type:"text",rules:[{required:!1}]},{name:"机构编码",label:"机构编码",type:"text",rules:[{required:!1}]},{name:"成立时间",label:"成立时间",type:"calendar",rules:[{required:!1}]},{name:"研究方向",label:"研究方向",type:"text",rules:[{required:!1}]},{name:"单位性质",label:"单位性质",type:"text",rules:[{required:!1}]},{name:"主要领导",label:"主要领导",type:"text",rules:[{required:!1}]},{name:"官方网站",label:"官方网站",type:"text",rules:[{required:!1}]},{name:"总部地址",label:"总部地址",type:"text",rules:[{required:!1}]},{name:"电话",label:"电话",type:"text",rules:[{required:!1}]},{name:"传真",label:"传真",type:"text",rules:[{required:!1}]},{name:"电子邮箱",label:"电子邮箱",type:"text",rules:[{required:!1}]}]),a=u(["a"]),r=u(!0);return{checked1:a,field:t,coll:l,checkboxGroup:l=>{e.value=l},checkAll:()=>{e.value.toggleAll(!0)},checkAllStatus:u(!0),indeterminate:r,onCheckAllChange:()=>{}}}});const T=y();n("data-v-5e3b1140");const A={id:"checkbox_from_div",style:{"background-color":"white",position:"relative"}},B={style:{padding:"0.6rem 0.5rem"}},j={key:0,class:"px-3",style:{color:"#969799","font-size":"0.875rem"}};d();const z=T(((e,l,t,a,r,s)=>{const u=i("Cell");return o(),p("div",A,[c("div",B,[(o(!0),p(b,null,m(e.field,((e,l)=>(o(),p("div",{key:l},[c(u,{style:{width:"100%"},title:e.label,value:"内容"},null,8,["title"]),"collapse"===e.type?(o(),p("div",j," 2003年1月，博鳌亚洲论坛理事会在东京选举龙永图先生为博鳌亚洲论坛秘书长。2010年7月起担任博鳌亚洲论坛国际咨询委员会成员。龙永图先生1965年毕业于贵州大学英文系，1973年至1974年在伦敦经济学院研究生院学习，主修国际经济学。龙永图先生1997年被任命为副部长。1995年1月至2001年9月期间，他作为首席谈判代表，在第一线领导并最终成功结束了长达十五年的中国加入世贸组织的谈判。龙永图先生长期从事对外贸易和国际经济合作工作，经常作为嘉宾应邀出席世界著名研究、学术机构和知名大学组织的研讨会，并曾担任复旦大学国际关系与公共事务学院院长、国际问题研究院院长。 ")):h("",!0)])))),128))])])}));G.render=z,G.__scopeId="data-v-5e3b1140";var D=e({props:{},components:{Tab:f,Tabs:k,BaseInfo:C,DetailedInfo:G},setup:()=>({})});const F=y();n("data-v-335691f4");const N=c("div",{style:{"background-color":"white",height:"1.2rem"}},null,-1),S={style:{position:"relative"}};d();const E=F(((e,l,t,a,r,s)=>{const u=i("BaseInfo"),n=i("Tab"),d=i("DetailedInfo"),m=i("Tabs");return o(),p(b,null,[N,c("div",S,[c(m,{type:"card"},{default:F((()=>[c(n,{title:"个人基础信息"},{default:F((()=>[c(u)])),_:1}),c(n,{title:"个人详细详细"},{default:F((()=>[c(d)])),_:1})])),_:1})])],64)}));D.render=E,D.__scopeId="data-v-335691f4";export default D;
