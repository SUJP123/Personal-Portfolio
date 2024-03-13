document.addEventListener("DOMContentLoaded", function () {
    var button = document.getElementById("toggle-skills-btn");
    var technicalSkills = document.getElementById("technical-skills");
    var engineeringSkills = document.getElementById("engineering-skills");

    button.addEventListener("click", function () {
        if (technicalSkills.style.display === "none") {
            technicalSkills.style.display = "block";
            engineeringSkills.style.display = "none";
        } else {
            technicalSkills.style.display = "none";
            engineeringSkills.style.display = "block";
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Toggle Coursework button
    const toggleButton = document.getElementById("toggle-coursework");
    const bmeCoursework = document.getElementById("bme-coursework");
    const csCoursework = document.getElementById("cs-coursework");

    toggleButton.addEventListener("click", function () {
        if (bmeCoursework.style.display === "none") {
            bmeCoursework.style.display = "block";
            csCoursework.style.display = "none";
        } else {
            bmeCoursework.style.display = "none";
            csCoursework.style.display = "block";
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const projToggle = document.getElementById('toggle-projects-btn');
    const csProjects = document.getElementById('cs-projects');
    const engProjects = document.getElementById('eng-projects');

    projToggle.addEventListener("click", function () {
    if (csProjects.style.display === "none") {
      csProjects.style.display = "block";
      engProjects.style.display = "none";
    } else {
      csProjects.style.display = "none";
      engProjects.style.display = "block";
    }
  });
});