
//Main Menu
$('.main-nav ul li:has(ul)').addClass('submenu');
$('.main-nav ul li:has(ul)').append("<i></i>");
$('.main-nav ul i').click(function() {
    $(this).parent('li').toggleClass('open');
    $(this).parent('li').children('ul').slideToggle();
})

//Mobile Menu
$('.mob-btn').click(function() {
    if (!$('html').hasClass('show-menu')) {
        $('html').addClass('show-menu');
    } else {
        $('html').removeClass('show-menu');
    }
});

$('.overlay').click(function() {
    if ($('html').hasClass('show-menu')) {
        $('html').removeClass('show-menu');
    }
});

//Append and Prepend
$('.first ul').clone().prependTo('.main-nav').addClass('desk-hide')
$('.last ul').clone().appendTo('.main-nav').addClass('desk-hide')


//Product slider
$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: false,
  asNavFor: '.slider-nav',
  lazyLoad: 'ondemand'
});

$('.slider-nav').slick({

  slidesToShow: 8,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  focusOnSelect: true,
  lazyLoad: 'ondemand'
});



  //scroll top
  var btn = $('#scroll-top');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

//wow animation
wow = new WOW(
  {
    animateClass: 'animated',
    offset:       100,
    mobile:       false,
    callback:     function(box) {
      console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
    }
  }
);
wow.init();

//Quantity
let plus_btns = document.querySelectorAll('#plus-button');
let minus_btns = document.querySelectorAll('#minus-button');
let qty_inputs = document.querySelectorAll('#quantity');

   plus_btns.forEach(btn=>{
       btn.addEventListener('click', ()=>{
           btn.previousElementSibling.value++;
       })
    })
    minus_btns.forEach(btn=>{
       btn.addEventListener('click', ()=>{
            btn.nextElementSibling.value = (btn.nextElementSibling.value == 0) ? 0 : btn.nextElementSibling.value - 1;
        })
    })


  