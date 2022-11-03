export const projectsForm = `
  <div class="projects-form-div-container" id="projectsFormContainerDiv">
    <h3>Create a new project</h3>
    <h4>Coordinate, track, and update your work in one place, so projects stay transparent and on schedule.</h4>
    <form id="projectsPageForm">
      <div class="form-group">
        <label for="projectName">Project board name<span class="project-Name">*</span></label>
        <input type="text" class="form-control" id="projectName" required>
      </div>
      <div class="form-group">
        <label for="projectDescription">Description (optional)</label>
        <input type="text" class="form-control" id="projectDescription" placeholder="">
      </div>
      <button type="submit" class="btn btn-outline-secondary btn-sm" id="projectFormBtn">Create project</button>
    </form>
  </div>`;
