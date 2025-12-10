
function logCallsMethod(level: string) {

    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {

        const bodyMethod = descriptor.value;

        descriptor.value = function (...args: any[]) {

            console.log(`Type: ${level}`);
            console.log(`The method ${propertyKey} is running with arguments ${args}`);
            let res = bodyMethod.apply(this, args);
            console.log(`res -> ${res}`);
            return res;

        };

        return descriptor;
    }

}



class Calc {
    @logCallsMethod("INFO")
    add(a: number, b: number): number {
        return a + b;
    }
    @logCallsMethod("INFO")
    sub(a: number, b: number): number {
        return a - b;
    }
    @logCallsMethod("INFO")
    mul(a: number, b: number): number {
        return a * b;
    }

    div(a: number, b: number): number {
        return a / b;
    }


}


let calc = new Calc();
let ans = calc.add(5,5);
console.log(ans);
