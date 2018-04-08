export function postData(userData) {
  let BASE_URL = 'http://localhost:3080/login/';

  return new Promise((resolve, reject) => {
    fetch(BASE_URL, {
      method: 'POST',
      body: JSON.stringify(userData)
    })
    .then((res) => res.json())
    .then((res) => { resolve(res); })
    .catch((error) => { reject(error); });
  });
}