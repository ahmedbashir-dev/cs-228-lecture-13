//for(int i = 0; i < 10; i++){}

for(let i = 0; i < 5; i++){
    //alert("Iteration # " + i);
}

let index = 0;
// while (index<5){
//     console.log("Iteration # " + (index+1));
//     index++;
// }

let arr = [1,2,3,4,5,6,7,8,9,10]
let times5 = []
for(let i = 0; i < arr.length; ++i){
    times5.push(arr[i]*5);
}
console.log(times5);

// for(let j = 0; j < arr.length; ++j){
//     console.log(arr[j]);
// }
// for(let j = arr.length - 1; j >= 0; --j){
//     console.log(arr[j]);
// }
//function functionName(){}

function sayHello(){
    console.log("Hello from sayHello function");
}

function sayGreetings(name){
    console.log("Hello " + name);
}

function sum(a,b){
    return a+b;
}



sayHello();
sayGreetings("Web Developers");

console.log(sum(1,2));
var result = sum(2,2);
console.log(sum(2.0,2.3));
console.log(sum(2,3.6));
console.log(sum("A","!"));
console.log("Result = " + result);
//console.log(3)