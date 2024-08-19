import '../Page.scss';
import imgLogo from '../../assets/scale.png';


function Veiligheid() {

    return(
        <>
        <div className="container">
            
            <div className='page-header'>
                <div>
                    <p>
                    Onze vrijwilligers zijn in meer of mindere mate bezig met jeugdleden. Dat is leuk, leerzaam en 
                    waar onze vereniging om draait. Om onze jeugdleden een veilige omgeving te bieden, is het belangrijk 
                    dat we er met elkaar voor zorgen dat er geen schadelijk gedrag plaatsvindt binnen onze vereniging.
                    </p>
                    <img src={imgLogo}/>
                </div>
            </div>  
            
            <div className='content-header'>
                <h1>
                Gedragscode
                </h1>
            </div>

            <div className='page-content'>
                <p>
                Wij staan volledig achter de gedragscode zoals opgesteld door Scouting Nederland. De volgende 10 regels gelden 
                daarom voor al onze vrijwilligers:
                </p>
                <ol>
                    <li>De vrijwilliger zorgt voor een omgeving en een sfeer waarbinnen het jeugdlid zich veilig en gerespecteerd voelt.</li>
                    <li>De vrijwilliger gaat zo om met een jeugdlid dat zijn/haar waardigheid niet wordt aangetast.</li>
                    <li>De vrijwilliger dringt niet verder door in het privéleven van het jeugdlid dan functioneel noodzakelijk is.</li>
                    <li>De vrijwilliger onthoudt zich van elke vorm van seksuele benadering en misbruik ten opzichte van het jeugdlid. Alle seksuele handelingen, -contacten en -relaties tussen vrijwilliger en jeugdlid tot 18 jaar zijn onder geen beding geoorloofd en worden beschouwd als seksueel misbruik.</li>
                    <li>De vrijwilliger raakt het jeugdlid niet op zodanige wijze aan, dat deze aanraking naar redelijke verwachting als seksueel of erotisch van aard ervaren zal worden.</li>
                    <li>De vrijwilliger gaat tijdens kampen en activiteiten met respect om met jeugdleden en de ruimtes waarin zij zich bevinden, zoals slaapzalen, tenten, omkleedruimten, douches etc.</li>
                    <li>De vrijwilliger beschermt het jeugdlid naar vermogen tegen vormen van ongelijkwaardige behandeling en seksueel misbruik en ziet er actief op toe dat de gedragscode door iedereen die bij het jeugdlid is betrokken, wordt nageleefd.</li>
                    <li>Als de vrijwilliger gedrag signaleert dat niet in overeenstemming is met deze gedragscode en bij vermoedens van seksueel misbruik, is hij verplicht hiervan melding te maken bij de daarvoor door het bestuur aangewezen personen.</li>
                    <li>De vrijwilliger krijgt of geeft geen (im)materiële vergoedingen die niet in de rede zijn.</li>
                    <li>In die gevallen waar de gedragscode niet (direct) voorziet, of bij twijfel over de toelaatbaarheid van bepaald gedrag zal de vrijwilliger in de geest van de gedragscode handelen en zo nodig daarover in contact te treden met een door het bestuur aangewezen persoon.</li>
                </ol>

                <p>Voor een uitgebreide toelichting van deze gedragsregels verwijzen wij u naar:</p>

                <div className='object-array'>
                    <div className='download'>
                        <a href="Gedragscode.pdf" download> <button> Download gedragscode Scouting NL</button> </a>
                    </div>
                </div>

            </div>

            <div className='content-header'>
                <h1>
                Aannamebeleid
                </h1>
            </div>
            
            <div className='page-content'>
                <p>
                Voordat een nieuwe vrijwilliger bij onze vereniging aan de slag gaat, vindt een oriënterend gesprek plaats 
                met onze voorzitter of zijn plaatsvervanger. Indien nodig worden referenties van de nieuwe vrijwilliger opgevraagd. 
                Bij een positieve uitkomst van het gesprek volgt een proefperiode van drie maanden. Tijdens de proefperiode 
                wordt van beide kanten bekeken of de rol als vrijwilliger binnen onze vereniging bevalt. Wanneer dit het geval 
                is, wordt een VOG aangevraagd voor de nieuwe vrijwilliger. De VOG van elke vrijwilliger binnen onze vereniging wordt 
                elke drie jaar vernieuwd.
                </p>
            </div>

            <div className='content-header'>
                <h1>
                Calamiteiten
                </h1>
            </div>
            
            <div className='page-content'>
                <p>
                Als er sprake is van een calamiteitensituatie, zoals grensoverschrijdend gedrag, een ongeluk of een sterfgeval, 
                staan onze bestuursleden je graag te hulp. Ook kun je altijd contact opnemen met het landelijk opvangteam. 
                Dit team bestaat uit landelijk vrijwilligers die groepsbesturen adviseren over hoe ze hiermee om kunnen gaan.
                Deze vrijwilligers zijn ervaren in de hulpverlening en hebben veel ervaring met dit soort situaties. 
                Zij verwijzen Scoutinggroepen indien nodig door naar de juiste instanties. Meer informatie over het landelijk
                opvangteam vind je hier:
                </p>

                <div className='object-array'>
                    <div className='download'>
                        <a href="https://www.scouting.nl/ondersteuning/veiligheid-en-gezondheid/sociale-veiligheid/informatie-en-advies" download> <button> Info en advies Scouting NL</button> </a>
                    </div>
                </div>
            </div>

            <div className='content-header'>
                <h1>
                Vertrouwenspersoon
                </h1>
            </div>
            
            <div className='page-content'>
                <p>
                Naast het bestuur en het landelijk opvangteam, hebben wij een onafhankelijke vertrouwenspersoon. 
                Deze persoon heeft enige betrokkenheid bij onze vereniging, maar vervult geen rol in het bestuur of leidingteam.
                Om in contact te komen met onze vertrouwenspersoon, mail je naar: vertrouwenspersoon@asgbreda.nl
                </p>
            </div>
            
        </div>
        </>
    )
}

export default Veiligheid