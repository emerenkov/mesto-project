
import {form, itemPopup} from './modal.js';
const buttonClose = document.querySelectorAll('.popup__button-close');//
const outClick = 'popup_opened';
const getPopup = () => document.querySelector(`.${outClick}`)

// todo ОТКРЫТИЕ попапа
function openPopup(popup) {
  popup.classList.add(outClick);
  closeButton(buttonClose);
}

// todo ЗАКРЫТИЕ попапа
function closePopup(popup) {
  popup.classList.remove(outClick);
}

//ф-ция закрытия попапа по клику мыши
function freeSpaceClosePopup(evt) {
  if (evt.target.classList.contains('popup_opened')) {
    form.reset();
    closePopup(getPopup());
  }
}
// функция закрите при нажатии ESC
function keyClosePopup(evt) {
  if (evt.keyCode === 27) {
    const popup = document.querySelector('.popup_opened');
    if (popup) {
      form.reset();
      closePopup(getPopup());
    }
  }
}

const closeButton = () => {
  const forms = Array.from(document.querySelectorAll('.popup__button-close'));

  forms.forEach(formElement => {
    formElement.addEventListener('click', function (e) {
      closePopup(e.target.closest('.popup'));
    })
    form.reset();
  })
  };

export {openPopup, closePopup, freeSpaceClosePopup, keyClosePopup};

