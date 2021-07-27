import { viewer } from '../museum.js';

const radioHalls = document.querySelectorAll('.option');
// Перемещение по радио-кнопкам
radioHalls.forEach(hall => {
    hall.addEventListener('click', (event) => {
        const target = event.currentTarget;
        target.id = target.id.replace('hall','scene');
        viewer.loadScene(target.id);
        target.id = target.id.replace('scene','hall');
    });
});

// const radioPrev = document.querySelector('.select');
// radioPrev.addEventListener('click', (ev) => {
//     // let target = ev.currentTarget;
//     let radioHall = document.querySelectorAll('.option');
//     radioHall.forEach(hall => {
//         hall.classList.toggle('open-halls');
//     })
// })