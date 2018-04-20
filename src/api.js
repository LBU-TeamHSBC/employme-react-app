import config from "./config";

function apiRequest(url, method, token, body) {
  const headers = { 'Content-Type': 'application/json' };
  const options = { headers, method };
  if (token) { options.headers['X-JWT-Auth'] = token; }
  if (body) { options['body'] = JSON.stringify(body); }
  return new Promise((resolve, reject) => {
    fetch(url, options)
    .then(res => {
      // console.log(res.headers.get('X-JWT-Token'));
      return res.json();
    })
    .then(json => {
      if (json.hasOwnProperty('error')) {
        reject(json.error);
      } else {
        resolve(json);
      }
    })
    .catch(error => { reject(error); });
  });
}

export function loginUser(userData) {
  return new Promise((resolve, reject) => {
    fetch(config.apiUrl.login, {
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
      body: JSON.stringify(userData)
    })
    .then(res => res.json())
    .then(json => { resolve(json); })
    .catch(error => { reject(error); });
  });
}

export function getVendorList(token) {
  return apiRequest(config.apiUrl.vendors, 'GET', token);
}

export function createLink(token, vid, oauth) {
  const body = { vid, oauth };
  return apiRequest(config.apiUrl.accountLink, 'POST', token, body);
}