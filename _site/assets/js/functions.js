var main = function() {


// When a linked is clicked it auto scroll up to that ID
// $('.day').click(function(event){
//     // a[href*=".html#"] contains
//     // a[href$=".html#"] ends
//     // a[href^=".html#"] starts
//     var duration = 300;
//     var url = $(this).attr('href');
//     var target = url;
//     console.log(target)
//
//     if( target.length ){
//         event.preventDefault();
//         $('html, body').animate({
//           scrollTop: target.offset().top
//         },duration);
//     }
//
// });

// It gives the Class hovered-sized-day-unit so the day-unit
// can get bigger once hovered and also gives it a litte shadow
// SASS in _sass/_horarios.sass  about line 98
$('.day-unit').hover(function(){
  $(this).toggleClass('hovered-sized-day-unit');
  //console.log('Function Hover working')
});

}// ends main

$(document).ready(main);
