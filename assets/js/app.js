"use strict";

$(document).ready(function () {
  $(".fancybox").fancybox();
  var cnt1 = {
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
      items: 3
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
      items: 5
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
  slider('[data-slider="3"]', 3, cnt2, true);
  slider('[data-slider="2-2"]', 2, cnt1);

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

  function rangeSlider(slider) {
    var sliders = $('.range-sliders');
    var min = sliders.data("min");
    var max = sliders.data("max");

    for (var i = 0; i < sliders.length; i++) {

      noUiSlider.create(sliders[i], {
        start: [min, max],
        connect: true,
        //step:1,
        range: {
          'min': [min],
          'max': [max]
        }
      });
      sliders[i].noUiSlider.on('slide', addValues);
      /*sliders[i].noUiSlider.on('update', function( values, handle ) {
      	var value = values[handle];
      	console.log();
      });*/
    }

    function addValues() {
      var allValues = [];
      var valueContainer = $('.from');
      var minVal = $(valueContainer).find('.from-value');
      var maxVal = $(valueContainer).find('.to-value');

      for (var i = 0; i < sliders.length; i++) {
        allValues.push(sliders[i].noUiSlider.get());
        $(minVal[i]).text(Math.round(allValues[i][0]));
        $(maxVal[i]).text(Math.round(allValues[i][1]));
      };
    }
    addValues();
  }
  rangeSlider();
  $('[data-item="reset"]').on('click', function (e) {
    //$(e.currentTarget).parents('form')[0].reset();
    location.reload();
  });
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
  function showRequest(formData, jqForm, options) {
    var queryString = $.param(formData);
    var formElement = jqForm[0];
    return true;
  }
  function showResponse(responseText, statusText, xhr, $form) {
    var name = $form.data('item');
    if (name === 'call') {
      $('.modal').modal('hide');
      $('#thx-call').modal('show');
    } else if (name === 'call-2') {
      $('.modal').modal('hide');
      $('#thx-call-2').modal('show');
    } else if (name === 'call-3') {
      $('.modal').modal('hide');
      $('#thx-call-3').modal('show');
    } else {}
  }
  var options = {
    beforeSubmit: showRequest,
    success: showResponse
  };
  form.ajaxForm(options);
  /*form.ajaxForm(function() {
  	$('.modal').modal('hide');
  	$('#thx-call').modal('show');
  });*/
}