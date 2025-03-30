document.querySelectorAll(".container img").forEach(img => {
    img.addEventListener("mouseenter", () => {
        img.style.width = "20%";
    });

    img.addEventListener("mouseleave", () => {
        img.style.width = "10%";
    });
});