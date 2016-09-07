
$(document).ready(function() {

// SETUP VARIABLES
// ==========================================================
var authKey = "SS4xBWqKX4WwzmW6";
var database = firebase.database();
// These variables will hold the results we get from the user's inputs via HTML
var queryTerm 	= "";
var numResults 	= 5;
var startDate 	= 0;
var endDate		= 0;
var location = "";
//var queryURL = "https://api.eventful.com/jsonp/events/search?location=raleigh&category=music&date=future&app_key=SS4xBWqKX4WwzmW6";
// Array to hold the various events info
var eventsCounter = 0;
var numResults = 5;
var token = '';







$("#runSearch").on("click", function(){
		// Grabs user input
		console.log("Processing the Click");
		var tripname = $("#tripNameInput").val().trim();
		var destination = $("#destinationInput").val().trim();
	//	var startDate = moment($("#startDateInput").val().trim(), "DD/MM/YY").format("X")
	//    var endDate = moment($("#endDateInput").val().trim(), "DD/MM/YY").format("X")
	    var genre = $("#genreInput").val().trim();


	    startDate = $('#startDateInput').val().trim();
	    endDate = $('#endDateInput').val().trim();
		// Creates local "temporary" object for holding employee data
		var newTrip = {
			trip:  tripname,
			dest:  destination,
			start: startDate,
			end: endDate,
			cat:  genre
		} //object
	    console.log("pushing to the database");
		database.ref().push(newTrip);
		console.log(tripname);
		console.log(destination);
		console.log(startDate);
		console.log(endDate);
	    console.log(genre);
		alert("Trip successfully added");
		// Clears all of the text-boxes
		$("tripNameInput").val("");
		$("destinationInput").val("");
		$("#startDateInput").val("");
		$("#endDateInput").val("");
	    $("#genreInput").val("");
	    console.log(" going to user input");
	//    destination = "&" + destination; 
	    console.log("destination for query: ",destination);
	    var queryURLbase = "https://api.eventful.com/jsonp/events/search?&category=music&date=future&app_key=SS4xBWqKX4WwzmW6&location=" ;
	    var queryURL = queryURLbase + destination;
	    console.log("queryURL = ",queryURL);
		// Prevents moving to new page
	//	return false;
	var queryURLbase = "https://api.eventful.com/jsonp/events/search?&category=music&date=future&app_key=SS4xBWqKX4WwzmW6&location=" ;
		runQuery();
   }); //on click

function setHeader(xhr) {
       xhr.setRequestHeader('Authorization', token);
     }  //end function


function runQuery() {
//	var queryURL = "https://api.eventful.com/jsonp/events/search?location=raleigh&category=music&date=future&app_key=SS4xBWqKX4WwzmW6";
		var queryURLbase = "https://api.eventful.com/jsonp/events/search?&category=music&date=future&app_key=SS4xBWqKX4WwzmW6&location=" ;
	    var queryURL = queryURLbase + destination;

    $.ajax({
            url: queryURL,
            method: 'GET',           
            crossDomain: true,
            dataType: 'jsonp',
            contentType: "application/jsonp; charset=utf-8",
            async:false,
            success: function() { alert("Success"); },
            error: function() { alert('Failed!'); },
            beforeSend: setHeader
    }) // ajax
                 
        .done(function(response) {
console.log(response);
            console.log("first event: ",response.events.event[0].city_name);
            console.log("first event: ",response.events.event[0].title);
            console.log("first event: ",response.events.event[0].venue_name);
      
            console.log("second event: ",response.events.event[1].city_name);
            console.log("second event: ",response.events.event[1].title);
            console.log("second event: ",response.events.event[1].venue_name);       

            console.log("third event: ",response.events.event[2].city_name);
            console.log("third event: ",response.events.event[2].title);
            console.log("third event: ",response.events.event[2].venue_name);

            console.log("fourth event: ",response.events.event[3].city_name);
            console.log("fourth event: ",response.events.event[3].title);
            console.log("fourth event: ",response.events.event[3].venue_name);

            console.log("fifth event: ",response.events.event[4].city_name);
            console.log("fifth event: ",response.events.event[4].title);
            console.log("fifth event: ",response.events.event[4].venue_name);


console.log("entering the for loop");



$("#eventTable > tbody").append("<tr class='active'><td>" + 
	response.events.event[eventsCounter].city_name  + "</td><td>"  +
    response.events.event[eventsCounter].title + "</td><td>" +  
    response.events.event[eventsCounter].start_time  + "</td><td>" +
    response.events.event[eventsCounter].venue_name + "</td><td>" + 
    "</td></tr>");

        }) //.done

		     console.log("out of the for loop");
		     console.log("ending the load page function");
		     console.log("ending run query");


}



runQuery();

}) //document.ready
 