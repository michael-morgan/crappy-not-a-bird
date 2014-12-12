/// <reference path="../managers/asset.ts" />
var objects;
(function (objects) {
    // Superman Class
    var Superman = (function () {
        function Superman(stage, game) {
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
        Superman.prototype.fly = function (e) {
            if (e.which == 32) {
                superman.image.y -= 50;
            }
        };

        Superman.prototype.update = function () {
            if ((this.image.y + this.height) <= 480)
                this.image.y += 2;
        };

        Superman.prototype.destroy = function () {
            this.trackSound.stop();
            game.removeChild(this.image);
        };
        return Superman;
    })();
    objects.Superman = Superman;
})(objects || (objects = {}));
//# sourceMappingURL=superman.js.map
