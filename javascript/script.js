// =====================
// GLOBAL JAVASCRIPT
// Mido Tech Gadgets
// =====================
console.log("JavaScript Loaded");
// ========== HOME PAGE ==========
const shopBtn = document.getElementById("shopBtn");

if (shopBtn) {
    shopBtn.addEventListener("click", () => {
        alert("Welcome to Mido Tech Gadgets!");
    });
}

// ========== PRODUCTS PAGE ==========
const productButtons = document.querySelectorAll(".shop-btn");

productButtons.forEach(button => {
    button.addEventListener("click", function () {
        const productName = this.parentElement.querySelector("h3").textContent;
        alert(`${productName} added to cart!`);
    });
});

// ========== EMAILJS ==========
emailjs.init("H3ZCXRI9pE3hklWcN");

// =====================
// ENQUIRY FORM VALIDATION
// =====================
const enquiryForm = document.querySelector(".enquiryForm");

if (enquiryForm) {
    enquiryForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = enquiryForm.querySelector("[name='from_name']");
const email = enquiryForm.querySelector("[name='from_email']");
const phone = enquiryForm.querySelector("[name='phone']");
const service = enquiryForm.querySelector("[name='service']");
const message = enquiryForm.querySelector("[name='message']");

// Validation
if (
    !name.value.trim() ||
    !email.value.trim() ||
    !phone.value.trim() ||
    !service.value.trim() ||
    !message.value.trim()
) {
    alert("Please fill in all fields.");
    return;
}

// Email validation
if (!email.value.includes("@")) {
    alert("Please enter a valid email address.");
    return;
}

        const submitBtn = enquiryForm.querySelector("button[type='submit']");
        const originalText = submitBtn.innerText;

        submitBtn.innerText = "Sending...";
        submitBtn.disabled = true;

        emailjs.sendForm(
            "service_h12lbah",
            "template_fruubvl",
            enquiryForm
        )
        .then(() => {
            alert("Enquiry sent successfully!");
            enquiryForm.reset();
        })
        .catch((error) => {
            console.error("EmailJS Error:", error);
            alert("Failed to send enquiry.");
        })
        .finally(() => {
            submitBtn.innerText = originalText;
            submitBtn.disabled = false;
        });
    });
}

// =====================
// CONTACT FORM VALIDATION
// =====================
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        // Validation
        if (!name || !email || !message) {
            alert("Please fill in all fields.");
            return;
        }

        if (!email.includes("@")) {
            alert("Please enter a valid email address.");
            return;
        }

        alert("Message sent successfully!");
        contactForm.reset();
    });
}

// ========== ABOUT PAGE ==========
const aboutBtn = document.getElementById("aboutBtn");

if (aboutBtn) {
    aboutBtn.addEventListener("click", () => {
        alert("Welcome to Mido Tech Gadgets!");
    });
}

// =====================
// IMAGE LIGHTBOX
// =====================
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".product-card img").forEach(img => {
    img.addEventListener("click", function () {
        lightbox.style.display = "flex";
        lightboxImg.src = this.src;
        lightboxImg.alt = this.alt;
    });
});

closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
});

lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox) {
        lightbox.style.display = "none";
    }
});