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
    To: "dcodeplus.languages@gmail.com",
    // To: "ajmalullanam5@gmail.com",
    // To: "mohamedanaspkm@gmail.com",
    From: "testwithajas@gmail.com",
    Subject: "Dcodeplus Site Enquiry",
    Body:
      "This is the enquiry from " +
      "<br>" +
      document.getElementById("form-name").value +
      ", <br>" +
      document.getElementById("form-message").value +
      "<br> <br>" +
      " Contact details: <br> email: " +
      document.getElementById("form-mail").value +
      "<br> Mobile: " +
      document.getElementById("form-mobile").value,
  }).then((message) => {
    if (message == "OK") {
      swal("Successfull", "Your message has been sent successfully", "Success"),
        (document.getElementById("contact-container").style.display = "none");
    } else {
      swal("Something wrong", "Your data not received", "error");
    }
  });
}

// back to top button function

let backToTop = document.getElementById("go2top");
let chatToWA = document.getElementById("chat2wa");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTop.style.display = "block";
    chatToWA.style.display = "block";
  } else {
    backToTop.style.display = "none";
    chatToWA.style.display = "none";
  }
}

// When click on the button, scroll to the top of the document
function goToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// read more button function

let noOfCharac = 250;
let contents = document.querySelectorAll(".content");
contents.forEach((content) => {
  if (content.textContent.length < noOfCharac) {
    content.nextElementSibling.style.display = "none";
  } else {
    let displayText = content.textContent.slice(0, noOfCharac);
    let moreText = content.textContent.slice(noOfCharac);
    content.innerHTML = `${displayText}<span class="dots">...</span><span class="hide more">${moreText}</span>`;
  }
});

function readMore(btn) {
  let post = btn.parentElement;
  post.querySelector(".dots").classList.toggle("hide");
  post.querySelector(".more").classList.toggle("hide");

  btn.textContent == "Read More"
    ? (btn.textContent = "Read Less")
    : (btn.textContent = "Read More");
}
