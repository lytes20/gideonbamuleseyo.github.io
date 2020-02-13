const toggleThemeButton = document.getElementById("toggle-theme");
let themePreference = localStorage.getItem("themePreference");

const header = document.querySelector("header");
const containerDiv = document.getElementsByClassName("container");
const skillsContainer = document.querySelector(".skills-container");
const toolsContainer = document.querySelector(".tools-container");
const cardDiv = document.getElementById("card");
const aTag = document.getElementsByTagName("a");
let lines = document.getElementsByClassName("line");
var lettersArray = [];

// ------ function calls
addSkills(skillsContainer, skills, "skill");
addSkills(toolsContainer, tools, "tool");
// ------ End of function calls

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
  setTimeout(function() {
    line.parentElement.style.opacity = 1;
    line.className = "line in";
  }, 400 + index * 80);

};

const handleWordsAnimation = () => {
  for (var i = 0; i < lines.length; i++) {
    console.log(lines)
    // lines
    lines[i].className = "line behind"
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
    skillDiv.className = `${item}-container`;
    skillDiv.innerHTML = `${data}`;
    parentElement.appendChild(skillDiv);
  });
}
