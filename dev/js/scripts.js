
var $burger = $("#burger-icon");
var $nav = $('nav[data-nav]');
var $navA = $('nav[data-nav] a');
var isVisible = false;

function mouseClick(){

    console.log("click");
    if(isVisible === false){
        $nav.show();
        isVisible = true;
    }
    else{
        $nav.hide();
        isVisible = false;
    }
}

$burger.on( "click", mouseClick);
// close the mobile menu when menu link is clicked
$navA.on( "click", mouseClick);


$(document).ready(function() {

  // $('.carousel').slick({
  //     infinite: true,
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //     adaptiveHeight: true,
  //     // autoplay: true,
  //     fade: true,
  //     cssEase: 'linear',
  //     // arrows: false,
  //     dots: true
  // });
  $('.carousel').slick({
      dots: true,
      arrows: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      mobileFirst: true,
      adaptiveHeight: true,
      responsive: [
          {
              breakpoint: 1200,
              // settings: "unslick"
          },
          {
              breakpoint: 992,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
              }
          },
          {
              breakpoint: 768,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
              }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
      ]
  });
});
