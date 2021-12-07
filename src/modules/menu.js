export default function loadMenuPage() {
  const ItemFactory = function (title, src) {
    return { title, src };
  };

  const items = [];

  const cappuccino = ItemFactory('Cappuchino', './images/cappuccino.jpg');
  const expresso = ItemFactory('Expresso', './images/expresso.jpg');
  const eggCoffee = ItemFactory('Egg Coffee', './images/egg-coffee.jpg');
  const matchaLatte = ItemFactory('Matcha Latte', './images/matcha-latte.jpg');
  const coconutCoffee = ItemFactory(
    'Coconut Coffee',
    './images/coconut-coffee.jpg'
  );
  const vietnameseCoffee = ItemFactory(
    'Vietnamese Coffee',
    './images/vietnamese-coffee.jpg'
  );

  items.push(
    cappuccino,
    expresso,
    eggCoffee,
    matchaLatte,
    coconutCoffee,
    vietnameseCoffee
  );

  const content = document.querySelector('#content');

  // menu section
  const menuSection = document.createElement('section');
  menuSection.classList.add('tab-content', 'menu-section');

  // menu heading
  const menuHeading = document.createElement('h2');
  menuHeading.classList.add('menu-heading');
  menuHeading.textContent = 'OUR MENU';

  // menu grid
  const menuGrid = document.createElement('div');
  menuGrid.classList.add('menu-grid');

  for (let i = 0; i < items.length; i++) {
    const menuCard = document.createElement('div');
    menuCard.classList.add('menu-card');

    const cardTitle = document.createElement('div');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = `${items[i].title}`;

    const cardImg = document.createElement('img');
    cardImg.classList.add('card-img');
    cardImg.setAttribute('src', `${items[i].src}`);

    menuCard.appendChild(cardTitle);
    menuCard.appendChild(cardImg);
    menuGrid.appendChild(menuCard);
  }
  menuSection.appendChild(menuHeading);
  menuSection.appendChild(menuGrid);
  content.appendChild(menuSection);
}
