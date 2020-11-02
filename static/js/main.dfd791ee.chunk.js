(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{21:function(e,t,a){},22:function(e,t,a){},23:function(e,t,a){},24:function(e,t,a){},25:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a(1),s=a.n(n),c=a(13),i=a.n(c),d=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,45)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,s=t.getLCP,c=t.getTTFB;a(e),r(e),n(e),s(e),c(e)}))};var l=function(e){var t=e.children;return Object(r.jsx)("div",{className:"wrapper",children:t})};a(21);var o=function(){return Object(r.jsxs)("div",{className:"header",children:[Object(r.jsx)("h1",{children:"Employee Directory"}),Object(r.jsx)("p",{children:"Click on carrots to filter by heading or use the search box to narrow your results."})]})},j=a(3),b=a(15),h=(a(22),s.a.createContext({})),u=function(){var e=Object(n.useContext)(h);function t(e){var t=e.split("-"),a=t[0];return[t[1],t[2].split("T")[0],a].join("-")}return Object(r.jsx)("tbody",{children:void 0!==e.developerState.filteredUsers[0]&&void 0!==e.developerState.filteredUsers[0].name?e.developerState.filteredUsers.map((function(e){var a=e.login,n=e.name,s=e.picture,c=e.phone,i=e.email,d=e.dob;return Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{"data-th":"Image",className:"align-middle",children:Object(r.jsx)("img",{src:s.medium,alt:"profile image for "+n.first+" "+n.last,className:"img-responsive"})}),Object(r.jsxs)("td",{"data-th":"Name",className:"name-cell align-middle",children:[n.first," ",n.last]}),Object(r.jsx)("td",{"data-th":"Phone",className:"align-middle",children:Object(r.jsx)("a",{href:"tel:"+c,children:c})}),Object(r.jsx)("td",{"data-th":"Email",className:"align-middle",children:Object(r.jsx)("a",{href:"mailto:"+i,target:"__blank",children:i})}),Object(r.jsx)("td",{"data-th":"DOB",className:"align-middle",children:t(d.date)})]},a.uuid)})):Object(r.jsx)(r.Fragment,{})})},m=(a(23),function(){var e=Object(n.useContext)(h);return Object(r.jsx)("div",{className:"datatable mt-5",children:Object(r.jsxs)("table",{id:"table",className:"table table-striped table-hover table-condensed",children:[Object(r.jsx)("thead",{children:Object(r.jsx)("tr",{children:e.developerState.headings.map((function(t){var a=t.name,n=t.width;return Object(r.jsxs)("th",{className:"col",style:{width:n},onClick:function(){e.handleSort(a.toLowerCase())},children:[a,Object(r.jsx)("span",{className:"pointer"})]},a)}))})}),Object(r.jsx)(u,{})]})})}),f=(a(24),function(){var e=Object(n.useContext)(h);return Object(r.jsx)("div",{className:"searchbox",children:Object(r.jsx)("div",{className:"input-group",children:Object(r.jsx)("input",{className:"form-control mr-sm-2",type:"search",placeholder:"Search","aria-label":"Search",onChange:function(t){return e.handleSearchChange(t)}})})})}),O=(a(25),function(){return Object(r.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:[Object(r.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(r.jsx)("span",{className:"navbar-toggler-icon"})}),Object(r.jsx)("div",{className:"collapse navbar-collapse row",id:"navbarNav",children:Object(r.jsx)("div",{className:"search-area col-12",children:Object(r.jsx)(f,{})})})]})}),v=a(14),x=a.n(v),g=function(){return x.a.get("https://randomuser.me/api/?results=500&nat=us")},p=(a(43),function(){var e=Object(n.useState)({users:[],order:"descend",filteredUsers:[],headings:[{name:"image",width:"10%",order:"descend"},{name:"name",width:"15%",order:"descend"},{name:"phone",width:"15%",order:"descend"},{name:"email",width:"10%",order:"descend"},{name:"dob",width:"8%",order:"descend"}]}),t=Object(b.a)(e,2),a=t[0],s=t[1];return Object(n.useEffect)((function(){g().then((function(e){s(Object(j.a)(Object(j.a)({},a),{},{users:e.data.results,filteredUsers:e.data.results}))}))}),[]),Object(r.jsxs)(h.Provider,{value:{developerState:a,handleSearchChange:function(e){var t=e.target.value,r=a.users.filter((function(e){if(-1!==(e.name.first.toLowerCase()+" "+e.name.last.toLowerCase()).indexOf(t.toLowerCase()))return e}));s(Object(j.a)(Object(j.a)({},a),{},{filteredUsers:r}))},handleSort:function(e){var t=a.headings.filter((function(t){return t.name===e})).map((function(e){return e.order})).toString();t="descend"===t?"ascend":"descend";var r=a.filteredUsers.sort((function(a,r){return"ascend"===t?void 0===a[e]?1:void 0===r[e]?-1:"name"===e?a[e].first.localeCompare(r[e].first):"dob"===e?a[e].age-r[e].age:a[e].localeCompare(r[e]):void 0===a[e]?1:void 0===r[e]?-1:"name"===e?r[e].first.localeCompare(a[e].first):"dob"===e?r[e].age-a[e].age:r[e].localeCompare(a[e])})),n=a.headings.map((function(a){return a.order=a.name===e?t:a.order,a}));s(Object(j.a)(Object(j.a)({},a),{},{filteredUsers:r,headings:n}))}},children:[Object(r.jsx)(O,{}),Object(r.jsx)("div",{className:"data-area",children:a.filteredUsers.length>0?Object(r.jsx)(m,{}):Object(r.jsx)("div",{})})]})}),N=function(){return Object(r.jsx)("div",{children:Object(r.jsx)(p,{})})};var C=function(){return Object(r.jsxs)("div",{className:"App",children:[",",Object(r.jsx)("div",{children:Object(r.jsxs)(l,{children:[Object(r.jsx)(o,{}),Object(r.jsx)(N,{})]})})]})};i.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(C,{})}),document.getElementById("root")),d()}},[[44,1,2]]]);
//# sourceMappingURL=main.dfd791ee.chunk.js.map