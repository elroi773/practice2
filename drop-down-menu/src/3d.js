const container = document.querySelector('.container');
const card = document.querySelector('.card');

let zDistance = 0; // 초기 Z 위치

container.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const rotateX = (y / rect.height) * 40;
    const rotateY = (x / rect.width) * 40;

    card.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg) translateZ(${zDistance}px)`;
});

// 🛠 마우스 휠로 Z축 거리 조정
container.addEventListener('wheel', (e) => {
    e.preventDefault(); // 기본 스크롤 방지
    zDistance += e.deltaY * -0.2; // 휠 위/아래에 따라 조절 (감도는 -0.2)
    zDistance = Math.min(Math.max(zDistance, -300), 300); // 최소 -300, 최대 +300

    // 현재 회전 유지한 채 Z 이동 적용
    const currentTransform = card.style.transform;
    card.style.transform = currentTransform.replace(/translateZ\((.*?)px\)/, `translateZ(${zDistance}px)`);
});

// 마우스가 벗어나면 원래 위치로
container.addEventListener('mouseleave', () => {
    zDistance = 0;
    card.style.transform = `rotateX(0deg) rotateY(0deg) translateZ(0px)`;
});
