"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var eventManager = {
    eventList: new Map(),
    on: function (event, callback) {
        var _this = this;
        this.eventList.has(event) || this.eventList.set(event, new Set());
        this.eventList.get(event).add(callback);
        return function () { return _this.eventList.get(event).delete(callback); };
    },
    emit: function (event) {
        var _this = this;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (!this.eventList.has(event)) {
            console.warn("<" + event + "> Event is not registered. Did you forgot to bind the event ?");
            return false;
        }
        this.eventList.get(event).forEach(function (cb) { return cb.call.apply(cb, [_this].concat(args)); });
        return true;
    }
};
exports.eventManager = eventManager;
//# sourceMappingURL=eventManager.js.map