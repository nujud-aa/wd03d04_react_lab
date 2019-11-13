import React, {Component} from 'react'
import FilmRow from './FilmRow'


export default class Films extends Component {
	state ={
		filter: 'all'
	}
	handleFilterClick = (filter) => {
		this.setState({
			filter: filter
		})
		console.log(this)
	} 
	render() {
		let allFilms = (this.state.filter === 'faves'?this.props.faves: this.props.films).map((e,i) => <FilmRow title={e.title} poster_path={e.poster_path} releaseDate={e.release_date} key={e.id} onFaveToggle={() => this.props.onFaveToggle(e)} isFave={this.props.faves.includes(e)} handleDetailsClick={() => this.props.handleDetailsClick(e)}/>)
		return (
			<div className="film-list">
			    <h1 className="section-title">FILMS</h1>
			    <div className="film-list-filters">
			        <div onClick={() => this.handleFilterClick('all')}  className={`film-list-filter ${this.state.filter === 'all'? 'is-active': ''}`}>
			            ALL
			            <span className="section-count">{this.props.films.length}</span>
			        </div>
			        <div onClick={() => this.handleFilterClick('faves')} className={`film-list-filter ${this.state.filter === 'faves'? 'is-active': ''}`}>
			            FAVES
			            <span className="section-count">{this.props.faves.length}</span>
			        </div>
			    </div>

			    {allFilms}
			</div>
		)
	}
}