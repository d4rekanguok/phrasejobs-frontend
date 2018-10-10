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
  .then(data => localStorage.setItem('token', data['hashed_token']))
  .catch(console.error);
};

// keeping things simple: our backend doesn't
// set a expiration date for token, so we
// don't need to check if token is valid.
function isAuthorized () {
  return !!localStorage.getItem('token');
}

export {
  signIn,
  isAuthorized,
}