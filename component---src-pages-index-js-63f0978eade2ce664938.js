(self.webpackChunkandrew_jang=self.webpackChunkandrew_jang||[]).push([[678],{7757:function(t,n,e){t.exports=e(5666)},9662:function(t,n,e){var r=e(7854),o=e(614),i=e(6330),u=r.TypeError;t.exports=function(t){if(o(t))return t;throw u(i(t)+" is not a function")}},9483:function(t,n,e){var r=e(7854),o=e(4411),i=e(6330),u=r.TypeError;t.exports=function(t){if(o(t))return t;throw u(i(t)+" is not a constructor")}},9670:function(t,n,e){var r=e(7854),o=e(111),i=r.String,u=r.TypeError;t.exports=function(t){if(o(t))return t;throw u(i(t)+" is not an object")}},1318:function(t,n,e){var r=e(5656),o=e(1400),i=e(6244),u=function(t){return function(n,e,u){var a,c=r(n),f=i(c),s=o(u,f);if(t&&e!=e){for(;f>s;)if((a=c[s++])!=a)return!0}else for(;f>s;s++)if((t||s in c)&&c[s]===e)return t||s||0;return!t&&-1}};t.exports={includes:u(!0),indexOf:u(!1)}},4326:function(t,n,e){var r=e(1702),o=r({}.toString),i=r("".slice);t.exports=function(t){return i(o(t),8,-1)}},648:function(t,n,e){var r=e(7854),o=e(1694),i=e(614),u=e(4326),a=e(5112)("toStringTag"),c=r.Object,f="Arguments"==u(function(){return arguments}());t.exports=o?u:function(t){var n,e,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,n){try{return t[n]}catch(e){}}(n=c(t),a))?e:f?u(n):"Object"==(r=u(n))&&i(n.callee)?"Arguments":r}},9920:function(t,n,e){var r=e(2597),o=e(3887),i=e(1236),u=e(3070);t.exports=function(t,n,e){for(var a=o(n),c=u.f,f=i.f,s=0;s<a.length;s++){var l=a[s];r(t,l)||e&&r(e,l)||c(t,l,f(n,l))}}},8880:function(t,n,e){var r=e(9781),o=e(3070),i=e(9114);t.exports=r?function(t,n,e){return o.f(t,n,i(1,e))}:function(t,n,e){return t[n]=e,t}},9114:function(t){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},9781:function(t,n,e){var r=e(7293);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:function(t,n,e){var r=e(7854),o=e(111),i=r.document,u=o(i)&&o(i.createElement);t.exports=function(t){return u?i.createElement(t):{}}},8113:function(t,n,e){var r=e(5005);t.exports=r("navigator","userAgent")||""},7392:function(t,n,e){var r,o,i=e(7854),u=e(8113),a=i.process,c=i.Deno,f=a&&a.versions||c&&c.version,s=f&&f.v8;s&&(o=(r=s.split("."))[0]>0&&r[0]<4?1:+(r[0]+r[1])),!o&&u&&(!(r=u.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=u.match(/Chrome\/(\d+)/))&&(o=+r[1]),t.exports=o},748:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},694:function(t,n,e){var r=e(7854),o=e(1236).f,i=e(8880),u=e(1320),a=e(3505),c=e(9920),f=e(4705);t.exports=function(t,n){var e,s,l,p,h,v=t.target,y=t.global,d=t.stat;if(e=y?r:d?r[v]||a(v,{}):(r[v]||{}).prototype)for(s in n){if(p=n[s],l=t.noTargetGet?(h=o(e,s))&&h.value:e[s],!f(y?s:v+(d?".":"#")+s,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;c(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),u(e,s,p,t)}}},7293:function(t){t.exports=function(t){try{return!!t()}catch(n){return!0}}},4374:function(t,n,e){var r=e(7293);t.exports=!r((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},6916:function(t,n,e){var r=e(4374),o=Function.prototype.call;t.exports=r?o.bind(o):function(){return o.apply(o,arguments)}},6530:function(t,n,e){var r=e(9781),o=e(2597),i=Function.prototype,u=r&&Object.getOwnPropertyDescriptor,a=o(i,"name"),c=a&&"something"===function(){}.name,f=a&&(!r||r&&u(i,"name").configurable);t.exports={EXISTS:a,PROPER:c,CONFIGURABLE:f}},1702:function(t,n,e){var r=e(4374),o=Function.prototype,i=o.bind,u=o.call,a=r&&i.bind(u,u);t.exports=r?function(t){return t&&a(t)}:function(t){return t&&function(){return u.apply(t,arguments)}}},5005:function(t,n,e){var r=e(7854),o=e(614),i=function(t){return o(t)?t:void 0};t.exports=function(t,n){return arguments.length<2?i(r[t]):r[t]&&r[t][n]}},8173:function(t,n,e){var r=e(9662);t.exports=function(t,n){var e=t[n];return null==e?void 0:r(e)}},7854:function(t,n,e){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof e.g&&e.g)||function(){return this}()||Function("return this")()},2597:function(t,n,e){var r=e(1702),o=e(7908),i=r({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,n){return i(o(t),n)}},3501:function(t){t.exports={}},4664:function(t,n,e){var r=e(9781),o=e(7293),i=e(317);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},8361:function(t,n,e){var r=e(7854),o=e(1702),i=e(7293),u=e(4326),a=r.Object,c=o("".split);t.exports=i((function(){return!a("z").propertyIsEnumerable(0)}))?function(t){return"String"==u(t)?c(t,""):a(t)}:a},2788:function(t,n,e){var r=e(1702),o=e(614),i=e(5465),u=r(Function.toString);o(i.inspectSource)||(i.inspectSource=function(t){return u(t)}),t.exports=i.inspectSource},9909:function(t,n,e){var r,o,i,u=e(8536),a=e(7854),c=e(1702),f=e(111),s=e(8880),l=e(2597),p=e(5465),h=e(6200),v=e(3501),y="Object already initialized",d=a.TypeError,m=a.WeakMap;if(u||p.state){var g=p.state||(p.state=new m),x=c(g.get),b=c(g.has),w=c(g.set);r=function(t,n){if(b(g,t))throw new d(y);return n.facade=t,w(g,t,n),n},o=function(t){return x(g,t)||{}},i=function(t){return b(g,t)}}else{var j=h("state");v[j]=!0,r=function(t,n){if(l(t,j))throw new d(y);return n.facade=t,s(t,j,n),n},o=function(t){return l(t,j)?t[j]:{}},i=function(t){return l(t,j)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(n){var e;if(!f(n)||(e=o(n)).type!==t)throw d("Incompatible receiver, "+t+" required");return e}}}},614:function(t){t.exports=function(t){return"function"==typeof t}},4411:function(t,n,e){var r=e(1702),o=e(7293),i=e(614),u=e(648),a=e(5005),c=e(2788),f=function(){},s=[],l=a("Reflect","construct"),p=/^\s*(?:class|function)\b/,h=r(p.exec),v=!p.exec(f),y=function(t){if(!i(t))return!1;try{return l(f,s,t),!0}catch(n){return!1}},d=function(t){if(!i(t))return!1;switch(u(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return v||!!h(p,c(t))}catch(n){return!0}};d.sham=!0,t.exports=!l||o((function(){var t;return y(y.call)||!y(Object)||!y((function(){t=!0}))||t}))?d:y},4705:function(t,n,e){var r=e(7293),o=e(614),i=/#|\.prototype\./,u=function(t,n){var e=c[a(t)];return e==s||e!=f&&(o(n)?r(n):!!n)},a=u.normalize=function(t){return String(t).replace(i,".").toLowerCase()},c=u.data={},f=u.NATIVE="N",s=u.POLYFILL="P";t.exports=u},111:function(t,n,e){var r=e(614);t.exports=function(t){return"object"==typeof t?null!==t:r(t)}},1913:function(t){t.exports=!1},2190:function(t,n,e){var r=e(7854),o=e(5005),i=e(614),u=e(7976),a=e(3307),c=r.Object;t.exports=a?function(t){return"symbol"==typeof t}:function(t){var n=o("Symbol");return i(n)&&u(n.prototype,c(t))}},6244:function(t,n,e){var r=e(7466);t.exports=function(t){return r(t.length)}},3366:function(t,n,e){var r=e(7854);t.exports=r.Promise},133:function(t,n,e){var r=e(7392),o=e(7293);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},8536:function(t,n,e){var r=e(7854),o=e(614),i=e(2788),u=r.WeakMap;t.exports=o(u)&&/native code/.test(i(u))},8523:function(t,n,e){"use strict";var r=e(9662),o=function(t){var n,e;this.promise=new t((function(t,r){if(void 0!==n||void 0!==e)throw TypeError("Bad Promise constructor");n=t,e=r})),this.resolve=r(n),this.reject=r(e)};t.exports.f=function(t){return new o(t)}},3070:function(t,n,e){var r=e(7854),o=e(9781),i=e(4664),u=e(3353),a=e(9670),c=e(4948),f=r.TypeError,s=Object.defineProperty,l=Object.getOwnPropertyDescriptor,p="enumerable",h="configurable",v="writable";n.f=o?u?function(t,n,e){if(a(t),n=c(n),a(e),"function"==typeof t&&"prototype"===n&&"value"in e&&v in e&&!e.writable){var r=l(t,n);r&&r.writable&&(t[n]=e.value,e={configurable:h in e?e.configurable:r.configurable,enumerable:p in e?e.enumerable:r.enumerable,writable:!1})}return s(t,n,e)}:s:function(t,n,e){if(a(t),n=c(n),a(e),i)try{return s(t,n,e)}catch(r){}if("get"in e||"set"in e)throw f("Accessors not supported");return"value"in e&&(t[n]=e.value),t}},1236:function(t,n,e){var r=e(9781),o=e(6916),i=e(5296),u=e(9114),a=e(5656),c=e(4948),f=e(2597),s=e(4664),l=Object.getOwnPropertyDescriptor;n.f=r?l:function(t,n){if(t=a(t),n=c(n),s)try{return l(t,n)}catch(e){}if(f(t,n))return u(!o(i.f,t,n),t[n])}},8006:function(t,n,e){var r=e(6324),o=e(748).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},5181:function(t,n){n.f=Object.getOwnPropertySymbols},7976:function(t,n,e){var r=e(1702);t.exports=r({}.isPrototypeOf)},6324:function(t,n,e){var r=e(1702),o=e(2597),i=e(5656),u=e(1318).indexOf,a=e(3501),c=r([].push);t.exports=function(t,n){var e,r=i(t),f=0,s=[];for(e in r)!o(a,e)&&o(r,e)&&c(s,e);for(;n.length>f;)o(r,e=n[f++])&&(~u(s,e)||c(s,e));return s}},5296:function(t,n){"use strict";var e={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,o=r&&!e.call({1:2},1);n.f=o?function(t){var n=r(this,t);return!!n&&n.enumerable}:e},2140:function(t,n,e){var r=e(7854),o=e(6916),i=e(614),u=e(111),a=r.TypeError;t.exports=function(t,n){var e,r;if("string"===n&&i(e=t.toString)&&!u(r=o(e,t)))return r;if(i(e=t.valueOf)&&!u(r=o(e,t)))return r;if("string"!==n&&i(e=t.toString)&&!u(r=o(e,t)))return r;throw a("Can't convert object to primitive value")}},3887:function(t,n,e){var r=e(5005),o=e(1702),i=e(8006),u=e(5181),a=e(9670),c=o([].concat);t.exports=r("Reflect","ownKeys")||function(t){var n=i.f(a(t)),e=u.f;return e?c(n,e(t)):n}},9478:function(t,n,e){var r=e(9670),o=e(111),i=e(8523);t.exports=function(t,n){if(r(t),o(n)&&n.constructor===t)return n;var e=i.f(t);return(0,e.resolve)(n),e.promise}},1320:function(t,n,e){var r=e(7854),o=e(614),i=e(2597),u=e(8880),a=e(3505),c=e(2788),f=e(9909),s=e(6530).CONFIGURABLE,l=f.get,p=f.enforce,h=String(String).split("String");(t.exports=function(t,n,e,c){var f,l=!!c&&!!c.unsafe,v=!!c&&!!c.enumerable,y=!!c&&!!c.noTargetGet,d=c&&void 0!==c.name?c.name:n;o(e)&&("Symbol("===String(d).slice(0,7)&&(d="["+String(d).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!i(e,"name")||s&&e.name!==d)&&u(e,"name",d),(f=p(e)).source||(f.source=h.join("string"==typeof d?d:""))),t!==r?(l?!y&&t[n]&&(v=!0):delete t[n],v?t[n]=e:u(t,n,e)):v?t[n]=e:a(n,e)})(Function.prototype,"toString",(function(){return o(this)&&l(this).source||c(this)}))},4488:function(t,n,e){var r=e(7854).TypeError;t.exports=function(t){if(null==t)throw r("Can't call method on "+t);return t}},3505:function(t,n,e){var r=e(7854),o=Object.defineProperty;t.exports=function(t,n){try{o(r,t,{value:n,configurable:!0,writable:!0})}catch(e){r[t]=n}return n}},6200:function(t,n,e){var r=e(2309),o=e(9711),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},5465:function(t,n,e){var r=e(7854),o=e(3505),i="__core-js_shared__",u=r[i]||o(i,{});t.exports=u},2309:function(t,n,e){var r=e(1913),o=e(5465);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.21.1",mode:r?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.21.1/LICENSE",source:"https://github.com/zloirock/core-js"})},6707:function(t,n,e){var r=e(9670),o=e(9483),i=e(5112)("species");t.exports=function(t,n){var e,u=r(t).constructor;return void 0===u||null==(e=r(u)[i])?n:o(e)}},1400:function(t,n,e){var r=e(9303),o=Math.max,i=Math.min;t.exports=function(t,n){var e=r(t);return e<0?o(e+n,0):i(e,n)}},5656:function(t,n,e){var r=e(8361),o=e(4488);t.exports=function(t){return r(o(t))}},9303:function(t){var n=Math.ceil,e=Math.floor;t.exports=function(t){var r=+t;return r!=r||0===r?0:(r>0?e:n)(r)}},7466:function(t,n,e){var r=e(9303),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},7908:function(t,n,e){var r=e(7854),o=e(4488),i=r.Object;t.exports=function(t){return i(o(t))}},7593:function(t,n,e){var r=e(7854),o=e(6916),i=e(111),u=e(2190),a=e(8173),c=e(2140),f=e(5112),s=r.TypeError,l=f("toPrimitive");t.exports=function(t,n){if(!i(t)||u(t))return t;var e,r=a(t,l);if(r){if(void 0===n&&(n="default"),e=o(r,t,n),!i(e)||u(e))return e;throw s("Can't convert object to primitive value")}return void 0===n&&(n="number"),c(t,n)}},4948:function(t,n,e){var r=e(7593),o=e(2190);t.exports=function(t){var n=r(t,"string");return o(n)?n:n+""}},1694:function(t,n,e){var r={};r[e(5112)("toStringTag")]="z",t.exports="[object z]"===String(r)},6330:function(t,n,e){var r=e(7854).String;t.exports=function(t){try{return r(t)}catch(n){return"Object"}}},9711:function(t,n,e){var r=e(1702),o=0,i=Math.random(),u=r(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+u(++o+i,36)}},3307:function(t,n,e){var r=e(133);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(t,n,e){var r=e(9781),o=e(7293);t.exports=r&&o((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},5112:function(t,n,e){var r=e(7854),o=e(2309),i=e(2597),u=e(9711),a=e(133),c=e(3307),f=o("wks"),s=r.Symbol,l=s&&s.for,p=c?s:s&&s.withoutSetter||u;t.exports=function(t){if(!i(f,t)||!a&&"string"!=typeof f[t]){var n="Symbol."+t;a&&i(s,t)?f[t]=s[t]:f[t]=c&&l?l(n):p(n)}return f[t]}},7727:function(t,n,e){"use strict";var r=e(694),o=e(1913),i=e(3366),u=e(7293),a=e(5005),c=e(614),f=e(6707),s=e(9478),l=e(1320);if(r({target:"Promise",proto:!0,real:!0,forced:!!i&&u((function(){i.prototype.finally.call({then:function(){}},(function(){}))}))},{finally:function(t){var n=f(this,a("Promise")),e=c(t);return this.then(e?function(e){return s(n,t()).then((function(){return e}))}:t,e?function(e){return s(n,t()).then((function(){throw e}))}:t)}}),!o&&c(i)){var p=a("Promise").prototype.finally;i.prototype.finally!==p&&l(i.prototype,"finally",p,{unsafe:!0})}},5749:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return w}});var r=e(7294),o=e(2109),i=e(2452),u=e.n(i),a=e(9436),c=e.n(a),f=e(1823),s=e.n(f),l=e(1607),p=e.n(l),h=e(8393),v=e.n(h),y=e(1897),d=e.n(y),m=function(t){var n=t.height,e=t.width,o=(0,r.useRef)(null),i=(0,r.useState)({height:n,width:e}),u=i[0],a=(i[1],new b(u.width,u.height));return(0,r.useEffect)((function(){a.renderer.domElement.classList.add("earth-canvas"),o.current.append(a.renderer.domElement),a.animate()}),[]),r.createElement("div",{className:"earth-backdrop",ref:o})},g=new o.jyz({vertexShader:u(),fragmentShader:c(),uniforms:{globeTexture:{value:(new o.dpR).load("./static/8k_earth_daymap.jpeg")},nightTexture:{value:(new o.dpR).load("./static/8k_earth_nightmap.jpeg")},uTime:{type:"f",value:0}}}),x=new o.jyz({vertexShader:v(),fragmentShader:d(),blending:o.WMw,side:o.Wl3,uniforms:{cloudTexture:{value:(new o.dpR).load("./static/2k_earth_clouds.jpeg")},uTime:{type:"f",value:0}}}),b=function(){function t(t,n){var e=this;this.animate=function(){requestAnimationFrame(e.animate),e.renderer.render(e.scene,e.camera),e.sphere.rotation.y+=.001,e.clouds.rotation.y+=.001,e.group.rotation.y=.5*e.mouse.x;var t=(Date.now()-e.uStartTime)/1e3;g.uniforms.uTime.value=t,x.uniforms.uTime.value=t,g.needsUpdate=!0,x.needsUpdate=!0},this.width=t,this.height=n,this.scene=new o.xsS,this.camera=new o.cPb(75,t/n,.1,1e3),this.camera.position.z=10,this.renderer=new o.CP7({antialias:!0,alpha:!0}),this.renderer.setClearColor(0,0),this.renderer.setPixelRatio(window.devicePixelRatio),this.updateSize(t,n),this.uStartTime=Date.now(),this.sphere=new o.Kj0(new o.xo$(5,50,50),g),this.clouds=new o.Kj0(new o.xo$(5,50,50),x),this.atmosphere=new o.Kj0(new o.xo$(5,50,50),new o.jyz({vertexShader:s(),fragmentShader:p(),blending:o.WMw,side:o._Li,transparent:!0})),this.atmosphere.scale.set(1.2,1.2,1.2),this.scene.add(this.atmosphere),this.scene.add(this.sphere),this.scene.add(this.clouds),this.mouse={x:0,y:0,rawDX:0,rawDY:0},this.group=new o.ZAu,this.group.add(this.sphere),this.group.add(this.clouds),this.scene.add(this.group),this.initEventListener()}var n=t.prototype;return n.initEventListener=function(){var t=this;window.addEventListener("mousemove",(function(n){1===n.buttons&&(t.mouse.x+=(n.clientX-t.mouse.rawDX)/window.innerWidth*2,t.mouse.y=(n.clientY-t.mouse.rawDY)/window.innerHeight*2),t.mouse.rawDX=n.clientX,t.mouse.rawDY=n.clientY}))},n.updateSize=function(t,n){this.width=t,this.height=n,this.camera.aspect=t/n,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,n)},t}(),w=function(){return r.createElement("main",null,r.createElement(m,{height:1500,width:1500}))}},5666:function(t){var n=function(t){"use strict";var n,e=Object.prototype,r=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",u=o.asyncIterator||"@@asyncIterator",a=o.toStringTag||"@@toStringTag";function c(t,n,e){return Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{c({},"")}catch(k){c=function(t,n,e){return t[n]=e}}function f(t,n,e,r){var o=n&&n.prototype instanceof d?n:d,i=Object.create(o.prototype),u=new L(r||[]);return i._invoke=function(t,n,e){var r=l;return function(o,i){if(r===h)throw new Error("Generator is already running");if(r===v){if("throw"===o)throw i;return N()}for(e.method=o,e.arg=i;;){var u=e.delegate;if(u){var a=E(u,e);if(a){if(a===y)continue;return a}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(r===l)throw r=v,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);r=h;var c=s(t,n,e);if("normal"===c.type){if(r=e.done?v:p,c.arg===y)continue;return{value:c.arg,done:e.done}}"throw"===c.type&&(r=v,e.method="throw",e.arg=c.arg)}}}(t,e,u),i}function s(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(k){return{type:"throw",arg:k}}}t.wrap=f;var l="suspendedStart",p="suspendedYield",h="executing",v="completed",y={};function d(){}function m(){}function g(){}var x={};c(x,i,(function(){return this}));var b=Object.getPrototypeOf,w=b&&b(b(_([])));w&&w!==e&&r.call(w,i)&&(x=w);var j=g.prototype=d.prototype=Object.create(x);function O(t){["next","throw","return"].forEach((function(n){c(t,n,(function(t){return this._invoke(n,t)}))}))}function S(t,n){function e(o,i,u,a){var c=s(t[o],t,i);if("throw"!==c.type){var f=c.arg,l=f.value;return l&&"object"==typeof l&&r.call(l,"__await")?n.resolve(l.__await).then((function(t){e("next",t,u,a)}),(function(t){e("throw",t,u,a)})):n.resolve(l).then((function(t){f.value=t,u(f)}),(function(t){return e("throw",t,u,a)}))}a(c.arg)}var o;this._invoke=function(t,r){function i(){return new n((function(n,o){e(t,r,n,o)}))}return o=o?o.then(i,i):i()}}function E(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,E(t,e),"throw"===e.method))return y;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=s(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,y;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,y):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,y)}function P(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function T(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function _(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,u=function e(){for(;++o<t.length;)if(r.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=n,e.done=!0,e};return u.next=u}}return{next:N}}function N(){return{value:n,done:!0}}return m.prototype=g,c(j,"constructor",g),c(g,"constructor",m),m.displayName=c(g,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===m||"GeneratorFunction"===(n.displayName||n.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,c(t,a,"GeneratorFunction")),t.prototype=Object.create(j),t},t.awrap=function(t){return{__await:t}},O(S.prototype),c(S.prototype,u,(function(){return this})),t.AsyncIterator=S,t.async=function(n,e,r,o,i){void 0===i&&(i=Promise);var u=new S(f(n,e,r,o),i);return t.isGeneratorFunction(e)?u:u.next().then((function(t){return t.done?t.value:u.next()}))},O(j),c(j,a,"Generator"),c(j,i,(function(){return this})),c(j,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var n=[];for(var e in t)n.push(e);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},t.values=_,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(T),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(r,o){return a.type="throw",a.arg=t,e.next=r,o&&(e.method="next",e.arg=n),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var u=this.tryEntries[i],a=u.completion;if("root"===u.tryLoc)return o("end");if(u.tryLoc<=this.prev){var c=r.call(u,"catchLoc"),f=r.call(u,"finallyLoc");if(c&&f){if(this.prev<u.catchLoc)return o(u.catchLoc,!0);if(this.prev<u.finallyLoc)return o(u.finallyLoc)}else if(c){if(this.prev<u.catchLoc)return o(u.catchLoc,!0)}else{if(!f)throw new Error("try statement without catch or finally");if(this.prev<u.finallyLoc)return o(u.finallyLoc)}}}},abrupt:function(t,n){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=n&&n<=i.finallyLoc&&(i=null);var u=i?i.completion:{};return u.type=t,u.arg=n,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(u)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),y},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),T(e),y}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var o=r.arg;T(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:_(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),y}},t}(t.exports);try{regeneratorRuntime=n}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},1607:function(t){t.exports="varying vec3 vertexNormal;\n\nvoid main() {\n  float intensity = pow(0.75 -\n      dot(vertexNormal, vec3(0.0, 0.0, 1.0 )),\n      2.0);\n\n  gl_FragColor =\n    vec4(0.3, 0.6, 1, 1.0) * intensity;\n}\n"},1823:function(t){t.exports="varying vec3 vertexNormal;\n\nvoid main() {\n  vertexNormal = normalize(normalMatrix * normal);\n  gl_Position = projectionMatrix *\n      modelViewMatrix * vec4(position, 1);\n}\n"},1897:function(t){t.exports="uniform sampler2D cloudTexture;\nuniform float uTime;\n\nvarying vec2 vertexUV;\nvarying vec3 vertexNormal;\n\nvoid main() {\n  float daylight = ((0.5 * cos(uTime / 2.0)) + 1.01) / 2.0;\n\n  float intensity = 1.03 -\n      dot(vertexNormal, vec3(0.0, 0.0, 1.0 ));\n  vec3 atmosphere =\n      vec3(0.3, 0.6, 1.0) *\n      pow(intensity, 1.5);\n\n  gl_FragColor =\n      vec4((daylight * texture2D(cloudTexture, vertexUV).xyz),\n          daylight);\n}\n"},8393:function(t){t.exports="varying vec2 vertexUV;\nvarying vec3 vertexNormal;\n\nvoid main() {\n  vertexUV = uv;\n  vertexNormal = normalize(normalMatrix * normal);\n  gl_Position = projectionMatrix *\n      modelViewMatrix * vec4(position, 1);\n}\n"},9436:function(t){t.exports="uniform sampler2D globeTexture;\nuniform sampler2D nightTexture;\nvarying vec2 vertexUV;\nvarying vec3 vertexNormal;\n\n\nuniform float uTime;\n\nvoid main() {\n  float daylight = (cos(uTime / 2.0) + 1.01) / 2.0;\n  float nightlight = 1.0 - daylight;\n\n  float intensity = 1.03 -\n      dot(vertexNormal, vec3(0.0, 0.0, 1.0 ));\n  vec3 atmosphere =\n      vec3(0.3, 0.6, 1.0) *\n      pow(intensity, 1.5);\n\n  gl_FragColor =\n    vec4(atmosphere, 0) +\n    vec4((daylight * texture2D(globeTexture, vertexUV).xyz), daylight) +\n    vec4((nightlight * texture2D(nightTexture, vertexUV).xyz), nightlight);\n}\n"},2452:function(t){t.exports="varying vec2 vertexUV;\nvarying vec3 vertexNormal;\n\nvoid main() {\n  vertexUV = uv;\n  vertexNormal = normalize(normalMatrix * normal);\n  gl_Position = projectionMatrix *\n      modelViewMatrix * vec4(position, 1);\n}\n"},7326:function(t,n,e){"use strict";function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}e.d(n,{Z:function(){return r}})},5861:function(t,n,e){"use strict";function r(t,n,e,r,o,i,u){try{var a=t[i](u),c=a.value}catch(f){return void e(f)}a.done?n(c):Promise.resolve(c).then(r,o)}function o(t){return function(){var n=this,e=arguments;return new Promise((function(o,i){var u=t.apply(n,e);function a(t){r(u,o,i,a,c,"next",t)}function c(t){r(u,o,i,a,c,"throw",t)}a(void 0)}))}}e.d(n,{Z:function(){return o}})},5671:function(t,n,e){"use strict";function r(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}e.d(n,{Z:function(){return r}})},3144:function(t,n,e){"use strict";function r(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,n,e){return n&&r(t.prototype,n),e&&r(t,e),Object.defineProperty(t,"prototype",{writable:!1}),t}e.d(n,{Z:function(){return o}})},4942:function(t,n,e){"use strict";function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}e.d(n,{Z:function(){return r}})},8052:function(t,n,e){"use strict";e.d(n,{Z:function(){return i}});var r=e(1120);function o(t,n){for(;!Object.prototype.hasOwnProperty.call(t,n)&&null!==(t=(0,r.Z)(t)););return t}function i(){return i="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,n,e){var r=o(t,n);if(r){var i=Object.getOwnPropertyDescriptor(r,n);return i.get?i.get.call(arguments.length<3?t:e):i.value}},i.apply(this,arguments)}},1120:function(t,n,e){"use strict";function r(t){return r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},r(t)}e.d(n,{Z:function(){return r}})},136:function(t,n,e){"use strict";e.d(n,{Z:function(){return o}});var r=e(9611);function o(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),n&&(0,r.Z)(t,n)}},6215:function(t,n,e){"use strict";function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}e.d(n,{Z:function(){return i}});var o=e(7326);function i(t,n){if(n&&("object"===r(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return(0,o.Z)(t)}},885:function(t,n,e){"use strict";e.d(n,{Z:function(){return o}});var r=e(181);function o(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var r,o,i=[],u=!0,a=!1;try{for(e=e.call(t);!(u=(r=e.next()).done)&&(i.push(r.value),!n||i.length!==n);u=!0);}catch(c){a=!0,o=c}finally{try{u||null==e.return||e.return()}finally{if(a)throw o}}return i}}(t,n)||(0,r.Z)(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=component---src-pages-index-js-63f0978eade2ce664938.js.map