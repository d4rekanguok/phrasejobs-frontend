import { devLogger } from '../../utils';

function getJobs (username, password) {
  return fetch(`${process.env.API_URL}/jobs`)
  .then(res => res.json())
  .then(devLogger)
  .then(data => localStorage.setItem('token', data['hashed_token']))
  .catch(console.error);
};