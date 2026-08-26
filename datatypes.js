console.log(typeof 10);
console.log(typeof typeof 10);

console.log(typeof null);

console.log(typeof NaN);

console.log(typeof 10 === typeof NaN + 10);

console.log("33"+true-"33");

console.log(true+false);


// explicite typecasting 

console.log("10"+10);

console.log(Number("10")+10);

console.log(Boolean("hello")-2);

console.log(Number("true")+10);

console.log(String(true)-false);

console.log(Boolean(" ")+1);

let num=true;

if(typeof Number(typeof num)==="number"){
    console.log("hey this is number");
    
}
