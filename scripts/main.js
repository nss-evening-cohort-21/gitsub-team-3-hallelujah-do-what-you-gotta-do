// Arrays
import { reposArr } from "../data/arrays.js";
import { projectsArr } from "../data/arrays.js";
import { packagesArr } from "../data/arrays.js";
// Functions
import { renderToDom } from "../utils/renderToDom.js";
import { clearRepoSearch } from "../functions-repo-page/clearRepoSearch.js"
import { repoCardStrOnDom } from "../functions-repo-page/repoCardStrOnDom.js";
import { starRepoBtn } from "../functions-repo-page/starRepoBtn.js";
import { langArrConstructor } from "../functions-repo-page/langArrConstructor.js";
// Components
import { navBarOnDom } from "../components/navBarOnDom.js";
import { footerOnDom } from "../components/footerOnDom.js";
import { profileOnDom } from "../components/profileOnDom.js";
import { repoPageFormOnDom } from "../components/repoPageFormOnDom.js";
import { repoCardDivString } from "../components/repoCardDivOnDom.js";

// querySelectors
const navBar = document.querySelector("#navBar");

const cardContainer = document.querySelector("#cardContainer");

const formContainer = document.querySelector("#formContainer");


// navBar functions
////////////////Graham//////////////////////////////////////
function formScroll() {
  const element = document.getElementById("formContainer");
  element.classList.add("scroll");
}
function formScrollRemove() {
  const element = document.getElementById("formContainer");
  element.classList.remove("scroll");
}

const reposPinned =
  reposArr.filter(word => word.pinned === true)





const graham = () => {

  let cardString = "";
  let formString = "";

  for (const member of reposPinned) {
    cardString += `<div class="card">
    
    <div id="studentCardBody" class="card-body">
      <h5 class="card-title" id="testing"><div id="voldName">${member.name}</div></h5>
      <p class="card-text"></p>
      <p></p>
      <div class="student-card-button-div">
      <button class="sorting-buttons" id="expelStudent--${member.id}">Pin</button>
      </div>
    </div>
  </div>
  </div>
    `
  }

  formScroll();
  for (const member of reposArr) {
    formString += `
    
    <div class="card">
    
    <div id="studentCardBody" class="card-body">
      <h5 class="card-title" id="testing"><div id="voldName">${member.name}</div></h5>
      <p class="card-text"></p>
      <p></p>
      <div class="student-card-button-div">
      <button class="sorting-buttons" id="expelStudent--${member.id}">Pin</button>
      </div>
    </div>
  </div>
  </div>
    `
  }

  renderToDom("#cardContainer", cardString);
  renderToDom("#formContainer", formString);

};

// elf --- Repo Page



const addRepo = (e) => {
  e.preventDefault();
  const newRepo = {
    id: reposArr.length + 1,
    name: document.querySelector('#repoPageInputName').value,
    pinned: false,
    favorite: false,
    description: document.querySelector('#repoPageInputDescription').value,
    type: {}
  }
  langArrConstructor(newRepo);
  reposArr.push(newRepo);
  repoCardStrOnDom(reposArr);
  renderToDom('#formContainer', repoPageFormOnDom);
  repoPageForm.reset();
}

const navRepos = () => {
  formScrollRemove()

  renderToDom("#cardContainer", repoCardDivString);
  repoCardStrOnDom(reposArr);
  renderToDom('#formContainer', repoPageFormOnDom);
}
const repoSearch = (e) => {
  e.preventDefault();
  if (e.target.id === "repoSearch") {
    const searchInput = e.target.value.toLowerCase();
    const searchArr = reposArr.filter(item =>
      item.name.toLocaleLowerCase().includes(searchInput) ||
      item.description.toLocaleLowerCase().includes(searchInput));
    repoCardStrOnDom(searchArr);
  }
}

const repoPageCardFuncs = (e) => {
  clearRepoSearch(e);
  starRepoBtn(e);
}
// elf --- Repo Page End

const navProjects = () => {
  formScrollRemove();
  let formString = "forrrrrrm";
  let cardString = "cards";
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
formContainer.addEventListener('submit', addRepo);
cardContainer.addEventListener('click', repoPageCardFuncs);
cardContainer.addEventListener('keyup', repoSearch);

const startApp = () => {
  renderToDom("#navBar", navBarOnDom);
  renderToDom("#profileDiv", profileOnDom);
  renderToDom('#pageFooter', footerOnDom);
  graham();
};

startApp();
