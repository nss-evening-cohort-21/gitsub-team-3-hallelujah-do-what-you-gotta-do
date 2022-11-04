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
import { overviewForm } from "../components/overviewForm.js";
import { overviewCardContainer } from "../components/overviewCardContainer.js";
// querySelectors
const navBar = document.querySelector("#navBar");

const cardContainer = document.querySelector("#cardContainer");

const formContainer = document.querySelector("#formContainer");




// navBar functions
////////////////Graham//////////////////////////////////////


const pinnedSection = () => {
  let overviewCardString = "";

  const reposPinned = reposArr.filter(word => word.pinned === true)

  for (const member of reposPinned) {
    overviewCardString += `<div class="card">
    <div id="studentCardBody" class="card-body">
      <h5 class="card-title" id="testing"><div id="voldName">${member.name}</div></h5>
      <p class="card-text">${member.description}</p>
      <p class="text-muted">${typeConstructor(member)}</p>
      <div class="student-card-button-div">
      <button class="pin-pin" id="unpinRepo--${member.id}">Unpin</button>
      </div>
    </div>
  </div>
  </div>
  <div id="repoPageCardDivContainer" class="card-div-container overflow-auto"></div> `
  }
   renderToDom("#cardContainer", overviewCardContainer);
   renderToDom("#cardsPinned",overviewCardString);
  }

const graham = () => {
  let formString = "";
  for (const member of reposArr) {
    formString += 
    `<div>
    <div id="studentCardBody" class="card-body overview-card">
      <h5 class="card-title" id="testing"><div id="voldName">${member.name}</div></h5>
      <p class="card-text">${member.description}</p>
      <p class="text-muted">${typeConstructor(member)}</p>
      <div class="student-card-button-div">
      <button class="pin-repo" id="pinRepo--${member.id}">Pin</button>
      </div>
    </div>
  </div> `
     }
pinnedSection();
  renderToDom("#formContainer", overviewForm);
  renderToDom("#cardsForPin",formString)
};
//pinfunctions//
  const pinRepoBtn = (e) => {
    if (e.target.id.includes('pinRepo--')) {
      const pinBtn = e.target
      const [, btnId] = pinBtn.id.split('--');
      const pinIndex = reposArr.findIndex(repos =>
        repos.id === Number(btnId));
      const pinnedRepo = reposArr[pinIndex];
        pinnedRepo.pinned = true;
        pinnedSection();
        graham();
    }
   }
   const unpinRepoBtn = (e) => {
    if (e.target.id.includes('unpinRepo--')) {
      const unpinBtn = e.target
      const [, btnId] = unpinBtn.id.split('--');
      const unpinIndex = reposArr.findIndex(repos =>
        repos.id === Number(btnId));
      const unpinnedRepo = reposArr[unpinIndex];
            unpinnedRepo.pinned = false;
    pinnedSection();
    graham();
    }
   }
   /////////////////////////////
   
   const search = (event) => {
    
    const userInput = event.target.value.toLowerCase();
    const searchResult = reposArr.filter(taco => 
      taco.name.toLowerCase().includes(userInput)||
      taco.description.toLowerCase().includes(userInput)||
      taco.description.toLowerCase().includes(userInput)  
    )
    console.log('this is the searchbar')
  console.log(searchResult);
  }
//////////////////////////////////////

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
  //formScrollRemove();
  //cardDivRemove();


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
  //formScrollRemove();
  //cardDivRemove();
  let formString = "forrrrrrm";
  let cardString = "cards";
  renderToDom("#cardContainer", cardString);
  renderToDom("#formContainer", formString);
}

const navPackages = () => {
  //formScrollRemove();
  //cardDivRemove();
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
cardContainer.addEventListener('click',unpinRepoBtn)

const startApp = () => {
  renderToDom("#navBar", navBarOnDom);
  renderToDom("#profileDiv", profileOnDom);
  renderToDom('#pageFooter', footerOnDom);
  graham();
  pinnedSection();
  document.querySelector('#searchInput').addEventListener('click', search)
};

startApp();
