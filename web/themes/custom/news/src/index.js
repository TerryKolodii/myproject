(function (Drupal, $) {
  Drupal.behaviors.addClassByClick = {
    attach: function (context, settings) {
      $('#block-hamburgermenuimage, #block-hamburgermenuimage-2').click(function () {
        $('#block-hamburgermenuimage-2').hide(0);
        $('.popup-menu').addClass('active').show(400);
        $('#page-wrapper').append('<div class="menu-backdrop">');
        $('.menu-backdrop').click(function () {
          $('.popup-menu').slideUp(200);
          $('.menu-backdrop').slideUp(200)
        })
      });
    }
  }
})(Drupal, jQuery);


(function (Drupal, $) {
  Drupal.behaviors.changeNewslistByClick = {
    attach: function (context, settings) {
      $('.tab .tablinks:nth-child(2)').click(function () {
        $('.block-views-blocknews-left-sidebar-block-1').slideUp(500);
        $('.block-views-blocknews-left-sidebar-block-4').css('display', 'block');
      });
      $('.tab .tablinks:nth-child(1)').click(function () {
        $('.block-views-blocknews-left-sidebar-block-4').slideUp(500);
        $('.block-views-blocknews-left-sidebar-block-1').slideDown(500);
      });
    }
  }
})(Drupal, jQuery);


(function (Drupal, $) {
  Drupal.behaviors.showMenuButtonByScroll = {
    attach: function (context, settings) {
      $(window).scroll(function () {
        $('#block-hamburgermenuimage-2').show();
        $('#block-arrowup').show();
      })
    }
  }
})(Drupal, jQuery);

(function (Drupal, $) {
  Drupal.behaviors.scrollToUpByClick = {
    attach: function (context, settings) {
      $('#block-arrowup').click(function () {
          $('#block-arrowup').hide(800);
          $('#block-hamburgermenuimage-2').hide();
          $('html, body').animate({scrollTop: 0}, 300);
        }
      )
    }
  }
})(Drupal, jQuery);

