/// <reference path="../managers/asset.ts" />
var objects;
(function (objects) {
    // Pipe class
    var Pipe = (function () {
        function Pipe(stage, game) {
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
        Pipe.prototype.update = function () {
            this.upperImage.x -= this.dx;
            this.lowerImage.x -= this.dx;

            if (this.upperImage.x < (0 - this.width) && this.lowerImage.x < (0 - this.width)) {
                this.reset();
            }
        };

        Pipe.prototype.reset = function () {
            var upperY = Math.floor((Math.random() * (this.stage.canvas.height - 200)) + 300);

            switch (gameMode) {
                case 1:
                    var lowerY = upperY + constants.EASY_GAP;
                    this.upperImage.y = upperY - this.upperImage.getBounds().height;
                    this.lowerImage.y = lowerY;
                    break;
                case 2:
                    var lowerY = upperY + constants.MEDIUM_GAP;
                    this.upperImage.y = upperY - this.upperImage.getBounds().height;
                    this.lowerImage.y = lowerY;
                    break;
                case 3:
                    var lowerY = upperY + constants.HARD_GAP;
                    this.upperImage.y = upperY - this.upperImage.getBounds().height;
                    this.lowerImage.y = lowerY;
                    break;
            }

            this.upperImage.x = (this.stage.canvas.width + this.width);
            this.lowerImage.x = (this.stage.canvas.width + this.width);

            this.dx = 5;
        };

        Pipe.prototype.destroy = function () {
            game.removeChild(this.upperImage);
            game.removeChild(this.lowerImage);
        };
        return Pipe;
    })();
    objects.Pipe = Pipe;
})(objects || (objects = {}));
//# sourceMappingURL=troll.js.map
