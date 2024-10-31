import {generateFetchComponent} from "./fetchComponent/fetchComponent.js";
import {generateReservationForm} from "./formComponent/formComponent.js";
import {generateNavbar} from "./navbarComponent/navbarComponent.js";
import { cerateTable } from "./tableComponent/tableComponent.js";

const modalBody = document.getElementById("modalBody");
const navbarContainer = document.getElementById("navbarContainer");
const tableContainer = document.getElementById("tableContainer");
const clearFormButtons = document.querySelectorAll(".clearForm");

let confFileContent;
const hours = [8, 9, 10, 11, 12];
const days = ["Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì"];

const componenteFetch = generateFetchComponent() ;
const componentTable = cerateTable(tableContainer);
const reservationForm = generateReservationForm(modalBody);

componentTable.build(hours, days);

reservationForm.build(hours);
reservationForm.render();
reservationForm.onsubmit(r => {
    console.log(r);
    //
    componenteFetch.setData("clinica", r) ;
    reservationForm.clear();
});

const navbar = generateNavbar(navbarContainer);

fetch("./conf.json")
.then(r => r.json())
.then(data => {
    confFileContent = data;

    componenteFetch.build(confFileContent["cacheToken"]) ;

    navbar.build(confFileContent["tipologie"]);
    navbar.render();
    navbar.onclick(category => {
        reservationForm.setType(category);
        componenteFetch.getData("clinica").then((r) => {
            let a = JSON.parse(r);
            componentTable.setData(a ,category)
        });
    });
    reservationForm.setType(navbar.getCurrentCategory());
    
});

clearFormButtons.forEach(b => b.onclick = () => reservationForm.clear());