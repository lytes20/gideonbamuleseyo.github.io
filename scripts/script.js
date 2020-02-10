const toggleThemeButton = document.getElementById("toggle-theme");
let themePreference = localStorage.getItem("themePreference");

const containerDiv = document.getElementsByClassName("container");
const skillsContainer = document.querySelector(".skills-container");
const toolsContainer = document.querySelector(".tools-container");
const cardDiv = document.getElementById("card");
const aTag = document.getElementsByTagName("a");

// ------ function calls
addSkills(skillsContainer, skills, "skill")
addSkills(toolsContainer, tools, "tool")
// ------ End of function calls


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
    skillDiv.className = `${item}-container`;
    skillDiv.innerHTML = `${data}`;
    parentElement.appendChild(skillDiv);
  });
}
