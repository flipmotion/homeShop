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
      items: 2
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
  var sliders = document.getElementsByClassName('range-sliders');

  for (var i = 0; i < sliders.length; i++) {

    noUiSlider.create(sliders[i], {
      start: [4000, 8000],
      connect: true,
      range: {
        'min': [2000],
        'max': [10000]
      }
    });

    sliders[i].noUiSlider.on('slide', addValues);
  }

  function addValues() {
    var allValues = [];

    for (var i = 0; i < sliders.length; i++) {
      console.log(allValues.push(sliders[i].noUiSlider.get()));
    };

    console.log(allValues);
  }

  $(".tags").select2({
    theme: 'bootstrap',
    minimumResultsForSearch: Infinity,
    placeholder: 'Выберите тип'
  }).on('change', function () {
    var $selected = $(this).find('option:selected');
    var $container = $(this).siblings('.tags-container');

    var $list = $('<ul>');
    $selected.each(function (k, v) {
      var $li = $('<li class="tag-selected"><a class="destroy-tag-selected">×</a>' + $(v).text() + '</li>');
      $li.children('a.destroy-tag-selected').off('click.select2-copy').on('click.select2-copy', function (e) {
        var $opt = $(this).data('select2-opt');
        $opt.attr('selected', false);
        $opt.parents('select').trigger('change');
      }).data('select2-opt', $(v));
      $list.append($li);
    });
    $container.html('').append($list);
  }).trigger('change');
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