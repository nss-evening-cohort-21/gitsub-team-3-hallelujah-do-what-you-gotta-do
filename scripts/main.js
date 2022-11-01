import {renderToDom} from "../utils/renderToDom.js";

import {navBarOnDom} from "../components/navBarOnDom.js";

const startApp = () => {
  renderToDom("#navBar", navBarOnDom);
};

startApp();
