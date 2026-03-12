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
}else{
monthlyAmount = 10000;
totalMonths = 11;
}

// paid months from payments page
let paidMonths = parseInt(localStorage.getItem("paidMonths")) || 3;

const table = document.getElementById("transactionTable");

for(let i=1;i<=paidMonths;i++){

let date = new Date();
date.setMonth(date.getMonth() - (paidMonths - i));

let formattedDate =
date.toLocaleDateString("en-IN",{
day:"2-digit",
month:"short",
year:"numeric"
});

let row = `
<tr class="text-center border">
<td class="py-2">${formattedDate}</td>
<td>Month ${i}</td>
<td>₹${monthlyAmount}</td>
<td class="text-green-600 font-semibold">Paid</td>
</tr>
`;

table.innerHTML += row;

}


// logout
function logout(){

localStorage.removeItem("isLoggedIn");
localStorage.removeItem("username");

window.location.href="../login.html";

}