let obj = {
    "default": {
        "load": true,
        "author": "easycg",
        "firstScene": "a-scene",
        "sceneFadeDuration": 2000,
        "autoLoad": true,
        "autoRotate": 0,
        "autoRotateInactivityDelay": 5000,
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
        "c-scene": {
            "title": "Второй зал",
            "type": "equirectangular",
            "panorama": "./assets/firstMuseum/2.webp",
            "sceneId": "c-scene",
            "hotSpots": [{
                "pitch": -25,
                "yaw": 75,
                "type": "scene",
                "text": "Первый зал",
                "sceneId": "a-scene"
            }]
        },
        "d-scene": {
            "title": "Второй зал",
            "type": "equirectangular",
            "panorama": "./assets/firstMuseum/3.webp",
            "sceneId": "d-scene",
            "hotSpots": [{
                "pitch": -25,
                "yaw": 75,
                "type": "scene",
                "text": "Первый зал",
                "sceneId": "a-scene"
            }]
        },
        "e-scene": {
            "title": "Второй зал",
            "type": "equirectangular",
            "panorama": "./assets/firstMuseum/4.webp",
            "sceneId": "e-scene",
            "hotSpots": [{
                "pitch": -25,
                "yaw": 75,
                "type": "scene",
                "text": "Первый зал",
                "sceneId": "a-scene"
            }]
        },
        "f-scene": {
            "title": "Второй зал",
            "type": "equirectangular",
            "panorama": "./assets/firstMuseum/5.webp",
            "sceneId": "f-scene",
            "hotSpots": [{
                "pitch": -25,
                "yaw": 75,
                "type": "scene",
                "text": "Первый зал",
                "sceneId": "a-scene"
            }]
        },
        "g-scene": {
            "title": "Второй зал",
            "type": "equirectangular",
            "panorama": "./assets/firstMuseum/6.webp",
            "sceneId": "g-scene",
            "hotSpots": [{
                "pitch": -25,
                "yaw": 75,
                "type": "scene",
                "text": "Первый зал",
                "sceneId": "a-scene"
            }]
        },
        "h-scene": {
            "title": "Второй зал",
            "type": "equirectangular",
            "panorama": "./assets/firstMuseum/7.webp",
            "sceneId": "h-scene",
            "hotSpots": [{
                "pitch": -25,
                "yaw": 75,
                "type": "scene",
                "text": "Первый зал",
                "sceneId": "a-scene"
            }]
        },
        "i-scene": {
            "title": "Второй зал",
            "type": "equirectangular",
            "panorama": "./assets/firstMuseum/8.webp",
            "sceneId": "i-scene",
            "hotSpots": [{
                "pitch": -25,
                "yaw": 75,
                "type": "scene",
                "text": "Первый зал",
                "sceneId": "a-scene"
            }]
        },
        "j-scene": {
            "title": "Второй зал",
            "type": "equirectangular",
            "panorama": "./assets/firstMuseum/9.webp",
            "sceneId": "j-scene",
            "hotSpots": [{
                "pitch": -25,
                "yaw": 75,
                "type": "scene",
                "text": "Первый зал",
                "sceneId": "a-scene"
            }]
        },
        "k-scene": {
            "title": "Второй зал",
            "type": "equirectangular",
            "panorama": "./assets/firstMuseum/10.webp",
            "sceneId": "k-scene",
            "hotSpots": [{
                "pitch": -25,
                "yaw": 75,
                "type": "scene",
                "text": "Первый зал",
                "sceneId": "a-scene"
            }]
        },
        "l-scene": {
            "title": "Второй зал",
            "type": "equirectangular",
            "panorama": "./assets/firstMuseum/11.webp",
            "sceneId": "l-scene",
            "hotSpots": [{
                "pitch": -25,
                "yaw": 75,
                "type": "scene",
                "text": "Первый зал",
                "sceneId": "a-scene"
            }]
        },
        "m-scene": {
            "title": "Второй зал",
            "type": "equirectangular",
            "panorama": "./assets/firstMuseum/12.webp",
            "sceneId": "m-scene",
            "hotSpots": [{
                "pitch": -25,
                "yaw": 75,
                "type": "scene",
                "text": "Первый зал",
                "sceneId": "a-scene"
            }]
        },
        "n-scene": {
            "title": "Второй зал",
            "type": "equirectangular",
            "panorama": "./assets/firstMuseum/13.webp",
            "sceneId": "m-scene",
            "hotSpots": [{
                "pitch": -25,
                "yaw": 75,
                "type": "scene",
                "text": "Первый зал",
                "sceneId": "a-scene"
            }]
        },
        "o-scene": {
            "title": "Второй зал",
            "type": "equirectangular",
            "panorama": "./assets/firstMuseum/14.webp",
            "sceneId": "o-scene",
            "hotSpots": [{
                "pitch": -25,
                "yaw": 75,
                "type": "scene",
                "text": "Первый зал",
                "sceneId": "a-scene"
            }]
        },
        "p-scene": {
            "title": "Второй зал",
            "type": "equirectangular",
            "panorama": "./assets/firstMuseum/15.webp",
            "sceneId": "p-scene",
            "hotSpots": [{
                "pitch": -25,
                "yaw": 75,
                "type": "scene",
                "text": "Первый зал",
                "sceneId": "a-scene"
            }]
        },
        "q-scene": {
            "title": "Второй зал",
            "type": "equirectangular",
            "panorama": "./assets/firstMuseum/16.webp",
            "sceneId": "q-scene",
            "hotSpots": [{
                "pitch": -25,
                "yaw": 75,
                "type": "scene",
                "text": "Первый зал",
                "sceneId": "a-scene"
            }]
        },
        "r-scene": {
            "title": "Второй зал",
            "type": "equirectangular",
            "panorama": "./assets/firstMuseum/17.webp",
            "sceneId": "r-scene",
            "hotSpots": [{
                "pitch": -25,
                "yaw": 75,
                "type": "scene",
                "text": "Первый зал",
                "sceneId": "a-scene"
            }]
        },
        "s-scene": {
            "title": "Второй зал",
            "type": "equirectangular",
            "panorama": "./assets/firstMuseum/18.webp",
            "sceneId": "s-scene",
            "hotSpots": [{
                "pitch": -25,
                "yaw": 75,
                "type": "scene",
                "text": "Первый зал",
                "sceneId": "a-scene"
            }]
        },
        "t-scene": {
            "title": "Второй зал",
            "type": "equirectangular",
            "panorama": "./assets/firstMuseum/19.webp",
            "sceneId": "t-scene",
            "hotSpots": [{
                "pitch": -25,
                "yaw": 75,
                "type": "scene",
                "text": "Первый зал",
                "sceneId": "a-scene"
            }]
        },
        "u-scene": {
            "title": "Второй зал",
            "type": "equirectangular",
            "panorama": "./assets/firstMuseum/20.webp",
            "sceneId": "u-scene",
            "hotSpots": [{
                "pitch": -25,
                "yaw": 75,
                "type": "scene",
                "text": "Первый зал",
                "sceneId": "a-scene"
            }]
        },
        "v-scene": {
            "title": "Второй зал",
            "type": "equirectangular",
            "panorama": "./assets/firstMuseum/21.webp",
            "sceneId": "v-scene",
            "hotSpots": [{
                "pitch": -25,
                "yaw": 75,
                "type": "scene",
                "text": "Первый зал",
                "sceneId": "a-scene"
            }]
        },
        "w-scene": {
            "title": "Второй зал",
            "type": "equirectangular",
            "panorama": "./assets/firstMuseum/22.webp",
            "sceneId": "w-scene",
            "hotSpots": [{
                "pitch": -25,
                "yaw": 75,
                "type": "scene",
                "text": "Первый зал",
                "sceneId": "a-scene"
            }]
        },
        "x-scene": {
            "title": "Второй зал",
            "type": "equirectangular",
            "panorama": "./assets/firstMuseum/23.webp",
            "sceneId": "x-scene",
            "hotSpots": [{
                "pitch": -25,
                "yaw": 75,
                "type": "scene",
                "text": "Первый зал",
                "sceneId": "a-scene"
            }]
        },
        "y-scene": {
            "title": "Второй зал",
            "type": "equirectangular",
            "panorama": "./assets/firstMuseum/24.webp",
            "sceneId": "y-scene",
            "hotSpots": [{
                "pitch": -25,
                "yaw": 75,
                "type": "scene",
                "text": "Первый зал",
                "sceneId": "a-scene"
            }]
        },
        "z-scene": {
            "title": "Второй зал",
            "type": "equirectangular",
            "panorama": "./assets/firstMuseum/25.webp",
            "sceneId": "z-scene",
            "hotSpots": [{
                "pitch": -25,
                "yaw": 75,
                "type": "scene",
                "text": "Первый зал",
                "sceneId": "a-scene"
            }]
        },
        "aa-scene": {
            "title": "Второй зал",
            "type": "equirectangular",
            "panorama": "./assets/firstMuseum/26.webp",
            "sceneId": "aa-scene",
            "hotSpots": [{
                "pitch": -25,
                "yaw": 75,
                "type": "scene",
                "text": "Первый зал",
                "sceneId": "a-scene"
            }]
        },
        "ab-scene": {
            "title": "Второй зал",
            "type": "equirectangular",
            "panorama": "./assets/firstMuseum/27.webp",
            "sceneId": "ab-scene",
            "hotSpots": [{
                "pitch": -25,
                "yaw": 75,
                "type": "scene",
                "text": "Первый зал",
                "sceneId": "a-scene"
            }]
        },
        "ac-scene": {
            "title": "Второй зал",
            "type": "equirectangular",
            "panorama": "./assets/firstMuseum/28.webp",
            "sceneId": "ac-scene",
            "hotSpots": [{
                "pitch": -25,
                "yaw": 75,
                "type": "scene",
                "text": "Первый зал",
                "sceneId": "a-scene"
            }]
        },
        "ad-scene": {
            "title": "Второй зал",
            "type": "equirectangular",
            "panorama": "./assets/firstMuseum/29.webp",
            "sceneId": "ad-scene",
            "hotSpots": [{
                "pitch": -25,
                "yaw": 75,
                "type": "scene",
                "text": "Первый зал",
                "sceneId": "a-scene"
            }]
        },
        "ae-scene": {
            "title": "Второй зал",
            "type": "equirectangular",
            "panorama": "./assets/firstMuseum/30.webp",
            "sceneId": "ae-scene",
            "hotSpots": [{
                "pitch": -25,
                "yaw": 75,
                "type": "scene",
                "text": "Первый зал",
                "sceneId": "a-scene"
            }]
        },
        "af-scene": {
            "title": "Второй зал",
            "type": "equirectangular",
            "panorama": "./assets/firstMuseum/30.webp",
            "sceneId": "af-scene",
            "hotSpots": [{
                "pitch": -25,
                "yaw": 75,
                "type": "scene",
                "text": "Первый зал",
                "sceneId": "a-scene"
            }]
        },
        "ag-scene": {
            "title": "Второй зал",
            "type": "equirectangular",
            "panorama": "./assets/firstMuseum/31.webp",
            "sceneId": "ag-scene",
            "hotSpots": [{
                "pitch": -25,
                "yaw": 75,
                "type": "scene",
                "text": "Первый зал",
                "sceneId": "a-scene"
            }]
        },
        "ah-scene": {
            "title": "Второй зал",
            "type": "equirectangular",
            "panorama": "./assets/firstMuseum/32.webp",
            "sceneId": "ah-scene",
            "hotSpots": [{
                "pitch": -25,
                "yaw": 75,
                "type": "scene",
                "text": "Первый зал",
                "sceneId": "a-scene"
            }]
        },
        "ai-scene": {
            "title": "Второй зал",
            "type": "equirectangular",
            "panorama": "./assets/firstMuseum/33.webp",
            "sceneId": "ai-scene",
            "hotSpots": [{
                "pitch": -25,
                "yaw": 75,
                "type": "scene",
                "text": "Первый зал",
                "sceneId": "a-scene"
            }]
        },
        "aj-scene": {
            "title": "Второй зал",
            "type": "equirectangular",
            "panorama": "./assets/firstMuseum/34.webp",
            "sceneId": "aj-scene",
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