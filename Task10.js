var password = "Piaic-cnc";
var flag = true;
while (flag == true){
var user = prompt("please enter your password");

if(user==password){
    alert("Correct!The password you entered matches the original password");
    flag = false;
}
else{
    alert("Incorrect password");
}
}