// =====================
// GLOBAL JAVASCRIPT (ALL PAGES)
// =====================


// ========== HOME PAGE ==========
const shopBtn = document.getElementById("shopBtn");

if (shopBtn) {
    shopBtn.addEventListener("click", function () {
        alert("Welcome to Mido Tech Gadgets!");
    });
}


// ========== PRODUCTS PAGE ==========
const productButtons = document.querySelectorAll(".shop-btn");

if (productButtons.length > 0) {
    productButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const productName = this.parentElement.querySelector("h3").innerText;
            alert(productName + " added to cart!");
        });
    });
}


// ========== ENQUIRY PAGE ==========
const enquiryForm = document.querySelector(".enquiry-form form");

if (enquiryForm) {
    enquiryForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const inputs = enquiryForm.querySelectorAll("input");
        const message = enquiryForm.querySelector("textarea");

        const name = inputs[0].value.trim();
        const email = inputs[1].value.trim();
        const enquiry = message.value.trim();

        if (name === "" || email === "" || enquiry === "") {
            alert("Please fill in all fields.");
            return;
        }

        if (!email.includes("@")) {
            alert("Please enter a valid email.");
            return;
        }

        alert("Enquiry sent successfully!");

        enquiryForm.reset();
    });
}


// ========== CONTACT PAGE ==========
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            alert("Please fill in all fields.");
            return;
        }

        if (!email.includes("@")) {
            alert("Please enter a valid email.");
            return;
        }

        alert("Message sent successfully!");

        contactForm.reset();
    });
}


// ========== ABOUT PAGE (OPTIONAL) ==========
const aboutBtn = document.getElementById("aboutBtn");

if (aboutBtn) {
    aboutBtn.addEventListener("click", function () {
        alert("Welcome to Mido Tech Gadgets!");
    });
}

