(function(t){function e(e){for(var a,r,o=e[0],c=e[1],l=e[2],d=0,u=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&u.push(n[r][0]),n[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);v&&v(e);while(u.length)u.shift()();return s.push.apply(s,l||[]),i()}function i(){for(var t,e=0;e<s.length;e++){for(var i=s[e],a=!0,o=1;o<i.length;o++){var c=i[o];0!==n[c]&&(a=!1)}a&&(s.splice(e--,1),t=r(r.s=i[0]))}return t}var a={},n={app:0},s=[];function r(e){if(a[e])return a[e].exports;var i=a[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=a,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(i,a,function(e){return t[e]}.bind(null,a));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/cv/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var v=c;s.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";var a=i("8a23"),n=i.n(a);n.a},"06f6":function(t,e,i){t.exports=i.p+"img/martin1.d9bf2972.jpg"},"19cc":function(t,e,i){t.exports=i.p+"img/github.a234a9b6.png"},"3f34":function(t,e,i){t.exports=i.p+"img/docker.a3cc1af0.svg"},"484d":function(t,e,i){t.exports=i.p+"img/flask.318d58cb.svg"},"4fc3":function(t,e,i){t.exports=i.p+"img/vue.2a6caca3.svg"},5337:function(t,e,i){t.exports=i.p+"img/express-js.b32cf20d.svg"},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var a=i("2b0e"),n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",{attrs:{id:"app"}},[i("v-toolbar",[i("v-spacer"),i("v-toolbar-title",{staticClass:"my-title"},[t._v("Curriculum vitae")]),i("v-spacer")],1),i("v-main",[i("Content")],1),i("v-footer",{attrs:{app:""}},[i("span",{staticClass:"my-text"},[t._v("© Hecho por Nacimiento Martin")])])],1)},s=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[a("CvCardPresentation"),a("v-lazy",{attrs:{options:{threshold:.5},"min-height":"200",transition:"fade-transition"},model:{value:t.sections[1],callback:function(e){t.$set(t.sections,1,e)},expression:"sections[1]"}},[a("section",[a("v-row",{staticClass:"my-5",attrs:{wrap:"",align:"center",justify:"center"}},[a("v-col",{staticClass:"my-3",attrs:{xs:"6",md:"6",sm:"12"}},[a("div",{staticClass:"text-center"},[a("div",{staticClass:"headline"},[a("h1",{staticClass:"display-2 mb3"},[t._v("Hola!")])]),a("br"),a("br"),a("div",{staticClass:"subheading"},[t._v("Tengo experiencias desarrollando en los frameworks Laravel, Express, Django, Flask, Nuxt y Vue. En los frameworks de lado del backend desarrollando un servidor API Rest y en los del lado del frontend una SPA (Single Page Application) o SSR, utilizando Axios un cliente HTTP basado en promesas para comunicarse con el servidor.")]),a("br"),a("br"),a("div",{staticClass:"subheading"},[t._v("Sé utilizar docker para armar entornos de desarrollo y dockerizar los frameworks que anteriormente mencioné.")]),a("br"),a("br"),a("div",{staticClass:"subheading"},[t._v("Me he recibido de Analista en Sistemas de Computación a fines del 2019 en la Universidad Nacional de Misiones, y es donde sigo estudiando actualmente la carrera de Licenciatura en Sistemas de Información.")]),a("br"),a("br"),a("div",{staticClass:"subheading"},[t._v("Competencias: Desarrollo web, Java/PHP/JavaScript/C/Go, Laravel/Vue, Vuetify/Vuex/Vue Router/Nuxt, Axios, MySQL/PostgreSQL/, Express, Flask, Django, Inglés básico.")])])])],1)],1)]),a("v-lazy",{attrs:{options:{threshold:.5},"min-height":"200",transition:"fade-transition"},model:{value:t.sections[2],callback:function(e){t.$set(t.sections,2,e)},expression:"sections[2]"}},[a("CvCompetencies")],1),a("v-lazy",{attrs:{options:{threshold:.5},"min-height":"200",transition:"fade-transition"},model:{value:t.sections[3],callback:function(e){t.$set(t.sections,3,e)},expression:"sections[3]"}},[a("CvTitles")],1),a("v-lazy",{attrs:{options:{threshold:.5},"min-height":"200",transition:"fade-transition"},model:{value:t.sections[4],callback:function(e){t.$set(t.sections,4,e)},expression:"sections[4]"}},[a("section",[a("v-parallax",{attrs:{src:i("19cc"),height:"200"}},[a("v-col",{attrs:{align:"center",justify:"center"}},[a("v-btn",{staticClass:"black lighten-2 mt-5",attrs:{dark:"",large:"",href:"https://github.com/martinnacimiento",target:"_blank"}},[t._v("Seguime en GitHub")])],1)],1)],1)]),a("v-lazy",{attrs:{options:{threshold:.5},"min-height":"200",transition:"fade-transition"},model:{value:t.sections[5],callback:function(e){t.$set(t.sections,5,e)},expression:"sections[5]"}},[a("section",[a("v-container",{attrs:{"grid-list-xl":""}},[a("v-row",{attrs:{wrap:"",justify:"center"}},[a("v-col",{attrs:{xs:"12",sm:"4","offset-sm1":""}},[a("v-card",{attrs:{flat:""}},[a("v-card-title",{staticClass:"layout justify-center",attrs:{"primary-title":""}},[a("div",{staticClass:"headline"},[t._v("Contacto")])]),a("v-card-text",[a("v-row",{attrs:{justify:"center"}},[a("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var i=e.hover;return[a("v-btn",{attrs:{icon:"",color:"black lighten-1",href:"https://www.linkedin.com/in/martinnacimiento",target:"_blank"}},[a("v-icon",{attrs:{color:i?"#006192":"black darken-2"}},[t._v("mdi-linkedin")])],1)]}}])}),a("v-btn",{attrs:{icon:"",color:"black lighten-1",href:"https://github.com/martinnacimiento",target:"_blank"}},[a("v-icon",{attrs:{color:"black darken-2"}},[t._v("mdi-github")])],1)],1),a("v-divider")],1),a("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var i=e.hover;return[a("v-list-item",[a("v-list-item-action",[a("v-icon",{attrs:{color:i?"blue":"black lighten-2"}},[t._v("mdi-account")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v("Nacimiento Francisco Martin")])],1)],1)]}}])}),a("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var i=e.hover;return[a("v-list-item",[a("v-list-item-action",[a("v-icon",{attrs:{color:i?"#4FCE5D":"black lighten-2"}},[t._v("mdi-whatsapp")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v("+54-3764-110111")])],1)],1)]}}])}),a("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var i=e.hover;return[a("v-list-item",[a("v-list-item-action",[a("v-icon",{attrs:{color:i?"#D44638":"black lighten-2"}},[t._v("mdi-gmail")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v("martinnacimiento98@gmail.com")])],1)],1)]}}])}),a("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var i=e.hover;return[a("v-list-item",[a("v-list-item-action",[a("v-icon",{attrs:{color:i?"#EA4335":"black lighten-2"}},[t._v("mdi-map-marker")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v("Garupá, Misiones - AR")])],1)],1)]}}])})],1)],1)],1)],1)],1)])],1)},o=[],c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("v-parallax",{attrs:{src:i("b13e"),height:"auto"}},[a("v-slide-group",{attrs:{"center-active":""}},t._l(t.competencies,(function(e){return a("v-slide-item",{key:e.nombre,scopedSlots:t._u([{key:"default",fn:function(i){var n=i.active,s=i.toggle;return[a("v-card",{staticClass:"rounded-lg ma-4",attrs:{elevation:n?12:2,color:e.color?e.color:"white"},on:{click:s}},[a("div",{staticClass:"d-flex flex-no-wrap justify-space-between"},[a("div",[a("v-card-title",{staticClass:"my-title"},[t._v(t._s(e.nombre))]),a("v-card-subtitle")],1),a("v-avatar",{staticClass:"ma-3",attrs:{size:"125",tile:""}},[a("v-img",{staticClass:"rounded-lg",attrs:{src:e.img,"lazy-src":e.img}})],1)],1)])]}}],null,!0)})})),1)],1)],1)},l=[],v=[{nombre:"Docker",descripcion:"",link:"https://www.docker.com/",img:i("3f34"),color:"#0db7ed"},{nombre:"Vue",descripcion:"",link:"https://vuejs.org/",img:i("4fc3"),color:"#7acda8"},{nombre:"Vuetify",descripcion:"",link:"https://vuetifyjs.com/en/",img:i("684d"),color:"#85E1EB"},{nombre:"Laravel",descripcion:"",link:"https://laravel.com/",img:i("aeeb"),color:"#F48679"},{nombre:"MySQL",descripcion:"",link:"https://www.mysql.com/",img:i("8d8b"),color:"#4c9eb0"},{nombre:"Express.js",descripcion:"",link:"https://expressjs.com/",img:i("5337")},{nombre:"Nuxt",descripcion:"",link:"https://expressjs.com/",img:i("7f9b"),color:"#75a69a"},{nombre:"Flask",descripcion:"",link:"https://expressjs.com/",img:i("484d")}],d=v,u={name:"CvCompetencies",data:function(){return{}},computed:{sheets:function(){return Math.ceil(d.length/3)},competencies:function(){return d}}},m=u,p=i("2877"),f=i("6544"),b=i.n(f),h=i("8212"),g=i("b0af"),_=i("99d9"),y=i("adda"),k=i("8b9c"),C=i("7efd"),x=i("9dbe"),V=Object(p["a"])(m,c,l,!1,null,null,null),w=V.exports;b()(V,{VAvatar:h["a"],VCard:g["a"],VCardSubtitle:_["b"],VCardTitle:_["d"],VImg:y["a"],VParallax:k["a"],VSlideGroup:C["a"],VSlideItem:x["a"]});var S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("v-parallax",{attrs:{src:i("b13e"),height:"auto"}},[a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",{attrs:{cols:"12",sm:"8",md:"6",xs:"10"}},[a("v-card",{staticClass:"rounded-lg mx-auto",attrs:{elevation:12}},[a("v-container",{attrs:{"fill-height":"",fluid:""}},[a("v-row",{attrs:{wrap:""}},[a("v-col",{attrs:{cols:"12",sm:"8",md:"6",xs:"12"}},[a("v-img",{staticClass:"rounded-lg",attrs:{src:i("06f6"),height:"100%"}})],1),a("v-spacer"),a("v-col",{attrs:{cols:"12",sm:"8",md:"6",xs:"12"}},[a("v-card-text",[a("div",{staticClass:"box"},[a("div",{staticClass:"my-title mb-3"},[t._v("Nacimiento Francisco Martin")]),a("div",{staticClass:"my-subtitle"},[t._v("Analista en Sistemas de Computación")]),a("div",{staticClass:"py-4"})]),a("v-divider"),a("v-list",[a("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var i=e.hover;return[a("v-list-item",[a("v-list-item-action",[a("v-icon",{attrs:{color:i?"blue":"black lighten-2"}},[t._v("mdi-account")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v("22 años")])],1)],1)]}}])}),a("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var i=e.hover;return[a("v-list-item",[a("v-list-item-action",[a("v-icon",{attrs:{color:i?"#4FCE5D":"black lighten-2"}},[t._v("mdi-whatsapp")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v("+54-3764-110111")])],1)],1)]}}])}),a("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var i=e.hover;return[a("v-list-item",[a("v-list-item-action",[a("v-icon",{attrs:{color:i?"#D44638":"black lighten-2"}},[t._v("mdi-gmail")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v("martinnacimiento98@gmail.com")])],1)],1)]}}])}),a("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var i=e.hover;return[a("v-list-item",[a("v-list-item-action",[a("v-icon",{attrs:{color:i?"#EA4335":"black lighten-2"}},[t._v("mdi-map-marker")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v("Garupá, Misiones - AR")])],1)],1)]}}])})],1)],1)],1)],1)],1),a("v-card-actions",{staticClass:"ma-3"},[a("v-row",{attrs:{justify:"center"}},[a("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var i=e.hover;return[a("v-btn",{attrs:{text:"",icon:"",color:"black lighten-1",href:"https://www.linkedin.com/in/martinnacimiento/",target:"_blank"}},[a("v-icon",{attrs:{color:i?"#006192":"black darken-2"}},[t._v("mdi-linkedin")])],1)]}}])}),a("v-btn",{attrs:{text:"",icon:"",color:"black lighten-1",href:"https://github.com/martinnacimiento",target:"_blank"}},[a("v-icon",{attrs:{color:"black darken-2"}},[t._v("mdi-github")])],1)],1)],1)],1)],1)],1)],1)],1)},j=[],A=i("8336"),L=i("62ad"),I=i("a523"),M=i("ce7e"),P=i("ce87"),T=i("132d"),E=i("8860"),O=i("da13"),F=i("1800"),N=i("5d23"),D=i("0fd9"),z=i("2fa4"),$={},R=Object(p["a"])($,S,j,!1,null,null,null),H=R.exports;b()(R,{VBtn:A["a"],VCard:g["a"],VCardActions:_["a"],VCardText:_["c"],VCol:L["a"],VContainer:I["a"],VDivider:M["a"],VHover:P["a"],VIcon:T["a"],VImg:y["a"],VList:E["a"],VListItem:O["a"],VListItemAction:F["a"],VListItemContent:N["a"],VListItemTitle:N["c"],VParallax:k["a"],VRow:D["a"],VSpacer:z["a"]});var Q=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",[i("v-row",{attrs:{"justify-center":""}},t._l(t.titles,(function(e){return i("v-col",{key:e.nombre,attrs:{xs:"6",md:"6"}},[i("v-card",{attrs:{outlined:""}},[i("v-list-item",[i("v-list-item-avatar",[i("v-icon",{attrs:{"x-large":"",color:100===e.complete?"#D9AF62":""}},[t._v("mdi-trophy-award")])],1),i("v-list-item-content",[i("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(a){var n=a.on;return[i("v-list-item-title",t._g({staticClass:"headline"},n),[t._v(t._s(e.nombre))])]}}],null,!0)},[i("span",[t._v(t._s(e.nombre))])]),i("v-list-item-subtitle",[t._v(t._s(e.universidad))])],1)],1),i("v-card-title",{staticClass:"layout justify-center",attrs:{"primary-title":""}},[i("div",{staticClass:"my-title"},[t._v(t._s(e.anios))])]),i("v-card-text",{staticClass:"subheading"},[t._v(t._s(e.descripcion))]),i("v-card-actions",[i("v-progress-linear",{attrs:{color:100===e.complete?"#D9AF62":"blue",height:"20",stream:"",value:e.complete,"buffer-value":"2"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.value;return[i("strong",[t._v(t._s(Math.ceil(a))+"%")])]}}],null,!0)})],1)],1)],1)})),1)],1)},G=[],J=[{nombre:"Analista en Sistemas de Computación",anios:"2017 - 2019",universidad:"Universidad Nacional de Misiones",descripcion:"Facultad de Ciencias Exactas, Químicas y Naturales (FCQyN), Módulo Apóstoles. Pellegrini 269. Apóstoles, Misiones.",complete:100},{nombre:"Licenciatura en Sistemas de Información",anios:"2017 - Actualidad",universidad:"Universidad Nacional de Misiones",descripcion:"Facultad de Ciencias Exactas, Químicas y Naturales (FCQyN), Módulo Apóstoles. Pellegrini 269. Apóstoles, Misiones.",complete:80}],q=J,B={computed:{titles:function(){return q}}},U=B,K=i("8270"),W=i("8e36"),X=i("3a2f"),Y=Object(p["a"])(U,Q,G,!1,null,null,null),Z=Y.exports;b()(Y,{VCard:g["a"],VCardActions:_["a"],VCardText:_["c"],VCardTitle:_["d"],VCol:L["a"],VIcon:T["a"],VListItem:O["a"],VListItemAvatar:K["a"],VListItemContent:N["a"],VListItemSubtitle:N["b"],VListItemTitle:N["c"],VProgressLinear:W["a"],VRow:D["a"],VTooltip:X["a"]});var tt={components:{CvCompetencies:w,CvCardPresentation:H,CvTitles:Z},data:function(){return{sections:[!1,!1,!1,!1,!1,!1]}}},et=tt,it=(i("a3cd"),i("b687")),at=Object(p["a"])(et,r,o,!1,null,"f00aa23c",null),nt=at.exports;b()(at,{VBtn:A["a"],VCard:g["a"],VCardText:_["c"],VCardTitle:_["d"],VCol:L["a"],VContainer:I["a"],VDivider:M["a"],VHover:P["a"],VIcon:T["a"],VLazy:it["a"],VListItem:O["a"],VListItemAction:F["a"],VListItemContent:N["a"],VListItemTitle:N["c"],VParallax:k["a"],VRow:D["a"]});var st={name:"App",components:{Content:nt},data:function(){return{}}},rt=st,ot=(i("034f"),i("7496")),ct=i("553a"),lt=i("f6c4"),vt=i("71d9"),dt=i("2a7f"),ut=Object(p["a"])(rt,n,s,!1,null,null,null),mt=ut.exports;b()(ut,{VApp:ot["a"],VFooter:ct["a"],VMain:lt["a"],VSpacer:z["a"],VToolbar:vt["a"],VToolbarTitle:dt["a"]});var pt=i("f309");a["a"].use(pt["a"]);var ft=new pt["a"]({});a["a"].config.productionTip=!1,new a["a"]({vuetify:ft,render:function(t){return t(mt)}}).$mount("#app")},"684d":function(t,e,i){t.exports=i.p+"img/vuetify.a1d6f016.svg"},"7f9b":function(t,e,i){t.exports=i.p+"img/nuxt.fc69473e.svg"},"8a23":function(t,e,i){},"8d8b":function(t,e,i){t.exports=i.p+"img/mysql.78d3a4b1.svg"},a3cd:function(t,e,i){"use strict";var a=i("cbf9"),n=i.n(a);n.a},aeeb:function(t,e,i){t.exports=i.p+"img/laravel.27c46a45.svg"},b13e:function(t,e,i){t.exports=i.p+"img/background.2dfed511.jpg"},cbf9:function(t,e,i){}});
//# sourceMappingURL=app.aa80eeb7.js.map