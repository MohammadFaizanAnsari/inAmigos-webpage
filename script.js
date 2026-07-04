/* ==========================================
   PREMIUM NGO WEBSITE JAVASCRIPT
========================================== */

// ===========================
// Mobile Menu
// ===========================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
const menuIcon = document.querySelector(".menu-btn i");

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {

        menuIcon.className = "fa-solid fa-xmark";

    } else {

        menuIcon.className = "fa-solid fa-bars";

    }

});

// Close menu after clicking

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");

    });

});

// ===========================
// Sticky Navbar
// ===========================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});

// ===========================
// Active Navigation
// ===========================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// ===========================
// Reveal Animation
// ===========================

const revealElements = document.querySelectorAll(
".card,.about-image,.about-content,.impact-card,.gallery-container img,.contact-box"
);

const reveal = () => {

    revealElements.forEach(el => {

        const top = el.getBoundingClientRect().top;

        const windowHeight = window.innerHeight;

        if (top < windowHeight - 100) {

            el.style.opacity = "1";
            el.style.transform = "translateY(0)";

        }

    });

};

revealElements.forEach(el => {

    el.style.opacity = "0";
    el.style.transform = "translateY(60px)";
    el.style.transition = "all .8s ease";

});

window.addEventListener("scroll", reveal);

reveal();

// ===========================
// Counter Animation
// ===========================

const counters = document.querySelectorAll(".impact-card h2");

let started = false;

window.addEventListener("scroll", () => {

    const impact = document.querySelector(".impact");

    if (!impact) return;

    const trigger = impact.offsetTop - 350;

    if (window.scrollY > trigger && !started) {

        started = true;

        counters.forEach(counter => {

            const text = counter.innerText;

            const number = parseInt(text);

            if (isNaN(number)) return;

            let count = 0;

            const speed = number / 70;

            const update = () => {

                count += speed;

                if (count < number) {

                    counter.innerText = Math.floor(count);

                    requestAnimationFrame(update);

                } else {

                    counter.innerText = text;

                }

            };

            update();

        });

    }

});

// ===========================
// Scroll To Top Button
// ===========================

const topBtn = document.createElement("button");

topBtn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';

topBtn.className = "top-btn";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.right = "25px";
topBtn.style.bottom = "25px";
topBtn.style.width = "55px";
topBtn.style.height = "55px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#ff9800";
topBtn.style.color = "white";
topBtn.style.fontSize = "20px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.boxShadow = "0 10px 25px rgba(0,0,0,.2)";
topBtn.style.zIndex = "999";

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.onclick = () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};

// ===========================
// Footer Year
// ===========================

const copyright = document.querySelector(".copyright");

if(copyright){

copyright.innerHTML =
`© ${new Date().getFullYear()} InAmigos NGO. All Rights Reserved.`;

}

console.log("🚀 InAmigos NGO Website Loaded Successfully!");