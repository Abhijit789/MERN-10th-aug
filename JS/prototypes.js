// common methods generation

let num1=[10,20,304,5];
let num2=[50,60,70,80,90];
let num3=[57687,989,90.8,345,678]

Array.prototype.sum=function(){
    let sum=0;
    for(let i=0;i<this.length;i++){
        sum+=this[i]
    }
    return sum;
}

console.log(num1.sum());
console.log(num2.sum());
console.log(num3.sum());

// custom method creation

let obj={
    name:"gangadhar",
    age:23
}

Object.prototype.print=function(){
    console.log(`Printed`);
    
}

obj.print();


// Dynamic method creation

function Person(name,age){
    this.name=name;
    this.age=age;
}

Person.prototype.introduce=function(){
    console.log(`my name is ${this.name} and age is ${this.age}`);
    
}

let p1=new Person("shaktiman",45)
let p2=new Person("gangadhar",60)

console.log(p1);
console.log(p2);

// prototype chaining

let arr=[10,20,30];
let str="hello";
let obj2={name:"vijay",age:23}

function p3(){
    console.log("hello");
    

}

Object.prototype.common=function(){
    console.log("common shared functionality");
    
}

arr.common();
str.common();
obj2.common();
p3.common();


// prototype inheritance

function Animal(name){
    this.name=name

}

Animal.prototype.speak=function(){
    console.log(`${this.name} make noise`);
    
}

let animal=new Animal("rottwheiller");

animal.speak();

// prototype inheritance setup

Dog.prototype=Object.create(Animal.prototype);

Dog.prototype.constructor=Dog;
Dog.prototype.speak=function(){
    console.log(`${this.name} barks`);
    
}
function Dog(name){
    Animal.call(this,name)
}

let dog=new Dog("rex");

dog.speak()






