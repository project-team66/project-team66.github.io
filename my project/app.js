window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  var servicesSection = document.getElementById("services");
  var socialIcons = document.querySelector(".social-icons");

  if (window.scrollY > servicesSection.offsetTop) {
    socialIcons.style.display = "block";
  } else {
    socialIcons.style.display = "none";
  }
}