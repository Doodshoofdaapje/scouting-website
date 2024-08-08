import '../Page.scss';
import imgInfographic from '../../assets/infographic.jpg';

function Infographic() {

    return(
        <>
        <div className="container">
            
            <div className='page-header'>
                <div>
                    <p>
                        Wil je alle informatie nog even op een rijtje zien? Dan is deze infographic perfect voor jou. We vatten in het kort alle speltaken en onze belangrijste
                        normen en waarden samen
                        
                    </p>
                </div>
            </div>  
            
            <div className='content-header'>
                <h1>
                    Infographic
                </h1>
            </div>
            
            <div className='content-image'>
                <img src={imgInfographic}/>
            </div>
        </div>
        </>
    )
}

export default Infographic