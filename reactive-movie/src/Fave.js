import React, {Component} from 'react'

export default class Fave extends Component {
	handleClick = (e)=>{
			e.stopPropagation()
			this.props.onFaveToggle()
		}
	render() {
		let isFave = this.props.isFave ? 'remove_from_queue' : 'add_to_queue';

		return (
			<div onClick={(e) => this.handleClick(e)} className="film-row-fave add_to_queue">
				<p className="material-icons" > {isFave}</p>
			</div>
		)
	}
}