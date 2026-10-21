
/* 1. Show a greeting based on the visitor's local time */
const greeting = document.getElementById("time-greeting");

if (greeting) {
    const hour = new Date().getHours();

    if (hour < 12) {
        greeting.textContent = "Hello! Welcome to my portfolio.";
    } else if (hour < 18) {
        greeting.textContent = "Good afternoon! Welcome to my portfolio.";
    } else {
        greeting.textContent = "Good evening! Welcome to my portfolio.";
    }
}

/* 2. Welcome button interaction */
const welcomeButton = document.getElementById("welcome-button");

if (welcomeButton) {
    welcomeButton.addEventListener("click", function () {
        alert("Thanks for visiting my portfolio! Explore my web and graphic design work.");
    });
}

/* 3. Dark mode toggle */
const themeButton = document.getElementById("theme-button");

if (themeButton) {
    themeButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            themeButton.textContent = "Switch to Light Mode";
        } else {
            themeButton.textContent = "Switch to Dark Mode";
        }
    });
}
