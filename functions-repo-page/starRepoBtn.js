import { reposArr } from "../data/arrays.js";

export const starRepoBtn = (e) => {
  if (e.target.id.includes('starBtn')) {
    const starBtn = e.target
    const [, btnId] = starBtn.id.split('--');
    const starIndex = reposArr.findIndex(obj =>
      obj.id === Number(btnId));
    const starredRepo = reposArr[starIndex];
    starredRepo.favorite = true;
    if (!starBtn.innerHTML.includes('fill')) {
      starredRepo.favorite = true;
      starBtn.innerHTML = '<span ><i class="bi bi-star-fill"></i></span> Star'
    } else if (starBtn.innerHTML.includes('fill')) {
      starredRepo.favorite = false;
      starBtn.innerHTML = '<span ><i class="bi bi-star"></i></span> Star'
    }
  }
}
