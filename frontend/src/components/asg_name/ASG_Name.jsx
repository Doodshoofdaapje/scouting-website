import imgSignture from '../../assets/asg_name/albertschweitzer-signature.jpg';
import imgAfica from '../../assets/asg_name/albertschweitzer-africa.jpg';
import imgSelfie from '../../assets/asg_name/albertschweitzer-selfie.jpg';
import imgBoat from '../../assets/asg_name/albertschweitzer-boat.jpg';
import imgStatue from '../../assets/asg_name/albertschweitzer-statue.jpg';
import '../Page.scss';

function ASG_Name() {

    return(
        <>
        <div className="container asg-name">
            
            <div className='page-header'>
                <div>
                    <h1>
                        ASG Naam
                    </h1>
                </div>
                
                <div>
                    <p>
                    Onze scoutinggroep is genoemd naar Albert Schweitzer, winnaar van de Nobelprijs voor de vrede, die leefde van 1875 tot 1965. 
                    Albert Schweitzer was een veelzijdige persoon: hij was een arts, theoloog, filosoof en musicus. Hij werd vooral bekend door zijn werk 
                    als arts in Lambaréné, een afgelegen gebied in Gabon.
                    </p>
                    <img src={imgStatue}/>
                </div>
            </div>  
            
            {/* <div className='content-header'>
                <h1>
                    Albert Schweitzer
                </h1>
            </div> */}
            
            <div className='page-content'>
                <p>
                    Albert werd geboren in Kaysersberg, een klein plaatsje in Duitsland.
                    Hij leerde voor dokter en ging daarna, samen met zijn vrouw werken in Afrika.
                    Hij werd vooral bekend door Lambarene, het ziekenhuis in Gabon in Centraal-Afrika, 
                    waar hij het grootste deel van zijn leven heeft doorgebracht.
                    Van de overheid kreeg hij in 1924 grond waarop nieuwe barakken werden gebouwd.
                    Het ziekenhuis groeide snel uit tot een soort dorp. Vanaf die tijd werd hij geholpen door 
                    Europese artsen en verpleegsters.
                </p>

                <p>
                    In de laatste jaren van zijn leven ging Schweitzer weer studeren. Dit keer kernfysica. 
                    Hij waarschuwde de wereld voor de gevolgen van de kernbewapening en kernproeven.
                    In 1952 kreeg hij de Nobelprijs voor de vrede. Het geld van de prijs besteedde hij aan de 
                    bouw van een apart dorp voor leprapatiënten, het 'Village de Lumière', dorp van het licht.
                    Op 4 september 1965 kwam aan zijn leven een einde. Hij werd 90 jaar.
                </p>
            </div>

            <div className='image-gallery'>
                <div>
                    <img src={imgAfica}/>
                    <hr/>
                    <p>
                        
                    </p>
                </div>
                <div>
                    <img src={imgBoat}/>
                    <hr/>
                </div>
                <div>
                    <img src={imgSelfie}/>
                    <hr/>
                </div>
                
            </div>
        </div>

        </>
    )
}

export default ASG_Name