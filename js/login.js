
window.onload = function () {
    const emailPhoneInput = document.getElementById('email-phone');
    const passwordInput = document.getElementById('password');

    const lastEmailPhone = localStorage.getItem('lastEmailPhone');
    const lastPassword = localStorage.getItem('lastPassword');

    if (lastEmailPhone) emailPhoneInput.value = lastEmailPhone;
    if (lastPassword) passwordInput.value = lastPassword;
};


document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const emailPhone = document.getElementById('email-phone').value;
    const password = document.getElementById('password').value;

    
    localStorage.setItem('lastEmailPhone', emailPhone);
    localStorage.setItem('lastPassword', password);

   
    window.location.href = 'index.html';
});
