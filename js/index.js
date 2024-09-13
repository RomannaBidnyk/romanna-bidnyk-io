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
    project.innerText = repositories[i].name;

    const link = document.createElement("a");
    link.href = repositories[i].html_url;
    link.innerText = "GitHub";
    link.target = "_blank";

    project.appendChild(link);
    projectsList.appendChild(project);
  }
}
