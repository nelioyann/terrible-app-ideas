const elToggle = document.querySelector(".toggle-input");
const elBody = document.querySelector("body");
// Extract the dark and light colors from the css
let dark = getComputedStyle(document.documentElement).getPropertyValue(
  "--color-dark"
);
let light = getComputedStyle(document.documentElement).getPropertyValue(
  "--color-light"
);

const changeUiTheme = (theme) => {
  if (theme == "light") {
    elBody.classList.remove("theme-dark");
    elBody.classList.add("theme-light");
    document.documentElement.style.setProperty("--background", light);
    document.documentElement.style.setProperty("--foreground", dark);
  } else {
    elBody.classList.remove("theme-light");
    elBody.classList.add("theme-dark");
    document.documentElement.style.setProperty("--background", dark);
    document.documentElement.style.setProperty("--foreground", light);
  }
};

const getPreferedTheme = () => {
  if (!localStorage.getItem("theme")) localStorage.setItem("theme", "dark");
  let preferedTheme = localStorage.getItem("theme");
  return preferedTheme;
};

const updateToggle = (theme) => {
  if (theme === "light") {
    elToggle.checked = true;
  } else {
    elToggle.checked = false;
  }
};

// Retrieve the preference
let preferedTheme = getPreferedTheme();
changeUiTheme(preferedTheme);
updateToggle(preferedTheme);
console.log("First, you prefer", preferedTheme);

// Default theme is retrieved from localstorage or defaulted to dark
let background = preferedTheme === "dark" ? dark : light;
let foreground = preferedTheme === "dark" ? light : dark;

elToggle.addEventListener("click", () => {
  // background = background === light ? dark : light;
  // foreground = foreground === light ? dark : light;
  // document.documentElement.style.setProperty("--background", background);
  // document.documentElement.style.setProperty("--foreground", foreground);

  let preferedTheme = elToggle.checked ? "light" : "dark";
  changeUiTheme(preferedTheme);
  // console.log({preferedTheme})
  localStorage.setItem("theme", preferedTheme);
});
