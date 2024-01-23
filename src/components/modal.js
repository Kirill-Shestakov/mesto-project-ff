/* ФУНКЦИИ */
/*Функция открытия попапа*/
function openModal(elementDOM) {
    elementDOM.classList.add('popup_is-opened')
}

/*Функция закрытия попапа*/
function closeModal(elementDOM) {
    elementDOM.classList.remove('popup_is-opened')
};

/* ЭКСПОРТ МОДУЛЕЙ */
export {openModal, closeModal};