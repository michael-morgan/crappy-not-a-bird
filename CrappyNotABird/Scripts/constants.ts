module constants {
    // State Machine Constants
    export var MENU_STATE: number = 0;
    export var PLAY_STATE: number = 1;
    export var GAME_OVER_STATE: number = 2;

    // Game Constants
    export var LABEL_FONT = "40px Consolas";
    export var LABEL_COLOUR = "#960000";
    export var SUPERMAN_LIVES = 5;
    export var EASY_GAP = 150, MEDIUM_GAP = 125, HARD_GAP = 100;

    export function getGameMode(mode: number)
    {
        switch (mode) {
            case 1:
                return "EASY";
            case 2:
                return "MEDIUM";
            case 3:
                return "HARD";
        }
    }
}