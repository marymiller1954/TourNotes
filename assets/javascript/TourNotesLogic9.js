
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


//The following example autosaves the contents of a text field, and if the browser is accidentally refreshed, restores the text field content so that no writing is lost.

// Get the text field that we're going to track

// See if we have an autosave value
// (this will only happen if the page is accidentally refreshed)
//if (sessionStorage.getItem("autosave")) {
  // Restore the contents of the text field
//}
 
// Listen for changes in the text field
//startpoint.addEventListener("change", function() {
  // And save the results into the session storage object
  //sessionStorage.setItem("autosave", startpoint.value);
//});



function runQuery() { 

	var destination1 = sessionStorage.destination1;
	var destination2 = sessionStorage.destination2;
	var destination3 = sessionStorage.destination3;
	var destination4 = sessionStorage.destination4;
	var destination5 = sessionStorage.destination5;
	var startDate = sessionStorage.startDate;
	var secondDate = sessionStorage.secondDate;
	var thirdDate = sessionStorage.thirdDate;
	var fourthDate = sessionStorage.fourthDate;
	var fifthDate = sessionStorage.fifthDate;
	var genre = sessionStorage.genre;

console.log("start date from session storage: ",startDate);

startDate = startDate.substring(0, 5);
startDate = startDate.replace(/-/g,"");
startDate = startDate.substring(0, 4);
console.log("start date after substring: ",startDate);
startDate = "2016" + startDate + "00";
eventDate1 = "&date=" + startDate;

secondDate = secondDate.substring(0, 5);
secondDate = secondDate.replace(/-/g,"");
startDate = startDate.substring(0, 4);
console.log("second date after substring: ",secondDate);
secondDate = "2016" + secondDate + "00";
eventDate2 = "&date=" + secondDate;

thirdDate = thirdDate.substring(0, 5);
thirdDate = thirdDate.replace(/-/g,"");
thirdDate = thirdDate.substring(0, 4);
console.log("third date after substring: ",thirdDate);
thirdDate = "2016" + thirdDate + "00";
eventDate3 = "&date=" + thirdDate;


fourthDate = fourthDate.substring(0, 5);
fourthDate = fourthDate.replace(/-/g,"");
fourthDate = fourthDate.substring(0, 4);
console.log("fourth date after substring: ",fourthDate);
fourthDate = "2016" + fourthDate + "00";
eventDate4 = "&date=" + fourthDate;


fifthDate = fifthDate.substring(0, 5);
fifthDate = fifthDate.replace(/-/g,"");
fifthDate = fifthDate.substring(0, 4);
console.log("fifth date after substring: ",fifthDate);
fifthDate = "2016" + fifthDate + "00";
eventDate5= "&date=" + fifthDate;


//var endDay = endDate.replace(/-/g,"");
//endDay = endDay + "00";
//var daterange = startDay + "-" + endDay;
//console.log("Date Range: ",daterange);

//        daterange = "&date=" + daterange;


        eventDate = "&date=" + startDate;





	console.log("entering runQuery");






//	     $("#query").on("click", function(){
		// Grabs user input
		console.log("Processing the Click");
		console.log("destination 1: ",destination1);
		console.log("destination 2: ",destination2);
		console.log("destination 3: ",destination3);
		console.log("destination 4: ",destination4);
		console.log("destination 5: ",destination5);
		console.log("date 1: ",eventDate1);
	    console.log("date 2: ",eventDate2);
	    console.log("date 3: ",eventDate3);
	    console.log("date 4: ",eventDate4);
	    console.log("date 5: ",eventDate5);
	    console.log("genre: ",genre);




 	    var destination1 = destination1.substr(0,destination1.indexOf(','));
		var destination2 = destination2.substr(0,destination2.indexOf(','));
		var destination3 = destination3.substr(0,destination3.indexOf(','));
		var destination4 = destination4.substr(0,destination4.indexOf(','));
		var destination5 = destination5.substr(0,destination5.indexOf(','));
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

		var startDate = "2016" + startDate + "00";
		var secondDate = "2016" + secondDate + "00";
		var thirdDate = "2016" + thirdDate + "00";
		var fourthDate = "2016" + fourthDate + "00";
		var fifthDate = "2016" + fifthDate + "00";

		console.log("start date: ",startDate);


   		var extrainfo ="&include=categories,tickets,price";
	    var queryURLbase = "https://api.eventful.com/jsonp/events/search?&category=music&app_key=SS4xBWqKX4WwzmW6";
		console.log("queryURLbase: ",queryURLbase);
		for (var i = 0; i < 5; i++) { 
			console.log("entering the for loop");

			if (i==0) {
				dest = destination1;
				date = startDate;
				var queryURL = queryURLbase + destination1 + eventDate1;
			}
			else if (i==1)  {
				dest = destination2;
				date = secondDate;
				var queryURL = queryURLbase + destination2 + eventDate2;
			}
			else if (i==2)  {
				dest = destination3;
				date = thirdDate;
				var queryURL = queryURLbase + destination3 + eventDate3;
			}
			else if (i==3)  {
				dest = destination4;
				date = fourthDate;
				var queryURL = queryURLbase + destination4 + eventDate4;
			}
			else if (i==4)  {
				dest = destination5;
				date = fifthDate;
				var queryURL = queryURLbase + destination5 + eventDate5;
			};


console.log("queryURL: ",queryURL);
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

        	

			console.log("start day is now: ",startDate);
				var performer = "Not Listed";
		 		var lati = response.events.event[i].latitude;
				var longi = response.events.event[i].longitude;
				var startd = response.events.event[i].start_time;
				var startDate = response.events.event[i].start_time;
				console.log("event date from Eventful",response.events.event[i].start_time);
                var event = response.events.event[i].title;
                var venueName = response.events.event[i].venue_name;
                var cityname = response.events.event[i].city_name;
                var userid = "Mary";
                var eventDateDay = startDate.slice(5,5);
                var eventDateTime = startDate.slice(11,5);	
                console.log("eventDateDay after slicing: ",eventDateDay);
                eventDateTime = moment(eventDateTime).format('hh:mm a');
                console.log("event time after slicing: ",eventDateTime);
                console.log("event time: ",eventDateTime);
                console.log("event day: ",eventDateDay);
                console.log(response);  


			var eventTime1 = response.events.event[0].start_time.slice(5,5);
			var startday1 = response.events.event[0].start_time.slice(2,2);


			var eventTime2 = response.events.event[1].start_time.slice(5,5);
			var startday2 = response.events.event[1].start_time.slice(2,2);



			var eventTime3 = response.events.event[2].start_time.slice(5,5);
			var startday3 = response.events.event[2].start_time.slice(2,2);
//
			var eventTime4 = response.events.event[3].start_time.slice(5,5);
			var startday4 = response.events.event[3].start_time.slice(2,2);
//

			var eventTime5 = response.events.event[4].start_time.slice(5,5);
			var startday5 = response.events.event[4].start_time.slice(2,2);


			console.log("start date 1 aftr slicing:  ",eventTime1);
			console.log("start date 1:  ",eventTime2);
			console.log("start date 1:  ",eventTime3);
			console.log("start date 1:  ",eventTime4);
			console.log("start date 1:  ",eventTime5);


sessionStorage.setItem("eventtime1",eventTime1);
sessionStorage.setItem("startmonth2",eventTime2);						
sessionStorage.setItem("startmonth3",eventTime3);
sessionStorage.setItem("startmonth4",eventTime4);
sessionStorage.setItem("startmonth5",eventTime5);



sessionStorage.setItem('genre',genre);
sessionStorage.setItem('event day',eventDateDay);
sessionStorage.setItem('destination2',destination2);
sessionStorage.setItem('destination3',destination3);
sessionStorage.setItem('destination4',destination4);
sessionStorage.setItem('destination5',destination5);
sessionStorage.setItem('eventDate1',startDate);
sessionStorage.setItem('eventdate2',secondDate);
sessionStorage.setItem('eventdate3',thirdDate);
sessionStorage.setItem('eventdate4',fourthDate);
sessionStorage.setItem('eventdate5',fifthDate);    
/* load the HTML	
	            console.log("writing to the HTML");
				$("#dropdown1").html("<li>" + cityname +
				"<li>" + event +
				"<li>" + eventDateDay +
				"<li>" + eventDateTime +
				"<li>" + venueName + "</li>");   */

            	var newTrip = {
//				trip:  tripname,
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
 //})   // on click

}// end runQuery */
console.log("going to run query");
runQuery();

function errormsg() {
              var modal = document.getElementById('myModal');
              var span = document.getElementsByClassName("close")[0];
               modal.style.display = "block";

             span.onclick = function() {
              modal.style.display = "none";
             }


             window.onclick = function(event) {
              if (event.target == modal) {
                  modal.style.display = "none";
              } //end if
            }  //end onclick
          }  //end function error message



}) //document.ready
 