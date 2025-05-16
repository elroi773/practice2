const profileBtn = document.getElementById("profileToggle");
const dropdownMenu = document.getElementById("dropdownMenu");

profileBtn.addEventListener("click", () => {
  dropdownMenu.classList.toggle("hide");
});


document.addEventListener("click", (event) => {
  const isClickInside = dropdownMenu.contains(event.target) || profileBtn.contains(event.target);
  if (!isClickInside) {
    dropdownMenu.classList.add("hide");
  }
});
