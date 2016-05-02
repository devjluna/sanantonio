var animate = function() {
	var wancho = $(window).width(),
			walto = $(window).height()
			
	$(window).on('load scroll',function() {
		$('.animated').css('opacity', '0')

		var t = $(window).scrollTop()

		if(t > walto/2){
			$('#we').addClass('fadeInUp')
		}
		if(t > walto-150){
			$('.stadium-title').addClass('fadeInUp')
		}
		if(t > walto){
			$('#owl-team').addClass('fadeInUp')
		}
		if(t > walto+300){
			$('.service-content').addClass('fadeInUp')
		}
		if(t > walto+300){
			$('.contact-block').addClass('fadeInUp')
			$('.animated-title').addClass('fadeInUp')
			$('.animated-text').addClass('fadeInUp')
		}
	})

}
module.exports = animate;