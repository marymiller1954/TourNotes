$(document).ready(function() {

  var buttonArray = ["Asheville", "Raleigh", "Durham", "Charlotte"];

  addButton();


  $('#addlocation').on('click', function(event){

    event.preventDefault();
    var newlocation = $('#locationInput').val().trim();
    if (newlocation === "") {

          errormsg();
          
            return;
      
        } //end if
  else {
    console.log(newlocation);
     $('#locationInput').val("")

    buttonArray.push(newlocation);
    console.log("going to add button");
    addButton();

  }  //end else

  });  // end addlocation



  $('#locationButton').on('click', '.location', function(){
    event.preventDefault();

    var theButtonText = this.textContent;
    var querycategory = " music";
      //replace space with +
       var searchText = theButtonText.replace(" ", "+");
       searchText = searchText + querycategory;
       searchText = searchText.replace(" ", "+");
       var rating = "rating=g";


});


var searchstring = buttonArray[0];  

//var shows = {
//  search: function(cb){
   // $.getJSON('http://api.eventful.com/json/events/search?c=music&app_key=SS4xBWqKX4WwzmW6&keywords=raleigh&callback=?', cb); 

 //   $.ajax('http://eventful.com/json/events/search?q=rock&location=Raleigh&date=future&category=music&app_key=SS4xBWqKX4WwzmW6', cb);


 //   $.ajax('https://api.eventful.com/json/events/search?location=raleigh&category=music&date=future&app_key=SS4xBWqKX4WwzmW6')
 //   console.log("this is the response from evenful :");
 //   console.log(ajax.response);
 //   errormsg(); 




var token = '';

function setHeader(xhr) {

  xhr.setRequestHeader('Authorization', token);
}  //end function

    var queryURL = "https://api.eventful.com/jsonp/events/search?location=raleigh&category=music&date=future&app_key=SS4xBWqKX4WwzmW6";

 //   http://api.eventful.com/json/events/search?location=raleigh&category=music&date=future&app_key=SS4xBWqKX4WwzmW6

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
    })
           
        
        .done(function(response) {
            console.log(response);
            console.log(event[0]);
            console.log(event[1]);
            console.log(event[2]);
            console.log(event[3]);
            console.log(event[4]);
            console.log(event[5]);
            console.log(event[6]);
            console.log(event[7]);
            console.log(event[8]);
            console.log(event[9]);
            console.log("second item: ",response.second_item);

        })



  function addButton(){
    console.log("entering add button");
    $('.location').remove();
    for (var i = 0; i < buttonArray.length; i++) {
      var $button = $('<button>') // create <button></button> tag.
      $button.addClass('location btn'); // Added a class
      $button.attr('data-name', buttonArray[i]); // Added a data-attribute
      $button.html(buttonArray[i]); // Provided the initial button text
      $('#locationButton').append($button); // Added the button to the HTML
    };  // end for loop
  }; //end addButton()


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


}); //end document).ready
