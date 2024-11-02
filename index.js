import {generateFetchComponent} from "./fetchComponent/fetchComponent.js";
import {generateReservationForm} from "./formComponent/formComponent.js";
import {generateNavbar} from "./navbarComponent/navbarComponent.js";
import {generateButtonComponent} from "./buttonComponent/buttonComponent.js";
import { generateTable } from "./tableComponent/tableComponent.js";

const modalBody = document.getElementById("modalBody");
const navbarContainer = document.getElementById("navbarContainer");
const tableContainer = document.getElementById("tableContainer");

let confFileContent;
const hours = [8, 9, 10, 11, 12];
const days = ["Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì"];

const componenteFetch = generateFetchComponent() ;
const componentTable = generateTable(tableContainer);
const reservationForm = generateReservationForm(modalBody);
const navbar = generateNavbar(navbarContainer);
const prevButton = generateButtonComponent(prevButtonContainer) ;
const nextButton = generateButtonComponent(nextButtonContainer) ;

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
            componentTable.setData(r ,category)
            componentTable.render();
        });
    });
    reservationForm.setType(navbar.getCurrentCategory());
    
    componentTable.build(hours, days);
    componenteFetch.getData("clinica").then(data => {
        console.log(data)
        componentTable.setData(data, navbar.getCurrentCategory());
        componentTable.render();
    });

    reservationForm.build(hours);
    reservationForm.render();
    reservationForm.onsubmit(r => {
        if (componentTable.add(r)) {
            reservationForm.setStatus(true);
            componentTable.setData(componentTable.getData(), navbar.getCurrentCategory());
            componentTable.render();
            componenteFetch.setData("clinica", componentTable.getData()) ;
        }
        else {
            reservationForm.setStatus(false);
        }
    });

    prevButton.build('Settimana precedente') ;
    nextButton.build('Settimana\nsuccessiva') ;

    prevButton.render() ;
    prevButton.onsubmit(() => {
        componentTable.previus()
        componentTable.setData(componentTable.getData(), navbar.getCurrentCategory());  
        componentTable.render()
    }) ;

    nextButton.render() ;
    nextButton.onsubmit(() => {
        componentTable.next()
        componentTable.setData(componentTable.getData(), navbar.getCurrentCategory());  
        componentTable.render()
    }) ;
});