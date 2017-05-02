import React, { Component } from 'react';

class Range extends Component {
	constructor(props){
		super(props);
		this.state = {
			value:props.value
		}
	}

	static defaultProps = {
		min:0,
		max:245,
		step:1
	}

	onChange(event){
		this.props.onChange(this.state.value);
		this.setState({value:event.target.value});
	}

	render() {
		return (
			<div className="range">
				<input
					type="range"
					min={this.props.min}
					max={this.props.max}
					step={this.props.step}
					value={this.state.value}
					onChange={this.onChange.bind(this)}
				 />
			</div>
		);
	}
}

export default Range;
