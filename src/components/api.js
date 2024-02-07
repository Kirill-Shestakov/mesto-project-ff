const apiConfig = {
  baseUrl: "https://nomoreparties.co/v1/wff-cohort-5",
  headers: {
    authorization: "c10d6346-ec50-40e0-a3b8-508ae8ac458d",
    "Content-Type": "application/json",
  },
};

function initializationUser() {
  return fetch(`${apiConfig.baseUrl}/users/me`, {
    headers: apiConfig.headers,
  })
  .then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  });
}

function initializationCards() {
  return fetch(`${apiConfig.baseUrl}/cards`, {
    headers: apiConfig.headers,
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  });
}

function editProfile(name, description) {
  return fetch(`${apiConfig.baseUrl}/users/me`, {
    method: "PATCH",
    headers: apiConfig.headers,
    body: JSON.stringify({
      name: name.value,
      about: description.value,
    }),
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  });
}

function addCard(img, link) {
  return fetch(`${apiConfig.baseUrl}/cards`, {
    method: "POST",
    headers: apiConfig.headers,
    body: JSON.stringify({
      name: img.value,
      link: link.value,
    }),
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  });
}

function removeCard(cardId) {
  fetch(`${apiConfig.baseUrl}/cards/${cardId}`, {
    method: "DELETE",
    headers: apiConfig.headers,
  });
}

function getLike(cardId) {
  return fetch(`${apiConfig.baseUrl}/cards/likes/${cardId}`, {
    method: "PUT",
    headers: apiConfig.headers,
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  });
}

function deleteLike(CardId) {
  return fetch(`${apiConfig.baseUrl}/cards/likes/${CardId}`, {
    method: "DELETE",
    headers: apiConfig.headers,
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  });
}

function updateAvatar(link) {
  return fetch(`${apiConfig.baseUrl}/users/me/avatar`, {
    method: "PATCH",
    headers: apiConfig.headers,
    body: JSON.stringify({
      avatar: link.value,
    }),
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  });
}

export {
  initializationUser,
  initializationCards,
  editProfile,
  addCard,
  removeCard,
  getLike,
  deleteLike,
  updateAvatar,
};
