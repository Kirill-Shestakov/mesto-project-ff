
function initializationUser (name, description) {
    fetch ('https://nomoreparties.co/v1/wff-cohort-5/users/me', {
        headers: {
            authorization: 'c10d6346-ec50-40e0-a3b8-508ae8ac458d'
        }
    })
    .then(res => res.json())
    .then((result) => {
      name.textContent = result.name;
      description.textContent = result.about;
    })
};


function initializationCards(ElementDom, createCard, deleteCard, checkLike, openImgPopup) {
    fetch ('https://nomoreparties.co/v1/wff-cohort-5/cards', {
        headers: {
            authorization: 'c10d6346-ec50-40e0-a3b8-508ae8ac458d'
        }
    })
    .then(res => res.json())
    .then((result) => {
      result.forEach(function (cardData) {
        ElementDom.append(
          createCard(cardData, deleteCard, checkLike, openImgPopup),
        );
      });
    })
}

const promise = [initializationUser, initializationCards]

Promise.all(promise)
    .then((result) => {
        console.log(result)
    });

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

function deleteCard () {
    fetch('https://nomoreparties.co/v1/wff-cohort-5/cards', {
        method: 'DELETE',
        headers: {
          authorization: 'c10d6346-ec50-40e0-a3b8-508ae8ac458d',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: img.value,
          link: link.value
        })
    }); 
}


export {initializationUser, initializationCards, editProfile, addCard}