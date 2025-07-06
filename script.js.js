// Countdown Timer
const countdownDate = new Date("YYYY-MM-DDTHH:MM:SS").getTime();
const countdownFunction = setInterval(() => {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown").innerHTML = "Tournament Started!";
    }
}, 1000);

// Registration Form Submission
document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    // Simulate payment processing with Razorpay
    alert("Payment of ₹31 successful! You are registered for the tournament.");
    document.getElementById("confirmationMessage").innerHTML = "Thank you for registering!";
});
