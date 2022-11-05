export const repoCardDivString = `
<div class="input-group mb-3">
  <button class="btn btn-outline-secondary clear-repo-search" type="button" id="clearRepoSearch">Clear</button>
  <input type="text" class="form-control" placeholder="Search for Repositories..." aria-describedby="basic-addon1" id="repoSearch">
  <div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle" type="button" id="languageBtn" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Language
    </button>
    <div class="dropdown-menu" aria-labelledby="languageBtn">
      <a class="dropdown-item" id="filterLangsAll">All</a>
      <a class="dropdown-item" id="filterJS">JavaScript</a>
      <a class="dropdown-item" id="filterCSS">CSS</a>
      <a class="dropdown-item" id="filterHTML">HTML</a>
    </div>
  </div>
  <div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle" type="button" id="sortBtn" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Sort
    </button>
    <div class="dropdown-menu" aria-labelledby="sortBtn">
      <a class="dropdown-item" id="sortRepoName">Name</a>
      <a class="dropdown-item" id="sortRepoStars">Stars</a>
    </div>
  </div>
</div>
<div id="repoPageCardDivContainer" class="card-div-container overflow-auto"></div>`;
