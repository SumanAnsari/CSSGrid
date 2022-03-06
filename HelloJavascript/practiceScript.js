
console.log("hello world");

var myInt = 5;
var myNumber = 1.2345;
var myBool = true;
var myString = "i'm a string of text";
var myOtherString = "i'm another string of text";

console.log(myInt, myNumber, myBool, myString, myOtherString);

var unassigned;
console.log(unassigned);

var nullObj = null;
console.log(nullObj);

if(unassigned | nullObj){
  console.log("i have a value!");
}else{
  console.log("i am worthless :(");
}

const unchangeable = "i cant be changed";

let iAmAScropedVariable = 25;

{
  var globalActually = "hello!";
  let local = "im local";
  console.log(local);
}

console.log(globalActually);

function myFunc() {
console.log("my func!");
}

myFunc();

var myFunVar = function(){
  console.log("hi there");
}

myFunVar();

function addTwo(val1, val2){
  if(val2)
  {
    return val1 + val2;
  }else{
    return val1 +2;
  }
}

var _addTwo = (p1, p2) => {
  if(val2)
  {
    return val1 + val2;
  }else{
    return val1 +2;
  }
}


console.log(addTwo(1,2));
console.log(addTwo(1));

// OBJECTS


var obj = {};

var obj2 = {
  hello: "hello object",
  someVal: 100
  aFun: function(){
    return "i get it...";
  }
};

console.log(obj2.hello);

obj.thisCoolProp = "so cool!";

console.log(obj.thisCoolProp);
console.log(obj['thisCoolProp']);

obj.aCoolFunction = function(){
  console.log("wow!");
}

obj.aCoolFunction();
console.log(obj2.aFun());

obj2.someValue = 30;

console.log(obj2.someVal);
console.log(obj.someValue);

var obj3 = {
  anotherOne: {
    x: 1,
    y: 3
  },
  somethingElse: {
    test: "hi"
  }
};

console.log(obj3.somethingElse.test);

var stringjson = "{'myVal':200, 'someText':'string version'}"

var objJson = JSON.parse(stringjson);
console.log(objJson.someText);
