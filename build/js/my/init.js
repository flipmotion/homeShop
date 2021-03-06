'use strict';
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

  function rangeSlider() {
    var sliders = $('.range-sliders');

    for (var i = 0; i < sliders.length; i++) {
      var slider = noUiSlider.create(sliders[i], {
        start: [$(sliders[i]).data("min"), $(sliders[i]).data("max")],
        connect: true,
        step: 1,
        range: {
          'min': [$(sliders[i]).data("min")],
          'max': [$(sliders[i]).data("max")]
        }
      });
      $(sliders[i]).data('slider', slider);
      sliders[i].noUiSlider.on('slide', addValues);
    }
    
    function addValues() {
      var allValues = [];
      var valueContainer = $('.from');
      var minVal = $(valueContainer).find('.from-value');
      var maxVal = $(valueContainer).find('.to-value');
      var input = $(valueContainer).siblings('input');

      for (var i = 0; i < sliders.length; i++) {
        allValues.push(sliders[i].noUiSlider.get());

        $(minVal[i]).val(Math.round(allValues[i][0]));
        $(maxVal[i]).val(Math.round(allValues[i][1]));
        $(input[i]).val(allValues[i]);
      };
    }
    $('.from-value').change(function(){
      var hidden = $(this).parents('.from').next().siblings('input');
      var prev = $(this).parents('.from').next();
      var min = prev.data('min');
      
      if(min <= this.value) {
        prev.data('slider').set([this.value, null]);
        var val = prev.data('slider').get();
        hidden.val(val);
      } else {
        this.value = min;
        prev.data('slider').set([this.value, null]);
        var val = prev.data('slider').get();
        hidden.val(val);
      }

    });
    $('.to-value').change(function(){
     var hidden = $(this).parents('.from').next().siblings('input');
     var prev = $(this).parents('.from').next();
     var max = prev.data('max');
     if(max >= this.value) {
      prev.data('slider').set([null, this.value]);
      var val = prev.data('slider').get();
      hidden.val(val);
    } else {
      this.value = max;
      prev.data('slider').set([null, this.value]);
      var val = prev.data('slider').get();
      hidden.val(val);
    }
  });
    addValues();
  }
  rangeSlider();

  /*function rangeSlider(){

    function createSlider (slide) {
      var slider = noUiSlider.create(sliders[slide], {
        start: [$(sliders[i]).data("min"), $(sliders[i]).data("max")],
        connect: true,
        step: 1,
        range: {
          'min': [$(sliders[i]).data("min")],
          'max': [$(sliders[i]).data("max")]
        }
      });

      $(sliders[slide]).data('slider', slider);
      sliders[slide].noUiSlider.on('change', addValues);
    }

    function addValues(values, handle) {
      console.log( $(event.target).parents('.form-group').find('.from-value').val(values));
      //console.log($(event.currentTarget).find('.from-value').val(values[0]));
    }
    var sliders = $('.range-sliders');

    for ( var i = 0; i < sliders.length; i++ ) {
      createSlider(i);
    }

    $('.from-value').change(function(){
      $(this).parents('.from').next().data('slider').set([this.value, null]);
    });
    $('.to-value').change(function(){
      $(this).parents('.from').next().data('slider').set([null, this.value]);
    });
  }
  rangeSlider();*/




  $('[data-item="reset"]').on('click', function (e) {
    location.reload();
  });
  $(".tags").select2({
    theme: 'bootstrap',
    minimumResultsForSearch: Infinity
  }).on('change', function () {
    var $selected = $(this).find('option:selected');
    var $container = $(this).siblings('.tags-container');
    var $input = $(this).siblings('input');
    var arr = [];
    var str;
    var $list = $('<ul>');
    var ul = $(this).siblings('.select2').find('.select2-selection__rendered');

    $selected.each(function (k, v) {
      var $li = $('<li class="tag-selected"><a class="destroy-tag-selected">×</a>' + $(v).text() + '</li>');
      $li.children('a.destroy-tag-selected').off('click.select2-copy').on('click.select2-copy', function (e) {
        var $opt = $(this).data('select2-opt');
        $opt.attr('selected', false);
        $opt.parents('select').trigger('change');
      }).data('select2-opt', $(v));
      $list.append($li);
      arr.push($(v).text());
      str = arr.join(', ');
    });

    var div = $('<div>' + str + '</div>');

    if (div.text() != 'undefined') {
      ul.append(div);
    }
    $input.val(str);

    $container.html('').append($list);
  }).trigger('change');

  $(document).on('click', '[data-show-more]', function () {
    var btn = $(this);
    var page = btn.attr('data-next-page');
    var id = btn.attr('data-show-more');
    var bx_ajax_id = btn.attr('data-ajax-id');
    var block_id = "#comp_" + bx_ajax_id;

    var data = {
      bxajaxid: bx_ajax_id
    };
    data['PAGEN_' + id] = page;

    $.ajax({
      type: "GET",
      url: window.location.href,
      data: data,
      timeout: 3000,
      success: function success(data) {
        $("#btn_" + bx_ajax_id).remove();
        $(block_id).append(data);
        console.log(block_id);
      }
    });
  });

  var filterForm = $('[data-form="filter"]');

  filterForm.on('submit', function (e) {
    e.preventDefault();
    var data = decodeURI($(this).serialize());
    console.log(data);
  });
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
}