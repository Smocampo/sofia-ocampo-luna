//body element
const body = document.body;

// FOOTER==========
let footer = document.createElement("footer");

// Append the footer
body.appendChild(footer);

// Create a date object
const today = new Date();
// Current Year
const thisYear = today.getFullYear();
// footer element
footer = document.querySelector("footer");
// new <p> element
const copyright = document.createElement("p");
// inner html with copyright, name, year
copyright.innerHTML = `\u00A9 Sofía Ocampo-Morales ${thisYear}`
// Append <p>
footer.appendChild(copyright);


// Skills section===========

// list of skills
const skills = ["JavaScript", "HTML", "CSS", "AdobeExpress", "Git", "GitHub"];

// skills section by id
const skillsSection = document.getElementById("Skills");

// skillslist variable
const skillsList = skillsSection.querySelector("ul");

// skills array loop
for (let i=0; i < skills.length; i++){
  const skill = document.createElement("li");
  skill.innerText = skills[i];
  skillsList.appendChild(skill)
}