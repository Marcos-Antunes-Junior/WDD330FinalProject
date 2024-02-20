import { handleLogout } from "./logout.mjs";
import { handleAddEmployee } from "./addEmployee.mjs";

const year = document.getElementById("year");
year.innerText = `${new Date().getFullYear()}`;

handleAddEmployee();
handleLogout();
