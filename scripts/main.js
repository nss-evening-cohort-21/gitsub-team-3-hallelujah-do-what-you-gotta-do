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
import { repoPageFormOnDom } from "../components/repoPageFormOnDom.js";
import { repoCardDivString } from "../components/repoCardDivOnDom.js";
import { createPackage } from "../components/packageFormOnDom.js";
import { packageFormOnDom } from "../components/packageFormOnDom.js";
import { packagesOnDom } from "../components/packageFormOnDom.js";
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
const typeConstructor = (obj) => {
  let langStr = '';
  if (obj.type.js) {
    langStr += ' JS';
  }
  if (obj.type.css) {
    langStr += ' CSS';
  }
  if (obj.type.html) {
    langStr += ' HTML';
  }
  return langStr;
}
const repoCardStrOnDom = () => {
  let cardString = ``;
  for (const obj of reposArr) {
    if (!obj.favorite) {
      cardString += `
      <div class="card mb-8" style="">
        <div class="row g-0">
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${obj.name}</h5>
              <p class="card-text">${obj.description}</p>
              <p class="card-text"><small class="text-muted">${typeConstructor(obj)}</small></p>
              <button type="button" class="btn btn-outline-secondary btn-sm" id="starBtn--${obj.id}">
              <span ><i class="bi bi-star"></i></span> Star
              </button>
            </div>
          </div>
        </div>
      </div>`;
    } else if (obj.favorite) {
      cardString += `
      <div class="card mb-8" style="">
        <div class="row g-0">
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${obj.name}</h5>
              <p class="card-text">${obj.description}</p>
              <p class="card-text"><small class="text-muted">${typeConstructor(obj)}</small></p>
              <button type="button" class="btn btn-outline-secondary btn-sm" id="starBtn--${obj.id}">
              <span ><i class="bi bi-star-fill"></i></span> Star
            </button>
            </div>
          </div>
        </div>
      </div>`;
    }
  }
  renderToDom("#cardContainer", repoCardDivString);
  renderToDom("#repoPageCardDivContainer", cardString);
}
const langArrConstructor = (obj) => {
  document.querySelector('#checkJs').checked ? obj.type.js = true : obj.type.js = false;
  document.querySelector('#checkHtml').checked ? obj.type.html = true : obj.type.html = false;
  document.querySelector('#checkCss').checked ? obj.type.css = true : obj.type.css = false;
}
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
  repoCardStrOnDom();
  renderToDom('#formContainer', repoPageFormOnDom);
  repoPageForm.reset();
}
const starRepoBtn = (e) => {
  if (e.target.id.includes('starBtn')) {
    const starBtn = e.target
    const [, btnId] = starBtn.id.split('--');
    const starIndex = reposArr.findIndex(obj =>
      obj.id === Number(btnId));
    const starredRepo = reposArr[starIndex];
    starredRepo.favorite = true;
    if (!starBtn.innerHTML.includes('fill')) {
      starredRepo.favorite = true;
      starBtn.innerHTML = '<span ><i class="bi bi-star-fill"></i></span> Star'
    } else if (starBtn.innerHTML.includes('fill')) {
      starredRepo.favorite = false;
      starBtn.innerHTML = '<span ><i class="bi bi-star"></i></span> Star'
    }
    console.log(starredRepo);
  }
}
const navRepos = () => {
  formScrollRemove()


  repoCardStrOnDom();
  renderToDom('#formContainer', repoPageFormOnDom);
}
const repoSearch = (e) => {
  if (e.target.id === "repoSearch") {
    console.log(e.target.value);
  }
}
// elf --- Repo Page End

// AB -- Projects Page 

const projectsStringOnDom = () => {
  const projectsDivString = `
    <div class="input-group mb-3">
      <input type="text" class="form-control" placeholder="Search all projects" aria-describedby="basic-addon1">
    </div>
    <div class="card">
      <div class="card-body">Number of projects open - number of projects closed.</div>
      <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Sort</button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Project Name</a></li>
          <li><a class="dropdown-item" href="#">Date Added</a></li>
        </ul>
      </div>
    </div>
    <div id="projectsDivContainer" class="projects-div-container"></div>`
  let projectsString = ``;
  for (const project of projectsArr) {
    projectsString += `
      <div class="card text-bg-light mb-3" style="max-width: 100%;">
        <div class="card-header">${project.dateAdded}</div>
        <div class="card-body project-card">
          <h5 class="card-title">${project.name}</h5>
          <p class="card-text">${project.description}.</p>
        </div>
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
  description: document.querySelector("#projectDescription").value,
  dateAdded: document.querySelector("#dateAdded").value
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

// wbv -- packages page start 




const navPackages = () => {
  packagesOnDom();
  packageFormOnDom();
  const packForm = document.querySelector("#packageForm");
  packForm.addEventListener('submit', createPackage);
  const clearDiv = ``;
  renderToDom("#formContainer", clearDiv);
};



// wbv -- packages page end





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
cardContainer.addEventListener('click', starRepoBtn)
cardContainer.addEventListener('keyup', repoSearch)
formContainer.addEventListener('submit', addProject);


const startApp = () => {
  renderToDom("#navBar", navBarOnDom);
  renderToDom("#profileDiv", profileOnDom);
  renderToDom('#pageFooter', footerOnDom);
  graham();
};

startApp();
