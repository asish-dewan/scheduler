var displayDateEl = $('#currentDay');
var saveButton = $(".saveBtn");

// Current day and time
function displayDate() {
    var currentDay = moment().format('dddd MMMM Do');
    displayDateEl.text(currentDay);
    console.log("Today is the day");
}

$(document).ready(function() {
    // Save button event listener

    $(".saveBtn").on("click", function() {

        var eventText = $(this).siblings(".description").val();
        var time = $(this).siblings().attr("id");

        // Save event and time to localStorage

        localStorage.setItem(eventText, time);
    })

    // Time block indicator


// Display item from local storage
$("#8am .description").val(localStorage.getItem("8am"));
$("#9am .description").val(localStorage.getItem("9am"));

});




// Create event listener when save button is clicked

displayDate();