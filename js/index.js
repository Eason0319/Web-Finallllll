$(document).ready(function () {
  $('#btn2').click(function () {
    $('#shinimg').css('opacity', '1')
    $('#ciaoimg').css('opacity', '0')
    $('#meiimg').css('opacity', '0')
    $('#nangimg').css('opacity', '0')
    $('#feild').css('opacity', '0')
  });

  $('#btn1').click(function () {
    $('#ciaoimg').css('opacity', '1')
    $('#shinimg').css('opacity', '0')
    $('#meiimg').css('opacity', '0')
    $('#nangimg').css('opacity', '0')
    $('#feild').css('opacity', '0')
  });

  $('#btn3').click(function () {
    $('#ciaoimg').css('opacity', '0')
    $('#shinimg').css('opacity', '0')
    $('#meiimg').css('opacity', '1')
    $('#nangimg').css('opacity', '0')
    $('#feild').css('opacity', '0')
  });

  $('#btn4').click(function () {
    $('#ciaoimg').css('opacity', '0')
    $('#shinimg').css('opacity', '0')
    $('#meiimg').css('opacity', '0')
    $('#nangimg').css('opacity', '1')
    $('#feild').css('opacity', '0')
  });

  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  });
  $('.showmenu').on('click', function (e) {
    e.preventDefault();
    $('.menu-list').toggleClass('active');
  });
})
$(document).ready(function(){
  setTimeout(function(){
      $(".loading-wrapper").fadeOut(500);
  },1500);
});