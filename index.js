import {generateReservationForm} from "./formComponent/formComponent.js";

const modalBody = document.getElementById("modalBody");
const clearFormButtons = document.querySelectorAll(".clearForm");
let confFileContent;
const hours = [8, 9, 10, 11, 12];

fetch("./conf.json")
.then(r => r.json())
.then(data => {
    confFileContent = data;
});

const reservationForm = generateReservationForm(modalBody);
reservationForm.build(hours);
reservationForm.render();
reservationForm.onsubmit(r => console.log(r));

clearFormButtons.forEach(b => b.onclick = () => reservationForm.clear());