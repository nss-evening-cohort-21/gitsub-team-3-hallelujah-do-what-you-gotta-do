export const projectsForm = `
  <div class="projects-form-div-container" id="projectsFormContainerDiv">
    <h3>Create a new project</h3>
    <h4>Coordinate, track, and update your work in one place, so projects stay transparent and on schedule.</h4>
    <form id="projectsPageForm">
      <div class="form-group">
        <label for="projectName">Project board name*</label>
        <input type="text" class="form-control" id="projectName" placeholder="Your project name here" required>
      </div>
      <div class="form-group">
        <label for="projectDescription">Description (optional)</label>
        <input type="text" class="form-control" id="projectDescription" placeholder="Describe your project here">
      </div>
      <div class="date-picker-container">
        <label for="start">Date Added</label>
        <input type="date" class="form-control" id="dateAdded" name="trip-start" value="" min="2022-11-01" max="2023-12-31">
       </div>
      <button type="submit" class="btn btn-outline-secondary btn-sm" id="projectFormBtn">Create project</button>
    </form>
  </div>`;
