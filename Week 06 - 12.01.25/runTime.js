var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function runTime(target, propertyKey, descriptor) {
    var bodyMethod = descriptor.value;
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var start = performance.now();
        var res = bodyMethod.apply(this, args);
        var end = performance.now();
        console.log(end - start);
        return res;
    };
}
;
var TestRunTime = /** @class */ (function () {
    function TestRunTime() {
    }
    TestRunTime.prototype.loop = function () {
        for (var i = 0; i < 100000; i++) {
        }
        return "Test loop";
    };
    __decorate([
        runTime
    ], TestRunTime.prototype, "loop", null);
    return TestRunTime;
}());
var tt = new TestRunTime();
var res = tt.loop();
console.log(res);
