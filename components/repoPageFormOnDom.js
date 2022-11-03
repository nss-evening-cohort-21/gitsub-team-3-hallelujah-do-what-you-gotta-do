export const repoPageForm = `
<div class="form-div-container" id="formContainerDiv">
  <h3>Create a new repository</h3>
  <form id="repoPageForm">
    <div class="form-group">
      <label for="repoPageInputName">Repository name<span class="red-star">*</span></label>
      <input type="text" class="form-control" id="repoPageInputName" required>
    </div>
    <div class="form-group">
      <label for="repoPageInputDescription">Description</label>
      <input type="text" class="form-control repo-input-description" id="repoPageInputDescription" placeholder="" >
    </div>
    <div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" id="checkJs" value="">
        <label class="form-check-label" for="checkJs">JS</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" id="checkHtml" value="">
        <label class="form-check-label" for="checkHtml">HTML</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" id="checkCss" value="">
        <label class="form-check-label" for="checkCss">CSS</label>
      </div>
    </div>
    <button type="submit" class="btn btn-outline-secondary btn-sm" id="repoPageFormBtn">Create repository</button>
  </form>
</div>`;
