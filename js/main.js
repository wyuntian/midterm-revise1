

var dataset = 'https://raw.githubusercontent.com/CPLN690-MUSA610/datasets/master/geojson/philadelphia-garbage-collection-boundaries.geojson';




var eachFeature = function(feature, layer) {
  layer.on('click', function (e) {
    /* =====================
    The following code will run every time a feature on the map is clicked.
    Check out feature.properties to see some useful data about the feature that
    you can use in your application.
    ===================== */
    switch(feature.properties.COLLDAY){
    case"MON":$("h1").text("Monday");break;
    case"TUE":$("h1").text("Tuesday");break;
    case"WED":$("h1").text("Wednesday");break;
    case"THU":$("h1").text("Thursday");break;
    case"FRI":$("h1").text("Friday");break;
  }
  map.fitBounds(this.getBounds());})
};

var myStyleMon = function(feature){if(feature.properties.COLLDAY=="MON"){
       return {fillColor:"#ffc34d",fillOpacity:0.3,color:"#ffbb33"};
}
      else{return {fillColor:"#ffffcc",fillOpacity:0.2,weight:1.5, color:"#666666"}};
;};

var myStyleTue = function(feature){if(feature.properties.COLLDAY=="TUE"){
       return {fillColor:"#ff1aff",fillOpacity:0.3, color:"#ff1aff"};
}
      else{return {fillColor:"#ffffcc",fillOpacity:0.2,weight:1.5, color:"#666666"}};
;};
var myStyleWed = function(feature){if(feature.properties.COLLDAY=="WED"){
       return {fillColor:" #66ff99",fillOpacity:0.3, color:" #66ff99"};
}
  else{return {fillColor:"#ffffcc",fillOpacity:0.2,weight:1.5, color:"#666666"}};
;};

var myStyleThu = function(feature){if(feature.properties.COLLDAY=="THU"){
       return {fillColor:"#66b3ff", fillOpacity:0.3, color:"#66b3ff"};
}
else{return {fillColor:"#ffffcc",fillOpacity:0.2,weight:1.5, color:"#666666"}};
;};

var myStyleFri = function(feature){if(feature.properties.COLLDAY=="FRI"){
       return {fillColor:"#ff1a1a", fillOpacity:0.3,color:"#ff1a1a"};
}
else{return {fillColor:"#ffffcc",fillOpacity:0.2,weight:1.5, color:"#666666"}};
;};

/*var myStyle = function(feature) {
    switch(feature.properties.COLLDAY){
    case "MON": return{fillColor: 'red' , fillOpacity:0.5};
    case "TUE": return{fillColor:'yellow', fillOpacity:0.5};
    case "WED": return{fillColor:'purple', fillOpacity:0.5};
    case "THU": return{fillColor:'blue', fillOpacity:0.5};
    case "FRI": return{fillColor:'green', fillOpacity:0.5};

  }};*/

var myStyleSum = function(feature){switch(feature.properties.COLLDAY){
       case"MON": return {fillColor:"#ffc34d",fillOpacity:0.3,color:"#ffbb33"};
       case"TUE":return {fillColor:"#ff1aff",fillOpacity:0.3, color:"#ff1aff"};
       case"WED":return{fillColor:" #66ff99",fillOpacity:0.3, color:" #66ff99"};
       case"THU":return{fillColor:"#66b3ff", fillOpacity:0.3, color:"#66b3ff"};
       case"FRI":return{fillColor:"#ff1a1a", fillOpacity:0.3,color:"#ff1a1a"};
;};}

var myFeatureGroup;
var x=0;
$("button").click(function(){
  myFeatureGroup.clearLayers();
  var y=$(this).val();
  if (y==1){
    x--;
  }
  if (y==2){
    x++;
  }
   console.log(x);
  if(x===0){

    setSlideOne();
  }else if(x==1){
    setSlideTwo();
  }else if(x==2){
    setSlideThree();
  }else if(x==3){
    setSlideFour();
  }else if(x==4){
    setSlideFive()
  }else if(x==5){
    setSlideSix()
  }
})
$('#button1').hide();
var setSlideOne = function() {  $.ajax(dataset).done(function(data) {
  map.setView(new L.LatLng(40.000,-75.1090), 11);
    var parsedData = JSON.parse(data);
     myFeatureGroup = L.geoJson(parsedData, {
      onEachFeature: eachFeature,
      style: myStyleMon,
    }).addTo(map);
    console.log(myFeatureGroup);
  });
  $('h1').text("Monday Garbage Collection");
    $('#button1').hide();

};

var setSlideTwo = function() { $.ajax(dataset).done(function(data) {
  map.setView(new L.LatLng(40.000,-75.1090), 11);
    var parsedData = JSON.parse(data);
     myFeatureGroup = L.geoJson(parsedData, {
      onEachFeature: eachFeature,
      style: myStyleTue,
    }).addTo(map);
    console.log(myFeatureGroup);
  });
  $('h1').text("Tuesday Garbage Collection");
  $('#button1').show();
  $('#button2').show();
};

var setSlideThree = function() {$.ajax(dataset).done(function(data) {
  map.setView(new L.LatLng(40.000,-75.1090), 11);
    var parsedData = JSON.parse(data);
     myFeatureGroup = L.geoJson(parsedData, {
      onEachFeature: eachFeature,
      style: myStyleWed,
    }).addTo(map);
    console.log(myFeatureGroup);
  });
  $('h1').text("Wednesday Garbage Collection");
  $('#button1').show();
  $('#button2').show();
};

var setSlideFour = function() {$.ajax(dataset).done(function(data) {
  map.setView(new L.LatLng(40.000,-75.1090), 11);
    var parsedData = JSON.parse(data);
     myFeatureGroup = L.geoJson(parsedData, {
      onEachFeature: eachFeature,
      style: myStyleThu,
    }).addTo(map);
    console.log(myFeatureGroup);
  });
  $('h1').text("Thursday Garbage Collection");
  $('#button1').show();
  $('#button2').show();
};

var setSlideFive = function() {$.ajax(dataset).done(function(data) {
  map.setView(new L.LatLng(40.000,-75.1090), 11);
    var parsedData = JSON.parse(data);
     myFeatureGroup = L.geoJson(parsedData, {
      onEachFeature: eachFeature,
      style: myStyleFri,
    }).addTo(map);
    console.log(myFeatureGroup);
  });
  $('h1').text("Friday Garbage Collection");
  $('#button1').show();
  $('#button2').show();
};

var setSlideSix = function() {$.ajax(dataset).done(function(data) {
  map.setView(new L.LatLng(40.000,-75.1090), 11);
    var parsedData = JSON.parse(data);
     myFeatureGroup = L.geoJson(parsedData, {
      onEachFeature: eachFeature,
      style: myStyleSum,
    }).addTo(map);
    console.log(myFeatureGroup);
  });
  $('h1').text("Garbage Collection Summary");
  $('#button2').hide();
  $('#button1').show();
};
setSlideOne();


/*$(document).ready(function() {
  $.ajax(dataset).done(function(data) {
    var parsedData = JSON.parse(data);
    var myFeatureGroup = L.geoJson(parsedData, {
      onEachFeature: eachFeature,
      style: myStyle,
      filter: myFilter
    }).addTo(map);
  });
});*/

$(document).ready(function() {
  $.ajax(dataset).done(function(data) {
    var parsedData = JSON.parse(data);
    var myFeatureGroup = L.geoJson(parsedData, {
      onEachFeature: eachFeature,
      filter: myFilter
    }).addTo(map);
    console.log(myFeatureGroup);
  });
});


var showResults = function() {
  /* =====================
  This function uses some jQuery methods that may be new. $(element).hide()
  will add the CSS "display: none" to the element, effectively removing it
  from the page. $(element).hide() removes "display: none" from an element,
  returning it to the page. You don't need to change this part.
  ===================== */
  $('#intro').hide();
  $('#results').show();
};

/* =====================
Leaflet Configuration
===================== */

var map = L.map('map', {
  center: [40.000, -75.1090],
  zoom: 11
});
var Stamen_TonerLite = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
}).addTo(map);
