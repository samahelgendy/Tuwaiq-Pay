// start navbar
(function($) { 
    $(function() { 
  
      //  open and close nav 
      $('#navbar-toggle').click(function() {
        $('nav ul').slideToggle();
      });
  
  
      // Hamburger toggle
      $('#navbar-toggle').on('click', function() {
        this.classList.toggle('active');
      });
  
  
      // If a link has a dropdown, add sub menu toggle.
      $('nav ul li a:not(:only-child)').click(function(e) {
        $(this).siblings('.navbar-dropdown').slideToggle("slow");
  
        // Close dropdown when select another dropdown
        $('.navbar-dropdown').not($(this).siblings()).hide("slow");
        e.stopPropagation();
      });
  
  
      // Click outside the dropdown will remove the dropdown class
      $('html').click(function() {
        $('.navbar-dropdown').hide();
      });
    }); 
  })(jQuery);
 
// end navbar
// start animation

let scroll = window.requestAnimationFrame || function (callback){
    window.setTimeout(callback, 1000/60)
  }
  let elementsToShow = document.querySelectorAll(".show-on-scroll");
  function loop () {
   elementsToShow.forEach((element) =>{
    if(isElementInViewport(element)){
       element.classList.add('is-visible');
    }else{
       element.classList.remove('is-visible');
    }
   })
   scroll(loop)
  }
  
  loop();
  
  function isElementInViewport(el){
   if(typeof jQuery === "function" && el instanceof jQuery){
       el = el[0];
   }
   let rect = el.getBoundingClientRect();
   return(
       (rect.top <=0 && rect.bottom >=0) || (rect.bottom >= (window.innerHeight ||document.documentElement.clientHeight) && rect.top <=(
           window.innerHeight ||document.documentElement.clientHeight
       ))
       ||
       (rect.top >=0 && rect.bottom <=(window.innerHeight || document.documentElement.clientHeight))
   )
  }
  // end animation

  // start swiper
  // const swiper = new Swiper('.swiper', {
  //   // Optional parameters
  //   loop: true,
  
  //   // If we need pagination
  //   pagination: {
  //     el: '.swiper-pagination',
  //   },
  
  //   // Navigation arrows
  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  //   },
  //   slidesPerView: 1,
  // spaceBetween: 10,
  // // using "ratio" endpoints
  // breakpoints: {
  //   '@0.75': {
  //     slidesPerView: 1,
  //     spaceBetween: 20,
  //   },
  //   '@1.00': {
  //     slidesPerView: 1,
  //     spaceBetween: 40,
  //   },
  //   '@1.50': {
  //     slidesPerView: 2,
  //     spaceBetween: 50,
  //   },
  // }

  // });

  var swiper = new Swiper(".swiper", {
    spaceBetween:25,
    loop:true,
    autoplay: {
        delay:2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        578: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView:1,
        },
        1024: {
            slidesPerView:2,
        },
    },
});

  
  // end swiper