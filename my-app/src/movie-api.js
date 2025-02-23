
const API_KEY = "c44fcdff20708d51f7e93b51ff11eb73";  // 🔥 본인의 TMDB API 키 입력!
const BASE_URL = "https://api.themoviedb.org/3";
const IMG_URL = "https://image.tmdb.org/t/p/w500";

// 🟢 TMDB API에서 장르 목록 가져와 메뉴바 생성
async function getGenres() {
    const response = await fetch(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=ko-KR`);
    const data = await response.json();
    const genreMenu = document.getElementById("genreMenu");

    data.genres.forEach(genre => {
        const button = document.createElement("button");
        button.classList.add("genre-btn");
        button.textContent = genre.name;
        button.onclick = () => getMoviesByGenre(genre.id); // 클릭 시 해당 장르 영화 가져오기
        genreMenu.appendChild(button);
    });
}

// 🟢 선택한 장르의 영화 가져오기
async function getMoviesByGenre(genreId) {
    const response = await fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&language=ko-KR&with_genres=${genreId}`);
    const data = await response.json();
    displayMovies(data.results);
}

function displayMovies(movies) {
    const container = document.getElementById("moviesContainer");
    container.innerHTML = ""; // 기존 목록 초기화

    movies.forEach(movie => {
        const movieElement = document.createElement("div");
        movieElement.classList.add("movie");

        movieElement.innerHTML = `
            <img src="${IMG_URL}${movie.poster_path}" alt="${movie.title}">
            <h3>${movie.title}</h3>
        `;
        container.appendChild(movieElement);
    });
}

// 초기 실행 (장르 메뉴 로드)
getGenres();
