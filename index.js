
Shery.makeMagnet(".btn" /* Element to target.*/, {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
});






Shery.imageEffect("#right", {
    style: 4,
    gooey: true,
    config: {"a":{"value":1.24,"range":[0,30]},"b":{"value":-1,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.943082807184928},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.07,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":3}},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":5.79,"range":[0,100]}},
  });



// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 1,
//     grid: {
//         rows: 2,
//     },
//     spaceBetween: 30,
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
// });


// function myFunction(x) {
//   if (x.matches) { // If media query matches
//     document.body.style.backgroundColor = "yellow";
//   } else {
//    document.body.style.backgroundColor = "pink";
//   }
// }

// var x = window.matchMedia("(max-width: 430px)")
// myFunction(x) // Call listener function at run time
// x.addListener(myFunction) // Attach listener function on state changes

var swiper;

function initializeSwiper() {
    if (window.matchMedia("(max-width: 430px)").matches) {
        swiper = new Swiper(".mySwiper", {
            slidesPerView: 1,
            grid: {
                rows: 2,
            },
            spaceBetween: 30,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });
    } else {
        swiper = new Swiper(".mySwiper", {
            slidesPerView: 3,
            grid: {
                rows: 2,
            },
            spaceBetween: 30,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });
    }
}

// Initialize Swiper when the page loads
initializeSwiper();

// Update Swiper when the window is resized
window.addEventListener("resize", function () {
    if (swiper) {
        swiper.destroy(); // Destroy the existing Swiper instance
    }
    initializeSwiper(); // Reinitialize Swiper with the appropriate configuration
});