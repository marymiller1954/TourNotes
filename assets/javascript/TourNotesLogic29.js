 $(document).ready(function () {

// SETUP VARIABLES
// ====================================================================================== var authKey = 'SS4xBWqKX4WwzmW6';
  var database = firebase.database();
  // These variables will hold the results we get from the user's inputs via HTML
  var newTrip = {
    event: " ",
    city:  " ",
    day: " ",
    time: " ",
    venue: " ",
    genre:  " ",
    latitude: " ",
    longitude: " ",
    perf:  " ",
    userid: " ",
  }; //object
  var current_time = " ";
  var destination = " ";
  var eventTime = " ";
  var eventDate1 = " ";
  var eventDate2 = " ";
  var eventDate3 = " ";
  var eventDate4 = " ";
  var eventDate5 = " "; 
  var startDateR = " ";
  var secondDateR = " ";
  var thirdDateR = " ";
  var fourthDateR = " ";
  var fifthDateR = " ";
  var eventDate = " ";
  var eventDateDay1;
  var eventName = " ";
  var response = " ";
  var eventDay = " ";
  var eventYear = " ";
  var queryURL = " ";
  var i = 0;
  var b = 0;
  console.log('starting the program!'); 

  //$('#query').on('click', function(){
    // Grabs user input


  var genre = sessionStorage.genre;
 //   console.log('genre: ',genre);

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

 // console.log('destination1 in javascript: ',destination1);
 // console.log('genre in javascript: ',genre);
//  console.log('start date in javascript: ',startDate);

  var startDateRange = ' ';
  var secondDateRange = ' ';
  var thirdDateRange = ' ';
  var fourthDateRange = ' ';
  var fifthDateRange = ' ';
  var dateRange = ' ';
    startDate = startDate.substring(0, 5);
    startDate = startDate.replace(/-/g,'');
    startDate = startDate.substring(0, 4);
//    console.log('start date: ',startDate);
    startDateR = '2016' + startDate;
//    console.log('startDateR: ',startDateR);
    startDate = '&date=2016' + startDate;
    eventDate1 = '&date=' + startDate;
    startDateRange = startDate + '00' + '-' + startDateR + '00' ;
 //   console.log('start date range: ',startDateRange);
    secondDate = secondDate.substring(0, 5);
    secondDate = secondDate.replace(/-/g,'');
    secondDate = secondDate.substring(0, 4);


    secondDateR = '2016' + secondDate;
    secondDate = '&date=2016' + secondDate;
    eventDate2 = '&date=' + secondDate;
    secondDateRange = secondDate + '00' + '-' + secondDateR + '00';

    thirdDate = thirdDate.substring(0, 5);
    thirdDate = thirdDate.replace(/-/g,'');
    thirdDate = thirdDate.substring(0, 4);


    thirdDateR = '2016' + thirdDate;
    thirdDate = '&date=2016' + thirdDate;
    eventDate3 = '&date=' + thirdDate;
    thirdDateRange = thirdDate + '00' + '-' + thirdDateR + '00';

    fourthDateR = '2016' + fourthDate;
    fourthDate = fourthDate.substring(0, 5);
    fourthDate = fourthDate.replace(/-/g,'');
    fourthDate = fourthDate.substring(0, 4);


    fourthDateR = '2016' + fourthDate;
    fourthDate = '&date=2016' + fourthDate;
    eventDate4 = '&date=' + fourthDate;
    fourthDateRange = fourthDate + '00' + '-' + fourthDateR + '00';

    fifthDate = fifthDate.substring(0, 5);
    fifthDate = fifthDate.replace(/-/g,'');
    fifthDate = fifthDate.substring(0, 4);


    fifthDateR = '2016' + fifthDate;
    fifthDate = '&date=2016' + fifthDate;
    eventDate5 = '&date=' + fifthDate;
    fifthDateRange = fifthDate + '00' + '-' + fifthDateR + '00';
    eventDate5 = '&date=' + fifthDate;

        eventDate = '&date=' + startDate;
  //      console.log('event date 1: ',eventDate1);

//       $('#query').on('click', function(){
    // Grabs user input
//  console.log('destination 1: ',destination1);
//  console.log('destination 3: ',destination3);
//  console.log('destination 5: ',destination5);
//  console.log('date 2: ',eventDate2);
//  console.log('date 3: ',eventDate3);
//  console.log('date 4: ',eventDate4);
//  console.log('date 5: ',eventDate5);
//  console.log('genre: ',genre);
  genre = '&keywords=' + genre;
//  console.log('genre for query: ',genre);

    
  var destination1Input = destination1;
  var destination2Input = destination2;
  var destination3Input = destination3;
  var destination4Input = destination4;
  var destination5Input = destination5;
  sessionStorage.setItem('destination1Input',destination1Input);
  sessionStorage.setItem('destination2Input',destination2Input);
  sessionStorage.setItem('destination3Input',destination3Input);
  sessionStorage.setItem('destination4Input',destination4Input);
  sessionStorage.setItem('destination5Input',destination5Input);

  destination1out = destination1.substr(0,destination1.indexOf(','));
  destination2out = destination2.substr(0,destination2.indexOf(','));
  destination3out = destination3.substr(0,destination3.indexOf(','));
  destination4out = destination4.substr(0,destination4.indexOf(','));
  destination5out = destination5.substr(0,destination5.indexOf(','));





  destination1 = destination1.substr(0,destination1.indexOf(','));
  destination2 = destination2.substr(0,destination2.indexOf(','));
  destination3 = destination3.substr(0,destination3.indexOf(','));
  destination4 = destination4.substr(0,destination4.indexOf(','));
  destination5 = destination5.substr(0,destination5.indexOf(','));
  destination1 = '&location=' + "'" + destination1 + "'";
  destination2 = '&location=' + "'" + destination2 + "'"; 
  destination3 = '&location=' + "'" + destination3 + "'";
  destination4 = '&location=' + "'" + destination4 + "'";
  destination5 = '&location=' + "'" + destination5 + "'"; 
//  console.log(destination1);
//  console.log(destination2);
//  console.log(destination3);
//  console.log(destination4);
//  console.log(destination5);

  var stop1eventObject = '';
  var stop2eventObject = '';
  var stop3eventObject = '';
  var stop4eventObject = '';
  var stop5eventObject = '';
  var eventDateDay = " ";
  var eventDate = " ";
  eventDateDay1  = " ";
  var eventDateTime = " ";
  //use to convert time to 12 hour format
  var eventTime12 =  " ";
  var event = " ";
  var venueName = " ";
  var cityName = " ";
//    var eventName1 = " ";
//    var eventName2 = " ";
//    var eventName3 = " ";
//    var eventName4 = " ";
//    var eventName5 = " ";
//    var venueName1 = " ";
//    var venueName2 = " ";
//    var venueName3 = " ";
//    var venueName4 = " ";
//    var venueName5 = " ";
var queryURLbase = 'https://api.eventful.com/jsonp/events/search?&category=music&app_key=SS4xBWqKX4WwzmW6';
console.log('queryURLbase: ',queryURLbase);
var lati = " ";
var longi = " ";
var performer = " ";
var userid = " ";
var token = '';
   
   function errorActions() { alert('Failed!'); }
   


function setHeader(xhr) {
       xhr.setRequestHeader('Authorization', token);
}  //end function setHeader
            
function runQuery() { 
               
           if (i===0) {  // this is the first location for the ajax call; check for null destination and skip
  //            destination = "&location=" + destination1;
              destination =  destination1;
              dateRange = startDateRange;
              queryURL = queryURLbase + destination + dateRange + genre;                
             
         } // if

            if (i===1) {  // this is the second location for the ajax call; check for null destination and skip
          //    destination = "&location=" + destination2;
              destination =  destination2;
              dateRange = secondDateRange;
              queryURL = queryURLbase + destination + dateRange + genre;                
     
         } // if

            if (i===2) {  // this is the third location for the ajax call ; check for null destination and skip
 //           destination = "&location=" + destination3;
            destination =  destination3;
            dateRange = thirdDateRange;
            queryURL = queryURLbase + destination + dateRange + genre;        
             
         }  // if

            if (i===3) {  // this is the fourth location for the ajax call; check for null destination and skip
  //          destination = "&location=" + destination4;
            destination =  destination4;
            dateRange = fourthDateRange;
            queryURL = queryURLbase + destination + dateRange + genre;        

         } //if 

            if (i===4) {  // this is the fifth location for the ajax call; check for null destination and skip
      //      destination = "&location=" + destination5;
            destination =  destination5;
            dateRange = fifthDateRange;
            queryURL = queryURLbase + destination + dateRange + genre;      
            
         } // if

 console.log('making the query: ',queryURL);
      $.ajax({
                url: queryURL,
                method: 'GET',           
                crossDomain: true,
                dataType: 'jsonp',
                contentType: "application/jsonp; charset=utf-8",
                async:true,
                success: function() { alert("Success"); 
                                    console.log("eventful response: ",response.events);
                                    console.log("in success function i = : ",i);

                                    if (i===0) {
                                        stop1eventObject = response.events;
                                        sessionStorage.setItem('stop1eventObject',stop1eventObject);
                                        console.log("stop1eventObject: ",stop1eventObject);
                                               }

                                    if (i===1) {
                                        stop2eventObject = response.events;
                                        sessionStorage.setItem('stop2eventObject',stop2eventObject);
                                        console.log("stop2eventObject: ",stop2eventObject);
                                               }


                                    if (i===2) {
                                        stop3eventObject = response.events;                                    
                                        sessionStorage.setItem('stop3eventObject',stop3eventObject);
                                        console.log("stop3eventObject: ",stop3eventObject); 
                                               }

                                    if (i===3) {
                                        stop4eventObject = response.events;
                                        sessionStorage.setItem('stop4eventObject',stop4eventObject);
                                        console.log("stop4eventObject: ",stop4eventObject);
                                               }


                                     if (i===4) {
                                        stop5eventObject = response.events;
                                        sessionStorage.setItem('stop5eventObject',stop5eventObject);
                                        console.log("stop5eventObject: ",stop5eventObject);
                                                }
              },
                error: function() { alert('Failed!'); },
                beforeSend: setHeader
        }) // ajax
        .done(function(response) {

      console.log("eventful response: ",response.events);


 /*     if (i===0) {stop1eventObject = response.events};
      sessionStorage.setItem('stop1eventObject',stop1eventObject);
      console.log("stop1eventObject: ",stop1eventObject);  }

      if (i===1) {stop2eventObject = response.events};
      sessionStorage.setItem('stop2eventObject',stop2eventObject);
      console.log("stop1eventObject: ",stop1eventObject);  }


      if (i===2) {stop3eventObject = response.events};
      sessionStorage.setItem('stop3eventObject',stop3eventObject);
      console.log("stop3eventObject: ",stop3eventObject);  }

      if (i===3) {stop4eventObject = response.events;};
      sessionStorage.setItem('stop4eventObject',stop4eventObject);
      console.log("stop4eventObject: ",stop4eventObject);  }


       if (i===3) {stop5eventObject = response.events;};
      sessionStorage.setItem('stop5eventObject',stop5eventObject);
      console.log("stop5eventObject: ",stop5eventObject);  }


 /*     console.log("first event: ",response.events.event[0].city_name);
      console.log("first event: ",response.events.event[0].title);
      console.log("first event: ",response.events.event[0].venue_name);
      console.log("first event: ",response.events.event[0].latitude);
      console.log("first event: ",response.events.event[0].longitude);
      console.log("first event: ",response.events.event[0].start_time);
      console.log("second event: ",response.events.event[1].cityName);
      console.log("second event: ",response.events.event[1].title);
      console.log("second event: ",response.events.event[1].venue_name);
      console.log("second event: ",response.events.event[1].latitude);
      console.log("second event: ",response.events.event[1].longitude);
      console.log("second event: ",response.events.event[1].start_time);
      console.log("third event: ",response.events.event[2].cityName);
      console.log("third event: ",response.events.event[2].title);
      console.log("third event: ",response.events.event[2].venue_name);
      console.log("third event: ",response.events.event[2].latitude);
      console.log("third event: ",response.events.event[2].longitude);
      console.log("third event: ",response.events.event[2].start_time);
      console.log("fourth event: ",response.events.event[3].cityName);
      console.log("fourth event: ",response.events.event[3].title);
      console.log("fourth event: ",response.events.event[3].venue_name);
      console.log("fourth event: ",response.events.event[3].latitude);
      console.log("fourth event: ",response.events.event[3].longitude);
      console.log("fourth event: ",response.events.event[3].start_time);
      console.log("fifth event: ",response.events.event[4].cityName);
      console.log("fifth event: ",response.events.event[4].title);
      console.log("fifth event: ",response.events.event[4].venue_name);
      console.log("fifth event: ",response.events.event[4].latitude);
      console.log("fifth event: ",response.events.event[4].longitude);
      console.log("fifth event: ",response.events.event[4].start_time);
*/

alert("Success"); 
                console.log("Success");
                console.log('after query in success response i =: ',i);
                console.log("Eventful response:");
                console.log(response);

                // process the response from Eventful
                if (i===0) {
                 eventDateDay = response.events.event[i].start_time;
   //              console.log("eventDateDay is ",eventDateDay);
                 eventName =  response.events.event[i].title;
                 venueName =  response.events.event[i].venue_name;
                 lati =  response.events.event[i].latitude;
                 longi =  response.events.event[i].longitude;
                 eventDateTime =   response.events.event[i].start_time.substr(-8, 5);
                  //convert time to 12 hour format
                  eventTime12 =  moment(eventDateTime, 'hh').format('h:mm a');
                  eventTime = eventTime12;
   //              console.log("eventDateDay is ",eventDateDay); 
                 stop1eventObject = response.events.event[i]
                 sessionStorage.setItem('stop1eventObject',stop1eventObject);
                 console.log('stop 1 events: ',stop1eventObject);
                 cityName = destination1out;
//                getEvents();
            
                }
                if (i===1) {
                 eventDateDay = response.events.event[i].start_time;
 //                console.log("eventDateDay is ",eventDateDay);
                 eventName =  response.events.event[i].title;
                 venueName =  response.events.event[i].venue_name;
                 lati =  response.events.event[i].latitude;
                 longi =  response.events.event[i].longitude;
                 eventDateTime =   response.events.event[i].start_time.substr(-8, 5);
                  //convert time to 12 hour format
                  eventTime12 =  moment(eventDateTime, 'hh').format('h:mm a');
                  eventTime = eventTime12;
 //                console.log("eventDateDay is ",eventDateDay); 
                 stop2eventObject = response.events;
                 sessionStorage.setItem('stop2eventObject',stop2eventObject.events);
                 console.log('stop 2 events: ',stop2eventObject.events);
                 cityName = destination2out;
             //   getEvents();
            
                }
                if (i===2) {
                  eventDateDay = response.events.event[i].start_time;
  //               console.log("eventDateDay is ",eventDateDay);
                 eventName =  response.events.event[i].title;
                 venueName =  response.events.event[i].venue_name;
                 lati =  response.events.event[i].latitude;
                 longi =  response.events.event[i].longitude;
                 eventDateTime =   response.events.event[i].start_time.substr(-8, 5);
                  //convert time to 12 hour format
                  eventTime12 =  moment(eventDateTime, 'hh').format('h:mm a');
                  eventTime = eventTime12;
 //                console.log("eventDateDay is ",eventDateDay); 
                 stop3eventObject = response.events;
                 sessionStorage.setItem('stop3eventObject',stop3eventObject.events);
                 console.log('stop 3 events: ',stop3eventObject.events); 
                 cityName = destination3out;
//                getEvents();  
                }
                    
                if (i===3) {
                 eventDateDay = response.events.event[i].start_time;
//                 console.log("eventDateDay is ",eventDateDay);
                 eventName =  response.events.event[i].title;
                 venueName =  response.events.event[i].venue_name;
                 lati =  response.events.event[i].latitude;
                 longi =  response.events.event[i].longitude;
                 eventDateTime =   response.events.event[i].start_time.substr(-8, 5);
                  //convert time to 12 hour format
                  eventTime12 =  moment(eventDateTime, 'hh').format('h:mm a');
                  eventTime = eventTime12;
  //               console.log("eventDateDay is ",eventDateDay); 
                 stop4eventObject = response.events;
                 sessionStorage.setItem('stop4eventObject',stop4eventObject.events);
                 console.log('stop 4 events: ',stop4eventObject.events);
                 cityName = destination4out; 
//                getEvents();      
                }
                    
                if (i===4) {
                eventDateDay = response.events.event[i].start_time;
//                 console.log("eventDateDay is ",eventDateDay);
                 eventName =  response.events.event[i].title;
                 venueName =  response.events.event[i].venue_name;
                 lati =  response.events.event[i].latitude;
                 longi =  response.events.event[i].longitude;
                 eventDateTime =   response.events.event[i].start_time.substr(-8, 5);
                  //convert time to 12 hour format
                  eventTime12 =  moment(eventDateTime, 'hh').format('h:mm a');
                  eventTime = eventTime12;
 //                console.log("eventDateDay is ",eventDateDay); 
                 stop5eventObject = response.events;
                 sessionStorage.setItem('stop5eventObject',stop5eventObject.events);
                 console.log('stop 5 events: ',stop5eventObject.events);
                 cityName = destination5out;
  //              getEvents();    
                } 
for (var a = 0; a < 5; a++) {

                      console.log('pushing to the database');
                      console.log('a = ',a);

                      if (a===0) { console.log('stop1eventobject: ',stop1eventObject)  };
                      if (a===1) { console.log('stop2eventobject: ',stop2eventObject)  };                 
                      if (a===2) { console.log('stop3eventobject: ',stop3eventObject)  };
                      if (a===3) { console.log('stop4eventobject: ',stop4eventObject)  };
                      if (a===4) { console.log('stop5eventobject: ',stop5eventObject)  };

                  eventName = response.events.event[a].venue_name;
                  lati = response.events.event[a].latitude;
                  longi = response.events.event[a].longitude;
                  eventDateDay = response.events.event[a].start_time;
//                 console.log('event day: ',eventDateDay);
                  eventDay = response.events.event[a].start_time.substr(-14, 5);
                  eventYear = response.events.event[a].start_time.substr(-19, 4);
//                  console.log("event day: ",eventDay);
//                  console.log("event year: ",eventYear);
                  eventDate = eventDay + '-' + eventYear;
                  console.log('eventDate',eventDate);
          //        eventDateDay  = eventDateDay.slice(0, 10);
          //           eventDateDay  = eventDateDay.slice(0, 10);
               //         eventDateDay  = eventDateDay.slice(6, 5) + '-' + eventDateDay.slice(0, 4);
             //       console.log('event date after substring: ',eventDate);    
                  cityName = response.events.event[a].city_name;
                   eventName =  response.events.event[a].title;
                   venueName =  response.events.event[a].venue_name;
                   lati =  response.events.event[a].latitude;
                   longi =  response.events.event[a].longitude;
                   eventDateTime =   response.events.event[a].start_time.substr(-8, 5);
                  //convert time to 12 hour format
                  eventTime12 =  moment(eventDateTime, 'hh').format('h:mm a');
                  eventTime = eventTime12;
                  b = a+1;
                  option_number = '# ' + b;
                  if (i===0) cityName = destination1out;  
                  if (i===1) cityName = destination2out; 
                  if (i===2) cityName = destination3out;  
                  if (i===3) cityName = destination4out; 
                  if (i===4) cityName = destination5out; 

                      performer = 'Not Listed';
                      
                      userid = 'Mary';
 //                     console.log('Day :  ',eventDay);
 //                     console.log('start time :  ',eventTime);
 //                     console.log('eventName:  ',eventName);
 //                     console.log("venue: ",venueName);
                     current_time = new moment ().format("LLLL");

                      newTrip = {
                                  option:  option_number,
                                  event: eventName,
                                  city:   cityName,
                                  day: eventDate,
                                  time: eventTime,
                                  venue: venueName,
                                  genre:  sessionStorage.genre,
                                  latitude: lati,
                                  longitude: longi,
                                  perf:  performer,
                                  dateAdded: current_time,
                                  userid: userid
                              };// new trip object

    database.ref().push(newTrip);
    console.log('i: ',i);
    console.log("Trip event is: ",newTrip);


           //load the HTML  
                console.log('writing to the HTML');
                console.log('event name: ',eventName);
                console.log('date: ',eventDate);
                console.log('time: ',eventTime);
                console.log('venue: ',venueName);
                console.log('city: ',cityName);

//  $('#collection ul').append('<li>' + eventName +
 //         '<li>' + venueName +
//          '<li>' + eventDay +//
 //         '<li>' + eventTime + '</li>'); 
/*



$('#eventsBox ul').append('</li id="artist">' + eventName +
                          '</li id="venue">' + venueName +
                          '</li id="date">' + eventDay +
                          '</li id="time">' + eventTime + '</li>'); 
*/

$('#eventsBox').append('</li>' + eventName +
          '</li>' + venueName +
          '</li>' + eventDay +
          '</li>' + eventTime + '</li>'); 




  } // for loop
    }); // .done

      
//  }// end i loop    
} // runQuery

for ( i = 0; i < 5; i++) {

console.log("First major loop iteration i = ",i);
console.log("going to runQuery");
runQuery();         
//console.log("going to successActions");
//console.log("response: ",response);
//successActions(response);
//getEvents();

}


});//document.ready