"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[111],{8111:function(t,e,n){n.r(e),n.d(e,{ContactsPage:function(){return G},default:function(){return K}});var r=n(6152),a=n(2791),s=n(887),c=n(9434),i=n(3661),u="ContactForm_form__dhl+T",o="ContactForm_formLabel__TSwxK",l="ContactForm_formInput__GszVU",d="ContactForm_saveButton__Ua4ZN",f=n(184),h=function(){var t=(0,s.cI)(),e=t.register,n=t.handleSubmit,h=t.reset,m=t.formState.errors,p=(0,c.I0)();(0,a.useEffect)((function(){p((0,i.yF)())}),[p]);return(0,f.jsx)("div",{children:(0,f.jsxs)("form",{className:u,onSubmit:n((function(t){p((0,i.uK)(t)),h()})),children:[(0,f.jsxs)("label",{className:o,children:[(0,f.jsx)("span",{children:"Name:"}),(0,f.jsx)("input",(0,r.Z)((0,r.Z)({className:l},e("name",{required:!0})),{},{type:"text"})),m.name&&(0,f.jsx)("span",{children:"This field is required"})]}),(0,f.jsxs)("label",{className:o,children:[(0,f.jsx)("span",{children:"Number:"}),(0,f.jsx)("input",(0,r.Z)((0,r.Z)({className:l},e("number",{required:!0})),{},{type:"text"})),m.number&&(0,f.jsx)("span",{children:"This field is required"})]}),(0,f.jsx)("button",{className:d,type:"submit",children:"Add contact"})]})})},m=n(8273),p=function(){return(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(m.g4,{height:"80",width:"80",radius:"9",color:"black",ariaLabel:"three-dots-loading",wrapperStyle:{justifyContent:"center"},visible:!0})})},_=n(6916),v=function(t){return t.phonebook},x=(0,_.P1)(v,(function(t){return t.contacts})),j=(0,_.P1)(v,(function(t){return t.isLoading})),b=((0,_.P1)(v,(function(t){return t.error})),(0,_.P1)(v,(function(t){return t.filterTerm})),function(t){return t.filter}),C="ContactList_list__csErn",N="ContactList_listItem__SptUx",g="ContactList_deleteButton__3hT3n",w="ContactList_contactContainer_right__XOVTR",y=function(){var t=(0,c.I0)(),e=(0,c.v9)(x),n=(0,c.v9)(j),r=function(t,e){return null===t||void 0===t?void 0:t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))}(e,(0,c.v9)(b));(0,a.useEffect)((function(){t((0,i.yF)())}),[t]);return(0,f.jsxs)("div",{children:[n&&(0,f.jsx)(p,{}),(0,f.jsx)("ul",{className:C,children:Array.isArray(e)&&(null===r||void 0===r?void 0:r.map((function(e){return(0,f.jsxs)("li",{className:N,children:[(0,f.jsx)("h3",{children:e.name}),(0,f.jsxs)("div",{className:w,children:[(0,f.jsx)("p",{children:e.number}),(0,f.jsx)("button",{className:g,onClick:function(){return n=e.id,void t((0,i.GK)(n));var n},children:"X"})]})]},e.id)})))})]})},k="Filter_filterContainer__8G57N",F="Filter_filterField__hjFfe",Z="Filter_filterInput__1Cysk",L=n(6895),I=function(){var t=(0,c.I0)(),e=(0,c.v9)(b);return(0,f.jsxs)("div",{className:k,children:[(0,f.jsx)("p",{className:F,children:"Find contact by name"}),(0,f.jsx)("input",{className:Z,name:"filter",type:"text",id:"filter",value:e,onChange:function(e){return t((0,L.T)(e.target.value))}})]})},T=n(5861),P=n(4687),S=n.n(P),V=n(6382),W=n(1243);W.Z.defaults.baseURL="https://653fa39c9e8bd3be29e0f4f2.mockapi.io/api/v1";var q=(0,V.hg)("contacts/fetchContacts",function(){var t=(0,T.Z)(S().mark((function t(e,n){var r,a;return S().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.rejectWithValue,t.prev=1,t.next=4,W.Z.get("/contacts");case 4:return a=t.sent,t.abrupt("return",a.data);case 8:return t.prev=8,t.t0=t.catch(1),t.abrupt("return",r(t.t0.message));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e,n){return t.apply(this,arguments)}}()),A=((0,V.hg)("contacts/addContact",function(){var t=(0,T.Z)(S().mark((function t(e,n){var r,a,s,c;return S().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.name,a=e.phone,s=n.rejectWithValue,t.prev=2,t.next=5,W.Z.post("/contacts",{name:r,phone:a});case 5:return c=t.sent,t.abrupt("return",c.data);case 9:return t.prev=9,t.t0=t.catch(2),t.abrupt("return",s(t.t0.message));case 12:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(e,n){return t.apply(this,arguments)}}()),(0,V.hg)("contacts/deleteContact",function(){var t=(0,T.Z)(S().mark((function t(e,n){var r,a;return S().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.rejectWithValue,t.prev=1,t.next=4,W.Z.delete("/contacts/".concat(e));case 4:return a=t.sent,t.abrupt("return",a.data);case 8:return t.prev=8,t.t0=t.catch(1),t.abrupt("return",r(t.t0.message));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e,n){return t.apply(this,arguments)}}()),"ContactsPage_container__jIags"),E="ContactsPage_sectionContainer__7Wvpj",U="ContactsPage_title__TdWmn",G=function(){var t=(0,c.I0)();return(0,a.useEffect)((function(){t(q())}),[t]),(0,f.jsxs)("div",{className:A,children:[(0,f.jsxs)("div",{className:E,children:[(0,f.jsx)("h2",{className:U,children:"Add new contact"}),(0,f.jsx)(h,{})]}),(0,f.jsxs)("div",{className:E,children:[(0,f.jsx)("h2",{className:U,children:"Contacts list"}),(0,f.jsx)(I,{}),(0,f.jsx)(y,{})]})]})},K=G}}]);
//# sourceMappingURL=111.9da11e32.chunk.js.map