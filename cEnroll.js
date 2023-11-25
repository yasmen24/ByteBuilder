
// Function to filter courses based on tutor and prerequisite
function filterCourses() {
    var tutorFilter = document.getElementById("tutorFilter");
    var selectedTutor = tutorFilter.value;

    var prerequisitesFilter = document.getElementById("prerequisitesFilter");
    var selectedPrerequisite = prerequisitesFilter.value;

    var courseCards = document.getElementsByClassName("course");

    for (var i = 0; i < courseCards.length; i++) {
        var courseCard = courseCards[i];
        var tutor = courseCard.getAttribute("data-tutor");
        var prerequisites = courseCard.getAttribute("data-prerequisites");

        var tutorMatch = selectedTutor === "" || tutor === selectedTutor;
        var prerequisiteMatch =
            selectedPrerequisite === "" || prerequisites.includes(selectedPrerequisite);

        if (tutorMatch && prerequisiteMatch) {
            courseCard.style.display = "block"; // Show the course card
        } else {
            courseCard.style.display = "none"; // Hide the course card
        }
    }
}
