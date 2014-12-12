/// <reference path="constants.ts" />
/// <reference path="managers/asset.ts" />
/// <reference path="objects/pipe.ts" />
/// <reference path="objects/meat.ts" />
/// <reference path="objects/level.ts" />
/// <reference path="objects/superman.ts" />
/// <reference path="objects/scoreboard.ts" />
/// <reference path="objects/label.ts" />
/// <reference path="objects/button.ts" />
/// <reference path="managers/collision.ts" />
/// <reference path="states/play.ts" />
/// <reference path="states/menu.ts" />
/// <reference path="states/gameover.ts" />
/**
* Source: game.ts
* Author: Tom & Michael
* Last Modified: Nov. 11th, 2014
* Description: handles game variables, initialization and main game loop/states.
*/
var stage;
var game;

var level;
var superman;
var meat;
var pipe;

var scoreboard;

var collision;

var tryAgain;
var playButton;
var instructionButton;

var currentState;
var currentStateFunction;

var gameMode = 1;

// Preload function - Loads Assets and initializes game;
function preload() {
    managers.Assets.init();
    managers.Assets.loader.addEventListener("complete", init);
}

// init called after Assets have been loaded.
function init() {
    stage = new createjs.Stage(document.getElementById("canvas"));
    stage.enableMouseOver(30);
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", gameLoop);
    optimizeForMobile();

    currentState = constants.MENU_STATE;
    changeState(currentState);
}

// Add touch support for mobile devices
function optimizeForMobile() {
    if (createjs.Touch.isSupported()) {
        createjs.Touch.enable(stage);
    }
}

// Game Loop
function gameLoop(event) {
    currentStateFunction();
    stage.update();
}

function changeState(state) {
    switch (state) {
        case constants.MENU_STATE:
            // instantiate menu screen
            currentStateFunction = states.menuState;
            states.menu();
            break;

        case constants.PLAY_STATE:
            // instantiate play screen
            currentStateFunction = states.playState;
            states.play();
            break;

        case constants.GAME_OVER_STATE:
            currentStateFunction = states.gameOverState;

            // instantiate game over screen
            states.gameOver();
            break;
    }
}
//# sourceMappingURL=game.js.map
