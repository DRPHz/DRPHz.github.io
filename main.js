function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main-content").style.marginLeft = "250px";
  document.getElementById("main-content").style.opacity = "0.5";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main-content").style.marginLeft = "0";
  document.getElementById("main-content").style.opacity = "1";
}

document.addEventListener("DOMContentLoaded", function () {
  let mainContent = document.getElementById("main-content");
  mainContent.style.opacity = "0";
  setTimeout(function () {
    mainContent.style.opacity = "1";
    mainContent.style.transform = "translateY(0)";
  }, 100);
});
