// script.js

// Function to show the loading screen
function showLoadingScreen() {
    document.getElementById('loading-screen').style.display = 'flex';
}

// Function to hide the loading screen
function hideLoadingScreen() {
    document.getElementById('loading-screen').style.display = 'none';
}

// Function to navigate to a specific section
function navigateTo(section) {
    // Show the loading screen
    showLoadingScreen();

    // Hide all sections
    document.querySelectorAll('section').forEach(sec => sec.style.display = 'none');

    // Show the selected section
    document.getElementById(section).style.display = 'block';

    // Replace hyphens with slashes for the URL
    const urlSection = section.replace(/-/g, '/');
    
    // Update the URL without reloading the page
    history.pushState(null, '', `/${urlSection}`);

    // Hide the loading screen after a short delay to simulate loading
    setTimeout(hideLoadingScreen, 500); // Adjust the timeout as needed
}

// Handle the back/forward buttons
window.addEventListener('popstate', () => {
    const path = window.location.pathname;
    const section = path.slice(1).replace(/\//g, '-');
    if (section) {
        navigateTo(section);
    } else {
        navigateTo('home');
    }
});

// Initial load
window.addEventListener('DOMContentLoaded', () => {
    const path = window.location.pathname;
    const section = path.slice(1).replace(/\//g, '-');
    if (section) {
        navigateTo(section);
    } else {
        navigateTo('home');
    }
});