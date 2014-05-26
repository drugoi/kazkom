/*  Global Variables*/
var slideNum = $(this).data('slide');
var lang;
var menu_item;
var item_type;
var slideNum;
var map;
var map2;

function initialize() {
	var mapOptions = {
		zoom: 12,
		scrollwheel: false,
		center: new google.maps.LatLng(43.2775, 76.895833),
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
	map2 = new google.maps.Map(document.getElementById('map-canvas-two'), mapOptions);
}
google.maps.event.addDomListener(window, 'load', initialize);
$(document).ready(function () { /* Scroll Header */
	$('header').affix({
		offset: {
			top: 0
		}
	}); 
	/* Lang Switching */
	$('.b-current__lang').on('click', function () {
		if ($(this).hasClass('active')) {
			$('.m-lang__switch').fadeOut();
			$(this).removeClass('active');
		} else {
			$(this).addClass('active');
			$('.m-lang__switch').fadeIn();
		}
	});
	$('.b-menu__item:first-child').fadeIn();
	$('.e-welcome__item:first-child').addClass('active');
	$('.m-lang__set').on('click', function (e) {
		lang = $(this).data('lang');
		$('.m-lang__switch').fadeOut();
		$('.e-current__lang').text(lang);
		$('.b-current__lang').removeClass('active');
	});
	$(".e-call__me").mask("8 (999) 999 9999");
	$('.e-book__call').on('click', function () {
		console.log($(".e-call__me").val());
		$('.b-call__bubble').addClass('active').fadeIn();
		$('.b-call__bubble.active > *').fadeOut(100);
	});
	$('.e-get__up').on('click', function () {
		$('html, body').animate({
			scrollTop: 0
		}, 800);
	}); /* Menu Items */
	$('.e-welcome__item').on('click', function () {
		menu_item = $(this).data('menu');
		if ($(this).hasClass('active')) {
			return false;
		} else {
			$('.e-welcome__item').removeClass('active');
			$(this).addClass('active');
			$('.b-menu__item').fadeOut(200);
			$('.b-menu__item[data-item="' + menu_item + '"]').fadeIn(300);
			if (menu_item == 'bank_map') {
				initialize();
			} else if (menu_item == 'branch_map') {
				initialize();
			}
		}
	});
	$('.e-enter__text').on('click', function () {
		location.replace('account.html');
	}); /* SMS-commands menu */
	$('.e-sms__menu--item').on('click', function () {
		item_type = $(this).data('type');
		if ($(this).hasClass('active')) {
			return false;
		} else {
			$('.e-sms__menu--item, .b-sms__info--item').removeClass('active');
			$('.b-sms__info--item').hide();
			$(this).addClass('active');
			$('.b-sms__info--item[data-property="' + item_type + '"]').fadeIn().addClass('active');
		}
	}); /* Slider for Reviews Block */
	$('.m-slider__control').on('click', function () {
		slideNum = $(this).data('slide');
		if ($(this).hasClass('active')) {
			return false;
		} else {
			$('.b-reviews__slider:not(.b-reviews__slider[data-slider="'+ slideNum +'"])').hide(1);
			$('.m-slider__control, .b-reviews__slider:not(.b-reviews__slider[data-slider="'+ slideNum +'"])').removeClass('active');
			$('.b-reviews__slider[data-slider="'+ slideNum +'"]').show(1).addClass('active');
			$(this).addClass('active');
		}
	}); /* Slider for Specials Block */
	$('.m-specials__control').on('click', function () {
		if ($(this).hasClass('active')) {
			return false;
		} else {
			$('.m-specials__control, .b-specials__slider').removeClass('active');
			$(this).addClass('active');
			$('.b-specials__slider').fadeOut(100);
			$('.b-specials__slider[data-slider="' + slideNum + '"]').fadeIn(800).addClass('active');
		}
	});
	$('#scene').parallax();
	$(window).resize(function () {
		$('#scene').parallax();
	});
});