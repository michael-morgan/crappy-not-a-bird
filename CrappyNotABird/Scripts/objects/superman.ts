/// <reference path="../managers/asset.ts" />
module objects {
    // Superman Class
    export class Superman {
        image: createjs.Sprite;
        stage: createjs.Stage;
        game: createjs.Container;
        trackSound: createjs.SoundInstance;
        width: number;
        height: number;
        constructor(stage: createjs.Stage, game: createjs.Container) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Sprite(managers.Assets.atlas, "superman");
            this.image.x = 50;
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;
            game.addChild(this.image);
            this.trackSound = createjs.Sound.play('track', createjs.Sound.INTERRUPT_NONE, 0, 0, -1, 1, 0);
            window.onkeyup = this.fly;
        }

        fly(e) {
            if (e.which == 32) {
                superman.image.y -= 50;
            }
        }

        update() {
            if((this.image.y + this.height) <= 480)
                this.image.y += 2;
        }

        destroy() {
            this.trackSound.stop();
            game.removeChild(this.image);
        }
    }
} 