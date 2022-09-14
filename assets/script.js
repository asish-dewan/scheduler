var timeDisplayEl = $('#currentDay')

// Current day and time
function displayDate() {

var currentDay = moment().format ('dddd MMMM Do');
timeDisplayEl.text(currentDay);
console.log("Today is the day");

}


// Create timeblocks on page 

// Text input when user selects time block

// Handle save button 



displayDate();