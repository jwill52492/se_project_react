const baseUrl = 'http://localhost:3001';
const headers = { "Content-Type": "application/json" };

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error ${res.status}`);
}


function getItems() {
  return fetch(`${baseUrl}/items`).then(checkResponse)
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

export { getItems, addCard, deleteCard, checkResponse };