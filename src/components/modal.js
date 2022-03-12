import {closePopup, openPopup} from "./utils";
import {createCard, addCard, cardElements} from "./card.js";
import {objEnableValidation, disableButton} from "./validate";
import API from './api.js';

const form = document.forms.formCreatPlace;
const clearAvatar = document.forms.formPhoto;

const itemPopup = document.querySelector('#item-popup');//

const editPopup = document.querySelector('#edit-popup');//
const profile = document.querySelector('.profile');//
const addButton = profile.querySelector('.profile__add-button');//
const profileName = profile.querySelector('.profile__name');//
const profileCareer = profile.querySelector('.profile__career');//
const buttonEditProfile = document.querySelector('.profile__edit-button');//

const formElement = editPopup.querySelector('.popup__item-container');//
const nameInput = formElement.querySelector('.popup__item_el_name');//
const jobInput = formElement.querySelector('.popup__item_el_career');//

const creatCard = itemPopup.querySelector('.popup__item-container');//
const nameImputCard = creatCard.querySelector('.popup__item_el_places');//
const linksImputCard = creatCard.querySelector('.popup__item_el_link');//

const buttonSaveProfile = document.querySelector('.popup__button_save_profile');

const creatButton = document.querySelector('.popup__button-save_el_creat');

const buttonSaveCards = document.querySelector('.popup__button_save_card')

const avatarPopup = document.querySelector('#photo-popup');
const formAvatar = avatarPopup.querySelector('.popup__item-container');
const buttonSaveAvatar = document.querySelector('.popup__button_save_avatar');
const avatarInput = document.querySelector('.popup__item_el_avatar');
const avatarButton = document.querySelector('.profile__avatar');
const profileAvatarButton = document.querySelector('.profile__button-avatar')
// todo кнопка сохранить изменения в редактировании профиля

formElement.addEventListener('submit', function (evt){
  evt.preventDefault();
  buttonSaveProfile.textContent = 'Сохранение...';
  // вызываем ф-цию АПИ
  API.createProfileData(nameInput.value, jobInput.value)
    .then(data => {
      profileName.textContent = data.name;
      profileCareer.textContent = data.about;
      closePopup(editPopup);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      buttonSaveProfile.textContent = 'Сохранить';
    })
});

formAvatar.addEventListener('submit', function (evt) {
  evt.preventDefault();
  buttonSaveAvatar.textContent = 'Сохранение...';
  API.createAvatar(avatarInput.value)
    .then(data => {
      avatarButton.src = data.avatar;
      disableButton(buttonSaveAvatar, objEnableValidation);
      closePopup(avatarPopup);
      clearAvatar.reset();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      buttonSaveAvatar.textContent = 'Сохранить';
    })
});

creatCard.addEventListener('submit', function (evt){
  evt.preventDefault();
  buttonSaveCards.textContent = 'Сохранение...';
  const ggg = nameImputCard.value;
  const aaa = linksImputCard.value

  API.createNewCard(ggg, aaa)
    .then(res => {
      cardElements.prepend(createCard(res.name, res.link, res._id, res.likes, res.owner._id, res.owner))
      disableButton(buttonSaveCards, objEnableValidation);
      closePopup(itemPopup);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      buttonSaveCards.textContent = 'Сохранить';
    })
});

export {itemPopup, editPopup, avatarPopup, avatarButton, profileAvatarButton, formAvatar, buttonSaveAvatar, avatarInput, profile, addButton, profileName, profileCareer, buttonEditProfile,
  formElement, nameInput, jobInput, form, creatCard, nameImputCard, linksImputCard}
