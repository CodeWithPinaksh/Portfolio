
function showSidebar() {
  var menucontainer = document.getElementById("menu-container");
  // var hamburgermenu = document.getElementById(".hamburger-menu");
  var hambox = document.getElementById("ham-box");

  if (menucontainer.style.display === "block") {
    menucontainer.style.display = "none";
  } else {
    menucontainer.style.display = "block";
  }

  hambox.classList.toggle("close");
}


// const hamburgermenu = document.querySelectorAll(".hamburger-menu");
// const hambox = document.querySelectorAll(".ham-box");
//
// hamburgermenu.addEventListener("click", function() {
//   hambox.classList.toggle("close");
// });
