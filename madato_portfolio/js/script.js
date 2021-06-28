$(function () {

  //ページ内スクロール
  var $nav = $(".header");

  $('a[href^="#"]').on("click", function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top;
    $("html, body").animate(
      {
        scrollTop: position,
      },
      300,
      "swing"
    );
    return false;
  });

  //ページトップ
  $("#js-page-top").on("click", function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      300
    );
    return false;
  });
});

function myF(){
  
}

window.addEventListener('load',function(){
  viewSlide('.split-img img');
});

function viewSlide(className, slideNo=-1){
  let imArray=document.querySelectorAll(className);
  if(slideNo>=0){
    imArray[slideNo].style.opacity=0;
  }
  slideNo++;
  if(slideNo>=imArray.length){
    slideNo=0;
  }
  if(document.body.clientWidth>767){
    imArray[slideNo].style.opacity = 1;
  }
  else{
    imArray[slideNo].style.opacity = 0;
  }
  let msec=5000;
  setTimeout(function(){
    viewSlide(className,slideNo);
  },msec);
}
