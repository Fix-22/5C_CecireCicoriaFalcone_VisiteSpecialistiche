import {generateReservationForm} from "./formComponent/formComponent.js";
import {generateNavbar} from "./navbarComponent/navbarComponent.js";

const modalBody = document.getElementById("modalBody");
const navbarContainer = document.getElementById("navbarContainer");
const clearFormButtons = document.querySelectorAll(".clearForm");

let confFileContent;
const hours = [8, 9, 10, 11, 12];

fetch("./conf.json")
.then(r => r.json())
.then(data => {
    confFileContent = data;

    const navbar = generateNavbar(navbarContainer);
    navbar.build(confFileContent["tipologie"]);
    navbar.render();
    navbar.onclick(category => {
        console.log(category);
    });
    console.log(navbar.getCurrentCategory());
    
});

const reservationForm = generateReservationForm(modalBody);
reservationForm.build(hours);
reservationForm.render();
reservationForm.onsubmit(r => console.log(r));

clearFormButtons.forEach(b => b.onclick = () => reservationForm.clear());