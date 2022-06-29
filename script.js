$(document).ready(function(){
   $(window).scroll(function(){
      if(this.scrollY > 20){
         $('.navbar').addClass("sticky");
      }else{
         $('.navbar').removeClass("sticky");
      }
   });

   // enable navbar script
   $('.menu-btn').click(function(){
      $('.navbar .menu').toggleClass("active");
      $('.menu-btn i').toggleClass("active");
   });
});

// this for scrolling effect

let line1= document.querySelector('.line1');

window.onscroll = () =>{
   let pos = window.scrollY - 5;
   
   line1.style.right = `${pos}px`

}