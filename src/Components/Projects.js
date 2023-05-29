// You can create a separate Project component and import it here
// Then map through your projects array and render a Project component for each one

function Projects() {
  const projects = [
    {
      name: "Project 1",
      description: "This is my first project",
      // other project details
    },
    {
      name: "Project 2",
      description: "This is my second project",
      // other project details
    },
    // add as many projects as you want
  ];

  return (
    <div>
      <h1>My Projects</h1>
      {projects.map((project) => (
        <div key={project.name}>
          <h2>{project.name}</h2>
          <p>{project.description}</p>
          {/* Include other project details here */}
        </div>
      ))}
    </div>
  );
}

export default Projects;
