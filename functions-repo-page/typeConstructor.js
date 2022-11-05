export const typeConstructor = (obj) => {
  let langStr = '';
  if (obj.type.js) {
    langStr += ' JS';
  }
  if (obj.type.css) {
    langStr += ' CSS';
  }
  if (obj.type.html) {
    langStr += ' HTML';
  }
  return langStr;
}
