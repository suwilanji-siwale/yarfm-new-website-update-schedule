// remove 'active' class from all previous buttons
// remove 'active' class from all previous 'tab-content'
// add 'active' class to current clicked button
// add 'active' class to associated 'tab-content of the clicked button

const buttons = document.querySelectorAll(".btn");
buttons.forEach((btn) => {
	btn.addEventListener("click", () => {
		buttons.forEach((btn) => btn.classList.remove("active"));

		btn.classList.add("active");

		// remove active class and replace it with none
		const tabContents = document.querySelectorAll(".tab-content");
		tabContents.forEach((content) => {
			content.className = content.className.replace("active", "");
        });
        
		document.querySelector(btn.dataset.target).classList.add("active");
	});
});

//new schedule script code
// function openDay(evt, dayName) {
//     var i, tabcontent, tablinks;

//     // Hide all tab content
//     tabcontent = document.getElementsByClassName("tabcontent");
//     for (i = 0; i < tabcontent.length; i++) {
//         tabcontent[i].style.display = "none";
//     }

//     // Deactivate all tab buttons
//     tablinks = document.getElementsByClassName("tablinks");
//     for (i = 0; i < tablinks.length; i++) {
//         tablinks[i].className = tablinks[i].className.replace(" active", "");
//     }

//     // Show the selected tab content and mark the button as active
//     document.getElementById(dayName).style.display = "block";
//     evt.currentTarget.className += " active";
// }

// // Get the current day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
// var currentDate = new Date();
// var currentDay = currentDate.getDay();

// // Array to map day index to day name
// var daysOfWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

// // Set the default tab based on the current day
// openDay({ currentTarget: document.getElementsByClassName("tablinks")[currentDay] }, daysOfWeek[currentDay]);



// New code code new

// function openDay(evt, dayName) {
//     var i, tabcontent, tablinks;

//     // Hide all tab content
//     tabcontent = document.getElementsByClassName("tabcontent");
//     for (i = 0; i < tabcontent.length; i++) {
//         tabcontent[i].style.display = "none";
//     }

//     // Deactivate all tab buttons
//     tablinks = document.getElementsByClassName("tablinks");
//     for (i = 0; i < tablinks.length; i++) {
//         tablinks[i].className = tablinks[i].className.replace(" active", "");
//     }

//     // Show the selected tab content and mark the button as active
//     document.getElementById(dayName).style.display = "block";
//     evt.currentTarget.classList.add("active"); // Add the "active" class to the current button
// }

// function openCurrentDay() {
//     var currentDate = new Date();
//     var currentDay = currentDate.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
//     var daysOfWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

//     // Show the tab content for the current day
//     openDay({ currentTarget: document.getElementsByClassName("tablinks")[currentDay] }, daysOfWeek[currentDay]);

//     // Set the background color and text color for the current day button (Sunday in this example)
//     var currentButton = document.getElementsByClassName("tablinks")[currentDay];
//     currentButton.style.backgroundColor = "#5533FF";
//     currentButton.style.color = "#fff";
// }

// // Call the function to open the tab for the current day when the page loads
// openCurrentDay();

// Neeeeeeeeeeeeeew Cooode

function openDay(evt, dayName) {
    var i, tabcontent, tablinks;

    // Hide all tab content
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Deactivate all tab buttons
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the selected tab content and mark the button as active
    document.getElementById(dayName).style.display = "block";
    evt.currentTarget.className += " active";
}

function openCurrentDay() {
    var currentDate = new Date();
    var currentDay = currentDate.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
    var daysOfWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

    // Show the tab content for the current day
    openDay({ currentTarget: document.getElementsByClassName("tablinks")[currentDay] }, daysOfWeek[currentDay]);

   // Check if it's the current day and time to show "Playing Now" label
   var currentHour = currentDate.getHours();
   var currentMinute = currentDate.getMinutes();

   // Define the time ranges for shows
   var showTimes = [
       { startHour: 6, startMinute: 0, endHour: 10, endMinute: 0, showName: "Breakfast Show" },
       { startHour: 10, startMinute: 0, endHour: 14, endMinute: 0, showName: "Gospel Show" },
       { startHour: 14, startMinute: 0, endHour: 18, endMinute: 0, showName: "Overcomer Show" },
       { startHour: 18, startMinute: 0, endHour: 22, endMinute: 0, showName: "Street Interview" },
       { startHour: 22, startMinute: 0, endHour: 6, endMinute: 0, showName: "Street Interview" }
   ];

   for (var i = 0; i < showTimes.length; i++) {
       var show = showTimes[i];

       console.log(currentHour)
       console.log(show.startHour)

       console.log("before the if statement")
       
       if (currentHour >= show.startHour && currentHour < show.endHour) {

        console.log("After the if statement")
           // Show the "Playing Now" label for the current show
           var currentShowLabel = document.querySelector("#" + daysOfWeek[currentDay] + " .gallery-item:nth-child(" + (i + 1) + ") .play-now-label");
           console.log(currentShowLabel)
           if (currentShowLabel) {
               currentShowLabel.classList.remove("suwila");
           }
       } else {

        console.log("Entered the else statement")
           // Hide the "Playing Now" label for shows that are not in the time range
           var otherShowLabel = document.querySelector("#" + daysOfWeek[currentDay] + " .gallery-item:nth-child(" + (i + 1) + ") .play-now-label");
           console.log(otherShowLabel)
           if (otherShowLabel) {
               otherShowLabel.classList.add("suwila");
           }
       }
   }
}

// Call the function to open the tab for the current day when the page loads
document.addEventListener("DOMContentLoaded", openCurrentDay);


// New code playing now button

