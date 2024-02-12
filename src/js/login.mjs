function handleFormSubmission() {
    document.getElementById("loginForm").addEventListener("submit", async function(event) {
        event.preventDefault(); // Prevent the default form submission
    
        const formData = new FormData(event.target);
        document.getElementById('loading').style.display = 'block';
        const email = formData.get("email");
        const password = formData.get("password");
    
        try {
            const response = await fetch('https://cse341project2-bkgg.onrender.com/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
    
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            localStorage.setItem('username', data.username);
            localStorage.setItem('userId', data.id);
            localStorage.setItem('token', data.token);
            window.location.href = './home/'; 

        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
            alert('Invalid email or password.');
        } finally {
         document.getElementById('loading').style.display = 'none';
        }
            
    });
}

export {handleFormSubmission};