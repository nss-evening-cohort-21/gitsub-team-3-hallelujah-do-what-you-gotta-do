export const langArrConstructor = (obj) => {
  document.querySelector('#checkJs').checked ? obj.type.js = true : obj.type.js = false;
  document.querySelector('#checkHtml').checked ? obj.type.html = true : obj.type.html = false;
  document.querySelector('#checkCss').checked ? obj.type.css = true : obj.type.css = false;
}
