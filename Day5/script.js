
//loop
var count;
document.write("Starting Loop<br/>");

for (count = 0; count < 10; count++) {
    document.write("Current count: " + count + "<br/>");
}


// Object example
const person = {
    firstname: "Ajay",
    lastname: "Singh",
    age: 25
};

// for...in loop
for (let x in person) {
    console.log("Person details: " + x + " = " + person[x]);
}
