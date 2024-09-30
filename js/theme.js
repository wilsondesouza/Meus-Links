const themeToggle = document.getElementById('switch');
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: light)");

function setTheme(isDark) {
    if (isDark) {
        document.body.classList.add("dark-theme");
        updateBackgroundImage();
    } else {
        document.body.classList.remove("dark-theme");
        updateBackgroundImage();
    }
}

function updateBackgroundImage() {
    if (screen.width < 884) {
        document.body.style.backgroundImage = document.body.classList.contains("dark-theme") ?
            "url('/img/bg-mobile-invertido.png')" :
            "url('/img/bg-mobile.png')";
    } else {
        document.body.style.backgroundImage = document.body.classList.contains("dark-theme") ?
            "url('/img/bg-invertido.png')" :
            "url('/img/bg.png')";
    }
}

// Aplicar tema com base nas preferências do sistema
setTheme(prefersDarkScheme.matches);

// Ouvir mudanças nas preferências de tema
prefersDarkScheme.addEventListener('change', (e) => setTheme(e.matches));

// Ouvir mudanças no tamanho da tela
window.addEventListener('resize', updateBackgroundImage);

// Alternar tema ao clicar no botão
themeToggle.addEventListener('click', () => {
    const isDarkTheme = document.body.classList.toggle("dark-theme");
    setTheme(isDarkTheme);
});
