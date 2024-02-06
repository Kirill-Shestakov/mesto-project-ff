import {removeCard, getLike, deleteLike} from "./api";

const templateCard = document.querySelector("#card-template").content.querySelector(".card");

/* ФУНКЦИИ */
/*Функция создания карточки*/
function createCard(cardData, deleteCard, checkLike, openImgPopup, userData) {
  const card = templateCard.cloneNode(true);
  const deleteButton = card.querySelector(".card__delete-button");
  const likeButton = card.querySelector(".card__like-button");
  const image = card.querySelector(".card__image");
  const numberLike = card.querySelector('.card__number-like')
  card.querySelector(".card__title").textContent = cardData.name;
  image.setAttribute("src", cardData.link);
  image.setAttribute("alt", cardData.name);
  numberLike.textContent = cardData.likes.length
  cardData.likes.forEach(element => {
    if (userData._id === element._id) {
      likeButton.classList.add('card__like-button_is-active')
    };
  });
  if (userData._id === cardData.owner._id) {
    deleteButton.classList.add('card__delete-button-visible')
    deleteButton.addEventListener("click", () => {
      deleteCard(card, cardData._id);
    });
  };
  likeButton.addEventListener("click", () => {
    checkLike(likeButton, cardData._id, numberLike)
  });
  image.addEventListener("click", () => {
      openImgPopup(cardData.name, cardData.link)
  });
  return card;
}


function deleteCard(cardElement, CardId) {
  cardElement.remove();
  removeCard(CardId)
}


/*Функция переключения лайка*/
function checkLike(likeButton, cardId, like) {
  if (!likeButton.classList.contains('card__like-button_is-active')) {
    getLike(cardId)
      .then((card) => {
        likeButton.classList.add('card__like-button_is-active')
        like.textContent = card.likes.length
      })
  } else if (likeButton.classList.contains('card__like-button_is-active')) {
    deleteLike(cardId)
      .then((card) => {
        likeButton.classList.remove('card__like-button_is-active')
        like.textContent = card.likes.length
      })
  }
}

/* ЭКСПОРТ МОДУЛЕЙ */
export {
  checkLike,
  createCard,
  deleteCard
};
