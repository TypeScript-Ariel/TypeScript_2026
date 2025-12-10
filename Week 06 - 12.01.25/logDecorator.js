var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function logCallsMethod(level) {
    return function (target, propertyKey, descriptor) {
        var bodyMethod = descriptor.value;
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            console.log("Type: ".concat(level));
            console.log("The method ".concat(propertyKey, " is running with arguments ").concat(args));
            var res = bodyMethod.apply(this, args);
            console.log("res -> ".concat(res));
            return res;
        };
        return descriptor;
    };
}
var Calc = /** @class */ (function () {
    function Calc() {
    }
    Calc.prototype.add = function (a, b) {
        return a + b;
    };
    Calc.prototype.sub = function (a, b) {
        return a - b;
    };
    Calc.prototype.mul = function (a, b) {
        return a * b;
    };
    Calc.prototype.div = function (a, b) {
        return a / b;
    };
    __decorate([
        logCallsMethod("INFO")
    ], Calc.prototype, "add", null);
    return Calc;
}());
var calc = new Calc();
var ans = calc.add(5, 5);
console.log(ans);
