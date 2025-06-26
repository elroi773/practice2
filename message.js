const timeSince = (date) => {
    const seconds = Math.floor((new Date() - new Date(date)) / 1000);

    if (seconds < 10) {
        return "just now";
    }

    return Math.floor(seconds) + " seconds ago";
};

const users = {
    'alex1': {
        name: 'Alex Copper',
    },
    'tara': {
        name: 'Tara Jones',
    }
};

const loggedUser = users['alex1'];

let comments = [
    {
        id: 1,
        text: 'I am on it, will get .........',
        author: users['tara'],
        createdAt: '2025-06-18 12:00:00', // =를 -로 수정
    },
];

const authedUser = document.querySelector('.authed-user');

// 로그인된 사용자 이름 출력
authedUser.innerText = `Logged in as: ${loggedUser.name}`;

const commentsWrapper = document.querySelector('.discussion__commnets'); // 오타 수정: dicussion -> discussion

// 댓글 출력 함수
const renderComments = () => {
    commentsWrapper.innerHTML = '';
    comments.forEach(comment => {
        const div = document.createElement('div');
        div.className = 'comment';

        div.innerHTML = `
            <div>
                <div class="comment_author">${comment.author.name}
                    <span class="comment__date">${timeSince(comment.createdAt)}</span>
                </div>
                <div class="comment__text">${comment.text}</div>
            </div>
        `;

        commentsWrapper.appendChild(div);
    });
};

renderComments();
