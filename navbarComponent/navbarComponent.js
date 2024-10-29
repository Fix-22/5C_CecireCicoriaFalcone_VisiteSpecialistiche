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

            html += configuration.map(e => '<label class="btn btn-outline-secondary"><input type="radio" name="options" autocomplete="off">' + e + "</label>").join("") + '</div>';

            parentElement.innerHTML = html;

            const radioButtons = document.querySelectorAll("input[name=options]");
            radioButtons.forEach(b => {
                b.onclick = () => {
                    callback();
                };
            });
        }
    };
};