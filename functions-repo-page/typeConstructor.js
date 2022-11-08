export const typeConstructor = (obj) => {
  let langStr = '';
  if (obj.type.js) {
    langStr += ` <i class="bi bi-circle-fill js-icon"></i> JS`;
  }
  if (obj.type.css) {
    langStr += ` <i class="bi bi-circle-fill css-icon"></i> CSS`;
  }
  if (obj.type.html) {
    langStr += ` <i class="bi bi-circle-fill html-icon"></i> HTML`;
  }
  return langStr;
}
