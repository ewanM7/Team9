src = "https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"

//Stops Ajax from ating asynchronously.
$.ajaxSetup({
    async: false
});

// Gets the data from the JSON file and stores it in an array.
function getData(name) {

    var url;

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

    //console.log(url);

    var values = [];
    var average;

    $.getJSON(url, function (data) {

        $.each(data, (key, entry) => {

            $.each(entry, function (key2, entry2) {

                if (!isNaN(entry2)) {

                    values.push(entry2);
                    //console.log("pushed");
                }
                return;


            })

        });


    });

    return values;

}

//Gets the average of the data in the array.
function getDataAverage(name) {


    var values = getData(name);
    var average;

    var total = 0;
    for (var i = 0; i < values.length; i++) {
        total += values[i];
    }
    average = total / values.length;
    average = average.toFixed(2);

    return average;


}

//Gets the highest value in the array;
function getHighestValue(name) {

    var values = getData(name);

    for (var i = 0; i < values.length; i++) {
        //console.log(values[i]);
    }

    var highest = Math.max(...values);
    highest = highest.toFixed(2)
    console.log ("highest is " + highest);
    
    return highest;
   

}

//Gets the lowest value in the array;
function getLowestValue(name) {

    var values = getData(name);

    for (var i = 0; i < values.length; i++) {
      //  console.log(values[i]);
    }

    var lowest = Math.min(...values);
    lowest = lowest.toFixed(2)
    console.log ("lowest is " + lowest);
    return lowest;

}

