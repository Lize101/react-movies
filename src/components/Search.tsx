import { useState } from 'react';

interface FetchFunction {
    fetchMovies: (searchTerm: string) => void;
}

const Search = ({fetchMovies}: FetchFunction) => {

    const [value, setValue] = useState<string>('');

    return(
        <form onSubmit={(e) => {e.preventDefault(); fetchMovies(value);}}>
            <input type="text" placeholder="Search for a movie..." value={value} onChange={(e) => setValue(e.target.value)}/>
            <button type="submit">Search</button>
        </form>
    )
}

export default Search;