const clientId = "5cc81baedb7f48c586190ca5c462bd88";
const clientSecret = "089dd32f162047d7b7bafb7518eb05f7";

// 기분 → Spotify 장르 매핑
const moodToGenre = {
    "이별": "ballad",
    "기쁨": "k-pop",
    "설렘": "pop",
    "우울": "acoustic",
    "에너지": "rock"
  };
  
// music_api_ver.js
async function getAccessToken() {
  try {
    const response = await fetch("http://localhost:3000/get-token");

    if (!response.ok) {
      const text = await response.text();
      throw new Error(`서버 응답 오류: ${response.status} - ${text}`);
    }

    const data = await response.json();
    return data.access_token;
  } catch (error) {
    console.error("전체 처리 실패:", error);
    throw error;
  }
}

  
  // Spotify 추천곡 요청 및 출력
  async function getRecommendation(token, genre) {
    const endpoint = `https://api.spotify.com/v1/recommendations?limit=1&seed_genres=${genre}`;
  
    try {
      const result = await fetch(endpoint, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token
        }
      });
  
      const status = result.status;
      const raw = await result.text();
      console.log("응답 상태 코드:", status);
      console.log("응답 내용:", raw);
  
      if (!raw) {
        document.getElementById("recommendation").innerText = "추천을 불러오지 못했습니다.";
        return;
      }
  
      const data = JSON.parse(raw);
      const track = data.tracks[0];
  
      if (!track) {
        document.getElementById("recommendation").innerText = "추천 결과가 없습니다.";
        return;
      }
  
      // 결과 표시
      document.getElementById("recommendation").innerHTML = `
        <h2>${track.name} - ${track.artists[0].name}</h2>
        <img src="${track.album.images[0].url}" width="300">
        <p><a href="${track.external_urls.spotify}" target="_blank">스포티파이에서 듣기</a></p>
      `;
    } catch (error) {
      console.error("추천 요청 중 오류:", error);
      document.getElementById("recommendation").innerText = "추천을 가져오는 중 오류가 발생했습니다.";
    }
  }
  
  // 버튼 클릭 이벤트
  document.getElementById("recommendBtn").addEventListener("click", async () => {
    const mood = document.getElementById("moodSelect").value;
    if (!mood) {
      alert("기분을 선택해주세요!");
      return;
    }
  
    const genre = moodToGenre[mood];
  
    try {
      const token = await getAccessToken();
      if (token) {
        await getRecommendation(token, genre);
      }
    } catch (err) {
      console.error("전체 처리 실패:", err);
    }
  });
  