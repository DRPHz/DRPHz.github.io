function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main-content").style.marginLeft = "250px";
  document.getElementById("main-content").style.opacity = "0.5";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main-content").style.marginLeft = "auto";
  document.getElementById("main-content").style.opacity = "1";
}
