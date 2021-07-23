let obj = {
    "default": {
        "load": true,
        "author": "easycg",
        "firstScene": "a-scene",
        "sceneFadeDuration": 2000,
        "autoLoad": true,
        "autoRotate": 0,
        "yaw": 0,
        "previewTitle": "Первый зал",
        "showControls": true,
        "showZoomCtrl": false,
        "showFullscreenCtrl": false,
        "compass": false,
        // "hotSpotDebug": true,
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


import './script/keysUp.js';
import './script/makeRadioHotSpots.js';
import './script/toggleBar.js';
import { namePic, authorPic, description, mediainfo2 } from './script/mediaDescription.js';