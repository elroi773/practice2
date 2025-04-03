const two_text = document.querySelector(".two_text");

const textmain = () => {
    setTimeout(() => {
        two_text.textContent = "프로그래밍";
    }, 0);
    setTimeout(() => {
        two_text.textContent = "영화블로그";
    }, 3000);
    setTimeout(() => {
        two_text.textContent = "코딩포스팅";
    }, 6000);
};

textmain();
setInterval(textmain, 9000);
