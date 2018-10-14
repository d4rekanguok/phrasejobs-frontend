import React from 'react';
import slugg from 'slugg';
// import { getJobs } from '../../services/jobs';
import { getJobs } from '../../../mock/jobs';
import { DueDate } from './DueDate';

const Job = ({ pname, job: {name, due_date, id} }) => (
  <li>
    <h4>{name}</h4>
    <DueDate time={due_date} />
    <a href={`https://phraseapp.com/accounts/memrise/projects/${slugg(pname)}/jobs/${id}`}>Go to job</a>
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

class JobList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { projects: [] };
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    getJobs()
      .then(projects => this.setState({ projects }));
  }

  render() {
    const projects = this.state.projects;
    return (
      <div>
        <h2>Current Jobs</h2>
        <button onClick={() => this.getData()}>
          Refresh
        </button>
        <ul>
          {projects.map( ({ project, jobs }) => 
            <Project key={project.id} project={project} jobs={jobs}>
              {jobs.map( j => 
                <Job key={j.id} job={j} pname={project.name} />)}
            </Project>
          )}
        </ul>
      </div>
    )
  }
}

export {
  JobList,
}