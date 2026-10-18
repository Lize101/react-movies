import { render, screen } from '@testing-library/react';
import { test, expect, describe } from 'vitest';
import Header from '../components/Header';


describe('Header', () => {
    test('h1 renders on the page', () => {
        render(<Header/>)
        expect(screen.getByText('OMDB Movie Search')).toBeInTheDocument()
    })

    test('p subtitle renders on the page', () => {
        render(<Header/>)
        expect(screen.getByText('Find your favourite movies')).toBeInTheDocument()
    })
})