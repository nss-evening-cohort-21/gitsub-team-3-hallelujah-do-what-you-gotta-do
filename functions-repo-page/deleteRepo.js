import { reposArr } from "../data/arrays.js";
import { repoCardStrOnDom } from "./repoCardStrOnDom.js";

export const deleteRepo = (e) => {
  if (e.target.id.includes('deleteRepo')) {
    const [, btnId] = e.target.id.split('--');
    const index = reposArr.findIndex(item => item.id === Number(btnId));
    reposArr.splice(index, 1);
    repoCardStrOnDom(reposArr);
  }
}
