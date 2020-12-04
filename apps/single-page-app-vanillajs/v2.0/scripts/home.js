(async function ({ apiUrl }) {
  const expensesCount = document.getElementById("expenses-count");
  const expensesTotal = document.getElementById("expenses-total");
  const summary = document.getElementById("summary");

  const response = await fetch(`${apiUrl}/total`);

  const expenses = await response.json();
  expensesCount.innerText = expenses.count;
  expensesTotal.innerText = expenses.total.toFixed(2);
  summary.style.display = "block";
})(window.env);
