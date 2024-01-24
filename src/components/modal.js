/* ИМПОРТ МОДУЛЕЙ */
import { popupNewCard, popupTypeImage, popupEdit } from "../index.js";

/* ФУНКЦИИ */
/*Функция открытия попапа*/
function openModal(elementDOM) {
  elementDOM.classList.add("popup_is-opened");
}

/*Функция закрытия попапа*/
function closeModal(elementDOM) {
  elementDOM.classList.remove("popup_is-opened");
}

/*Функция закрытия попапов на кнопку 'Esc'*/
function keydownEsc(evt) {
  if (evt.key === "Escape") {
    closeModal(popupEdit);
    closeModal(popupNewCard);
    closeModal(popupTypeImage);
  }
}

/* ЭКСПОРТ МОДУЛЕЙ */
export { openModal, closeModal, keydownEsc };
