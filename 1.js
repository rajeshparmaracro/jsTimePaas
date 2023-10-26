let index=666;
function myFunc(){
    for (let index = 0; index < 10; index++) {
       console.log(index);
        
    }
    console.log("Insdie Function"); 
    console.log(index)
}

console.log("Outside finction "); 
console.log(index);

myFunc();
console.log(index);