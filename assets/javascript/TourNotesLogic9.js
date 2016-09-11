
$(document).ready(function() {

// SETUP VARIABLES
// ==========================================================
var authKey = "SS4xBWqKX4WwzmW6";
var database = firebase.database();
// These variables will hold the results we get from the user's inputs via HTML
var queryTerm 	= "";
var numResults 	= 5;
var location = "";
var eventsCounter = 0;
var numResults = 5;
var token = '';
console.log("starting the program!");

function runQuery() { 
	console.log("entering runQuery");

	     $("#runSearch").on("click", function(){
		// Grabs user input
		console.log("Processing the Click");
		var genre = $("#genreInput").val().trim();
		console.log("genre: ",genre);
		var destination1 = $("#startPnt").val().trim();
		var destination2 = $("#secondPnt").val().trim();
		var destination3 = $("#thirdPnt").val().trim();
		var destination4 = $("#fourthPnt").val().trim();
		var destination5 = $("#endDate").val().trim();
 	    var destination1 = destination1.substr(0,str.indexOf(' '));
		var destination2 = destination2.substr(0,str.indexOf(' '));
		var destination3 = destination3.substr(0,str.indexOf(' '));
		var destination4 = destination4.substr(0,str.indexOf(' '));
		var destination5 = destination5.substr(0,str.indexOf(' '));
		var destination1 = "&location=" + "'" + destination1 + "'"; 
		var destination2 = "&location=" + "'" + destination2 + "'"; 
		var destination3 = "&location=" + "'" + destination3 + "'";
		var destination4 = "&location=" + "'" + destination4 + "'";
		var destination5 = "&location=" + "'" + destination5 + "'";	
		console.log(destination1);
		console.log(destination2);
		console.log(destination3);
		console.log(destination4);
		console.log(destination5);		
		var startDate = $('#startDate').val().trim();
		var secondDate = $('#secondDate').val().trim();
		var thirdDate = $('#thirdDate').val().trim();
		var fourthDate = $('#fourthDate').val().trim();
		var endDateInput = $('#endDatet').val().trim();
		var startDate = "2016" + startDate + "00";
		var secondDate = "2016" + secondDate + "00";
		var thirdDate = "2016" + thirdDate + "00";
		var fourthDate = "2016" + fourthDate + "00";
		var endDateInput = "2016" + endDate + "00";
   		var extrainfo ="&include=categories,tickets,price";
	    var queryURLbase = "https://api.eventful.com/jsonp/events/search?&category=music&app_key=SS4xBWqKX4WwzmW6";

		for (var i = 0; i < 5; i++) { 
			console.log("entering the for loop");
			if (i=0) {
				dest = destination1;
				date = startDate;
				var queryURL = queryURLbase + destination1 + startDate;
			};
			if (i=1)  {
				dest = destination2;
				date = secondDate;
				var queryURL = queryURLbase + destination2 + secondDate;
			};
			if (i=2)  {
				dest = destination3;
				date = thirdDate;
				var queryURL = queryURLbase + destination3 + thirdDate;
			};
			if (i=3)  {
				dest = destination4;
				date = fourthDate;
				var queryURL = queryURLbase + destination4 + fourthDate;
			}
			if (i=4)  {
				dest = destination5;
				date = fifthDate;
				var queryURL = queryURLbase + destination5 + fifthDate;
			};


		function setHeader(xhr) {
		       xhr.setRequestHeader('Authorization', token);
	    }  //end function setHeader
		console.log("making the query: ",queryURL);
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
				var performer = "Not Listed";
		 		var lati = response.events.event[i].latitude;
				var longi = response.events.event[i].longitude;
				var startd = response.events.event[i].start_time;
				var startDate = response.events.event[i].start_time;
                var venueName = response.events.event[i].venue_name;
                var event = response.events.event[i].title;
                var venueName = response.events.event[i].venue_name;
                var cityname = response.events.event[i].city_name;
                var userid = "Mary";		        
// load the HTML	
	            console.log("writing to the HTML");
				$("#dropdown1").html("<li>" + cityname +
				"<li>" + eventname +
				"<li>" + eventDateDay +
				"<li>" + eventDateTime +
				"<li>" + venuename + "</li>");

            	var newTrip = {
				trip:  tripname,
				event: event,
				city:  cityname,
				day: eventDateDay,
				time: eventDateTime,
				venue: venueName,
				genre:  genre,
				latitude: lati,
				longitude: longi,
				perf:  performer,
				userid: userid,
			   	}; //object

	    console.log("pushing to the database");
		database.ref().push(newTrip);
console.log("leaving the for loop");
     }) //for loop

        } //.done
        console.log("ending the on click");
})// on click
}// end runQuery */
console.log("going to run query");
runQuery();

}) //document.ready
 