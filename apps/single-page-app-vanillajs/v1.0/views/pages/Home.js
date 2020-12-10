import expensesApi from "../../services/expensesApi.js";

const Home = {
  render: async () => {
    let summary = await expensesApi.getTotals();
    let view = /*html*/ `
    <h1>Home Page</h1>
    <p id="user-greet">Hello, Anonymous</p>
    <p>So far, this app has been used to manage:</p>
    <div id="summary">
    <ul>
      <li><strong id="expenses-count">${summary.count}</strong> expenses</li>
      <li>$<strong id="expenses-total">
      ${summary.total.toFixed(2)}
      </strong> dollars</li>
    </ul>
    </div>    
    `;
    return view;
  },
  postRender: async () => {},
};

export default Home;
