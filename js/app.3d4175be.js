(function(t){function e(e){for(var a,r,s=e[0],l=e[1],c=e[2],d=0,m=[];d<s.length;d++)r=s[d],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&m.push(n[r][0]),n[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(m.length)m.shift()();return i.push.apply(i,c||[]),o()}function o(){for(var t,e=0;e<i.length;e++){for(var o=i[e],a=!0,s=1;s<o.length;s++){var l=o[s];0!==n[l]&&(a=!1)}a&&(i.splice(e--,1),t=r(r.s=o[0]))}return t}var a={},n={app:0},i=[];function r(e){if(a[e])return a[e].exports;var o=a[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=a,r.d=function(t,e,o){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(o,a,function(e){return t[e]}.bind(null,a));return o},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;i.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";var a=o("85ec"),n=o.n(a);n.a},2262:function(t,e,o){"use strict";var a=o("4262"),n=o.n(a);n.a},4262:function(t,e,o){},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var a=o("2b0e"),n=(o("caad"),o("c975"),o("a434"),o("d3b7"),o("25f0"),o("2532"),o("2f62"));a["default"].use(n["a"]);var i={setting:[],autoplay:!(!localStorage.getItem("autoPlay")||"true"!=localStorage.getItem("autoPlay")),imgLoad:!(!localStorage.getItem("imgLoad")||"true"!=localStorage.getItem("imgLoad")),darkMode:!(!localStorage.getItem("dark_theme")||"true"!=localStorage.getItem("dark_theme")),statusList:[],history:localStorage.getItem("hostory")&&""!=localStorage.getItem("hostory")?JSON.parse(localStorage.getItem("hostory")):[]},r={setSetting:function(t,e){t.setting=e},getSetting:function(t){return t.setting},setAutoPlay:function(t,e){console.log(e),localStorage.setItem("autoPlay",e),t.autoplay=e},getAutoPlay:function(t){return t.autoplay},setImgLoad:function(t,e){localStorage.setItem("imgLoad",e),t.imgLoad=e},getImgLoad:function(t){return t.imgLoad},setDarkMode:function(t,e){t.darkMode=e,localStorage.setItem("dark_theme",e.toString())},SOCKET_StatusList:function(t,e){t.statusList=e},setHistory:function(t,e){t.history.includes(e)||(t.history.push(e),localStorage.setItem("hostory",JSON.stringify(t.history)))},removeHistory:function(t,e){var o=t.history.indexOf(e);o>-1&&(t.history.splice(o,1),localStorage.setItem("hostory",JSON.stringify(t.history)))}},s={},l=new n["a"].Store({state:i,mutations:r,actions:s}),c=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("v-app",{attrs:{dark:""}},[o("v-main",{attrs:{dark:"",fluid:""}},[o("v-toolbar",{attrs:{fluid:"",dark:"",flat:""},scopedSlots:t._u([{key:"extension",fn:function(){return[o("v-tabs",{attrs:{"align-with-title":""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[o("v-tabs-slider",{attrs:{color:"yellow"}}),t._l(t.items,(function(e){return o("v-tab",{key:e},[t._v(t._s(e))])}))],2)]},proxy:!0}])},[o("v-toolbar-title",[t._v("Youtube Converter")]),o("v-spacer"),o("v-btn",{attrs:{icon:""}},[o("v-menu",{attrs:{"nudge-width":200,"offset-x":""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,n=e.attrs;return[o("v-btn",t._g(t._b({attrs:{dark:"",icon:""}},"v-btn",n,!1),a),[o("v-icon",[t._v("mdi-dots-vertical")])],1)]}}])},[o("v-list",[o("v-list-item",{on:{click:function(e){return t.settingDialog()}}},[o("v-list-item-title",[t._v("Setting")])],1),o("v-list-item",{on:{click:function(e){return t.setEndpointDialog()}}},[o("v-list-item-title",[t._v("End Point")])],1)],1)],1)],1)],1),o("v-container",{attrs:{fluid:"",dark:""}},[o("v-tabs-items",{style:t.dynamicClass,model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[o("v-tab-item",{directives:[{name:"show",rawName:"v-show",value:0==t.tab||"task"==t.tab,expression:"tab==0||tab=='task'"}]},[o("div",{staticStyle:{"margin-bottom":"70px"}},[o("StatusList",{ref:"statusList",on:{playUrl:t.playurl,addPlayList:t.addPlayList}})],1)]),o("v-tab-item",{directives:[{name:"show",rawName:"v-show",value:1==t.tab,expression:"tab==1"}]},[o("div",{staticStyle:{"margin-bottom":"70px"}},[o("Youtube",{ref:"youtubeList",on:{convert:t.youtubeConvert}})],1)]),o("v-tab-item",{directives:[{name:"show",rawName:"v-show",value:2==t.tab,expression:"tab==2"}]},[o("div",{staticStyle:{"margin-bottom":"70px"}},[o("History",{ref:"history",on:{searchHistory:t.searchHistory}})],1)]),o("v-tab-item",{directives:[{name:"show",rawName:"v-show",value:3==t.tab,expression:"tab==3"}]},[o("div",{staticStyle:{"margin-bottom":"70px"}},[o("Url",{ref:"history",on:{convert:t.youtubeConvert}})],1)])],1),o("div",[t.isInit?o("aplayer",{attrs:{audio:t.audio,fixed:"",autoplay:t.$store.state.autoPlay,controls:!0}}):t._e()],1)],1)],1),o("v-dialog",{attrs:{"max-width":"290"},model:{value:t.dialogSwa,callback:function(e){t.dialogSwa=e},expression:"dialogSwa"}},[o("v-card",[o("v-card-title",{staticClass:"headline"},[t._v(" "+t._s(t.dialog.title)+" ")]),o("v-card-text",[t._v(t._s(t.dialog.msg))]),o("v-card-actions",[o("v-spacer"),o("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(e){t.dialogSw=!1}}},[t._v("OK")])],1)],1)],1),o("v-dialog",{model:{value:t.dialogEndpoint,callback:function(e){t.dialogEndpoint=e},expression:"dialogEndpoint"}},[o("Endpoint")],1),o("v-snackbar",{scopedSlots:t._u([{key:"action",fn:function(e){var a=e.attrs;return[o("v-btn",t._b({attrs:{color:"pink",text:""},on:{click:function(e){t.dialogSw=!1}}},"v-btn",a,!1),[t._v("Close")])]}}]),model:{value:t.dialogSw,callback:function(e){t.dialogSw=e},expression:"dialogSw"}},[t._v(" "+t._s(t.dialog.msg)+" ")]),o("v-dialog",{model:{value:t.settingSw,callback:function(e){t.settingSw=e},expression:"settingSw"}},[o("Setting")],1)],1)],1)},u=[],d=(o("99af"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("v-card",{attrs:{elevation:"2",outlined:""}},[o("v-card-title",[o("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),o("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.$store.state.statusList,loading:t.loading,search:t.search,"sort-by":["createDatetime","name"],"sort-desc":[!0,!1],"hide-default-footer":"","disable-pagination":""},scopedSlots:t._u([{key:"item.createDatetime",fn:function(e){var o=e.item;return[t._v(" "+t._s(t._f("date")(o.createDatetime))+" ")]}},{key:"item.status",fn:function(e){var a=e.item;return[o("v-chip",{attrs:{color:t.getColor(a.status)}},[t._v(" "+t._s(t.getStatus(a.status))+" ")])]}},{key:"item.uuid",fn:function(e){var a=e.item;return[3==a.status&&1!=t.$ios?o("v-btn",{staticClass:"actionBtn",attrs:{icon:"",color:"default"},on:{click:function(e){return t.download(a.uuid,a.name)}}},[o("v-icon",[t._v("mdi-download")])],1):t._e(),3==a.status?o("v-btn",{staticClass:"actionBtn",attrs:{icon:"",color:"primary"},on:{click:function(e){return t.playAudio(a.uuid,a.name)}}},[o("v-icon",[t._v("mdi-play")])],1):t._e(),3==a.status?o("v-btn",{staticClass:"actionBtn",attrs:{icon:"",color:"success"},on:{click:function(e){return t.addListAudio(a.uuid,a.name)}}},[o("v-icon",[t._v("mdi-playlist-plus")])],1):t._e(),o("v-btn",{staticClass:"actionBtn",attrs:{icon:"",color:"error"},on:{click:function(e){return t.deleteAudio(a.uuid,a.name)}}},[o("v-icon",[t._v("mdi-delete")])],1)]}}])})],1),o("v-dialog",{attrs:{"max-width":"290"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[o("v-card",[o("v-card-title",{staticClass:"headline"},[t._v(" Status ")]),o("v-card-text",[t._v(t._s(t.msg))]),o("v-card-actions",[o("v-spacer"),o("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(e){t.dialog=!1}}},[t._v(" OK ")])],1)],1)],1),o("v-dialog",{attrs:{persistent:"","max-width":"290"},model:{value:t.comfirmDelete,callback:function(e){t.comfirmDelete=e},expression:"comfirmDelete"}},[o("v-card",[o("v-card-title",{staticClass:"headline"},[t._v(" Delete task? ")]),o("v-card-text",[t._v("Comfirm to delete "+t._s(t.deletename))]),o("v-card-actions",[o("v-spacer"),o("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(e){t.comfirmDelete=!1}}},[t._v(" Close ")]),o("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(e){return t.deleteTask(t.deleteuuid,t.deletename)}}},[t._v(" Confirm ")])],1)],1)],1)],1)}),m=[],v=(o("3ca3"),o("ddb0"),o("2b3d"),o("5a0c")),f={name:"statusList",data:function(){return{lists:[],dialog:!1,msg:"",loading:!1,search:"",comfirmDelete:!1,deleteuuid:"",deletename:""}},filters:{date:function(t){return v(t).format("YYYY-MM-DD HH:mm:ss")}},sockets:{listAllStatus:function(t){console.log("Updated"),this.$store.commit("SOCKET_StatusList",t),console.log("Updated1")}},computed:{headers:function(){return[{text:"Name",value:"name"},{text:"Create Date",value:"createDatetime"},{text:"Status",value:"status",filter:function(t){return t<0?"Error":t}},{text:"Action",value:"uuid"}]}},methods:{setStatusList:function(t){var e=this;this.loading=!0,t?(e.lists=t,this.loading=!1):this.loading=!1},getStatusList:function(){var t=this,e=this;this.loading=!0,e.$http.get("/convert").then((function(o){e.lists=o.data.results,console.log(o),t.loading=!1})).catch((function(e){console.log(e),t.loading=!1}))},getColor:function(t){return t<0?"red":1==t?"yellow":"green"},getStatus:function(t){return t<0?"Error":3==t?"Completed":0==t?"Downloading":2==t?"Processing":t},download:function(t,e){this.$http({url:"/file/".concat(t),method:"GET",responseType:"blob"}).then((function(o){var a=window.URL.createObjectURL(new Blob([o.data])),n=document.createElement("a");n.href=a,e?n.setAttribute("download","".concat(e,".mp3")):n.setAttribute("download","".concat(t,".mp3")),document.body.appendChild(n),n.click()}))},playAudio:function(t,e){this.$emit("playUrl","/file/".concat(t),e)},deleteAudio:function(t,e){console.log(t),t&&e&&(this.deleteuuid=t,this.deletename=e,this.comfirmDelete=!0)},deleteTask:function(t,e){var o=this;this.comfirmDelete=!1,this.$http.delete("/convert/".concat(t)).then((function(t){console.log(t),o.msg="Deleted: ".concat(e),o.dialog=!0})).catch((function(t){o.msg="Delete Failed: ".concat(e," ").concat(t),o.dialog=!0}))},addListAudio:function(t,e){this.$emit("addPlayList","/file/".concat(t),e)}}},g=f,h=(o("2262"),o("2877")),p=Object(h["a"])(g,d,m,!1,null,"65a63db4",null),b=p.exports,y=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("v-card",[o("v-card-title",[o("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},on:{"click:append":function(e){return t.searchListByKey()}},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),o("v-data-table",{class:t.dynamicClass,attrs:{headers:t.headers,items:t.youtubeItems,loading:t.loading,"loading-text":"Loading... Please wait","hide-default-footer":"","disable-pagination":""},scopedSlots:t._u([t.$store.state.imgLoad?{key:"item.thumbnails",fn:function(t){var e=t.item;return[o("div",[o("v-img",{attrs:{src:e.thumbnail.thumbnails[0].url,"max-width":160,"max-height":120}})],1)]}}:null,{key:"item.id",fn:function(e){var a=e.item;return[o("div",[o("v-btn",{attrs:{type:"primary",color:"primary"},on:{click:function(e){return t.Convert(a.id,a.title)}}},[t._v("Convert")])],1)]}}],null,!0)})],1)],1)},k=[],x=(o("4160"),o("ac1f"),o("841c"),o("159b"),{name:"Youtube",data:function(){return{youtubeURL:"https://youtu.be/",loading:!1,youtubeItems:[],headers:[{text:"Preview",value:"thumbnails"},{text:"Title",align:"start",value:"title"},{text:"Lenght",value:"length.simpleText"},{text:"Action",value:"id"}],search:"",resultsPerPage:0,totalResults:0,nextPageToken:"",perviousPageToken:"",apiToken:"",bottom:!1,dynamicClass:""}},mounted:function(){this.search=this.getSearchKeyWordHistory(),this.searchListByKey()},methods:{getSearchKeyWordHistory:function(){var t="";return localStorage.getItem("youtubeSearch")&&(t=localStorage.getItem("youtubeSearch")),t},setSearch:function(t){this.search=t},searchListByKey:function(){var t=this;if(t.search){var e=t.search;t.$store.commit("setHistory",e),t.youtubeItems=[],localStorage.setItem("youtubeSearch",e),t.$http.get("/youtube?query=".concat(e.toString("ISO-8859-1"))).then((function(e){console.log(e.data.data.items),t.youtubeItems=e.data.data.items,t.nextPageToken=e.data.data.continuation,t.context=e.data.data.context,t.apiToken=e.data.data.apiToken})).catch((function(t){console.log(t)}))}},Convert:function(t,e){this.$emit("convert","".concat(this.youtubeURL).concat(t),e)},nextPage:function(){var t=this;t.nextPageToken&&t.$http.post("/youtube/next?key=".concat(t.apiToken),{data:{context:t.context,continuation:t.nextPageToken}}).then((function(e){e.data.data.items.forEach((function(e){t.youtubeItems.push(e)})),t.nextPageToken=e.data.data.continuation})).catch((function(t){console.log(t)}))}}}),S=x,w=Object(h["a"])(S,y,k,!1,null,"2aa3697f",null),_=w.exports,L=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-card",{staticClass:"mx-auto",attrs:{"max-width":"500"}},[o("v-toolbar",{attrs:{color:"purple",dark:""}},[o("v-toolbar-title",[o("v-icon",[t._v("mdi-setting")]),t._v(" Settings")],1),o("v-spacer")],1),o("v-divider"),o("v-list",{attrs:{flat:"",subheader:"","three-line":""}},[o("v-subheader",[t._v("General")]),o("v-list-item-group",{attrs:{"active-class":""}},[o("v-list-item",[[o("v-list-item-action",[o("v-checkbox",{model:{value:t.autoPlay,callback:function(e){t.autoPlay=e},expression:"autoPlay"}})],1),o("v-list-item-content",[o("v-list-item-title",[t._v("Auto Play Audio")]),o("v-list-item-subtitle",[t._v("Audio will play automatically when chose")])],1)]],2),o("v-list-item",[[o("v-list-item-action",[o("v-checkbox",{model:{value:t.imgLoad,callback:function(e){t.imgLoad=e},expression:"imgLoad"}})],1),o("v-list-item-content",[o("v-list-item-title",[t._v("Load preview image")]),o("v-list-item-subtitle",[t._v("Load the preview image")])],1)]],2),o("v-list-item",[[o("v-list-item-action",[o("v-checkbox",{model:{value:t.darkMode,callback:function(e){t.darkMode=e},expression:"darkMode"}})],1),o("v-list-item-content",[o("v-list-item-title",[t._v("Dark Mode")]),o("v-list-item-subtitle",[t._v("Enable Dark Mode")])],1)]],2)],1)],1)],1)},$=[],P={name:"setting",data:function(){return{generalSettings:[],autoPlay:!1,imgLoad:!1,darkMode:!0}},watch:{generalSettings:function(t){console.log(t)},autoPlay:function(t){console.log(t),this.$store.commit("setAutoPlay",t)},imgLoad:function(t){this.$store.commit("setImgLoad",t)},darkMode:function(t){this.$store.commit("setDarkMode",t),this.$vuetify.theme.dark=t}},mounted:function(){console.log(this.$store.state.setting),this.autoPlay=this.$store.state.autoplay,this.imgLoad=this.$store.state.imgLoad,this.darkMode=this.$store.state.darkMode},methods:{}},E=P,I=Object(h["a"])(E,L,$,!1,null,"d33f1818",null),C=I.exports,O=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("v-card",{attrs:{elevation:"2",outlined:""}},[o("v-list",t._l(t.$store.state.history,(function(e){return o("v-list-item",{key:e},[o("v-list-item-content",{domProps:{textContent:t._s(e)},on:{click:function(o){return t.search(e)}}}),o("v-list-item-action",[o("v-btn",{attrs:{icon:""},on:{click:function(o){return t.remove(e)}}},[o("v-icon",{attrs:{color:"grey lighten-1"}},[t._v("mdi-delete")])],1)],1)],1)})),1)],1)],1)},T=[],D={name:"history",data:function(){return{}},methods:{search:function(t){this.$emit("searchHistory",t)},remove:function(t){this.$store.commit("removeHistory",t)}}},A=D,j=Object(h["a"])(A,O,T,!1,null,"39e8842c",null),M=j.exports,R=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("v-card",[o("v-card-title",[t._v(" URL ")]),o("v-text-field",{attrs:{"append-icon":"mdi-download",label:"URL","single-line":"","hide-details":""},on:{"click:append":function(e){return t.converter()}},model:{value:t.url,callback:function(e){t.url=e},expression:"url"}})],1)],1)},U=[],H={name:"url",data:function(){return{url:""}},methods:{converter:function(){this.url&&this.$emit("convert",this.url,""),this.url=""}}},K=H,N=Object(h["a"])(K,R,U,!1,null,null,null),B=N.exports,Y=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-card",{staticClass:"mx-auto",attrs:{"max-width":"500"}},[o("v-toolbar",{attrs:{color:"blue",dark:""}},[o("v-toolbar-title",[o("v-icon",[t._v("mdi-setting")]),t._v(" End point")],1),o("v-spacer")],1),o("v-divider"),o("v-text-field",{attrs:{hint:"http://",label:"Endpoint"},model:{value:t.url,callback:function(e){t.url=e},expression:"url"}}),o("v-card-actions",[o("v-btn",{attrs:{color:"primary"},on:{click:function(e){return t.setEndpoint()}}},[t._v("Save")])],1),o("v-dialog",{attrs:{"max-width":"290"},model:{value:t.dialogSw,callback:function(e){t.dialogSw=e},expression:"dialogSw"}},[o("v-card",[o("v-card-title",{staticClass:"headline"},[t._v(" "+t._s(t.dialog.title)+" ")]),o("v-card-text",[t._v(t._s(t.dialog.msg))]),o("v-card-actions",[o("v-spacer"),o("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(e){t.dialogSw=!1}}},[t._v("OK")])],1)],1)],1)],1)},z=[],J=(o("4d63"),o("96cf"),o("1da1")),F={name:"Endpoint",data:function(){return{url:"",dialogSw:!1,dialog:{title:"",msg:""}}},mounted:function(){this.url=localStorage.getItem("endpoint")},methods:{checkUrl:function(){var t=this;return Object(J["a"])(regeneratorRuntime.mark((function e(){var o,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return o="^(?!mailto:)(?:(?:http|https|ftp)://)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$",a=new RegExp(o,"i"),console.log(a),e.abrupt("return",t.url.length<2083&&a.test(t.url));case 4:case"end":return e.stop()}}),e)})))()},setEndpoint:function(){var t=this;return Object(J["a"])(regeneratorRuntime.mark((function e(){var o,a,n,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(console.log(t.$socket.io.uri),!t.url){e.next=24;break}if(o=new URL(t.url),a=o.hostname,n=o.protocol,!t.checkUrl()){e.next=19;break}return e.next=8,"".concat(n,"//").concat(a,":3001");case 8:return i=e.sent,e.next=11,localStorage.setItem("endpoint",t.url);case 11:return e.next=13,localStorage.setItem("ws_endpoint",i);case 13:return e.next=15,t.url;case 15:t.$http.defaults.baseURL=e.sent,t.$socket.io.uri=i,e.next=22;break;case 19:t.dialog.title="",t.dialog.msg="Invalid Endpoint",t.dialogSw=!0;case 22:e.next=27;break;case 24:t.dialog.title="",t.dialog.msg="Invalid Endpoint",t.dialogSw=!0;case 27:case"end":return e.stop()}}),e)})))()},checkValidEndpoint:function(){return Object(J["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()}}},V=F,q=Object(h["a"])(V,Y,z,!1,null,"73e61110",null),G=q.exports,W={name:"App",components:{StatusList:b,Youtube:_,Setting:C,History:M,Url:B,Endpoint:G},sockets:{connect:function(){console.log("socket connected")},deviceId:function(t){localStorage.setItem("deviceId",t)}},mounted:function(){var t=this,e=this;e.tab="task",e.isInit=!0,window.addEventListener("scroll",(function(){t.bottom=t.bottomVisible()})),this.$vuetify.theme.dark=this.$store.state.darkMode,this.$http.defaults.baseURL=localStorage.getItem("endpoint")},data:function(){return{dialogEndpoint:!1,endpoint:"",dynamicClass:"",bottom:!1,autoPlay:!1,dialog:{title:"",msg:""},dialogSw:!1,isInit:!1,theme:"#1e1e1e",tab:"task",text:"",items:["task","youtube","history","url"],player:!1,url:"",audio:[],dialogSwa:!1,settingSw:!1}},watch:{bottom:function(t){t?1==this.tab&&this.$refs.youtubeList.nextPage():this.dynamicClass=""}},methods:{setEndpointDialog:function(){this.dialogEndpoint=!0},menuDialog:function(){},searchHistory:function(t){var e=this;this.tab=1,this.$nextTick((function(){e.$refs.youtubeList.setSearch(t),e.$refs.youtubeList.searchListByKey()}))},bottomVisible:function(){var t=window.scrollY,e=document.documentElement.clientHeight,o=document.documentElement.scrollHeight,a=e+t>=o;return a||o<e},addPlayList:function(t,e){this.playurl(t,e,!0)},playurl:function(t,e){var o=this,a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];this.player=!0,this.$nextTick((function(){a?o.audio.push({name:"".concat(e),artist:"",url:"".concat(o.$http.defaults.baseURL).concat(t),cover:"",lrc:""}):o.audio=[{name:"".concat(e),artist:"",url:"".concat(o.$http.defaults.baseURL).concat(t),cover:"",lrc:""}]}))},addedTask:function(t){console.log(t),this.$refs.statusList.getStatusList()},youtubeConvert:function(t,e){var o=this;this.tab=0,console.log(e),this.$nextTick((function(){o.dialog.title="Task",o.$http.post("/convert/add?url="+t+"&format=mp3",{title:e}).then((function(t){console.log(t),o.dialog.msg="Task Added",o.dialogSw=!0})).catch((function(t){t.response.data.msg?o.dialog.msg=t.response.data.msg:o.dialog.msg="Add Task Error!",o.dialogSw=!0}))}))},settingDialog:function(){this.settingSw=!0}}},Q=W,X=(o("034f"),Object(h["a"])(Q,c,u,!1,null,null,null)),Z=X.exports,tt=o("ce5b"),et=o.n(tt);o("5363"),o("bf40");a["default"].use(et.a);var ot={icons:{iconfont:"mdi"},theme:{dark:!0}},at=new et.a(ot),nt=o("bc3a"),it=o.n(nt),rt=o("cf0d"),st=o.n(rt),lt=o("5132"),ct=o.n(lt),ut=o("9483");Object(ut["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),a["default"].use(new ct.a({debug:!0,connection:localStorage.getItem("ws_endpoint")?localStorage.getItem("ws_endpoint"):"",vuex:{store:l,actionPrefix:"SOCKET_",mutationPrefix:"SOCKET_"}})),it.a.defaults.headers["Content-Type"]=!1,a["default"].use(st.a,{defaultCover:"".concat(localStorage.getItem("endpoint"),"/pic"),productionTip:!1});var dt=!window.MSStream&&/iPad|iPhone|iPod/.test(navigator.userAgent);a["default"].prototype.$ios=dt,a["default"].prototype.$http=it.a,a["default"].config.productionTip=!1,a["default"].prototype.$day=v,new a["default"]({vuetify:at,store:l,render:function(t){return t(Z)}}).$mount("#app")},"85ec":function(t,e,o){}});