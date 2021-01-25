let hamburgerElt = document.querySelector(".fa-bars");
let isMenuLS = false;
let contentMenuLSDom;

const createMenuLSDom = () => {
    const menuLSDom = () => {
        contentMenuLSDom = document.createElement("ul");
        contentMenuLSDom.style.display = "none";
        contentMenuLSDom.style.position = "absolute";
        contentMenuLSDom.classList.add("menuLittleScreen");
        contentMenuLSDom.innerHTML = `
        <li><a href="index.html"> Home Page </a></li>
        <li><a href="afdas.html"> Actualité / AFDAS </a></li>
        <li><a href="afest.html"> Actualité / AFEST </a></li>
        <li><a href="#accompagnements"> Interventions </a></li>
        <li><a href="#sectionTrois"> Présentation </a></li>
        <li><a href="#veille"> Veille </a></li>
        <li><a href="#contact"> Contact </a></li>
       `;
        return contentMenuLSDom;
    }
    const lSDOM = document.querySelector('.titleBar');
    lSDOM.append(menuLSDom());
}

createMenuLSDom();
const menuLS = hamburgerElt.addEventListener("click", (e) => {
    let listMenu = document.querySelector(".menuLittleScreen");
    if (isMenuLS) {
        listMenu.style.display = "none ";
    } else {
        listMenu.style.display = "block ";
    }
    isMenuLS = !isMenuLS;
})

document.querySelector("#page").addEventListener("click", (e) => {
    let listMenu = document.querySelector(".menuLittleScreen");
    if (isMenuLS) {
        listMenu.style.display = "none ";
        isMenuLS = !isMenuLS;
    }
})

function resize() {
    let contactEspace = document.getElementById("contact");
    if (screen.width < 768) {
        contactEspace.style.maxHeight = "450px";
    } else {
        contactEspace.style.maxHeight = "250px";
    }
}

window.addEventListener("resize", resize);

let mentionsObligatoires = document.getElementById("mentions");
let mentions = document.querySelector(".mentions");
let contactEspace = document.getElementById("contact");
mentions.style.visibility = "hidden";
resize();



mentionsObligatoires.addEventListener("click", function () {
    if (screen.width < 768) {
        console.log(screen.width);
        if (mentions.style.visibility == "hidden" || mentions.style.visibility == "") {
            mentions.style.visibility = "visible";
            contactEspace.style.maxHeight = "700px";
        } else {
            mentions.style.visibility = "hidden";
            contactEspace.style.maxHeight = "450px";
        }
    } else {
        if (mentions.style.visibility == "hidden" || mentions.style.visibility == "") {
            mentions.style.visibility = "visible";
            contactEspace.style.maxHeight = "600px";
        } else {
            mentions.style.visibility = "hidden";
            contactEspace.style.maxHeight = "250px";
        }
    }
})