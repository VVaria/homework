(this.webpackJsonphomework=this.webpackJsonphomework||[]).push([[0],{27:function(e,t,a){e.exports=a(49)},32:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a(8),l=a(10),s=a(9),c=a(0),o=a.n(c),i=a(11),u=a.n(i),m=a(13),d=a(2),h=(a(32),a(16)),g=a(14),p=a.n(g),f=(a(36),a(38),a(50),{apiKey:"AIzaSyApgA1GXCf1yDh-g0zRVZXn8iw-TF0pzKQ",authDomain:"converter-28be3.firebaseapp.com",databaseURL:"https://converter-28be3.firebaseio.com",projectId:"converter-28be3",storageBucket:"converter-28be3.appspot.com",messagingSenderId:"804809298279",appId:"1:804809298279:web:729b5601d5de3b71cf1fc2"}),v=function(e){Object(l.a)(a,e);var t=Object(s.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).init=r.init.bind(Object(h.a)(r)),r.logout=r.logout.bind(Object(h.a)(r)),r}return Object(r.a)(a,[{key:"init",value:function(){p.a.initializeApp(f),a.auth=p.a.auth(),a.firestore=p.a.firestore(),a.storage=p.a.storage(),a.persistence=p.a.auth.Auth.Persistence}},{key:"logout",value:function(){a.auth.signOut().then((function(){window.location.assign("#"),window.location.reload()}))}}]),a}(c.Component),E=(a(42),"https://api.exchangeratesapi.io/latest?base="),y=["CAD","HKD","ISK","PHP","DKK","HUF","CZK","GBP","RON","SEK","IDR","INR","BRL","RUB","HRK","JPY","THB","CHF","EUR","MYR","BGN","TRY","CNY","NOK","NZD","ZAR","USD","MXN","SGD","AUD","ILS","KRW","PLN"],b=["\u041a\u0430\u043d\u0430\u0434\u0441\u043a\u0438\u0439 \u0434\u043e\u043b\u043b\u0430\u0440","\u0413\u043e\u043d\u043a\u043e\u043d\u0433\u0441\u043a\u0438\u0439 \u0434\u043e\u043b\u043b\u0430\u0440","\u0418\u0441\u043b\u0430\u043d\u0434\u0441\u043a\u0430\u044f \u043a\u0440\u043e\u043d\u0430","\u0424\u0438\u043b\u0438\u043f\u043f\u0438\u043d\u0441\u043a\u043e\u0435 \u043f\u0435\u0441\u043e","\u0414\u0430\u0442\u0441\u043a\u0430\u044f \u043a\u0440\u043e\u043d\u0430","\u0412\u0435\u043d\u0433\u0435\u0440\u0441\u043a\u0438\u0439 \u0444\u043e\u0440\u0438\u043d\u0442","\u0427\u0435\u0448\u0441\u043a\u0430\u044f \u043a\u0440\u043e\u043d\u0430","\u0424\u0443\u043d\u0442 \u0441\u0442\u0435\u0440\u043b\u0438\u043d\u0433\u043e\u0432","\u0420\u0443\u043c\u044b\u043d\u0441\u043a\u0438\u0439 \u043b\u0435\u0439","\u0428\u0432\u0435\u0434\u0441\u043a\u0430\u044f \u043a\u0440\u043e\u043d\u0430","\u0418\u043d\u0434\u043e\u043d\u0435\u0437\u0438\u0439\u0441\u043a\u0430\u044f \u0440\u0443\u043f\u0438\u044f","\u0418\u043d\u0434\u0438\u0439\u0441\u043a\u0430\u044f \u0440\u0443\u043f\u0438\u044f","\u0411\u0440\u0430\u0437\u0438\u043b\u044c\u0441\u043a\u0438\u0439 \u0440\u0435\u0430\u043b","\u0420\u043e\u0441\u0441\u0438\u0439\u0441\u043a\u0438\u0439 \u0440\u0443\u0431\u043b\u044c","\u0425\u043e\u0440\u0432\u0430\u0442\u0441\u043a\u0430\u044f \u043a\u0443\u043d\u0430","\u042f\u043f\u043e\u043d\u0441\u043a\u0430\u044f \u0438\u0435\u043d\u0430","\u0422\u0430\u0439\u0441\u043a\u0438\u0439 \u0431\u0430\u0442","\u0428\u0432\u0435\u0439\u0446\u0430\u0440\u0441\u043a\u0438\u0439 \u0444\u0440\u0430\u043d\u043a","\u0415\u0432\u0440\u043e","\u041c\u0430\u043b\u0430\u0439\u0437\u0438\u0439\u0441\u043a\u0438\u0439 \u0440\u0438\u043d\u0433\u0433\u0438\u0442","\u0411\u043e\u043b\u0433\u0430\u0440\u0441\u043a\u0438\u0439 \u043b\u0435\u0432","\u0422\u0443\u0440\u0435\u0446\u043a\u0430\u044f \u043b\u0438\u0440\u0430","\u041a\u0438\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u044e\u0430\u043d\u044c","\u041d\u043e\u0440\u0432\u0435\u0436\u0441\u043a\u0430\u044f \u043a\u0440\u043e\u043d\u0430","\u041d\u043e\u0432\u043e\u0437\u0435\u043b\u0430\u043d\u0434\u0441\u043a\u0438\u0439 \u0434\u043e\u043b\u043b\u0430\u0440","\u042e\u0436\u043d\u043e\u0430\u0444\u0440\u0438\u043a\u0430\u043d\u0441\u043a\u0438\u0439 \u0440\u044d\u043d\u0434","\u0414\u043e\u043b\u043b\u0430\u0440","\u041c\u0435\u043a\u0441\u0438\u043a\u0430\u043d\u0441\u043a\u043e\u0435 \u043f\u0435\u0441\u043e","\u0421\u0438\u043d\u0433\u0430\u043f\u0443\u0440\u0441\u043a\u0438\u0439 \u0434\u043e\u043b\u043b\u0430\u0440","\u0410\u0432\u0441\u0442\u0440\u0430\u043b\u0438\u0439\u0441\u043a\u0438\u0439 \u0434\u043e\u043b\u043b\u0430\u0440","\u0418\u0437\u0440\u0430\u0438\u043b\u044c\u0441\u043a\u0438\u0439 \u0448\u0435\u043a\u0435\u043b\u044c","\u042e\u0436\u043d\u043e\u043a\u043e\u0440\u0435\u0439\u0441\u043a\u0430\u044f \u0432\u043e\u043d\u0430","\u041f\u043e\u043b\u044c\u0441\u043a\u0438\u0439 \u0437\u043b\u043e\u0442\u044b\u0439"],I=function(e){Object(l.a)(a,e);var t=Object(s.a)(a);function a(){var e;return Object(n.a)(this,a),(e=t.call(this)).state={data:[],isLoading:!0,isLoggedIn:!1,FirstValue:100,SecondValue:0,FirstCurrency:"USD",SecondCurrency:"RUB"},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch(E+"RUB").then((function(e){return e.json()})).then((function(t){e.setState({data:t.rates,isLoading:!1})})),v.auth.onAuthStateChanged((function(t){t?e.setState({isLoggedIn:!0}):e.setState({isLoggedIn:!1})}))}},{key:"calculateExchange",value:function(){var e=document.getElementById("currency-exchange-value-1").value,t=document.getElementById("currency-exchange-1").value,a=document.getElementById("currency-exchange-2").value;this.setState({FirstCurrency:t,SecondCurrency:a},(function(){var n=this;fetch(E+t).then((function(e){return e.json()})).then((function(t){var r=t.rates[a]*e;n.setState({SecondValue:r.toFixed(2)})}))}))}},{key:"renderConverter",value:function(){for(var e=this,t=this.state.isLoggedIn,a=[],n=[],r=0;r<y.length;r++)a.push(o.a.createElement("option",{key:"converterCurrencies_"+y[r],value:y[r]},y[r]));return n.push(o.a.createElement("div",{key:"ban-overlay-div",className:"ban-overlay"},o.a.createElement("i",{key:"ban-logo-fas",id:"ban-logo",className:"fas fa-ban",style:{fontSize:"70px",color:"white"}}))),o.a.createElement("div",{className:"converterContainer"},o.a.createElement("div",{className:"converter"},t?null:n,o.a.createElement("div",{className:"converter-side"},o.a.createElement("div",{className:"converter-side-input"},o.a.createElement("input",{defaultValue:this.state.FirstValue,id:"currency-exchange-value-1"}),o.a.createElement("select",{defaultValue:this.state.FirstCurrency,id:"currency-exchange-1"},a))),o.a.createElement("i",{className:"fas fa-arrow-right"}),o.a.createElement("div",{className:"converter-side"},o.a.createElement("div",{className:"converter-side-input"},o.a.createElement("input",{readOnly:!0,value:this.state.SecondValue,id:"currency-exchange-value-2"}),o.a.createElement("select",{defaultValue:this.state.SecondCurrency,id:"currency-exchange-2"},a))),o.a.createElement("button",{onClick:function(t){return e.calculateExchange()}},"Convert")))}},{key:"render",value:function(){return this.state.isLoading?o.a.createElement("h1",null,"Loading..."):o.a.createElement(o.a.Fragment,null,this.renderConverter(),o.a.createElement("div",{className:"Table"},o.a.createElement("table",null,o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("th",{className:"TableHeader"},"\u041a\u043e\u0434 \u0432\u0430\u043b\u044e\u0442\u044b"),o.a.createElement("th",{className:"TableHeader"},"\u041f\u043e\u043b\u043d\u043e\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0432\u0430\u043b\u044e\u0442\u044b"),o.a.createElement("th",{className:"TableHeader"},"\u041a\u0443\u0440\u0441 \u0432\u0430\u043b\u044e\u0442\u044b \u043f\u043e \u043e\u0442\u043d\u043e\u0448\u0435\u043d\u0438\u044e \u043a \u0440\u0443\u0431\u043b\u044e")),this.getExchangeData()))))}},{key:"getExchangeData",value:function(){for(var e=[],t=this.state.data,a=0;a<y.length;a++){var n=y[a],r=b[a],l=t[y[a]];e.push(o.a.createElement("tr",null,o.a.createElement("th",null,n),o.a.createElement("th",null,r),o.a.createElement("th",null,l)))}return e}}]),a}(c.Component),N=(a(43),function(e){Object(l.a)(a,e);var t=Object(s.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"formBlockContainer"},o.a.createElement("div",{className:"formBlock"},o.a.createElement("div",{class:"title"},"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"),o.a.createElement("form",{class:"formApplication",onSubmit:function(t){t.preventDefault(),e.isValid()}},o.a.createElement("div",{class:"formName"},o.a.createElement("input",{class:"InputMain",id:"name",type:"text",required:!0,minLength:"2",maxLength:"30",placeholder:"\u0418\u0432\u0430\u043d"}),o.a.createElement("label",{class:"formNameLabel"},"\u0418\u041c\u042f",o.a.createElement("span",{class:"inputRequired"},"*"))),o.a.createElement("div",{class:"formSurname"},o.a.createElement("input",{class:"InputMain",id:"surname",type:"text",required:!0,minLength:"2",maxLength:"30",placeholder:"\u0418\u0432\u0430\u043d\u043e\u0432"}),o.a.createElement("label",{class:"formSurnameLabel"},"\u0424\u0410\u041c\u0418\u041b\u0418\u042f")),o.a.createElement("div",{class:"formEmail"},o.a.createElement("input",{class:"InputMain",id:"email",type:"email",required:!0,placeholder:"ivan21@mail.ru"}),o.a.createElement("label",{class:"formEmailLabel"},"EMAIL",o.a.createElement("span",{class:"inputRequired"},"*"))),o.a.createElement("div",{class:"formPassword"},o.a.createElement("input",{class:"InputMain",id:"password",type:"password"}),o.a.createElement("label",{class:"formPasswordLabel"},"\u041f\u0430\u0440\u043e\u043b\u044c \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043d\u0435 \u043c\u0435\u043d\u0435\u0435 6 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432",o.a.createElement("span",{class:"inputRequired"},"*"))),o.a.createElement("div",{class:"formPassword1"},o.a.createElement("input",{class:"InputMain",id:"password1",type:"password"}),o.a.createElement("label",{class:"formPassword1Label"},"\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c, \u043f\u0430\u0440\u043e\u043b\u0438 \u0434\u043e\u043b\u0436\u043d\u044b \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u0442\u044c",o.a.createElement("span",{class:"inputRequired"},"*"))),o.a.createElement("div",{class:"formPhoto"},o.a.createElement("label",{class:"formPhotoLabel"},"\u041f\u0420\u0418\u041a\u0420\u0415\u041f\u0418\u0422\u042c \u0424\u041e\u0422\u041e"),o.a.createElement("input",{class:"InputPhoto",id:"photo",type:"file",accept:"image/*"})),o.a.createElement("div",{class:"buttonPush"},o.a.createElement("button",{class:"button",type:"submit"},"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"))),o.a.createElement("div",{id:"statusSpan",style:{marginTop:"10px"}})))}},{key:"renderStatus",value:function(e,t){var a=document.getElementById("statusSpan"),n=o.a.createElement("span",{style:{color:t}},e);u.a.render(n,a)}},{key:"isValid",value:function(){var e=document.getElementById("name"),t=document.getElementById("surname"),a=document.getElementById("email"),n=document.getElementById("password"),r=document.getElementById("password1"),l=document.getElementById("photo"),s=!1,c=new RegExp("^[A-Z\u0410-\u042f]+$","i"),o=new RegExp("^([A-Z\u0410-\u042f]|[0-9]|.|-|_)+@([A-Z\u0410-\u042f]|[0-9]|.|-|_)+.([A-Z\u0410-\u042f]|[0-9]|.)+$","i");if(!c.test(e.value)||!c.test(t.value))return alert("\u0418\u043c\u044f \u0438 \u0444\u0430\u043c\u0438\u043b\u0438\u044f \u043c\u043e\u0433\u0443\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0431\u0443\u043a\u0432\u044b."),!1;if(!o.test(a.value))return alert("\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e \u0432\u0432\u0435\u0434\u0451\u043d e-mail."),!1;if(n.value.length<6)return alert("\u041f\u0430\u0440\u043e\u043b\u044c \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0431\u043e\u043b\u0435\u0435 6 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"),!1;if(n.value!==r.value)return alert("\u041f\u0430\u0440\u043e\u043b\u0438 \u043d\u0435 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u044e\u0442."),!1;if(0!==l.files.length){if(!(l.files[0].type.includes("image/")&&l.files[0].size<=10485760))return alert("\u0424\u0430\u0439\u043b \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0435\u0439 \u0438 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0438\u043c\u0435\u0442\u044c \u0440\u0430\u0437\u043c\u0435\u0440 \u0431\u043e\u043b\u0435\u0435 \u0447\u0435\u043c 10\u041c\u0431."),!1;s=!0}this.registration(s)}},{key:"uploadUserData",value:function(e,t){var a=this;v.firestore.collection("users").doc(e).set({name:t[0],surname:t[1],avatar:""!==t[2].value}).then((function(n){if(a.renderStatus("\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f \u0431\u044b\u043b\u0430 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0430","green"),""!==t[2].value){var r=v.storage.ref(),l={contentType:t[2].files[0].type};r.child(e+".jpg").put(t[2].files[0],l).then((function(e){window.location.assign("#")})).catch((function(e){a.renderStatus(e.message,"red")}))}})).catch((function(e){a.renderStatus("\u041e\u0448\u0438\u0431\u043a\u0430 \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0438 \u0434\u0430\u043d\u043d\u044b\u0445: "+e,"red")}))}},{key:"registration",value:function(e){var t=this,a=document.getElementById("name").value,n=document.getElementById("surname").value,r=document.getElementById("email").value,l=document.getElementById("password").value,s=[a,n,document.getElementById("photo")];v.auth.createUserWithEmailAndPassword(r,l).then((function(e){t.uploadUserData(v.auth.currentUser.uid,s)})).catch((function(e){t.renderStatus(e.message,"red")}))}}]),a}(c.Component)),S=(a(44),function(e){Object(l.a)(a,e);var t=Object(s.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"formBlockContainer"},o.a.createElement("div",{className:"formBlock"},o.a.createElement("form",{className:"formApplication",onSubmit:function(t){t.preventDefault(),e.login()}},o.a.createElement("div",{className:"formLogin"},o.a.createElement("input",{className:"InputMain",id:"login",type:"email",required:!0,placeholder:"ivan21@mail.ru"}),o.a.createElement("label",{className:"formLoginLabel"},"\u041b\u043e\u0433\u0438\u043d (\u043f\u043e\u0447\u0442\u0430)")),o.a.createElement("div",{className:"formPassword"},o.a.createElement("input",{className:"InputMain",id:"password",type:"password"}),o.a.createElement("label",{className:"formPasswordLabel"},"\u041f\u0430\u0440\u043e\u043b\u044c")),o.a.createElement("div",{className:"buttonPush"},o.a.createElement("button",{className:"button",type:"submit"},"\u0412\u043e\u0439\u0442\u0438"),o.a.createElement("label",{className:"formRegLabel"},o.a.createElement("small",{className:"textLog"},"\u041d\u0435\u0442 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430? ",o.a.createElement(m.b,{style:{color:"gray",textDecoration:"none"},to:"/registration"},"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0439\u0442\u0435\u0441\u044c.")))),o.a.createElement("span",{id:"statusSpan"}))))}},{key:"renderStatus",value:function(e,t){var a=document.getElementById("statusSpan"),n=o.a.createElement("span",{style:{color:t}},e);u.a.render(n,a)}},{key:"login",value:function(){var e=this,t=document.getElementById("login").value,a=document.getElementById("password").value;v.auth.signInWithEmailAndPassword(t,a).then((function(t){e.renderStatus("Login successful","green"),v.auth.setPersistence(v.persistence.SESSION).then((function(e){window.location.assign("#")}))})).catch((function(t){e.renderStatus(t.message,"red")}))}}]),a}(c.Component));v.prototype.init();var w=function(e){Object(l.a)(a,e);var t=Object(s.a)(a);function a(){var e;return Object(n.a)(this,a),(e=t.call(this)).state={isLoggedIn:!1,name:"",avatar:""},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;v.auth.onAuthStateChanged((function(t){t?(e.setState({isLoggedIn:!0}),e.getNamefromFirebase(t)):e.setState({isLoggedIn:!1})}))}},{key:"render",value:function(){return o.a.createElement(m.a,null,this.renderHeader(),o.a.createElement(d.a,{path:"/",component:I,exact:!0}),o.a.createElement(d.a,{path:"/auth",component:S}),o.a.createElement(d.a,{path:"/registration",component:N}))}},{key:"getNamefromFirebase",value:function(e){var t=this;v.firestore.collection("users").doc(e.uid).get().then((function(a){t.setState({name:a.data().name,avatar:a.data().avatar}),t.renderName(),t.getAvatarFromFirebase(e)})).catch((function(e){console.log("Firestore Error =>",e.message,"(If you just registered than it's \"okay\" that this error shows, because photo hasn't done uploading just yet and auth hook is already triggered.)")}))}},{key:"getAvatarFromFirebase",value:function(e){var t=this.state.avatar?e.uid:"default";v.storage.ref().child(t+".jpg").getDownloadURL().then((function(e){document.getElementById("user-avatar").src=e})).catch((function(e){console.log("download avatar =>",e.message)}))}},{key:"renderName",value:function(){var e=document.getElementById("user-name");u.a.render(this.state.name,e)}},{key:"renderLoggedIn",value:function(){return o.a.createElement("div",{className:"userInfo"},o.a.createElement("img",{alt:"",id:"user-avatar",height:"40",width:"40"}),o.a.createElement("span",{id:"user-name"}),o.a.createElement("button",{className:"btn-logout",onClick:v.prototype.logout.bind(this)},"\u0412\u044b\u0439\u0442\u0438"))}},{key:"renderLoggedOut",value:function(){return o.a.createElement(m.b,{to:"/auth"},o.a.createElement("button",{className:"btn-login"},"\u0412\u043e\u0439\u0442\u0438"))}},{key:"renderHeader",value:function(){var e=this.state.isLoggedIn;return o.a.createElement("div",{className:"headerContainer"},o.a.createElement("div",{className:"header"},o.a.createElement(m.b,{to:"/"},o.a.createElement("h1",null,"\u041a\u041e\u041d\u0412\u0415\u0420\u0422\u0415\u0420 \u0412\u0410\u041b\u042e\u0422")),e?this.renderLoggedIn():this.renderLoggedOut()))}}]),a}(c.Component);t.default=w;u.a.render(o.a.createElement(w,null),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.36f79639.chunk.js.map