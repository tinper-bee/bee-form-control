/**
 * @title 常用三种尺寸 Input
 * @description 
 */

import React, { Component } from 'react';
import FormControl from '../../src';

export default class Demo1 extends Component {
	
	render () {
		return (
			<div className="demo-form-control">
				<button onClick={this.onChange}></button>
				<span className="wraper"><FormControl placeholder="Enter text" size="sm"/>	</span>
				<span className="wraper"><FormControl placeholder="Enter text"/>	</span>
				<span className="wraper"><FormControl placeholder="Enter text" size="lg"/></span>
				<span className="wraper"><FormControl placeholder="Enter text" type="search" size="lg"/></span>	
			</div>
		)
	}
}