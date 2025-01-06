document.addEventListener("DOMContentLoaded", (event) => {
    const viewportWidth = window.innerWidth;

    const durationAnim = (viewportWidth * 2.6) / 800;

    document.querySelector('.loading-icon').style.opacity = 1;

    gsap.from(".loading-icon", { 
        duration: durationAnim,
        x: -(viewportWidth/2)-150,
        rotation: 360,
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
    const durationAnim = (viewportWidth * 2.6) / 800;

    gsap.timeline()
    .to('#loading', {
        duration: 1, // Duration of the fade-out animation in seconds
        opacity: 0,
        onComplete: function() {
            document.getElementById('loading').style.display = 'none';
        }
    })
    .to('.loading-icon', {
        duration: durationAnim,
        x: viewportWidth/2-100,
        rotation: -360,
    }, 0.1);
}

window.addEventListener('load', function() {
    setTimeout(hideLoadingScreen, 4000); // You can adjust the timeout as needed
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