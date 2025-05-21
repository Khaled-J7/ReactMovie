import React from 'react';
import '../css/Home.css';
import MovieCard from '../components/MovieCard';
import { getPopularMovies, searchMovies } from '../services/api';
import { useState, useEffect } from 'react';

const Home = () => {
	const [searchQuery, setSearchQuery] = useState('');
	const [movies, setMovies] = useState([]);
	// Whenever we fetch data from an api, it is common to set two variables or two states: one to store the loading state and one to store any potential error when calling or fetching the api
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const loadPopularMovies = async () => {
			try {
				const popularMovies = await getPopularMovies();
				setMovies(popularMovies);
			} catch (err) {
				console.error(err);
				setError('Failed to load movies...');
			} finally {
				setLoading(false); // means that we no longer loading
			}
		};

		loadPopularMovies();
	}, []);

	const handleMovieSearch = async (e) => {
		e.preventDefault();
		if (!searchQuery.trim()) return
		if (loading) return
		
		setLoading(true);
		
		try {
			const searchResults = await searchMovies(searchQuery);
			setMovies(searchResults);
			setError(null);
		} catch (err) {
			console.error(err);
			setError('Failed to search movies...');
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className='home'>
			<form onSubmit={handleMovieSearch} className='search-form'>
				<input
					type='text'
					placeholder='Search for movies...'
					className='search-input'
					value={searchQuery} // Connect the component to the state `searchQuery`
					onChange={(e) => setSearchQuery(e.target.value)}
				/>
				<button className='Search-btn' type='submit'>
					Search
				</button>
			</form>

			{error && <div className='error-message'>{error}</div>}

			{loading ? (
				<div className='loading'>Loading...</div>
			) : (
				<div className='movies-grid'>
					{movies.map((movie) => (
						<MovieCard movie={movie} key={movie.id} />
					))}
				</div>
			)}
		</div>
	);
};

export default Home;
