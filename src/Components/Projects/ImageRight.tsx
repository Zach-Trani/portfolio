import "./styles/style.css"

// Image right component displays a preview of the markdown editor project.
export const ImageRight = () => {
  
    return (
        <div className="project-container">
        <div className="project">
          <div className="project-content">
            <div className="project-label">GitHub's Markdown Text</div>
            <h4 className="project-title">Markdown Editor</h4>
            <div className="project-details">
                <p>Markdown Editor allows users to experiment with various markdown styles in real-time, providing a live preview of their creative compositions.</p>
                <ul>
                <li><a href="https://markdown-editor-zach-trani.vercel.app/">View Project</a></li>
                <li><a href="https://github.com/Zach-Trani/markdown-editor">Github</a></li>
              </ul>
            </div>
          </div>
          <div className="project-img">
            <img src='./images/markdown-screenshot.png' alt="Markdown Project Screen Shot" />
          </div>
        </div>
      </div>
    )
};