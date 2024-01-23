/* ИМПОРТ МОДУЛЕЙ */
import {templateCard, placesList, imageName, imageLink, popupNewCard} from '../index.js'
import {openModal, closeModal} from './modal'

/*Массив с карточками*/
const initialCards = [
    {
      name: "Архыз",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
    },
    {
      name: "Челябинская область",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
    },
    {
      name: "Иваново",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
    },
    {
      name: "Камчатка",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
    },
    {
      name: "Холмогорский район",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
    },
    {
      name: "Байкал",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
    }
];

/* ФУНКЦИИ */
/*Функция создания карточки*/
function createCard(name, link, deleteCard) {
  const card = templateCard.querySelector(".card").cloneNode(true);
  card.querySelector(".card__title").textContent = name;
  card.querySelector(".card__image").setAttribute("src", link);
  card.querySelector(".card__image").setAttribute("alt", name);
  const deleteButton = card.querySelector(".card__delete-button");
  deleteButton.addEventListener("click", deleteCard);
  return card;
}

/*Функция удаления карточки*/
function deleteCard(evt) {
  const cardElement = evt.target.closest(".card");
  cardElement.remove();
}

/*Функция добавления новой карточки*/
function addNewCard(evt) {
  evt.preventDefault();
  placesList.prepend(createCard(imageName.value, imageLink.value, deleteCard));
  closeModal(popupNewCard)
};

/* ЭКСПОРТ МОДУЛЕЙ */
export {initialCards, createCard, deleteCard, addNewCard};