/// <reference path="../managers/asset.ts" />
var objects;
(function (objects) {
    // Level1 Class
    var Level1 = (function () {
        function Level1(stage, game) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Bitmap(managers.Assets.loader.getResult("level1"));
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.reset();

            this.dx = 5;

            game.addChild(this.image);
        }
        Level1.prototype.update = function () {
            this.image.x -= this.dx;
            if (this.image.x <= -800) {
                this.reset();
            }
        };

        Level1.prototype.reset = function () {
            this.image.x = 0;
        };

        Level1.prototype.destroy = function () {
            game.removeChild(this.image);
        };
        return Level1;
    })();
    objects.Level1 = Level1;
})(objects || (objects = {}));
//# sourceMappingURL=space.js.map
