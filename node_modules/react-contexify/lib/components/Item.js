"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var prop_types_1 = __importDefault(require("prop-types"));
var classnames_1 = __importDefault(require("classnames"));
var styles_1 = require("../utils/styles");
var noop = function () { };
var Item = /** @class */ (function (_super) {
    __extends(Item, _super);
    function Item(props) {
        var _this = _super.call(this, props) || this;
        _this.handleClick = function (e) {
            _this.isDisabled
                ? e.stopPropagation()
                : _this.props.onClick({
                    event: _this.props.nativeEvent,
                    props: __assign({}, _this.props.propsFromTrigger, _this.props.data)
                });
        };
        var _a = _this.props, disabled = _a.disabled, nativeEvent = _a.nativeEvent, propsFromTrigger = _a.propsFromTrigger, data = _a.data;
        _this.isDisabled =
            typeof disabled === 'function'
                ? disabled({
                    event: nativeEvent,
                    props: __assign({}, propsFromTrigger, data)
                })
                : disabled;
        return _this;
    }
    Item.prototype.render = function () {
        var _a;
        var _b = this.props, className = _b.className, style = _b.style, children = _b.children;
        var cssClasses = classnames_1.default(styles_1.styles.item, className, (_a = {},
            _a["" + styles_1.styles.itemDisabled] = this.isDisabled,
            _a));
        return (react_1.default.createElement("div", { className: cssClasses, style: style, onClick: this.handleClick, role: "presentation" },
            react_1.default.createElement("div", { className: styles_1.styles.itemContent }, children)));
    };
    Item.propTypes = {
        children: prop_types_1.default.node.isRequired,
        data: prop_types_1.default.object,
        disabled: prop_types_1.default.oneOfType([prop_types_1.default.func, prop_types_1.default.bool]),
        onClick: prop_types_1.default.func,
        nativeEvent: prop_types_1.default.object,
        propsFromTrigger: prop_types_1.default.object,
        className: prop_types_1.default.string,
        style: prop_types_1.default.object
    };
    Item.defaultProps = {
        disabled: false,
        onClick: noop
    };
    return Item;
}(react_1.Component));
exports.Item = Item;
//# sourceMappingURL=Item.js.map