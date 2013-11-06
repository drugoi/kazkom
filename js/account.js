$(document).ready(function () {
	$('.e-get__up').on('click', function () {
		$('html, body').animate({
			scrollTop: 0
		}, 800);
	});
	$('body').on('click', function () {
		$('.b-companies, .b-settings, .b-send__sms').fadeOut();
	});
	$('.e-head-account').hover(function () {
		$('.e-head-account__rnn').stop(true).fadeIn().css('display', 'block');
	}, function () {
		$('.e-head-account__rnn').stop(true).fadeOut();
	});
	$('.e-setting__item').on('click', function (e) {
		var parents = $('.e-name__item--wrapper', '.e-daily__limit__item--wrapper', '.e-monthly__limit__item--wrapper', '.e-amount__item--wrapper', '.e-setting__item--wrapper');
		var siblings = $('.e-name__item', '.e-daily__limit__item', '.e-monthly__limit__item', '.e-amount__item', '.e-setting__item');
		$(this).parent().parent('.b-table__lines').toggleClass('edit');
		$(this).parent().toggleClass('edit');
		$(this).children('.e-pencil__icon').toggleClass('edit').toggleClass('icon-pencil').toggleClass('icon-ok').toggleClass('icon-light');
		$(this).toggleClass('edit');
		$(this).parent().siblings(parents).toggleClass('edit').children().toggleClass('edit').toggleAttr('disabled');
	});
	$('.b-head-account__main').on('click', function (e) {
		e.preventDefault();
		e.stopPropagation();
		$('.b-companies').fadeToggle();
	});
	$('.e-head-user__edit').on('click', function (e) {
		e.preventDefault();
		e.stopPropagation();
		$('.b-settings').fadeToggle();
	});
	$('.e-head-menu__item').on('click', function (e) {
		e.preventDefault();
		e.stopPropagation();
		$('.e-head-menu__item').removeClass('active');
		$(this).addClass('active');
	});
	$('.e-editbutton__send').on('click', function (e) {
		e.preventDefault();
		e.stopPropagation();
		$('.b-send__sms').fadeToggle();
	});
});