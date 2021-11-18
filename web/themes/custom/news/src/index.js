(function (Drupal, $) {
  Drupal.behaviors.addClassByClick = {
    attach: function (context, settings) {
      $('#block-hamburgermenuimage').click(function () {
        $('.popup-menu').toggleClass('active');
        $('#page-wrapper').append('<div class="menu-backdrop">');
        $('.menu-backdrop').click(function () {
          $('.popup-menu').removeClass('active');
          $('.menu-backdrop').remove()
        })
      });
    }
  }
})(Drupal, jQuery)


