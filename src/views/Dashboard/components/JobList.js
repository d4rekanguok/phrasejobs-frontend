import React from 'react';
import slugg from 'slugg';

import { withData } from '../../../utils';
// import { getJobs, getJobDetail } from '../../../services/jobs';
import { getJobs, getJobDetail } from '../../../mock/jobs';
import { DueDate } from './DueDate';

const JobDetailView = ({ data, pname }) => {
  const { briefing, keys } = data;
  return (
    <div>
      <p>{ briefing }</p>
      <p>{`${keys.length} keys`}</p>
      <a href={`https://phraseapp.com/accounts/memrise/projects/${slugg(pname)}/editor?job_id=${data.id}&target_locale_id=${data.locales[0].id}`}>Start job</a>
    </div>
  ) 
};

const JobDetail = withData(
  ({ projectId, jobId }) => getJobDetail({ projectId, jobId }),
)(JobDetailView);

const Job = ({ pname, job: {name, due_date, id}, children }) => (
  <li>
    <h4>{name}</h4>
    <DueDate time={due_date} />
    
    <a href={`https://phraseapp.com/accounts/memrise/projects/${slugg(pname)}/jobs/${id}`}>Go to job</a>
    <div>{ children }</div>
  </li>
)

const Project = ({ project, children }) => (
  <li>
    <div>
      <h3>{project.name}</h3>
    </div>
    <ul>  
      {children}
    </ul>
  </li>
)

const JobListView = ({ data, getData } = { 
  data: [], 
  getData: () => Promise.resolve({}) 
}) => (
  <div>
    <h2>Current Jobs</h2>
    <button onClick={() => getData()}>
      Refresh
    </button>
    <ul>
      {data.map(({ project, jobs }) => 
        <Project key={project.id} project={project} jobs={jobs}>
          {jobs.map( j => 
            <Job key={j.id} job={j} pname={project.name}>
              <JobDetail pname={project.name} projectId={project.id} jobId={j.id} />
            </Job>)}
        </Project>
      )}
    </ul>
  </div>
)

const JobList = withData(getJobs)(JobListView);

export {
  JobList,
}