// function declaration

function getSum(a,b){
    return a+b; 
}

console.log(getSum(10,20));

function getDetails(name,empid,email){
        return `My name is ${name} and empid is ${empid} and email is ${email}`
}

console.log(getDetails("naresh","TCS123","naru@123gmail.com"));

// function as an expression

let emp1=function empDetails(name){
   return   `My name is ${name}`
}

console.log(emp1("narendra modi"));

// fat arrow function

let arrFun=()=>{
    return "hey this is fat arrow function"
}

console.log(arrFun());

// anonymous function 

let anno=function(){
    return `Hey this is anonymous function`
}

console.log(anno());


// IIFE

(function(){
    console.log("Hey this is IIFE");
    
})()

// Higher order function

function parent(){
    console.log("hey this is parent function");
    return ()=>{
        console.log("Hey this child");
        
    }
    
}

parent()()


function interviewProcess(name){
    if(name=="jay"){
        return (question)=>{
           console.log(`Hey hello ${name} what is ${question}`);
           
        }
    }else if(name=="vijay"){
        return (question)=>{
           console.log(`Hey hello ${name} what is ${question}`);
           
        }
    }else if(name=="ranvijay"){
        return (question)=>{
           console.log(`Hey hello ${name} what is ${question}`);
           
        }
    }else if(name=="digvijay"){
        return (question)=>{
           console.log(`Hey hello ${name} what is ${question}`);
           
        }
    }else{
        return (question)=>{
           console.log(`Sorry you have not registered! Kindly register for this interview.`);
           
        }
    }
}

interviewProcess("dhiraj")("java")
interviewProcess("jay")("java")

function paymentMode(paymentMode,amount){
    if(paymentMode=="creditcard"){  
        return (amount)=>{
           console.log(`Thank You we have recieved the amount ${amount} ! Payment done by ${paymentMode}`);
        
        }
        
    }else{
        return (amount)=>{
            console.log(`Thank You we have recieved the amount ${amount}! Payment dont by ${paymentMode}`);
    

        }
        }
}

paymentMode("creditcard")(2500)
paymentMode("upi")(2500)




