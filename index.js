var lib = require('./lib');

/*var obj = new lib.student(12,"Nike");

obj.display();
lib.global(); */

var home= function(){
console.log("This function runs in the home page...");
}
const app ="Global node package";

module.exports={
home:home,
appname:app,
    
    lib:lib

} 