import '../Page.scss';
import imgVerf from '../../assets/sponsoren/verfbussen.jpg';
import imgGas from '../../assets/sponsoren/gasflessen.jpg';
import imgKeuring from '../../assets/sponsoren/keuring.png';

function Sponsoren() {

    return(
        <>
        <div className="container">
            
            <div className='page-header'>
                <div>
                    <p>
                        Sponsoren helpen enorm met het bijhouden van onze scouting. Dankzij hun bijdragen kunnen we onze faciliteiten onderhouden,
                         nieuwe materialen aanschaffen en bijzondere activiteiten organiseren voor onze leden.
                    </p>
                    {/* <img src={imgStatue}/> */}
                </div>
            </div>  
            
            <div className='content-header'>
                <h1>
                    Sponsoren
                </h1>
            </div>
            
            <div className='page-content'>
                <p>
                    Sponsors die een aanzienlijke bijdrage leveren vermelden wij graag op onze website.
                </p>

            </div>

            <div className='image-gallery'>
                <div>
                    <img src={imgVerf}/>
                    <p>  
                        De verfkoning <br/>
                        Wilhelminasingel 46 <br/>
                        Breda 076 - 5319030
                    </p>
                </div>

                <div>
                    <img src={imgGas}/>
                    <p>  
                        Gommers lasbenodigdheden<br/>
                        Antiloopstraat 79<br/>
                        Breda 076-5214659
                    </p>
                </div>

                <div>
                    <img src={imgKeuring}/>
                    <p>  
                        RPS keuringen Breda<br/>
                        Legionella
                    </p>
                </div>
                
            </div>
        </div>
        </>
    )
}

export default Sponsoren