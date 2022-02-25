import '../pages/index.css'; // добавьте импорт главного файла стилей
import {enableValidation, objEnableValidation} from "./validate";

import {itemPopup, editPopup, addButton, profileName, profileCareer, buttonEditProfile,
  nameInput, jobInput} from './modal.js'

const imagePopup = document.querySelector('#image-popup');//
const imageFigcaption = imagePopup.querySelector('.popup__image-figcaption');//
const photoPopup = imagePopup.querySelector('.popup__image');//
const imageClosePopup = imagePopup.querySelector('.popup__button-close');//

//----------------------------------ВАЛИДАЦИЯ ФОРМ---------------------------------------------------------------------

enableValidation(objEnableValidation);

//---------------------------------------------------------------------------------------------------------------------

import {openPopup, freeSpaceClosePopup, keyClosePopup} from './utils.js';

export {imageFigcaption, imagePopup, photoPopup, imageClosePopup};


// todo кнопки открытия попапа
buttonEditProfile.addEventListener('click', function () {
  openPopup(editPopup);
  nameInput.value = profileName.textContent;
  jobInput.value = profileCareer.textContent;
});

addButton.addEventListener('click', function () {
  openPopup(itemPopup);
});

//----------------------Закрытие попапа при нажатии overflow мышкой или ESC-------------------------------------------
//повесил клик на враппер
const wrapper = document.querySelector('.wrapper');
//при клике мимо попапа запускается ф-ция
wrapper.addEventListener('click', freeSpaceClosePopup);
document.addEventListener('keydown', keyClosePopup);

//----------------------------------ВАЛИДАЦИЯ ФОРМ---------------------------------------------------------------------
