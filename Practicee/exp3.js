let heading=document.getElementById("mainHeading");
let paragraph=document.getElementById("paragraph");
let input =document.getElementById("userInput");

let fontSize=16;

//change heading text
document.getElementById("changeTectBtn").addEventListener("click", function (){
    if (input.value !== ""){
        heading.innerHTML=inner.value;
    }} );

//change background color
document.getElementById("bgColorBtn").onclick=function(){
    document.body.style.backgroundColor="#"
}

//increase font size
document.getElementById("fontSizeBtn").addEventListener("click", function(){
    fontSize+=2;
    paragraph.style.fontSize=fontSize+
})

//toggle btn
document.getElementById("toggleBtn").addEventListener("click",function(){

});



