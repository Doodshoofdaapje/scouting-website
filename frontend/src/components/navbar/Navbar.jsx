import './Navbar.scss';
import React, { useState } from 'react';
import logo from '../../assets/logo-tranparent.png';

function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    const togglerHandler = () => {
        setIsOpen(!isOpen);
    };

    return( 
        <>   
            <nav className="navbar"> 
                <div>
                    <a className = "navbar-logo" href="#">
                        <img src={logo} ></img>
                    </a> 
                </div>
                <div className="navbar-items">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className ="nav-link" href="#">Lid worden</a>
                        </li>
                        <li className="nav-item">
                            <a className ="nav-link" href="#">Onze groep</a>
                        </li>
                        <li className="nav-item">
                            <a className ="nav-link" href="#">Verhuur</a>
                        </li>
                        <li className="nav-item">
                            <a className ="nav-link" href="#">Contact</a>
                        </li>
                    </ul>
                </div>
                <div className={`navbar-toggler ${isOpen ? 'open' : ''}`}  onClick={togglerHandler}>
                    <div className="navbar-toggler-bar1"></div>
                    <div className="navbar-toggler-bar2"></div>
                    <div className="navbar-toggler-bar3"></div>
                </div>
            </nav>
            <div className={`collapse-content ${isOpen ? 'open' : ''}`}>
                <ul> 
                    <p>Groep</p>
                    <li>Infographic ASG</li>
                    <li>Naam ASG</li>
                    <li>Geschiedenis ASG</li>
                    <li>Speltakken</li>
                    <li>Speltaknamen</li>
                    <li>Uniform</li>
                    <li>Lidmaatschap</li>
                    <li>Groepsbestuur</li>
                </ul>
                <ul>
                    <p>Scouting</p>
                    <li>Ontdek Scouting</li>
                    <li>Scouting Nederland</li>
                    <li>Regio de Baronie</li>
                </ul>

                <ul> 
                    <p>Gebouw</p>
                    <li>Informatie</li>
                    <li>Ligging</li>
                    <li>Openbaar vervoer</li>
                    <li>Omgeving</li>
                    <li>Geschiedenis</li>
                    <li>Sponsoren</li>
                </ul>

                <ul> 
                    <p>Verhuur</p>
                    <li>Reglement</li>
                    <li>Kosten</li>
                    <li>Beschikbaarheid</li>
                    <li>Aanvraag</li>
                </ul>

                <ul> 
                    <p>Beunploeg</p>
                    <li>Onderhoud</li>
                    <li>Groen</li>
                    <li>Historie</li>
                    <li>Beunkeurmerk</li>
                    <li>Mollenteller</li>
                    <li>Melden</li>
                    <li>Meedoen</li>
                </ul>
                <ul> 
                    <p>Overig</p>
                    <li>Nieuws</li>
                    <li>Agenda</li>
                    <li>Contact</li>
                    <li>Privacy</li>
                    <li>Veiligheid</li>
                    <li>Formulieren</li>
                </ul>
            </div>
        </>
    );
}

export default Navbar