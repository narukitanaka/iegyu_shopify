/*
* scroll
*/

$(function () {
	// #で始まるアンカーをクリックした場合に処理
	$('a[href^=#]').click(function () {
		// スクロールの速度
		var speed = 300; // ミリ秒
		// アンカーの値取得
		var href = $(this).attr("href");
		// 移動先を取得
		var target = $(href == "#" || href == "" ? 'html' : href);
		// 移動先を数値で取得
		var position = target.offset().top;
		// スムーススクロール
		$('body,html').animate({ scrollTop: position }, speed, 'swing');
		return false;
	});

	$('.js-has-subnav').mouseover(function () {
		$('.p-mega-menu').addClass('is-megamenu-show');
	})
	$('.js-has-subnav').mouseleave(function () {
		$('.p-mega-menu').removeClass('is-megamenu-show');
	})
	if (window.matchMedia('(max-width: 768.98px)').matches) {
		$('.p-mega-menu__block dt').on('click', function () {
			$(this).toggleClass('is-acd-open');
			$(this).next('dd').slideToggle();
		});
	}
	$('.p-hamburger').on('click', function () {
		navToggle();
	});
});

let navFlg = false;
function navToggle() {
	if (!navFlg) {
		$('.l-header__ham-content').addClass('is-ham-open');
		$('.c-ham-txt').text('CLOSE');
		$('body').addClass('is-fixed');
		$('.l-header__nav-content').addClass('is-nav-open');
		navFlg = true;
	} else {
		$('.l-header__ham-content').removeClass('is-ham-open');
		$('.c-ham-txt').text('MENU');
		$('body').removeClass('is-fixed');
		$('.l-header__nav-content').removeClass('is-nav-open');
		navFlg = false;
	}
}

/*
* css swicher
*/
function css_browser_selector(u) {
	var ua = u.toLowerCase(),
		is = function (t) { return ua.indexOf(t) > -1 },
		e = 'edge', g = 'gecko', w = 'webkit', s = 'safari', o = 'opera', m = 'mobile',
		h = document.documentElement,
		b = [
			(!(/opera|webtv/i.test(ua)) && /msie\s(\d)/.test(ua)) ? ('ie ie' + RegExp.$1) :
				!(/opera|webtv/i.test(ua)) && is('trident') && /rv:(\d+)/.test(ua) ? ('ie ie' + RegExp.$1) :
					is('edge/') ? e :
						is('firefox/2') ? g + ' ff2' :
							is('firefox/3.5') ? g + ' ff3 ff3_5' :
								is('firefox/3.6') ? g + ' ff3 ff3_6' : is('firefox/3') ? g + ' ff3' :
									is('gecko/') ? g :
										is('opera') ? o + (/version\/(\d+)/.test(ua) ? ' ' + o + RegExp.$1 :
											(/opera(\s|\/)(\d+)/.test(ua) ? ' ' + o + RegExp.$2 : '')) :
											is('konqueror') ? 'konqueror' :
												is('blackberry') ? m + ' blackberry' :
													is('android') ? m + ' android' :
														is('chrome') ? w + ' chrome' :
															is('iron') ? w + ' iron' :
																is('applewebkit/') ? w + ' ' + s + (/version\/(\d+)/.test(ua) ? ' ' + s + RegExp.$1 : '') :
																	is('mozilla/') ? g :
																		'',
			is('j2me') ? m + ' j2me' :
				is('iphone') ? m + ' iphone' :
					is('ipod') ? m + ' ipod' :
						is('ipad') ? m + ' ipad' :
							is('mac') ? 'mac' :
								is('darwin') ? 'mac' :
									is('webtv') ? 'webtv' :
										is('win') ? 'win' + (is('windows nt 6.0') ? ' vista' : '') :
											is('freebsd') ? 'freebsd' :
												(is('x11') || is('linux')) ? 'linux' :
													'',
			'js'];
	c = b.join(' ');
	h.className += ' ' + c;
	return c;
};
css_browser_selector(navigator.userAgent);