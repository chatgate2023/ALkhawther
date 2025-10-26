const webAppUrl = "https://script.google.com/macros/s/AKfycbynBzLShy-b0QbAn11cjV0HLWUXr740tjtUXxqARypCO5DSger0q_S1ozRnSM6FDd60/exec";
const spreadSheetId = "1x3-O0ZVHczozdymG--EOD_Gqy-Tgn7FvpjGgWSIolHE"; // Spreadsheet الخاص بك


async function fetchData() {
  try {
    const response = await fetch(`${webAppUrl}?spreadSheetId=${spreadSheetId}`);
    const data = await response.json();

    if (!data.success) {
      alert(data.message);
      return;
    }

    const tbody = document.querySelector("#customersTable tbody");
    tbody.innerHTML = "";
    let totalUsers = 0;

    data.customers.forEach(customer => {
      const tr = document.createElement("tr");
      tr.innerHTML = `<td>${customer.childName}</td><td>${customer.phone}</td><td>${customer.totalPoints}</td>`;
      tbody.appendChild(tr);
      totalUsers++;
    });

    document.getElementById("totalUsers").textContent = "عدد العملاء: " + totalUsers;

  } catch (err) {
    console.error(err);
    alert("حدث خطأ أثناء جلب البيانات");
  }
}

fetchData();


