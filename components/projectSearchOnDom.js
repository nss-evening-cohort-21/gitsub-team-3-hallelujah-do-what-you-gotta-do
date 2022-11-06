import { renderToDom } from "../utils/renderToDom.js";

export const projectSearchOnDom = (searchArr) => {
  let searchString = ``;

  for (const search of searchArr) {
    searchString += `
      <div class="card text-bg-light mb-3" style="max-width: 100%;">
        <div class="card-header">${search.dateAdded}</div>
        <div class="card-body project-card">
          <h5 class="card-title">${search.name}</h5>
          <p class="card-text">${search.description}.</p>
        </div>
      </div>`
  }

  renderToDom("#projectsDivContainer", searchString);
}
