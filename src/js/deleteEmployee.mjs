function handleDeleteData() {
    document.getElementById("deleteDataBtn").addEventListener("click", async function(event) {
        event.preventDefault(); 
        try {
            document.getElementById("deleteText").style.display = "none";
            document.getElementById("deleteLoading").style.display = "inline";
            const urlParams = new URLSearchParams(window.location.search);
            const _id = urlParams.get('id');
            const token = localStorage.getItem('token');
            
            const response = await fetch(`https://cse341project2-bkgg.onrender.com/employees/${_id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `${token}` 
                },
                credentials: 'include'
            });
    
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
    
            alert('Employee Data Deleted')
            window.location.href = '../home/';
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
            alert('An error occurred during delete operation. Please try again later.');
        }
        finally {
            document.getElementById("deleteText").style.display = "inline";
            document.getElementById("deleteLoading").style.display = "none";
        }
    });
    
    };
    
    export {handleDeleteData};
    
    