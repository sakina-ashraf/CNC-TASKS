var secretNumber = (1,10);
var user = prompt("guess the secret number");
if(user===secretNumber){
    console.log("Bingo!Correct answer");
}
   else if(user+1===secretNumber){
    console.log("close enough to the correct answer")
}
     else{
        console.log("this is not the secret number");
}

