const profileBtn = document.getElementById("profileToggle");
const dropdownMenu = document.getElementById("dropdownMenu");

profileBtn.addEventListener("click", () => {
  dropdownMenu.classList.toggle("hide");
});
