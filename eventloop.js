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
catch(error){
    console.log(error);
    console.log(n.valueOf()); //trying to obtain value of n
}

console.log(theFunc());