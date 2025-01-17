$(document).ready(function(){
  $(".owl-carousel").owlCarousel(
    {
        responsiveClass:true,
        // navText:[
        //   `<div class="owl-button prev">
        //     <svg width="16" height="32" viewBox="0 0 16 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        //     <path d="M14.8387 2.27597C15.0816 2.0245 15.216 1.6877 15.2129 1.3381C15.2099 0.988509 15.0697 0.654093 14.8225 0.406882C14.5753 0.159671 14.2408 0.0194457 13.8912 0.0164078C13.5417 0.0133699 13.2049 0.147762 12.9534 0.39064L2.05738 11.2866C0.807572 12.5368 0.105469 14.2322 0.105469 16C0.105469 17.7677 0.807572 19.4631 2.05738 20.7133L12.9534 31.6093C13.2049 31.8522 13.5417 31.9866 13.8912 31.9835C14.2408 31.9805 14.5753 31.8403 14.8225 31.5931C15.0697 31.3459 15.2099 31.0114 15.2129 30.6618C15.216 30.3122 15.0816 29.9754 14.8387 29.724L3.94271 18.828C3.19283 18.0779 2.77157 17.0606 2.77157 16C2.77157 14.9393 3.19283 13.9221 3.94271 13.172L14.8387 2.27597Z" fill="#C2C8CD"/>
        //     </svg>
        //   </div>`,
        //   `<div class="owl-button next">
        //     <svg width="16" height="32" viewBox="0 0 16 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        //     <path d="M14.8387 2.27597C15.0816 2.0245 15.216 1.6877 15.2129 1.3381C15.2099 0.988509 15.0697 0.654093 14.8225 0.406882C14.5753 0.159671 14.2408 0.0194457 13.8912 0.0164078C13.5417 0.0133699 13.2049 0.147762 12.9534 0.39064L2.05738 11.2866C0.807572 12.5368 0.105469 14.2322 0.105469 16C0.105469 17.7677 0.807572 19.4631 2.05738 20.7133L12.9534 31.6093C13.2049 31.8522 13.5417 31.9866 13.8912 31.9835C14.2408 31.9805 14.5753 31.8403 14.8225 31.5931C15.0697 31.3459 15.2099 31.0114 15.2129 30.6618C15.216 30.3122 15.0816 29.9754 14.8387 29.724L3.94271 18.828C3.19283 18.0779 2.77157 17.0606 2.77157 16C2.77157 14.9393 3.19283 13.9221 3.94271 13.172L14.8387 2.27597Z" fill="#C2C8CD"/>
        //     </svg>
        //   </div>`
        // ],
        nav: false,
        dots:true,
        responsive:{
            0:{
                items:3,
                margin:0,
                loop:true,
            },
            750:{
                items:3,
                margin:32,
                loop:true,

            },
            1300:{
                items:3,
                margin:32,
                loop:true,

            },
            1450:{
                items:3,
                margin:20,
                loop:true,
            }
        }
    });
});


$(window).scroll(function() {
   var scroll_height = $(this).scrollTop();
   var start_article_offset = $('.article_thumb').offset().top;
   var header_offset = $('header').offset().top + $('header').height()
   var end_article_offset= $('.main_article').offset().top + $('.main_article').height()

   if (scroll_height>=(start_article_offset-77)){
     $('.widget').addClass('sticky')
   }
   else{
     $('.widget').removeClass('sticky')
   }


   if (scroll_height>=(header_offset)){$('.sticky_header').addClass('visible')}
   else{$('.sticky_header').removeClass('visible')}
});



$('.header_menu-about').hover(
  function(){
    console.log($(this))
  $(this).children('.menu_list').addClass('visible_menu');
},
  function(){
    $(this).children('.menu_list').removeClass('visible_menu');
  }
)
