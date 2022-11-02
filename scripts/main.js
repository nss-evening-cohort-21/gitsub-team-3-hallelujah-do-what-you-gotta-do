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
// Eric
const repoCardStrOnDom = () => {
  const cardDivString = `
  <div class="input-group mb-3">
    <input type="text" class="form-control" placeholder="Search for Repositories..." aria-describedby="basic-addon1">
  </div>
  <div id="cardDivContainer" class="card-div-container overflow-auto"></div>`
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
  renderToDom("#cardDivContainer", cardString);
}
const repoFormStrOnDom = () => {
  const formString = `
  <div class="form-div-container" id="formContainerDiv">
    <h3>Create a new repository</h3>
    <form id="repoPageForm">
      <div class="form-group">
        <label for="repoPageInputName">Repository name<span class="red-star">*</span></label>
        <input type="text" class="form-control" id="repoPageInputName" required>
      </div>
      <div class="form-group">
        <label for="repoPageInputDescription">Description</label>
        <input type="text" class="form-control repo-input-description" id="repoPageInputDescription" placeholder="" >
      </div>
      <div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" id="checkJs" value="">
          <label class="form-check-label" for="checkJs">JS</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" id="checkHtml" value="">
          <label class="form-check-label" for="checkHtml">HTML</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" id="checkCss" value="">
          <label class="form-check-label" for="checkCss">CSS</label>
        </div>
      </div>
      <button type="submit" class="btn btn-outline-secondary btn-sm" id="repoPageFormBtn">Create repository</button>
    </form>
  </div>`;
  renderToDom("#formContainer", formString);
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
  repoPageForm.reset();
}
const navRepos = () => {
  repoCardStrOnDom();
  repoFormStrOnDom();

}
// Eric End

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
