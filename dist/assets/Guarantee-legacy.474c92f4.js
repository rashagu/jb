var __vite_style__=document.createElement("style");__vite_style__.innerHTML=".title[data-v-0b7e7e3f]{background-color:#fff;font-size:1.2rem;font-weight:700;padding:1rem .5rem}",document.head.appendChild(__vite_style__),System.register(["./vendor-legacy.bc689fd1.js"],(function(e){"use strict";var n,a,o,i,t,l,s,p,r,d,c;return{setters:[function(e){e.M,n=e.d,a=e.y,o=e.z,i=e.i,t=e.p,l=e.l,s=e.r,p=e.o,r=e.c,d=e.a,c=e.m}],execute:function(){var u={exports:{}};u.exports=function(){function e(e){var o=[];return e.AMapUI&&o.push(n(e.AMapUI)),e.Loca&&o.push(a(e.Loca)),Promise.all(o)}function n(e){return new Promise((function(n,a){var i=[];if(e.plugins)for(var p=0;p<e.plugins.length;p+=1)-1==t.AMapUI.plugins.indexOf(e.plugins[p])&&i.push(e.plugins[p]);if(l.AMapUI===o.failed)a("前次请求 AMapUI 失败");else if(l.AMapUI===o.notload){l.AMapUI=o.loading,t.AMapUI.version=e.version||t.AMapUI.version,p=t.AMapUI.version;var r=document.body||document.head,d=document.createElement("script");d.type="text/javascript",d.src="https://webapi.amap.com/ui/"+p+"/main.js",d.onerror=function(e){l.AMapUI=o.failed,a("请求 AMapUI 失败")},d.onload=function(){if(l.AMapUI=o.loaded,i.length)window.AMapUI.loadUI(i,(function(){for(var e=0,a=i.length;e<a;e++){var o=i[e].split("/").slice(-1)[0];window.AMapUI[o]=arguments[e]}for(n();s.AMapUI.length;)s.AMapUI.splice(0,1)[0]()}));else for(n();s.AMapUI.length;)s.AMapUI.splice(0,1)[0]()},r.appendChild(d)}else l.AMapUI===o.loaded?e.version&&e.version!==t.AMapUI.version?a("不允许多个版本 AMapUI 混用"):i.length?window.AMapUI.loadUI(i,(function(){for(var e=0,a=i.length;e<a;e++){var o=i[e].split("/").slice(-1)[0];window.AMapUI[o]=arguments[e]}n()})):n():e.version&&e.version!==t.AMapUI.version?a("不允许多个版本 AMapUI 混用"):s.AMapUI.push((function(e){e?a(e):i.length?window.AMapUI.loadUI(i,(function(){for(var e=0,a=i.length;e<a;e++){var o=i[e].split("/").slice(-1)[0];window.AMapUI[o]=arguments[e]}n()})):n()}))}))}function a(e){return new Promise((function(n,a){if(l.Loca===o.failed)a("前次请求 Loca 失败");else if(l.Loca===o.notload){l.Loca=o.loading,t.Loca.version=e.version||t.Loca.version;var i=t.Loca.version,p=t.AMap.version.startsWith("2"),r=i.startsWith("2");if(p&&!r||!p&&r)a("JSAPI 与 Loca 版本不对应！！");else{p=t.key,r=document.body||document.head;var d=document.createElement("script");d.type="text/javascript",d.src="https://webapi.amap.com/loca?v="+i+"&key="+p,d.onerror=function(e){l.Loca=o.failed,a("请求 AMapUI 失败")},d.onload=function(){for(l.Loca=o.loaded,n();s.Loca.length;)s.Loca.splice(0,1)[0]()},r.appendChild(d)}}else l.Loca===o.loaded?e.version&&e.version!==t.Loca.version?a("不允许多个版本 Loca 混用"):n():e.version&&e.version!==t.Loca.version?a("不允许多个版本 Loca 混用"):s.Loca.push((function(e){e?a(e):a()}))}))}if(!window)throw Error("AMap JSAPI can only be used in Browser.");var o,i;(i=o||(o={})).notload="notload",i.loading="loading",i.loaded="loaded",i.failed="failed";var t={key:"",AMap:{version:"1.4.15",plugins:[]},AMapUI:{version:"1.1",plugins:[]},Loca:{version:"1.3.2"}},l={AMap:o.notload,AMapUI:o.notload,Loca:o.notload},s={AMap:[],AMapUI:[],Loca:[]},p=[],r=function(e){"function"==typeof e&&(l.AMap===o.loaded?e(window.AMap):p.push(e))};return{load:function(n){return new Promise((function(a,i){if(l.AMap==o.failed)i("");else if(l.AMap==o.notload){var s=n.key,d=n.version,c=n.plugins;s?(window.AMap&&"lbs.amap.com"!==location.host&&i("禁止多种API加载方式混用"),t.key=s,t.AMap.version=d||t.AMap.version,t.AMap.plugins=c||t.AMap.plugins,l.AMap=o.loading,d=document.body||document.head,window.___onAPILoaded=function(t){if(delete window.___onAPILoaded,t)l.AMap=o.failed,i(t);else for(l.AMap=o.loaded,e(n).then((function(){a(window.AMap)})).catch(i);p.length;)p.splice(0,1)[0]()},(c=document.createElement("script")).type="text/javascript",c.src="https://webapi.amap.com/maps?callback=___onAPILoaded&v="+t.AMap.version+"&key="+s+"&plugin="+t.AMap.plugins.join(","),c.onerror=function(e){l.AMap=o.failed,i(e)},d.appendChild(c)):i("请填写key")}else if(l.AMap==o.loaded)if(n.key&&n.key!==t.key)i("多个不一致的 key");else if(n.version&&n.version!==t.AMap.version)i("不允许多个版本 JSAPI 混用");else{if(s=[],n.plugins)for(d=0;d<n.plugins.length;d+=1)-1==t.AMap.plugins.indexOf(n.plugins[d])&&s.push(n.plugins[d]);s.length?window.AMap.plugin(s,(function(){e(n).then((function(){a(window.AMap)})).catch(i)})):e(n).then((function(){a(window.AMap)})).catch(i)}else if(n.key&&n.key!==t.key)i("多个不一致的 key");else if(n.version&&n.version!==t.AMap.version)i("不允许多个版本 JSAPI 混用");else{var u=[];if(n.plugins)for(d=0;d<n.plugins.length;d+=1)-1==t.AMap.plugins.indexOf(n.plugins[d])&&u.push(n.plugins[d]);r((function(){u.length?window.AMap.plugin(u,(function(){e(n).then((function(){a(window.AMap)})).catch(i)})):e(n).then((function(){a(window.AMap)})).catch(i)}))}}))},reset:function(){delete window.AMap,delete window.AMapUI,delete window.Loca,t={key:"",AMap:{version:"1.4.15",plugins:[]},AMapUI:{version:"1.1",plugins:[]},Loca:{version:"1.3.2"}},l={AMap:o.notload,AMapUI:o.notload,Loca:o.notload},s={AMap:[],AMapUI:[],Loca:[]}}}}();var v=u.exports;let f=null;var A=e("default",n({props:{},components:{Cell:a,CellGroup:o},setup:()=>(i((()=>{v.load({key:"01d078ded48d2ec7d60be7e0c90c5903",version:"2.0"}).then((e=>{f=new e.Map("my_map1_container",{resizeEnable:!0,center:[116.397428,39.90923],zoom:13});let n=new e.Icon({size:new e.Size(53,68),image:"//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png",imageSize:new e.Size(26,34)});f.add(new e.Marker({icon:n,position:[116.406315,39.908775]}))})).catch((e=>{console.log(e)}))})),{})}));const M=c();t("data-v-0b7e7e3f");const g=d("div",{class:"title",style:{}},"酒店服务",-1),w=d("div",null,[d("div",{id:"my_map1_container",style:{height:"12rem"}})],-1),h=d("br",null,null,-1),I=d("div",{class:"title",style:{}},"车辆服务",-1),m=d("br",null,null,-1),U={class:"",style:{}},y=d("div",{class:"title",style:{}},"餐饮服务",-1);l();const _=M(((e,n,a,o,i,t)=>{const l=s("Cell"),c=s("CellGroup");return p(),r("div",null,[d("div",null,[g,d(c,null,{default:M((()=>[d(l,{title:"酒店名称",value:"内容"}),d(l,{title:"房间房号",value:"内容"}),d(l,{title:"酒店地址",value:"内容"})])),_:1})]),w,h,d("div",null,[I,d(c,null,{default:M((()=>[d(l,{title:"车牌号牌",value:"内容"}),d(l,{title:"司机姓名",value:"内容"}),d(l,{title:"联系方式",value:"内容"})])),_:1})]),m,d("div",U,[y,d(c,null,{default:M((()=>[d(l,{title:"用餐地址",value:"内容"}),d(l,{title:"时间日期",value:"内容"}),d(l,{title:"早餐",value:"内容"}),d(l,{title:"用餐时间",value:"内容"}),d(l,{title:"中餐",value:"内容"}),d(l,{title:"用餐时间",value:"内容"}),d(l,{title:"晚餐",value:"内容"}),d(l,{title:"用餐时间",value:"内容"})])),_:1})])])}));A.render=_,A.__scopeId="data-v-0b7e7e3f"}}}));
