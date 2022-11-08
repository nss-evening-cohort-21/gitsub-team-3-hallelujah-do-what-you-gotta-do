import { renderToDom } from "../utils/renderToDom.js";
import { typeConstructor } from "../functions-repo-page/typeConstructor.js";
import { reposArr } from "../data/arrays.js";
import { overviewCardContainer } from "../components/overviewCardContainer.js";
import { starRepoBtn } from "../functions-repo-page/starRepoBtn.js";
export const pinnedSection = () => {
  let overviewCardString = "";
  const reposPinned = reposArr.filter(word => word.pinned === true)
  for (const member of reposPinned) {
    overviewCardString += `<div class="">
    <div id="pinned-card-style" class="card-body ">
      <h5 class="card-title"><div>${member.name}</div></h5>
      <p class="card-text">${member.description}</p>
      <p class="text-muted">${typeConstructor(member)}</p>
      
      <div class="student-card-button-div">
      <button class="pin-pin overviewBtn" id="unpinRepo--${member.id}">Unpin</button>
      </div>
    </div>
  </div>
  </div>`
  }
  renderToDom("#cardContainer", overviewCardContainer);
  renderToDom("#cardsPinned", overviewCardString);
}
