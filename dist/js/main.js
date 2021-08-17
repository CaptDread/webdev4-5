"use strict";

console.log("Hello World from main.js! \nChange this message, and make sure it changes in the browser \nto verify that you're working in the right files.");
//# sourceMappingURL=main.js.map

var burgerButt = document.querySelector(".daburger");
var topBun = document.querySelector(".topbun");
var mid = document.querySelector(".dagoods");
var bottBun = document.querySelector(".botbun");
var burgerBar = document.createElement("div");
var burgerNav = document.createElement('nav');
var burgerUl = document.createElement("ul");
var activeButt = document.querySelector(".activeButt");
var navLink = document.querySelectorAll('nav li a');

var toggleBurger = function toggleBurger() {
  if (burgerButt.id != "open") {
    burgerButt.id = "open";
    console.log("Burger now " + burgerButt.id);
    mid.style.opacity = "0%";
    mid.style.webkitTransition = ".42s ease";
    bottBun.style.transform = "translate(0em,-.85em) rotate(45deg)";
    bottBun.style.webkitTransition = ".42s ease";
    bottBun.style.zIndex = "3";
    bottBun.style.position = "relative";
    topBun.style.transform = "translate(0em,1em) rotate(-45deg)";
    topBun.style.webkitTransition = ".42s ease";
    topBun.style.position = "relative";
    burgerBar.style.width = "10em";
    burgerBar.style.height = "fitContent";
    burgerBar.style.position = "absolute";
    burgerBar.style.right = "0%";
    burgerBar.style.zIndex = "1";
    burgerBar.style.border = ".13em #fff solid";
    burgerBar.setAttribute("class", "burgerBar");
    burgerBar.style.textTransform = "capitalize";
    burgerBar.style.textAlign = 'center';
    burgerUl.style.display = "flex";
    burgerUl.style.flexDirection = "column";
    burgerUl.setAttribute("class", "burgerUl");
    burgerBar.appendChild(burgerNav);
    burgerNav.appendChild(burgerUl);

    for (var z = 0; z < navLink.length; z++) {
        navLink[z].style.textDecoration = "none";
        navLink[z].style.color = "#fff";
        navLink[z].style.textShadow = "0 0 3px #660099, 0 0 3px #660099, 0 0 3px #660099, 0 0 3px #660099";
        navLink[z].style.border = 'none';
        navLink[z].style.padding = "1em 1.3em";
        navLink[z].style.marginLeft = "-33%";
        burgerUl.appendChild(navLink[z]); // activeButt.style.padding = '9.4% 24% 9.4% 16%'
    }
    } else if (burgerButt.id != "close") {
        burgerButt.id = "close";
        console.log("Burger now " + burgerButt.id);
        bottBun.style.transform = "";
        topBun.style.transform = "";
        bottBun.style.top = "";
        topBun.style.bottom = "";
        mid.style.opacity = "100%";
        document.body.removeChild(burgerBar);
    }
};

burgerButt.addEventListener("click", function (e) {
    e.preventDefault();
    toggleBurger();
}); // cart butt/menu