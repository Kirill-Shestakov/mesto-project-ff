/* ИМПОРТ МОДУЛЕЙ */
import './pages/index.css';
import {initialCards, createCard, deleteCard, addNewCard} from "./components/cards";
import {openModal, closeModal} from './components/modal'

/* DOM-ЭЛЕМЕНТЫ */
const templateCard = document.querySelector("#card-template").content;
const placesList = document.querySelector(".places__list");
const popupEdit = document.querySelector(".popup_type_edit");
const popupNewCard = document.querySelector('.popup_type_new-card');
const popupTypeImage = document.querySelector('.popup_type_image');
const profile = document.querySelector('.profile');
const formElement = document.querySelector('.popup__form');
const nameInput = formElement.querySelector('.popup__input_type_name');
const jobInput = formElement.querySelector('.popup__input_type_description');
const profileName = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const formImage = popupNewCard.querySelector('.popup__form');
const imageName = document.querySelector('.popup__input_type_card-name');
const imageLink = document.querySelector('.popup__input_type_url');
const pageContent = document.querySelector('.page__content')

/* ОБРАБОТЧИКИ СОБЫТИЙ */
/*При нажатии кнопки 'сохранить' в окне 'Новое место' заполненые данные передаются функции createCard*/
formImage.addEventListener('submit', addNewCard);

/*При нажатии на заданный элемент открывается нужный попап*/
function openPopup(evt) {
  if (evt.target.classList.contains('profile__edit-button')) {
    openModal(popupEdit)
  } else if (evt.target.classList.contains('profile__add-button')) {
    openModal(popupNewCard)
  } else if(evt.target.classList.contains('card__image')) {
    openModal(popupTypeImage);
    document.querySelector('.popup__image').src = evt.target.src
    document.querySelector('.popup__caption').textContent = evt.target.alt
  };
};
profile.addEventListener('click', openPopup);
placesList.addEventListener('click', openPopup);

/*При нажатии на кнопку закрывается определенный попап*/
function closePopap(evt) {
  if (evt.target.classList.contains('popup__close')) {
    closeModal(evt.currentTarget);
  } else if (evt.target.classList.contains('popup')) {
    closeModal(evt.currentTarget);
  }
};
popupEdit.addEventListener('click', closePopap);
popupNewCard.addEventListener('click', closePopap);
popupTypeImage.addEventListener('click', closePopap);

/*При нажатии кнопки 'сохранить' в окне 'Редактировать профиль' заполненые данные передаются в определенные элементы*/
function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  closeModal(popupEdit)
};
formElement.addEventListener('submit', handleFormSubmit);

/*Меняет класс card__like-button_is-active в зависимости от нажатия*/
function clickLike(evt) {
  if(evt.target.classList.contains('card__like-button')) {
    evt.target.classList.toggle('card__like-button_is-active');
  }
};
placesList.addEventListener('click', clickLike);

/*Функция закрытия попапов на кнопку 'Esc'*/
document.addEventListener('keydown', function(evt) {
  if(evt.key === 'Escape') {
    closeModal(popupEdit);
    closeModal(popupNewCard)
    closeModal(popupTypeImage)
  }
});

/*При наведении на нужные элементы, попапом будет добавлен класс .popup_is-animated, который добавляет плавность анимации*/
pageContent.addEventListener('mouseover', function(evt) {
  if (evt.target.classList.contains('profile__edit-button')) {
    popupEdit.classList.add('popup_is-animated')
  } else if (evt.target.classList.contains('profile__add-button')) {
    popupNewCard.classList.add('popup_is-animated')
  } else if (evt.target.classList.contains('card__image')) {
    popupTypeImage.classList.add('popup_is-animated')
  }
})

/* ЦИКЛЫ */
/*Цикл, который добавляет карточки из массива initialCards*/
initialCards.forEach(function (item) {
  placesList.append(createCard(item.name, item.link, deleteCard));
});

/* ЭКСПОРТ МОДУЛЕЙ */
export {templateCard, placesList, imageName, imageLink, popupNewCard}