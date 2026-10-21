import type { Movie } from '../types'

export async function searchMovies(searchTerm: string): Promise<Movie[]> {

    const term = searchTerm.trim().slice(0, 100)
    if (!term) return []

    const apiKey = import.meta.env.VITE_OMDB_API_KEY
    const url = `https://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(term)}`

    const res = await fetch(url)

    if (!res.ok) {
        throw new Error('Failed to fetch movies')
    }

    const data = await res.json()

    return data.Search || []
}