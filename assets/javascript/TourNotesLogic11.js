
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
	var startDateRange = " ";
	var secondDateRange = " ";
	var thirdDateRange = " ";
	var fourthDateRange = " ";
	var fifthDateRange = " ";

console.log("start date from session storage: ",startDate);

startDate = startDate.substring(0, 5);
startDate = startDate.replace(/-/g,"");
startDate = startDate.substring(0, 4);
startDateR = "2016" + startDate;
console.log("start date after substring: ",startDate);
console.log("start date r after substring: ",startDateR);
startDate = "&date=2016" + startDate;
eventDate1 = "&date=" + startDate;
startDateRange = startDate + "00" + "-" + startDateR + "00" ;
console.log("start date range: ",startDateRange);


secondDate = secondDate.substring(0, 5);
secondDate = secondDate.replace(/-/g,"");
secondDate = secondDate.substring(0, 4);
console.log("second date after substring: ",secondDate);
//secondDate = "2016" + secondDate;
secondDateR = "2016" + secondDate
secondDate = "&date=2016" + secondDate;
eventDate2 = "&date=" + secondDate;
secondDateRange = secondDate + "00" + "-" + secondDateR + "00";
console.log("second date range: ",secondDateRange);

thirdDate = thirdDate.substring(0, 5);
thirdDate = thirdDate.replace(/-/g,"");
thirdDate = thirdDate.substring(0, 4);
console.log("third date after substring: ",thirdDate);
//secondDate = "2016" + secondDate;
thirdDateR = "2016" + thirdDate
thirdDate = "&date=2016" + thirdDate;
eventDate3 = "&date=" + thirdDate;
thirdDateRange = thirdDate + "00" + "-" + thirdDateR + "00";
console.log("third date range: ",thirdDateRange);


fourthDate = fourthDate.substring(0, 5);
fourthDate = fourthDate.replace(/-/g,"");
fourthDate = fourthDate.substring(0, 4);
console.log("fourth date after substring: ",fourthDate);
//secondDate = "2016" + secondDate;
fourthDateR = "2016" + fourthDate
fourthDate = "&date=2016" + fourthDate;
eventDate4 = "&date=" + fourthDate;
fourthDateRange = fourthDate + "00" + "-" + fourthDateR + "00";
console.log("fourth date range: ",fourthDateRange);

fifthDate = fifthDate.substring(0, 5);
fifthDate = fifthDate.replace(/-/g,"");
fifthDate = fifthDate.substring(0, 4);
console.log("fifth date after substring: ",fifthDate);
//secondDate = "2016" + secondDate;
fifthDateR = "2016" + fifthDate
fifthDate = "&date=2016" + fifthDate;
eventDate5 = "&date=" + fifthDate;
fifthDateRange = fifthDate + "00" + "-" + fifthDateR + "00";
eventDate5 = "&date=" + fifthDate;
console.log("fifth date range: ",fifthDateRange);

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



        var destination1Input = destination1;
        var destination2Input = destination2;
        var destination3Input = destination3;
        var destination4Input = destination4;
        var destination5Input = destination5;

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

/*		var startDate = "2016" + eventDate1 + "00";
		var secondDate = "2016" + eventDate2 + "00";
		var thirdDate = "2016" + eventDate3 + "00";
		var fourthDate = "2016" + eventDate4 + "00";
		var fifthDate = "2016" + eventDate5 + "00";

		console.log("start date: ",startDate);
		var daterange1 = startDate + "-" + startDateRange;
		var daterange2 = secondDate + "-" + secondDateRange;
		var daterange3 = thirdDate + "-" + thirdDateRange;
		var daterange4 = fourthDate + "-" + fourthDateRange;
		var daterange5 = fifthDate + "-" + fifthDateRange;

		console.log("date range 1: ",daterange1);
		console.log("date range 2: ",daterange2);
		console.log("date range 3: ",daterange3);
		console.log("date range 4: ",daterange4);
		console.log("date range 5: ",daterange5);

*/
   		var extrainfo ="&include=categories,tickets,price";
	    var queryURLbase = "https://api.eventful.com/jsonp/events/search?&category=music&app_key=SS4xBWqKX4WwzmW6";
		console.log("queryURLbase: ",queryURLbase);
		for (var i = 0; i < 5; i++) { 
			console.log("entering the for loop");

			if (i==0) {
				dest = destination1;
//				dest = "&location=" + destination1Input;
				date = startDateRange;
				var queryURL = queryURLbase + dest + startDateRange;
			}
			else if (i==1)  {
				dest = destination2;
 //                dest = "&location=" + destination2Input;
				date = secondDateRange;
				var queryURL = queryURLbase + dest + secondDateRange;
			}
			else if (i==2)  {
				dest = destination3;
//				dest = "&location=" + destination3Input;
				date = thirdDateRange;
				var queryURL = queryURLbase + dest + thirdDateRange;
			}
			else if (i==3)  {
				dest = destination4;
//				dest = "&location=" + destination4Input;
				date = fourthDateRange;
				var queryURL = queryURLbase + dest + fourthDateRange;
			}
			else if (i==4)  {
				dest = destination5;
//				dest = "&location = " + destination5Input;
				date = fifthDateRange;
				var queryURL = queryURLbase + dest + fifthDateRange;
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
//		            success: function() { alert("Success"); },
//		            error: function() { alert('Failed!'); },
		            beforeSend: setHeader
		    }) // ajax
        .done(function(response) {

        	

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
                	var eventTime12 =  moment(eventDateTime, "hh").format('h:mm a');
                console.log("event time after slicing: ",eventDateTime);
                console.log("event time: ",eventDateTime);
                console.log("event day: ",eventDateDay);
                console.log(response); 


		// separate the date from the time
		var eventDateDay = response.events.event[0].start_time
		eventDateDay1  = eventDateDay.slice(0, 10);
		var eventDateTime = response.events.event[0].start_time.substr(-8, 5);
		//convert time to 12 hour format
		var eventTime12 =  moment(eventDateTime, "hh").format('h:mm a');
		var eventTime1 = eventTime12;

		var eventDateDay = response.events.event[1].start_time
		eventDateDay2  = eventDateDay.slice(0, 10);
		var eventDateTime = response.events.event[1].start_time.substr(-8, 5);
		//convert time to 12 hour format
		var eventTime12 =  moment(eventDateTime, "hh").format('h:mm a');
		var eventTime2 = eventTime12;

		var eventDateDay = response.events.event[2].start_time
		eventDateDay3  = eventDateDay.slice(0, 10);
		var eventDateTime = response.events.event[2].start_time.substr(-8, 5);
		//convert time to 12 hour format
		var eventTime12 =  moment(eventDateTime, "hh").format('h:mm a');
		var eventTime3 = eventTime12;

		var eventDateDay = response.events.event[3].start_time
		eventDateDay4  = eventDateDay.slice(0, 10);
		var eventDateTime = response.events.event[3].start_time.substr(-8, 5);
		//convert time to 12 hour format
		var eventTime12 =  moment(eventDateTime, "hh").format('h:mm a');
		var eventTime4 = eventTime12;

		var eventDateDay = response.events.event[4].start_time
		eventDateDay5  = eventDateDay.slice(0, 10);
		var eventDateTime = response.events.event[4].start_time.substr(-8, 5);
		//convert time to 12 hour format
		var eventTime12 =  moment(eventDateTime, "hh").format('h:mm a');
		var eventTime5 = eventTime12;



			console.log("start time 1:  ",eventTime1);
			console.log("start time 2:  ",eventTime2);
			console.log("start time 3:  ",eventTime3);
			console.log("start time 4:  ",eventTime4);
			console.log("start time 5:  ",eventTime5);


		var eventName1 = response.events.event[0].title;;
		var eventName2 = response.events.event[1].title;
		var eventName3 = response.events.event[2].title;
		var eventName4 = response.events.event[3].title;
		var eventName5 = response.events.event[5].title;

		var venueName1 = response.events.event[0].venue_name;
		var venueName2 = response.events.event[1].venue_name;
		var venueName3 = response.events.event[2].venue_name;
		var venueName4 = response.events.event[3].venue_name;
		var venueName5 = response.events.event[5].venue_name;

sessionStorage.setItem("eventime1",eventTime1);
sessionStorage.setItem("eventime2",eventTime2);						
sessionStorage.setItem("eventime3",eventTime3);
sessionStorage.setItem("eventtime4",eventTime4);
sessionStorage.setItem("eventtime5",eventTime5);
sessionStorage.setItem('eventday1',eventDateDay1);
sessionStorage.setItem('eventday2',eventDateDay2);
sessionStorage.setItem('eventday3',eventDateDay3);
sessionStorage.setItem('eventday4',eventDateDay4);
sessionStorage.setItem('eventday5',eventDateDay5);

sessionStorage.setItem('venueName1',venueName1);
sessionStorage.setItem('venueName2',venueName2);
sessionStorage.setItem('venueName3',venueName3);
sessionStorage.setItem('venueName4',venueName4);
sessionStorage.setItem('venueName5',venueName5);


sessionStorage.setItem('genre',genre);
sessionStorage.setItem('destination1',destination1)
sessionStorage.setItem('destination2',destination2);
sessionStorage.setItem('destination3',destination3);
sessionStorage.setItem('destination4',destination4);
sessionStorage.setItem('destination5',destination5);
sessionStorage.setItem('eventDate1',startDate);
sessionStorage.setItem('eventdate2',secondDate);
sessionStorage.setItem('eventdate3',thirdDate);
sessionStorage.setItem('eventdate4',fourthDate);
sessionStorage.setItem('eventdate5',fifthDate);  

var stop1eventArray1 = [];
var stop1eventArray2 = [];
var stop1eventArray3 = [];
var stop1eventArray4 = [];
var stop1eventArray5 = [];
// create the array of objects for the current trip
			
// create an array for each stop's events
for (var a = 0; a < 5; a++) { 
			console.log("entering the a loop");
			for (var b = 0; b < 5; b++) { 
				 console.log("entering the b loop");
				  if (b == 0) {eventArray1 = [destination1, eventName1, venueName1, eventDate1, eventTime1]
				  }
                  else if (b == 1) {eventArray2 = [destination2, eventName2, venueName2, eventDate2, eventTime2] 
                  }
			      else if (b == 2) {eventArray3 = [destination3, eventName3, venueName3, eventDate3, eventTime3]
			      }
			      else if (b == 3) {eventArray4 = [destination4, eventName4, venueName4, eventDate4, eventTime4]
			      }
			      else if (b == 2) {eventArray5 = [destination5, eventName5, venueName5, eventDate5, eventTime5]
			      };

			      if (a == 0) {var stop1eventObject  = {
					    event: eventName1,
					    date: eventDate1,
					    time: eventTime1,
					    venue: venueName1 }
                  }

                  else if (a == 1) {
                  	    var stop2eventObject  = {
					    event: eventName2,
					    date: eventDate2,
					    time: eventTime2,
					    venue: venueName2       }
                  }

                  else if (a == 2) {
                  	    var stop3eventObject  = {
					    event: eventName3,
					    date: eventDate3,
					    time: eventTime3,
					    venue: venueName3       }
                  }

                  else if (a == 3) {
                  	    var stop4eventObject  = {
					    event: eventName4,
					    date: eventDate4,
					    time: eventTime4,
					    venue: venueName4       }
                  }
               
                  else if (a == 4) {
                  	    var stop5eventObject  = {
					    event: eventName5,
					    date: eventDate5,
					    time: eventTime5,
					    venue: venueName5        }
                }

			};  // end b loop
}; //end a loop
		
console.log("stop1eventObject: ",stop1eventObject);
console.log("stop2eventObject: ",stop2eventObject);
console.log("stop3eventObject: ",stop3eventObject);
console.log("stop4eventObject: ",stop4eventObject);
console.log("stop5eventObject: ",stop5eventObject);




sessionStorage.setItem('stop1eventObject',stop1eventObject);
sessionStorage.setItem('stop2eventObject',stop2eventObject);
sessionStorage.setItem('stop3eventObject',stop3eventObject);
sessionStorage.setItem('stop4eventObject',stop4eventObject);
sessionStorage.setItem('stop5eventObject',stop5eventObject);  
		




 //load the HTML	
	            console.log("writing to the HTML");
				$("#dropdown1").html("<li>" + cityname +
				"<li>" + event +
				"<li>" + eventDateDay +
				"<li>" + eventDateTime +
				"<li>" + venueName + "</li>"); 

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
 