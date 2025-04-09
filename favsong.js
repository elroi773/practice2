document.addEventListener('DOMContentLoaded', () => {
    const playlist = document.getElementById('playlist');
    const audioPlayer = document.getElementById('audioPlayer');
    const nowPlaying = document.getElementById('nowPlaying');
    const lyricsDisplay = document.getElementById('lyricsDisplay');
    let currentTrack = null;

    const items = playlist.querySelectorAll('li');

    items.forEach(item => {
        const playBtn = item.querySelector('.icon');

        // 안전하게 요소가 존재할 때만 이벤트 달기
        if (!playBtn) return;

        playBtn.addEventListener('click', () => {
            const audioSrc = item.getAttribute('data-src');
            const title = item.getAttribute('data-title');
            const lyrics = item.getAttribute('data-lyrics');

            if (!audioSrc) return;

            // 같은 노래 누르면 일시정지/재생
            if (currentTrack === item) {
                audioPlayer.paused ? audioPlayer.play() : audioPlayer.pause();
                return;
            }

            currentTrack = item;
            audioPlayer.src = audioSrc;
            audioPlayer.play();

            nowPlaying.textContent = `Now Playing: ${title}`;
            lyricsDisplay.textContent = lyrics;

            // 스타일 클래스 처리
            playlist.querySelectorAll('li').forEach(el => el.classList.remove('active'));
            item.classList.add('active');
        });
    });

    audioPlayer.addEventListener('ended', () => {
        nowPlaying.textContent = 'Now Playing: None';
        lyricsDisplay.textContent = 'Select a song to see the lyrics.';
        if (currentTrack) currentTrack.classList.remove('active');
        currentTrack = null;
    });
});
