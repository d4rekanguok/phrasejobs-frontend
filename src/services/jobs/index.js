import { devLogger } from '../../utils';
import { fetchWithToken } from '../auth/';

function getJobs () {
  return fetchWithToken(`jobs`)
  .then(res => res.json())
  .then(devLogger)
  .catch(console.error);
};

function getJobDetail ({ projectId='', jobId='' }) {
  if (projectId.length === 0 || jobId.length === 0){
    throw `Error: expect projectId & jobId to be not empty`
  };
  return fetchWithToken(`jobs/${projectId}/${jobId}`)
    .then(res => res.json())
    .then(devLogger)
    .catch(console.error);
}

export {
  getJobs,
  getJobDetail,
}