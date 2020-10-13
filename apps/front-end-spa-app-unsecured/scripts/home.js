(async function () {
  const expensesCount = document.getElementById("expenses-count");
  const expensesTotal = document.getElementById("expenses-total");
  const summary = document.getElementById("summary");

  const response = await fetch("http://localhost:3001/total");

  const expenses = await response.json();
  expensesCount.innerText = expenses.count;
  expensesTotal.innerText = expenses.total.toFixed(2);
  summary.style.display = "block";
})();
