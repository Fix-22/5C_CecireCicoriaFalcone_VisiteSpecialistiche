import {generateReservationForm} from "./formComponent/formComponent.js";

const modalBody = document.getElementById("modalBody");
const clearFormButtons = document.querySelectorAll(".clearForm");

const reservationForm = generateReservationForm(modalBody);
reservationForm.build([8, 9, 10, 11, 12]);
reservationForm.render();
reservationForm.onsubmit(r => console.log(r));

clearFormButtons.forEach(b => b.onclick = () => reservationForm.clear());