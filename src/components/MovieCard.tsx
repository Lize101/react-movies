import type { Movie } from '../types';

interface MovieCard {
    movie: Movie;
}

const Card = ({ movie }: MovieCard) => {
    const {Title, Poster, Year } = movie;

    return(
        <div className="card">
            <h3>{Title}</h3>
            <img src={Poster !== 'N/A' ? Poster : '/placeholder-img.png'}
            alt={Title}
            onError={(e) => {
                    e.currentTarget.src = '/placeholder-img.png';
                }}/>
            <p>{Year}</p>
        </div>
    )
}

export default Card;