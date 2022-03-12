import {openPopup} from './utils.js';
import API from './api.js';

const templateCards = document.querySelector('#template-cards').content;
const cardElements = document.querySelector('.elements__list');//

const imagePopup = document.querySelector('#image-popup');//
const imageFigcaption = imagePopup.querySelector('.popup__image-figcaption');//
const photoPopup = imagePopup.querySelector('.popup__image');//


// todo создание карточек
function createCard(place, links, id, likes, userId, owner) {
  const elements = templateCards.querySelector('.elements__element').cloneNode(true);
  const image = elements.querySelector('.elements__image');
  const deleteButtonCard = elements.querySelector('.elements__trash-button');
  const containerLike = elements.querySelector('.elements__like-container');
  const likeButton = containerLike.querySelector('.elements__button-heart');
  const countLike = elements.querySelector('.elements__like-count');
  const elementsName = elements.querySelector('.elements__name');

  image.src = links;
  image.alt = place;
  elementsName.textContent = place;
  elements.dataset.id = id;
  countLike.textContent = likes.length;

  if (likes.some(likedUser => likedUser._id === userId)) {
    likeButton.classList.add('elements__button-heart_active');
  }

  if (userId !== owner._id) {
    deleteButtonCard.remove();
  }

//  кнопка удаления карточек
  deleteButtonCard.addEventListener('click', deleteRemoveCard)
  function deleteRemoveCard (evt) {
    API.deleteCard(evt.target.closest('.elements__element').dataset.id) // dataset.id прочитать
      .then(() => {
        evt.target.closest('.elements__element').remove();
      })
      .catch((err) => {
        console.log(err);
      })
  }

  // кнопка лайка карточек
  likeButton.addEventListener('click', addLikeInCard);
  // функция лайка карточки
  function addLikeInCard (evt) {
    if (evt.target.classList.contains('elements__button-heart_active')) {
      API.removeLike(elements.dataset.id)
        .then((res) => {
          evt.target.classList.remove('elements__button-heart_active');
          countLike.textContent = res.likes.length;
        })
        .catch((err) => {
          console.log(err);
        })
    } else {
      API.addLike(elements.dataset.id)
        .then((res) => {
          evt.target.classList.add('elements__button-heart_active');
          countLike.textContent = res.likes.length;
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }

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


export {addCard, createCard, cardElements};
