// callback pattern

// function person1(name,callback){
//     console.log(`${name} is talking to someone`);
//     callback(name);
    
// }

// function person2(name){
//     console.log(`${name} is calling!!!`);
    
// }

// person1("mohan",person2)


// auth flow

// function auth(user,password,isLogin,isLogout){
//     if(user=="ranu" && password=="ranu@123"){
//         isLogin(user)
//     }else{
//         isLogout(user)
//     }
// }

// function login(user){
//     console.log(`Welcome ${user} `);
    
// }

// function logout(user){
//     console.log(`${user} doesnt found!`);
    
// }

// auth("ranu","ranu@13",login,logout)

// payment method

function makePayment(amount,paymentType,paymentMode){
    if(paymentType=="card"){
        paymentMode(amount,paymentType)
    }else if(paymentType=="UPI"){
        paymentMode(amount,paymentType)
    }else{
        console.log("Payment Failed!!!");
        
    }
}

function paymentByCard(amount,paymentType){
    console.log(`Thank You we have received ${amount} ! Payment done by ${paymentType}`);
    
}

function paymentByUPI(amount,paymentType){
    console.log(`Thank You we have received ${amount} ! Payment done by ${paymentType}`);
    
}

makePayment(2500,"UPI",paymentByUPI)
makePayment(2900,"card",paymentByCard)
makePayment(2900,"networkbanking",paymentByCard)



// function recursion

function counter(num){
    if(num===0){
        return ;
    }
    console.log(num);
    counter(num-1)
    
}

counter(5)