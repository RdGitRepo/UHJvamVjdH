export function Container({onResult}){
    return(
        <div className='container'>
            <button className="Rock" onClick={onResult}></button>
            <button className="Paper" onClick={onResult}></button>
            <button className="Scissors" onClick={onResult}></button>
        </div>
    )
}