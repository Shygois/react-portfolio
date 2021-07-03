(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{22:function(e,t){},28:function(e,t,i){},36:function(e,t,i){"use strict";i.r(t);var a=i(1),c=i.n(a),n=i(19),s=i.n(n),r=(i(28),i(10)),l=i(3),o=(i(29),i(0));var h=function(){return Object(o.jsxs)("header",{children:[Object(o.jsx)("h2",{children:Object(o.jsx)(r.b,{to:"/",children:"Shy's React Portfolio!"})}),Object(o.jsx)("nav",{children:Object(o.jsxs)("ul",{className:"flex-row",children:[Object(o.jsx)("li",{className:"mx-2",children:Object(o.jsx)(r.b,{to:"/about",children:"About me"})}),Object(o.jsx)("li",{className:"mx-2",children:Object(o.jsx)(r.b,{to:"/portfolio",children:"Portfolio"})}),Object(o.jsx)("li",{className:"mx-2",children:Object(o.jsx)(r.b,{to:"/resume",children:"Resume"})}),Object(o.jsx)("li",{className:"mx-2",children:Object(o.jsx)(r.b,{to:"/contact",children:"Contact Me"})})]})})]})},d=i.p+"static/media/Shayana_Gois_web.76c28dcc.jpg";var j=function(){return Object(o.jsxs)("section",{className:"my-5",children:[Object(o.jsx)("h1",{id:"about",children:"About Me"}),Object(o.jsx)("img",{src:d,className:"my-2",style:{width:"10%"},alt:"headshot"}),Object(o.jsx)("div",{children:"My name is Shayana Gois, I'm mostly known as Shy. I'm 27 years old and currently working in Digital Marketing for a financial services company. I joined this bootcamp to enhance my skills and learn more about website building, coding, and the many different softwares tech companies are using. Outside of work and school I love hanging out with my family and friends, traveling, eating, exercising, and photography."})]})},b=i(11),m=i(23),u=i.p+"static/media/wine-and-dine.3f02a062.jpg",p=i.p+"static/media/masterTicket.ab9c10dc.JPG",x=i.p+"static/media/techblog.dcd2e859.JPG",O=i.p+"static/media/notetaker.618441ab.JPG",g=i.p+"static/media/weatherdash.3f48cfb8.JPG",f=i.p+"static/media/WorkdayScheduler.2c4d62d5.JPG";var y=function(){var e=[{name:"Wine & Dine",description:"Wine and Dine is an application built to help users pair wine with food.",thumbnail:u,githubUrl:"https://github.com/UCB-Bootcamp/wine-and-dine",appUrl:"https://ucb-bootcamp.github.io/wine-and-dine/"},{name:"masterTicket",description:"masterTicket is the place to find music events for you.",thumbnail:p,githubUrl:"https://github.com/UCB-Bootcamp/masterTicket",appUrl:"https://masterticket.herokuapp.com/"},{name:"Tech Blog",description:"Tech blog site where developers can publish their own blog posts and comment on others.",thumbnail:x,githubUrl:"https://github.com/Shygois/tech-blog",appUrl:"https://desolate-chamber-64920.herokuapp.com/"},{name:"Note Taker",description:"App that allows users to add, and edit notes.",thumbnail:O,githubUrl:"https://github.com/Shygois/Note-taker",appUrl:"https://intense-garden-81829.herokuapp.com/"},{name:"Weather Dashboard",description:"For travelers who want to see the weather for multiple cities in order to plan a trip accordingly.",thumbnail:g,githubUrl:"https://github.com/Shygois/weather-dashboard",appUrl:"https://shygois.github.io/weather-dashboard/"},{name:"Work Day Scheduler",description:"Calendar app that allows users to create a daily schedule.",thumbnail:f,githubUrl:"https://github.com/Shygois/calendar-app",appUrl:"https://shygois.github.io/calendar-app/"}],t=function(e){var t=e.target.dataset.url;window.location.href=t};return Object(o.jsx)(o.Fragment,{children:e.map((function(e,i){return Object(o.jsxs)(b.a,{style:{width:"18rem"},children:[Object(o.jsx)("a",{href:e.appUrl,children:Object(o.jsx)(b.a.Img,{variant:"top",src:e.thumbnail})}),Object(o.jsxs)(b.a.Body,{children:[Object(o.jsx)(b.a.Title,{children:e.name}),Object(o.jsx)(b.a.Text,{children:e.description}),Object(o.jsx)(m.a,{variant:"primary","data-url":e.githubUrl,onClick:t,children:"Github Repo"})]})]},i)}))})};var v=function(){return Object(o.jsxs)("section",{className:"my-5",children:[Object(o.jsx)("div",{children:Object(o.jsxs)("h3",{children:["Download my ",Object(o.jsx)("a",{href:"",children:"resume"}),"."]})}),Object(o.jsxs)("div",{children:[Object(o.jsx)("h4",{children:"Front End:"}),Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:"HTML"}),Object(o.jsx)("li",{children:"CSS"}),Object(o.jsx)("li",{children:"JavaScript"}),Object(o.jsx)("li",{children:"Github"}),Object(o.jsx)("li",{children:"jQuery"}),Object(o.jsx)("li",{children:"Responsive Design"}),Object(o.jsx)("li",{children:"Bootstrap"}),Object(o.jsx)("li",{children:"React"})]}),Object(o.jsx)("h4",{children:"Back End:"}),Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:"APIs"}),Object(o.jsx)("li",{children:"MySQL, Sequelize"}),Object(o.jsx)("li",{children:"Node"}),Object(o.jsx)("li",{children:"Express"}),Object(o.jsx)("li",{children:"MongoDB, mongoose"})]})]})]})},w=i(21),k=i(17),S=i(22);var U=function(){var e=Object(a.useState)({name:"",email:"",message:""}),t=Object(k.a)(e,2),i=t[0],c=t[1],n=Object(a.useState)(""),s=Object(k.a)(n,2),r=s[0],l=s[1],h=i.name,d=i.email,j=i.message,b=function(e){if("email"===e.target.name){var t=Object(S.validateEmail)(e.target.value);l(t?"":"Your email is invalid.")}else e.target.value.length?l(""):l("".concat(e.target.name," is required."))};return Object(o.jsxs)("section",{children:[Object(o.jsx)("h1",{"data-testid":"h1tag",children:"Contact me"}),Object(o.jsxs)("form",{id:"contact-form",onSubmit:function(e){e.preventDefault(),r||(c(Object(w.a)({},e.target.name,e.target.value)),console.log("Form",i))},children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(o.jsx)("input",{type:"text",name:"name",defaultValue:h,onBlur:b})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"email",children:"Email address:"}),Object(o.jsx)("input",{type:"email",name:"email",defaultValue:d,onBlur:b})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"message",children:"Message:"}),Object(o.jsx)("textarea",{name:"message",rows:"5",defaultValue:j,onBlur:b})]}),r&&Object(o.jsx)("div",{children:Object(o.jsx)("p",{className:"error-text",children:r})}),Object(o.jsx)("button",{"data-testid":"button",type:"submit",children:"Submit"})]})]})};var B=function(){return Object(o.jsx)("div",{children:Object(o.jsx)("main",{children:Object(o.jsxs)(r.a,{children:[Object(o.jsx)(h,{}),Object(o.jsx)("div",{children:Object(o.jsxs)(l.c,{children:[Object(o.jsx)(l.a,{path:"/about",children:Object(o.jsx)(j,{})}),Object(o.jsx)(l.a,{path:"/portfolio",children:Object(o.jsx)(y,{})}),Object(o.jsx)(l.a,{path:"/resume",children:Object(o.jsx)(v,{})}),Object(o.jsx)(l.a,{path:"/contact",children:Object(o.jsx)(U,{})})]})})]})})})},N=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,37)).then((function(t){var i=t.getCLS,a=t.getFID,c=t.getFCP,n=t.getLCP,s=t.getTTFB;i(e),a(e),c(e),n(e),s(e)}))};s.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(B,{})}),document.getElementById("root")),N()}},[[36,1,2]]]);
//# sourceMappingURL=main.41770a79.chunk.js.map