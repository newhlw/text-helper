function Header() {
  return (
    <nav className="navbar navbar-expand-lg mb-5">
      <div className="container-fluid d-flex align-items-center">
        {/* Navbar Brand */}
        <a className="navbar-brand" href="#">
          Navbar
        </a>

        {/* Navbar Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Content */}
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarSupportedContent"
        >
          {/* Left-aligned Nav Items */}
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">
                Disabled
              </a>
            </li>
          </ul>

          {/* Centered Image */}
          <div className="position-absolute start-50 translate-middle-x d-md-block d-lg-block d-none ">
            <img
              src="robotic.gif"
              alt="Logo"
              style={{ maxWidth: "50px", maxHeight: "50px" }}
              className="rounded"
            />
          </div>

          {/* Right-aligned Buttons */}
          <div className="d-flex align-items-center">
            <button type="button" className="btn btn-primary me-2">
              Primary
            </button>
            <button type="button" className="btn btn-secondary">
              Secondary
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
