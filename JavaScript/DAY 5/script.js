console.log("Printing numbers upto 10")
for(let i=1; i<=10; i++){
    console.log(i);
}


console.log("Adding data to an array")
let arr = [];
for(let i=0; i<100; i++){
    arr.push(i);
    
}
console.log(arr);

console.log("creating even numbers array");
let arr2= [];
for(let i=0; i<100; i= i+2){
    arr2.push(i);   
}
console.log(arr2);

console.log("Class and object");
let me = [{
    Name:       "Abrahim",
    FatherName: "Nisar Ahmed",
    Age:        "17",
    E_mail:      "rajaking11235@gmail.com",
    PhoneNo:    "03129637259",
    Status:     "studing",
    Education:  "BSc Software Engineering",
},
{
    model: "BMW",
    color : "Black",
},
{
    model: "Ford",
    Color : "White",
}]
for(let i = 0; i<me.length; i++){
console.log(me[i])
}

