/// <reference path="../managers/asset.ts" />
var objects;
(function (objects) {
    // Level Class
    var Level = (function () {
        function Level(stage, game) {
            this.stage = stage;
            this.game = game;

            if (gameMode == 1)
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
        Level.prototype.update = function () {
            this.image.x -= this.dx;
            if (this.image.x <= -5760) {
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
//# sourceMappingURL=level.js.map
