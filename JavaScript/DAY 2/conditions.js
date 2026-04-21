function checkEligibility()
{
let age=16;
if(age>=18){
    document.getElementById("result").innerHTML = "you are eligible to vote";
}
else{
    document.getElementById("result").innerHTML = "you are not eligible to vote";
}
}
function checkGrade(){
    let score=85;
    if(score>=40 && score<60){
        document.getElementById("gradeResult").innerHTML = "your grade is C";
    }
    else if(score>=60 && score<80){
        document.getElementById("gradeResult").innerHTML = "your grade is B";
    }   
    else if(score>=80 && score<90){
        document.getElementById("gradeResult").innerHTML = "your grade is A";
    }
}

function Calculator(){
    let num1=document.getElementById("num1").value;
    let num2=document.getElementById("num2").value;
    let operator=document.getElementById("operator").value;
    let sum=parseFloat(num1)+parseFloat(num2);
    let sub=parseFloat(num1)-parseFloat(num2);
    let mul=parseFloat(num1)*parseFloat(num2);
    let div=parseFloat(num1)/parseFloat(num2);
    let mod=parseFloat(num1)%parseFloat(num2);
    if(operator=="+"){
        document.getElementById("calcResult").innerHTML = "the sum is "+sum;
    }
    else if(operator=="-"){
        document.getElementById("calcResult").innerHTML = "the difference is "+sub;
    }
    else if(operator=="*"){
        document.getElementById("calcResult").innerHTML = "the product is "+mul;    
    }
    else if(operator=="/"){
        document.getElementById("calcResult").innerHTML = "the quotient is "+div;
    }
    else if(operator=="%"){
        document.getElementById("calcResult").innerHTML = "the remainder is "+mod;
    }
}
    function eligibel(){
        let age=document.getElementById("age").value;
        let result = (age<=18) ? "Minor" : "Adult";
        document.getElementById("eligibelResult").innerHTML = "you are "+result;
        document.getElementById("eligibelResult").style.color = "blue";
        document.getElementById("eligibelResult").style.backgroundColor = "red";

    }
    document.getElementById("qwe").style.backgroundColor = "yellow";
    document.getElementById("qwe").style.fontSize = "30px";