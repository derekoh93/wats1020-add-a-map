/* Begin by adding your on ready handler here, and then create the
   rest of your functions inside the on ready handler.

   (Note that you do not need to manually call Bootstrap functions in
   your Javascript because Bootstrap will automatically recognize your
   HTML structures and invoke the proper JS code accordingly. Be sure
   to reference the Bootstrap documentation.)
*/

// TODO: Inside of your on ready handler, invoke the Leaflet.js library
// to draw a map in your `#map-container` div.

// TODO: Add 2 layers to your map you have visuals. Use the Open Street Maps
// tiles served through the MapQuest CDN. Consult this example to set up
// the map tiles layers:


// TODO: Customize that Map to show markers with popups at no fewer than 3
// interesting locations. (You'll need to figure out the latitude/longitude for
// these locations using a mapping tool such as Google Maps.)
//doc ready block
$(document).ready(function(){
  
  //maps section
	//Satelite map layer
  var satMap = L.tileLayer('https://api.mapbox.com/styles/v1/derekoh93/ciyrrbomg00382rpjuxpr3fu4/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZGVyZWtvaDkzIiwiYSI6ImNpeXJteWVjdjAwMjYzMnMxM2NsYnZxb2UifQ.WkKLRw3Mk7pEXoSNfW7B3w', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 14,
    id: 'https://www.mapbox.com/studio/styles/derekoh93/ciyrrbomg00382rpjuxpr3fu4/',
  });
	//Street map layer
  var streetMap = L.tileLayer('https://api.mapbox.com/styles/v1/derekoh93/ciyrru9vv001v2rpt3hk8qewz/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZGVyZWtvaDkzIiwiYSI6ImNpeXJteWVjdjAwMjYzMnMxM2NsYnZxb2UifQ.WkKLRw3Mk7pEXoSNfW7B3w', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 14,
    id: 'https://www.mapbox.com/studio/styles/derekoh93/ciyrru9vv001v2rpt3hk8qewz/'
});
  //Outdoors map layer
  var outdoorsMap = L.tileLayer('https://api.mapbox.com/styles/v1/derekoh93/ciyrrw7bs002e2rmne4x0uqk2/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZGVyZWtvaDkzIiwiYSI6ImNpeXJteWVjdjAwMjYzMnMxM2NsYnZxb2UifQ.WkKLRw3Mk7pEXoSNfW7B3w', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
	  maxZoom: 14,
    id: 'https://www.mapbox.com/studio/styles/derekoh93/ciyrrw7bs002e2rmne4x0uqk2/'
});
  //Different layers that you can select on the map satellite, streets, and outdoors
  var baseMap = {
    "Satellite": satMap,
    "Streets": streetMap,
    "Outdoors": outdoorsMap,
    
  };
  //These are the different markers on the map with popup descriptions
  var paradise = L.marker([46.773421, -121.745159]).bindPopup('Paradise, beautiful view and flower meadows'),
      longmire = L.marker([46.7502, -121.8128]).bindPopup('Longmire, national historic district'),
      naradaFalls = L.marker([46.7750, -121.7462]).bindPopup('Narada Falls, beautiful trail hat leads to Narada Falls')
  //This is the layer group of markers that you can find on the map   
  var visit = L.layerGroup([paradise,longmire,naradaFalls]);
  
  var mapOverlay = {
      "visit": visit
  };
  //Default position and zoom of the map when you start the page up     
  var myMap = L.map('map-container', {
    center: [46.85, -121.78],
    zoom: 14,
    layers: [satMap, visit]
  });
	
//Smooth scroll from w3schools
//This function adds a smooth scroll action when you click buttons at the nav bar
  $("a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();
      // Store hash
      var hash = this.hash;
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

  L.control.layers(baseMap, mapOverlay).addTo(myMap);
	
})
     
  
                  