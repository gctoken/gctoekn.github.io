(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1d33be49"],{"26ae":function(v,N,t){"use strict";t.r(N);var A=function(){var v=this,N=v.$createElement,A=v._self._c||N;return A("div",{staticClass:"spread-mining"},[A("div",{staticClass:"info"},[A("div",[A("img",{attrs:{src:t("6a6c")}}),A("div",[A("span",{domProps:{textContent:v._s(v.$t("home.text44"))}}),A("span",{domProps:{textContent:v._s(v.code)}})])]),v.isBind?A("div",{on:{click:function(N){return v.copy(v.code)}}},[A("span",{domProps:{textContent:v._s(v.$t("home.text46"))}})]):A("div",{on:{click:v.generate}},[A("span",{domProps:{textContent:v._s(v.$t("home.text45"))}})])]),A("div",{staticClass:"info"},[A("div",[A("img",{attrs:{src:t("61be")}}),A("div",[A("span",{domProps:{textContent:v._s(v.$t("home.text47"))}}),A("span",{domProps:{textContent:v._s(v.link)}})])]),v.isBind?A("div",{on:{click:function(N){return v.copy(v.link)}}},[A("span",{domProps:{textContent:v._s(v.$t("home.text46"))}})]):A("div",{on:{click:v.generate}},[A("span",{domProps:{textContent:v._s(v.$t("home.text45"))}})])]),A("div",{staticClass:"user-list"},[A("span",{staticClass:"before",domProps:{textContent:v._s(v.$t("home.text48"))}}),A("div",{staticClass:"title"},[A("span",{domProps:{textContent:v._s(v.$t("home.text49"))}}),A("span",{domProps:{textContent:v._s(v.$t("home.text6"))}})]),A("div",{staticClass:"list"},v._l(v.list,(function(N){return A("div",[A("span",{domProps:{textContent:v._s(N.id)}}),A("span",{domProps:{textContent:v._s(N.ledge)}})])})),0)])])},e=[],E=t("5530"),s=(t("99af"),t("fb6a"),t("9911"),t("96cf"),t("1da1")),n={data:function(){return{code:"******",link:"".concat(location.href,"?code=******"),isBind:!1,list:[]}},created:function(){this.$contracts&&this.init()},methods:{generate:function(){this.$getIsBind(!0)},copy:function(v){var N=this;this.$copyText(v).then((function(v){vant.Toast.success(N.$t("home.text50"))}),(function(v){vant.Toast.fail(N.$t("home.text51"))}))},init:function(){var v=this;this.$contracts.CNS.methods.defaultDomainOf(this.$address).call({from:this.$address},(function(N,t){N||(v.isBind=!0,v.code=t.slice(0,-4),v.link="".concat(location.href,"?code=").concat(v.code))})),this.$contracts.Relations.methods.childrenOf(this.$address).call({from:this.$address},function(){var N=Object(s["a"])(regeneratorRuntime.mark((function N(t,A){var e,E,s;return regeneratorRuntime.wrap((function(N){while(1)switch(N.prev=N.next){case 0:if(t||!(A.length>0)){N.next=13;break}e=0;case 2:if(!(e<A.length)){N.next=13;break}return N.next=5,v.$contracts.CNS.methods.defaultDomainOf(A[e]).call({from:v.$address});case 5:return E=N.sent,N.next=8,v.$contracts.HaloConsensus.methods.nodeInfomationOf(A[e]).call({from:v.$address});case 8:s=N.sent,v.list.push({id:E.slice(0,-4),ledge:s.pledge.fromWei()});case 10:e++,N.next=2;break;case 13:case"end":return N.stop()}}),N)})));return function(v,t){return N.apply(this,arguments)}}())}}},o=Object(E["a"])({},n),u=o,i=(t("4536"),t("2877")),a=Object(i["a"])(u,A,e,!1,null,"b60182b4",null);N["default"]=a.exports},4536:function(v,N,t){"use strict";t("f03f")},"61be":function(v,N){v.exports="data:image/png;base64,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"},"6a6c":function(v,N){v.exports="data:image/png;base64,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"},9911:function(v,N,t){"use strict";var A=t("23e7"),e=t("857a"),E=t("af03");A({target:"String",proto:!0,forced:E("link")},{link:function(v){return e(this,"a","href",v)}})},f03f:function(v,N,t){}}]);