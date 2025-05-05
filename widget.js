const allLinks = document.querySelectorAll(".tab-link");
const allTabs = document.querySelectorAll(".tab-content");

allLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    // 링크 활성화 상태 전환
    allLinks.forEach((lnk) => lnk.classList.remove("active"));
    link.classList.add("active");

    // 탭 콘텐츠 전환
    allTabs.forEach((tab) => {
      tab.classList.remove("active");
    });

    const target = document.getElementById(`${link.id}-content`);
    if (target) {
      target.classList.add("active");
    }
  });
});
