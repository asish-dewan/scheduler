var timeDisplayEl = $('#currentDay');
var description = document.getElementsByClassName("description");

// Current day and time
function displayDate() {

var currentDay = moment().format ('dddd MMMM Do');
timeDisplayEl.text(currentDay);
console.log("Today is the day");

}

// Save item to local storage 

function saveEvent(){

    var eventText= {
        description: description.value,
    };

    localStorage.setItem("eventText", JSON.stringify(eventText))
    console.log("this is saved");
}

// Get item from local storage

function renderEvent(){

    var description = JSON.parse(localStorage.getItem("eventText"));
    if (description === null) {
        document.getElementsByClassName("description").innerHTML = eventText.value;
    } else {
    return;
    }

}

// Create event listener when save button is clicked




displayDate();