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
const navRepos = () => {
  let cardString = `
  <div class="repos-page-container" id="reposPageContainer">
  <div class="input-group mb-3">
    <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
  </div>`;
  let formString = "form";
  for (const obj of reposArr) {
    cardString += `
  <div class="card mb-3" style="max-width: 540px;">
    <div class="row g-0">
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${obj.name}</h5>
          <p class="card-text">${obj.description}</p>
          <p class="card-text"><small class="text-muted">${obj.type}</small></p>
        </div>
      </div>
    </div>
  </div>
</div>
`
  }
  renderToDom("#cardContainer", cardString);
  renderToDom("#formContainer", formString);
}

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


const startApp = () => {
  renderToDom("#navBar", navBarOnDom);
  renderToDom("#profileDiv", profileOnDom);
  renderToDom('#pageFooter', footerOnDom);
  graham();
};

startApp();
