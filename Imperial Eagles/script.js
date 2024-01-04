/* Dropdown functionality */
function toggleDropdown(event) {
    var dropdownContent = document.querySelector(".dropdown-content");
    if (dropdownContent.style.maxHeight) {
        dropdownContent.style.maxHeight = null;
    } else {
        dropdownContent.style.maxHeight = "200px";
    }
    event.stopPropagation();
}

var dropdownBtn = document.querySelector(".dropdown-btn");
dropdownBtn.addEventListener("click", toggleDropdown);

window.addEventListener("click", function(event) {
    var dropdownContent = document.querySelector(".dropdown-content");
    if (!event.target.closest(".dropdown")) {
        dropdownContent.style.maxHeight = null;
    }
});

/* Slideshow functionality */
var slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
    clearInterval(slideInterval); // Clear the existing interval
    if (n < 0) {
        showSlides(slideIndex -= 1);
    } else {
        showSlides(slideIndex += 1);
    }

    // Reset the interval after the manual change
    slideInterval = setInterval(function() { plusSlides(1); }, 4000);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slide");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}

// Automatic slideshow with a delay
var slideInterval = setInterval(function() { plusSlides(1); }, 4000); // Faster interval

// Pause and resume on hover
document.querySelector('.hero-slideshow').addEventListener('mouseover', function() {
    clearInterval(slideInterval);
});

document.querySelector('.hero-slideshow').addEventListener('mouseout', function() {
    slideInterval = setInterval(function() { plusSlides(1); }, 4000); // Keep this the same as above
});

//Form submission//

document.querySelector('.contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    var formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    console.log(formData); 
});