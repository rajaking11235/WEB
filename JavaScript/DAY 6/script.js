let car=[
    {
        name:"BMW",
        model:"X5",
        year:2020
    },
    {
        name:"Audi",
        model:"Q7",
        year:2021
    },
    {
        name:"Mercedes",
        model:"GLE",
        year:2019
    },
    {
        name:"Toyota",
        model:"Camry",
        year:2022
    }
]
for(let i=0;i<car.length;i++){
document.getElementById("demo").innerHTML += "Car " + (i+1) + ":<br>";
document.getElementById("demo").innerHTML += "Name: " + car[i].name + "<br>";
document.getElementById("demo").innerHTML += "Model: " + car[i].model + "<br>";
document.getElementById("demo").innerHTML += "Year: " + car[i].year + "<br>";
document.getElementById("demo").innerHTML += "-------------------<br>";
}

if (5>10) {
    console.log("5 is greater than 10");
} else {
    console.log("5 is not greater than 10");
}

function checkbutton(buttonNumber) {
    if (buttonNumber === 1) {
        console.log("Button 1 is clicked");
        document.getElementById("asd").style.backgroundColor = "green";
    } else if (buttonNumber === 2) {
        console.log("Button 2 is clicked");
        document.getElementById("qwe").style.backgroundColor = "red";
    } else {
        console.log("Unknown button");
    }
}