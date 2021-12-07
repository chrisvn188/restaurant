export default function loadHomePage() {
  const content = document.querySelector('#content');
  const heroSection = document.createElement('section');
  heroSection.classList.add('tab-content', 'hero-section', 'active');

  const heroIntro = document.createElement('div');
  heroIntro.classList.add('hero-intro');
  heroIntro.innerHTML = `
    <h1>DRINK COFFEE, FEEL ENERGY<br>100% HANDMADE COFFEE</h1>
  `;
  const homeMenuBtn = document.createElement('div');
  homeMenuBtn.classList.add('home-menu-btn');
  homeMenuBtn.textContent = 'Menu';
  heroIntro.appendChild(homeMenuBtn);
  heroSection.appendChild(heroIntro);
  content.appendChild(heroSection);
}
