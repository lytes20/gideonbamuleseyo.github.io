const toggleThemeButton = document.getElementById("toggle-theme");
let themePreference = localStorage.getItem("themePreference");

// Variable Declarations
const header = document.querySelector("header");
const actualFooterWrapper = document.querySelector(".actual-footer-wrapper");
const containerDiv = document.getElementsByClassName("container");
const skillsContainer = document.querySelector(".skills-container");
const toolsContainer = document.querySelector(".tools-container");
const experienceContainer = document.querySelector(".experience-container");
const projectsContainer = document.querySelector(".projects-container")
const cardDiv = document.getElementById("card");
const aTag = document.getElementsByTagName("a");
const main = document.querySelector(".main");
let lines = document.getElementsByClassName("line");
var lettersArray = [];

// ------ function calls
addSkills(skillsContainer, skills, "skill");
addSkills(toolsContainer, tools, "tool");
addWorkExperience();
addProjects();
// ------ End of function calls
// --- some chores
actualFooterWrapper.style.top = `${header.clientHeight}px`;
actualFooterWrapper.style.height = `calc(100vh - ${header.clientHeight}px)`;
// console.log(header.clientHeight)
// --- End chores
/**
 * Split letters in the divs and put them in spans
 * @param {HTMLCollection} word - div containing the letters
 * @returns {Array}
 */
const splitWords = word => {
  let content = word.innerHTML;
  word.innerHTML = "";
  let letters = [];
  for (var i = 0; i < content.length; i++) {
    var letter = document.createElement("span");
    letter.className = "letter";
    letter.innerHTML = content.charAt(i);
    word.appendChild(letter);
    letters.push(letter);
  }
  return letters;
};

/**
 * Handles actual animation
 * @param {HTMLElement} letter - span containing the letter to be animated
 *  * @param {Number} index - position of the letter in the letters array
 * @returns {void}
 */
const animateLine = (line, index) => {
  setTimeout(() => {
    main.classList.add("full-height");
  }, 400);
  setTimeout(function() {
    line.style.opacity = 1;
    line.className = "line in";
  }, 1200 + index * 80);
};

const handleWordsAnimation = () => {
  for (var i = 0; i < lines.length; i++) {
    // lines
    lines[i].className = "line behind";
    animateLine(lines[i], i);
  }
};
handleWordsAnimation();

const handleScrollToDos = () => {
  if (window.pageYOffset === 0) {
    header.classList.remove("header-colored");
  } else {
    header.classList.add("header-colored");
  }
};
const scrollHandle = () => {
  window.addEventListener("scroll", handleScrollToDos);
};
scrollHandle();

toggleThemeButton.addEventListener("click", changeToDarkTheme);
// colors
// #333

/**
 * Handles changing the themes
 * @returns {void}
 */
function changeToDarkTheme() {
  let isDarkThemeSelected = JSON.parse(localStorage.getItem("isDark"));
  console.log(isDarkThemeSelected);
  setUp(isDarkThemeSelected);
  localStorage.setItem("isDark", !isDarkThemeSelected);
}

function setUp(selection) {
  console.log("Setup is called with", selection);
  if (!selection) {
    document.body.style.backgroundColor = "#121212";
    //   setting styles
    containerDiv[0].style.color = "#90caf9";
    Object.assign(cardDiv.style, {
      border: "1px solid #333",
      backgroundColor: "#333"
    });
    toggleThemeButton.classList.add("button-dark-theme");
    aTag[0].style.color = "white";
  } else {
    document.body.style.backgroundColor = "white";
    containerDiv[0].style.color = "black";
    Object.assign(cardDiv.style, {
      border: "1px solid #333",
      backgroundColor: "white"
    });
    toggleThemeButton.classList.remove("button-dark-theme");
    aTag[0].style.color = "#f48fb1";
  }
}

/**
 * Handles addingSkills to
 * @returns {void}
 */
function addSkills(parentElement, dataArray, item) {
  dataArray.map(data => {
    let skillDiv = document.createElement("div");
    skillDiv.className = "skills-item";
    skillDiv.innerHTML = `${data}`;
    parentElement.appendChild(skillDiv);
  });
}

/**
 * Handles addingExperience to
 * @returns {void}
 */
function addWorkExperience() {
  workExperience.map(experience => {
    let experienceDiv = document.createElement("div");
    experienceDiv.className = `experience-item`;
    experienceDiv.innerHTML = `
      <div class="company-logo-container">
      <img src=${experience.imagePath} alt="company logo" class="company-logo"/>
    </div>
    <a href=${experience.website} target="_blank">${experience.name}</a>
    `;
    experienceContainer.appendChild(experienceDiv);
  });
}

/**
 * Handles addingProjects
 * @returns {void}
 */
function addProjects() {
  projects.map(project => {
    let projectDiv = document.createElement("div");
    projectDiv.className = `project-item`;
    projectDiv.innerHTML = `
      <div class="company-logo-container">
      <img src=${project.imagePath} alt="company logo" class="company-logo"/>
    </div>
    <div class="links">
    <a href=${project.website} target="_blank">project</a>
    <span class="separator"></span>
    <a href=${project.repo} target="_blank">repository</a>
    </div>

    `;
    projectsContainer.appendChild(projectDiv);
  });
}