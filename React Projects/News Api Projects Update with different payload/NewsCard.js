export default function NewsCard({article}){
    return(
        <div className="newsCard">
            <div className="img">
                <img src={article.urlToImage} alt="NewsApi" />
            </div>
            <div className="newsInfo">
                <h1>{article.title}</h1>
                <p>{article.description}</p>
                <a href={article.url}>Read More</a>
            </div>
        </div>
    )
}