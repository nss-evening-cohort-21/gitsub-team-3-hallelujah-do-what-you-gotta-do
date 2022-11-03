// Arrays
import { reposArr } from "../data/arrays.js";
import { projectsArr } from "../data/arrays.js";
import { packagesArr } from "../data/arrays.js";
// Functions
import { renderToDom } from "../utils/renderToDom.js";
// Components
import { navBarOnDom } from "../components/navBarOnDom.js";
import { footerOnDom } from "../components/footerOnDom.js";
import { profileOnDom } from "../components/profileOnDom.js";
import { repoPageForm } from "../components/repoPageFormOnDom.js";

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
// elf --- Repo Page
const repoCardStrOnDom = () => {
  const cardDivString = `
  <div class="input-group mb-3">
    <input type="text" class="form-control" placeholder="Search for Repositories..." aria-describedby="basic-addon1">
    <div class="dropdown">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Dropdown button
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a class="dropdown-item" href="#">Action</a>
        <a class="dropdown-item" href="#">Another action</a>
        <a class="dropdown-item" href="#">Something else here</a>
      </div>
    </div>
  </div>
  <div id="repoPageCardDivContainer" class="card-div-container overflow-auto"></div>`
  let cardString = ``;
  for (const obj of reposArr) {
    cardString += `
  <div class="card mb-8" style="">
    <div class="row g-0">
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${obj.name}</h5>
          <p class="card-text">${obj.description}</p>
          <p class="card-text"><small class="text-muted">${obj.type}</small></p>
          <button type="button" class="btn btn-outline-secondary btn-sm">
          <span ><i class="bi bi-star"></i></span> Star
        </button>
        </div>
      </div>
    </div>
  </div>`
  }
  renderToDom("#cardContainer", cardDivString);
  renderToDom("#repoPageCardDivContainer", cardString);
}
const langArrConstructor = () => {
  const langArr = [];
  if (document.querySelector('#checkJs').checked) {
    langArr.push('js');
  }
  if (document.querySelector('#checkHtml').checked) {
    langArr.push('html');
  }
  if (document.querySelector('#checkCss').checked) {
    langArr.push('css');
  }
  return langArr;
}
const addRepo = (e) => {
  e.preventDefault();
  const newRepo = {
    id: reposArr.length + 1,
    name: document.querySelector('#repoPageInputName').value,
    pinned: false,
    favorite: false,
    description: document.querySelector('#repoPageInputDescription').value,
    type: langArrConstructor()
  }
  reposArr.push(newRepo);
  repoCardStrOnDom();
  renderToDom('#formContainer', repoPageForm);
  repoPageForm.reset();
}
const navRepos = () => {
  repoCardStrOnDom();
  renderToDom('#formContainer', repoPageForm);
}
// elf --- Repo Page End

const navProjects = () => {
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
formContainer.addEventListener('submit', addRepo)


const startApp = () => {
  renderToDom("#navBar", navBarOnDom);
  renderToDom("#profileDiv", profileOnDom);
  renderToDom('#pageFooter', footerOnDom);
  graham();
};

startApp();
