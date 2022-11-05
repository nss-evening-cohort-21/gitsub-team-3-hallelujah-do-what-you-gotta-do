export const repoCardDivString = `
<div id="modalContainer">
<div class="modal fade" id="repoCardEditModal" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
<div class="modal-dialog" role="document">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title" id="modalLabel">Edit Repo</h5>
      <button type="button" class="close btn btn-outline-secondary btn-sm" data-bs-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
    <form id="editRepoCardForm">
    <div class="form-group">
      <label for="editRepoName">Edit Name</label>
      <input type="text" class="form-control" id="editRepoName" value="" required>
    </div>
    <div class="form-group">
      <label for="editRepoDescription">Edit Description</label>
      <input type="text" class="form-control repo-input-description" id="editRepoDescription" value="" required>
    </div>
    <div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" id="editCheckJs" value="">
        <label class="form-check-label" for="editCheckJs">JS</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" id="editCheckHtml" value="">
        <label class="form-check-label" for="editCheckHtml">HTML</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" id="editCheckCss" value="">
        <label class="form-check-label" for="editCheckCss">CSS</label>
      </div>
    </div>
  </form>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" value="" id="repoCardSave">Save</button>
    </div>
  </div>
</div>
</div>
</div>
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
<div id="repoPageCardDivContainer" class="card-div-container overflow-auto"></div>
`;
