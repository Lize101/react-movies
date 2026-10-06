const Card = ({movie}) => {
    return(
        <div className="card">
            <h3>{movie.Title}</h3>
            <img src={movie.Poster !== 'N/A' ? movie.Poster : '/placeholder-img.png'}
            alt={movie.Title}
            onError={(e) => {
                    e.currentTarget.src = '/placeholder-img.png';
                }}/>
            <p>{movie.Year}</p>
        </div>
    )
}

export default Card