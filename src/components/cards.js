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
  numberLike.textContent = Object.keys(cardData.likes).length
  if (userData._id === cardData.owner._id) {
    deleteButton.classList.add('card__delete-button-visible')
    deleteButton.addEventListener("click", () => {
      deleteCard(card);
    });
  };
  likeButton.addEventListener("click", checkLike);
  image.addEventListener("click", () => {
      openImgPopup(cardData.name, cardData.link)
  });
  return card;
}

/*Функция удаления карточки*/
function deleteCard(cardElement) {
  cardElement.remove();
}


/*Функция переключения лайка*/
function checkLike(evt) {
  evt.target.classList.toggle("card__like-button_is-active");
}

/* ЭКСПОРТ МОДУЛЕЙ */
export {
  deleteCard,
  checkLike,
  createCard
};
