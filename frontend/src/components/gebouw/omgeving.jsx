import '../Page.scss';
import imgCadettenKamp from '../../assets/omgeving/cadettenkamp.jpg';
import imgVuchtpolder from '../../assets/omgeving/lage_vuchtpolder.jpg';
import imgNatuurreservaat from '../../assets/omgeving/natuurreservaat.jpg';
import imgVrachelsehei from '../../assets/omgeving/vrachelsehei.jpg';
import imgIjsbaan from '../../assets/omgeving/kunstijsbaan.jpg';

function Omgeving() {

    return(
        <>
        <div className="container">
            
            <div className='page-header'>
                <div>
                    <p>
                        De omgeving van Breda heeft veel te bieden voor bezoekers, zowel binnen als buiten de stad. Of je nu de historische binnenstad wilt 
                        verkennen met zijn rijke cultuur en bruisende sfeer, of juist wilt genieten van de rust en schoonheid van de omliggende natuurgebieden 
                        en pittoreske dorpjes, er is voor ieder wat wils.
                    </p>
                </div>
            </div>  
            
            <div className='content-header'>
                <h1>
                    Cadettenkamp
                </h1>
            </div>
            
            <div className='page-content'>
                <p>
                Op vijf minuten fietsen, of twintig minuten lopen, ligt een vrij toegankelijk natuurgebied.
                Het was vroeger militair oefenterrein en heet daarom Cadettenkamp.
                Het is een gebied met deels bos, deels grote zandverstuivingen, wat heuvelachtig.
                Kortom uitstekend bruikbaar voor allerlei spelactiviteiten. Mountainbike route !
                </p>
            </div>

            <div className='content-image'>
                <img src={imgCadettenKamp}/>
            </div>

            <hr/>

            <div className='content-header'>
                <h1>
                    Lage Vuchtpolder / Waterdonken
                </h1>
            </div>
            
            <div className='page-content'>
                <p>
                Aan de noordkant van Breda is een afwisselend landschap;
                Een poldergebied met veel  weidevogels; omzoomd door kleine en grote bossen.
                Dat vraagt om leuke tochten. Aan het begin van de polder is een kinderboerderij.
                Bij de waterplas de Waterdonken een boerderij die ijs verkoopt.
                </p>
            </div>

            <div className='content-image'>
                <img src={imgVuchtpolder}/>
            </div>

            <hr/>

            <div className='content-header'>
                <h1>
                    Sportboulevard
                </h1>
            </div>
            
            <div className='page-content'>
                <p>
                Op tien minuten fietsen is sportboulevard de Wisselaar
                Hier zijn: een overdekt zwembad, een racketcentrum, een klimhal,
                een skeeler/ wielerbaan, een overdekte kunstijsbaan, en een indoor speeltuin.
                </p>
            </div>

            <div className='content-image'>
                <img src={imgIjsbaan}/>
            </div>

            <div className='page-content'>
                <h3> Kunstijsbaan</h3>
                <p>
                De overdekte Optisport kunstijsbaan is open van oktober tot april voor schaatsen,
                Er zijn een 400 meter wedstrijdbaan en een 60/40 meter binnenveld (kunstrijden).
                Terheijdenseweg 500. <br/>
                <a href="http://www.optisport.nl/schaatsbaanbreda">http://www.optisport.nl/schaatsbaanbreda</a>
                </p>

                <h3> Zwembad </h3>
                <p>
                Overdekt Optisport wedstrijdbad (50 meter) met horeca
                Terheijdenseweg 494, 4826 AB Breda <br/>
                <a href="https://www.optisport.nl/wisselaar">https://www.optisport.nl/wisselaar</a>
                </p>

                <h3> Leisure Centre</h3>
                <p>
                o.a. Avontura Breda Terheijdenseweg 500.
                Terheijdenseweg 500. <br/>
                <a href="http://www.optisport.nl/avonturabreda">http://www.optisport.nl/avonturabreda</a> <br/>
                <a href="http://www.optisport.nl/racketcentrumbreda/">http://www.optisport.nl/racketcentrumbreda/</a>
                </p>

                <h3> Klimcentrum </h3>
                <p>
                Terheidenseweg 500, 4826 AB Breda <br/>
                <a href="http://www.arendse.nl/wandklimmen">http://www.arendse.nl/wandklimmen</a>
                </p>

                <h3> Wielerparcours </h3>
                <p>
                Wieler- en skeelerparcours, dat is afgesloten voor het verkeer.
                Terheijdenseweg 520, 4826 AB Breda. Tel.: 076 5871702
                </p>

            </div>

            <hr/>

            <div className='content-header'>
                <h1>
                    Natuurreservaat
                </h1>
            </div>
            
            <div className='page-content'>
                <p>
                Surea: Opvallend in de bossen van Dorst zijn de verschillende leemputten, waaruit vroeger leem werd gegraven voor steenbakkerijen in Dorst en Rijen. 
                Op twintig minuten fietsen langs de spoorlijn ligt 'De Nieuwe Leemputten'. Dit natuurreservaat in boswachterij Dorst wordt begraasd door Schotse Hooglanders 
                en bokken van het Nederlandse Landgeiten ras. Wandelen te midden van deze dieren is mogelijk. Het is een zeer afwisselend landschap; alle typen bos, heuvels, 
                waterplassen.
                </p>
            </div>

            <div className='content-image'>
                <img src={imgNatuurreservaat}/>
            </div>

            <div className='content-header'>
                <h1>
                    Seterse bossen
                </h1>
            </div>
            
            <div className='page-content'>
                <p>
                Nadat grote stukken in boswachterij Dorst rond 1850 waren gekapt en er daarna militaire oefeningen werden gehouden, ontstonden er grote zandverstuivingen. 
                De vele heuvels en dalen die het rusteloze zand maakte, zijn nog steeds goed te zien rond de Seterse Bergen en bij Surae. Montainbikeroute !
                </p>
            </div>

            <div className='content-header'>
                <h1>
                    Vrachelse hei
                </h1>
            </div>
            
            <div className='page-content'>
                <p>
                Ten noorden van de Vuchtpolder is een bosgebied met open zandverstuivingen en hei.
                Het terrein is hier en daar wat heuvelachtig. Er is een trimbaan uitgezet en er is een grote mountainbikeroute.
                </p>
            </div>

            <div className='content-image'>
                <img src={imgVrachelsehei}/>
            </div>

            
            <div className='content-header'>
                <h1>
                    Openluchtbad
                </h1>
            </div>
            
            <div className='page-content'>
                <p>
                Recreatieoord de Warande; een openluchtbad, gelegen in bosrijke omgeving.
                Rondom het bad zijn andere recreatiemogelijkheden.
                Bredaseweg 117, Oosterhout, <a href="https://de-warande.nl/">https://de-warande.nl/</a>
                </p>
            </div>

            
            <div className='content-header'>
                <h1>
                    Kindermusea
                </h1>
            </div>
            
            <div className='page-content'>
                <p>
                In het stadje Oosterhout zijn enkele bijzonder aardige kindermusea:
                Bakkerijmuseum, Klappeijstraat 47-49, 4901 HD Oosterhout, tel. 0162-429700.
                Speelgoedmuseum Zandheuvel 51, 4901 HT Oosterhout <a href="http://www.speelgoedmuseum.nl/">http://www.speelgoedmuseum.nl/</a>
                </p>
            </div>

        </div>
        </>
    )
}

export default Omgeving