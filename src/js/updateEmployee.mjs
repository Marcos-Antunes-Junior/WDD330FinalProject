function handleUpdateData() {
    const addDataForm = document.getElementById('addDataForm');
    const urlParams = new URLSearchParams(window.location.search);
    const _id = urlParams.get('id');


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
        const response = await fetch(`https://cse341project2-bkgg.onrender.com/employees/${_id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `${token}`
          },
          credentials: 'include',
          body: employeeData
        });
  
        if (!response.ok) {
          throw new Error('Failed to update employee');
        }
  
        const data = await response.json();
        console.log('Employee data updated:', data);
        alert('Data Updated!');

      } catch (error) {
        console.error('Error updating employee data:', error);
      } finally {
        document.getElementById('loading').style.display = 'none';
      }
    });

    
}

export {handleUpdateData}