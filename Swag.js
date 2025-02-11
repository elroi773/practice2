function showAlert() {
    alert('🔥 최강 간지 폭발! 🔥');
}

function changeBackground() {
    const colors = ['#1a2a6c', '#b21f1f', '#fdbb2d', '#0f0c29', '#302b63', '#24243e'];
    document.body.style.background = `linear-gradient(135deg, ${colors[Math.floor(Math.random() * colors.length)]}, ${colors[Math.floor(Math.random() * colors.length)]})`;
}