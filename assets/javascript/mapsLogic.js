
      function initMap() {
        var directionsService = new google.maps.DirectionsService;
        var directionsDisplay = new google.maps.DirectionsRenderer({draggable: true});
        var map = new google.maps.Map(document.getElementById('mapBox'), {
          zoom: 13,
          center: {lat: 41.85, lng: -87.65},
          styles: [
            {
              featureType: "all",
              stylers: [
                { "color": "#C0C0C0" }
              ]
            }, {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [
                { color: '#000000'},
                { saturation: 0}
              ] 
            }, {
              featureType: 'road',
              elementType: 'labels',
              stylers: [
                { color: '#7CBEB7'},
                {weight: .5},
                { saturation: 100}
              ]
            }, {
              featureType: 'landscape',
              elementType: 'geometry',
              stylers: [
                { color: '#684D94'}, 
                { saturation: 0}
              ]
            }, {
              featureType: 'landscape',
              elementType: 'labels',
              stylers: [
                { color: '#7CBEB7'},
                { saturation: 100}
              ]
            }, {
              featureType: 'administrative',
              elementType: 'labels',
              stylers: [
                { color: '#7CBEB7'},
                { weight: .75},
                { saturation: 100}
              ]
            }, {
              featureType: 'administrative',
              elementType: 'geometry',
              stylers: [
                { color: '#684D94'},
                { saturation: 0}
              ]
            }, {
              featureType: 'poi',
              elementType: 'geometry',
              stylers: [
                { color: '#ADC822'},
                { saturation: 0}
              ]
            }, {
              featureType: 'poi',
              elementType: 'labels',
              stylers: [
                { color: '#7CBEB7'},
                { weight: .75},
                { saturation: 100}
              ]
            }, {
              featureType: 'water',
              elementType: 'labels',
              stylers: [
                { color: '#000000'},
                { weight: .75},
                { saturation: 100}
              ]
            }, {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [
                { color: '#'},
                { saturation: 0}
              ]
            }, {
              featureType: 'transit',
              elementType: 'labels',
              stylers: [
                { color: '#7CBEB7'},
                { weight: .75},
                { saturation: 100}
              ]
            }, {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [
                { color: '#684D94'},
                { saturation: 0}
              ]
            }

          ]
        });
        directionsDisplay.setMap(map);

        var autoInputs = document.getElementsByClassName('inputs');

        for (i = 0; i < autoInputs.length; i++) {
            autocomplete = new google.maps.places.Autocomplete(autoInputs[i]);
        }

        document.getElementById('submit').addEventListener('click', function() {
          calculateAndDisplayRoute(directionsService, directionsDisplay);
        });
      }

      function calculateAndDisplayRoute(directionsService, directionsDisplay) {
        var waypts = [];

        // calling waypoints info
        var checkboxArray = document.getElementsByClassName('waypoints');
        for (var i = 0; i < checkboxArray.length; i++) {
          console.log(checkboxArray[i].value);
          if (checkboxArray[i].value.length > 1) {
            waypts.push({
              location: checkboxArray[i].value,
              stopover: true
            });
          }
        }

        directionsService.route({
          origin: document.getElementById('start').value,
          destination: document.getElementById('end').value,
          waypoints: waypts,
          optimizeWaypoints: true,
          travelMode: 'DRIVING'
        }, function(response, status) {
          if (status === 'OK') {
            directionsDisplay.setDirections(response);
            var route = response.routes[0];
            var summaryPanel = document.getElementById('directions-panel');
            summaryPanel.innerHTML = '';
            // For each route, display summary information.
            for (var i = 0; i < route.legs.length; i++) {
              var routeSegment = i + 1;
              summaryPanel.innerHTML += '<b>Tour Leg: ' + routeSegment +
                  '</b><br>';
              summaryPanel.innerHTML += route.legs[i].start_address + ' to ';
              summaryPanel.innerHTML += route.legs[i].end_address + '<br>';
              summaryPanel.innerHTML += route.legs[i].distance.text + '<br><br>';
            }
          } else {
            window.alert('Directions request failed due to ' + status);
          }
        });
      }