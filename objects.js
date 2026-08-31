// Destructuring

let human = {
  name: "gangadhar",
  age: 45,
  adharId: 12345,
  wifeDetails: {
    name: "gangubai",
    age: 38,
    adharId: 4657,
  },
};

// console.log(human.name);
// console.log(human.wifeDetails.name);

// let{name,age,adharId}=human;

// console.log("destrcured",name);

// let{name,age,adharId}=human.wifeDetails

// console.log(name);

let {
  name: husbundName,
  age: husbundAge,
  adharId: husbundAdharId,
  wifeDetails: { name: wifeName, age: wifeAge, adharId: wifeAdharId },
} = human;

// console.log(name);
// console.log(wifeName);

console.log(husbundName);
console.log(wifeName);


// letrals

let marker={
    company:"camline",
    price:45,
    color:"blue"
}

console.log(marker);

// accessing values using dot notation

// syntax : objRefVar.keyName

console.log(marker.color);


// accessing values using square bracket notation

// syntax : objRefVar["keyName"]

console.log(marker["price"]);

// update

marker.material="HDPE";

console.log(marker);

// delete

delete marker.company

console.log(marker,"updated");


// new Keyword and Object constructor

let obj=new Object();

obj.name="john";
obj.age=45;

console.log(obj);



// functional constructor

function Employee(ename,esal,eid){
    this.name=ename;
    this.sal=esal;
    this.id=eid;
}

let emp1=new Employee("sourav",23000,"TCS123")
let emp2=new Employee("gourav",25000,"TCS113")
let emp3=new Employee("Vijay",28000,"TCS125")

console.log(emp1,emp2,emp3);
