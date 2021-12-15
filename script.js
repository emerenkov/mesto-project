const formElement = document.querySelector('.popup__item-container');
const editPopup = document.querySelector('#edit-popup');
const itemPopup = document.querySelector('#item-popup');
const popup = document.querySelectorAll('.popup');

const nameInput = formElement.querySelector('.popup__item_el_name');
const jobInput = formElement.querySelector('.popup__item_el_career');

//const buttonCloseEdit = popup.querySelector('.popup__button-close_el_edit');
//const buttonCloseItem = popup.querySelector('.popup__button-close_el_item');

const profile = document.querySelector('.profile');
const addButton = profile.querySelector('.profile__add-button');
const profileName = profile.querySelector('.profile__name');
const profileCareer = profile.querySelector('.profile__career');
const buttonEditProfile = document.querySelector('.profile__edit-button');

// const buttonClose = document.querySelectorAll('.popup__button-close');


function openPopup(popup) {
    popup.classList.add('popup_opened');
    console.log(popup);
}

// buttonClose.addEventListener('click', function () {
//     if (itemPopup.classList.contains('popup_opened')) {
//       itemPopup.classList.remove('popup_opened');
//       console.log('item');
//     } else {
//       editPopup.classList.remove('popup_opened');
//       console.log('edit');
//     }
// });


// itemPopup.classList.contains('popup_opened')

buttonEditProfile.addEventListener('click', function () {
  openPopup(editPopup);
});

addButton.addEventListener('click', function () {
  openPopup(itemPopup);
});

// buttonClose.addEventListener('click', closePopup);
//buttonCloseItem.addEventListener('click', closePopup);




// function openPopup() {
//   editPopup.classList.add('popup_opened');
//   console.log(`${popup.classList}`);
//   // newDate();
// }

// function closePopup() {
//   popup.classList.remove('popup_opened');
//   console.log(`${popup.classList}`);
// }

// function itemOpenPopup() {
//   itemPopup.classList.add('popup_opened');
//   console.log(`${popup.classList}`);
// }





// function newDate() {
//   nameInput.value = profileName.textContent;
//   jobInput.value = profileCareer.textContent;
// }


// function formSubmitHandler (evt) {
//   evt.preventDefault();
//   profileName.textContent = nameInput.value;
//   profileCareer.textContent = jobInput.value;

//   const form = evt.target.getAttribute('data-form');
//   if (form === 'editPopup') {
//     closePopup(profilePopup);
//   } else {
//     closePopup(cardPopup);
//   }

// }

// formElement.addEventListener('submit', formSubmitHandler);

