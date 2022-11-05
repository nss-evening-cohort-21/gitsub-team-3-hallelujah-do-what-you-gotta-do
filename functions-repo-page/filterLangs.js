import { reposArr } from "../data/arrays.js";
import { repoCardStrOnDom } from "./repoCardStrOnDom.js";

export const filterLangs = (e) => {
  let filterArr = [];
  if (e.target.id === 'filterLangsAll') {
    repoCardStrOnDom(reposArr);
  }
  if (e.target.id === 'filterJS') {
    filterArr = reposArr.filter(item => item.type.js);
    repoCardStrOnDom(filterArr);
  }
  if (e.target.id === 'filterCSS') {
    filterArr = reposArr.filter(item => item.type.css);
    repoCardStrOnDom(filterArr);
  }
  if (e.target.id === 'filterHTML') {
    filterArr = reposArr.filter(item => item.type.html);
    repoCardStrOnDom(filterArr);
  }
}
