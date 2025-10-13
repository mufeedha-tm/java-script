//immediately invoked function expression
//it is a function that runs as soon as it is defined,without need to be called separately
//---key features---
// 1) immediately invoked
// 2) data privacy-variables defined inside iife not accessible outside.
// 3) closure-A closure lets a function access variables from an outer fuction,even after the outer function is done.

// 4) self contained-execute independantly without effecting surrounding code.

(function(){
    console.log("iam invoked");
    
})();

