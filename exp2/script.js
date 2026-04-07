let employees = [];

function addEmployee() {
    let name = document.getElementById("name").value;
    let id = document.getElementById("id").value;
    let salary = Number(document.getElementById("salary").value);
    let dept = document.getElementById("dept").value;

    let emp = {
        name: name,
        id: id,
        salary: salary,
        dept: dept
    };

    employees.push(emp);
    alert("Employee Added!");
}

function displayEmployees() {
    let output = "";

    for (let emp of employees) {
        output += `Name: ${emp.name}, ID: ${emp.id}, Salary: ${emp.salary}, Dept: ${emp.dept} <br>`;
    }

    document.getElementById("output").innerHTML = output;
}

function filterSalary() {
    let result = employees.filter(emp => emp.salary > 50000);

    let output = "";
    for (let emp of result) {
        output += `${emp.name} - ₹${emp.salary} <br>`;
    }

    document.getElementById("output").innerHTML = output;
}

function totalSalary() {
    let total = 0;

    for (let emp of employees) {
        total += emp.salary;
    }

    document.getElementById("output").innerHTML = "Total Salary: ₹" + total;
}

function averageSalary() {
    let total = 0;

    for (let emp of employees) {
        total += emp.salary;
    }

    let avg = employees.length ? total / employees.length : 0;

    document.getElementById("output").innerHTML = "Average Salary: ₹" + avg;
}

function countDepartment() {
    let dept = document.getElementById("searchDept").value;
    let count = 0;

    for (let emp of employees) {
        if (emp.dept === dept) {
            count++;
        }
    }

    document.getElementById("output").innerHTML =
        "Employees in " + dept + ": " + count;
}