// let promise=new Promise((resolve,reject)=>{
//     let success=true;
//     if(success)
//         resolve("data loaded");
//     elsereject("Error occured");
// });
// promise.then(result => console.log(result)).catch(error=>console.log(error));

localStorage.setItem("name","jeet");

//retieve data
localStorage.removeItem("name");

//store oject;
var user={name:"jeet",age:50};
localStorage.setItem("user",JSON.stringify(user));

//retrieve data
var data=JSON.parse(localStorage.getItem("user"));
console.log(data.name,data.age);