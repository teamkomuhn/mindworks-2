import Swiper from"https://unpkg.com/swiper@7/swiper-bundle.esm.browser.min.js";!function($){"use strict";let e=[];$(".tabs").children().each((function(){const t=$(this),n=t.find(".tab-button");e.push(t),n.on("click",(function(){for(const t of e)t.removeClass("active");t.addClass("active")}))}));const t=(e,t=250,n=0,o=0)=>{setTimeout((()=>{$([document.documentElement,document.body]).animate({scrollTop:$(e).offset().top-o},t,"linear")}),n)},n=document.querySelectorAll(".container-expandable"),o=[],i=[];for(const[e,s]of n.entries()){const l=s.querySelector(".button-expandable"),a=s.querySelector(".expandable");o.push(a),i.push(a.getBoundingClientRect().height),a.style.height="0px",l.addEventListener("click",(()=>{"0px"!==a.style.height?(a.style.height="0px",t(a,250,0,250)):a.style.height=`${i[e]}px`,n[e].classList.toggle("expanded")}))}new Swiper(".swiper",{speed:500,spaceBetween:100,autoHeight:!0,loop:!0,paginationClickable:!0,pagination:{el:".swiper-pagination",clickable:!0,renderBullet:(e,t)=>`<li class="${t}"></li>`},keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:!0})}(jQuery);