import Table from "../components/Table.js";

let getExpenses = async () => {
  return [
    {
      date: new Date(),
      description: "Pizza for a Coding Dojo session.",
      value: 102,
    },
    {
      date: new Date(),
      description: "Coffee for a Coding Dojo session.",
      value: 42,
    },
  ];
};

let Expenses = {
  render: async () => {
    let expenses = await getExpenses();
    let view = /*html*/ `
    <h1>Expense Report</h1>
    <p id="user-greet">Hello, Anonymous</p>
    <p>These are your expenses:</p>
    ${await Table.render(expenses)}
    `;
    return view;
  },
  postRender: async () => {},
};

export default Expenses;
