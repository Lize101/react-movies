import { render, screen } from '@testing-library/react';
import { test, expect, describe } from 'vitest';
import Card from '../components/MovieCard';
import type { Movie } from '../types';

const testMovie: Movie = {
    Title: "Batman",
    Year: "1990",
    imdbID: "48630250",
    Type: "movie",
    Poster: "https://testing/batman.jpg",
}

describe('Card', () => {
    test('Movie title is Batman', () => {
        render(<Card movie={testMovie}/>)
        expect(screen.getByText('Batman')).toBeInTheDocument()
    })

    test('Movie year is 1990', () => {
        render(<Card movie={testMovie}/>)
        expect(screen.getByText('1990')).toBeInTheDocument()
    })

    test('Movie image is in the document', () => {
        render(<Card movie={testMovie}/>)
        expect(screen.getByAltText('Batman')).toBeInTheDocument()
    })
})