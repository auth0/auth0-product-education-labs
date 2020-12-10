import logo from "../../images/auth0.png";
import profile from "../../images/profile.png";

let Navbar = {
  render: async () => {
    let view = /*html*/ `
    <li class="logo">
      <a href="/">
        <img src="${logo}" alt="Auth0" />
      </a>
    </li>
    <li>
      <a id="home-link" href="/">Home</a>
    </li>
    <li>
      <a id="expenses-link" href="#expenses">Expenses</a>
    </li>
    <li class="spacer" />
    <li id="log-out" style="display: none">
      <a href="#"> Logout</a>
    </li>
    <li id="log-in">
      <a href="#"> Login</a>
    </li>
    <li class="profile">
      <img src="${profile}" />
    </li>
    `;

    return view;
  },
  postRender: async () => {},
};

export default Navbar;
