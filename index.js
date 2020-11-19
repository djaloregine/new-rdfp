let hamburgerElt = document.querySelector(".fa-bars");
let barreTitre = document.getElementById("titleBar");
let barreMenu = document.getElementById("barre");
let hauteurContainerPrincipal = document.querySelector(".containerPrincipal");
let menuOuvert = true;


const visibilite = () => {
    barreTitre.style.visibility = "hidden";
    if (screen.width <= 767) {
        barreTitre.style.visibility = "visible";
        hauteurContainerPrincipal.style.marginTop = "8vh";
    }
    hamburgerElt.addEventListener("click", function () {
        menuOuvert = !menuOuvert;
        if (menuOuvert) {
            barreMenu.style.transform = 'translateX(0%)';
        } else {
            barreMenu.style.transform = 'translateX(100%)';
        }
    });
}
document.addEventListener('DOMContentLoaded', (event) => {
    visibilite();
})

window.addEventListener("resize", (event) => {
    visibilite();
    console.log("test");
})

/* mentions obligatoires */

let mentionsObligatoires = document.getElementById("mentions")
let mentions = document.querySelector(".mentions");
let contactEspace = document.getElementById("contact");
contactEspace.style.maxHeight = "250px";
mentions.style.visibility = "hidden"

mentionsObligatoires.addEventListener("click", function () {
    if (mentions.style.visibility == "hidden" || mentions.style.visibility == "") {
        mentions.style.visibility = "visible";
        contactEspace.style.maxHeight = "550px";
    } else {
        mentions.style.visibility = "hidden";
        contactEspace.style.maxHeight = "200px";
    }
})