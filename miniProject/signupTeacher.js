function handleSignup() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (!name || !email || !password || !confirmPassword) {
        alert('Please fill in all fields.');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }

    // Placeholder for storing user data
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);

    alert('Sign-Up successful! Redirecting to login page...');
    window.location.href = 'teacherLogin.html'; // Redirect to the login page
}