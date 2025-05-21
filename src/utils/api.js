export const baseUrl = 'http://localhost:3001';
const headers = { "Content-Type": "application/json" };

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error ${res.status}`);
}

function getUserData() {
  return fetch(`${baseUrl}/users/me`, {
    method: "GET",
    headers
  }).then(checkResponse)
}

function getItems() {
  return fetch(`${baseUrl}/items`, {
    method: "GET",
    headers
  }).then(checkResponse)
}

function addCard(card) {
  return fetch( `${baseUrl}/items`, {
    method: "POST",
    headers,
    body: JSON.stringify(card)
  }).then(checkResponse)
}

function  deleteCard(itemId) {
  return fetch(`${baseUrl}/items/${itemId}`, {
    method: "DELETE",
    headers
  }).then(checkResponse)
}

function addCardLike (id, token) {
  return fetch(`${baseUrl}/items/${id}/likes`, {
    method: "PUT",
    headers: {
      authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
}

function removeCardLike (id, token) {
  return fetch(`${baseUrl}/items/${id}/likes`, {
    method: "DELETE",
    headers: {
      authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
}

function updateUserInfo(user) {
  return fetch(`${baseUrl}/users/me`, {
    method: "PATCH",
    headers,
    body: JSON.stringify(user)
  }).then(checkResponse)
}

export { getItems, addCard, deleteCard, checkResponse, addCardLike, removeCardLike, updateUserInfo, getUserData };