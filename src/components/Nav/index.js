import React from 'react';
import Logo from '../../assets/images/NY.png';

function Nav () {

    return (
        <header className="flex-row px-1">
            <nav className="navbar fixed-bottom navbar-expand-lg navbar-light bg-light">
                

                <div className="container-fluid">


                    <ul className="navbar-nav align-items-center">
                        <li className="nav-item">
                            <div className="navbar-brand px-2">
                                <a className="nav-link" href="/">
                                    <img src={Logo}  height="100" width="100" alt="ny-logo" />
                                    <span>Nicolas Young</span>
                                </a>
                            </div>
                        </li>


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