//Hamburger menu activation
const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");

hamburger.addEventListener("click", () => {
  navList.classList.toggle("active");
});

// Add Footer
const footer = document.createElement("footer");

footer.style.backgroundColor = "#d8dbfe";
footer.style.padding = "10px";
footer.style.textAlign = "center";

document.body.appendChild(footer);

//Copyright Text in Footer
let today = new Date();
let thisYear = today.getFullYear();

const copyright = document.createElement("p");
copyright.innerHTML = `Romanna Bidnyk &#169; ${thisYear}`;

footer.appendChild(copyright);

// Skills
const skills = [
  "Project Methodologies and Tools: Scrum, Kanban, Jira, Trello, Zephyr, Confluence, TestRail",
  "Programming Languages: Java, JavaScript, Groovy, SQL",
  "CI/CD tools: Jenkins",
  "Version Control: Git",
  "Reporting tools: Allure2, Report Portal",
  "Testing Tools: Selenium, Rest Assured, Appium, TestNG",
  "Test Types Performed: Functional, Regression, Performance, API, Web UI, Testing of Mobile Native Apps (Android & iOS)",
  "AWS Cloud: Amazon Athena, Amazon Simple Storage Service (S3)",
];

const skillsSection = document.querySelector("#skills");
const skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement("li");
  skill.innerText = skills[i];
  skillsList.appendChild(skill);
}

// Messages

let messageForm = document.querySelector('form[name="leave_message"]');
document.querySelector("#messages").hidden = true;

messageForm.addEventListener("submit", (event) =>
  handleSubmittedMessage(event)
);

function handleSubmittedMessage(event) {
  event.preventDefault();

  let name = event.target.usersName.value;
  let email = event.target.usersEmail.value;
  let message = event.target.usersMessage.value;

  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);

  const messageSection = document.querySelector("#messages");
  const messageList = messageSection.querySelector("ul");
  const newMessage = document.createElement("li");

  const emailAndNamePart = `<a href="mailto:${email}" target="_blank">${name}</a>`;
  newMessage.innerHTML = `${emailAndNamePart}: <span>${message}</span>`;

  //remove
  const removeButton = document.createElement("button");
  removeButton.innerText = "remove";
  removeButton.type = "button";

  removeButton.addEventListener("click", (event) => {
    const entry = removeButton.parentNode;
    entry.remove();
    changeMessagesSectionVisibility(messageSection, messageList);
  });

  //edit
  const editButton = document.createElement("button");
  editButton.innerText = "edit";
  editButton.type = "button";

  editButton.addEventListener("click", (event) => {
    const listItem = editButton.parentNode;
    const span = listItem.querySelector("span");
    const changedMessage = prompt("Edit your message:", span.textContent);

    span.textContent = changedMessage;
  });

  newMessage.appendChild(removeButton);
  newMessage.appendChild(editButton);
  messageList.appendChild(newMessage);
  changeMessagesSectionVisibility(messageSection, messageList);

  messageForm.reset();
}

function changeMessagesSectionVisibility(messageSection, messageList) {
  if (messageList.children.length === 0) {
    messageSection.hidden = true;
  } else {
    messageSection.hidden = false;
  }
}

//Projects Section
let repositories;

fetch("https://api.github.com/users/RomannaBidnyk/repos")
  .then((response) => response.json())
  .then((data) => {
    repositories = JSON.parse(JSON.stringify(data));
    if (repositories.length === 0) {
      console.log("No repositories found.");
    } else {
      console.log(repositories);
      repositories.sort(
        (a, b) => new Date(b.updated_at) - new Date(a.updated_at)
      );
      displayRepositories(repositories);
    }
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });

function displayRepositories(repositories) {
  const projectSection = document.querySelector("#projects");
  const projectsList = projectSection.querySelector("ul");

  for (let i = 0; i < repositories.length; i++) {
    const project = document.createElement("li");
    let name = repositories[i].name;
    if (name.startsWith("forage") || name.startsWith("reward")) continue;

    const link = document.createElement("a");
    link.href = repositories[i].html_url;
    link.target = "_blank";

    const repoName = document.createElement("span");
    repoName.innerText = repositories[i].name;

    const githubText = document.createElement("span");
    githubText.innerText = "GitHub";

    link.appendChild(repoName);
    link.appendChild(githubText);

    project.appendChild(link);
    projectsList.appendChild(project);
  }
}
