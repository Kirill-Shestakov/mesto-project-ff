/* ИМПОРТ МОДУЛЕЙ */
import "./pages/index.css";
import {
  createCard, deleteCard, checkLike
} from "./components/cards";
import { openModal, closeModal } from "./components/modal";
import { initialCards } from "./components/array";

/* DOM-ЭЛЕМЕНТЫ */

const placesList = document.querySelector(".places__list");
const popupEdit = document.querySelector(".popup_type_edit");
const popupNewCard = document.querySelector(".popup_type_new-card");
const popupTypeImage = document.querySelector(".popup_type_image");
const formElement = document.querySelector(".popup__form");
const nameInput = formElement.querySelector(".popup__input_type_name");
const jobInput = formElement.querySelector(".popup__input_type_description");
const profileName = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const formImage = popupNewCard.querySelector(".popup__form");
const imageName = document.querySelector(".popup__input_type_card-name");
const imageLink = document.querySelector(".popup__input_type_url");
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button')

/* ОБРАБОТЧИКИ СОБЫТИЙ */
/*При нажатии кнопки 'сохранить' в окне 'Новое место' заполненые данные передаются функции createCard*/
formImage.addEventListener("submit", addNewCard);

/*При нажатии на заданный элемент открывается нужный попап*/
function clickEditButton() {
  addSmoothAnimation(popupEdit)
  openModal(popupEdit);
  nameInput.value = profileName.textContent;
  jobInput.value = profileDescription.textContent;
}
function openAddPopup() {
  addSmoothAnimation(popupNewCard)
  openModal(popupNewCard);
}
function openTypePopup() {
  addSmoothAnimation(popupTypeImage)
  openModal(popupTypeImage);
}

function addSmoothAnimation(popupElement) {
  popupElement.classList.add('popup_is-animated')
}
editButton.addEventListener('click', clickEditButton);
addButton.addEventListener('click', openAddPopup);

/*При нажатии на кнопку закрывается определенный попап*/
function closePopap(evt) {
  if (evt.target.classList.contains("popup__close")) {
    closeModal(evt.currentTarget);
  } else if (evt.target.classList.contains("popup")) {
    closeModal(evt.currentTarget);
  }
}
popupEdit.addEventListener("click", closePopap);
popupNewCard.addEventListener("click", closePopap);
popupTypeImage.addEventListener("click", closePopap);

/*При нажатии кнопки 'сохранить' в окне 'Редактировать профиль' заполненые данные передаются в определенные элементы*/
function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  closeModal(popupEdit);
}
formElement.addEventListener("submit", handleFormSubmit);

/*Функция открытия попап с изображением*/
function openImgPopup(name, link) {
  openTypePopup()
  document.querySelector(".popup__image").src = link;
  document.querySelector(".popup__caption").textContent = name;
}

function addNewCard(evt) {
  evt.preventDefault();
  placesList.prepend(
    createCard(imageName.value, imageLink.value, deleteCard, checkLike, openImgPopup)
  );
  closeModal(popupNewCard);
}

/* ЦИКЛЫ */
/*Цикл, который добавляет карточки из массива initialCards*/
initialCards.forEach(function (item) {
  placesList.append(
    createCard(item.name, item.link, deleteCard, checkLike, openImgPopup)
  );
});

