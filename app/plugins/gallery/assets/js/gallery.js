!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):"object"==typeof exports?module.exports=t:t(jQuery)}(function(t){function e(e){var s=e||window.event,o=[].slice.call(arguments,1),r=0,l=0,a=0,h=0,h=0;e=t.event.fix(s),e.type="mousewheel",s.wheelDelta&&(r=s.wheelDelta),s.detail&&(r=-1*s.detail),s.deltaY&&(r=a=-1*s.deltaY),s.deltaX&&(l=s.deltaX,r=-1*l),void 0!==s.wheelDeltaY&&(a=s.wheelDeltaY),void 0!==s.wheelDeltaX&&(l=-1*s.wheelDeltaX),h=Math.abs(r),(!i||i>h)&&(i=h),h=Math.max(Math.abs(a),Math.abs(l)),(!n||n>h)&&(n=h),s=r>0?"floor":"ceil",r=Math[s](r/i),l=Math[s](l/n),a=Math[s](a/n);try{e.originalEvent.hasOwnProperty("wheelDelta")}catch(d){a=r}return o.unshift(e,r,l,a),(t.event.dispatch||t.event.handle).apply(this,o)}var i,n,s=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],o="onwheel"in document||9<=document.documentMode?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"];if(t.event.fixHooks)for(var r=s.length;r;)t.event.fixHooks[s[--r]]=t.event.mouseHooks;t.event.special.mousewheel={setup:function(){if(this.addEventListener)for(var t=o.length;t;)this.addEventListener(o[--t],e,!1);else this.onmousewheel=e},teardown:function(){if(this.removeEventListener)for(var t=o.length;t;)this.removeEventListener(o[--t],e,!1);else this.onmousewheel=null}},t.fn.extend({mousewheel:function(t){return t?this.bind("mousewheel",t):this.trigger("mousewheel")},unmousewheel:function(t){return this.unbind("mousewheel",t)}})});

/*! fancyBox v2.1.5 fancyapps.com | fancyapps.com/fancybox/#license */
!function(t,e,i,n){var s=i("html"),o=i(t),r=i(e),a=i.fancybox=function(){a.open.apply(this,arguments)},l=navigator.userAgent.match(/msie/i),h=null,d=e.createTouch!==n,c=function(t){return t&&t.hasOwnProperty&&t instanceof i},u=function(t){return t&&"string"===i.type(t)},p=function(t){return u(t)&&0<t.indexOf("%")},m=function(t,e){var i=parseInt(t,10)||0;return e&&p(t)&&(i*=a.getViewport()[e]/100),Math.ceil(i)},y=function(t,e){return m(t,e)+"px"};i.extend(a,{version:"2.1.5",defaults:{padding:15,margin:20,width:800,height:600,minWidth:100,minHeight:100,maxWidth:9999,maxHeight:9999,pixelRatio:1,autoSize:!0,autoHeight:!1,autoWidth:!1,autoResize:!0,autoCenter:!d,fitToView:!0,aspectRatio:!1,topRatio:.5,leftRatio:.5,scrolling:"auto",wrapCSS:"",arrows:!0,closeBtn:!0,closeClick:!1,nextClick:!1,mouseWheel:!0,autoPlay:!1,playSpeed:3e3,preload:3,modal:!1,loop:!0,ajax:{dataType:"html",headers:{"X-fancyBox":!0}},iframe:{scrolling:"auto",preload:!0},swf:{wmode:"transparent",allowfullscreen:"true",allowscriptaccess:"always"},keys:{next:{13:"left",34:"up",39:"left",40:"up"},prev:{8:"right",33:"down",37:"right",38:"down"},close:[27],play:[32],toggle:[70]},direction:{next:"left",prev:"right"},scrollOutside:!0,index:0,type:null,href:null,content:null,title:null,tpl:{wrap:'<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',image:'<img class="fancybox-image" src="{href}" alt="" />',iframe:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen'+(l?' allowtransparency="true"':"")+"></iframe>",error:'<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',closeBtn:'<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',next:'<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',prev:'<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'},openEffect:"fade",openSpeed:250,openEasing:"swing",openOpacity:!0,openMethod:"zoomIn",closeEffect:"fade",closeSpeed:250,closeEasing:"swing",closeOpacity:!0,closeMethod:"zoomOut",nextEffect:"elastic",nextSpeed:250,nextEasing:"swing",nextMethod:"changeIn",prevEffect:"elastic",prevSpeed:250,prevEasing:"swing",prevMethod:"changeOut",helpers:{overlay:!0,title:!0},onCancel:i.noop,beforeLoad:i.noop,afterLoad:i.noop,beforeShow:i.noop,afterShow:i.noop,beforeChange:i.noop,beforeClose:i.noop,afterClose:i.noop},group:{},opts:{},previous:null,coming:null,current:null,isActive:!1,isOpen:!1,isOpened:!1,wrap:null,skin:null,outer:null,inner:null,player:{timer:null,isActive:!1},ajaxLoad:null,imgPreload:null,transitions:{},helpers:{},open:function(t,e){return t&&(i.isPlainObject(e)||(e={}),!1!==a.close(!0))?(i.isArray(t)||(t=c(t)?i(t).get():[t]),i.each(t,function(s,o){var r,l,h,d,p,m={};"object"===i.type(o)&&(o.nodeType&&(o=i(o)),c(o)?(m={href:o.data("fancybox-href")||o.attr("href"),title:i("<div/>").text(o.data("fancybox-title")||o.attr("title")).html(),isDom:!0,element:o},i.metadata&&i.extend(!0,m,o.metadata())):m=o),r=e.href||m.href||(u(o)?o:null),l=e.title!==n?e.title:m.title||"",d=(h=e.content||m.content)?"html":e.type||m.type,!d&&m.isDom&&(d=o.data("fancybox-type"),d||(d=(d=o.prop("class").match(/fancybox\.(\w+)/))?d[1]:null)),u(r)&&(d||(a.isImage(r)?d="image":a.isSWF(r)?d="swf":"#"===r.charAt(0)?d="inline":u(o)&&(d="html",h=o)),"ajax"===d&&(p=r.split(/\s+/,2),r=p.shift(),p=p.shift())),h||("inline"===d?r?h=i(u(r)?r.replace(/.*(?=#[^\s]+$)/,""):r):m.isDom&&(h=o):"html"===d?h=r:d||r||!m.isDom||(d="inline",h=o)),i.extend(m,{href:r,type:d,content:h,title:l,selector:p}),t[s]=m}),a.opts=i.extend(!0,{},a.defaults,e),e.keys!==n&&(a.opts.keys=e.keys?i.extend({},a.defaults.keys,e.keys):!1),a.group=t,a._start(a.opts.index)):void 0},cancel:function(){var t=a.coming;t&&!1===a.trigger("onCancel")||(a.hideLoading(),t&&(a.ajaxLoad&&a.ajaxLoad.abort(),a.ajaxLoad=null,a.imgPreload&&(a.imgPreload.onload=a.imgPreload.onerror=null),t.wrap&&t.wrap.stop(!0,!0).trigger("onReset").remove(),a.coming=null,a.current||a._afterZoomOut(t)))},close:function(t){a.cancel(),!1!==a.trigger("beforeClose")&&(a.unbindEvents(),a.isActive&&(a.isOpen&&!0!==t?(a.isOpen=a.isOpened=!1,a.isClosing=!0,i(".fancybox-item, .fancybox-nav").remove(),a.wrap.stop(!0,!0).removeClass("fancybox-opened"),a.transitions[a.current.closeMethod]()):(i(".fancybox-wrap").stop(!0).trigger("onReset").remove(),a._afterZoomOut())))},play:function(t){var e=function(){clearTimeout(a.player.timer)},i=function(){e(),a.current&&a.player.isActive&&(a.player.timer=setTimeout(a.next,a.current.playSpeed))},n=function(){e(),r.unbind(".player"),a.player.isActive=!1,a.trigger("onPlayEnd")};!0===t||!a.player.isActive&&!1!==t?a.current&&(a.current.loop||a.current.index<a.group.length-1)&&(a.player.isActive=!0,r.bind({"onCancel.player beforeClose.player":n,"onUpdate.player":i,"beforeLoad.player":e}),i(),a.trigger("onPlayStart")):n()},next:function(t){var e=a.current;e&&(u(t)||(t=e.direction.next),a.jumpto(e.index+1,t,"next"))},prev:function(t){var e=a.current;e&&(u(t)||(t=e.direction.prev),a.jumpto(e.index-1,t,"prev"))},jumpto:function(t,e,i){var s=a.current;s&&(t=m(t),a.direction=e||s.direction[t>=s.index?"next":"prev"],a.router=i||"jumpto",s.loop&&(0>t&&(t=s.group.length+t%s.group.length),t%=s.group.length),s.group[t]!==n&&(a.cancel(),a._start(t)))},reposition:function(t,e){var n,s=a.current,o=s?s.wrap:null;o&&(n=a._getPosition(e),t&&"scroll"===t.type?(delete n.position,o.stop(!0,!0).animate(n,200)):(o.css(n),s.pos=i.extend({},s.dim,n)))},update:function(t){var e=t&&t.originalEvent&&t.originalEvent.type,i=!e||"orientationchange"===e;i&&(clearTimeout(h),h=null),a.isOpen&&!h&&(h=setTimeout(function(){var n=a.current;n&&!a.isClosing&&(a.wrap.removeClass("fancybox-tmp"),(i||"load"===e||"resize"===e&&n.autoResize)&&a._setDimension(),"scroll"===e&&n.canShrink||a.reposition(t),a.trigger("onUpdate"),h=null)},i&&!d?0:300))},toggle:function(t){a.isOpen&&(a.current.fitToView="boolean"===i.type(t)?t:!a.current.fitToView,d&&(a.wrap.removeAttr("style").addClass("fancybox-tmp"),a.trigger("onUpdate")),a.update())},hideLoading:function(){r.unbind(".loading"),i("#fancybox-loading").remove()},showLoading:function(){var t,e;a.hideLoading(),t=i('<div id="fancybox-loading"><div></div></div>').click(a.cancel).appendTo("body"),r.bind("keydown.loading",function(t){27===(t.which||t.keyCode)&&(t.preventDefault(),a.cancel())}),a.defaults.fixed||(e=a.getViewport(),t.css({position:"absolute",top:.5*e.h+e.y,left:.5*e.w+e.x})),a.trigger("onLoading")},getViewport:function(){var e=a.current&&a.current.locked||!1,i={x:o.scrollLeft(),y:o.scrollTop()};return e&&e.length?(i.w=e[0].clientWidth,i.h=e[0].clientHeight):(i.w=d&&t.innerWidth?t.innerWidth:o.width(),i.h=d&&t.innerHeight?t.innerHeight:o.height()),i},unbindEvents:function(){a.wrap&&c(a.wrap)&&a.wrap.unbind(".fb"),r.unbind(".fb"),o.unbind(".fb")},bindEvents:function(){var t,e=a.current;e&&(o.bind("orientationchange.fb"+(d?"":" resize.fb")+(e.autoCenter&&!e.locked?" scroll.fb":""),a.update),(t=e.keys)&&r.bind("keydown.fb",function(s){var o=s.which||s.keyCode,r=s.target||s.srcElement;return 27===o&&a.coming?!1:(s.ctrlKey||s.altKey||s.shiftKey||s.metaKey||r&&(r.type||i(r).is("[contenteditable]"))||i.each(t,function(t,r){return 1<e.group.length&&r[o]!==n?(a[t](r[o]),s.preventDefault(),!1):-1<i.inArray(o,r)?(a[t](),s.preventDefault(),!1):void 0}),void 0)}),i.fn.mousewheel&&e.mouseWheel&&a.wrap.bind("mousewheel.fb",function(t,n,s,o){for(var r=i(t.target||null),l=!1;r.length&&!(l||r.is(".fancybox-skin")||r.is(".fancybox-wrap"));)l=r[0]&&!(r[0].style.overflow&&"hidden"===r[0].style.overflow)&&(r[0].clientWidth&&r[0].scrollWidth>r[0].clientWidth||r[0].clientHeight&&r[0].scrollHeight>r[0].clientHeight),r=i(r).parent();0!==n&&!l&&1<a.group.length&&!e.canShrink&&(o>0||s>0?a.prev(o>0?"down":"left"):(0>o||0>s)&&a.next(0>o?"up":"right"),t.preventDefault())}))},trigger:function(t,e){var n,s=e||a.coming||a.current;if(s){if(i.isFunction(s[t])&&(n=s[t].apply(s,Array.prototype.slice.call(arguments,1))),!1===n)return!1;s.helpers&&i.each(s.helpers,function(e,n){n&&a.helpers[e]&&i.isFunction(a.helpers[e][t])&&a.helpers[e][t](i.extend(!0,{},a.helpers[e].defaults,n),s)})}r.trigger(t)},isImage:function(t){return u(t)&&t.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)},isSWF:function(t){return u(t)&&t.match(/\.(swf)((\?|#).*)?$/i)},_start:function(t){var e,n,s={};if(t=m(t),e=a.group[t]||null,!e)return!1;if(s=i.extend(!0,{},a.opts,e),e=s.margin,n=s.padding,"number"===i.type(e)&&(s.margin=[e,e,e,e]),"number"===i.type(n)&&(s.padding=[n,n,n,n]),s.modal&&i.extend(!0,s,{closeBtn:!1,closeClick:!1,nextClick:!1,arrows:!1,mouseWheel:!1,keys:null,helpers:{overlay:{closeClick:!1}}}),s.autoSize&&(s.autoWidth=s.autoHeight=!0),"auto"===s.width&&(s.autoWidth=!0),"auto"===s.height&&(s.autoHeight=!0),s.group=a.group,s.index=t,a.coming=s,!1===a.trigger("beforeLoad"))a.coming=null;else{if(n=s.type,e=s.href,!n)return a.coming=null,a.current&&a.router&&"jumpto"!==a.router?(a.current.index=t,a[a.router](a.direction)):!1;if(a.isActive=!0,("image"===n||"swf"===n)&&(s.autoHeight=s.autoWidth=!1,s.scrolling="visible"),"image"===n&&(s.aspectRatio=!0),"iframe"===n&&d&&(s.scrolling="scroll"),s.wrap=i(s.tpl.wrap).addClass("fancybox-"+(d?"mobile":"desktop")+" fancybox-type-"+n+" fancybox-tmp "+s.wrapCSS).appendTo(s.parent||"body"),i.extend(s,{skin:i(".fancybox-skin",s.wrap),outer:i(".fancybox-outer",s.wrap),inner:i(".fancybox-inner",s.wrap)}),i.each(["Top","Right","Bottom","Left"],function(t,e){s.skin.css("padding"+e,y(s.padding[t]))}),a.trigger("onReady"),"inline"===n||"html"===n){if(!s.content||!s.content.length)return a._error("content")}else if(!e)return a._error("href");"image"===n?a._loadImage():"ajax"===n?a._loadAjax():"iframe"===n?a._loadIframe():a._afterLoad()}},_error:function(t){i.extend(a.coming,{type:"html",autoWidth:!0,autoHeight:!0,minWidth:0,minHeight:0,scrolling:"no",hasError:t,content:a.coming.tpl.error}),a._afterLoad()},_loadImage:function(){var t=a.imgPreload=new Image;t.onload=function(){this.onload=this.onerror=null,a.coming.width=this.width/a.opts.pixelRatio,a.coming.height=this.height/a.opts.pixelRatio,a._afterLoad()},t.onerror=function(){this.onload=this.onerror=null,a._error("image")},t.src=a.coming.href,!0!==t.complete&&a.showLoading()},_loadAjax:function(){var t=a.coming;a.showLoading(),a.ajaxLoad=i.ajax(i.extend({},t.ajax,{url:t.href,error:function(t,e){a.coming&&"abort"!==e?a._error("ajax",t):a.hideLoading()},success:function(e,i){"success"===i&&(t.content=e,a._afterLoad())}}))},_loadIframe:function(){var t=a.coming,e=i(t.tpl.iframe.replace(/\{rnd\}/g,(new Date).getTime())).attr("scrolling",d?"auto":t.iframe.scrolling).attr("src",t.href);i(t.wrap).bind("onReset",function(){try{i(this).find("iframe").hide().attr("src","//about:blank").end().empty()}catch(t){}}),t.iframe.preload&&(a.showLoading(),e.one("load",function(){i(this).data("ready",1),d||i(this).bind("load.fb",a.update),i(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show(),a._afterLoad()})),t.content=e.appendTo(t.inner),t.iframe.preload||a._afterLoad()},_preloadImages:function(){var t,e,i=a.group,n=a.current,s=i.length,o=n.preload?Math.min(n.preload,s-1):0;for(e=1;o>=e;e+=1)t=i[(n.index+e)%s],"image"===t.type&&t.href&&((new Image).src=t.href)},_afterLoad:function(){var t,e,n,s,o,r=a.coming,l=a.current;if(a.hideLoading(),r&&!1!==a.isActive)if(!1===a.trigger("afterLoad",r,l))r.wrap.stop(!0).trigger("onReset").remove(),a.coming=null;else{switch(l&&(a.trigger("beforeChange",l),l.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove()),a.unbindEvents(),t=r.content,e=r.type,n=r.scrolling,i.extend(a,{wrap:r.wrap,skin:r.skin,outer:r.outer,inner:r.inner,current:r,previous:l}),s=r.href,e){case"inline":case"ajax":case"html":r.selector?t=i("<div>").html(t).find(r.selector):c(t)&&(t.data("fancybox-placeholder")||t.data("fancybox-placeholder",i('<div class="fancybox-placeholder"></div>').insertAfter(t).hide()),t=t.show().detach(),r.wrap.bind("onReset",function(){i(this).find(t).length&&t.hide().replaceAll(t.data("fancybox-placeholder")).data("fancybox-placeholder",!1)}));break;case"image":t=r.tpl.image.replace(/\{href\}/g,s);break;case"swf":t='<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="'+s+'"></param>',o="",i.each(r.swf,function(e,i){t+='<param name="'+e+'" value="'+i+'"></param>',o+=" "+e+'="'+i+'"'}),t+='<embed src="'+s+'" type="application/x-shockwave-flash" width="100%" height="100%"'+o+"></embed></object>"}c(t)&&t.parent().is(r.inner)||r.inner.append(t),a.trigger("beforeShow"),r.inner.css("overflow","yes"===n?"scroll":"no"===n?"hidden":n),a._setDimension(),a.reposition(),a.isOpen=!1,a.coming=null,a.bindEvents(),a.isOpened?l.prevMethod&&a.transitions[l.prevMethod]():i(".fancybox-wrap").not(r.wrap).stop(!0).trigger("onReset").remove(),a.transitions[a.isOpened?r.nextMethod:r.openMethod](),a._preloadImages()}},_setDimension:function(){var t,e,n,s,o,r,l,h,d,c=a.getViewport(),u=0,f=!1,g=!1,f=a.wrap,v=a.skin,w=a.inner,C=a.current,g=C.width,b=C.height,S=C.minWidth,P=C.minHeight,x=C.maxWidth,E=C.maxHeight,I=C.scrolling,T=C.scrollOutside?C.scrollbarWidth:0,k=C.margin,D=m(k[1]+k[3]),F=m(k[0]+k[2]);if(f.add(v).add(w).width("auto").height("auto").removeClass("fancybox-tmp"),k=m(v.outerWidth(!0)-v.width()),t=m(v.outerHeight(!0)-v.height()),e=D+k,n=F+t,s=p(g)?(c.w-e)*m(g)/100:g,o=p(b)?(c.h-n)*m(b)/100:b,"iframe"===C.type){if(d=C.content,C.autoHeight&&1===d.data("ready"))try{d[0].contentWindow.document.location&&(w.width(s).height(9999),r=d.contents().find("body"),T&&r.css("overflow-x","hidden"),o=r.outerHeight(!0))}catch(N){}}else(C.autoWidth||C.autoHeight)&&(w.addClass("fancybox-tmp"),C.autoWidth||w.width(s),C.autoHeight||w.height(o),C.autoWidth&&(s=w.width()),C.autoHeight&&(o=w.height()),w.removeClass("fancybox-tmp"));if(g=m(s),b=m(o),h=s/o,S=m(p(S)?m(S,"w")-e:S),x=m(p(x)?m(x,"w")-e:x),P=m(p(P)?m(P,"h")-n:P),E=m(p(E)?m(E,"h")-n:E),r=x,l=E,C.fitToView&&(x=Math.min(c.w-e,x),E=Math.min(c.h-n,E)),e=c.w-D,F=c.h-F,C.aspectRatio?(g>x&&(g=x,b=m(g/h)),b>E&&(b=E,g=m(b*h)),S>g&&(g=S,b=m(g/h)),P>b&&(b=P,g=m(b*h))):(g=Math.max(S,Math.min(g,x)),C.autoHeight&&"iframe"!==C.type&&(w.width(g),b=w.height()),b=Math.max(P,Math.min(b,E))),C.fitToView)if(w.width(g).height(b),f.width(g+k),c=f.width(),D=f.height(),C.aspectRatio)for(;(c>e||D>F)&&g>S&&b>P&&!(19<u++);)b=Math.max(P,Math.min(E,b-10)),g=m(b*h),S>g&&(g=S,b=m(g/h)),g>x&&(g=x,b=m(g/h)),w.width(g).height(b),f.width(g+k),c=f.width(),D=f.height();else g=Math.max(S,Math.min(g,g-(c-e))),b=Math.max(P,Math.min(b,b-(D-F)));T&&"auto"===I&&o>b&&e>g+k+T&&(g+=T),w.width(g).height(b),f.width(g+k),c=f.width(),D=f.height(),f=(c>e||D>F)&&g>S&&b>P,g=C.aspectRatio?r>g&&l>b&&s>g&&o>b:(r>g||l>b)&&(s>g||o>b),i.extend(C,{dim:{width:y(c),height:y(D)},origWidth:s,origHeight:o,canShrink:f,canExpand:g,wPadding:k,hPadding:t,wrapSpace:D-v.outerHeight(!0),skinSpace:v.height()-b}),!d&&C.autoHeight&&b>P&&E>b&&!g&&w.height("auto")},_getPosition:function(t){var e=a.current,i=a.getViewport(),n=e.margin,s=a.wrap.width()+n[1]+n[3],o=a.wrap.height()+n[0]+n[2],n={position:"absolute",top:n[0],left:n[3]};return e.autoCenter&&e.fixed&&!t&&o<=i.h&&s<=i.w?n.position="fixed":e.locked||(n.top+=i.y,n.left+=i.x),n.top=y(Math.max(n.top,n.top+(i.h-o)*e.topRatio)),n.left=y(Math.max(n.left,n.left+(i.w-s)*e.leftRatio)),n},_afterZoomIn:function(){var t=a.current;t&&(a.isOpen=a.isOpened=!0,a.wrap.css("overflow","visible").addClass("fancybox-opened"),a.update(),(t.closeClick||t.nextClick&&1<a.group.length)&&a.inner.css("cursor","pointer").bind("click.fb",function(e){i(e.target).is("a")||i(e.target).parent().is("a")||(e.preventDefault(),a[t.closeClick?"close":"next"]())}),t.closeBtn&&i(t.tpl.closeBtn).appendTo(a.skin).bind("click.fb",function(t){t.preventDefault(),a.close()}),t.arrows&&1<a.group.length&&((t.loop||0<t.index)&&i(t.tpl.prev).appendTo(a.outer).bind("click.fb",a.prev),(t.loop||t.index<a.group.length-1)&&i(t.tpl.next).appendTo(a.outer).bind("click.fb",a.next)),a.trigger("afterShow"),t.loop||t.index!==t.group.length-1?a.opts.autoPlay&&!a.player.isActive&&(a.opts.autoPlay=!1,a.play(!0)):a.play(!1))},_afterZoomOut:function(t){t=t||a.current,i(".fancybox-wrap").trigger("onReset").remove(),i.extend(a,{group:{},opts:{},router:!1,current:null,isActive:!1,isOpened:!1,isOpen:!1,isClosing:!1,wrap:null,skin:null,outer:null,inner:null}),a.trigger("afterClose",t)}}),a.transitions={getOrigPosition:function(){var t=a.current,e=t.element,i=t.orig,n={},s=50,o=50,r=t.hPadding,l=t.wPadding,h=a.getViewport();return!i&&t.isDom&&e.is(":visible")&&(i=e.find("img:first"),i.length||(i=e)),c(i)?(n=i.offset(),i.is("img")&&(s=i.outerWidth(),o=i.outerHeight())):(n.top=h.y+(h.h-o)*t.topRatio,n.left=h.x+(h.w-s)*t.leftRatio),("fixed"===a.wrap.css("position")||t.locked)&&(n.top-=h.y,n.left-=h.x),n={top:y(n.top-r*t.topRatio),left:y(n.left-l*t.leftRatio),width:y(s+l),height:y(o+r)}},step:function(t,e){var i,n,s=e.prop;n=a.current;var o=n.wrapSpace,r=n.skinSpace;("width"===s||"height"===s)&&(i=e.end===e.start?1:(t-e.start)/(e.end-e.start),a.isClosing&&(i=1-i),n="width"===s?n.wPadding:n.hPadding,n=t-n,a.skin[s](m("width"===s?n:n-o*i)),a.inner[s](m("width"===s?n:n-o*i-r*i)))},zoomIn:function(){var t=a.current,e=t.pos,n=t.openEffect,s="elastic"===n,o=i.extend({opacity:1},e);delete o.position,s?(e=this.getOrigPosition(),t.openOpacity&&(e.opacity=.1)):"fade"===n&&(e.opacity=.1),a.wrap.css(e).animate(o,{duration:"none"===n?0:t.openSpeed,easing:t.openEasing,step:s?this.step:null,complete:a._afterZoomIn})},zoomOut:function(){var t=a.current,e=t.closeEffect,i="elastic"===e,n={opacity:.1};i&&(n=this.getOrigPosition(),t.closeOpacity&&(n.opacity=.1)),a.wrap.animate(n,{duration:"none"===e?0:t.closeSpeed,easing:t.closeEasing,step:i?this.step:null,complete:a._afterZoomOut})},changeIn:function(){var t,e=a.current,i=e.nextEffect,n=e.pos,s={opacity:1},o=a.direction;n.opacity=.1,"elastic"===i&&(t="down"===o||"up"===o?"top":"left","down"===o||"right"===o?(n[t]=y(m(n[t])-200),s[t]="+=200px"):(n[t]=y(m(n[t])+200),s[t]="-=200px")),"none"===i?a._afterZoomIn():a.wrap.css(n).animate(s,{duration:e.nextSpeed,easing:e.nextEasing,complete:a._afterZoomIn})},changeOut:function(){var t=a.previous,e=t.prevEffect,n={opacity:.1},s=a.direction;"elastic"===e&&(n["down"===s||"up"===s?"top":"left"]=("up"===s||"left"===s?"-":"+")+"=200px"),t.wrap.animate(n,{duration:"none"===e?0:t.prevSpeed,easing:t.prevEasing,complete:function(){i(this).trigger("onReset").remove()}})}},a.helpers.overlay={defaults:{closeClick:!0,speedOut:200,showEarly:!0,css:{},locked:!d,fixed:!0},overlay:null,fixed:!1,el:i("html"),create:function(t){var e;t=i.extend({},this.defaults,t),this.overlay&&this.close(),e=a.coming?a.coming.parent:t.parent,this.overlay=i('<div class="fancybox-overlay"></div>').appendTo(e&&e.lenth?e:"body"),this.fixed=!1,t.fixed&&a.defaults.fixed&&(this.overlay.addClass("fancybox-overlay-fixed"),this.fixed=!0)},open:function(t){var e=this;t=i.extend({},this.defaults,t),this.overlay?this.overlay.unbind(".overlay").width("auto").height("auto"):this.create(t),this.fixed||(o.bind("resize.overlay",i.proxy(this.update,this)),this.update()),t.closeClick&&this.overlay.bind("click.overlay",function(t){return i(t.target).hasClass("fancybox-overlay")?(a.isActive?a.close():e.close(),!1):void 0}),this.overlay.css(t.css).show()},close:function(){o.unbind("resize.overlay"),this.el.hasClass("fancybox-lock")&&(i(".fancybox-margin").removeClass("fancybox-margin"),this.el.removeClass("fancybox-lock"),o.scrollTop(this.scrollV).scrollLeft(this.scrollH)),i(".fancybox-overlay").remove().hide(),i.extend(this,{overlay:null,fixed:!1})},update:function(){var t,i="100%";this.overlay.width(i).height("100%"),l?(t=Math.max(e.documentElement.offsetWidth,e.body.offsetWidth),r.width()>t&&(i=r.width())):r.width()>o.width()&&(i=r.width()),this.overlay.width(i).height(r.height())},onReady:function(t,e){var n=this.overlay;i(".fancybox-overlay").stop(!0,!0),n||this.create(t),t.locked&&this.fixed&&e.fixed&&(e.locked=this.overlay.append(e.wrap),e.fixed=!1),!0===t.showEarly&&this.beforeShow.apply(this,arguments)},beforeShow:function(t,e){e.locked&&!this.el.hasClass("fancybox-lock")&&(!1!==this.fixPosition&&i("*").filter(function(){return"fixed"===i(this).css("position")&&!i(this).hasClass("fancybox-overlay")&&!i(this).hasClass("fancybox-wrap")}).addClass("fancybox-margin"),this.el.addClass("fancybox-margin"),this.scrollV=o.scrollTop(),this.scrollH=o.scrollLeft(),this.el.addClass("fancybox-lock"),o.scrollTop(this.scrollV).scrollLeft(this.scrollH)),this.open(t)},onUpdate:function(){this.fixed||this.update()},afterClose:function(t){this.overlay&&!a.coming&&this.overlay.fadeOut(t.speedOut,i.proxy(this.close,this))}},a.helpers.title={defaults:{type:"float",position:"bottom"},beforeShow:function(t){var e=a.current,n=e.title,s=t.type;if(i.isFunction(n)&&(n=n.call(e.element,e)),u(n)&&""!==i.trim(n)){switch(e=i('<div class="fancybox-title fancybox-title-'+s+'-wrap">'+n+"</div>"),s){case"inside":s=a.skin;break;case"outside":s=a.wrap;break;case"over":s=a.inner;break;default:s=a.skin,e.appendTo("body"),l&&e.width(e.width()),e.wrapInner('<span class="child"></span>'),a.current.margin[2]+=Math.abs(m(e.css("margin-bottom")))}e["top"===t.position?"prependTo":"appendTo"](s)}}},i.fn.fancybox=function(t){var e,n=i(this),s=this.selector||"",o=function(o){var r,l,h=i(this).blur(),d=e;o.ctrlKey||o.altKey||o.shiftKey||o.metaKey||h.is(".fancybox-wrap")||(r=t.groupAttr||"data-fancybox-group",l=h.attr(r),l||(r="rel",l=h.get(0)[r]),l&&""!==l&&"nofollow"!==l&&(h=s.length?i(s):n,h=h.filter("["+r+'="'+l+'"]'),d=h.index(this)),t.index=d,!1!==a.open(h,t)&&o.preventDefault())};return t=t||{},e=t.index||0,s&&!1!==t.live?r.undelegate(s,"click.fb-start").delegate(s+":not('.fancybox-item, .fancybox-nav')","click.fb-start",o):n.unbind("click.fb-start").bind("click.fb-start",o),this.filter("[data-fancybox-start=1]").trigger("click"),this},r.ready(function(){var e,o;i.scrollbarWidth===n&&(i.scrollbarWidth=function(){var t=i('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),e=t.children(),e=e.innerWidth()-e.height(99).innerWidth();return t.remove(),e}),i.support.fixedPosition===n&&(i.support.fixedPosition=function(){var t=i('<div style="position:fixed;top:20px;"></div>').appendTo("body"),e=20===t[0].offsetTop||15===t[0].offsetTop;return t.remove(),e}()),i.extend(a.defaults,{scrollbarWidth:i.scrollbarWidth(),fixed:i.support.fixedPosition,parent:i("body")}),e=i(t).width(),s.addClass("fancybox-lock-test"),o=i(t).width(),s.removeClass("fancybox-lock-test"),i("<style type='text/css'>.fancybox-margin{margin-right:"+(o-e)+"px;}</style>").appendTo("head")})}(window,document,jQuery);

(function($) {

	$('.fancybox-gallery, a[data-lightbox="image"]').fancybox({
	    helpers:  {
            title : {
                type: 'over'
            },
	        overlay : {
	            showEarly : false
	        }
	    }
	});

})(jQuery);