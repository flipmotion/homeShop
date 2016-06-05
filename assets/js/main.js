 $(document).ready(function() {
 	$('.block-1').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
		if (isInView, visiblePartY) {
			// element is now visible in the viewport
			$(this).addClass('in-view');
		} else {
			$(this).removeClass('in-view');
		}
	});
 	$('.block-2').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
		if (isInView, visiblePartY) {
			// element is now visible in the viewport
			$(this).addClass('in-view');
		} else {
			$(this).removeClass('in-view');
		}
	});
	$('.block-3').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
		if (isInView, visiblePartY) {
			// element is now visible in the viewport
			$(this).addClass('in-view');
		} else {
			$(this).removeClass('in-view');
		}
	});
	$('.block-4').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
		if (isInView, visiblePartY) {
			// element is now visible in the viewport
			$(this).addClass('in-view');
		} else {
			$(this).removeClass('in-view');
		}
	});
	$('.block-5').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
		if (isInView, visiblePartY) {
			// element is now visible in the viewport
			$(this).addClass('in-view');
		} else {
			$(this).removeClass('in-view');
		}
	});
	$('.block-6').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
		if (isInView, visiblePartY) {
			// element is now visible in the viewport
			$(this).addClass('in-view');
		} else {
			$(this).removeClass('in-view');
		}
	});
	$('.block-7').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
		if (isInView, visiblePartY) {
			// element is now visible in the viewport
			$(this).addClass('in-view');
		} else {
			$(this).removeClass('in-view');
		}
	});
	$('.block-8').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
		if (isInView, visiblePartY) {
			// element is now visible in the viewport
			$(this).addClass('in-view');
		} else {
			$(this).removeClass('in-view');
		}
	});
	$('.block-9').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
		if (isInView, visiblePartY) {
			// element is now visible in the viewport
			$(this).addClass('in-view');
		} else {
			$(this).removeClass('in-view');
		}
	});
	$('.block-10').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
		if (isInView, visiblePartY) {
			// element is now visible in the viewport
			$(this).addClass('in-view');
		} else {
			$(this).removeClass('in-view');
		}
	});
	$('.block-11').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
		if (isInView, visiblePartY) {
			// element is now visible in the viewport
			$(this).addClass('in-view');
		} else {
			$(this).removeClass('in-view');
		}
	});
	$('.block-12').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
		if (isInView, visiblePartY) {
			// element is now visible in the viewport
			$(this).addClass('in-view');
		} else {
			$(this).removeClass('in-view');
		}
	});
	$('.block-13').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
		if (isInView, visiblePartY) {
			// element is now visible in the viewport
			$(this).addClass('in-view');
		} else {
			$(this).removeClass('in-view');
		}
	});
	$('.block-14').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
		if (isInView, visiblePartY) {
			// element is now visible in the viewport
			$(this).addClass('in-view');
		} else {
			$(this).removeClass('in-view');
		}
	});
	$('.block-15').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
		if (isInView, visiblePartY) {
			// element is now visible in the viewport
			$(this).addClass('in-view');
		} else {
			$(this).removeClass('in-view');
		}
	});
	$('.block-16').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
		if (isInView, visiblePartY) {
			// element is now visible in the viewport
			$(this).addClass('in-view');
		} else {
			$(this).removeClass('in-view');
		}
	});
$('.block-17').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
		if (isInView, visiblePartY) {
			// element is now visible in the viewport
			$(this).addClass('in-view');
		} else {
			$(this).removeClass('in-view');
		}
	});
$('.block-18').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
		if (isInView, visiblePartY) {
			// element is now visible in the viewport
			$(this).addClass('in-view');
		} else {
			$(this).removeClass('in-view');
		}
	});



	$('a.smooth').click(function(){
		$('html, body').animate({
			scrollTop: $( $.attr(this, 'href') ).offset().top - 150
		}, 1000);
		return false;
	});
	
	 $(document).click(function(event) {
		if ($(event.target).closest('[data-item="offcanvas-menu"]').length) {
			$('body').addClass('active');
			$('.my-offcanvas-trigger').addClass('active');
			$('[data-item="offcanvas-menu"]').addClass('active');
		}
		else {
			$('body').removeClass('active');
			$('a.my-offcanvas-trigger').removeClass('active');
			$('[data-item="offcanvas-menu"]').removeClass('active');
		}
		event.stopPropagation();
	  });
	$('.speporator-item').hover(
		function(){
			$('.speporator-item').addClass('active');
		},
		function(){
			$('.speporator-item').removeClass('active');
		}
	);
	$('.speporator-item-2').hover(
		function(){
			$('.speporator-item-2').addClass('active');
		},
		function(){
			$('.speporator-item-2').removeClass('active');
		}
	);
	$('.speporator-item-3').hover(
		function(){
			$('.speporator-item-3').addClass('active');
		},
		function(){
			$('.speporator-item-3').removeClass('active');
		}
	);
	$('.speporator-item-4').hover(
		function(){
			$('.speporator-item-4').addClass('active');
		},
		function(){
			$('.speporator-item-4').removeClass('active');
		}
	);
	$('.speporator-item-5').hover(
		function(){
			$('.speporator-item-5').addClass('active');
		},
		function(){
			$('.speporator-item-5').removeClass('active');
		}
	);
	$('.speporator-item-6').hover(
		function(){
			$('.speporator-item-6').addClass('active');
		},
		function(){
			$('.speporator-item-6').removeClass('active');
		}
	);
	$('.my-offcanvas-trigger').click(function(event){
		$('[data-item="offcanvas-menu"]').toggleClass('active');
		$('body').toggleClass('active');
		$(this).toggleClass('active');
		event.stopPropagation();
	});
	$(".owl-carousel").owlCarousel({
		items : 1,
		navigation : true,
		loop: true,
		pagination: false,
		itemsDesktop : [1000,1],
		itemsDesktopSmall : [900,1],
		itemsTablet: [600,1],
		nav:true,
		navText: [
		  "<i class='my-arrow-left'></i>",
		  "<i class='my-arrow-right'></i>"
      	],
	});
 	send();
 	var form = $('[data-form="send"]');
	$(form).validator().on('submit', function (e) {
		if ($(this).hasClass('disabled')) {
			// handle the invalid form...
			e.preventDefault();
		} else {
			// everything looks good!
			send();
		}
	});
 	var myMap;
	ymaps.ready(init);
	function init () {
		myMap = new ymaps.Map('map', {
			center: [55.7290811, 37.5705167],
			zoom: 17,
			controls: []
		}),
		myMap.behaviors
			.disable(['rightMouseButtonMagnifier' , 'scrollZoom'])
			myPlacemark = new ymaps.Placemark([55.7290811, 37.5705167], {
				hintContent: [
				''
			].join(''),
				balloonContentBody: [
				''// '<div class=\'map_holder\'><div class=\'map_header\'><p>Контакты</p><\/div><div class=\'map_address\'><div class=\'icon\'><\/div><p>г. Москва, м. Митино</p><\/div><div class=\'map_phone\'><div class=\'icon\'><\/div><p><strong>+ 7 965-242-97-42</strong></p><p><strong>+ 7 926-113-58-17</strong></p><\/div><div class=\'map_date\'><div class=\'icon\'><\/div><p>Пн-Пт с 09:00 до 18:00</p><\/div><div class=\'map_mail\'><div class=\'icon\'><\/div><p><a href="mailto:Topsales15@mail.ru">Topsales15@mail.ru</a></p><\/div><\/div>'
			].join('')
			}, {
				iconLayout: 'default#image',
				iconImageHref: 'assets/img/pin.png',
				iconImageSize: [46, 76],
				iconImageOffset: [-23, -70]
			});
		myMap.geoObjects.add(myPlacemark);
	}
 });
 function send(){
	var form = $('[data-form="send"]');
	form.ajaxForm(function() {
		//$('#dog-form').modal('hide');
		// $('#call-modal3').on('hidden.bs.modal', function (e) {
		// 	$('#thx2').modal('show');
		// });
		// //$('#call-modal').modal('hide');
		// $('#call-modal').on('hidden.bs.modal', function (e) {
		// 	$('#thx').modal('show');
		// });
		// //$('#call-modal2').modal('hide');
		// $('#call-modal2').on('hidden.bs.modal', function (e) {
		// 	$('#thx').modal('show');
		// });
		$('#call1').modal('hide');
		$('#call2').modal('hide');
		$('#call3').modal('hide');
		$('#call4').modal('hide');
		$('#call5').modal('hide');
		$('#call6').modal('hide');
		$('#thx').modal('show');
		$(form).resetForm();
	});
}


