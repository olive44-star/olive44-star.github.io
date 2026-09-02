// Back to Top button
const backToTop = document.getElementById("backToTop");

backToTop.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Go to Contact button
const goToContact = document.getElementById("goToContact");

goToContact.addEventListener("click", function() {
    document.getElementById("Contact").scrollIntoView({
        behavior: "smooth"
    });
});