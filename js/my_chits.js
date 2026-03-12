// protect page
if(localStorage.getItem("isLoggedIn") !== "true"){
window.location.href="../login.html";
}

// load user
let username = localStorage.getItem("username") || "Customer";
let customerId = localStorage.getItem("customerId") || "SKCF1001";
let selectedPlan = localStorage.getItem("selectedPlan");

document.getElementById("customerName").innerText = username;
document.getElementById("customerId").innerText = customerId;
document.getElementById("planName").innerText = selectedPlan;


// plan logic
let monthlyAmount;
let totalMonths;

if(selectedPlan === "5000 Plan"){
monthlyAmount = 5000;
totalMonths = 21;
}

else{
monthlyAmount = 10000;
totalMonths = 11;
}

document.getElementById("monthlyAmount").innerText = "₹"+monthlyAmount;
document.getElementById("totalMonths").innerText = totalMonths;


// payment table
const table = document.getElementById("scheduleTable");

for(let i=1;i<=totalMonths;i++){

let status = i<=5 ? "Paid" : "Pending";

let color = status==="Paid"
? "text-green-600"
: "text-red-500";

let row = `
<tr class="border text-center">
<td class="py-2">Month ${i}</td>
<td>₹${monthlyAmount}</td>
<td class="${color} font-semibold">${status}</td>
</tr>
`;

table.innerHTML += row;

}

function logout(){

localStorage.removeItem("isLoggedIn");
localStorage.removeItem("username");

window.location.href="../login.html";

}