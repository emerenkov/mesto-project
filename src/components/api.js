const config = {
  url: 'https://nomoreparties.co/v1/plus-cohort7', //link to project
  headers: {
    authorization: '33fe5bf0-ebdd-4f97-97a6-0d937018b270',
    'Content-Type': 'application/json' // type data for create
  }
};

const parseResponse = (res) => {     //делает проверку на ок (вспомогательная ф-ция)
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(new Error(`Произошла ошибка со статус-кодом ${res.status}`));
};

//функция получения данных профиля которые заносятся в форму
const profileData = () => {
  return fetch(`${config.url}/users/me`, {
    headers: config.headers
  })
.then(res => parseResponse(res))
};

//функция создания данных профиля которые заносятся в форму
const createProfileData = (username, activity) => {
  const profileInfo = {
    name: username,
    about: activity
  };
  return fetch(`${config.url}/users/me`, {
    method: 'PATCH', // обновляет профиль
    headers: config.headers,
    body: JSON.stringify(profileInfo)
  })
.then(res => parseResponse(res))
};

//функция получения данных карточки которые заносятся в форму
const cardData = () => {
  return fetch(`${config.url}/cards`, {
    headers: config.headers
})
.then(res => parseResponse(res))
};

//функция создания данных карточки которые заносятся в форму
const createNewCard = (cardName, cardImage) => {
  const cardInfo = {
    name: cardName,
    link: cardImage,
  };
  return fetch(`${config.url}/cards`, {
    method: 'POST',  //для отправки данных на сервер
    headers: config.headers,
    body: JSON.stringify(cardInfo)
})
.then(res => parseResponse(res))
};

//удаление карточки
const deleteCard = (cardId) => {
  return fetch(`${config.url}/cards/${cardId}`, {
    method: 'DELETE',  //delete card
    headers: config.headers
  })
    .then(res => parseResponse(res))
};

//добавление лайка на страницу
const addLike = (cardId) => {
  return fetch(`${config.url}/cards/likes/${cardId}`, {
    method: 'PUT', // предназначен для полного обнавления указанного ресурса
    headers: config.headers,
  })
.then(res => parseResponse(res))
};

//функция удаления лайка со страницы
const removeLike = (cardId) => {
  return fetch(`${config.url}/cards/likes/${cardId}`, {
    method: 'DELETE',
    headers: config.headers
  })
.then(res => parseResponse(res))
};

//функция обнавления и редактирование аватара
const createAvatar = (img) => {
  const avatarInfo = {
    avatar: img
  };
  return fetch(`${config.url}/users/me/avatar`, {
    method: 'PATCH',  // отправка данных на сервер
    headers: config.headers,
    body: JSON.stringify(avatarInfo)
  })
.then(res => parseResponse(res))
};

export default {
  profileData,
  cardData,
  createProfileData,
  createNewCard,
  deleteCard,
  addLike,
  removeLike,
  createAvatar
};
