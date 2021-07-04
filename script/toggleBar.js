/**
 * Функция скрытия и показа панели управления медиа
 */

function toggleBar() {
    let buttons = document.querySelectorAll('.ctrl-nav')
    buttons.forEach(element => {
        element.classList.toggle('ctrl-toggle-off');
        element.classList.toggle('ctrl-mobile');
        element.classList.toggle('ctrl-toggle-on');
    });
    let buttonToggle = document.getElementById('toggle-bar');
    buttonToggle.classList.toggle('toggle-bar-add');
    buttonToggle.classList.toggle('transition-button');
}

document.getElementById('toggle-bar').addEventListener('click', () => {
    toggleBar();
})