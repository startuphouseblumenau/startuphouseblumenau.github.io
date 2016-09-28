/*
Theme: Flatfy Theme
Author: Andrea Galanti
Bootstrap Version 
Build: 1.0
http://www.andreagalanti.it
*/

$(window).load(function() { 
	//Preloader 
	$('#status').delay(300).fadeOut(); 
	$('#preloader').delay(300).fadeOut('slow');
	$('body').delay(550).css({'overflow':'visible'});
})

$(document).ready(function() {
		//animated logo
		$(".navbar-brand").hover(function () {
			$(this).toggleClass("animated shake");
		});
		
		//animated scroll_arrow
		$(".img_scroll").hover(function () {
			$(this).toggleClass("animated infinite bounce");
		});
		
		//Wow Animation DISABLE FOR ANIMATION MOBILE/TABLET
		wow = new WOW(
		{
			mobile: false
		});
		wow.init();
		
		//MagnificPopup
		//$('.image-link').magnificPopup({type:'image'});


		// OwlCarousel N1
		$("#owl-demo").owlCarousel({
			autoPlay: 3000,
			items : 3,
			itemsDesktop : [1199,3],
			itemsDesktopSmall : [979,3]
		});

		// OwlCarousel N2
		var owlDemo1 = $("#owl-demo-1").owlCarousel({
			  navigation : false, // Show next and prev buttons
			  slideSpeed : 1000,
			  paginationSpeed : 1000,
			  singleItem:true,
			  autoPlay:10000,
			  afterMove: teste
		});

		function teste(event,a) {
    		$("#example-description")[0].innerHTML = getExampleDescription(this.currentItem);
		}

		//SmothScroll
		$('a[href*=#]').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
			&& location.hostname == this.hostname) {
					var $target = $(this.hash);
					$target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
					if ($target.length) {
							var targetOffset = $target.offset().top;
							$('html,body').animate({scrollTop: targetOffset}, 600);
							return false;
					}
			}
		});
		
		//Subscribe
		new UIMorphingButton( document.querySelector( '.morph-button' ) );
		// for demo purposes only
		[].slice.call( document.querySelectorAll( 'form button' ) ).forEach( function( bttn ) { 
			bttn.addEventListener( 'click', function( ev ) { ev.preventDefault(); } );
		} );

		function getExampleDescription(index){
			switch(index){
				case 0: return "Acabaram as comlicações para pedir uma pizza. Chega de ter vários números, vários aplicativos e cadastros chatos em sites estranhos. ";
				break;
				case 1: return "A festa tá massa mas a cerveja acabou? Fica tranquilo, a gente dá um jeito. Vamos atrás da cerveja e conseguimos um entregador pra levar até aí.";
				break;
				case 2: return "Pedir um taxi sem ter que baixar um app ou ligar para a central. Agora você pode";
				break;
				case 3: return "Lembra da capa do Batman? Então, vamos atrás dela pra você ;)";
				break;				
			}
		}

});

