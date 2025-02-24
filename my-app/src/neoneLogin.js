
function login() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let userWarning = document.getElementById('userWarning');
    let passWarning = document.getElementById('passWarning');

    // 초기화
    userWarning.style.opacity = '0';
    passWarning.style.opacity = '0';

    if (username === '') {
        userWarning.style.opacity = '1';
        return;
    }
    if (password === '') {
        passWarning.style.opacity = '1';
        return;
    }

    // 로그인 성공 메시지
    let successMessage = document.createElement('div');
    successMessage.classList.add('success');
    successMessage.innerText = '로그인 성공!';
    document.body.appendChild(successMessage);

    // 2초 후 메시지 삭제
    setTimeout(() => successMessage.remove(), 2000);
}
