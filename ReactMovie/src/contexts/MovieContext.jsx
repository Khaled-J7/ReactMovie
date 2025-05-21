// This File is kinda the state manager for the favorite movies
import { createContext, useState, useEffect, useContext } from 'react';

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

// The movie provider will provide state to any of the components that are wrapped around it
export const MovieProvider = ({ children }) => {
	const [favorites, setFavorites] = useState([]);

	useEffect(() => {
		const storedFavs = localStorage.getItem('favorites');
		if (storedFavs) {
			setFavorites(JSON.parse(storedFavs));
		}
	}, []);

	useEffect(() => {
		localStorage.setItem('favorites', JSON.stringify(favorites));
	}, [favorites]);

	const addToFavorites = (movie) => {
		setFavorites((prev) => [...prev, movie]);
	};

	const removeFromFavorites = (movieId) => {
		setFavorites((prev) => prev.filter((movie) => movie.id !== movieId));
	};

	const isFavorite = (movieId) => {
		return favorites.some((movie) => movie.id === movieId);
	};

    // Gather all the states and functions and passes them to the Context provider to make them accessible by the children props
	const value = {
		favorites,
		addToFavorites,
		removeFromFavorites,
		isFavorite,
	};

	return <MovieContext.Provider value={value}>{children}</MovieContext.Provider>;
};
