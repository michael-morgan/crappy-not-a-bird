/// <reference path="../managers/asset.ts" />
var objects;
(function (objects) {
    // Nyan Class
    var Nyan = (function () {
        function Nyan(stage, game) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Sprite(managers.Assets.atlas, "nyan");
            this.image.x = 50;
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;
            game.addChild(this.image);
            this.trackSound = createjs.Sound.play('track', createjs.Sound.INTERRUPT_NONE, 0, 0, -1, 1, 0);
            window.onkeyup = this.fly;
        }
        Nyan.prototype.fly = function (e) {
            if (e.which == 32) {
                this.image.y += 10;
            }
        };

        Nyan.prototype.update = function () {
            this.image.y -= 0.33;
        };
        Nyan.prototype.destroy = function () {
            this.trackSound.stop();
            game.removeChild(this.image);
        };
        return Nyan;
    })();
    objects.Nyan = Nyan;
})(objects || (objects = {}));
//# sourceMappingURL=nyan.js.map
