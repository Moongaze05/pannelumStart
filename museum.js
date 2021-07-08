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
    hotSpot.id = hotSpot.id.replace('scene', 'radio');
    hotSpot.firstElementChild.checked = true;
    hotSpot.id = hotSpot.id.replace('radio', 'scene');
})

/** 
 * Функция закрытия описания хотспота
 * @param { String } id Id раскрывающегося описания
 */

function cross(id) {
    let media1 = document.getElementById(id);
    media1.remove();
}

let svg = `<svg>
<circle r="35" cx="0" cy="0" />
</svg>`;


viewer.on('scenechange', function(ev) {
    let point = document.getElementById(ev);
    point.insertAdjacentHTML("afterbegin", svg);
});


import './script/keysUp.js';
import './script/makeRadioHotSpots.js';
import './script/toggleBar.js';
import { namePic, authorPic, description } from './script/mediaDescription.js';
// import './script/circle.js';