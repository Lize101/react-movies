import { test, expect, describe, vi, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import App from '../App';
import type { Movie } from '../types';

const testMovie: Movie = {
    Title: 'Batman',
    Year: '1990',
    imdbID: '940352',
    Type: 'movie',
    Poster: 'https://www.testimage.com/batman.jpg'
}

beforeEach(() => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
        ok: true,
        json: async () => ({Search: [testMovie]})
    }))
})

describe('App', () => {
    test('show loading state initially', () => {
        render(<App/>)
        expect(screen.getByText('Loading...')).toBeInTheDocument();
    })

    test('show no results found if no movies are found', async () => {
        vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
            ok: true,
            json: async () => ({Search: undefined})
        }))

        render(<App/>)
        await waitFor(() => {
            expect(screen.getByText('No results found')).toBeInTheDocument();
        })
    })

    test('show error message when fetch fails', async () => {
        vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
            ok: false,
            json: async () => ({Search: {}})
        }))
        render(<App/>)
        await waitFor(() => {
            expect(screen.getByText('There is a technical problem. We are working on this.')).toBeInTheDocument();
        })
    })
})