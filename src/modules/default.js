export default function loadDefault() {
  const content = document.querySelector('#content');
  const header = document.createElement('header');
  header.classList.add('header');

  // create wrapper element
  const navWrapper = document.createElement('div');
  navWrapper.classList.add('nav-wrapper');

  // create header logo
  const logo = document.createElement('span');
  logo.classList.add('header-logo');
  logo.textContent = 'Coffenergy';
  navWrapper.appendChild(logo);

  // create navigation bar
  const headerNav = document.createElement('nav');
  headerNav.classList.add('header-nav');
  headerNav.innerHTML = `
    <div class="btn active">Home</div>
    <div class="btn menu">Menu</div>
    <div class="btn">About</div>
  `;
  navWrapper.appendChild(headerNav);
  header.appendChild(navWrapper);
  content.appendChild(header);
}
