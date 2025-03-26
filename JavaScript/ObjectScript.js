//Creating and Accessing Object Properties
let car={
    brand:"Toyota",
    Model:"Corolla",
    Year:2024
};
console.log(car.brand);
console.log(car.Model);
console.log(car.Year);

//Adding and Deleting Properties
let person={};
person.name="Lilly";
person.lastname="Sri";
person.age=21;
delete person.age;
console.log(person);

//checking for a property
let book={
    title:"1984",
    Author:"George Orwell"
};
function hasProperty(obj,key){
    return key in obj
}
console.log(hasProperty(book,"title"));
console.log(hasProperty(book,"year"));

//Looping Through Object Properties
let student={
    Name:"Liily",
    Age:21,
    college:"vasavi"
};
for(let key in student){
    console.log(`${key}: ${student[key]}`);   
}
//counting properties in object
let user={
    FirstName:"Lilly",
    lastname:"sri",
    isAdmin:true
};
function coutingProperties(obj){
    let count=0;
    for(let key in obj){
        count++;
    }
    return count;
}
console.log(coutingProperties(user));

//Object with Methods
let calculator={
    num1: 10,
    num2: 5,
    add(){
        return this.num1+this.num2;
    },
    subtract(){
        return this.num1-this.num2;
    }
}
console.log(calculator.add());
console.log(calculator.subtract());

//cloning an object
let a={
    x:"abc",
    y:123
};
function cloninObject(obj){
    let clone={};
    for(let key in obj){
        clone[key]=obj[key];
    }
    return clone;
}
let userClone=cloninObject(a);
console.log(userClone);

//Merging two objects
let userInfo1 = {
    name: "Jane",
    age: 22
  };
  
  let userInfo2 = {
    age: 23,
    city: "New York"
  };
  let mergedUser=Object.assign({},userInfo1,userInfo2);
  console.log(mergedUser);

  //Object with Default Values
  function createUser(name, age, role = "user") {
    return {
      name: name,
      age: age,
      role: role
    };
  }
  
  let newUser = createUser("Tom", 30);
  console.log(newUser);  // { name: "Tom", age: 30, role: "user" }

  //Neted Object
  let company = {
    name: "Tech Corp",
    employees: [
      { name: "Alice", position: "Developer" },
      { name: "Bob", position: "Designer" }
    ]
  };
  
  console.log(company.employees[0].name);   // "Alice"
  console.log(company.employees[1].position);  // "Designer"
  
  //closure feature
  //this closure function is used to access the function variable which is private variable by using inner function
  function outerfunction(){
    let count=0;
    function innerfunction(){
        count++;
        return count;
    }
    return innerfunction;
  }
   const incrementcounter=outerfunction();
   console.log(incrementcounter());
   console.log(incrementcounter());
   console.log(incrementcounter());

   //prototype inheritance __proto__ =syntax
   let Car={
     model:"Toyota"
   };
   let Car2={
      model2:"Tata"
   };
    Car2.__proto__=Car;
    console.log(Car2.model);
    console.log(Car2.model2);