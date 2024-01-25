
/* ФУНКЦИИ */
/*Функция открытия попапа*/
function openModal(popupElement) {
  popupElement.classList.add("popup_is-opened");
  document.addEventListener('keydown', keydownEsc)
}

/*Функция закрытия попапа*/
function closeModal(popupElement) {
  popupElement.classList.remove("popup_is-opened");
  document.removeEventListener('keydown', keydownEsc)
}
/*Функция закрытия попапа на 'Escape'*/
function keydownEsc(evt) {
  if (evt.key === "Escape") {
    closeModal(document.querySelector('.popup_is-opened'));
  }
}

/* ЭКСПОРТ МОДУЛЕЙ */
export { openModal, closeModal };
