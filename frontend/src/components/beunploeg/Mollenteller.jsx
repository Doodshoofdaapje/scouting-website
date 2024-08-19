import '../Page.scss';
import imgMol from '../../assets/mollenteller/mol.png';
import img2024 from '../../assets/mollenteller/2024.jpg';
import img2023 from '../../assets/mollenteller/2023.jpg';
import img2022 from '../../assets/mollenteller/2022.jpg';
import img2021 from '../../assets/mollenteller/2021.jpg';
import img2020 from '../../assets/mollenteller/2020.jpg';
import img2019 from '../../assets/mollenteller/2019.jpg';
import img2018 from '../../assets/mollenteller/2018.jpg';
import img2017 from '../../assets/mollenteller/2017.jpg';

import imgGerrit from '../../assets/mollenteller/gerrit.jpg';
import imgGras from '../../assets/mollenteller/gras.jpg';
import imgDead from '../../assets/mollenteller/dodemol.jpg';
import imgTrap from '../../assets/mollenteller/val.jpg';

function Mollenteller() {

    return(
        <>
        <div className="container">
            
            <div className='page-header'>
                <div>
                    <p>
                    Al jaren probeert Gerrit de mollen weg te vangen van ons grasveld.
                    Dat gebeurt steeds professioneler en op steeds grotere schaal.
                    Hij kreeg er al eens het Beunkeurmerk voor in 2014
                    </p>
                    <img src={imgMol}/>
                </div>
            </div>  
            
            <div className='content-header'>
                <h1>
                Mollenteller
                </h1>
            </div>


            <div className='image-gallery'>
                <div>
                    <img src={img2024}/>
                    <p>
                        19 april, mol 1
                    </p>
                </div>     

                <div>
                    <img src={img2023}/>
                    <p>
                        1 februari, mol 1 <br/>
                        21 november, mol 2 <br/>
                        22 december, mol 3
                    </p>
                </div>  

                <div>
                    <img src={img2022}/>
                    <p>
                        17 november, mol 1
                    </p>
                </div>  

                <div>
                    <img src={img2021}/>
                    <p>
                        21 september, mol 1 <br/>
                        7 oktober, mol 2 <br/>
                        27 oktober, mol 3 <br/>
                        3 november, mol 4 <br/>
                        10 november, mol 5 <br/>
                        26 december, mol 6
                    </p>
                </div>  

                <div>
                    <img src={img2020}/>
                    <p>
                        12 mei, mol 1 <br/>
                        5 oktober, mol 2 <br/>
                        11 oktober, mol 3 <br/>
                        18 oktober, mol 4
                    </p>
                </div>  

                <div>
                    <img src={img2019}/>
                    <p>
                        2 januari, mol 1 <br/>
                        8 januari, mol 2 <br/>
                        16 januari, mol 3 <br/>
                        25 april, mol 4 <br/>
                        26 april, mol 5 <br/>
                        18 december, mol 6
                    </p>
                </div>  

                <div>
                    <img src={img2018}/>
                    <p>
                        20 februari, mol 1 <br/>
                        6 maart, mol 2 <br/>
                        8 maart, mol 3 <br/>
                        17 sept, mol 4 <br/>
                        4 oktober, mol 5  <br/>
                        9 oktober, mol 6 <br/>
                        1 november, mol 7 <br/>
                        20 november, mol 8 <br/>
                        27 november, mol 9 <br/>
                        29 november, mol 10 <br/>
                        6 december, mol 11
                    </p>
                </div>  

                <div>
                    <img src={img2017}/>
                    <p>
                    </p>
                </div>  
            </div>

            <hr/>

            <div className='content-header'>
                <h1>
                    Afbeeldingen
                </h1>
            </div>

            <div className='image-gallery'>
                <div>
                    <img src={imgGerrit}/>
                    <hr/>
                </div>
                <div>
                    <img src={imgGras}/>
                    <hr/>
                </div>
                <div>
                    <img src={imgDead}/>
                    <hr/>
                </div>
                <div>
                    <img src={imgTrap}/>
                    <hr/>
                </div>
            </div>
        </div>
        </>
    )
}

export default Mollenteller