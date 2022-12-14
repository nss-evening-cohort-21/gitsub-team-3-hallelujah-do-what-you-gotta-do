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
import { overviewFormCardOnDom } from "../functions-overview-page/overviewFormCardOnDom.js";
import { pinnedSection } from "../functions-overview-page/overviewpinnedSection.js";
import { formSection } from "../functions-overview-page/overviewformSection.js";


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

//OVERVIEW PAGE///
const graham = () => {
  formSection();
  pinnedSection();

};
//PIN FUNCTIONS///
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
//OVERVIEW SEARCH BAR///
const overviewSearch = (e) => {
e.preventDefault();
if(e.target.id === 'searchInput'){
  const userInput = e.target.value.toLowerCase();
  const searchResult = reposArr.filter(taco =>
    taco.name.toLowerCase().includes(userInput) ||
    taco.description.toLowerCase().includes(userInput) ||
    taco.description.toLowerCase().includes(userInput));

    overviewFormCardOnDom(searchResult);
  }
}
//END GRAHAM///
  

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
  sortRepoPage(e);
  deleteRepo(e);
  editRepo(e);
  repoCardSave(e);
  filterLangs(e);
}
// elf --- Repo Page End

// AB -- Projects Page 

const projectsStringOnDom = (arr) => {
  let projectsString = ``;
  for (const project of arr) {
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
  projectsStringOnDom(projectsArr);
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

const sortProjects = (e) => {
  if (e.target.id === "projectSortName") {
    const sortedProjectNames = projectsArr.sort((a,b) => a.name.localeCompare(b.name));

    projectsStringOnDom(sortedProjectNames);
  }

  if (e.target.id === "projectSortDateNew") {
       const sortedProjectDates = projectsArr.sort((a,b) => Date.parse(b.dateAdded) - Date.parse(a.dateAdded));

    projectsStringOnDom(sortedProjectDates);
  }

  if (e.target.id === "projectSortDateOld") {
      const sortedProjectDates = projectsArr.sort((a,b) => Date.parse(a.dateAdded) - Date.parse(b.dateAdded));

    projectsStringOnDom(sortedProjectDates);
  }
}

const navProjects = () => {
  projectsStringOnDom(projectsArr);
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
cardContainer.addEventListener('click', sortProjects);



const startApp = () => {
  renderToDom("#navBar", navBarOnDom);
  renderToDom("#profileDiv", profileOnDom);
  renderToDom('#pageFooter', footerOnDom);
  graham();
  pinnedSection();
};

startApp();
