const headpara = document.getElementById('description')
headpara.innerHTML = 'Welcome to our User Form Page! This form is designed to gather essential personal information and provide you with an opportunity to express your food preferences. Please take a moment to fill out the fields below with your first and last name, address, pincode, gender, and select your favorite foods from the options provided. We also need to know your state and country. Your input will help us serve you better and tailor our offerings to your liking. Thank you for sharing your details with us!'





const form = document.getElementById("form");
const table = document.getElementById("dataTable");
const tbody = table.querySelector("tbody");
let rowCount = 1;

form.addEventListener("submit",(e)=> {
    e.preventDefault();

    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const address = document.getElementById('address').value;
    const pincode = document.getElementById("pincode").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const foodInputs = document.querySelectorAll('input[name="food"]:checked');
    const foods = Array.from(foodInputs).map(input => input.value).join(", ");
    const state = document.getElementById("state").value;
    const country = document.getElementById("country").value;

    const newRow = tbody.insertRow(tbody.rows.length);
    const cell1 = newRow.insertCell(0).textContent = rowCount;
    const cell2 = newRow.insertCell(1).textContent = firstName;
    const cell3 = newRow.insertCell(2).textContent = lastName;
    const cell4 = newRow.insertCell(3).textContent = address;
    const cell5 = newRow.insertCell(4).textContent = pincode;
    const cell6 = newRow.insertCell(5).textContent = gender;
    const cell7 = newRow.insertCell(6).textContent = foods;
    const cell8 = newRow.insertCell(7).textContent = state;
    const cell9 = newRow.insertCell(8).textContent = country;

    rowCount++;

    form.reset(); 

    
    table.style.display = 'table';
    table.scrollIntoView({ behavior: 'smooth' })
});