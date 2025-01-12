import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTachometerAlt,
  faChalkboardTeacher,
  faUsers,
  faRobot,
  faChartLine,
  faFileAlt,
} from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-bg">
      <div className="container-fluid">

        {/* Toggler for mobile */}
        <button  className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto d-flex align-items-center justify-content-center">
            {/* Firstbench Logo and Text */}
            <li className="nav-item mx-3 text-center">
              <a className="nav-link d-flex align-items-center" href="/">
              <img src="/assets/logo.jpg" alt="logo" />
                 <span className='fs-4 text-white'> Firstbench</span>
              </a>
            </li>
            <li className="nav-item mx-3 text-center">
              <a className="nav-link" href="/">
                <FontAwesomeIcon icon={faTachometerAlt} className="me-2" />
                Dashboard
              </a>
            </li>
            <li className="nav-item mx-3 text-center">
              <a className="nav-link" href="/">
                <FontAwesomeIcon icon={faChalkboardTeacher} className="me-2" />
                FirstGuru
              </a>
            </li>
            <li className="nav-item mx-3 text-center">
              <a className="nav-link" href="/">
                <FontAwesomeIcon icon={faUsers} className="me-2" />
                TownHall
              </a>
            </li>
            <li className="nav-item mx-3 text-center">
              <a className="nav-link" href="/">
                <FontAwesomeIcon icon={faRobot} className="me-2" />
                AI Evaluation
              </a>
            </li>
            <li className="nav-item mx-3 text-center">
              <a className="nav-link" href="/">
                <FontAwesomeIcon icon={faChartLine} className="me-2" />
                Performance
              </a>
            </li>
            <li className="nav-item mx-3 text-center">
              <a className="nav-link" href="/">
                <FontAwesomeIcon icon={faFileAlt} className="me-2" />
                Mock Test
              </a>
            </li>
            <li className="nav-item mx-3 text-center">
            <button className="btn btn-link text-white me-3">
              <i className="fas fa-bell"></i>
            </button>
            </li>

            <li className="nav-item mx-3 text-center">
              <button className='profile-btn dropdown-toggle d-flex align-items-center'> 
                <button className='p-btn fw-big'>P</button> <span className='ms-2'>Profile</span>
                </button>
            </li>
      
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
