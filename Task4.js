var Sub1 = prompt("enter marks of subject 1");
var Sub2 = prompt("enter marks of subject 2");
var Sub3 = prompt("enter marks of subject 3");
var obtainedMarks = Sub1 + Sub2 + Sub3;
var totalMarks = 300;
var per = (obtained_marks/totalMarks)*100;
alert(per);

 if(per>=80){
alert("A+ grade");
alert("Remarks:Exellent");
}
else if(per>=70){
    alert("A grade");
    alert("Remarks:Good");
}

else if(per>=60){
    alert("B grade");
    alert("Remarks:You need to improve");

}
else if(per<60){
     alert("Fail");
     alert("Remarks:Sorry");
}
else{
    console.log("you ae not eligible to continue");
}