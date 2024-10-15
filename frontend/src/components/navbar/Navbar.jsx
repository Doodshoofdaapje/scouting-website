import './Navbar.scss';
import React, { useState, useEffect } from 'react';
import logo from '../../assets/logo-sharp-transparent.png';
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
        <div className='navbar-container'>   
            <nav className="navbar"> 
                <div className='navbar-logo-container'>
                    <a className = "navbar-logo" href="/">
                        <img src={logo} ></img>
                    </a> 
                </div>
                <div className="navbar-items">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className ="nav-link" href="#/lidmaatschap">Lid worden</a>
                        </li>
                        <li className="nav-item">
                            <a className ="nav-link" href="#/nieuws">Nieuws</a>
                        </li>
                        <li className="nav-item">
                            <a className ="nav-link" href="#/verhuur">Verhuur</a>
                        </li>
                        <li className="nav-item">
                            <a className ="nav-link" href="#/contact">Contact</a>
                        </li>
                    </ul>
                </div>
                <div className={`navbar-toggler ${isOpen ? 'open' : ''}`}  onClick={togglerHandler}>
                    <div className="navbar-toggler-bar1"></div>
                    <div className="navbar-toggler-bar2"></div>
                    <div className="navbar-toggler-bar3"></div>
                </div>
            </nav>
            
            <div className={`grid-content collapse-content ${isOpen ? 'open' : ''}`}>
                    <ul> 
                        <p>Groep</p>
                        <a href='#/infographic'> <li>Infographic ASG</li> </a>
                        <a href='#/naam'> <li>Naam ASG</li> </a>
                        <a href='#/geschiedenis'><li>Geschiedenis ASG</li></a>
                        <a href='#/speltakken'> <li>Speltakken</li> </a>
                        <a href='#/uniform'> <li>Uniform</li> </a>
                        <a href='#/lidmaatschap'> <li>Lidmaatschap</li> </a>
                        <a href='#/groepsbestuur'><li>Groepsbestuur</li> </a>
                        <a href='#/groepsdag'><li>Groepsdag</li></a>
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
                        <p>Beunploeg</p>
                        <a href="#/beunploeg"><li>Informatie</li></a>
                        <a href="#/onderhoud"><li>Onderhoud</li></a>
                        <a href="#/groen"><li>Groen</li></a>
                        <a href="#/historie"><li>Historie</li></a>
                        <a href="#/beunkenmerk"><li>Beunkeurmerk</li></a>
                        <a href="#/mollenteller"><li>Mollenteller</li></a>
                    </ul>
                    <ul> 
                        <p>Overig</p>
                        <a href="#/verhuur"><li>Verhuur</li></a>
                        <a href="#/nieuws"><li>Nieuws</li></a>
                        <a href="#/contact"><li>Contact</li></a>
                        <a href="#/privacy"><li>Privacy</li></a>
                        <a href="#/veiligheid"><li>Veiligheid</li></a>
                    </ul>
                </div>
        </div>
    );
}

export default Navbar