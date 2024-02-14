import { handleLogout } from "./logout.mjs";
import { handleHomePage } from "./home.mjs";

const year = document.getElementById("year");
year.innerText = `${new Date().getFullYear()}`;

const welcomeSpan = document.getElementById("welcome");

const username = localStorage.getItem("username");

if (username) {
  welcomeSpan.textContent = `Welcome, ${username}!`;
} else {
  welcomeSpan.textContent = `Not authorized. Please, log in.`;
}

handleLogout();
handleHomePage();
