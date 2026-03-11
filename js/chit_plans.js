const plan5000 = [
100000,101000,100000,102000,103000,104000,105000,106000,107000,
108000,109000,110000,111000,112000,113000,114000,115000,
116000,117000,118000,119000
];

const plan10000 = [
100000,102000,100000,104000,106000,
108000,110000,112000,114000,116000,118000
];

function generateTable(planData, tableId, specialMonthLabel) {

const tableBody = document.getElementById(tableId);

planData.forEach((amount, index) => {

let row = document.createElement("tr");

let monthNumber = index + 1;

if (monthNumber === 3) {
row.classList.add("bg-green-100","font-semibold");
}

row.innerHTML = `
<td class="py-2">${monthNumber}</td>
<td>Month ${monthNumber} ${monthNumber===3 ? specialMonthLabel : ""}</td>
<td>₹${amount.toLocaleString()}</td>
`;

tableBody.appendChild(row);

});
}

generateTable(plan5000,"plan5000Table","(Admin)");
generateTable(plan10000,"plan10000Table","(Admin)");

function joinPlan(planName){
localStorage.setItem("selectedPlan", planName);

if(localStorage.getItem("isLoggedIn")==="true"){
window.location.href="../dashboard/dashboard.html";
}else{
window.location.href="../login.html";
}
}