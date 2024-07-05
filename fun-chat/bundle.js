(()=>{"use strict";var e={205:(e,t,s)=>{s.r(t)},146:(e,t,s)=>{s.r(t)},266:(e,t,s)=>{s.r(t)},338:(e,t,s)=>{s.r(t)},569:(e,t,s)=>{s.r(t)},333:(e,t,s)=>{s.r(t)},613:(e,t,s)=>{s.r(t)},454:(e,t,s)=>{s.r(t)},284:(e,t,s)=>{s.r(t)},204:(e,t,s)=>{s.r(t)},859:function(e,t,s){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=a(s(196)),o=a(s(397)),r=a(s(727)),i=a(s(928)),l=a(s(42)),u=a(s(94));t.default=class{constructor(){this.formData={name:"",password:""},this.viewLogin=new n.default,this.chat=new i.default,this.loader=new o.default,this.socket=new l.default,this.viewLogin.submitButton.addEventListener("click",(e=>{this.logIn(e)})),this.chat.exitBtn.addEventListener("click",(()=>{this.logOut()})),window.addEventListener("hashchange",(()=>{this.render()}));const e=u.default.getData("user");null!==e&&(this.socket.openSocket(e.name,e.password),this.socket.closeSocket(e.name,e.password))}saveFormData(e){this.formData=e}logIn(e){e.preventDefault();const t=this.viewLogin.getFormData();r.default.handleSubmit(e,t.nameInput,t.passwordInput)&&(this.viewLogin.form.remove(),this.loader.showLoader((()=>{this.saveFormData({name:t.nameInput.value,password:t.passwordInput.value}),this.socket.loginUser(t.nameInput.value,t.passwordInput.value),this.socket.errorLogin((e=>{e?(window.location.hash="#chat",this.chat.updateName(this.formData.name),this.viewLogin.closeForm()):(this.viewLogin.render(),window.location.hash="#login")}))})))}logOut(){const e=u.default.getData("user");null!==e&&(this.socket.exitChat(e.name,e.password),u.default.clearData()),this.socket.errorLogin((e=>{e?(window.location.hash="#login",this.chat.remove()):(this.chat.render(),window.location.hash="#chat")}))}render(){window.location.hash&&"#"!==window.location.hash||(window.location.hash="#login"),"#login"===window.location.hash||""===window.location.hash?(this.chat.remove(),u.default.clearData(),this.loader.showLoader((()=>this.viewLogin.render()))):"#about"===window.location.hash?(this.viewLogin.form.remove(),this.chat.remove()):"#chat"===window.location.hash&&(u.default.getData("user")?this.loader.showLoader((()=>this.chat.render())):window.location.hash="#login")}}},400:function(e,t,s){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=a(s(150));s(205);const o=a(s(397));t.default=class{constructor(){this.backButton=n.default.createElement({elementType:"button",text:"Exit",attributes:{class:"about-exit-btn"}});const e=n.default.createElement({elementType:"h2",text:"Fun Chat",attributes:{class:"about-title"}}),t=n.default.createElement({elementType:"p",text:"Welcome to Fun Chat - a place where you can chat, share opinions and have fun.",attributes:{class:"about-text"}}),s=n.default.createElement({elementType:"a",text:"Author: unnamed-193",attributes:{class:"about-link",href:"https://github.com/Unnamed-193",target:"_blank"}});this.container=n.default.createElement({elementType:"div",attributes:{class:"about box"},elements:[e,t,s,this.backButton]}),this.backButton.addEventListener("click",(()=>{this.container.remove(),window.history.back()}))}createBtnAbout(){const e=new o.default,t=n.default.createElement({elementType:"button",text:"App info",attributes:{class:"btn-form info-btn",type:"button"}});return t.addEventListener("click",(()=>{window.location.hash="#about",e.showLoader((()=>document.body.append(this.container)))})),t}}},353:function(e,t,s){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=a(s(150));s(146),t.default=class{constructor(){this.listUsers=n.default.createElement({elementType:"ul",attributes:{class:"chat-contacts-list box"}})}createChat(){const e=n.default.createElement({elementType:"div",attributes:{class:"chat-contacts"},elements:[this.listUsers]});return n.default.createElement({elementType:"section",attributes:{class:"chat"},elements:[e]})}}},605:function(e,t,s){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=a(s(150)),o=a(s(100));s(266),t.default=function(){const e=n.default.createElement({elementType:"img",attributes:{class:"footer-log-img",src:o.default}}),t=n.default.createElement({elementType:"a",attributes:{class:"footer-logo-link",href:"https://rs.school/",target:"_blank"},elements:[e]}),s=n.default.createElement({elementType:"a",text:"Author: unnamed-193",attributes:{class:"git about-link",href:"https://github.com/Unnamed-193",target:"_blank"}}),a=n.default.createElement({elementType:"span",text:"2024",attributes:{class:"footer-year"}});return n.default.createElement({elementType:"section",attributes:{class:"footer box"},elements:[t,s,a]})}},793:function(e,t,s){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=a(s(150)),o=a(s(94));s(338),t.default=function(e,t){const s=n.default.createElement({elementType:"span",text:"Fun chat 😎",attributes:{class:"header-text-app"}}),a=o.default.getData("user");let r;a&&(r=a.name);const i=n.default.createElement({elementType:"span",text:`User: ${r}`,attributes:{class:"header-text-name"}}),l=n.default.createElement({elementType:"div",attributes:{class:"header-btns"},elements:[e,t]}),u=n.default.createElement({elementType:"div",attributes:{class:"header-content box"},elements:[i,s,l]});return n.default.createElement({elementType:"section",attributes:{class:"header"},elements:[u]})}},928:function(e,t,s){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=a(s(150)),o=a(s(793)),r=a(s(605)),i=a(s(353)),l=a(s(400));s(569),t.default=class{constructor(){this.about=new l.default,this.chat=new i.default,this.exitBtn=n.default.createElement({elementType:"button",text:"Exit",attributes:{class:"btn-form",type:"button"}}),this.main=n.default.createElement({elementType:"main",attributes:{class:"main box"},elements:[(0,o.default)(this.about.createBtnAbout(),this.exitBtn),this.chat.createChat(),(0,r.default)()]})}render(){document.body.append(this.main)}remove(){this.main.remove()}updateName(e){const t=this.main.querySelector(".header-text-name");t&&(t.textContent=`User: ${e}`)}}},196:function(e,t,s){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=a(s(150)),o=s(182),r=a(s(588)),i=a(s(400));s(333),t.default=class{constructor(){this.about=new i.default;const e=n.default.createElement({elementType:"h2",text:"Register"});this.nameInput=n.default.createElement({elementType:"input",attributes:{type:"text",placeholder:"Enter your name",class:"input-form",name:"name",autocomplete:"off"}}),this.passwordInput=n.default.createElement({elementType:"input",attributes:{type:"password",placeholder:"Enter password",class:"input-form password-input",name:"password"}});const t=n.default.createElement({elementType:"a",attributes:{class:"password-control"}});t.addEventListener("click",(()=>{(0,r.default)(t)})),this.submitButton=n.default.createElement({elementType:"button",text:"Enter",attributes:{class:"btn-form",type:"submit"}});const s=n.default.createElement({elementType:"div",attributes:{class:"input-box"},elements:[this.nameInput]}),a=n.default.createElement({elementType:"div",attributes:{class:"input-box password-box"},elements:[this.passwordInput,t]});this.form=n.default.createElement({elementType:"form",attributes:{class:"box user-form"},elements:[e,s,a,this.submitButton,this.about.createBtnAbout()]})}render(){(0,o.validationInputLetters)([this.nameInput,this.passwordInput]),document.body.append(this.form)}closeForm(){this.form.remove(),this.nameInput.value="",this.passwordInput.value="",this.nameInput.classList.remove("input-valid"),this.passwordInput.classList.remove("input-valid")}getFormData(){const e=this.form.querySelector('input[name="name"]'),t=this.form.querySelector('input[name="password"]');if(!e||!t)throw new Error("Input elements not found");return{nameInput:e,passwordInput:t}}}},836:function(e,t,s){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=a(s(150));s(613),t.default=class{constructor(e){this.errorText=e;const t=n.default.createElement({elementType:"p",text:this.errorText,attributes:{class:"question-text"}}),s=n.default.createElement({elementType:"div",attributes:{class:"modal-content"},elements:[t]});this.modal=n.default.createElement({elementType:"div",attributes:{class:"modal"},elements:[s]}),document.body.append(this.modal)}displayModal(){this.modal.classList.add("open")}closeModal(){this.modal.classList.remove("open")}}},156:function(e,t,s){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),s(454),s(284);const n=a(s(859));window.addEventListener("DOMContentLoaded",(()=>{(new n.default).render()}))},42:function(e,t,s){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=a(s(836)),o="ws://localhost:4000";t.default=class{constructor(){this.userId=1,this.socket=new WebSocket(o)}errorLogin(e){this.socket.addEventListener("message",(t=>{if("ERROR"===JSON.parse(t.data).type){const s=JSON.parse(t.data).payload.error,a=new n.default(s);a.displayModal(),setTimeout((()=>{a.closeModal(),e(!1)}),1e3)}else e(!0)}))}loginUser(e,t){const s={id:this.userId.toString(),type:"USER_LOGIN",payload:{user:{login:`${e.toString()}`,password:`${t.toString()}`}}};this.socket.send(JSON.stringify(s)),this.userId+=1}exitChat(e,t){const s={id:this.userId.toString(),type:"USER_LOGOUT",payload:{user:{login:e,password:t}}};this.socket.send(JSON.stringify(s))}openSocket(e,t){this.socket.addEventListener("open",(()=>{""!==e&&""!==t&&this.loginUser(e,t),this.getAllUsers()}))}closeSocket(e,t){this.socket.addEventListener("close",(()=>{console.log("Connection to the server is lost. Trying to restore connection..."),this.socket=new WebSocket(o),this.tryToRestoreConnection(e,t)}))}tryToRestoreConnection(e,t){const s=new n.default("Trying to restore connection...");s.displayModal(),this.socket=new WebSocket(o);const a=()=>{this.openSocket(e,t)};this.socket.addEventListener("open",(()=>{a(),s.closeModal()})),this.socket.addEventListener("error",(()=>{s.closeModal(),new n.default("Failed to reconnect...").displayModal(),setTimeout(a,3e3)}))}getAllUsers(){if(this.socket.readyState===WebSocket.OPEN){const e={id:this.userId.toString(),type:"USER_ACTIVE",payload:null};this.socket.send(JSON.stringify(e));const t={id:this.userId.toString(),type:"USER_INACTIVE",payload:null};this.socket.send(JSON.stringify(t)),this.socket.addEventListener("message",(e=>{const t=JSON.parse(e.data);console.log(t)}))}}}},588:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){const t=document.querySelector(".password-input");return t&&("password"===t.getAttribute("type")?(e.classList.add("view"),t.setAttribute("type","text")):(e.classList.remove("view"),t.setAttribute("type","password"))),!1}},150:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=class{static createGenericElement({elementType:e,text:t,attributes:s,elements:a}){const n=document.createElement(e);return t&&(n.textContent=t),a&&a.forEach((e=>n.append(e))),s&&Object.entries(s).forEach((([e,t])=>{n.setAttribute(e,t)})),n}static createElement(e){return this.createGenericElement(e)}}},727:function(e,t,s){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=s(182),o=a(s(94));t.default=class{static handleSubmit(e,t,s){if(e.preventDefault(),!(0,n.validate)(t,3,"Name")||!(0,n.validate)(s,6,"Password"))return!1;const a={name:t.value,password:s.value};return o.default.saveData("user",a),!0}}},397:function(e,t,s){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),s(204);const n=a(s(150));t.default=class{constructor(){this.loaderElement=n.default.createElement({elementType:"div",attributes:{class:"lds-heart"},elements:[document.createElement("div")]})}toggleLoader(e){e?document.body.append(this.loaderElement):this.loaderElement.remove()}showLoader(e){return new Promise((t=>{this.toggleLoader(!0),setTimeout((()=>{e(),this.toggleLoader(!1),t()}),500)}))}}},94:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=class{static saveData(e,t){sessionStorage.setItem(e,JSON.stringify(t))}static getData(e){const t=sessionStorage.getItem(e);return t?JSON.parse(t):null}static clearData(){sessionStorage.clear()}}},182:(e,t)=>{function s(e,t,s){const a=e.parentNode?.querySelector(".error-message");function n(t){const s=document.createElement("div");s.textContent=t,s.classList.add("error-message"),e.parentElement?.append(s),e.classList.add("input-invalid"),e.classList.remove("input-valid")}if(a&&a.remove(),""===e.value.trim())return n(`${s} is required and use english`),!1;if(e.value.length<t)return e.classList.add("input-valid"),n(`${s}: minimum ${t} characters`),!1;if("password"===e.name){const t=e.value;if(!/[a-zA-Z]/.test(t)||!/[0-9]/.test(t))return n(`${s}: must contain at least one digit or letter`),!1}return e.classList.remove("input-invalid"),e.classList.add("input-valid"),!0}Object.defineProperty(t,"__esModule",{value:!0}),t.validationInputLetters=t.validate=void 0,t.validate=s,t.validationInputLetters=function(e){const t=/^[A-Za-z-]+$/,a=/^[A-Za-zd-]+$/;e.forEach((e=>{e.addEventListener("input",(n=>{const o=n.target;if(o){const n=o.value;if("name"===o.name)if(n.length>0){const e=n.charAt(0).toUpperCase(),t=n.slice(1).replace(/[^A-Za-z-]/g,"");o.value=e+t}else o.value="";if("name"===o.name){if(!n.match(t)){const e=n.replace(/[^A-Za-z-]/g,"");o.value=e}s(o,3,"Name")}else{if(!n.match(a)){const e=n.replace(/[^a-zA-Z0-9-]/g,"");o.value=e}const t=e.parentElement?.querySelector(".password-control");t instanceof HTMLAnchorElement&&!1===s(o,6,"Password")?t.style.top="36%":t instanceof HTMLAnchorElement&&!0===s(o,6,"Password")&&(t.style.top="50%")}}}))}))}},100:(e,t,s)=>{e.exports=s.p+"b974d4061ab84575ca51.svg"}},t={};function s(a){var n=t[a];if(void 0!==n)return n.exports;var o=t[a]={exports:{}};return e[a].call(o.exports,o,o.exports,s),o.exports}s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;s.g.importScripts&&(e=s.g.location+"");var t=s.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var a=t.getElementsByTagName("script");if(a.length)for(var n=a.length-1;n>-1&&(!e||!/^http(s?):/.test(e));)e=a[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),s.p=e})(),s(156)})();