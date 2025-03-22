document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("prayer-form");
    const prayerList = document.getElementById("prayer-list");
    const nameInput = document.getElementById("name");
    const anonymousCheckbox = document.getElementById("anonymous");

    // 익명 체크 시 이름 필드 자동 변경
    anonymousCheckbox.addEventListener("change", function () {
        if (anonymousCheckbox.checked) {
            nameInput.value = "익명";
            nameInput.readOnly = true; // 직접 수정 방지
        } else {
            nameInput.value = "";
            nameInput.readOnly = false;
        }
    });

    // 기도제목 추가
    form.addEventListener("submit", async function (event) {
        event.preventDefault();

        let name = nameInput.value.trim();
        const prayer = document.getElementById("prayer").value.trim();
        const isAnonymous = anonymousCheckbox.checked;

        if (isAnonymous || name === "익명") {
            name = "익명"; // 익명 처리
        }

        if (!prayer) {
            alert("기도 제목을 입력해주세요.");
            return;
        }

        const response = await fetch("http://localhost:3000/add-prayer", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, prayer }),
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
            li.textContent = `${prayer.name}: ${prayer.prayer}`;
            prayerList.appendChild(li);
        });
    }
    fetchPrayers(); // 페이지 로드 시 기도제목 목록 불러오기
});


function goNext() {
    window.location.href = "prayers.html";
}
