function TestDecor(target) {
    console.log("Decorator");
}


@TestDecor
class Test {

    
}


function decorTime(){
    console.log("The Time is:");
}


// @decorTime
// function getTime() {
//     return new Date();
// }

// let time = getTime();


