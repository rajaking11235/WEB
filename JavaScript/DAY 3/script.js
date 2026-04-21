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
        document.getElementById("cal").innerHTML = "the sum is "+sum;
    }
    else if(operator=="-"){
        document.getElementById("cal").innerHTML = "the difference is "+sub;
    }
    else if(operator=="*"){
        document.getElementById("cal").innerHTML = "the product is "+mul;    
    }
    else if(operator=="/"){
        document.getElementById("cal").innerHTML = "the quotient is "+div;
    }
    else if(operator=="%"){
        document.getElementById("cal").innerHTML = "the remainder is "+mod;
    }
}
function add(a,b){
    document.getElementById("cals").innerText=a+b
}

function sub(a,b){
    document.getElementById("c").innerHTML=a-b
}
function mul(a,b){
    document.getElementById("ca").innerHTML=a*b
}

function div(a,b){
    document.getElementById("calc").innerHTML=a/b
}