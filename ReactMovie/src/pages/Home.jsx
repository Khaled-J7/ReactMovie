import React from 'react';
import '../css/Home.css'
import MovieCard from '../components/MovieCard';
import { useState } from 'react';

const Home = () => {
	const [searchQuery, setSearchQuery] = useState('');
	const movies = [
		{ id: 2, title: 'The Shawshank Redemption', release_date: '1994' },
		{ id: 3, title: 'Pulp Fiction', release_date: '1994' },
		{ id: 4, title: 'The Dark Knight', release_date: '2008' },
		{ id: 5, title: 'Inception', release_date: '2010' },
		{ id: 6, title: 'Spirited Away', release_date: '2001' },
		{ id: 7, title: 'Parasite', release_date: '2019' },
		{ id: 8, title: 'Avengers: Endgame', release_date: '2019' },
	];

	const handleMovieSearch = () => {
		alert(searchQuery);
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
			<div className='movies-grid'>
				{movies.map((movie) => (
					<MovieCard movie={movie} key={movie.id} />
				))}
			</div>
		</div>
	);
};

export default Home;
