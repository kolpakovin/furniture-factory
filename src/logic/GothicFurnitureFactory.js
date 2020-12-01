"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GothicFurnitureFactory = void 0;
var Chair_1 = require("../furniture/Chair");
var Table_1 = require("../furniture/Table");
var Sofa_1 = require("../furniture/Sofa");
var GothicFurnitureFactory = /** @class */ (function () {
    function GothicFurnitureFactory() {
    }
    GothicFurnitureFactory.prototype.createChair = function () {
        return new Chair_1.GothicChair();
    };
    GothicFurnitureFactory.prototype.createTable = function () {
        return new Table_1.GothicTable();
    };
    GothicFurnitureFactory.prototype.createSofa = function () {
        return new Sofa_1.GothicSofa();
    };
    return GothicFurnitureFactory;
}());
exports.GothicFurnitureFactory = GothicFurnitureFactory;
