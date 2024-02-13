
function handleHomePage() {

    const token = localStorage.getItem('token'); 
    document.getElementById('loading').style.display = 'block';
    async function fetchEmployees() {
        try {
            if (!token) {
                throw new Error('No token found in localStorage');
            }
            
            const response = await fetch('https://cse341project2-bkgg.onrender.com/employees/', {
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
        const employees = JSON.parse(responseData); 
        displayEmployees(employees);
    } catch (error) {
    console.error('Error fetching employees:', error);
    let employeeTable = document.getElementById('employeeTable');
    employeeTable = innerHTML = "Not allowed. Please, log in first."
    }finally {
    document.getElementById('loading').style.display = 'none';
    }
}

function displayEmployees(employees) {
    let employeeTable = document.getElementById('employeeTable');
    const tableHTML = `
    <button id="addEmployeeBtn">Add employee</button>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Birthday</th>
                    <th>job Position</th>
                    <th>salary</th>
                </tr>
            </thead>
            <tbody>
                ${employees.map(employee => `
                    <tr>
                        <td><a href="/employee/?id=${employee._id}" class="employeeLink" data-id="${employee._id}">${employee.firstName} ${employee.lastName}</a></td>
                        <td>${employee.email}</td>
                        <td>${employee.phoneNumber}</td>
                        <td>${employee.birthday}</td>
                        <td>${employee.jobPosition}</td>
                        <td>$${employee.salary}</td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;

    employeeTable.innerHTML = tableHTML;
    document.getElementById("addEmployeeBtn").onclick = function () {
        window.location.href = "../addEmployee/";
    }

}


window.addEventListener('load', fetchEmployees);

}

export {handleHomePage};