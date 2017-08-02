import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import moment from 'moment';
import { fetchPopularMovies, clearMovie } from '../actions';
import SearchBar from './search_bar';

class MoviesList extends Component {

	constructor(props) {
		super(props);
	}

	componentWillMount() {
		this.props.fetchPopularMovies();
		this.props.clearMovie(); // reset fetched movie
	}

	renderMovie(movie, i) {
		const releaseDate = moment(movie.release_date).calendar();
		return (

			<Link key={i} to={`/movies/${movie.id}`} className="movie-item-link">
				<div className="card">
					<div className="container">
						<p className="item-title">Movie Title: {movie.title}</p>
						<p className="item-release-date">Release Date: {releaseDate}</p>
					</div>
				</div>

			</Link>
		);
	}

	render() {
		var movies = this.props.movies.list.map(this.renderMovie);
		return (
			<div className="movies-list">
				<SearchBar />
				{movies}
			</div>
		);
	}
}

function mapStateToProps({ movies }) {
	return {
		movies
	}
}

export default connect(mapStateToProps, { fetchPopularMovies, clearMovie })(MoviesList);
