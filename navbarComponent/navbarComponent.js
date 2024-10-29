export const generateNavbar = (parentElement) => {
    let configuration;

    return {
        build: (inputConfiguration) => {
            configuration = inputConfiguration;
        },
        render: () => {
            let html = `
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
            `;

            parentElement.innerHTML = html;
        }
    };
};