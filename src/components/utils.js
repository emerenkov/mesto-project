const popups = document.querySelectorAll('.popup');
const outClick = 'popup_opened';


//  ОТКРЫТИЕ попапа
function openPopup(popup) {
  popup.classList.add(outClick);
  document.addEventListener('keydown', closeByEscape);
}

//  ЗАКРЫТИЕ попапа
function closePopup(popup) {
  popup.classList.remove(outClick);
  document.removeEventListener('keydown', closeByEscape);
}


// функция закрите при нажатии ESC
function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const isPopup = document.querySelector('.popup_opened');
    closePopup(isPopup);
  }
}

popups.forEach((popup) => {
  popup.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup(popup)
    }
    if (evt.target.classList.contains('popup__button-close')) {
      closePopup(popup)
    }
  })
})


export {openPopup, closePopup, closeByEscape};




export default class Popup {
  constructor(selector) {
      this.selector = selector;
  }

  open() {
      this.selector.classList.add('popup_opened');
  }

  close() {
      this.selector.classList.remove('popup_opened');
  }
}
