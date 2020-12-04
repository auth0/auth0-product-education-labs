const content = document.getElementById("content");
const navbar = document.getElementById("navbar-container");
const loadingIndicator = document.getElementById("loading-indicator");

window.onload = async function () {
  let requestedView = window.location.hash;
  // 👉 Replace this with client creation 👈

  // 👉 Replace this with callback handler 👈

  await loadView("#navbar", navbar);

  window.location.hash = requestedView;
};

window.onhashchange = async function () {
  let requestedView = window.location.hash;

  if (requestedView !== "#home" && requestedView !== "#expenses") {
    requestedView = "#home";
  }

  await loadView(requestedView, content);
};

async function loadView(viewName, container) {
  container.innerHTML = "";
  viewName = viewName.substring(1);
  window.history.replaceState({}, document.title, `/#${viewName}`);
  const response = await fetch(`/views/${viewName}.html`);
  container.innerHTML = await response.text();

  var scriptTag = document.createElement("script");
  scriptTag.src = `/scripts/${viewName}.js`;

  container.appendChild(scriptTag);

  loadingIndicator.style.display = "none";
  container.style.display = "block";
}

// 👇 Replace this function 👇
async function allowAccess() {
  await loadView("#home", content);
  return false;
}
// 👆 Replace this function 👆
