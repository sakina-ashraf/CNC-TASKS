var time = prompt("enter time");
if(time>=0000 && time<1200){
    console.log("Good morning!");
}
else if(time>=1200 && time<1700){
    console.log("Good afterno0n!");
}
else if(time>=1700 && time<2300){
    console.log("Good evening!");
}
else if(time>=2100 && time<2359){
    console.log("Good night!");
}
else{
    console.log("input is not valid");
}





