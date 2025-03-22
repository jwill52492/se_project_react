const baseUrl = 'http://localhost:3001';
const headers = { "Content-Type": "application/json" };


function getItems() {
  return fetch(`${baseUrl}/items`).then((res) => {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`)
  });
}

function getCards() {
  return fetch( `${baseUrl}/items`, {
    method: "POST",
    headers: this._headers,
  }).then((res) => {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`)
  });
}

function  deleteCard() {
  return fetch(`${baseUrl}/items/$`, {
    method: "DELETE",
    headers: this._headers,
  }).then((res) => {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`)
  });
}

export { getItems, getCards, deleteCard };