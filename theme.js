const selectThemeBox = document.querySelector('#selectTheme');

const htmlTag = document.querySelector('html');
let cekTheme = localStorage.getItem('theme');

if (cekTheme == null) {
  cekTheme = 'light';
}

htmlTag.setAttribute('data-theme', cekTheme);
selectThemeBox.value = cekTheme;

selectThemeBox.addEventListener('change', function (e) {
  const themeValue = e.target.value;
  localStorage.setItem('theme', themeValue);
  htmlTag.setAttribute('data-theme', themeValue);
});
