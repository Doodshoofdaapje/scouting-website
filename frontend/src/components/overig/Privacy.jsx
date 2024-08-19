import '../Page.scss';
import imgLogo from '../../assets/privacy.png';


function Privacy() {

    return(
        <>
        <div className="container">
            
            <div className='page-header'>
                <div>
                    <p>
                    Vanaf 25 mei 2018 is de Algemene Verordening Gegevensbescherming (AVG) van toepassing. 
                    Deze nieuwe privacywet, internationaal de General Data Protection Regulation (GDPR) genoemd, 
                    geldt in de hele Europese Unie en gaat onder andere over het bewaren en beschermen van persoonsgegevens.
                    </p>
                    <img src={imgLogo}/>
                </div>
            </div>  
            
            <div className='content-header'>
                <h1>
                Privacy
                </h1>
            </div>

            <div className='page-content'>
                <p>
                    Alle organisaties in de EU, dus ook Scouting, moeten nadenken over en vastleggen welke 
                    persoonsgegevens van vrijwilligers en leden ze bewaren en hoe ze die beveiligen.
                    De wet kent drie belangrijke thema’s:
                </p>
                <ul>
                    <li>Het bewaren van persoonsgegevens</li>
                    <li>Het beschermen van persoonsgegevens</li>
                    <li>Het melden van datalekken bij de toezichthouder</li>
                </ul>
                <p>
                    Alle afspraken die een organisatie hierover maakt, worden vastgelegd in een beleidsplan dat inzichtelijk is voor leden.
                </p>
            </div>

            <div className='object-array'>
                <div className='download'>
                    <a href="ASG_18_Privacy_statement_definitief.pdf" download> <button> Download Privacy Statement ASG </button> </a>
                </div>
                <div className='download'>
                    <a href="https://www.scouting.nl/downloads" download> <button> Download Privacybeleid Scouting NL </button> </a>    
                </div>
            </div>
            
        </div>
        </>
    )
}

export default Privacy