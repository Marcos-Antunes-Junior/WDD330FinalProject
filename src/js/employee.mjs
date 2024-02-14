import { handleUpdateData } from "./updateEmployee.mjs";
import { handleDeleteData } from "./deleteEmployee.mjs";

function handleEmployeePage() {

const urlParams = new URLSearchParams(window.location.search);
const _id = urlParams.get('id');
const token = localStorage.getItem('token'); 


async function fetchEmployee() {
    try {
        if (!token) {
            throw new Error('No token found in localStorage');
        }
        
        const response = await fetch(`https://cse341project2-bkgg.onrender.com/employees/${_id}`, {
            method: 'GET',
            headers: {
                'Authorization': `${token}` 
            },
            credentials: 'include'
        });
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const responseData = await response.text(); 
    const employee = JSON.parse(responseData); 
    displayEmployeeData(employee);

} catch (error) {
console.error('Error fetching employee:', error);

}finally {
document.getElementById('loading').style.display = 'none';
}
}

function displayEmployeeData(employee) {
    const employeeData = document.getElementById('employeeData');
    const employeeBirthday = employee.birthday.split('T')[0];
    const formHTML = `
    <form id="addDataForm">
    <fieldset>
      <label for="firstName">First Name</label>
      <input id="firstName" type="text" name="firstName" value=${employee.firstName} required/>
      <label for="lastName">Last Name</label>
      <input id="lastName" type="text" name="lastName" value=${employee.lastName} required />
      <label for="email">Email</label>
      <input id="email" type="email" name="email" value=${employee.email} required />
      <label for="phone">Phone</label>
      <input id="phoneNumber" type="tel" name="phoneNumber" value=${employee.phoneNumber} required />
      <label for="birthday">Birthday:</label>
      <input type="date" id="birthday" name="birthday" value=${employeeBirthday} required />
      <label for="jobPosition">Job Position</label>
      <input id="jobPosition" type="text" name="jobPosition" value=
      '${employee.jobPosition}' required />
      <label for="salary">Salary</label>
      <input type="number" id="salary" name="salary" value=${employee.salary} required />
      <p id="loading">Loading...</p>
      <button id="updateDataBtn" type="submit">Update Data</button>
    </fieldset>
  </form>
  <div id="deleteContainer">
  <button id="deleteDataBtn" ><span id="deleteText">Delete Data</span
  ><span id="deleteLoading" style="display: none">Loading...</span></button>
  </div>


    `;

    employeeData.innerHTML = formHTML;

    handleUpdateData();
    handleDeleteData();


}



window.addEventListener('load', fetchEmployee);





}

export {handleEmployeePage}