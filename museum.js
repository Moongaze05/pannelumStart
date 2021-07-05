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
                    "text": "Картина Айвазовского ''Девятый вал''.",
                    "clickHandlerFunc": function() {
                        let mediaWindow = document.getElementById('panorama');
                        mediaWindow.insertAdjacentHTML('afterbegin', description);
                    },
                    "clickHandlerArgs": 'description'
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
                    "sceneId": "second-scene",
                    "clickHandlerFunc": function() {
                        console.log('смена 1');
                        let hotSpot = document.getElementById('second-radio');
                        // hotSpot.id = hotSpot.id.replace('scene', 'radio');
                        // hotSpot.firstElementChild.checked = true;
                        // hotSpot.id = hotSpot.id.replace('radio', 'scene');
                        hotSpot.checked = true;
                        // radioOn();

                        // console.log('смена 2');
                        // let first = document.getElementById('first-radio');
                        // let second = document.getElementById('second-radio');
                        // if (first.checked) {
                        //     second.checked = true;
                        // } else {
                        //     first.checked = true;
                        // }
                    },
                    "clickHandlerArgs": "this.sceneId",
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
                "sceneId": "first-scene",
                "clickHandlerFunc": function() {
                    console.log('смена 2');

                    // console.log('смена 4');
                    let hotSpot = document.getElementById('first-radio');
                    // hotSpot.id = hotSpot.id.replace('scene', 'radio');
                    // hotSpot.firstElementChild.checked = true;
                    // hotSpot.id = hotSpot.id.replace('radio', 'scene');
                    hotSpot.checked = true;
                    // radioOn();
                },
                "clickHandlerArgs": "this.sceneId",
            }]
        }
    }
}

export let viewer = pannellum.viewer('panorama', obj);

function radioOn() {
    let first = document.getElementById('first-radio');
    let second = document.getElementById('second-radio');
    if (first.checked) {
        second.checked = true;
    } else {
        first.checked = true;
    }
}

viewer.on('scenechange', function(ev) {
    console.log(ev);
})

import './script/keysUp.js';
import './script/makeRadioHotSpots.js';
import './script/toggleBar.js';
import './script/mediaDescription.js';
