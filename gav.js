const obj = {
    "default": {
        "author": "easycg",
        "firstScene": "first-scene",
        "sceneFadeDuration": 2000,
        "autoLoad": true,
        "autoRotate": 0,
        "autoRotateInactivityDelay": 5000,
        "yaw": 180,
        "previewTitle": "Первый зал",
        "showControls": false
    },

    "scenes": {
        "first-scene": {
            "title": "Первый зал",
            "sceneId": "first-scene",
            "type": "equirectangular",
            "panorama": "./assets/img1.jpg",
            "preview": "./assets/img1.jpg",
            "hotSpots": [{
                    "pitch": -12,
                    "yaw": 170,
                    "type": "info",
                    "text": "Картина Айвазовского ''Девятый вал''."
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
                        console.log('ga')
                    }
                }
            ]
        },

        "second-scene": {
            "title": "Второй зал",
            "type": "equirectangular",
            "panorama": "./assets/img2.jpg",
            "preview": "./assets/img2.jpg",
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