import { handleFormSubmission } from "./login.mjs";

const year = document.getElementById("year");
year.innerText = `${new Date().getFullYear()}`;

handleFormSubmission();

