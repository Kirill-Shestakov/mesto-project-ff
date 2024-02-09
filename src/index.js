/* ИМПОРТ МОДУЛЕЙ */
import "./pages/index.css";
import { createCard, checkLike, deleteCard } from "./components/card";
import { openModal, closeModal } from "./components/modal";
import {
  enableValidation,
  clearValidation,
} from "./components/validation";
import {
  initializationUser,
  initializationCards,
  editProfile,
  addCard,
  updateAvatar,
} from "./components/api";
import { validationConfig } from "./components/config";
/* DOM-ЭЛЕМЕНТЫ */

const placesList = document.querySelector(".places__list");
const popupEdit = document.querySelector(".popup_type_edit");
const popupNewCard = document.querySelector(".popup_type_new-card");
const popupTypeImage = document.querySelector(".popup_type_image");
const popupUpdateAvatar = document.querySelector(".popup_type_update-avatar");
const formProfile = popupEdit.querySelector(".popup__form");
const formImage = popupNewCard.querySelector(".popup__form");
const formAvatar = popupUpdateAvatar.querySelector(".popup__form");
const nameInput = formProfile.querySelector(".popup__input_type_name");
const jobInput = formProfile.querySelector(".popup__input_type_description");
const profileName = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profileAvatar = document.querySelector(".profile__image");
const profileAvatarBtn = document.querySelector(".profile__avatar-button");
const imageName = document.querySelector(".popup__input_type_card-name");
const imageLink = document.querySelector(".popup__input_type_url");
const avatarLink = document.querySelector(".popup__input_type_avatar");
const editButton = document.querySelector(".profile__edit-button");
const addButton = document.querySelector(".profile__add-button");
const editForm = document.querySelector('form[name="edit-profile"]');
const cardForm = document.querySelector('form[name="new-place"]');
const avatarForm = document.querySelector('form[name="update-avatar"]');
const promises = [initializationUser(), initializationCards()];

/* ОБРАБОТЧИКИ СОБЫТИЙ */
/*При нажатии кнопки 'сохранить' в окне 'Новое место' заполненые данные передаются функции createCard*/
formImage.addEventListener("submit", addNewCard);

/*При нажатии на заданный элемент открывается нужный попап*/
function clickEditButton() {
  addSmoothAnimation(popupEdit);
  clearValidation(editForm, validationConfig);
  openModal(popupEdit);
  nameInput.value = profileName.textContent;
  jobInput.value = profileDescription.textContent;
}
function openAddPopup() {
  addSmoothAnimation(popupNewCard);
  clearValidation(formImage, validationConfig);
  openModal(popupNewCard);
}
function openTypePopup() {
  addSmoothAnimation(popupTypeImage);
  openModal(popupTypeImage);
}
function openAvatarPopup() {
  addSmoothAnimation(popupUpdateAvatar);
  clearValidation(avatarForm, validationConfig);
  openModal(popupUpdateAvatar);
}
enableValidation(validationConfig);
function addSmoothAnimation(popupElement) {
  popupElement.classList.add("popup_is-animated");
}
editButton.addEventListener("click", clickEditButton);
addButton.addEventListener("click", openAddPopup);

/*При нажатии на кнопку закрывается определенный попап*/
function closePopap(evt) {
  if (evt.target.classList.contains("popup__close") || evt.target.classList.contains("popup")) {
    closeModal(evt.currentTarget);
  }
}
popupEdit.addEventListener("click", closePopap);
popupNewCard.addEventListener("click", closePopap);
popupTypeImage.addEventListener("click", closePopap);
popupUpdateAvatar.addEventListener("click", closePopap);

/*При нажатии кнопки 'сохранить' в окне 'Редактировать профиль' заполненые данные передаются в определенные элементы*/
function handleFormProfileSubmit(evt) {
  evt.preventDefault();
  formProfile.querySelector(".popup__button").textContent = "Сохранение...";
  editProfile(nameInput, jobInput)
    .then((res) => {
      profileName.textContent = res.name;
      profileDescription.textContent = res.about;
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      formProfile.querySelector(".popup__button").textContent = "Сохранить";
    })
  closeModal(popupEdit);
}
formProfile.addEventListener("submit", handleFormProfileSubmit);

/*Функция открытия попап с изображением*/
function openImgPopup(name, link) {
  openTypePopup();
  document.querySelector(".popup__image").src = link;
  document.querySelector(".popup__caption").alt = name;
  document.querySelector(".popup__caption").textContent = name;
}

function addNewCard(evt) {
  evt.preventDefault();
  formImage.querySelector(".popup__button").textContent = "Сохранение...";
  addCard(imageName, imageLink)
    .then((cardData) => {
      placesList.prepend(
        createCard(
          cardData,
          deleteCard,
          checkLike,
          openImgPopup,
          cardData.owner
        )
      );
      closeModal(popupNewCard);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      formImage.querySelector(".popup__button").textContent = "Сохранить";
    })
}

Promise.all(promises)
  .then(([userData, cardData]) => {
    profileName.textContent = userData.name;
    profileDescription.textContent = userData.about;
    profileAvatar.style.backgroundImage = `url(${userData.avatar})`;
    cardData.forEach(function (cardElement) {
      placesList.append(
        createCard(cardElement, deleteCard, checkLike, openImgPopup, userData)
      );
    });
  })
  .catch((err) => {
    console.log(err);
  });

function handleAvatarFormSubmit(evt) {
  evt.preventDefault();
  formAvatar.querySelector(".popup__button").textContent = "Сохранение...";
  updateAvatar(avatarLink)
    .then((avatarData) => {
      profileAvatar.style.backgroundImage = `url(${avatarData.avatar})`;
      closeModal(popupUpdateAvatar);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      formAvatar.querySelector(".popup__button").textContent = "Сохранить";
    })
}

formAvatar.addEventListener("submit", handleAvatarFormSubmit);
profileAvatarBtn.addEventListener("click", openAvatarPopup);

profileAvatar.addEventListener("mouseover", function () {
  profileAvatarBtn.classList.add("profile__avatar-button-visible");
  document
    .querySelector(".profile__avatar-overlay")
    .classList.add("profile__avatar-overlay-visible");
});

profileAvatar.addEventListener("mouseout", function () {
  profileAvatarBtn.classList.remove("profile__avatar-button-visible");
  document
    .querySelector(".profile__avatar-overlay")
    .classList.remove("profile__avatar-overlay-visible");
});