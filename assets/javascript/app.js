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