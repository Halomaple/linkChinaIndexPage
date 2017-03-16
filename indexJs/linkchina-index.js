//DNA animation
var animDelay = ('animationDelay' in document.documentElement.style) ? 'animationDelay' : 'webkitAnimationDelay';

(function(window, document) {
	// var count = Math.ceil(window.innerWidth / 12 * 2);
	var count = 50,
		i = 0,
		div, delay;
	var divList = document.createDocumentFragment();
	for (i; i < count; i++) {
		div = document.createElement('div');
		delay = (i - count) * 0.2;
		div.style[animDelay] = delay + 's,' + delay / 2 + 's';
		divList.appendChild(div);
	}
	document.getElementById('container').appendChild(divList);
})(window, document);

(function(window, document) {
	// var count = Math.ceil(window.innerWidth / 12 * 2);
	var count = 10,
		i = 0,
		div, delay;
	var divList = document.createDocumentFragment();
	for (i; i < count; i++) {
		div = document.createElement('div');
		delay = (i - count) * 0.2;
		div.style[animDelay] = delay + 's,' + delay / 2 + 's';
		divList.appendChild(div);
	}
	document.getElementById('container2').appendChild(divList);
})(window, document);

(function(window, document) {
	// var count = Math.ceil(window.innerWidth / 12 * 2);
	var count = 25,
		i = 0,
		div, delay;
	var divList = document.createDocumentFragment();
	for (i; i < count; i++) {
		div = document.createElement('div');
		delay = (i - count) * 0.2;
		div.style[animDelay] = delay + 's,' + delay / 2 + 's';
		divList.appendChild(div);
	}
	document.getElementById('container3').appendChild(divList);
})(window, document);

(function(window, document) {
	// var count = Math.ceil(window.innerWidth / 12 * 2);
	var count = 65,
		i = 0,
		div, delay;
	var divList = document.createDocumentFragment();
	for (i; i < count; i++) {
		div = document.createElement('div');
		delay = (i - count) * 0.2;
		div.style[animDelay] = delay + 's,' + delay / 2 + 's';
		divList.appendChild(div);
	}
	document.getElementById('container4').appendChild(divList);
})(window, document);

//Dot zooming
(function(window, document) {
	var i = 0,
		count = 20,
		div;
	for (i; i < count; i++) {
		div = document.createElement('div');
		delay = (i - count) * 0.6;
		var radius = parseInt(Math.random() * (8) + 8, 10) + 'px';

		div.style.width = radius;
		div.style.height = radius;

		div.style.left = parseInt(Math.random() * (window.innerWidth - 10), 10) + 'px';
		div.style.top = parseInt(Math.random() * (window.innerHeight - 10), 10) + 'px';

		div.style[animDelay] = delay + 's,' + delay / 2 + 's';

		document.getElementById('zooming-dot').appendChild(div);
	}
})(window, document);

$(document).ready(function() {
	//styling
	$('body').show();

	// $('.title-tips').css({
	// 	'left': 'calc(50% -' + ($(".activity-img").width() / 2) + ');'
	// });

	// $('.title-tips').css();


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