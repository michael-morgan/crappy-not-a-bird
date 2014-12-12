/// <reference path="../objects/pipe.ts" />
/// <reference path="../objects/meat.ts" />
/// <reference path="../objects/superman.ts" />
/// <reference path="../objects/scoreboard.ts" />
var managers;
(function (managers) {
    // Collision Manager Class
    var Collision = (function () {
        function Collision(superman, meat, pipe, scoreboard) {
            this.superman = superman;
            this.meat = meat;
            this.pipe = pipe;
            this.scoreboard = scoreboard;
        }
        // Utility method - Distance calculation between two points
        Collision.prototype.distance = function (p1, p2) {
            var result = 0;
            var xPoints = 0;
            var yPoints = 0;

            xPoints = p2.x - p1.x;
            xPoints = xPoints * xPoints;

            yPoints = p2.y - p1.y;
            yPoints = yPoints * yPoints;

            result = Math.sqrt(xPoints + yPoints);

            return result;
        };

        // check collision between superman and any pipe object
        Collision.prototype.supermanAndPipe = function (pipe) {
            var p1 = new createjs.Point();
            var p2 = new createjs.Point();

            p1.x = this.superman.image.x;
            p1.y = this.superman.image.y;
            p2.x = this.pipe.upperImage.x;
            p2.y = this.pipe.upperImage.y;
            if (this.distance(p1, p2) < ((this.superman.height / 2) + (this.pipe.height / 2))) {
                createjs.Sound.play("scream");
                this.scoreboard.lives -= 1;
                this.pipe.reset();
            }

            p1.x = this.superman.image.x;
            p1.y = this.superman.image.y;
            p2.x = this.pipe.lowerImage.x;
            p2.y = this.pipe.lowerImage.y;
            if (this.distance(p1, p2) < ((this.superman.height / 2) + (this.pipe.height / 2))) {
                createjs.Sound.play("scream");
                this.scoreboard.lives -= 1;
                this.pipe.reset();
            }
        };

        // check collision between superman and meat
        Collision.prototype.supermanAndMeat = function () {
            var p1 = new createjs.Point();
            var p2 = new createjs.Point();
            p1.x = this.superman.image.x;
            p1.y = this.superman.image.y;
            p2.x = this.meat.image.x;
            p2.y = this.meat.image.y;
            if (this.distance(p1, p2) < ((this.superman.height / 2) + (this.meat.height / 2))) {
                createjs.Sound.play("happy");
                this.scoreboard.score += 100;
                this.meat.reset();
            }
        };

        // Utility Function to Check Collisions
        Collision.prototype.update = function () {
            this.supermanAndPipe(this.pipe);
            this.supermanAndMeat();
        };
        return Collision;
    })();
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map
