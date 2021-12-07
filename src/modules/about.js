export default function loadAboutPage() {
  const content = document.querySelector('#content');
  const aboutSection = document.createElement('section');
  aboutSection.classList.add('tab-content', 'about-section');

  const aboutHeading = document.createElement('h2');
  aboutHeading.classList.add('about-heading');
  aboutHeading.textContent = 'ABOUT US';
  aboutSection.appendChild(aboutHeading);

  const aboutFlex = document.createElement('div');
  aboutFlex.classList.add('about-flex');

  const storyText = document.createElement('p');
  storyText.classList.add('about-flex-item', 'story-text');
  storyText.textContent = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
  when an unknown printer took a galley of type and scrambled it to make a type 
  specimen book. It has survived not only five centuries, but also the leap.`;
  aboutFlex.appendChild(storyText);

  const storyImg = document.createElement('img');
  storyImg.classList.add('about-flex-item', 'story-img');
  storyImg.setAttribute('src', './images/hero.jpg');
  aboutFlex.appendChild(storyImg);
  aboutSection.appendChild(aboutFlex);

  content.appendChild(aboutSection);
}
