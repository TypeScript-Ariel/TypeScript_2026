



function runTime(target: any, propertyKey: string, descriptor: PropertyDescriptor) {

    const bodyMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
       
        let start = performance.now();
        
        let res =  bodyMethod.apply(this,args);

        let end = performance.now();

        console.log(end-start);
        return res;

    };

};



class TestRunTime {

    
    @runTime
    loop() {
        for (let i = 0; i < 100000; i++) {

        }
        return "Test loop";
    }


}

let tt = new TestRunTime();
let res =tt.loop();
console.log(res)