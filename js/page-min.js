!function(e){"use strict";const n=e("body").children("aside.sidebar");let t=[];e(".sidenote").each((function(){const t=e(this);n.append(t)})),e("sup").each((function(n){t.push([]);const s=e(this);let o=s.offset().top,i=s.offset().left;t[n].push(i),t[n].push(o)})),e(".sidenote").each((function(n){const s=e(this),o=s.find("button.close");t[n][0],t[n][1];const i=n+1;s.prepend('<span class="sup">'+i+"</span>"),o.on("click",(function(){s.removeClass("opened")})),window.matchMedia("(any-hover: none)").matches})),e("sup").each((function(n){const t=e(this),s=e("aside.sidebar > *")[n];t.on("click",(function(){s.classList.toggle("opened")}))}));let s=[],o=!1;function i(){s=[],e(".expandable").each((function(n){const t=e(this),i=t.find(".main > header").height();s.push(i),t.height(s[n]),t.removeClass("expanded"),o||t.on("click","button.expand",(function(){let o=t.hasClass("expanded");const i=e(this),a=i.parent();o?(a.hide(),t.stop().animate({height:s[n]},300,"swing",(function(){t.removeClass("expanded"),a.fadeIn()}))):(t.addClass("expanded"),a.hide(),t.stop().animate({height:1e3},300,"swing",(function(){t.height("auto"),a.fadeIn()}))),i.hasClass("go-to")?scrollTo(t.children("section"),300,300):scrollTo(t,300,0)}))})),o=!0}i(),window.addEventListener("resize",debounce((function(){window.matchMedia("(any-hover: none)").matches||i()}),!0)),window.addEventListener("orientationchange",debounce((function(){i()}),!0))}(jQuery);