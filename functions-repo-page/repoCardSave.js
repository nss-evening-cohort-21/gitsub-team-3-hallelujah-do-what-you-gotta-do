import { reposArr } from "../data/arrays.js";
import { repoCardStrOnDom } from "./repoCardStrOnDom.js";

export const repoCardSave = (e) => {
  if (e.target.id === 'repoCardSave') {
    const currentCardIndex = reposArr.findIndex(item => item.id === Number(e.target.value));
    const currentCard = reposArr[currentCardIndex]
    currentCard.name = document.querySelector('#editRepoName').value;
    currentCard.description = document.querySelector('#editRepoDescription').value;
    document.querySelector('#editCheckJs').checked ?
      currentCard.type.js = true :
      currentCard.type.js = false;
    document.querySelector('#editCheckCss').checked ?
      currentCard.type.css = true :
      currentCard.type.css = false;
    document.querySelector('#editCheckHtml').checked ?
      currentCard.type.html = true :
      currentCard.type.html = false
    repoCardStrOnDom(reposArr);
  }
}
