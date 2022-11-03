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

const navProjects = () => {
  formScrollRemove();
  let formString = "forrrrrrm";
  let cardString = "cards";
  renderToDom("#cardContainer", cardString);
  renderToDom("#formContainer", formString);
}


// wbv -- packages page start 
const navPackages = () => {
  let formString = "feeeeeorm";
  let cardString = ``;
  for (const member of packagesArr) {
  cardString += `<div class="card" style="width: 18rem;">
  <div class="card-body">
  <span><img src="${member.icon}" alt="${member.icon} Logo"><h5 class="card-title">${member.name}</h5></span>
  <p class="card-text">${member.description}</p>
  <button type="button" class="btn-sm text-center btn btn-outline-dark">Learn More</button>
 </div>
</div>`};


  renderToDom("#cardContainer", cardString);
  renderToDom("#formContainer", formString);
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
formContainer.addEventListener('submit', addRepo)


const startApp = () => {
  renderToDom("#navBar", navBarOnDom);
  renderToDom("#profileDiv", profileOnDom);
  renderToDom('#pageFooter', footerOnDom);
  graham();
};

startApp();
