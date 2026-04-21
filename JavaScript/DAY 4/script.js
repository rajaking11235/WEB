let myFirends = ["Ali" , "Daim" , "Haseeb" , "Umer"]
let notfound="ture"
i=0;
while(notfound && myFirends.length > 0 && i<4){
    if (myFirends[0] === "Haseeb") {
        console.log("found Haseeb");
        notfound="False";
    }
    else{
        myFirends.shift(i);
    }
    i++;
}
do {
        if (myFirends[0] === "Haseeb") {
        console.log("found Haseeb");
        notfound="False";
    }
    else{
        myFirends.shift(i);
    }
} while (notfound && myFirends.length > 0 && i<4);


do {
    number =prompt("Enter the number From 0 to 100");   
} while (number>=0 && number<100);
i=1
while(i<11){
    b=2*i;
    console.log("2 x",i," = " ,b)
    i++;
}
