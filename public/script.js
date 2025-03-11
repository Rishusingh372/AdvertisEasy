document.addEventListener("DOMContentLoaded", function () {
  const navItems = document.querySelectorAll(".nav-item");

  navItems.forEach((item) => {
    item.addEventListener("click", function () {
      navItems.forEach((nav) => nav.classList.remove("active"));
      this.classList.add("active");
    });
  });

  // Hamburger Menu Toggle
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  // Close menu when a link is clicked
  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    });
  });

  // GSAP Animations
  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".hero-title", { opacity: 0, y: -50, duration: 1 });
  gsap.from(".hero-tagline", { opacity: 0, y: 50, duration: 1, delay: 0.5 });

  // Paragraph Slideshow Animation
  const paragraphs = document.querySelectorAll(".hero-paragraph");
  let currentIndex = 0;

  function showNextParagraph() {
    paragraphs[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % paragraphs.length;
    paragraphs[currentIndex].classList.add("active");
  }

  setInterval(showNextParagraph, 2000);

  // Intersection Observer for Hero Section
  const heroSection = document.querySelector(".hero");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          heroSection.style.animationPlayState = "running";
        } else {
          heroSection.style.animationPlayState = "paused";
        }
      });
    },
    { threshold: 1.0 }
  );

  observer.observe(heroSection);

  // About Section Animation
  gsap.from(".about-content", {
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: {
      trigger: ".about",
      start: "top 80%",
    },
  });

 // Services Section Animation
gsap.from(".service-card", {
  opacity: 0,
  y: 50,
  stagger: 0.3,
  duration: 1,
  scrollTrigger: {
    trigger: ".services",
    start: "top 80%",
  },
});

// Call Button Functionality in service section
document.querySelectorAll('.call-button').forEach(button => {
  button.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    const phoneNumber = "7000250950"; // Your phone number
    if (confirm(`Call ${phoneNumber}?`)) {
      window.location.href = `tel:${phoneNumber}`;
    }
  });
});

  // Testimonials Section Animation

let currentSlide = 0;
const slides = document.querySelectorAll(".testimonial-slide");
const totalSlides = slides.length;

// Function to show the current slide
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
    });
}

// Function to move to the next slide
function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

// Function to move to the previous slide
function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

console.log("Next button clicked"); // Debugging log
document.querySelector(".carousel-button.next").addEventListener("click", function() {
    console.log("Next button clicked"); // Debugging log
    nextSlide();
});

console.log("Prev button clicked"); // Debugging log
document.querySelector(".carousel-button.prev").addEventListener("click", function() {
    console.log("Prev button clicked"); // Debugging log
    prevSlide();
});


// Show the first slide initially
showSlide(currentSlide);

  // Handle form submission
  document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission
    // Send the form data using EmailJS
    emailjs.sendForm('service_vce4u2t', 'template_wkggvbb', this)
      .then(function (response) {
        // alert('Message sent successfully!');
        console.log('SUCCESS!', response.status, response.text);
      }, function (error) {
        alert('Failed to send message. Please try again.');
        console.log('FAILED...', error);
      });

  });
  // sever conection  

  // Form submission with MongoDB integration
  document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const service = document.getElementById("service").value;
    const number = document.getElementById('number').value;
    const message = document.getElementById('message').value;



    // Send data to the server
    // fetch('/submit-form', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({ name, email, service, message, number })
    // })
    //   .then(response => response.json())
    //   .then(data => {
    //     alert(data.message); // Show success message
    //     document.getElementById('contact-form').reset(); // Clear the form
    //   })
    //   .catch(error => {
    //     console.error('Error:', error);
    //     alert('Error submitting form');
    //   });
  });
  // Change header background on scroll
  window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
});
