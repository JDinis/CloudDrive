"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var prop_types_1 = __importDefault(require("prop-types"));
var classnames_1 = __importDefault(require("classnames"));
var styles_1 = require("../utils/styles");
var IconFont = function (_a) {
    var className = _a.className, style = _a.style, children = _a.children;
    return (react_1.default.createElement("i", { className: classnames_1.default(styles_1.styles.itemIcon, className), style: style }, children || ''));
};
exports.IconFont = IconFont;
IconFont.propTypes = {
    children: prop_types_1.default.node,
    className: prop_types_1.default.string,
    style: prop_types_1.default.object
};
//# sourceMappingURL=IconFont.js.map