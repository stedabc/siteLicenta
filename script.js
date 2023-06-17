// Animare buton cu JavaScript
var ctaButton = document.getElementById("ctaButton");
ctaButton.addEventListener("click", function() {
  ctaButton.classList.add("animated", "pulse");
  setTimeout(function() {
    ctaButton.classList.remove("animated", "pulse");
  }, 1000);
});
