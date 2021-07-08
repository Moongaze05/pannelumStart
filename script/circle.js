import { viewer } from '../museum.js';

let svg = `<svg>
<path stroke="rgb(208,104,80)" stroke-width="1" stroke-opacity="0.3" fill="rgb(255,255,255)" fill-opacity="0.7" d="M 65.5,65.5 L 25,15 A 64,64 0 0 1 110,20 Z" style="pointer-events: visiblepainted; cursor: pointer; transform: scale(1, 1);"></path>
</svg>`

let point = document.querySelectorAll('.point');
point.forEach((elem) => {
    viewer.on('scenechange', function(ev) {
        if (elem.firstChild.checked) {
            elem.insertAdjacentHTML("afterbegin", svg);
        }
    })

})