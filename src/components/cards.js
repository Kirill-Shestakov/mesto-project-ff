/* ФУНКЦИИ */
/*Функция создания карточки*/
function createCard(name, link, deleteCard, checkLike, openImgPopup) {
  const templateCard = document.querySelector("#card-template").content;
  const card = templateCard.querySelector(".card").cloneNode(true);
  const deleteButton = card.querySelector(".card__delete-button");
  const likeButton = card.querySelector(".card__like-button");
  const image = card.querySelector(".card__image");
  card.querySelector(".card__title").textContent = name;
  image.setAttribute("src", link);
  image.setAttribute("alt", name);
  deleteButton.addEventListener("click", deleteCard);
  likeButton.addEventListener("click", checkLike);
  image.addEventListener("click", () => {
      openImgPopup(name, link)
  });
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

/* ЭКСПОРТ МОДУЛЕЙ */
export {
  deleteCard,
  checkLike,
  createCard
};
