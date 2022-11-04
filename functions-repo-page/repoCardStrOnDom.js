import { renderToDom } from "../utils/renderToDom.js";
import { typeConstructor } from "./typeConstructor.js";

export const repoCardStrOnDom = (arr) => {
  let cardString = ``;
  for (const obj of arr) {
    if (!obj.favorite) {
      cardString += `
      <div class="card mb-8" style="">
        <div class="">
          <div class="">
            <div class="card-body repo-card-body">
              <div>
                <h5 class="card-title">${obj.name}</h5>
                <p class="card-text">${obj.description}</p>
                <p class="card-text"><small class="text-muted">${typeConstructor(obj)}</small></p>
              </div>
              <div>
                <button type="button" class="btn btn-outline-secondary btn-sm" id="starBtn--${obj.id}">
                <span class="star-span"><i class="bi bi-star"></i></span> Star
                </button>
                <button type="button" class="btn btn-outline-secondary btn-sm" id="deleteRepo--${obj.id}">Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>`;
    } else if (obj.favorite) {
      cardString += `
      <div class="card mb-8" style="">
        <div class="">
          <div class="">
            <div class="card-body repo-card-body">
              <div>
                <h5 class="card-title">${obj.name}</h5>
                <p class="card-text">${obj.description}</p>
                <p class="card-text"><small class="text-muted">${typeConstructor(obj)}</small></p>
              </div>
              <div>
                <button type="button" class="btn btn-outline-secondary btn-sm" id="starBtn--${obj.id}">
                <span class="star-span"><i class="bi bi-star-fill"></i></span> Star
                </button>
                <button type="button" class="btn btn-outline-secondary btn-sm" id="deleteRepo--${obj.id}">Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>`;
    }
  }
  renderToDom("#repoPageCardDivContainer", cardString);
}

// row g-0
// col-md-8
