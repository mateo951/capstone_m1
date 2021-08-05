// Mobile Menu functionality
const div = document.createElement('div');
const grayBgDiv = document.createElement('div');
const hamBttn = document.querySelector('#hbIcon');
const header = document.getElementsByTagName('header');

let firstElement = '';
let secondElement = '';
let thirdElement = '';
let forthElement = '';
let hrefFirstElmnt = '';
let firstId = '';
let secondId = '';
let thirdId = '';

hamBttn.addEventListener('click', () => {
  div.id = 'overlay';
  div.classList.add('overlay');
  grayBgDiv.id = 'overlay-menu-bg';
  grayBgDiv.classList.add('overlay');
  if (header[0].id === 'header-about') {
    firstElement = 'Home';
    hrefFirstElmnt = 'index';
    secondElement = 'Location';
    thirdElement = 'Media';
    forthElement = 'Sponsors';
    firstId = 'location-about';
    secondId = 'last-pax';
    thirdId = 'sponsors';
  } else {
    firstElement = 'About';
    hrefFirstElmnt = 'about';
    secondElement = 'Features';
    thirdElement = 'Guests';
    forthElement = 'Sponsors';
    firstId = 'events';
    secondId = 'guests';
    thirdId = 'sponsors';
  }
  div.innerHTML = '<img src="https://img.icons8.com/ios/35/000000/circled-x.png" class="cancelBttn"></img>'
    + '<ul class="mobile-menu-ul">'
    + `<li class="font-family-c mobile-menu-li"><a href="${hrefFirstElmnt}.html">${firstElement}</a></li>`
    + `<li class="font-family-c mobile-menu-li"><a href="#${firstId}">${secondElement}</a></li>`
    + `<li class="font-family-c mobile-menu-li"><a href="#${secondId}">${thirdElement}</a></li>`
    + `<li class="font-family-c mobile-menu-li"><a href="#${thirdId}">${forthElement}</a></li>`
    + '</ul>';
  document.body.appendChild(div);
  document.body.appendChild(grayBgDiv);
  div.style.display = 'block';
  grayBgDiv.style.display = 'block';

  // Add listener for closing menu
  const mobileMenu = document.querySelector('.cancelBttn');
  mobileMenu.addEventListener('click', () => {
    div.remove();
    grayBgDiv.remove();
  });

  // Adding listeners to li tags
  const sections = document.querySelectorAll('.mobile-menu-li');
  for (let i = 0; i < sections.length; i += 1) {
    sections[i].addEventListener('click', () => {
      div.remove();
      grayBgDiv.remove();
    });
  }
});

// Dynamic Guests
const guests = [
  {
    guest: 'Rockstar',
    imgUrl: './media/icons/rockstar-games.svg',
    companyDes: 'AAA Publisher',
    description: 'Known World-wide for GTA series',
  },
  {
    guest: 'Andean',
    imgUrl: './media/icons/andean.png',
    companyDes: 'Indie Studio',
    description: 'Showcasing future releases for mobile',
  },
  {
    guest: 'Battle State',
    imgUrl: './media/icons/battlestate.png',
    companyDes: 'Game Studio',
    description: 'Creators of Escape From Tarkov',
  },
  {
    guest: 'Gamepires',
    imgUrl: './media/icons/gamepires.png',
    companyDes: 'Game Studio',
    description: 'The studio developing Scum',
  },
];

function createProjectsSeciton() {
  if (guests.length > 0) {
    const guestsSection = document.querySelector('.guestsSection');

    for (let i = 0; i < guests.length; i += 1) {
      guestsSection.innerHTML += '<li class="guest-container">'
        + `<img src="${guests[i].imgUrl}" alt="Guest logo"/>`
        + '<div class="guest">'
        + `<h2 class="font-family-l font-color2 font-weight2">${guests[i].guest}</h2>`
        + `<h2 class="font-family-l font-color1 font-weight1 f-s-2">${guests[i].companyDes}</h2>`
        + `<p class="font-family-l font-color2 font-weight1 f-s-2">${guests[i].description}</p>`
        + '</div>'
        + '</li>';
    }
  }
}
createProjectsSeciton();