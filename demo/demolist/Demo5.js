/**
 * @title 不同size Input
 * @description 
 */

import React, { Component } from 'react';
import Button from 'bee-button';
import FormControl from '../../src';

export default class Demo5 extends Component {
	
	constructor(props) {
      super(props);
      this.state = {
          value: "test"
      }
  	}
	onChange = (e) => {
		this.setState({value:e});
	}

	onSearch = (value) => {
		console.log("搜索"+value);
	}

	render () {
		return (
			<div className="wraper">
				<FormControl value={this.state.value} onSearch={this.onSearch} onChange={this.onChange} type="search"/>		
			</div>
			
		)
	}
}