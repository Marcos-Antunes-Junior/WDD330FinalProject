import { handleEmployeePage } from "./employee.mjs";
import { handleUpdateData } from "./updateEmployee.mjs";

const year = document.getElementById("year");
year.innerText = `${new Date().getFullYear()}`;

handleEmployeePage();
handleUpdateData();