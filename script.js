document.getElementById("eventForm").addEventListener("submit", function(e){

e.preventDefault();

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let phone = document.getElementById("phone").value;
let event = document.getElementById("event").value;

let table = document.getElementById("tableBody");

let row = table.insertRow();

row.insertCell(0).innerHTML = name;
row.insertCell(1).innerHTML = email;
row.insertCell(2).innerHTML = phone;
row.insertCell(3).innerHTML = event;

document.getElementById("eventForm").reset();

});