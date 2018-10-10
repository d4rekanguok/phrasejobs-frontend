import React from 'react';

import { getJobs } from '../../services/jobs';

const Dashboard = () => (
  <div>
    <h1>Dashboard</h1>
    <hr />
    <button
      onClick={() => getJobs()}
    >Fetch Job</button>
  </div>
)

export { Dashboard };