
var latlng = new google.maps.LatLng(35.7596, 79.0193);

var mapElement = document.getElementById("map-canvas");

var map = new google.maps.Map(mapElement, {
  center: latlng,
  zoom: 2
});

var queryURL = 'http://api.eventful.com/json/events/search?c=music&app_key=SS4xBWqKX4WwzmW6&keywords=bob+dylan&callback=?';

/*
var shows = {
  search: function(cb){
    $.ajax('http://api.eventful.com/json/events/search?c=music&app_key=SS4xBWqKX4WwzmW6&keywords=bob+dylan&callback=?', cb);  
  }
};  */
    

var shows = {
  search: function(cb){
    $.getJSON('http://api.eventful.com/json/events/search?c=music&app_key=SS4xBWqKX4WwzmW6&keywords=bob+dylan&callback=?', cb);  
  }
};
//console.log("this is the response from evenful :",response.events);
console.log("these are the shows: ", shows);

var showList = {
  showTemplate: Handlebars.compile($('#show-template').html()),
  container: document.getElementById('show-list'),
  
  render: function(events){
    var html = '';
    
    for (var i = 0; i < events.event.length; i++) {
      html += this.showTemplate(events.event[i]);
      var latlng = new google.maps.LatLng(events.event[i].latitude, events.event[i].longitude);
      
      plotPoint(latlng);
    }

    this.container.innerHTML = html;
  }
};

shows.search(function(response){ 
 console.log(response.events);
  showList.render(response.events);
});
