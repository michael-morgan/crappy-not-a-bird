/// <reference path="../objects/button.ts" />
/// <reference path="../objects/pipe.ts" />
/// <reference path="../objects/meat.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/level.ts" />
/// <reference path="../objects/superman.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../managers/collision.ts" />
var states;
(function (states) {
    function playState() {
        level.update();
        meat.update();
        superman.update();

        pipe.update();

        collision.update();
        scoreboard.update();

        if (scoreboard.lives <= 0) {
            stage.removeChild(game);
            superman.destroy();
            game.removeAllChildren();
            game.removeAllEventListeners();
            currentState = constants.GAME_OVER_STATE;
            changeState(currentState);
        }
    }
    states.playState = playState;

    // play state Function
    function play() {
        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        level = new objects.Level(stage, game);
        meat = new objects.Meat(stage, game);
        superman = new objects.Superman(stage, game);

        // Show Cursor
        stage.cursor = "none";

        // Create pipe
        pipe = new objects.Pipe(stage, game);

        // Display Scoreboard
        scoreboard = new objects.Scoreboard(stage, game);

        // Instantiate Collision Manager
        collision = new managers.Collision(superman, meat, pipe, scoreboard);

        stage.addChild(game);
    }
    states.play = play;
})(states || (states = {}));
//# sourceMappingURL=play.js.map
