// task1

function add(a,b){
    console.log(a+b);

}
add(5,6)
// task 2
function sub(a,b){

    return b-a;

}
var d=sub(5,6);
console.log(d);
// task 3
function mul(a,b){
    return(a*b)
}
var d=mul(5,6);
console.log(d);
// task4
function div(a,b){
    if(b===0){
        return "Cannot divide by zero.";

    }
    else{
    return a/b
    }
}

var d=div(5,0);
console.log(d);
