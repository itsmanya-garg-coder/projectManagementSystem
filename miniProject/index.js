window.onload = function () {
    const message = sessionStorage.getItem('loginMessage');
    if (message) {
        alert(message);
    }
};