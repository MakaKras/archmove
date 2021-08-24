
/*----------------ВВЫПАДАЮЩЕЕ МЕНЮ СПРАВА -----------*/

$(function() {

  $('.header_menu-btn').on('click', function () {
    $('.pop-up_menu').removeClass('pop-up_menu--close');
    $('body').addClass('fixed-page');
  });
    $('.pop-up_close').on('click', function () {
    $('.pop-up_menu').addClass('pop-up_menu--close');
    $('body').removeClass('fixed-page');
     // $('body').toggleClass('lock');
  });
});


$('.reviews_slider').slick({
  arrows: true,
  dots: false,
  adaptiveHeight: true,
  // centerMode: true,
  responsive: [{
    breakpoint: 700,
    settings: {
      arrows: false,
      dots: true,
    }
  }]
});

$('.room_slider-item').slick({
  arrows: true,
  slidesToShow: 4,
  adaptiveHeight: true,
  variableWidth: true,
  adaptiveHeight: true,
  responsive: [{
    breakpoint: 1000,
    settings: {
      adaptiveHeight: true,
      arrows: false,
      dots: true,
      slidesToShow: 3,
      centerMode: true,
    }
  }]
});




// $(document).ready(function() {
  
// });

/*---------------------------------------------------*/

/*----------------ВЫПАДАЮЩЕЕ МЕННЮ С ПОВТОРНЫМ КЛИКОМ НА ОБЪЕКТ--------------------*/

// $(document).ready(function(){
//   $('.header_burger').click(function(event) {
//     $('.header_burger, .header_menu').toggleClass('active');
         // $('body').toggleClass('lock');
//   });
// })

/*---------------------------------------------------*/
