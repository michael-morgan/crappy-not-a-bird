/// <reference path="../managers/asset.ts" />
var objects;
(function (objects) {
    // Level Class
    var Level = (function () {
        function Level(stage, game) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Bitmap(managers.Assets.loader.getResult("level"));
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.reset();

            this.dx = 1;

            game.addChild(this.image);
        }
        Level.prototype.update = function () {
            this.image.x -= this.dx;
            if (this.image.x <= -6400) {
                this.reset();
            }
        };

        Level.prototype.reset = function () {
            this.image.x = 0;
        };

        Level.prototype.destroy = function () {
            game.removeChild(this.image);
        };
        return Level;
    })();
    objects.Level = Level;
})(objects || (objects = {}));
//# sourceMappingURL=level1.js.map
