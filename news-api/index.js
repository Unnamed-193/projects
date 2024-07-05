(()=>{"use strict";var n={96:(n,e,t)=>{t.d(e,{c:()=>a});var r=t(500),o=t.n(r),s=t(312),i=t.n(s)()(o());i.push([n.id,".news {\n  padding: 10px;\n}\n\n.news__item {\n    display: flex;\n    flex-direction: column;\n    margin: 1rem auto;\n    margin-bottom: 1.6%;\n    background: #fff;\n    color: #333;\n    line-height: 1.4;\n    font-family: Arial, sans-serif;\n    border-radius: 5px;\n    overflow: hidden;\n}\n\n.news__item:hover .news__meta-photo {\n    transform: scale(1.3) rotate(3deg);\n}\n\n.news__item .news__meta {\n    position: relative;\n    height: 200px;\n}\n\n.news__item .news__meta-photo {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-size: cover;\n    background-position: center;\n    transition: transform 0.2s;\n}\n\n.news__item .news__meta-details,\n.news__item .news__meta-details ul {\n    margin: auto;\n    padding: 0;\n    list-style: none;\n}\n\n.news__item .news__meta-details {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: -120%;\n    margin: auto;\n    transition: left 0.2s;\n    background: rgba(0, 0, 0, 0.6);\n    color: #fff;\n    padding: 10px;\n    width: 100%;\n    font-size: 0.9rem;\n}\n\n.news__item .news__description {\n    padding: 1rem;\n    background: #fff;\n    position: relative;\n    z-index: 1;\n}\n\n.news__item .news__description h2 {\n    line-height: 1;\n    margin: 0;\n    font-size: 1.7rem;\n}\n\n.news__item .news__description h3 {\n    font-size: 1rem;\n    font-weight: 300;\n    text-transform: uppercase;\n    color: #a2a2a2;\n    margin-top: 5px;\n}\n\n.news__item .news__description .news__read-more {\n    text-align: right;\n}\n\n.news__item .news__description .news__read-more a {\n    color: #5ad67d;\n    display: inline-block;\n    position: relative;\n    text-decoration: none;\n    font-weight: 800;\n}\n\n.news__item .news__description .news__read-more a:after {\n    content: '→';\n    margin-left: -10px;\n    opacity: 0;\n    vertical-align: middle;\n    transition: margin 0.3s, opacity 0.3s;\n}\n\n.news__item .news__description .news__read-more a:hover:after {\n    margin-left: 5px;\n    opacity: 1;\n}\n\n.news__item p {\n    margin: 1rem 0 0;\n}\n\n.news__item p:first-of-type {\n    margin-top: 1.25rem;\n    position: relative;\n}\n\n.news__item p:first-of-type:before {\n    content: '';\n    position: absolute;\n    height: 5px;\n    background: #5ad67d;\n    width: 35px;\n    top: -0.75rem;\n    border-radius: 3px;\n}\n\n.news__item:hover .news__meta-details {\n    left: 0%;\n}\n\n@media (min-width: 640px) {\n    .news__item {\n        flex-direction: row;\n        max-width: 700px;\n    }\n\n    .news__item .news__meta {\n        flex-basis: 40%;\n        height: auto;\n    }\n\n    .news__item .news__description {\n        flex-basis: 60%;\n    }\n\n    .news__item .news__description:before {\n        -webkit-transform: skewX(-3deg);\n        transform: skewX(-3deg);\n        content: '';\n        background: #fff;\n        width: 30px;\n        position: absolute;\n        left: -10px;\n        top: 0;\n        bottom: 0;\n        z-index: -1;\n    }\n\n    .news__item.alt {\n        flex-direction: row-reverse;\n    }\n\n    .news__item.alt .news__description:before {\n        left: inherit;\n        right: -10px;\n        -webkit-transform: skew(3deg);\n        transform: skew(3deg);\n    }\n\n    .news__item.alt .news__meta-details {\n        padding-left: 25px;\n    }\n}\n",""]);const a=i},376:(n,e,t)=>{t.d(e,{c:()=>a});var r=t(500),o=t.n(r),s=t(312),i=t.n(s)()(o());i.push([n.id,".sources {\n  font: 300 1em 'Fira Sans', sans-serif;\n  text-align: center;\n  height: 210px;\n  overflow-y: auto;\n}\n\n.source__item {\n  display: inline-block;\n  background: none;\n  border: 2px solid #30c5ff;\n  font: inherit;\n  line-height: 1;\n  margin: 0.5em;\n  padding: 1em 2em;\n  color: #70d6ff;\n  transition: 0.25s;\n  cursor: pointer;\n}\n\n.source__item:hover,\n.source__item:focus {\n  border-color: #3fcc59;\n  color: #69db7e;\n  box-shadow: 0 0.5em 0.5em -0.4em #3fcc59;\n  transform: translateY(-0.25em);\n}\n\n.source__item-name {\n  font-weight: 400;\n  white-space: nowrap;\n}",""]);const a=i},308:(n,e,t)=>{t.d(e,{c:()=>a});var r=t(500),o=t.n(r),s=t(312),i=t.n(s)()(o());i.push([n.id,"@media (min-width: 1024px) {\n  ::-webkit-scrollbar {\n    width: 1rem;\n  }\n\n  /* Track */\n  ::-webkit-scrollbar-track {\n    background: white;\n    border-radius: 10px;\n  }\n\n  /* Handle */\n  ::-webkit-scrollbar-thumb {\n    background: #a8098e;\n    border-radius: 10px;\n  }\n\n  /* Handle on hover */\n  ::-webkit-scrollbar-thumb:hover {\n    background: #e706c9;\n  }\n}\n\nhtml,\nbody {\n  height: 100%;\n}\n\nbody {\n  color: #fff;\n  background: #161616;\n  font-family: sans-serif;\n  margin: 0;\n  padding: 0;\n  min-height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\nheader {\n  padding: 10px 30px;\n}\n\nheader h1 {\n  font-size: 40px;\n  font-weight: 800;\n}\n\nmain {\n  padding-bottom: 100px;\n  flex: 1 1 auto;\n}\n\nfooter {\n  height: 100px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\nfooter .copyright {\n  font-size: 14px;\n  color: #333;\n  text-align: center;\n  margin-right: 20px;\n}\n\nfooter .copyright a {\n  color: #444;\n}\n\nfooter .copyright a:hover {\n  color: #555;\n}\n\nfooter .copyright:before {\n  content: '©';\n}\n\nfooter .create {\n  display: flex;\n  gap: 30px;\n  align-items: center;\n}\n\nfooter .rs-logo {\n  height: 90px;\n  width: 150px;\n}\n\nfooter .self-link {\n  text-decoration: none;\n  color: white;\n}\n\nfooter .self-link:hover {\n  text-decoration: underline;\n}\n\n@media (max-width: 576px) {\n  footer {\n    flex-direction: column;\n    margin-bottom: 100px;\n  }\n\n  footer .create {\n    flex-direction: column;\n    gap: 15px;\n  }\n\n  footer .rs-logo {\n    height: 70px;\n    width: 150px;\n  }\n}\n\nh1 {\n  text-align: center;\n}\n\n.alphabet {\n  font-size: 0;\n  margin-bottom: 10px;\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n.letter-btn {\n  font-size: 14px;\n  width: 30px;\n  height: 30px;\n  margin: 5px;\n  cursor: pointer;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  border: none;\n  transition: 0.5s;\n}\n.letter-btn:hover {\n  color: white;\n  background-color: #18aae4;\n}\n.letter-btn_active {\n  background-color: #18aae4;\n  color: #ffffff;\n}\n.letter-btn_active:hover {\n  box-shadow: 3px 3px 5px #ffffff;\n  color: #000000;\n}",""]);const a=i},312:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,s){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(i[c]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);r&&i[d[0]]||(void 0!==s&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=s),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},500:n=>{n.exports=function(n){return n[1]}},596:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var s={},i=[],a=0;a<n.length;a++){var c=n[a],l=r.base?c[0]+r.base:c[0],d=s[l]||0,u="".concat(l," ").concat(d);s[l]=d+1;var p=t(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var m=o(f,r);r.byIndex=a,e.splice(a,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var s=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<s.length;i++){var a=t(s[i]);e[a].references--}for(var c=r(n,o),l=0;l<s.length;l++){var d=t(s[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}s=c}}},176:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},808:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},120:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},520:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var s=t.sourceMap;s&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},936:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var s=e[r]={id:r,exports:{}};return n[r](s,s.exports,t),s.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!n;)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.nc=void 0,(()=>{var n,e;!function(n){n[n.Unauthorized=401]="Unauthorized",n[n.NotFound=404]="NotFound"}(n||(n={})),function(n){n.SOURCES="sources",n.EVERYTHING="everything"}(e||(e={}));const r=class{constructor(n,e){this.baseLink=n,this.options=e}getResp({endpoint:n,options:e={}},t=(()=>{console.error("No callback for GET response")})){this.load("GET",n,t,e)}errorHandler(e){if(!e.ok)throw e.status!==n.Unauthorized&&e.status!==n.NotFound||console.log(`Sorry, but there is ${e.status} error: ${e.statusText}`),Error(e.statusText);return e}makeUrl(n,e){const t=Object.assign(Object.assign({},this.options),n);let r=`${this.baseLink}${e}?`;return Object.keys(t).forEach((n=>{r+=`${n}=${t[n]}&`})),r.slice(0,-1)}load(n,e,t,r={}){fetch(this.makeUrl(r,e),{method:n}).then(this.errorHandler).then((n=>n.json())).then((n=>t(n))).catch((n=>console.error(n)))}},o=class extends r{constructor(){super("https://rss-news-api.onrender.com/",{apiKey:"2c89822dedde4877af47f3d71867d1d5"})}},s=class extends o{getSources(n){super.getResp({endpoint:e.SOURCES},n)}getNews(n,t){let r=n.target;const o=n.currentTarget;for(;r!==o;){if(r.classList.contains("source__item")){const n=r.getAttribute("data-source-id");return void(o.getAttribute("data-source")!==n&&(o.setAttribute("data-source",n),super.getResp({endpoint:e.EVERYTHING,options:{sources:n}},t)))}r=r.parentNode}}};var i=t(596),a=t.n(i),c=t(520),l=t.n(c),d=t(176),u=t.n(d),p=t(120),f=t.n(p),m=t(808),h=t.n(m),g=t(936),w=t.n(g),_=t(96),b={};b.styleTagTransform=w(),b.setAttributes=f(),b.insert=u().bind(null,"head"),b.domAPI=l(),b.insertStyleElement=h(),a()(_.c,b),_.c&&_.c.locals&&_.c.locals;const x=t.p+"9fe63b56d1af509f706b.jpg",v=class{draw(n){const e=n.length>=10?n.filter(((n,e)=>e<10)):n,t=document.createDocumentFragment(),r=document.querySelector("#newsItemTemp");e.forEach(((n,e)=>{const o=r.content.cloneNode(!0);e%2&&o.querySelector(".news__item").classList.add("alt");const s=o.querySelector(".news__meta-photo");s&&(s.style.backgroundImage=`url(${n.urlToImage||x})`),o.querySelector(".news__meta-author").textContent=n.author||n.source.name,o.querySelector(".news__meta-date").textContent=n.publishedAt.slice(0,10).split("-").reverse().join("-"),o.querySelector(".news__description-title").textContent=n.title,o.querySelector(".news__description-source").textContent=n.source.name,o.querySelector(".news__description-content").textContent=n.description,o.querySelector(".news__read-more a").setAttribute("href",n.url),t.append(o)})),document.querySelector(".news").innerHTML="",document.querySelector(".news").appendChild(t)}};var y=t(376),S={};S.styleTagTransform=w(),S.setAttributes=f(),S.insert=u().bind(null,"head"),S.domAPI=l(),S.insertStyleElement=h(),a()(y.c,S),y.c&&y.c.locals&&y.c.locals;const k=class{constructor(){this.data=[],this.chooseBtnHandler=n=>{const e=n.target.closest(".letter-btn");if(!e)return;const t=document.querySelector(".letter-btn_active");null==t||t.classList.remove("letter-btn_active"),e.classList.add("letter-btn_active"),this.clearSources(),this.draw(this.filterSources(e.textContent))}}initSources(n){this.data=n;const e=document.querySelector(".alphabet");e.addEventListener("click",this.chooseBtnHandler);const t=new Set;n.forEach((n=>{t.add(n.name[0])}));const r=Array.from(t);if(0===r.length)return;const o=document.createDocumentFragment(),s=document.createElement("button");s.className="letter-btn letter-btn_active",[s.textContent]=r,o.append(s);for(let n=1;n<r.length;n+=1){const e=document.createElement("button");e.className="letter-btn",e.textContent=r[n],o.append(e)}e.append(o),this.draw(this.filterSources(r[0]))}filterSources(n){return this.data.filter((e=>e.name.startsWith(n)))}clearSources(){const n=document.querySelector(".sources");n?n.innerHTML="":console.log("error: sources list in null")}draw(n){const e=document.createDocumentFragment(),t=document.querySelector("#sourceItemTemp");n.forEach((n=>{const r=t.content.cloneNode(!0);r.querySelector(".source__item-name").textContent=n.name,r.querySelector(".source__item").setAttribute("data-source-id",n.id),e.append(r)})),document.querySelector(".sources").append(e)}};class T{constructor(){this.news=new v,this.sources=new k}drawNews(n){const e=(null==n?void 0:n.articles)?null==n?void 0:n.articles:[];this.news.draw(e)}drawSources(n){const e=(null==n?void 0:n.sources)?null==n?void 0:n.sources:[];this.sources.initSources(e)}}var E=t(308),q={};q.styleTagTransform=w(),q.setAttributes=f(),q.insert=u().bind(null,"head"),q.domAPI=l(),q.insertStyleElement=h(),a()(E.c,q),E.c&&E.c.locals&&E.c.locals,(new class{constructor(){this.controller=new s,this.view=new T}start(){document.querySelector(".sources").addEventListener("click",(n=>this.controller.getNews(n,(n=>{n?this.view.drawNews(n):console.error("error")})))),this.controller.getSources((n=>{n?this.view.drawSources(n):console.error("error")}))}}).start()})()})();