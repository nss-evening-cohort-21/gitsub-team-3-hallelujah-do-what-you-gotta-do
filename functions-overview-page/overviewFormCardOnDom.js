import { renderToDom } from "../utils/renderToDom.js";
import { typeConstructor } from "../functions-repo-page/typeConstructor.js";

export const overviewFormCardOnDom = (arr) => {
  let formCard = "";

  for (const member of arr) {
    formCard += 
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
  renderToDom("#cardsForPin",formCard);
}
