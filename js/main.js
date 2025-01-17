document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menu-btn");
  const navLinks = document.getElementById("nav-links");

  
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  
  const links = document.querySelectorAll(".nav__links a");
  links.forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });

 
  const subscribeForm = document.querySelector(".subscribe-form");
  const emailInput = document.querySelector("#email input");

  subscribeForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = emailInput.value.trim();

    if (validateEmail(email)) {
      alert("Thank you for subscribing!");
      emailInput.value = "";
    } else {
      alert("Please enter a valid email address.");
    }
  });

  function validateEmail(email) {
    const regex = /^[\w-.]+@[\w-]+\.[a-z]{2,}$/i;
    return regex.test(email);
  }
});


window.addEventListener("resize", () => {
  const navLinks = document.getElementById("nav-links");
  if (window.innerWidth > 768) {
    navLinks.classList.remove("active");
  }
});


const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});

ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".header__content form", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".header__content .bar", {
  ...scrollRevealOption,
  delay: 2000,
});

ScrollReveal().reveal(".header__image__card", {
  duration: 1000,
  interval: 500,
  delay: 2500,
});

document.addEventListener('DOMContentLoaded', () => {
 
  const signUpButton = document.querySelector('.btn.sign__up');
  const logInButton = document.querySelector('.btn.sign__in');

  signUpButton.addEventListener('click', () => {
    window.location.href = 'signup.html'; 
  });

  logInButton.addEventListener('click', () => {
    window.location.href = 'login.html'; 
  });


  const footerLinks = document.querySelectorAll('footer a');

  footerLinks.forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault(); 
      const href = link.getAttribute('href');

      if (href && href !== '') {
        window.location.href = href; 
      } else {
        alert('This link is not yet set up.'); 
      }
    });
  });

  const menuBtn = document.getElementById('menu-btn');
  const navLinks = document.getElementById('nav-links');

  menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active'); 
  });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const aboutLink = document.querySelector('a[href="#about.html"]');

  if (aboutLink) {
    aboutLink.addEventListener("click", (event) => {
      event.preventDefault(); 
      window.location.href = "about.html";
    });
  }
});

document.getElementById("search-form").addEventListener("submit", function (e) {
  e.preventDefault(); 

  const destination = document.getElementById("destination").value.trim();
  const date = document.getElementById("date").value.trim();
  const messageDiv = document.getElementById("message");


  if (destination === "" || date === "") {
    messageDiv.textContent = "Please fill in both the destination and date fields.";
    messageDiv.style.color = "red";
  } else {
    messageDiv.textContent = `No such destination in this month: ${destination} on ${date}`;
    messageDiv.style.color = "blue";
  }
});

