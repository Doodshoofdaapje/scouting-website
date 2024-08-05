import '../Page.scss';
import imgRSA from '../../assets/asg_speltakken/rsa.jpg';
import imgSpeltak from '../../assets/asg_speltakken/rsaspeltak.jpg';

function RSA() {
    return (
        <>
            <div className='container page-content'>
                <div className='content-header'>
                    <h1> Explorers (RSA) </h1>
                </div>
                
                <p>
                    Explorers zijn leden, jongen of meisje, van 15 tot en met 18 jaar. Het onderdeel wordt ook wel RSA genoemd: rowan en sherpa afdeling.
                    Rowan (jongen) en Sherpa (meisje) zijn de 'oude' namen voor dit onderdeel.
                    Ze maken samen plannen. Bepalen hun eigen avontuur. Daarom is geen dag hetzelfde. Van speleologie tot zingen, van kampvuur tot abseilen.  
                    Samen primitief kamperen, samen een dagje strand en samen lekker stappen.Plannen maken is één. Samen plannen uitvoeren is twee.  
                    Je moet er voor praten en luisteren, en besluiten nemen. Maar organiseren valt te leren. Want Explorer ben je gelukkig niet in je eentje. 
                    De taken worden verdeeld. Ieder speelt z'n eigen rol. Maar Explorer ben je niet vrijblijvend. Je hebt respect voor jezelf en voor anderen. 
                    Je wilt leren. Geen beter leven dan buitenleven. En daar moet je zuinig op zijn
                </p>

                <p>
                    Explorers zijn oud en wijs genoeg. Leiding heb je niet meer nodig. Begeleiding kan nog wel handig zijn. 
                    Van begeleiders mag je dus best wat verwachten. Niet dat ze je bezighouden. Geen voorgekookte activiteiten. 
                    Wel dat ze je net dat laatste zetje geven. Dat ze je een goeie reden geven om uit je luie stoel te komen. 
                    En een beetje hulp als het plan dreigt te stranden.
                    In de zomervakantie gaan ze op expeditie, meestal naar het buitenland. Dit onderdeel heeft bijeenkomsten op vrijdagavond van 20.00 tot 22.00  uur.
                </p>
                
                <div className='content-image'>
                    <img src={imgRSA}/>
                </div>

                <hr/>

                <p>
                    Alle explorerafdelingen in Nederland hebben een volgnummer, onze heet: RowanSherpaAfdeling 164.
                </p>

                <div className='content-image'>
                    <img src={imgSpeltak}/>
                </div>
                
            </div>  
        </>
    )
}

export default RSA;
