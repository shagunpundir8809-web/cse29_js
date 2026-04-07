function calculateResult() {

    let n = document.getElementById("subjects").value;
    let total = 0;

    for (let i = 0; i < n; i++) {
        let x = parseFloat(prompt("Enter marks of subject " + (i + 1)));
        total += x;
    }

    let average = total / n;
    let grade;
    let status;

    if (average >= 90) {
        grade = "A+";
        status = "Pass";
    } 
    else if (average >= 75) {
        grade = "A";
        status = "Pass";
    } 
    else if (average >= 60) {
        grade = "B";
        status = "Pass";
    } 
    else if (average >= 50) {
        grade = "C";
        status = "Pass";
    } 
    else {
        grade = "Fail";
        status = "Fail";
    }

    document.getElementById("result").innerHTML =
        "Total Marks: " + total + "<br>" +
        "Average Marks: " + average.toFixed(2) + "<br>" +
        "Grade: " + grade + "<br>" +
        "Result: " + status;
}