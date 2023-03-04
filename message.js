// Check if the user has already seen the popup
if (!localStorage.getItem('popupShown')) {
    // If not, show the popup and set the flag
    var popup = document.getElementById('popup');
    popup.style.display = 'block';
    localStorage.setItem('popupShown', true);
  }
  
  // Add event listener to the close button
  var closeButton = document.getElementById('close');
  closeButton.addEventListener('click', function() {
    // Hide the popup and remove it from the DOM
    popup.style.display = 'none';
    popup.parentNode.removeChild(popup);
  });
  
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


var isLoggedIn = false;

function showMessage() {

  // Get the input values
  var username = document.getElementsByName("uname")[0].value;
  var password = document.getElementsByName("psw")[0].value;

  // Get the message element
  var messageElement = document.getElementById("message");

  // Check if the values are correct
  if (username === "redflag" && password === "redflag") {
    // Redirect to another page
    messageElement.innerHTML = "Welcome back, Christian.";
    setTimeout(function(){
      modal.style.display = "none";
    }, 3000);

    alert("You are logged in. You may now access the upload and download pictures below");
    
    // Set isLoggedIn to true
    isLoggedIn = true;
    // Show the description element

    document.getElementById("hiddentext").style.display = "block";
    document.getElementById("hiddentext2").style.display = "block";
    document.getElementById("hiddentext3").style.display = "block";
    document.getElementById("hiddentext4").style.display = "block";
  } else {
    // Display an error message
    messageElement.innerHTML = "Incorrect username or password";
    // Remove the message after 2 seconds
    setTimeout(function() {
      messageElement.innerHTML = "";
    }, 2000);
    
  }
}


/* UPLOAD PICTURES*/ 
function showmessage2() {
    if (isLoggedIn) {
      alert('Your Logged In but this feature is not yet available, but soon you can upload pictures here');
    } else {
      alert('Please log in first to upload pictures.');
    }
  }
/* DOWNLOAD PICTURES*/ 
  function downloadPictures() {
    if (isLoggedIn) {
      window.location.href = 'https://drive.google.com/drive/folders/1TNFrhI3ksVSK-NwVBpjjuO-kpDRF8aXc?usp=sharing';
    } else {
      alert('Please log in first to download pictures.');
    }
  }


// Code to display the pop-up when the page loads
window.onload = function() {
    document.getElementById('popup').style.display = 'block';
  }
  // Code to close the pop-up when the close button is clicked
  document.getElementById('close').onclick = function() {
    document.getElementById('popup').style.display = 'none';
  }

  