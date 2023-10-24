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