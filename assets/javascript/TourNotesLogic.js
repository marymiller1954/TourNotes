
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
var queryURL = "https://api.eventful.com/jsonp/events/search?location=raleigh&category=music&date=future&app_key=SS4xBWqKX4WwzmW6";
// Array to hold the various events info
var eventsCounter = 0;
var numResults = 5;
var token = '';



function setHeader(xhr) {
       xhr.setRequestHeader('Authorization', token);
     }  //end function


function runQuery() {
	
$("#runSearch").on("click", function(){
		// Grabs user input
		console.log("Processing the Click");
		var tripname = $("#tripNameInput").val().trim();
		var destination = $("#destinationInput").val().trim();
		var startDate = moment($("#startDateInput").val().trim(), "DD/MM/YY").format("X")
	    var endDate = moment($("#endDateInput").val().trim(), "DD/MM/YY").format("X")
	    var genre = $("#genreInput").val().trim();
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
		// Prevents moving to new page
		return false;	
   }); //on click

	var queryURL = "https://api.eventful.com/jsonp/events/search?location=raleigh&category=music&date=future&app_key=SS4xBWqKX4WwzmW6";

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
  
            console.log("sixth event: ",response.events.event[5].city_name);
            console.log("sixth event: ",response.events.event[5].title);
            console.log("sixth event: ",response.events.event[5].venue_name);       

            console.log("seventh event: ",response.events.event[6].city_name);
            console.log("seventh event: ",response.events.event[6].title);           
            console.log("seventh event: ",response.events.event[6].venue_name);

            console.log("eighth event: ",response.events.event[7].city_name);
            console.log("eighth event: ",response.events.event[7].title);
            console.log("eighth event: ",response.events.event[7].venue_name);

            console.log("ninth event: ",response.events.event[8].city_name);
            console.log("ninth event: ",response.events.event[8].title);
            console.log("ninth event: ",response.events.event[8].venue_name);

            console.log("tenth event: ",response.events.event[9].city_name);
            console.log("tenth event: ",response.events.event[9].title);
            console.log("tenth event: ",response.events.event[9].venue_name);


				for (var i=0; i<numResults; i++) {
					// Add to the Article Counter (to make sure we show the right number)
					console.log("in the for loop, i = ",i);
					eventsCounter++;
					// Create the HTML Well (Section) and Add the Article content for each
					console.log("in the well section, eventsCounter = ",eventsCounter);
					var wellSection = $("<div>");
					wellSection.addClass('well');
					wellSection.attr('id', 'articleWell-' + eventsCounter)

						$('#wellSection').append(wellSection);
						//	$("#articleWell-"+ eventsCounter).append('<h3 class="articlesline"><span class="label label-primary">' + eventsCounter + '</span><strong>   ' +
						//	 response.events.event[eventsCounter].title + "</strong></h3>");
						//  console.log("first event: ",response.events.event[0].title);
						$("#articleWell-"+ eventsCounter).append('<h5>Event name: ' + response.events.event[eventsCounter].title + "</h5>");				
							$("#articleWell-"+ eventsCounter).append('<h5>Venue name: ' + response.events.event[eventsCounter].venue_name + "</h5>");
							// Log the first event's venue to console.
							console.log("event venue:  ",response.events.event[eventsCounter].venue_name);
							// Then display the remaining fields in the HTML (Section Name, Date, URL)
							$("#articleWell-"+ eventsCounter).append('<h5>Location: ' + response.events.event[eventsCounter].city_name + "</h5>");
				} // for loop
        })  //.done

		     console.log("out of the for loop");
		     console.log("ending the load page function");
		     console.log("ending run query");

} // end run query




	

runQuery();


}) //document.ready
 