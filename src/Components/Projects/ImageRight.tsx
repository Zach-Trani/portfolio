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
                <p>Leveraging React's hook system, Markdown Editor lets its users try out different markdown styles and see their creations live!</p>
                <ul>
                <li>Link</li>
                <li>Code</li>
                <li>Share</li>
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