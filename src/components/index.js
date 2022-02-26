import '../pages/index.css'; // добавьте импорт главного файла стилей
import {enableValidation, objEnableValidation} from "./validate";

import {itemPopup, editPopup, addButton, profileName, profileCareer, buttonEditProfile,
  nameInput, jobInput, form} from './modal.js'

const imagePopup = document.querySelector('#image-popup');//
const imageFigcaption = imagePopup.querySelector('.popup__image-figcaption');//
const photoPopup = imagePopup.querySelector('.popup__image');//
const imageClosePopup = imagePopup.querySelector('.popup__button-close');//

//----------------------------------ВАЛИДАЦИЯ ФОРМ---------------------------------------------------------------------

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
