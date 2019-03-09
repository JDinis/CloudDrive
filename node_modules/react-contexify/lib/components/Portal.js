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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_dom_1 = require("react-dom");
var Portal = /** @class */ (function (_super) {
    __extends(Portal, _super);
    function Portal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            canRender: false
        };
        _this.container = {};
        return _this;
    }
    Portal.prototype.componentDidMount = function () {
        this.container = document.createElement('div');
        document.body.appendChild(this.container);
        this.setState({
            canRender: true
        });
    };
    Portal.prototype.componentWillUnmount = function () {
        document.body.removeChild(this.container);
    };
    Portal.prototype.render = function () {
        return (this.state.canRender && react_dom_1.createPortal(this.props.children, this.container));
    };
    return Portal;
}(react_1.PureComponent));
exports.Portal = Portal;
//# sourceMappingURL=Portal.js.map