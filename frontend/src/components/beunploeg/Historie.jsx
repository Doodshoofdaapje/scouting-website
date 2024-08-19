import '../Page.scss';
import imgLogo from '../../assets/beunploeg/beungploeg-logo.png';
import img1966 from '../../assets/historie/1966.jpg';
import img1970 from '../../assets/historie/1970.jpg';
import img1985 from '../../assets/historie/1985.jpg';
import img1992 from '../../assets/historie/1992.jpg';
import img1994 from '../../assets/historie/1994.jpg';
import img1994a from '../../assets/historie/1994a.jpg';

function Historie() {

    const imageArray = [img1966, img1970, img1985, img1992, img1994, img1994a];

    return(
        <>
        <div className="container">
            
            <div className='page-header'>
                <div>
                    <p>
                        Voor de laatste 27 jaar is de beunploeg al verantwoordelijk voor het bijhouden van het gebouw en terrein van de ASG.
                    </p>
                    <img src={imgLogo}/>
                </div>
            </div>  
            
            <div className='content-header'>
                <h1>
                    Historie
                </h1>
            </div>
            
            {imageArray.map((source)=> (
                <div className='content-image' key={source}>
                    <img src={source}/>
                </div>
            ))}
            
        </div>
        </>
    )
}

export default Historie