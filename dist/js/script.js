!function(t){t(window).load(function(){t("a[rel='m_PageScroll2id']").mPageScroll2id({highlightClass:"left-nav-el-active"}),t("a[rel='m_PageScroll2id']").mPageScroll2id({highlightClass:"left-nav-el-active"})})}(jQuery),$(document).ready(function(){$("[data-open-callback-modal]").on("click",function(){$(".callback-modal").bPopup()}),$(".section-main-form button").click(function(){$(".section-modal").bPopup({closeClass:"section-modal-but",position:["auto","auto"],follow:[!0,!1]})}),$(".section-view").css("height",$(window).height()),$(window).resize(function(){$(".section-view").css("height",$(window).height())}),console.log($(window).height()),console.log($(window).width());var t=function(t){function i(){var t="0000000000000000000"+e;t=t.substr(t.length-a);for(var i=t.split(""),o=0;a>o;o++)r[o].text(i[o])}var o=$(t),n=parseInt(o.text()),e=n-190,a=n.toString().length,l=null,c=3,s=1e3,r=$.find();o.empty();for(var g=0;a>g;g++){var u=$('<span class="section-main-title-number-el">0</span>');r.push(u),o.append(u)}l=setInterval(function(){e+=c,e>=n&&(e=n,clearInterval(l)),i()},s)};t(".section-main-title-number"),t(".section-about-number"),$(".section-main-video").on("click",function(t){$(".introVideo")[0].src+="&autoplay=1",t.preventDefault(),$(".section-main-video img").hide(),$(".section-main-video-filter").hide()}),$(window).scroll(function(){var t=$(this).scrollTop(),i=$(".top-menu-logo").css("width");t>=800&&"0px"==i&&$(".top-menu-logo").stop().animate({width:"200"},500),800>t&&"200px"==i&&$(".top-menu-logo").stop().animate({width:"0"},500)}),$(".section-time-quote-bottom-link").click(function(){$(".section-time-quote-tooltip-wraper").toggleClass("hidden")}),$(".section-about-slider").owlCarousel({center:!0,items:1,loop:!0,autoHeight:!1,pagination:!0,autoPlay:!0,nav:!0,navText:['<img src="img/nav-left.png">','<img src="img/nav-right.png">']}),$(".section-tarifs-slider").owlCarousel({center:!0,items:1,loop:!0,autoHeight:!1,pagination:!0,autoPlay:!0,nav:!0,navText:['<img src="img/nav-left.png">','<img src="img/nav-right.png">']})});