"use strict";var debounce=function(e){let n;return function(){let t=this,o=arguments;n&&window.cancelAnimationFrame(n),n=window.requestAnimationFrame((function(){e.apply(t,o)}))}};!function($){$(".card").on("click",(function(){var e=$(this).data("cat");fetch("http://localhost:8888/mindworks/wp-json/wp/v2/cards?categories="+e).then((e=>e.json())).then((e=>{""!=e&&e.forEach((e=>{var n="";return n="<article>",n+="<h1>"+e.title.rendered+"</h1>",n+="<p>"+e.excerpt.rendered+"</p>",n+="<p>"+e.content.rendered+"</p>",n+="</article>",$(".pop-up").append(n)}))})).catch((e=>{console.log("Failed to fetch page: ",e)}))})),$('a.scroll-to[href^="#"]').on("click",(function(e){var n,t;e.preventDefault(),n=$($.attr(this,"href")),t=300,setTimeout((function(){$([document.documentElement,document.body]).animate({scrollTop:$(n).offset().top},t,"swing")}),0)}));const e=$(".slide.companion");function n(){window.innerWidth<=2*$("main").outerWidth()?$("body").on("click",(function(){!$(event.target.parentNode.parentNode).hasClass("slide")&&e.hasClass("opened")&&$(e).toggleClass("opened")})):$("body").off()}if(e.each((function(){e.addClass("started"),$(document).on("click","button.open.companion",(function(){e.toggleClass("opened")}))})),n(),!window.matchMedia("(any-hover: none)").matches){window.addEventListener("resize",debounce((function(){n()}),!0));const t=getComputedStyle(document.documentElement).getPropertyValue("--main-header-height"),o=16*parseFloat(t);window.addEventListener("scroll",(function(){let n=$(window).scrollTop(),t=Math.abs(n-o);n>=o?e.css({top:0}):e.css({top:t})}),!0)}$(document).on("click",".format-menu .explore a",(function(){e.toggleClass("opened"),event.preventDefault()}))}(jQuery);