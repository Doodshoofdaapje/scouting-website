import '../Page.scss';
import imgLogo from '../../assets/beunploeg/beungploeg-logo.png';

function Beunloeg() {

    return(
        <>
        <div className="container">
            
            <div className='page-header'>
                <div>
                    <p>
                    Een groep vrijwilligers onderhoudt al sinds begin af aan ons gebouw en terrein.
                    Ooit waren ze zelf een welpje, of hun kinderen speelden het spel van scouting. 
                    Het begon met een handje toesteken, en het werd een wekelijks doe-het-zelven.
                    </p>
                    <img src={imgLogo}/>
                </div>
            </div>  
            
            <div className='content-header'>
                <h1>
                    Beunploeg
                </h1>
            </div>
            
            <div className='page-content'>
                <p>
                    De beunploeg is verantwoordelijk voor het onderhouden van het scouting gebouw en terrein. Dit gaat van kleine klusjes tot grote onderhoudsprojecten.
                    Onze beunploeg is een bijzonder gezelschap, drinkt koffie en thee, en houdt bij wat er over Albert te "Schweitsen" valt. Ze bemoeien zich al meer dan
                    25 jaar overal mee, en hebben in die jaren een zee van tijd geïnvesteerd in het gebouw en terrein.
                </p>

                <p>
                    De oorspronkelijke groep krijgt tegenwoordig hulp van wat we noemen: beunploeg 2.0. De ene groep werkt op elke woensdag, de tweede 
                    beunploef enkele keren per jaar in het weekend. Je bereikt de beunploeg door te mailen naar: onderhoud@asgbreda.nl
                </p>
            </div>

            <div className='content-header'>
                <h1>
                    Onderhoud melden
                </h1>
            </div>
            
            <div className='page-content'>
                <p>
                    Is er iets mis aan het gebouw en wil je dit melden aan de beunploeg? Reparaties kan je altijden melden via E-mail: onderhoud@asgbreda.nl.
                    Is er iets kapot tijdens het verhuur van het gebouw? Neem dan direct contact op met de beheerder van het verhuur.
                </p>
            </div>
        </div>
        </>
    )
}

export default Beunloeg