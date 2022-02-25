const objEnableValidation = {
  formSelector: '.popup__item-container',
  inputSelector: '.popup__item',
  submitButtonSelector: '.popup__button-save',
  inactiveButtonClass: 'popup__button-save_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

const hideInputError = (inputElement, error, config) => {
  inputElement.classList.remove(config.inputErrorClass);
  error.classList.remove(config.errorClass);
  error.textContent = '';
}

const showInputError = (inputElement, error, errorMessage, config) => {
  inputElement.classList.add(config.inputErrorClass);
  error.classList.add(config.errorClass);
  error.textContent = errorMessage;
}

const isValid = (formElement, inputElement, config) => {
  const error = formElement.querySelector(`#error-${inputElement.id}`);

  if (inputElement.validity.valid) {
    hideInputError(inputElement, error, config);
  } else {
    showInputError(inputElement, error, inputElement.validationMessage, config);
  }
}

const disableButton = (buttonElement, config) => {
  buttonElement.classList.add(config.inactiveButtonClass);
  buttonElement.disabled = true;
}

const enableButton = (buttonElement, config) => {
  buttonElement.classList.remove(config.inactiveButtonClass);
  buttonElement.disabled = false;
}

const hasInvalidInput = (inputList) => {
  return inputList.some(inputElement => {
    return !inputElement.validity.valid;
  });
}

const toggleButtonError = (formElement, inputList, config) => {
  const buttonElement = formElement.querySelector(config.submitButtonSelector);

  if (hasInvalidInput(inputList)) {
    disableButton(buttonElement, config);
  } else {
    enableButton(buttonElement, config);
  }
}

const setEventsListener = (formElement, config) => {
  const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));

  inputList.forEach(inputElement => {
    inputElement.addEventListener('input', () => {
      isValid(formElement, inputElement, config);
      toggleButtonError(formElement, inputList, config);
    });
  });
  toggleButtonError(formElement, inputList, config);
};

const enableValidation = (config) => {
  const forms = Array.from(document.querySelectorAll(config.formSelector));

  forms.forEach(formElement => {
    formElement.addEventListener('submit', event => {
      event.preventDefault();
    });
    setEventsListener(formElement, config);
  });
}
export {enableValidation, objEnableValidation, disableButton};
