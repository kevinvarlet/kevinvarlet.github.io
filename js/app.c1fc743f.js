(function(e){function t(t){for(var r,n,s=t[0],l=t[1],c=t[2],d=0,u=[];d<s.length;d++)n=s[d],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&u.push(i[n][0]),i[n]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);f&&f(t);while(u.length)u.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],r=!0,n=1;n<a.length;n++){var s=a[n];0!==i[s]&&(r=!1)}r&&(o.splice(t--,1),e=l(l.s=a[0]))}return e}var r={},n={app:0},i={app:0},o=[];function s(e){return l.p+"js/"+({about:"about"}[e]||e)+"."+{about:"beb97d58"}[e]+".js"}function l(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(e){var t=[],a={about:1};n[e]?t.push(n[e]):0!==n[e]&&a[e]&&t.push(n[e]=new Promise((function(t,a){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"ed036f12"}[e]+".css",i=l.p+r,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var c=o[s],d=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(d===r||d===i))return t()}var u=document.getElementsByTagName("style");for(s=0;s<u.length;s++){c=u[s],d=c.getAttribute("data-href");if(d===r||d===i)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||i,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete n[e],f.parentNode.removeChild(f),a(o)},f.href=i;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){n[e]=0})));var r=i[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,a){r=i[e]=[t,a]}));t.push(r[2]=o);var c,d=document.createElement("script");d.charset="utf-8",d.timeout=120,l.nc&&d.setAttribute("nonce",l.nc),d.src=s(e);var u=new Error;c=function(t){d.onerror=d.onload=null,clearTimeout(f);var a=i[e];if(0!==a){if(a){var r=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+r+": "+n+")",u.name="ChunkLoadError",u.type=r,u.request=n,a[1](u)}i[e]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:d})}),12e4);d.onerror=d.onload=c,document.head.appendChild(d)}return Promise.all(t)},l.m=e,l.c=r,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(a,r,function(t){return e[t]}.bind(null,r));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],d=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var f=d;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",{attrs:{id:"inspire"}},[a("v-navigation-drawer",{attrs:{app:"",color:"primary"},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[a("v-list",{attrs:{dense:""}},[a("v-list-item",{attrs:{router:"",to:"/"}},[a("v-list-item-action",[a("v-icon",[e._v("mdi-home")])],1),a("v-list-item-content",[a("v-list-item-title",[e._v("Makanan")])],1)],1),a("v-list-item",{attrs:{router:"",to:"/about"}},[a("v-list-item-action",[a("v-icon",[e._v("mdi-pencil")])],1),a("v-list-item-content",[a("v-list-item-title",[e._v("Minuman")])],1)],1)],1)],1),a("v-app-bar",{attrs:{app:""}},[a("v-app-bar-nav-icon",{on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}}),a("v-toolbar-title",[e._v("Application")])],1),a("v-content",[a("router-view")],1)],1)},i=[],o={data:function(){return{drawer:null}}},s=o,l=a("2877"),c=a("6544"),d=a.n(c),u=a("7496"),f=a("40dc"),m=a("5bc1"),v=a("a75b"),p=a("132d"),b=a("8860"),h=a("da13"),g=a("1800"),I=a("5d23"),y=a("f774"),w=a("2a7f"),k=Object(l["a"])(s,n,i,!1,null,null,null),x=k.exports;d()(k,{VApp:u["a"],VAppBar:f["a"],VAppBarNavIcon:m["a"],VContent:v["a"],VIcon:p["a"],VList:b["a"],VListItem:h["a"],VListItemAction:g["a"],VListItemContent:I["a"],VListItemTitle:I["b"],VNavigationDrawer:y["a"],VToolbarTitle:w["a"]});var _=a("9483");Object(_["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});a("d3b7");var C=a("8c4f"),V=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"about"},[a("h1",[e._v("CRUD")]),a("HelloWorld")],1)},T=[],A=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.desserts,"sort-by":"calories",search:e.search},scopedSlots:e._u([{key:"top",fn:function(){return[a("v-toolbar",{attrs:{flat:"",color:"white"}},[a("v-toolbar-title",[e._v("Crud Atma pedia")]),a("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),a("v-spacer"),a("v-dialog",{attrs:{"max-width":"500px"},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on;return[a("v-btn",e._g({staticClass:"mb-2",attrs:{color:"primary",dark:""}},r),[e._v("buat makanan")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[e._v(e._s(e.formTitle))])]),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Dessert name"},model:{value:e.editedItem.name,callback:function(t){e.$set(e.editedItem,"name",t)},expression:"editedItem.name"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Calories"},model:{value:e.editedItem.calories,callback:function(t){e.$set(e.editedItem,"calories",t)},expression:"editedItem.calories"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Fat (g)"},model:{value:e.editedItem.fat,callback:function(t){e.$set(e.editedItem,"fat",t)},expression:"editedItem.fat"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Carbs (g)"},model:{value:e.editedItem.carbs,callback:function(t){e.$set(e.editedItem,"carbs",t)},expression:"editedItem.carbs"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Protein (g)"},model:{value:e.editedItem.protein,callback:function(t){e.$set(e.editedItem,"protein",t)},expression:"editedItem.protein"}})],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.close}},[e._v("Cancel")]),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.save}},[e._v("Save")])],1)],1)],1)],1)]},proxy:!0},{key:"item.action",fn:function(t){var r=t.item;return[a("v-icon",{staticClass:"mr-1",on:{click:function(t){return e.edititem(r)}}},[e._v("mdi-silverware")]),a("v-icon",{staticClass:"mr-1",on:{click:function(t){return e.deleteitem(r)}}},[e._v("mdi-delete")])]}}])})],1)},j=[],O=(a("b0c0"),a("dc59")),E={data:function(){return{cek:-1,search:"",dialog:!1,headers:[{text:"Dessert (100g serving)",align:"left",sortable:!1,value:"name"},{text:"Calories",value:"calories"},{text:"Fat (g)",value:"fat"},{text:"Carbs (g)",value:"carbs"},{text:"Protein (g)",value:"protein"},{text:"Actions",value:"action",sortable:!1}],desserts:[],editedIndex:-1,editedItem:{name:"",calories:0,fat:0,carbs:0,protein:0},defaultItem:{name:"",calories:0,fat:0,carbs:0,protein:0}}},firebase:{desserts:O["a"]},computed:{formTitle:function(){return-1===this.cek?"New Item":"Edit Item"}},watch:{dialog:function(e){e||this.close()}},methods:{close:function(){this.dialog=!1},save:function(){this.cek>-1?(O["a"].child(this.editedIndex).set({name:this.editedItem.name,calories:this.editedItem.calories,fat:this.editedItem.fat,carbs:this.editedItem.carbs,protein:this.editedItem.protein}),this.clear()):(O["a"].push({name:this.editedItem.name,calories:this.editedItem.calories,fat:this.editedItem.fat,carbs:this.editedItem.carbs,protein:this.editedItem.protein}),this.clear()),this.close()},clear:function(){this.editedItem={},this.editedItem.name="",this.editedItem.calories=0,this.editedItem.fat=0,this.editedItem.carbs=0,this.editedItem.protein=0,this.cek=-1},edititem:function(e){this.editedIndex=e[".key"],this.cek=0,this.editedItem=Object.assign({},e),this.dialog=!0},deleteitem:function(e){confirm("Are you sure you want to delete this item?")&&O["a"].child(e[".key"]).remove()}}},S=E,P=a("8336"),L=a("b0af"),N=a("99d9"),D=a("62ad"),$=a("a523"),B=a("8fea"),F=a("169a"),M=a("ce7e"),q=a("0fd9"),H=a("2fa4"),R=a("8654"),U=a("71d9"),J=Object(l["a"])(S,A,j,!1,null,null,null),W=J.exports;d()(J,{VBtn:P["a"],VCard:L["a"],VCardActions:N["a"],VCardText:N["b"],VCardTitle:N["c"],VCol:D["a"],VContainer:$["a"],VDataTable:B["a"],VDialog:F["a"],VDivider:M["a"],VIcon:p["a"],VRow:q["a"],VSpacer:H["a"],VTextField:R["a"],VToolbar:U["a"],VToolbarTitle:w["a"]});var z={name:"home",components:{HelloWorld:W}},K=z,G=Object(l["a"])(K,V,T,!1,null,null,null),Q=G.exports;r["a"].use(C["a"]);var X=[{path:"/",name:"home",component:Q},{path:"/about",name:"about",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],Y=new C["a"]({mode:"history",base:"/",routes:X}),Z=Y,ee=a("f309");r["a"].use(ee["a"]);var te=new ee["a"]({}),ae=a("0ff2");r["a"].use(ae["a"]),r["a"].config.productionTip=!1,new r["a"]({router:Z,vuetify:te,render:function(e){return e(x)}}).$mount("#app")},dc59:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return s}));var r=a("59ca"),n=a.n(r),i=(a("66ce"),n.a.initializeApp({databaseURL:"https://vueandfirebase-f8f4a.firebaseio.com"}).database()),o=i.ref("desserts"),s=i.ref("drink")}});
//# sourceMappingURL=app.c1fc743f.js.map