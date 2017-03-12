$(document).ready(function() {
	$('.inputmark').val(0);
	$('.inputmark2').val(0);
	$('.right-navigation li').eq(0).addClass('on');
	$('.block').height($(window).height());
});

$(function() {
	$('.block_box').mousewheel(function(event, delta) {
		if ($('.inputmark2').val() == 1) {
			return;
		}
		qpgd(delta);
	});
});

function qpgd(a) {
	var b = parseInt($('.inputmark').val());
	var c = $('.block').length;
	if (a < 0) {
		if (-b == c - 1) {
			return;
		}
		b -= 1;
		$('.inputmark2').val(1);
	} else if (a > 0) {
		if (-b === 0) {
			return;
		}
		b += 1;
		$('.inputmark2').val(1);
	}
	$('.inputmark').val(b);
	$('.right-navigation li').eq(-b).addClass('on').siblings('li').removeClass('on');
	click_hh = -$(window).height() * b;
	$('.block_box').animate({
		'bottom': click_hh
	}, 1000);
	setTimeout(function() {
		$('.inputmark2').val(0);
	}, 1400);
}
$('.right-navigation li').click(function() {
	var b = $(this).index();
	$(this).addClass('on').siblings('li').removeClass('on');
	$('.inputmark').val(-b);
	click_hh = $(window).height() * b;
	$('.block_box').animate({
		'bottom': click_hh
	}, 1000);
});
$(window).resize(function() {
	$('.block').height($(window).height());
});