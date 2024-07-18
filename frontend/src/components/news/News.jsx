import './News.scss';
import NewsArticle from './NewsArticle';

function News() {
    return (
        <div className='news-container'>
            <h1> Nieuws </h1>
            <NewsArticle/>
            <NewsArticle/>
        </div>
    )
}

export default News