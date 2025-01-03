document.querySelector('.sign-in-btn').addEventListener('click', function () {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!email || !password) {
        alert('Please fill in all fields.');
        return;
    }

    // Placeholder for authentication logic
    console.log('Email:', email);
    console.log('Password:', password);
    // Save login success message in session storage
    sessionStorage.setItem('loginMessage', 'Login successful!');
    
    // Redirect to the home page
    window.location.href = 'index.html';
    
});