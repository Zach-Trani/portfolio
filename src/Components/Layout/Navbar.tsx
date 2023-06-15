import './Navbar.css';

export const Navbar = () => {
  return (
    <div>
      <div className="d-flex flex-row justify-content-between nav-menu">
        <div className=""><h1>Z</h1></div>
        <div className="d-flex flex-row d-grid gap-5">
          <div className="">
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
