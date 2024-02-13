function handleAddEmployee() {
    const addDataForm = document.getElementById('addDataForm');

    addDataForm.addEventListener('submit', async (event) => {
      event.preventDefault(); 
      const token = localStorage.getItem('token'); 
      document.getElementById('loading').style.display = 'block'; 
      const formData = new FormData(addDataForm); 
      const employeeData = {}; 
  

      formData.forEach((value, key) => {
        employeeData[key] = value;
      });
  
      try {
        const response = await fetch('https://cse341project2-bkgg.onrender.com/employees/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `${token}`
          },
          credentials: 'include',
          body: JSON.stringify(employeeData)
        });
  
        if (!response.ok) {
          throw new Error('Failed to add employee');
        }
  
        const data = await response.json();
        console.log('Employee added:', data);
        alert('Employee added!');
        addDataForm.reset();
        window.location.href = '../home/';
      } catch (error) {
        console.error('Error adding employee:', error);
      } finally {
        document.getElementById('loading').style.display = 'none';
      }
    });
}

export {handleAddEmployee};