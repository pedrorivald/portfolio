const menuLi = document.getElementById("li-menu");
const dropdown = document.getElementById("dropdown");
const menuIcon = document.getElementsByClassName("menu-icon")[0];

menuLi.onclick = () => { 
  dropdown.classList.toggle('dropdown-click');
  menuIcon?.classList.toggle('menu-icon-click');
}