import '../Page.scss';
import imgContributie from '../../assets/lidmaatschap/contributie.jpg';
import imgBredaPas from '../../assets/lidmaatschap/bredaPas.jpg';
import imgScoutingNL from '../../assets/lidmaatschap/scoutingNederland.jpg';
import imgLogo from '../../assets/lidmaatschap/logo.jpg';


function Lidmaatschap() {

    return(
        <>
        <div className="container">
            
            <div className='page-header'>
                <div>
                    <p>
                    Bij ASG beleef je avontuur en vriendschap op een unieke manier! Onze scouts doen van alles, van kamperen tot pionieren en leuke spellen. Kom en ontdek wat je 
                    allemaal kunt meemaken!
                    </p>
                    <img src={imgLogo}/>
                </div>
            </div>  
            
            <div className='content-header'>
                <h1>
                    Lidmaatschap
                </h1>
            </div>
            
            <div className='page-content'>
                <p>
                Wil je lid worden van ASG? Dan kan je je aanmelden kan via de leiding van de onderdelen. Nieuwe leden mogen na afspraak met de leiding twee keer komen kijken.
                Als na deze 2 keer wordt besloten lid van de groep te worden, dan gaat men vanaf een afgesproken datum contributie betalen, hiervoor dient een inschrijfformulier 
                te worden ingevuld.
                </p>

                <div className='download object-array'>
                    <div className='download'>
                        <a href="ASG_inschrijfformulier.docx"> <button> Download inschrijf formulier </button> </a>
                    </div>
                    <div className='download'>
                        <a href="https://www.rijksoverheid.nl/documenten/formulieren/2014/02/06/formulier-toestemming-reizen-met-minderjarige-naar-het-buitenland"> <button> Download toestemming formulier buitenland </button> </a>
                    </div>
                    
                </div>

                <p>
                Nadat een nieuw lid enkele maanden heeft meegedraaid met het onderdeel maakt de leiding een afspraak met de ouders voor een kennismakingsgesprek.
                Er wordt dan ook gesproken over de installatie. De installatie is het moment waarop de kennismakingsperiode wordt afgesloten en je formeel 
                wordt opgenomen bij het onderdeel. Je mag vanaf dat moment je scoutinguniform dragen. Deze installatie vindt plaats op een ouderavond.
                </p>

            </div>

            <hr/>

            <div className='content-header'>
                <h1>
                    Contributie
                </h1>
            </div>

            <div className='content-image'>
                <img src={imgContributie}/>
            </div>

            <div className='page-content'>
                <p>
                De contributie bedraagt 13,50 euro per maand / 12 maanden per jaar. Vriendelijk vragen we de contributie voor het lidmaatschap van de 
                groep vooraf over te maken via bank of giro. <br/>

                IBAN nummer: NL 72 RABO 0178 9932 47 <br/>
                Rabobank <br/>
                t.n.v. Scouting Albert Schweitzer <br/>
                onder vermelding van naam (eventueel van kind) en onderdeel <br/>
                </p>
            </div>

            <hr/>

            <div className='content-header'>
                <h1>
                    Breda Pas
                </h1>
            </div>

            <div className='content-image'>
                <img src={imgBredaPas}/>
            </div>

            <div className='page-content'>
                <p>
                Heeft u een Breda Pas, of heeft u hier recht op, dan geldt dat de gemeente Breda u tegemoet komt in de contributie kosten, kleding en het kampgeld.
                </p>

                <p>
                Alleen intermediairs (Leerkrachten, huisarts, maatschappelijk werk, jeugdhulpverleners) kunnen voor u als ouder een aanvraag indienen bij het jeugdsportfonds.
                Deze tegemoetkoming geldt tot een maximum van EUR 225,00 per jaar.
                Dit betreft een tegemoetkoming bestaande uit contributie en attributen, zoals kleding.
                </p>

                <p>
                Voor meer informatie, verwijzen wij u naar <a href='http://www.jeugdsportfonds.nl/'> www.jeugdsportfonds.nl </a>
                Ook Scouting Albert Schweitzer Groep is bereid tot verdere uitleg omtrent deze vernieuwde procedure.
                Voor meer informatie omtrent de aanvraag van een Breda Pas en/of het declareren van de kosten van het kampgeld verwijzen 
                wij u naar <a href='https://www.breda.nl/'> www.breda.nl </a>
                </p>
            </div>

            <hr/>

            <div className='content-header'>
                <h1>
                    Scouting Nederland
                </h1>
            </div>

            <div className='content-image'>
                <img src={imgScoutingNL}/>
            </div>

            <div className='page-content'>
                <p>
                Als je lid wordt van onze Scoutinggroep word je ook lid van de grootste jeugd- en jongerenvereniging van Nederland, Scouting Nederland.
                </p>

                <p>
                Binnen de vereniging worden afspraken gemaakt. Je kunt ze beschouwen als huisregels die zorgen voor onderlinge binding en verantwoordelijkheid, 
                maar ook voor een leerzame en veilige speelomgeving voor jeugd en jongeren. Dat vinden we bij Scouting heel erg belangrijk. 
                Daarom zijn deze afspraken vastgelegd in het Huishoudelijk Reglement.
                Bij het lid worden van een groep, regio of de landelijke organisatie, vragen we je kennis te nemen van het Huishoudelijk Reglement.
                </p>

                <div className='download object-array'>
                    <div className='download'>
                        <a href="https://www.scouting.nl/assets/uploads/doorzoekbareBestanden/06.Ondersteuning/Bestuurlijke-zaken/Huishoudelijk%20reglement%20en%20statuten/Huishoudelijk_reglement_2023.pdf"> <button> Download huishoudelijk reglement </button> </a>
                    </div>
                </div>
                
            </div>
        </div>

        </>
    )
}

export default Lidmaatschap