"use strict";

$(document).ready(function () {

  function slider(sliderName, count) {
    $(sliderName).owlCarousel({
      items: count,
      loop: true,
      nav: true,
      pagination: false,
      navText: ["<i class='my-arrow-left'></i>", "<i class='my-arrow-right'></i>"]
    });
  };
  slider('[data-slider="1"]', 1);
  slider('[data-slider="9"]', 9);
  slider('[data-slider="2"]', 2);
  slider('[data-slider="3"]', 3);

  $('[data-slider="main"]').owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    pagination: false,
    autoplay: true,
    autoplayTimeout: 3000,
    navText: ["<i class='my-arrow-left'></i>", "<i class='my-arrow-right'></i>"]
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
});
function send() {
  var form = $('[data-form="send"]');
  form.ajaxForm(function () {

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