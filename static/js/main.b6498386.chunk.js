(this.webpackJsonpcolorpicker=this.webpackJsonpcolorpicker||[]).push([[0],{26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(0),r=n.n(a),i=n(18),o=n.n(i),s=n(7),l=(n(26),n(2)),j=(n(27),n(20)),u=n(9),b=(n(28),function(e){var t=e.value,n=e.onClick;return Object(c.jsx)("input",{value:t,className:"btn",onClick:n,type:"button"})}),h=(n(29),function(e){var t=e.onChange,n=e.value,a=e.min,r=e.max,i=e.step;return Object(c.jsx)("input",{type:"range",className:"slider",value:n,min:a,max:r,step:i,onChange:t})}),x=function(e){var t=e.style;return Object(c.jsx)("div",{style:t})},d=r.a.memo(x),p=(n(30),function(){var e=Object(a.useState)(255),t=Object(u.a)(e,2),n=t[0],r=t[1],i=Object(a.useState)(255),o=Object(u.a)(i,2),s=o[0],l=o[1],x=Object(a.useState)(255),p=Object(u.a)(x,2),O=p[0],v=p[1],m=Object(a.useState)(!0),f=Object(u.a)(m,2),k=f[0],C=f[1],y=Object(a.useState)([]),w=Object(u.a)(y,2),N=w[0],F=w[1];return Object(c.jsxs)("div",{className:"range-cont App-cont",children:[Object(c.jsxs)("div",{className:"range-left-cont",children:[k?Object(c.jsxs)(c.Fragment,{children:[" ",Object(c.jsx)(h,{onChange:function(e){r(e.target.value)},value:n,min:0,max:255,step:1}),Object(c.jsxs)("h3",{children:["Red: ",n]}),Object(c.jsx)(h,{onChange:function(e){l(e.target.value)},value:s,min:0,max:255,step:1}),Object(c.jsxs)("h3",{children:["Green: ",s]}),Object(c.jsx)(h,{onChange:function(e){v(e.target.value)},value:O,min:0,max:255,step:1}),Object(c.jsxs)("h3",{children:["Blue: ",O]})]}):null,Object(c.jsx)(b,{onClick:function(){var e;1===N.length||0===N.length||(e=N[N.length-2],r(e.rangevalred),l(e.rangevalgreen),v(e.rangevalblue)),C(!1)},value:"Cancel"}),Object(c.jsx)(b,{onClick:function(e){e.preventDefault(),F([].concat(Object(j.a)(N),[{rangevalred:n,rangevalgreen:s,rangevalblue:O}]))},value:"Submit"}),Object(c.jsx)(b,{onClick:function(){C(!k)},value:"show"})]}),Object(c.jsxs)("div",{className:"range-right-cont",children:[Object(c.jsxs)("h2",{children:["Your RGB color is (",n,", ",s,", ",O,") "]}),Object(c.jsx)(d,{style:g(n,s,O)})]})]})}),O=r.a.memo(p),g=function(e,t,n){return{width:"10em",height:"10em",backgroundColor:"rgba(".concat(e,", ").concat(t,", ").concat(n," )"),border:"1px solid rgba(23, 40, 53, 0.4)",borderRadius:"20px",boxShadow:"inset 1px 1px 1px rgba(23, 40, 53, 0.4), 0px 6px 3px 0px rgba(23, 40, 53, 0.4), 12px 12px 14px -10px rgba(23, 40, 53, 0.4)"}},v=(n(31),function(){var e=Object(l.f)();return Object(c.jsxs)("div",{className:"App-cont",children:[Object(c.jsx)("h1",{"data-text":"Color Picker",children:"Color Picker"}),Object(c.jsx)("p",{className:"Main-text",children:" Finding that perfect color is easier than you think. Use our color picker to discover beautiful colors and harmonies with RGB values. Use the color picker by clicking and dragging your cursor inside the picker area to highlight a color. Click the swatch to add it to your palette. After selecting a color, experiment with different harmonies by using the dropdown below the color picker."}),Object(c.jsx)(b,{value:"try it now",onClick:function(t){t.preventDefault(),e.push({pathname:"/color"})}})]})}),m=(n(37),function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("ul",{className:"menu-main",children:[Object(c.jsx)("li",{children:Object(c.jsx)(s.b,{to:"/",children:"Home"})}),Object(c.jsx)("li",{children:Object(c.jsx)(s.b,{to:"/color",children:"Color Picker"})})]})})});var f=function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(m,{}),Object(c.jsxs)(l.c,{children:[Object(c.jsx)(l.a,{exact:!0,path:"/",children:Object(c.jsx)("div",{className:"App",children:Object(c.jsx)(v,{})})}),Object(c.jsx)(l.a,{path:"/color",children:Object(c.jsx)("div",{className:"App",children:Object(c.jsx)(O,{})})})]})]})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,39)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))};o.a.render(Object(c.jsx)(s.a,{children:Object(c.jsx)(f,{})}),document.getElementById("root")),k()}},[[38,1,2]]]);
//# sourceMappingURL=main.b6498386.chunk.js.map