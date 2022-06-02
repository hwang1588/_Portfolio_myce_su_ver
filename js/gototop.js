$(function() {
  // Amount of scrolling before button is shown/hidden.
  var offset = 1000;

  // Fade duration
  var duration = 500;

  // Toggle view of button when scrolling.
  $(window).scroll(function() {
    if ($(this).scrollTop() > offset) {
      $('#c-go-top').fadeIn(duration);
    } else {
      $('#c-go-top').fadeOut(duration);
    }
  });

  // Scroll to top when button is clicked.
  $('#c-go-top').click(function(event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, duration);
    return false;
  });

});

$(function(){
  var $header = $('#header'); //선택자를 변수에 할당
  var $page = $('.test'); //트리거 발동 영역
  var $window = $(window);
  var pageOffsetTop = $page.offset().top;//색상 변경될 부분의 Top값 계산
  
  $window.resize(function(){ //모바일 리사이징시 Top값을 재계산
    pageOffsetTop = $page.offset().top;
  });
  
  $window.on('scroll', function(){ //스크롤 시작
    var scrolled = $window.scrollTop() >= pageOffsetTop; //스크롤된 상태; true or false
    $header.toggleClass('down', scrolled); //해당클래스 토글
  });
});