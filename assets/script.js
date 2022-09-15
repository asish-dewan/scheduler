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
    var description = localStorage.getItem("#description").value;
    eventInput.textContent = description;
}
// Create event listener when save button is clicked
saveButton.addEventListener("click", function(event) {
    event.preventDefault();

    var description= document.querySelector("#description").value;

    if (description === ""){
        description.text("Freedom");
    
    }
    else {
        displayMessage ("Successfully saved to Local Storage");

        localStorage.setItem("description",description);
        renderLastRegistered();
    }
}) 


displayDate();
renderLastRegistered ();