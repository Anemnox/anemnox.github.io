"use strict";(self.webpackChunkandrew_jang=self.webpackChunkandrew_jang||[]).push([[826],{8826:function(e,t,n){n.r(t),n.d(t,{renderImageToString:function(){return h},swapPlaceholderImage:function(){return v}});var o,r=n(5861),a=n(7757),i=n.n(a),c=n(7059),u=n(7294),l=n(7762),s=(n(4811),new WeakMap),d=navigator.connection||navigator.mozConnection||navigator.webkitConnection,g=["image","loading","isLoading","isLoaded","imgClassName","imgStyle","objectPosition","backgroundColor","objectFit"];function f(e,t){e.style.opacity="1",t&&(t.style.opacity="0")}function b(e,t,n,o,r,a){var i=e.querySelector("[data-main-image]"),c=e.querySelector("[data-placeholder-image]"),u=n.has(t);function l(e){var t=this;this.removeEventListener("load",l);var n=e.currentTarget,o=new Image;o.src=n.currentSrc,o.decode?o.decode().then((function(){f(t,c),null==r||r({wasCached:u})})).catch((function(e){f(t,c),null==a||a(e)})):(f(this,c),null==r||r({wasCached:u}))}return i.addEventListener("load",l),null==o||o({wasCached:u}),Array.from(i.parentElement.children).forEach((function(e){var t=e.getAttribute("data-src"),n=e.getAttribute("data-srcset");t&&(e.removeAttribute("data-src"),e.setAttribute("src",t)),n&&(e.removeAttribute("data-srcset"),e.setAttribute("srcset",n))})),n.add(t),i.complete&&l.call(i,{currentTarget:i}),function(){i&&i.removeEventListener("load",l)}}function v(e,t,a,u,l,g,f){if(!(0,c.h)()){var v,h,m,w=(j=function(){v=b(e,t,a,l,g,f)},"IntersectionObserver"in window?(o||(o=new IntersectionObserver((function(e){e.forEach((function(e){var t;e.isIntersecting&&(null==(t=s.get(e.target))||t(),s.delete(e.target))}))}),{rootMargin:"4g"!==(null==d?void 0:d.effectiveType)||null!=d&&d.saveData?"2500px":"1250px"})),function(e){return s.set(e,j),o.observe(e),function(){o&&e&&(s.delete(e),o.unobserve(e))}}):function(){return j(),function(){}}),p=w(e);return"objectFit"in document.documentElement.style||(e.dataset.objectFit=null!=(h=u.objectFit)?h:"cover",e.dataset.objectPosition=""+(null!=(m=u.objectPosition)?m:"50% 50%"),(y=(0,r.Z)(i().mark((function e(t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0="objectFitPolyfill"in window,e.t0){e.next=4;break}return e.next=4,n.e(231).then(n.t.bind(n,7231,23));case 4:window.objectFitPolyfill(t);case 5:case"end":return e.stop()}}),e)}))),function(e){return y.apply(this,arguments)})(e)),function(){v&&v(),p()}}var y,j;return b(e,t,a,l,g,f)}function h(e){var t=e.image,n=e.loading,o=void 0===n?"lazy":n,r=e.isLoading,a=e.isLoaded,i=e.imgClassName,s=e.imgStyle,d=void 0===s?{}:s,f=e.objectPosition,b=e.backgroundColor,v=e.objectFit,h=void 0===v?"cover":v,m=(0,c._)(e,g),w=t.width,p=t.height,y=t.layout,j=t.images,C=t.placeholder,k=t.backgroundColor;return d=(0,c.a)({objectFit:h,objectPosition:f,backgroundColor:b},d),(0,l.uS)(u.createElement(c.L,{layout:y,width:w,height:p},u.createElement(c.P,(0,c.a)({},(0,c.g)(C,a,y,w,p,k,h,f))),u.createElement(c.M,(0,c.a)({},m,{width:w,height:p,className:i},(0,c.b)(r,a,j,o,d)))))}}}]);
//# sourceMappingURL=826-54c659b8efbb3996ca9f.js.map