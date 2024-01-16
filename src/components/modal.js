import {popup, changeProfileButton, popupButtonClose} from '../index.js';

function openModal(elementDOM) {
    elementDOM.classList.add('popup_is-opened')
}

function closeModal(elementDOM) {
    elementDOM.classList.remove('popup_is-opened')
};


export {openModal, closeModal};