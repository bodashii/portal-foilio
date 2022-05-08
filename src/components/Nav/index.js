import React from 'react';

function Nav () {

    return (
        <header className="flex-row px-1">
            <nav className="navbar fixed-bottom navbar-expand-lg navbar-light bg-light">
                <span className="navbar-brand px-2">
                    <span className="nav-item" aria-label="web dev" role="img">💻 <span>Nicolas Young</span>
                        
                    </span>
                </span>

                <div className="container-fluid">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#projects">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contact</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="resume">Resume</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Nav;