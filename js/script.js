// mobile navigation

var navLinks = document.getElementById("nav-links");

function showMenu() {
    navLinks.style.right = "0";
}
function hideMenu() {
    navLinks.style.right = "-200px";
}

// form popup

function openForm() {
    document.getElementById("contact-container").style.display = "block";
}

function closeForm() {
    document.getElementById("contact-container").style.display = "none";
}

// smtp js code for contact form
function sendEmail() {
    Email.send({
        SecureToken: "2dddff2a-75d7-4896-9984-3a4770ff0c06",
        To: "ajmalullanam5@gmail.com",
        From: "testwithajas@gmail.com",
        Subject: "Dcodeplus Site Enquiry",
        Body: "This is the enquiry from " 
        + document.getElementById("form-name").value 
        + ", <br>" 
        + document.getElementById("form-message").value 
        + "<br> <br>" 
        + " Contact details: <br> email: " 
        + document.getElementById("form-mail").value 
        + "<br> Mobile: " 
        + document.getElementById("form-mobile").value,
  }).then((message) => alert(message));
}

// Host: "smtp.elasticemail.com",
//     Username: "testwithajas@gmail.com",
//     Password: "8908BC10D321E49A78D795690267CCD30451",
