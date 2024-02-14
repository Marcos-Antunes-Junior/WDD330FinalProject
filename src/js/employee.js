import { handleEmployeePage } from "./employee.mjs";

const year = document.getElementById("year");
year.innerText = `${new Date().getFullYear()}`;

handleEmployeePage();
