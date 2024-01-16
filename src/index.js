import './pages/index.css';
import {initialCards, createCard, deleteCard} from "./components/cards";
import {openModal, closeModal} from './components/modal'


const templateCard = document.querySelector("#card-template").content;
const placesList = document.querySelector(".places__list");
const popup = document.querySelector(".popup");
const changeProfileButton = document.querySelector(".profile__edit-button");
const addButtonProfile = document.querySelector('.profile__add-button')
const popupEdit = document.querySelector(".popup_type_edit");
const popupNewCard = document.querySelector('.popup_type_new-card')
const closeNewCardButton = popupNewCard.querySelector('.popup__close');
const closeProfileButton = popupEdit.querySelector('.popup__close');



initialCards.forEach(function (item) {
  placesList.append(createCard(item.name, item.link, deleteCard));
});

changeProfileButton.addEventListener('click', function() {
  openModal(popupEdit);

});

closeProfileButton.addEventListener('click', function() {
  closeModal(popupEdit);
});

addButtonProfile.addEventListener('click', function () {
  openModal(popupNewCard);
});

closeNewCardButton.addEventListener('click', function() {
  closeModal(popupNewCard);
});


console.log(addButtonProfile)

export {templateCard, placesList}