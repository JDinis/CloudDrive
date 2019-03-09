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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var prop_types_1 = __importDefault(require("prop-types"));
var actions_1 = require("../utils/actions");
var eventManager_1 = require("../utils/eventManager");
var MenuProvider = /** @class */ (function (_super) {
    __extends(MenuProvider, _super);
    function MenuProvider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.childrenRefs = [];
        _this.handleEvent = function (e) {
            e.preventDefault();
            e.stopPropagation();
            eventManager_1.eventManager.emit(actions_1.DISPLAY_MENU(_this.props.id), e.nativeEvent, __assign({ ref: _this.childrenRefs.length === 1
                    ? _this.childrenRefs[0]
                    : _this.childrenRefs }, _this.props.data));
        };
        _this.setChildRef = function (ref) {
            return ref === null || _this.childrenRefs.push(ref);
        };
        return _this;
    }
    MenuProvider.prototype.getChildren = function () {
        var _this = this;
        // remove all the props specific to the provider
        var _a = this.props, id = _a.id, component = _a.component, event = _a.event, children = _a.children, className = _a.className, style = _a.style, storeRef = _a.storeRef, data = _a.data, rest = __rest(_a, ["id", "component", "event", "children", "className", "style", "storeRef", "data"]);
        // reset refs
        this.childrenRefs = [];
        return react_1.Children.map(children, function (child) {
            return react_1.isValidElement(child)
                ? react_1.cloneElement(child, __assign({}, rest, (storeRef ? { ref: _this.setChildRef } : {})))
                : child;
        });
    };
    MenuProvider.prototype.render = function () {
        var _a;
        var _b = this.props, component = _b.component, render = _b.render, event = _b.event, className = _b.className, style = _b.style;
        var attributes = (_a = {},
            _a[event] = this.handleEvent,
            _a.className = className,
            _a.style = style,
            _a);
        if (typeof render === 'function') {
            return render(__assign({}, attributes, { children: this.getChildren() }));
        }
        return react_1.createElement(component, attributes, this.getChildren());
    };
    MenuProvider.propTypes = {
        id: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]).isRequired,
        children: prop_types_1.default.node.isRequired,
        component: prop_types_1.default.oneOfType([prop_types_1.default.node, prop_types_1.default.func]),
        render: prop_types_1.default.func,
        event: prop_types_1.default.string,
        className: prop_types_1.default.string,
        style: prop_types_1.default.object,
        storeRef: prop_types_1.default.bool,
        data: prop_types_1.default.object
    };
    MenuProvider.defaultProps = {
        component: 'div',
        event: 'onContextMenu',
        storeRef: true
    };
    return MenuProvider;
}(react_1.Component));
exports.MenuProvider = MenuProvider;
//# sourceMappingURL=MenuProvider.js.map