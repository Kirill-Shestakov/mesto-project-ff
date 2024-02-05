const config = {
  baseUrl: 'https://nomoreparties.co/v1/cohort-42',
  headers: {
    authorization: 'c56e30dc-2883-4270-a59e-b2f7bae969c6',
    'Content-Type': 'application/json'
  }
}

function initializationUser () {
    return fetch ('https://nomoreparties.co/v1/wff-cohort-5/users/me', {
        headers: {
            authorization: 'c10d6346-ec50-40e0-a3b8-508ae8ac458d'
        }
    })
    .then(res => res.json())
};

function initializationCards(/*ElementDom, createCard, deleteCard, checkLike, openImgPopup*/) {
    return fetch ('https://nomoreparties.co/v1/wff-cohort-5/cards', {
        headers: {
            authorization: 'c10d6346-ec50-40e0-a3b8-508ae8ac458d'
        }
    })
    .then(res => res.json())
}


function editProfile (name, description) {
    fetch('https://nomoreparties.co/v1/wff-cohort-5/users/me', {
        method: 'PATCH',
        headers: {
          authorization: 'c10d6346-ec50-40e0-a3b8-508ae8ac458d',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name.value,
          about: description.value
        })
      }); 
};

function addCard(img, link) {
    fetch('https://nomoreparties.co/v1/wff-cohort-5/cards', {
        method: 'POST',
        headers: {
          authorization: 'c10d6346-ec50-40e0-a3b8-508ae8ac458d',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: img.value,
          link: link.value
        })
    }); 
};

function removeCard (cardId) {
    fetch(`https://nomoreparties.co/v1/wff-cohort-5/cards/${cardId}`, {
        method: 'DELETE',
        headers: {
          authorization: 'c10d6346-ec50-40e0-a3b8-508ae8ac458d',
          'Content-Type': 'application/json'
        }
    }); 
}

function getLike(cardId) {
  return fetch(`https://nomoreparties.co/v1/wff-cohort-5/cards/likes/${cardId}`, {
    method: 'PUT',
    headers: {
      authorization: 'c10d6346-ec50-40e0-a3b8-508ae8ac458d',
      'Content-Type': 'application/json'
    }
  })
  .then(res => res.json())
}

function deleteLike(CardId) {
  return fetch(`https://nomoreparties.co/v1/wff-cohort-5/cards/likes/${CardId}`, {
    method: 'DELETE',
    headers: {
      authorization: 'c10d6346-ec50-40e0-a3b8-508ae8ac458d',
      'Content-Type': 'application/json'
    }
  })
  .then(res => res.json())
}


export {initializationUser, initializationCards, editProfile, addCard, removeCard, getLike, deleteLike}