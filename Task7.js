var num1 = prompt("enter 1st number");
var num2 = prompt("enter 2nd number");
var operation = prompt("enter operation to be performed");

if(operation == "+"){
    console.log("Addition=",+(num1+num2));
}
else if(operation == "-"){
    console.log("Subtraction=",+(num1-num2));
}
else if(operation == "*"){
    console.log("Multiplication=",+(num1*num2));
}
else if(operation == "/"){
    console.log("Division=",+(num1/num2));
}
else if(operation == "%"){
    console.log("Modulus=",+(num1%num2));
}
else{
    console.log("no operation performed");
}


