var timeDisplayEl = $('#currentDay')

// Current day and time
function displayTime() {

var currentTime = moment().format ('MMMM Do YYYY, h:mm:ss a');
timeDisplayEl.text(currentTime);
console.log("Tick tock");

}


// Create timeblocks on page 

// Text input when user selects time block

// Handle save button 
setInterval(displayTime, 1000);
