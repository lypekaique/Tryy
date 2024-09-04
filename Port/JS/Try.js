$(document).ready(function() {
  var transitionend = "webkitTransitionEnd mozTransitionEnd oTransitionEnd transitionend";
  window.setTimeout(function () {
    $('div#corp_logo').addClass('step1').on(transitionend, function () {
      $(this).off(transitionend);

      var objSectionEldenring = $('ul#background_top').children('li').eq(2);
      objSectionEldenring.children('div.border').addClass('extend').on(transitionend, function () {
        $(this).off(transitionend).next('div.img').css('opacity', 1);

        window.setTimeout(function () {
        
          $('div#corp_logo').addClass('step2').on(transitionend, function () {
            $(this).off(transitionend);
            $('div#corp_logo').addClass('step3');
          });

          objSectionEldenring.children('div.cover').addClass('shrink').on(transitionend, function () {
            $(this).off(transitionend); //

        
            var cur_idx = 2; //

            $('ul#background_top').addClass('first_fc').children('li').each(function () {
              if ($(this).index() < cur_idx) {
                $(this).addClass('slide_lh');
              } else if ($(this).index() > cur_idx) {
                $(this).addClass('slide_rh');
              } else {
                $(this).addClass('crr');

                $(this).addClass('chg_clr').on(transitionend, function () {
                  $(this).off(transitionend);

                  window.setTimeout(function () {
                    $('#background_top').children('li').not(':eq(2)').children('div.cover').addClass('shrink').on(transitionend, function () {
                      $(this).off(transitionend);
                      $('#splash_cover').remove();
                    });

                    $('#background_top').children('li').not(':eq(2)').children('div.img').css('opacity', 1);

                    objSectionEldenring.children('div.border').addClass('hide');
                  }, 150);
                });
              }
            });
          });
        }, 250);
      });
    });
  }, 500);
  function pc_splashPerformance() {
    if (ViewportFlag == 'sp') {
      $('div.swiper-wrapper').find('img').each(function () {
        $(this).on('load', function () {
          $(this).removeAttr('data-src').fadeIn('fast');
        }).attr('src', $(this).attr('data-src')).css('display', 'none');
      });
      return false;
    }
  
  
    window.setTimeout(function () {
      $('div#corp_logo').addClass('step1').on(transitionend, function () {
        $(this).off(transitionend);
  
        var objSectionEldenring = $('ul#background_top').children('li').eq(2);
        objSectionEldenring.children('div.border').addClass('extend').on(transitionend, function () {
          $(this).off(transitionend).next('div.img').css('opacity', 1);
  
          window.setTimeout(function () {
            $('div#corp_logo').addClass('step2').on(transitionend, function () {
              $(this).off(transitionend);
              $('div#corp_logo').addClass('step3');
            });
  
            objSectionEldenring.children('div.cover').addClass('shrink').on(transitionend, function () {
              $(this).off(transitionend); //
  
              var cur_idx = 2; //
  
              $('ul#background_top').addClass('first_fc').children('li').each(function () {
                if ($(this).index() < cur_idx) {
             
                  $(this).addClass('slide_lh');
                } else if ($(this).index() > cur_idx) {
                  $(this).addClass('slide_rh');
                } else {

                  $(this).addClass('crr');
  
                  $(this).addClass('chg_clr').on(transitionend, function () {
                    $(this).off(transitionend); 
  
                    window.setTimeout(function () {
              
                      $('#background_top').children('li').not(':eq(2)').children('div.cover').addClass('shrink').on(transitionend, function () {
                        $(this).off(transitionend);
                        $('#splash_cover').remove();
                      });
  
                      $('#background_top').children('li').not(':eq(2)').children('div.img').css('opacity', 1);
  
                      objSectionEldenring.children('div.border').addClass('hide'); //
  
                      $('ol#pc_menu').css('opacity', 1);
                      $('div#pcNewsWrapper').css('opacity', 1);
                      $('div#pcLinkWrapper').css('opacity', 1);
                    }, 150);
                  });
                }
              }); 
            });
          }, 250);
        });
      });
    }, 500);
  }
  
  
  
  
  
  var cur_idx, slct_Id, cur_anm = false;

    $('ul#background_top').children('li').mouseover(function () {
        cur_idx = $(this).index();
        if (!cur_anm) slct_Id = $(this).index();

        if ($('#background_top').hasClass('first_fc')) {
            $('#background_top').removeClass('first_fc')
                .children('li').removeClass('crr slide_lh slide_lf slide_rh slide_rf')
                .removeClass('chg_clr');

            if (cur_idx == 2) {
                hoveranim();
                return true;
            }
        }

        if (!cur_anm) {
            if ($(this).hasClass('crr')) return true;
            cur_anm = true;
            hoveranim();
        }
    });

    function hoveranim() {
        $('#background_top').children('li').each(function () {
            $(this).removeClass('crr slide_lh slide_lf slide_rh slide_rf');

            if ($(this).index() < slct_Id) {
                if (slct_Id == $('#background_top').children('li').length - 1) {
                    $(this).addClass('slide_lf');
                } else {
                    $(this).addClass('slide_lh');
                }
            } else if ($(this).index() > slct_Id) {
                if (slct_Id == 0) {
                    $(this).addClass('slide_rf');
                } else {
                    $(this).addClass('slide_rh');
                }
            } else {
                $(this).addClass('crr').on('transitionend', function () {
                    $(this).off('transitionend');

                    if (cur_idx != slct_Id) {
                        slct_Id = cur_idx;
                        hoveranim();
                    } else {
                        cur_anm = false;
                    }
                });
            }
        });
    }
});