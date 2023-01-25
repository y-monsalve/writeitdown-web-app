function PostView() {
  return (
    <div className="post-view">
      <h2>Here are your posts:</h2>
      {/* <div className="project-grid">
        {projects.map((project, index) => (
          <div
            className="project-img-container"
            onClick={() => handleSelect(project)}
            key={index}
          >
            <img alt={project.title} src={project.url} />
          </div>
        ))}
      </div> */}
      {/* something like this for the post list/grid */}

      <h2>No posts yet in LIST NAME</h2>
    </div>
  );
}

export default PostView;
