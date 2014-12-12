module managers {
    // Image and Sound Manifest;
    var assetManifest = [
        { id: "level1", src: "assets/images/level_1.png" },
        { id: "level2", src: "assets/images/level_2.png" },
        { id: "level3", src: "assets/images/level_3.png" },
        { id: "meat", src: "assets/images/meat.png" },
        { id: "track", src: "assets/sounds/sound_track.ogg" },
        { id: "scream", src: "assets/sounds/sound_grunt.ogg" },
        { id: "happy", src: "assets/sounds/sound_female_happy.ogg" }
    ];

    var spriteSheetData = {
        "images": ["assets/images/atlas.png"],
        "frames": [

            [2, 2, 210, 60],
            [2, 64, 210, 60],
            [2, 126, 210, 60],
            [2, 188, 120, 667],
            [124, 188, 120, 667],
            [2, 857, 117, 33],
            [121, 857, 117, 33]
        ],
        "animations": {
            "instructionsButton": [0],
            "playButton": [1],
            "tryAgainButton": [2],
            "lowerPipe": [3],
            "upperPipe": [4], 
            "superman": {frames:[5, 6], speed: 0.1}
        }
    }

    // Asset Manager Class
    export class Assets {
        public static manifest;
        public static data;

        public static loader;
        public static atlas: createjs.SpriteSheet;

        public static init() {
            createjs.Sound.initializeDefaultPlugins();
            this.loader = new createjs.LoadQueue();
            this.loader.installPlugin(createjs.Sound);
            this.loader.loadManifest(assetManifest);
            this.atlas = new createjs.SpriteSheet(spriteSheetData);
        }

    }
} 