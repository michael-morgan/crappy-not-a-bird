var constants;
(function (constants) {
    // State Machine Constants
    constants.MENU_STATE = 0;
    constants.PLAY_STATE = 1;
    constants.GAME_OVER_STATE = 2;

    // Game Constants
    constants.LABEL_FONT = "40px Consolas";
    constants.LABEL_COLOUR = "#960000";
    constants.SUPERMAN_LIVES = 5;
    constants.EASY_GAP = 150, constants.MEDIUM_GAP = 125, constants.HARD_GAP = 100;

    function getGameMode(mode) {
        switch (mode) {
            case 1:
                return "EASY";
            case 2:
                return "MEDIUM";
            case 3:
                return "HARD";
        }
    }
    constants.getGameMode = getGameMode;
})(constants || (constants = {}));
//# sourceMappingURL=constants.js.map
