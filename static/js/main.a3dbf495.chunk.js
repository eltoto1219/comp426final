(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{224:function(e,t,n){},225:function(e,t,n){},347:function(e,t){},389:function(e,t){},424:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(217),s=n.n(c),o=(n(224),n(225),n(92)),i=n(16),u=n(105),l=n(219),j=n(4),h=n.n(j),d=n(30),p=n(40),b=n(41),x=n(107),m=n(43),O=n(42),f=n(72),g=n.n(f),v=(n(73),n(63)),k=n(1),w=function(e){Object(m.a)(n,e);var t=Object(O.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){var e=this.props,t=e.message,n=e.email,a=t.author===n;return Object(k.jsx)(v.a.Item,{children:Object(k.jsxs)("div",{style:y.container(a),children:[t.body,Object(k.jsx)("div",{style:y.author(a),children:t.author})]})})}}]),n}(r.a.Component),y={container:function(e){return{maxWidth:"100%",borderRadius:12,padding:8,color:"white",fontSize:14,backgroundColor:e?"grey":"blue",float:e?"right":"left"}},author:function(e){return{flexDirection:"column",fontSize:8,color:"white"}},timestamp:{fontSize:8,color:"white",textAlign:"right",paddingTop:4}},C=w,S=n(26),T=n(91),A=n(56),E={url:{API_URL:"https://www.iwantadomainplz.com"}},L=n(64),U=function(e){Object(m.a)(n,e);var t=Object(O.a)(n);function n(e){var a;return Object(p.a)(this,n),(a=t.call(this,e)).profile=function(){var e=((a.props.location||{}).state||{}).email;a.componentWillUnmount(),a.props.history.replace("profile",{email:e,room:""})},a.logout=function(){var e=(a.props.location||{}).state||{};e.email,e.room;a.componentWillUnmount(),a.props.history.push("login")},a}return Object(b.a)(n,[{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){return((this.props.location||{}).state||{}).email?Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)("br",{}),Object(k.jsxs)(T.a,{children:[Object(k.jsx)(A.a,{xs:8,md:2,children:Object(k.jsx)(L.a,{variant:"link",onClick:this.logout,children:"Logout"})}),Object(k.jsx)(A.a,{xs:8,md:2,children:Object(k.jsx)(L.a,{variant:"link",onClick:this.profile,children:"Profile"})})]}),Object(k.jsx)("hr",{})]}):Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)("br",{}),Object(k.jsxs)(T.a,{children:[Object(k.jsx)(A.a,{xs:8,md:2,children:Object(k.jsx)(o.b,{to:"/login",children:"Login"})}),Object(k.jsx)(A.a,{xs:8,md:2,children:Object(k.jsx)(o.b,{to:"/profile",children:"Profile"})})]}),Object(k.jsx)("hr",{})]})}}]),n}(r.a.Component),M=n(155),R=function(e){Object(m.a)(n,e);var t=Object(O.a)(n);function n(e){var a;return Object(p.a)(this,n),(a=t.call(this,e)).componentDidMount=Object(d.a)(h.a.mark((function e(){var t,n,r,c,s,o,i,u,l;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=a.props.location,n=(t||{}).state,c=(r=n||{}).room,(s=r.email)&&c){e.next=6;break}return a.props.history.push("/"),e.abrupt("return");case 6:return o="",e.prev=7,e.next=10,a.getToken(s);case 10:o=e.sent,e.next=16;break;case 13:throw e.prev=13,e.t0=e.catch(7),new Error("cant get token");case 16:return e.next=18,M.Client.create(o);case 18:return i=e.sent,e.next=21,i.getSubscribedChannels();case 21:return e.sent,i.on("tokenAboutToExpire",Object(d.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.getToken(s);case 2:t=e.sent,i.updateToken(t);case 4:case"end":return e.stop()}}),e)})))),i.on("tokenExpired",Object(d.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.getToken(s);case 2:t=e.sent,i.updateToken(t);case 4:case"end":return e.stop()}}),e)})))),i.on("channelJoined",function(){var e=Object(d.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.joinChannel(t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.prev=25,e.next=28,i.getChannelByUniqueName(c);case 28:u=e.sent,a.joinChannel(u),e.next=44;break;case 32:return e.prev=32,e.t1=e.catch(25),e.prev=34,e.next=37,i.createChannel({uniqueName:c,friendlyName:c});case 37:l=e.sent,a.joinChannel(l),e.next=44;break;case 41:throw e.prev=41,e.t2=e.catch(34),new Error("cant create a channel");case 44:case"end":return e.stop()}}),e,null,[[7,13],[25,32],[34,41]])}))),a.getToken=function(){var e=Object(d.a)(h.a.mark((function e(t){var n,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("".concat(E.url.API_URL,"/token/").concat(t));case 2:return n=e.sent,a=n.data,e.abrupt("return",a.token);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.joinChannel=function(){var e=Object(d.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("joined"===t.channelState.status){e.next=5;break}return e.next=3,t.join();case 3:e.next=14;break;case 5:if("joined"!==t.channelState.status){e.next=13;break}return t.on("messageAdded",a.handleMessageAdded),e.next=9,t.getMessages();case 9:n=e.sent,a.setState({messages:n.items}),e.next=14;break;case 13:console.log(t.channelState.status);case 14:a.setState({channel:t,loading:!1});case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.handleMessageAdded=function(e){var t=a.state.messages;a.setState({messages:[].concat(Object(l.a)(t),[e])})},a.sendMessage=function(){var e=a.state,t=e.text,n=e.channel;t&&(a.setState({loading:!0}),n.sendMessage(String(t).trim()),a.setState({text:"",loading:!1}))},a.state={loading:!1,text:"",messages:[1],channel:null},a.componentDidMount=a.componentDidMount.bind(Object(x.a)(a)),a}return Object(b.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=(t.loading,t.text),a=t.messages,r=t.channel,c=(this.props.location||{}).state||{},s=c.email,o=c.room;return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(v.a,{children:Object(k.jsxs)(S.a,{children:[Object(k.jsx)(S.a.Header,{children:"Room: ".concat(o,", User: ").concat(s)}),Object(k.jsxs)(S.a.Body,{children:[Object(k.jsx)(v.a,{children:Object(k.jsx)(v.a,{children:a&&a.map((function(e){return Object(k.jsx)(C,{message:e,email:s},e.index)}))})}),Object(k.jsxs)(T.a,{children:[Object(k.jsx)(A.a,{xs:12,md:8,children:Object(k.jsx)("input",{required:!0,style:I.message,placeholder:"Enter message",variant:"outlined",rows:2,value:n,disabled:!r,onChange:function(t){return e.setState({text:t.target.value})}})}),Object(k.jsx)(A.a,{xs:6,md:4,children:Object(k.jsx)("input",{variant:"primary",value:"send",type:"button",style:I.message,onClick:this.sendMessage,disabled:!r})})]})]})]})}),Object(k.jsx)(U,Object(u.a)({},this.props))]})}}]),n}(r.a.Component),I={message:{display:"block",width:"100%",borderRadius:12,padding:-4}},F=R,P=n(108),B=n(155),D=function(e){Object(m.a)(n,e);var t=Object(O.a)(n);function n(e){var a;return Object(p.a)(this,n),(a=t.call(this,e)).componentDidMount=Object(d.a)(h.a.mark((function e(){var t,n,r,c,s,o,i;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=a.props.location,n=(t||{}).state,r=(n||{}).email,c="",s="","",o="",r){e.next=10;break}return a.props.history.push("login"),e.abrupt("return");case 10:return e.prev=10,e.next=13,a.getToken(r);case 13:c=e.sent,e.next=20;break;case 16:throw e.prev=16,e.t0=e.catch(10),window.location.reload(),new Error("cant get token");case 20:return e.next=22,B.Client.create(c);case 22:return(i=e.sent).on("tokenAboutToExpire",Object(d.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.getToken(r);case 2:t=e.sent,i.updateToken(t);case 4:case"end":return e.stop()}}),e)})))),i.on("tokenExpired",Object(d.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.getToken(r);case 2:t=e.sent,i.updateToken(t);case 4:case"end":return e.stop()}}),e)})))),e.prev=25,e.next=28,g.a.get("".concat(E.url.API_URL,"/random"));case 28:o=e.sent,e.next=34;break;case 31:e.prev=31,e.t1=e.catch(25),alert("cannot make room");case 34:return e.prev=34,e.next=37,a.getUserInfo(r);case 37:s=e.sent,a.setState({name:r,channels:s.channels,created:s.created,room:o.data}),e.next=44;break;case 41:e.prev=41,e.t2=e.catch(34),a.setState({name:r,room:o.data});case 44:case"end":return e.stop()}}),e,null,[[10,16],[25,31],[34,41]])}))),a.getToken=function(){var e=Object(d.a)(h.a.mark((function e(t){var n,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("".concat(E.url.API_URL,"/token/").concat(t));case 2:return n=e.sent,a=n.data,e.abrupt("return",a.token);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.getUserInfo=function(){var e=Object(d.a)(h.a.mark((function e(t){var n,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("".concat(E.url.API_URL,"/user/").concat(t));case 2:return n=e.sent,a=n.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.handleChange=function(e){a.setState({room:e.target.value})},a.createjoin=function(){var e=((a.props.location||{}).state||{}).email,t=a.state.room;e&&t&&a.props.history.push("chat",{email:e,room:t})},a.state={channels:"",created:"",room:""},a}return Object(b.a)(n,[{key:"render",value:function(){return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(P.a,{children:Object(k.jsxs)(S.a,{children:[Object(k.jsxs)(S.a.Header,{children:["You Are: ",this.state.name,Object(k.jsx)("br",{}),"You are in ",this.state.channels," channels",Object(k.jsx)("br",{}),"You were born at ",this.state.created]}),Object(k.jsx)(S.a.Body,{children:Object(k.jsxs)(S.a,{children:[Object(k.jsx)(S.a.Header,{children:"Join A Channel"}),Object(k.jsxs)(S.a.Body,{children:[Object(k.jsx)("input",{name:"room",required:!0,label:"Room",placeholder:"Enter room name",variant:"outlined",value:this.state.room,onChange:this.handleChange}),Object(k.jsx)("br",{}),Object(k.jsx)("br",{}),Object(k.jsx)(L.a,{variant:"primary",onClick:this.createjoin,children:"Create/Join"})]})]})})]})}),Object(k.jsx)(U,Object(u.a)({},this.props))]})}}]),n}(r.a.Component),q=n(106),J=function(e){Object(m.a)(n,e);var t=Object(O.a)(n);function n(e){var a;return Object(p.a)(this,n),(a=t.call(this,e)).login=function(){var e=a.state.email;""!==e&&a.props.history.push("profile",{email:e})},a.handleChange=function(e){a.setState(Object(q.a)({},e.target.name,e.target.value))},a.state={email:""},a}return Object(b.a)(n,[{key:"render",value:function(){var e=this.state.email;return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(P.a,{children:Object(k.jsxs)(S.a,{children:[Object(k.jsx)(S.a.Header,{children:"Login or Register Account"}),Object(k.jsxs)(S.a.Body,{children:[Object(k.jsx)("input",{name:"email",required:!0,label:"Email address",placeholder:"Enter email address",variant:"outlined",type:e,onChange:this.handleChange}),Object(k.jsx)("br",{}),Object(k.jsx)("br",{}),Object(k.jsx)(L.a,{style:N.button,className:"btn-primary",variant:"primary",onClick:this.login,children:"Login"})]})]})}),Object(k.jsx)(U,{})]})}}]),n}(r.a.Component),N={button:{display:"flex",marginRight:"auto",marginLeft:"auto"}},_=J;var z=function(){return Object(k.jsx)("div",{className:"App",children:Object(k.jsx)(o.a,{children:Object(k.jsxs)(i.d,{children:[Object(k.jsx)(i.b,{path:"/login",component:_}),Object(k.jsx)(i.b,{path:"/chat",component:F}),Object(k.jsx)(i.b,{path:"/profile",component:D}),Object(k.jsx)(i.b,{exact:!0,path:"/",children:Object(k.jsx)(i.a,{to:"/login"})})]})})})},H=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,425)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))};s.a.render(Object(k.jsx)(r.a.StrictMode,{children:Object(k.jsx)(z,{})}),document.getElementById("root")),H()}},[[424,1,2]]]);
//# sourceMappingURL=main.a3dbf495.chunk.js.map