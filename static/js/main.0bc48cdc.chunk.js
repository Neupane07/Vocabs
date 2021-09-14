(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{125:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(10),o=n.n(c),i=(n(96),n(19)),s=n(162),d=n(165),l=n(167),u=n(55),b=n(81),j=n.n(b),p=n(52),h=n.n(p),x=n(32),m=n(20),f=Object(m.b)("api/callBegan"),O=Object(m.b)("api/callSuccess"),v=Object(m.b)("api/callFailed"),y=Object(m.c)({name:"words",initialState:{list:[],loading:!1,lastfetch:null,searchItems:[]},reducers:{wordsRequested:function(e,t){e.loading=!0},wordsReceived:function(e,t){e.list=t.payload,e.searchItems=t.payload,e.loading=!1,e.lastfetch=Date.now()},wordsRequestFailed:function(e,t){e.loading=!1},wordAdded:function(e,t){e.list.push(t.payload),e.searchItems.push(t.payload)},wordsSearch:function(e,t){e.searchItems=e.list.filter((function(e){return e.key.includes(t.payload.toLowerCase().trim())}))}}}),g=y.actions,w=g.wordsRequested,k=g.wordsReceived,S=g.wordsRequestFailed,C=g.wordAdded,F=g.wordsSearch,T=y.reducer,A=n(4),N=Object(s.a)((function(e){return{root:{flexGrow:1},title:{flexGrow:1,fontFamily:"Kumbh Sans"},textField:{width:100}}}));function I(e){var t=e.searchText,n=e.setSearchText,r=Object(a.useState)(!1),c=Object(i.a)(r,2),o=c[0],s=c[1],b=N(),p=Object(x.b)();return Object(A.jsx)("div",{className:b.root,children:Object(A.jsx)(d.a,{position:"fixed",children:Object(A.jsxs)(l.a,{style:{backgroundColor:"#4f053b"},children:[o?"":Object(A.jsx)(u.a,{variant:"h6",className:b.title,children:"Vocabs"}),o?"":Object(A.jsx)(j.a,{onClick:function(){return s(!o)}}),o?Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)("input",{autoFocus:!0,type:"text",style:{color:"white",backgroundColor:"#4f053b",border:"none"},value:t,onChange:function(e){n(e.target.value),p(F(e.target.value))}}),Object(A.jsx)(h.a,{style:{position:"absolute",right:"25px"},onClick:function(){s(!o),n(""),p(F(""))}})]}):""]})})})}var R=n(27),B=n.n(R),E=n(44),q=n(169),D=n(172),L=n(174),W=n(173),P=n(168),G=n(175),J=n(82),K=n.n(J),H=n(177),U=n(128),V=n(171),z=n(170),M=n(176),Q=Object(s.a)((function(e){return{modal:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},addWordForm:{backgroundColor:e.palette.background.paper,border:"2px solid #000",padding:e.spacing(2,4,3)}}})),X=function(e){var t=e.showAddForm,n=e.handleSubmit,a=e.setShowAddForm,r=e.searchText,c=e.setSearchText,o=e.loading,i=(e.setLoading,Q());return Object(A.jsx)(A.Fragment,{children:Object(A.jsx)(H.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:i.modal,open:t,onClose:function(){return a(!1)},closeAfterTransition:!0,BackdropComponent:P.a,BackdropProps:{timeout:500},children:Object(A.jsx)(U.a,{in:t,children:Object(A.jsxs)("div",{className:i.addWordForm,children:[Object(A.jsx)(u.a,{variant:"h6",children:"Add To Dictionary"}),Object(A.jsxs)("form",{onSubmit:n,children:[Object(A.jsx)(M.a,{id:"standard-basic",label:"New Word",value:r,onChange:function(e){return c(e.target.value)}}),Object(A.jsx)(z.a,{onClick:function(){return a(!1)},children:"Cancel"}),Object(A.jsx)(z.a,{onClick:n,children:o?Object(A.jsx)(V.a,{color:"secondary"}):"Add"})]})]})})})})},Y=n(54),Z=n.n(Y),$=Object(s.a)((function(e){return{root:{width:"100%",maxWidth:"100%",maxHeight:"100%",marginTop:"50px",backgroundColor:e.palette.background.paper,overflow:"auto",fontFamily:"Kumbh Sans"},inline:{display:"inline"},modal:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,border:"2px solid #000",height:"104vh",width:"100vh",marginTop:"10vh",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)},fab:{position:"fixed",bottom:"20px",right:10,backgroundColor:"#4f053b"}}})),_=function(){var e,t,n,c,o,s,d,l,b,j,p=Object(x.b)(),m=$(),O=Object(a.useState)(!1),v=Object(i.a)(O,2),y=v[0],g=v[1],F=Object(a.useState)(!1),T=Object(i.a)(F,2),N=T[0],I=T[1],R=Object(a.useState)(""),J=Object(i.a)(R,2),V=J[0],z=J[1],M=Object(a.useState)(!1),Q=Object(i.a)(M,2),Y=Q[0],_=Q[1],ee=Object(a.useState)(0),te=Object(i.a)(ee,2),ne=te[0],ae=te[1],re=Object(x.c)((function(e){return e.entities.words.searchItems}));Object(a.useEffect)((function(){(function(){var e=Object(E.a)(B.a.mark((function e(){return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:p((function(e,t){return e(f({url:"",onStart:w.type,onSuccess:k.type,onError:S.type}))}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[p]);var ce=function(){var e=Object(E.a)(B.a.mark((function e(t){var n,a;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),V){e.next=3;break}return e.abrupt("return");case 3:return _(!0),e.next=6,Z.a.post("https://vocabs-dictionary.herokuapp.com/verifyword",{word:V});case 6:n=e.sent,a=n.data,p(C(a)),z(""),_(!1),I(!1);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(q.a,{className:m.root,children:re&&re.map((function(e,t){return Object(A.jsxs)(r.a.Fragment,{children:[Object(A.jsx)(D.a,{alignItems:"flex-start",onClick:function(){g(!0),ae(t)},children:Object(A.jsx)(W.a,{primary:e.key,secondary:Object(A.jsx)(r.a.Fragment,{children:Object(A.jsxs)(u.a,{component:"span",variant:"body2",className:m.inline,color:"textPrimary",children:["(",e.category,")",e.definition]})})})}),Object(A.jsx)(L.a,{variant:"fullWidth",component:"li"})]},e.key)}))}),Object(A.jsx)(G.a,{className:m.fab,color:"primary",children:Object(A.jsx)(K.a,{onClick:function(){return I(!0)},children:"Add word"})}),Object(A.jsx)(H.a,{className:m.modal,"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",open:y,onClose:function(){g(!1)},closeAfterTransition:!0,BackdropComponent:P.a,BackdropProps:{timeout:500},children:Object(A.jsx)(U.a,{in:y,children:Object(A.jsxs)("div",{className:m.paper,children:[Object(A.jsx)(h.a,{style:{marginLeft:"98%",marginTop:"4%"},onClick:function(){return g(!1)}}),Object(A.jsx)("h1",{id:"transition-modal-title",children:re&&(null===(e=re[ne])||void 0===e?void 0:e.key)}),Object(A.jsx)("p",{id:"transition-modal-description",style:{color:"#4c4545"},children:re&&(null===(t=re[ne])||void 0===t?void 0:t.category)}),Object(A.jsx)("p",{style:{color:"#4c4545"},children:re&&(null===(n=re[ne])||void 0===n?void 0:n.etymology)}),re&&(null===(c=re[ne])||void 0===c?void 0:c.definition),Object(A.jsx)("p",{children:(null===(o=re[ne])||void 0===o?void 0:o.example)&&Object(A.jsx)("li",{children:null===(s=re[ne])||void 0===s?void 0:s.example})}),Object(A.jsx)("p",{children:(null===(d=re[ne])||void 0===d?void 0:d.shortDef)&&(null===(l=re[ne])||void 0===l?void 0:l.shortDef)}),Object(A.jsx)("p",{children:(null===(b=re[ne])||void 0===b?void 0:b.subExample)&&Object(A.jsx)("li",{children:null===(j=re[ne])||void 0===j?void 0:j.subExample})})]})})}),Object(A.jsx)(X,{loading:Y,setLoading:_,showAddForm:N,handleSubmit:ce,setShowAddForm:I,searchText:V,setSearchText:z})]})},ee=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],r=t[1];return Object(A.jsxs)("div",{className:"App",children:[Object(A.jsx)(I,{searchText:n,setSearchText:r}),Object(A.jsx)(_,{searchText:n})]})},te=n(83),ne=n(13),ae=Object(ne.b)({words:T}),re=Object(ne.b)({entities:ae}),ce=function(e){var t=e.dispatch;return function(e){return function(){var n=Object(E.a)(B.a.mark((function n(a){var r,c,o,i,s,d,l,u;return B.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(a.type===f.type){n.next=2;break}return n.abrupt("return",e(a));case 2:return r=a.payload,c=r.url,o=r.method,i=r.data,s=r.onStart,d=r.onSuccess,l=r.onError,s&&t({type:s}),e(a),n.prev=5,n.next=8,Z.a.request({baseURL:"https://vocabs-dictionary.herokuapp.com/allwords",url:c,method:o,data:i});case 8:u=n.sent,t(O(u.data)),d&&t({type:d,payload:u.data}),n.next=17;break;case 13:n.prev=13,n.t0=n.catch(5),t(v(n.t0.message)),l&&t({type:l,payload:n.t0.message});case 17:case"end":return n.stop()}}),n,null,[[5,13]])})));return function(e){return n.apply(this,arguments)}}()}},oe=Object(m.a)({reducer:re,middleware:[].concat(Object(te.a)(Object(m.d)()),[ce])});o.a.render(Object(A.jsx)(x.a,{store:oe,children:Object(A.jsx)(ee,{})}),document.getElementById("root"))},96:function(e,t,n){}},[[125,1,2]]]);
//# sourceMappingURL=main.0bc48cdc.chunk.js.map