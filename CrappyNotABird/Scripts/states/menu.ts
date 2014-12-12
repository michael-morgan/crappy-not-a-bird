/// <reference path="../constants.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../objects/superman.ts" />
/// <reference path="../objects/level.ts" />
/// <reference path="../objects/meat.ts" />
/// <reference path="../objects/pipe.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/label.ts" />

module states {
    export function playButtonClicked(event: MouseEvent) {
        stage.removeChild(game);
        superman.destroy();
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.PLAY_STATE;
        changeState(currentState);
    }

    export function instructionButtonClicked(event: MouseEvent) {
        var gameInstructionsLabel: objects.Label;

        gameInstructionsLabel = new objects.Label(stage.canvas.width - 20, 120, "Keep superman flying with the space bar.\n\n"
            + "Avoid the pipes & collect meat to improve your score.");
        gameInstructionsLabel.font = "20px Consolas";

        game.addChild(gameInstructionsLabel);

        stage.addChild(game);
    }

    export function menuState() {
        level.update();
        superman.update();
    }

    export function menu() {
        var gameNameLabel: objects.Label, gameModeLabel: objects.Label;

        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        level = new objects.Level(stage, game);
        superman = new objects.Superman(stage, game);

        // Show Cursor
        stage.cursor = "default";

        // Display game title
        gameNameLabel = new objects.Label(stage.canvas.width / 2, 40, "Crappy Not A Bird.");
        game.addChild(gameNameLabel);

        // Display Instructions Button
        instructionButton = new objects.Button(stage.canvas.width / 2, 225, "instructionsButton");
        game.addChild(instructionButton);
        instructionButton.addEventListener("click", instructionButtonClicked);

        // Display Play Again Button
        playButton = new objects.Button(stage.canvas.width / 2, 300, "playButton");
        game.addChild(playButton);
        playButton.addEventListener("click", playButtonClicked);

        // Display game mode
        gameModeLabel = new objects.Label(stage.canvas.width / 2, 400, "Switch Game Mode - Space Bar");
        game.addChild(gameModeLabel);

        stage.addChild(game);

        window.onkeyup = this.switchGameMode;
    }

    export function switchGameMode(e) {
        if (e.which == 32 && currentState == constants.MENU_STATE) {
            if (gameMode < 3 && gameMode > 0)
                gameMode++;
            else
                gameMode = 1;

            alert("Game Mode: " + constants.getGameMode(gameMode));
        }
    }
} 