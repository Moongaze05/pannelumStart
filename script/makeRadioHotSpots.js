import { viewer } from '../museum.js';

let radioHotSpots = document.querySelectorAll('.point');
// Перемещение по радио-кнопкам
radioHotSpots.forEach(point => {
    point.addEventListener('click', (event) => {
        const target = event.currentTarget;
        viewer.loadScene(target.id);
    });
});