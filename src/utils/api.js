const baseUrl = 'http://localhost:3001';
const headers = this._headers;


function getItems() {
  return fetch(`$(baseUrl)/items`).then((res) => {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`)
  });
}

function getCards() {
  return fetch( `$(baseUrl)/items`, {
    method: "POST",
    headers: this._headers
  }).then(this._checkResponse);
}

function  deleteCard() {
  return fetch(`$(baseUrl)/items/_id`, {
    method: "DELETE",
    headers: this._headers,
  }).then(this._checkResponse);
}

export { getItems, getCards, deleteCard };