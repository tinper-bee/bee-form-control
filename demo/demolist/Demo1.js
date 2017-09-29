/**
 * @title 常用三种尺寸 Input
 * @description 
 */

import React, { Component } from 'react';
import FormControl from '../../src';

export default class Demo1 extends Component {
	
	constructor(props) {
	      super(props);
	      this.state = {
	          value: "test"
	      }
	  }

	onChange = (e) => {
		this.setState({value:e})
	}

	render () {
		return (
			<div className="demo-form-control">
				<span className="wraper"><FormControl placeholder="Enter text" size="sm"/>	</span>
				<span className="wraper"><FormControl defaultValue={this.state.value} onChange={this.onChange}/>	</span>
				<span className="wraper"><FormControl value={this.state.value} placeholder="Enter text" size="lg"/></span>
				<span className="wraper"><FormControl defaultValue={this.state.value} placeholder="Enter text" type="search" size="lg"/></span>	
			</div>
		)
	}
}