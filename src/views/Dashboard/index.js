import React from 'react';
import slugg from 'slugg';

// import { getJobs } from '../../services/jobs';
import { getJobs } from '../../mock/jobs';

const Job = ({ pname, job: {name, due_date, id} }) => (
  <li>
    <h4>{name}</h4>
    <p>{due_date}</p>
    <a href={`https://phraseapp.com/accounts/memrise/projects/${slugg(pname)}/jobs/${id}`}>Go to job</a>
  </li>
)

const Project = ({ project, jobs }) => (
  <li>
    <div>
      <h3>{project.name}</h3>
    </div>
    <ul>
      {jobs.map(j => <Job key={j.id} job={j} pname={project.name} />)}
    </ul>
  </li>
)

class JobList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { projects: [] };
  }

  componentDidMount() {
    getJobs()
      .then(projects => this.setState({ projects }));
  }

  render() {
    const projects = this.state.projects;
    return (
      <div>
        <h2>Current Jobs</h2>
        <button onClick={() => getJobs()}>
          Refresh
        </button>
        <ul>
          {projects.map(
            pj => 
            <Project 
              key={pj.project.id} 
              project={pj.project} 
              jobs={pj.jobs} />
          )}
        </ul>
      </div>
    )
  }
}

const Dashboard = () => (
  <div>
    <h1>Dashboard</h1>
    <hr />
    <JobList />
  </div>
)

export { Dashboard };