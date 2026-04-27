const Card = ({movie}) => {
    return(
        <div className="card">
            <h3>{movie.Title}</h3>
            <img src={movie.Poster} alt={movie.Title}/>
            <p>{movie.Year}</p>
        </div>
    )
}

export default Card