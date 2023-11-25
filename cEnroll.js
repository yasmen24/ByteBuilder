var courses = [
    {
        name: 'AI programming with Python',
        tutor: 'Bashair alsadhan',
        prerequisites: ['Python programming']
    },
    {
        name: "Let's learn Arduino",
        tutor: 'Rama fahad',
        prerequisites: []
    },
    {
        name: 'Java',
        tutor: 'Maryam altuwaijri',
        prerequisites: ['Object-oriented programming']
    },
    {
        name: 'Flutter',
        tutor: 'Munira Al mogren',
        prerequisites: ['Dart programming']
    },
    {
        name: 'Robotics',
        tutor: 'Yasmen al-Suhaibani',
        prerequisites: ['Electronics', 'Programming']
    },
    {
        name: 'Scratch',
        tutor: 'Rama fahad',
        prerequisites: []
    },
    {
        name: 'Python',
        tutor: 'Bashair alsadhan',
        prerequisites: ['Python programming']
    },
    {
        name: 'Front-end Development',
        tutor: 'Maryam altuwaijri',
        prerequisites: ['HTML', 'CSS', 'JavaScript']
    }
];

var tutors = [];
var prerequisites = [];

// Extract unique tutors and prerequisites from the courses array
for (var i = 0; i < courses.length; i++) {
    var course = courses[i];

    // Extract tutors
    if (!tutors.includes(course.tutor)) {
        tutors.push(course.tutor);
    }

    // Extract prerequisites
    for (var j = 0; j < course.prerequisites.length; j++) {
        var prerequisite = course.prerequisites[j];
        if (!prerequisites.includes(prerequisite)) {
            prerequisites.push(prerequisite);
        }
    }
}

// Populate the filter options for tutors
var tutorFilter = document.getElementById("tutorFilter");

// Remove existing options
tutorFilter.innerHTML = '';

var defaultTutorOption = document.createElement("option");
defaultTutorOption.value = "";
defaultTutorOption.textContent = "All Tutors";
tutorFilter.appendChild(defaultTutorOption);

for (var i = 0; i < tutors.length; i++) {
    var tutorOption = document.createElement("option");
    tutorOption.value = tutors[i];
    tutorOption.textContent = tutors[i];
    tutorFilter.appendChild(tutorOption);
}

// Populate the filter options for prerequisites
var prerequisitesFilter = document.getElementById("prerequisitesFilter");

// Remove existing options
prerequisitesFilter.innerHTML = '';

var defaultPrerequisitesOption = document.createElement("option");
defaultPrerequisitesOption.value = "";
defaultPrerequisitesOption.textContent = "All Prerequisites";
prerequisitesFilter.appendChild(defaultPrerequisitesOption);

for (var i = 0; i < prerequisites.length; i++) {
    var prerequisiteOption = document.createElement("option");
    prerequisiteOption.value = prerequisites[i];
    prerequisiteOption.textContent = prerequisites[i];
    prerequisitesFilter.appendChild(prerequisiteOption);
}