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
})

// Create event listener when save button is clicked
/* saveButton.click(function(event) {
    event.preventDefault();

    var description= $("#description").val();
    var time = $(saveButton).parent().attr("id");
    
        localStorage.setItem(description, time);

}) 
 */
displayDate();