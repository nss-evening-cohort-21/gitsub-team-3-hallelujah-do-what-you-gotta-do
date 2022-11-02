import { reposArr } from "../data/arrays.js";
import { projectsArr } from "../data/arrays.js";
import { packagesArr } from "../data/arrays.js";

import { renderToDom } from "../utils/renderToDom.js";
import { navBarOnDom } from "../components/navBarOnDom.js";

// querySelectors
const navBar = document.querySelector("#navBar");

const cardContainer = document.querySelector("#cardContainer");

const formContainer = document.querySelector("#formContainer");


// navBar functions
const graham = () => {
  let cardString = "cards";
  let formString = "form";
  renderToDom("#cardContainer", cardString);
  renderToDom("#formContainer", formString);
};

const navRepos = () => {
  let cardString = "cardddddds";
  let formString = "form";
  renderToDom("#cardContainer", cardString);
  renderToDom("#formContainer", formString); 
}

const navProjects = () => {
  let cardString = "cards";
  let formString = "forrrrrrm";
  renderToDom("#cardContainer", cardString);
  renderToDom("#formContainer", formString);
}

const navPackages = () => {
  let cardString = "cards";
  let formString = "feeeeeorm";
  renderToDom("#cardContainer", cardString);
  renderToDom("#formContainer", formString);
}


// navBar event listener function
const navigate = (e) => {
  if (e.target.id === "overviewBtn") {
    graham();
  } else if (e.target.id === "projectsBtn") {
    navProjects();
  } else if (e.target.id === "packagesBtn") {
    navPackages();
  } else if (e.target.id === "reposBtn") {
    navRepos();
  }
};


// event listeners
navBar.addEventListener("click", navigate);


const startApp = () => {
  renderToDom("#navBar", navBarOnDom);
};

startApp();
