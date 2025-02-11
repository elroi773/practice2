function showAlert() {
    alert('🔥 최강 간지 폭발! 🔥');
}

function changeBackground() {
    const colors = ['#1a2a6c', '#b21f1f', '#fdbb2d', '#0f0c29', '#302b63', '#24243e'];
    document.body.style.background = `linear-gradient(135deg, ${colors[Math.floor(Math.random() * colors.length)]}, ${colors[Math.floor(Math.random() * colors.length)]})`;
}

function toggleText() {
    const textElement = document.getElementById('dynamicText');
    const texts = ['🚀 새로운 미래!', '🔥 간지 폭발!', '🌟 멋진 변화!', '💯 최강 웹!'];
    textElement.textContent = texts[Math.floor(Math.random() * texts.length)];
}

function addRandomEmoji() {
    const emojis = ['🔥', '🚀', '🎉', '💯', '🌟', '⚡'];
    const emoji = emojis[Math.floor(Math.random() * emojis.length)];
    const textElement = document.getElementById('dynamicText');
    textElement.textContent += ' ' + emoji;
}