(function (Drupal, $) {
  Drupal.behaviors.addClassByClick = {
    attach: function (context, settings) {
      $('#block-hamburgermenuimage').click(function () {
        $('.popup-menu').addClass('active').show(400);
        $('#page-wrapper').append('<div class="menu-backdrop">');
        $('.menu-backdrop').click(function () {
          $('.popup-menu').hide(200);
          $('.menu-backdrop').hide(200)
        })
      });
    }
  }
})(Drupal, jQuery)


