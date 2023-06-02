import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Project.css';

function Projects() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    axios.get('https://api.github.com/users/rainwang007/repos')
      .then(response => {
        const repos = response.data;

        // For each repo, get the README.md content
        const fetchReadmes = repos.map(repo => 
          axios.get(`https://api.github.com/repos/rainwang007/${repo.name}/readme`)
            .then(response => {
              const readmeContent = atob(response.data.content);  // Decode the base64 content
              const liveSiteLink = readmeContent.match(/\[Live Site\]\((.*?)\)/)[1];  // Extract the live site link
              return {...repo, liveSiteLink};
            })
            .catch(error => {
              console.error('Error fetching readme', error);
              return repo;  // If there is an error (e.g. no README), return the repo without the liveSiteLink
            })
        );

        // When all READMEs have been fetched and processed, update the state
        Promise.all(fetchReadmes)
          .then(reposWithReadmes => {
            setRepos(reposWithReadmes);
          })
          .catch(error => {
            console.error('Error processing readmes', error);
          });
      })
      .catch(error => {
        console.error('Error fetching repos', error);
      });
  }, []);

  return (
    <div className="content projects-section">
      <h1>My Projects</h1>
      {repos.map(repo => (
      <div key={repo.id} className="project">
      <h2>{repo.name}</h2>
      <p>{repo.description}</p>
      <a href={repo.html_url}>Repo link</a>
      {repo.liveSiteLink && <a href={repo.liveSiteLink}>Live site link</a>}
    </div>
    
      ))}
    </div>
  );
}

export default Projects;
