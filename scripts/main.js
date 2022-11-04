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


const pinnedSection = () => {
  let overviewCardString = "";
  const reposPinned =
  reposArr.filter(word => word.pinned === true)

  for (const member of reposPinned) {
    overviewCardString += `<div class="card">
    
    <div id="studentCardBody" class="card-body">
      <h5 class="card-title" id="testing"><div id="voldName">${member.name}</div></h5>
      <p class="card-text"></p>
      <p></p>
      <div class="student-card-button-div">
      <button class="pin-pin" id="pinPin">Pin</button>
      </div>
    </div>
  </div>
  </div>
  <div id="overviewCardContainer"</div>
    `
  }
   renderToDom("#cardContainer", overviewCardString);
}


const graham = () => {

  let formString = "";
  
  formScroll();
  for (const member of reposArr) {
    formString += `
    
    <div class="card">
    
    <div id="studentCardBody" class="card-body form-div-container">
      <h5 class="card-title" id="testing"><div id="voldName">${member.name}</div></h5>
      <p class="card-text"></p>
      <p></p>
      <div class="student-card-button-div">
      <button class="pin-repo" id="pinRepo--${member.id}">Pin</button>
      </div>
    </div>
  </div>
  </div>
  
    `
    
  }

 
pinnedSection();
  renderToDom("#formContainer", formString);
};
  //////////////////////////////////////////////////////
  const pinRepoBtn = (e) => {
    if (e.target.id.includes('pinRepo--')) {
      const pinBtn = e.target
      const [, btnId] = pinBtn.id.split('--');
      const pinIndex = reposArr.findIndex(obj =>
        obj.id === Number(btnId));

      const pinnedRepo = reposArr[pinIndex];
     pinnedRepo.pinned = true;
   
      console.log('pinpin',pinnedRepo.pinned)
console.log(reposArr)
     pinnedSection();
   graham();
    }
   }



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
cardContainer.addEventListener('keyup', repoSearch)
formContainer.addEventListener('click', pinRepoBtn)

const startApp = () => {
  renderToDom("#navBar", navBarOnDom);
  renderToDom("#profileDiv", profileOnDom);
  renderToDom('#pageFooter', footerOnDom);
  graham();
  pinnedSection();
};

startApp();
