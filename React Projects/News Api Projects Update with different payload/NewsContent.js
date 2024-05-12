import NewsCard from "./NewsCard"

export default function NewsContent({articles, prevPage, nextPage}){
    if(articles == null) return
    return (
        <section className="contentBody">
            <div className="newsContainer">
                {articles.map((article, index) => {
                    if(article.title === "[Removed]" && article.description === "[Removed]") return null ;
                    return (
                        <NewsCard key={index} article={article}/>
                    )
                })}
            </div>
            <div className="navigation">
                <button onClick={prevPage}>Prev Page</button>
                <button onClick={nextPage}>Next Page</button>
            </div>
            <div className="space"></div>
        </section>
    )
}