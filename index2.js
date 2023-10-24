var swiper = new Swiper(".mySwiper", {
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




Shery.makeMagnet(".btn" /* Element to target.*/, {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
});





// JavaScript to preload the iframe
function preloadIframe() {
    var iframeContainer = document.getElementById('.right');

    // Show the iframe container
    iframeContainer.style.display = 'block';

    // Preload the iframe by accessing its contentWindow
    var iframe = iframeContainer.querySelector('iframe');
    if (iframe && iframe.contentWindow) {
        iframe.contentWindow.location.href = iframe.src;
    }
}

// Call the preloadIframe function when the page loads
window.addEventListener('load', preloadIframe);