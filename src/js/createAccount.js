import { handleFormSubmission } from "./createAccount.mjs";

const year = document.getElementById("year");
year.innerText = `${new Date().getFullYear()}`;

handleFormSubmission();
