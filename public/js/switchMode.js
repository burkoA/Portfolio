let darkMode = false;

function toggleDarkMode() {
  darkMode = !darkMode;
  document.body.classList.toggle('dark', darkMode);

  const themeText = document.getElementById('theme-text');
  themeText.textContent = darkMode ? 'Dark Mode' : 'Light Mode';

  localStorage.setItem('darkMode', darkMode ? 'enabled' : 'disabled');
}

window.onload = () => {
  const savedDarkMode = localStorage.getItem('darkMode');
  const themeToggle = document.getElementById('theme-toggle');
  const themeText = document.getElementById('theme-text');

  if (savedDarkMode === 'enabled') {
    darkMode = true;
    document.body.classList.add('dark');
    themeToggle.checked = true;
    themeText.textContent = 'Dark Mode';
  } else {
    themeText.textContent = 'Light Mode';
  }
}