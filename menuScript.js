document.addEventListener('DOMContentLoaded', function() {

    var menuButton = document.getElementById("menuButton");
    var closeButton = document.getElementById("closeButton");
    var navMenu = document.getElementById("navMenu");
    var navLinks = document.getElementsByClassName("navLink");

    closeButton.onclick = function closeMenu() {
        closeButton.style.display = "none";
        navMenu.style.display = "none";
    }
    menuButton.onclick = function openMenu() {
      navMenu.style.display = "block";
      closeButton.style.display = "inline-block";
     }

    function menuSelection() {
        if (currentDisplay(closeButton) != "none") {
            closeButton.style.display = "none";
            navMenu.style.display = "none";
        }
    }

    function currentDisplay(obj) {
       return obj.currentStyle ? obj.currentStyle["display"] : window.getComputedStyle ? window.getComputedStyle(obj, null).getPropertyValue("display") : null;
    }

    // assign close operation to nav links
    for (i=0; i < navLinks.length; i++) {
        navLinks[i].onclick = menuSelection;
    }

    window.addEventListener("resize", function() {
        var menuVisibility = currentDisplay(menuButton);
        //If on full size window dimension, always show the nav menu
        if (menuVisibility == "none") {
           navMenu.style.display = "block";
        }else { // hide the nav menu when on mobile size dimensions until menu button is clicked
            navMenu.style.display = "none";
        }
    });

 }, false);