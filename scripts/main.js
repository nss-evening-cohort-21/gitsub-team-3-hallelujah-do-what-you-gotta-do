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
import { projectsForm } from "../components/projectsPageFormOnDom.js";

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

  for(const member of reposPinned) {
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
  for(const member of reposArr) {
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
   formScrollRemove()
  
  
  repoCardStrOnDom();
  renderToDom('#formContainer', repoPageForm);
}
// elf --- Repo Page End

// AB -- Projects Page 

const projectsStringOnDom = () => {
  const projectsDivString = `
    <div class="input-group mb-3">
      <input type="text" class="form-control" placeholder="Search all projects" aria-describedby="basic-addon1">
    </div>
    <div id="projectsDivContainer" class="projects-div-container"></div>`
  let projectsString = ``;
  for (const obj of projectsArr) {
    projectsString += `
      <div class="list-group">
        <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">List group item heading</h5>
            <small>3 days ago</small>
          </div>
          <p class="mb-1">Some placeholder content in a paragraph.</p>
          <small>And some small print.</small>
        </a>
        <a href="#" class="list-group-item list-group-item-action">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">List group item heading</h5>
            <small class="text-muted">3 days ago</small>
          </div>
          <p class="mb-1">Some placeholder content in a paragraph.</p>
          <small class="text-muted">And some muted small print.</small>
        </a>
        <a href="#" class="list-group-item list-group-item-action">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">List group item heading</h5>
            <small class="text-muted">3 days ago</small>
          </div>
          <p class="mb-1">Some placeholder content in a paragraph.</p>
          <small class="text-muted">And some muted small print.</small>
        </a>
      </div>`
  }

  renderToDom("#cardContainer", projectsDivString);
  renderToDom("#projectsDivContainer", projectsString);
}

const addProject = (e) => {
  e.preventDefault();
  const newProject = {
  id: projectsArr.length + 1,
  name: document.querySelector("#projectName").value,
  description: document.querySelector("#projectDescription").value
  //dateAdded: ''
  }

  projectsArr.push(newProject);
  projectsStringOnDom();
  renderToDom("#formContainer", projectsForm);
  projectsForm.reset();
}

const navProjects = () => {
  formScrollRemove();

  projectsStringOnDom();
  renderToDom("#formContainer", projectsForm);
}

// AB -- Projects Page End



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
formContainer.addEventListener('submit', addProject);


const startApp = () => {
  renderToDom("#navBar", navBarOnDom);
  renderToDom("#profileDiv", profileOnDom);
  renderToDom('#pageFooter', footerOnDom);
  graham();
};

startApp();
