function handleSignup() {
    const name = document.getElementById('name').value;
    const rollno = document.getElementById('rollno').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (!name || !rollno || !email || !password || !confirmPassword) {
        alert('Please fill in all fields.');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }

    // Placeholder for storing user data
    console.log('Name:', name);
    console.log('RollNo:', rollno);
    console.log('Email:', email);
    console.log('Password:', password);

    alert('Sign-Up successful! Redirecting to login page...');
    window.location.href = 'studentLogin.html'; // Redirect to the login page
}