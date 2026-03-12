// protect page
if(localStorage.getItem("isLoggedIn") !== "true"){
window.location.href="../login.html";
}

let selectedPlan = localStorage.getItem("selectedPlan");

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

// demo paid months
let paidMonths = parseInt(localStorage.getItem("paidMonths")) || 3;

const table = document.getElementById("paymentTable");

for(let i=1;i<=totalMonths;i++){

let status;
let action;

if(i <= paidMonths){

status = `<span class="text-green-600 font-semibold">Paid</span>`;
action = "-";

}else{

status = `<span class="text-red-500 font-semibold">Pending</span>`;

action = `<button onclick="payMonth(${i})"
class="bg-primary text-white px-3 py-1 rounded">
Pay Now
</button>`;

}

let row = `
<tr class="text-center border">
<td class="py-2">Month ${i}</td>
<td>₹${monthlyAmount}</td>
<td>${status}</td>
<td>${action}</td>
</tr>
`;

table.innerHTML += row;

}


// simulate payment
function payMonth(month){

let paidMonths = parseInt(localStorage.getItem("paidMonths")) || 0;

if(month === paidMonths + 1){

paidMonths++;

localStorage.setItem("paidMonths", paidMonths);

alert("Payment Successful");

location.reload();

}else{

alert("Please pay previous month first");

}

}


// logout
function logout(){

localStorage.removeItem("isLoggedIn");
localStorage.removeItem("username");

window.location.href="../login.html";

}