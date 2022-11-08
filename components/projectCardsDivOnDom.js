export const projectsDivString = `
  <div class="input-group mb-3">
    <input type="text" class="form-control" placeholder="Search all projects" aria-describedby="basic-addon1" id="projectSearch">
    <div class="dropdown">
      <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" >Sort</button>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#" id="projectSortName">Project Name</a></li>
        <li><a class="dropdown-item" href="#" id="projectSortDateNew">Newest to Oldest</a></li>
        <li><a class="dropdown-item" href="#" id="projectSortDateOld">Oldest to Newest</a></li>
      </ul>
    </div>
  </div>
  <div id="projectsDivContainer" class="projects-div-container"></div>`;
