/* =====================================================
   STONEEDITZ — JAVASCRIPT
===================================================== */


/* ================= HAMBURGER MENU ================= */

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

if (hamburger && navMenu) {

    hamburger.addEventListener("click", () => {

        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");

    });


    // Close menu when clicking a navigation link

    const navLinks = navMenu.querySelectorAll("a");

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            hamburger.classList.remove("active");
            navMenu.classList.remove("active");

        });

    });

}


/* ================= CONTACT FORM ================= */

const contactForm = document.querySelector(".contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name =
            contactForm.querySelector(
                'input[placeholder="Your Name"]'
            ).value.trim();

        const email =
            contactForm.querySelector(
                'input[placeholder="Your Email"]'
            ).value.trim();

        const service =
            contactForm.querySelector(
                'input[placeholder="What do you need?"]'
            ).value.trim();

        const message =
            contactForm.querySelector("textarea").value.trim();


        if (!name || !email || !service || !message) {

            alert("Please fill all the fields.");

            return;

        }


        /*
            Change this Telegram username
            to the editor's real username.
        */

        const telegramUsername = "neditz08";


        const text =
`🔥 NEW EDITING ORDER

👤 Name:
${name}

📧 Email:
${email}

🎬 Service:
${service}

📝 Details:
${message}

Sent from StoneEditz Website.`;


        /*
            Opens Telegram with the order information.
        */

        const telegramURL =
            `https://t.me/${telegramUsername}?text=${encodeURIComponent(text)}`;


        window.open(telegramURL, "_blank");


        // Reset form

        contactForm.reset();

    });

}


/* ================= SMOOTH SCROLL ================= */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (event) {

        const targetID = this.getAttribute("href");

        if (targetID === "#") {
            return;
        }

        const target = document.querySelector(targetID);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


/* ================= NAVBAR SCROLL EFFECT ================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (!navbar) return;

    if (window.scrollY > 50) {

        navbar.style.background =
            "rgba(5, 5, 5, 0.96)";

        navbar.style.borderBottomColor =
            "rgba(255, 0, 0, 0.15)";

    } else {

        navbar.style.background =
            "rgba(8, 8, 8, 0.85)";

        navbar.style.borderBottomColor =
            "rgba(255, 255, 255, 0.06)";

    }

});


/* ================= REVEAL ANIMATION ================= */

const revealElements = document.querySelectorAll(
    ".service-card, .software-card, .portfolio-card, .price-card, .skill, .profile-card"
);

const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


revealElements.forEach(element => {

    element.classList.add("reveal");

    revealObserver.observe(element);

});


/* ================= CURRENT YEAR ================= */

const yearElement =
    document.querySelector(".copyright");

if (yearElement) {

    const currentYear =
        new Date().getFullYear();

    yearElement.innerHTML =
        `© ${currentYear} StoneEditz. All Rights Reserved.`;

}


/* ================= CONSOLE MESSAGE ================= */

console.log(
    "%c⚡ StoneEditz Website Loaded!",
    "color:#ff1616;font-size:18px;font-weight:bold;"
);