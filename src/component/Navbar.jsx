import { Link} from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light custom-navbar">
        <div className="container-fluid">
          <button 
            className="navbar-toggler shadow-none" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarTogglerDemo03" 
            aria-controls="navbarTogglerDemo03" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link className="navbar-brand fw-bold" to="/">Movies</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center gap-3"> 
              <li className="nav-item dropdown order-2 order-lg-1">
  <button
    className="btn dropdownBtn dropdown-toggle fw-bold shadow-none"
    type="button"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    EN
  </button>

  <ul className="dropdown-menu mt-2">
    <li>
      <button
        className="dropdown-item languageDisabled"
        title="Coming Soon"
      >
        EN
      </button>
    </li>

    <li>
      <button
        className="dropdown-item languageDisabled"
        title="Coming Soon"
      >
        AR
      </button>
    </li>
  </ul>
</li>
              <li className="nav-item order-1 order-lg-2">
                <Link className="nav-link fw-bold d-flex align-items-center gap-1" to="/wishlist">
                  <i className="fa fa-heart" aria-hidden="true"></i> Wishlist
                </Link>
              </li>
              
            </ul>  
          </div>
        </div>
      </nav>
    </div>
  );
}