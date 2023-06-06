var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    grabCursor : true ,
    
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });















var pic1 = document.querySelector("#img1");
var pic2 =  document.querySelector("#img2"); 
var pic3 =  document.querySelector("#img3"); 
var head = document.querySelector("#head")

head.addEventListener("mouseenter",function(){
    head.style.opacity = ".7"
})

head.addEventListener("mouseleave",function(){
    head.style.opacity = "1"
})

pic1.addEventListener("mouseenter",function(){

    
    pic1.style.marginTop = "-10px"
})


pic1.addEventListener("mouseleave",function(){

    pic1.style.marginTop = "0px"


})

pic2.addEventListener("mouseenter",function(){
    pic2.style.marginTop = "-10px"

})

pic2.addEventListener("mouseleave",function(){
    pic2.style.marginTop = "0px"

})

pic3.addEventListener("mouseenter",function(){
    pic3.style.marginRight = "-10px"

})

pic3.addEventListener("mouseleave",function(){
    pic3.style.marginRight = "0px"

})







var tl = gsap.timeline();

tl.from("#page1 #img1",{

    opacity : 0,
    duration : 0.8 ,
    y : 100,
    ease : Expo.ease


})

.from("#page1 #img2",{
     x : 80 ,
    duration : 0.8 ,
    opacity : 0,



},"-=0.8")

.from("#page1 #img3",{
    y : -100 ,
    duration : 0.8 ,
    opacity : 0,

},"-=0.8")

// .from("#page1 h1",{
//     opacity : 0,
//     duration : 0.8 ,


// },"-=0.8")


.from("#small,#page2 h1 " ,{

    scrollTrigger: {

        trigger : "#page2" ,
        scroller : "#main" , 
        start : "top 20%" ,
        // markers : true ,
        scrub :  3 ,
        pin : true ,
        end :  "top 50%" ,





    },

    opacity : 0 ,
    ease : Expo.easeIn ,
    stagger : 1 ,
    y : 100 ,
})






.from("#bar1 ,#bar2 , #wid1 , #wid2 ,#right" ,{

    scrollTrigger: {

        trigger : "#bar" ,
        scroller : "#main" , 
        start : "top 20%" ,
        // markers : true ,
        scrub :  2 ,
        pin : true ,
        end :  "top 40%" ,





    },

    opacity : 0 ,
    ease : Expo.easeIn ,
    stagger : 1 ,
    y : -100 ,
})


.from("#page4 h1 , #inner img",{

    scrollTrigger: {
        trigger : "#page4",
        scroller : "#main" , 
        start : "top 30%" ,

        // markers : true ,
        scrub : 2 ,
        pin : true ,
        end : "top 70%" ,

    },

    stagger : 1 ,
     
    opacity: 0,
    y : 100 ,
    ease : Expo.easeIn ,


})

 let move = document.querySelector("#move-circle");
 let h1 = document.querySelector("#H-one");

document.addEventListener("mousemove",function(dets){
    move.style.left = `${dets.x}px`
    move.style.top = `${dets.y}px`


})

h1.addEventListener("mouseenter",function(){
    this.style.mixBlendMode = "difference"
    move.style.transform = "scale(1.5)"
})

h1.addEventListener("mouseleave",function(){
    move.style.transform = "scale(1)"

})




// function show(){

//     gsap.registerPlugin(ScrollTrigger);

// // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

// const locoScroll = new LocomotiveScroll({
//   el: document.querySelector("#bg"),
//   smooth: true
// });
// // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
// locoScroll.on("scroll", ScrollTrigger.update);

// // tell ScrollTrigger to use these proxy methods for the "#bg" element since Locomotive Scroll is hijacking things
// ScrollTrigger.scrollerProxy("#bg", {
//   scrollTop(value) {
//     return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//   }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//   getBoundingClientRect() {
//     return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//   },
//   // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
//   pinType: document.querySelector("#bg").style.transform ? "transform" : "fixed"
// });





// // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
// ScrollTrigger.refresh();


// }

// show();


