const toggler = document.getElementById("switch");

toggler.addEventListener("change", () => {
    document.body.classList.toggle("dark");
});
