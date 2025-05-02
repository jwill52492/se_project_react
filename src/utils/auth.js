import { baseUrl } from "./api";

const signup = (email, password, name, avatarUrl) => {
  return fetch(`${baseUrl}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
      name,
      avatarUrl,
    }),
  }).then((res) => {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
  });
}

const signin = (email, password) => {
  return fetch(`${baseUrl}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  }).then((res) => {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
  }).then((data) => {
    if (data.token) {
      localStorage.setItem("jwt", data.token);
      return data;
    }
  });
}

// useEffect(() => {
//   const token = localStorage.getItem("jwt");
//   if (token) {
//     fetch(`${baseUrl}/users/me`, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//     })
//     .then((res) => {
//       return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
//     })
//     .then((data) => {
//       console.log(data);
//     })
//     .catch(console.error);
//   }
// }
// , [token]);

export { signup, signin};