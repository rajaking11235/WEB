
function checkbutton(buttonNumber) {
    if(buttonNumber === 1) {
    createparagraph = document.createElement("p");
    createparagraph.innerHTML = "Button 1 is clicked paragraph is created";
    document.body.appendChild(createparagraph);
    createparagraph.classList.add("p1");
    }
else if(buttonNumber === 2) {
createDiv = document.createElement("div");
createDiv.innerHTML = "BUTTON 2 IS CLICKED DIV IS CREATED";
document.body.appendChild(createDiv);
    createDiv.classList.add("div1");

}
}
let car=["BMW","Audi","Mercedes","Toyota"];
let model=[...car,"X5","Q7","GLE","Camry"];
document.getElementById("output").innerHTML = model;
let num=[1,2,3,4,5];
addnum(...num);
function addnum(a,b,c,d,e){
    document.getElementById("output1").innerHTML += "<br>" + (a+b+c+d+e);
}