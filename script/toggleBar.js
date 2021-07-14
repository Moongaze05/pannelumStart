/**
 * Функция скрытия и показа панели управления медиа
 */

function toggleBar() {
    // let buttons = document.querySelectorAll('.ctrl-nav')
    // buttons.forEach(element => {
    //     element.classList.toggle('ctrl-toggle-off');
    //     element.classList.toggle('ctrl-mobile');
    //     element.classList.toggle('ctrl-toggle-on');
    // });
    // let buttonToggle = document.getElementById('toggle-bar');
    // buttonToggle.classList.toggle('toggle-bar-add');
    let buttons = document.querySelector(".visible");
    buttons.classList.toggle('ctrl-toggle-off');
    buttons.classList.toggle('ctrl-toggle-on');
}

let toggleButton = document.getElementById('toggle-bar');
toggleButton.addEventListener('click', () => {
    toggleBar();
    toggleButton.classList.toggle("toggle-rotate");
})