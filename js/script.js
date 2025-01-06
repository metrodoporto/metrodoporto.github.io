document.addEventListener("DOMContentLoaded", (event) => {
    const viewportWidth = window.innerWidth;
    const rotation = -(viewportWidth * -360)/700;

    document.querySelector('.loading-icon').style.opacity = 1;

    gsap.from(".loading-icon", { 
        duration: 3,
        x: -(viewportWidth/2)-150,
        rotation: 270,
    });

    console.log('Viewport Width:', viewportWidth);

});

function showLoadingScreen() {
    document.querySelector('.loading-icon').style.opacity = 0;
    document.getElementById('loading').style.display = 'block';
    gsap.to('#loading', {
        duration: 1,
        opacity: 1,
    })
}

function hideLoadingScreen() {

    const viewportWidth = window.innerWidth;
    const rotation = -(viewportWidth * -360)/700;

    gsap.timeline()
    .to('#loading', {
        duration: 1, // Duration of the fade-out animation in seconds
        opacity: 0,
        onComplete: function() {
            document.getElementById('loading').style.display = 'none';
        }
    })
    .to('.loading-icon', {
        duration: 3,
        x: viewportWidth/2-100,
        rotation: -200,
    }, 0.1);
}

window.addEventListener('load', function() {
    setTimeout(hideLoadingScreen, 3300); // You can adjust the timeout as needed
});

// Custom navigation function
function navigate(event, url) {
    event.preventDefault(); // Prevent the default link action
    // Perform any custom actions here
    console.log('Navigating to:', url);

    showLoadingScreen(); // Show the loading screen

    // Simulate a delay before navigating
    setTimeout(() => {
        window.location.href = url; // Navigate to the specified URL
    }, 1000); // Adjust the delay as needed
}