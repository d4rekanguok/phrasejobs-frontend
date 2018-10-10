import { devLogger } from '../../utils';
import { fetchWithToken } from '../auth/';

function getJobs () {
  return fetchWithToken(`${process.env.API_URL}/jobs`)
  .then(res => res.json())
  .then(devLogger)
  .catch(console.error);
};

export {
  getJobs,
}