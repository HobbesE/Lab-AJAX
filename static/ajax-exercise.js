"use strict";


// PART 1: SHOW A FORTUNE

function showFortune(evt) {

    //make get request at /fortune route and return response
    $.get('/fortune', (response) => {
        //take response and put in fortune-text div
        $('#fortune-text').html(response);
    });
}

// when user CLICKS on get-fortune-button, populate response from 
// ('/fortune) path into fortune-text HTML div 
$('#get-fortune-button').on('click', showFortune);
  

// PART 2: SHOW WEATHER

function showWeather(evt) {
    evt.preventDefault();

    let url = "/weather.json";
    // key-value pair
    let formData = {"zipcode": $("#zipcode-field").val()};

    //res = response from jsonify() return statement which is basically a dict
    $.get(url, formData, (res) => {
        //we can key into json object with 'forecast'
        $("#weather-info").html(res.forecast);
    });
    
    //make get request from /weather
    //return response (just the forecast from WEATHER dict)
    //put response in #weather-info div

}
// when user clicks weather-form button ("Get It")
// then call showWeather function
$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();

    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

$("#order-form").on('submit', orderMelons);


