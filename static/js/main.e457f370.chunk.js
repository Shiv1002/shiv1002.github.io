(this.webpackJsonpphoto=this.webpackJsonpphoto||[]).push([[0],{207:function(e,t,a){},214:function(e,t){},216:function(e,t){},227:function(e,t){},229:function(e,t){},256:function(e,t){},258:function(e,t){},259:function(e,t){},264:function(e,t){},266:function(e,t){},272:function(e,t){},274:function(e,t){},293:function(e,t){},305:function(e,t){},308:function(e,t){},349:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(16),r=a.n(c),i=(a(207),a(62)),l=a.n(i),s=a(111),d=a(53),p=a(5),u=a(391),b=a(392),m=a(393),j=a(389),h=a(394),f=a(395),g=a(398),x=a(390),O=a(388),C=a(396),w=a(397),v=a(399),k=a(197),N=a(400),y=a(401),S=a(402),R=a(403),F=a(404),I=a(405),z=a(178),B=a.p+"static/media/bg.fa273077.jpg",W=a(195),T=a(68),E=a(194),L=a.n(E),D=a(193),G=a.n(D),P=a(9),U=(a(328),new z.Dropbox({accessToken:"sl.BRh8-iihlOjWEsfK5T426icMyKNoyvOY5h9ptYwtfcbKhbAhHrYNm8ZRDww81YInFHj4UVBrYjsPtuFEPJm1ymeh7UulsnvCQysINN-fGS9dznmJcMAapzkhsTcVETfB78PQNeNp5D0g"})),Y=Object(p.a)((function(e){return{root:{color:e.palette.getContrastText(T.a.white),backgroundColor:T.a.white,"&:hover":{backgroundColor:"#ffffff7a"}}}}))(x.a),H=a(329).default,J=Object(u.a)((function(e){return{grow:{flexGrow:1},clearButton:{width:"-webkit-fill-available",borderRadius:"15px",padding:"15px 22px",color:"#000000a6",fontSize:"20px",fontWeight:900},root:{maxWidth:345,flexGrow:1},media:{height:400},paper:{padding:e.spacing(2),margin:"auto",maxWidth:500},gridContainer:{justifycontent:"center",padding:"4em 1em 0 1em"},mainContainer:{backgroundImage:"url(".concat(B,")"),backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover",height:"93vh",marginTop:"8px"},imageCard:{margin:"auto",maxWidth:400,height:500,backgroundColor:"transparent",boxShadow:"0px 9px 70px 0px rgb(0 0 0 / 30%) !important",borderRadius:"15px"},imageCardEmpty:{height:"auto"},noImage:{margin:"auto",width:400,height:"400 !important"},input:{display:"none"},uploadIcon:{background:"white"},tableContainer:{backgroundColor:"transparent !important",boxShadow:"none !important"},table:{backgroundColor:"transparent !important"},tableHead:{backgroundColor:"transparent !important"},tableRow:{backgroundColor:"transparent !important"},tableCell:{fontSize:"22px",backgroundColor:"transparent !important",borderColor:"transparent !important",color:"#000000a6 !important",fontWeight:"bolder",padding:"1px 24px 1px 16px"},tableCell1:{fontSize:"14px",backgroundColor:"transparent !important",borderColor:"transparent !important",color:"#000000a6 !important",fontWeight:"bolder",padding:"1px 24px 1px 16px"},tableBody:{backgroundColor:"transparent !important"},text:{color:"white !important",textAlign:"center"},buttonGrid:{maxWidth:"416px",width:"100%"},detail:{backgroundColor:"white",display:"flex",justifycontent:"center",flexDirection:"column",alignItems:"center"},appbar:{background:"#e900ff",boxShadow:"none",color:"white"},loader:{color:"#be6a77 !important"}}})),K=function(){var e=J(),t=Object(n.useState)(),a=Object(d.a)(t,2),c=a[0],r=a[1],i=Object(n.useState)(),p=Object(d.a)(i,2),u=p[0],x=p[1],z=Object(n.useState)(),B=Object(d.a)(z,2),T=B[0],E=B[1],D=Object(n.useState)(!1),K=Object(d.a)(D,2),A=K[0],M=K[1],Q=Object(n.useState)(!1),V=Object(d.a)(Q,2),Z=V[0],_=V[1],q=0,X=function(){var e=Object(s.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!A){e.next=7;break}return(t=new FormData).append("file",c),e.next=5,H({method:"post",url:"https://pdc-server.herokuapp.com/predict",data:t}).catch((function(e){console.log(e)}));case 5:null!=(a=e.sent)&&200===a.status?(E(a.data),_(!1)):(alert("Check your Internet connection!!"),_(!0));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),$=function(){var e=Object(s.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U.filesListFolder({path:""}).then((function(e){console.log(e),U.filesGetThumbnail({path:e.result.entries[1].path_display,format:"jpeg",size:"w64h64"}).then((function(e){var t=document.createElement("img");r(e.result.fileBlob),E(void 0),M(!0),ee(e.result),console.log(e),t.src=window.URL.createObjectURL(e.result.fileBlob),document.body.appendChild(t),X()}))}));case 2:t=e.sent,console.log(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){if(c){var e=window.URL.createObjectURL(c);x(e)}else x(void 0)}),[c]),Object(n.useEffect)((function(){u&&(_(!0),X())}),[u]);var ee=function(e){if(!e||0===e.length)return r(void 0),M(!1),void E(void 0);console.log(e),r(e[0]),E(void 0),M(!0)};return T&&(q=(100*parseFloat(T.confidence)).toFixed(2)),Object(P.jsxs)(o.a.Fragment,{children:[Object(P.jsx)(b.a,{position:"static",className:e.appbar,children:Object(P.jsxs)(m.a,{children:[Object(P.jsx)(j.a,{className:e.title,variant:"h6",noWrap:!0,children:"Leaf Disease Classification"}),Object(P.jsx)("div",{className:e.grow})]})}),Object(P.jsx)(h.a,{maxWidth:!1,className:e.mainContainer,disableGutters:!0,children:Object(P.jsxs)(O.a,{className:e.gridContainer,container:!0,direction:"row",justifycontent:"center",alignItems:"center",spacing:2,children:[Object(P.jsx)(O.a,{item:!0,xs:12,children:Object(P.jsxs)(f.a,{className:"".concat(e.imageCard," ").concat(A?"":e.imageCardEmpty),children:[A&&Object(P.jsx)(C.a,{children:Object(P.jsx)(w.a,{className:e.media,image:u,component:"img",title:"Contemplative Reptile"})}),!A&&Object(P.jsxs)(g.a,{className:e.content,children:[Object(P.jsx)(W.a,{acceptedFiles:["image/*"],dropzoneText:"Drag and drop an image of a potato plant leaf to process",onChange:ee}),Object(P.jsx)(G.a,{appKey:"pcwevk0ugf0wpes",success:function(e){return console.log("Service called",e)},cancel:function(){return alert("Service canclled")},multiselect:!0,extensions:[".jpg"],children:Object(P.jsx)("div",{className:"dropbox-button",children:"Click me!"})}),Object(P.jsx)("input",{type:"button",value:"GetImage",onClick:$})]}),T&&Object(P.jsx)(g.a,{className:e.detail,children:Object(P.jsx)(v.a,{component:k.a,className:e.tableContainer,children:Object(P.jsxs)(N.a,{className:e.table,size:"small","aria-label":"simple table",children:[Object(P.jsx)(y.a,{className:e.tableHead,children:Object(P.jsxs)(S.a,{className:e.tableRow,children:[Object(P.jsx)(R.a,{className:e.tableCell1,children:"Label:"}),Object(P.jsx)(R.a,{align:"right",className:e.tableCell1,children:"Confidence:"})]})}),Object(P.jsx)(F.a,{className:e.tableBody,children:Object(P.jsxs)(S.a,{className:e.tableRow,children:[Object(P.jsx)(R.a,{component:"th",scope:"row",className:e.tableCell,children:T.class}),Object(P.jsxs)(R.a,{align:"right",className:e.tableCell,children:[q,"%"]})]})})]})})}),Z&&Object(P.jsxs)(g.a,{className:e.detail,children:[Object(P.jsx)(I.a,{color:"secondary",className:e.loader}),Object(P.jsx)(j.a,{className:e.title,variant:"h6",noWrap:!0,children:"Processing"})]})]})}),T&&Object(P.jsx)(O.a,{item:!0,className:e.buttonGrid,children:Object(P.jsx)(Y,{variant:"contained",className:e.clearButton,color:"primary",component:"span",size:"large",onClick:function(){E(null),M(!1),r(null),x(null)},startIcon:Object(P.jsx)(L.a,{fontSize:"large"}),children:"Clear"})})]})})]})};var A=function(){return Object(P.jsx)(K,{})},M=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,407)).then((function(t){var a=t.getCLS,n=t.getFID,o=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),o(e),c(e),r(e)}))};r.a.render(Object(P.jsx)(o.a.StrictMode,{children:Object(P.jsx)(A,{})}),document.getElementById("root")),M()}},[[349,1,2]]]);
//# sourceMappingURL=main.e457f370.chunk.js.map