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

	$('.p-hambager').on('click', function () {
		navOpen();
	});
	//fixバナー
	$(window).scroll(function () {
		// windowの高さ取得
		let wh = window.innerHeight;
		//footerのTOP位置取得
		let footerTop = $('.l-footer').offset().top;
		let bottomHide = footerTop - wh;
		let scroll = $(this).scrollTop();
		//スクロール位置が100以上、フッター未満
		if (100 < scroll && scroll < bottomHide) {
			$('.p-fix-bnr').addClass('is-bnr-show');
      // $('.p-hambager-content').addClass('hambager-active');
		} 
    else {
			$('.p-fix-bnr').removeClass('is-bnr-show');
      // $('.p-hambager-content').removeClass('hambager-active');
		}
    //スクロール位置が500以上
    if (700 < scroll) {
      $('.p-hambager-content').addClass('hambager-active');
		} 
    else {
      $('.p-hambager-content').removeClass('hambager-active');
		}
	});

});
let scrollpos;
let navFlg = false;
function navOpen() {
	if (!navFlg) {
		if ('scrollingElement' in document) {
			scrollpos = document.scrollingElement.scrollTop;
		} else {
			scrollpos = document.body.scrollTop;
		}
		$('body').addClass('is-fixed');
		$('.p-hambager-content').addClass('is-ham-open');
		$('.p-mega-menu').addClass('is-megamenu-open');
		$('.c-ham-txt').text('CLOSE');
		navFlg = true;
	} else {
		$('body').removeClass('is-fixed');
		$('.p-hambager-content').removeClass('is-ham-open');
		$('.p-mega-menu').removeClass('is-megamenu-open');
		$('.c-ham-txt').text('MENU');
		window.scrollTo(0, scrollpos);
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