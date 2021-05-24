"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculator = void 0;
var Calculator = /** @class */ (function () {
    function Calculator(a, b) {
        this.a = a;
        this.b = b;
    }
    ;
    Calculator.prototype.add = function () {
        return this.a + this.b;
    };
    ;
    Calculator.prototype.subtract = function () {
        return this.a - this.b;
    };
    ;
    Calculator.prototype.multiply = function () {
        return this.a + this.b;
    };
    ;
    Calculator.prototype.log = function () {
        console.log(this.a + " + " + this.b + " = " + this.add());
        console.log(this.a + " - " + this.b + " = " + this.subtract());
        console.log(this.a + " * " + this.b + " = " + this.multiply());
    };
    ;
    return Calculator;
}());
exports.Calculator = Calculator;
//# sourceMappingURL=calculator.js.map