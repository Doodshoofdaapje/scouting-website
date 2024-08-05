import imgBevers from '../../assets/asg_speltakken/bevers.jpg';
import imgWelpen from '../../assets/asg_speltakken/welpen.jpg';
import imgScouts from '../../assets/asg_speltakken/scouts.jpg';
import imgRSA from '../../assets/asg_speltakken/rsa.jpg';
import imgPivos from '../../assets/asg_speltakken/pivos.jpg';
import imgSenioren from '../../assets/asg_speltakken/senioren.png';
import imgFlags from '../../assets/asg_speltakken/vlaggen.jpg';
import '../Page.scss';

function ASG_Speltakken() {

    return(
        <>
        <div className="container">
            
            <div className='page-header'>
                <div>
                    <p>
                        Een Scouting-groep bestaat gewoonlijk uit een spel-eenheid voor iedere  leeftijd.
                        Ze worden leeftijdsgroepen, speltakken of onderdelen genoemd. Elke leeftijdsgroep heeft zijn 
                        eigen unieke programma, afgestemd op de ontwikkelingsfase en interesses van de leden. 
                        Zo kunnen ze op een uitdagende en plezierige manier leren en groeien.
                    </p>
                    <img src={imgFlags}/>
                </div>
            </div>  
            
            <div className='content-header'>
                <h1>
                    Speltakken
                </h1>
            </div>

            <div className='page-content'>

            </div>

            <div className='image-gallery'>
                <a href='speltakken/bevers'>
                    <div>
                        <img src={imgBevers}/>
                        <hr/>
                        <h3>
                            Bevers 
                        </h3>
                        <p>
                            (5 t/m 7 jaar zaterdag 10.15-12.15)
                        </p>
                    </div>
                </a>
                <a href='speltakken/welpen'>
                    <div>
                        <img src={imgWelpen}/>
                        <hr/>
                        <h3>
                            Welpen
                        </h3>
                        <p>
                            (7 t/m 11 jaar zaterdag 10.15-12.15)
                        </p>
                    </div>
                </a>
                <a href='speltakken/scouts'>
                    <div>
                        <img src={imgScouts}/>
                        <hr/>
                        <h3>
                            Scouts
                        </h3>
                        <p>
                            (11 t/m 15 jaar vrijdag 19.15-21.15)
                        </p>
                    </div>
                </a>
                <a href='speltakken/rsa'>
                    <div>
                        <img src={imgRSA}/>
                        <hr/>
                        <h3>
                            Explorers (RSA)
                        </h3>
                        <p>
                            (15 t/m 18 jaar vrijdag 20.00-22.00)
                        </p>
                    </div>
                </a>
                <a href='speltakken/pivos'>
                    <div>
                        <img src={imgPivos}/>
                        <hr/>
                        <h3>
                            Rovers (Pivos)
                        </h3>
                        <p>
                            (ouder dan 18 jaar)
                        </p>
                    </div>
                </a>  
                <a href='speltakken/senioren'>
                    <div>
                        <img src={imgSenioren}/>
                        <hr/>
                        <h3>
                            Plus scouts (Senioren)
                        </h3>
                        <p>
                            (ouder dan 21 jaar)
                        </p>
                    </div>
                </a>     
            </div>
        </div>

        </>
    )
}

export default ASG_Speltakken