document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("prayer-form");
    const prayerList = document.getElementById("prayer-list");

    // 기도제목 추가
    form.addEventListener("submit", async function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const prayer = document.getElementById("prayer").value;
        const isAnonymous = document.getElementById("anonymous").checked;

        const response = await fetch("http://localhost:3000/add-prayer", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, prayer, is_anonymous: isAnonymous }),
        });

        if (response.ok) {
            alert("기도제목이 추가되었습니다.");
            form.reset();
            fetchPrayers(); // 기도제목 목록 갱신
        } else {
            alert("기도제목 추가 실패!");
        }
    });

    // 기도제목 목록 가져오기
    async function fetchPrayers() {
        const response = await fetch("http://localhost:3000/get-prayers");
        const prayers = await response.json();

        prayerList.innerHTML = "";
        prayers.forEach((prayer) => {
            const li = document.createElement("li");
            li.textContent = `${prayer.name}: ${prayer.prayer}`; // 시간 제거
            prayerList.appendChild(li);
        });
    }

    fetchPrayers(); // 페이지 로드 시 기도제목 목록 불러오기
});

function goNext() {
    window.location.href = "prayers.html";
}
