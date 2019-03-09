"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
function cloneItem(children, props) {
    return react_1.Children.map(
    // remove null item
    react_1.Children.toArray(children).filter(function (child) { return Boolean(child); }), function (item) { return react_1.cloneElement(item, props); });
}
exports.cloneItem = cloneItem;
//# sourceMappingURL=cloneItem.js.map