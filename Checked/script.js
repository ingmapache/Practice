const checkBoxBtn = document.getElementById("checkBoxBtn");
const americanExpressBtn = document.getElementById("americanExpressBtn");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const paypalBtn = document.getElementById("paypalBtn");
const submitBtn = document.getElementById("submitBtn");
const membershipText = document.getElementById("membershipText");
const paymentText = document.getElementById("paymentText");

submitBtn.onclick = function() {
    if (checkBoxBtn.checked) {
        membershipText.textContent = "Welcome, precious Costco member.";
    } else {
        membershipText.textContent = "You're not a Costco Member.";
    }

    if (americanExpressBtn.checked) {
        paymentText.textContent = "Your payment method will be: American Express.";
    } else if (visaBtn.checked) {
        paymentText.textContent = "Your payment method will be: Visa.";
    } else if (masterCardBtn.checked) {
        paymentText.textContent = "Your payment method will be: Master Card.";
    } else if (paypalBtn.checked) {
        paymentText.textContent = "Your payment method will be: Paypal.";
    } else {
        paymentText.textContent = "You must select one method of payment.";
    }
}

