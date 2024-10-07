import './News.scss';
import '../../Page.scss';
import News from './News';
function NewsPage() {
    return (
        <div className='container'>
            <div className='page-header'>
                <div>
                    <p>
                    De nieuwssectie van ASG geeft een kijkje in de bijzondere momenten en avonturen die onze 
                    scoutinggroep door de jaren heen heeft beleefd. Van spannende kampen en uitdagende hikes 
                    tot hechte vriendschappen en nieuwe tradities, hier vind je de verhalen die ons als groep vormen en verbinden. 
                    </p>
                </div>
            </div>  
            <News/>
        </div>
    )
}

export default NewsPage