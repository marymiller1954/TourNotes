
$(document).ready(function() {





//Example Request - Any concert event withing 25 miles of a specific Lat / Long value in San Diego
var apkey = "SS4xBWqKX4WwzmW6";

 var queryURL = "http://api.eventful.com/json/events/search?...&keywords=concert&where=32.746682,-117.162741&within=25&date=Future&app_key=apkey"

      console.log("making the query with url ",queryURL);


      //make the ajax call
      $.ajax({url: queryURL, method: 'GET'}).done(function(ajaxResponse)
   {
        console.log("Eventful respnse",ajaxResponse);
    errormsg;
   });//end ajax{GET}
 





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
              }
            }
          }  //end function error message








}); //end document).ready
