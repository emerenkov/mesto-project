import {closePopup} from "./utils";
import {createCard, addCard} from "./card.js";
import {objEnableValidation, disableButton} from "./validate";

const form = document.forms.formCreatPlace;


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

const creatButton = document.querySelector('.popup__button-save_el_creat');

// todo кнопка сохранить изменения в редактировании профиля
formElement.addEventListener('submit', function (evt){
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileCareer.textContent = jobInput.value;
  closePopup(editPopup);
});

creatCard.addEventListener('submit', function (evt){
  evt.preventDefault();
  addCard(createCard(nameImputCard.value, linksImputCard.value));
  disableButton(creatButton, objEnableValidation);
  form.reset();
  closePopup(itemPopup);
});

export {itemPopup, editPopup, profile, addButton, profileName, profileCareer, buttonEditProfile,
  formElement, nameInput, jobInput, form, creatCard, nameImputCard, linksImputCard}
