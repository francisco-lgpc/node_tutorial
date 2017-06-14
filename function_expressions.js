// normal JS function statement
function sayHi(){
  console.log('Hi');
}

//sayHi();


// call function
function callFunction(f){
  f();
}

// function expression
var sayBye = function(){
  console.log('bye')
}

// standard call
// sayBye();

// calling through call function
// callFunction(sayBye);

module.exports.sayBye = sayBye;
module.exports.sayHi  = sayHi;
