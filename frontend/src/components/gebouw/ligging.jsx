import '../Page.scss';
import imgLiggingASG from '../../assets/gebouw_ligging/liggingasg.jpg';
import imgLiggingBreda from '../../assets/gebouw_ligging/liggingbreda.jpg';
import imgSateliet1 from '../../assets/gebouw_ligging/sateliet1.jpg';
import imgSateliet2 from '../../assets/gebouw_ligging/sateliet2.jpg';
import imgSateliet3 from '../../assets/gebouw_ligging/sateliet3.png';
import imgBreda from '../../assets/gebouw_ligging/breda samen.jpg';
import imgLogo from '../../assets/lidmaatschap/logo.jpg';
import ZoomableImage from '../zoomable_image/ZoomableImage';

function Ligging() {

    return(
        <>
        <div className="container">
            
            <div className='page-header'>
                <div>
                    <p>
                    Het clubgebouw van de Albert Schweitzergroep is rustig gelegen aan de rand van Breda, in een vredig gebied grenzend aan agrarisch landschap. 
                    Deze serene locatie biedt een ideale omgeving voor activiteiten in de natuur. Ondanks de rustige ligging is het centrum van Breda goed bereikbaar.
                    </p>
                    <img src={imgLogo}/>
                </div>
            </div>  
            
            <div className='content-header'>
                <h1>
                    Ligging
                </h1>
            </div>
            
            <div className='page-content'>
                <p>
                <b>LETOP: De omgeving van het clubgebouw wordt in de periode van 2025 enorm aangepast. Verdere informatie volgt.</b><br/>
                Het clubgebouw van de Albert Schweitzergroep bevindt zich in Breda.
                Het ligt in de Frankenthalerstraat op nummer 6, aan de noord-oost rand van de stad Breda,
                net buiten de wijk Doornbos. Het terrein grenst aan agrarisch gebied. 
                </p>
            </div>

            <div className='image-gallery'>
                <div>
                    <ZoomableImage src={imgLiggingASG}/>
                </div>
                <div>
                    <ZoomableImage src={imgLiggingBreda}/>
                </div>
            </div>

            <div className='page-content'>
                <p>
                Op loopafstand (5 minuten) is in de wijk Doornbos een winkelcentrum met onder meer een grote supermarkt en een apotheek.
                De wijk Doornbos is ruim van opzet en heeft, zoals heel Breda Noord, veel grasvelden en speelplekken.

                Het centrum van de stad en het station NS zijn prima bereikbaar met de bus. (200 meter naar bushalte)
                Het NS station BREDA is ook in minder dan 25 minuten te belopen.
                </p>
            </div>

            <div className='image-gallery'>
                <div>
                    <ZoomableImage src={imgSateliet1}/>
                    <hr/>
                </div>
                <div>
                    <ZoomableImage src={imgSateliet2}/>
                    <hr/>
                </div>
                <div>
                    <ZoomableImage src={imgSateliet3}/>
                    <hr/>
                </div>           
            </div>

            <div className='content-header'>
                <h1>
                    Breda
                </h1>
            </div>

            <div className='page-content'>
                <p>
                De VVV omschrijft Breda als de gezelligste stad van het zuiden (prijs 2020 voor de gezelligste binnenstad van Nederland).
                Breda is in ieder geval een historische stad in Noord-Brabant met een sfeervol stadshart, een rijk verleden en een bruisend heden.
                </p>
                <p>
                Breda is in de loop van ruim 750 jaar uitgegroeid tot een stad met ongeveer 170.000 inwoners. Een grote stad dus, maar door haar knusse centrum gezellig.
                Natuurlijk heeft Breda bezienswaardigheden in het centrum van de stad, maar ook de vele leuke winkels zijn een bezoek waard. Breda ademt bovenal de gemoedelijke 
                Bourgondische sfeer die kenmerkend is voor alle oudere, zuidelijke steden waar men de "kunst van het genieten" verstaat.
                Op Grote Markt, Haven of Havermarkt vindt ieder een gezellig terrasje
                </p>
            </div>

            <div className='content-image'>
                <img src={imgBreda}/>
            </div>
        </div>
        </>
    )
}

export default Ligging