import {openPopup} from './utils.js';

const templateCards = document.querySelector('#template-cards').content;
const cardElements = document.querySelector('.elements');//

const imagePopup = document.querySelector('#image-popup');//
const imageFigcaption = imagePopup.querySelector('.popup__image-figcaption');//
const photoPopup = imagePopup.querySelector('.popup__image');//

// переменные для передачи данных из масива в ф-цию создания карточек

let place;
let links;

// todo масив с карточками
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

// todo создание карточек
function createCard(place, links) {
  const elements = templateCards.querySelector('.elements__element').cloneNode(true);
  const image = elements.querySelector('.elements__image');
  image.src = links;
  image.alt = place;
  elements.querySelector('.elements__name').textContent = place;
  const deleteButtonCard = elements.querySelector('.elements__trash-button');
  const likeButton = elements.querySelector('.elements__button-heart');


  // todo кнопка удаления карточек
  deleteButtonCard.addEventListener('click', function (evt) {
    evt.target.closest('.elements__element').remove();
  });

  // todo кнопка лайка карточек
  likeButton.addEventListener('click', function (evt) {
    evt.target.classList.toggle('elements__button-heart_active');
  });

  image.addEventListener("click", function () {
    photoPopup.src = links;
    photoPopup.alt = place;
    imageFigcaption.textContent = place;
    openPopup(imagePopup);
  });
  return elements;
}

function addCard (elements) {
  cardElements.prepend(elements);
}

// todo перебор масива с картачками и вызов ф-ции создания карточек
initialCards.forEach(function (card) {
  place = card.name;
  links = card.link;
  //вызов ф-ции создания карточек
  return addCard(createCard(card.name, card.link));
});


export {addCard, createCard};
