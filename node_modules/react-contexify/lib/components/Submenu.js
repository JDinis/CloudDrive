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
var cloneItem_1 = require("./cloneItem");
var styles_1 = require("../utils/styles");
var Submenu = /** @class */ (function (_super) {
    __extends(Submenu, _super);
    function Submenu() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            left: '100%',
            top: 0,
            bottom: 'initial'
        };
        _this.setRef = function (ref) {
            _this.menu = ref;
        };
        return _this;
    }
    Submenu.prototype.componentDidMount = function () {
        var innerWidth = window.innerWidth, innerHeight = window.innerHeight;
        var rect = this.menu.getBoundingClientRect();
        var style = {};
        if (rect.right < innerWidth) {
            style.left = '100%';
            style.right = undefined;
        }
        else {
            style.right = '100%';
            style.left = undefined;
        }
        if (rect.bottom > innerHeight) {
            style.bottom = 0;
            style.top = 'initial';
        }
        else {
            style.bottom = 'initial';
            style.top = 0;
        }
        this.setState(style);
    };
    Submenu.prototype.handleClick = function (e) {
        e.stopPropagation();
    };
    Submenu.prototype.render = function () {
        var _a;
        var _b = this.props, arrow = _b.arrow, disabled = _b.disabled, className = _b.className, style = _b.style, label = _b.label, nativeEvent = _b.nativeEvent, children = _b.children, propsFromTrigger = _b.propsFromTrigger;
        var cssClasses = classnames_1.default(styles_1.styles.item, className, (_a = {},
            _a["" + styles_1.styles.itemDisabled] = typeof disabled === 'function'
                ? disabled({
                    event: nativeEvent,
                    props: __assign({}, propsFromTrigger)
                })
                : disabled,
            _a));
        var submenuStyle = __assign({}, style, this.state);
        return (react_1.default.createElement("div", { className: cssClasses, role: "presentation" },
            react_1.default.createElement("div", { className: styles_1.styles.itemContent, onClick: this.handleClick },
                label,
                react_1.default.createElement("span", { className: styles_1.styles.submenuArrow }, arrow)),
            react_1.default.createElement("div", { className: styles_1.styles.submenu, ref: this.setRef, style: submenuStyle }, cloneItem_1.cloneItem(children, {
                propsFromTrigger: propsFromTrigger,
                nativeEvent: nativeEvent
            }))));
    };
    Submenu.propTypes = {
        label: prop_types_1.default.node.isRequired,
        children: prop_types_1.default.node.isRequired,
        nativeEvent: prop_types_1.default.object,
        arrow: prop_types_1.default.node,
        disabled: prop_types_1.default.oneOfType([prop_types_1.default.func, prop_types_1.default.bool]),
        className: prop_types_1.default.string,
        style: prop_types_1.default.object
    };
    Submenu.defaultProps = {
        arrow: '▶',
        disabled: false,
        nativeEvent: {}
    };
    return Submenu;
}(react_1.Component));
exports.Submenu = Submenu;
//# sourceMappingURL=Submenu.js.map