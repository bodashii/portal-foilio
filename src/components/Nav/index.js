import React from 'react';

function Nav () {

    return (
        <header>
            <h2>Web Dev Extraordinaire!</h2>
            <nav>
                <ul>
                    <li>
                        <a href="about">About</a>
                    </li>
                    <li>
                        <a href="projects">Projects</a>
                    </li>
                    <li>
                        <a href="contact">Contact</a>
                    </li>
                    <li>
                        <a href="resume">Resume</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav;