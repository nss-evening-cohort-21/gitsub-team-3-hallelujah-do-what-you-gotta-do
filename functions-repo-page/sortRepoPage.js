import { reposArr } from "../data/arrays.js";
import { repoCardStrOnDom } from "./repoCardStrOnDom.js";

export const sortRepoPage = (e) => {
  if (e.target.id === 'sortRepoName') {
    const alphaRepos = reposArr.sort((a, b) => a.name.localeCompare(b.name));
    repoCardStrOnDom(alphaRepos);
  }
  if (e.target.id === 'sortRepoStars') {
    const starredRepos = reposArr.sort((a, b) => Number(b.favorite) - Number(a.favorite));
    repoCardStrOnDom(starredRepos);
  }
}
