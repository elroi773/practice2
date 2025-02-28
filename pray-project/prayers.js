document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("prayer-form");

    if (form) {
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
                window.location.href = "prayers.html"; // 제출 후 prayers.html로 이동
            } else {
                alert("기도 제목 추가 실패!");
            }
        });
    }

    const prayerContainer = document.getElementById("prayer-container");
    if (prayerContainer) {
        fetchPrayers();
    }
});

// 기도 제목 가져오기 (익명 여부 반영)
async function fetchPrayers() {
    const response = await fetch("http://localhost:3000/get-prayers");
    const prayers = await response.json();

    const prayerContainer = document.getElementById("prayer-container");
    prayerContainer.innerHTML = "";

    prayers.forEach((prayer) => {
        const div = document.createElement("div");
        div.classList.add("prayer-card");

        // 익명이면 이름을 표시하지 않고, 일반 사용자는 이름 표시
        div.textContent = prayer.name === "익명" ? `🙏 ${prayer.prayer}` : `${prayer.name}: ${prayer.prayer}`;

        prayerContainer.appendChild(div);
    });
}

// 돌아가기 버튼 (index.html로 이동)
function goBack() {
    window.location.href = "index.html";
}
