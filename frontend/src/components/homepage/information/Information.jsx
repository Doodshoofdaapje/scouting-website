import './Information.scss';

function Information() {
    return (
        <div className='information-container'>
            <div className='information-block'>
                <div>
                    <h2>Lid worden</h2>
                </div>
                <div>
                    <p>
                        Laat je uitdagen en ontdek Scouting! Al vanaf 5 jaar is er bij Scouting heel veel te beleven. 
                        Hoe ouder je bent, hoe groter en uitdagender het avontuur!
                    </p>
                    <a href="#/lidmaatschap">
                        Lees meer
                    </a>     
                </div>
                
            </div>
            <div className='information-block'>
                <div>
                    <h2>Verhuur</h2>
                </div>
                <div>
                    <p>
                        Een weekend weg met een vereniging? Kom langs bij ASG! We hebben een leuk gebouw met bereik tot alles 
                        wat Breda te bieden heeft.
                    </p>
                    <a href="#/verhuur">
                        Lees meer
                    </a>
                </div>
            </div>
            {/* <div className='information-block'>
                <div>
                    <h2></h2>
                </div>
                <div>
                    <p>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div> */}
        </div>
    )
}

export default Information