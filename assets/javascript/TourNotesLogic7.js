
$(document).ready(function() {

// SETUP VARIABLES
// ==========================================================
var authKey = "SS4xBWqKX4WwzmW6";
var database = firebase.database();
// These variables will hold the results we get from the user's inputs via HTML
var queryTerm 	= "";
var numResults 	= 5;
//var startDate 	= 0;
//var endDate		= 0;
var location = "";
//var queryURL = "https://api.eventful.com/jsonp/events/search?location=raleigh&category=music&date=future&app_key=SS4xBWqKX4WwzmW6";
// Array to hold the various events info
var eventsCounter = 0;
var numResults = 5;
var token = '';


function runQuery() {
//	var queryURL = "https://api.eventful.com/jsonp/events/search?location=raleigh&category=music&date=future&app_key=SS4xBWqKX4WwzmW6";
	    $("#runSearch").on("click", function(){
		// Grabs user input
		console.log("Processing the Click");
//		var tripname = $("#tripNameInput").val().trim();
		var destination = $("#startPnt").val().trim();
	    var genre = $("#genreInput").val().trim();
	    var startDate = $('#startDate').val().trim();
//	    var endDate = $('#endDateInput').val().trim();
	    var keywords = "&keywords=" + genre;
	    console.log(" going to user input");
	    destination = "&location=" + "'" + destination + "'";       
//	    eventDate = "&t=" + startDate + "-" + startDate;
	//     eventDate = "&start_time=";
	//     eventDate = eventDate + startDate;
	 //    eventDate = eventDate + "-";
	   //  eventDate = eventDate +  endDate;
	 //  eventDate = "&date=today";
	//   eventDate = '&date=2016-09-30'; // works except for the first event response (comes up with 9/13/2016) think this is because repeating events occur in the range but may have start before
     
//   formate for Eventful API date range "2013061000-2015062000"

var startDay = startDate.replace(/-/g,"");
startDay = startDay + "00";
//var endDay = endDate.replace(/-/g,"");
//endDay = endDay + "00";
//var daterange = startDay + "-" + endDay;
//console.log("Date Range: ",daterange);

//        daterange = "&date=" + daterange;


        eventDate = "&date=" + startDate;
	    console.log("Event date: ",eventDate);
	    console.log("location: ",destination);
//	    console.log("keywords: ",keywords);
	    console.log("destination for query: ",destination);
	    var queryURLbase = "https://api.eventful.com/jsonp/events/search?&category=music&app_key=SS4xBWqKX4WwzmW6";
/*	    var queryURL = queryURLbase + destination + keywords + eventDate; */
        var queryURL = queryURLbase + destination + keywords + startDay;

//var queryURL = "https://api.eventful.com/jsonp/events/search?&category=music&app_key=SS4xBWqKX4WwzmW6&location='Charlotte'&keywords=Rock&date=2016092400-2016093000"

	    console.log("queryURL = ",queryURL);
		// Prevents moving to new page
//		return false;
         // runSearch
		function setHeader(xhr) {
		       xhr.setRequestHeader('Authorization', token);
		     }  //end function setHeader
		var extrainfo ="&include=categories,tickets,price";

//		http://eventful.com/events?q=music&l=San+Diego&t=9+December+2006


//		var queryURLbase = "https://api.eventful.com/jsonp/events/search?&date=future&app_key=SS4xBWqKX4WwzmW6&location=" ;
	//    var queryURL = queryURLbase + destination;
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

/*if (response.events.event[eventsCounter].performers.performer === '')
{
	alert("performer is null");
}
 else {
	performer = response.events.event[eventsCounter].performers.performer; 
	  };

*/
/*		        
		// Clears all of the text-boxes
		$("tripNameInput").val("");
		$("destinationInput").val("");
		$("#startDateInput").val("");
		$("#endDateInput").val("");
		$("#genreInput").val("");
//	    $("#keywordsInput").val(""); */
            console.log(response);
            console.log("first event: ",response.events.event[0].city_name);
            console.log("first event: ",response.events.event[0].title);
            console.log("first event: ",response.events.event[0].venue_name);
			console.log("first event: ",response.events.event[0].keywords);
			console.log("first event: ",response.events.event[0].latitude);
			console.log("first event: ",response.events.event[0].longitude);
			console.log("first event: ",response.events.event[0].start_time);
//			console.log("first event performer: ",response.events.event[0].performers.performer.name);

            console.log("second event: ",response.events.event[1].city_name);
            console.log("second event: ",response.events.event[1].title);
            console.log("second event: ",response.events.event[1].venue_name);
			console.log("second event: ",response.events.event[1].keywords);
			console.log("second event: ",response.events.event[1].latitude);
			console.log("second event: ",response.events.event[1].longitude);
			console.log("second event: ",response.events.event[1].start_time);

// load the HTML

// code for reformatting date input
var date1 = "09242016";
var month1 = date1.substr(date1.length - 8,2);
console.log("reformatted month: ",month1);
var day1 = date1.substr(date1.length -6,2);
console.log("reformatted day: ",day1);
var year1 = date1.substr(date1.length - 4);
console.log("reformatted year: ", year1);
var date2 = month1 + day1 + year1;
console.log("reformatted date:  ",date2);

		for (var i = 0; i < 5; i++) { 
		// separate the date from the time
		var eventDateDay = response.events.event[i].start_time
		eventDateDay  = eventDateDay.slice(0, 10);
		var eventDateTime = response.events.event[i].start_time.substr(-8, 5);
		//convert time to 12 hour format
		var eventTime12 =  moment(eventDateTime, "hh").format('h:mm a');
		eventDateTime = eventTime12;

 // dropdown1 += "<li>" + response.events.event[i].title  + response.events.event[i].venue_name + eventDateDay + eventDateTime + "</li>";

console.log("writing to the HTML");
				$("#dropdown1").html("<li>" + cityname +
				"<li>" + eventname +
				"<li>" + eventDateDay +
				"<li>" + eventDateTime +
				"<li>" + venuename + "</li>");


/* $('ul').append("<li>" + response.events.event[i].city_name + response.events.event[i].title +
 eventDateDay + eventDateTime + response.events.event[i].venue_name + "</li>"; */







/*		$("#eventTable > tbody").append("<tr class='active'><td>" + 
			response.events.event[i].city_name  + "</td><td>"  +
		    response.events.event[i].title + "</td><td>" +  
		    eventDateDay  + "</td><td>" +
		    eventDateTime  + "</td><td>" +
		    response.events.event[i].venue_name + "</td><td>" + 
		    "</td></tr>");
*/
                var performer = "Not Listed";
		 		var lati = response.events.event[i].latitude;
				var longi = response.events.event[i].longitude;
				var startd = response.events.event[i].start_time;
				var startDate = response.events.event[i].start_time;
                var venueName = response.events.event[i].venue_name;
                var genre = keywords;
                var event = response.events.event[i].title;
                var venueName = response.events.event[i].venue_name
        
		        
	            var newTrip = {
				trip:  tripname,
				event: event,
				city:  destination,
				day: eventDateDay,
				time: eventDateTime,
				venue: venueName,
				genre:  keywords,
				latitude: lati,
				longitude: longi,
				perf:  performer
			   	} //object

	    console.log("pushing to the database");
		database.ref().push(newTrip);

//		console.log("Trip: ",tripname);
		console.log("event: ",event);
		console.log("city: ",destination);
		console.log("date: ",eventDateDay);
		console.log("time: ",eventDateTime);
	    console.log("genre: ",genre);
		console.log("Lattitude: ",lati);
		console.log("longitude: ",longi);
		console.log("Performer: ",performer);
		alert("Trip successfully added");

}  //for loop

        }) //.done

		     console.log("out of the for loop");
		     console.log("ending the load page function");
		     console.log("ending run query");
})//runSearch
}// end runQuery
runQuery();
}) //document.ready
 