export const baseUrl = 'http://localhost:3001';
const headers = () => ({
  "Authorization": `Bearer ${localStorage.getItem('jwt')}`,
  "Content-Type": "application/json"
});

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error ${res.status}`);
}

function addItem(name, imageUrl, weather) {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify({ name, imageUrl, weather })
  }).then(checkResponse)
}

function getItems() {
  return fetch(`${baseUrl}/items`, {
    method: "GET",
    headers: headers(),
  }).then(checkResponse)
}

function addCard(card) {
  return fetch( `${baseUrl}/items`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify(card)
  }).then(checkResponse)
}

function  deleteCard(itemId) {
  return fetch(`${baseUrl}/items/${itemId}`, {
    method: "DELETE",
    headers: headers(),
  }).then(checkResponse)
}


function cardLike (cardId) {
  return fetch(`${baseUrl}/items/${cardId}/likes`, {
    method: isLiked ? "DELETE" : "PUT",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then(checkResponse)
}

function getUserData() {
  const token = localStorage.getItem("jwt");
  return fetch(`${baseUrl}/users/me`, {
    method: "GET",
    headers: headers(),
  }).then(checkResponse)
}

function updateUserInfo(user) {
  return fetch(`${baseUrl}/users/me`, {
    method: "PATCH",
    headers: headers(),
    body: JSON.stringify(user)
  }).then(checkResponse)
}

export { getItems, addItem, addCard, deleteCard, checkResponse, cardLike, updateUserInfo, getUserData };