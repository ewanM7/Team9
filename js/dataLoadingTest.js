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
    // console.log("highest is " + highest);

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
    //console.log("lowest is " + lowest);
    return lowest;

}

function getHigh(name) {


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

    var values = [];

    $.getJSON(url, function (data) {

        /*var data = JSON.parse(data);
       // function getMinY() {
            low = data.reduce((min, p) => p.y < min ? p.y : min, data[0].y);
            console.log(low);
          //}
          function getMaxY() {
            high = data.reduce((max, p) => p.y > max ? p.y : max, data[0].y);
          }*/

        let obj = data;

        let arr = Object.values(obj);
        let min = Math.min.apply(null, arr);
        let max = Math.max(...arr);

        console.log(`Min value: ${min}, max value: ${max}`)

        


        room1 = [];


        $.each(data, (key, entry) => {

            console.log("Entry " + entry["1"]["00:00"]);
            room1.push(entry["1"]);
            

            //console.log( Math.max.apply(Math, data.entry.map(function(o) { return o.room; })))
            
            //console.log(entry.room);

            $.each(entry, function (key2, entry2) {

                //console.log(key2);
                console.log("entry " + entry2);
                //console.log(Math.max.apply(Math, key2.map(function (o) { return o.room; })))
                //console.log ("key :" + key2);

                if (!isNaN(entry2)) {

                    values.push(entry2);
                    //console.log("pushed");
                }
                return;

                


            })

        });

        console.log("length : " + room1.length);
        for (var i = 0; i < room1.length; i++) {
            console.log(room1[i]);
            
        }


    });

    return values;


}

