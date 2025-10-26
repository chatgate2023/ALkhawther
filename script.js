// ضع هنا رابط Web App الخاص بك
const webAppUrl = "https://script.google.com/macros/s/AKfycbwxRdUh8HBoCudTlEVVd0de-luk8fD90x3NY4c6aykVPrzNFuHnXuTUm87vdyrSWInt/exec";

// ضع هنا Spreadsheet ID الخاص بك
const spreadSheetId = "1x3-O0ZVHczozdymG--EOD_Gqy-Tgn7FvpjGgWSIolHE";

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
