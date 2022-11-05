import { renderToDom } from "../utils/renderToDom.js";
import { packagesArr } from "../data/arrays.js";


export const packagesOnDom = () => {
  let cardString = `<div class="package-search-container"><input id="packageSearch" class="package-search form-control form-control-lg" type="text" placeholder="Search"></div>`;
  for (const member of packagesArr) {
    if (member.icon==="") {
      cardString += `<div class="card packages-card" style="width: 18rem;">
      <div class="card-body">
      <div class="delete-package-div"><h5 class="inline-block card-title inline-block">${member.name}</h5><button type="button" id="deletePkg--${member.id}" class="btn btn-sm inline-block btn-light delete-package-btn">x</button></div>
      <p class="card-text">${member.description}</p>
      <a class="btn-sm btn btn-outline-dark" href="${member.link}" target="_blank">Learn More</a>
     </div>
    </div>`
    } else
  cardString += `<div class="card packages-card" style="width: 18rem;">
  <div class="card-body">
  <div class="delete-package-div"><div class="logo-and-package-name"><img src="${member.icon}" class="inline-block logo-icon" alt="${member.name} Logo"><h5 class="inline-block card-title inline-block">${member.name}</h5></div><button type="button" id="deletePkg--${member.id}" class="btn btn-sm inline-block btn-light delete-package-btn">x</button></div>
  <p class="card-text">${member.description}</p>
  <a class="btn-sm btn btn-outline-dark" href="${member.link}" target="_blank">Learn More</a>
 </div>
</div>`
};



  renderToDom("#cardContainer", `<div class="packages-container">`+cardString+`</div><div id="packFormContainer"></div>`);
};


export const packageFormOnDom = () => {
  const formString = `<div class="package-form-card card">
  <div class="card-header">
    Add a Package
  </div>
  <div class="card-body package-form-card">
    <h5 class="form-intro card-text">To add a package to your selection, please fill out the form below.</h5>
   <form id="packageForm">
  <div class="form-group">
    <label for="formGroupExampleInput">Package Name</label>
    <input type="text" class="form-control pack-input" id="packageName" placeholder="" required>
  </div>
    <div class="form-group">
    <label for="formGroupExampleInput2">Package Description</label>
    <input type="text" class="form-control pack-input" id="packageDesc" placeholder="" required>   
  <div class="form-group">
    <label for="formGroupExampleInput2">Logo URL</label>
    <input type="text" class="form-control pack-input" id="packageIcon" placeholder="">
  </div>    
  <div class="form-group">
    <label for="formGroupExampleInput2">Package URL</label>
    <input type="text" class="form-control pack-input" id="packageLink" placeholder="">
  </div>
 </form> 
    <button type="submit" class="btn btn-dark pack-form-submit">Submit</button>
  </div>
  
</div> `;
  renderToDom("#packFormContainer", formString);
};

export const createPackage = (e) => {
  e.preventDefault();
  const form = document.querySelector("#packageForm");
  let newPackage = {
    id: packagesArr.length + 1,
    name: document.querySelector("#packageName").value,
    description: document.querySelector("#packageDesc").value,
    icon: document.querySelector("#packageIcon").value,
    link: document.querySelector("#packageLink").value,
  };
  if (document.querySelector("#packageLink").value === "") {
    newPackage.link = 'https://github.com/';
    form.reset();
  } else
  form.reset();
  packagesArr.push(newPackage);
  packagesOnDom();
  packageFormOnDom();
};

export const deletePackage = (e) => {
  if (e.target.id.includes('deletePkg')) {
    const [, btnId] = e.target.id.split('--');
    const index = packagesArr.findIndex(item => item.id === Number(btnId));
    const deletedPck = packagesArr.splice(index, 1);
    packagesOnDom(); 
    packageFormOnDom();
  }
};
