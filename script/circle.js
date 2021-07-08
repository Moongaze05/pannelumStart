import { viewer } from '../museum.js';

let svg = `<svg>
<circle r="35" cx="0" cy="0" />
</svg>`

let point = document.querySelectorAll('.point');
point.forEach((elem) => {
    viewer.on('scenechange', function(ev) {
        if (elem.firstChild.checked) {
            elem.insertAdjacentHTML("afterbegin", svg);
        }
    })

})