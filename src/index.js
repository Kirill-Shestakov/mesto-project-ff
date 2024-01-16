import './pages/index.css';
import {initialCards, createCard, deleteCard} from "./components/cards";
import {openModal, closeModal} from './components/modal'


const templateCard = document.querySelector("#card-template").content;
const placesList = document.querySelector(".places__list");
const popup = document.querySelector(".popup");
const changeProfileButton = document.querySelector(".profile__edit-button");
const popupEdit = document.querySelector(".popup_type_edit");
const popupButtonClose = popupEdit.querySelector('.popup__close');



initialCards.forEach(function (item) {
  placesList.append(createCard(item.name, item.link, deleteCard));
});



changeProfileButton.addEventListener('click', function() {
  openModal(popupEdit);

});

popupButtonClose.addEventListener('click', function() {
  closeModal(popupEdit);
});

export {templateCard, placesList, popup, changeProfileButton, popupButtonClose}