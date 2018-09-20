src = "https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"

//Stops Ajax from acting asynchronously.
$.ajaxSetup({
    async: false
});

// Gets the data from the JSON file and stores it in an array.
function getData(name) {

    let url;

    switch (name) {

        case "Temperature":
            url = 'Datasets/JSON/temperature.json';
            break;
        case "Waste":
            url = 'Datasets/JSON/bin.json';
            break;
        case "CO2":
            url = 'Datasets/JSON/co2.json';
            break;
        case "Energy":
            url = 'Datasets/JSON/electricity.json';
            break;
        case "Gas":
            url = 'Datasets/JSON/gas.json';
            break;
        case "Humidity":
            url = 'Datasets/JSON/humidity.json';
            break;
    }

    let values = [];
    let rooms = [];
    return $.getJSON(url, function (data) {
        return data;
    }).responseJSON;


}

function averageHelper(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total / arr.length;
}

function getRoomData(data, roomName) {
    for (let i = 0; i < data.length; i++) {
        if (data[i].room === roomName) {
            return data[i];
        }
    }
}

//Gets the average of the data in the array.
function getDataAverage(name) {
    let values = getData(name);
    let average;
    let divisor = 0;
    let total = 0;
    for (let i = 0; i < values.length; i++) {
        $.each(values[i], (key, entry) => {
            if (!isNaN(entry)) {
                divisor++;
                total += Number(entry);
            }
        });
    }
    average = total / divisor;
    average = average.toFixed(2);
    return average;
}

function toJustData(obj) {
    let justData = [];
    $.each(obj, (key, entry) => {
        if (!isNaN(entry)) {
            justData.push(entry);
        }
    });
    return justData;
}

function getRoomAverages(values) {
    let roomAverages = [];
    for (let i = 0; i < values.length; i++) {
        let justData = toJustData(values[i]);
        roomAverages.push(averageHelper(justData));
    }
    return roomAverages;
}

//Gets the highest value in the array;
// All the rooms
// name - data sheet name
function getHighestValue(name) {

    let values = getData(name);

    let roomAverages = getRoomAverages(values);

    let highest = Math.max(...roomAverages);
    highest = highest.toFixed(2)
    let index = roomAverages.indexOf(Math.max(...roomAverages));

    return { room: values[index].room, value: highest };
}
// A specific room
function getHighestValue(name, room) {

    let values = getData(name);
    let roomData = getRoomData(values, room);
    let justData = toJustData(roomData);
    let highest = Math.max(...justData);
    highest = highest.toFixed(2)

    return highest;
}

//Gets the lowest value in the array;
function getLowestValue(name) {

    let values = getData(name);

    let roomAverages = getRoomAverages(values);

    let lowest = Math.min(...roomAverages);
    lowest = lowest.toFixed(2)

    let index = roomAverages.indexOf(Math.min(...roomAverages));

    return { room: values[index].room, value: lowest };

}
// A specific room
function getLowestValue(name, room) {

    let values = getData(name);

    let roomData = getRoomData(values, room);
    let justData = toJustData(roomData);
    let lowest = Math.min(...justData);
    lowest = lowest.toFixed(2)

    return lowest;
}
// Get data at specific time
function getDataAt(name, room, time) {
    let values = getData(name);

    let roomData = getRoomData(values, room);

    return roomData[time];

}

function getHigh(name) {


    let url;

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

    let values = [];

    $.getJSON(url, function (data) {

        /*let data = JSON.parse(data);
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
        for (let i = 0; i < room1.length; i++) {
            console.log(room1[i]);

        }


    });

    return values;


}

