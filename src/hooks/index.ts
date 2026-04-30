import moviesData from '@/data/movie-data';
import type { Movie } from '@/types';
import { useState } from 'react';
const storageKey = 'movies'; // best practice or something... ^_^
export function useLocalStorage() {
    const retriveMovies = (): Movie[] => {
        try {
            const data = localStorage.getItem(storageKey);
            if (!data) return [];
            const movies = JSON.parse(data);
            // should do some validation here but we just make sure the app doesn't crash
            if (!Array.isArray(movies)) return [];
            return movies as Movie[];
        } catch (e) {
            console.log(e);
            return [];
        }
    };

    const saveMovies = (movies: Movie[]) => {
        const existing = retriveMovies();
        for (let idx = 0; idx <= movies.length - 1; idx++) {
            const movie = existing[idx];
            const duplicateMovieIndex = existing.indexOf(movie);
            if (duplicateMovieIndex === -1) {
                existing.push(movie);
            } else {
                existing[idx] = movie;
            }
        }
        localStorage.setItem(storageKey, JSON.stringify(existing));
    };

    return { retriveMovies, saveMovies };
}

export function useMovies() {
    const { retriveMovies, saveMovies } = useLocalStorage();
    const [movies, setMovies] = useState(moviesData);

    const sortedMovies = movies.sort((a, b) => b.rating - a.rating);
    const topMovie = sortedMovies.at(0)!;
    const topThreeMovies = sortedMovies.slice(1, 4);
    const addMovie = (m: Movie) => {
        setMovies([...movies, m]);
        saveMovies(movies);
    };
    const deleteMovie = (id: string) => {
        setMovies(movies.filter((m) => m.id !== id));
    };
}
