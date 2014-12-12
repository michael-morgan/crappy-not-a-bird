/// <reference path="../managers/asset.ts" />
var objects;
(function (objects) {
    // Meat Class
    var Meat = (function () {
        function Meat(stage, game) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Bitmap(managers.Assets.loader.getResult("meat"));
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;
            this.reset();

            this.dx = 5;

            game.addChild(this.image);
        }
        Meat.prototype.update = function () {
            this.image.x -= this.dx;
            if (this.image.x < (0 - this.width)) {
                this.reset();
            }
        };

        Meat.prototype.reset = function () {
            this.image.y = Math.floor(Math.random() * this.stage.canvas.width);
            this.image.x = (this.stage.canvas.width + this.width);
        };

        Meat.prototype.destroy = function () {
            game.removeChild(this.image);
        };
        return Meat;
    })();
    objects.Meat = Meat;
})(objects || (objects = {}));
//# sourceMappingURL=meat.js.map
