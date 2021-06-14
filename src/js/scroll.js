var root = document.documentElement;
root.className += " scroll";

var scrollYOld = 0;

const navbar = document.getElementById("navbar");
const nameScroll = document.getElementById("name-scroll");
const screenUp = document.getElementById("scroll-up");
const menu = document.getElementById("menu");
const overview = document.getElementById("overview");

window.onscroll = () => {
  if(scrollYOld == 0) {
    scrollYOld = window.scrollY;
  }

  hidden();

  if(!scrollUp(window.scrollY) || !window.scrollY > 0) {
    navbar.classList.add("transform");
    nameScroll.classList.add("transform");
  }else {
    navbar.classList.remove("transform");
    nameScroll.classList.remove("transform");
  }
}

function hidden() {
  if(window.scrollY > 0) {
    screenUp.classList.remove("hidden");
    menu.classList.remove("hidden");
    overview.classList.remove("hidden");
  }else {
    screenUp.classList.add("hidden");
    menu.classList.add("hidden");
    overview.classList.add("hidden");
  }
}

function scrollUp(scroll) {
  if(scroll == 0) {
    scrollYOld = scroll;
    return false;
  }

  if(scroll < scrollYOld) {
    scrollYOld = scroll;
    return true;
  }else {
    scrollYOld = scroll;
    return false;
  }
}
