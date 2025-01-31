function myMenuFunction() {
    var menuBtn = document.getElementById("myNavMenu");
    if(menuBtn.className === "nav-menu") {
        menuBtn.className += " responsive";
    } else {
        menuBtn.className = "nav-menu";
    }
}

const body = document.querySelector("body");
const toggleSwitch = document.getElementById("toggle-switch");

toggleSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");
    localStorage.setItem("darkMode", body.classList.contains("dark"));
});

// Check for saved dark mode preference
if (localStorage.getItem("darkMode") === "true") {
    body.classList.add("dark");
}

var typingEffect = new Typed(".typedtext", {
    strings: ["Designer", "Coder", "Developer"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000,
    startDelay: 1000,
    cursorChar: "|",
});

// Initialize ScrollReveal with custom options
const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2000,
    reset: false,
    mobile: true,
    viewFactor: 0.2,
    easing: "ease-in-out"
});

// Reveal elements with custom configurations
sr.reveal(".featured-name", { delay: 100, origin: "left" });
sr.reveal(".text-info", { delay: 200, origin: "right" });
sr.reveal(".text-btn", { delay: 200, origin: "bottom" });
sr.reveal(".social-icons", { 
    delay: 200, 
    origin: "bottom",
    interval: 200
});
sr.reveal(".featured-image", {
    delay: 300,
    origin: "right",
    distance: "120px"
});

sr.reveal(".project-box", { 
    interval: 200,
    origin: "bottom"
});
sr.reveal(".top-header", {
    origin: "top",
    distance: "40px"
});

const srleft = ScrollReveal({
    origin: "left",
    distance: "80px",
    duration: 2000,
    reset: false
});

srleft.reveal(".about-info", { delay: 100 });
srleft.reveal(".contact-info", { delay: 100 });

const srright = ScrollReveal({
    origin: "right",
    distance: "80px",
    duration: 2000,
    reset: false
});

srright.reveal(".skill", { delay: 100 });
srright.reveal(".skill-box", { 
    delay: 100,
    interval: 100
});

// Active link state on scroll
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
    const scrollY = window.scrollY;
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute("id");

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document
                .querySelector(".nav-menu a[href*=" + sectionId + "]")
                ?.classList.add("active-link");
        } else {
            document
                .querySelector(".nav-menu a[href*=" + sectionId + "]")
                ?.classList.remove("active-link");
        }
    });
}

window.addEventListener("scroll", scrollActive);

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            const menuBtn = document.getElementById("myNavMenu");
            if (menuBtn.classList.contains("responsive")) {
                menuBtn.className = "nav-menu";
            }
        }
    });
});

// Contact form submission
const contactForm = document.querySelector('.form-control');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.querySelector('.input-field[placeholder="your Name"]').value;
    const email = document.querySelector('.input-field[placeholder="your Email"]').value;
    const subject = document.querySelector('.input-subject').value;
    const message = document.querySelector('textarea').value;
    
    // Simple validation
    if (name && email && subject && message) {
        // Show success message
        alert('Thank you! Your message has been sent successfully.');
        
        // Clear form
        contactForm.reset();
    } else {
        alert('Please fill in all fields.');
    }
});

// Skills bar animation
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-per');
    skillBars.forEach(skillBar => {
        const targetWidth = skillBar.style.width;
        skillBar.style.width = '0';
        setTimeout(() => {
            skillBar.style.width = targetWidth;
        }, 300);
    });
}

// Call animateSkillBars when the about section is in view
const aboutSection = document.querySelector('#about');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateSkillBars();
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

observer.observe(aboutSection);
