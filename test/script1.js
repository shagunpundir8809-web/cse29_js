function calculateresult(){
    let n=document.getElementById("subjects").value ;
    let i;
    let total=0;
    for(i=0;i<n;i++){
        let x=parseFloat(prompt("enter the marks of subject"+(i+1)));
        total+=x;

    }
    let average=total/n;
    let grade;
    if(average>90)
        grade='A+';
    else if(average<=90||average>75)
        grade='A';
    else if(average<=75||average>65)
        grade='B';
    else if(average<=65||average>55)
        grade='C';
    else if(average<=55||average>45)
        grade='D';
    else{ 
        grade='Fail';
    }

    let result=document.getElementById("result").innerHTML="total marks"+total+"<br/>"+
    "Average Marks"+average+"<br/>"+"Result"+grade+"<br/>"+
}
