import config from "./config";

export function loginUser(userData) {
  return new Promise((resolve, reject) => {
    fetch(config.apiUrl.login, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(userData)
    })
    .then((res) => res.json())
    .then((res) => { resolve(res); })
    .catch((error) => { reject(error); });
  });
}