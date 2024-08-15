import '../Page.scss';
import imgLogo from '../../assets/lidmaatschap/logo.jpg';

function Verhuur() {

    return(
        <>
        <div className="container">
            
            <div className='page-header'>
                <div>
                    <p>
                        Het scouting gebouw is in een te huren voor groepsactiviteiten van bijvoorbeeld scoutinggroepen of scholen, maar NIET voor feesten. 
                        Het is ook mogelijk het gebouw gedeeltelijk te huren.
                    </p>
                    <img src={imgLogo}/>
                </div>
            </div>  

            <div className='content-header'>
                <h1>
                    Kosten
                </h1>
            </div>
            
            <div className='page-content'>
                <p>
                    Het huren van het gebouw kost €5,50 per persoon/per nacht met een minimum van 20 personen. Deze kosten zijn exclusief:
                </p>
                <ul>
                    <li>Energie Kosten </li>
                    <li>Buitensporig hoeveel afval</li>
                    <li>Schade en/of vermissingen</li>
                </ul>

                <p>
                    Ook verhuren wij een keuken inventaris voor 25 personen voor €25 extra.
                </p>

                <p>
                    Houd rekening met het betalen van een (forse) borgsom. Deze borgsom word afgesproken na de aanvraag van het verhuur en wordt binnen een maand
                    na het verhuurtermijn teruggestort, minus diverse kosten. Zie artikel 4 in het verhuurreglement. Betalen rekening verhuur: NL 33 RABO 0153 4543 34
                    ten name van STICHTING Albert Schweitzer Groep Breda.
                </p>
  
            </div>

            <div className='content-header'>
                <h1>
                Verhuur
                </h1>
            </div>
            
            <div className='page-content'>
                <p>
                    Ons magazijn bevat een groot aantal kampeerartikelen en ook die zijn (samen met het gebouw) te huur. Voor informatie over het huren van 
                    het gebouw of van materiaal kun je je wenden tot Henk Verleg: verhuur@asgbreda.nl, webmaster@asgbreda.nl. Ook voor aanvraag van huur kun je je wenden tot Henk Verleg.
                    Alleen als de gegevens COMPLEET worden aangeleverd wordt verhuur in overweging genomen.
                </p>
  
            </div>

                <div className='object-array'>
                    <div className='download'>
                        <a href="Reglement_Verhuur_ASG.pdf" download> <button> Download huur reglement </button> </a>
                    </div>
                    <div className='download'>
                        <a href="Aanvraag_huur_scoutinggebouw_ASG_Breda.docx" download> <button> Download aanvraag formulier </button> </a>    
                    </div>
                </div>
            
            <div className='page-content'>
                <p>
                    Er is beperkte beschikbaarheid tijdens het scoutingseizoen in verband met activiteiten van onze eigen scoutinggroep. Op vrijdag is huur alleen 
                    mogelijk als de huurders afwezig zijn van 18:45 tot 22:00 uur.
                    Op zaterdag is huur alleen mogelijk als de huurders afwezig zijn van 09:30 tot 13:30 uur. Gedurende deze tijden ben je dus NIET welkom in het 
                    gebouw of op het terrein van ASG. Vind beschikbaarheid onder aan deze pagina!
                </p>

                <p>
                ADRES GEBOUW: <br/>
                Albert Schweitzer Groep, <br/>
                Frankenthalerstraat 6, <br/>
                4816 KA    BREDA. <br/>
                076-571 19 83 (gebouw) <br/> <br/>

                geen poststukken of pakketten op dit adres !
                </p>

            </div>
            

        </div>
        </>
    )
}

export default Verhuur