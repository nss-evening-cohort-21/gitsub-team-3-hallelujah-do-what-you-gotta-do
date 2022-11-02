import { reposArr } from "../data/arrays.js";
import { projectsArr } from "../data/arrays.js";
import { packagesArr } from "../data/arrays.js";

import { renderToDom } from "../utils/renderToDom.js";
import { navBarOnDom } from "../components/navBarOnDom.js";

// querySelectors
const navBar = document.querySelector("#navBar");



// navBar functions
const graham = () => {
  console.log("Overview Button");
}

const navRepos = () => {
  console.log("Repositories Button"); 
}

const navProjects = () => {
  console.log("Projects Button");
}

const navPackages = () => {
  console.log("Packages Button"); 
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
