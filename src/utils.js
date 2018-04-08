export function loginUser(userData) {
  let BASE_URL = 'http://localhost:3001/api/login/';

  return new Promise((resolve, reject) => {
    fetch(BASE_URL, {
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