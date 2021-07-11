const obj = {
    "default": {
        "load": true,
        "author": "easycg",
        "firstScene": "first-scene",
        "sceneFadeDuration": 2000,
        "autoLoad": true,
        "autoRotate": 0,
        "autoRotateInactivityDelay": 5000,
        "yaw": 180,
        "previewTitle": "Первый зал",
        "showControls": false,

    },

    "scenes": {
        "first-scene": {
            "title": "Первый зал",
            "sceneId": "first-scene",
            "type": "equirectangular",
            "panorama": "./assets/img1.webp",
            "preview": "./assets/img1.webp",
            // "hotSpotDebug": "true",
            "hotSpots": [{
                    "pitch": -12,
                    "yaw": 170,
                    "type": "info",
                    "text": `"${namePic}" <br/> ${authorPic}`,
                    "clickHandlerFunc": function() {
                        let mediaWindow = document.getElementById('panorama');
                        mediaWindow.insertAdjacentHTML('afterbegin', description);
                    },
                    "clickHandlerArgs": 'description',
                },
                {
                    "pitch": -10,
                    "yaw": -50,
                    "type": "info",
                    "text": "This is a link.",
                    "URL": "https://github.com/mpetroff/pannellum"
                },
                {
                    "pitch": -35,
                    "yaw": 277,
                    "type": "scene",
                    "text": "Второй зал",
                    "sceneId": "second-scene"
                }
            ]
        },

        "second-scene": {
            "title": "Второй зал",
            "type": "equirectangular",
            "panorama": "./assets/img2.webp",
            "preview": "./assets/img2.webp",
            "hotSpots": [{
                "pitch": -25,
                "yaw": 75,
                "type": "scene",
                "text": "Первый зал",
                "sceneId": "first-scene"
            }]
        }
    }
}

export let viewer = pannellum.viewer('panorama', obj);


// Отслеживание смены сцены и смена радио
viewer.on('scenechange', function(ev) {
    let hotSpot = document.getElementById(ev);
    hotSpot.firstElementChild.checked = true;
});

/** 
 * Функция закрытия описания хотспота
 * @param { String } id Id раскрывающегося описания
 */

function cross(id) {
    let media1 = document.getElementById(id);
    media1.remove();
}

// let svgData = `<svg class="svg-sector">
// <path fill="rgb(255,255,255)" fill-opacity="0.7" d="M 65.5,65.5 L 23.34187850181081,17.347193313951905 A 64,64 0 0 1 107.65812149818916,17.347193313951877 Z"></path>
// </svg>`;
let svgData = `<svg class="svg-sector" id="sector">
<path fill="rgb(255,255,255)" fill-opacity="0.7" d="M 65.5,65.5 L 23.34187850181081,17.347193313951905 A 64,64 0 0 1 107.65812149818916,17.347193313951877 Z"></path>
</svg>`;

viewer.on('scenechange', function(ev) {
    let prePoint = document.getElementById('sector');
    prePoint.remove();
    let point = document.getElementById(ev);
    point.insertAdjacentHTML("beforeend", svgData);
});


viewer.on('zoomchange', function() {
    // console.log(viewer.getYaw())
    let prPoint = document.getElementById('sector');
    prPoint.classList.add('changingSector')
    prPoint.style.transform = `rotate(${viewer.getYaw()+180}deg)`;
    // prPoint.style.transform = `skewX(${viewer.getHfov()/3}deg)`
});

// viewer.on('mousedown', function() {
//     console.log(viewer.getYaw())
//     let prPoint = document.getElementById('sector');
//     prPoint.style.transform = `rotate(${viewer.getYaw()+180}deg)`;
// });

viewer.on('mousedown', function() {
    // console.log(viewer.getYaw())
    let prPoint = document.getElementById('sector');
    prPoint.style.transform = `rotate(${viewer.getYaw()+180}deg)`;
});

// viewer.on('zoomchange', function() {
//     console.log(viewer.getYaw())
//     let prPoint = document.getElementById('sector');
//     prPoint.style.transform = `skewX(-${viewer.getHfov()+180}deg)`;
// })

import './script/keysUp.js';
import './script/makeRadioHotSpots.js';
import './script/toggleBar.js';
import { namePic, authorPic, description } from './script/mediaDescription.js';
// import './script/sectorView.js';