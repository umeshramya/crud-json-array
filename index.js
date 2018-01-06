"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var imp = require("./js-dist/create");
var CRUD = /** @class */ (function (_super) {
    __extends(CRUD, _super);
    function CRUD() {
        return _super.call(this) || this;
    }
    return CRUD;
}(imp.Create));
exports.CRUD = CRUD;
