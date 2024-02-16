// div que contiene a ambos iconos svg list y close
const containerIconsNavbar = document.getElementById("icon__container");

// icono de abrir menú
const navbarOpenIcon = document.getElementById("navbar__openIcon");

// icono de cerrar menú
const navbarCloseIcon = document.getElementById("navbar__closeIcon");

// ul que contiene la 
const navbarUl = document.getElementById("navbar__ul");

const showNavbar = () => {
    navbarUl.classList.toggle("navbar__ul--show");

    navbarOpenIcon.classList.toggle("navbar__icon--close");
    navbarCloseIcon.classList.toggle("navbar__closeIcon");
}

containerIconsNavbar.addEventListener("click", showNavbar);
