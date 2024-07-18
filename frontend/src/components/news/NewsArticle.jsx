import './NewsArticle.scss';
import image from '../../assets/placeholder.png';

function NewsArticle() {
    return (
        <div className='news-article'>
            <div className='news-article-header'>
                <img src={image}></img>
                <h2>
                    Waarom hier?
                </h2>
            </div>
            <div className='news-article-body'>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>

                <a>
                    Lees meer {'>'}
                </a>
            </div>
        </div>
    )
}

export default NewsArticle