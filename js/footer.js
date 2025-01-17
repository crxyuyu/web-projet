document.querySelector(".subscribe-form").addEventListener("submit", function(event) {
    event.preventDefault(); 
    
    const emailInput = document.querySelector('input[type="email"]');
    const email = emailInput.value.trim();
    const messageContainer = document.getElementById("subscribe-message");
  
    messageContainer.textContent = "";

  
    const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

;

    if (!emailRegex.test(email)) {
        messageContainer.textContent = "Please enter a valid email address.";
        messageContainer.style.color = "red";
    } else {
        messageContainer.textContent = "We'll send you an email when we have updates and promotions!";
        messageContainer.style.color = "green";

        
        emailInput.value = "";
    }
});


