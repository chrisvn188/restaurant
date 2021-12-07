import loadAboutPage from './modules/about';
import loadDefault from './modules/default';
import handleEvents from './modules/events';
import loadHomePage from './modules/home';
import loadMenuPage from './modules/menu';

(function () {
  loadDefault();
  loadHomePage();
  loadMenuPage();
  loadAboutPage();
  handleEvents();
})();
