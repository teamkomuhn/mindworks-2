!function(n){"use strict";let e=[],t=!1;function o(){e=[],n(".expandable").each((function(o){const a=n(this),s=a.children("header").height();e.push(s),a.height(e[o]),a.removeClass("expanded"),t||a.on("click","button.expand",(function(){a.hasClass("expanded")?a.animate({height:e[o]},300,"swing",(function(){a.removeClass("expanded")})):(a.addClass("expanded"),a.animate({height:"100vh"},300,"swing",(function(){a.height("auto")}))),n(this).hasClass("go-to")?i(a.children("section")):i(a)}))})),t=!0}function i(e){n([document.documentElement,document.body]).animate({scrollTop:n(e).offset().top},500)}o(),window.onresize=function(){window.matchMedia("(any-hover: none)").matches||o()},window.onorientationchange=function(){o()}}(jQuery);