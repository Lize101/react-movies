# OMDB Movies

A movie search site that fetches and displays movies from the OMDB API.

## Features:

- Search box and search button to type and request movies
- A display of fetched movies from OMDB API - title, poster and date
- Responsive design using media queries
- Error handling using try/catch
- Loading state while fetching data
- Empty state handling when no results are found
- Disabled search button - cannot submit empty searches or white spaces

## Tech:

- Vite
- OMDB API
- React.js (including useState and useEffect)
- TypeScript
- Vitest
- CSS

## Screenshots (Desktop and Mobile):

<img src="public/Homepage Desktop.png" alt="Homepage Desktop" width="600">
<img src="public/Homepage Mobile.png" alt="Homepage Mobile" height="500">


## Future improvements:

To improve this project, I could add:
- short plot summary to each movie card
- filter options to filter by, for example release date, or alphabetical order (A-Z)
- pagination for large number of movie results e.g. over 10 per search

## Run the app locally:

1. Clone the repo from GitHub
2. Run `npm install`
3. Create a `.env` file in the root and add your API key as `VITE_OMDB_API_KEY=yourkey`
4. Run `npm run dev`

## Live Site:

[OMDB Movie Search](https://the-movies-search.vercel.app/)
