import { devLogger } from '../utils';
import data from './data.json';

function getJobs () {
  return new Promise(res => setTimeout(() => res(data), 400))
    .then(devLogger);
};

export {
  getJobs,
}