var t=Object.defineProperty,e=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,n=(e,i,s)=>i in e?t(e,i,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[i]=s;import{d as a,Z as o,g as u,a3 as c,o as l,a4 as G,s as r,t as p,r as v,j as S,k as f,l as d,U as h,y,Q as g,R as m,z as _}from"./vendor.f737c1cc.js";import{R as I}from"./index.7496c43c.js";const b=t=>I("/gymm/GuestStatisticsApi/GetGuestInvitationStatistics?isforeign="+t,{},!1).then((t=>t[0])),W=t=>I("/gymm/GuestStatisticsApi/GetGuestTpyeStatistics?isforeign="+t,{},!1).then((t=>t));var T=a({props:{},components:{Button:o},setup(){const t=u(),a=c({GetWholeGuestStatistics:{},GetWholeInvitationGuestStatistics:{},GetGuestInvitationStatistics0:{},GetGuestTpyeStatistics0:{},GetGuestInvitationStatistics1:{},GetGuestTpyeStatistics1:{}});function o(){I("/gymm/GuestStatisticsApi/GetWholeGuestStatistics",{data:{}},!1).then((t=>t[0])).then((t=>{a.GetWholeGuestStatistics=t})),I("/gymm/GuestStatisticsApi/GetWholeInvitationGuestStatistics",{data:{}},!1).then((t=>t[0])).then((t=>{a.GetWholeInvitationGuestStatistics=t})),b(0).then((t=>{a.GetGuestInvitationStatistics0=t})),W(0).then((t=>{a.GetGuestTpyeStatistics0=t})),b(1).then((t=>{a.GetGuestInvitationStatistics1=t})),W(1).then((t=>{a.GetGuestTpyeStatistics1=t}))}return l((()=>{o()})),((t,a)=>{for(var o in a||(a={}))i.call(a,o)&&n(t,o,a[o]);if(e)for(var o of e(a))s.call(a,o)&&n(t,o,a[o]);return t})({goto:()=>{t.push("/guest_list")}},G(a))}});const j=_();r("data-v-573d8c9e");const k={class:"bg-white m-3 p-3 rounded-3"},O=d("div",null,[d("strong",null,"整体情况：")],-1),w=d("br",null,null,-1),A=d("div",null,[d("strong",null,"内宾信息：")],-1),x=d("br",null,null,-1),P=d("div",null,[d("strong",null,"外宾信息：")],-1),B=d("br",null,null,-1),C={style:{margin:"16px"}},E=h(" 查看嘉宾信息 ");p();const R=j(((t,e,i,s,n,a)=>{const o=v("Button");return S(),f(g,null,[d("div",k,[d("div",null,[O,d("p",null,[h(" 当前拟邀请嘉宾"+y(t.GetWholeGuestStatistics.f_invitationcount)+"人， 其中内宾"+y(t.GetWholeGuestStatistics.f_guestcount)+"人， 外宾"+y(t.GetWholeGuestStatistics.f_foreigncount)+"人， 覆盖"+y(t.GetWholeGuestStatistics.f_nationalitycount)+"个大洲的"+y(t.GetWholeGuestStatistics.f_countrycount)+"个国家",1),w,h(" 已发出邀请函"+y(t.GetWholeInvitationGuestStatistics.f_sendinvitationcount)+"份， 确认参会嘉宾"+y(t.GetWholeInvitationGuestStatistics.f_attendmeetingcount)+"人， 其中内宾"+y(t.GetWholeInvitationGuestStatistics.f_guestcount)+"人， 外宾"+y(t.GetWholeInvitationGuestStatistics.f_foreigncount)+"人， 覆盖"+y(t.GetWholeInvitationGuestStatistics.f_nationalitycount)+"个大洲的"+y(t.GetWholeInvitationGuestStatistics.f_countrycount)+"个国家。 ",1)])]),d("div",null,[A,d("p",null,[h(" 当前发出邀请函"+y(t.GetGuestInvitationStatistics0.f_invitationcount)+"份， 拟邀请国内嘉宾"+y(t.GetGuestInvitationStatistics0.f_sendinvitationcount)+"人，其中：",1),x,(S(!0),f(g,null,m(t.GetGuestTpyeStatistics0,((e,i)=>(S(),f("span",{key:i},y(e.f_name)+"： "+y(e.f_count)+"人 "+y(t.GetGuestTpyeStatistics0.length===i+1?"。":","),1)))),128))])]),d("div",null,[P,d("p",null,[h(" 当前发出邀请函"+y(t.GetGuestInvitationStatistics1.f_invitationcount)+"份， 拟邀请国内嘉宾"+y(t.GetGuestInvitationStatistics1.f_sendinvitationcount)+"人，其中：",1),B,(S(!0),f(g,null,m(t.GetGuestTpyeStatistics1,((e,i)=>(S(),f("span",{key:i},y(e.f_name)+"： "+y(e.f_count)+"人 "+y(t.GetGuestTpyeStatistics1.length===i+1?"。":","),1)))),128))])])]),d("div",C,[d(o,{round:"",block:"",type:"primary",onClick:t.goto,style:{"background-color":"#FA6E35",color:"white",border:"0","border-radius":"0.15rem"}},{default:j((()=>[E])),_:1},8,["onClick"])])],64)}));T.render=R,T.__scopeId="data-v-573d8c9e";export default T;
