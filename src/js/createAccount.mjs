function handleFormSubmission() {
    document.getElementById('createAccountForm').addEventListener("submit", function(event) {
        event.preventDefault();

        const formData = new FormData(event.target);

        const requestBody = {};
        formData.forEach((value, key) => {
        requestBody[key] = value;
        });

        fetch('https://cse341project2-bkgg.onrender.com/auth/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        })
        .then(Response => {
            if (!Response.ok) {
                throw new Error('Email exists. Please, log in or use a different email');
                
            }
            return Response.json();
            
        
        })
        .then(data => {
            console.log(data);
            alert(data.message);
            window.location.href = '../';
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation.'); 
            
        })
    })
}

export {handleFormSubmission};