src = "https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"

$.ajaxSetup({
    async: false
  });

var url;


function getDataAverage(name) {

    var values = [];
    var average;
    

    switch (name) {
        case "Temperature":
            url = 'Datasets/JSON/temperature.json';
            break;
        case "Bins":
            url = 'Datasets/JSON/bin.json';
            break;
        case "CO2":
            url = 'Datasets/JSON/co2.json';
            break;
        case "Electricity":
            url = 'Datasets/JSON/electricity.json';
            break;
        case "Gas":
            url = 'Datasets/JSON/gas.json';
            break;
        case "Humidity":
            url = 'Datasets/JSON/humidity.json';
            break;
    }

    $.getJSON(url, function (data) {

        $.each(data, (key, entry) => {

            $.each(entry, function (key2, entry2) {

                if (!isNaN(entry2)) {

                    values.push(entry2);
                }
                return;


            })


            for (var i = 0; i < values.length; i++) {

            }

        });
       // console.log("length is " + values.length);


        var total = 0;
        for (var i = 0; i < values.length; i++) {
            total += values[i];
        }
        average = total / values.length;
        average = average.toFixed(2);


        //console.log("average is " + average);
        console.log("average is " + average);
        return average;

    });
    
    console.log("average 2 is " + average);
    return average;


}