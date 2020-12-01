"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModernFurnitureFactory = void 0;
var Chair_1 = require("../furniture/Chair");
var Table_1 = require("../furniture/Table");
var Sofa_1 = require("../furniture/Sofa");
var ModernFurnitureFactory = /** @class */ (function () {
    function ModernFurnitureFactory() {
    }
    ModernFurnitureFactory.prototype.createChair = function () {
        return new Chair_1.ModernChair();
    };
    ModernFurnitureFactory.prototype.createTable = function () {
        return new Table_1.ModernTable();
    };
    ModernFurnitureFactory.prototype.createSofa = function () {
        return new Sofa_1.ModernSofa();
    };
    return ModernFurnitureFactory;
}());
exports.ModernFurnitureFactory = ModernFurnitureFactory;
