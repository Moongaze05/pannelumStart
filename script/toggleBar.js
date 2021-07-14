/**
 * Функция скрытия и показа панели управления медиа
 */

function toggleBar() {
    let buttons = document.querySelector(".visible");
    buttons.classList.toggle('ctrl-toggle-off');
    buttons.classList.toggle('ctrl-toggle-on');
}

let toggleButton = document.getElementById('toggle-bar');
toggleButton.addEventListener('click', () => {
    toggleBar();
    toggleButton.classList.toggle("toggle-rotate");
})