import { renderToDom } from "../utils/renderToDom.js";
import { typeConstructor } from "../functions-repo-page/typeConstructor.js";
import { overviewForm } from "../components/overviewForm.js";

export const formSection = (arr) => {
  let formString = "";
  for (const member of arr) {
    formString +=
      `<div id="studentCardBody" class="overview-card">
        <h5 class="card-title" id="testing"><div id="voldName">${member.name}</div></h5>
        <div class="overview-card-contents">
          <p class="card-text">${member.description}</p>
          <p class="text-muted">${typeConstructor(member)}</p>
         <button class="pin-repo overviewBtn" id="pinRepo--${member.id}">Pin</button>
        </div>
      </div> `
  }
  renderToDom("#formContainer", overviewForm);
  renderToDom("#cardsForPin", formString);
}
