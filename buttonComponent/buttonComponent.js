export const generateButtonComponent = (parentElement) => {
    let nome ;
    let callback ;

    return {
        build : function(label) {
            nome = label ;
        },
        onsubmit : function(inputCallback) {
            callback = inputCallback ;
        },
        render : function() {
            let html = '<button type="button" class="btn btn-primary actionButton ' + nome + '">' + nome + '</button>' ;

            parentElement.innerHTML = html ;

            let lista = document.querySelectorAll("#" + nome) ;
            
            lista.forEach((element) => {
                element.onclick = () => {
                    callback() ;
                }
            })
        }
    }
}