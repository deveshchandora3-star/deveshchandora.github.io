// ===== STICKY HEADER EFFECT =====
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.background = "rgba(0,0,0,0.9)";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.4)";
    } else {
        header.style.background = "rgba(0,0,0,0.6)";
        header.style.boxShadow = "none";
    }
});

// ===== SCROLL REVEAL ANIMATION =====
const revealElements = document.querySelectorAll(
    ".card, .about, .gallery img, .contact, .section-title"
);

function revealOnScroll() {
    const windowHeight = window.innerHeight;

    revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            element.style.opacity = "1";
            element.style.transform = "translateY(0)";
        }
    });
}

// INITIAL STYLES
revealElements.forEach((element) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(40px)";
    element.style.transition = "all 0.8s ease";
});

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// ===== SMOOTH BUTTON HOVER EFFECT =====
const buttons = document.querySelectorAll(".btn");

buttons.forEach((btn) => {
    btn.addEventListener("mouseenter", () => {
        btn.style.transform = "scale(1.05)";
    });

    btn.addEventListener("mouseleave", () => {
        btn.style.transform = "scale(1)";
    });
});

// ===== GALLERY IMAGE EFFECT =====
const galleryImages = document.querySelectorAll(".gallery img");

galleryImages.forEach((img) => {
    img.addEventListener("mousemove", () => {
        img.style.transform = "scale(1.06)";
    });

    img.addEventListener("mouseleave", () => {
        img.style.transform = "scale(1)";
    });
});

// ===== CONTACT FORM ALERT =====
const contactBtn = document.querySelector(".contact .btn");

if (contactBtn) {
    contactBtn.addEventListener("click", () => {
        alert("Thank you! Your message has been sent successfully.");
    });
}

// ===== AUTO TEXT ANIMATION =====
const heroText = document.querySelector(".hero-content h1");

if (heroText) {
    heroText.style.opacity = "0";
    heroText.style.transform = "translateY(40px)";

    setTimeout(() => {
        heroText.style.transition = "all 1s ease";
        heroText.style.opacity = "1";
        heroText.style.transform = "translateY(0)";
    }, 300);
}

// ===== PARALLAX EFFECT =====
window.addEventListener("scroll", () => {
    const hero = document.querySelector(".hero");

    let scrollPosition = window.pageYOffset;

    hero.style.backgroundPositionY = scrollPosition * 0.5 + "px";
});
