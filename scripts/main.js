import { reposArr } from "../data/arrays.js";
import { projectsArr } from "../data/arrays.js";
import { packagesArr } from "../data/arrays.js";

import { renderToDom } from "../utils/renderToDom.js";
import { navBarOnDom } from "../components/navBarOnDom.js";

const startApp = () => {
  renderToDom("#navBar", navBarOnDom);
};

startApp();
