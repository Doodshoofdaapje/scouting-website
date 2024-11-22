import '../Page.scss';
import imgScoutingNL from '../../assets/scoutingnl.jpg';
import imgScoutingNLBanner from '../../assets/scoutingnlbanner.jpg';
import imgBaronie from '../../assets/scoutingbaronie.png';

function ScoutingNederland() {

    return(
        <>
        <div className="container">
            
            <div className='page-header'>
                <div>
                    <p>
                        Scouting Nederland stelt zich ten doel :
                        het bevorderen van het Scoutingprogramma in Nederland, op grondslag van de ideeën van Lord Baden-Powell, 
                        om daarmee een plezierige beleving van de vrije tijd te bieden aan meisjes en jongens, waardoor een bijdrage wordt 
                        geleverd aan de vorming van hun persoonlijkheid
                    </p>
                    <img src={imgScoutingNL}/>
                </div>
            </div>  
            
            <div className='content-header'>
                <h1>
                    Scouting Nederland
                </h1>
            </div>
            
            <div className='page-content'>
                <p>
                    Scouting Nederland is in 1973 ontstaan door de samenvoeging van twee jongens- en twee meisjesorganisaties. Deze samenvoeging kwam voort uit de 
                    wens naar betere samenwerking en om de terugloop van leden een halt toe te roepen.
                    Scouting Nederland is zowel lid van de World Association of Girl Guides and Girl Scouts (WAGGGS) als van de World Organization of the Scout Movement (WOSM)
                </p>

                <div className='content-image'>
                    <img src={imgScoutingNLBanner}/>
                </div>

                <p>
                    Ruim 1300 groepen door heel Nederland zijn aangesloten bij Scouting Nederland. Nederland is in 47 Scoutingregio's onderverdeeld, elke regio heeft een 
                    eigen naam en een bestuur van vrijwilligers. Een regio telt gemiddeld zo’n dertig Scoutinggroepen. De groepen bepalen het beleid en zijn samen verantwoordelijk 
                    voor het goed functioneren van de regio. ASG valt onder regio 64: Regio de Baronie. Het beleid van de scouting nederland wordt vastgesteld door de Landelijke raad, zeg maar 'het parlement' van Scouting. 
                    Het Bestuur van Scouting Nederland is verantwoordelijk voor de beleidsvoorbereiding en de -uitvoering. Het maakt daarbij gebruik van de 
                    medewerkers van het Landelijk servicecentrum.
                </p>

                <div className='content-image-small'>
                    <img src={imgBaronie}/>
                </div>


            </div>
        </div>

        </>
    )
}

export default ScoutingNederland