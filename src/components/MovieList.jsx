import Card from "./MovieCard";

const List = ({results}) => {

    return(
        <div>
            <h2>Movie Results</h2>
            {results.map(res => {
                return <Card key={res.imdbID} movie={res}/>
            })}
        </div>
    )
}

export default List;