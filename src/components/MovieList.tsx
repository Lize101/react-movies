import Card from "./MovieCard";

import type { Movie } from "../types";

interface MovieList {
    results: Movie[];
}

const List = ({results}: MovieList) => {

    return(
        <>
            <h2>Movie Options</h2>
            <div className="container">
                {results.map(movie => {
                    return <Card key={movie.imdbID} movie={movie}/>
                })}
            </div>
        </>

    )
}

export default List;