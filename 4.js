let index=666;
function myFunc(){
    for (var index = 0; index < 10; index++) {
       console.log(index);
        
    }
    console.log("Insdie Function"); 
    console.log(index)
}

console.log("Outside finction "); 
console.log(index);

myFunc();
console.log("after function calling"); 
console.log(index);
