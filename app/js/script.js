/* ###### init skrol to point  ######*/
/* ###### bower i page-scroll-to-id  ######*/
(function($){
    $(window).load(function(){
        $("a[rel='m_PageScroll2id']").mPageScroll2id({
				  highlightClass:"left-nav-el-active"
				});
				 $("a[rel='m_PageScroll2id']").mPageScroll2id({
				  highlightClass:"left-nav-el-active"
				});
    });
 })(jQuery);

$(document).ready(function(){

	$('.section-tarifs-slider-cont').find('.section-tarifs-select').find('select').on('change', function() {
		changeText(this);
	});
	$('.section-tarifs-slider-cont').find('.section-tarifs-slider-check').find('input[type="checkbox"]').prop('checked', true).on('change', function() {
		changeText(this);
	});
	
	function changeText(el) {
		var $parent = $(el).parents('.section-tarifs-slider-cont');
		var selectedItem = $parent.find('.section-tarifs-select').find('select option:selected');
		var newPrice = $parent.find('.section-tarifs-slider-check').find('input[type="checkbox"]').prop('checked') ? selectedItem.data('contr') : selectedItem.data('price');
		$parent.find('.section-tarifs-slider-price span').text(newPrice);
	}

	$('[data-open-callback-modal]').on('click', function(){
		$('.callback-modal').bPopup();
	});


	//modal
	$('.section-main-form button').click(function(){
		$('.section-modal').bPopup({
	 			closeClass:'section-modal-but',
				position:['auto','auto'],
				follow: [true,false],
	 	});
	})


	$('.section-view').css('height',$(window).height())
	$(window).resize(function(){
		$('.section-view').css('height',$(window).height())
	});
	console.log($(window).height()	)
	console.log($(window).width()	)
	var numberUserBlock = function(selector){
		var $elem = $(selector),
			number = parseInt($elem.text()),
			current = number - 190,
			length = number.toString().length,
			interval = null,
			additive = 3,
			delay = 1000,
			numbers = $.find();


		$elem.empty();

		for(var i = 0; i < length; i++){
			var $newNumber = $('<span class="section-main-title-number-el">0</span>');
			numbers.push($newNumber);
			$elem.append($newNumber);
		}

		interval = setInterval(function(){
			current+= additive;
			if(current >= number){
				current = number;
				clearInterval(interval);
			}
			showNumber();
		}, delay);

		function showNumber(){
			var newText = '0000000000000000000' + current;
			newText = newText.substr(newText.length - length);
			var newtextItems = newText.split('');
			for(var sI = 0; sI < length; sI++){
				numbers[sI].text(newtextItems[sI]);
			}
		}
	}

numberUserBlock('.section-main-title-number');
numberUserBlock('.section-about-number');

	$('.section-main-video').on('click', function(ev) {

    $(".introVideo")[0].src += "&autoplay=1";
    ev.preventDefault();
 		$('.section-main-video img').hide();
 		$('.section-main-video-filter').hide();
  });

	//animate logo
	$(window).scroll(function(){
		var needUpSpace = 800;
		var upSpace = $(this).scrollTop();
		var a = $(".top-menu-logo").css('width')
		if ( upSpace >= 800 && a == "0px") {$(".top-menu-logo").stop().animate({'width':'200'},500)};
		if ( upSpace < 800 && a == "200px") {$(".top-menu-logo").stop().animate({'width':'0'},500)};
	})

	//Tooltip
	$('.section-time-quote-bottom-link').click(function(){
		$('.section-time-quote-tooltip-wraper').toggleClass('hidden');
	})
	/* ###### init bpopup  ######*/
	/* ###### bower i bpopup  ######*/
	// $('.button-modal').click(function(){
	// 	$('.modal-block').bPopup({
	// 			closeClass:'closer'
	// 	});
	// })
	/* ###### init stickUp  ######*/
	/* ###### bower i sticky  ######*/
	/*$("#sticker").sticky({topSpacing:0});*/


	/* ###### init OwlCarousel2  ######*/
	/*!!! add class owlCarousel !!!*/
	/* ###### bower i OwlCarousel2 ######*/
	$(".section-about-slider").owlCarousel({
	 	center: true,
    items:1,
    loop: true,
	 	autoHeight : false,
	 	pagination : true,
	 	autoPlay : true,
	 	nav:true,
			navText:['<img src="img/nav-left.png">','<img src="img/nav-right.png">']
	 	}
	 );


	var owl = $(".section-tarifs-slider").owlCarousel({
	 	center: true,
    	items:1,
    	loop: false,
	 	autoHeight : false,
	 	pagination : true,
	 	autoPlay : true,
	 	nav:true,
			navText:['<img src="img/nav-left.png">','<img src="img/nav-right.png">']
	 	}
	 );

	$('.section-tarifs-sale-but').on('click', function() {
		owl.trigger('to.owl.carousel', [2, 200]);
	});
	$('.section-main-sale-but').on('click', function() {
		owl.trigger('to.owl.carousel', [2, 200]);
	});
	


	/* ###### init validate form  ######*/
	/* ###### bower i jquery-validation ######*/
	/*$('#myform').validate({
			rules:{ //правила для полей
				name:{
					required:true,
					minlength:5 //минимальное значение поля
				},
				phone:{
					required:true,
					number:true
				}
			},
			messages:{
				name:{
					required: 'Это поле обязатлеьно для заполнения', //какое сообщение будет выводиться
					minlength:'Имя должно быть не меньше 5 символов'
				},
				phone:{
					required: 'Это поле обязатлеьно для заполнения',
					number:'Введите правильный телефон'
				},

			}
			submitHandler:function(){ //выполнять если все валидно
					alert('Форма заполнена правильно');
				}
	})*/

	/* ###### init animatedModal  ######*/
	/* ###### bower i animatedModal  ######*/
	// $(".play").animatedModal({
	//  	 animatedIn:'lightSpeedIn',
	//     animatedOut:'bounceOutDown',
	//     color:'#0394c7'
	//  	});

	/* ###### init responsive-tabs  ######*/
	/* ###### bower i responsive-tabs  ######*/
/*    $('#horizontalTab').responsiveTabs({
        rotate: false,
        startCollapsed: 'accordion',
        collapsible: 'accordion',
        setHash: true,
        active: 0

    });*/

	/* ###### init fancybox  ######*/
	/* ###### bower i fancybox  ######*/
	// $(".play").fancybox();
	// a(href="img/item-house-1.png" rel="group-element(для объединения в группу)") - image in a
	//	img(src="img/item-house-1.png", alt="")





})
