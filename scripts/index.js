// @todo: Темплейт карточки

const templateCard = document.querySelector("#card-template").content;

// @todo: DOM узлы

const placesList = document.querySelector(".places__list");

// @todo: Функция создания карточки

function createCard(name, link, callbackFunction) {
  const card = templateCard.querySelector(".card").cloneNode(true);
  card.querySelector(".card__title").textContent = name;
  card.querySelector(".card__image").setAttribute("src", link);
  const deleteButton = card.querySelector(".card__delete-button");
  deleteButton.addEventListener("click", callbackFunction);
  return card;
}

// @todo: Функция удаления карточки

function deleteCard(evt) {
  const actionDeleteCard = evt.target.closest(".card");
  actionDeleteCard.remove();
}

// @todo: Вывести карточки на страницу

initialCards.forEach(function (item) {
  placesList.append(createCard(item.name, item.link, deleteCard));
});
