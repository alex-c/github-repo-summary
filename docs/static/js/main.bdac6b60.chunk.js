(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{126:function(e,t,a){},127:function(e,t,a){"use strict";a.r(t);var n,r=a(1),l=a.n(r),o=a(13),c=a.n(o),i=a(21),u=a(34),s=a(37);!function(e){e.SET_USER="SET_USER",e.SET_REPOSITORIES="SET_REPOSITORIES",e.SET_LANGUAGE_STATISTICS="SET_LANGUAGE_STATISTICS",e.OTHER_ACTION="__any_other_action_type__"}(n||(n={}));var m={user:{login:"",name:"",bio:"",location:"",company:"",blog:"",email:"",avatarUrl:"",htmlUrl:"",publicRepos:0,publicGists:0,followers:0,following:0,reposUrl:""},repositories:[],language_statistics:null};var E=a(137),p=a(76),g=a(31),d=a(71),f=a(135),h=a(16),b=a(134),v=a(25),_=a(50),S=a(132),y=a(133),T=a(128),R=a(12),O=a(67),I=a(18),w=a(136),G=a(8);var A=function(e){var t=e.user;return l.a.createElement(T.a,{id:"user-summary",elevation:I.a.TWO},l.a.createElement("div",{id:"avatar"},l.a.createElement("img",{src:t.avatarUrl,alt:"Github user avatar"})),l.a.createElement("p",null,l.a.createElement("b",null,t.name)," /"," ",l.a.createElement("a",{href:t.htmlUrl,target:"_blank",rel:"noopener noreferrer"},t.login)),l.a.createElement("p",null,t.bio),l.a.createElement("p",null,null!=t.location?l.a.createElement("span",null,l.a.createElement(R.a,{icon:G.a.MAP_MARKER})," ",t.location," "):"",null!=t.company?l.a.createElement("span",null,l.a.createElement(R.a,{icon:G.a.OFFICE})," ",t.company," "):"",null!=t.email?l.a.createElement("span",null,l.a.createElement(R.a,{icon:G.a.ENVELOPE})," ",t.email):"",""!==t.blog?l.a.createElement("span",null,l.a.createElement(R.a,{icon:G.a.LINK})," ",l.a.createElement("a",{href:t.blog,target:"_blank",rel:"noopener noreferrer"},t.blog)):""),l.a.createElement("div",null,l.a.createElement(w.a,{icon:G.a.GIT_BRANCH},"Repositories: ",t.publicRepos),l.a.createElement(w.a,{icon:G.a.DOCUMENT},"Gists: ",t.publicGists),l.a.createElement(w.a,{icon:G.a.USER},"Followers: ",t.followers),l.a.createElement(w.a,{icon:G.a.USER},"Following: ",t.following)))},U=a(49),N=a(129);var k=function(e){var t=e.languageStatistics;return l.a.createElement(T.a,{id:"repositories-summary",elevation:I.a.TWO},l.a.createElement(N.a,{intent:h.a.PRIMARY,icon:G.a.PIE_CHART},t.language_count," languages used over ",t.repository_count," repositories."),l.a.createElement("div",{className:"flex-card-section"},l.a.createElement(U.b,{data:t.languages.map(function(e){return{angle:e.count,label:e.name}}).reverse(),showLabels:!0,colorDomain:[0,1,2],width:300,height:300}),l.a.createElement(U.a,{orientation:"horizontal",items:t.languages.map(function(e){return{title:"".concat(e.name,": ").concat(e.count)}}),width:300})))},C=a(130);var j=function(e){var t=e.repository;return l.a.createElement("div",{className:"repository"},l.a.createElement("div",{className:"repository-header"},l.a.createElement(R.a,{icon:t.fork?G.a.GIT_BRANCH:G.a.GIT_REPO}),l.a.createElement("a",{href:t.html_url,target:"_blank",rel:"noopener noreferrer"},t.name),null!==t.language?l.a.createElement("div",{className:"repository-tag"},l.a.createElement(R.a,{icon:G.a.CODE}),t.language):""),l.a.createElement("div",null,l.a.createElement("i",null,t.description)),l.a.createElement("div",{className:"repository-footer"},l.a.createElement(R.a,{icon:G.a.STAR}),t.stargazers_count,l.a.createElement(R.a,{icon:G.a.EYE_OPEN}),t.watchers_count,l.a.createElement(R.a,{icon:G.a.GIT_BRANCH}),t.forks))};var P=function(e){var t=e.repositories,a=Object(r.useState)("tiles"),n=Object(g.a)(a,2),o=n[0],c=n[1];return l.a.createElement("div",null,t.length>0?l.a.createElement(T.a,{id:"repository-list",elevation:I.a.TWO},l.a.createElement("div",{id:"repository-list-header"},l.a.createElement("div",{id:"repository-list-controls"},l.a.createElement(f.b,{text:"tiles"===o?"View table":"View tiles",onClick:function(){c("tiles"===o?"table":"tiles")},icon:"tiles"===o?G.a.TH:G.a.GRID_VIEW})),l.a.createElement("h2",null,"Repositories")),l.a.createElement("div",{id:"repository-list-content"},"tiles"===o?t.map(function(e,t){return l.a.createElement(j,{repository:e,key:t})}):l.a.createElement(C.a,{bordered:!0,striped:!0},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Repository"),l.a.createElement("th",null,"Description"),l.a.createElement("th",null,"Language"),l.a.createElement("th",null,"Stars"),l.a.createElement("th",null,"Watchers"),l.a.createElement("th",null,"Forked"))),l.a.createElement("tbody",null,t.map(function(e,t){return l.a.createElement("tr",{key:t},l.a.createElement("td",null,l.a.createElement("a",{href:e.html_url,target:"_blank",rel:"noopener noreferrer"},e.name)),l.a.createElement("td",null,e.description),l.a.createElement("td",null,e.language),l.a.createElement("td",null,e.stargazers_count),l.a.createElement("td",null,e.watchers_count),l.a.createElement("td",null,e.forks))}))))):l.a.createElement("span",null))},L=a(131);var D=function(){var e=Object(i.d)(function(e){return e.user},i.b),t=Object(i.d)(function(e){return e.repositories}),a=Object(i.d)(function(e){return e.language_statistics});return l.a.createElement("main",{className:"viewport"},""!==e.login?l.a.createElement("div",null,l.a.createElement(A,{user:e}),0!==t.length?l.a.createElement("div",null,l.a.createElement(k,{languageStatistics:a}),l.a.createElement(P,{repositories:t})):l.a.createElement(L.a,{icon:G.a.DISABLE,title:"No repositories.",description:"The user has no public repositories."})):l.a.createElement(L.a,{icon:G.a.DISABLE,title:"No user selected.",description:"Enter a Github user name in the search bar above!"}))},x=a(46),H=a.n(x),B=a(70),F=a(47),M=a.n(F),W={getUser:function(){var e=Object(B.a)(H.a.mark(function e(t){var a;return H.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M.a.get("https://api.github.com/users/".concat(t));case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),getUserRepositories:function(e,t){return M.a.get("".concat(e,"?page=").concat(t,"&per_page=100"))}};var V=function(){var e=Object(i.c)(),t=Object(r.useState)(""),a=Object(g.a)(t,2),o=a[0],c=a[1],u=Object(r.useState)(!1),s=Object(g.a)(u,2),m=s[0],E=s[1],I=function(){""!==o&&W.getUser(o).then(function(t){e({type:n.SET_USER,user:{login:t.login,name:t.name,bio:t.bio,location:t.location,company:t.company,blog:t.blog,email:t.email,avatarUrl:t.avatar_url,htmlUrl:t.html_url,publicRepos:t.public_repos,publicGists:t.public_gists,followers:t.followers,following:t.following,reposUrl:t.repos_url}});for(var a=t.public_repos,r=1,l=[];a>0;)l.push(W.getUserRepositories(t.repos_url,r)),a-=100,r++;Promise.all(l).then(function(e){var t=[],a=!0,n=!1,r=void 0;try{for(var l,o=e[Symbol.iterator]();!(a=(l=o.next()).done);a=!0){var c=l.value;t.push.apply(t,Object(p.a)(c.data))}}catch(i){n=!0,r=i}finally{try{a||null==o.return||o.return()}finally{if(n)throw r}}w(t)})}).catch(function(){E(!0),setInterval(function(){return E(!1)},2e3)})},w=function(t){var a=[],r=!0,l=!1,o=void 0;try{for(var c,i=function(){var e=c.value,t=a.find(function(t){return t.name===e.language});void 0===t?a.push({name:e.language,count:1}):t.count++},u=t[Symbol.iterator]();!(r=(c=u.next()).done);r=!0)i()}catch(m){l=!0,o=m}finally{try{r||null==u.return||u.return()}finally{if(l)throw o}}var s=a.find(function(e){return null===e.name});void 0!==s&&(s.name="Unknown"),a.sort(function(e,t){return t.count-e.count}),e({type:n.SET_LANGUAGE_STATISTICS,statistics:{languages:a,language_count:a.length,repository_count:t.length}}),e({type:n.SET_REPOSITORIES,repositories:t})},A=l.a.createElement("span",null,l.a.createElement(d.a,{content:"Search"},l.a.createElement(f.b,{icon:"search",intent:h.a.PRIMARY,minimal:!0,onClick:I})),l.a.createElement(d.a,{content:"Clear"},l.a.createElement(f.b,{icon:"cross",intent:h.a.WARNING,minimal:!0,onClick:function(){return c("")}})));return l.a.createElement("div",null,l.a.createElement(b.a,null,l.a.createElement("div",{className:"viewport"},l.a.createElement(b.a.Group,{align:v.a.LEFT},l.a.createElement(b.a.Heading,null,"Github Repo Summary")),l.a.createElement(b.a.Group,{align:v.a.RIGHT},l.a.createElement(_.a,{position:S.a.BOTTOM,isOpen:m},l.a.createElement(y.a,{placeholder:"Github user name",rightElement:A,value:o,onChange:function(e){return c(e.target.value)},onKeyPress:function(e){13===e.charCode&&I()}}),l.a.createElement(T.a,null,l.a.createElement(R.a,{icon:G.a.ERROR,intent:h.a.DANGER,style:{float:"left"}}),l.a.createElement("p",null,"User ",l.a.createElement("span",{style:{color:O.a.RED1}},o)," could not be found!"))),l.a.createElement(b.a.Divider,null),l.a.createElement(f.a,{icon:"git-repo",text:"Github",href:"https://github.com/alex-c/github-repo-summary",target:"_blank"})))),l.a.createElement(D,null))};a(126);E.a.onlyShowFocusOnTabs();var z=Object(u.b)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case n.SET_USER:return Object(s.a)({},e,{user:t.user});case n.SET_REPOSITORIES:return Object(s.a)({},e,{repositories:t.repositories});case n.SET_LANGUAGE_STATISTICS:return Object(s.a)({},e,{language_statistics:t.statistics});default:return e}});c.a.render(l.a.createElement(i.a,{store:z},l.a.createElement(V,null)),document.getElementById("root"))},80:function(e,t,a){e.exports=a(127)}},[[80,1,2]]]);
//# sourceMappingURL=main.bdac6b60.chunk.js.map