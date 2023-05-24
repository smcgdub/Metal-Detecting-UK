// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("topButton").style.display = "block";
  } else {
    document.getElementById("topButton").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Show/hide password button 
function showPassword() {
  let password = document.getElementById("pwd");
  if (password.type === "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
}

// Get current location button 
function getCurrentLocation() {
  console.log("getCurrentLocation function started");
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      var positionInfo = `${position.coords.latitude}, ${position.coords.longitude}`;
      document.getElementById("search_location").value = positionInfo;
    });
  } else {
    alert("Sorry, your browser does not support HTML5 geolocation.");
  }
}

function callArchiSearch() {

  // countryLat = document.getElementById('lat').value;
  // countryLong = document.getElementById('long').value;

  let searchLocation = document.getElementById('search_location').value;
  let pwd = document.getElementById('pwd').value;
  let urlCoordinates = searchLocation;

  // let urlCoordinates = countryLat + '%2C' + countryLong;

  // search_location
  let urlParameters = "&search_range=10000&pwd=" + pwd + "&SearchType=freesearch";

  // let urlCoordinates = 53.528680 + '%2C' + -2.123737;

  console.log(urlCoordinates);

  // window.open("http://localhost:8080/login?cid="+ myu +"&pwd="+ myp ,"MyTargetWindowName");
  window.open(
    "https://www.archiuk.com/cgi-bin/archi_new_search_engine.pl?search_location=" + urlCoordinates +
    urlParameters

    // "https://www.archiuk.com/cgi-bin/web-archi.pl?ARCHIFormFreeSearch=${urlCoordinates}&SearchType=freesearch&distance=10000"


    // "https://www.archiuk.com/placenames"
  );
}

// Load monthly subscription page
function chooseMonthlyPlan() {
  window.open("subscribe_m.htm", "_self");
}

// Load annual subscription page
function chooseYearlyPlan() {
  window.open("subscribe_y.htm", "_self");
}