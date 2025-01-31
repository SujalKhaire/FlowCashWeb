document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll(".fade-in, .fade-up");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                } else {
                    entry.target.classList.remove("visible"); // Re-trigger animation when scrolling
                }
            });
        },
        { threshold: 0.5 }
    );

    fadeElements.forEach((element) => observer.observe(element));
});
