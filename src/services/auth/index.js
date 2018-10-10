import { isObjectEmpty } from '../../utils';

function signIn (username, password) {
  const options = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username, password
    }),
  };

  return fetch(`${process.env.API_URL}/authorize`, options)
  .then(res => res.json())
  .then(data => {
    console.log(data);
    return data
  })
  .then(data => localStorage.setItem('token', data['token']))
  .catch(console.error);
};

// keeping things simple: our backend doesn't
// set a expiration date for token, so we
// don't need to check if token is valid.
function isAuthorized () {
  return !!localStorage.getItem('token');
}

function fetchWithToken(url, options={}) {
  const token = localStorage.getItem('token');
  if (!token) throw `No token found - Please try signing in again.`;
  if (
    !options.hasOwnProperty('headers') || 
    !options.headers.hasOwnProperty('Authorization')
  ) options.headers = { 'Authorization': `token ${token}` };

  return fetch(url, options);
}

export {
  signIn,
  isAuthorized,
  fetchWithToken,
}