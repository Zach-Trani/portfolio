import './Navbar.css';

// Navbar component renders the logo and shortcut links at the top of the page.
export const Navbar = () => {
  return (
    <div>
      <div className="d-flex flex-row justify-content-between nav-menu">
        <div className=""><img src='./images/logo.png'/></div>
        <div className="d-flex flex-row d-grid gap-5">
          <div className="anchor-tags">
            <ul className='d-flex flex-row d-grid gap-5'>
                <li>About</li>
                <li>Experience</li>
                <li>Work</li>
                <li>Contact</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
