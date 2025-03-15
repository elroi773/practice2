document.getElementById("glowButton").addEventListener("click", function() {
    let card = document.querySelector(".card");
    card.classList.add("flash");
    setTimeout(() => {
        card.classList.remove("flash");
    }, 500);
});

// Matrix Rain Effect
const canvas = document.querySelector(".matrix");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(1);

function drawMatrix() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "cyan";
    ctx.font = `${fontSize}px monospace`;

    drops.forEach((y, i) => {
        const text = letters.charAt(Math.floor(Math.random() * letters.length));
        const x = i * fontSize;
        ctx.fillText(text, x, y * fontSize);
        if (y * fontSize > canvas.height && Math.random() > 0.95) {
            drops[i] = 0;
        }
        drops[i]++;
    });
}
setInterval(drawMatrix, 50);