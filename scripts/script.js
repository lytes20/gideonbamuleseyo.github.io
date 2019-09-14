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
  if (!isDark) {
    document.body.style.backgroundColor = "#121212";
    //   setting styles
    containerDiv[0].style.color = "#90caf9";
    Object.assign(cardDiv.style, { border: "1px solid #333" });
    toggleThemeButton.classList.add("button-dark-theme");

    isDark = true;
  } else {
    document.body.style.backgroundColor = "white";
    containerDiv[0].style.color = "black";
    Object.assign(cardDiv.style, { border: "1px solid #333" });
    toggleThemeButton.classList.remove("button-dark-theme");
    isDark = false;
  }
}
