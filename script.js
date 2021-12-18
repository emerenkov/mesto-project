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
  if (editPopup === popup) {
    // вызываем ф-цию для заполнения строки инпута (редоктирования)
  creatDate();
  }
}
// todo кнопки открытия попапа
buttonEditProfile.addEventListener('click', function () {
  openPopup(editPopup);
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

// todo получение заполненых строк в инпуте редактирования
function creatDate() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileCareer.textContent;
}


// todo задаем новое значение для строк инпута и закрываем попап редактирование и создания карточек
function formSubmitHandler (evt) {
  evt.preventDefault();
  if (editPopup.classList.contains('popup_opened')) {
    profileName.textContent = nameInput.value;
    profileCareer.textContent = jobInput.value;
    closePopup(editPopup);
  } else {
    addValue();
    closePopup(itemPopup);
  }
}


// todo кнопка сохранить изменения в редактировании профиля
formElement.addEventListener('submit', formSubmitHandler);


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
function addCard(place, links) {
  const element = templateCards.querySelector('.elements__element').cloneNode(true);
  const image = element.querySelector('.elements__image');
  image.src = links;
  image.alt = place;
  element.querySelector('.elements__name').textContent = place;
  const deleteButtonCard = element.querySelector('.elements__trash-button');
  const likeButton = element.querySelector('.elements__button-heart');
  cardElements.prepend(element);

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
}

// todo перебор масива с картачками и вызов ф-ции создания карточек
initialCards.forEach(function (card) {
  place = card.name;
  links = card.link;
  //вызов ф-ции создания карточек
  addCard(place, links);
});

// todo кнопка сохранения нового места
creatCard.addEventListener('submit', formSubmitHandler);

// todo принимаем данные нового места
function addValue() {
  place = nameImputCard.value;
  links = linksImputCard.value;
  // передаем новые данные в ф-цию создания карточки
  addCard(place, links);
}
