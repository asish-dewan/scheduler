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

    function timeIndicator() {
        // Get current time
        var currentTime = moment().hour();
        console.log (currentTime);

    // Loop through time blocks
    $(".time-block").each (function(){
        var blockHour = parseInt($(this).children(".hour").attr("id").split("-")[1]);
        console.log (blockHour);

        if (blockHour < currentTime) {
            $(this).addClass("past");
            $(this).removeClass("future");
            $(this).removeClass("present");
        }
        else if (blockHour === currentTime) {
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }

    })
    }

// Display item from local storage
$("#hour8").siblings(".description").text(localStorage.getItem("hour8"));
$("#hour9").siblings(".description").text(localStorage.getItem("hour9"));
$("#hour10").siblings(".description").text(localStorage.getItem("hour10"));
$("#hour11").siblings(".description").text(localStorage.getItem("hour11"));
$("#hour12").siblings(".description").text(localStorage.getItem("hour12"));
$("#hour13").siblings(".description").text(localStorage.getItem("hour13"));
$("#hour14").siblings(".description").text(localStorage.getItem("hour14"));
$("#hour15").siblings(".description").text(localStorage.getItem("hour15"));
$("#hour16").siblings(".description").text(localStorage.getItem("hour16"));
$("#hour17").siblings(".description").text(localStorage.getItem("hour17"));

timeIndicator();

})



// Create event listener when save button is clicked

displayDate();