import { repoCardStrOnDom } from "./repoCardStrOnDom.js";
import { reposArr } from "../data/arrays.js";

export const clearRepoSearch = (e) => {
  if (e.target.id === 'clearRepoSearch') {
    document.querySelector('#repoSearch').value = '';
    repoCardStrOnDom(reposArr);
  }
}
