import './Navbar.scss';
import React, { useState, useEffect } from 'react';
import logo from '../../assets/logo-tranparent.png';
import { useLocation } from 'react-router-dom';

function Navbar() {

    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const togglerHandler = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        // Close the navbar whenever the location changes
        setIsOpen(false);
    }, [location]);

    return( 
        <>   
            <nav className="navbar"> 
                <div>
                    <a className = "navbar-logo" href="/scouting-website/">
                        <img src={logo} ></img>
                    </a> 
                </div>
                <div className="navbar-items">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className ="nav-link" href="#/lidmaatschap">Lid worden</a>
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
                    <a href='#/infographic'> <li>Infographic ASG</li> </a>
                    <a href='#/naam'> <li>Naam ASG</li> </a>
                    <li>Geschiedenis ASG</li>
                    <a href='#/speltakken'> <li>Speltakken</li> </a>
                    <a href='#/uniform'> <li>Uniform</li> </a>
                    <a href='#/lidmaatschap'> <li>Lidmaatschap</li> </a>
                    <a href='#/groepsbestuur'><li>Groepsbestuur</li> </a>
                    <li>Groepsdag</li>
                </ul>
                <ul>
                    <p>Scouting</p>
                    <a href='#/ontdekscouting'> <li>Ontdek Scouting</li> </a>
                    <a href='#/scoutingnederland'> <li>Scouting Nederland</li> </a>
                </ul>

                <ul> 
                    <p>Gebouw</p>
                    <a href='#/gebouwinformatie'><li>Informatie</li></a>
                    <a href='#/ligging'><li>Ligging</li></a>
                    <a href='#/openbaarvervoer'><li>Openbaar vervoer</li></a>
                    <a href='#/omgeving'><li>Omgeving</li></a>
                    <a href='#/stichting'><li>Stichting</li></a>
                    <a href='#/sponsoren'><li>Sponsoren</li></a>
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