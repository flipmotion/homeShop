 $(document).ready(function() {
 	
function slider(sliderName,count) {
	$(sliderName).owlCarousel({
 		items : count,
 		loop:true,
 		nav:true,
 		pagination: false,
 		navText: [
 		"<i class='my-arrow-left'></i>",
 		"<i class='my-arrow-right'></i>"
 		],
 	});
};
slider('[data-slider="1"]',1);
slider('[data-slider="9"]',9);
slider('[data-slider="2"]',2);
slider('[data-slider="3"]',3);



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
 	$('.mega-dropdown-menu').on('click', function(event) {
 		event.stopPropagation();
 		
 		
 	});
 	$('.list').on('click',function(e){
 		$(this).next('.collapse').collapse('toggle');
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


