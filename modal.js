$(document).ready(function() {
  $('#show-modal').click(function() {
    $('.modal').css('display', 'block');
  });

  $('#footer-close-btn').click(function() {
      $('.modal').css('display', 'none');
  });

  $('#modal-header-close').click(function() {
    $('.modal').css('display', 'none');
  })
});
