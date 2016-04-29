var $ = require('jquery');  

$(window).on('load resize', function(){
	var wancho = $(window).width(),
			walto = $(window).height()

	console.log(wancho)
	$('.header').css('height', walto)
	$('.header-banner').css('height', walto - 100)

	$('.stadium-article').hover(function(){
		$(this).find('.stadium-block').show()
	}, function() {
		$(this).find('.stadium-block').hide()
	})
})