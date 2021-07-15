let objDash = {
    "default": {
        "load": true,
        "author": "easycg",
        "firstScene": "1-scene",
        "sceneFadeDuration": 2000,
        "autoLoad": true,
        "autoRotate": 0,
        "autoRotateInactivityDelay": 5000,
        "yaw": 180,
        // "hfov": 80,
        "previewTitle": "Первый зал",
        // "orientationOnByDefault": true,
        "showControls": true,
        "showZoomCtrl": false,
        "showFullscreenCtrl": false,
        "compass": false,
    },

    "scenes": {
        "1-scene": {
            "title": "Первый зал",
            "sceneId": "1-scene",
            "type": "equirectangular",
            "panorama": "../assets/img1.webp",
            // "hotSpotDebug": "true",
            "hotSpots": [{
                    "pitch": -12,
                    "yaw": 170,
                    "type": "info",
                    "text": `auf`,
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
                    "sceneId": "2-scene"
                }
            ]
        },

        "2-scene": {
            "title": "Второй зал",
            "type": "equirectangular",
            "panorama": "../assets/img2.webp",
            "preview": "../assets/img2.webp",
            "hotSpots": [{
                "pitch": -25,
                "yaw": 75,
                "type": "scene",
                "text": "Первый зал",
                "sceneId": "1-scene"
            }]
        }
    }
}

let viewer = pannellum.viewer("panorama", objDash);
let panorama = document.getElementById('panorama');



document.addEventListener('contextmenu', newFoundation);

function newFoundation(event) {
    let XP = getXP(event);
    let YO = getYO(event);
    console.log(`Ордината ${XP}, Абсцисса ${YO}`);
    if (!document.getElementById('modalwindow')) {
        panorama.insertAdjacentHTML('afterbegin', modalWindowStr);
    } else {
        document.getElementById('modalwindow').remove();
        panorama.insertAdjacentHTML('afterbegin', modalWindowStr);
    }
    makeNewHotSpot = function() {
        let radioInfo = document.getElementById('info')
        let radioScene = document.getElementById('scene');
        let coords = {
            pitch: XP,
            yaw: YO,
        }
        if (radioInfo.checked == true) {
            makeNewInfo(XP, YO);
        } else if (radioScene.checked == true) {
            makeNewScene(XP, YO);
        } else {
            alert('Выберите вид хотспота!');
        }
    }
    deleteNewHotSpot = function() {
        removeHotSpot()
    }
}

function makeNewScene(XP, YO) {
    // coords.type = "type";
    // coords.text = "Я охуел, но добавил хостпот сцены";
    // coords.sceneId = "";
    // coords.id = XP + YO;
    let coords = {
        "pitch": XP,
        "yaw": YO,
        "type": "scene",
        "text": "Я устал, но добавил хостпот информации",
    }
    viewer.addHotSpot(coords)
}

function makeNewInfo(XP, YO) {
    let coords = {
        "pitch": XP,
        "yaw": YO,
        "type": "info",
        "text": "Я устал, но добавил хостпот информации",
    }
    viewer.addHotSpot(coords)
}

function getXP(event) {
    let XP = viewer.mouseEventToCoords(event)[0];
    return XP;
}

function getYO(event) {
    let YO = viewer.mouseEventToCoords(event)[1];
    return YO;
}

import { modalWindowStr } from "./modalWindow.js";