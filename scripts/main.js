// Arrays
import { reposArr } from "../data/arrays.js";
import { projectsArr } from "../data/arrays.js";
import { packagesArr } from "../data/arrays.js";
// Functions
import { renderToDom } from "../utils/renderToDom.js";
import { repoCardStrOnDom } from "../functions-repo-page/repoCardStrOnDom.js";
import { clearRepoSearch } from "../functions-repo-page/clearRepoSearch.js"
import { starRepoBtn } from "../functions-repo-page/starRepoBtn.js";
import { langArrConstructor } from "../functions-repo-page/langArrConstructor.js";
import { filterLangs } from "../functions-repo-page/filterLangs.js";
import { sortRepoPage } from "../functions-repo-page/sortRepoPage.js";
import { deleteRepo } from "../functions-repo-page/deleteRepo.js";
// Components
import { navBarOnDom } from "../components/navBarOnDom.js";
import { footerOnDom } from "../components/footerOnDom.js";
import { profileOnDom } from "../components/profileOnDom.js";
import { repoPageFormOnDom } from "../components/repoPageFormOnDom.js";
import { repoCardDivString } from "../components/repoCardDivOnDom.js";
import { overviewForm } from "../components/overviewForm.js";
import { overviewCardContainer } from "../components/overviewCardContainer.js";
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


const pinnedSection = () => {
  let overviewCardString = "";

  const reposPinned = reposArr.filter(word => word.pinned === true)

  for (const member of reposPinned) {
    overviewCardString += `<div class="card">
    <div id="studentCardBody" class="card-body">
      <h5 class="card-title" id="testing"><div id="voldName">${member.name}</div></h5>
      <p class="card-text">${member.description}</p>
      <p class="text-muted"></p>
      <div class="student-card-button-div">
      <button class="pin-pin" id="unpinRepo--${member.id}">Unpin</button>
      </div>
    </div>
  </div>
  </div>
   `
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
      <p class="text-muted"></p>
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
const navRepos = () => {
  

  renderToDom("#cardContainer", repoCardDivString);
  repoCardStrOnDom(reposArr);
  renderToDom('#formContainer', repoPageFormOnDom);
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
  repoCardStrOnDom(reposArr);
  renderToDom('#formContainer', repoPageFormOnDom);
  repoPageForm.reset();
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
  filterLangs(e);
  sortRepoPage(e);
  deleteRepo(e);
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
formContainer.addEventListener('click', pinRepoBtn)
cardContainer.addEventListener('click',unpinRepoBtn)
cardContainer.addEventListener('click', repoPageCardFuncs);
cardContainer.addEventListener('keyup', repoSearch);
formContainer.addEventListener('submit', addProject);


const startApp = () => {
  renderToDom("#navBar", navBarOnDom);
  renderToDom("#profileDiv", profileOnDom);
  renderToDom('#pageFooter', footerOnDom);
  graham();
  pinnedSection();
  //document.querySelector('#searchInput').addEventListener('click', search)
};

startApp();
