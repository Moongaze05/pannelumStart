let objDash = {
    "default": {
        "load": true,
        "author": "easycg",
        "firstScene": "a-scene",
        "sceneFadeDuration": 2000,
        "autoLoad": true,
        "autoRotate": 0,
        "autoRotateInactivityDelay": 5000,
        "yaw": 180,
        // "hfov": 80,
        "previewTitle": "Первый зал",
        "showControls": true,
        "showZoomCtrl": false,
        "showFullscreenCtrl": false,
        "compass": false,
    },

    "scenes": {
        "a-scene": {
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
                    "sceneId": "b-scene"
                }
            ]
        },

        "b-scene": {
            "title": "Второй зал",
            "type": "equirectangular",
            "panorama": "../assets/img2.webp",
            "hotSpots": [{
                "pitch": -25,
                "yaw": 75,
                "type": "scene",
                "text": "Первый зал",
                "sceneId": "a-scene"
            }]
        }
    }
}

let viewer = pannellum.viewer("panorama", objDash);
let panorama = document.getElementById('panorama');



panorama.addEventListener('contextmenu', newFoundation);

let hotspots = document.querySelectorAll('.pnlm-hotspot')
hotspots.forEach((elem) => {
    elem.addEventListener('contextmenu', function(event) {
        event.stopPropagation();
        changeFoundation();
    });
})

function newFoundation(event) {
    let XP = getXP(event);
    let YO = getYO(event);
    let coords = undefined;
    console.log(`Ордината ${YO}, Абсцисса ${XP}`);
    if (!document.getElementById('modalwindow')) {
        panorama.insertAdjacentHTML('afterbegin', modalWindowStr);
    } else {
        document.getElementById('modalwindow').remove();
        panorama.insertAdjacentHTML('afterbegin', modalWindowStr);
    }
    makeNewHotSpot = function() {
        let radioInfo = document.getElementById('info')
        let radioScene = document.getElementById('scene');
        // let coords = {
        //     pitch: XP,
        //     yaw: YO,
        // }
        if (radioInfo.checked == true) {
            makeNewInfo(XP, YO);
        } else if (radioScene.checked == true) {
            makeNewScene(XP, YO);
        } else {
            alert('Выберите вид хотспота!');
        }
    }
    deleteNewHotSpot = function() {
        viewer.removeHotSpot(makeNewScene())
    }

    function makeNewScene(XP, YO) {
        // coords.type = "type";
        // coords.text = "Я охуел, но добавил хостпот сцены";
        // coords.sceneId = "";
        // coords.id = XP + YO;
        if (coords == undefined) {
            coords = {
                "pitch": YO,
                "yaw": XP,
                "type": "scene",
                "text": "Я устал, но добавил хостпот сцены",
                "id": 1,
                // "sceneId": "2",
            }
            viewer.addHotSpot(coords);
        } else {
            return coords.id;
        }
    }

    function makeNewInfo(XP, YO) {
        if (coords == undefined) {
            coords = {
                "pitch": YO,
                "yaw": XP,
                "type": "info",
                "text": "Я устал, но добавил хостпот информации",
                "id": 2,
            }
            viewer.addHotSpot(coords);
        } else {
            return coords.id
        }
    }
}





function getYO(event) {
    let YO = viewer.mouseEventToCoords(event)[0];
    return YO;
}

function getXP(event) {
    let XP = viewer.mouseEventToCoords(event)[1];
    return XP;
}

let radioHotSpots = document.querySelectorAll('.point');
// Перемещение по радио-кнопкам
radioHotSpots.forEach(point => {
    point.addEventListener('click', (event) => {
        const target = event.currentTarget;
        viewer.loadScene(target.id);
    });
});

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
    prPoint.style.transform = `rotate(${viewer.getYaw()+180}deg)`;
})
document.getElementsByClassName('pnlm-dragfix')[0].addEventListener('mousemove', function() {
    let prPoint = document.getElementById('sector');
    prPoint.style.transform = `rotate(${viewer.getYaw()+180}deg)`;
})
document.getElementsByClassName('pnlm-dragfix')[0].addEventListener('touchmove', function() {
    let prPoint = document.getElementById('sector');
    prPoint.style.transform = `rotate(${viewer.getYaw()+180}deg)`;
})

viewer.on('scenechange', function(ev) {
    let hotSpot = document.getElementById(ev);
    hotSpot.firstElementChild.checked = true;
});

let map = document.getElementById('map');
map.addEventListener("contextmenu", function(ev) {
    ev.preventDefault();
    makeRadio(ev);
});

function makeRadio(ev) {
    let xMap = ev.offsetX;
    let yMap = ev.offsetY;
    console.log(`X: ${xMap}, Y: ${yMap}`)
}

import { modalWindowStr } from "./modalWindow.js";