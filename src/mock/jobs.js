import { devLogger } from '../utils';
import projects from './projects.json';
import jobDetail from './jobDetail.json';

function mock(data, { duration, state } = { duration: 400, state: '' }) {
  return (...args) => new Promise((res, rej) => {
    if (args.length > 0) devLogger(JSON.stringify(args));
    setTimeout(() => {
      switch(state) {
        case 'error':
          rej({ name: 'Oh no', message: 'Things has failed' });
          break;
        case 'empty':
          res([{}]);
          break;
        default:
          res(data);
      }
    }, duration)
  })
  .then(devLogger)
}

const getJobs = mock(projects);
const getJobDetail = mock(jobDetail);

export {
  getJobs,
  getJobDetail,
}