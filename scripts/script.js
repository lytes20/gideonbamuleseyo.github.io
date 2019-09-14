const toggleThemeButton = document.getElementById("toggle-theme");
let isDark = false;

toggleThemeButton.addEventListener("click", changeToDarkTheme);
// colors
// #333

/**
 * Handles changing the themes
 * @returns {void}
 */
function changeToDarkTheme() {
  const containerDiv = document.getElementsByClassName("container");
  const cardDiv = document.getElementById("card");
  const aTag = document.getElementsByTagName('a');

  if (!isDark) {
    document.body.style.backgroundColor = "#121212";
    //   setting styles
    containerDiv[0].style.color = "#90caf9";
    Object.assign(cardDiv.style, { border: "1px solid #333", backgroundColor:"#333" });
    toggleThemeButton.classList.add("button-dark-theme");
    aTag[0].style.color = "white"

    isDark = true;
  } else {
    document.body.style.backgroundColor = "white";
    containerDiv[0].style.color = "black";
    Object.assign(cardDiv.style, { border: "1px solid #333", backgroundColor:"white" });
    toggleThemeButton.classList.remove("button-dark-theme");
    aTag[0].style.color = "#f48fb1"

    isDark = false;
  }
}
