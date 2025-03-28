const baseUrl = 'http://localhost:3001';
const headers = { "Content-Type": "application/json" };


function getItems() {
  return fetch(`${baseUrl}/items`).then((res) => {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`)
  });
}

function addCard() {
  return fetch( `${baseUrl}/items`, {
    method: "POST",
    headers,
    body: JSON.stringify(card)
  }).then((res) => {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`)
  });
}

function  deleteCards() {
  return fetch(`${baseUrl}/items/${itemId}`, {
    method: "DELETE",
    headers,
  }).then((res) => {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`)
  });
}

export { getItems, addCard, deleteCards };