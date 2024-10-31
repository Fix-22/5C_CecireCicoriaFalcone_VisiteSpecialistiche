export const generateReservationForm = (parentElement) => {
    let configuration;
    let callback;
    let type;

    return {
        build: (inputConfiguration) => {
            configuration = inputConfiguration;
        },
        onsubmit: (inputCallback) => {
            callback = inputCallback;
        },
        render: () => {
            let html = '<form id="reservationForm" class="container"><label>Data</label><input type="date" id="dateInput" class="form-control"><label>Ora</label><select id="hourInput" class="form-select">';
            
            html += configuration.map(e => '<option value="' + e + '">' + e + '</option>').join("")
                    + '</select>'
                    + '<label>Nominativo</label><input type="text" id="nameInput" class="form-control">'
                    + '<label id="resultLabel"></label>'
                    + '</form>';
            
            parentElement.innerHTML = html;

            const submitButton = document.querySelector("#submitButton");
            
            submitButton.onclick = () => {
                // struttura dati con i valori della form
                let dateVal = document.getElementById("dateInput").value.split("-");
                let hourVal = document.getElementById("hourInput").value;
                let nameVal = document.getElementById("nameInput").value;

                const key = type + "-" + parseInt(dateVal[2]) + "" + parseInt(dateVal[1]) + "" + dateVal[0] + "-" + hourVal;
                const reservation = {}
                reservation[key] = nameVal;
                
                callback(reservation);
            };
        },
        setStatus: (status) => {
            if (status) {
                document.getElementById("resultLabel").innerText = "OK";
            }
            else {
                document.getElementById("resultLabel").innerText = "KO";
            }
        },
        setType: (inputType) => {
            type = inputType;
        },
        clear: () => {
            document.querySelectorAll(".form-control").forEach(e => e.value = "");
            document.querySelector("#hourInput").value = configuration[0];
        }
    };
};