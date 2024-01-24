/* ИМПОРТ МОДУЛЕЙ */
import {
  templateCard,
  placesList,
  imageName,
  imageLink,
  popupNewCard,
  popupTypeImage,
} from "../index.js";
import { openModal, closeModal } from "./modal";

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
  },
];

/* ФУНКЦИИ */
/*Функция создания карточки*/
function createCard(name, link, deleteCard, checkLike, openImgPopup) {
  const card = templateCard.querySelector(".card").cloneNode(true);
  const deleteButton = card.querySelector(".card__delete-button");
  const likeButton = card.querySelector(".card__like-button");
  const image = card.querySelector(".card__image");
  card.querySelector(".card__title").textContent = name;
  card.querySelector(".card__image").setAttribute("src", link);
  card.querySelector(".card__image").setAttribute("alt", name);
  deleteButton.addEventListener("click", deleteCard);
  likeButton.addEventListener("click", checkLike);
  image.addEventListener("click", openImgPopup);
  return card;
}

/*Функция удаления карточки*/
function deleteCard(evt) {
  const cardElement = evt.target.closest(".card");
  cardElement.remove();
}

/*Функция переключения лайка*/
function checkLike(evt) {
  evt.target.classList.toggle("card__like-button_is-active");
}

/*Функция открытия попап с изображением*/
function openImgPopup(evt) {
  openModal(popupTypeImage);
  document.querySelector(".popup__image").src = evt.target.src;
  document.querySelector(".popup__caption").textContent = evt.target.alt;
}

/*Функция добавления новой карточки*/
function addNewCard(evt) {
  evt.preventDefault();
  placesList.prepend(
    createCard(imageName.value, imageLink.value, deleteCard, checkLike)
  );
  closeModal(popupNewCard);
}

/* ЭКСПОРТ МОДУЛЕЙ */
export {
  initialCards,
  createCard,
  deleteCard,
  checkLike,
  openImgPopup,
  addNewCard,
};
