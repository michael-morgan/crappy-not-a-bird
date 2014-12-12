/// <reference path="../objects/pipe.ts" />
/// <reference path="../objects/meat.ts" />
/// <reference path="../objects/superman.ts" />
/// <reference path="../objects/scoreboard.ts" />

module managers {
    // Collision Manager Class
    export class Collision {
        // class variables
        private superman: objects.Superman;
        private meat: objects.Meat;
        private pipe: objects.Pipe;
        private scoreboard: objects.Scoreboard;

        constructor(superman: objects.Superman, meat: objects.Meat, pipe: objects.Pipe, scoreboard: objects.Scoreboard) {
            this.superman = superman;
            this.meat = meat;
            this.pipe = pipe;
            this.scoreboard = scoreboard;
        }

        // Utility method - Distance calculation between two points
        private distance(p1: createjs.Point, p2: createjs.Point): number {
            var result: number = 0;
            var xPoints: number = 0;
            var yPoints: number = 0;

            xPoints = p2.x - p1.x;
            xPoints = xPoints * xPoints;

            yPoints = p2.y - p1.y;
            yPoints = yPoints * yPoints;

            result = Math.sqrt(xPoints + yPoints);

            return result;
        }

        // check collision between superman and any pipe object
        private supermanAndPipe(pipe: objects.Pipe) {
            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();

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
        }

        // check collision between superman and meat
        private supermanAndMeat() {
            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();
            p1.x = this.superman.image.x;
            p1.y = this.superman.image.y;
            p2.x = this.meat.image.x;
            p2.y = this.meat.image.y;
            if (this.distance(p1, p2) < ((this.superman.height / 2) + (this.meat.height / 2))) {
                createjs.Sound.play("happy");
                this.scoreboard.score += 100;
                this.meat.reset();
            }
        }

        // Utility Function to Check Collisions
        update() {
            this.supermanAndPipe(this.pipe);
            this.supermanAndMeat();
        }
    }
} 