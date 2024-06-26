var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.add = function (a, b) {
        this.validateNumber(a, b);
        return a + b;
    };
    Calculator.prototype.subtract = function (a, b) {
        this.validateNumber(a, b);
        return a - b;
    };
    Calculator.prototype.multiply = function (a, b) {
        this.validateNumber(a, b);
        return a * b;
    };
    Calculator.prototype.divide = function (a, b) {
        this.validateNumber(a, b);
        if (b === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        return a / b;
    };
    Calculator.prototype.validateNumber = function () {
        var numbers = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            numbers[_i] = arguments[_i];
        }
        for (var _a = 0, numbers_1 = numbers; _a < numbers_1.length; _a++) {
            var num = numbers_1[_a];
            if (typeof num !== "number") {
                throw new Error("Invalid number input");
            }
        }
    };
    return Calculator;
}());
