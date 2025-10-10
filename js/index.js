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

// Message Form section================


// helper function
function toggleMessagesSection(){
  const messageSection = document.getElementById("Messages");
  const messageList = messageSection.querySelector("ul");
  if (messageList.children.length === 0) {
    messageSection.style.display = "none";
  } else {
    messageSection.style.display = "block";
  }
}

toggleMessagesSection();

// leave message form by name
const messageForm = document.querySelector("form[name=leave_messages]");

// add event listener to "submit"
messageForm.addEventListener("submit", function(event) {
// prevent default
  event.preventDefault() ;

  const userName = event.target.usersName.value;
  const userEmail = event.target.usersEmail.value;
  const userMessage = event.target.usersMessage.value;

  // log three variables
  console.log("Name: ", userName);
  console.log("Email: ", userEmail);
  console.log("Message: ", userMessage);

  // Messages section==
  const messageSection = document.getElementById("Messages");

  // Message unordered list
  const messageList = messageSection.querySelector("ul");

  // New List Item
  const newMessage = document.createElement("li");
  // Inner HTML
  newMessage.innerHTML = `<a href="mailto:${userEmail}">${userName}</a>: <span>${userMessage}</span>`;


  // edit button
  const editButton = document.createElement("button");
  editButton.innerText = "edit";
  editButton.className = "edit-button"
  editButton.type = "button";

  // clicke event to edit button
  editButton.addEventListener("click", function(){
    const messageSpan = newMessage.querySelector("span");
    const newText = prompt("Edit Your Message: ", messageSpan.innerText);
    if (newText !== null){
      messageSpan.innerText = newText;
    }
  })


  newMessage.appendChild(editButton);

  // Create Remove button
  const removeButton = document.createElement("button");
  removeButton.innerText = "remove";
  removeButton.className = "remove-button";
  removeButton.type = "button";

  // Add event listener to Remove button
  removeButton.addEventListener("click", function(){
    const entry = removeButton.parentNode;
    entry.remove();
    toggleMessagesSection();
  });

  // Append the button
  newMessage.appendChild(removeButton);
  // Append the Message
  messageList.appendChild(newMessage);

  // toggle for new messages
  toggleMessagesSection();

  // clear the form
  messageForm.reset();
});