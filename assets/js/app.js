"use strict";

$(document).ready(function () {
  $(".fancybox").fancybox();

  var cnt2 = {
    0: {
      items: 1
    },
    480: {
      items: 1
    },
    768: {
      items: 2
    },
    992: {
      items: 2
    }
  };
  var cnt3 = {
    0: {
      items: 1
    },
    480: {
      items: 1
    },
    768: {
      items: 3
    },
    992: {
      items: 2
    }
  };
  var cnt7 = {
    0: {
      items: 3
    },
    480: {
      items: 3
    },
    768: {
      items: 7
    },
    992: {
      items: 9
    }
  };
  function slider(sliderName, count, resp, loop) {
    if (loop) {
      loop = true;
    }
    $(sliderName).owlCarousel({
      items: count,
      loop: loop,
      nav: true,
      pagination: false,
      navText: ["<i class='my-arrow-left'></i>", "<i class='my-arrow-right'></i>"],
      responsive: resp
    });
  };
  slider('[data-slider="1"]', 1);
  slider('[data-slider="9"]', 9, cnt7, false);
  slider('[data-slider="2"]', 2, cnt3);
  slider('[data-slider="3"]', 3, cnt2);
  slider('[data-slider="2-2"]', 2, cnt2);

  $('[data-slider="main"]').owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    pagination: false,
    autoplay: true,
    autoplayTimeout: 3000,
    dotsContainer: '#dots',
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