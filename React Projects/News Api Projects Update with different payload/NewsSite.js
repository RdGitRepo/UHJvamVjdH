import { useEffect, useState } from "react";
import NewsContent from "./NewsContent";
import LoadingBar from "react-top-loading-bar";
import Navbar from "./Navbar";


export default function NewSite(){
    const [params, setParams] = useState({category:"general", page:1})
    const [data, setData] = useState({});
    const [progress, setProgress] = useState(30);

    useEffect(() =>{
        async function fetchData(){
            try {
                const responce = await fetch(`https://newsapi.org/v2/everything?q=${params.category}&page=${params.page}&language=en&apiKey=${process.env.REACT_APP_APIKEY}`)
                setProgress(60)
                const parseData = await responce.json();
                setProgress(90)
                setData(parseData);
                console.log(parseData.articles.length)
                setProgress(100)
            } catch (error) {
                console.log(error.message)
            }
        }
        fetchData();
    }, [params])

    return (
        <>
            <LoadingBar color="red" progress={progress} onLoaderFinished={() => setProgress(0)}/>
            <Navbar params={params} onClick={(type) => setParams({category: type , page: 1})}/>
            <NewsContent articles={data.articles} prevPage={() => setParams({...params, page: params.page > 1 && params.page - 1})} nextPage={() => setParams({...params, page: params.page >= 1 && params.page + 1})}/>
        </>
    )
}