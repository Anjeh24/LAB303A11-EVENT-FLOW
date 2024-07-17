// You can, however, do the following:
// Declare a global counter variable.
// Create a simple function that increments the variable, and then calls itself recursively.
// Surround the initial function call in a try/catch block.
// Within the catch, log the error and the value of the counter variable.

let n = 0;

try {
function theFunc(){
    for (let i = 0; i > 0; i++){
        n++;
    }
    theFunc();
    
  }
}
catch(err){
    console.log(err);
    console.log(n.valueOf()); //trying to obtain value of n
}

//console.log(theFunc());

//Part 2: Trampolines
// Write a recursive function that completely flattens an array of nested arrays, regardless of how deeply nested the arrays are.
// Once your recursive function is complete, trampoline it.

let nestedArr = [[1, [4, 5], [6,7,[10, 11]]]];
function makeFlat(){
  nestedArr.flat();
  //makeFlat();
  return function subAr(){
    const addnumtoarr = 12;
   addnumtoarr.push(2);
  }
}
console.log(nestedArr);

console.log(makeFlat());

let trampo = function finalTramp(x, y){
  let reslt = f(nestedArr(), theFunc());
  while (typeof reslt === "function"){
    reslt = reslt();
  }
}

console.log(trampo);