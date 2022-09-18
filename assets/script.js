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

        localStorage.setItem(time, eventText);
    })

    // Time block indicator


// Display item from local storage
$("#8am").siblings(".description").text(localStorage.getItem("8am"));
$("#9am").siblings(".description").text(localStorage.getItem("9am"));
$("#10am").siblings(".description").text(localStorage.getItem("10am"));
$("#11am").siblings(".description").text(localStorage.getItem("11am"));
$("#12pm").siblings(".description").text(localStorage.getItem("12pm"));
$("#1pm").siblings(".description").text(localStorage.getItem("1pm"));
$("#2pm").siblings(".description").text(localStorage.getItem("2pm"));
$("#3pm").siblings(".description").text(localStorage.getItem("3pm"));
$("#4pm").siblings(".description").text(localStorage.getItem("4pm"));
$("#5pm").siblings(".description").text(localStorage.getItem("5pm"));

})

// Create event listener when save button is clicked

displayDate();