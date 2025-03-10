
document.addEventListener("DOMContentLoaded", function () {
    
    fetch("navbar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar-container").innerHTML = data;
            setupThemeToggle(); //
        })
        

    
    if (document.getElementById("contact-form-container")) {
        fetch("contact-form.html")
            .then(response => response.text())
            .then(data => {
                document.getElementById("contact-form-container").innerHTML = data;
            })
         
    }
});


function setupThemeToggle() {
    const themeToggle = document.getElementById("theme-toggle");

    if (!themeToggle) {
        console.error("Theme toggle button not found!");
        return;
    }

    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        themeToggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
    });
}
