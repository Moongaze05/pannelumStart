let obj = {
    "default": {
        "load": true,
        "author": "easycg",
        "firstScene": "a-scene",
        "sceneFadeDuration": 2000,
        "autoLoad": true,
        "autoRotate": 0,
        // "autoRotateInactivityDelay": 5000,
        "yaw": 0,
        // "hfov": 80,
        "previewTitle": "Первый зал",
        "showControls": true,
        "showZoomCtrl": false,
        "showFullscreenCtrl": false,
        "compass": false,
        "hotSpotDebug": true,
    },

    "scenes": {
        "a-scene": {
            "title": "Первый зал",
            "sceneId": "a-scene",
            "type": "equirectangular",
            "panorama": "./assets/firstMuseum/0.webp",
            // "hotSpotDebug": "true",
            "hotSpots": [{
                    "pitch": -12,
                    "yaw": 170,
                    "type": "info",
                    "text": `"${namePic}" <br/> ${authorPic}`,
                    "clickHandlerFunc": function() {
                        let mediaWindow = document.getElementById('panorama');
                        mediaWindow.insertAdjacentHTML('afterbegin', description);

                        function audioPlay() {
                            new GreenAudioPlayer('.media-description-custom-audio');
                            console.log('gav')
                        };
                        audioPlay();
                    },
                },
                {
                    "pitch": -35,
                    "yaw": 277,
                    "type": "scene",
                    "text": "Второй зал",
                    "sceneId": "b-scene"
                }
            ]
        },

        "b-scene": {
            "title": "Второй зал",
            "type": "equirectangular",
            "panorama": "./assets/firstMuseum/1.webp",
            "pitch": -12,
            "sceneId": "b-scene",
            "hotSpots": [{
                "pitch": -25,
                "yaw": 75,
                "type": "scene",
                "text": "Первый зал",
                "sceneId": "a-scene"
            }]
        },
    }
}

export let viewer = pannellum.viewer('panorama', obj);
let insetsLayoutMarginsFromSafeArea = true;
viewer.startOrientation()
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

let svgData = `<svg class="svg-sector" id="sector">
<path fill="grey" fill-opacity="0.7" d="M 65.5,65.5 L 23.34187850181081,17.347193313951905 A 64,64 0 0 1 107.65812149818916,17.347193313951877 Z"></path>
</svg>`;

viewer.on('scenechange', function(ev) {
    let prePoint = document.getElementById('sector');
    prePoint.remove();
    let point = document.getElementById(ev);
    point.insertAdjacentHTML("beforeend", svgData);
});


// Вращение сектора обзора

viewer.on('zoomchange', function() {
    // console.log(viewer.getYaw())
    let prPoint = document.getElementById('sector');
    prPoint.style.transform = `rotate(${viewer.getYaw()}deg)`;
})
document.getElementsByClassName('pnlm-dragfix')[0].addEventListener('mousemove', function() {
    let prPoint = document.getElementById('sector');
    prPoint.style.transform = `rotate(${viewer.getYaw()}deg)`;
})
document.getElementsByClassName('pnlm-dragfix')[0].addEventListener('touchmove', function() {
    let prPoint = document.getElementById('sector');
    prPoint.style.transform = `rotate(${viewer.getYaw()}deg)`;
})


import './script/keysUp.js';
import './script/makeRadioHotSpots.js';
import './script/toggleBar.js';
import { namePic, authorPic, description } from './script/mediaDescription.js';