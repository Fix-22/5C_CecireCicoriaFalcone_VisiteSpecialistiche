export const generateNavbar = (parentElement) => {
    let configuration;
    let callback;

    return {
        build: (inputConfiguration) => {
            configuration = inputConfiguration;
        },
        onclick: (inputCallback) => {
            callback = inputCallback;
        },
        render: () => {
            let html = '<div class="btn-group btn-group" data-toggle="buttons">';
            let first = false;

            html += configuration.map(e => {
                if (!first) {
                    first = true;
                    return '<label class="btn btn-outline-secondary active"' + 'id="label' + e + '">' + e + "</label>";
                }
                else {
                    return '<label class="btn btn-outline-secondary"' + 'id="label' + e + '">' + e + "</label>";
                }
            }).join("") + '</div>';

            parentElement.innerHTML = html;

            const labels = document.querySelectorAll("label.btn");
            
            labels.forEach(l => {
                l.onclick = () => {
                    labels.forEach(e => {
                        if (e.id !== l.id){
                            e.classList.remove("active");
                        }
                        else {
                            l.classList.add("active");
                        }
                    });
                }
            });
        }
    };
};