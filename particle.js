
class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 10 + 5;
        this.speedX = Math.random() * 6 - 3;
        this.speedY = Math.random() * 6 - 3;
        this.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.size *= 0.98;
    }
    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

const canvas = document.getElementById("interactiveCanvas");
const ctx = canvas.getContext("2d");
const popSound = document.getElementById("popSound");
let particles = [];

function addParticle(event) {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    for (let i = 0; i < 5; i++) {
        particles.push(new Particle(x, y));
    }
    popSound.currentTime = 0;
    popSound.play();
}

canvas.addEventListener("click", addParticle);

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((particle, index) => {
        particle.update();
        particle.draw(ctx);
        if (particle.size <= 0.5) {
            particles.splice(index, 1);
        }
    });
    requestAnimationFrame(animate);
}
animate();

function updateClock() {
    const clockElement = document.getElementById("clock");
    clockElement.innerText = new Date().toLocaleTimeString();
    clockElement.style.transform = `rotate(${Math.random() * 10 - 5}deg)`;
    clockElement.style.color = `hsl(${Math.random() * 360}, 100%, 70%)`;
}
setInterval(updateClock, 1000);
updateClock();
