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
$("#hour-8").siblings(".description").text(localStorage.getItem("hour-8"));
$("#hour-9").siblings(".description").text(localStorage.getItem("hour-9"));
$("#hour-10").siblings(".description").text(localStorage.getItem("hour-10"));
$("#hour-11").siblings(".description").text(localStorage.getItem("hour-11"));
$("#hour-12").siblings(".description").text(localStorage.getItem("hour-12"));
$("#hour-13").siblings(".description").text(localStorage.getItem("hour-13"));
$("#hour-14").siblings(".description").text(localStorage.getItem("hour-14"));
$("#hour-15").siblings(".description").text(localStorage.getItem("hour-15"));
$("#hour-16").siblings(".description").text(localStorage.getItem("hour-16"));
$("#hour-17").siblings(".description").text(localStorage.getItem("hour-17"));
$("#hour-18").siblings(".description").text(localStorage.getItem("hour-18"));

timeIndicator();

})



// Create event listener when save button is clicked

displayDate();