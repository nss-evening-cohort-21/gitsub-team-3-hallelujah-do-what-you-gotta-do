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
const repoCardStrOnDom = () => {
  const cardDivString = `
  <div class="input-group mb-3">
    <input type="text" class="form-control" placeholder="Search for Repositories..." aria-describedby="basic-addon1">
    <div class="dropdown">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="languageBtn" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Language
      </button>
      <div class="dropdown-menu" aria-labelledby="languageBtn">
        <a class="dropdown-item" href="#">Action</a>
        <a class="dropdown-item" href="#">Another action</a>
        <a class="dropdown-item" href="#">Something else here</a>
      </div>
    </div>
    <div class="dropdown">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="sortBtn" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Sort
      </button>
      <div class="dropdown-menu" aria-labelledby="sortBtn">
        <a class="dropdown-item" href="#">Action</a>
        <a class="dropdown-item" href="#">Another action</a>
        <a class="dropdown-item" href="#">Something else here</a>
      </div>
    </div>
  </div>
  <div id="repoPageCardDivContainer" class="card-div-container overflow-auto"></div>`
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
          <p class="card-text"><small class="text-muted">${obj.type}</small></p>
          <button type="button" class="btn btn-outline-secondary btn-sm" id="starBtn--${obj.id}">
          <span ><i class="bi bi-star"></i></span> Star
        </button>
        </div>
      </div>
    </div>
  </div>`
    } else if (obj.favorite) {
      cardString += `
  <div class="card mb-8" style="">
    <div class="row g-0">
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${obj.name}</h5>
          <p class="card-text">${obj.description}</p>
          <p class="card-text"><small class="text-muted">${obj.type}</small></p>
          <button type="button" class="btn btn-outline-secondary btn-sm" id="starBtn--${obj.id}">
          <span ><i class="bi bi-star-fill"></i></span> Star
        </button>
        </div>
      </div>
    </div>
  </div>`
    }
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
  renderToDom('#formContainer', repoPageForm);
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
cardContainer.addEventListener('click', starRepoBtn)


const startApp = () => {
  renderToDom("#navBar", navBarOnDom);
  renderToDom("#profileDiv", profileOnDom);
  renderToDom('#pageFooter', footerOnDom);
  graham();
};

startApp();
