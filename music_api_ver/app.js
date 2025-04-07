// 📌 기분 -> 장르 매핑
const moodToGenres = {
    "설렘": ["pop", "dance"],
    "기쁨": ["k-pop", "pop"],
    "이별": ["ballad", "acoustic"],
    "분노": ["rock", "metal"],
    "우울": ["indie", "sad"],
    "행복": ["pop", "k-pop", "dance"],
    "집중": ["classical", "jazz"]
  };
  
  // 🔑 클라이언트 ID와 시크릿 (직접 넣어야 함! 보안 주의!!)
  const clientId = "id";
  const clientSecret = "secret";
  
  // 🎟️ 토큰 받아오기
  async function getAccessToken() {
    const result = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": "Basic " + btoa(clientId + ":" + clientSecret),
      },
      body: "grant_type=client_credentials"
    });
  
    if (!result.ok) {
      const errorText = await result.text();
      throw new Error("토큰 요청 실패: " + errorText);
    }
  
    const data = await result.json();
    return data.access_token;
  }
  
  // 🎵 노래 추천 받아오기
  async function getRecommendations(mood) {
    try {
      const token = await getAccessToken();
  
      const genres = moodToGenres[mood];
      if (!genres) throw new Error("지원하지 않는 기분입니다!");
  
      const seedGenres = genres.join(',');
  
      const url = `https://api.spotify.com/v1/recommendations?seed_genres=${seedGenres}&limit=10`;
  
      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
  
      if (!response.ok) {
        const text = await response.text();
        throw new Error(`Spotify API 오류: ${response.status} - ${text}`);
      }
  
      const data = await response.json();
      displayRecommendations(data.tracks);
  
    } catch (error) {
      console.error("추천을 불러오는 중 오류 발생:", error);
      alert("노래 추천을 불러오는 데 실패했어요! 😢");
    }
  }
  
  // 🎧 추천 노래 보여주기
  function displayRecommendations(tracks) {
    const container = document.getElementById("recommendations");
    container.innerHTML = "";
  
    if (!tracks || tracks.length === 0) {
      container.innerHTML = "<p>추천 결과가 없어요.</p>";
      return;
    }
  
    tracks.forEach(track => {
      const item = document.createElement("div");
      item.innerHTML = `
        <p><strong>${track.name}</strong> - ${track.artists.map(a => a.name).join(", ")}</p>
        ${track.preview_url ? `<audio controls src="${track.preview_url}"></audio>` : "<p>미리 듣기 없음</p>"}
      `;
      container.appendChild(item);
    });
  }

  function utf8ToBase64(str) {
    return btoa(unescape(encodeURIComponent(str)));
  }
  
  