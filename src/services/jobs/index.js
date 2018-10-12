import { devLogger } from '../../utils';
import { fetchWithToken } from '../auth/';

function getJobs () {
  return fetchWithToken(`jobs`)
  .then(res => res.json())
  .then(devLogger)
  .catch(console.error);
};

function getJobLocales (projectId='', jobId='') {
  if (typeof projectId === 'string' || typeof jobId.length === 'string') {
    throw `Error: expect projectId & jobId to be not empty`
  };
  if (projectId.length === 0 || jobId.length === 0){
    throw `Error: expect projectId & jobId to be not empty`
  };
  return fetchWithToken(`jobs/`)
    .then(res => res.json())
    .then(devLogger)
    .catch(console.error);
}

export {
  getJobs,
  getJobLocales,
}