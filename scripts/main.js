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
import { typeConstructor } from "../functions-repo-page/typeConstructor.js";
import { editRepo } from "../functions-repo-page/editRepo.js";
import { deletePackage } from "../components/packageFormOnDom.js";
import { overviewFormCardOnDom } from "../functions-repo-page/overviewFormCardOnDom.js";
import { repoCardSave } from "../functions-repo-page/repoCardSave.js";
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
import { projectsDivString } from "../components/projectCardsDivOnDom.js";
import { projectsForm } from "../components/projectsPageFormOnDom.js";
import { projectSearchOnDom } from "../components/projectSearchOnDom.js";



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
   `
  }
  renderToDom("#cardContainer", overviewCardContainer);
  renderToDom("#cardsPinned", overviewCardString);
}
const formSection = (arr) => {
  let formString = "";
  for (const member of arr) {
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
  renderToDom("#formContainer", overviewForm);
  renderToDom("#cardsForPin", formString);
}

const graham = () => {
  formSection(reposArr);
  pinnedSection();

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

const overviewSearch = (e) => {
  e.preventDefault();
  if (e.target.id === 'searchInput') {
    const userInput = e.target.value.toLowerCase();
    const searchResult = reposArr.filter(taco =>
      taco.name.toLowerCase().includes(userInput) ||
      taco.description.toLowerCase().includes(userInput) ||
      taco.description.toLowerCase().includes(userInput));
    console.log('this is the searchbar')

    overviewFormCardOnDom(searchResult);

  }

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
  editRepo(e);
  repoCardSave(e);
}
// elf --- Repo Page End

// AB -- Projects Page 

const projectsStringOnDom = () => {
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
  e.stopImmediatePropagation();
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
  projectsPageForm.reset();
}

const searchProjects = (e) => {
  e.preventDefault();
  if (e.target.id === "projectSearch") {
  const projSearchInput = e.target.value.toLowerCase();
  const projSearchResultArr = projectsArr.filter(item =>
    item.name.toLowerCase().includes(projSearchInput) ||
    item.description.toLowerCase().includes(projSearchInput) ||
    item.dateAdded.toLowerCase().includes(projSearchInput)
    )

    projectSearchOnDom(projSearchResultArr);
  }
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
  cardContainer.addEventListener('click', deletePackage)
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
// Form Submit Event Listener Function
const formFuncs = (e) => {
  if (e.target.id === 'repoPageForm') {
    addRepo(e);
  }
  if (e.target.id === 'projectsPageForm') {
    addProject(e);
  }
}

// event listeners
navBar.addEventListener("click", navigate);
formContainer.addEventListener('submit', formFuncs);
cardContainer.addEventListener('keyup', repoSearch)
formContainer.addEventListener('click', pinRepoBtn)
cardContainer.addEventListener('click', unpinRepoBtn)
cardContainer.addEventListener('click', repoPageCardFuncs);
formContainer.addEventListener('keyup', overviewSearch);
cardContainer.addEventListener('keyup', searchProjects);


const startApp = () => {
  renderToDom("#navBar", navBarOnDom);
  renderToDom("#profileDiv", profileOnDom);
  renderToDom('#pageFooter', footerOnDom);
  graham();
  pinnedSection();
};

startApp();
