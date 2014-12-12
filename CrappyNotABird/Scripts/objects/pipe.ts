/// <reference path="../managers/asset.ts" />
module objects {
    // Pipe class
    export class Pipe {
        upperImage: createjs.Sprite;
        lowerImage: createjs.Sprite;
        stage: createjs.Stage;
        game: createjs.Container;
        width: number;
        height: number;
        dy: number;
        dx: number;
        constructor(stage: createjs.Stage, game: createjs.Container) {
            this.stage = stage;
            this.game = game;
            this.upperImage = new createjs.Sprite(managers.Assets.atlas, "upperPipe");
            this.lowerImage = new createjs.Sprite(managers.Assets.atlas, "lowerPipe");
            this.width = this.upperImage.getBounds().width;
            this.height = this.upperImage.getBounds().height;
            this.upperImage.regX = this.width / 2;
            this.upperImage.regY = this.height / 2;
            this.lowerImage.regX = this.width / 2;
            this.lowerImage.regY = this.height / 2;

            this.reset();

            game.addChild(this.upperImage);
            game.addChild(this.lowerImage);
        }

        update() {
            this.upperImage.x -= this.dx;
            this.lowerImage.x -= this.dx;

            if (this.upperImage.x < (0 - this.width) && this.lowerImage.x < (0 - this.width)) {
                this.reset();
            }
        }

        reset() {
            var upperY: number = Math.floor((Math.random() * (this.stage.canvas.height - 200)) + 300);

            switch(gameMode)
            {
                case 1:
                    var lowerY: number = upperY + constants.EASY_GAP;
                    this.upperImage.y = upperY - this.upperImage.getBounds().height;
                    this.lowerImage.y = lowerY;
                    break;
                case 2:
                    var lowerY: number = upperY + constants.MEDIUM_GAP;
                    this.upperImage.y = upperY - this.upperImage.getBounds().height;
                    this.lowerImage.y = lowerY;
                    break;
                case 3:
                    var lowerY: number = upperY + constants.HARD_GAP;
                    this.upperImage.y = upperY - this.upperImage.getBounds().height;
                    this.lowerImage.y = lowerY;
                    break;
            }

            this.upperImage.x = (this.stage.canvas.width + this.width);
            this.lowerImage.x = (this.stage.canvas.width + this.width);

            this.dx = 5;
        }

        destroy() {
            game.removeChild(this.upperImage);
            game.removeChild(this.lowerImage);
        }
    }

}