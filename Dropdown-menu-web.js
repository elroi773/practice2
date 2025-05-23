<<<<<<< HEAD
const profileBtn = document.getElementById('profileBtn');
const dropdownMenu = document.getElementById('dropdownMenu');
const darkModeToggle = document.getElementById('darkModeToggle');

// Toggle dropdown
profileBtn.addEventListener('click', () => {
  dropdownMenu.classList.toggle('active');
});

// Outside click to close
document.addEventListener('click', (e) => {
  if (!dropdownMenu.contains(e.target) && !profileBtn.contains(e.target)) {
    dropdownMenu.classList.remove('active');
  }
});

// Dark mode toggle
darkModeToggle.addEventListener('change', () => {
  document.body.classList.toggle('dark');
});
=======
const profileBtn = document.getElementById('profileBtn');
const dropdownMenu = document.getElementById('dropdownMenu');
const darkModeToggle = document.getElementById('darkModeToggle');

// Toggle dropdown
profileBtn.addEventListener('click', () => {
  dropdownMenu.classList.toggle('active');
});

// Outside click to close
document.addEventListener('click', (e) => {
  if (!dropdownMenu.contains(e.target) && !profileBtn.contains(e.target)) {
    dropdownMenu.classList.remove('active');
  }
});

// Dark mode toggle
darkModeToggle.addEventListener('change', () => {
  document.body.classList.toggle('dark');
});
>>>>>>> a4fca7aa30631759aeb5df1ccea9b0be405ce383
