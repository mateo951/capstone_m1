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