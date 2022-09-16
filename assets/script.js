var displayDateEl = $('#currentDay');
var eventInput = $("#description");
var saveButton = $("#save");

// Current day and time
function displayDate() {
    var currentDay = moment().format ('dddd MMMM Do');
    displayDateEl.text(currentDay);
    console.log("Today is the day");
}

 // render Event to the DOM
function renderLastRegistered() {
    var description = localStorage.getItem("#description");
    eventInput.textContent = description;
}
// Create event listener when save button is clicked
saveButton.click(function(event) {
    event.preventDefault();

    var description= document.querySelector("#description").value;
    
        localStorage.setItem("description",description);
        renderLastRegistered();

}) 


displayDate();
