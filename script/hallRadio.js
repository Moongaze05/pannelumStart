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



const radioPrev = document.querySelector('.label-open-list');
radioPrev.addEventListener('click', (ev) => {
    console.log(ev);
    ev.preventDefault();
    let list = ev.target.closest('label.label-open-list');
    let listArr = list.lastElementChild.children;
     for (let i = 0; i < listArr.length; i++) {
        if (listArr[i].classList.contains('option')) {
            listArr[i].classList.toggle('open-halls');
        }
    }
})