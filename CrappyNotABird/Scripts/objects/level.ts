/// <reference path="../managers/asset.ts" />
module objects {
    // Level Class
    export class Level {
        image: createjs.Bitmap;
        stage: createjs.Stage;
        game: createjs.Container;
        width: number;
        height: number;
        dx: number;
        constructor(stage: createjs.Stage, game: createjs.Container) {
            this.stage = stage;
            this.game = game;

            if(gameMode == 1)
                this.image = new createjs.Bitmap(managers.Assets.loader.getResult("level1"));
            else if (gameMode == 2)
                this.image = new createjs.Bitmap(managers.Assets.loader.getResult("level2"));
            else if (gameMode == 3)
                this.image = new createjs.Bitmap(managers.Assets.loader.getResult("level3"));

            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.reset();

            this.dx = 1;

            game.addChild(this.image);
        }

        update() {
            this.image.x -= this.dx;
            if (this.image.x <= -5760) {
                this.reset();
            }
        }

        reset() {
            this.image.x = 0;
        }

        destroy() {
            game.removeChild(this.image);
        }
    }

}