import React from 'react'

const Navbar = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark d-flex justify-content-center">
          <a className="navbar-brand d-none" href="/">Firstbench</a>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto">
            <li className="nav-item">
                <a className="nav-link" href="/">Firstbench</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Dashboard</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">FirstGuru</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">TownHall</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">AI Evaluation</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Performance</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Mock Test</a>
              </li>
            </ul>
          </div>
        </nav>
    </>
  )
}

export default Navbar
