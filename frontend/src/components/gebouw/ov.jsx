import '../Page.scss';
import imgStation from '../../assets/openbaar_vervoer/station.jpg';
import imgBushalte1 from '../../assets/openbaar_vervoer/bushalte.jpg';
import imgBushalte2 from '../../assets/openbaar_vervoer/bushalte2.jpg';
import imgSateliet from '../../assets/openbaar_vervoer/sateliet.jpg';
import imgNS from '../../assets/openbaar_vervoer/ns.png';
import ZoomableImage from '../zoomable_image/ZoomableImage';

function OpenbaarVervoer() {

    return(
        <>
        <div className="container">
            
            <div className='page-header'>
                <div>
                    <p>
                    De locatie is goed bereikbaar met het openbaar vervoer. In de buurt zijn er diverse bushaltes, en het dichtstbijzijnde treinstation is 
                    eenvoudig te bereiken. Hierdoor is de locatie toegankelijk voor iedereen die afhankelijk is van openbaar vervoer.
                    </p>
                    <img src={imgNS}/>
                </div>
            </div>  
            
            <div className='content-header'>
                <h1>
                Openbaar Vervoer
                </h1>
            </div>
            
            <div className='page-content'>
                <p>
                    <b>LETOP: De omgeving van het clubgebouw wordt in de periode van 2025 enorm aangepast, mogelijk dus ook het openbaar vervoer. Verdere informatie volgt.</b><br/>
                    Het scoutinggebouw is uitstekend bereikbaar per openbaar vervoer. Eenmaal aangekomen op het station, is het slechts een korte reis naar ons scoutinggebouw.
                    Vanaf NS station Breda is het eenvoudig om ons te bereiken met de bus. Er zijn meerdere mogelijkheden voor de bus:
                     
                </p>
                <ul>
                    <li>lijn 325 richting Oosterhout</li>
                    <li>lijn 326 richting Geertruidenberg</li>
                    <li>lijn 327 richting Tilburg</li>
                </ul>
            </div>

            <div className='image-gallery'>
                <div>
                    <ZoomableImage src={imgStation}/>
                    <hr/>
                </div>
                <div>
                    <ZoomableImage src={imgBushalte1}/>
                    <hr/>
                </div>
                <div>
                    <ZoomableImage src={imgBushalte2}/>
                    <hr/>
                </div> 
            </div>

            <div className='page-content'>

                <p>
                    Op werkdagen (buiten schoolvakanties) is er elke 10 minuten een bus die je naar ons scoutinggebouw brengt. 
                    De busrit zelf duurt slechts 3 minuten. Je stapt uit bij de eerste halte: halte Frankenthalerstraat. 
                    Vanaf daar is het nog maar 200 meter lopen naar ons gebouw. Dankzij deze frequente en snelle verbinding ben je binnen enkele minuten ter plaatse, 
                    wat het bijzonder gemakkelijk maakt om ons scoutingterrein te bereiken.
                </p>

            </div>

            <div className='content-image'>
                <img src={imgSateliet}/>
            </div>
        </div>
        </>
    )
}

export default OpenbaarVervoer