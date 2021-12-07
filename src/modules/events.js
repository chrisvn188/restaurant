export default function handleEvents() {
  const homeMenuBtn = document.querySelector('.home-menu-btn');
  const menuBtn = document.querySelector('.menu');
  const menuBtns = document.querySelectorAll('.btn');
  const homeContent = document.querySelector('.hero-section');
  const menuContent = document.querySelector('.menu-section');
  const aboutContent = document.querySelector('.about-section');
  const tabContents = document.querySelectorAll('.tab-content');

  // when menu btn from home clicked, render menu page
  homeMenuBtn.addEventListener('click', () => {
    tabContents.forEach(content => content.classList.remove('active'));
    menuBtns.forEach(btn => {
      btn.classList.remove('active');
    });
    menuBtn.classList.add('active');
    menuContent.classList.add('active');
  });

  // when btns from nav bar clicked, render the appropriate content
  menuBtns.forEach(btn =>
    btn.addEventListener('click', e => {
      const currentActiveTab = Array.from(menuBtns).find(btn =>
        btn.classList.contains('active')
      );
      currentActiveTab.classList.remove('active');
      e.target.classList.add('active');
      const currentActiveContent = Array.from(tabContents).find(content =>
        content.classList.contains('active')
      );
      currentActiveContent.classList.remove('active');
      if (e.target && e.target.textContent === 'Home') {
        homeContent.classList.add('active');
      }
      if (e.target && e.target.textContent === 'Menu') {
        menuContent.classList.add('active');
      }
      if (e.target && e.target.textContent === 'About') {
        aboutContent.classList.add('active');
      }
    })
  );
}
