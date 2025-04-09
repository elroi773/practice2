const songs = [
  {
    title: "Until I Found You",
    artist: "Stephen Sanchez",
    cover: "./img/Untilifoundyou.jpg",
    audio: "./audio/Stephen Sanchez - Until I Found You (Official Music Video).mp3"
  },
  {
    title: "Am I broken",
    artist: "10cm",
    cover: "./img/amibroken.jpg",
    audio: "./audio/amibroken.mp3"
  }
];

const list = document.getElementById('song-list');

let currentAudio = null;
let currentButton = null;
let currentAudioUrl = '';

songs.forEach(song => {
  const songDiv = document.createElement('div');
  songDiv.className = 'song';

  const buttonId = `btn-${song.title.replace(/\s/g, '')}`;

  songDiv.innerHTML = `
    <img src="${song.cover}" alt="album cover" class="album-cover" />
    <div class="song-title">${song.title}</div>
    <div class="artist">${song.artist}</div>
    <button id="${buttonId}" onclick="playAudio('${song.audio}', '${buttonId}')">재생하기 ▶️</button>
  `;

  list.appendChild(songDiv);
});

function playAudio(url, buttonId) {
  const button = document.getElementById(buttonId);

  // 같은 곡이라면 토글
  if (currentAudio && currentAudioUrl === url) {
    if (!currentAudio.paused) {
      currentAudio.pause();
      button.textContent = '재생하기 ▶️';
    } else {
      currentAudio.play();
      button.textContent = '멈추기 ⏸️';
    }
  } else {
    // 다른 곡이면 기존 곡 정지하고 새 곡 재생
    if (currentAudio) {
      currentAudio.pause();
      if (currentButton) {
        currentButton.textContent = '재생하기 ▶️';
      }
    }

    currentAudio = new Audio(url);
    currentAudioUrl = url;
    currentAudio.play();
    button.textContent = '멈추기 ⏸️';
    currentButton = button;

    currentAudio.addEventListener('ended', () => {
      button.textContent = '재생하기 ▶️';
    });
  }
}