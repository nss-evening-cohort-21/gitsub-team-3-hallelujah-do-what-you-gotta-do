export const repoCardString = `
  <div class="card mb-8" style="">
    <div class="row g-0">
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${obj.name}</h5>
          <p class="card-text">${obj.description}</p>
          <p class="card-text"><small class="text-muted">${obj.type}</small></p>
          <button type="button" class="btn btn-outline-secondary btn-sm" id="starBtn--${obj.id}">
          <span ><i class="bi bi-star"></i></span> Star
          </button>
        </div>
      </div>
    </div>
  </div>`
