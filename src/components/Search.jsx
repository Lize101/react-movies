import { useState } from 'react';

const Search = ({fetchMovies}) => {

    const [value, setValue] = useState('');

    return(
        <form onSubmit={(e) => {e.preventDefault(); fetchMovies(value);}}>
            <input type="text" placeholder="Search for a movie..." value={value} onChange={(e) => setValue(e.target.value)}/>
            <button type="submit">Search</button>
        </form>
    )
}

export default Search;