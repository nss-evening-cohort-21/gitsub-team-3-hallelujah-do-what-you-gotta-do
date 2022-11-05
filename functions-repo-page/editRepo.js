import { reposArr } from "../data/arrays.js";

export const editRepo = (e) => {
  if (e.target.id.includes('editRepo')) {
    const editCheckJs = document.querySelector('#editCheckJs');
    const editCheckCss = document.querySelector('#editCheckCss');
    const editCheckHtml = document.querySelector('#editCheckHtml');
    const [, btnId] = e.target.id.split('--');
    const repoIndex = reposArr.findIndex(item => item.id === Number(btnId));
    const card = reposArr[repoIndex];
    document.querySelector('#editRepoName').value = card.name;
    document.querySelector('#editRepoDescription').value = card.description;
    card.type.js ?
      editCheckJs.checked = true :
      editCheckJs.checked = false;
    card.type.css ?
      editCheckCss.checked = true :
      editCheckCss.checked = false;
    card.type.html ?
      editCheckHtml.checked = true :
      editCheckHtml.checked = false;
    document.querySelector('#editRepoCardSave').value = card.id;
    console.log(document.querySelector('#editRepoCardSave').value);
  }
}
