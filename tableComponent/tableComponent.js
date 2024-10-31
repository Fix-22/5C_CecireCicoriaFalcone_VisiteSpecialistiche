export const cerateTable = (parentElement) => {
    let hours;
    let days;
    let cacheData = {};
    let currentData = {};

    let date = new Date(Date.now());

    /*
    {
        "XX/YY/ZZZZ - H": "Name"/"" 
    }
    */

    return {
        build : (newHours, newDays) => {
            hours = newHours;
            days = newDays;
            while (date.getDay() !== 1) {
                if (date.getDay() === 6 || date.getDay() === 0) {
                    date.setDate(date.getDate() + 1);
                } else {
                    date.setDate(date.getDate() - 1);
                }
            }

            console.log(date);
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
        setData : (inputData, type) => {
            //
            cacheData = inputData;
            currentData = {};

            let hold = new Date(date);

            for (let i = 0; i < days.length; i++) {

                for (let j = 0; j < hours.length; j++) {
                    let formatDate =  type + "-" + parseInt(hold.getDate()) + "" + parseInt(hold.getMonth() + 1) + "" + hold.getFullYear() + "-" + hours[j];
                    if (cacheData[formatDate]) {
                        currentData[formatDate] = cacheData[formatDate];
                    } else {
                        currentData[formatDate] = "";
                    }
                }   
                hold.setDate(hold.getDate() + 1);
                
            }

            console.log(currentData);
        },
        next : () => {
            date.setDate(date.getDate() + 7);
            while (date.getDay() !== 1) {
                date.setDate(date.getDate() - 1);
            }
            console.log(date);
        },
        previus : () => {
            date.setDate(date.getDate() - 7);
            while (date.getDay() !== 1) {
                date.setDate(date.getDate() - 1);
            }
            console.log(date);
        },
        getData : () => {
            return liveData;
        }
    }
}