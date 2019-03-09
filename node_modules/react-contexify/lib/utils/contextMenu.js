"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var eventManager_1 = require("./eventManager");
var actions_1 = require("./actions");
var contextMenu = {
    show: function (_a) {
        var id = _a.id, event = _a.event, props = _a.props;
        eventManager_1.eventManager.emit(actions_1.DISPLAY_MENU(id), event.nativeEvent || event, props);
    },
    hideAll: function () {
        eventManager_1.eventManager.emit(actions_1.HIDE_ALL);
    }
};
exports.contextMenu = contextMenu;
//# sourceMappingURL=contextMenu.js.map