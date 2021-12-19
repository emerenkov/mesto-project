const editPopup = document.querySelector('#edit-popup');
const itemPopup = document.querySelector('#item-popup');
const editClosePopup = editPopup.querySelector('.popup__button-close');
const itemClosePopup = itemPopup.querySelector('.popup__button-close');

const formElement = editPopup.querySelector('.popup__item-container');
const nameInput = formElement.querySelector('.popup__item_el_name');
const jobInput = formElement.querySelector('.popup__item_el_career');

const creatCard = itemPopup.querySelector('.popup__item-container');
const nameImputCard = creatCard.querySelector('.popup__item_el_places');
const linksImputCard = creatCard.querySelector('.popup__item_el_link');

const profile = document.querySelector('.profile');
const addButton = profile.querySelector('.profile__add-button');
const profileName = profile.querySelector('.profile__name');
const profileCareer = profile.querySelector('.profile__career');
const buttonEditProfile = document.querySelector('.profile__edit-button');

const templateCards = document.querySelector('#template-cards').content;
const cardElements = document.querySelector('.elements');

const imagePopup = document.querySelector('#image-popup');
const imageFigcaption = imagePopup.querySelector('.popup__image-figcaption');
const photoPopup = imagePopup.querySelector('.popup__image');
const imageClosePopup = imagePopup.querySelector('.popup__button-close');


// переменные для передачи данных из масива в ф-цию создания карточек
let place;
let links;

// todo ОТКРЫТИЕ попапа
function openPopup(popup) {
  popup.classList.add('popup_opened');
}

// todo кнопки открытия попапа
buttonEditProfile.addEventListener('click', function () {
  openPopup(editPopup);
  nameInput.value = profileName.textContent;
  jobInput.value = profileCareer.textContent;
});
addButton.addEventListener('click', function () {
  openPopup(itemPopup);
});


// todo ЗАКРЫТИЕ попапа
function closePopup(popup) {
  popup.classList.remove('popup_opened');
}
// todo кнопки закрытия попапа
editClosePopup.addEventListener('click', function () {
  closePopup(editPopup);
});

itemClosePopup.addEventListener('click', function () {
  closePopup(itemPopup);
});

imageClosePopup.addEventListener('click', function () {
  closePopup(imagePopup);
});


// todo кнопка сохранить изменения в редактировании профиля
formElement.addEventListener('submit', function (evt){
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileCareer.textContent = jobInput.value;
  closePopup(editPopup);
});

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

creatCard.addEventListener('submit', function (evt){
  evt.preventDefault();
  addCard(createCard(nameImputCard.value, linksImputCard.value));
  closePopup(itemPopup);
  clearInput();
});

function clearInput() {
  nameImputCard.value = '';
  linksImputCard.value = '';
}
