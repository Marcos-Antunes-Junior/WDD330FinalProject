function handleLogout() {
document.getElementById("logout").addEventListener("click", async function(event) {
    try {
        document.getElementById("logoutText").style.display = "none";
        document.getElementById("logoutLoading").style.display = "inline";
        const token = localStorage.getItem('token');
        
        const response = await fetch('https://cse341project2-bkgg.onrender.com/auth/logout', {
            method: 'GET',
            headers: {
                'Authorization': `${token}` 
            },
            credentials: 'include'
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        localStorage.removeItem('username');
        localStorage.removeItem('userId');
        localStorage.removeItem('token');
        window.location.href = '../';
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        alert('An error occurred during logout. Please try again later.');
    }
    finally {
        document.getElementById("logoutText").style.display = "inline";
        document.getElementById("logoutLoading").style.display = "none";
    }
});

};

export {handleLogout};

