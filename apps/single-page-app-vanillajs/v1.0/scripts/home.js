(async function () {
  const expensesCount = document.getElementById("expenses-count");
  const expensesTotal = document.getElementById("expenses-total");
  const summary = document.getElementById("summary");

  let api = process.env.API_URL || "http://localhost:5000";

  const response = await fetch(`${api}/total`);

  const expenses = await response.json();
  expensesCount.innerText = expenses.count;
  expensesTotal.innerText = expenses.total.toFixed(2);
  summary.style.display = "block";
})();
