(async function () {
  if (!(await allowAccess())) return;

  const consentNeeded = document.getElementById("consent-needed");
  const expensesDiv = document.getElementById("expenses-container");
  const expensesList = document.getElementById("expenses-list");
  const loadExpensesButton = document.getElementById("load-expenses");
  const loadingExpenses = document.getElementById("loading-expenses");

  function displayExpenses(expenses) {
    expenses.forEach((expense) => {
      const newItem = document.createElement("li");
      const description =
        `$ ${expense.value.toFixed(2)} ` + `- ${expense.description}`;
      const newItemDescription = document.createTextNode(description);
      newItem.appendChild(newItemDescription);
      expensesList.appendChild(newItem);
    });

    loadingExpenses.style.display = "none";
    consentNeeded.style.display = "none";
    loadExpensesButton.style.display = "none";
    expensesDiv.style.display = "block";
  }
})();
