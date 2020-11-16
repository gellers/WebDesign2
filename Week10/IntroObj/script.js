//has issues, like won't display expenses
"use strict"
let expenses = []; 


function addExpense() {
    //should validate info
    let elDate = document.getElementById("newDate").value;
    let txtAmount = document.getElementById("newAmount").value;
    let txtVendor = document.getElementById("newVendor").value;
    let txtDescription = document.getElementById("newDescription").value;
    

    let newExpense = {
        date: elDate,
        amount: parseFloat(txtAmount),
        vendor: txtVendor,
        description: txtDescription
    }
    expenses.push(newExpense); 
    displayExpenses(); 
}

function displayExpenses() {
    let displayDiv = document.getElementById("display"); 
    displayExpenses.innerHTML = ""; 
    for (let i = 0; i < expenses.length; i++) {
        let expense = document.createElement("div"); 

        let vendor = document.createElement("h1"); 
        vendor.innerHTML = expenses[i].vendor; 

        let amount = document.createElement("span"); 
        amount.innerHTML = "$" + expenses[i].amount; 

        let date = document.createElement("span"); 
        date.innerHTML = expenses[i].description; 

        let description = document.createElement("p"); 
        description.innerHTML = expenses[i].description; 

        expense.appendChild(vendor);
        expense.appendChild(amount);
        expense.appendChild(date);
        expense.appendChild(description);
    }
}