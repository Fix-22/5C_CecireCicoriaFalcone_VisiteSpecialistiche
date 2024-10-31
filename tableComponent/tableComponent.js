export const cerateTable = (parentElement) => {
    let config ;
    let data = {} ;

    return {
        build : (inputConfiguration) => {
            config = inputConfiguration ;
        },
        render : () => {
            let html = '<table class="table"> <thead><td>Data</td>' ;

            //headers tabella
            html += Object.keys(config).map(element => '<td>' + element.substring(0, 1).toUpperCase() + element.substring(1, element-length)).join("") + '</thead>' ;

            //dati tabella
            

            parentElement.innerHTML = html ;
        },
        add : (reservation) => {

        },
        setData : (inputData) => {
            
        },
        getData : () => {
            return data ;
        }
    }
}