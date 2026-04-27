import Card from "./MovieCard";

const List = ({results}) => {

    return(
        <>
            <h2>Movie Options</h2>
            <div className="container">
                {results.map(res => {
                    return <Card key={res.imdbID} movie={res}/>
                })}
            </div>
        </>

    )
}

export default List;