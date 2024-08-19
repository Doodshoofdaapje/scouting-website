import '../Page.scss';
import imgLogo from '../../assets/beunploeg/beungploeg-logo.png';
import img2003 from '../../assets/beunkenmerk/2003.jpg';
import img2004 from '../../assets/beunkenmerk/2004.jpg';
import img2005 from '../../assets/beunkenmerk/2005.jpg';
import img2006 from '../../assets/beunkenmerk/2006.jpg';
import img2007 from '../../assets/beunkenmerk/2007.jpg';
import img2008 from '../../assets/beunkenmerk/2008.jpg';
import img2009 from '../../assets/beunkenmerk/2009.jpg';
import img2010 from '../../assets/beunkenmerk/2010.jpg';
import img2011 from '../../assets/beunkenmerk/2011.jpg';
import img2012 from '../../assets/beunkenmerk/2012.jpg';
import img2013 from '../../assets/beunkenmerk/2013.jpg';
import img2014 from '../../assets/beunkenmerk/2014.jpg';
import img2015 from '../../assets/beunkenmerk/2015.jpg';
import img2016 from '../../assets/beunkenmerk/2016.jpg';
import img2017 from '../../assets/beunkenmerk/2017.jpg';
import img2018 from '../../assets/beunkenmerk/2018.jpg';
import img2019 from '../../assets/beunkenmerk/2019.jpg';
import img2020 from '../../assets/beunkenmerk/2020.jpg';
import img2021 from '../../assets/beunkenmerk/2021.jpg';
import img2022 from '../../assets/beunkenmerk/2022.jpg';


function Beunkeurmerk() {

    const imageArray = [img2022, img2021, img2020, img2019, img2018, img2017, img2016, img2015, img2014, img2013, 
        img2012, img2011, img2010, img2009, img2008, img2007, img2006, img2005, img2004, img2003];


    return(
        <>
        <div className="container">
            
            <div className='page-header'>
                <div>
                    <p>
                        Al jaren een traditie: De beunploeg reikt eens per jaar haar beunploeg keurmerk uit voor een prestatie binnen
                        de vereniging. Een gemeend teken van uitzonderlijke waardering.
                    </p>
                    <img src={imgLogo}/>
                </div>
            </div>  
            
            <div className='content-header'>
                <h1>
                Beunkeurmerk
                </h1>
            </div>
            
            <div className='image-gallery'>
                {imageArray.map((source)=> (
                    <div key={source}>
                        <img src={source}/>
                    </div>
                ))}
            </div>
            
        </div>
        </>
    )
}

export default Beunkeurmerk