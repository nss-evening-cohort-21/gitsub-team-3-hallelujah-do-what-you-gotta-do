import { renderToDom } from "../utils/renderToDom.js";
import { typeConstructor } from "./typeConstructor.js";

export const repoCardStrOnDom = (arr) => {
  let cardString = ``;
  for (const obj of arr) {
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
              <span class="star-span"><i class="bi bi-star"></i></span> Star
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
              <span class="star-span"><i class="bi bi-star-fill"></i></span> Star
            </button>
            </div>
          </div>
        </div>
      </div>`;
    }
  }
  renderToDom("#repoPageCardDivContainer", cardString);
}
