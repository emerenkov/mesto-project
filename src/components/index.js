import '../pages/index.css'; // добавьте импорт главного файла стилей
import {enableValidation, objEnableValidation} from "./validate";
import API from './api.js';
import {createCard, cardElements} from "./card";
import {itemPopup, editPopup, avatarPopup, avatarButton, profileAvatarButton, addButton, profileName, profileCareer, buttonEditProfile,
  nameInput, jobInput, form} from './modal.js'

const imagePopup = document.querySelector('#image-popup');//
const imageFigcaption = imagePopup.querySelector('.popup__image-figcaption');//
const photoPopup = imagePopup.querySelector('.popup__image');//
const imageClosePopup = imagePopup.querySelector('.popup__button-close');//




//----------------------------------ВАЛИДАЦИЯ ФОРМ---------------------------------------------------------------------
Promise.all([API.profileData(), API.cardData()])
  .then(([user, cards]) => {

    profileName.textContent = user.name;
    profileCareer.textContent = user.about;
    avatarButton.src = user.avatar;

    const newCards = cards.map(function (card) {
      return createCard(card.name, card.link, card._id, card.likes, user._id, card.owner)
    });
    cardElements.prepend(...newCards);
  })
  .catch((err) => {
    console.log(err);
  });


enableValidation(objEnableValidation);

//---------------------------------------------------------------------------------------------------------------------

import {openPopup} from './utils.js';

export {imageFigcaption, imagePopup, photoPopup, imageClosePopup};


// todo кнопки открытия попапа
buttonEditProfile.addEventListener('click', function () {
  openPopup(editPopup);
  nameInput.value = profileName.textContent;
  jobInput.value = profileCareer.textContent;
});

addButton.addEventListener('click', function () {
  form.reset();
  openPopup(itemPopup);
});

profileAvatarButton.addEventListener('click', function () {
  openPopup(avatarPopup);
})

