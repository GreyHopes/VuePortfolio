(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"1f54":function(t,e,o){},"62ad":function(t,e,o){"use strict";o("4160"),o("caad"),o("13d5"),o("45fc"),o("4ec9"),o("a9e3"),o("b64b"),o("d3b7"),o("ac1f"),o("3ca3"),o("5319"),o("2ca0"),o("159b"),o("ddb0");var a=o("ade3"),r=o("5530"),s=(o("4b85"),o("2b0e")),n=o("d9f7"),i=o("80d2"),c=["sm","md","lg","xl"],l=function(){return c.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{})}(),u=function(){return c.reduce((function(t,e){return t["offset"+Object(i["q"])(e)]={type:[String,Number],default:null},t}),{})}(),d=function(){return c.reduce((function(t,e){return t["order"+Object(i["q"])(e)]={type:[String,Number],default:null},t}),{})}(),f={col:Object.keys(l),offset:Object.keys(u),order:Object.keys(d)};function p(t,e,o){var a=t;if(null!=o&&!1!==o){if(e){var r=e.replace(t,"");a+="-".concat(r)}return"col"!==t||""!==o&&!0!==o?(a+="-".concat(o),a.toLowerCase()):a.toLowerCase()}}var b=new Map;e["a"]=s["a"].extend({name:"v-col",functional:!0,props:Object(r["a"])({cols:{type:[Boolean,String,Number],default:!1}},l,{offset:{type:[String,Number],default:null}},u,{order:{type:[String,Number],default:null}},d,{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var o=e.props,r=e.data,s=e.children,i=(e.parent,"");for(var c in o)i+=String(o[c]);var l=b.get(i);return l||function(){var t,e;for(e in l=[],f)f[e].forEach((function(t){var a=o[t],r=p(e,t,a);r&&l.push(r)}));var r=l.some((function(t){return t.startsWith("col-")}));l.push((t={col:!r||!o.cols},Object(a["a"])(t,"col-".concat(o.cols),o.cols),Object(a["a"])(t,"offset-".concat(o.offset),o.offset),Object(a["a"])(t,"order-".concat(o.order),o.order),Object(a["a"])(t,"align-self-".concat(o.alignSelf),o.alignSelf),t)),b.set(i,l)}(),t(o.tag,Object(n["a"])(r,{class:l}),s)}})},d930:function(t,e,o){"use strict";function a(t){var e=/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;return e.test(t)}function r(t){return t?a(t)?t:"/images"+t:"/images/backgroun.jpg"}o.d(e,"a",(function(){return r}))},f26d:function(t,e,o){"use strict";var a=o("1f54"),r=o.n(a);r.a},f820:function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"about"},[o("v-container",{staticClass:"about-container"},[o("v-row",{attrs:{justify:"center"}},[o("v-col",{attrs:{cols:"12",md:"3"}},[o("v-img",{staticClass:"profile-pic",attrs:{"max-width":"20rem",src:t.getImageURL(t.profilePicUrl)}})],1),o("v-col",{attrs:{cols:"12",md:"9","align-self":"center"}},[o("v-container",[o("v-row",{staticClass:"title"},[t._v("About Me :")]),o("v-row",{staticClass:"description"},[o("VueShowdown",{attrs:{markdown:t.description}})],1),o("v-row",{},[o("v-col",{staticClass:"contact-details",attrs:{cols:"12",md:"6"}},[o("v-row",{staticClass:"title"},[t._v("Contact Details")]),o("v-row",{staticClass:"name"},[t._v(t._s(t.name))]),o("v-row",{staticClass:"adress-main"},[t._v(t._s(t.adressMain))]),o("v-row",{staticClass:"adress-second"},[t._v(t._s(t.adressSecond))]),o("v-row",{staticClass:"phone-number"},[t._v(t._s(t.phoneNumber))]),o("v-row",{staticClass:"email"},[t._v(t._s(t.email))])],1),o("v-col",{staticClass:"resume-button-container",attrs:{cols:"12",md:"6","align-self":"center"}},[o("v-btn",{staticClass:"resume-button",attrs:{tile:"",href:t.resumeUrl}},[o("v-icon",[t._v("mdi-download")]),o("span",[t._v("Get my resume")])],1)],1)],1)],1)],1)],1)],1)],1)},r=[],s=(o("a4d3"),o("e01a"),o("b0c0"),o("d930")),n={name:"About",data:function(){return{profilePicUrl:"",description:"",name:"",adressMain:"",adressSecond:"",phoneNumber:"",email:"",resumeUrl:""}},components:{},methods:{getImageURL:s["a"],retrieveDataFromState:function(t){this.profilePicUrl=t.portfolio.about.profilePic,this.description=t.portfolio.about.description,this.name=t.portfolio.name,this.phoneNumber=t.portfolio.about.phoneNumber,this.email=t.portfolio.about.email,this.resumeUrl=t.portfolio.resumeUrl,this.adressMain=t.portfolio.about.address.street,this.adressSecond=t.portfolio.about.address.city,t.portfolio.about.address.state&&""!==t.portfolio.about.address.state&&(this.adressSecond+=", "+t.portfolio.about.address.state),t.portfolio.about.address.country&&""!==t.portfolio.about.address.country&&(this.adressSecond+=", "+t.portfolio.about.address.country),this.adressSecond+=", "+t.portfolio.about.address.zip}},mounted:function(){var t=this;this.$store.state.portfolio?this.retrieveDataFromState(this.$store.state):this.$store.subscribe((function(e,o){"setportfoliodata"===e.type&&t.retrieveDataFromState(o)}),this)}},i=n,c=(o("f26d"),o("2877")),l=o("6544"),u=o.n(l),d=o("8336"),f=o("62ad"),p=o("a523"),b=o("132d"),m=o("adda"),v=o("0fd9"),h=Object(c["a"])(i,a,r,!1,null,null,null);e["default"]=h.exports;u()(h,{VBtn:d["a"],VCol:f["a"],VContainer:p["a"],VIcon:b["a"],VImg:m["a"],VRow:v["a"]})}}]);
//# sourceMappingURL=about.2a62ce87.js.map