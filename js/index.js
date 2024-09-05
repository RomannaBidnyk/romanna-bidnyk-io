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
