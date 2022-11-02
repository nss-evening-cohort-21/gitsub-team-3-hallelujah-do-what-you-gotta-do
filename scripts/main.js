import { reposArr } from "../data/arrays.js";
import { projectsArr } from "../data/arrays.js";
import { packagesArr } from "../data/arrays.js";

import { renderToDom } from "../utils/renderToDom.js";
import { navBarOnDom } from "../components/navBarOnDom.js";

// querySelectors
const navBar = document.querySelector("#navBar");

const cardContainer = document.querySelector("#cardContainer");

const formContainer = document.querySelector("#formContainer");

const overviewBtn = document.querySelector("#overviewBtn");



// navBar functions
///////////////graham function///////////////////////
function formScroll() {
  const element = document.getElementById("formContainer");
  element.classList.add("scroll");
}

function pinnedFilter(obj){
 const pinnedArr=[];
  if(obj.pinned === true){
    
    pinnedArr.push(obj)
  }
return pinnedArr

}

 
const graham = () => {
  let cardString = "";
  let formString = "";

  

  for(const member of reposArr) {
    cardString += 'help me'
      
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
//////////////////end of Graham function///////////////
const navRepos = () => {
  let cardString = "cardddddds";
  let formString = "form";
  renderToDom("#cardContainer", cardString);
  renderToDom("#formContainer", formString); 
}

const navProjects = () => {
  let cardString = "cards";
  let formString = "forrrrrrm";
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
};

startApp();
