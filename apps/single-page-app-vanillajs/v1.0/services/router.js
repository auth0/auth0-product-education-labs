// pages
import Error404 from "../views/pages/Error404";
import Home from "../views/pages/Home";
import Expenses from "../views/pages/Expenses";

// components
import Navbar from "../views/components/Navbar";

const routes = {
  "/": Home,
  expenses: Expenses,
};

const navbar = document.getElementById("navbar");
const content = document.getElementById("content");

const router = async () => {
  navbar.innerHTML = await Navbar.render();
  await Navbar.postRender();

  let request = location.hash.slice(1).toLowerCase() || "/";
  let page = routes[request] || Error404;
  content.innerHTML = await page.render();
  await page.postRender();
};

export default router;
