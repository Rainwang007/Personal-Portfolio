import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Projects() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    axios.get('https://api.github.com/users/rainwang007/repos')
      .then(response => {
        setRepos(response.data);
      })
      .catch(error => {
        console.error('Error fetching repos', error);
      });
  }, []);

  return (
    <div>
      <h1>My Projects</h1>
      {repos.map(repo => (
        <div key={repo.id}>
          <h2>{repo.name}</h2>
          <p>{repo.description}</p>
          <a href={repo.html_url}>Repo link</a>
        </div>
      ))}
    </div>
  );
}

export default Projects;
