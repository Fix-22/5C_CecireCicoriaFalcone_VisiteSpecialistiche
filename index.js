import {generateReservationForm} from "./formComponent/formComponent.js";
import {generateNavbar} from "./navbarComponent/navbarComponent.js";

const modalBody = document.getElementById("modalBody");
const navbarContainer = document.getElementById("navbarContainer");
const clearFormButtons = document.querySelectorAll(".clearForm");

let confFileContent;
const hours = [8, 9, 10, 11, 12];
const days = ["Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì"];

const reservationForm = generateReservationForm(modalBody);
reservationForm.build(hours);
reservationForm.render();
reservationForm.onsubmit(r => {
    console.log(r)
    reservationForm.clear();
});

const navbar = generateNavbar(navbarContainer);

fetch("./conf.json")
.then(r => r.json())
.then(data => {
    confFileContent = data;

    navbar.build(confFileContent["tipologie"]);
    navbar.render();
    navbar.onclick(category => {
        reservationForm.setType(category);
    });
    reservationForm.setType(navbar.getCurrentCategory());
    
});

clearFormButtons.forEach(b => b.onclick = () => reservationForm.clear());