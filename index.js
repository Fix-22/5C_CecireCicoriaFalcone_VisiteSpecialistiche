import {generateReservationForm} from "./formComponent/formComponent.js";

const modalBody = document.getElementById("modalBody");

const reservationForm = generateReservationForm(modalBody);
reservationForm.build([8, 9, 10, 11, 12]);
reservationForm.render();